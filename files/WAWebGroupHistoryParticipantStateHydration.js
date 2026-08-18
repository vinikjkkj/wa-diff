__d(
  "WAWebGroupHistoryParticipantStateHydration",
  [
    "Promise",
    "WALogger",
    "WAWebGroupHistoryGating",
    "WAWebGroupHistoryParticipantJob",
    "WAWebGroupHistoryPostJoinTypes",
    "WAWebGroupMetadataCollection",
    "WAWebLidMigrationUtils",
    "WAWebWidFactory",
    "WAWebWidToJid",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u = new Set();
    function c(e) {
      return o(
        "WAWebGroupHistoryGating",
      ).isGroupHistoryPostJoinSenderOrInternalTesterEnabled(e)
        ? m(e)
        : (s || (s = n("Promise"))).resolve();
    }
    function d(e) {
      return o(
        "WAWebGroupHistoryGating",
      ).isGroupHistoryAfterJoinPrerequisitesEnabled()
        ? m(e)
        : (s || (s = n("Promise"))).resolve();
    }
    function m(e) {
      var t;
      try {
        t = o("WAWebWidFactory").asGroupWidOrThrow(e);
      } catch (e) {
        return (s || (s = n("Promise"))).resolve();
      }
      var a = t.toString();
      if (u.has(a)) return (s || (s = n("Promise"))).resolve();
      var i = r("WAWebGroupMetadataCollection").get(t);
      if (i == null) return (s || (s = n("Promise"))).resolve();
      u.add(a);
      var l = i.participants;
      return (
        l.on("bulk_add", function () {
          p(t, l);
        }),
        p(t, l)
      );
    }
    function p(e, t) {
      return _.apply(this, arguments);
    }
    function _() {
      return (
        (_ = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, n) {
          try {
            var a = yield o(
              "WAWebGroupHistoryParticipantJob",
            ).getGroupHistoryParticipantMetadataForGroup(t);
            if (a == null || a.size === 0) return;
            for (var i of n.getModelsArray()) {
              var l = o("WAWebLidMigrationUtils").toUserLid(i.id);
              if (l != null) {
                var s = a.get(o("WAWebWidToJid").userLidtoLidUserJid(l));
                s != null && f(i, s);
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
        })),
        _.apply(this, arguments)
      );
    }
    function f(e, t) {
      (h(t.groupHistorySentState) &&
        !h(e.groupHistorySentState) &&
        e.set({ groupHistorySentState: t.groupHistorySentState }),
        e.joinTime == null &&
          t.joinTime != null &&
          t.joinTime > 0 &&
          e.set({ joinTime: t.joinTime }));
    }
    function g(e, t) {
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
            return t != null && h(t.groupHistorySentState)
              ? babelHelpers.extends({}, e, { groupHistorySentState: void 0 })
              : e;
          });
    }
    function h(e) {
      return (
        e ===
          o("WAWebGroupHistoryPostJoinTypes").GroupHistorySentState
            .HISTORY_SENT ||
        e ===
          o("WAWebGroupHistoryPostJoinTypes").GroupHistorySentState.NOTICE_SENT
      );
    }
    ((l.initializeGroupHistoryStateForChat = c),
      (l.prefetchGroupHistoryStateForChat = d),
      (l.guardGroupHistorySentStateDowngrade = g));
  },
  98,
);
