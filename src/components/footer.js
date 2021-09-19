import React from "react";
import { Container } from "@material-ui/core";

export default function Footer() {
  return (
    <Container>
      <div className="footer">
        <div className="container">
          <p className="text-muted">
            © 2021 <span>Jhon Jairo Linares - Developer Full-Stack</span>
          </p>
        </div>
      </div>
    </Container>
  );
}