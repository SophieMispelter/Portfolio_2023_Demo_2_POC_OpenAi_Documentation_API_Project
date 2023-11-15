// import { Configuration, OpenAIApi } from "openai";
import OpenAI from "openai";
import { OPENAI_API_KEY } from "./constants";

// const configuration = new Configuration({
//   apiKey: OPENAI_API_KEY,
// });

// const openai = new OpenAIApi(configuration);

const openai = new OpenAI({
  apiKey: OPENAI_API_KEY,
  dangerouslyAllowBrowser: true,
});

export async function getImagesFromOpenAi() {
  try {
    const response = await openai.images.generate({
      model: "dall-e-2",
      prompt: "Phobos, a natural satellite",
      n: 1,
      size: "256x256",
    });
    let image_url = response.data[0].url;
    console.log("image_url: ", image_url);
    console.log("response: ", response);
    return image_url;
  } catch (error) {
    console.log("error: ", error);
  }
}
