__d(
  "PhotosMimeType",
  [],
  function (t, n, r, o, a, i) {
    function e(e) {
      return s(e)[0] === "image";
    }
    function l(t) {
      var n = s(t);
      return e(t) && (n[1] === "jpeg" || n[1] === "pjpeg");
    }
    function s(e) {
      return e.split("/");
    }
    ((i.isImage = e), (i.isJpeg = l));
  },
  66,
);
