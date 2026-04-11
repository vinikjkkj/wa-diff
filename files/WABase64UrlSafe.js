__d(
  "WABase64UrlSafe",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    function e(e) {
      return e.replace(/\//g, "_").replace(/\+/g, "-");
    }
    function l(e) {
      return e.replace(/-/g, "+").replace(/_/g, "/");
    }
    function s(e) {
      for (
        var t = atob(e),
          n = t.length,
          r = new Uint8Array(new ArrayBuffer(n)),
          o = 0;
        o < n;
        o++
      )
        r[o] = t.charCodeAt(o);
      return r;
    }
    ((i.urlSafeBase64 = e),
      (i.urlSafeBase64ToStandard = l),
      (i.getBytesFromBase64 = s));
  },
  66,
);
