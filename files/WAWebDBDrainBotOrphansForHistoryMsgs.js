__d(
  "WAWebDBDrainBotOrphansForHistoryMsgs",
  [
    "WAWebBotGating",
    "WAWebBotGroupGatingUtils",
    "WAWebDBReplayParkedOrphans",
    "WAWebMessageAddOnType",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      return s.apply(this, arguments);
    }
    function s() {
      return (
        (s = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          yield o("WAWebDBReplayParkedOrphans").replayParkedOrphans({
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
            shouldReplay: u,
            getReplayableParent: c,
            sendLogsReason: "bot-orphan-history-drain-failed",
          });
        })),
        s.apply(this, arguments)
      );
    }
    function u(e) {
      return o("WAWebBotGating").isBotOrphanMsgEnabled()
        ? !0
        : Array.from(e).some(function (e) {
            return e.id.remote.isGroup();
          }) &&
            o("WAWebBotGroupGatingUtils").isStandardBotProfileGroupEnabled();
    }
    function c(e, t) {
      return (t == null ? void 0 : t.messageSecret) != null ? e : null;
    }
    l.drainBotOrphansForHistoryMsgs = e;
  },
  98,
);
