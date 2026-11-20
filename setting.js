// =====================================================
//  setting.js  -  PENGATURAN BOT
//  Semua nilai bisa juga diisi lewat Environment Variable panel
//  (BOT_TOKEN, GH_TOKEN, GH_REPO, API_ID, API_HASH)
// =====================================================
module.exports = {
  // ---- Bot ----
  botToken: process.env.BOT_TOKEN || 'ISI_TOKEN_BOT_DARI_BOTFATHER',

  // ---- MTProto (WAJIB kalau mau terima ZIP > 20MB sampai 2GB) ----
  // Ambil di https://my.telegram.org -> API development tools
  apiId: Number(process.env.API_ID || 0),
  apiHash: process.env.API_HASH || '',

  // ---- Logo / foto ----
  // Ditampilkan saat user berhasil join channel + di menu + di channel log
  photoUrl: 'https://telegra.ph/file/ganti-dengan-url-foto-kamu.jpg',

  // ---- Channel wajib follow ----
  // Bot HARUS jadi admin di channel ini (untuk cek member & kirim notif)
  channel: {
    id: '@namachannelkamu',               // @username channel atau -100xxxxxxxxxx
    link: 'https://t.me/namachannelkamu', // link tombol "Follow Channel"
  },
  // Channel tujuan notifikasi user baru / register (boleh sama dengan channel di atas)
  logChannel: '@namachannelkamu',

  // ---- GitHub ----
  github: {
    token: process.env.GH_TOKEN || 'ISI_GITHUB_TOKEN',   // scope: repo + workflow
    repo: process.env.GH_REPO || 'username/nama-repo',   // repo yang berisi .github/workflows
    branch: 'main',
    flutterWorkflow: 'build.yml',
    webWorkflow: 'build-web.yml',
  },

  // ---- Batas & credit ----
  limits: {
    maxZipBytes: 2 * 1024 * 1024 * 1024, // 2GB
    freeCredit: 5,                       // credit awal / maksimal isi ulang member
    refillHours: 24,                     // credit habis -> balik setelah 24 jam
    buildTimeoutMin: 60,                 // build lebih dari ini dianggap stuck -> dibatalkan
    pollSec: 8,                          // interval cek status GitHub
    maxConcurrent: 3,                    // build bersamaan maksimal (sisanya antri)
    downloadIdleSec: 90,                 // download tanpa data selama ini = stuck
  },

  // ---- Teks ----
  texts: {
    maintenance: 'MAAF BOT SEDANG DITUTUP OLEH OWNER DIKARENAKAN ADA SEDIKIT MASALAH',
  },
};
