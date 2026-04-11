__d(
  "WAWebBizAdCreationNoticeCard.react",
  [
    "WAWebBizAdCreationLinkUtils",
    "WAWebExternalLink.react",
    "WDSBanner.react",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = e,
      c = u.useCallback,
      d = u.useMemo,
      m = {
        ERROR: "error",
        WARNING: "warning",
        TIP: "tip",
        ACTIVE_FEEDBACK: "tip",
      };
    function p(e) {
      var t,
        n = o("react-compiler-runtime").c(15),
        a = e.cta,
        i = e.message,
        l = e.onActionOverride,
        u = e.onDismiss,
        c = e.severity,
        d = e.title,
        p = m[c] || "tip",
        _;
      e: {
        if (i != null && a == null) {
          var f;
          (n[0] !== i
            ? ((f = o("WAWebBizAdCreationLinkUtils").extractTrailingLink(i)),
              (n[0] = i),
              (n[1] = f))
            : (f = n[1]),
            (_ = f));
          break e;
        }
        _ = null;
      }
      var g = _,
        h = g != null ? g.textBeforeLink : i,
        y;
      n[2] !== a || n[3] !== l
        ? ((y = function () {
            l != null
              ? l()
              : (a == null ? void 0 : a.url) != null &&
                o("WAWebExternalLink.react").openExternalLink(a.url);
          }),
          (n[2] = a),
          (n[3] = l),
          (n[4] = y))
        : (y = n[4]);
      var C = y,
        b;
      n[5] !== g
        ? ((b = function () {
            (g == null ? void 0 : g.linkUrl) != null &&
              o("WAWebExternalLink.react").openExternalLink(g.linkUrl);
          }),
          (n[5] = g),
          (n[6] = b))
        : (b = n[6]);
      var v = b,
        S =
          (t = a == null ? void 0 : a.label) != null
            ? t
            : g == null
              ? void 0
              : g.linkText,
        R;
      e: {
        if (a != null) {
          R = C;
          break e;
        }
        if (g != null) {
          R = v;
          break e;
        }
        R = void 0;
      }
      var L = R,
        E;
      n[7] === Symbol.for("react.memo_cache_sentinel")
        ? ((E = { className: "x1380le5 xefnzgg" }), (n[7] = E))
        : (E = n[7]);
      var k = h != null ? h : "",
        I;
      return (
        n[8] !== S ||
        n[9] !== p ||
        n[10] !== L ||
        n[11] !== u ||
        n[12] !== k ||
        n[13] !== d
          ? ((I = s.jsx(
              "div",
              babelHelpers.extends({}, E, {
                children: s.jsx(r("WDSBanner.react"), {
                  type: p,
                  title: d,
                  body: k,
                  actionText: S,
                  onAction: L,
                  onDismiss: u,
                }),
              }),
            )),
            (n[8] = S),
            (n[9] = p),
            (n[10] = L),
            (n[11] = u),
            (n[12] = k),
            (n[13] = d),
            (n[14] = I))
          : (I = n[14]),
        I
      );
    }
    l.default = p;
  },
  98,
);
