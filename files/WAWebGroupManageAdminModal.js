__d(
  "WAWebGroupManageAdminModal",
  [
    "fbt",
    "WAArrayDifferenceWith",
    "WAWebGroupType",
    "WAWebLidMigrationUtils",
    "WAWebModalManager",
    "WAWebModifyParticipantsGroupAction",
    "WAWebSelectModal.react",
    "WAWebSelectModalFooter.react",
    "WAWebUserPrefsMeUser",
    "WAWebWid",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react"));
    function c(e, t) {
      var n = function () {
          return t.participants
            .filter(function (e) {
              return e.isAdmin;
            })
            .map(function (e) {
              return e.contact;
            });
        },
        a = t.participants.map(function (e) {
          return e.contact;
        }),
        i = function (n) {
          var e = r("WAWebWid").equals.apply(
              r("WAWebWid"),
              o("WAWebLidMigrationUtils").toCommonAddressingMode(n.id, t.owner),
            ),
            a = t.groupType === o("WAWebGroupType").GroupType.COMMUNITY;
          return e || (o("WAWebUserPrefsMeUser").isMeAccount(n.id) && !a);
        },
        l = function (r) {
          var n = r.selectedItems,
            a = n,
            i = t.participants,
            l = i.filter(function (e) {
              return e.isAdmin;
            }),
            s = o("WAArrayDifferenceWith")
              .differenceWith(a, l, function (e, t) {
                return e.id.equals(t.id);
              })
              .map(function (e) {
                return i.assertGet(e.id);
              }),
            u = o("WAArrayDifferenceWith").differenceWith(
              l,
              a,
              function (e, t) {
                return e.id.equals(t.id);
              },
            );
          (s.length > 0 &&
            (s.forEach(function (e) {
              e.contact.pendingAction++;
            }),
            o("WAWebModifyParticipantsGroupAction")
              .promoteParticipants(e, s)
              .finally(function () {
                s.forEach(function (e) {
                  e.contact.pendingAction--;
                });
              })),
            u.length > 0 &&
              (u.forEach(function (e) {
                e.contact.pendingAction++;
              }),
              o("WAWebModifyParticipantsGroupAction")
                .demoteParticipants(e, u)
                .finally(function () {
                  u.forEach(function (e) {
                    e.contact.pendingAction--;
                  });
                })),
            o("WAWebModalManager").ModalManager.close());
        };
      o("WAWebModalManager").ModalManager.open(
        u.jsx(o("WAWebSelectModal.react").SelectModal, {
          onConfirm: l,
          getInitialItems: n,
          isDisabled: i,
          isSelected: i,
          contacts: a,
          title: s._(/*BTDS*/ "Edit group admins"),
          useShortName: !0,
          listType: o("WAWebSelectModal.react").ListType.ParticipantManageModal,
          singleSelectionFooterType: o("WAWebSelectModalFooter.react")
            .FooterType.CONFIRM,
          multipleSelectionFooterType: o("WAWebSelectModalFooter.react")
            .FooterType.CONFIRM,
          shouldShowSelectionSummary: !1,
          allowUnknownContactSearch: !1,
          tsNavigationData: {
            surface: "unknown",
            viewName: "manage-group-admins",
          },
        }),
      );
    }
    l.openManageAdminModal = c;
  },
  226,
);
