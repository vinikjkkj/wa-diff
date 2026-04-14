__d(
  "WAWebMediaPdfAutoShareButton.react",
  [
    "WAWebL10N",
    "WAWebMediaPdfInlineSharerIframe.react",
    "WAWebSpinner.react",
    "WDSText.react",
    "react",
    "useWAWebPdfSharerConnection",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = e,
      c = u.useCallback,
      d = u.useRef,
      m = u.useState,
      p = ["en", "id", "ja", "ca", "fa", "ar", "he", "th", "lo"];
    function _(e) {
      var t = e.mediaData,
        n = e.menuItemLabel,
        a = e.msg,
        i = e.onDismiss,
        l = e.onError,
        u = d(null),
        _ = m(!1),
        f = _[0],
        g = _[1],
        h = p.includes(r("WAWebL10N").getLanguage()),
        y = c(function () {
          g(!0);
        }, []);
      return (
        r("useWAWebPdfSharerConnection")(a, t, u, {
          appConfigOverrides: { menuItemLabel: n, savedPreference: !0 },
          onError: l,
          onReady: y,
          onShareSuccess: i,
        }),
        s.jsxs(s.Fragment, {
          children: [
            !f &&
              s.jsxs("div", {
                className: {
                  0: "x6s0dn4 x78zum5 xs2akgl x1p57kb1 xvpt6g3 xb0esv5 xyo0t3i x1y5idc5 xuxw1ft xti2d7y x1h6gzvc",
                  1: "x6s0dn4 x78zum5 xs2akgl x1p57kb1 xvpt6g3 xb0esv5 xyo0t3i xuxw1ft xti2d7y x1h6gzvc xh8yej3",
                }[!!h << 0],
                children: [
                  s.jsx(o("WAWebSpinner.react").Spinner, {
                    stroke: 2,
                    size: 20,
                  }),
                  s.jsx("div", {
                    className: "x6ikm8r x10wlt62 xlyipyv",
                    children: s.jsx(r("WDSText.react"), {
                      type: "Body1",
                      selectable: !1,
                      colorName: "contentDefault",
                      children: n,
                    }),
                  }),
                ],
              }),
            s.jsx("div", {
              className: {
                0: "xnnlda6 x1hfn5x7",
                2: "xnnlda6 x1hfn5x7 x1s85apg",
                1: "xnnlda6 x636qxn",
                3: "xnnlda6 x1s85apg x636qxn",
              }[(!f << 1) | (!!h << 0)],
              children: s.jsx(r("WAWebMediaPdfInlineSharerIframe.react"), {
                iframeRef: u,
              }),
            }),
          ],
        })
      );
    }
    ((_.displayName = _.name + " [from " + i.id + "]"), (l.default = _));
  },
  98,
);
