__d(
  "VideoMimeTypes",
  [],
  function (t, n, r, o, a, i) {
    function e(e, t, n) {
      return e + '; codecs="' + t + ", " + n + '"';
    }
    var l = "mp4a.40.2";
    function s(e) {
      return "avc1.42E0" + e.toString(16).toUpperCase();
    }
    function u(e) {
      return "avc1.4D40" + e.toString(16).toUpperCase();
    }
    function c(e) {
      return "avc1.6400" + e.toString(16).toUpperCase();
    }
    var d = "video/mp4",
      m = e(d, s(30), l),
      p = e(d, u(30), l),
      _ = e(d, u(31), l),
      f = e(d, c(50), l),
      g = e(d, c(51), l),
      h = {
        h264baseline: m,
        h264main30avc: p,
        h264main31avc: _,
        h264high50avc: f,
        h264high51avc: g,
      };
    i.default = h;
  },
  66,
);
