__d(
  "WAWebGroupHistoryParticipantStateHydration",
  [
    "Promise",
    "WALogger",
    "WAWebGroupHistoryGating",
    "WAWebGroupHistoryParticipantJob",
    "WAWebGroupHistoryPostJoinTypes.flow",
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
      if (
        !o(
          "WAWebGroupHistoryGating",
        ).isGroupHistoryPostJoinSenderOrInternalTesterEnabled()
      )
        return (s || (s = n("Promise"))).resolve();
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
          d(t, l);
        }),
        d(t, l)
      );
    }
    function d(e, t) {
      return m.apply(this, arguments);
    }
    function m() {
      return (
        (m = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, n) {
          try {
            var a = yield o(
              "WAWebGroupHistoryParticipantJob",
            ).getGroupHistoryParticipantMetadataForGroup(t);
            if (a == null || a.size === 0) return;
            for (var i of n.getModelsArray()) {
              var l = o("WAWebLidMigrationUtils").toUserLid(i.id);
              if (l != null) {
                var s = a.get(o("WAWebWidToJid").userLidtoLidUserJid(l));
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
        })),
        m.apply(this, arguments)
      );
    }
    function p(e, t) {
      _(t.groupHistorySentState) &&
        !_(e.groupHistorySentState) &&
        e.set({ groupHistorySentState: t.groupHistorySentState });
    }
    function _(e) {
      return (
        e ===
          o("WAWebGroupHistoryPostJoinTypes.flow").GroupHistorySentState
            .HISTORY_SENT ||
        e ===
          o("WAWebGroupHistoryPostJoinTypes.flow").GroupHistorySentState
            .NOTICE_SENT
      );
    }
    l.initializeGroupHistoryStateForChat = c;
  },
  98,
);
