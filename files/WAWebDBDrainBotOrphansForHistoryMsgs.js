__d(
  "WAWebDBDrainBotOrphansForHistoryMsgs",
  [
    "WAWebBotGating",
    "WAWebBotGroupGatingUtils",
    "WAWebDBReplayParkedOrphans",
    "WAWebMessageAddOnType",
  ],
  function (t, n, r, o, a, i, l) {
    async function e(e) {
      await o("WAWebDBReplayParkedOrphans").replayParkedOrphans({
        parents: e.filter(function (e) {
          return e.messageSecret != null;
        }),
        getKey: function (t) {
          return t.id;
        },
        isWaitingOrphan: function (t) {
          return (
            t.type === o("WAWebMessageAddOnType").MessageAddOnType.BotMsmsg
          );
        },
        shouldReplay: s,
        getReplayableParent: u,
        sendLogsReason: "bot-orphan-history-drain-failed",
      });
    }
    function s(e) {
      return o("WAWebBotGating").isBotOrphanMsgEnabled()
        ? !0
        : Array.from(e).some(function (e) {
            return e.id.remote.isGroup();
          }) &&
            o("WAWebBotGroupGatingUtils").isStandardBotProfileGroupEnabled();
    }
    function u(e, t) {
      return (t == null ? void 0 : t.messageSecret) != null ? e : null;
    }
    l.drainBotOrphansForHistoryMsgs = e;
  },
  98,
);
