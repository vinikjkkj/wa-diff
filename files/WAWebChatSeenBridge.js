__d(
  "WAWebChatSeenBridge",
  [
    "WALogger",
    "WATimeUtils",
    "WAWebApiAddActiveMessageRange",
    "WAWebDbErrors",
    "WAWebMarkChatAsReadSync",
    "WAWebMessageRangeUtils",
    "WAWebSchemaChat",
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s;
    function u(e, t) {
      var n = o("WATimeUtils").unixTimeMs();
      return r("WAWebMarkChatAsReadSync")
        .getMarkChatAsReadMutation(n, !1, e)
        .then(function (t) {
          return o("WAWebMessageRangeUtils").lockForMessageRangeSync(
            [],
            [t],
            function () {
              return o("WAWebApiAddActiveMessageRange").addActiveMessageRange(
                e.toString(),
                "markChatAsRead",
                t.binarySyncAction,
              );
            },
          );
        });
    }
    function c(t, n) {
      return o("WAWebSchemaChat")
        .getChatTable()
        .merge(t.toString(), { unreadCount: n, unreadDividerOffset: 0 })
        .catch(function (t) {
          throw t instanceof o("WAWebDbErrors").DbOnLogoutAbort
            ? t
            : (o("WALogger")
                .ERROR(
                  e ||
                    (e = babelHelpers.taggedTemplateLiteralLoose([
                      "update chat table failed",
                    ])),
                )
                .verbose()
                .sendLogs(
                  "update chat table failed when mark conversation seen",
                ),
              r("err")("update chat table failed"));
        });
    }
    function d(e) {
      return o("WAWebSchemaChat")
        .getChatTable()
        .merge(e.toString(), { unreadCount: -1, unreadDividerOffset: 0 })
        .catch(function (e) {
          throw e instanceof o("WAWebDbErrors").DbOnLogoutAbort
            ? e
            : (o("WALogger")
                .ERROR(
                  s ||
                    (s = babelHelpers.taggedTemplateLiteralLoose([
                      "update chat table failed",
                    ])),
                )
                .verbose()
                .sendLogs(
                  "update chat table failed when mark conversation as unseen",
                ),
              r("err")("update chat table failed"));
        });
    }
    ((l.sendConversationUnseen = u),
      (l.markConversationSeen = c),
      (l.markConversationUnseen = d));
  },
  98,
);
