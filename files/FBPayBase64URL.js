__d(
  "FBPayBase64URL",
  ["err"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = function (t) {
        var e = t;
        e = e.replace(/-/g, "+").replace(/_/g, "/");
        var n = t.length % 4;
        if (n) {
          if (n === 1)
            throw r("err")("Invalid length, couldn't decode input string");
          e += new Array(5 - n).join("=");
        }
        return window.atob(e);
      },
      s = function (t) {
        var e = window.btoa(t),
          n = e.replace(/\+/gi, "-").replace(/\//gi, "_").replace(/=/gi, "");
        return n;
      };
    ((l.decode = e), (l.encode = s));
  },
  98,
);
