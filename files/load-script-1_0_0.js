__d(
  "load-script-1.0.0",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = {},
      l = { exports: e };
    function s() {
      l.exports = function (o, a, i) {
        var r = document.head || document.getElementsByTagName("head")[0],
          l = document.createElement("script");
        (typeof a == "function" && ((i = a), (a = {})),
          (a = a || {}),
          (i = i || function () {}),
          (l.type = a.type || "text/javascript"),
          (l.charset = a.charset || "utf8"),
          (l.async = "async" in a ? !!a.async : !0),
          (l.src = o),
          a.attrs && e(l, a.attrs),
          a.text && (l.text = "" + a.text));
        var s = "onload" in l ? t : n;
        (s(l, i), l.onload || t(l, i), r.appendChild(l));
      };
      function e(e, t) {
        for (var n in t) e.setAttribute(n, t[n]);
      }
      function t(e, t) {
        ((e.onload = function () {
          ((this.onerror = this.onload = null), t(null, e));
        }),
          (e.onerror = function () {
            ((this.onerror = this.onload = null),
              t(new Error("Failed to load " + this.src), e));
          }));
      }
      function n(e, t) {
        e.onreadystatechange = function () {
          (this.readyState != "complete" && this.readyState != "loaded") ||
            ((this.onreadystatechange = null), t(null, e));
        };
      }
    }
    var u = !1;
    function c() {
      return (u || ((u = !0), s()), l.exports);
    }
    function d(e) {
      switch (e) {
        case void 0:
          return c();
      }
    }
    a.exports = d;
  },
  null,
);
