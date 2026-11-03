__d(
  "WAWebDebugAltDeviceLinking",
  ["WABase64", "WAWebCryptoCurve25519", "vulture"],
  function (t, n, r, o, a, i, l) {
    async function e() {
      r("vulture")("Ckg0m3NOjW0PHvT4IRx8L3CiUWU=");
      var e = o("WABase64").decodeB64("MsKm2JQ="),
        t = o("WABase64").decodeB64(
          "dVa0iwyftkpuVl0RRkbATG00utMF6HN3NQlwBlvKk7s=",
        ),
        n = await self.crypto.subtle.importKey(
          "raw",
          e,
          { name: "PBKDF2" },
          !1,
          ["deriveKey"],
        );
      await self.crypto.subtle.deriveKey(
        { name: "PBKDF2", hash: "SHA-256", salt: t, iterations: 2 << 16 },
        n,
        { name: "AES-GCM", length: 256 },
        !0,
        ["encrypt", "decrypt"],
      );
    }
    e.doc = "checked derived key value";
    async function s() {
      var e;
      r("vulture")("SFeGzo4h-HaKMvMC0SdXbCIiHaQ=");
      var t = {
          pubKey: (e = o("WABase64")).decodeB64(
            "nEwK7XnPjmx68KlnIosZTQzQNjgBbdEVHIYGqCmBdCU=",
          ),
          privKey: e.decodeB64("0Lsr1qHOQQwANO7PZA8bieCuP/RePLsd8Du4iyrFjEU="),
        },
        n = {
          pubKey: e.decodeB64("2MuFC9muN9evLf231QvfRPxgJ77rb9DFxrjPVSAU/Qw="),
          privKey: e.decodeB64("4OpA/0BlZ07ZPchtdzR1/UdDxUdlv9fCy/GQYkgZXUM="),
        };
      (await o("WAWebCryptoCurve25519").sharedSecret(n.pubKey, t.privKey),
        await o("WAWebCryptoCurve25519").sharedSecret(t.pubKey, n.privKey));
    }
    s.doc = "test diffie hellman";
    var u = { checkDerived: e, testDH: s };
    l.default = u;
  },
  98,
);
