__d(
  "WAWebSignalCipherApi",
  [
    "Promise",
    "WAWebCryptoLibrary",
    "WAWebSignalCommonErrors",
    "asyncToGeneratorRuntime",
    "cr:4533",
    "gkx",
  ],
  function (t, n, r, o, a, i, l) {
    var e;
    function s(e, t, n, r, o) {
      return u.apply(this, arguments);
    }
    function u() {
      return (
        (u = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (t, a, i, l, s) {
            if ((l === void 0 && (l = !1), !r("gkx")("26258"))) {
              var u =
                n("cr:4533") == null
                  ? void 0
                  : n("cr:4533").getDebugDecryptFail();
              if (u != null && u > 0)
                return (
                  n("cr:4533") == null ||
                    n("cr:4533").setDebugDecryptFail(u - 1),
                  (e || (e = n("Promise"))).reject(
                    new (o("WAWebSignalCommonErrors").SignalDecryptionError)(),
                  )
                );
            }
            return o("WAWebCryptoLibrary").decryptSignalProto(t, a, i, l, s);
          },
        )),
        u.apply(this, arguments)
      );
    }
    function c(e, t, n, r) {
      return d.apply(this, arguments);
    }
    function d() {
      return (
        (d = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, n, r) {
            return (
              r === void 0 && (r = !1),
              o("WAWebCryptoLibrary").encryptSignalProto(e, t, n, r)
            );
          },
        )),
        d.apply(this, arguments)
      );
    }
    function m(e, t, n) {
      return p.apply(this, arguments);
    }
    function p() {
      return (
        (p = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, a, i) {
          if (!r("gkx")("26258")) {
            var l =
              n("cr:4533") == null
                ? void 0
                : n("cr:4533").getDebugDecryptFail();
            if (l != null && l > 0)
              return (
                n("cr:4533") == null || n("cr:4533").setDebugDecryptFail(l - 1),
                (e || (e = n("Promise"))).reject(
                  new (o("WAWebSignalCommonErrors").SignalDecryptionError)(),
                )
              );
          }
          return o("WAWebCryptoLibrary").decryptGroupSignalProto(t, a, i);
        })),
        p.apply(this, arguments)
      );
    }
    function _(e, t, n) {
      return f.apply(this, arguments);
    }
    function f() {
      return (
        (f = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
          return o("WAWebCryptoLibrary").encryptSenderKeyMsgSignalProto(
            e,
            t,
            n,
          );
        })),
        f.apply(this, arguments)
      );
    }
    ((l.decryptSignalProto = s),
      (l.encryptSignalProto = c),
      (l.decryptGroupSignalProto = m),
      (l.encryptSenderKeyMsgSignalProto = _));
  },
  98,
);
