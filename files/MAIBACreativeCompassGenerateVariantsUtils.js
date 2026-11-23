__d(
  "MAIBACreativeCompassGenerateVariantsUtils",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = "[System: CREATIVE_COMPASS_GENERATE_VARIANTS]";
    function l(t, n, r, o, a) {
      if (t == null || t === "" || n == null || n === "") return null;
      var i = new Set();
      if (a != null && a !== "") i.add(a);
      else
        for (var l of r) {
          var s = l.adgroupID;
          s != null && s !== "" && i.add(s);
        }
      if (i.size === 0) return null;
      var u =
        e +
        (" unit_id=" +
          t +
          " idea_id=" +
          n +
          " seed_adgroup_ids=" +
          Array.from(i).join(",")) +
        (a != null && a !== "" ? " source_adgroup_id=" + a : "");
      return o == null
        ? u
        : u +
            (" workspace_id=" + o.workspaceID) +
            (" workspace_version=" + String(o.workspaceVersion)) +
            (" account_id=" + o.accountID);
    }
    i.buildCreativeCompassGenerateVariantsMessage = l;
  },
  66,
);
