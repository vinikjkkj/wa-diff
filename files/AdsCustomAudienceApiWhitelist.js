__d(
  "AdsCustomAudienceApiWhitelist",
  ["whitelistObjectKeys"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = [
      "id",
      "name",
      "lookalike_spec",
      "data_source",
      "data_source_classification",
      "customer_file_source",
      "sharing_status",
      "subtype",
      "is_lookalike_container",
      "lookalike_type",
      "rule",
    ];
    function s(t) {
      return t.map(function (t) {
        return r("whitelistObjectKeys")(t, e);
      });
    }
    l.applyCustomAudienceWhitelist = s;
  },
  98,
);
