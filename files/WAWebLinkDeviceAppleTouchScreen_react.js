__d(
  "WAWebLinkDeviceAppleTouchScreen.react",
  [
    "fbt",
    "WAWebFlex.react",
    "WAWebUnstyledButton.react",
    "WAWebWaLogoIcon.react",
    "WAWebWaWordmarkIcon.react",
    "WAWebWdsIllPhoneNativeDownloadIcon.react",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react")),
      c = {
        headerText: {
          marginInlineStart: "xdwrcjd",
          marginTop: "xr9ek0c",
          $$css: !0,
        },
        brandColor: { color: "x1knego9", $$css: !0 },
        buttonsContainer: {
          width: "x1ye0lqc",
          rowGap: "x8a3fw1",
          columnGap: "x1aj3ljl",
          $$css: !0,
        },
        buttonStyles: {
          color: "x1hql6x6",
          fontWeight: "xk50ysn",
          fontSize: "x1jchvi3",
          lineHeight: "x1d3mw78",
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
          borderStartStartRadius: "xt8t1vi",
          borderStartEndRadius: "x1xc408v",
          borderEndEndRadius: "x129tdwq",
          borderEndStartRadius: "x15urzxu",
          height: "xdd8jsf",
          width: "xh8yej3",
          $$css: !0,
        },
        primaryButton: { backgroundColor: "xy7xkci", $$css: !0 },
        secondaryButton: { backgroundColor: "x12peec7", $$css: !0 },
      };
    function d(e) {
      var t,
        n = e.onContinueToWeb,
        a = e.onOpenAppStore;
      return u.jsxs("div", {
        className:
          "xixxii4 x13vifvy x1o0tod xtijo5x x1ey2m1c x78zum5 xdt5ytf xfo81ep xe4h88v",
        children: [
          u.jsx("div", {
            className: "x1p57kb1 xvpt6g3 xb0esv5 xyo0t3i x78zum5 xl56j7k",
            children: u.jsxs((t = o("WAWebFlex.react")).FlexRow, {
              align: "center",
              children: [
                u.jsx(t.FlexItem, {
                  grow: 0,
                  children: u.jsx(o("WAWebWaLogoIcon.react").WaLogoIcon, {
                    height: 22,
                    width: 23,
                    iconXstyle: c.brandColor,
                  }),
                }),
                u.jsx(t.FlexItem, {
                  grow: 1,
                  xstyle: c.headerText,
                  children: u.jsx(
                    o("WAWebWaWordmarkIcon.react").WaWordmarkIcon,
                    { height: 14, iconXstyle: c.brandColor },
                  ),
                }),
              ],
            }),
          }),
          u.jsx("div", {
            className:
              "x78zum5 x1cy8zhl xl56j7k xb0esv5 xyo0t3i xl7twdi xvg22vi x1odjw0f x5lxg6s x98rzlu x2lwn1j",
            children: u.jsxs("div", {
              className: "x2b8uid x78zum5 xdt5ytf x6s0dn4 xr1yuqi x4ii5y1",
              children: [
                u.jsx("div", {
                  className: "xg6s713",
                  children: u.jsx(
                    o("WAWebWdsIllPhoneNativeDownloadIcon.react")
                      .WdsIllPhoneNativeDownloadIcon,
                    {},
                  ),
                }),
                u.jsx("div", {
                  className: "x1ua1l7f x1hql6x6 x579bpy xo1l8bm x1u7k74",
                  children: s._(/*BTDS*/ "Download WhatsApp"),
                }),
                u.jsx("div", {
                  className: "xg6s713 x1hql6x6 x1jchvi3 xo1l8bm x19v9tvf",
                  children: s._(
                    /*BTDS*/ "For the best experience on your device, download WhatsApp from the App Store.",
                  ),
                }),
                u.jsxs(t.FlexColumn, {
                  align: "stretch",
                  xstyle: c.buttonsContainer,
                  children: [
                    u.jsx(r("WAWebUnstyledButton.react"), {
                      xstyle: [c.buttonStyles, c.primaryButton],
                      onClick: a,
                      testid: void 0,
                      children: u.jsx(o("WAWebFlex.react").FlexRow, {
                        align: "center",
                        justify: "center",
                        children: u.jsx(o("WAWebFlex.react").FlexItem, {
                          children: s._(/*BTDS*/ "Download app"),
                        }),
                      }),
                    }),
                    u.jsx(r("WAWebUnstyledButton.react"), {
                      xstyle: [c.buttonStyles, c.secondaryButton],
                      onClick: n,
                      testid: void 0,
                      children: u.jsx(o("WAWebFlex.react").FlexRow, {
                        align: "center",
                        justify: "center",
                        grow: 0,
                        children: u.jsx(o("WAWebFlex.react").FlexItem, {
                          children: s._(/*BTDS*/ "Continue to WhatsApp Web"),
                        }),
                      }),
                    }),
                  ],
                }),
              ],
            }),
          }),
        ],
      });
    }
    ((d.displayName = d.name + " [from " + i.id + "]"), (l.default = d));
  },
  226,
);
