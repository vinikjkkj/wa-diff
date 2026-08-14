__d(
  "LSDefaultSyncGroups",
  [
    "CurrentEnvironment",
    "I64",
    "LSE2EEMetadataSyncGroupUtils",
    "LSIntEnum",
    "LSMailboxInitialSyncCursor",
    "LSPlatformLsInitLog",
    "LSSyncGroupsUtils",
    "LSVoprfWasmPrewarmDeferred",
    "MAWBackendReceiverFetchPrefetchExperiment",
    "MNetRankType",
    "Promise",
    "ReQL",
    "asyncToGeneratorRuntime",
    "gkx",
    "promiseDone",
    "seedUserInfo",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = ["groupId"],
      s,
      u,
      c,
      d = new Set();
    o("LSE2EEMetadataSyncGroupUtils").shouldAlwaysResetE2EEMetadata() &&
      d.add(95);
    var m = o("LSE2EEMetadataSyncGroupUtils").getE2EEMetadataSyncGroup(),
      p = [
        {
          groupId: 1,
          lastSyncRequestTimestampMs: o("LSMailboxInitialSyncCursor")
            .lastSyncTimestampMs,
          syncChannel: o("LSMailboxInitialSyncCursor").syncChannel,
          syncParams: o("LSMailboxInitialSyncCursor").syncParams,
        },
        {
          groupId: 2,
          lastSyncRequestTimestampMs: o("LSMailboxInitialSyncCursor")
            .lastSyncTimestampMs,
          syncChannel: o("LSMailboxInitialSyncCursor").syncChannel,
        },
        {
          groupId: 16,
          syncChannel: o("LSSyncGroupsUtils").defaultSyncGroup.syncChannel,
        },
        {
          groupId: 118,
          minTimeToSyncTimestampMs: o("LSSyncGroupsUtils").neverSyncTimestamp,
          syncChannel: o("LSSyncGroupsUtils").defaultSyncGroup.syncChannel,
        },
        { groupId: 198 },
        o(
          "MAWBackendReceiverFetchPrefetchExperiment",
        ).isMawBackendReceiverFetchPrefetchEnabled()
          ? null
          : { groupId: 89 },
        o(
          "MAWBackendReceiverFetchPrefetchExperiment",
        ).isMawBackendReceiverFetchPrefetchEnabled()
          ? null
          : { groupId: 197 },
      ],
      _ = [].concat(p, [
        {
          groupId: 7,
          syncParams: JSON.stringify({
            mnet_rank_types: [
              r("MNetRankType").INSTAGRAM_DIRECT_SEARCH_NULLSTATE,
            ],
          }),
        },
      ]),
      f = []
        .concat(p, [
          {
            groupId: 7,
            minTimeToSyncTimestampMs: o("LSSyncGroupsUtils").neverSyncTimestamp,
            syncParams: JSON.stringify({
              mnet_rank_types: [
                r("MNetRankType").MESSENGER_USER_SEARCH,
                r("gkx")("17703")
                  ? r("MNetRankType").MESSENGER_SEARCH_NULL_STATE_UNBLENDED
                  : r("MNetRankType").MESSENGER_USER_SEARCH_NULLSTATE,
                r("MNetRankType").INBOX_ACTIVE_NOW,
                r("MNetRankType").MESSENGER_OMNIPICKER_NULLSTATE,
                r("MNetRankType").MESSENGER_BROADCAST_FLOW_TOP_THREADS,
                r("MNetRankType").BROADCAST_FLOW_TOP_CONTACTS,
              ],
            }),
          },
          {
            groupId: 15,
            minTimeToSyncTimestampMs: o("LSSyncGroupsUtils").neverSyncTimestamp,
            syncChannel: o("LSSyncGroupsUtils").defaultSyncGroup.syncChannel,
          },
          {
            groupId: 12,
            minTimeToSyncTimestampMs: o("LSSyncGroupsUtils").neverSyncTimestamp,
            syncChannel: o("LSSyncGroupsUtils").defaultSyncGroup.syncChannel,
          },
          { groupId: 26 },
          { groupId: 196 },
          m,
          r("gkx")("26390")
            ? {
                groupId: 6,
                minTimeToSyncTimestampMs:
                  o("LSSyncGroupsUtils").neverSyncTimestamp,
              }
            : null,
          {
            groupId: 145,
            syncChannel: o("LSSyncGroupsUtils").defaultSyncGroup.syncChannel,
          },
          { groupId: 202 },
        ])
        .concat(
          r("gkx")("22843")
            ? [
                {
                  groupId: 104,
                  syncChannel:
                    o("LSSyncGroupsUtils").defaultSyncGroup.syncChannel,
                },
                { groupId: 143 },
                { groupId: 140 },
                { groupId: 141 },
              ]
            : [],
        );
    function g(e, t) {
      return h.apply(this, arguments);
    }
    function h() {
      return (
        (h = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var r = yield o("ReQL").toArrayAsync(
              o("ReQL").fromTableAscending(e.network_requests).getKeyRange(""),
            ),
            a = r.map(function (e) {
              var t = e.syncDatabaseId;
              return (c || (c = o("LSIntEnum"))).toNumber(t);
            });
          return (s || (s = n("Promise"))).all(
            t.map(
              (function () {
                var t = n("asyncToGeneratorRuntime").asyncToGenerator(
                  function* (t) {
                    t != null &&
                      (!a.includes(t.groupId) || d.has(t.groupId)) &&
                      (yield e.network_requests.put(
                        babelHelpers.extends(
                          {},
                          o("LSSyncGroupsUtils").defaultNetworkRequest,
                          {
                            syncDatabaseId: (
                              c || (c = o("LSIntEnum"))
                            ).ofNumber(t.groupId),
                          },
                        ),
                      ));
                  },
                );
                return function (e) {
                  return t.apply(this, arguments);
                };
              })(),
            ),
          );
        })),
        h.apply(this, arguments)
      );
    }
    function y(e) {
      return C.apply(this, arguments);
    }
    function C() {
      return (
        (C = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = yield o("ReQL").toArrayAsync(
            o("ReQL").fromTableAscending(e.sync_groups),
          );
          return new Map(
            t.map(function (e) {
              return [(c || (c = o("LSIntEnum"))).toNumber(e.groupId), e];
            }),
          );
        })),
        C.apply(this, arguments)
      );
    }
    function b(e, t) {
      return v.apply(this, arguments);
    }
    function v() {
      return (
        (v = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, r) {
          var a = yield y(t);
          function i(e) {
            return l.apply(this, arguments);
          }
          function l() {
            return (
              (l = n("asyncToGeneratorRuntime").asyncToGenerator(function* (n) {
                var r = n.groupId,
                  i = babelHelpers.objectWithoutPropertiesLoose(n, e),
                  l = a.get(r);
                l == null || d.has(r)
                  ? yield t.sync_groups.put(
                      babelHelpers.extends(
                        {},
                        o("LSSyncGroupsUtils").defaultSyncGroup,
                        i,
                        { groupId: (c || (c = o("LSIntEnum"))).ofNumber(r) },
                      ),
                    )
                  : l != null &&
                    (l.syncParams !== i.syncParams ||
                      (i.syncChannel != null &&
                        !(u || (u = o("I64"))).equal(
                          l.syncChannel,
                          i.syncChannel,
                        ))) &&
                    (yield t.sync_groups.put(
                      babelHelpers.extends({}, l, {
                        syncChannel:
                          i.syncChannel != null ? i.syncChannel : l.syncChannel,
                        syncParams: i.syncParams,
                      }),
                    ));
              })),
              l.apply(this, arguments)
            );
          }
          yield (s || (s = n("Promise"))).all(
            r.map(function (e) {
              return e && i(e);
            }),
          );
        })),
        v.apply(this, arguments)
      );
    }
    function S(e) {
      return e != null ? e : r("CurrentEnvironment").instagramdotcom ? _ : f;
    }
    function R(e, t) {
      return L.apply(this, arguments);
    }
    function L() {
      return (
        (L = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = S(t);
          (o("LSPlatformLsInitLog").addPoint("db_seed_start"),
            yield r("seedUserInfo")(e),
            yield g(e, n),
            yield b(e, n),
            r("promiseDone")(
              o("LSVoprfWasmPrewarmDeferred").prewarmAcsVoprfWasmModule(),
            ),
            o("LSPlatformLsInitLog").addPoint("db_seed_end"));
        })),
        L.apply(this, arguments)
      );
    }
    ((l.e2eeMetadataSyncGroup = m),
      (l.igdSyncGroups = _),
      (l.defaultSyncGroups = f),
      (l.seedDb = R));
  },
  98,
);
