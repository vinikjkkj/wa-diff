__d(
  "WAWebHatchApprovalAttention",
  ["WAWebHatchJsonReaders"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = "warning";
    function s(t) {
      return (
        t.iconKey === e ||
        !o("WAWebHatchJsonReaders").isBlankText(t.attentionLabel)
      );
    }
    ((l.HATCH_WARNING_ICON_KEY = e), (l.isHatchApprovalWarning = s));
  },
  98,
);
