__d(
  "WAWebOpenScheduledMsgsDeleteReview",
  [
    "fbt",
    "WAJids",
    "WALogger",
    "WAWebChatEntryPoint",
    "WAWebCmd",
    "WAWebDrawerManager",
    "WAWebScheduledMessagesListLoadable",
    "WAWebShowScheduledMsgsBulkDeleteToast",
    "WAWebToast.react",
    "WAWebToastManager",
    "WAWebUnscheduleMsgAction",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u,
      c,
      d = c || (c = o("react"));
    function m(t, a) {
      var i = o("WAJids").unsafeCoerceToChatJid(t.id.toJid()),
        l = d.jsx(
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
                text: s._(/*BTDS*/ "Delete chat"),
                handler: a,
              });
            },
            onDeleteMessage: (function () {
              var t = n("asyncToGeneratorRuntime").asyncToGenerator(
                function* (t) {
                  try {
                    yield o("WAWebUnscheduleMsgAction").unscheduleMsgAction(
                      i,
                      t,
                    );
                  } catch (t) {
                    (o("WALogger")
                      .ERROR(
                        e ||
                          (e = babelHelpers.taggedTemplateLiteralLoose([
                            "[scheduled_msg][delete-review] unschedule failed",
                          ])),
                      )
                      .catching(r("getErrorSafe")(t))
                      .sendLogs("scheduled-msg-delete-review-unschedule-fail"),
                      o("WAWebToastManager").ToastManager.open(
                        d.jsx(o("WAWebToast.react").Toast, {
                          id: o("WAWebToast.react").genId(),
                          msg: s._(/*BTDS*/ "Couldn't delete message"),
                        }),
                      ));
                  }
                },
              );
              return function (e) {
                return t.apply(this, arguments);
              };
            })(),
          },
        );
      o("WAWebCmd")
        .Cmd.openChatFromUnread({
          chat: t,
          chatEntryPoint: o("WAWebChatEntryPoint").ChatEntryPoint.ChatsTab,
        })
        .then(function (e) {
          e && o("WAWebDrawerManager").DrawerManager.openDrawerRight(l);
        })
        .catch(function (e) {
          return o("WALogger")
            .ERROR(
              u ||
                (u = babelHelpers.taggedTemplateLiteralLoose([
                  "[scheduled_msg][delete-review] chat open failed",
                ])),
            )
            .catching(r("getErrorSafe")(e))
            .sendLogs("scheduled-msg-delete-review-open-chat-fail");
        });
    }
    l.openScheduledMsgsDeleteReview = m;
  },
  226,
);
