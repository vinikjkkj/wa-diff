__d(
  "WAWebNewsletterDeleteDialogWamoSubStrings",
  [
    "fbt",
    "WDSIconIcAttachMoney.react",
    "WDSIconIcHistory.react",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react"));
    function c(e) {
      var t = o("react-compiler-runtime").c(2),
        n;
      return (
        t[0] !== e
          ? ((n = u.jsx(
              r("WDSIconIcHistory.react"),
              babelHelpers.extends({}, e, { colorName: "contentDeemphasized" }),
            )),
            (t[0] = e),
            (t[1] = n))
          : (n = t[1]),
        n
      );
    }
    function d(e) {
      var t = o("react-compiler-runtime").c(2),
        n;
      return (
        t[0] !== e
          ? ((n = u.jsx(
              r("WDSIconIcAttachMoney.react"),
              babelHelpers.extends({}, e, { colorName: "contentDeemphasized" }),
            )),
            (t[0] = e),
            (t[1] = n))
          : (n = t[1]),
        n
      );
    }
    function m() {
      return {
        title: s._(/*BTDS*/ "Subscribers will be refunded"),
        description: s._(
          /*BTDS*/ "Subscriptions will be canceled, and active subscribers will get a refund for this month's subscription fees.",
        ),
        Icon: d,
        key: "subscribers-will-be-refunded",
      };
    }
    function p() {
      return {
        title: s._(/*BTDS*/ "Past activity will be visible"),
        description: s._(
          /*BTDS*/ "Past channel activity will still be visible to your followers and subscribers.",
        ),
        Icon: c,
        key: "past-activity-will-be-visible",
      };
    }
    ((l.getNewsletterDeleteDialogWamoSubWarningMessageContent = m),
      (l.getNewsletterDeleteDialogSuspendedWamoSubWarningMessageContent = p));
  },
  226,
);
