__d(
  "WAWebMdClientSessionIdUtils",
  [
    "WABase64",
    "WABinary",
    "WACryptoSha256",
    "WAWebAltDeviceLinkingApi",
    "WAWebConnModel",
    "WAWebPairingType",
    "WAWebUserPrefsInfoStore",
    "asyncToGeneratorRuntime",
    "justknobx",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      return s.apply(this, arguments);
    }
    function s() {
      return (
        (s = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = o("WAWebAltDeviceLinkingApi").getPairingType();
          return t === o("WAWebPairingType").PairingType.ALT_DEVICE_LINKING &&
            r("justknobx")._("527")
            ? u()
            : d(e);
        })),
        s.apply(this, arguments)
      );
    }
    function u() {
      return c.apply(this, arguments);
    }
    function c() {
      return (
        (c = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e = o("WAWebAltDeviceLinkingApi").getCurrentRef(),
            t = o("WAWebAltDeviceLinkingApi").getCurrentHelloCached();
          if (
            e == null ||
            (t == null
              ? void 0
              : t.linkCodePairingWrappedCompanionEphemeralPub) == null
          )
            return null;
          var n = t.linkCodePairingWrappedCompanionEphemeralPub;
          if (n.byteLength === 0 || e.byteLength === 0) return null;
          var r = new (o("WABinary").Binary)();
          (r.writeBuffer(n), r.writeByteArray(e));
          var a = r.readByteArrayView(),
            i = yield o("WACryptoSha256").sha256(a);
          return o("WABase64").encodeB64(i);
        })),
        c.apply(this, arguments)
      );
    }
    function d(e) {
      return m.apply(this, arguments);
    }
    function m() {
      return (
        (m = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t,
            n = yield o("WAWebUserPrefsInfoStore").waNoiseInfo.get();
          if (!n) return null;
          var r =
              n == null || (t = n.staticKeyPair) == null ? void 0 : t.pubKey,
            a = o("WAWebConnModel").Conn.ref;
          if (!a || a.length === 0 || e.byteLength === 0 || r.byteLength === 0)
            return null;
          var i = new (o("WABinary").Binary)();
          (i.writeBuffer(e), i.writeBuffer(r));
          for (var l = 0; l < a.length; l++) i.write(a.charCodeAt(l));
          var s = i.readByteArrayView(),
            u = yield o("WACryptoSha256").sha256(s);
          return o("WABase64").encodeB64(u);
        })),
        m.apply(this, arguments)
      );
    }
    l.genMdClientSessionId = e;
  },
  98,
);
