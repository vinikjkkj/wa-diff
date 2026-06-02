__d(
  "WAWebMsgKeyNewId",
  ["WABinary", "WAHex", "WARandomHex", "WATimeUtils", "WAWebUserPrefsMeUser"],
  function (t, n, r, o, a, i, l) {
    function e() {
      var e = o("WATimeUtils").unixTime(),
        t = o("WAWebUserPrefsMeUser").getMeLidUserOrThrow().toString(),
        n = o("WAHex").parseHex(o("WARandomHex").randomHex(16)),
        r = new (o("WABinary").Binary)();
      return (
        r.writeInt64(e),
        r.writeString(t),
        r.writeBuffer(n),
        r.readByteArrayView()
      );
    }
    var s = async function () {
      var t = new Uint8Array(
        await self.crypto.subtle.digest("SHA-256", e()),
        0,
        9,
      );
      return "3EB0" + o("WAHex").toHex(t);
    };
    ((l.genMsgKeyUint = e), (l.getMsgKeyNewSHA256Id = s));
  },
  98,
);
