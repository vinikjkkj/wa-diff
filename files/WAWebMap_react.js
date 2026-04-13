__d(
  "WAWebMap.react",
  [
    "fbt",
    "WAWebExternalLink.react",
    "WAWebImageUtils",
    "WAWebImg.react",
    "WAWebMapPlaceholderIcon.react",
    "WAWebMapUtils",
    "WAWebThemeContext",
    "WAWebURLUtils",
    "react",
    "react-compiler-runtime",
    "stylex",
    "useWAWebDevicePixelRatio",
    "useWAWebUnmountSignal",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u,
      c = u || (u = o("react")),
      d = u,
      m = d.useCallback,
      p = d.useContext,
      _ = d.useEffect,
      f = d.useRef,
      g = d.useState,
      h = {
        container: {
          alignItems: "x6s0dn4",
          display: "x78zum5",
          height: "x5yr21d",
          justifyContent: "xl56j7k",
          overflowX: "x6ikm8r",
          overflowY: "x10wlt62",
          boxSizing: "x9f619",
          ":focus-visible_borderStartStartRadius": "xtu1v1",
          ":focus-visible_borderStartEndRadius": "x1h22o6k",
          ":focus-visible_borderEndEndRadius": "x1ue6dqu",
          ":focus-visible_borderEndStartRadius": "xhq422q",
          ":focus-visible_borderTopWidth": "xbq6axl",
          ":focus-visible_borderInlineEndWidth": "xjajieo",
          ":focus-visible_borderBottomWidth": "xtnmogg",
          ":focus-visible_borderInlineStartWidth": "x1av0zpm",
          ":focus-visible_borderTopStyle": "xkosrqj",
          ":focus-visible_borderInlineEndStyle": "x17j0exz",
          ":focus-visible_borderBottomStyle": "xwr2l8c",
          ":focus-visible_borderInlineStartStyle": "xgn0dxz",
          ":focus-visible_borderTopColor": "x1878o1q",
          ":focus-visible_borderInlineEndColor": "xf2y0h5",
          ":focus-visible_borderBottomColor": "xnv9r3m",
          ":focus-visible_borderInlineStartColor": "xo81p9n",
          $$css: !0,
        },
        svg: { width: "xh8yej3", $$css: !0 },
        hidden: { display: "x1s85apg", $$css: !0 },
      };
    function y(t) {
      var n = o("react-compiler-runtime").c(39),
        a = t.height,
        i = t.lat,
        l = t.linkify,
        u = t.lng,
        d = t.name,
        m = t.onClick,
        y = t.onLoad,
        C = t.radiusMeters,
        b = t.showMarker,
        v = t.testid,
        S = t.width,
        R = t.xstyle,
        L = t.zoom,
        E = l === void 0 ? !0 : l,
        k = b === void 0 ? !0 : b,
        I = r("useWAWebDevicePixelRatio")(),
        T = g(null),
        D = T[0],
        x = T[1],
        $ = g(!1),
        P = $[0],
        N = $[1],
        M = p(o("WAWebThemeContext").ThemeContext),
        w = M.theme,
        A = r("useWAWebUnmountSignal")(),
        F = f(null),
        O;
      n[0] !== a ||
      n[1] !== i ||
      n[2] !== u ||
      n[3] !== C ||
      n[4] !== k ||
      n[5] !== w ||
      n[6] !== A ||
      n[7] !== S ||
      n[8] !== L
        ? ((O = function () {
            var e = o("WAWebMapUtils").getMapImgSrcUrl({
              height: a,
              lat: i,
              lng: u,
              isDarkTheme: w === "dark",
              radiusMeters: C,
              showMarker: k,
              width: S,
              zoom: L,
            });
            if (F.current !== e) {
              F.current = e;
              var t = r("WAWebURLUtils").GSM_API_KEY_SECRET;
              r("WAWebURLUtils")
                .gsmURL(e, t)
                .then(function (e) {
                  A.aborted || (x(e), N(o("WAWebImageUtils").isCached(e)));
                });
            }
          }),
          (n[0] = a),
          (n[1] = i),
          (n[2] = u),
          (n[3] = C),
          (n[4] = k),
          (n[5] = w),
          (n[6] = A),
          (n[7] = S),
          (n[8] = L),
          (n[9] = O))
        : (O = n[9]);
      var B = O,
        W;
      n[10] !== B
        ? ((W = function () {
            B();
          }),
          (n[10] = B),
          (n[11] = W))
        : (W = n[11]);
      var q;
      (n[12] !== I || n[13] !== B
        ? ((q = [I, B]), (n[12] = I), (n[13] = B), (n[14] = q))
        : (q = n[14]),
        _(W, q));
      var U = P ? void 0 : a,
        V;
      n[15] !== U || n[16] !== S
        ? ((V = { pointerEvents: "none", width: S, height: U }),
          (n[15] = U),
          (n[16] = S),
          (n[17] = V))
        : (V = n[17]);
      var H = V,
        G;
      n[18] !== y
        ? ((G = function (t) {
            (N(!0), y == null || y());
          }),
          (n[18] = y),
          (n[19] = G))
        : (G = n[19]);
      var z = G,
        j;
      n[20] !== P
        ? ((j = P
            ? null
            : c.jsx(o("WAWebMapPlaceholderIcon.react").MapPlaceholderIcon, {
                displayInline: !0,
                iconXstyle: h.svg,
              })),
          (n[20] = P),
          (n[21] = j))
        : (j = n[21]);
      var K = j,
        Q = D || "",
        X;
      n[22] !== P || n[23] !== R
        ? ((X = (e || (e = r("stylex")))(R, !P && h.hidden)),
          (n[22] = P),
          (n[23] = R),
          (n[24] = X))
        : (X = n[24]);
      var Y;
      n[25] !== z || n[26] !== H || n[27] !== X || n[28] !== Q
        ? ((Y = c.jsx(r("WAWebImg.react"), {
            src: Q,
            className: X,
            style: H,
            hasPrivacyChecks: !1,
            onLoad: z,
            noXHR: !0,
          })),
          (n[25] = z),
          (n[26] = H),
          (n[27] = X),
          (n[28] = Q),
          (n[29] = Y))
        : (Y = n[29]);
      var J = Y,
        Z;
      return (
        n[30] !== i ||
        n[31] !== E ||
        n[32] !== u ||
        n[33] !== J ||
        n[34] !== d ||
        n[35] !== m ||
        n[36] !== K ||
        n[37] !== v
          ? ((Z = E
              ? c.jsxs(o("WAWebExternalLink.react").ExternalLink, {
                  href: o("WAWebMapUtils").getMapUrl(i, u, d),
                  xstyle: h.container,
                  onClick: m,
                  testid: void 0,
                  "aria-label": s._(/*BTDS*/ "Open map location"),
                  children: [K, J],
                })
              : c.jsxs("span", {
                  className:
                    "x6s0dn4 x78zum5 x5yr21d xl56j7k x6ikm8r x10wlt62 x9f619 xtu1v1 x1h22o6k x1ue6dqu xhq422q xbq6axl xjajieo xtnmogg x1av0zpm xkosrqj x17j0exz xwr2l8c xgn0dxz x1878o1q xf2y0h5 xnv9r3m xo81p9n",
                  children: [K, J],
                })),
            (n[30] = i),
            (n[31] = E),
            (n[32] = u),
            (n[33] = J),
            (n[34] = d),
            (n[35] = m),
            (n[36] = K),
            (n[37] = v),
            (n[38] = Z))
          : (Z = n[38]),
        Z
      );
    }
    l.default = y;
  },
  226,
);
