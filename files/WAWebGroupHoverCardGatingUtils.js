__d(
  "WAWebGroupHoverCardGatingUtils",
  ["WAWebABProps"],
  function (t, n, r, o, a, i, l) {
    function e() {
      return (
        o("WAWebABProps").getABPropConfigValue(
          "web_group_hover_card_variant",
        ) >= 1
      );
    }
    l.isGroupHoverCardEnabled = e;
  },
  98,
);
