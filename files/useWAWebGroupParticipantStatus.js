__d(
  "useWAWebGroupParticipantStatus",
  ["useWAWebForceUpdate", "useWAWebListener", "useWAWebModelValues"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      "use no forget";
      var t = o("useWAWebModelValues").useOptionalModelValues(e, [
          "membershipApprovalMode",
          "memberAddMode",
          "participants",
        ]),
        n = o("useWAWebForceUpdate").useForceUpdateDONOTUSE();
      return (
        o("useWAWebListener").useListener(
          t == null ? void 0 : t.participants,
          "bulk_add bulk_remove reset change:isAdmin",
          function () {
            n();
          },
        ),
        [
          !!(t != null && t.participants.canAdd()),
          !!(t != null && t.isNonAdminAndACAGJREnabled()),
        ]
      );
    }
    l.default = e;
  },
  98,
);
