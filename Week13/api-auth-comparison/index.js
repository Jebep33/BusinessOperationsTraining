import fetch from "node-fetch";
import dotenv from "dotenv";
dotenv.config();

const TOKEN = process.env.GITHUB_TOKEN;
const username = "octocat";
const url = `https://api.github.com/users/${username}`;

async function testHeaderAuth() {
  try {
    const response = await fetch(url, {
      headers: {
        Authorization: `Bearer ${TOKEN}`,
        "User-Agent": "Auth-Demo-App",
        Accept: "application/vnd.github+json",
      },
    });

    console.log("✅ Header Auth Attempt:", response.status, response.statusText);
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error("❌ Error:", error.message);
  }
}

testHeaderAuth();

