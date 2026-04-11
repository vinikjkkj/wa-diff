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
    function u() {
      return o("WAWebABProps").getABPropConfigValue(
        "events_m3_cover_image_send",
      );
    }
    function c() {
      return o("WAWebABProps").getABPropConfigValue(
        "events_m3_cover_image_receive",
      );
    }
    function d() {
      return o("WAWebABProps").getABPropConfigValue(
        "events_m3_pin_customization_send",
      );
    }
    ((l.getEventsNameLengthLimit = e), (l.getEventsDescriptionLengthLimit = s));
  },
  98,
);
