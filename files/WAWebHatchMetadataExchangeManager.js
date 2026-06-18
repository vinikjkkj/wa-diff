__d(
  "WAWebHatchMetadataExchangeManager",
  ["Promise"],
  function (t, n, r, o, a, i) {
    "use strict";
    var e,
      l = 3e5,
      s = (function () {
        function t() {
          ((this.$1 = new Map()), (this.$2 = new Map()));
        }
        var r = t.prototype;
        return (
          (r.register = function (r, o) {
            var t = this;
            return (
              o === void 0 && (o = l),
              new (e || (e = n("Promise")))(function (e) {
                (t.$1.set(r, e),
                  t.$2.set(
                    r,
                    window.setTimeout(function () {
                      t.$3(r, { outcome: "timeout" });
                    }, o),
                  ));
              })
            );
          }),
          (r.resolveRequest = function (t, n) {
            this.$3(t, { outcome: "response", response: n });
          }),
          (r.failRequest = function (t, n) {
            t != null &&
              this.$3(
                t,
                n === "send_failed"
                  ? { outcome: "send_failed" }
                  : { outcome: "decode_failed" },
              );
          }),
          (r.__resetForTesting = function () {
            for (var e of this.$2.values()) window.clearTimeout(e);
            ((this.$1 = new Map()), (this.$2 = new Map()));
          }),
          (r.$3 = function (t, n) {
            var e = this.$2.get(t);
            e != null && (window.clearTimeout(e), this.$2.delete(t));
            var r = this.$1.get(t);
            r != null && (this.$1.delete(t), r(n));
          }),
          t
        );
      })(),
      u = new s(),
      c = u;
    i.default = c;
  },
  66,
);
