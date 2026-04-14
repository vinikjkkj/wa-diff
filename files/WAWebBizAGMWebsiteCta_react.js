__d(
  "WAWebBizAGMWebsiteCta.react",
  [
    "WAWebExternalLink.react",
    "WAWebLaunchIcon.react",
    "WAWebMessageBubbleActions.react",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = e.useCallback;
    function c(e) {
      var t = e.ctaText,
        n = e.link,
        r = e.onClick,
        a = u(
          function () {
            (r(), o("WAWebExternalLink.react").openExternalLink(n));
          },
          [n, r],
        );
      return n.length
        ? s.jsx(o("WAWebMessageBubbleActions.react").BubbleActions, {
            items: [
              {
                label: t,
                onClick: a,
                Icon: o("WAWebLaunchIcon.react").LaunchIcon,
              },
            ],
          })
        : null;
    }
    ((c.displayName = c.name + " [from " + i.id + "]"), (l.default = c));
  },
  98,
);
