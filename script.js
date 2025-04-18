// Sayfa yüklendiğinde çalışacak kodlar
document.addEventListener('DOMContentLoaded', function() {
    // Güncel tarihi al
    const now = new Date();
    
    // Karne gününe kalan süreyi hesapla (Örnek olarak 9 Haziran 2025 karne günü olsun)
    const reportCardDate = new Date('2025-06-09');
    const daysLeft = Math.ceil((reportCardDate - now) / (1000 * 60 * 60 * 24));
    
    // Karne gününe kalan gün sayısını güncelle
    const countdownElement = document.querySelector('.countdown-days');
    if (countdownElement) {
        countdownElement.textContent = daysLeft + ' GÜN KALDI';
    }
    
    // Anlık tarih ve saat bilgisi
    function updateClock() {
        const now = new Date();
        const hours = now.getHours().toString().padStart(2, '0');
        const minutes = now.getMinutes().toString().padStart(2, '0');
        const seconds = now.getSeconds().toString().padStart(2, '0');
        
        // Mevcut ders saatini belirle (Bu örnek için basit bir mantık kullanılıyor)
        let currentPeriod = '';
        const timeStr = hours + ':' + minutes;
        
        if (timeStr >= '08:30' && timeStr < '09:10') {
            currentPeriod = '1. DERS';
        } else if (timeStr >= '09:20' && timeStr < '10:00') {
            currentPeriod = '2. DERS';
        } else if (timeStr >= '10:10' && timeStr < '10:50') {
            currentPeriod = '3. DERS';
        } else if (timeStr >= '11:00' && timeStr < '11:40') {
            currentPeriod = '4. DERS';
        } else if (timeStr >= '12:20' && timeStr < '13:00') {
            currentPeriod = '5. DERS';
        } else if (timeStr >= '13:10' && timeStr < '13:50') {
            currentPeriod = '6. DERS';
        } else {
            currentPeriod = 'TENEFFÜS';
        }
        
        // 3. dersin bitmesine kalan süreyi hesapla
        // Not: Bu basit bir örnek, gerçek uygulamada ders programı daha doğru bir şekilde takip edilmelidir
        
        // Gerekirse güncelleme yapılabilir
        setTimeout(updateClock, 1000);
    }
    
    // Saati başlat
    updateClock();
    
    // Duyurulara tıklanınca detay gösterme fonksiyonu
    const announcements = document.querySelectorAll('.announcement');
    announcements.forEach(function(announcement) {
        announcement.addEventListener('click', function() {
            this.classList.toggle('expanded');
        });
    });
});

// Duyuru ekleme ve düzenleme işlemleri için örnek fonksiyonlar 
// (Bu fonksiyonlar bir admin paneli üzerinden çağrılacak)
function addAnnouncement(title, content, isImportant = false) {
    // DOM'a yeni duyuru ekler
    const announcementsSection = document.querySelector('.announcements');
    const newAnnouncement = document.createElement('div');
    newAnnouncement.className = 'announcement' + (isImportant ? ' important' : '');
    
    const now = new Date();
    const formattedDate = now.getDate() + '.' + (now.getMonth() + 1) + '.' + now.getFullYear();
    
    newAnnouncement.innerHTML = `
        <h3>${title}</h3>
        <p>${content}</p>
        <span class="date">${formattedDate}</span>
    `;
    
    // Duyuruları en üste ekle
    if (announcementsSection.firstChild) {
        announcementsSection.insertBefore(newAnnouncement, announcementsSection.firstChild.nextSibling);
    } else {
        announcementsSection.appendChild(newAnnouncement);
    }
}

// Bu sayfanın bir gerçek admin paneli olmadığını unutmayın
// Daha karmaşık bir uygulama için backend yapısı gereklidir