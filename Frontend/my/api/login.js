export default function handler(req, res) {
  const uname = "saranya";
  const pass = "123";

  if (req.method === "GET") {
    const { username, password } = req.query;

    if (username === uname && password === pass) {
      res.status(200).json({ success: true, message: "Login successful" });
    } else {
      res.status(401).json({ success: false, message: "Invalid credentials" });
    }
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}
