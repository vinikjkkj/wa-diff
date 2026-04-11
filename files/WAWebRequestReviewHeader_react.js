__d(
  "WAWebRequestReviewHeader.react",
  [
    "WAWebWdsPictoTextFeedbackWarningIcon.react",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = {
        exclamationOutline: { fill: "xmgti43", $$css: !0 },
        exclamation: { fill: "xmgti43", $$css: !0 },
        exclamationBackground: { fill: "xmgti43", $$css: !0 },
        documentOutlines: { fill: "x1n2w8rn", $$css: !0 },
        document: { fill: "xgz6z4f", $$css: !0 },
      };
    function c(e) {
      var t = o("react-compiler-runtime").c(4),
        n = e.height,
        r = e.width,
        a;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((a = {
            document: u.document,
            exclamation: u.exclamation,
            exclamationBackground: u.exclamationBackground,
            exclamationOutline: u.exclamationOutline,
            documentOutlines: u.documentOutlines,
          }),
          (t[0] = a))
        : (a = t[0]);
      var i;
      return (
        t[1] !== n || t[2] !== r
          ? ((i = s.jsx(
              o("WAWebWdsPictoTextFeedbackWarningIcon.react")
                .WdsPictoTextFeedbackWarningIcon,
              { width: n, height: r, innerStyles: a },
            )),
            (t[1] = n),
            (t[2] = r),
            (t[3] = i))
          : (i = t[3]),
        i
      );
    }
    l.default = c;
  },
  98,
);
