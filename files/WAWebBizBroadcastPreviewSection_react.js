__d(
  "WAWebBizBroadcastPreviewSection.react",
  [
    "WAWebBizAdCard.react",
    "WAWebBizBroadcastPreviewMessageBubble.react",
    "WAWebBizBroadcastsCreationStrings",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react"));
    function u(e) {
      var t = o("react-compiler-runtime").c(10),
        n = e.attachmentData,
        a = e.buttonData,
        i = e.message,
        l = n === void 0 ? null : n,
        u = a === void 0 ? null : a,
        c = i === void 0 ? null : i,
        d = u != null && u.displayText.trim() !== "",
        m = (c != null && c.trim() !== "") || l != null || d;
      if (!m) {
        var p;
        t[0] === Symbol.for("react.memo_cache_sentinel")
          ? ((p = { className: "x19aeb6u xh8yej3" }), (t[0] = p))
          : (p = t[0]);
        var _;
        t[1] === Symbol.for("react.memo_cache_sentinel")
          ? ((_ = o(
              "WAWebBizBroadcastsCreationStrings",
            ).getPreviewSectionTitle()),
            (t[1] = _))
          : (_ = t[1]);
        var f;
        t[2] === Symbol.for("react.memo_cache_sentinel")
          ? ((f = o(
              "WAWebBizBroadcastsCreationStrings",
            ).getPreviewMessagePlaceholder()),
            (t[2] = f))
          : (f = t[2]);
        var g;
        return (
          t[3] === Symbol.for("react.memo_cache_sentinel")
            ? ((g = s.jsx(
                "div",
                babelHelpers.extends({}, p, {
                  children: s.jsx(r("WAWebBizAdCard.react"), {
                    header: _,
                    children: s.jsx(
                      r("WAWebBizBroadcastPreviewMessageBubble.react"),
                      { message: String(f) },
                    ),
                  }),
                }),
              )),
              (t[3] = g))
            : (g = t[3]),
          g
        );
      }
      var h;
      t[4] === Symbol.for("react.memo_cache_sentinel")
        ? ((h = { className: "x19aeb6u xh8yej3" }), (t[4] = h))
        : (h = t[4]);
      var y;
      t[5] === Symbol.for("react.memo_cache_sentinel")
        ? ((y = o(
            "WAWebBizBroadcastsCreationStrings",
          ).getPreviewSectionTitle()),
          (t[5] = y))
        : (y = t[5]);
      var C;
      return (
        t[6] !== l || t[7] !== u || t[8] !== c
          ? ((C = s.jsx(
              "div",
              babelHelpers.extends({}, h, {
                children: s.jsx(r("WAWebBizAdCard.react"), {
                  header: y,
                  children: s.jsx(
                    r("WAWebBizBroadcastPreviewMessageBubble.react"),
                    { attachmentData: l, buttonData: u, message: c },
                  ),
                }),
              }),
            )),
            (t[6] = l),
            (t[7] = u),
            (t[8] = c),
            (t[9] = C))
          : (C = t[9]),
        C
      );
    }
    l.default = u;
  },
  98,
);
