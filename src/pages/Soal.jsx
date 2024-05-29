import React, { useState } from "react";
import { Button, Card, Col, Row } from "react-bootstrap";
import soal_1 from "../assets/soal1.png";

const Soal = () => {
  const data = [
    {
      id: 1,
      name: "John Doe",
      description:
        "Some quick example to make up the bulk of the card's content.",
    },
    {
      id: 2,
      name: "Jane Doe",
      description:
        "Some quick example text to build on the card title and make up the bulk of the card's content.",
    },
    {
      id: 3,
      name: "James Smith",
      description:
        "Some quick test to build on the card title and make up the bulk of the card's content.",
    },
  ];
  const [count, setCount] = useState(5);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    setCount(count - 1);
  };
  return (
    <section className="container">
      <main>
        <h1>Number One</h1>
        <div className="content">
          <img src={soal_1} alt="soal_1" className="img-fluid" />
          <div className="d-flex justify-content-center flex-column align-items-center">
            <p className="w-50 text-center">
              Looping beberapa data ini menggunakan map() dan tampilkan di
              halaman ini data seperti contoh diatas. Tampilkan data kotak hijau
              ini.
            </p>
            <div
              className="border border-success p-3 w-100"
              style={{
                minHeight: "200px",
              }}
            ></div>
          </div>
        </div>
      </main>
      <main className="mt-5">
        <h1>Number Two</h1>
        <div className="content">
          <div className="d-flex justify-content-center flex-column align-items-center">
            <p className="w-50 text-center">
              Perbaiki fungsi pada button. Ketika angka 0 maka button kurang
              menjadi disabled, jika angka menjadi 12 maka buat button tambah
              jadi disabled
            </p>
            <div
              className="border border-success p-3 w-100 d-flex justify-content-center align-items-center gap-3 flex-column"
              style={{ minHeight: "200px" }}
            >
              <span>{count}</span>
              <div className="d-flex justify-content-center gap-3 align-items-center">
                <Button
                  variant="danger"
                  onClick={handleDecrement}
                  disabled={count === -10}
                >
                  Kurang
                </Button>
                <Button variant="success" onClick={handleIncrement}>
                  Tambah
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </section>
  );
};

export default Soal;
