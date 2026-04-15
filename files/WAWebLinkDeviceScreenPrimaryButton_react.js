__d(
  "WAWebLinkDeviceScreenPrimaryButton.react",
  [
    "WAWebFlex.react",
    "WAWebUISpacing",
    "WAWebUnstyledButton.react",
    "WDSButton.react",
    "react",
    "react-compiler-runtime",
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
      var t = o("react-compiler-runtime").c(28),
        n = e.animate,
        a = e.disabled,
        i = e.icon,
        l = e.onClick,
        c = e.testId,
        d = e.text,
        m = e.theme,
        p = e.xstyle,
        _ = n === void 0 ? !0 : n,
        f = a === void 0 ? !1 : a,
        g = m === void 0 ? "default" : m;
      if (g === "wds") {
        var h;
        t[0] !== l
          ? ((h = function () {
              return void l();
            }),
            (t[0] = l),
            (t[1] = h))
          : (h = t[1]);
        var y;
        return (
          t[2] !== f || t[3] !== h || t[4] !== c || t[5] !== d
            ? ((y = s.jsx(r("WDSButton.react"), {
                label: d,
                variant: "filled",
                disabled: f,
                testid: void 0,
                onPress: h,
                widthMode: "fit",
                xstyle: u.horizontalSpace,
              })),
              (t[2] = f),
              (t[3] = h),
              (t[4] = c),
              (t[5] = d),
              (t[6] = y))
            : (y = t[6]),
          y
        );
      }
      var C;
      t[7] === Symbol.for("react.memo_cache_sentinel")
        ? ((C = { "x-default-marker": "x-default-marker", $$css: !0 }),
          (t[7] = C))
        : (C = t[7]);
      var b = !f && _ && u.buttonAnimations,
        v = f && u.buttonDisabled,
        S;
      t[8] !== b || t[9] !== v || t[10] !== p
        ? ((S = [
            C,
            u.button,
            b,
            v,
            o("WAWebUISpacing").uiPadding.vert10,
            o("WAWebUISpacing").uiPadding.horiz24,
            p,
          ]),
          (t[8] = b),
          (t[9] = v),
          (t[10] = p),
          (t[11] = S))
        : (S = t[11]);
      var R;
      t[12] !== d
        ? ((R = s.jsx(o("WAWebFlex.react").FlexItem, { children: d })),
          (t[12] = d),
          (t[13] = R))
        : (R = t[13]);
      var L;
      t[14] !== i
        ? ((L =
            i != null &&
            s.jsx(o("WAWebFlex.react").FlexItem, {
              xstyle: [o("WAWebUISpacing").uiPadding.start14, u.iconSpacing],
              children: i,
            })),
          (t[14] = i),
          (t[15] = L))
        : (L = t[15]);
      var E;
      t[16] !== R || t[17] !== L
        ? ((E = s.jsxs(o("WAWebFlex.react").FlexRow, {
            align: "center",
            justify: "center",
            children: [R, L],
          })),
          (t[16] = R),
          (t[17] = L),
          (t[18] = E))
        : (E = t[18]);
      var k;
      t[19] !== _
        ? ((k =
            _ &&
            s.jsx("div", {
              className:
                "x10l6tqk x8knxv4 x13vifvy x1o0tod x1u74lcz xajigtk x1135g7d x1c9tyrk xeusxvb x1pahc9y x1ertn4p x1f4dtem xyz1g3t x1y3a7h5",
            })),
          (t[19] = _),
          (t[20] = k))
        : (k = t[20]);
      var I;
      return (
        t[21] !== f ||
        t[22] !== l ||
        t[23] !== E ||
        t[24] !== k ||
        t[25] !== S ||
        t[26] !== c
          ? ((I = s.jsxs(r("WAWebUnstyledButton.react"), {
              testid: void 0,
              xstyle: S,
              onClick: l,
              disabled: f,
              children: [E, k],
            })),
            (t[21] = f),
            (t[22] = l),
            (t[23] = E),
            (t[24] = k),
            (t[25] = S),
            (t[26] = c),
            (t[27] = I))
          : (I = t[27]),
        I
      );
    }
    l.default = c;
  },
  98,
);
