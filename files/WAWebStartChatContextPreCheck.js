__d(
  "WAWebStartChatContextPreCheck",
  [
    "WALogger",
    "WAWebChatCollection",
    "WAWebContactCollection",
    "WAWebFrontendContactGetters",
    "WAWebLidMigrationUtils",
    "WAWebMsgGetters",
    "WAWebReachoutTimelockUtils",
    "WAWebStartChatContextGatingUtils",
    "WAWebUserUtils",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e;
    function s(t) {
      try {
        return (
          t.isRegularUser() &&
          !o("WAWebReachoutTimelockUtils").isUserReachoutTimelocked() &&
          !o("WAWebUserUtils").isMeAccount(t) &&
          !u(t) &&
          !c(t) &&
          o("WAWebStartChatContextGatingUtils").isStartChatContextEnabled()
        );
      } catch (t) {
        return (
          o("WALogger")
            .WARN(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "[start-chat-context] pre-check failed, opening the chat without it",
                ])),
            )
            .catching(r("getErrorSafe")(t))
            .sendLogs("start-chat-context-pre-check-failed"),
          !1
        );
      }
    }
    function u(e) {
      return [
        e,
        o("WAWebLidMigrationUtils").toPn(e),
        o("WAWebLidMigrationUtils").toUserLid(e),
      ].some(function (e) {
        var t =
          e != null
            ? o("WAWebContactCollection").ContactCollection.get(e)
            : null;
        return t != null && o("WAWebFrontendContactGetters").getIsMyContact(t);
      });
    }
    function c(e) {
      var t;
      return (
        ((t = o("WAWebChatCollection").ChatCollection.getLatestChatForWid(e)) ==
        null
          ? void 0
          : t.getAllMsgs().some(d)) === !0
      );
    }
    function d(e) {
      return (
        o("WAWebMsgGetters").isRealMessage(e) &&
        !o("WAWebMsgGetters").getIsNotification(e)
      );
    }
    ((l.shouldOpenChatWithStartChatContext = s), (l.isConversationMessage = d));
  },
  98,
);
