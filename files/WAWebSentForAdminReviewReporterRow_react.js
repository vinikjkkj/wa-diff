__d(
  "WAWebSentForAdminReviewReporterRow.react",
  [
    "WAWebBoolFunc",
    "WAWebCellBorder.react",
    "WAWebChatCell.react",
    "WAWebDetailImage.react",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react"));
    function u(e) {
      var t = o("react-compiler-runtime").c(8),
        n = e.reporter,
        a;
      t[0] !== n.id
        ? ((a = s.jsx(o("WAWebDetailImage.react").DetailImage, {
            id: n.id,
            size: o("WAWebDetailImage.react").DetailImageSize.Small,
          })),
          (t[0] = n.id),
          (t[1] = a))
        : (a = t[1]);
      var i;
      t[2] !== n.contactName || t[3] !== a
        ? ((i = s.jsx(r("WAWebChatCell.react"), {
            contextEnabled: o("WAWebBoolFunc").returnFalse,
            image: a,
            primary: n.contactName,
            idle: !0,
          })),
          (t[2] = n.contactName),
          (t[3] = a),
          (t[4] = i))
        : (i = t[4]);
      var l;
      t[5] === Symbol.for("react.memo_cache_sentinel")
        ? ((l = s.jsx(r("WAWebCellBorder.react"), {})), (t[5] = l))
        : (l = t[5]);
      var u;
      return (
        t[6] !== i
          ? ((u = s.jsxs(s.Fragment, { children: [i, l] })),
            (t[6] = i),
            (t[7] = u))
          : (u = t[7]),
        u
      );
    }
    l.default = u;
  },
  98,
);
