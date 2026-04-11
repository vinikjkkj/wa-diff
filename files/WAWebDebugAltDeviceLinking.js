__d(
  "WAWebDebugAltDeviceLinking",
  ["WABase64", "WAWebCryptoCurve25519", "asyncToGeneratorRuntime"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      return Array.from(e, function (e) {
        return ("0" + (e & 255).toString(16)).slice(-2);
      }).join("");
    }
    function s() {
      return u.apply(this, arguments);
    }
    function u() {
      return (
        (u = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
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
            ),
            r = yield self.crypto.subtle.deriveKey(
              { name: "PBKDF2", hash: "SHA-256", salt: t, iterations: 2 << 16 },
              n,
              { name: "AES-GCM", length: 256 },
              !0,
              ["encrypt", "decrypt"],
            ),
            a = yield self.crypto.subtle.exportKey("raw", r);
        })),
        u.apply(this, arguments)
      );
    }
    s.doc = "checked derived key value";
    function c() {
      return d.apply(this, arguments);
    }
    function d() {
      return (
        (d = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
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
            },
            r = yield o("WAWebCryptoCurve25519").sharedSecret(
              n.pubKey,
              t.privKey,
            ),
            a = yield o("WAWebCryptoCurve25519").sharedSecret(
              t.pubKey,
              n.privKey,
            );
        })),
        d.apply(this, arguments)
      );
    }
    c.doc = "test diffie hellman";
    var m = { checkDerived: s, testDH: c };
    l.default = m;
  },
  98,
);
