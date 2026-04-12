__d(
  "WAWebLinkDeviceScreenPrimaryButton.react",
  [
    "WAWebFlex.react",
    "WAWebUISpacing",
    "WAWebUnstyledButton.react",
    "WDSButton.react",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = {
        button: {
          color: "x1hql6x6",
          fontWeight: "xk50ysn",
          borderTopWidth: "x178xt8z",
          borderInlineEndWidth: "x1lun4ml",
          borderBottomWidth: "xso031l",
          borderInlineStartWidth: "xpilrb4",
          borderTopStyle: "x13fuv20",
          borderInlineEndStyle: "x18b5jzi",
          borderBottomStyle: "x1q0q8m5",
          borderInlineStartStyle: "x1t7ytsu",
          borderTopColor: "xsrozwr",
          borderInlineEndColor: "x1w32m0z",
          borderBottomColor: "xmigjs0",
          borderInlineStartColor: "xrolgzk",
          borderStartStartRadius: "x17m9png",
          borderStartEndRadius: "x91sizk",
          borderEndEndRadius: "x1vva9xg",
          borderEndStartRadius: "x1jfkl46",
          fontSize: "x1jchvi3",
          lineHeight: "x1d3mw78",
          height: "xdd8jsf",
          minWidth: "x1wfn8jh",
          whiteSpace: "x126k92a",
          backgroundColor: "xy7xkci",
          overflowX: "x6ikm8r",
          overflowY: "x10wlt62",
          position: "x1n2onr6",
          zIndex: "x1vjfegm",
          $$css: !0,
        },
        buttonDisabled: {
          backgroundColor: "x12hhv0b",
          cursor: "x1h6gzvc",
          color: "x1ur0v9m",
          borderTopStyle: "x1ejq31n",
          borderInlineEndStyle: "x18oe1m7",
          borderBottomStyle: "x1sy0etr",
          borderInlineStartStyle: "xstzfhl",
          $$css: !0,
        },
        buttonAnimations: {
          transition: "xeh1a47",
          color: "x1hql6x6 xr8f6zs",
          backgroundColor: "xy7xkci x10j0mou",
          transitionDelay: "xine9no",
          outline: "xdfradd",
          outlineOffset: "x12ijfkc",
          $$css: !0,
        },
        iconSpacing: {
          marginTop: "x1kgmq87",
          letterSpacing: "x72az59",
          $$css: !0,
        },
        horizontalSpace: { width: "x1tdqgrh", $$css: !0 },
      };
    function c(e) {
      var t = e.animate,
        n = t === void 0 ? !0 : t,
        a = e.disabled,
        i = a === void 0 ? !1 : a,
        l = e.icon,
        c = e.onClick,
        d = e.testId,
        m = e.text,
        p = e.theme,
        _ = p === void 0 ? "default" : p,
        f = e.xstyle;
      return _ === "wds"
        ? s.jsx(r("WDSButton.react"), {
            label: m,
            variant: "filled",
            disabled: i,
            testid: void 0,
            onPress: function () {
              return void c();
            },
            widthMode: "fit",
            xstyle: u.horizontalSpace,
          })
        : s.jsxs(r("WAWebUnstyledButton.react"), {
            testid: void 0,
            xstyle: [
              { "x-default-marker": "x-default-marker", $$css: !0 },
              u.button,
              !i && n && u.buttonAnimations,
              i && u.buttonDisabled,
              o("WAWebUISpacing").uiPadding.vert10,
              o("WAWebUISpacing").uiPadding.horiz24,
              f,
            ],
            onClick: c,
            disabled: i,
            children: [
              s.jsxs(o("WAWebFlex.react").FlexRow, {
                align: "center",
                justify: "center",
                children: [
                  s.jsx(o("WAWebFlex.react").FlexItem, { children: m }),
                  l != null &&
                    s.jsx(o("WAWebFlex.react").FlexItem, {
                      xstyle: [
                        o("WAWebUISpacing").uiPadding.start14,
                        u.iconSpacing,
                      ],
                      children: l,
                    }),
                ],
              }),
              n &&
                s.jsx("div", {
                  className:
                    "x10l6tqk x8knxv4 x13vifvy x1o0tod x1u74lcz xajigtk x1135g7d x1c9tyrk xeusxvb x1pahc9y x1ertn4p x1f4dtem xyz1g3t x1y3a7h5",
                }),
            ],
          });
    }
    ((c.displayName = c.name + " [from " + i.id + "]"), (l.default = c));
  },
  98,
);
