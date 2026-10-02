__d(
  "WAWebScheduledMsgCreatedNotification",
  [
    "fbt",
    "WAJids",
    "WALogger",
    "WAWebCommonMsgSubtypeTypes",
    "WAWebDrawerManager",
    "WAWebFormatCTAText",
    "WAWebIcChatlistClockIcon.react",
    "WAWebMsgType",
    "WAWebScheduledMessagesListLoadable",
    "WAWebScheduledMsgActionLogger",
    "WAWebShowScheduledMsgsBulkDeleteToast",
    "WAWebSystemMessageGatingUtils",
    "WAWebUnscheduleMsgAction",
    "WAWebWamEnumScheduledMessageEntrypoint",
    "asyncToGeneratorRuntime",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u,
      c = u || (u = o("react")),
      d = {
        icon: {
          color: "xhslqc4",
          display: "x1rg5ohu",
          marginInlineEnd: "x7g7pl8",
          verticalAlign: "x523cq2",
          $$css: !0,
        },
      };
    function m(t, a) {
      var i = o(
          "WAWebSystemMessageGatingUtils",
        ).systemMessageActionTextStylingEnabled()
          ? s._(/*BTDS*/ "You scheduled a message")
          : s._(/*BTDS*/ "You scheduled a message. Click to view"),
        l = r("WAWebFormatCTAText")({
          type: o("WAWebMsgType").MSG_TYPE.NOTIFICATION,
          subtype: o("WAWebCommonMsgSubtypeTypes").MsgSubtype
            .ScheduledMessageCreated,
        }),
        u = c.jsx(o("WAWebIcChatlistClockIcon.react").IcChatlistClockIcon, {
          height: 14,
          width: 14,
          xstyle: d.icon,
        }),
        m = function () {
          (o("WAWebScheduledMsgActionLogger").logScheduledMsgViewListForChat(
            t,
            o("WAWebWamEnumScheduledMessageEntrypoint")
              .SCHEDULED_MESSAGE_ENTRYPOINT.SYSTEM_MESSAGE,
          ),
            o("WAWebDrawerManager").DrawerManager.openDrawerRight(
              c.jsx(
                o("WAWebScheduledMessagesListLoadable")
                  .WAWebScheduledMessagesListLoadable,
                {
                  chatId: o("WAJids").unsafeCoerceToChatJid(t.id.toJid()),
                  onBack: o("WAWebDrawerManager").closeDrawerRight,
                  allowSelection: !0,
                  onDeleteSelected: function (n) {
                    o(
                      "WAWebShowScheduledMsgsBulkDeleteToast",
                    ).showScheduledMsgsBulkDeleteToast(
                      o("WAJids").unsafeCoerceToChatJid(t.id.toJid()),
                      n,
                    );
                  },
                  onDeleteMessage: (function () {
                    var r = n("asyncToGeneratorRuntime").asyncToGenerator(
                      function* (n) {
                        try {
                          yield o(
                            "WAWebUnscheduleMsgAction",
                          ).unscheduleMsgAction(
                            o("WAJids").unsafeCoerceToChatJid(t.id.toJid()),
                            n,
                          );
                        } catch (t) {
                          (o("WALogger")
                            .ERROR(
                              e ||
                                (e = babelHelpers.taggedTemplateLiteralLoose([
                                  "Failed to unschedule message: ",
                                  "",
                                ])),
                              t,
                            )
                            .sendLogs("unschedule-msg-fail"),
                            a({
                              type: "error",
                              message: s._(/*BTDS*/ "Couldn't delete message"),
                            }));
                        }
                      },
                    );
                    return function (e) {
                      return r.apply(this, arguments);
                    };
                  })(),
                },
              ),
            ));
        };
      return { text: i, ctaText: l, icon: u, handleClick: m };
    }
    l.getScheduledMsgCreatedNotification = m;
  },
  226,
);
