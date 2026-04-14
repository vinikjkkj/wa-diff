__d(
  "WAWebCommentTimestamp.react",
  ["WAWebClock", "WAWebText.react", "react"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react"));
    function u(e) {
      var t = e.t,
        n = o("WAWebClock").Clock.timestampStr(t);
      return s.jsx(o("WAWebText.react").WAWebTextMuted, {
        children: s.jsx(o("WAWebText.react").WAWebTextSmall, { children: n }),
      });
    }
    ((u.displayName = u.name + " [from " + i.id + "]"), (l.default = u));
  },
  98,
);
