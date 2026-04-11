__d(
  "WAWebAttachMenuPopupItemContacts.react",
  [
    "WAWebAttachMenuPopupItem.react",
    "WAWebAttachMenuStrings",
    "WAWebAttachVcardsFlowLoadable",
    "WAWebAttachmentMenuLogger",
    "WAWebModalManager",
    "WAWebPrepareMessageSendingAction",
    "WDSIconIcPersonFilled.react",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = { refreshedIcon: { color: "x19hyexh", $$css: !0 } };
    function c(e) {
      var t = e.chat,
        n = e.onMenuComplete,
        a = function () {
          (o("WAWebModalManager").ModalManager.open(
            s.jsx(o("WAWebAttachVcardsFlowLoadable").AttachVcardsFlowLoadable, {
              chat: t,
              onCancel: function () {
                o(
                  "WAWebAttachmentMenuLogger",
                ).AttachmentMenuLogger.logAttachmentCancel(
                  t,
                  o("WAWebAttachmentMenuLogger").AttachmentMenuTarget.CONTACT,
                );
              },
              onContactsSent: function () {
                (n == null || n(!0),
                  o(
                    "WAWebAttachmentMenuLogger",
                  ).AttachmentMenuLogger.logAttachmentSend(
                    t,
                    o("WAWebAttachmentMenuLogger").AttachmentMenuTarget.CONTACT,
                  ));
              },
            }),
          ),
            o("WAWebPrepareMessageSendingAction").prepareChatForMessageSending(
              t,
            ),
            o(
              "WAWebAttachmentMenuLogger",
            ).AttachmentMenuLogger.logAttachMenuClick(
              t,
              o("WAWebAttachmentMenuLogger").AttachmentMenuTarget.CONTACT,
            ));
        },
        i = function () {
          a();
        },
        l = function (t) {
          return (t.preventDefault(), a(), !0);
        };
      return s.jsx(r("WAWebAttachMenuPopupItem.react"), {
        testid: void 0,
        action: l,
        onPress: i,
        Icon: r("WDSIconIcPersonFilled.react"),
        iconXstyle: u.refreshedIcon,
        text: o("WAWebAttachMenuStrings").ContactText(),
      });
    }
    ((c.displayName = c.name + " [from " + i.id + "]"), (l.default = c));
  },
  98,
);
