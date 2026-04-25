__d(
  "WAWebContactImportValidationUtils",
  [
    "$InternalEnum",
    "WALogger",
    "WAPhoneFindCC",
    "WAWebContactImportTypedError",
    "WAWebLinkDevicePhoneNumberEntryInputFormatUtils",
    "WAWebUserPrefsMeUser",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = n("$InternalEnum").Mirrored(["VALID", "INVALID"]),
      u = 50;
    function c(e) {
      var t = o(
          "WAWebLinkDevicePhoneNumberEntryInputFormatUtils",
        ).cleanPhoneNumberInputValue(e),
        n = t.countryCodeIso,
        r = t.fullRawPhoneNumber,
        a = t.phoneNumberWithoutCountryCode;
      if (n == null || a.length === 0) return null;
      var i = o("WAPhoneFindCC").findCC(r),
        l = o(
          "WAWebLinkDevicePhoneNumberEntryInputFormatUtils",
        ).isPhoneNumberValid(Number(i), a),
        s = "+" + i + " " + a;
      return { formattedPhoneNumber: s, isValid: l };
    }
    function d(t) {
      try {
        var n = t.trim();
        if (!n.startsWith("+")) {
          var r = o("WAWebUserPrefsMeUser").getMePnUserOrThrow_DO_NOT_USE(),
            a = o("WAPhoneFindCC").findCC(r.user),
            i = o("WAPhoneFindCC").findCC(n);
          if (a !== i) {
            var l = "+" + a + n,
              u = c(l);
            if (u != null && u.isValid) n = l;
            else {
              var d = "+" + n,
                m = c(d);
              m != null && m.isValid ? (n = d) : (n = l);
            }
          } else n = "+" + n;
        }
        var p = c(n);
        return p != null && p.isValid
          ? { status: s.VALID, value: p.formattedPhoneNumber }
          : {
              status: s.INVALID,
              type: o("WAWebContactImportTypedError").PhoneError.INVALID,
            };
      } catch (n) {
        return (
          o("WALogger")
            .ERROR(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  'Phone number validation exception for input "',
                  '": ',
                  "",
                ])),
              t,
              n,
            )
            .sendLogs("phone-number-validation-exception", { sampling: 1 }),
          {
            status: s.INVALID,
            type: o("WAWebContactImportTypedError").PhoneError.INVALID,
          }
        );
      }
    }
    function m(e) {
      if (e == null || typeof e != "string")
        return {
          status: s.INVALID,
          type: o("WAWebContactImportTypedError").NameError.INVALID,
        };
      var t = Array.from(e).slice(0, u).join("");
      return t.trim().length === 0
        ? {
            status: s.INVALID,
            type: o("WAWebContactImportTypedError").NameError.EMPTY,
          }
        : { status: s.VALID, value: t };
    }
    ((l.ValidationStatus = s),
      (l.validateAndFormatPhoneNumber = d),
      (l.sanitizeName = m));
  },
  98,
);
