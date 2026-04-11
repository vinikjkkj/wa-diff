__d(
  "WAWebBeyondPhoneNumberGatingUtils",
  ["WAWebABProps", "justknobx"],
  function (t, n, r, o, a, i, l) {
    function e() {
      return (
        !!o("WAWebABProps").getABPropConfigValue("remove_pn_dependencies") &&
        r("justknobx")._("1500")
      );
    }
    function s() {
      return (
        !!o("WAWebABProps").getABPropConfigValue(
          "remove_device_pn_dependencies",
        ) && r("justknobx")._("4846")
      );
    }
    ((l.removePnDependenciesEnabled = e),
      (l.removeDevicePnDependenciesEnabled = s));
  },
  98,
);
