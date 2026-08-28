__d(
  "AdsAdvertisingSettingsStatusContent",
  ["fbt"],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e = s._(/*BTDS*/ "Advertising settings"),
      u = s._(
        /*BTDS*/ "Contact an admin of this ad account to manage these controls.",
      ),
      c = s._(/*BTDS*/ "Account controls"),
      d = s._(/*BTDS*/ "Advertising settings applied"),
      m = s._(/*BTDS*/ "No advertising settings set"),
      p = s._(/*BTDS*/ "Account controls apply");
    function _(e) {
      var t = e.isAnySettingSet;
      return t ? d : m;
    }
    ((l.PILL_POPOVER_HEADER = e),
      (l.PILL_POPOVER_USER_HAS_NO_PERMISSIONS_TO_CHANGE_SETTINGS = u),
      (l.PGD_HEADER_NO_PLACEMENT_SETTINGS = c),
      (l.ACCOUNT_CONTROL_APPLY = p),
      (l.getPillText = _));
  },
  226,
);
