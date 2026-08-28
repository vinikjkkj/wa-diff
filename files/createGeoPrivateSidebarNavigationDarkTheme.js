__d(
  "createGeoPrivateSidebarNavigationDarkTheme",
  [],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = "rgba(255, 255, 255, 0.15)",
      s = "rgba(255, 255, 255, 1)",
      u = "rgba(255, 255, 255, 0.65)",
      c = "rgba(255, 255, 255, 0.20)",
      d = "rgba(255, 255, 255, 0.0)",
      m = "rgba(255, 255, 255, 0.0)",
      p = "rgba(255, 255, 255, 0.10)",
      _ = "rgba(255, 255, 255, 0.15)",
      f = "rgba(38, 38, 38, 1.0)",
      g = "rgba(255, 255, 255, 1.0)",
      h = "rgba(255, 255, 255, 0.65)",
      y = "rgba(255, 255, 255, 0.25)",
      C = "rgba(255, 255, 255, 1.0)",
      b = "rgba(24, 119, 242, 1.0)";
    function v(e) {
      return babelHelpers.extends({}, e, {
        selectInteractiveColorPalette: function (n) {
          var t = n.color,
            r = n.isActive,
            o = n.isDisabled,
            a = n.isFocused,
            i = t === "selected",
            l = t === "wash",
            s =
              t === "flat" ||
              t === "navigation" ||
              i ||
              l ||
              t === "flatNavigation";
          return [
            e.selectInteractiveColorPalette(n),
            s && S.interactiveDefault,
            (i || l) && S.interactiveSelected,
            s && a === !0 && S.interactiveFocused,
            s && r === !0 && S.interactiveActive,
            s && o === !0 && S.interactiveDisabled,
          ];
        },
        selectBorderColor: function (n) {
          return [
            e.selectBorderColor(n),
            n.color === "element" && S.borderDefault,
          ];
        },
        selectTextColor: function (n) {
          var t = n.color,
            r = n.isDisabled;
          return [
            e.selectTextColor(n),
            t === "valueLabel" && S.textDefault,
            t === "value" && S.textDefault,
            t === "heading" && S.textDefault,
            t === "link" && S.textLink,
            t === "blue" && S.textInfo,
            r === !0 && S.textDisabled,
          ];
        },
        selectIconColor: function (n) {
          return [e.selectIconColor(n), n.color === "default" && S.iconDefault];
        },
        selectStaticBackgroundColor: function (n) {
          return [
            e.selectStaticBackgroundColor(n),
            n.surface === "content" && S.staticContent,
          ];
        },
      });
    }
    var S = {
      interactiveActive: {
        backgroundColor: "xh4b7qa",
        color: "xuxvh1q",
        $$css: !0,
      },
      interactiveDefault: {
        backgroundColor: "x8b1hf0",
        color: "xfiw4rn",
        $$css: !0,
      },
      interactiveDisabled: { backgroundColor: "x8b1hf0", $$css: !0 },
      interactiveFocused: {
        backgroundColor: "x1ohetei",
        color: "xuxvh1q",
        $$css: !0,
      },
      interactiveSelected: { backgroundColor: "x1chrcjj", $$css: !0 },
      borderDefault: {
        borderTopColor: "x1ccmj1r",
        borderInlineEndColor: "xipfxvi",
        borderBottomColor: "xv7451x",
        borderInlineStartColor: "x1wy5lw7",
        $$css: !0,
      },
      iconDefault: { color: "xfiw4rn", $$css: !0 },
      textDefault: { color: "xfiw4rn", $$css: !0 },
      textDisabled: { color: "x1t8b4hb", $$css: !0 },
      textInfo: { color: "x140t73q", $$css: !0 },
      textLink: { color: "xcbmnf4", $$css: !0 },
      staticContent: { backgroundColor: "xes7tso", $$css: !0 },
    };
    l.default = v;
  },
  98,
);
