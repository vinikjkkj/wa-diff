__d(
  "WAWebBizChatAssignmentAiRepliesModal.react",
  [
    "fbt",
    "WAWebAiAgentAutoReplyControlMutation",
    "WAWebBizChatAssignmentModal.react",
    "WAWebBizGatingUtils",
    "WAWebChatAssignmentLogEvents.flow",
    "WAWebConfirmPopup.react",
    "WAWebFbtCommon",
    "WAWebModalManager",
    "WAWebToast.react",
    "WAWebToastManager",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react"));
    function c(e) {
      var t = e.chat,
        n = s._(
          /*BTDS*/ "To assign a chat to another device, AI replies needs to be turned off from your mobile device.",
        );
      if (!o("WAWebBizGatingUtils").isBizAiChatAssignmentInteropTosEnabled())
        return u.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
          tsNavigationData: {
            surface: "unknown",
            viewName: "chat-assignment-ai-replies",
          },
          onOK: o("WAWebModalManager").closeModalManager,
          okText: r("WAWebFbtCommon")("OK"),
          children: n,
        });
      var a = s._(
          /*BTDS*/ "To assign a chat to another device, AI replies needs to be turned off from your mobile device.",
        ),
        i = s._(/*BTDS*/ "Assign chat"),
        l = s._(/*BTDS*/ "Turn off AI replies"),
        c = s._(/*BTDS*/ "Dismiss"),
        d = function () {
          (m(), t.setForceDismissAiAgentBlockingBar(!0));
        },
        m = function () {
          o("WAWebToastManager").ToastManager.open(
            u.jsx(o("WAWebToast.react").Toast, {
              action: { actionText: r("WAWebFbtCommon")("OK"), dismiss: !0 },
              msg: s._(
                /*BTDS*/ "Automatic replies could not be turned off. Please try again.",
              ),
            }),
          );
        };
      return u.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
        tsNavigationData: {
          surface: "unknown",
          viewName: "chat-assignment-ai-replies",
        },
        title: i,
        onOK: function () {
          (o("WAWebAiAgentAutoReplyControlMutation")
            .changeAiReplyStatus(t.id, "MUTED")
            .then(function (e) {
              e.isSuccess
                ? o("WAWebModalManager").ModalManager.open(
                    u.jsx(r("WAWebBizChatAssignmentModal.react"), {
                      chats: [t],
                      entryPoint: o("WAWebChatAssignmentLogEvents.flow")
                        .ChatAssignmentEntryPointType.CONVERSATION_MENU,
                    }),
                  )
                : d();
            })
            .catch(function () {
              d();
            }),
            o("WAWebModalManager").ModalManager.close());
        },
        okText: l,
        onCancel: o("WAWebModalManager").closeModalManager,
        cancelText: c,
        children: a,
      });
    }
    ((c.displayName = c.name + " [from " + i.id + "]"), (l.default = c));
  },
  226,
);
