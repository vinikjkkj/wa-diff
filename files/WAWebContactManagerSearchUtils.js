__d(
  "WAWebContactManagerSearchUtils",
  ["WAWebLabelConstants", "WAWebLeadListConstants"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = "__no_label__",
      s = "__no_other_list__",
      u = new Set([
        o("WAWebLeadListConstants").LEAD_LIST_PREDEFINED_ID,
        o("WAWebLabelConstants").PREDEFINED_LABEL_IDS.LEAD,
      ]);
    function c(e) {
      return (
        e.query.trim() !== "" ||
        e.leadStages.length > 0 ||
        e.labelId != null ||
        e.acquisitionSource != null ||
        e.lastMessageRange != null ||
        e.lastMessageCustomRange != null
      );
    }
    ((l.NO_LABEL_FILTER_ID = e),
      (l.NO_OTHER_LIST_FILTER_ID = s),
      (l.BOARD_STRUCTURAL_PREDEFINED_IDS = u),
      (l.hasActiveFilter = c));
  },
  98,
);
