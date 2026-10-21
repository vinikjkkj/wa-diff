__d(
  "WAWebContactsAndGroupsGatingUtils",
  ["WAWebABProps", "gkx"],
  function (t, n, r, o, a, i, l) {
    function e() {
      return (
        r("gkx")("27693") ||
        (r("gkx")("9092") &&
          o("WAWebABProps").getABPropConfigValue(
            "web_contacts_and_groups_enabled",
          ) === !0)
      );
    }
    l.isContactsAndGroupsEnabled = e;
  },
  98,
);
