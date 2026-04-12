__d(
  "WAWebReachoutTimelockButterBar.react",
  [
    "fbt",
    "WAWebModalManager",
    "WAWebReachoutTimelockRestrictedModalLoadable",
    "WAWebReachoutTimelockUtils",
    "WAWebUserPrefsIndexedDBStorage",
    "WAWebUserPrefsTypes",
    "WDSBanner.react",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u = e || (e = o("react"));
    function c(e) {
      switch (e) {
        case o("WAWebUserPrefsTypes").ReachoutTimelockEnforcementType
          .WEB_COMPANION_ONLY:
          return s._(/*BTDS*/ "Your WhatsApp Web is restricted");
        case o("WAWebUserPrefsTypes").ReachoutTimelockEnforcementType
          .RESTRICT_ALL_COMPANIONS:
          return s._(
            /*BTDS*/ "Your account on linked devices is restricted right now",
          );
        default:
          return s._(/*BTDS*/ "Your account is restricted");
      }
    }
    function d() {
      var e = o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.get(
        o("WAWebReachoutTimelockUtils").REACHOUT_TIMELOCK_IDB_KEY,
      );
      if (e == null) return null;
      var t = c(e.enforcement_type),
        n = s._(/*BTDS*/ "You can't start new chats right now."),
        a = s._(/*BTDS*/ "Show details"),
        i = function () {
          o("WAWebModalManager").ModalManager.open(
            u.jsx(
              o("WAWebReachoutTimelockRestrictedModalLoadable")
                .ReachoutTimelockRestrictedModalLoadable,
              {},
            ),
          );
        };
      return u.jsx("div", {
        className: "x1380le5 xefnzgg x1uvdrpn x14mko6t",
        children: u.jsx(r("WDSBanner.react"), {
          type: "warning",
          title: t,
          body: n,
          actionText: a,
          onAction: i,
          testid: void 0,
        }),
      });
    }
    ((d.displayName = d.name + " [from " + i.id + "]"),
      (l.ReachoutTimelockButterBar = d));
  },
  226,
);
