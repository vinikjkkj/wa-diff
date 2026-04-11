__d(
  "oz-player/shims/www/OzURIWWWImplConstUri",
  ["ConstUriUtils", "err"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      var t = e.getQueryParams(),
        n = {};
      return (
        t.forEach(function (e, t) {
          typeof e == "string" || typeof e == "number"
            ? (n[t] = e)
            : (n[t] = String(e));
        }),
        n
      );
    }
    var s = (function () {
      function t(t) {
        if (((this.$1 = o("ConstUriUtils").getUri(t)), this.$1 == null))
          throw r("err")("Invalid URI passed to OzURI");
        this.$2 = e(this.$1);
      }
      var n = t.prototype;
      return (
        (n.addQueryData = function (n, r) {
          var t = this.$1;
          if (typeof n == "string") {
            var o;
            t =
              (o = t) == null
                ? void 0
                : o.addQueryParam(n, r === void 0 ? "" : r);
          } else {
            var a,
              i = new Map();
            (Object.keys(n).forEach(function (e) {
              i.set(e, n[e]);
            }),
              (t = (a = t) == null ? void 0 : a.addQueryParams(i)));
          }
          t != null && ((this.$1 = t), (this.$2 = e(this.$1)));
        }),
        (n.getQueryData = function () {
          return this.$2;
        }),
        (n.getDomain = function () {
          var e, t;
          return (e = (t = this.$1) == null ? void 0 : t.getDomain()) != null
            ? e
            : "";
        }),
        (n.toString = function () {
          var e, t;
          return (e = (t = this.$1) == null ? void 0 : t.toString()) != null
            ? e
            : "";
        }),
        (n.getPath = function () {
          var e, t;
          return (e = (t = this.$1) == null ? void 0 : t.getPath()) != null
            ? e
            : "";
        }),
        t
      );
    })();
    l.default = s;
  },
  98,
);
