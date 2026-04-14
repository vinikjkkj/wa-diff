__d(
  "WAWebSwitchMenuItem.react",
  ["WAWebCellMenuItem.react", "WDSSwitch.react", "react"],
  function (t, n, r, o, a, i, l) {
    var e = ["disabled", "initialState", "on", "onSelect"],
      s,
      u = s || (s = o("react")),
      c = s,
      d = c.useEffect,
      m = c.useState;
    function p(t) {
      var n = t.disabled,
        a = n === void 0 ? !1 : n,
        i = t.initialState,
        l = i === void 0 ? !1 : i,
        s = t.on,
        c = t.onSelect,
        p = babelHelpers.objectWithoutPropertiesLoose(t, e),
        _ = m(l),
        f = _[0],
        g = _[1];
      d(
        function () {
          s != null && g(s);
        },
        [s],
      );
      var h = function () {
        a || (g(!f), c == null || c(!f));
      };
      return u.jsx(
        o("WAWebCellMenuItem.react").CellV2MenuItem,
        babelHelpers.extends({}, p, {
          disabled: a,
          type: "switch",
          onSelect: h,
          primaryRight: u.jsx(r("WDSSwitch.react"), {
            disabled: a,
            value: f,
            onChange: h,
            tabIndex: -1,
          }),
        }),
      );
    }
    ((p.displayName = p.name + " [from " + i.id + "]"), (l.SwitchMenuItem = p));
  },
  98,
);
