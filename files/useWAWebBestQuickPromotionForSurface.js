__d(
  "useWAWebBestQuickPromotionForSurface",
  [
    "WAWebImg.react",
    "WAWebQuickPromotionCollection",
    "WAWebQuickPromotionSanitize.react",
    "WAWebThemeContext",
    "react",
    "useWAWebListener",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = e,
      c = u.useCallback,
      d = u.useEffect,
      m = u.useMemo,
      p = u.useState;
    function _(e, t, n) {
      n === void 0 && (n = []);
      var a = e.surfaceId,
        i = t == null ? void 0 : t.fireImpression,
        l = t == null ? void 0 : t.eligibilityCheck,
        u = c(
          function () {
            return l != null && !l()
              ? null
              : o(
                  "WAWebQuickPromotionCollection",
                ).QuickPromotionCollection.bestPromotionForSurface(e);
          },
          [a].concat(n, [l]),
        ),
        _ = o("WAWebThemeContext").useIsDarkTheme(),
        f = p(),
        g = f[0],
        h = f[1];
      (d(
        function () {
          h(u());
        },
        [h, u],
      ),
        d(
          function () {
            g != null && i === !0 && g.impression();
          },
          [a, g, i],
        ));
      var y = g == null ? void 0 : g.promotion.data.image,
        C = m(
          function () {
            if (y != null) {
              var e,
                t,
                n = _
                  ? (e = y.dark) == null
                    ? void 0
                    : e.elementValue
                  : (t = y.light) == null
                    ? void 0
                    : t.elementValue;
              if (n != null)
                try {
                  return window.URL.createObjectURL(new Blob([n]));
                } catch (e) {}
            }
          },
          [y, _],
        );
      if (
        (d(
          function () {
            return function () {
              C != null && window.URL.revokeObjectURL(C);
            };
          },
          [C],
        ),
        o("useWAWebListener").useListener(
          o("WAWebQuickPromotionCollection").QuickPromotionCollection,
          "add",
          function () {
            var e,
              t,
              n = u();
            ((n == null ? void 0 : n.id) !== (g == null ? void 0 : g.id) ||
              (n == null || (e = n.promotion) == null ? void 0 : e.ts) !==
                (g == null || (t = g.promotion) == null ? void 0 : t.ts)) &&
              h(n);
          },
        ),
        o("useWAWebListener").useListener(
          o("WAWebQuickPromotionCollection").QuickPromotionCollection,
          "change",
          function () {
            h(u());
          },
        ),
        g != null)
      ) {
        var b;
        if (C != null) {
          var v;
          b = s.jsx(r("WAWebImg.react"), {
            src: C,
            alt: (v = g.promotion.data.image) == null ? void 0 : v.description,
            className: "xh8yej3 x5yr21d",
          });
        }
        var S = s.jsx(r("WAWebQuickPromotionSanitize.react"), {
            dirty: g.promotion.data.textElementValue,
          }),
          R =
            g.promotion.data.qpConfigDismissable === "true"
              ? function () {
                  (g.dismiss(), h(u()));
                }
              : null,
          L = function () {
            g.impression();
          },
          E = function () {
            (g.primaryActionClick(), h(u()));
          };
        return {
          dismiss: R,
          impression: L,
          primaryActionClick: E,
          sanitizedText: S,
          image: b,
          promotion: g,
        };
      }
    }
    l.useBestQuickPromotionForSurface = _;
  },
  98,
);
