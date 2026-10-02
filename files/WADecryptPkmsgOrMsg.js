__d(
  "WADecryptPkmsgOrMsg",
  ["WACryptoManagerUtils", "WAResultOrError"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      var t = e.cb,
        n = e.ciphertext,
        r = e.ctx,
        a = e.encType,
        i = e.from;
      return o("WACryptoManagerUtils")
        .decryptMsg(a, i, n, r)
        .then(function (e) {
          return e.success === !1
            ? t(e)
            : e.value != null
              ? t(
                  o("WAResultOrError").makeResult({
                    plaintext: e.value.plaintext,
                    remoteIdentity: e.value.remoteIdentity,
                  }),
                )
              : t(o("WAResultOrError").makeError("missing-content"));
        });
    }
    l.decryptPkmsgOrMsg = e;
  },
  98,
);
