__d(
  "WAWebBizAdCreationSectionNotices.react",
  [
    "WAWebBizAdCreationLoggerContext",
    "WAWebBizAdCreationNoticeCard.react",
    "WAWebBizAdCreationValidateSpecContext",
    "WAWebBizAdLogger",
    "WAWebFlex.react",
    "WAWebNoop",
    "react",
    "useVisibility",
    "useWAWebBizAdCreationNotices",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = e,
      c = u.useCallback,
      d = u.useContext,
      m = u.useMemo,
      p = u.useRef,
      _ = u.useState,
      f = { container: { rowGap: "x1qvou4u", $$css: !0 } };
    function g(e) {
      var t = e.specElement,
        n = r("useWAWebBizAdCreationNotices")(t),
        a = d(r("WAWebBizAdCreationValidateSpecContext")),
        i = a == null ? void 0 : a.noticeActionOverrides,
        l = a == null ? void 0 : a.revalidate,
        u = m(
          function () {
            if (i == null) return {};
            var e = {},
              t = function () {
                var t = i[n];
                e[n] = function () {
                  t(l != null ? l : r("WAWebNoop"));
                };
              };
            for (var n in i) t();
            return e;
          },
          [i, l],
        ),
        g = _(new Set()),
        h = g[0],
        y = g[1],
        C = d(r("WAWebBizAdCreationLoggerContext")),
        b = p(new Set()),
        v = r("useVisibility")({
          onVisible: function () {
            C != null &&
              n.forEach(function (e, n) {
                if (!h.has(n) && e.noticeName != null) {
                  var o = t + "-" + e.noticeName + "-" + String(e.title);
                  b.current.has(o) ||
                    (b.current.add(o),
                    r("WAWebBizAdLogger").logValidationNoticeImpression({
                      loggerContext: C,
                      messageType: e.severity,
                      noticeName: e.noticeName,
                      specElement: t,
                    }));
                }
              });
          },
        }),
        S = v[0],
        R = c(function (e) {
          y(function (t) {
            var n = new Set(t);
            return (n.add(e), n);
          });
        }, []),
        L = n.filter(function (e, t) {
          return !h.has(t);
        });
      return L.length === 0
        ? null
        : s.jsx(o("WAWebFlex.react").FlexColumn, {
            ref: S,
            align: "stretch",
            xstyle: f.container,
            children: n.map(function (e, t) {
              if (h.has(t)) return null;
              var n = e.noticeName;
              return s.jsx(
                r("WAWebBizAdCreationNoticeCard.react"),
                {
                  cta: e.cta,
                  message: e.description,
                  onActionOverride: n != null ? u[n] : void 0,
                  onDismiss:
                    e.dismissable === !0
                      ? function () {
                          return R(t);
                        }
                      : void 0,
                  severity: e.severity,
                  title: String(e.title),
                },
                t,
              );
            }),
          });
    }
    ((g.displayName = g.name + " [from " + i.id + "]"), (l.default = g));
  },
  98,
);
