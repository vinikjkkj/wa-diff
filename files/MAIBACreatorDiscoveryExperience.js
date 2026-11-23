__d(
  "MAIBACreatorDiscoveryExperience",
  [
    "BusinessCometCreatorPortfolioInsightsTimePeriodUtils",
    "MAIBACreatorDiscoveryExperience.entrypoint",
    "MAIBACreatorDiscoveryParseInput",
    "MAIBAWorkspaceExperienceRegistry",
    "MetaBrandTwoPeopleFilled24.svg.react",
    "RelayHooks",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = {
        loadExperienceEntryPoint: function (t, n) {
          var e,
            a = o("MAIBACreatorDiscoveryParseInput").getCreatorDiscoveryInput(
              n,
            );
          if (a == null) return null;
          var i = a.creators.map(function (e) {
              return e.fbid;
            }),
            l = (e = a.brand_ig_user_id) != null ? e : null,
            s = o("RelayHooks").loadEntryPoint(
              t,
              r("MAIBACreatorDiscoveryExperience.entrypoint"),
              {
                brandIgUserID: l,
                creatorIDs: i,
                insightsTimePeriod: o(
                  "BusinessCometCreatorPortfolioInsightsTimePeriodUtils",
                ).getLast30DaysInsightsTimePeriod(),
                workspaceVersion: n.version,
              },
            );
          return o("MAIBAWorkspaceExperienceRegistry").buildLoadedEntryPoint(
            s,
            function (e) {
              var t = e.entity;
              return { entity: t };
            },
          );
        },
        getPillDescriptor: function (t) {
          var e;
          return {
            iconElement: s.jsx(r("MetaBrandTwoPeopleFilled24.svg.react"), {
              height: 20,
              width: 20,
            }),
            subtitle: {
              kind: "plain",
              text: (e = t.subtitle) != null ? e : "",
            },
          };
        },
      },
      c = u;
    l.default = c;
  },
  98,
);
