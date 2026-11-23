__d(
  "MAIBABusinessSetupExperience",
  [
    "MAIBABusinessSetupExperience.entrypoint",
    "MAIBABusinessSetupParseInput",
    "MAIBABusinessSetupReviewPresentation",
    "MAIBAWorkspaceExperienceRegistry",
    "MAIBAWorkspaceTypes",
    "RelayHooks",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        loadExperienceEntryPoint: function (t, n, a) {
          if (a == null || a === "") return null;
          var e = o("MAIBABusinessSetupParseInput").parseInput(
              o("MAIBAWorkspaceTypes").parseAttributesJSON(n.attributes_json),
            ),
            i = o("RelayHooks").loadEntryPoint(
              t,
              r("MAIBABusinessSetupExperience.entrypoint"),
              babelHelpers.extends({}, e, {
                externalConversationID: a,
                workspaceVersion: n.version,
              }),
            ),
            l = o(
              "MAIBABusinessSetupReviewPresentation",
            ).createStickyReviewWorkspaceEligibility(n);
          return o("MAIBAWorkspaceExperienceRegistry").buildLoadedEntryPoint(
            i,
            function (e) {
              var t = e.entity;
              return {
                entity: t,
                externalConversationID: a,
                surface: "canvas",
              };
            },
            null,
            function (e) {
              var t = e.entity;
              return l(t)
                ? { entity: t, externalConversationID: a, surface: "inline" }
                : null;
            },
          );
        },
      },
      s = e;
    l.default = s;
  },
  98,
);
