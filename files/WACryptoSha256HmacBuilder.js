__d(
  "WACryptoSha256HmacBuilder",
  ["WACryptoSha256BuilderV2"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = (function () {
      function e(e) {
        ((this.$1 = new (o("WACryptoSha256BuilderV2").Sha256BuilderV2)()),
          (this.$2 = new Uint8Array(0)),
          this.reset(e));
      }
      var t = e.prototype;
      return (
        (t.reset = function (t) {
          ((this.$2 = new Uint8Array(64)),
            t.length > 64
              ? this.$2.set(
                  new (o("WACryptoSha256BuilderV2").Sha256BuilderV2)()
                    .update(t)
                    .finish(),
                  0,
                )
              : this.$2.set(t, 0));
          var e = this.$2.map(function (e) {
            return e ^ 54;
          });
          this.$1 = new (o("WACryptoSha256BuilderV2").Sha256BuilderV2)().update(
            e,
          );
        }),
        (t.update = function (t) {
          return (this.$1.update(t), this);
        }),
        (t.finish = function () {
          var e = this.$2.map(function (e) {
              return e ^ 92;
            }),
            t = this.$1.finish();
          return new (o("WACryptoSha256BuilderV2").Sha256BuilderV2)()
            .update(e)
            .update(t)
            .finish();
        }),
        e
      );
    })();
    l.Sha256HMacBuilder = e;
  },
  98,
);
