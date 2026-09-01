__d(
  "WAWebWebTPSensitive",
  ["fbt", "WAWebABProps", "WDSIconIcOpenInNew.react", "react"],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u = e || (e = o("react"));
    function c() {
      return s._(/*BTDS*/ "Edit in Acrobat");
    }
    function d() {
      return (function (e) {
        if (e === 1)
          return {
            subtitle: s._(/*BTDS*/ "Opens Acrobat in a new tab."),
            title: s._(/*BTDS*/ "Edit text & images"),
          };
        {
          var t = e;
          return { title: c() };
        }
      })(
        o("WAWebABProps").getABPropConfigValue(
          "wa_webtp_edit_menu_copy_variant",
        ),
      );
    }
    function m() {
      return u.jsx(r("WDSIconIcOpenInNew.react"), { height: 20, width: 20 });
    }
    ((m.displayName = m.name + " [from " + i.id + "]"),
      (l.getWAWebWebTPEditMenuTitle = c),
      (l.getWAWebWebTPEditMenuRowCopy = d),
      (l.getEditAcrobatTrailingIcon = m));
  },
  226,
);
