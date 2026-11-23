__d(
  "WAWebEphemeralDecodeBroadcastSetting",
  [
    "WABase64",
    "WABinary",
    "WACustomError",
    "WATimeUtils",
    "WAWebProtobufsEphemeral.pb",
    "decodeProtobuf",
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    var e = new Uint8Array(32);
    async function s(t, n) {
      var r = await self.crypto.subtle.importKey("raw", t, "HKDF", !1, [
          "deriveKey",
        ]),
        o = await self.crypto.subtle.deriveKey(
          { name: "HKDF", hash: "SHA-256", salt: e, info: n },
          r,
          { name: "HMAC", hash: "SHA-256" },
          !0,
          ["verify"],
        );
      return self.crypto.subtle.exportKey("raw", o);
    }
    async function u(e, t, n) {
      var r = e.slice(0, 12),
        o = e.slice(12, 44),
        a = await self.crypto.subtle.importKey("raw", o, "AES-GCM", !1, [
          "decrypt",
        ]);
      return self.crypto.subtle.decrypt(
        { name: "AES-GCM", iv: new Uint8Array(r), additionalData: n },
        a,
        t,
      );
    }
    async function c(e) {
      var t = e.broadcastJid,
        n = e.ephSetting,
        a = e.recipient,
        i = e.sender,
        l = e.sharedSecret,
        c = t.toString({ legacy: !0 }),
        m = a.toString({ legacy: !0 }),
        p = i.toString({ legacy: !0 }),
        _ = "Ephemeral " + m + " " + c,
        f = o("WABinary").Binary.build(_).readByteArrayView(),
        g = new Uint8Array(l),
        h = o("WABase64").decodeB64(n),
        y = o("WABinary").Binary.build(p).readBuffer(),
        C = await s(g, f);
      try {
        var b = await u(C, h, y),
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
          ephemeralSettingTimestamp: o("WATimeUtils").castLongIntToUnixTime(R),
        };
      } catch (e) {
        throw new d(e instanceof Error ? e.message : String(e));
      }
    }
    var d = (function (e) {
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
      (l.decodeBroadcastEphemeralSetting = c),
      (l.BroadcastEphSettingsError = d));
  },
  98,
);
