__d(
  "WAWebCustomerManagerSearchUtils",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = "__no_label__";
    function l(e) {
      return (
        e.query.trim() !== "" ||
        e.leadStages.length > 0 ||
        e.labelId != null ||
        e.acquisitionSource != null ||
        e.lastMessageRange != null
      );
    }
    ((i.NO_LABEL_FILTER_ID = e), (i.hasActiveFilter = l));
  },
  66,
);
