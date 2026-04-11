__d(
  "WDSText.react",
  [
    "BaseTextV2.react",
    "BaseTextV2FontMetrics",
    "WDSColorStyles.stylex",
    "WDSFontConfig",
    "getPlatformByGK",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    var e = ["ref"],
      s = [
        "colorName",
        "maxLines",
        "type",
        "xstyle",
        "preserveNewLines",
        "robotoPropValue",
        "platform",
        "selectable",
      ],
      u,
      c = u || (u = r("react")),
      d = {
        selectable: { userSelect: "x1hx0egp", $$css: !0 },
        nonselectable: { userSelect: "x87ps6o", $$css: !0 },
      };
    function m(t) {
      var n = t.ref,
        a = babelHelpers.objectWithoutPropertiesLoose(t, e),
        i = a.colorName,
        l = a.maxLines,
        u = a.type,
        m = a.xstyle,
        p = a.preserveNewLines,
        _ = p === void 0 ? !0 : p,
        f = a.robotoPropValue,
        g = f === void 0 ? 0 : f,
        h = a.platform,
        y = h === void 0 ? o("getPlatformByGK").WDS_PLATFORM : h,
        C = a.selectable,
        b = C === void 0 ? !0 : C,
        v = babelHelpers.objectWithoutPropertiesLoose(a, s),
        S = o("WDSColorStyles.stylex").WDSColorStyles[a.colorName],
        R = y != null ? y : o("getPlatformByGK").WDS_PLATFORM,
        L = o("WDSFontConfig").WDSTextConfig[u],
        E,
        k = R === "windowsWeb";
      return (
        ((g === 1 && R === "windowsWeb") ||
          (g === 2 && R === "macWeb") ||
          g === 3) &&
          (k = !0),
        R === "iOS"
          ? ((E = o("BaseTextV2FontMetrics").AppleSystemFontMetrics),
            (L = o("WDSFontConfig").WDSTextConfigiOS[u]))
          : R === "android"
            ? ((E = o("BaseTextV2FontMetrics").RobotoFontMetrics),
              (L = o("WDSFontConfig").WDSTextConfigAndroid[u]))
            : k
              ? ((E = o("BaseTextV2FontMetrics").RobotoFontMetrics),
                R === "macWeb" &&
                  (L = o("WDSFontConfig").WDSTextConfigMacRoboto[u]))
              : (E =
                  R === "macWeb"
                    ? o("BaseTextV2FontMetrics").AppleSystemFontMetrics
                    : o("BaseTextV2FontMetrics").WindowsSystemFontMetrics),
        c.jsx(
          r("BaseTextV2.react"),
          babelHelpers.extends(
            {
              ref: n,
              fontMetrics: E,
              colorVariant: { xstyleConfig: { textColor: S } },
              typeVariant: babelHelpers.extends({}, L, {
                xstyleConfig: {
                  textType: [
                    m,
                    b ? d.selectable : d.nonselectable,
                    L.xstyleConfig.textType,
                  ],
                },
              }),
              preserveNewLines: _,
              maxLines: l != null ? l : 0,
            },
            v,
            { children: a.children },
          ),
        )
      );
    }
    ((m.displayName = m.name + " [from " + i.id + "]"), (l.default = m));
  },
  98,
);
