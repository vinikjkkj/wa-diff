__d(
  "WAWebVoipVoiceChatUtils",
  [
    "WAWebAdvSyncDeviceListApi",
    "WAWebBackendRuntime",
    "WAWebDBParticipantTypes",
    "WAWebGroupDatabaseJob",
    "WAWebGroupQueryBridge",
    "WAWebGroupQueryService",
    "WAWebGroupStoreService",
    "WAWebLidMigrationUtils",
    "WAWebPhashUtils",
    "WAWebUserUtils",
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = 6,
      s = 7,
      u = 8,
      c = new Set([e, s, u]);
    function d(e) {
      return e != null && c.has(e);
    }
    async function m(e) {
      var t = await _(e);
      if (t != null) return t;
      await (
        o("WAWebBackendRuntime").isWebDiBackendEnabled()
          ? o("WAWebBackendRuntime").runtime(
              o("WAWebGroupQueryService").GroupQueryService,
            ).sendQueryGroup
          : o("WAWebGroupQueryBridge").sendQueryGroup
      )(e);
      var n = await _(e);
      if (n == null)
        throw r("err")(
          "voip: loadVoiceChatMemberWids: group members are incomplete",
        );
      return n;
    }
    async function p(e) {
      if (e.length === 0) return null;
      await Promise.all(
        e
          .filter(function (e) {
            return o("WAWebLidMigrationUtils").toUserLid(e) == null;
          })
          .map(function (e) {
            return o("WAWebAdvSyncDeviceListApi").syncDeviceList({
              wids: [e],
              context: "voip",
              phash: null,
            });
          }),
      );
      var t = o("WAWebUserUtils").getMeLidUserOrThrow(),
        n = new Map([[t.toString(), t]]);
      for (var r of e) {
        var a = o("WAWebLidMigrationUtils").toUserLid(r);
        if (a == null) return null;
        n.set(a.toString(), a);
      }
      return o("WAWebPhashUtils").phashV1(Array.from(n.values()));
    }
    async function _(e) {
      var t = await Promise.all([
          (o("WAWebBackendRuntime").isWebDiBackendEnabled()
            ? o("WAWebBackendRuntime").runtime(
                o("WAWebGroupStoreService").GroupStoreService,
              ).getGroupMetadataJob
            : o("WAWebGroupDatabaseJob").getGroupMetadataJob)(e),
          (o("WAWebBackendRuntime").isWebDiBackendEnabled()
            ? o("WAWebBackendRuntime").runtime(
                o("WAWebGroupStoreService").GroupStoreService,
              ).getGroupParticipantJob
            : o("WAWebGroupDatabaseJob").getGroupParticipantJob)(e),
        ]),
        n = t[0],
        r = t[1];
      return (n == null ? void 0 : n.hasIncompleteParticipantInformation) ===
        !0 ||
        r == null ||
        r.staleType === o("WAWebDBParticipantTypes").STALE_TYPES.PARTICIPANT ||
        r.participants.length === 0
        ? null
        : r.participants.map(function (e) {
            var t = e.id;
            return t;
          });
    }
    ((l.isVoiceChatOfferSilenceReason = d),
      (l.loadVoiceChatMemberWids = m),
      (l.getVoiceChatGroupPhash = p));
  },
  98,
);
