__d(
  "LSBase64Decode",
  ["Base64Utils", "CryptoLogger", "getErrorSafe"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      var t = e
          .replace(/-/g, "+")
          .replace(/_/g, "/")
          .replace(/\./g, "=")
          .replace("/,/", "="),
        n = 4 - (t.length % 4);
      if (n < 4) for (var r = 0; r < n; r++) t += "=";
      return t;
    }
    function s(t) {
      var n = o("CryptoLogger").CryptoLogger("base64decode");
      try {
        return t != null ? o("Base64Utils").toArrayBuffer(e(t)) : void 0;
      } catch (e) {
        var a = r("getErrorSafe")(e);
        if (a.message == null) return;
        n.catching(a).mustfix(a.message);
      }
    }
    l.decode = s;
  },
  98,
);
