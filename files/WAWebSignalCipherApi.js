__d(
  "WAWebSignalCipherApi",
  ["WAWebCryptoLibrary", "WAWebSignalCommonErrors", "cr:17674", "gkx"],
  function (t, n, r, o, a, i, l) {
    async function e(e, t, a, i, l) {
      if ((i === void 0 && (i = !1), r("gkx")("16539"))) {
        var s =
          n("cr:17674") == null ? void 0 : n("cr:17674").getDebugDecryptFail();
        if (s != null && s > 0)
          return (
            n("cr:17674") == null || n("cr:17674").setDebugDecryptFail(s - 1),
            Promise.reject(
              new (o("WAWebSignalCommonErrors").SignalDecryptionError)(),
            )
          );
      }
      return o("WAWebCryptoLibrary").decryptSignalProto(e, t, a, i, l);
    }
    async function s(e, t, n, r) {
      return (
        r === void 0 && (r = !1),
        o("WAWebCryptoLibrary").encryptSignalProto(e, t, n, r)
      );
    }
    async function u(e) {
      var t = e.ciphertext,
        a = e.sender,
        i = e.target;
      if (r("gkx")("16539")) {
        var l =
          n("cr:17674") == null ? void 0 : n("cr:17674").getDebugDecryptFail();
        if (l != null && l > 0)
          return (
            n("cr:17674") == null || n("cr:17674").setDebugDecryptFail(l - 1),
            Promise.reject(
              new (o("WAWebSignalCommonErrors").SignalDecryptionError)(),
            )
          );
      }
      return o("WAWebCryptoLibrary").decryptGroupSignalProto({
        author: a,
        ciphertext: t,
        groupId: i,
      });
    }
    async function c(e, t, n) {
      return o("WAWebCryptoLibrary").encryptSenderKeyMsgSignalProto(e, t, n);
    }
    ((l.decryptSignalProto = e),
      (l.encryptSignalProto = s),
      (l.decryptGroupSignalProto = u),
      (l.encryptSenderKeyMsgSignalProto = c));
  },
  98,
);
