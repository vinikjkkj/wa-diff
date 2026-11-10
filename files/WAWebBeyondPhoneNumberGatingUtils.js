__d(
  "WAWebBeyondPhoneNumberGatingUtils",
  ["WAWebABProps", "WAWebInternalAccount", "WAWebUserPrefsMeUser", "justknobx"],
  function (t, n, r, o, a, i, l) {
    function e() {
      return o("WAWebInternalAccount").isInternalAccount() || s() || u();
    }
    function s() {
      return (
        o("WAWebUserPrefsMeUser").getMaybeMeDevicePn() == null &&
        o("WAWebUserPrefsMeUser").getMaybeMeDeviceLid(!1) != null
      );
    }
    function u() {
      return (
        o("WAWebABProps").getABPropConfigValue("remove_pn_dependencies") &&
        r("justknobx")._("1500")
      );
    }
    l.removePnDependenciesEnabled = e;
  },
  98,
);
