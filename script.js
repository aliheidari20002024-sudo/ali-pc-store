const products=[
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
let cart=JSON.parse(localStorage.getItem('pc_cart')||'[]'), wishlist=JSON.parse(localStorage.getItem('pc_wishlist')||'[]'), activeCat='همه';
const $=s=>document.querySelector(s), $$=s=>document.querySelectorAll(s), money=n=>n.toLocaleString('fa-IR')+' تومان';
function save(){localStorage.setItem('pc_cart',JSON.stringify(cart));localStorage.setItem('pc_wishlist',JSON.stringify(wishlist))}
function toast(t){const x=$('#toast');x.textContent=t;x.classList.add('show');setTimeout(()=>x.classList.remove('show'),2200)}
function render(){const q=$('#search').value.trim().toLowerCase();let arr=products.filter(p=>(activeCat==='همه'||p.cat===activeCat)&&(!q||p.name.toLowerCase().includes(q)||p.cat.toLowerCase().includes(q)));const sort=$('#sort').value;if(sort==='low')arr.sort((a,b)=>a.price-b.price);if(sort==='high')arr.sort((a,b)=>b.price-a.price);if(sort==='name')arr.sort((a,b)=>a.name.localeCompare(b.name));$('#productsGrid').innerHTML=arr.map(p=>`<article class="product"><button class="wish ${wishlist.includes(p.id)?'on':''}" data-wish="${p.id}">${wishlist.includes(p.id)?'♥':'♡'}</button><div class="product-img">${p.emoji}</div><div class="product-body"><span class="product-cat">${p.cat}</span><h3>${p.name}</h3><p>${p.desc}</p><div><span class="price">${money(p.price)}</span><span class="old">${money(p.old)}</span></div><div class="product-actions"><button data-detail="${p.id}">جزئیات</button><button class="add" data-add="${p.id}">افزودن</button></div></div></article>`).join('');$('#empty').classList.toggle('hidden',arr.length>0);$$('[data-wish]').forEach(b=>b.onclick=()=>toggleWish(+b.dataset.wish));$$('[data-add]').forEach(b=>b.onclick=()=>addCart(+b.dataset.add));$$('[data-detail]').forEach(b=>b.onclick=()=>detail(+b.dataset.detail));renderCart()}
function setCat(cat){activeCat=cat;$$('#filters button').forEach(b=>b.classList.toggle('active',b.dataset.cat===cat));$('#products').scrollIntoView({behavior:'smooth'});render()}
function addCart(id){const item=cart.find(x=>x.id===id);if(item)item.qty++;else cart.push({id,qty:1});save();renderCart();toast('محصول به سبد خرید اضافه شد')}
function changeQty(id,d){const x=cart.find(i=>i.id===id);if(!x)return;x.qty+=d;if(x.qty<=0)cart=cart.filter(i=>i.id!==id);save();renderCart()}
function renderCart(){const count=cart.reduce((s,x)=>s+x.qty,0),total=cart.reduce((s,x)=>s+x.qty*products.find(p=>p.id===x.id).price,0);$('#cartCount').textContent=count.toLocaleString('fa-IR');$('#cartTotal').textContent=money(total);$('#cartItems').innerHTML=cart.length?cart.map(x=>{const p=products.find(a=>a.id===x.id);return `<div class="cart-item"><div class="emoji">${p.emoji}</div><div><h4>${p.name}</h4><small>${money(p.price)}</small></div><div class="qty"><button data-minus="${p.id}">−</button><b>${x.qty}</b><button data-plus="${p.id}">+</button></div></div>`}).join(''):'<div class="empty">سبد خرید خالی است.</div>';$$('[data-minus]').forEach(b=>b.onclick=()=>changeQty(+b.dataset.minus,-1));$$('[data-plus]').forEach(b=>b.onclick=()=>changeQty(+b.dataset.plus,1))}
function toggleWish(id){wishlist.includes(id)?wishlist=wishlist.filter(x=>x!==id):wishlist.push(id);save();render();toast(wishlist.includes(id)?'به علاقه‌مندی‌ها اضافه شد':'از علاقه‌مندی‌ها حذف شد')}
function detail(id){const p=products.find(x=>x.id===id);$('#modalContent').innerHTML=`<div class="detail"><div class="big">${p.emoji}</div><span class="product-cat">${p.cat}</span><h2>${p.name}</h2><p>${p.desc}</p><div class="detail-price">${money(p.price)}</div><ul>${p.spec.map(s=>`<li>${s}</li>`).join('')}</ul><button class="primary" onclick="addCart(${p.id});closeModal()">افزودن به سبد خرید</button></div>`;$('#modal').classList.remove('hidden')}
function closeModal(){$('#modal').classList.add('hidden')}
function checkout(){
  if(!cart.length){
    toast('سبد خرید خالی است');
    return;
  }

  $('#modalContent').innerHTML=
    <div class="checkout-box">
      <h2>ثبت سفارش</h2>
      <input id="orderName" placeholder="نام و نام خانوادگی" required>
      <input id="orderPhone" placeholder="شماره تماس" required>
      <textarea id="orderAddress" rows="4" placeholder="آدرس تحویل" required></textarea>
      <button class="primary" id="sendOrder">ثبت سفارش</button>
    </div>
  ;

  $('#modal').classList.remove('hidden');

  $('#sendOrder').onclick=async()=>{
    const name=$('#orderName').value.trim();
    const phone=$('#orderPhone').value.trim();
    const address=$('#orderAddress').value.trim();

    if(!name){toast('نام را وارد کنید');return}
    if(!phone){toast('شماره تماس را وارد کنید');return}
    if(!address){toast('آدرس را وارد کنید');return}

    const button=$('#sendOrder');
    button.disabled=true;
    button.textContent='در حال ثبت...';

    try{
      const response=await fetch('/api/orders',{
        method:'POST',
        headers:{'Content-Type':'application/json'},
        body:JSON.stringify({name,phone,address,items:cart})
      });

      const data=await response.json();

      if(!response.ok||!data.success){
        throw new Error(data.message||'ثبت سفارش ناموفق بود');
      }

      cart=[];
      save();
      renderCart();
      closeModal();
      closeCart();
      toast(سفارش شماره ${data.orderId} با موفقیت ثبت شد);
    }catch(error){
      button.disabled=false;
      button.textContent='ثبت سفارش';
      toast(error.message||'خطا در ثبت سفارش');
    }
  };
}

function openCart(){$('#cartPanel').classList.add('open');$('#overlay').classList.add('show')}function closeCart(){$('#cartPanel').classList.remove('open');$('#overlay').classList.remove('show')}
$('#search').oninput=render;$('#sort').onchange=render;$$('#filters button').forEach(b=>b.onclick=()=>setCat(b.dataset.cat));$$('.cats button').forEach(b=>b.onclick=()=>setCat(b.dataset.cat));$('#cartBtn').onclick=openCart;$('#closeCart').onclick=closeCart;$('#overlay').onclick=closeCart;$('#checkout').onclick=checkout;$('#closeModal').onclick=closeModal;$('#modal').onclick=e=>{if(e.target.id==='modal')closeModal()};$('#menuBtn').onclick=()=>{const n=$('#mainNav');n.style.display=n.style.display==='flex'?'none':'flex'};$('#themeBtn').onclick=()=>{document.body.classList.toggle('dark');localStorage.setItem('pc_theme',document.body.classList.contains('dark')?'dark':'light')};if(localStorage.getItem('pc_theme')==='dark')document.body.classList.add('dark');$('#contactForm').onsubmit=e=>{e.preventDefault();toast('پیام شما به‌صورت نمایشی ارسال شد');e.target.reset()};render();
