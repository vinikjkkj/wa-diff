__d(
  "WDSMenuItemConfig",
  ["WDSMenuItemColorConfig.stylex", "WDSMenuItemLayoutConfig.stylex"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        itemDefault: {
          borderStartStartRadius: "xlr9sxt",
          borderStartEndRadius: "xvvg52n",
          borderEndEndRadius: "xwd4zgb",
          borderEndStartRadius: "xq8v1ta",
          $$css: !0,
        },
        itemDestructive: {
          borderStartStartRadius: "xlr9sxt",
          borderStartEndRadius: "xvvg52n",
          borderEndEndRadius: "xwd4zgb",
          borderEndStartRadius: "xq8v1ta",
          $$css: !0,
        },
      },
      s = 18;
    function u(e) {
      var t = e != null ? e : {},
        n = t.hasEndSection,
        r = n === void 0 ? !1 : n,
        a = t.hasIcon,
        i = a === void 0 ? !1 : a,
        l = t.hasIndent,
        s = l === void 0 ? !1 : l,
        u = t.hasProfilePhoto,
        c = u === void 0 ? !1 : u,
        d = t.hasSubtitle,
        m = d === void 0 ? !1 : d,
        p = t.isToggleable,
        _ = p === void 0 ? !1 : p;
      return {
        listItemBase: o("WDSMenuItemLayoutConfig.stylex")
          .WDSMenuItemBaseLayoutStyles.listItemBase,
        listItemDefault:
          !i && !_ && !s && !c
            ? o("WDSMenuItemLayoutConfig.stylex").WDSMenuItemBaseLayoutStyles
                .listItemDefault
            : void 0,
        listItemWithSubtitle: m
          ? o("WDSMenuItemLayoutConfig.stylex").WDSMenuItemBaseLayoutStyles
              .listItemWithSubtitle
          : void 0,
        listItemEndPadding: r
          ? void 0
          : o("WDSMenuItemLayoutConfig.stylex").WDSMenuItemBaseLayoutStyles
              .listItemEndPadding,
        startEndContainer: o("WDSMenuItemLayoutConfig.stylex")
          .WDSMenuItemContainerLayoutStyles.startEndContainer,
        endSectionContainer: o("WDSMenuItemLayoutConfig.stylex")
          .WDSMenuItemContainerLayoutStyles.endSectionContainer,
        indentContainer: o("WDSMenuItemLayoutConfig.stylex")
          .WDSMenuItemContainerLayoutStyles.indentContainer,
        shortcutContainer: o("WDSMenuItemLayoutConfig.stylex")
          .WDSMenuItemContainerLayoutStyles.shortcutContainer,
        profilePhotoContainer: o("WDSMenuItemLayoutConfig.stylex")
          .WDSMenuItemContainerLayoutStyles.profilePhotoContainer,
        toggledContainer: o("WDSMenuItemLayoutConfig.stylex")
          .WDSMenuItemContainerLayoutStyles.toggledContainer,
        iconContainer: o("WDSMenuItemLayoutConfig.stylex")
          .WDSMenuItemContainerLayoutStyles.iconContainer,
        textContainer: o("WDSMenuItemLayoutConfig.stylex")
          .WDSMenuItemContainerLayoutStyles.textContainer,
        submenuContainer: o("WDSMenuItemLayoutConfig.stylex")
          .WDSMenuItemContainerLayoutStyles.submenuContainer,
        separator: o("WDSMenuItemLayoutConfig.stylex")
          .WDSMenuItemSeparatorLayoutStyles.separator,
        groupHeader: o("WDSMenuItemLayoutConfig.stylex")
          .WDSMenuItemGroupHeaderLayoutStyles.groupHeader,
        numberContainer: o("WDSMenuItemLayoutConfig.stylex")
          .WDSMenuItemContainerLayoutStyles.numberContainer,
      };
    }
    function c(e, t, n, r, o) {
      return e
        ? "contentDisabled"
        : t && (r || o)
          ? "secondaryNegativeEmphasized"
          : n
            ? "contentDeemphasized"
            : "contentDefault";
    }
    function d(t, n) {
      var r = t ? e.itemDestructive : e.itemDefault,
        a;
      return (
        n
          ? (a = o(
              "WDSMenuItemColorConfig.stylex",
            ).WDSMenuItemDisabledColorStyles)
          : t
            ? (a = o(
                "WDSMenuItemColorConfig.stylex",
              ).WDSMenuItemDestructiveColorStyles)
            : (a = o(
                "WDSMenuItemColorConfig.stylex",
              ).WDSMenuItemDefaultColorStyles),
        { xstyleConfig: { item: [r, a.content, a.contentFocusVisible] } }
      );
    }
    ((l.WDSMenuItemIconSize = s),
      (l.getMenuItemLayoutStyles = u),
      (l.getMenuItemTextColorStyles = c),
      (l.getMenuItemColorStyles = d));
  },
  98,
);
