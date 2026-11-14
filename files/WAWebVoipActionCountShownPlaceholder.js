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
    "asyncToGeneratorRuntime",
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
    function d(e) {
      return m.apply(this, arguments);
    }
    function m() {
      return (
        (m = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t,
            n = o("WAWebFrontendMsgGetters").getMaybeChatByMsgKey(e, !1);
          if (
            (n == null ? void 0 : n.active) === !0 ||
            !o(
              "WAWebVoipCallLogPlaceholderTracker",
            ).isOfflineCallLogOrderingEnabled() ||
            !(yield p(e))
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
        })),
        m.apply(this, arguments)
      );
    }
    function p(e) {
      var t = e.toString(),
        r = e.remote.toString();
      return o("WAWebModelStorageUtils")
        .getStorage()
        .lock(
          ["message", "chat"],
          (function () {
            var a = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (n) {
                var a,
                  i,
                  l,
                  s = n[0],
                  u = n[1],
                  c = (a = yield s.get(t, !1)) == null ? void 0 : a.viewMode,
                  d =
                    (i =
                      (l = yield u.get(r)) == null ? void 0 : l.unreadCount) !=
                    null
                      ? i
                      : 0;
                return !_(c, o("WAWebMsgCollection").MsgCollection.get(e)) ||
                  o("WAWebVoipPlaceholderUnreadRows").hasTooManyUnreadToWalk(
                    d,
                  ) ||
                  !(yield o("WAWebVoipPlaceholderUnreadRows").isUnreadSinceRow(
                    s,
                    r,
                    t,
                    Math.max(d, 0),
                  ))
                  ? !1
                  : (yield s.merge(t, {
                      viewMode:
                        o("WAWebViewMode.flow").ViewModeType
                          .CALL_LOG_OFFLINE_RESUME_PROMOTED,
                      pendingReadReceipt:
                        o("WAWebDBMsgUtils").PendingReadReceiptType.Message,
                    }),
                    yield u.merge(r, { unreadCount: d + 1 || 1 }),
                    !0);
              },
            );
            return function (e) {
              return a.apply(this, arguments);
            };
          })(),
        );
    }
    function _(e, t) {
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
