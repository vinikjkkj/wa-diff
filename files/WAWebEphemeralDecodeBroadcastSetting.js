__d(
  "WAWebEphemeralDecodeBroadcastSetting",
  [
    "WABase64",
    "WABinary",
    "WACustomError",
    "WATimeUtils",
    "WAWebProtobufsEphemeral.pb",
    "asyncToGeneratorRuntime",
    "decodeProtobuf",
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    var e = new Uint8Array(32);
    function s(e, t) {
      return u.apply(this, arguments);
    }
    function u() {
      return (
        (u = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, n) {
          var r = yield self.crypto.subtle.importKey("raw", t, "HKDF", !1, [
              "deriveKey",
            ]),
            o = yield self.crypto.subtle.deriveKey(
              { name: "HKDF", hash: "SHA-256", salt: e, info: n },
              r,
              { name: "HMAC", hash: "SHA-256" },
              !0,
              ["verify"],
            );
          return self.crypto.subtle.exportKey("raw", o);
        })),
        u.apply(this, arguments)
      );
    }
    function c(e, t, n) {
      return d.apply(this, arguments);
    }
    function d() {
      return (
        (d = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
          var r = e.slice(0, 12),
            o = e.slice(12, 44),
            a = yield self.crypto.subtle.importKey("raw", o, "AES-GCM", !1, [
              "decrypt",
            ]);
          return self.crypto.subtle.decrypt(
            { name: "AES-GCM", iv: new Uint8Array(r), additionalData: n },
            a,
            t,
          );
        })),
        d.apply(this, arguments)
      );
    }
    function m(e) {
      return p.apply(this, arguments);
    }
    function p() {
      return (
        (p = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.broadcastJid,
            n = e.ephSetting,
            a = e.recipient,
            i = e.sender,
            l = e.sharedSecret,
            u = t.toString({ legacy: !0 }),
            d = a.toString({ legacy: !0 }),
            m = i.toString({ legacy: !0 }),
            p = "Ephemeral " + d + " " + u,
            f = o("WABinary").Binary.build(p).readByteArrayView(),
            g = new Uint8Array(l),
            h = o("WABase64").decodeB64(n),
            y = o("WABinary").Binary.build(m).readBuffer(),
            C = yield s(g, f);
          try {
            var b = yield c(C, h, y),
              v = o("decodeProtobuf").decodeProtobuf(
                o("WAWebProtobufsEphemeral.pb").EphemeralSettingSpec,
                b,
              ),
              S = v.duration,
              R = v.timestamp;
            if (S == null || R == null)
              throw r("err")("ephSetting decoded into malformed proto");
            return {
              ephemeralDuration: S,
              ephemeralSettingTimestamp:
                o("WATimeUtils").castLongIntToUnixTime(R),
            };
          } catch (e) {
            throw new _(e instanceof Error ? e.message : String(e));
          }
        })),
        p.apply(this, arguments)
      );
    }
    var _ = (function (e) {
      function t(t) {
        var n;
        return (
          (n = e.call(this, t != null ? t : "") || this),
          (n.name = "BroadcastEphSettingsError"),
          n
        );
      }
      return (babelHelpers.inheritsLoose(t, e), t);
    })(o("WACustomError").CustomError);
    ((l.deriveKey = s),
      (l.decodeBroadcastEphemeralSetting = m),
      (l.BroadcastEphSettingsError = _));
  },
  98,
);
