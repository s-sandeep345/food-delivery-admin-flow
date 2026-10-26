export const nav=[['Dashboard & Analytics','/','LayoutDashboard'],['Order Management','/orders','ShoppingBag'],['Restaurant & Menu','/restaurants','Store'],['Delivery Partners','/partners','Bike'],['Customers','/customers','Users'],['Payments & Finance','/finance','Wallet'],['Offers & Promotions','/promotions','TicketPercent'],['Support, Reports & Settings','/support','LifeBuoy']];
export const seedOrders=[
{id:'QB-10482',customer:'Olivia Martin',restaurant:'The Green Bowl',items:'2 items',total:28.5,status:'Preparing',payment:'Paid',time:'10:42 AM'},
{id:'QB-10481',customer:'Noah Williams',restaurant:'Burger District',items:'3 items',total:42,status:'On the way',payment:'Paid',time:'10:38 AM'},
{id:'QB-10480',customer:'Emma Johnson',restaurant:'Saffron Kitchen',items:'4 items',total:56.75,status:'Pending',payment:'Pending',time:'10:31 AM'},
{id:'QB-10479',customer:'Liam Brown',restaurant:'Pizza Palette',items:'1 item',total:19.99,status:'Delivered',payment:'Paid',time:'10:19 AM'},
{id:'QB-10478',customer:'Ava Davis',restaurant:'Nori & Co.',items:'2 items',total:34.25,status:'Cancelled',payment:'Refunded',time:'10:04 AM'},
{id:'QB-10477',customer:'Ethan Wilson',restaurant:'The Green Bowl',items:'3 items',total:31.4,status:'Confirmed',payment:'Paid',time:'9:58 AM'},
{id:'QB-10476',customer:'Sophia Garcia',restaurant:'Tandoori House',items:'2 items',total:25,status:'Delivered',payment:'Paid',time:'9:45 AM'}];
export const seedRestaurants=[
{name:'The Green Bowl',type:'Healthy · Salads',location:'Banjara Hills',orders:1842,rating:'4.9',commission:'18%',status:'Approved'},
{name:'Burger District',type:'Burgers · Fast Food',location:'Jubilee Hills',orders:1630,rating:'4.7',commission:'20%',status:'Approved'},
{name:'Saffron Kitchen',type:'Indian · Biryani',location:'Madhapur',orders:1284,rating:'4.8',commission:'18%',status:'Pending'},
{name:'Pizza Palette',type:'Pizza · Italian',location:'Gachibowli',orders:1098,rating:'4.6',commission:'16%',status:'Approved'},
{name:'Nori & Co.',type:'Japanese · Sushi',location:'Kondapur',orders:892,rating:'4.5',commission:'20%',status:'Review'}];
export const seedPartners=[
{name:'Arjun Kumar',vehicle:'Honda Activa · TS09AB1234',deliveries:284,rating:'4.9',earnings:'₹18,450',status:'Online'},
{name:'Priya Sharma',vehicle:'TVS Jupiter · TS10CD5678',deliveries:241,rating:'4.8',earnings:'₹16,200',status:'On delivery'},
{name:'Rohan Das',vehicle:'Hero Splendor · TS08EF9012',deliveries:198,rating:'4.7',earnings:'₹14,850',status:'Offline'},
{name:'Meera Patel',vehicle:'Honda Activa · TS09GH3456',deliveries:176,rating:'4.9',earnings:'₹13,600',status:'Online'}];
export const seedCustomers=[
{name:'Olivia Martin',email:'olivia.m@example.com',orders:24,spent:'₹18,420',joined:'Aug 12, 2026',status:'Active'},
{name:'Noah Williams',email:'noah.w@example.com',orders:18,spent:'₹12,800',joined:'Aug 08, 2026',status:'Active'},
{name:'Emma Johnson',email:'emma.j@example.com',orders:16,spent:'₹10,650',joined:'Jul 29, 2026',status:'Active'},
{name:'Ava Davis',email:'ava.d@example.com',orders:9,spent:'₹5,890',joined:'Jul 04, 2026',status:'Restricted'}];
export const seedPromos=[{code:'WELCOME20',title:'Welcome offer',type:'First order',discount:'20% off',uses:1240,limit:2000,expiry:'Nov 30, 2026',status:'Active'},{code:'LUNCH150',title:'Lunch hour special',type:'Minimum ₹499',discount:'₹150 off',uses:846,limit:1200,expiry:'Oct 31, 2026',status:'Active'},{code:'FESTIVE25',title:'Festive feast',type:'All customers',discount:'25% off',uses:410,limit:800,expiry:'Nov 02, 2026',status:'Scheduled'}];
export const seedTickets=[{id:'TK-2084',subject:'Order arrived cold',customer:'Olivia Martin',category:'Order issue',priority:'High',status:'Open',updated:'4 min ago'},{id:'TK-2083',subject:'Refund not received',customer:'Noah Williams',category:'Payments',priority:'High',status:'In progress',updated:'18 min ago'},{id:'TK-2082',subject:'Restaurant menu update',customer:'Saffron Kitchen',category:'Restaurant',priority:'Normal',status:'Open',updated:'42 min ago'}];