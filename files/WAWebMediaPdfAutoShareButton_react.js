__d(
  "WAWebMediaPdfAutoShareButton.react",
  [
    "WAWebL10N",
    "WAWebMediaPdfInlineSharerIframe.react",
    "WAWebSpinner.react",
    "WDSText.react",
    "react",
    "react-compiler-runtime",
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
      var t = o("react-compiler-runtime").c(13),
        n = e.mediaData,
        a = e.menuItemLabel,
        i = e.msg,
        l = e.onDismiss,
        u = e.onError,
        c = d(null),
        _ = m(!1),
        f = _[0],
        g = _[1],
        h = p.includes(r("WAWebL10N").getLanguage()),
        y;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((y = function () {
            g(!0);
          }),
          (t[0] = y))
        : (y = t[0]);
      var C = y,
        b;
      t[1] !== a
        ? ((b = { menuItemLabel: a, savedPreference: !0 }),
          (t[1] = a),
          (t[2] = b))
        : (b = t[2]);
      var v;
      (t[3] !== l || t[4] !== u || t[5] !== b
        ? ((v = {
            appConfigOverrides: b,
            onError: u,
            onReady: C,
            onShareSuccess: l,
          }),
          (t[3] = l),
          (t[4] = u),
          (t[5] = b),
          (t[6] = v))
        : (v = t[6]),
        r("useWAWebPdfSharerConnection")(i, n, c, v));
      var S =
          !f &&
          s.jsxs("div", {
            className: {
              0: "x6s0dn4 x78zum5 xs2akgl x1p57kb1 xvpt6g3 xb0esv5 xyo0t3i x1y5idc5 xuxw1ft xti2d7y x1h6gzvc",
              1: "x6s0dn4 x78zum5 xs2akgl x1p57kb1 xvpt6g3 xb0esv5 xyo0t3i xuxw1ft xti2d7y x1h6gzvc xh8yej3",
            }[!!h << 0],
            children: [
              s.jsx(o("WAWebSpinner.react").Spinner, { stroke: 2, size: 20 }),
              s.jsx("div", {
                className: "x6ikm8r x10wlt62 xlyipyv",
                children: s.jsx(r("WDSText.react"), {
                  type: "Body1",
                  selectable: !1,
                  colorName: "contentDefault",
                  children: a,
                }),
              }),
            ],
          }),
        R = {
          0: "xnnlda6 x1hfn5x7",
          2: "xnnlda6 x1hfn5x7 x1s85apg",
          1: "xnnlda6 x636qxn",
          3: "xnnlda6 x1s85apg x636qxn",
        }[(!f << 1) | (!!h << 0)],
        L;
      t[7] === Symbol.for("react.memo_cache_sentinel")
        ? ((L = s.jsx(r("WAWebMediaPdfInlineSharerIframe.react"), {
            iframeRef: c,
          })),
          (t[7] = L))
        : (L = t[7]);
      var E;
      t[8] !== R
        ? ((E = s.jsx("div", { className: R, children: L })),
          (t[8] = R),
          (t[9] = E))
        : (E = t[9]);
      var k;
      return (
        t[10] !== S || t[11] !== E
          ? ((k = s.jsxs(s.Fragment, { children: [S, E] })),
            (t[10] = S),
            (t[11] = E),
            (t[12] = k))
          : (k = t[12]),
        k
      );
    }
    l.default = _;
  },
  98,
);
