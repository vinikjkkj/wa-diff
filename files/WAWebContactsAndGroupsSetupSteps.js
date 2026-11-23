__d(
  "WAWebContactsAndGroupsSetupSteps",
  [
    "fbt",
    "WALogger",
    "WAWebContactsAndGroupsMemberActions",
    "WAWebGetMaybeChatById",
    "WAWebInfoFlowStep",
    "WDSIconIcEdit.react",
    "WDSIconIcLink.react",
    "WDSIconIcPersonAdd.react",
    "WDSIconIcPhotoCamera.react",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e, u;
    function c(t, n) {
      var a = function (a) {
          var r = o("WAWebGetMaybeChatById").getMaybeChatById(t);
          if (r == null) {
            o("WALogger").WARN(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "[contacts-and-groups-setup-steps] open group info skipped, chat left the collection",
                ])),
            );
            return;
          }
          n({ chat: r, contact: null, step: a });
        },
        i = function () {
          return a(o("WAWebInfoFlowStep").InfoFlowStep.GroupInfo);
        };
      return [
        {
          actions: [
            {
              Icon: r("WDSIconIcPhotoCamera.react"),
              key: "photo",
              label: s._(/*BTDS*/ ""),
              onPress: i,
            },
          ],
          key: "photo",
          title: s._(/*BTDS*/ ""),
          why: s._(/*BTDS*/ ""),
        },
        {
          actions: [
            {
              Icon: r("WDSIconIcEdit.react"),
              key: "description",
              label: s._(/*BTDS*/ ""),
              onPress: i,
            },
          ],
          key: "description",
          title: s._(/*BTDS*/ ""),
          why: s._(/*BTDS*/ ""),
        },
        {
          actions: [
            {
              Icon: r("WDSIconIcPersonAdd.react"),
              key: "add-members",
              label: s._(/*BTDS*/ ""),
              onPress: function () {
                var e = o("WAWebGetMaybeChatById").getMaybeChatById(t);
                if (e == null) {
                  o("WALogger").WARN(
                    u ||
                      (u = babelHelpers.taggedTemplateLiteralLoose([
                        "[contacts-and-groups-setup-steps] add members skipped, chat left the collection",
                      ])),
                  );
                  return;
                }
                o(
                  "WAWebContactsAndGroupsMemberActions",
                ).addMembersFromContactsAndGroups(e);
              },
            },
            {
              Icon: r("WDSIconIcLink.react"),
              key: "invite-link",
              label: s._(/*BTDS*/ ""),
              onPress: function () {
                return a(o("WAWebInfoFlowStep").InfoFlowStep.GroupInviteLink);
              },
            },
          ],
          key: "invite",
          title: s._(/*BTDS*/ ""),
          why: s._(/*BTDS*/ ""),
        },
      ];
    }
    l.getSetupSteps = c;
  },
  226,
);
