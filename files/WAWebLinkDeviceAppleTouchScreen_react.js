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
    "react-compiler-runtime",
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
      var t = o("react-compiler-runtime").c(20),
        n = e.onContinueToWeb,
        a = e.onOpenAppStore,
        i,
        l;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((i = {
            className:
              "xixxii4 x13vifvy x1o0tod xtijo5x x1ey2m1c x78zum5 xdt5ytf xfo81ep xe4h88v",
          }),
          (l = {
            className: "x1p57kb1 xvpt6g3 xb0esv5 xyo0t3i x78zum5 xl56j7k",
          }),
          (t[0] = i),
          (t[1] = l))
        : ((i = t[0]), (l = t[1]));
      var d;
      t[2] === Symbol.for("react.memo_cache_sentinel")
        ? ((d = u.jsx(o("WAWebFlex.react").FlexItem, {
            grow: 0,
            children: u.jsx(o("WAWebWaLogoIcon.react").WaLogoIcon, {
              height: 22,
              width: 23,
              iconXstyle: c.brandColor,
            }),
          })),
          (t[2] = d))
        : (d = t[2]);
      var m, p, _, f, g, h;
      t[3] === Symbol.for("react.memo_cache_sentinel")
        ? ((m = u.jsx(
            "div",
            babelHelpers.extends({}, l, {
              children: u.jsxs(o("WAWebFlex.react").FlexRow, {
                align: "center",
                children: [
                  d,
                  u.jsx(o("WAWebFlex.react").FlexItem, {
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
          )),
          (p = {
            className:
              "x78zum5 x1cy8zhl xl56j7k xb0esv5 xyo0t3i xl7twdi xvg22vi x1odjw0f x5lxg6s x98rzlu x2lwn1j",
          }),
          (_ = {
            className: "x2b8uid x78zum5 xdt5ytf x6s0dn4 xr1yuqi x4ii5y1",
          }),
          (f = u.jsx("div", {
            className: "xg6s713",
            children: u.jsx(
              o("WAWebWdsIllPhoneNativeDownloadIcon.react")
                .WdsIllPhoneNativeDownloadIcon,
              {},
            ),
          })),
          (g = u.jsx("div", {
            className: "x1ua1l7f x1hql6x6 x579bpy xo1l8bm x1u7k74",
            children: s._(/*BTDS*/ "Download WhatsApp"),
          })),
          (h = u.jsx("div", {
            className: "xg6s713 x1hql6x6 x1jchvi3 xo1l8bm x19v9tvf",
            children: s._(
              /*BTDS*/ "For the best experience on your device, download WhatsApp from the App Store.",
            ),
          })),
          (t[3] = m),
          (t[4] = p),
          (t[5] = _),
          (t[6] = f),
          (t[7] = g),
          (t[8] = h))
        : ((m = t[3]),
          (p = t[4]),
          (_ = t[5]),
          (f = t[6]),
          (g = t[7]),
          (h = t[8]));
      var y;
      t[9] === Symbol.for("react.memo_cache_sentinel")
        ? ((y = [c.buttonStyles, c.primaryButton]), (t[9] = y))
        : (y = t[9]);
      var C;
      t[10] === Symbol.for("react.memo_cache_sentinel")
        ? ((C = u.jsx(o("WAWebFlex.react").FlexRow, {
            align: "center",
            justify: "center",
            children: u.jsx(o("WAWebFlex.react").FlexItem, {
              children: s._(/*BTDS*/ "Download app"),
            }),
          })),
          (t[10] = C))
        : (C = t[10]);
      var b;
      t[11] !== a
        ? ((b = u.jsx(r("WAWebUnstyledButton.react"), {
            xstyle: y,
            onClick: a,
            testid: void 0,
            children: C,
          })),
          (t[11] = a),
          (t[12] = b))
        : (b = t[12]);
      var v;
      t[13] === Symbol.for("react.memo_cache_sentinel")
        ? ((v = [c.buttonStyles, c.secondaryButton]), (t[13] = v))
        : (v = t[13]);
      var S;
      t[14] === Symbol.for("react.memo_cache_sentinel")
        ? ((S = u.jsx(o("WAWebFlex.react").FlexRow, {
            align: "center",
            justify: "center",
            grow: 0,
            children: u.jsx(o("WAWebFlex.react").FlexItem, {
              children: s._(/*BTDS*/ "Continue to WhatsApp Web"),
            }),
          })),
          (t[14] = S))
        : (S = t[14]);
      var R;
      t[15] !== n
        ? ((R = u.jsx(r("WAWebUnstyledButton.react"), {
            xstyle: v,
            onClick: n,
            testid: void 0,
            children: S,
          })),
          (t[15] = n),
          (t[16] = R))
        : (R = t[16]);
      var L;
      return (
        t[17] !== b || t[18] !== R
          ? ((L = u.jsxs(
              "div",
              babelHelpers.extends({}, i, {
                children: [
                  m,
                  u.jsx(
                    "div",
                    babelHelpers.extends({}, p, {
                      children: u.jsxs(
                        "div",
                        babelHelpers.extends({}, _, {
                          children: [
                            f,
                            g,
                            h,
                            u.jsxs(o("WAWebFlex.react").FlexColumn, {
                              align: "stretch",
                              xstyle: c.buttonsContainer,
                              children: [b, R],
                            }),
                          ],
                        }),
                      ),
                    }),
                  ),
                ],
              }),
            )),
            (t[17] = b),
            (t[18] = R),
            (t[19] = L))
          : (L = t[19]),
        L
      );
    }
    l.default = d;
  },
  226,
);
