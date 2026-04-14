__d(
  "WAWebBizAdCreationNoticeCard.react",
  [
    "WAWebBizAdCreationLinkUtils",
    "WAWebExternalLink.react",
    "WDSBanner.react",
    "react",
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
        n = e.cta,
        a = e.message,
        i = e.onActionOverride,
        l = e.onDismiss,
        u = e.severity,
        p = e.title,
        _ = m[u] || "tip",
        f = d(
          function () {
            return a != null && n == null
              ? o("WAWebBizAdCreationLinkUtils").extractTrailingLink(a)
              : null;
          },
          [a, n],
        ),
        g = f != null ? f.textBeforeLink : a,
        h = c(
          function () {
            i != null
              ? i()
              : (n == null ? void 0 : n.url) != null &&
                o("WAWebExternalLink.react").openExternalLink(n.url);
          },
          [n, i],
        ),
        y = c(
          function () {
            (f == null ? void 0 : f.linkUrl) != null &&
              o("WAWebExternalLink.react").openExternalLink(f.linkUrl);
          },
          [f],
        ),
        C =
          (t = n == null ? void 0 : n.label) != null
            ? t
            : f == null
              ? void 0
              : f.linkText,
        b = (function () {
          if (n != null) return h;
          if (f != null) return y;
        })();
      return s.jsx("div", {
        className: "x1380le5 xefnzgg",
        children: s.jsx(r("WDSBanner.react"), {
          type: _,
          title: p,
          body: g != null ? g : "",
          actionText: C,
          onAction: b,
          onDismiss: l,
        }),
      });
    }
    ((p.displayName = p.name + " [from " + i.id + "]"), (l.default = p));
  },
  98,
);
