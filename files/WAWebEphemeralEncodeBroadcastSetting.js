__d(
  "WAWebEphemeralEncodeBroadcastSetting",
  [
    "WABase64",
    "WABinary",
    "WAWebEphemeralDecodeBroadcastSetting",
    "WAWebProtobufsEphemeral.pb",
    "asyncToGeneratorRuntime",
    "encodeProtobuf",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e, t, n) {
      return s.apply(this, arguments);
    }
    function s() {
      return (
        (s = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
          var r = e.slice(0, 12),
            o = e.slice(12, 44),
            a = yield self.crypto.subtle.importKey("raw", o, "AES-GCM", !1, [
              "encrypt",
            ]);
          return self.crypto.subtle.encrypt(
            { name: "AES-GCM", iv: new Uint8Array(r), additionalData: n },
            a,
            t,
          );
        })),
        s.apply(this, arguments)
      );
    }
    function u(e) {
      return c.apply(this, arguments);
    }
    function c() {
      return (
        (c = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
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
            g = yield o("WAWebEphemeralDecodeBroadcastSetting").deriveKey(l, p),
            h = yield e(g, f, _);
          return o("WABase64").encodeB64(h);
        })),
        c.apply(this, arguments)
      );
    }
    function d() {
      var e = new Uint8Array(32);
      return (self.crypto.getRandomValues(e), e);
    }
    ((l.encodeBroadcastEphemeralSetting = u),
      (l.generateEphemeralSharedSecret = d));
  },
  98,
);
