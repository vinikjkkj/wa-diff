__d(
  "WAWebStylesEnv",
  ["WAWebUA"],
  function (t, n, r, o, a, i, l) {
    var e =
        o("WAWebUA").UA.browser === o("WAWebUA").BROWSER_TYPE.CHROME ||
        o("WAWebUA").UA.browser === o("WAWebUA").BROWSER_TYPE.OPERA,
      s = o("WAWebUA").UA.os === o("WAWebUA").OS_TYPE.MAC,
      u = o("WAWebUA").UA.os === o("WAWebUA").OS_TYPE.WINDOWS;
    ((l.hasSafariFix = o("WAWebUA").UA.isSafari),
      (l.hasFirefoxFix = o("WAWebUA").UA.isGecko),
      (l.hasEmoji = o("WAWebUA").UA.hasEmoji),
      (l.hasFontFix = e),
      (l.isOSMac = s),
      (l.isOSWin = u));
  },
  98,
);
