'use client';

import { useState } from 'react';

const roles = ['student', 'courier', 'admin'] as const;
type Role = (typeof roles)[number];

const restaurants = [
  { name: 'Beke Cafe', tag: 'Popular', rating: '4.8', type: 'Coffee • Tea • Breakfast', time: '15–25 min' },
  { name: 'Mekelle Bite', tag: 'Top Rated', rating: '4.9', type: 'Fast Food • Grill', time: '20–30 min' },
  { name: 'Green Corner', tag: 'Healthy', rating: '4.7', type: 'Salads • Smoothies', time: '12–20 min' },
];

const paymentOptions = ['Telebirr', 'CBE Birr', 'CBE Direct Transfer', 'Cash on Delivery'];

const menuItems = [
  { name: 'Special Doro Wet', price: 220, desc: 'Chicken stew, injera, peppers, and salad.', tint: 'from-yellow-300 to-orange-400' },
  { name: 'Chicken Burger Deluxe', price: 180, desc: 'Cheese, lettuce, tomato, and crunchy fries.', tint: 'from-violet-300 to-indigo-500' },
  { name: 'Cold Coffee', price: 95, desc: 'Iced latte with caramel and oat milk.', tint: 'from-sky-300 to-blue-500' },
];

export default function HomePage() {
  const [role, setRole] = useState<Role>('student');
  const [activePayment, setActivePayment] = useState(paymentOptions[0]);
  const [online, setOnline] = useState(true);

  return (
    <main className="min-h-screen bg-slate-100 p-4 lg:p-8">
      <div className="mx-auto max-w-md overflow-hidden rounded-[28px] border border-slate-200 bg-slate-50 shadow-[0_20px_60px_rgba(15,23,42,0.08)]">
        <div className="flex h-11 items-center justify-between border-b border-slate-200 bg-white px-5 text-xs font-bold text-slate-800">
          <span>9:41</span>
          <div className="flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-emerald-500" />
            <span className="h-2.5 w-2.5 rounded-full bg-amber-500" />
            <span className="h-2.5 w-2.5 rounded-full bg-red-500" />
          </div>
        </div>

        <header className="flex items-center justify-between border-b border-slate-200 bg-white px-4 py-4">
          <div className="flex items-center gap-3">
            <div className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-emerald-600 to-green-400 font-black text-white">A</div>
            <div>
              <div className="text-[10px] uppercase tracking-[0.12em] text-slate-500">Ambo</div>
              <div className="text-sm font-bold text-slate-900">Campus Delivery</div>
            </div>
          </div>
          <button className="grid h-9 w-9 place-items-center rounded-xl bg-slate-100 text-lg text-emerald-700">🔔</button>
        </header>

        <nav className="grid grid-cols-3 gap-2 border-b border-slate-200 bg-white px-4 py-3">
          {roles.map((item) => (
            <button
              key={item}
              onClick={() => setRole(item)}
              className={`rounded-xl px-3 py-2 text-xs font-extrabold uppercase tracking-wide transition ${
                role === item ? 'bg-emerald-600 text-white shadow-lg shadow-emerald-200' : 'bg-slate-100 text-slate-500'
              }`}
            >
              {item}
            </button>
          ))}
        </nav>

        <div className="p-4 pb-8">
          {role === 'student' && (
            <div className="space-y-4">
              <section className="overflow-hidden rounded-[22px] bg-gradient-to-br from-emerald-700 via-emerald-600 to-green-500 p-5 text-white shadow-xl shadow-emerald-200">
                <div className="mb-3 flex items-center justify-between text-xs font-medium text-emerald-50">
                  <span>Good morning, Abel</span>
                  <span>ETB 1,450</span>
                </div>
                <h1 className="max-w-[220px] text-3xl font-black leading-tight">Craving something near your block?</h1>
                <p className="mt-2 text-sm text-emerald-50/90">Fresh food, coffee, and essentials delivered fast across campus.</p>
                <div className="mt-4 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-2 text-xs font-semibold backdrop-blur-sm">
                  📍 Block C • Gate 2 • Main Campus
                </div>
              </section>

              <div className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-white px-3 py-3 shadow-sm">
                <span className="text-lg text-slate-500">⌕</span>
                <input className="w-full border-none bg-transparent text-sm text-slate-500 outline-none" defaultValue="Search restaurants, coffee, tea..." />
              </div>

              <div className="flex gap-2 overflow-x-auto pb-1">
                {['All', 'Fast Food', 'Coffee', 'Tea House', 'Healthy'].map((item, idx) => (
                  <button key={item} className={`whitespace-nowrap rounded-full border px-3 py-2 text-[11px] font-bold ${idx === 0 ? 'border-emerald-200 bg-emerald-50 text-emerald-700' : 'border-slate-200 bg-white text-slate-500'}`}>
                    {item}
                  </button>
                ))}
              </div>

              <div className="mt-2 flex items-center justify-between">
                <h2 className="text-lg font-black text-slate-900">Restaurants near you</h2>
                <span className="text-[11px] font-bold text-slate-500">12 open now</span>
              </div>

              <div className="space-y-3">
                {restaurants.map((restaurant) => (
                  <article key={restaurant.name} className="overflow-hidden rounded-2xl border border-slate-200 bg-white">
                    <div className={`h-36 ${restaurant.name === 'Beke Cafe' ? 'bg-gradient-to-br from-yellow-200 via-orange-300 to-amber-500' : restaurant.name === 'Mekelle Bite' ? 'bg-gradient-to-br from-lime-300 via-emerald-400 to-green-500' : 'bg-gradient-to-br from-sky-300 via-blue-400 to-indigo-500'}`}>
                      <div className="inline-flex items-center rounded-full bg-white/90 px-2.5 py-1.5 text-[10px] font-extrabold text-slate-700 m-3">{restaurant.tag}</div>
                    </div>
                    <div className="p-3.5">
                      <div className="flex items-center justify-between">
                        <h3 className="text-lg font-black text-slate-900">{restaurant.name}</h3>
                        <span className="text-[11px] font-extrabold text-amber-500">★ {restaurant.rating}</span>
                      </div>
                      <div className="mt-2 flex items-center justify-between text-[11px] text-slate-500">
                        <span>{restaurant.type}</span>
                        <span>{restaurant.time}</span>
                      </div>
                      <div className="mt-4 grid grid-cols-2 gap-2">
                        <button className="rounded-xl bg-slate-100 px-3 py-2 text-xs font-black text-emerald-700">View menu</button>
                        <button className="rounded-xl bg-emerald-600 px-3 py-2 text-xs font-black text-white shadow-md shadow-emerald-200">Order now</button>
                      </div>
                    </div>
                  </article>
                ))}
              </div>

              <section className="mt-4 overflow-hidden rounded-2xl border border-slate-200 bg-white">
                <div className="h-32 bg-gradient-to-br from-lime-300 via-emerald-400 to-green-600" />
                <div className="space-y-4 p-4">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <h2 className="text-xl font-black text-slate-900">Mekelle Bite</h2>
                      <div className="mt-1 flex items-center justify-between gap-3 text-[11px] text-slate-500">
                        <span>Grill • Pasta • Burger</span>
                        <span>★ 4.9</span>
                      </div>
                    </div>
                    <button className="rounded-xl bg-slate-100 px-2.5 py-2 text-[11px] font-extrabold text-emerald-700">Open</button>
                  </div>

                  <div className="space-y-3">
                    {menuItems.map((item) => (
                      <div key={item.name} className="flex gap-3 rounded-2xl border border-slate-200 bg-slate-50 p-2.5">
                        <div className={`h-[78px] w-[78px] rounded-xl bg-gradient-to-br ${item.tint}`} />
                        <div className="flex-1">
                          <div className="flex items-start justify-between gap-2">
                            <strong className="text-[15px] font-black text-slate-900">{item.name}</strong>
                            <span className="text-[15px] font-black text-emerald-700">ETB {item.price}</span>
                          </div>
                          <p className="mt-1 text-[11px] leading-4 text-slate-500">{item.desc}</p>
                          <div className="mt-2 flex justify-end">
                            <div className="flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-2 py-1">
                              <button className="grid h-6 w-6 place-items-center rounded-md bg-emerald-50 text-[18px] font-black text-emerald-700">-</button>
                              <span className="min-w-5 text-center text-xs font-bold text-slate-700">1</span>
                              <button className="grid h-6 w-6 place-items-center rounded-md bg-emerald-50 text-[18px] font-black text-emerald-700">+</button>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="rounded-2xl border border-slate-200 bg-slate-50 p-3">
                    <h3 className="text-[12px] font-black text-slate-700">Delivery note</h3>
                    <textarea className="mt-2 w-full resize-none rounded-xl border border-slate-200 bg-white p-2 text-sm text-slate-700 outline-none" rows={3}>Deliver to Block C Room 12, Gate 2. Please ring the bell twice.</textarea>
                  </div>

                  <div className="rounded-2xl border border-slate-200 bg-white p-3">
                    <div className="flex justify-between text-sm"><span>Special Doro Wet</span><span>ETB 220</span></div>
                    <div className="mt-2 flex justify-between text-sm"><span>Cold Coffee</span><span>ETB 95</span></div>
                    <div className="mt-2 flex justify-between text-sm"><span>Delivery</span><span>ETB 25</span></div>
                    <div className="mt-3 flex justify-between border-t border-slate-200 pt-3 text-base font-black"><span>Total</span><span>ETB 340</span></div>
                  </div>

                  <div className="pt-2">
                    <h3 className="text-lg font-black text-slate-900">Payment</h3>
                    <div className="mt-3 space-y-2">
                      {paymentOptions.map((method) => (
                        <button
                          key={method}
                          onClick={() => setActivePayment(method)}
                          className={`flex w-full items-center gap-3 rounded-xl border px-3 py-3 text-left text-sm font-bold ${activePayment === method ? 'border-emerald-200 bg-emerald-50 text-emerald-700' : 'border-slate-200 bg-white text-slate-700'}`}>
                          <span className={`grid h-4 w-4 place-items-center rounded-full border-2 ${activePayment === method ? 'border-emerald-600' : 'border-slate-300'}`}>
                            <span className={`h-2 w-2 rounded-full ${activePayment === method ? 'bg-emerald-600' : 'bg-transparent'}`} />
                          </span>
                          {method}
                        </button>
                      ))}
                    </div>

                    <div className="mt-4 rounded-xl border border-slate-200 bg-white p-3">
                      <input className="w-full border-none bg-transparent text-sm text-slate-700 outline-none" defaultValue="Transaction Reference: TBR-2381457" />
                    </div>

                    <label className="mt-4 flex items-center justify-between rounded-xl border border-dashed border-slate-300 bg-white px-3 py-3 text-sm font-bold text-slate-500">
                      <span>Upload payment screenshot</span>
                      <span className="text-xl text-emerald-700">⤴</span>
                      <input type="file" className="hidden" />
                    </label>

                    <div className="mt-4 grid grid-cols-2 gap-2">
                      <button className="rounded-xl bg-slate-100 px-3 py-3 text-xs font-black text-emerald-700">Save for later</button>
                      <button className="rounded-xl bg-emerald-600 px-3 py-3 text-xs font-black text-white shadow-lg shadow-emerald-200">Place Order</button>
                    </div>
                  </div>
                </div>
              </section>

              <div className="mt-4">
                <h3 className="text-lg font-black text-slate-900">Order tracking</h3>
                <div className="mt-3 space-y-3">
                  {[
                    { title: 'Pending Approval', detail: 'Order confirmed and reviewed by merchant.', badge: 'Approved', state: 'done' },
                    { title: 'Preparing', detail: 'Kitchen is cooking your order.', badge: 'In progress', state: 'active' },
                    { title: 'Picked Up', detail: 'Courier has left the restaurant.', badge: null, state: '' },
                    { title: 'Delivered', detail: 'Estimated arrival at Block C, Gate 2.', badge: null, state: '' },
                  ].map((stage) => (
                    <div key={stage.title} className="flex items-start gap-3">
                      <div className={`mt-1 h-3.5 w-3.5 rounded-full border-4 ${stage.state === 'done' ? 'border-emerald-100 bg-emerald-600' : stage.state === 'active' ? 'border-amber-100 bg-amber-400' : 'border-slate-200 bg-slate-300'}`} />
                      <div className="flex-1 rounded-2xl border border-slate-200 bg-white p-3">
                        <div className="text-sm font-black text-slate-900">{stage.title}</div>
                        <p className="mt-1 text-[11px] text-slate-500">{stage.detail}</p>
                        {stage.badge && (
                          <span className={`mt-2 inline-flex rounded-full px-2 py-1 text-[10px] font-extrabold ${stage.badge === 'Approved' ? 'bg-emerald-100 text-emerald-700' : 'bg-amber-100 text-amber-700'}`}>
                            {stage.badge}
                          </span>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {role === 'courier' && (
            <div className="space-y-4">
              <div className="flex items-center justify-between rounded-2xl border border-slate-200 bg-white p-3">
                <div>
                  <div className="text-sm font-black text-slate-900">Courier dashboard</div>
                  <div className="text-[11px] text-slate-500">Ready to receive orders</div>
                </div>
                <button onClick={() => setOnline((v) => !v)} className={`relative h-7 w-12 rounded-full transition ${online ? 'bg-emerald-600' : 'bg-slate-300'}`}>
                  <span className={`absolute top-1 h-5 w-5 rounded-full bg-white transition ${online ? 'left-6' : 'left-1'}`} />
                </button>
              </div>

              <div className="flex items-center justify-between">
                <h2 className="text-lg font-black text-slate-900">Incoming orders</h2>
                <span className="text-[11px] font-bold text-slate-500">3 active</span>
              </div>

              <div className="space-y-3">
                {[
                  { id: '#A021', student: 'Yohannes T.', drop: 'Block B, Gate 1 • Science Library', order: 'Doro Wet + Coffee', payment: 'ETB 95' },
                  { id: '#A017', student: 'Sara A.', drop: 'Female Dorm • Gate 3', order: 'Burger + Smoothie', payment: 'ETB 70' },
                ].map((order) => (
                  <div key={order.id} className="rounded-2xl border border-slate-200 bg-white p-3">
                    <div className="flex items-center justify-between">
                      <strong className="text-sm font-black text-slate-900">{order.id}</strong>
                      <span className="rounded-full bg-amber-100 px-2 py-1 text-[10px] font-extrabold text-amber-700">NEW</span>
                    </div>
                    <div className="mt-2 space-y-1 text-[12px] text-slate-500">
                      <div>Student: {order.student}</div>
                      <div>Drop-off: {order.drop}</div>
                      <div>Order: {order.order}</div>
                      <div>Distance: 1.2 km • {order.payment}</div>
                    </div>
                    <div className="mt-3 grid grid-cols-2 gap-2">
                      <button className="rounded-xl bg-emerald-600 px-3 py-2 text-xs font-black text-white">Accept</button>
                      <button className="rounded-xl bg-red-50 px-3 py-2 text-xs font-black text-red-600">Reject</button>
                    </div>
                    <div className="mt-2 grid grid-cols-2 gap-2">
                      <button className="rounded-xl bg-emerald-50 px-3 py-2 text-xs font-black text-emerald-700">Call</button>
                      <button className="rounded-xl bg-emerald-100 px-3 py-2 text-xs font-black text-emerald-700">WhatsApp</button>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-4">
                <h3 className="text-lg font-black text-slate-900">Earnings</h3>
                <div className="mt-3 grid grid-cols-2 gap-2">
                  {[
                    { label: 'Completed', value: '18' },
                    { label: 'Net payout', value: 'ETB 3,420' },
                    { label: 'Rating', value: '4.8' },
                    { label: 'On time', value: '92%' },
                  ].map((stat) => (
                    <div key={stat.label} className="rounded-2xl border border-slate-200 bg-white p-3">
                      <div className="text-2xl font-black text-slate-900">{stat.value}</div>
                      <div className="mt-1 text-[11px] text-slate-500">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {role === 'admin' && (
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h2 className="text-lg font-black text-slate-900">System overview</h2>
                <span className="text-[11px] font-bold text-slate-500">Live</span>
              </div>

              <div className="grid grid-cols-2 gap-2">
                {[
                  { label: 'Daily orders', value: '256' },
                  { label: 'Revenue', value: 'ETB 41k' },
                  { label: 'Active couriers', value: '18' },
                  { label: 'Open disputes', value: '05' },
                ].map((metric) => (
                  <div key={metric.label} className="rounded-2xl border border-slate-200 bg-white p-3">
                    <div className="text-[10px] font-extrabold uppercase tracking-wide text-slate-500">{metric.label}</div>
                    <div className="mt-2 text-2xl font-black text-slate-900">{metric.value}</div>
                  </div>
                ))}
              </div>

              <div>
                <h3 className="text-lg font-black text-slate-900">Merchant management</h3>
                <div className="mt-3 overflow-hidden rounded-2xl border border-slate-200 bg-white">
                  {[
                    { name: 'Beke Cafe', type: 'Coffee • Breakfast', visible: true },
                    { name: 'Mekelle Bite', type: 'Fast food • Grill', visible: true },
                    { name: 'Green Corner', type: 'Healthy • Smoothies', visible: false },
                  ].map((merchant) => (
                    <div key={merchant.name} className="flex items-center justify-between gap-2 border-b border-slate-200 p-3 last:border-b-0">
                      <div>
                        <div className="text-sm font-black text-slate-900">{merchant.name}</div>
                        <div className="text-[11px] text-slate-500">{merchant.type}</div>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className={`rounded-full px-2 py-1 text-[10px] font-extrabold ${merchant.visible ? 'bg-emerald-100 text-emerald-700' : 'bg-red-100 text-red-600'}`}>{merchant.visible ? 'Visible' : 'Hidden'}</span>
                        <button className="rounded-xl bg-slate-100 px-2 py-1.5 text-[10px] font-extrabold text-emerald-700">Edit</button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-lg font-black text-slate-900">Courier management</h3>
                <div className="mt-3 overflow-hidden rounded-2xl border border-slate-200 bg-white">
                  {[
                    { name: 'Abdisa D.', detail: 'On duty • 4.8 rating', active: true },
                    { name: 'Meseret G.', detail: 'Paused • 4.7 rating', active: false },
                    { name: 'Samuel H.', detail: 'Banned • isBanned=true', active: false },
                  ].map((courier) => (
                    <div key={courier.name} className="flex items-center justify-between gap-2 border-b border-slate-200 p-3 last:border-b-0">
                      <div>
                        <div className="text-sm font-black text-slate-900">{courier.name}</div>
                        <div className="text-[11px] text-slate-500">{courier.detail}</div>
                      </div>
                      <button onClick={() => {}} className={`relative h-7 w-12 rounded-full ${courier.active ? 'bg-emerald-600' : 'bg-slate-300'}`}>
                        <span className={`absolute top-1 h-5 w-5 rounded-full bg-white transition ${courier.active ? 'left-6' : 'left-1'}`} />
                      </button>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-lg font-black text-slate-900">Order verification</h3>
                <div className="mt-3 overflow-hidden rounded-2xl border border-slate-200 bg-white">
                  {[
                    { name: 'Order #A045', detail: 'Telebirr Ref: TBR-2381457', action: 'Approve', good: true },
                    { name: 'Order #A041', detail: 'CBE screenshot pending review', action: 'Reject', good: false },
                  ].map((item) => (
                    <div key={item.name} className="flex items-center justify-between gap-2 border-b border-slate-200 p-3 last:border-b-0">
                      <div>
                        <div className="text-sm font-black text-slate-900">{item.name}</div>
                        <div className="text-[11px] text-slate-500">{item.detail}</div>
                      </div>
                      <div className="flex items-center gap-2">
                        <button className="rounded-xl bg-slate-100 px-2 py-1.5 text-[10px] font-extrabold text-emerald-700">View</button>
                        <span className={`rounded-full px-2 py-1 text-[10px] font-extrabold ${item.good ? 'bg-emerald-100 text-emerald-700' : 'bg-red-100 text-red-600'}`}>{item.action}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
