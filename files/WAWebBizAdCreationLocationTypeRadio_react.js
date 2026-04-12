__d(
  "WAWebBizAdCreationLocationTypeRadio.react",
  [
    "WAWebPencilRefreshedIcon.react",
    "WAWebRadio.react",
    "WDSButton.react",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react"));
    function u(e) {
      var t = e.checked,
        n = e.label,
        a = e.onChange,
        i = e.onEditPress,
        l = e.secondaryLabel,
        u = e.value;
      return s.jsxs("div", {
        className: "x6s0dn4 x78zum5 x1q0g3np x1n2onr6 xh8yej3",
        children: [
          s.jsx(o("WAWebRadio.react").RadioWithLabel, {
            name: "location-type",
            value: u,
            label: n,
            secondaryLabel: l,
            theme: o("WAWebRadio.react").RadioWithLabelThemeEnum.LARGE,
            checked: t,
            onChange: a,
          }),
          s.jsx("div", {
            className: "xvc5jky",
            children: s.jsx(r("WDSButton.react"), {
              Icon: o("WAWebPencilRefreshedIcon.react").PencilRefreshedIcon,
              variant: "borderless",
              size: "medium",
              onPress: i,
            }),
          }),
        ],
      });
    }
    ((u.displayName = u.name + " [from " + i.id + "]"), (l.default = u));
  },
  98,
);
