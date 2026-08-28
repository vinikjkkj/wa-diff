__d(
  "WAWebEventsGatingUtils",
  ["WAWebABProps"],
  function (t, n, r, o, a, i, l) {
    function e() {
      return o("WAWebABProps").getABPropConfigValue("event_name_length_limit");
    }
    function s() {
      return o("WAWebABProps").getABPropConfigValue(
        "event_description_length_limit",
      );
    }
    ((l.getEventsNameLengthLimit = e), (l.getEventsDescriptionLengthLimit = s));
  },
  98,
);
