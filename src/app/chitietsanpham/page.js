import Image from "next/image";
import styles from "./chitietsanpham.module.css";

export default function ChiTietSanPham() {
  return (
    <div className={styles.container}>
      <div className={styles.imageSection}>
        <Image
          src="/image/giaytenis.png"
          alt="Giày Tennis Asics"
          width={500}
          height={400}
          className={styles.productImage}
        />
      </div>

      <div className={styles.infoSection}>
        <h1>Giày Tennis Asics</h1>
        <p className={styles.price}>4,500,000Đ</p>
        <p className={styles.description}>
          Giày Tennis Asics mang lại cảm giác nhanh nhẹn, ôm chân, cực kỳ thoải mái khi vận động mạnh.
        </p>
        <ul className={styles.details}>
          <li>✅ Chất liệu: Da tổng hợp cao cấp</li>
          <li>✅ Size: 38, 39, 40, 41, 42, 43</li>
          <li>✅ Màu sắc: Trắng, Đen</li>
          <li>✅ Thương hiệu: Asics</li>
        </ul>
        <button className={styles.buyButton}>Mua ngay</button>
      </div>
    </div>
  );
}
