__d(
  "WAWebMsgKeyNewId",
  [
    "WABinary",
    "WAHex",
    "WARandomHex",
    "WATimeUtils",
    "WAWebUserPrefsMeUser",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e = function () {
        var e = o("WATimeUtils").unixTime(),
          t = o("WAWebUserPrefsMeUser")
            .getMePnUserOrThrow_DO_NOT_USE()
            .toString(),
          n = o("WAHex").parseHex(o("WARandomHex").randomHex(16)),
          r = new (o("WABinary").Binary)();
        return (
          r.writeInt64(e),
          r.writeString(t),
          r.writeBuffer(n),
          r.readByteArrayView()
        );
      },
      s = (function () {
        var t = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var t = new Uint8Array(
            yield self.crypto.subtle.digest("SHA-256", e()),
            0,
            9,
          );
          return "3EB0" + o("WAHex").toHex(t);
        });
        return function () {
          return t.apply(this, arguments);
        };
      })();
    ((l.genMsgKeyUint = e), (l.getMsgKeyNewSHA256Id = s));
  },
  98,
);
