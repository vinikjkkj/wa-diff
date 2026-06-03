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
    l.removePnDependenciesEnabled = e;
  },
  98,
);
