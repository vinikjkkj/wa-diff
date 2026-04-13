__d(
  "WAWebBizAGMWebsiteCta.react",
  [
    "WAWebExternalLink.react",
    "WAWebLaunchIcon.react",
    "WAWebMessageBubbleActions.react",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = e.useCallback;
    function c(e) {
      var t = o("react-compiler-runtime").c(6),
        n = e.ctaText,
        r = e.link,
        a = e.onClick,
        i;
      t[0] !== r || t[1] !== a
        ? ((i = function () {
            (a(), o("WAWebExternalLink.react").openExternalLink(r));
          }),
          (t[0] = r),
          (t[1] = a),
          (t[2] = i))
        : (i = t[2]);
      var l = i;
      if (!r.length) return null;
      var u;
      return (
        t[3] !== n || t[4] !== l
          ? ((u = s.jsx(o("WAWebMessageBubbleActions.react").BubbleActions, {
              items: [
                {
                  label: n,
                  onClick: l,
                  Icon: o("WAWebLaunchIcon.react").LaunchIcon,
                },
              ],
            })),
            (t[3] = n),
            (t[4] = l),
            (t[5] = u))
          : (u = t[5]),
        u
      );
    }
    l.default = c;
  },
  98,
);
