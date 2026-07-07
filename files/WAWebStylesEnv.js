__d(
  "WAWebStylesEnv",
  ["WAWebUA"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = (e = o("WAWebUA")).UA.os === e.OS_TYPE.MAC,
      u = e.UA.os === e.OS_TYPE.WINDOWS;
    ((l.hasSafariFix = e.UA.isSafari),
      (l.hasFirefoxFix = e.UA.isGecko),
      (l.hasEmoji = e.UA.hasEmoji),
      (l.isOSMac = s),
      (l.isOSWin = u));
  },
  98,
);
