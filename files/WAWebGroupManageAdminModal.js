__d(
  "WAWebGroupManageAdminModal",
  [
    "fbt",
    "WAWebGroupType",
    "WAWebLidMigrationUtils",
    "WAWebModalManager",
    "WAWebModifyParticipantsGroupAction",
    "WAWebSelectModal.react",
    "WAWebSelectModalFooter.react",
    "WAWebUserPrefsMeUser",
    "WAWebWid",
    "lodash",
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
        l = function (a) {
          var n = a.selectedItems,
            i = n,
            l = t.participants,
            s = l.filter(function (e) {
              return e.isAdmin;
            }),
            u = r("lodash")
              .differenceWith(i, s, function (e, t) {
                return e.id.equals(t.id);
              })
              .map(function (e) {
                return l.assertGet(e.id);
              }),
            c = r("lodash").differenceWith(s, i, function (e, t) {
              return e.id.equals(t.id);
            });
          (u.length > 0 &&
            (u.forEach(function (e) {
              e.contact.pendingAction++;
            }),
            o("WAWebModifyParticipantsGroupAction")
              .promoteParticipants(e, u)
              .finally(function () {
                u.forEach(function (e) {
                  e.contact.pendingAction--;
                });
              })),
            c.length > 0 &&
              (c.forEach(function (e) {
                e.contact.pendingAction++;
              }),
              o("WAWebModifyParticipantsGroupAction")
                .demoteParticipants(e, c)
                .finally(function () {
                  c.forEach(function (e) {
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
