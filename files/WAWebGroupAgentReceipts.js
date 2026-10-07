__d(
  "WAWebGroupAgentReceipts",
  [
    "WAWebBackendJobs.flow",
    "WAWebBotGroupGatingUtils",
    "WAWebBotTypes",
    "WAWebBotUtils",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = e.encs,
        n = e.msgBotInfo,
        r = e.msgInfo;
      if (!c(r)) return !1;
      var a = n == null ? void 0 : n.botEditType;
      return (
        t.some(function (e) {
          return d(e, a, r.author);
        }) && o("WAWebBotGroupGatingUtils").isStandardBotProfileGroupEnabled()
      );
    }
    function s(e, t, n) {
      return (
        e.isGroup() &&
        n === o("WAWebBackendJobs.flow").CiphertextType.Pkmsg &&
        t != null &&
        o("WAWebBotUtils").isWidStandardGroupAgentFbidWid(t) &&
        o("WAWebBotGroupGatingUtils").isStandardBotProfileGroupEnabled()
      );
    }
    function u(e) {
      var t = e.msgBotInfo,
        n = e.msgInfo;
      return (
        c(n) &&
        m(t == null ? void 0 : t.botEditType) &&
        o("WAWebBotGroupGatingUtils").isStandardBotProfileGroupEnabled()
      );
    }
    function c(e) {
      return e.chat.isGroup() && e.author.isBot();
    }
    function d(e, t, n) {
      return e.e2eType === o("WAWebBackendJobs.flow").CiphertextType.Msmsg
        ? t == null ||
            t === o("WAWebBotTypes").BotMsgEditType.FULL ||
            t === o("WAWebBotTypes").BotMsgEditType.LAST
        : e.e2eType === o("WAWebBackendJobs.flow").CiphertextType.Pkmsg
          ? o("WAWebBotUtils").isWidStandardGroupAgentFbidWid(n)
          : e.e2eType === o("WAWebBackendJobs.flow").CiphertextType.Msg ||
              e.e2eType === o("WAWebBackendJobs.flow").CiphertextType.Skmsg
            ? !1
            : (function () {
                throw Error(
                  "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                    e.e2eType,
                );
              })();
    }
    function m(e) {
      return (
        e == null ||
        e === o("WAWebBotTypes").BotMsgEditType.FULL ||
        e === o("WAWebBotTypes").BotMsgEditType.FIRST
      );
    }
    ((l.shouldSendGroupAgentDeliveryReceipt = e),
      (l.shouldSendGroupAgentRetryReceipt = s),
      (l.isGroupAgentMsmsgDecryptNackEnabled = u));
  },
  98,
);
