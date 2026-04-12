__d(
  "WAWebContactPhoneNumberFields.react",
  [
    "fbt",
    "$InternalEnum",
    "WAWebContactLogging",
    "WAWebContactPhoneNumberField.react",
    "WAWebCountriesUtils",
    "WAWebCountrySelectField.react",
    "WAWebFlex.react",
    "WAWebText.react",
    "WAWebUISpacing",
    "WAWebUnstyledButton.react",
    "react",
    "useWAWebCountries",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react")),
      c = n("$InternalEnum").Mirrored([
        "Registered",
        "Unregistered",
        "Invalid",
        "Duplicate",
        "IsCustomer",
      ]),
      d = "contact-phone-number-fields-error";
    function m(e) {
      var t = e.countryCode,
        n = e.numberWithoutPrefix,
        a = e.onChange,
        i = e.onViewDuplicateContact,
        l = e.origin,
        m = e.status,
        p = o("useWAWebCountries").useCountries({
          filterType: o("WAWebCountriesUtils").COUNTRY_FILTER_TYPE
            .WHATSAPP_REGISTRATION,
        }),
        _ = p.error,
        f = p.value,
        g = m != null && m !== c.Registered;
      if (f == null || _ != null) return null;
      var h = function (t) {
          y(t, n);
        },
        y = function (n, r) {
          a(n != null ? n : t, r);
        },
        C = u.jsx(r("WAWebUnstyledButton.react"), {
          onClick: i,
          children: u.jsx(o("WAWebText.react").WAWebTextMuted, {
            color: "teal",
            weight: "medium",
            children: s._(/*BTDS*/ "View contact"),
          }),
        }),
        b = l === o("WAWebContactLogging").ContactSourceType.NewChat,
        v = u.jsx(o("WAWebText.react").WAWebTextMuted, {
          children: s._(
            /*BTDS*/ "This phone number is already in your contacts. {view-contact-button}",
            [s._param("view-contact-button", C)],
          ),
        }),
        S = u.jsx(o("WAWebText.react").WAWebTextMuted, {
          children: s._(
            /*BTDS*/ "This phone number is already in your contacts.",
          ),
        });
      return u.jsxs(o("WAWebFlex.react").FlexColumn, {
        align: "stretch",
        xstyle: [
          o("WAWebUISpacing").uiPadding.top8,
          o("WAWebUISpacing").uiPadding.bottom20,
        ],
        children: [
          u.jsxs(o("WAWebFlex.react").FlexRow, {
            grow: 1,
            shrink: 1,
            dir: "ltr",
            children: [
              u.jsx("div", {
                className: "xzj7eog",
                dir: "auto",
                children: u.jsx(
                  r("WAWebCountrySelectField.react"),
                  {
                    countries: f,
                    testid: void 0,
                    onChange: h,
                    initialSelection: t,
                  },
                  t,
                ),
              }),
              u.jsx(r("WAWebContactPhoneNumberField.react"), {
                countryCode: t,
                numberWithoutPrefix: n,
                onChange: y,
                isValid: m === c.Registered,
                errorShown: g,
                errorMessageDOMId: d,
              }),
            ],
          }),
          m &&
            u.jsxs(o("WAWebFlex.react").FlexRow, {
              id: d,
              xstyle: o("WAWebUISpacing").uiMargin.top10,
              children: [
                m === c.IsCustomer &&
                  u.jsx(o("WAWebText.react").WAWebTextMuted, {
                    children: s._(
                      /*BTDS*/ "This contact is already your customer.",
                    ),
                  }),
                m === c.Registered &&
                  u.jsx(o("WAWebText.react").WAWebTextMuted, {
                    children: s._(/*BTDS*/ "This phone number is on WhatsApp."),
                  }),
                m === c.Unregistered &&
                  u.jsx(o("WAWebText.react").WAWebTextMuted, {
                    children: s._(
                      /*BTDS*/ "This phone number is not on WhatsApp. Invite them on your primary device.",
                    ),
                  }),
                m === c.Duplicate && b && v,
                m === c.Duplicate && !b && S,
              ],
            }),
        ],
      });
    }
    ((m.displayName = m.name + " [from " + i.id + "]"),
      (l.PhoneNumberStatusType = c),
      (l.ContactPhoneNumberFields = m));
  },
  226,
);
