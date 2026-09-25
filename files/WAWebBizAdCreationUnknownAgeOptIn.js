__d(
  "WAWebBizAdCreationUnknownAgeOptIn",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = "WHATSAPP",
      l = "SAVED_AUDIENCE";
    function s(t, n) {
      return n && t.includes(e);
    }
    function u(e, t, n, r) {
      return s(t, n) ? (e === l ? r === !0 : r != null ? r : !0) : !1;
    }
    function c(t, n, r, o) {
      if (!o || n === l) return t;
      if (r.includes(e))
        return babelHelpers.extends({}, t, {
          user_age_unknown: u(n, r, o, t.user_age_unknown),
        });
      if (t.user_age_unknown == null) return t;
      var a = babelHelpers.extends({}, t);
      return (delete a.user_age_unknown, a);
    }
    function d(e, t) {
      return e ? t === !0 : t != null ? t : !0;
    }
    ((i.isUnknownAgeControlActive = s),
      (i.isUnknownAgeOptInInEffect = u),
      (i.applyUnknownAgeOptIn = c),
      (i.getUnknownAgeCheckboxDefault = d));
  },
  66,
);
