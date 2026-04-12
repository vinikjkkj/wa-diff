__d(
  "WAWebBizCheckbox.react",
  ["WAWebFlex.react", "WDSBaseCheckbox.react", "WDSText.react", "react"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react"));
    function u(e) {
      var t = e.isDisabled,
        n = t === void 0 ? !1 : t,
        a = e.label,
        i = e.onChange,
        l = e.value;
      return s.jsxs(o("WAWebFlex.react").FlexRow, {
        gap: 16,
        align: "center",
        children: [
          s.jsx(r("WDSBaseCheckbox.react"), {
            disabled: n,
            onChange: i,
            value: l,
          }),
          s.jsx(r("WDSText.react"), {
            type: "Body2",
            colorName: "contentDeemphasized",
            children: a,
          }),
        ],
      });
    }
    ((u.displayName = u.name + " [from " + i.id + "]"), (l.default = u));
  },
  98,
);
