__d(
  "MAIBACreativeSuggestionsExperience",
  [
    "MAIBACreativeSuggestionsExperience.entrypoint",
    "MAIBACreativeSuggestionsPillDescriptor.react",
    "MAIBAWorkspaceExperienceRegistry",
    "MAIBAWorkspaceTypes",
    "RelayHooks",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        getPillDescriptor: o("MAIBACreativeSuggestionsPillDescriptor.react")
          .getCreativeSuggestionsPillDescriptor,
        loadExperienceEntryPoint: function (t, n) {
          var e = o("MAIBAWorkspaceTypes").parseAttributesJSON(
              n.attributes_json,
            ),
            a = e.unit_id,
            i = e.idea_id;
          if (a == null || a === "" || i == null || i === "") return null;
          var l = e.account_id,
            s = e.adgroup_id,
            u = s != null && s !== "" ? s : null,
            c = o("RelayHooks").loadEntryPoint(
              t,
              r("MAIBACreativeSuggestionsExperience.entrypoint"),
              {
                accountID: l != null && l !== "" ? l : null,
                adgroupID: u,
                ideaID: i,
                unitID: a,
                workspaceVersion: n.version,
              },
            );
          return o("MAIBAWorkspaceExperienceRegistry").buildLoadedEntryPoint(
            c,
            function (e) {
              var t = e.entity;
              return {
                accountID: l != null && l !== "" ? l : null,
                adgroupID: u,
                entity: t,
                ideaID: i,
              };
            },
          );
        },
      },
      s = e;
    l.default = s;
  },
  98,
);
