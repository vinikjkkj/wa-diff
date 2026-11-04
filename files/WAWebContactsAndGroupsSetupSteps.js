__d(
  "WAWebContactsAndGroupsSetupSteps",
  [
    "fbt",
    "WAWebContactsAndGroupsMemberActions",
    "WAWebInfoFlowStep",
    "WDSIconIcEdit.react",
    "WDSIconIcLink.react",
    "WDSIconIcPersonAdd.react",
    "WDSIconIcPhotoCamera.react",
  ],
  function (t, n, r, o, a, i, l, s) {
    function e(e, t) {
      var n = function () {
        return t({
          chat: e,
          contact: null,
          step: o("WAWebInfoFlowStep").InfoFlowStep.GroupInfo,
        });
      };
      return [
        {
          actions: [
            {
              Icon: r("WDSIconIcPhotoCamera.react"),
              key: "photo",
              label: s._(/*BTDS*/ "Add group icon"),
              onPress: n,
            },
          ],
          key: "photo",
          title: s._(/*BTDS*/ "Add a group icon"),
          why: s._(/*BTDS*/ "Shows next to the group's name in chat lists"),
        },
        {
          actions: [
            {
              Icon: r("WDSIconIcEdit.react"),
              key: "description",
              label: s._(/*BTDS*/ "Add group description"),
              onPress: n,
            },
          ],
          key: "description",
          title: s._(/*BTDS*/ "Add a description"),
          why: s._(
            /*BTDS*/ "Tells new members what it's for and how to join in",
          ),
        },
        {
          actions: [
            {
              Icon: r("WDSIconIcPersonAdd.react"),
              key: "add-members",
              label: s._(/*BTDS*/ "Add members"),
              onPress: function () {
                return o(
                  "WAWebContactsAndGroupsMemberActions",
                ).addMembersFromContactsAndGroups(e);
              },
            },
            {
              Icon: r("WDSIconIcLink.react"),
              key: "invite-link",
              label: s._(/*BTDS*/ "Invite to group via link"),
              onPress: function () {
                return t({
                  chat: e,
                  contact: null,
                  step: o("WAWebInfoFlowStep").InfoFlowStep.GroupInviteLink,
                });
              },
            },
          ],
          key: "invite",
          title: s._(/*BTDS*/ "Invite people"),
          why: s._(/*BTDS*/ "Add people from your contacts or share a link"),
        },
      ];
    }
    l.getSetupSteps = e;
  },
  226,
);
