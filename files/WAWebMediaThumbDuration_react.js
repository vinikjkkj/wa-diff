__d(
  "WAWebMediaThumbDuration.react",
  ["WAWebClassnames", "WAWebClock", "WAWebMediaData", "react"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react"));
    function u(e) {
      var t,
        n = e.duration,
        r = e.selected,
        a = e.theme,
        i = o("WAWebClock").Clock.durationStr(n);
      return i
        ? s.jsx("span", {
            className: o("WAWebClassnames").classnamesConvertMeToStylexPlease(
              "x10l6tqk xbfrwjf x161fk8o x78zum5 x1ncwhqj x1b1uo88 x1dxgm4b x47corl",
              a === "mediaHub" && "x1n2onr6 xaoy8p5 x13vifvy x1s688f x1nxh6w3",
              ((t = {}), (t.xdzp27c = r), t),
            ),
            children: i,
          })
        : null;
    }
    u.displayName = u.name + " [from " + i.id + "]";
    function c(e) {
      var t = e.mediaData,
        n = e.selected,
        o = e.theme;
      switch (t.type) {
        case r("WAWebMediaData").TYPE.AUDIO:
          return s.jsx(u, { duration: t.duration, selected: n });
        case r("WAWebMediaData").TYPE.VIDEO:
          return t.isGif
            ? null
            : s.jsx(u, { duration: t.duration, selected: n, theme: o });
        default:
          return null;
      }
    }
    ((c.displayName = c.name + " [from " + i.id + "]"), (l.default = c));
  },
  98,
);
