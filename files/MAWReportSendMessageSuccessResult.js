__d(
  "MAWReportSendMessageSuccessResult",
  [
    "BrowserLockManager",
    "I64",
    "LSDatabaseSingleton",
    "LSIntEnum",
    "LSMessagingThreadAttributionType",
    "MAWChatJid",
    "MAWCurrentUser",
    "MAWFrontendMediaUtils",
    "MAWGetAttachmentTypeForSendWrittenMsg",
    "MAWGetLSThreadTypeUtil",
    "MAWODSProxy",
    "MAWVault",
    "MAWXMAUtils",
    "MWLogSend",
    "MultipleTabsLogger",
    "URLMatcher",
    "WAOdsEnums",
    "getErrorSafe",
    "justknobx",
    "promiseDone",
    "shouldUseMAWSharedWorker",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e, s, u;
    function c(e) {
      o("MAWODSProxy").odsBumpEntityKey({
        entity: o("WAOdsEnums").Entity.MAW_DB_DEPRECATION,
        key: "maw_report_send_message_success_result.him_enabled." + e,
      });
    }
    async function d(e, t) {
      try {
        var n = await o("MAWChatJid").toThreadKey(
          e.tables,
          t,
          "MAWCommonSetupBridge::sendWrittenMsg",
        );
        return n;
      } catch (e) {
        throw (c("getThreadKeyFromChatJid"), r("getErrorSafe")(e));
      }
    }
    function m(t, n) {
      var a,
        i = t.externalId,
        l = null,
        c = !1,
        m = !1;
      switch (t.messageType) {
        case "editMsg":
          c = !0;
          break;
        case "revokeMsg":
          i = t.referencedExternalId;
          break;
        case "sendMsg":
          m = t.specialTextSize != null;
          break;
        case "reactionMsg":
          l = t.reaction != null ? 20 : 27;
          break;
        case "bumpMsg":
          break;
        case "noteReplyMsg":
          break;
        case "sendPoll":
          break;
        case "ephemeralSettingMsg":
          break;
        case "fixMe":
          return;
        default:
          t.messageType;
      }
      var p = null,
        _ = t.isVideoGif;
      t.fileType != null &&
        (p = o("MAWFrontendMediaUtils").getMediaTypeAndServerMediaTypeFromBlob(
          t.fileType,
          void 0,
          void 0,
          _,
        ).mediaType);
      var f = t.xmaMessageType != null,
        g =
          t.quote != null || o("MAWXMAUtils").isXMAStoryReply(t.xmaMessageType),
        h = r("URLMatcher").match(
          o("MAWVault").unvault((a = t.content) != null ? a : ""),
        ),
        y = h != null && h.length > 0,
        C = o(
          "MAWGetAttachmentTypeForSendWrittenMsg",
        ).getAttachmentTypeForSendWrittenMsg(
          t.messageType,
          p,
          m,
          f,
          c,
          l,
          g,
          y,
          _,
        ),
        b = o("MAWGetLSThreadTypeUtil").getLSThreadTypeFromJid(t.chatJid);
      r("promiseDone")(
        (e || (e = o("LSDatabaseSingleton"))).LSDatabaseSingleton.then(
          async function (e) {
            var a,
              l =
                (t == null ? void 0 : t.source) != null
                  ? t.source
                  : (s || (s = o("LSIntEnum"))).ofNumber(
                      r("LSMessagingThreadAttributionType").UNKNOWN,
                    ),
              c = await d(e, t.chatJid);
            o("MWLogSend").log(e, {
              actor: (u || (u = o("I64"))).of_string(
                o("MAWCurrentUser").getID(),
              ),
              attachmentFbids: [],
              attachmentType: C,
              backend: 1,
              chatJid: t.chatJid,
              hasReply: g,
              initatingSource: t == null ? void 0 : t.initiatingSource,
              messageSendDataclass: n,
              messagingThreadId: u.to_string(c),
              msgTtl:
                (a = t.ephemeralSetting) == null
                  ? void 0
                  : a.ephemeralExpirationInSec,
              offlineThreadingId: i,
              sendType: 1,
              source: l,
              threadKey: c,
              threadType: b,
              waGroupJid: void 0,
            });
          },
        ),
      );
    }
    function p(e) {
      (r("justknobx")._("154") &&
        o("shouldUseMAWSharedWorker").shouldUseMAWSharedWorker() &&
        r("BrowserLockManager") != null &&
        !o("MultipleTabsLogger").hasUniqueLock()) ||
        m(e);
    }
    ((l.reportSendMessageSuccessResultFn = m),
      (l.reportSendMessageSuccessResult = p));
  },
  98,
);
