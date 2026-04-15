__d(
  "WAWebLinkDeviceCodeView.react",
  [
    "fbt",
    "WAWebAutoLogoutGating",
    "WAWebEnvironment",
    "WAWebFaqUrl",
    "WAWebFlex.react",
    "WAWebHybridRegGating",
    "WAWebLinkDeviceApiCmdTooltip.react",
    "WAWebLinkDeviceAutoLogoutToggle.react",
    "WAWebLinkDeviceCodeViewCodeType",
    "WAWebLinkDeviceCommonComponents.react",
    "WAWebLinkDeviceCommonInstructions.react",
    "WAWebLinkDeviceInstructions.react",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react")),
      c = {
        banner: { width: "xh8yej3", $$css: !0 },
        centerAlignOnSmallScreen: {
          width: "xh8yej3",
          alignItems: "x1cy8zhl xob9gl2",
          textAlign: "x1yc453h x1nj6vil",
          justifyItems: "x1eyeirb x8gkquz",
          $$css: !0,
        },
        marginTop20: { marginTop: "x1nmyh1g", $$css: !0 },
      };
    function d(e) {
      var t = o("react-compiler-runtime").c(75),
        n = e.alternativeLinkDeviceMethodHint,
        a = e.codeType,
        i = e.screenReaderSubtitleConfig,
        l;
      t[0] !== e
        ? ((l = function () {
            e.onAutoLogoutToggle && e.onAutoLogoutToggle();
          }),
          (t[0] = e),
          (t[1] = l))
        : (l = t[1]);
      var d = l,
        m = null;
      if (o("WAWebAutoLogoutGating").isAutoLogoutEnabled()) {
        var p,
          _ = (p = e.autoLogoutEnabled) != null ? p : !1,
          f;
        (t[2] !== d || t[3] !== _
          ? ((f = u.jsx(r("WAWebLinkDeviceAutoLogoutToggle.react"), {
              autoLogoutEnabled: _,
              onAutoLogoutToggle: d,
            })),
            (t[2] = d),
            (t[3] = _),
            (t[4] = f))
          : (f = t[4]),
          (m = f));
      }
      if (
        a === o("WAWebLinkDeviceCodeViewCodeType").LinkDeviceCodeViewCodeType.QR
      ) {
        var g;
        t[5] !== e.banners
          ? ((g = u.jsx(o("WAWebFlex.react").FlexItem, {
              xstyle: c.banner,
              children: e.banners,
            })),
            (t[5] = e.banners),
            (t[6] = g))
          : (g = t[6]);
        var h;
        t[7] === Symbol.for("react.memo_cache_sentinel")
          ? ((h = "xkh2ocl x6s0dn4 x1qughib xi32cqo x1qgv0r9 x18t01z2 xr3inr3"),
            (t[7] = h))
          : (h = t[7]);
        var y;
        t[8] !== e.title
          ? ((y = u.jsx(o("WAWebLinkDeviceCommonComponents.react").Title, {
              value: e.title,
              theme: o("WAWebHybridRegGating").isHybridRegEnabled()
                ? "wds"
                : void 0,
            })),
            (t[8] = e.title),
            (t[9] = y))
          : (y = t[9]);
        var C;
        t[10] !== i
          ? ((C = u.jsx(
              o("WAWebLinkDeviceCommonComponents.react").ScreenReaderSubtitle,
              { config: i },
            )),
            (t[10] = i),
            (t[11] = C))
          : (C = t[11]);
        var b;
        t[12] !== y || t[13] !== C
          ? ((b = u.jsxs(o("WAWebFlex.react").FlexItem, {
              xstyle: c.centerAlignOnSmallScreen,
              children: [y, C],
            })),
            (t[12] = y),
            (t[13] = C),
            (t[14] = b))
          : (b = t[14]);
        var v;
        t[15] !== e.subtitle
          ? ((v =
              e.subtitle != null &&
              u.jsx(o("WAWebFlex.react").FlexItem, {
                children: u.jsx(
                  o("WAWebLinkDeviceCommonComponents.react").Subtitle,
                  { value: e.subtitle },
                ),
              })),
            (t[15] = e.subtitle),
            (t[16] = v))
          : (v = t[16]);
        var S;
        t[17] !== a
          ? ((S = u.jsx(r("WAWebLinkDeviceInstructions.react"), {
              codeType: a,
            })),
            (t[17] = a),
            (t[18] = S))
          : (S = t[18]);
        var R;
        t[19] === Symbol.for("react.memo_cache_sentinel")
          ? ((R = o("WAWebHybridRegGating").isHybridRegEnabled()), (t[19] = R))
          : (R = t[19]);
        var L;
        t[20] === Symbol.for("react.memo_cache_sentinel")
          ? ((L = u.jsx(o("WAWebFlex.react").FlexItem, {
              marginTop: 20,
              children: u.jsx(
                o("WAWebLinkDeviceCommonInstructions.react").ExternalHelpLink,
                {
                  isBold: R,
                  showUnderline: o("WAWebHybridRegGating").isHybridRegEnabled()
                    ? !1
                    : void 0,
                  showArrow: o("WAWebHybridRegGating").isHybridRegEnabled()
                    ? !1
                    : void 0,
                  text: s._(/*BTDS*/ "Need help?"),
                  url: o("WAWebFaqUrl").getLinkDeviceFaqUrl(),
                },
              ),
            })),
            (t[20] = L))
          : (L = t[20]);
        var E;
        t[21] !== S
          ? ((E = u.jsxs(o("WAWebFlex.react").FlexItem, { children: [S, L] })),
            (t[21] = S),
            (t[22] = E))
          : (E = t[22]);
        var k;
        t[23] !== E || t[24] !== b || t[25] !== v
          ? ((k = u.jsxs(o("WAWebFlex.react").FlexColumn, {
              grow: r("WAWebEnvironment").isWindows ? void 0 : 1,
              rowGap: 40,
              shrink: 2,
              align: "start",
              alignSelf: "center",
              children: [b, v, E],
            })),
            (t[23] = E),
            (t[24] = b),
            (t[25] = v),
            (t[26] = k))
          : (k = t[26]);
        var I;
        t[27] === Symbol.for("react.memo_cache_sentinel")
          ? ((I = "x1n2onr6 x1y8v6su x1eq81zi"), (t[27] = I))
          : (I = t[27]);
        var T;
        t[28] !== e.apiCmd
          ? ((T = u.jsx(r("WAWebLinkDeviceApiCmdTooltip.react"), {
              apiCmd: e.apiCmd,
            })),
            (t[28] = e.apiCmd),
            (t[29] = T))
          : (T = t[29]);
        var D;
        t[30] !== e.children || t[31] !== T
          ? ((D = u.jsxs(o("WAWebFlex.react").FlexColumn, {
              align: "center",
              justify: "center",
              grow: 0,
              shrink: 0,
              className: I,
              children: [T, e.children],
            })),
            (t[30] = e.children),
            (t[31] = T),
            (t[32] = D))
          : (D = t[32]);
        var x;
        t[33] !== k || t[34] !== D
          ? ((x = u.jsxs(o("WAWebFlex.react").FlexRow, {
              wrap: "nowrap",
              className: h,
              children: [k, D],
            })),
            (t[33] = k),
            (t[34] = D),
            (t[35] = x))
          : (x = t[35]);
        var $;
        t[36] === Symbol.for("react.memo_cache_sentinel")
          ? (($ =
              "x78zum5 x1qughib xkh2ocl x1cy8zhl x1q0g3np xnlzww4 xozqiw3 x198rtga xxs79tx x1ewqh72"),
            (t[36] = $))
          : ($ = t[36]);
        var P;
        t[37] !== m
          ? ((P = u.jsx(o("WAWebFlex.react").FlexItem, { children: m })),
            (t[37] = m),
            (t[38] = P))
          : (P = t[38]);
        var N;
        t[39] !== n
          ? ((N = u.jsx(o("WAWebFlex.react").FlexItem, { children: n })),
            (t[39] = n),
            (t[40] = N))
          : (N = t[40]);
        var M;
        t[41] !== P || t[42] !== N
          ? ((M = u.jsxs(o("WAWebFlex.react").FlexItem, {
              className: $,
              children: [P, N],
            })),
            (t[41] = P),
            (t[42] = N),
            (t[43] = M))
          : (M = t[43]);
        var w;
        t[44] !== x || t[45] !== M
          ? ((w = u.jsxs(o("WAWebFlex.react").FlexColumn, {
              rowGap: o("WAWebHybridRegGating").isHybridRegEnabled() ? 8 : 40,
              children: [x, M],
            })),
            (t[44] = x),
            (t[45] = M),
            (t[46] = w))
          : (w = t[46]);
        var A;
        return (
          t[47] !== g || t[48] !== w
            ? ((A = u.jsxs(u.Fragment, { children: [g, w] })),
              (t[47] = g),
              (t[48] = w),
              (t[49] = A))
            : (A = t[49]),
          A
        );
      }
      var F;
      t[50] !== e.banners
        ? ((F = u.jsx(o("WAWebFlex.react").FlexItem, {
            xstyle: c.banner,
            children: e.banners,
          })),
          (t[50] = e.banners),
          (t[51] = F))
        : (F = t[51]);
      var O;
      t[52] !== e.title
        ? ((O = u.jsx(o("WAWebLinkDeviceCommonComponents.react").Title, {
            value: e.title,
          })),
          (t[52] = e.title),
          (t[53] = O))
        : (O = t[53]);
      var B;
      t[54] !== i
        ? ((B = u.jsx(
            o("WAWebLinkDeviceCommonComponents.react").ScreenReaderSubtitle,
            { config: i },
          )),
          (t[54] = i),
          (t[55] = B))
        : (B = t[55]);
      var W;
      t[56] !== O || t[57] !== B
        ? ((W = u.jsxs(o("WAWebFlex.react").FlexItem, { children: [O, B] })),
          (t[56] = O),
          (t[57] = B),
          (t[58] = W))
        : (W = t[58]);
      var q;
      t[59] !== e.subtitle
        ? ((q = u.jsx(o("WAWebFlex.react").FlexItem, {
            children: u.jsx(
              o("WAWebLinkDeviceCommonComponents.react").Subtitle,
              { value: e.subtitle },
            ),
          })),
          (t[59] = e.subtitle),
          (t[60] = q))
        : (q = t[60]);
      var U;
      t[61] === Symbol.for("react.memo_cache_sentinel")
        ? ((U =
            "xh8yej3 x1ndca9r x16qb05n xi7iut8 x1dm3dyd x1pv694p x10wjd1d x14mdic9 xl7twdi xvg22vi"),
          (t[61] = U))
        : (U = t[61]);
      var V;
      t[62] !== e.children
        ? ((V = u.jsx(o("WAWebFlex.react").FlexItem, {
            align: "center",
            justify: "center",
            grow: 0,
            className: U,
            children: e.children,
          })),
          (t[62] = e.children),
          (t[63] = V))
        : (V = t[63]);
      var H;
      t[64] !== a
        ? ((H = u.jsx(o("WAWebFlex.react").FlexItem, {
            children: u.jsx(r("WAWebLinkDeviceInstructions.react"), {
              codeType: a,
            }),
          })),
          (t[64] = a),
          (t[65] = H))
        : (H = t[65]);
      var G;
      t[66] !== n
        ? ((G = u.jsx(o("WAWebFlex.react").FlexItem, {
            xstyle: c.marginTop20,
            children: n,
          })),
          (t[66] = n),
          (t[67] = G))
        : (G = t[67]);
      var z;
      return (
        t[68] !== F ||
        t[69] !== W ||
        t[70] !== q ||
        t[71] !== V ||
        t[72] !== H ||
        t[73] !== G
          ? ((z = u.jsxs(o("WAWebFlex.react").FlexColumn, {
              children: [F, W, q, V, H, G],
            })),
            (t[68] = F),
            (t[69] = W),
            (t[70] = q),
            (t[71] = V),
            (t[72] = H),
            (t[73] = G),
            (t[74] = z))
          : (z = t[74]),
        z
      );
    }
    l.LinkDeviceCodeView = d;
  },
  226,
);
