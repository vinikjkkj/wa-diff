__d(
  "WAWebWebTPSensitive",
  ["fbt", "WAWebEnvironment", "WDSIconIcOpenInNew.react", "react"],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u = e || (e = o("react"));
    function c() {
      return s._(/*BTDS*/ "");
    }
    function d(e) {
      return (
        e === void 0 && (e = "control"),
        e === "open_in_acrobat"
          ? { subtitle: m(), title: s._(/*BTDS*/ "") }
          : e === "edit_in_acrobat"
            ? { subtitle: m(), title: s._(/*BTDS*/ "") }
            : e === "edit_text_in_acrobat"
              ? { subtitle: m(), title: s._(/*BTDS*/ "") }
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
      return s._(/*BTDS*/ "");
    }
    function p() {
      return { subtitle: _(), title: s._(/*BTDS*/ "") };
    }
    function _() {
      return r("WAWebEnvironment").isWindows
        ? s._(/*BTDS*/ "")
        : s._(/*BTDS*/ "");
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
