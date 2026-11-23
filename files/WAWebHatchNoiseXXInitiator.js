__d(
  "WAWebHatchNoiseXXInitiator",
  [
    "WAWebHatchNoiseBytes",
    "WAWebHatchNoiseSymmetricState",
    "WAWebHatchNoiseX25519",
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
        var n = t.prototype;
        return (
          (n.$9 = function (t, n) {
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
          (n.initialize = async function () {
            (this.$9("C", "initialize"), (this.$6 = "B"));
            try {
              (await this.$1.initialize(),
                this.$9("B", "initialize"),
                (this.$6 = "I"));
            } catch (e) {
              throw (this.destroy(), e);
            }
          }),
          (n.writeMessage1 = async function (t) {
            (t === void 0 && (t = new Uint8Array(0)),
              this.$9("I", "writeMessage1"),
              (this.$6 = "B"));
            try {
              var e = await this.$7();
              if (this.$6 !== "B")
                throw (
                  o("WAWebHatchNoiseX25519").destroyKeyPair(e),
                  r("err")("WAWebHatchNoiseXXInitiator: concurrent message 1")
                );
              ((this.$2 = e), await this.$1.mixHash(e.publicKeyBytes));
              var n = await this.$1.encryptAndHash(t);
              return (
                this.$9("B", "writeMessage1"),
                (this.$6 = "M1"),
                o("WAWebHatchNoiseBytes").concat(e.publicKeyBytes, n)
              );
            } catch (e) {
              throw (this.destroy(), e);
            }
          }),
          (n.readMessage2 = async function (n) {
            if ((this.$9("M1", "readMessage2"), n.length < e * 2 + s * 2))
              throw (
                this.destroy(),
                r("err")("WAWebHatchNoiseXXInitiator: message 2 is too short")
              );
            this.$6 = "B";
            try {
              var t = this.$2;
              if (t == null)
                throw r("err")(
                  "WAWebHatchNoiseXXInitiator: missing ephemeral key",
                );
              var o = n.slice(0, e);
              ((this.$4 = o),
                await this.$1.mixHash(o),
                await this.$10(t.privateKeyBytes, o));
              var a = await this.$1.decryptAndHash(n.subarray(e, e * 2 + s));
              ((this.$5 = a), await this.$10(t.privateKeyBytes, a));
              var i = await this.$1.decryptAndHash(n.subarray(e * 2 + s));
              return (this.$9("B", "readMessage2"), (this.$6 = "M2"), i);
            } catch (e) {
              throw (this.destroy(), e);
            }
          }),
          (n.writeMessage3 = async function (t) {
            (t === void 0 && (t = new Uint8Array(0)),
              this.$9("M2", "writeMessage3"),
              (this.$6 = "B"));
            try {
              var e = await this.$8();
              if (this.$6 !== "B")
                throw (
                  o("WAWebHatchNoiseX25519").destroyKeyPair(e),
                  r("err")("WAWebHatchNoiseXXInitiator: concurrent message 3")
                );
              this.$3 = e;
              var n = await this.$1.encryptAndHash(e.publicKeyBytes),
                a = this.$4;
              if (a == null)
                throw r("err")(
                  "WAWebHatchNoiseXXInitiator: missing remote ephemeral key",
                );
              await this.$10(e.privateKeyBytes, a);
              var i = await this.$1.encryptAndHash(t);
              return (
                this.$9("B", "writeMessage3"),
                (this.$6 = "M3"),
                o("WAWebHatchNoiseBytes").concat(n, i)
              );
            } catch (e) {
              throw (this.destroy(), e);
            }
          }),
          (n.split = async function () {
            (this.$9("M3", "split"), (this.$6 = "S"));
            try {
              var e = await this.$1.split();
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
          }),
          (n.remoteStaticPublicKey = function () {
            var e, t;
            if (this.$6 !== "M2" && this.$6 !== "M3" && this.$6 !== "S")
              throw r("err")(
                "WAWebHatchNoiseXXInitiator: remote static key is unavailable",
              );
            return (e = (t = this.$5) == null ? void 0 : t.slice()) != null
              ? e
              : null;
          }),
          (n.handshakeHash = function () {
            if (
              this.$6 !== "M1" &&
              this.$6 !== "M2" &&
              this.$6 !== "M3" &&
              this.$6 !== "S"
            )
              throw r("err")(
                "WAWebHatchNoiseXXInitiator: handshake hash is unavailable",
              );
            return this.$1.handshakeHash();
          }),
          (n.$10 = async function (t, n) {
            var e = await o("WAWebHatchNoiseX25519").dh(t, n);
            try {
              await this.$1.mixKey(e);
            } finally {
              o("WAWebHatchNoiseBytes").zeroBytes(e);
            }
          }),
          (n.$11 = function () {
            for (var e of [this.$2, this.$3])
              e != null && o("WAWebHatchNoiseX25519").destroyKeyPair(e);
            (this.$4 != null && o("WAWebHatchNoiseBytes").zeroBytes(this.$4),
              (this.$2 = null),
              (this.$3 = null),
              (this.$4 = null));
          }),
          (n.destroy = function () {
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
