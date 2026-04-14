__d(
  "WAWebEditUsernameDrawer.react",
  [
    "fbt",
    "WAWebDrawerManager",
    "WAWebSetUsernameDrawer.react",
    "WAWebUsernameCreationActionLogger",
    "WAWebUsernameManagementDrawer.react",
    "WAWebWamEnumUsernameCreationCurrentScreen",
    "WAWebWamEnumUsernameCreationFlowType",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react"));
    function c(e) {
      var t = e.contactId,
        n = e.contactUsername,
        a = e.ref,
        i = s._(/*BTDS*/ "Change username"),
        l = function () {
          (o(
            "WAWebUsernameCreationActionLogger",
          ).UsernameCreationActionLogger.logBackClicked(
            o("WAWebWamEnumUsernameCreationCurrentScreen")
              .USERNAME_CREATION_CURRENT_SCREEN.USERNAME_EDIT,
            o("WAWebWamEnumUsernameCreationFlowType")
              .USERNAME_CREATION_FLOW_TYPE.MANAGEMENT,
          ),
            o("WAWebDrawerManager").DrawerManager.openDrawerLeft(
              u.jsx(r("WAWebUsernameManagementDrawer.react"), {
                username: n,
                contactId: t,
              }),
            ));
        };
      return u.jsx(r("WAWebSetUsernameDrawer.react"), {
        contactId: t,
        contactUsername: n,
        ref: a,
        onBack: l,
        headerText: i,
      });
    }
    ((c.displayName = c.name + " [from " + i.id + "]"), (l.default = c));
  },
  226,
);
