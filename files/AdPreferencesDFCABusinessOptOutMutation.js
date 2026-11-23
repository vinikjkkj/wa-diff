__d(
  "AdPreferencesDFCABusinessOptOutMutation",
  ["AdPreferencesDFCABusinessOptOutMutation.graphql"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s =
        e !== void 0
          ? e
          : (e = n("AdPreferencesDFCABusinessOptOutMutation.graphql"));
    function u(e, t, n) {
      var r = function (r) {
        var e,
          o =
            (e = r.getRootField("update_dfca_optout")) == null ||
            (e = e.getLinkedRecord("business_info")) == null
              ? void 0
              : e.getValue("id");
        if (o != null) {
          var a = r.get(String(o));
          if (a != null) {
            var i =
              n === "INCLUSION"
                ? "dfca_inclusion_opted_out"
                : "dfca_exclusion_opted_out";
            a.setValue(t !== "ALLOW", i);
          }
        }
      };
      return [
        s,
        {
          updater: r,
          variables: { input: { business_id: e, operation: t, type: n } },
        },
      ];
    }
    l.makeMutation = u;
  },
  98,
);
