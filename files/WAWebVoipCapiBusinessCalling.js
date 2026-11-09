__d(
  "WAWebVoipCapiBusinessCalling",
  [
    "WAWebBusinessProfileCollection",
    "WAWebL10NCountryCodes",
    "WAWebUserPrefsMeUser",
    "WAWebVoipGatingUtils",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = 4;
    function s(e) {
      return (
        o("WAWebVoipGatingUtils").isCapiCallingEntryPointEnabled() && d(c(e))
      );
    }
    function u(e) {
      var t = c(e);
      return (
        o("WAWebVoipGatingUtils").isCapiCallingEntryPointEnabled() &&
        (t == null ? void 0 : t.isVideoCallingEnabled) === !0 &&
        d(t)
      );
    }
    function c(e) {
      var t;
      return (t = o(
        "WAWebBusinessProfileCollection",
      ).BusinessProfileCollection.get(e.id)) == null ||
        (t = t.profileOptions) == null
        ? void 0
        : t.businessCalling;
    }
    function d(t) {
      return (
        t != null &&
        t.enabled &&
        !p(t.callIconVisibility, e) &&
        m(t.limitToUserCountries)
      );
    }
    function m(e) {
      var t;
      if (e == null) return !0;
      var n = o("WAWebL10NCountryCodes").getCountryShortcodeByPhone(
        (t = o("WAWebUserPrefsMeUser").getMaybeMePnUser()) == null
          ? void 0
          : t.user,
      );
      return n !== "" && e.includes(n);
    }
    function p(e, t) {
      return Math.floor(e / t) % 2 === 1;
    }
    ((l.canCallCapiBusiness = s), (l.canVideoCallCapiBusiness = u));
  },
  98,
);
