__d(
  "WAWebContactsAndGroupsMemberActions",
  [
    "WAWebGroupMemberListLogger",
    "WAWebGroupParticipantsFlow.react",
    "WAWebModalManager",
    "WAWebOpenAddParticipantModalFlow",
    "WAWebReachoutTimelockRestrictedModalLoadable",
    "WAWebReachoutTimelockUtils",
    "WAWebWamEnumAddMembersEntrypointType",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react"));
    function u(e) {
      var t;
      if (o("WAWebReachoutTimelockUtils").isUserReachoutTimelocked()) {
        o("WAWebModalManager").ModalManager.open(
          s.jsx(
            o("WAWebReachoutTimelockRestrictedModalLoadable")
              .ReachoutTimelockRestrictedModalLoadable,
            {},
          ),
        );
        return;
      }
      var n = e.groupMetadata;
      n != null &&
        o("WAWebOpenAddParticipantModalFlow").openAddParticipantModalFlow({
          chat: e,
          communityName:
            (t = n.getParentGroupChat()) == null ? void 0 : t.formattedTitle,
          entryPoint: o("WAWebWamEnumAddMembersEntrypointType")
            .ADD_MEMBERS_ENTRYPOINT_TYPE.GROUP_ADD_MEMBER_ENTRY_POINT_OTHER,
          groupMetadata: n,
          reopenAddGroupFlowCallback: function () {
            return u(e);
          },
        });
    }
    function c(e, t, n, r) {
      (t ===
        o("WAWebGroupParticipantsFlow.react").ParticipantsFlowStep
          .Participants &&
        o("WAWebGroupMemberListLogger").logGroupParticipantsFlowOpen(
          e,
          "contacts_and_groups",
        ),
        o("WAWebModalManager").ModalManager.open(
          s.jsx(o("WAWebGroupParticipantsFlow.react").GroupParticipantsFlow, {
            chatId: e,
            initialStep: t,
            onContactInfo: n,
            onVerification: r,
          }),
          { transition: "modal-flow" },
        ));
    }
    ((l.addMembersFromContactsAndGroups = u),
      (l.searchMembersFromContactsAndGroups = c));
  },
  98,
);
