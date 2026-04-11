__d(
  "WAWebBizBroadcastGenAIChips.react",
  ["WAWebFlex.react", "WDSChip.react", "react", "react-compiler-runtime"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react"));
    function u(e) {
      var t = o("react-compiler-runtime").c(10),
        n = e.chips,
        a = e.disabled,
        i = e.onChipTap,
        l;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((l = { className: "xw2csxc xjkvuk6 x1rohswg" }), (t[0] = l))
        : (l = t[0]);
      var u;
      if (t[1] !== n || t[2] !== a || t[3] !== i) {
        var c;
        (t[5] !== a || t[6] !== i
          ? ((c = function (t) {
              return s.jsx(
                "div",
                {
                  className: "x2lah0s",
                  children: s.jsx(r("WDSChip.react"), {
                    isDisabled: a,
                    isNeutral: !0,
                    label: t,
                    onPress: function () {
                      return i(t);
                    },
                  }),
                },
                t,
              );
            }),
            (t[5] = a),
            (t[6] = i),
            (t[7] = c))
          : (c = t[7]),
          (u = n.map(c)),
          (t[1] = n),
          (t[2] = a),
          (t[3] = i),
          (t[4] = u));
      } else u = t[4];
      var d;
      return (
        t[8] !== u
          ? ((d = s.jsx(
              "div",
              babelHelpers.extends({}, l, {
                children: s.jsx(o("WAWebFlex.react").FlexRow, {
                  gap: 8,
                  children: u,
                }),
              }),
            )),
            (t[8] = u),
            (t[9] = d))
          : (d = t[9]),
        d
      );
    }
    l.default = u;
  },
  98,
);
