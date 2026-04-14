__d(
  "WAWebSvgButton.react",
  ["WAWebUnstyledButton.react", "WDSFocusStateStyles", "react"],
  function (t, n, r, o, a, i, l) {
    var e = ["ref"],
      s = [
        "Icon",
        "aria-expanded",
        "aria-haspopup",
        "aria-label",
        "className_DONOTUSE",
        "dataTab",
        "disabled",
        "onClick",
        "tabIndex",
        "testid",
        "title",
        "type",
        "xstyle",
      ],
      u,
      c = u || (u = o("react")),
      d = { disabled: { opacity: "x5dmra7", $$css: !0 } };
    function m(t) {
      var n = t.ref,
        a = babelHelpers.objectWithoutPropertiesLoose(t, e),
        i = a.Icon,
        l = a["aria-expanded"],
        u = a["aria-haspopup"],
        m = a["aria-label"],
        p = a.className_DONOTUSE,
        _ = a.dataTab,
        f = a.disabled,
        g = a.onClick,
        h = a.tabIndex,
        y = a.testid,
        C = a.title,
        b = a.type,
        v = a.xstyle,
        S = babelHelpers.objectWithoutPropertiesLoose(a, s);
      return c.jsx(r("WAWebUnstyledButton.react"), {
        ref: n,
        xstyle: [v, o("WDSFocusStateStyles").WDSFocusStateStyles.genericFocus],
        disabled: f,
        onClick: g,
        "aria-label": m,
        "aria-haspopup": u,
        "aria-expanded": l,
        title: C,
        dataTab: _,
        className_DONOTUSE: p,
        type: b,
        testid: void 0,
        tabIndex: h,
        children: c.jsx(
          i,
          babelHelpers.extends({}, S, { xstyle: f === !0 && d.disabled }),
        ),
      });
    }
    ((m.displayName = m.name + " [from " + i.id + "]"), (l.default = m));
  },
  98,
);
