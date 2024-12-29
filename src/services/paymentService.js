import axios from "axios";

const PAYPAL_API_BASE_URL = "https://api-m.sandbox.paypal.com"; // Thay bằng URL thật nếu không dùng sandbox
const CLIENT_ID = "YOUR_PAYPAL_CLIENT_ID";
const CLIENT_SECRET = "YOUR_PAYPAL_CLIENT_SECRET";

// Tạo Access Token từ PayPal API
const getAccessToken = async () => {
  try {
    const response = await axios.post(
      `${PAYPAL_API_BASE_URL}/v1/oauth2/token`,
      "grant_type=client_credentials",
      {
        auth: {
          username: CLIENT_ID,
          password: CLIENT_SECRET,
        },
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      }
    );
    return response.data.access_token;
  } catch (error) {
    console.error("Error fetching PayPal access token:", error);
    throw new Error("Không thể lấy token từ PayPal.");
  }
};

// Tạo một order mới trên PayPal
const createOrder = async (orderDetails) => {
  try {
    const token = await getAccessToken();
    const response = await axios.post(
      `${PAYPAL_API_BASE_URL}/v2/checkout/orders`,
      {
        intent: "CAPTURE",
        purchase_units: [
          {
            amount: {
              currency_code: "USD",
              value: orderDetails.totalAmount,
            },
          },
        ],
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error creating PayPal order:", error);
    throw new Error("Không thể tạo order PayPal.");
  }
};

// Capture một order sau khi người dùng thanh toán
const captureOrder = async (orderId) => {
  try {
    const token = await getAccessToken();
    const response = await axios.post(
      `${PAYPAL_API_BASE_URL}/v2/checkout/orders/${orderId}/capture`,
      {},
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error capturing PayPal order:", error);
    throw new Error("Không thể capture order PayPal.");
  }
};

export default {
  getAccessToken,
  createOrder,
  captureOrder,
};