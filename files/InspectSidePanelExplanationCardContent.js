__d(
  "InspectSidePanelExplanationCardContent",
  ["InspectSidePanelExplanationCardContentQuery.graphql", "RelayHooks"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s =
        e !== void 0
          ? e
          : (e = n("InspectSidePanelExplanationCardContentQuery.graphql"));
    function u(e) {
      var t,
        n,
        r = o("RelayHooks").useClientQuery(s, { adgroupRelayIDs: e });
      return (t =
        (n = r.ad_account) == null || (n = n.combined_adgroups) == null
          ? void 0
          : n.map(function (e) {
              return {
                ad_object_id: e == null ? void 0 : e.ad_object_id,
                ad_object_name: e == null ? void 0 : e.name,
                edit_timestamp: 0,
              };
            })) != null
        ? t
        : [];
    }
    l.useExplanationCardAdInfoQuery = u;
  },
  98,
);
