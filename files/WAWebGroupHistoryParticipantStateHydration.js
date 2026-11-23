__d(
  "WAWebGroupHistoryParticipantStateHydration",
  [
    "WALogger",
    "WAWebBackendRuntime",
    "WAWebGroupHistoryParticipantJob",
    "WAWebGroupHistoryPostJoinEligibility",
    "WAWebGroupHistoryPostJoinTypes",
    "WAWebGroupMetadataCollection",
    "WAWebGroupStoreService",
    "WAWebWidFactory",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = new Set();
    function u(e) {
      return d(e);
    }
    function c(e) {
      return d(e);
    }
    function d(e) {
      var t;
      try {
        t = o("WAWebWidFactory").asGroupWidOrThrow(e);
      } catch (e) {
        return Promise.resolve();
      }
      var n = t.toString();
      if (s.has(n)) return Promise.resolve();
      var a = r("WAWebGroupMetadataCollection").get(t);
      if (a == null) return Promise.resolve();
      s.add(n);
      var i = a.participants;
      return (
        i.on("bulk_add", function () {
          m(t, i);
        }),
        m(t, i)
      );
    }
    async function m(t, n) {
      try {
        var a = await (
          o("WAWebBackendRuntime").isWebDiBackendEnabled()
            ? o("WAWebBackendRuntime").runtime(
                o("WAWebGroupStoreService").GroupStoreService,
              ).getGroupHistoryParticipantMetadataForGroup
            : o("WAWebGroupHistoryParticipantJob")
                .getGroupHistoryParticipantMetadataForGroup
        )(t);
        if (a == null || a.size === 0) return;
        for (var i of n.getModelsArray()) {
          var l = o(
            "WAWebGroupHistoryParticipantJob",
          ).toGroupHistoryParticipantKey(i.id);
          if (l != null) {
            var s = a.get(l);
            s != null && p(i, s);
          }
        }
      } catch (n) {
        o("WALogger")
          .ERROR(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "[group-history] hydrate send state failed for ",
                "",
              ])),
            t.toString(),
          )
          .catching(r("getErrorSafe")(n))
          .sendLogs("group-history-participant-state-hydrate-failed");
      }
    }
    function p(e, t) {
      (o("WAWebGroupHistoryPostJoinEligibility").isAlreadyReceivedState(
        t.groupHistorySentState,
      ) &&
        !o("WAWebGroupHistoryPostJoinEligibility").isAlreadyReceivedState(
          e.groupHistorySentState,
        ) &&
        e.set({ groupHistorySentState: t.groupHistorySentState }),
        e.joinTime == null &&
          t.joinTime != null &&
          t.joinTime > 0 &&
          e.set({ joinTime: t.joinTime }));
    }
    function _(e, t) {
      var n,
        a =
          (n = r("WAWebGroupMetadataCollection").get(e)) == null
            ? void 0
            : n.participants;
      return a == null
        ? t
        : t.map(function (e) {
            if (
              e.groupHistorySentState !==
              o("WAWebGroupHistoryPostJoinTypes").GroupHistorySentState
                .HISTORY_NOT_SENT
            )
              return e;
            var t = a.get(e.id);
            return t != null &&
              o("WAWebGroupHistoryPostJoinEligibility").isAlreadyReceivedState(
                t.groupHistorySentState,
              )
              ? babelHelpers.extends({}, e, { groupHistorySentState: void 0 })
              : e;
          });
    }
    ((l.initializeGroupHistoryStateForChat = u),
      (l.prefetchGroupHistoryStateForChat = c),
      (l.guardGroupHistorySentStateDowngrade = _));
  },
  98,
);
