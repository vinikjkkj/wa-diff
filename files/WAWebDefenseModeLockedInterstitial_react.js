__d(
  "WAWebDefenseModeLockedInterstitial.react",
  [
    "fbt",
    "WAWebConfirmPopup.react",
    "WAWebDefenseModeClickWamEvent",
    "WAWebDefenseModeUtils",
    "WAWebFbtCommon",
    "WAWebModalManager",
    "WAWebWamEnumDefenseModeClickDesiredState",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react")),
      c = {
        all: o("WAWebWamEnumDefenseModeClickDesiredState")
          .DEFENSE_MODE_CLICK_DESIRED_STATE.EVERYONE,
        contacts: o("WAWebWamEnumDefenseModeClickDesiredState")
          .DEFENSE_MODE_CLICK_DESIRED_STATE.MY_CONTACTS,
        contacts_blacklist: o("WAWebWamEnumDefenseModeClickDesiredState")
          .DEFENSE_MODE_CLICK_DESIRED_STATE.MY_CONTACTS_EXCEPT,
        none: o("WAWebWamEnumDefenseModeClickDesiredState")
          .DEFENSE_MODE_CLICK_DESIRED_STATE.NOBODY,
        known: o("WAWebWamEnumDefenseModeClickDesiredState")
          .DEFENSE_MODE_CLICK_DESIRED_STATE.KNOWN,
        off: o("WAWebWamEnumDefenseModeClickDesiredState")
          .DEFENSE_MODE_CLICK_DESIRED_STATE.OFF,
        on: o("WAWebWamEnumDefenseModeClickDesiredState")
          .DEFENSE_MODE_CLICK_DESIRED_STATE.ON,
        on_standard: o("WAWebWamEnumDefenseModeClickDesiredState")
          .DEFENSE_MODE_CLICK_DESIRED_STATE.ON_STANDARD,
      };
    function d() {
      return u.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
        testid: void 0,
        title: s._(/*BTDS*/ "Strict account settings is on"),
        onOK: p,
        okText: r("WAWebFbtCommon")("OK"),
        tsNavigationData: {
          surface: "unknown",
          viewName: "defense-mode-locked",
        },
        children: s._(
          /*BTDS*/ "To change these settings, you must turn strict account settings off on your primary device. {learnMoreLink}",
          [
            s._param(
              "learnMoreLink",
              u.jsx(
                o("WAWebDefenseModeUtils")
                  .WAWebDefenseModeLearnMoreClickableLink,
                {},
              ),
            ),
          ],
        ),
      });
    }
    d.displayName = d.name + " [from " + i.id + "]";
    function m(e, t) {
      (new (o("WAWebDefenseModeClickWamEvent").DefenseModeClickWamEvent)({
        controlName: e,
        defenseModeClickAccepted: !1,
        desiredState: c[t],
      }).commit(),
        o("WAWebModalManager").ModalManager.open(u.jsx(d, {})));
    }
    function p() {
      o("WAWebModalManager").ModalManager.close();
    }
    ((l.WAWebDefenseModeLockedInterstitial = d),
      (l.openDefenseModeLockedInterstitialGlobal = m));
  },
  226,
);
