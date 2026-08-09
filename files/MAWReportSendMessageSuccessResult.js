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
    "asyncToGeneratorRuntime",
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
        key:
          "maw_report_send_message_success_result." +
          o("MWLogSend").getHimDeprecationStatus() +
          "." +
          e,
      });
    }
    function d(e, t) {
      return m.apply(this, arguments);
    }
    function m() {
      return (
        (m = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          try {
            var n = yield o("MAWChatJid").toThreadKey(
              e.tables,
              t,
              "MAWCommonSetupBridge::sendWrittenMsg",
            );
            return n;
          } catch (e) {
            throw (c("getThreadKeyFromChatJid"), r("getErrorSafe")(e));
          }
        })),
        m.apply(this, arguments)
      );
    }
    function p(t, a) {
      var i,
        l = t.externalId,
        c = null,
        m = !1,
        p = !1;
      switch (t.messageType) {
        case "editMsg":
          m = !0;
          break;
        case "revokeMsg":
          l = t.referencedExternalId;
          break;
        case "sendMsg":
          p = t.specialTextSize != null;
          break;
        case "reactionMsg":
          c = t.reaction != null ? 20 : 27;
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
      var _ = null,
        f = t.isVideoGif;
      t.fileType != null &&
        (_ = o("MAWFrontendMediaUtils").getMediaTypeAndServerMediaTypeFromBlob(
          t.fileType,
          void 0,
          void 0,
          f,
        ).mediaType);
      var g = t.xmaMessageType != null,
        h =
          t.quote != null || o("MAWXMAUtils").isXMAStoryReply(t.xmaMessageType),
        y = r("URLMatcher").match(
          o("MAWVault").unvault((i = t.content) != null ? i : ""),
        ),
        C = y != null && y.length > 0,
        b = o(
          "MAWGetAttachmentTypeForSendWrittenMsg",
        ).getAttachmentTypeForSendWrittenMsg(
          t.messageType,
          _,
          p,
          g,
          m,
          c,
          h,
          C,
          f,
        ),
        v = o("MAWGetLSThreadTypeUtil").getLSThreadTypeFromJid(t.chatJid);
      r("promiseDone")(
        (e || (e = o("LSDatabaseSingleton"))).LSDatabaseSingleton.then(
          (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e) {
                var n,
                  i =
                    (t == null ? void 0 : t.source) != null
                      ? t.source
                      : (s || (s = o("LSIntEnum"))).ofNumber(
                          r("LSMessagingThreadAttributionType").UNKNOWN,
                        ),
                  c = yield d(e, t.chatJid);
                o("MWLogSend").log(e, {
                  actor: (u || (u = o("I64"))).of_string(
                    o("MAWCurrentUser").getID(),
                  ),
                  attachmentFbids: [],
                  attachmentType: b,
                  backend: 1,
                  chatJid: t.chatJid,
                  hasReply: h,
                  initatingSource: t == null ? void 0 : t.initiatingSource,
                  messageSendDataclass: a,
                  messagingThreadId: u.to_string(c),
                  msgTtl:
                    (n = t.ephemeralSetting) == null
                      ? void 0
                      : n.ephemeralExpirationInSec,
                  offlineThreadingId: l,
                  sendType: 1,
                  source: i,
                  threadKey: c,
                  threadType: v,
                  waGroupJid: void 0,
                });
              },
            );
            return function (t) {
              return e.apply(this, arguments);
            };
          })(),
        ),
      );
    }
    function _(e) {
      (r("justknobx")._("154") &&
        o("shouldUseMAWSharedWorker").shouldUseMAWSharedWorker() &&
        r("BrowserLockManager") != null &&
        !o("MultipleTabsLogger").hasUniqueLock()) ||
        p(e);
    }
    ((l.reportSendMessageSuccessResultFn = p),
      (l.reportSendMessageSuccessResult = _));
  },
  98,
);
