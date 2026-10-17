
"use client";

import "./Detail.css";
import ProductService from "@/app/Services/productServices";
import { useParams } from "next/navigation";
import React, { Suspense, useEffect, useState } from "react";

export default function Detailpage() {
  return (
    <Suspense fallback={<p>Loading product...</p>}>
      <DetailContent />
    </Suspense>
  );
}

function DetailContent() {
  const { id } = useParams<{ id: string }>();

  const [product, Setproduct] = useState<any>(null);

  useEffect(() => {
    async function EachProduct() {
      const RecievedProduct =
        await ProductService.getProductById(id);

      Setproduct(RecievedProduct);
    }

    EachProduct();
  }, [id]);

  return (
    <main className="detail-page">
      {product && (
        <div className="detail-card">
          <img
            src={product.image}
            alt={product.title}
            className="detail-image"
          />

          <h1 className="detail-title">
            {product.title}
          </h1>

          <p className="detail-price">
            ${product.price}
          </p>

          <p className="detail-description">
            {product.description}
          </p>
        </div>
      )}
    </main>
  );
}
