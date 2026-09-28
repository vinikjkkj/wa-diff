__d(
  "WAWebWebTPSensitive",
  ["fbt", "WAWebEnvironment", "WDSIconIcOpenInNew.react", "react"],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u = e || (e = o("react"));
    function c() {
      return s._(/*BTDS*/ "Edit in Acrobat");
    }
    function d() {
      return { subtitle: m(), title: s._(/*BTDS*/ "Edit text & images") };
    }
    function m() {
      return r("WAWebEnvironment").isWindows
        ? s._(/*BTDS*/ "Opens Acrobat in a new window.")
        : s._(/*BTDS*/ "Opens Acrobat in a new tab.");
    }
    function p() {
      return u.jsx(r("WDSIconIcOpenInNew.react"), { height: 20, width: 20 });
    }
    ((p.displayName = p.name + " [from " + i.id + "]"),
      (l.getWAWebWebTPEditMenuTitle = c),
      (l.getWAWebWebTPEditMenuRowCopy = d),
      (l.getEditAcrobatTrailingIcon = p));
  },
  226,
);
