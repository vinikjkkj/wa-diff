__d(
  "WAWebHatchCvmKey",
  ["err"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = 32,
      s = 256,
      u = "hatch:rv-luks:v1:";
    function c(t) {
      return t.length !== e
        ? Promise.reject(
            r("err")("WAWebHatchCvmKey: account secret must be 32 bytes"),
          )
        : crypto.subtle.importKey("raw", t, "HKDF", !1, ["deriveBits"]);
    }
    async function d(e, t) {
      var n = t.trim();
      if (n === "") throw r("err")("WAWebHatchCvmKey: VM id is required");
      var o = await crypto.subtle.deriveBits(
        {
          hash: "SHA-256",
          info: new TextEncoder().encode("" + u + n),
          name: "HKDF",
          salt: new Uint8Array(0),
        },
        e,
        s,
      );
      return new Uint8Array(o);
    }
    ((l.importCvmAccountSecret = c), (l.deriveCvmRvKey = d));
  },
  98,
);
