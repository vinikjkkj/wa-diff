__d(
  "WAWebBlockedParticipantWarning",
  [
    "Promise",
    "WAWebABProps",
    "WAWebBlockedParticipantWarningAction",
    "WAWebBlockedParticipantWarningDialogLoadable",
    "WAWebChatGetters",
    "WAWebExitGroupAction",
    "WAWebModalManager",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = s || (s = o("react"));
    function c(t) {
      if (
        !o("WAWebChatGetters").getIsGroup(t) ||
        !o("WAWebABProps").getABPropConfigValue(
          "wa_web_blocked_participant_chat_warning",
        )
      )
        return (e || (e = n("Promise"))).resolve(!1);
      var r = o(
        "WAWebBlockedParticipantWarningAction",
      ).getBlockedParticipantsInGroup(t);
      return r.length === 0 ||
        o("WAWebBlockedParticipantWarningAction").hasAcknowledgedWarning(
          t.id,
          r,
        )
        ? (e || (e = n("Promise"))).resolve(!1)
        : new (e || (e = n("Promise")))(function (e) {
            o("WAWebModalManager").ModalManager.open(
              u.jsx(
                o("WAWebBlockedParticipantWarningDialogLoadable")
                  .BlockedParticipantWarningDialogLoadable,
                {
                  blockedContacts: r,
                  onViewChat: function () {
                    (o(
                      "WAWebBlockedParticipantWarningAction",
                    ).markWarningAcknowledged(t.id, r),
                      o("WAWebModalManager").closeModalManager(),
                      e(!1));
                  },
                  onExitGroup: t.isReadOnly
                    ? null
                    : function () {
                        (o("WAWebModalManager").closeModalManager(),
                          o("WAWebExitGroupAction").sendExitGroup(t),
                          e(!0));
                      },
                  onClose: function () {
                    (o("WAWebModalManager").closeModalManager(), e(!0));
                  },
                },
              ),
            );
          });
    }
    l.default = c;
  },
  98,
);
