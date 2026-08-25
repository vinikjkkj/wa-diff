__d(
  "WAWebGroupManageAdminModal",
  [
    "fbt",
    "WAArrayDifferenceWith",
    "WAWebGroupMetadataGetters",
    "WAWebGroupType",
    "WAWebLidMigrationUtils",
    "WAWebModalManager",
    "WAWebModifyParticipantsGroupAction",
    "WAWebSelectModal.react",
    "WAWebSelectModalFooter.react",
    "WAWebStateUtils",
    "WAWebUserPrefsMeUser",
    "WAWebWid",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react"));
    function c(e, t) {
      var n = o("WAWebStateUtils").unproxy(t),
        a = function () {
          return n.participants
            .filter(function (e) {
              return e.isAdmin;
            })
            .map(function (e) {
              return e.contact;
            });
        },
        i = n.participants.map(function (e) {
          return e.contact;
        }),
        l = function (t) {
          var e = r("WAWebWid").equals.apply(
              r("WAWebWid"),
              o("WAWebLidMigrationUtils").toCommonAddressingMode(t.id, n.owner),
            ),
            a =
              o("WAWebGroupMetadataGetters").getGroupType(n) ===
              o("WAWebGroupType").GroupType.COMMUNITY;
          return e || (o("WAWebUserPrefsMeUser").isMeAccount(t.id) && !a);
        },
        c = function (r) {
          var t = r.selectedItems,
            a = t,
            i = n.participants,
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
          onConfirm: c,
          getInitialItems: a,
          isDisabled: l,
          isSelected: l,
          contacts: i,
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
