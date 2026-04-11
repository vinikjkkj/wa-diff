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
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react")),
      c = e.useState;
    function d(e) {
      var t = o("react-compiler-runtime").c(18),
        n = e.chat,
        r;
      t[0] !== n
        ? ((r = o("WAWebBizAiAgentStatusUtils").isChatAiEnabled(n)),
          (t[0] = n),
          (t[1] = r))
        : (r = t[1]);
      var a = !r,
        i = c(!1),
        l = i[0],
        d = i[1],
        p;
      t[2] !== a
        ? ((p = a
            ? s._(/*BTDS*/ "AI responses")
            : s._(/*BTDS*/ "Respond manually")),
          (t[2] = a),
          (t[3] = p))
        : (p = t[3]);
      var _ = p,
        f;
      t[4] !== a
        ? ((f = a
            ? s._(
                /*BTDS*/ "AI will automatically respond to messages in this chat. You'll be notified with an unread message if AI doesn't have a response.",
              )
            : s._(
                /*BTDS*/ "AI will stop automatically responding to messages in this chat.",
              )),
          (t[4] = a),
          (t[5] = f))
        : (f = t[5]);
      var g = f,
        h;
      t[6] !== a
        ? ((h = a ? s._(/*BTDS*/ "Turn on") : s._(/*BTDS*/ "Respond")),
          (t[6] = a),
          (t[7] = h))
        : (h = t[7]);
      var y = h,
        C;
      t[8] !== n || t[9] !== a
        ? ((C = function () {
            (o(
              "WAWebGenAiAgentLogEvents",
            ).logGenAiAgentAutoReplyConfirmationDialogEvent(
              a
                ? o("WAWebGenAiAgentLogEvents")
                    .WAWebGenAIAgentUserActionTargetEnum.TURN_ON
                : o("WAWebGenAiAgentLogEvents")
                    .WAWebGenAIAgentUserActionTargetEnum.TURN_OFF,
            ),
              d(!0),
              o("WAWebAIAgentAIReplyUtils")
                .mutateAiReplyStatus(n)
                .then(function (e) {
                  (e || n.setForceDismissAiAgentBlockingBar(!0),
                    o("WAWebModalManager").ModalManager.close());
                }));
          }),
          (t[8] = n),
          (t[9] = a),
          (t[10] = C))
        : (C = t[10]);
      var b = C,
        v = m,
        S = l === !0,
        R;
      t[11] === Symbol.for("react.memo_cache_sentinel")
        ? ((R = s._(/*BTDS*/ "Cancel")), (t[11] = R))
        : (R = t[11]);
      var L;
      return (
        t[12] !== g || t[13] !== b || t[14] !== y || t[15] !== S || t[16] !== _
          ? ((L = u.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
              testid: void 0,
              title: _,
              okText: y,
              onOK: b,
              okSpinner: S,
              okButtonType: "primary",
              cancelText: R,
              cancelButtonType: "secondary",
              onCancel: v,
              children: g,
            })),
            (t[12] = g),
            (t[13] = b),
            (t[14] = y),
            (t[15] = S),
            (t[16] = _),
            (t[17] = L))
          : (L = t[17]),
        L
      );
    }
    function m() {
      (o(
        "WAWebGenAiAgentLogEvents",
      ).logGenAiAgentAutoReplyConfirmationDialogEvent(
        o("WAWebGenAiAgentLogEvents").WAWebGenAIAgentUserActionTargetEnum
          .CANCEL,
      ),
        o("WAWebModalManager").ModalManager.close());
    }
    l.default = d;
  },
  226,
);
