__d(
  "WAWebVoipActionCountShownPlaceholder",
  [
    "WALogger",
    "WAWebDBMsgUtils",
    "WAWebFrontendMsgGetters",
    "WAWebMessageQueue",
    "WAWebMessageQueueTimeout",
    "WAWebModelStorageUtils",
    "WAWebMsgCollection",
    "WAWebViewMode.flow",
    "WAWebVoipActionUncountUnresolvedPlaceholder",
    "WAWebVoipCallLogPlaceholderTracker",
    "WAWebVoipPlaceholderUnreadRows",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e, s, u;
    function c(t) {
      o("WAWebMessageQueue")
        .onMessageQueue({
          chatWid: t.remote,
          isOffline: !1,
          msgCategory: null,
          action: function () {
            return d(t);
          },
        })
        .catch(function (e) {
          return o("WAWebMessageQueueTimeout").handleMessageQueueTimeout(
            e,
            "voip_placeholder_unread",
          );
        })
        .catch(function (n) {
          o(
            "WAWebVoipActionUncountUnresolvedPlaceholder",
          ).isSessionEndingDbError(n) ||
            o("WALogger")
              .ERROR(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "[voip] placeholder ",
                    ": recount failed",
                  ])),
                t.id,
              )
              .catching(r("getErrorSafe")(n))
              .sendLogs("voip-placeholder-recount-fail");
        });
    }
    async function d(e) {
      var t,
        n = o("WAWebFrontendMsgGetters").getMaybeChatByMsgKey(e, !1);
      if (
        (n == null ? void 0 : n.active) === !0 ||
        !o(
          "WAWebVoipCallLogPlaceholderTracker",
        ).isOfflineCallLogOrderingEnabled() ||
        !(await m(e))
      ) {
        o("WALogger").LOG(
          s ||
            (s = babelHelpers.taggedTemplateLiteralLoose([
              "[voip] placeholder ",
              ": shown without counting it again",
            ])),
          e.id,
        );
        return;
      }
      ((t = o("WAWebMsgCollection").MsgCollection.get(e)) == null ||
        t.set({
          viewMode:
            o("WAWebViewMode.flow").ViewModeType
              .CALL_LOG_OFFLINE_RESUME_PROMOTED,
        }),
        n != null &&
          (n.set({ unreadCount: n.unreadCount + 1 || 1 }),
          n.activeUnreadCount > 0 &&
            n.set({ activeUnreadCount: n.activeUnreadCount + 1 })),
        o("WALogger").LOG(
          u ||
            (u = babelHelpers.taggedTemplateLiteralLoose([
              "[voip] placeholder ",
              ": counted as unread again",
            ])),
          e.id,
        ));
    }
    function m(e) {
      var t = e.toString(),
        n = e.remote.toString();
      return o("WAWebModelStorageUtils")
        .getStorage()
        .lock(["message", "chat"], async function (r) {
          var a,
            i,
            l,
            s = r[0],
            u = r[1],
            c = (a = await s.get(t, !1)) == null ? void 0 : a.viewMode,
            d =
              (i = (l = await u.get(n)) == null ? void 0 : l.unreadCount) !=
              null
                ? i
                : 0;
          return !p(c, o("WAWebMsgCollection").MsgCollection.get(e)) ||
            o("WAWebVoipPlaceholderUnreadRows").hasTooManyUnreadToWalk(d) ||
            !(await o("WAWebVoipPlaceholderUnreadRows").isUnreadSinceRow(
              s,
              n,
              t,
              Math.max(d, 0),
            ))
            ? !1
            : (await s.merge(t, {
                viewMode:
                  o("WAWebViewMode.flow").ViewModeType
                    .CALL_LOG_OFFLINE_RESUME_PROMOTED,
                pendingReadReceipt:
                  o("WAWebDBMsgUtils").PendingReadReceiptType.Message,
              }),
              await u.merge(n, { unreadCount: d + 1 || 1 }),
              !0);
        });
    }
    function p(e, t) {
      return (
        e === o("WAWebViewMode.flow").ViewModeType.VISIBLE &&
        (t == null ||
          t.viewMode === o("WAWebViewMode.flow").ViewModeType.VISIBLE)
      );
    }
    l.queueCountShownPlaceholderAgain = c;
  },
  98,
);
