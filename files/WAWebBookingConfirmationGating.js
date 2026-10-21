__d(
  "WAWebBookingConfirmationGating",
  ["WAWebABProps"],
  function (t, n, r, o, a, i, l) {
    function e() {
      return o("WAWebABProps").getABPropConfigValue(
        "booking_confirmation_enabled_wa_web",
      );
    }
    l.isBookingConfirmationEnabled = e;
  },
  98,
);
