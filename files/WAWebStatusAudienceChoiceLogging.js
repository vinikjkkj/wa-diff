__d(
  "WAWebStatusAudienceChoiceLogging",
  [
    "WAWebODS",
    "WAWebPathfinderHeldBackPermit",
    "WAWebPathfinderHeldBackSurface",
    "WAWebPathfinderLogger",
  ],
  function (t, n, r, o, a, i, l) {
    var e = {
        my_contacts: "BottomSheetStatusPrivacy_MyContacts",
        my_contacts_except: "BottomSheetStatusPrivacy_MyContactsExcept",
        only_share_with: "BottomSheetStatusPrivacy_OnlyShareWith",
      },
      s = "status-privacy-settings-drawer",
      u = "web.pathfinder.status_audience_choice_failure";
    function c(e, t, n) {
      var r = d(e, t);
      if ((n(), r != null))
        try {
          var a = o("WAWebPathfinderHeldBackPermit").redeemHeldBackPermit(r);
          a != null && o("WAWebPathfinderLogger").emitPathfinderEvent(a);
        } catch (e) {
          m();
        }
    }
    function d(t, n) {
      try {
        return (n == null ? void 0 : n.closest('[data-testid="' + s + '"]')) ==
          null
          ? null
          : o("WAWebPathfinderHeldBackPermit").issueHeldBackPermit(
              o("WAWebPathfinderHeldBackSurface").HeldBackSurface
                .STATUS_AUDIENCE_SELECTOR,
              e[t],
              n,
            );
      } catch (e) {
        return (m(), null);
      }
    }
    function m() {
      try {
        r("WAWebODS").incr("web.pathfinder.status_audience_choice_failure");
      } catch (e) {}
    }
    ((l.STATUS_AUDIENCE_CHOICE_FAILURE_ODS_KEY = u),
      (l.logStatusAudienceChoice = c));
  },
  98,
);
