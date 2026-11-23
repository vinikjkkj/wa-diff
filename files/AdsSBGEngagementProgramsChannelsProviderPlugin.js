__d(
  "AdsSBGEngagementProgramsChannelsProviderPlugin",
  [
    "AdsSBGEngagementProgramsChannelsProviderPluginQuery.graphql",
    "MetaProEngagementUtils",
    "ProgramsChannelType",
    "RelayFBEnvironment",
    "RelayModern",
    "isTruthy",
    "loadObjectMapProvider",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s =
        e !== void 0
          ? e
          : (e = n(
              "AdsSBGEngagementProgramsChannelsProviderPluginQuery.graphql",
            )),
      u = {
        initialState: r("loadObjectMapProvider").keyed(
          async function (e) {
            var t,
              n,
              a,
              i,
              l,
              u,
              c,
              d,
              m,
              p,
              _,
              f,
              g,
              h,
              y,
              C,
              b,
              v = o("MetaProEngagementUtils").isMetaProStandardizedAMDEnabled(),
              S = !0,
              R = {
                data: {
                  source_tracking: e.source_tracking,
                  ad_account_id: e.ad_account_id,
                  advertiser_user_id: e.advertiser_id,
                  instantiated_programs_with_channels: v,
                },
                shouldUseV1API: v,
                shouldIncludeExperimentData: S,
              },
              L = await o("RelayModern").fetchQuery(
                r("RelayFBEnvironment"),
                s,
                R,
              ),
              E =
                (t =
                  L == null || (n = L.sbg_engagement_eligible_programs) == null
                    ? void 0
                    : n.programs) != null
                  ? t
                  : [],
              k =
                L == null || (a = L.sbg_engagement_eligible_programs) == null
                  ? void 0
                  : a.advertiser_status,
              I =
                L == null ||
                (i = L.sbg_engagement_eligible_programs) == null ||
                (i = i.instantiated_programs_with_channels) == null
                  ? void 0
                  : i.prioritized_program,
              T = v
                ? I == null
                  ? void 0
                  : I.program
                : E.find(function (e) {
                    return e.channels.length > 0;
                  }),
              D = v
                ? (l = I == null ? void 0 : I.channels) != null
                  ? l
                  : []
                : (u = T == null ? void 0 : T.channels) != null
                  ? u
                  : [],
              x =
                L == null ||
                (c = L.sbg_engagement_eligible_programs) == null ||
                (c = c.existing_connections) == null ||
                (c = c[0]) == null
                  ? void 0
                  : c.id,
              $ = D.filter(function (e) {
                return e.type !== r("ProgramsChannelType").LIVE_CHAT;
              }).map(function (e) {
                var t;
                return {
                  type: e.type,
                  waitTime: (t = e.queue_details) == null ? void 0 : t.minutes,
                };
              });
            return {
              channels: $,
              connectionExists: r("isTruthy")(x),
              dynamicContentKey: v
                ? T == null
                  ? void 0
                  : T.contentv1
                : T == null
                  ? void 0
                  : T.content,
              program: T == null ? void 0 : T.sbg_program_name,
              subProgram: T == null ? void 0 : T.sub_program_name,
              adAccountID: e.ad_account_id,
              advertiser_status: k,
              signal_source_key: v
                ? T == null || (d = T.contentv1) == null
                  ? void 0
                  : d.signal_source_key
                : T == null || (m = T.content) == null
                  ? void 0
                  : m.signal_source_key,
              experiment_identifier: v
                ? T == null || (p = T.contentv1) == null
                  ? void 0
                  : p.experiment_identifier
                : T == null || (_ = T.content) == null
                  ? void 0
                  : _.experiment_identifier,
              experiment_group: v
                ? T == null || (f = T.contentv1) == null
                  ? void 0
                  : f.experiment_group
                : T == null || (g = T.content) == null
                  ? void 0
                  : g.experiment_group,
              treatment_id: v
                ? T == null || (h = T.contentv1) == null
                  ? void 0
                  : h.treatment_id
                : T == null || (y = T.content) == null
                  ? void 0
                  : y.treatment_id,
              experimentation_data: v
                ? T == null || (C = T.contentv1) == null
                  ? void 0
                  : C.experimentation_data
                : T == null || (b = T.content) == null
                  ? void 0
                  : b.experimentation_data,
            };
          },
          function (e) {
            return JSON.stringify(e);
          },
        ),
      },
      c = u;
    l.default = c;
  },
  98,
);
