__d(
  "WAWebWebTPSensitive",
  ["fbt", "WDSIconIcOpenInNew.react", "justknobx", "react"],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u = e || (e = o("react"));
    function c() {
      return r("justknobx")._("3181");
    }
    function d() {
      return c()
        ? s._(/*BTDS*/ "Edit online in Acrobat")
        : s._(/*BTDS*/ "Edit in Acrobat");
    }
    function m() {
      return c()
        ? u.jsx(r("WDSIconIcOpenInNew.react"), { height: 20, width: 20 })
        : null;
    }
    ((m.displayName = m.name + " [from " + i.id + "]"),
      (l.isEditInAcrobatLabelEnabled = c),
      (l.getWAWebWebTPEditMenuTitle = d),
      (l.getEditAcrobatTrailingIcon = m));
  },
  226,
);
