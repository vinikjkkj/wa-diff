__d(
  "WAWebBizBroadcastGenAIChips.react",
  ["WAWebFlex.react", "WDSChip.react", "react"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react"));
    function u(e) {
      var t = e.chips,
        n = e.disabled,
        a = e.onChipTap;
      return s.jsx("div", {
        className: "xw2csxc xjkvuk6 x1rohswg",
        children: s.jsx(o("WAWebFlex.react").FlexRow, {
          gap: 8,
          children: t.map(function (e) {
            return s.jsx(
              "div",
              {
                className: "x2lah0s",
                children: s.jsx(r("WDSChip.react"), {
                  isDisabled: n,
                  isNeutral: !0,
                  label: e,
                  onPress: function () {
                    return a(e);
                  },
                }),
              },
              e,
            );
          }),
        }),
      });
    }
    ((u.displayName = u.name + " [from " + i.id + "]"), (l.default = u));
  },
  98,
);
