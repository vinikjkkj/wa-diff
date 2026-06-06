__d(
  "WAWebSignalCipherApi",
  ["WAWebCryptoLibrary", "WAWebSignalCommonErrors", "cr:4533", "gkx"],
  function (t, n, r, o, a, i, l) {
    async function e(e, t, a, i, l) {
      if ((i === void 0 && (i = !1), !r("gkx")("26258"))) {
        var s =
          n("cr:4533") == null ? void 0 : n("cr:4533").getDebugDecryptFail();
        if (s != null && s > 0)
          return (
            n("cr:4533") == null || n("cr:4533").setDebugDecryptFail(s - 1),
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
    async function u(e, t, a) {
      if (!r("gkx")("26258")) {
        var i =
          n("cr:4533") == null ? void 0 : n("cr:4533").getDebugDecryptFail();
        if (i != null && i > 0)
          return (
            n("cr:4533") == null || n("cr:4533").setDebugDecryptFail(i - 1),
            Promise.reject(
              new (o("WAWebSignalCommonErrors").SignalDecryptionError)(),
            )
          );
      }
      return o("WAWebCryptoLibrary").decryptGroupSignalProto(e, t, a);
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
