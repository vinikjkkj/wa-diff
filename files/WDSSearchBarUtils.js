__d(
  "WDSSearchBarUtils",
  [
    "fbt",
    "WDSButton.react",
    "WDSFlex.stylex",
    "WDSSearchBarConfig",
    "react",
    "react-strict-dom",
    "stylex",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u,
      c = u || (u = o("react")),
      d = {
        iconContainer: {
          height: "x5yr21d",
          display: "x78zum5",
          alignItems: "x6s0dn4",
          justifyItems: "x1o2pa38",
          $$css: !0,
        },
        pointerButtonContainer: {
          height: "x10w6t97",
          width: "x187nhsf",
          $$css: !0,
        },
        androidTouchButtonContainer: {
          height: "x1vqgdyp",
          width: "x100vrsf",
          $$css: !0,
        },
        iOSTouchButtonContainer: {
          height: "xxk0z11",
          width: "xvy4d1p",
          color: "xhslqc4",
          $$css: !0,
        },
        cancelButtonContainer: {
          display: "x78zum5",
          width: "xnalus7",
          maxWidth: "x1t8xbu",
          opacity: "xg01cxk",
          visibility: "xlshs6z",
          transform: "xumwmo6",
          transition: "xy9syeq",
          $$css: !0,
        },
        cancelButtonVisible: {
          width: "xh8yej3",
          opacity: "x1hc1fzr",
          visibility: "xnpuxes",
          transform: "xbryuvx",
          $$css: !0,
        },
      };
    function m(e) {
      var t = e.EndIcon,
        n = e.density,
        a = e.onEndIconClick,
        i = e.platform;
      if (t == null || a == null) return null;
      var l;
      return (
        n === o("WDSSearchBarConfig").SearchBarDensity.POINTER
          ? (l = d.pointerButtonContainer)
          : i === "android"
            ? (l = d.androidTouchButtonContainer)
            : (l = d.iOSTouchButtonContainer),
        c.jsx(o("react-strict-dom").html.div, {
          style: d.iconContainer,
          children: c.jsx(r("WDSButton.react"), {
            variant: "borderless",
            size: "small",
            onPress: a,
            Icon: t,
            "aria-label": "End icon button",
            widthMode: "fit",
            xstyle: l,
          }),
        })
      );
    }
    m.displayName = m.name + " [from " + i.id + "]";
    function p(t) {
      var n = t.isFocused,
        a = t.onCancel,
        i = t.textInput;
      return c.jsxs(
        "div",
        babelHelpers.extends(
          {},
          (e || (e = r("stylex"))).props(
            o("WDSFlex.stylex").wdsFlex.flex,
            o("WDSFlex.stylex").wdsFlex.alignCenter,
          ),
          {
            children: [
              c.jsx(
                "div",
                babelHelpers.extends(
                  {},
                  e.props(
                    o("WDSFlex.stylex").wdsFlex.flex,
                    o("WDSFlex.stylex").wdsFlex.flexGrow1,
                    n && o("WDSFlex.stylex").wdsFlex.flexShrink1,
                  ),
                  { children: i },
                ),
              ),
              c.jsx(o("react-strict-dom").html.div, {
                style: [d.cancelButtonContainer, n && d.cancelButtonVisible],
                children: c.jsx(r("WDSButton.react"), {
                  platform: "iOS",
                  variant: "borderless",
                  label: s._(/*BTDS*/ "Cancel"),
                  onPress: a,
                }),
              }),
            ],
          },
        ),
      );
    }
    ((p.displayName = p.name + " [from " + i.id + "]"),
      (l.SearchBarAddOnEnd = m),
      (l.SearchBarWrapperIOS = p));
  },
  226,
);
