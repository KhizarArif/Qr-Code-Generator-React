import React, { useState } from "react";
import styled from "styled-components";

const QrCode = () => {
  const [website, setWebsite] = useState("");
  const [qrCode, setQrCode] = useState("");
  console.log(qrCode);
  console.log(website);

  const handleSubmit = (e) => {
    e.preventDefault();
    setQrCode(
      `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${website}`
    );
  };

  return (
    <>
      <Container onSubmit={handleSubmit}>
        <h1> Website </h1>
        <input
          type="text"
          className="inputQrCode"
          placeholder="Enter your website url"
          onChange={(e) => setWebsite(e.target.value)}
        />
        <button type="submit" className="qrCodeButton"> 
          Generate QR Code 
        </button>
      </Container>
      {qrCode && <QrCodeImage src={qrCode} />}
    </>
  );
};

export default QrCode;

const Container = styled.form`
  display: flex;
  flex-direction: column;
  width: 30%;
  justify-content: space-between;
  gap: 2rem;
  margin: 0 auto;

  .inputQrCode {
    width: 100%;
    padding: 1rem;
    border: 1px solid;
    outline: none;
    border-radius: 5px;
    font-size: 1rem;
  }

  .qrCodeButton {
    padding: 1rem;
    border: 1px solid;
    border-radius: 5px;
    font-size: 1rem;
    cursor: pointer;
    background-color: #07578b;
    color: #fff;
  }
`;

const QrCodeImage = styled.img`
  margin: 0 auto;
  display: flex;
  padding: 2rem;
`;
