__d(
  "WAWebGroupAgentRetryFanout",
  [
    "WALogger",
    "WAWebBotUtils",
    "WAWebDBUpdateMessageTable",
    "WAWebSendMsgTypes",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e;
    async function s(t) {
      var n = t.groupAgentFanout,
        a = t.groupMsgProtobuf,
        i = t.isOpenBotGroup,
        l = t.isRevoke,
        s = t.msgRecord;
      if (
        !(
          l ||
          s.type !== o("WAWebSendMsgTypes").SendMessageRecordType.Message ||
          s.data.botGroupParticipants != null
        )
      ) {
        var c =
          i ||
          s.data.invokedBotWid != null ||
          n.configuredGroupAgentParticipants.length > 0;
        if (c) {
          var d = u(a, n.resolvedGroupAgentParticipants);
          try {
            await o("WAWebDBUpdateMessageTable").updateMessageTable(s.data.id, {
              botGroupParticipants: d,
            });
          } catch (t) {
            o("WALogger")
              .ERROR(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "[encryptAndSendGroupMsg] failed to persist original agent targets",
                  ])),
              )
              .catching(r("getErrorSafe")(t))
              .sendLogs("group-send-persist-original-agents-failed");
          }
          s.data.set({ botGroupParticipants: d });
        }
      }
    }
    function u(e, t) {
      var n,
        r,
        a =
          (n =
            (r = e.messageContextInfo) == null ||
            (r = r.botMetadata) == null ||
            (r = r.botGroupMetadata) == null
              ? void 0
              : r.participantsMetadata) != null
            ? n
            : [],
        i = [
          o("WAWebBotUtils").META_BOT_FBID_WID,
          o("WAWebBotUtils").META_BOT_TEE_FBID_WID,
        ].concat(t);
      return a.flatMap(function (e) {
        var t = e.botFbid,
          n = i.find(function (e) {
            return e.toString() === (t != null ? t : "") + "@bot";
          });
        return n != null ? [n] : [];
      });
    }
    function c(e, t) {
      var n, r;
      return (n =
        (r = e.data.botGroupParticipants) == null ? void 0 : r.filter(d)) !=
        null
        ? n
        : t;
    }
    function d(e) {
      return (
        !o("WAWebBotUtils").isWidOpenGroupMetaBotFbidWid(e) &&
        !o("WAWebBotUtils").isWidTeeGroupMetaBotFbidWid(e)
      );
    }
    ((l.maybePersistOriginalBotGroupParticipants = s),
      (l.getRetryGroupAgentPolicyParticipants = c));
  },
  98,
);
