__d(
  "WAWebPhoneNumberValidationUtils",
  [
    "WAIsoToCc",
    "WAWebLinkDevicePhoneNumberEntryInputFormatUtils",
    "isStringNullOrEmpty",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e, t) {
      var n = r("isStringNullOrEmpty")(e) ? null : r("WAIsoToCc")[e];
      return n == null ||
        t == null ||
        !o(
          "WAWebLinkDevicePhoneNumberEntryInputFormatUtils",
        ).isPhoneNumberValid(n, t)
        ? null
        : "" + n + t;
    }
    l.getValidPhoneNumber = e;
  },
  98,
);
