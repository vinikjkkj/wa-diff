__d(
  "CometUFIShareToPageOptionalSwitchingShareableProvider",
  [
    "CometUFIShareToPageOptionalSwitchingShareableContext",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = e.useMemo;
    function c(e) {
      var t = o("react-compiler-runtime").c(8),
        n = e.children,
        a = e.eventID,
        i = e.groupIdOrVanity,
        l = e.reelID,
        u = e.storyPostID,
        c;
      t[0] !== a || t[1] !== i || t[2] !== l || t[3] !== u
        ? ((c = { eventID: a, groupIdOrVanity: i, reelID: l, storyPostID: u }),
          (t[0] = a),
          (t[1] = i),
          (t[2] = l),
          (t[3] = u),
          (t[4] = c))
        : (c = t[4]);
      var d = c,
        m;
      return (
        t[5] !== n || t[6] !== d
          ? ((m = s.jsx(
              r("CometUFIShareToPageOptionalSwitchingShareableContext")
                .Provider,
              { value: d, children: n },
            )),
            (t[5] = n),
            (t[6] = d),
            (t[7] = m))
          : (m = t[7]),
        m
      );
    }
    l.default = c;
  },
  98,
);
