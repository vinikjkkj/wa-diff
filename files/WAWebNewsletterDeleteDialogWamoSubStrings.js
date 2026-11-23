__d(
  "WAWebNewsletterDeleteDialogWamoSubStrings",
  ["fbt", "WDSIconIcAttachMoney.react", "WDSIconIcHistory.react", "react"],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react"));
    function c(e) {
      return u.jsx(
        r("WDSIconIcHistory.react"),
        babelHelpers.extends({}, e, { colorName: "contentDeemphasized" }),
      );
    }
    c.displayName = c.name + " [from " + i.id + "]";
    function d(e) {
      return u.jsx(
        r("WDSIconIcAttachMoney.react"),
        babelHelpers.extends({}, e, { colorName: "contentDeemphasized" }),
      );
    }
    d.displayName = d.name + " [from " + i.id + "]";
    function m() {
      return {
        title: s._(/*BTDS*/ ""),
        description: s._(/*BTDS*/ ""),
        Icon: d,
        key: "subscribers-will-be-refunded",
      };
    }
    function p() {
      return {
        title: s._(/*BTDS*/ ""),
        description: s._(/*BTDS*/ ""),
        Icon: c,
        key: "past-activity-will-be-visible",
      };
    }
    ((l.getNewsletterDeleteDialogWamoSubWarningMessageContent = m),
      (l.getNewsletterDeleteDialogSuspendedWamoSubWarningMessageContent = p));
  },
  226,
);
