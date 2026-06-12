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
      return !!o("WAWebABProps").getABPropConfigValue(
        "peer_message_lid_migration_outgoing",
      );
    }
    ((l.removePnDependenciesEnabled = e),
      (l.peerMessageLidMigrationOutgoingEnabled = s));
  },
  98,
);
