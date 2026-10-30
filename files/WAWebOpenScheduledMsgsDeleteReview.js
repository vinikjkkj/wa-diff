__d(
  "WAWebOpenScheduledMsgsDeleteReview",
  [
    "fbt",
    "WAJids",
    "WALogger",
    "WAWebChatEntryPoint",
    "WAWebCmd",
    "WAWebDrawerManager",
    "WAWebGetMaybeChatById",
    "WAWebScheduledMessagesListLoadable",
    "WAWebScheduledMsgActionLogger",
    "WAWebShowScheduledMsgsBulkDeleteToast",
    "WAWebToast.react",
    "WAWebToastManager",
    "WAWebUnscheduleMsgAction",
    "WAWebWamEnumScheduledMessageEntrypoint",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u,
      c,
      d,
      m = d || (d = o("react"));
    function p(t, a) {
      var i = o("WAWebGetMaybeChatById").getMaybeChatById(t);
      if (i == null) {
        o("WALogger").WARN(
          e ||
            (e = babelHelpers.taggedTemplateLiteralLoose([
              "[scheduled_msg][delete-review] review skipped, chat left the collection",
            ])),
        );
        return;
      }
      var l = o("WAJids").unsafeCoerceToChatJid(t.toJid()),
        d = m.jsx(
          o("WAWebScheduledMessagesListLoadable")
            .WAWebScheduledMessagesListLoadable,
          {
            chatId: l,
            onBack: o("WAWebDrawerManager").closeDrawerRight,
            initialSelectionMode: !0,
            onDeleteSelected: function (t) {
              o(
                "WAWebShowScheduledMsgsBulkDeleteToast",
              ).showScheduledMsgsBulkDeleteToast(l, t, {
                text: s._(/*BTDS*/ "Delete chat"),
                handler: a,
              });
            },
            onDeleteMessage: (function () {
              var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                function* (e) {
                  try {
                    yield o("WAWebUnscheduleMsgAction").unscheduleMsgAction(
                      l,
                      e,
                    );
                  } catch (e) {
                    (o("WALogger")
                      .ERROR(
                        u ||
                          (u = babelHelpers.taggedTemplateLiteralLoose([
                            "[scheduled_msg][delete-review] unschedule failed",
                          ])),
                      )
                      .catching(r("getErrorSafe")(e))
                      .sendLogs("scheduled-msg-delete-review-unschedule-fail"),
                      o("WAWebToastManager").ToastManager.open(
                        m.jsx(o("WAWebToast.react").Toast, {
                          id: o("WAWebToast.react").genId(),
                          msg: s._(/*BTDS*/ "Couldn't delete message"),
                        }),
                      ));
                  }
                },
              );
              return function (t) {
                return e.apply(this, arguments);
              };
            })(),
          },
        );
      o("WAWebCmd")
        .Cmd.openChatFromUnread({
          chat: i,
          chatEntryPoint: o("WAWebChatEntryPoint").ChatEntryPoint.ChatsTab,
        })
        .then(function (e) {
          e &&
            (o("WAWebDrawerManager").DrawerManager.openDrawerRight(d),
            o("WAWebScheduledMsgActionLogger").logScheduledMsgViewListForChat(
              i,
              o("WAWebWamEnumScheduledMessageEntrypoint")
                .SCHEDULED_MESSAGE_ENTRYPOINT.CHAT_DELETE_DIALOG,
            ));
        })
        .catch(function (e) {
          return o("WALogger")
            .ERROR(
              c ||
                (c = babelHelpers.taggedTemplateLiteralLoose([
                  "[scheduled_msg][delete-review] chat open failed",
                ])),
            )
            .catching(r("getErrorSafe")(e))
            .sendLogs("scheduled-msg-delete-review-open-chat-fail");
        });
    }
    l.openScheduledMsgsDeleteReview = p;
  },
  226,
);
