__d(
  "getMAIBACampaignChipTitle",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    function e(e, t, n) {
      if (e != null && e !== "") {
        var r,
          o =
            (r = n.find(function (t) {
              return t.node_id === e;
            })) == null || (r = r.node) == null
              ? void 0
              : r.name;
        if (o != null && o !== "") return o;
      }
      return t;
    }
    i.default = e;
  },
  66,
);
