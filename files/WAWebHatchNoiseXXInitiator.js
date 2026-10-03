__d(
  "WAWebHatchNoiseXXInitiator",
  [
    "WAWebHatchNoiseBytes",
    "WAWebHatchNoiseSymmetricState",
    "WAWebHatchNoiseX25519",
    "asyncToGeneratorRuntime",
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = 32,
      s = 16,
      u = (function () {
        function t(e, t) {
          (e === void 0 && (e = o("WAWebHatchNoiseX25519").generateKeyPair),
            t === void 0 && (t = o("WAWebHatchNoiseX25519").generateKeyPair),
            (this.$1 = new (o(
              "WAWebHatchNoiseSymmetricState",
            ).WAWebHatchNoiseSymmetricState)()),
            (this.$2 = null),
            (this.$3 = null),
            (this.$4 = null),
            (this.$5 = null),
            (this.$6 = "C"),
            (this.$7 = e),
            (this.$8 = t));
        }
        var a = t.prototype;
        return (
          (a.$9 = function (t, n) {
            if (this.$6 === "D")
              throw r("err")(
                "WAWebHatchNoiseXXInitiator: " +
                  n +
                  " called on dead handshake",
              );
            if (this.$6 !== t)
              throw r("err")(
                "WAWebHatchNoiseXXInitiator: " + n + " called in wrong phase",
              );
          }),
          (a.initialize = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
              (this.$9("C", "initialize"), (this.$6 = "B"));
              try {
                (yield this.$1.initialize(),
                  this.$9("B", "initialize"),
                  (this.$6 = "I"));
              } catch (e) {
                throw (this.destroy(), e);
              }
            });
            function t() {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          (a.writeMessage1 = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e) {
                (e === void 0 && (e = new Uint8Array(0)),
                  this.$9("I", "writeMessage1"),
                  (this.$6 = "B"));
                try {
                  var t = yield this.$7();
                  if (this.$6 !== "B")
                    throw (
                      o("WAWebHatchNoiseX25519").destroyKeyPair(t),
                      r("err")(
                        "WAWebHatchNoiseXXInitiator: concurrent message 1",
                      )
                    );
                  ((this.$2 = t), yield this.$1.mixHash(t.publicKeyBytes));
                  var n = yield this.$1.encryptAndHash(e);
                  return (
                    this.$9("B", "writeMessage1"),
                    (this.$6 = "M1"),
                    o("WAWebHatchNoiseBytes").concat(t.publicKeyBytes, n)
                  );
                } catch (e) {
                  throw (this.destroy(), e);
                }
              },
            );
            function t(t) {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          (a.readMessage2 = (function () {
            var t = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (t) {
                if ((this.$9("M1", "readMessage2"), t.length < e * 2 + s * 2))
                  throw (
                    this.destroy(),
                    r("err")(
                      "WAWebHatchNoiseXXInitiator: message 2 is too short",
                    )
                  );
                this.$6 = "B";
                try {
                  var n = this.$2;
                  if (n == null)
                    throw r("err")(
                      "WAWebHatchNoiseXXInitiator: missing ephemeral key",
                    );
                  var o = t.slice(0, e);
                  ((this.$4 = o),
                    yield this.$1.mixHash(o),
                    yield this.$10(n.privateKeyBytes, o));
                  var a = yield this.$1.decryptAndHash(
                    t.subarray(e, e * 2 + s),
                  );
                  ((this.$5 = a), yield this.$10(n.privateKeyBytes, a));
                  var i = yield this.$1.decryptAndHash(t.subarray(e * 2 + s));
                  return (this.$9("B", "readMessage2"), (this.$6 = "M2"), i);
                } catch (e) {
                  throw (this.destroy(), e);
                }
              },
            );
            function o(e) {
              return t.apply(this, arguments);
            }
            return o;
          })()),
          (a.writeMessage3 = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e) {
                (e === void 0 && (e = new Uint8Array(0)),
                  this.$9("M2", "writeMessage3"),
                  (this.$6 = "B"));
                try {
                  var t = yield this.$8();
                  if (this.$6 !== "B")
                    throw (
                      o("WAWebHatchNoiseX25519").destroyKeyPair(t),
                      r("err")(
                        "WAWebHatchNoiseXXInitiator: concurrent message 3",
                      )
                    );
                  this.$3 = t;
                  var n = yield this.$1.encryptAndHash(t.publicKeyBytes),
                    a = this.$4;
                  if (a == null)
                    throw r("err")(
                      "WAWebHatchNoiseXXInitiator: missing remote ephemeral key",
                    );
                  yield this.$10(t.privateKeyBytes, a);
                  var i = yield this.$1.encryptAndHash(e);
                  return (
                    this.$9("B", "writeMessage3"),
                    (this.$6 = "M3"),
                    o("WAWebHatchNoiseBytes").concat(n, i)
                  );
                } catch (e) {
                  throw (this.destroy(), e);
                }
              },
            );
            function t(t) {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          (a.split = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
              (this.$9("M3", "split"), (this.$6 = "S"));
              try {
                var e = yield this.$1.split();
                if (this.$6 !== "S")
                  throw (
                    e[0].destroy(),
                    e[1].destroy(),
                    r("err")("WAWebHatchNoiseXXInitiator: concurrent split")
                  );
                return (this.$11(), e);
              } catch (e) {
                throw (this.destroy(), e);
              }
            });
            function t() {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          (a.remoteStaticPublicKey = function () {
            var e, t;
            if (this.$6 !== "M2" && this.$6 !== "M3" && this.$6 !== "S")
              throw r("err")(
                "WAWebHatchNoiseXXInitiator: remote static key is unavailable",
              );
            return (e = (t = this.$5) == null ? void 0 : t.slice()) != null
              ? e
              : null;
          }),
          (a.handshakeHash = function () {
            if (this.$6 !== "M2" && this.$6 !== "M3" && this.$6 !== "S")
              throw r("err")(
                "WAWebHatchNoiseXXInitiator: handshake hash is unavailable",
              );
            return this.$1.handshakeHash();
          }),
          (a.$10 = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e, t) {
                var n = yield o("WAWebHatchNoiseX25519").dh(e, t);
                try {
                  yield this.$1.mixKey(n);
                } finally {
                  o("WAWebHatchNoiseBytes").zeroBytes(n);
                }
              },
            );
            function t(t, n) {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          (a.$11 = function () {
            for (var e of [this.$2, this.$3])
              e != null && o("WAWebHatchNoiseX25519").destroyKeyPair(e);
            (this.$4 != null && o("WAWebHatchNoiseBytes").zeroBytes(this.$4),
              (this.$2 = null),
              (this.$3 = null),
              (this.$4 = null));
          }),
          (a.destroy = function () {
            (this.$11(),
              this.$5 != null &&
                (o("WAWebHatchNoiseBytes").zeroBytes(this.$5),
                (this.$5 = null)),
              this.$1.destroy(),
              (this.$6 = "D"));
          }),
          t
        );
      })();
    l.WAWebHatchNoiseXXInitiator = u;
  },
  98,
);
