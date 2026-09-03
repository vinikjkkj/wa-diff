__d(
  "WAWebDebugAltDeviceLinking",
  ["WABase64", "WAWebCryptoCurve25519", "asyncToGeneratorRuntime"],
  function (t, n, r, o, a, i, l) {
    function e() {
      return s.apply(this, arguments);
    }
    function s() {
      return (
        (s = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e = o("WABase64").decodeB64("MsKm2JQ="),
            t = o("WABase64").decodeB64(
              "dVa0iwyftkpuVl0RRkbATG00utMF6HN3NQlwBlvKk7s=",
            ),
            n = yield self.crypto.subtle.importKey(
              "raw",
              e,
              { name: "PBKDF2" },
              !1,
              ["deriveKey"],
            );
          yield self.crypto.subtle.deriveKey(
            { name: "PBKDF2", hash: "SHA-256", salt: t, iterations: 2 << 16 },
            n,
            { name: "AES-GCM", length: 256 },
            !0,
            ["encrypt", "decrypt"],
          );
        })),
        s.apply(this, arguments)
      );
    }
    e.doc = "checked derived key value";
    function u() {
      return c.apply(this, arguments);
    }
    function c() {
      return (
        (c = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e,
            t = {
              pubKey: (e = o("WABase64")).decodeB64(
                "nEwK7XnPjmx68KlnIosZTQzQNjgBbdEVHIYGqCmBdCU=",
              ),
              privKey: e.decodeB64(
                "0Lsr1qHOQQwANO7PZA8bieCuP/RePLsd8Du4iyrFjEU=",
              ),
            },
            n = {
              pubKey: e.decodeB64(
                "2MuFC9muN9evLf231QvfRPxgJ77rb9DFxrjPVSAU/Qw=",
              ),
              privKey: e.decodeB64(
                "4OpA/0BlZ07ZPchtdzR1/UdDxUdlv9fCy/GQYkgZXUM=",
              ),
            };
          (yield o("WAWebCryptoCurve25519").sharedSecret(n.pubKey, t.privKey),
            yield o("WAWebCryptoCurve25519").sharedSecret(t.pubKey, n.privKey));
        })),
        c.apply(this, arguments)
      );
    }
    u.doc = "test diffie hellman";
    var d = { checkDerived: e, testDH: u };
    l.default = d;
  },
  98,
);
