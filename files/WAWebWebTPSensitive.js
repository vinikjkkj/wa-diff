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
    function d(e) {
      return (
        e === void 0 && (e = "control"),
        e === "open_in_acrobat"
          ? { subtitle: m(), title: s._(/*BTDS*/ "Open in Adobe Acrobat") }
          : e === "edit_in_acrobat"
            ? { subtitle: m(), title: s._(/*BTDS*/ "Edit in Adobe Acrobat") }
            : e === "control"
              ? p()
              : (function () {
                  throw Error(
                    "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                      e,
                  );
                })()
      );
    }
    function m() {
      return s._(/*BTDS*/ "Some features require a subscription");
    }
    function p() {
      return { subtitle: _(), title: s._(/*BTDS*/ "Edit text & images") };
    }
    function _() {
      return r("WAWebEnvironment").isWindows
        ? s._(/*BTDS*/ "Opens Acrobat in a new window.")
        : s._(/*BTDS*/ "Opens Acrobat in a new tab.");
    }
    function f() {
      return u.jsx(r("WDSIconIcOpenInNew.react"), { height: 20, width: 20 });
    }
    ((f.displayName = f.name + " [from " + i.id + "]"),
      (l.getWAWebWebTPEditMenuTitle = c),
      (l.getWAWebWebTPEditMenuRowCopy = d),
      (l.getEditAcrobatTrailingIcon = f));
  },
  226,
);
