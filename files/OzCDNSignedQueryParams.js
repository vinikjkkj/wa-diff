__d(
  "OzCDNSignedQueryParams",
  ["ConstUriUtils"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = (function () {
      function e() {
        this.$1 = {};
      }
      var t = e.prototype;
      return (
        (t.$2 = function (t, n, r) {
          (this.$1[t] == null && (this.$1[t] = {}), (this.$1[t][n] = r));
        }),
        (t.get = function (t) {
          var e = this.$1[t];
          return e == null ? null : e;
        }),
        (t.update = function (t) {
          var e = o("ConstUriUtils").getUri(t);
          if (e != null) {
            var n = e.getQueryParams(),
              r = e.getDomain() + e.getPath(),
              a = n.get("oe");
            (a != null && this.$2(r, "oe", String(n.get("oe"))),
              n.get("oh") != null && this.$2(r, "oh", String(n.get("oh"))));
          }
        }),
        e
      );
    })();
    l.default = e;
  },
  98,
);
