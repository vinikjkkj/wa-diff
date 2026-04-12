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
      var n = t.height,
        a = t.lat,
        i = t.linkify,
        l = i === void 0 ? !0 : i,
        u = t.lng,
        d = t.name,
        y = t.onClick,
        C = t.onLoad,
        b = t.radiusMeters,
        v = t.showMarker,
        S = v === void 0 ? !0 : v,
        R = t.testid,
        L = t.width,
        E = t.xstyle,
        k = t.zoom,
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
        O = m(
          function () {
            var e = o("WAWebMapUtils").getMapImgSrcUrl({
              height: n,
              lat: a,
              lng: u,
              isDarkTheme: w === "dark",
              radiusMeters: b,
              showMarker: S,
              width: L,
              zoom: k,
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
          },
          [n, a, u, b, w, S, L, k, A],
        );
      _(
        function () {
          O();
        },
        [I, O],
      );
      var B = { pointerEvents: "none", width: L, height: P ? void 0 : n },
        W = function (t) {
          (N(!0), C == null || C());
        },
        q = P
          ? null
          : c.jsx(o("WAWebMapPlaceholderIcon.react").MapPlaceholderIcon, {
              displayInline: !0,
              iconXstyle: h.svg,
            }),
        U = c.jsx(r("WAWebImg.react"), {
          src: D || "",
          className: (e || (e = r("stylex")))(E, !P && h.hidden),
          style: B,
          hasPrivacyChecks: !1,
          onLoad: W,
          noXHR: !0,
        });
      return l
        ? c.jsxs(o("WAWebExternalLink.react").ExternalLink, {
            href: o("WAWebMapUtils").getMapUrl(a, u, d),
            xstyle: h.container,
            onClick: y,
            testid: void 0,
            "aria-label": s._(/*BTDS*/ "Open map location"),
            children: [q, U],
          })
        : c.jsxs("span", {
            className:
              "x6s0dn4 x78zum5 x5yr21d xl56j7k x6ikm8r x10wlt62 x9f619 xtu1v1 x1h22o6k x1ue6dqu xhq422q xbq6axl xjajieo xtnmogg x1av0zpm xkosrqj x17j0exz xwr2l8c xgn0dxz x1878o1q xf2y0h5 xnv9r3m xo81p9n",
            children: [q, U],
          });
    }
    ((y.displayName = y.name + " [from " + i.id + "]"), (l.default = y));
  },
  226,
);
