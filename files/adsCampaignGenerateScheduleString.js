__d(
  "adsCampaignGenerateScheduleString",
  ["fbt", "formatDate"],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    function e(e, t, n) {
      return (
        n === void 0 && (n = "F j, Y"),
        t
          ? s._(/*BTDS*/ "{start} - {end}", [
              s._param("start", r("formatDate")(e, n)),
              s._param("end", r("formatDate")(t, n)),
            ])
          : s._(/*BTDS*/ "Running continuously")
      );
    }
    l.default = e;
  },
  226,
);
