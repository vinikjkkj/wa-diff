__d(
  "WAWebAttachMenuPopupItemPolls.react",
  [
    "WAWebAttachMenuPopupItem.react",
    "WAWebAttachMenuStrings",
    "WAWebAttachmentMenuLogger",
    "WAWebModalManager",
    "WAWebPollCreationUtils",
    "WAWebPollsCreatePollModal",
    "WAWebPollsGatingUtils",
    "WAWebPrepareMessageSendingAction",
    "WDSIconWdsIcPoll.react",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = { refreshedIcon: { color: "xxeg2eo", $$css: !0 } };
    function c(e) {
      var t = e.chat,
        n = e.getComposeBoxEditorRef,
        a = function () {
          (o("WAWebModalManager").ModalManager.open(
            s.jsx(o("WAWebPollsCreatePollModal").CreatePollModal, {
              chat: t,
              getComposeBoxEditorRef: n,
              pollType: o("WAWebPollCreationUtils").PollType.POLL,
            }),
            {
              blockClose: o(
                "WAWebPollsGatingUtils",
              ).isPollsCancellationPromptEnabled(),
            },
          ),
            o("WAWebPrepareMessageSendingAction").prepareChatForMessageSending(
              t,
            ),
            o(
              "WAWebAttachmentMenuLogger",
            ).AttachmentMenuLogger.logAttachMenuClick(
              t,
              o("WAWebAttachmentMenuLogger").AttachmentMenuTarget.POLL,
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
        Icon: r("WDSIconWdsIcPoll.react"),
        iconXstyle: u.refreshedIcon,
        text: o("WAWebAttachMenuStrings").PollText(),
      });
    }
    ((c.displayName = c.name + " [from " + i.id + "]"), (l.default = c));
  },
  98,
);
