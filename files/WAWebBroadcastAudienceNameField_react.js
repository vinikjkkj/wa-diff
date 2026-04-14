__d(
  "WAWebBroadcastAudienceNameField.react",
  [
    "fbt",
    "WAWebBizBroadcastsAudienceSelectionStrings",
    "WDSTextField.react",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react")),
      c = e.useState;
    function d(e) {
      var t = e.defaultValue,
        n = e.onFocus,
        a = e.onValueChange,
        i = e.testid,
        l = e.value,
        d = c(null),
        m = d[0],
        p = d[1];
      function _(e) {
        (a(e),
          m != null && p(null),
          e.trim() === "" &&
            p(s._(/*BTDS*/ "Please enter a name for the audience")));
      }
      return u.jsx(r("WDSTextField.react"), {
        defaultValue: t,
        error: m != null,
        errorText: m,
        label: o(
          "WAWebBizBroadcastsAudienceSelectionStrings",
        ).getAudienceNameInputLabel(),
        onFocus: n,
        onValueChange: _,
        testid: void 0,
        value: l,
      });
    }
    ((d.displayName = d.name + " [from " + i.id + "]"), (l.default = d));
  },
  226,
);
