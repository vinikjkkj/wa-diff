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
    "MNetRankType",
    "ReQL",
    "gkx",
    "promiseDone",
    "seedUserInfo",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = ["groupId"],
      s,
      u,
      c = new Set();
    o("LSE2EEMetadataSyncGroupUtils").shouldAlwaysResetE2EEMetadata() &&
      c.add(95);
    var d = o("LSE2EEMetadataSyncGroupUtils").getE2EEMetadataSyncGroup(),
      m = [
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
      ],
      p = [].concat(m, [
        {
          groupId: 7,
          syncParams: JSON.stringify({
            mnet_rank_types: [
              r("MNetRankType").INSTAGRAM_DIRECT_SEARCH_NULLSTATE,
            ],
          }),
        },
      ]),
      _ = []
        .concat(m, [
          {
            groupId: 7,
            minTimeToSyncTimestampMs: o("LSSyncGroupsUtils").neverSyncTimestamp,
            syncParams: JSON.stringify({
              mnet_rank_types: [
                r("MNetRankType").MESSENGER_USER_SEARCH,
                r("MNetRankType").MESSENGER_SEARCH_NULL_STATE_UNBLENDED,
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
          d,
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
    async function f(e, t) {
      var n = await o("ReQL").toArrayAsync(
          o("ReQL").fromTableAscending(e.network_requests).getKeyRange(""),
        ),
        r = n.map(function (e) {
          var t = e.syncDatabaseId;
          return (s || (s = o("LSIntEnum"))).toNumber(t);
        });
      return Promise.all(
        t.map(async function (t) {
          t != null &&
            (!r.includes(t.groupId) || c.has(t.groupId)) &&
            (await e.network_requests.put(
              babelHelpers.extends(
                {},
                o("LSSyncGroupsUtils").defaultNetworkRequest,
                {
                  syncDatabaseId: (s || (s = o("LSIntEnum"))).ofNumber(
                    t.groupId,
                  ),
                },
              ),
            ));
        }),
      );
    }
    async function g(e) {
      var t = await o("ReQL").toArrayAsync(
        o("ReQL").fromTableAscending(e.sync_groups),
      );
      return new Map(
        t.map(function (e) {
          return [(s || (s = o("LSIntEnum"))).toNumber(e.groupId), e];
        }),
      );
    }
    async function h(t, n) {
      var r = await g(t);
      async function a(n) {
        var a = n.groupId,
          i = babelHelpers.objectWithoutPropertiesLoose(n, e),
          l = r.get(a);
        l == null || c.has(a)
          ? await t.sync_groups.put(
              babelHelpers.extends(
                {},
                o("LSSyncGroupsUtils").defaultSyncGroup,
                i,
                { groupId: (s || (s = o("LSIntEnum"))).ofNumber(a) },
              ),
            )
          : l != null &&
            (l.syncParams !== i.syncParams ||
              (i.syncChannel != null &&
                !(u || (u = o("I64"))).equal(l.syncChannel, i.syncChannel))) &&
            (await t.sync_groups.put(
              babelHelpers.extends({}, l, {
                syncChannel:
                  i.syncChannel != null ? i.syncChannel : l.syncChannel,
                syncParams: i.syncParams,
              }),
            ));
      }
      await Promise.all(
        n.map(function (e) {
          return e && a(e);
        }),
      );
    }
    function y(e) {
      return e != null ? e : r("CurrentEnvironment").instagramdotcom ? p : _;
    }
    async function C(e, t) {
      var n = y(t);
      (o("LSPlatformLsInitLog").addPoint("db_seed_start"),
        await r("seedUserInfo")(e),
        await f(e, n),
        await h(e, n),
        r("promiseDone")(
          o("LSVoprfWasmPrewarmDeferred").prewarmAcsVoprfWasmModule(),
        ),
        o("LSPlatformLsInitLog").addPoint("db_seed_end"));
    }
    ((l.e2eeMetadataSyncGroup = d),
      (l.igdSyncGroups = p),
      (l.defaultSyncGroups = _),
      (l.seedDb = C));
  },
  98,
);
