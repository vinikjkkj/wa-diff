__d(
  "WASmaxOutBizMsgUserFeedbackUpdatePreferenceRequest",
  ["WASmaxAttrs", "WASmaxJsx", "WAWap"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t,
        n = e.userFeedbackAction,
        r = e.userFeedbackJid,
        a = e.userFeedbackFeedback,
        i = o("WASmaxJsx").smax(
          "iq",
          {
            xmlns: "w:biz:msg_feedback",
            to: (t = o("WAWap")).S_WHATSAPP_NET,
            id: t.generateId(),
            type: "set",
          },
          o("WASmaxJsx").smax("user_feedback", {
            action: t.CUSTOM_STRING(n),
            jid: t.USER_JID(r),
            feedback: o("WASmaxAttrs").OPTIONAL(t.CUSTOM_STRING, a),
          }),
        );
      return i;
    }
    l.makeUpdatePreferenceRequest = e;
  },
  98,
);
