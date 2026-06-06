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
    "justknobx",
  ],
  function (t, n, r, o, a, i, l) {
    async function e(e) {
      var t = o("WAWebAltDeviceLinkingApi").getPairingType();
      return t === o("WAWebPairingType").PairingType.ALT_DEVICE_LINKING &&
        r("justknobx")._("527")
        ? s()
        : u(e);
    }
    async function s() {
      var e = o("WAWebAltDeviceLinkingApi").getCurrentRef(),
        t = o("WAWebAltDeviceLinkingApi").getCurrentHelloCached();
      if (
        e == null ||
        (t == null ? void 0 : t.linkCodePairingWrappedCompanionEphemeralPub) ==
          null
      )
        return null;
      var n = t.linkCodePairingWrappedCompanionEphemeralPub;
      if (n.byteLength === 0 || e.byteLength === 0) return null;
      var r = new (o("WABinary").Binary)();
      (r.writeBuffer(n), r.writeByteArray(e));
      var a = r.readByteArrayView(),
        i = await o("WACryptoSha256").sha256(a);
      return o("WABase64").encodeB64(i);
    }
    async function u(e) {
      var t,
        n = await o("WAWebUserPrefsInfoStore").waNoiseInfo.get();
      if (!n) return null;
      var r = n == null || (t = n.staticKeyPair) == null ? void 0 : t.pubKey,
        a = o("WAWebConnModel").Conn.ref;
      if (!a || a.length === 0 || e.byteLength === 0 || r.byteLength === 0)
        return null;
      var i = new (o("WABinary").Binary)();
      (i.writeBuffer(e), i.writeBuffer(r));
      for (var l = 0; l < a.length; l++) i.write(a.charCodeAt(l));
      var s = i.readByteArrayView(),
        u = await o("WACryptoSha256").sha256(s);
      return o("WABase64").encodeB64(u);
    }
    l.genMdClientSessionId = e;
  },
  98,
);
