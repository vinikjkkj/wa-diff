__d(
  "WAWebContactsAndGroupsSelectionActions",
  [
    "fbt",
    "WAWebContactsAndGroupsContacts",
    "WAWebContactsAndGroupsListActions",
    "WAWebModalManager",
    "WAWebReachoutTimelockRestrictedModalLoadable",
    "WAWebReachoutTimelockUtils",
    "WAWebToast.react",
    "WAWebToastManager",
    "WAWebWidFactory",
    "compactMap",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react"));
    function c(e) {
      return r("compactMap")(
        e,
        o("WAWebContactsAndGroupsContacts").getContactChat,
      );
    }
    function d(e) {
      var t;
      return (
        ((t = e.groupMetadata) == null ? void 0 : t.participants.canAdd()) ===
        !0
      );
    }
    function m(e, t) {
      var n,
        r = (n = e.groupMetadata) == null ? void 0 : n.participants;
      return t.filter(function (e) {
        return (
          (r == null
            ? void 0
            : r.userIsMember(o("WAWebWidFactory").asUserWidOrThrow(e.id))) !==
          !0
        );
      });
    }
    function p() {
      return o("WAWebReachoutTimelockUtils").isUserReachoutTimelocked()
        ? (o("WAWebModalManager").ModalManager.open(
            u.jsx(
              o("WAWebReachoutTimelockRestrictedModalLoadable")
                .ReachoutTimelockRestrictedModalLoadable,
              {},
            ),
          ),
          !1)
        : !0;
    }
    function _(e) {
      var t = c(e);
      if (t.length !== 0) {
        o(
          "WAWebContactsAndGroupsListActions",
        ).openListsEditorForChatsFromContactsAndGroups(t);
        var n = e.length - t.length;
        n > 0 &&
          o("WAWebToastManager").ToastManager.open(
            u.jsx(o("WAWebToast.react").Toast, {
              msg: s._(
                /*BTDS*/ '_j{"*":"{count} contacts without a chat can\'t be added to a list","_1":"1 contact without a chat can\'t be added to a list"}',
                [s._plural(n, "count")],
              ),
            }),
          );
      }
    }
    ((l.getSelectedChats = c),
      (l.canAddMembers = d),
      (l.getContactsToAdd = m),
      (l.canCreateGroupFromContactsAndGroups = p),
      (l.addContactsToListFromContactsAndGroups = _));
  },
  226,
);
