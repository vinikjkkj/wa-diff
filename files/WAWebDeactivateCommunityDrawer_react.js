__d(
  "WAWebDeactivateCommunityDrawer.react",
  [
    "WAWebCommunityDeactivationInfoDrawer.react",
    "react",
    "react-compiler-runtime",
    "useWAWebCallbackOnce",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react"));
    function u(e) {
      var t = o("react-compiler-runtime").c(6),
        n = e.chat,
        a = e.onBack,
        i = e.ref,
        l;
      t[0] !== a
        ? ((l = function () {
            a();
          }),
          (t[0] = a),
          (t[1] = l))
        : (l = t[1]);
      var u = r("useWAWebCallbackOnce")(l),
        c;
      return (
        t[2] !== n || t[3] !== u || t[4] !== i
          ? ((c = s.jsx(r("WAWebCommunityDeactivationInfoDrawer.react"), {
              ref: i,
              onBack: u,
              chat: n,
            })),
            (t[2] = n),
            (t[3] = u),
            (t[4] = i),
            (t[5] = c))
          : (c = t[5]),
        c
      );
    }
    l.default = u;
  },
  98,
);
