function openRoom(roomNumber) {
    const container = document.getElementById('room-container');
    container.innerHTML = ''; // clear previous content
  
    if (roomNumber === 1) {
      container.innerHTML = `
        <h2>Phòng Hoa 🌸</h2>
        <div style="font-size: 40px; cursor: pointer;" onclick="showLetter('Một ngày thật đặc biệt dành cho bạn! 💌')">🎁</div>
      `;
    } else if (roomNumber === 2) {
      container.innerHTML = `
        <h2>Phòng Ảnh 🖼️</h2>
        <div>
          <img src="images/photo1.jpg" alt="Ảnh 1" width="200"><p>Ảnh 1 - Kỷ niệm đẹp</p>
          <img src="images/photo2.jpg" alt="Ảnh 2" width="200"><p>Ảnh 2 - Một khoảnh khắc vui</p>
          <img src="images/photo3.jpg" alt="Ảnh 3" width="200"><p>Ảnh 3 - Chuyến đi đáng nhớ</p>
        </div>
      `;
    } else if (roomNumber === 3) {
      container.innerHTML = `
        <h2>Phòng Bánh Sinh Nhật 🎂</h2>
        <div style="font-size: 40px; cursor: pointer;" onclick="showBirthdayMessage()">🎁</div>
      `;
    }
  }
  
  function showLetter(message) {
    const container = document.getElementById('room-container');
    container.innerHTML += `<p style="margin-top: 20px;">${message}</p>`;
  }
  
  function showBirthdayMessage() {
    const container = document.getElementById('room-container');
    container.innerHTML = `
      <p>💌 Chúc mừng sinh nhật! Bạn là người đặc biệt 🥳</p>
      <button onclick="showCake()">Tiếp tục nào</button>
    `;
  }
  
  
  function showCake() {
    const container = document.getElementById('room-container');
    container.innerHTML = `
      <h2>🎂 Bánh sinh nhật!</h2>
      <div style="font-size: 60px; cursor: pointer;" onclick="blowCandles()">🕯️🎂</div>
      <p>Nhấn vào bánh để thổi nến!</p>
    `;
  }
  
  function blowCandles() {
    const container = document.getElementById('room-container');
    container.innerHTML += `<p>✨ Nến đã tắt, ước nguyện sẽ thành sự thật! ✨</p>`;
  }
  