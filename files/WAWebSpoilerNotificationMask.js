__d(
  "WAWebSpoilerNotificationMask",
  ["WAWebSpoilerFormatRegex"],
  function (t, n, r, o, a, i, l) {
    var e = "\u2801\u2802\u2803\u2804\u2805\u2806\u2807";
    function s(t) {
      return o("WAWebSpoilerFormatRegex").maskSpoilers(t, e);
    }
    l.maskSpoilersForNotification = s;
  },
  98,
);
