import Image from "next/image";
import styles from "./page.module.css";
import Link from 'next/link';

export default function Home() {
  return (
    <div className={styles.page}>
      <header className={styles.header}>
        {/* Phần Header Top: Logo và Nav Chính */}
        <div className={styles.headerTop}>
          <div className={styles.logo}>
            <Image
              src="/image/logo.jpg"
              alt="Logo Shop"
              width={150}
              height={80}
              priority
            />
          </div>
          <nav className={styles.nav}>
            <ul>
              <li><a href="#home">Trang chủ</a></li>
              <li><a href="#about">Giới thiệu</a></li>
              <li><a href="#products">Sản phẩm</a></li>
              <li><a href="#contact">Liên hệ</a></li>
            </ul>
          </nav>
        </div>

        {/* Nav phụ ngay dưới Header */}
        <div className={styles.headerNav}>
          <nav className={styles.secondaryNav}>
            <ul>
              <li><a href="#news">Tin tức</a></li>
              <li><a href="#offers">Ưu đãi</a></li>
              <li><a href="#support">Hỗ trợ</a></li>
            </ul>
          </nav>
        </div>
      </header>

      <main className={styles.mainContent}>
        {/* Phần Giới thiệu */}
        <section id="home" className={styles.content}>
          <h1>Shop bán giày chính hãng</h1>
        </section>

        {/* Phần Sản phẩm */}
        <section id="products" className={styles.products}>
          <h2>Sản phẩm</h2>
          <div className={styles.productGrid}>
            <Link href="/chitietsanpham" className={styles.productCard}>
              <div>
                <Image src="/image/giaytenis.png" alt="Giày Tennis Asics" width={350} height={230} />
                <h3>Giày Tennis Asics</h3>
                <p>4,500,000Đ</p>
                <p>Có thể thấy sản phẩm Giày Tennis Asics sẽ mang lại cho bạn một cảm giác nhanh nhẹn, cảm giác ôm và chân thật hơn</p>
                <button className={styles.buyButton}>Mua ngay</button>
              </div>
            </Link>

            <Link href="/chitietsanpham" className={styles.productCard}>
              <div>
                <Image src="/image/jordan1.jpeg" alt="Air Jordan 1 High" width={350} height={200} />
                <h3>Air Jordan 1 High</h3>
                <p>2,900,000Đ - 4,500,000Đ</p>
                <p>Thiết kế đặc trưng của mẫu giày này có có phần mũi được thiết kế hơi nhọn</p>
                <button className={styles.buyButton}>Mua ngay</button>
              </div>
            </Link>

            <Link href="/chitietsanpham" className={styles.productCard}>
              <div>
                <Image src="/image/gucci.png" alt="Giày Chunky" width={350} height={200} />
                <h3>Giày Chunky</h3>
                <p>800,000Đ</p>
                <p>Thường thì các dòng giày chunky sneaker được làm từ sự kết hợp của nhiều loại chất liệu khác nhau như: vải dệt, cao su, và các loại vật liệu kỹ thuật</p>
                <button className={styles.buyButton}>Mua ngay</button>
              </div>
            </Link>

            <Link href="/chitietsanpham" className={styles.productCard}>
              <div>
                <Image src="/image/nike.jpeg" alt="Giày Nike Air Force 1" width={350} height={200} />
                <h3>Giày Nike Air Force 1</h3>
                <p>1,300,000Đ – 1,800,000Đ</p>
                <p>Nike Air Force 1 là một trong những dòng sản phẩm đầu tiên của thương hiệu Nike được trình làng vào năm 1982</p>
                <button className={styles.buyButton}>Mua ngay</button>
              </div>
            </Link>

            <Link href="/chitietsanpham" className={styles.productCard}>
              <div>
                <Image src="/image/adidas.png" alt="Giày Adidas Yeezy 350" width={350} height={200} />
                <h3>Giày Adidas Yeezy 350</h3>
                <p>2,000,000Đ – 2,500,000Đ</p>
                <p>Yeezy 350 được làm từ chất liệu Primeknit, một loại vải dệt kim đàn hồi, nhẹ và thoáng khí. tạo sự linh hoạt và tự nhiên cho chân.</p>
                <button className={styles.buyButton}>Mua ngay</button>
              </div>
            </Link>

            <Link href="/chitietsanpham" className={styles.productCard}>
              <div>
                <Image src="/image/jordan2.png" alt="Giày Nike Air Jordan 1 Low" width={350} height={200} />
                <h3>Giày Nike Air Jordan 1 Low</h3>
                <p>1,500,000Đ - 2,500,000Đ</p>
                <p>Giày Jordan 1 Low là một mẫu giày thể thao đầy ấn tượng từ thương hiệu Jordan. Thiết kế của đôi giày này có sự kết hợp màu sắc hài hòa giữa các màu sắc</p>
                <button className={styles.buyButton}>Mua ngay</button>
              </div>
            </Link>

            <Link href="/chitietsanpham" className={styles.productCard}>
              <div>
                <Image src="/image/giay.jpg" alt="Giày Sneaker" width={350} height={200} />
                <h3>Giày Sneaker</h3>
                <p>1,100,000Đ</p>
                <p>Đặc điểm nổi bật của giày sneaker là phần đế được làm từ cao su mềm mang lại cảm giác êm ái và thoải mái khi mang</p>
                <button className={styles.buyButton}>Mua ngay</button>
              </div>
            </Link>

            <Link href="/chitietsanpham" className={styles.productCard}>
              <div>
                <Image src="/image/geox.webp" alt="Giày Geox" width={300} height={200} />
                <h3>Giày Geox</h3>
                <p>2,100,000Đ - 2,600,000Đ</p>
                <p>Geox áp dụng lớp màng trực tiếp vào bên trong da của phần thân phía trên chiếc giày</p>
                <button className={styles.buyButton}>Mua ngay</button>
              </div>
            </Link>
          </div>
        </section>

        {/* Phần Liên hệ */}
        <section id="contact" className={styles.content}>
          <h2>Liên hệ</h2>
          <p>Địa chỉ: 21 Gò Vấp, TP.HCM</p>
          <p>Điện thoại: 0123444567</p>
          <p>Email: drnh0zkun@gmail.com</p>
        </section>
      </main>

      <footer className={styles.footer}>
        <p>&copy; 2025 Thế Vinh Shop</p>
      </footer>
    </div>
  );
}