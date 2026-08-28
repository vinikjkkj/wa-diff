__d(
  "AdsCopyFailToastStrings",
  ["fbt", "react"],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u = e || (e = o("react"));
    function c(e) {
      switch (e) {
        case "campaign":
          return s._(/*BTDS*/ "Campaign didn't duplicate");
        case "ad_set":
          return s._(/*BTDS*/ "Ad set didn't duplicate");
        case "ad":
        default:
          return s._(/*BTDS*/ "Ad didn't duplicate");
      }
    }
    function d(e) {
      switch (e) {
        case "campaign":
          return s._(/*BTDS*/ "Campaigns didn't duplicate");
        case "ad_set":
          return s._(/*BTDS*/ "Ad sets didn't duplicate");
        case "ad":
        default:
          return s._(/*BTDS*/ "Ads didn't duplicate");
      }
    }
    function m(e, t) {
      switch (e) {
        case "campaign":
          return s._(
            /*BTDS*/ "Try again later or duplicate a different campaign. {newline1}{errorDetails}",
            [
              s._param("newline1", u.jsx("br", {})),
              s._param("errorDetails", t),
            ],
          );
        case "ad_set":
          return s._(
            /*BTDS*/ "Try again later or duplicate a different ad set. {newline1}{errorDetails}",
            [
              s._param("newline1", u.jsx("br", {})),
              s._param("errorDetails", t),
            ],
          );
        case "ad":
        default:
          return s._(
            /*BTDS*/ "Try again later or duplicate a different ad. {newline1}{errorDetails}",
            [
              s._param("newline1", u.jsx("br", {})),
              s._param("errorDetails", t),
            ],
          );
      }
    }
    ((l.getFailureToastHeaderSingular = c),
      (l.getFailureToastHeaderPlural = d),
      (l.getFailureToastBody = m));
  },
  226,
);
