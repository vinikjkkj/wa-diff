__d(
  "WAWebPaymentOnboardingFlow.react",
  [
    "$InternalEnum",
    "WAWebBizPaymentsBrazilAddPixModalRefreshed.react",
    "WAWebUserPrefsCustomPaymentMethods",
    "react",
    "useWAWebFlow",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = n("$InternalEnum").Mirrored(["AddEditCredential"]);
    function c(e) {
      var t = e.previousScreen,
        n = e.referral,
        a = o("WAWebUserPrefsCustomPaymentMethods").getPIX(),
        i = o("useWAWebFlow").useFlow(u.AddEditCredential),
        l = i[0],
        c = i[1];
      if (c.step == null) return null;
      var d;
      switch (c.step) {
        case u.AddEditCredential: {
          d = s.jsx(r("WAWebBizPaymentsBrazilAddPixModalRefreshed.react"), {
            onClose: function () {
              c.end();
            },
            pixData: a,
            previousScreen: t,
            referral: n,
            onSuccess: function () {
              return c.end();
            },
          });
          break;
        }
      }
      return s.jsx(l, { flow: c, children: d });
    }
    ((c.displayName = c.name + " [from " + i.id + "]"), (l.default = c));
  },
  98,
);
