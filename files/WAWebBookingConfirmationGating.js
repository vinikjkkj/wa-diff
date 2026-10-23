__d(
  "WAWebBookingConfirmationGating",
  ["WAWebABProps"],
  function (t, n, r, o, a, i, l) {
    function e() {
      return o("WAWebABProps").getABPropConfigValue(
        "booking_confirmation_enabled_wa_web",
      );
    }
    function s() {
      return o("WAWebABProps").getABPropConfigValue(
        "utility_appointment_logging_enabled",
      );
    }
    ((l.isBookingConfirmationEnabled = e),
      (l.isBookingConfirmationLoggingEnabled = s));
  },
  98,
);
