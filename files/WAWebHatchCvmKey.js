__d(
  "WAWebHatchCvmKey",
  ["Promise", "asyncToGeneratorRuntime", "err"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = 32,
      u = 256,
      c = "hatch:rv-luks:v1:";
    function d(t) {
      return t.length !== s
        ? (e || (e = n("Promise"))).reject(
            r("err")("WAWebHatchCvmKey: account secret must be 32 bytes"),
          )
        : crypto.subtle.importKey("raw", t, "HKDF", !1, ["deriveBits"]);
    }
    function m(e, t) {
      return p.apply(this, arguments);
    }
    function p() {
      return (
        (p = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = t.trim();
          if (n === "") throw r("err")("WAWebHatchCvmKey: VM id is required");
          var o = yield crypto.subtle.deriveBits(
            {
              hash: "SHA-256",
              info: new TextEncoder().encode("" + c + n),
              name: "HKDF",
              salt: new Uint8Array(0),
            },
            e,
            u,
          );
          return new Uint8Array(o);
        })),
        p.apply(this, arguments)
      );
    }
    ((l.importCvmAccountSecret = d), (l.deriveCvmRvKey = m));
  },
  98,
);
