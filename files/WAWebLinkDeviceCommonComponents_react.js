__d(
  "WAWebLinkDeviceCommonComponents.react",
  [
    "WAWebClickable.react",
    "WAWebEnvironment",
    "WDSText.react",
    "WDSVars.stylex",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = {
        position: "inherit",
        width: "unset",
        height: "unset",
        color: "var(--secondary)",
        fontSize: "16px",
        marginBottom: o("WDSVars.stylex").WDSVars.spacingQuad,
        lineHeight: "21px",
      };
    function c(e) {
      var t = e.theme,
        n = e.value;
      return t === "wds" || r("WAWebEnvironment").isWindows
        ? s.jsx(r("WDSText.react"), {
            colorName: "contentDefault",
            type: "LargeTitle2",
            children: n,
          })
        : s.jsx(
            "div",
            babelHelpers.extends(
              {},
              {
                0: { className: "x579bpy xo1l8bm xggjnk3 x1hql6x6" },
                1: { className: "x579bpy xggjnk3 x1hql6x6 x1s688f" },
              }[!!r("WAWebEnvironment").isWindows << 0],
              { children: n },
            ),
          );
    }
    c.displayName = c.name + " [from " + i.id + "]";
    function d(e) {
      var t = e.value;
      return t == null
        ? s.jsx("div", { className: "x1fgtraw" })
        : s.jsx("div", {
            className: "x1hql6x6 x1c3i2sq xdod15v xg6s713",
            children: t,
          });
    }
    d.displayName = d.name + " [from " + i.id + "]";
    function m(e) {
      var t = e.config;
      if (t == null) return null;
      var n = t.onClick,
        r = t.shouldShow,
        a = t.text;
      return r
        ? s.jsx(o("WAWebClickable.react").Clickable, {
            onClick: n,
            className:
              "xrwxeff x10l6tqk x80663w x1i1rx1s xjm9jq1 x6ikm8r x10wlt62 x8o5u1m x162dhgo xm14bv4 x1p9y9v0 x1ot2rpl x1ayw9wz xlsgc75 x2iotq7 x1kpoq75 xcjmxlc xvjdqlt x1at3e3p x1ip307p x1qoaid1 x19byxu8",
            children: s.jsx("div", { className: "x1v5yvga", children: a }),
          })
        : null;
    }
    ((m.displayName = m.name + " [from " + i.id + "]"),
      (l.Title = c),
      (l.Subtitle = d),
      (l.ScreenReaderSubtitle = m));
  },
  98,
);
