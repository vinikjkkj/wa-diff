__d(
  "lengthInUTF8Bytes",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    function e(e) {
      var t = new TextEncoder();
      return t.encode(e).length;
    }
    function l(e) {
      var t = encodeURIComponent(e).match(/%[89ABab]/g);
      return e.length + (t ? t.length : 0);
    }
    var s = (function () {
      return typeof TextEncoder == "undefined" ? l : e;
    })();
    i.default = s;
  },
  66,
);
