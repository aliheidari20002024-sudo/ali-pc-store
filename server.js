const http = require("http");
const fs = require("fs");
const path = require("path");
const { DatabaseSync } = require("node:sqlite");

const PORT = process.env.PORT || 3000;
const PUBLIC_DIR = __dirname;
const DB_FILE = path.join(__dirname, "store.db");

// دیتابیس SQLite به صورت خودکار ساخته می‌شود.
const db = new DatabaseSync(DB_FILE);

db.exec(`
  CREATE TABLE IF NOT EXISTS products (
    id INTEGER PRIMARY KEY,
    name TEXT NOT NULL,
    cat TEXT NOT NULL,
    price INTEGER NOT NULL,
    old_price INTEGER,
    emoji TEXT,
    description TEXT,
    specs TEXT NOT NULL DEFAULT '[]'
  );

  CREATE TABLE IF NOT EXISTS orders (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    phone TEXT NOT NULL,
    address TEXT NOT NULL,
    items TEXT NOT NULL,
    total INTEGER NOT NULL,
    created_at TEXT NOT NULL,
    status TEXT NOT NULL DEFAULT 'pending'
  );

  CREATE TABLE IF NOT EXISTS messages (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    email TEXT NOT NULL,
    message TEXT NOT NULL,
    created_at TEXT NOT NULL,
    status TEXT NOT NULL DEFAULT 'pending'
  );
`);

try { db.exec("ALTER TABLE orders ADD COLUMN status TEXT NOT NULL DEFAULT 'pending'"); } catch (_) {}

const seedProducts = [
  {id:1,name:'لپ‌تاپ ASUS TUF Gaming F15',cat:'لپ‌تاپ',price:58900000,old:62500000,emoji:'💻',desc:'لپ‌تاپ گیمینگ قدرتمند برای بازی و کارهای سنگین',spec:['Core i7','RAM 16GB','SSD 1TB','RTX 4060']},
  {id:2,name:'لپ‌تاپ Lenovo LOQ 15',cat:'لپ‌تاپ',price:64900000,old:68000000,emoji:'💻',desc:'مناسب گیمینگ، برنامه‌نویسی و طراحی',spec:['Core i7','RAM 16GB','SSD 1TB','RTX 4060']},
  {id:3,name:'لپ‌تاپ HP Victus 15',cat:'لپ‌تاپ',price:51900000,old:54500000,emoji:'💻',desc:'انتخاب اقتصادی برای کار و بازی',spec:['Core i5','RAM 16GB','SSD 512GB','RTX 3050']},
  {id:4,name:'MacBook Air M3',cat:'لپ‌تاپ',price:79900000,old:83000000,emoji:'💻',desc:'سبک، سریع و مناسب برنامه‌نویسی',spec:['Apple M3','RAM 8GB','SSD 256GB','13.6 inch']},
  {id:5,name:'کارت گرافیک RTX 4060 ASUS',cat:'قطعات',price:35900000,old:38200000,emoji:'🎮',desc:'کارت گرافیک قدرتمند برای گیمینگ',spec:['8GB GDDR6','Ray Tracing','DLSS 3','HDMI']},
  {id:6,name:'کارت گرافیک RTX 4070 SUPER',cat:'قطعات',price:69900000,old:73500000,emoji:'🎮',desc:'قدرت بالا برای بازی و رندرینگ حرفه‌ای',spec:['12GB GDDR6X','DLSS 3','Ray Tracing','3 Fan']},
  {id:7,name:'پردازنده Intel Core i7-14700K',cat:'قطعات',price:42900000,old:45000000,emoji:'⚙️',desc:'پردازنده نسل جدید برای سیستم‌های حرفه‌ای',spec:['20 Core','28 Thread','5.6GHz','LGA1700']},
  {id:8,name:'پردازنده AMD Ryzen 7 7800X3D',cat:'قطعات',price:39900000,old:42000000,emoji:'⚙️',desc:'پردازنده محبوب گیمینگ',spec:['8 Core','16 Thread','5.0GHz','AM5']},
  {id:9,name:'RAM Corsair Vengeance 32GB',cat:'قطعات',price:11900000,old:12700000,emoji:'🧠',desc:'رم پرسرعت مناسب سیستم‌های گیمینگ',spec:['32GB','DDR5','6000MHz','2x16GB']},
  {id:10,name:'مادربرد MSI B760 Gaming',cat:'قطعات',price:16900000,old:17900000,emoji:'🧩',desc:'مادربرد حرفه‌ای با امکانات کامل',spec:['DDR5','Wi-Fi','LGA1700','PCIe 4.0']},
  {id:11,name:'SSD Samsung 990 PRO 1TB',cat:'ذخیره‌سازی',price:10900000,old:11600000,emoji:'💾',desc:'حافظه NVMe بسیار سریع',spec:['1TB','PCIe 4.0','Read 7450MB/s','M.2']},
  {id:12,name:'SSD WD Black SN850X 2TB',cat:'ذخیره‌سازی',price:18900000,old:20100000,emoji:'💾',desc:'ظرفیت بالا برای گیمینگ و پروژه‌ها',spec:['2TB','PCIe 4.0','Read 7300MB/s','M.2']},
  {id:13,name:'HDD WD Blue 2TB',cat:'ذخیره‌سازی',price:4900000,old:5300000,emoji:'💽',desc:'فضای ذخیره‌سازی اقتصادی',spec:['2TB','7200RPM','SATA','3.5 inch']},
  {id:14,name:'مانیتور LG UltraGear 27GP850',cat:'مانیتور',price:27900000,old:29900000,emoji:'🖥️',desc:'مانیتور گیمینگ سریع و باکیفیت',spec:['27 inch','QHD','165Hz','1ms']},
  {id:15,name:'مانیتور Samsung Odyssey G5',cat:'مانیتور',price:23900000,old:25500000,emoji:'🖥️',desc:'صفحه خمیده برای تجربه جذاب‌تر',spec:['32 inch','QHD','165Hz','1000R']},
  {id:16,name:'مانیتور ASUS TUF VG249Q1A',cat:'مانیتور',price:14900000,old:15900000,emoji:'🖥️',desc:'گزینه اقتصادی برای گیمینگ',spec:['24 inch','FHD','165Hz','1ms']},
  {id:17,name:'کیبورد مکانیکال Redragon K552',cat:'لوازم جانبی',price:4200000,old:4600000,emoji:'⌨️',desc:'کیبورد مکانیکال مقاوم با نورپردازی',spec:['Mechanical','RGB','USB','Anti-ghosting']},
  {id:18,name:'ماوس Logitech G502 HERO',cat:'گیمینگ',price:5800000,old:6200000,emoji:'🖱️',desc:'ماوس گیمینگ دقیق و حرفه‌ای',spec:['25600 DPI','11 Buttons','Wired','RGB']},
  {id:19,name:'هدست HyperX Cloud II',cat:'گیمینگ',price:6900000,old:7300000,emoji:'🎧',desc:'هدست محبوب برای بازی و مکالمه',spec:['7.1 Surround','USB','Mic','Comfort']},
  {id:20,name:'دسته بازی Xbox Wireless',cat:'گیمینگ',price:5900000,old:6300000,emoji:'🎮',desc:'دسته بی‌سیم برای کامپیوتر',spec:['Wireless','Bluetooth','PC','USB-C']},
  {id:21,name:'پاور Green GP850B',cat:'قطعات',price:9200000,old:9900000,emoji:'🔌',desc:'منبع تغذیه مناسب سیستم‌های قدرتمند',spec:['850W','80+ Bronze','ATX','Active PFC']},
  {id:22,name:'کیس Green Z5',cat:'قطعات',price:7600000,old:8100000,emoji:'🖥️',desc:'کیس جادار با طراحی گیمینگ',spec:['Mid Tower','ARGB','4 Fan','Tempered Glass']},
  {id:23,name:'وبکم Logitech C920',cat:'لوازم جانبی',price:6400000,old:6900000,emoji:'📷',desc:'وبکم Full HD برای کلاس و استریم',spec:['1080p','30fps','Stereo Mic','USB']},
  {id:24,name:'هاب USB-C Baseus',cat:'لوازم جانبی',price:2900000,old:3200000,emoji:'🔗',desc:'هاب چندکاره برای لپ‌تاپ',spec:['USB-C','HDMI','USB 3.0','PD']}
];

const count = db.prepare("SELECT COUNT(*) AS count FROM products").get().count;
if (Number(count) === 0) {
  const insert = db.prepare(`INSERT INTO products (id,name,cat,price,old_price,emoji,description,specs) VALUES (?,?,?,?,?,?,?,?)`);
  db.exec("BEGIN");
  try {
    for (const p of seedProducts) {
      insert.run(p.id, p.name, p.cat, p.price, p.old, p.emoji, p.desc, JSON.stringify(p.spec));
    }
    db.exec("COMMIT");
  } catch (error) {
    db.exec("ROLLBACK");
    throw error;
  }
  console.log("Database created and 24 products imported.");
}

function getProducts() {
  return db.prepare("SELECT id,name,cat,price,old_price AS old,emoji,description AS desc,specs FROM products ORDER BY id").all().map(p => ({
    ...p,
    spec: JSON.parse(p.specs || "[]")
  }));
}

function sendJson(res, status, data) {
  res.writeHead(status, {
    "Content-Type": "application/json; charset=utf-8",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type"
  });
  res.end(JSON.stringify(data));
}

function readBody(req) {
  return new Promise((resolve, reject) => {
    let body = "";
    req.on("data", chunk => {
      body += chunk;
      if (body.length > 1024 * 1024) {
        req.destroy();
        reject(new Error("Request body too large"));
      }
    });
    req.on("end", () => {
      try { resolve(body ? JSON.parse(body) : {}); }
      catch { reject(new Error("Invalid JSON")); }
    });
    req.on("error", reject);
  });
}

function serveFile(req, res) {
  let urlPath = decodeURIComponent(new URL(req.url, `http://${req.headers.host || "localhost"}`).pathname);
  if (urlPath === "/") urlPath = "/index.html";
  const safePath = path.normalize(urlPath).replace(/^([.][.][/\\])+/, "");
  const filePath = path.join(PUBLIC_DIR, safePath);
  if (!filePath.startsWith(PUBLIC_DIR)) { res.writeHead(403); return res.end("Forbidden"); }
  fs.readFile(filePath, (err, data) => {
    if (err) { res.writeHead(404, {"Content-Type":"text/plain; charset=utf-8"}); return res.end("File not found"); }
    const ext = path.extname(filePath).toLowerCase();
    const types = {".html":"text/html; charset=utf-8", ".css":"text/css; charset=utf-8", ".js":"application/javascript; charset=utf-8"};
    res.writeHead(200, {"Content-Type": types[ext] || "application/octet-stream"});
    res.end(data);
  });
}

const server = http.createServer(async (req, res) => {
  if (req.method === "OPTIONS") return sendJson(res, 204, {});
  const url = new URL(req.url, `http://${req.headers.host || "localhost"}`);

  try {
    if (url.pathname === "/api/health" && req.method === "GET") {
      return sendJson(res, 200, {success:true, message:"Backend and database are running", port:PORT});
    }

    if (url.pathname === "/api/products" && req.method === "GET") {
      return sendJson(res, 200, {success:true, products:getProducts()});
    }

    if (url.pathname === "/api/products" && req.method === "POST") {
      const body = await readBody(req);
      if (!body.name || !body.cat || !Number(body.price)) return sendJson(res, 400, {success:false,message:"name, cat and price are required"});
      const maxId = db.prepare("SELECT COALESCE(MAX(id),0) AS maxId FROM products").get().maxId;
      const id = Number(maxId) + 1;
      db.prepare("INSERT INTO products (id,name,cat,price,old_price,emoji,description,specs) VALUES (?,?,?,?,?,?,?,?)")
        .run(id, String(body.name), String(body.cat), Number(body.price), Number(body.old || body.price), String(body.emoji || "💻"), String(body.desc || ""), JSON.stringify(Array.isArray(body.spec) ? body.spec : []));
      return sendJson(res, 201, {success:true, product:getProducts().find(p => p.id === id)});
    }

    if (url.pathname.startsWith("/api/products/") && req.method === "PUT") {
      const id = Number(url.pathname.split("/").pop());
      const body = await readBody(req);
      if (!id || !body.name || !body.cat || !Number(body.price)) {
        return sendJson(res, 400, {success:false,message:"id, name, cat and price are required"});
      }
      const result = db.prepare(`UPDATE products SET name=?,cat=?,price=?,old_price=?,emoji=?,description=?,specs=? WHERE id=?`)
        .run(String(body.name), String(body.cat), Number(body.price), Number(body.old || body.price), String(body.emoji || "💻"), String(body.desc || ""), JSON.stringify(Array.isArray(body.spec) ? body.spec : []), id);
      if (!result.changes) return sendJson(res, 404, {success:false,message:"Product not found"});
      return sendJson(res, 200, {success:true,product:getProducts().find(p => p.id === id)});
    }

    if (url.pathname.startsWith("/api/products/") && req.method === "DELETE") {
      const id = Number(url.pathname.split("/").pop());
      const result = db.prepare("DELETE FROM products WHERE id = ?").run(id);
      if (!result.changes) return sendJson(res, 404, {success:false,message:"Product not found"});
      return sendJson(res, 200, {success:true,message:"Product deleted"});
    }

    if (url.pathname === "/api/orders" && req.method === "POST") {
      const body = await readBody(req);
      if (!body.name || !body.phone || !body.address || !Array.isArray(body.items) || !body.items.length) {
        return sendJson(res, 400, {success:false,message:"نام، شماره تماس، آدرس و اقلام سفارش الزامی هستند."});
      }
      const products = getProducts();
      const items = body.items.map(item => {
        const product = products.find(p => p.id === Number(item.id));
        const qty = Math.max(1, Number(item.qty) || 1);
        if (!product) return null;
        return {id:product.id,name:product.name,price:product.price,qty};
      }).filter(Boolean);
      if (!items.length) return sendJson(res, 400, {success:false,message:"محصول معتبری در سفارش وجود ندارد."});
      const total = items.reduce((sum,item) => sum + item.price * item.qty, 0);
      const createdAt = new Date().toISOString();
      const result = db.prepare("INSERT INTO orders (name,phone,address,items,total,created_at) VALUES (?,?,?,?,?,?)")
        .run(String(body.name).trim(), String(body.phone).trim(), String(body.address).trim(), JSON.stringify(items), total, createdAt);
      console.log(`New order #${result.lastInsertRowid} - ${total.toLocaleString("fa-IR")} تومان`);
      return sendJson(res, 201, {success:true,message:"سفارش با موفقیت ثبت شد",orderId:Number(result.lastInsertRowid)});
    }

    if (url.pathname === "/api/orders" && req.method === "GET") {
      const orders = db.prepare("SELECT id,name,phone,address,items,total,created_at,status FROM orders ORDER BY id DESC").all().map(o => ({...o, items: JSON.parse(o.items || "[]")}));
      return sendJson(res, 200, {success:true,orders});
    }

    if (url.pathname.startsWith("/api/orders/") && req.method === "PUT") {
      const id = Number(url.pathname.split("/").pop());
      const body = await readBody(req);
      const allowed = ["pending", "paid", "preparing", "shipped", "completed"];
      if (!id || !allowed.includes(body.status)) return sendJson(res, 400, {success:false,message:"وضعیت سفارش نامعتبر است."});
      const result = db.prepare("UPDATE orders SET status=? WHERE id=?").run(body.status, id);
      if (!result.changes) return sendJson(res, 404, {success:false,message:"سفارش پیدا نشد."});
      return sendJson(res, 200, {success:true,message:"وضعیت سفارش به‌روزرسانی شد."});
    }

    if (url.pathname === "/api/messages" && req.method === "GET") {
      const messages = db.prepare("SELECT id,name,email,message,created_at FROM messages ORDER BY id DESC").all();
      return sendJson(res, 200, {success:true,messages});
    }

    if (url.pathname === "/api/contact" && req.method === "POST") {
      const body = await readBody(req);
      if (!body.name || !body.email || !body.message) return sendJson(res, 400, {success:false,message:"نام، ایمیل و پیام الزامی هستند."});
      const result = db.prepare("INSERT INTO messages (name,email,message,created_at) VALUES (?,?,?,?)")
        .run(String(body.name).trim(), String(body.email).trim(), String(body.message).trim(), new Date().toISOString());
      return sendJson(res, 201, {success:true,message:"پیام با موفقیت دریافت شد",messageId:Number(result.lastInsertRowid)});
    }

    if (req.method === "GET") return serveFile(req, res);
    return sendJson(res, 404, {success:false,message:"Route not found"});
  } catch (error) {
    console.error(error);
    return sendJson(res, 500, {success:false,message:"خطای داخلی سرور", error:error.message});
  }
});

server.keepAliveTimeout = 120000;
server.headersTimeout = 120000;

server.listen(PORT, "0.0.0.0" , () => {
  console.log("====================================");
  console.log("Ali PC Store Backend + SQLite");
  console.log("Server: http://localhost:" + PORT);
  console.log("Database: " + DB_FILE);
  console.log("Products API: http://localhost:" + PORT + "/api/products");
  console.log("====================================");
});
