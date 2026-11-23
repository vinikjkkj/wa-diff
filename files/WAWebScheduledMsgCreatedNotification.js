__d(
  "WAWebScheduledMsgCreatedNotification",
  [
    "fbt",
    "WAJids",
    "WALogger",
    "WAWebCommonMsgSubtypeTypes",
    "WAWebDrawerManager",
    "WAWebFormatCTAText",
    "WAWebMsgType",
    "WAWebScheduledMessagesListLoadable",
    "WAWebScheduledMsgActionLogger",
    "WAWebShowScheduledMsgsBulkDeleteToast",
    "WAWebSystemMessageGatingUtils",
    "WAWebUnscheduleMsgAction",
    "WAWebWamEnumScheduledMessageEntrypoint",
    "WDSIconIcSchedule.react",
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
    function m(t, n) {
      var a = o(
          "WAWebSystemMessageGatingUtils",
        ).systemMessageActionTextStylingEnabled()
          ? s._(/*BTDS*/ "")
          : s._(/*BTDS*/ ""),
        i = r("WAWebFormatCTAText")({
          type: o("WAWebMsgType").MSG_TYPE.NOTIFICATION,
          subtype: o("WAWebCommonMsgSubtypeTypes").MsgSubtype
            .ScheduledMessageCreated,
        }),
        l = c.jsx(r("WDSIconIcSchedule.react"), {
          height: 14,
          width: 14,
          xstyle: d.icon,
        }),
        u = function () {
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
                  onDeleteMessage: async function (a) {
                    try {
                      await o("WAWebUnscheduleMsgAction").unscheduleMsgAction(
                        o("WAJids").unsafeCoerceToChatJid(t.id.toJid()),
                        a,
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
                        n({ type: "error", message: s._(/*BTDS*/ "") }));
                    }
                  },
                },
              ),
            ));
        };
      return { text: a, ctaText: i, icon: l, handleClick: u };
    }
    l.getScheduledMsgCreatedNotification = m;
  },
  226,
);
