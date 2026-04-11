__d(
  "WDSCalendarConfig.stylex",
  [
    "BaseTextV2FontMetrics",
    "MetaBrandCaretLeftOutline24Icon.react",
    "MetaBrandCaretRightOutline24Icon.react",
    "WDSColorStyles.stylex",
    "WDSDisabledStateStyles",
    "WDSFocusStateStyles",
    "WDSFontConfig",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = {
        pressable: {
          backgroundColor: "xjbqb8w",
          color: "xo1mcw5",
          "::after_transform": "xy0j11r",
          "::after_content": "x1s928wv",
          "::after_transition": "xg268so",
          borderStartStartRadius: "xt8t1vi",
          borderStartEndRadius: "x1xc408v",
          borderEndEndRadius: "x129tdwq",
          borderEndStartRadius: "x15urzxu",
          borderTopStyle: "x1ejq31n",
          borderInlineEndStyle: "x18oe1m7",
          borderBottomStyle: "x1sy0etr",
          borderInlineStartStyle: "xstzfhl",
          ":not(:disabled):hover::after_transform": "x39yd5s",
          ":not(:disabled):hover::after_content": "x1e2sdqr",
          ":not(:disabled):hover::after_position": "x1guvck6",
          ":not(:disabled):hover::after_borderStartStartRadius": "x1obhmr2",
          ":not(:disabled):hover::after_borderStartEndRadius": "x1ggrywa",
          ":not(:disabled):hover::after_borderEndEndRadius": "x12nnfas",
          ":not(:disabled):hover::after_borderEndStartRadius": "xcnf0vn",
          ":not(:disabled):hover::after_top": "x97qd5",
          ":not(:disabled):hover::after_insetInlineStart": "xx7h438",
          ":not(:disabled):hover::after_left": null,
          ":not(:disabled):hover::after_right": null,
          ":not(:disabled):hover::after_pointerEvents": "x9p6qnl",
          ":not(:disabled):hover::after_width": "x1ej3bfk",
          ":not(:disabled):hover::after_height": "xt8o1tv",
          ":not(:disabled):hover::after_backgroundColor": "xjby3b7",
          $$css: !0,
        },
        buttonIconSize: {
          alignItems: "x6s0dn4",
          display: "x78zum5",
          height: "x10w6t97",
          justifyContent: "xl56j7k",
          width: "x1td3qas",
          $$css: !0,
        },
        iconCenter: {
          alignItems: "x6s0dn4",
          display: "x78zum5",
          justifyContent: "xl56j7k",
          $$css: !0,
        },
      },
      u = {
        container: {
          borderStartStartRadius: "xt8t1vi",
          borderStartEndRadius: "x1xc408v",
          borderEndEndRadius: "x129tdwq",
          borderEndStartRadius: "x15urzxu",
          width: "x1td3qas",
          $$css: !0,
        },
        selected: { backgroundColor: "x1abdmlv", $$css: !0 },
      },
      c = {
        container: {
          marginInlineStart: "x150mmf0",
          marginBottom: "xefnzgg",
          $$css: !0,
        },
      },
      d = {
        container: {
          borderBottomColor: "x120ee7l",
          borderBottomStyle: "x1q0q8m5",
          borderBottomWidth: "xso031l",
          marginBottom: "x4tpdpg",
          paddingBottom: "x1nbhmlj",
          $$css: !0,
        },
      },
      m = {
        calendar: {
          backgroundColor: "x1280gxy",
          borderTopColor: "x1isl193",
          borderInlineEndColor: "x1e225iy",
          borderBottomColor: "x1bnlyaz",
          borderInlineStartColor: "x12ws5rt",
          borderStartStartRadius: "xyi3aci",
          borderStartEndRadius: "xwf5gio",
          borderEndEndRadius: "x1p453bz",
          borderEndStartRadius: "x1suzm8a",
          borderTopStyle: "xe73qa2",
          borderInlineEndStyle: "xsgwwv8",
          borderBottomStyle: "xuhg6hn",
          borderInlineStartStyle: "xli3dgm",
          borderTopWidth: "xsl91qr",
          borderInlineEndWidth: "x1aq9cx1",
          borderBottomWidth: "xe0m388",
          borderInlineStartWidth: "xhe8bae",
          paddingTop: "x16ovd2e",
          paddingInlineEnd: "x1nzty39",
          paddingBottom: "x12xbjc7",
          paddingInlineStart: "x12w63v0",
          $$css: !0,
        },
        calendarWeeksContainer: { rowGap: "x129bwdz", $$css: !0 },
        calendarWeekSize: {
          columnGap: "x1s70e7g",
          height: "x10w6t97",
          $$css: !0,
        },
      },
      p = {
        xstyleConfig: {
          textColor: (e = o("WDSColorStyles.stylex")).WDSColorStyles
            .contentDefault,
        },
      },
      _ = {
        xstyleConfig: {
          pressable: [
            s.pressable,
            o("WDSFocusStateStyles").WDSFocusStateStyles.genericFocus,
          ],
          pressableDisabled: o("WDSDisabledStateStyles").WDSDisabledStateStyles
            .genericDisabledPersistent,
        },
      },
      f = {
        calendarDayVariant: {
          currentDayTextColorVariant: p,
          disabledTextColorVariant: {
            xstyleConfig: { textColor: e.WDSColorStyles.contentDisabled },
          },
          highlightedTextColorVariant: {
            xstyleConfig: { textColor: e.WDSColorStyles.secondaryPositive },
          },
          offMonthTextColorVariant: {
            xstyleConfig: { textColor: e.WDSColorStyles.contentDeemphasized },
          },
          selectedTextColorVariant: {
            xstyleConfig: { textColor: e.WDSColorStyles.accentEmphasized },
          },
          textColorVariant: p,
          textTypeVariant: o("WDSFontConfig").WDSTextConfig.Body2,
          xstyleConfig: {
            container: [
              u.container,
              o("WDSFocusStateStyles").WDSFocusStateStyles.genericFocus,
            ],
            containerSelectableDays: s.pressable,
            disabled: o("WDSDisabledStateStyles").WDSDisabledStateStyles
              .genericDisabledPersistent,
            selected: u.selected,
          },
        },
        calendarMonthNavigationVariant: {
          buttonIconSizeVariant: {
            xstyleConfig: {
              addOnEnd: {},
              addOnStart: {},
              item: {},
              pressed: {},
              content: [s.buttonIconSize, s.iconCenter],
            },
          },
          buttonIconTypeVariant: _,
          iconColorVariant: {
            xstyleConfig: { color: e.WDSColorStyles.contentDefault },
          },
          iconSizeVariant: { size: 20 },
          nextButtonIcon: r("MetaBrandCaretRightOutline24Icon.react"),
          prevButtonIcon: r("MetaBrandCaretLeftOutline24Icon.react"),
          textColorVariant: p,
          textTypeVariant: o("WDSFontConfig").WDSTextConfig.Body2Emphasized,
          xstyleConfig: { container: c.container },
        },
        calendarWeekdayLabelsVariant: {
          textColorVariant: {
            xstyleConfig: { textColor: e.WDSColorStyles.contentDeemphasized },
          },
          textTypeVariant: o("WDSFontConfig").WDSTextConfig.Body3,
          xstyleConfig: { container: d.container },
        },
        fontMetrics: o("BaseTextV2FontMetrics").RobotoFontMetrics,
        xstyleConfig: {
          calendar: m.calendar,
          calendarWeeksContainer: m.calendarWeeksContainer,
          calendarWeekSize: m.calendarWeekSize,
          iconOverlayHovered: {},
        },
      };
    l.WDSCalendarTypeVariant = f;
  },
  98,
);
