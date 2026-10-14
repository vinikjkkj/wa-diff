__d(
  "ImageExif",
  ["exif-js"],
  function (t, n, r, o, a, i, l) {
    r("exif-js").enableXmp();
    function e(e) {
      return r("exif-js").readFromBinaryFile(e);
    }
    function s(t, n) {
      var r = new FileReader();
      (r.addEventListener(
        "load",
        function () {
          var t = r.result,
            o = e(t);
          n(o);
        },
        !1,
      ),
        r.readAsArrayBuffer(t));
    }
    ((l.readFromArrayBuffer = e), (l.readFromFile = s));
  },
  98,
);
