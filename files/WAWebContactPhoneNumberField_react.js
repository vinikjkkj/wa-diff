__d(
  "WAWebContactPhoneNumberField.react",
  [
    "fbt",
    "WAWebCheckmarkIcon.react",
    "WAWebFlex.react",
    "WAWebPhoneNumberInput.react",
    "WAWebUISpacing",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react")),
      c = e,
      d = c.useRef,
      m = c.useState,
      p = {
        inputRow: {
          borderBottomWidth: "xlxy82",
          borderBottomStyle: "x1q0q8m5",
          borderBottomColor: "x16pkwpw",
          $$css: !0,
        },
        inputFocused: { borderBottomColor: "x1rrvw3c", $$css: !0 },
        checkMark: { color: "xdlexau", $$css: !0 },
      };
    function _(e) {
      var t = e.countryCode,
        n = e.errorMessageDOMId,
        a = e.errorShown,
        i = e.isValid,
        l = e.numberWithoutPrefix,
        c = e.onChange,
        _ = e.onEnter,
        f = m(!1),
        g = f[0],
        h = f[1],
        y = d(null);
      return u.jsxs(o("WAWebFlex.react").FlexColumn, {
        className: "x1n2onr6 xeuugli",
        grow: 1,
        align: "stretch",
        dir: "auto",
        children: [
          u.jsx("div", {
            className: "x1pg5gke x1d3mw78 xm7witj",
            children: s._(/*BTDS*/ "Phone"),
          }),
          u.jsxs(o("WAWebFlex.react").FlexRow, {
            xstyle: [p.inputRow, g && p.inputFocused],
            align: "center",
            children: [
              u.jsx(o("WAWebFlex.react").FlexItem, {
                xstyle: [
                  o("WAWebUISpacing").uiPadding.top9,
                  o("WAWebUISpacing").uiPadding.bottom5,
                ],
                grow: 1,
                shrink: 1,
                children: u.jsx(r("WAWebPhoneNumberInput.react"), {
                  countryCodeIso: t,
                  errorMessageDOMId: n,
                  errorShown: a,
                  onBlur: function () {
                    h(!1);
                  },
                  onFocus: function () {
                    h(!0);
                  },
                  onChange: c,
                  onEnter: _,
                  phoneNumberWithoutCountryPrefix: l,
                  ref: y,
                  showCountryPrefix: !1,
                  ariaLabel: s._(/*BTDS*/ "Phone number"),
                }),
              }),
              i &&
                u.jsx(o("WAWebFlex.react").FlexItem, {
                  grow: 0,
                  shrink: 0,
                  children: u.jsx(o("WAWebCheckmarkIcon.react").CheckmarkIcon, {
                    xstyle: p.checkMark,
                  }),
                }),
            ],
          }),
        ],
      });
    }
    ((_.displayName = _.name + " [from " + i.id + "]"), (l.default = _));
  },
  226,
);
