import styles from "../../layout.module.css"
import Image from "next/image"

export default function Header(){
    return(
        <header className={styles.header}>
{/* Phần Header Top: Logo và Nav Chính */}
<div className={styles.headerTop}>
  <div className={styles.logo}>
    <Image
      src="/image/logo.jpg"  // Đường dẫn logo trong public/images
      alt="Logo Shop "
      width={150}
      height={80}
      priority
    />              
  </div>
  <nav className={styles.nav}>
    <ul>
      <li>
        <a href="#home">Trang chủ</a>
      </li>
      <li>
        <a href="#about">Giới thiệu</a>
      </li>
      <li>
        <a href="#products">Sản phẩm</a>
      </li>
      <li>
        <a href="#contact">Liên hệ</a>
      </li>
    </ul>
  </nav>
</div>
{/* Nav phụ ngay dưới Header */}
<div className={styles.headerNav}>
  <nav className={styles.secondaryNav}>
    <ul>
      <li>
        <a href="#news">Tin tức</a>
      </li>
      <li>
        <a href="#offers">Ưu đãi</a>
      </li>
      <li>
        <a href="#support">Hỗ trợ</a>
      </li>
    </ul>
  </nav>
</div>
</header>

    )
}
