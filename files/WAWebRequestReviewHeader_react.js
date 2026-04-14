__d(
  "WAWebRequestReviewHeader.react",
  ["WAWebWdsPictoTextFeedbackWarningIcon.react", "react"],
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
      var t = e.height,
        n = e.width;
      return s.jsx(
        o("WAWebWdsPictoTextFeedbackWarningIcon.react")
          .WdsPictoTextFeedbackWarningIcon,
        {
          width: t,
          height: n,
          innerStyles: {
            document: u.document,
            exclamation: u.exclamation,
            exclamationBackground: u.exclamationBackground,
            exclamationOutline: u.exclamationOutline,
            documentOutlines: u.documentOutlines,
          },
        },
      );
    }
    ((c.displayName = c.name + " [from " + i.id + "]"), (l.default = c));
  },
  98,
);
