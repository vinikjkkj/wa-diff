__d(
  "WAWebChatSeenBridge",
  [
    "WALogger",
    "WATimeUtils",
    "WAWebApiActiveMessageRanges",
    "WAWebApiChat",
    "WAWebMarkChatAsReadSync",
    "WAWebMessageRangeUtils",
    "WAWebMiscErrors",
    "WAWebSchemaChat",
    "WAWebSendReadReceiptJob",
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s;
    async function u(e) {
      var t = e.chat,
        n = e.key,
        a = e.threadId,
        i = e.unreadDelta,
        l = o("WATimeUtils").unixTimeMs();
      if (i === -1) {
        var s = await r("WAWebMarkChatAsReadSync").getMarkChatAsReadMutation(
            l,
            !0,
            t.id,
          ),
          u = t.id.toString();
        return (
          o("WAWebMessageRangeUtils").lockForMessageRangeSync(
            [],
            [s],
            function () {
              return o("WAWebApiActiveMessageRanges").addActiveMessageRange(
                t.id.toString(),
                "markChatAsRead",
                s.binarySyncAction,
              );
            },
          ),
          await o("WAWebApiChat").updateChatForMarkAsReadSync(u),
          { fullyReadThreadIds: [] }
        );
      }
      return await o("WAWebSendReadReceiptJob").markChatRead(t, n, a);
    }
    function c(e, t) {
      var n = o("WATimeUtils").unixTimeMs();
      return r("WAWebMarkChatAsReadSync")
        .getMarkChatAsReadMutation(n, !1, e)
        .then(function (t) {
          return o("WAWebMessageRangeUtils").lockForMessageRangeSync(
            [],
            [t],
            function () {
              return o("WAWebApiActiveMessageRanges").addActiveMessageRange(
                e.toString(),
                "markChatAsRead",
                t.binarySyncAction,
              );
            },
          );
        });
    }
    function d(t, n) {
      return o("WAWebSchemaChat")
        .getChatTable()
        .merge(t.toString(), { unreadCount: n, unreadDividerOffset: 0 })
        .catch(function (t) {
          throw t instanceof o("WAWebMiscErrors").DbOnLogoutAbort
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
    function m(e) {
      return o("WAWebSchemaChat")
        .getChatTable()
        .merge(e.toString(), { unreadCount: -1, unreadDividerOffset: 0 })
        .catch(function (e) {
          throw e instanceof o("WAWebMiscErrors").DbOnLogoutAbort
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
    ((l.sendConversationSeen = u),
      (l.sendConversationUnseen = c),
      (l.markConversationSeen = d),
      (l.markConversationUnseen = m));
  },
  98,
);
