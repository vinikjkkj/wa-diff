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
    "react-compiler-runtime",
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
      var t = o("react-compiler-runtime").c(22),
        n = e.specElement,
        a = r("useWAWebBizAdCreationNotices")(n),
        i = d(r("WAWebBizAdCreationValidateSpecContext")),
        l = i == null ? void 0 : i.noticeActionOverrides,
        u = i == null ? void 0 : i.revalidate,
        c;
      e: {
        if (l == null) {
          var m;
          (t[0] === Symbol.for("react.memo_cache_sentinel")
            ? ((m = {}), (t[0] = m))
            : (m = t[0]),
            (c = m));
          break e;
        }
        var g;
        if (t[1] !== l || t[2] !== u) {
          g = {};
          var h = function () {
            var e = l[y];
            g[y] = function () {
              e(u != null ? u : r("WAWebNoop"));
            };
          };
          for (var y in l) h();
          ((t[1] = l), (t[2] = u), (t[3] = g));
        } else g = t[3];
        c = g;
      }
      var C = c,
        b;
      t[4] === Symbol.for("react.memo_cache_sentinel")
        ? ((b = new Set()), (t[4] = b))
        : (b = t[4]);
      var v = _(b),
        S = v[0],
        R = v[1],
        L = d(r("WAWebBizAdCreationLoggerContext")),
        E;
      t[5] === Symbol.for("react.memo_cache_sentinel")
        ? ((E = new Set()), (t[5] = E))
        : (E = t[5]);
      var k = p(E),
        I;
      t[6] !== S || t[7] !== L || t[8] !== a || t[9] !== n
        ? ((I = {
            onVisible: function () {
              L != null &&
                a.forEach(function (e, t) {
                  if (!S.has(t) && e.noticeName != null) {
                    var o = n + "-" + e.noticeName + "-" + String(e.title);
                    k.current.has(o) ||
                      (k.current.add(o),
                      r("WAWebBizAdLogger").logValidationNoticeImpression({
                        loggerContext: L,
                        messageType: e.severity,
                        noticeName: e.noticeName,
                        specElement: n,
                      }));
                  }
                });
            },
          }),
          (t[6] = S),
          (t[7] = L),
          (t[8] = a),
          (t[9] = n),
          (t[10] = I))
        : (I = t[10]);
      var T = r("useVisibility")(I),
        D = T[0],
        x;
      t[11] === Symbol.for("react.memo_cache_sentinel")
        ? ((x = function (t) {
            R(function (e) {
              var n = new Set(e);
              return (n.add(t), n);
            });
          }),
          (t[11] = x))
        : (x = t[11]);
      var $ = x,
        P = a.filter(function (e, t) {
          return !S.has(t);
        });
      if (P.length === 0) return null;
      var N;
      if (t[12] !== S || t[13] !== a || t[14] !== C) {
        var M;
        (t[16] !== S || t[17] !== C
          ? ((M = function (t, n) {
              if (S.has(n)) return null;
              var e = t.noticeName;
              return s.jsx(
                r("WAWebBizAdCreationNoticeCard.react"),
                {
                  cta: t.cta,
                  message: t.description,
                  onActionOverride: e != null ? C[e] : void 0,
                  onDismiss:
                    t.dismissable === !0
                      ? function () {
                          return $(n);
                        }
                      : void 0,
                  severity: t.severity,
                  title: String(t.title),
                },
                n,
              );
            }),
            (t[16] = S),
            (t[17] = C),
            (t[18] = M))
          : (M = t[18]),
          (N = a.map(M)),
          (t[12] = S),
          (t[13] = a),
          (t[14] = C),
          (t[15] = N));
      } else N = t[15];
      var w;
      return (
        t[19] !== N || t[20] !== D
          ? ((w = s.jsx(o("WAWebFlex.react").FlexColumn, {
              ref: D,
              align: "stretch",
              xstyle: f.container,
              children: N,
            })),
            (t[19] = N),
            (t[20] = D),
            (t[21] = w))
          : (w = t[21]),
        w
      );
    }
    l.default = g;
  },
  98,
);
