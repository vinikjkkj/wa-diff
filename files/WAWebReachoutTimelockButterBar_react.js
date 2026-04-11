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
    "react-compiler-runtime",
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
      var e = o("react-compiler-runtime").c(5),
        t,
        n;
      if (e[0] === Symbol.for("react.memo_cache_sentinel")) {
        n = Symbol.for("react.early_return_sentinel");
        e: {
          var a = o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.get(
            o("WAWebReachoutTimelockUtils").REACHOUT_TIMELOCK_IDB_KEY,
          );
          if (a == null) {
            n = null;
            break e;
          }
          t = c(a.enforcement_type);
        }
        ((e[0] = t), (e[1] = n));
      } else ((t = e[0]), (n = e[1]));
      if (n !== Symbol.for("react.early_return_sentinel")) return n;
      var i = t,
        l;
      e[2] === Symbol.for("react.memo_cache_sentinel")
        ? ((l = s._(/*BTDS*/ "You can't start new chats right now.")),
          (e[2] = l))
        : (l = e[2]);
      var d = l,
        p;
      e[3] === Symbol.for("react.memo_cache_sentinel")
        ? ((p = s._(/*BTDS*/ "Show details")), (e[3] = p))
        : (p = e[3]);
      var _ = p,
        f = m,
        g;
      return (
        e[4] === Symbol.for("react.memo_cache_sentinel")
          ? ((g = u.jsx("div", {
              className: "x1380le5 xefnzgg x1uvdrpn x14mko6t",
              children: u.jsx(r("WDSBanner.react"), {
                type: "warning",
                title: i,
                body: d,
                actionText: _,
                onAction: f,
                testid: void 0,
              }),
            })),
            (e[4] = g))
          : (g = e[4]),
        g
      );
    }
    function m() {
      o("WAWebModalManager").ModalManager.open(
        u.jsx(
          o("WAWebReachoutTimelockRestrictedModalLoadable")
            .ReachoutTimelockRestrictedModalLoadable,
          {},
        ),
      );
    }
    l.ReachoutTimelockButterBar = d;
  },
  226,
);
