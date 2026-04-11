__d(
  "oz-player/networks/OzHTTPHeaders",
  ["oz-player/shims/ozvariant"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = (function () {
        function e() {
          this.$1 = new Map();
        }
        var t = e.prototype;
        return (
          (t.append = function (t, n) {
            var e = t.toLowerCase(),
              r = this.$1.get(e);
            r != null ? this.$1.set(e, r + ", " + n) : this.$1.set(e, n);
          }),
          (t.get = function (t) {
            var e = t.toLowerCase(),
              n = this.$1.get(e);
            return n != null ? n : null;
          }),
          (t.entries = function () {
            return this.$1.entries();
          }),
          (t.has = function (t) {
            return this.get(t) !== null;
          }),
          e
        );
      })(),
      s = t.Headers,
      u = s && s.prototype,
      c =
        s &&
        u &&
        typeof u.append == "function" &&
        typeof u.entries == "function" &&
        typeof u.get == "function" &&
        typeof u.has == "function"
          ? s
          : e;
    function d(e) {
      if (e == null) return null;
      if (
        typeof e == "object" &&
        typeof e.append == "function" &&
        typeof e.get == "function" &&
        typeof e.has == "function"
      ) {
        if (typeof e.entries == "function") return e;
        if (typeof e.forEach == "function") {
          var t = new c();
          return (
            e.forEach(function (e, n) {
              t.append(n, e);
            }),
            t
          );
        }
      }
      return (
        r("oz-player/shims/ozvariant")(
          !1,
          "Malformed Headers object: %s %s",
          typeof e,
          String(e),
        ),
        null
      );
    }
    ((l.OzHTTPHeaders = c), (l.maybeConvertHeadersToOzHTTPHeaders = d));
  },
  98,
);
