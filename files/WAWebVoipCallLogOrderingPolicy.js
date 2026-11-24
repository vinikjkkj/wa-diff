__d(
  "WAWebVoipCallLogOrderingPolicy",
  [
    "WALogger",
    "WAWebApiChatCommon",
    "WAWebDBMsgUtils",
    "WAWebMsgType",
    "WAWebViewMode.flow",
    "WAWebVoipCallLogPlaceholderTracker",
    "getErrorSafe",
    "justknobx",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e;
    async function s(t, n) {
      if (
        n == null ||
        t.type !== o("WAWebMsgType").MSG_TYPE.CALL_LOG ||
        t.id.fromMe ||
        t.id.remote.isGroup() ||
        t.viewMode ===
          o("WAWebViewMode.flow").ViewModeType.CALL_LOG_OUT_OF_ORDER ||
        (t.viewMode !== o("WAWebViewMode.flow").ViewModeType.VISIBLE &&
          t.viewMode !== n.notificationViewMode) ||
        o(
          "WAWebVoipCallLogPlaceholderTracker",
        ).isOfflineCallLogOrderingEnabled()
      )
        return { message: t };
      try {
        var a = await n.policy.getStoredOrderSafeCallLogViewMode(
          t.id.remote,
          t.id,
          n.t,
          n.viewMode,
          n.notificationViewMode,
        );
        return a.viewMode ===
          o("WAWebViewMode.flow").ViewModeType.CALL_LOG_OUT_OF_ORDER
          ? {
              message: babelHelpers.extends({}, t, { viewMode: a.viewMode }),
              originalViewMode: a.originalNotificationViewMode,
            }
          : { message: t };
      } catch (n) {
        return (
          o("WALogger")
            .WARN(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "[voip] queued call log order check failed",
                ])),
            )
            .catching(r("getErrorSafe")(n)),
          { message: t }
        );
      }
    }
    async function u(e, t, n, a, i) {
      var l = await o("WAWebApiChatCommon").getChatRecord(e);
      if ((l == null ? void 0 : l.t) == null || l.t <= n)
        return { viewMode: a };
      var s = await o("WAWebDBMsgUtils").getMsgByMsgKey(t);
      return s != null
        ? {
            viewMode:
              s.viewMode ===
              o("WAWebViewMode.flow").ViewModeType.CALL_LOG_OUT_OF_ORDER
                ? o("WAWebViewMode.flow").ViewModeType.CALL_LOG_OUT_OF_ORDER
                : a,
          }
        : r("justknobx")._("8695")
          ? { viewMode: a }
          : {
              viewMode:
                o("WAWebViewMode.flow").ViewModeType.CALL_LOG_OUT_OF_ORDER,
              originalNotificationViewMode: i != null ? i : a,
            };
    }
    ((l.recheckStoredCallLogOrdering = s),
      (l.getStoredOrderSafeCallLogViewMode = u));
  },
  98,
);
