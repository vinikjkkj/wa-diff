__d(
  "WAWebBizAiRepliesControlPopup.react",
  [
    "fbt",
    "WAWebAIAgentAIReplyUtils",
    "WAWebBizAiAgentStatusUtils",
    "WAWebConfirmPopup.react",
    "WAWebGenAiAgentLogEvents",
    "WAWebModalManager",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react")),
      c = e.useState;
    function d(e) {
      var t = e.chat,
        n = !o("WAWebBizAiAgentStatusUtils").isChatAiEnabled(t),
        r = c(!1),
        a = r[0],
        i = r[1],
        l = n ? s._(/*BTDS*/ "AI responses") : s._(/*BTDS*/ "Respond manually"),
        d = n
          ? s._(
              /*BTDS*/ "AI will automatically respond to messages in this chat. You'll be notified with an unread message if AI doesn't have a response.",
            )
          : s._(
              /*BTDS*/ "AI will stop automatically responding to messages in this chat.",
            ),
        m = n ? s._(/*BTDS*/ "Turn on") : s._(/*BTDS*/ "Respond"),
        p = function () {
          (o(
            "WAWebGenAiAgentLogEvents",
          ).logGenAiAgentAutoReplyConfirmationDialogEvent(
            n
              ? o("WAWebGenAiAgentLogEvents")
                  .WAWebGenAIAgentUserActionTargetEnum.TURN_ON
              : o("WAWebGenAiAgentLogEvents")
                  .WAWebGenAIAgentUserActionTargetEnum.TURN_OFF,
          ),
            i(!0),
            o("WAWebAIAgentAIReplyUtils")
              .mutateAiReplyStatus(t)
              .then(function (e) {
                (e || t.setForceDismissAiAgentBlockingBar(!0),
                  o("WAWebModalManager").ModalManager.close());
              }));
        },
        _ = function () {
          (o(
            "WAWebGenAiAgentLogEvents",
          ).logGenAiAgentAutoReplyConfirmationDialogEvent(
            o("WAWebGenAiAgentLogEvents").WAWebGenAIAgentUserActionTargetEnum
              .CANCEL,
          ),
            o("WAWebModalManager").ModalManager.close());
        };
      return u.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
        testid: void 0,
        title: l,
        okText: m,
        onOK: p,
        okSpinner: a === !0,
        okButtonType: "primary",
        cancelText: s._(/*BTDS*/ "Cancel"),
        cancelButtonType: "secondary",
        onCancel: _,
        children: d,
      });
    }
    ((d.displayName = d.name + " [from " + i.id + "]"), (l.default = d));
  },
  226,
);
