__d(
  "WAWebReachoutTimelockRestrictedComposeBar.react",
  [
    "fbt",
    "WAWebFlex.react",
    "WAWebModalManager",
    "WAWebReachoutTimelockRestrictedModalLoadable",
    "WAWebReachoutTimelockUtils",
    "WAWebText.react",
    "WAWebUserPrefsIndexedDBStorage",
    "WAWebUserPrefsTypes",
    "WDSText.react",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u = e || (e = o("react")),
      c = { container: { width: "xh8yej3", $$css: !0 } };
    function d(e, t) {
      switch (e) {
        case o("WAWebUserPrefsTypes").ReachoutTimelockEnforcementType
          .WEB_COMPANION_ONLY:
          return s._(
            /*BTDS*/ "Your WhatsApp Web is restricted. You can't start new chats right now. {=m2}",
            [
              s._implicitParam(
                "=m2",
                u.jsx(o("WAWebText.react").WAWebClickableText, {
                  onClick: t,
                  color: "primary",
                  children: s._(/*BTDS*/ "{=m1}", [
                    s._implicitParam(
                      "=m1",
                      u.jsx(r("WDSText.react"), {
                        type: "Body2Emphasized",
                        colorName: "contentActionEmphasized",
                        children: s._(/*BTDS*/ "Show details"),
                      }),
                    ),
                  ]),
                }),
              ),
            ],
          );
        case o("WAWebUserPrefsTypes").ReachoutTimelockEnforcementType
          .RESTRICT_ALL_COMPANIONS:
          return s._(
            /*BTDS*/ "Your account on linked devices is restricted. You can't start new chats right now. {=m2}",
            [
              s._implicitParam(
                "=m2",
                u.jsx(o("WAWebText.react").WAWebClickableText, {
                  onClick: t,
                  color: "primary",
                  children: s._(/*BTDS*/ "{=m1}", [
                    s._implicitParam(
                      "=m1",
                      u.jsx(r("WDSText.react"), {
                        type: "Body2Emphasized",
                        colorName: "contentActionEmphasized",
                        children: s._(/*BTDS*/ "Show details"),
                      }),
                    ),
                  ]),
                }),
              ),
            ],
          );
        default:
          return s._(
            /*BTDS*/ "Your account is restricted. You can't start new chats right now. {=m2}",
            [
              s._implicitParam(
                "=m2",
                u.jsx(o("WAWebText.react").WAWebClickableText, {
                  onClick: t,
                  color: "primary",
                  children: s._(/*BTDS*/ "{=m1}", [
                    s._implicitParam(
                      "=m1",
                      u.jsx(r("WDSText.react"), {
                        type: "Body2Emphasized",
                        colorName: "contentActionEmphasized",
                        children: s._(/*BTDS*/ "Show details"),
                      }),
                    ),
                  ]),
                }),
              ),
            ],
          );
      }
    }
    function m() {
      var e = function () {
          o("WAWebModalManager").ModalManager.open(
            u.jsx(
              o("WAWebReachoutTimelockRestrictedModalLoadable")
                .ReachoutTimelockRestrictedModalLoadable,
              {},
            ),
          );
        },
        t = o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.get(
          o("WAWebReachoutTimelockUtils").REACHOUT_TIMELOCK_IDB_KEY,
        );
      return t == null
        ? null
        : u.jsx(o("WAWebFlex.react").FlexRow, {
            testid: void 0,
            justify: "start",
            align: "center",
            xstyle: c.container,
            children: u.jsx(r("WDSText.react"), {
              type: "Body2",
              colorName: "contentDeemphasized",
              children: d(t.enforcement_type, e),
            }),
          });
    }
    ((m.displayName = m.name + " [from " + i.id + "]"),
      (l.ReachoutTimelockComposeBar = m));
  },
  226,
);
