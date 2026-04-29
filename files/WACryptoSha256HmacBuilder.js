__d(
  "WACryptoSha256HmacBuilder",
  ["WACryptoSha256Builder", "WACryptoSha256BuilderV2", "gkx"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e() {
      return r("gkx")("24703")
        ? new (o("WACryptoSha256BuilderV2").Sha256BuilderV2)()
        : new (o("WACryptoSha256Builder").Sha256Builder)();
    }
    var s = (function () {
      function t(t) {
        ((this.$1 = e()), (this.$2 = new Uint8Array(0)), this.reset(t));
      }
      var n = t.prototype;
      return (
        (n.reset = function (n) {
          ((this.$2 = new Uint8Array(64)),
            n.length > 64
              ? this.$2.set(e().update(n).finish(), 0)
              : this.$2.set(n, 0));
          var t = this.$2.map(function (e) {
            return e ^ 54;
          });
          this.$1 = e().update(t);
        }),
        (n.update = function (t) {
          return (this.$1.update(t), this);
        }),
        (n.finish = function () {
          var t = this.$2.map(function (e) {
              return e ^ 92;
            }),
            n = this.$1.finish();
          return e().update(t).update(n).finish();
        }),
        t
      );
    })();
    l.Sha256HMacBuilder = s;
  },
  98,
);
