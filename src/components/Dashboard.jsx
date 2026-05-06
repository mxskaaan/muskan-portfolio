import { useEffect, useState } from "react";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer
} from "recharts";

function Dashboard() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      });
  }, []);

  const filteredProducts = products.filter((item) =>
    item.title.toLowerCase().includes(search.toLowerCase())
  );

  const salesData = [
    { month: "Jan", sales: 4000 },
    { month: "Feb", sales: 3000 },
    { month: "Mar", sales: 5000 },
    { month: "Apr", sales: 4500 },
    { month: "May", sales: 6000 }
  ];

  return (
    <section
      style={{
        padding: "60px 20px",
        maxWidth: "1200px",
        margin: "auto"
      }}
    >
      <h2
        style={{
          textAlign: "center",
          fontSize: "32px"
        }}
      >
        Blinkit Dashboard
      </h2>

      {/* Search Bar */}
      <div style={{ textAlign: "center", marginTop: "30px" }}>
        <input
          type="text"
          placeholder="Search products..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={{
            padding: "14px",
            width: "320px",
            borderRadius: "10px",
            border: "1px solid #38bdf8",
            background: "#020617",
            color: "white",
            outline: "none"
          }}
        />
      </div>

      {/* Stats Cards */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
          gap: "20px",
          marginTop: "40px"
        }}
      >
        <div style={cardStyle}>
          <h3>Total Products</h3>
          <p>{products.length}</p>
        </div>

        <div style={cardStyle}>
          <h3>Total Orders</h3>
          <p>1,245</p>
        </div>

        <div style={cardStyle}>
          <h3>Revenue</h3>
          <p>₹48,000</p>
        </div>
      </div>

      {/* Chart Section */}
      <div
        style={{
          marginTop: "50px",
          background: "#020617",
          padding: "20px",
          borderRadius: "12px",
          border: "1px solid #38bdf8",
          boxShadow: "0 0 15px rgba(56,189,248,0.2)"
        }}
      >
        <h3 style={{ textAlign: "center" }}>
          Monthly Sales Analytics
        </h3>

        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={salesData}>
            <XAxis dataKey="month" stroke="#fff" />
            <YAxis stroke="#fff" />
            <Tooltip />

            <Bar
              dataKey="sales"
              fill="#38bdf8"
              radius={[5, 5, 0, 0]}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Loading */}
      {loading ? (
        <h2 style={{ textAlign: "center", marginTop: "40px" }}>
          Loading products...
        </h2>
      ) : (
        <div
          style={{
            marginTop: "50px",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: "20px"
          }}
        >
          {filteredProducts.map((item) => (
            <div
              key={item.id}
              style={productCard}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform =
                  "translateY(-5px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform =
                  "translateY(0)";
              }}
            >
              <img
                src={item.image}
                alt={item.title}
                style={{
                  width: "100%",
                  height: "180px",
                  objectFit: "contain",
                  background: "white",
                  borderRadius: "10px"
                }}
              />

              <h4 style={{ marginTop: "10px" }}>
                {item.title.substring(0, 35)}...
              </h4>

              <p>₹ {item.price}</p>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}

const cardStyle = {
  background: "#020617",
  padding: "20px",
  borderRadius: "12px",
  border: "1px solid #38bdf8",
  textAlign: "center",
  boxShadow: "0 0 15px rgba(56,189,248,0.2)"
};

const productCard = {
  background: "#020617",
  padding: "15px",
  borderRadius: "12px",
  border: "1px solid #38bdf8",
  transition: "0.3s",
  boxShadow: "0 0 10px rgba(56,189,248,0.15)"
};

export default Dashboard;