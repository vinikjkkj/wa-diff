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
    function p(t, n) {
      var a = o("WAWebGetMaybeChatById").getMaybeChatById(t);
      if (a == null) {
        o("WALogger").WARN(
          e ||
            (e = babelHelpers.taggedTemplateLiteralLoose([
              "[scheduled_msg][delete-review] review skipped, chat left the collection",
            ])),
        );
        return;
      }
      var i = o("WAJids").unsafeCoerceToChatJid(t.toJid()),
        l = m.jsx(
          o("WAWebScheduledMessagesListLoadable")
            .WAWebScheduledMessagesListLoadable,
          {
            chatId: i,
            onBack: o("WAWebDrawerManager").closeDrawerRight,
            initialSelectionMode: !0,
            onDeleteSelected: function (t) {
              o(
                "WAWebShowScheduledMsgsBulkDeleteToast",
              ).showScheduledMsgsBulkDeleteToast(i, t, {
                text: s._(/*BTDS*/ ""),
                handler: n,
              });
            },
            onDeleteMessage: async function (t) {
              try {
                await o("WAWebUnscheduleMsgAction").unscheduleMsgAction(i, t);
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
                      msg: s._(/*BTDS*/ ""),
                    }),
                  ));
              }
            },
          },
        );
      o("WAWebCmd")
        .Cmd.openChatFromUnread({
          chat: a,
          chatEntryPoint: o("WAWebChatEntryPoint").ChatEntryPoint.ChatsTab,
        })
        .then(function (e) {
          e &&
            (o("WAWebDrawerManager").DrawerManager.openDrawerRight(l),
            o("WAWebScheduledMsgActionLogger").logScheduledMsgViewListForChat(
              a,
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
