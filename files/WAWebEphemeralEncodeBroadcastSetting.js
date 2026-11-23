__d(
  "WAWebEphemeralEncodeBroadcastSetting",
  [
    "WABase64",
    "WABinary",
    "WAWebEphemeralDecodeBroadcastSetting",
    "WAWebProtobufsEphemeral.pb",
    "encodeProtobuf",
  ],
  function (t, n, r, o, a, i, l) {
    async function e(e, t, n) {
      var r = e.slice(0, 12),
        o = e.slice(12, 44),
        a = await self.crypto.subtle.importKey("raw", o, "AES-GCM", !1, [
          "encrypt",
        ]);
      return self.crypto.subtle.encrypt(
        { name: "AES-GCM", iv: new Uint8Array(r), additionalData: n },
        a,
        t,
      );
    }
    async function s(t) {
      var n = t.broadcastJid,
        r = t.duration,
        a = t.recipient,
        i = t.sender,
        l = t.sharedSecret,
        s = t.timestamp,
        u = n.toString({ legacy: !0 }),
        c = a.toString({ legacy: !0 }),
        d = i.toString({ legacy: !0 }),
        m = "Ephemeral " + c + " " + u,
        p = o("WABinary").Binary.build(m).readByteArrayView(),
        _ = o("WABinary").Binary.build(d).readBuffer(),
        f = o("encodeProtobuf")
          .encodeProtobuf(
            o("WAWebProtobufsEphemeral.pb").EphemeralSettingSpec,
            { duration: r, timestamp: s },
          )
          .readBuffer(),
        g = await o("WAWebEphemeralDecodeBroadcastSetting").deriveKey(l, p),
        h = await e(g, f, _);
      return o("WABase64").encodeB64(h);
    }
    function u() {
      var e = new Uint8Array(32);
      return (self.crypto.getRandomValues(e), e);
    }
    ((l.encodeBroadcastEphemeralSetting = s),
      (l.generateEphemeralSharedSecret = u));
  },
  98,
);
