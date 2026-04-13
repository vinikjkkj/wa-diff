__d(
  "WAWebCommentTimestamp.react",
  ["WAWebClock", "WAWebText.react", "react", "react-compiler-runtime"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react"));
    function u(e) {
      var t = o("react-compiler-runtime").c(4),
        n = e.t,
        r;
      t[0] !== n
        ? ((r = o("WAWebClock").Clock.timestampStr(n)), (t[0] = n), (t[1] = r))
        : (r = t[1]);
      var a = r,
        i;
      return (
        t[2] !== a
          ? ((i = s.jsx(o("WAWebText.react").WAWebTextMuted, {
              children: s.jsx(o("WAWebText.react").WAWebTextSmall, {
                children: a,
              }),
            })),
            (t[2] = a),
            (t[3] = i))
          : (i = t[3]),
        i
      );
    }
    l.default = u;
  },
  98,
);
