__d(
  "CometAsyncFetchResponse",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      function e(e, t) {
        ((this.$1 = e), (this.$2 = this.$3(t)));
      }
      var t = e.prototype;
      return (
        (t.getFullResponsePayload = function () {
          return this.$1;
        }),
        (t.getResponsePayload = function () {
          var e;
          return (e = this.$1) == null ? void 0 : e.payload;
        }),
        (t.getResponseHeader = function (t) {
          var e;
          return (e = this.$2) == null ? void 0 : e.get(t.toLowerCase());
        }),
        (t.getAllResponseHeadersMap = function () {
          return new Map(this.$2);
        }),
        (t.$3 = function (t) {
          if (t == null || t.length === 0) return null;
          var e = new Map(),
            n = t.split("\r\n");
          for (var r of n) {
            var o = r.indexOf(": ");
            if (!(o <= 0)) {
              var a = r.substring(0, o).toLowerCase(),
                i = r.substring(o + 2),
                l = e.get(a),
                s = l != null ? l + ", " + i : i;
              e.set(a, s);
            }
          }
          return e;
        }),
        e
      );
    })();
    i.default = e;
  },
  66,
);
