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
    "asyncToGeneratorRuntime",
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s;
    function u(e, t, n, r) {
      return c.apply(this, arguments);
    }
    function c() {
      return (
        (c = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, n, a) {
            var i = o("WATimeUtils").unixTimeMs();
            if (n === -1) {
              var l = yield r(
                  "WAWebMarkChatAsReadSync",
                ).getMarkChatAsReadMutation(i, !0, e.id),
                s = e.id.toString();
              return (
                o("WAWebMessageRangeUtils").lockForMessageRangeSync(
                  [],
                  [l],
                  function () {
                    return o(
                      "WAWebApiActiveMessageRanges",
                    ).addActiveMessageRange(
                      e.id.toString(),
                      "markChatAsRead",
                      l.binarySyncAction,
                    );
                  },
                ),
                yield o("WAWebApiChat").updateChatForMarkAsReadSync(s),
                { fullyReadThreadIds: [] }
              );
            }
            return yield o("WAWebSendReadReceiptJob").markChatRead(e, t, a);
          },
        )),
        c.apply(this, arguments)
      );
    }
    function d(e, t) {
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
    function m(t, n) {
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
    function p(e) {
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
      (l.sendConversationUnseen = d),
      (l.markConversationSeen = m),
      (l.markConversationUnseen = p));
  },
  98,
);
