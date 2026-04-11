__d(
  "WANoiseSocket",
  [
    "Promise",
    "WACryptoDependencies",
    "WALogger",
    "WAPromiseQueue",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u = (s || (s = n("Promise"))).reject("UNINITIALIZED HANDSHAKE"),
      c = new Uint8Array(0);
    u.catch(function () {});
    var d = (function () {
      function t(t, n, r) {
        var a = this;
        ((this.$4 = []),
          (this.$5 = new (o("WAPromiseQueue").PromiseQueue)()),
          (this.$6 = new (o("WAPromiseQueue").PromiseQueue)()),
          (this.$7 = 0),
          (this.$8 = 0),
          (this.$9 = !1),
          (this.$14 = function (t) {
            a.$1.closed
              ? o("WALogger").LOG(
                  e ||
                    (e = babelHelpers.taggedTemplateLiteralLoose([
                      "NoiseSocket socket closed while encrypting frame",
                    ])),
                )
              : a.$1.sendFrame(t);
          }),
          (this.$12 = function (e) {
            var t = a.$7++;
            a.$5.enqueueHandlers(_(a.$2, t, void 0, e), a.$15);
          }),
          (this.$13 = function () {
            ((a.$9 = !0),
              a.$5.wait().then(function () {
                a.$9 = !1;
                var e = a.$11;
                e && e();
              }));
          }),
          (this.$15 = function (e) {
            a.$10 ? a.$10(e) : a.$4.push(e);
          }),
          (this.$1 = t),
          (this.$3 = n),
          (this.$2 = r),
          (t.onFrame = this.$12),
          (this.$1.onClose = this.$13),
          t.convertBufferedToFrames());
      }
      var r = t.prototype;
      return (
        (r.sendFrameAsync = (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
            var t = yield this.sendFrame(e);
            return t;
          });
          function t(t) {
            return e.apply(this, arguments);
          }
          return t;
        })()),
        (r.sendFrame = function (t) {
          if (this.$9) return (s || (s = n("Promise"))).resolve();
          this.$1.throwIfClosed();
          var e = this.$8++;
          return this.$6.enqueueHandlers(p(this.$3, e, void 0, t), this.$14);
        }),
        (r.setOnFrame = function (t) {
          this.$10 = t;
        }),
        (r.setOnClose = function (t) {
          this.$11 = t;
        }),
        (r.close = function () {
          this.$1.close();
        }),
        t
      );
    })();
    function m(e) {
      var t = new ArrayBuffer(12),
        n = new DataView(t);
      return (n.setUint32(8, e), new Uint8Array(t));
    }
    function p(e, t, n, r) {
      return o("WACryptoDependencies")
        .getCrypto()
        .subtle.encrypt(
          {
            name: "AES-GCM",
            iv: m(t),
            additionalData: n ? new Uint8Array(n) : c,
          },
          e,
          r,
        );
    }
    function _(e, t, n, r) {
      return o("WACryptoDependencies")
        .getCrypto()
        .subtle.decrypt(
          {
            name: "AES-GCM",
            iv: m(t),
            additionalData: n ? new Uint8Array(n) : c,
          },
          e,
          r,
        );
    }
    l.NoiseSocket = d;
  },
  98,
);
