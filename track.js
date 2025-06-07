export default async function handler(req, res) {
  const ip =
    req.headers["x-forwarded-for"] || req.connection.remoteAddress || "Desconhecido";

  const geo = await fetch(`https://ipapi.co/${ip}/json/`).then((r) => r.json());

  console.log("🔍 Visitante detectado:");
  console.log("IP:", ip);
  console.log("País:", geo.country_name);
  console.log("Cidade:", geo.city);
  console.log("Org:", geo.org);
  console.log("User-Agent:", req.body.ua);

  res.status(200).json({ success: true });
}