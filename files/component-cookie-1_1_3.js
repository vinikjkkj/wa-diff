__d(
  "component-cookie-1.1.3",
  ["debug-0.0.0"],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = n("debug-0.0.0"),
      l = {},
      s = { exports: l };
    function u() {
      var t = e()("cookie");
      s.exports = function (e, t, a) {
        switch (arguments.length) {
          case 3:
          case 2:
            return n(e, t, a);
          case 1:
            return o(e);
          default:
            return r();
        }
      };
      function n(e, t, n) {
        n = n || {};
        var r = i(e) + "=" + i(t);
        (t == null && (n.maxage = -1),
          n.maxage && (n.expires = new Date(+new Date() + n.maxage)),
          n.path && (r += "; path=" + n.path),
          n.domain && (r += "; domain=" + n.domain),
          n.expires && (r += "; expires=" + n.expires.toUTCString()),
          n.secure && (r += "; secure"),
          (document.cookie = r));
      }
      function r() {
        var e;
        try {
          e = document.cookie || "";
        } catch (e) {
          return (
            typeof console != "undefined" &&
              typeof console.error == "function" &&
              e.stack,
            {}
          );
        }
        return a(e);
      }
      function o(e) {
        return r()[e];
      }
      function a(e) {
        var t = {},
          n = e.split(/ *; */),
          r;
        if (n[0] == "") return t;
        for (var o = 0; o < n.length; ++o)
          ((r = n[o].split("=")), (t[l(r[0])] = l(r[1])));
        return t;
      }
      function i(e) {
        try {
          return encodeURIComponent(e);
        } catch (n) {
          t("error `encode(%o)` - %o", e, n);
        }
      }
      function l(e) {
        try {
          return decodeURIComponent(e);
        } catch (n) {
          t("error `decode(%o)` - %o", e, n);
        }
      }
    }
    var c = !1;
    function d() {
      return (c || ((c = !0), u()), s.exports);
    }
    function m(e) {
      switch (e) {
        case void 0:
          return d();
      }
    }
    a.exports = m;
  },
  null,
);
