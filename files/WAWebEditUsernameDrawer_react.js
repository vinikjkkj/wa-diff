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
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react"));
    function c(e) {
      var t = o("react-compiler-runtime").c(9),
        n = e.contactId,
        a = e.contactUsername,
        i = e.ref,
        l;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((l = s._(/*BTDS*/ "Change username")), (t[0] = l))
        : (l = t[0]);
      var c = l,
        d;
      t[1] !== n || t[2] !== a
        ? ((d = function () {
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
                  username: a,
                  contactId: n,
                }),
              ));
          }),
          (t[1] = n),
          (t[2] = a),
          (t[3] = d))
        : (d = t[3]);
      var m = d,
        p;
      return (
        t[4] !== n || t[5] !== a || t[6] !== m || t[7] !== i
          ? ((p = u.jsx(r("WAWebSetUsernameDrawer.react"), {
              contactId: n,
              contactUsername: a,
              ref: i,
              onBack: m,
              headerText: c,
            })),
            (t[4] = n),
            (t[5] = a),
            (t[6] = m),
            (t[7] = i),
            (t[8] = p))
          : (p = t[8]),
        p
      );
    }
    l.default = c;
  },
  226,
);
