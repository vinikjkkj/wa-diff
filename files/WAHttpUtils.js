__d(
  "WAHttpUtils",
  ["err"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t, n) {
      if (!/^https:\/\/[-\w.]+\.\w+$/.test(e))
        throw r("err")('buildUrl given invalid host "' + e + '"');
      if (!t.startsWith("/"))
        throw r("err")('buildUrl given invalid path "' + t + '"');
      var o = n,
        a = "" + e + t;
      if (!o) return a;
      var i = Object.keys(o).map(function (e) {
        var t = o[e];
        t instanceof ArrayBuffer && (t = new Uint8Array(t));
        var n =
          t instanceof Uint8Array
            ? Array.from(t)
                .map(function (e) {
                  return "%" + e.toString(16);
                })
                .join("")
            : encodeURIComponent(t.toString());
        return encodeURIComponent(e) + "=" + n;
      });
      if (i.length > 0) {
        var l = i.join("&");
        return a.includes("?") ? a + "&" + l : a + "?" + l;
      } else return a;
    }
    l.buildUrl = e;
  },
  98,
);
