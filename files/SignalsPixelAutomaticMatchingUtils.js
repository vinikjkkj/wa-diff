__d(
  "SignalsPixelAutomaticMatchingUtils",
  [],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      return e
        ? [
            "EMAIL",
            "FIRST_NAME",
            "LAST_NAME",
            "GENDER",
            "PHONE",
            "CITY",
            "STATE",
            "ZIP",
            "DATE_OF_BIRTH",
            "COUNTRY",
            "EXTERNAL_ID",
          ]
        : [];
    }
    function s(e) {
      return e
        ? [
            "em",
            "fn",
            "ln",
            "ge",
            "ph",
            "ct",
            "st",
            "zp",
            "db",
            "country",
            "external_id",
          ]
        : [];
    }
    function u(e) {
      return e ? ["em", "fn", "ln", "ge", "ph", "ct", "st", "zp"] : [];
    }
    ((l.getAutomaticMatchingDefaultFieldsForGraphQL = e),
      (l.getAutomaticMatchingDefaultFields = s),
      (l.getAppAutomaticMatchingDefaultFields = u));
  },
  98,
);
