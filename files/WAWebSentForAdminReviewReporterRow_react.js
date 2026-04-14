__d(
  "WAWebSentForAdminReviewReporterRow.react",
  [
    "WAWebBoolFunc",
    "WAWebCellBorder.react",
    "WAWebChatCell.react",
    "WAWebDetailImage.react",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react"));
    function u(e) {
      var t = e.reporter;
      return s.jsxs(s.Fragment, {
        children: [
          s.jsx(r("WAWebChatCell.react"), {
            contextEnabled: o("WAWebBoolFunc").returnFalse,
            image: s.jsx(o("WAWebDetailImage.react").DetailImage, {
              id: t.id,
              size: o("WAWebDetailImage.react").DetailImageSize.Small,
            }),
            primary: t.contactName,
            idle: !0,
          }),
          s.jsx(r("WAWebCellBorder.react"), {}),
        ],
      });
    }
    ((u.displayName = u.name + " [from " + i.id + "]"), (l.default = u));
  },
  98,
);
