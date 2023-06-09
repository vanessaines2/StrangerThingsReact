export const COHORT_NAME = "2301-FTB-ET-WEB-AM";
export const BASE_URL = `https://strangers-things.herokuapp.com/api/${COHORT_NAME}`;

export async function postMessage(postId, token, messageContent) {
  try {
    const response = await fetch(`${BASE_URL}/posts/${postId}/messages`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        message: {
          content: messageContent,
        },
      }),
    });
    const result = await response.json();
    console.log(result, "result from post message ");
    return result;
  } catch (error) {
    console.log(error);
  }
}
