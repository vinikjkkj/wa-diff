__d(
  "WANoiseSocket",
  ["WACryptoDependencies", "WALogger", "WAPromiseQueue"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = Promise.reject("UNINITIALIZED HANDSHAKE"),
      u = new Uint8Array(0);
    s.catch(function () {});
    var c = (function () {
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
            a.$5.enqueueHandlers(p(a.$2, t, void 0, e), a.$15);
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
      var n = t.prototype;
      return (
        (n.sendFrameAsync = async function (t) {
          var e = await this.sendFrame(t);
          return e;
        }),
        (n.sendFrame = function (t) {
          if (this.$9) return Promise.resolve();
          this.$1.throwIfClosed();
          var e = this.$8++;
          return this.$6.enqueueHandlers(m(this.$3, e, void 0, t), this.$14);
        }),
        (n.setOnFrame = function (t) {
          this.$10 = t;
        }),
        (n.setOnClose = function (t) {
          this.$11 = t;
        }),
        (n.close = function () {
          this.$1.close();
        }),
        t
      );
    })();
    function d(e) {
      var t = new ArrayBuffer(12),
        n = new DataView(t);
      return (n.setUint32(8, e), new Uint8Array(t));
    }
    function m(e, t, n, r) {
      return o("WACryptoDependencies")
        .getCrypto()
        .subtle.encrypt(
          {
            name: "AES-GCM",
            iv: d(t),
            additionalData: n ? new Uint8Array(n) : u,
          },
          e,
          r,
        );
    }
    function p(e, t, n, r) {
      return o("WACryptoDependencies")
        .getCrypto()
        .subtle.decrypt(
          {
            name: "AES-GCM",
            iv: d(t),
            additionalData: n ? new Uint8Array(n) : u,
          },
          e,
          r,
        );
    }
    l.NoiseSocket = c;
  },
  98,
);
