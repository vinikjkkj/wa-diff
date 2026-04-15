__d(
  "WAWebAddReactionPill.react",
  [
    "fbt",
    "WDSChip.react",
    "WDSIconWdsIcMoodAdd.react",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react"));
    function c(e) {
      var t = o("react-compiler-runtime").c(4),
        n = e.onClick,
        a = e.ref,
        i;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((i = s._(/*BTDS*/ "Add reaction")), (t[0] = i))
        : (i = t[0]);
      var l;
      return (
        t[1] !== n || t[2] !== a
          ? ((l = u.jsx(r("WDSChip.react"), {
              Icon: r("WDSIconWdsIcMoodAdd.react"),
              iconOnly: !0,
              label: i,
              onPress: n,
              ref: a,
              testid: void 0,
            })),
            (t[1] = n),
            (t[2] = a),
            (t[3] = l))
          : (l = t[3]),
        l
      );
    }
    l.default = c;
  },
  226,
);
