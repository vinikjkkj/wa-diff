__d(
  "RequestStreamBodyUtils",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = function (t) {
        return u(atob(t));
      },
      l = function (t) {
        return btoa(c(t));
      },
      s = function (t) {
        var e = btoa(t),
          n = e.indexOf("=");
        return n === -1 ? e : e.substring(0, n);
      },
      u = function (t) {
        for (var e = t, n = e.length, r = new Uint8Array(n), o = 0; o < n; o++)
          r[o] = e.charCodeAt(o);
        return r;
      },
      c = function (t) {
        for (var e = "", n = t.byteLength, r = 0; r < n; r++)
          e += String.fromCharCode(t[r]);
        return e;
      };
    ((i.base64ToUint8Array = e),
      (i.uint8ArrayToBase64 = l),
      (i.stringToBase64WithoutPadding = s),
      (i.stringToUint8Array = u),
      (i.uint8ArrayToString = c));
  },
  66,
);
