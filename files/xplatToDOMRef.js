__d(
  "xplatToDOMRef",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = t.HTMLElement;
    function l(t) {
      return function (n) {
        var r = e && n instanceof e ? n : null;
        typeof t == "function"
          ? t(r)
          : t != null && typeof t == "object" && (t.current = r);
      };
    }
    var s = t.HTMLInputElement;
    function u(e) {
      return function (t) {
        var n = s && t instanceof s ? t : null;
        typeof e == "function"
          ? e(n)
          : e != null && typeof e == "object" && (e.current = n);
      };
    }
    ((i.xplatToDOMRef = l), (i.xplatToInputRef = u));
  },
  66,
);
