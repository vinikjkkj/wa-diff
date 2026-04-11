__d(
  "WDSChipConfig",
  [
    "WDSChipColorConfig.stylex",
    "WDSChipDefaultConfig.stylex",
    "WDSChipDefaultIOSConfig.stylex",
    "WDSChipLargeConfig.stylex",
    "WDSChipLargeIOSConfig.stylex",
    "WDSFocusStateStyles",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      var n;
      return (
        t
          ? (n = o("WDSChipColorConfig.stylex").WDSChipNeutralColorStyles)
          : e
            ? (n = o("WDSChipColorConfig.stylex").WDSChipSelectedColorStyles)
            : (n = o("WDSChipColorConfig.stylex").WDSChipUnselectedColorStyles),
        {
          xstyleConfig: {
            pressable: [
              o("WDSChipColorConfig.stylex").WDSChipSharedColorStyles.pressable,
              n.pressable,
              o("WDSFocusStateStyles").WDSFocusStateStyles.genericFocus,
            ],
            pressableDisabled: [
              o("WDSChipColorConfig.stylex").WDSChipSharedColorStyles
                .pressableDisabled,
              n.pressableDisabled,
            ],
            pressableHovered: [
              o("WDSChipColorConfig.stylex").WDSChipSharedColorStyles
                .pressableHovered,
              n.pressableHovered,
            ],
            pressablePressed: [
              o("WDSChipColorConfig.stylex").WDSChipSharedColorStyles
                .pressablePressed,
              n.pressablePressed,
            ],
          },
        }
      );
    }
    var s = {
      content: {
        minWidth: "xgqtt45",
        boxSizing: "x9f619",
        borderStartStartRadius: "xt8t1vi",
        borderStartEndRadius: "x1xc408v",
        borderEndEndRadius: "x129tdwq",
        borderEndStartRadius: "x15urzxu",
        $$css: !0,
      },
      item: {
        alignItems: "x6s0dn4",
        display: "x78zum5",
        justifyContent: "xl56j7k",
        zIndex: "x1vjfegm",
        $$css: !0,
      },
      addOnEnd: {
        display: "x78zum5",
        alignItems: "x6s0dn4",
        flexShrink: "x2lah0s",
        $$css: !0,
      },
      addOnStart: { display: "x78zum5", alignItems: "x6s0dn4", $$css: !0 },
    };
    function u(e, t, n, r, a) {
      var i = {};
      return (
        e === "default"
          ? a
            ? (i = o(
                "WDSChipDefaultConfig.stylex",
              ).WDSChipDefaultWithIconOnlyStyles)
            : r
              ? t
                ? (i = o(
                    "WDSChipDefaultConfig.stylex",
                  ).WDSChipDefaultWithStartIconAndEndNumberAddOnsStyles)
                : (i = o(
                    "WDSChipDefaultConfig.stylex",
                  ).WDSChipDefaultWithEndNumberAddOnOnlyStyles)
              : t && n
                ? (i = o(
                    "WDSChipDefaultConfig.stylex",
                  ).WDSChipDefaultWithStartIconAndEndIconAddOnsStyles)
                : t
                  ? (i = o(
                      "WDSChipDefaultConfig.stylex",
                    ).WDSChipDefaultWithStartIconAddOnOnlyStyles)
                  : n
                    ? (i = o(
                        "WDSChipDefaultConfig.stylex",
                      ).WDSChipDefaultWithEndIconAddOnOnlyStyles)
                    : (i = o(
                        "WDSChipDefaultConfig.stylex",
                      ).WDSChipDefaultWithNoAddOnStyles)
          : a
            ? (i = o(
                "WDSChipLargeConfig.stylex",
              ).WDSChipLargeWithIconOnlyStyles)
            : r
              ? t
                ? (i = o(
                    "WDSChipLargeConfig.stylex",
                  ).WDSChipLargeWithStartIconAndEndNumberAddOnsStyles)
                : (i = o(
                    "WDSChipLargeConfig.stylex",
                  ).WDSChipLargeWithEndNumberAddOnOnlyStyles)
              : t && n
                ? (i = o(
                    "WDSChipLargeConfig.stylex",
                  ).WDSChipLargeWithStartIconAndEndIconAddOnsStyles)
                : t
                  ? (i = o(
                      "WDSChipLargeConfig.stylex",
                    ).WDSChipLargeWithStartIconAddOnOnlyStyles)
                  : n
                    ? (i = o(
                        "WDSChipLargeConfig.stylex",
                      ).WDSChipLargeWithEndIconAddOnOnlyStyles)
                    : (i = o(
                        "WDSChipLargeConfig.stylex",
                      ).WDSChipLargeWithNoAddOnStyles),
        {
          content: [s.content, i.content],
          item: [s.item, i.item],
          pressed: [],
          addOnEnd: [s.addOnEnd, i.addOnEnd],
          addOnStart: [s.addOnStart, i.addOnStart],
        }
      );
    }
    function c(e, t, n, r, a) {
      var i = {};
      return (
        e === "default"
          ? a
            ? (i = o(
                "WDSChipDefaultIOSConfig.stylex",
              ).WDSChipDefaultIOSWithIconOnlyStyles)
            : r
              ? t
                ? (i = o(
                    "WDSChipDefaultIOSConfig.stylex",
                  ).WDSChipDefaultIOSWithStartIconAndEndAddOnsStyles)
                : (i = o(
                    "WDSChipDefaultIOSConfig.stylex",
                  ).WDSChipDefaultIOSWithEndNumberAddOnOnlyStyles)
              : t && n
                ? (i = o(
                    "WDSChipDefaultIOSConfig.stylex",
                  ).WDSChipDefaultIOSWithStartIconAndEndAddOnsStyles)
                : t
                  ? (i = o(
                      "WDSChipDefaultIOSConfig.stylex",
                    ).WDSChipDefaultIOSWithStartIconAddOnOnlyStyles)
                  : n
                    ? (i = o(
                        "WDSChipDefaultIOSConfig.stylex",
                      ).WDSChipDefaultIOSWithEndIconAddOnOnlyStyles)
                    : (i = o(
                        "WDSChipDefaultIOSConfig.stylex",
                      ).WDSChipDefaultIOSWithNoAddOnStyles)
          : a
            ? (i = o(
                "WDSChipLargeIOSConfig.stylex",
              ).WDSChipLargeIOSWithIconOnlyStyles)
            : r
              ? t
                ? (i = o(
                    "WDSChipLargeIOSConfig.stylex",
                  ).WDSChipLargeIOSWithStartIconAndEndAddOnsStyles)
                : (i = o(
                    "WDSChipLargeIOSConfig.stylex",
                  ).WDSChipLargeIOSWithEndNumberAddOnOnlyStyles)
              : t && n
                ? (i = o(
                    "WDSChipLargeIOSConfig.stylex",
                  ).WDSChipLargeIOSWithStartIconAndEndAddOnsStyles)
                : t
                  ? (i = o(
                      "WDSChipLargeIOSConfig.stylex",
                    ).WDSChipLargeIOSWithStartIconAddOnOnlyStyles)
                  : n
                    ? (i = o(
                        "WDSChipLargeIOSConfig.stylex",
                      ).WDSChipLargeIOSWithEndIconAddOnOnlyStyles)
                    : (i = o(
                        "WDSChipLargeIOSConfig.stylex",
                      ).WDSChipLargeIOSWithNoAddOnStyles),
        {
          content: [s.content, i.content],
          item: [s.item, i.item],
          pressed: [],
          addOnEnd: [s.addOnEnd, i.addOnEnd],
          addOnStart: [s.addOnStart, i.addOnStart],
        }
      );
    }
    function d(e, t, n, r, o, a) {
      return (
        a === void 0 && (a = "macWeb"),
        a === "iOS" ? c(e, t, n, r, o) : u(e, t, n, r, o)
      );
    }
    var m = {
      icon20: { height: "x1qx5ct2", width: "xw4jnvo", $$css: !0 },
      icon18: { height: "xmix8c7", width: "x1xp8n7a", $$css: !0 },
    };
    function p(e) {
      e === void 0 && (e = "macWeb");
      var t = e === "iOS";
      return t ? [18, m.icon18] : [20, m.icon20];
    }
    function _(e, t, n) {
      return n
        ? "contentDeemphasized"
        : t
          ? "contentDefault"
          : e
            ? "accentEmphasized"
            : "contentDeemphasized";
    }
    ((l.getButtonColorStyles = e),
      (l.getButtonSizeStyles = d),
      (l.getChipIconSizeAndStyle = p),
      (l.getButtonFontColor = _));
  },
  98,
);
