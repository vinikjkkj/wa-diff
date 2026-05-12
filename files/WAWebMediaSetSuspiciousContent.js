__d(
  "WAWebMediaSetSuspiciousContent",
  ["WAWebSuspiciousContent"],
  function (t, n, r, o, a, i, l) {
    function e(e, t) {
      for (var n of e.msgs) {
        var r = n[0],
          a = r.mediaData;
        a != null &&
          a.suspiciousContent !==
            o("WAWebSuspiciousContent").WAWebSuspiciousContent.YES_IGNORE &&
          a.set({ suspiciousContent: t });
      }
    }
    l.setSuspiciousContentOnMediaObject = e;
  },
  98,
);
