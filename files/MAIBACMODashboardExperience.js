__d(
  "MAIBACMODashboardExperience",
  [
    "MAIBACMODashboardExperience.entrypoint",
    "MAIBAWorkspaceExperienceRegistry",
    "MAIBAWorkspaceTypes",
    "RelayHooks",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = Object.freeze({
        loadExperienceEntryPoint: function (t, n) {
          var e,
            a = o("MAIBAWorkspaceTypes").parseAttributesJSON(n.attributes_json),
            i = a.ad_account_id;
          if (i == null || i === "") return null;
          var l = (e = a.page_id) != null ? e : "0",
            s = o("RelayHooks").loadEntryPoint(
              t,
              r("MAIBACMODashboardExperience.entrypoint"),
              { adAccountID: i, pageID: l, workspaceVersion: n.version },
            );
          return o("MAIBAWorkspaceExperienceRegistry").buildLoadedEntryPoint(
            s,
            function (e) {
              var t = e.entity;
              return { entity: t };
            },
          );
        },
      }),
      s = e;
    l.default = s;
  },
  98,
);
