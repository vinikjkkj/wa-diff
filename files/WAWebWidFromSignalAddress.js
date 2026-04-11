__d(
  "WAWebWidFromSignalAddress",
  ["WAJids", "WAWebSignalCommonUtils", "WAWebWid", "WAWebWidFactory"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WAWebSignalCommonUtils").getSignalLikeAddressName(e);
      return r("WAWebWid").isStringLid(t) ||
        r("WAWebWid").isHosted(t) ||
        r("WAWebWid").isFbidBot(t)
        ? o("WAWebWidFactory").createWid(t)
        : o("WAWebWidFactory").createWid(o("WAJids").toPhoneUserJid(t));
    }
    l.widFromSignalAddress = e;
  },
  98,
);
