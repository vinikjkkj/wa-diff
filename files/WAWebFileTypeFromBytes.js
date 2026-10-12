__d(
  "WAWebFileTypeFromBytes",
  [],
  function (t, n, r, o, a, i) {
    function e(e, t) {
      return function (n) {
        return t.every(function (t, r) {
          return n[e + r] === t;
        });
      };
    }
    function l(t, n) {
      return e(
        t,
        Array.from(n, function (e) {
          return e.charCodeAt(0);
        }),
      );
    }
    function s(e, t) {
      return function (n) {
        return t.includes(n[e]);
      };
    }
    function u() {
      for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
        t[n] = arguments[n];
      return function (e) {
        return t.every(function (t) {
          return t(e);
        });
      };
    }
    function c() {
      for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
        t[n] = arguments[n];
      return function (e) {
        return t.some(function (t) {
          return t(e);
        });
      };
    }
    var d = c(e(0, [73, 73, 42, 0]), e(0, [77, 77, 0, 42])),
      m = e(0, [80, 75, 3, 4]),
      p = l(4, "ftyp"),
      _ = u(e(0, [0, 0, 0, 28]), p),
      f = c(e(4, [0, 1, 0, 0]), l(4, "OTTO")),
      g = [
        { ext: "jpg", mime: "image/jpeg", matches: e(0, [255, 216, 255]) },
        { ext: "png", mime: "image/png", matches: e(0, [137, 80, 78, 71]) },
        { ext: "gif", mime: "image/gif", matches: l(0, "GIF") },
        { ext: "webp", mime: "image/webp", matches: l(8, "WEBP") },
        { ext: "cr2", mime: "image/x-canon-cr2", matches: u(d, l(8, "CR")) },
        { ext: "tif", mime: "image/tiff", matches: d },
        { ext: "bmp", mime: "image/bmp", matches: l(0, "BM") },
        {
          ext: "jxr",
          mime: "image/vnd.ms-photo",
          matches: e(0, [73, 73, 188]),
        },
        {
          ext: "psd",
          mime: "image/vnd.adobe.photoshop",
          matches: l(0, "8BPS"),
        },
        {
          ext: "epub",
          mime: "application/epub+zip",
          matches: u(m, l(30, "mimetypeapplication/epub+zip")),
        },
        {
          ext: "xpi",
          mime: "application/x-xpinstall",
          matches: u(m, l(30, "META-INF/mozilla.rsa")),
        },
        {
          ext: "zip",
          mime: "application/zip",
          matches: u(l(0, "PK"), s(2, [3, 5, 7]), s(3, [4, 6, 8])),
        },
        { ext: "tar", mime: "application/x-tar", matches: l(257, "ustar") },
        {
          ext: "rar",
          mime: "application/x-rar-compressed",
          matches: u(e(0, [82, 97, 114, 33, 26, 7]), s(6, [0, 1])),
        },
        { ext: "gz", mime: "application/gzip", matches: e(0, [31, 139, 8]) },
        { ext: "bz2", mime: "application/x-bzip2", matches: l(0, "BZh") },
        {
          ext: "7z",
          mime: "application/x-7z-compressed",
          matches: e(0, [55, 122, 188, 175, 39, 28]),
        },
        {
          ext: "dmg",
          mime: "application/x-apple-diskimage",
          matches: e(0, [120, 1]),
        },
        {
          ext: "mp4",
          mime: "video/mp4",
          matches: c(
            u(e(0, [0, 0, 0]), s(3, [24, 32]), p),
            l(0, "3gp5"),
            u(_, l(8, "mp42"), l(16, "mp41mp42isom")),
            u(_, l(8, "isom")),
            u(_, l(8, "mp42"), e(12, [0, 0, 0, 0])),
          ),
        },
        { ext: "m4v", mime: "video/x-m4v", matches: u(_, l(8, "M4V")) },
        { ext: "mid", mime: "audio/midi", matches: l(0, "MThd") },
        { ext: "mkv", mime: "video/x-matroska", matches: l(31, "matroska") },
        { ext: "webm", mime: "video/webm", matches: e(0, [26, 69, 223, 163]) },
        {
          ext: "mov",
          mime: "video/quicktime",
          matches: u(e(0, [0, 0, 0, 20]), p),
        },
        {
          ext: "avi",
          mime: "video/x-msvideo",
          matches: u(l(0, "RIFF"), l(8, "AVI")),
        },
        {
          ext: "wmv",
          mime: "video/x-ms-wmv",
          matches: e(0, [48, 38, 178, 117, 142, 102, 207, 17, 166, 217]),
        },
        {
          ext: "mpg",
          mime: "video/mpeg",
          matches: u(e(0, [0, 0, 1]), function (e) {
            return e[3] === 11 || (e[3] >= 176 && e[3] <= 191);
          }),
        },
        {
          ext: "mp3",
          mime: "audio/mpeg",
          matches: c(l(0, "ID3"), e(0, [255, 251])),
        },
        {
          ext: "m4a",
          mime: "audio/m4a",
          matches: c(l(4, "ftypM4A"), l(0, "M4A ")),
        },
        { ext: "opus", mime: "audio/opus", matches: l(28, "OpusHead") },
        { ext: "ogg", mime: "audio/ogg", matches: l(0, "OggS") },
        { ext: "flac", mime: "audio/x-flac", matches: l(0, "fLaC") },
        {
          ext: "wav",
          mime: "audio/x-wav",
          matches: u(l(0, "RIFF"), l(8, "WAVE")),
        },
        { ext: "amr", mime: "audio/amr", matches: l(0, "#!AMR\n") },
        { ext: "pdf", mime: "application/pdf", matches: l(0, "%PDF") },
        { ext: "exe", mime: "application/x-msdownload", matches: l(0, "MZ") },
        {
          ext: "swf",
          mime: "application/x-shockwave-flash",
          matches: u(s(0, [67, 70]), l(1, "WS")),
        },
        { ext: "rtf", mime: "application/rtf", matches: l(0, "{\\rtf") },
        {
          ext: "woff",
          mime: "application/font-woff",
          matches: u(l(0, "wOFF"), f),
        },
        {
          ext: "woff2",
          mime: "application/font-woff",
          matches: u(l(0, "wOF2"), f),
        },
        {
          ext: "eot",
          mime: "application/octet-stream",
          matches: u(
            l(34, "LP"),
            c(e(8, [0, 0, 1]), e(8, [1, 0, 2]), e(8, [2, 0, 2])),
          ),
        },
        {
          ext: "ttf",
          mime: "application/font-sfnt",
          matches: e(0, [0, 1, 0, 0, 0]),
        },
        {
          ext: "otf",
          mime: "application/font-sfnt",
          matches: u(l(0, "OTTO"), e(4, [0])),
        },
        { ext: "ico", mime: "image/x-icon", matches: e(0, [0, 0, 1, 0]) },
        { ext: "flv", mime: "video/x-flv", matches: u(l(0, "FLV"), e(3, [1])) },
        { ext: "ps", mime: "application/postscript", matches: l(0, "%!") },
        {
          ext: "xz",
          mime: "application/x-xz",
          matches: e(0, [253, 55, 122, 88, 90, 0]),
        },
        { ext: "sqlite", mime: "application/x-sqlite3", matches: l(0, "SQLi") },
        {
          ext: "nes",
          mime: "application/x-nintendo-nes-rom",
          matches: e(0, [78, 69, 83, 26]),
        },
        {
          ext: "crx",
          mime: "application/x-google-chrome-extension",
          matches: l(0, "Cr24"),
        },
        {
          ext: "cab",
          mime: "application/vnd.ms-cab-compressed",
          matches: c(l(0, "MSCF"), l(0, "ISc(")),
        },
        {
          ext: "deb",
          mime: "application/x-deb",
          matches: l(0, "!<arch>\ndebian-binary"),
        },
        {
          ext: "ar",
          mime: "application/x-unix-archive",
          matches: l(0, "!<arch>"),
        },
        {
          ext: "rpm",
          mime: "application/x-rpm",
          matches: e(0, [237, 171, 238, 219]),
        },
        {
          ext: "Z",
          mime: "application/x-compress",
          matches: c(e(0, [31, 160]), e(0, [31, 157])),
        },
        { ext: "lz", mime: "application/x-lzip", matches: l(0, "LZIP") },
        {
          ext: "msi",
          mime: "application/x-msi",
          matches: e(0, [208, 207, 17, 224, 161, 177, 26, 225]),
        },
      ];
    function h(e) {
      if (e.length < 2) return null;
      var t = g.find(function (t) {
        var n = t.matches;
        return n(e);
      });
      return t == null ? null : { ext: t.ext, mime: t.mime };
    }
    i.fileTypeFromBytes = h;
  },
  66,
);
