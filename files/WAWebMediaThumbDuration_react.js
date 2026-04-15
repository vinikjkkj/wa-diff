__d(
  "WAWebMediaThumbDuration.react",
  [
    "WAWebClassnames",
    "WAWebClock",
    "WAWebMediaData",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react"));
    function u(e) {
      var t = o("react-compiler-runtime").c(8),
        n = e.duration,
        r = e.selected,
        a = e.theme,
        i;
      t[0] !== n
        ? ((i = o("WAWebClock").Clock.durationStr(n)), (t[0] = n), (t[1] = i))
        : (i = t[1]);
      var l = i;
      if (!l) return null;
      var u;
      if (t[2] !== r || t[3] !== a) {
        var c;
        ((u = o("WAWebClassnames").classnamesConvertMeToStylexPlease(
          "x10l6tqk xbfrwjf x161fk8o x78zum5 x1ncwhqj x1b1uo88 x1dxgm4b x47corl",
          a === "mediaHub" && "x1n2onr6 xaoy8p5 x13vifvy x1s688f x1nxh6w3",
          ((c = {}), (c.xdzp27c = r), c),
        )),
          (t[2] = r),
          (t[3] = a),
          (t[4] = u));
      } else u = t[4];
      var d;
      return (
        t[5] !== l || t[6] !== u
          ? ((d = s.jsx("span", { className: u, children: l })),
            (t[5] = l),
            (t[6] = u),
            (t[7] = d))
          : (d = t[7]),
        d
      );
    }
    function c(e) {
      var t = o("react-compiler-runtime").c(8),
        n = e.mediaData,
        a = e.selected,
        i = e.theme;
      switch (n.type) {
        case r("WAWebMediaData").TYPE.AUDIO: {
          var l;
          return (
            t[0] !== n.duration || t[1] !== a
              ? ((l = s.jsx(u, { duration: n.duration, selected: a })),
                (t[0] = n.duration),
                (t[1] = a),
                (t[2] = l))
              : (l = t[2]),
            l
          );
        }
        case r("WAWebMediaData").TYPE.VIDEO: {
          var c;
          return (
            t[3] !== n.duration || t[4] !== n.isGif || t[5] !== a || t[6] !== i
              ? ((c = n.isGif
                  ? null
                  : s.jsx(u, { duration: n.duration, selected: a, theme: i })),
                (t[3] = n.duration),
                (t[4] = n.isGif),
                (t[5] = a),
                (t[6] = i),
                (t[7] = c))
              : (c = t[7]),
            c
          );
        }
        default:
          return null;
      }
    }
    l.default = c;
  },
  98,
);
