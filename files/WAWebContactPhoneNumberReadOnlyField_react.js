__d(
  "WAWebContactPhoneNumberReadOnlyField.react",
  [
    "fbt",
    "WAIsoToCc",
    "WANullthrows",
    "WAWebFlex.react",
    "WAWebLinkDevicePhoneNumberEntryInputFormatUtils",
    "WAWebUISpacing",
    "react",
    "stylex",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u,
      c = u || (u = o("react")),
      d = { text: { fontSize: "x1lkfr7t", lineHeight: "x1fc57z9", $$css: !0 } };
    function m(t) {
      var n = t.countryCode,
        a = t.numberWithoutPrefix,
        i = r("WANullthrows")(
          o(
            "WAWebLinkDevicePhoneNumberEntryInputFormatUtils",
          ).formatPhoneNumberInput({
            countryCodeIso: n,
            phoneNumberWithoutCountryCode: a,
          }),
        ),
        l = i.formattedInputValue,
        u = r("WAIsoToCc")[n],
        m = n + " +" + u + " " + l;
      return c.jsxs(o("WAWebFlex.react").FlexColumn, {
        className: (e || (e = r("stylex")))(
          o("WAWebUISpacing").uiMargin.top8,
          o("WAWebUISpacing").uiMargin.bottom16,
        ),
        align: "start",
        grow: 0,
        shrink: 0,
        children: [
          c.jsx("div", {
            className: "x1pg5gke x1d3mw78 xm7witj",
            children: s._(/*BTDS*/ "Phone"),
          }),
          c.jsx(
            "div",
            babelHelpers.extends(
              {},
              e.props(d.text, o("WAWebUISpacing").uiMargin.top10),
              { children: m },
            ),
          ),
        ],
      });
    }
    ((m.displayName = m.name + " [from " + i.id + "]"), (l.default = m));
  },
  226,
);
