__d(
  "adsExperimentsDeleteFreeformStudy",
  [
    "AdStudyGraphAPIUtils",
    "adsExperimentsCreativemulticellClearPublishedAdgroups",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      return s.apply(this, arguments);
    }
    function s() {
      return (
        (s = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.error,
            n = e.setFreeformDuplicationTestError,
            a = e.studyID;
          try {
            (yield o("AdStudyGraphAPIUtils").deleteAdStudy(a),
              r("adsExperimentsCreativemulticellClearPublishedAdgroups")(a),
              t && n(t));
          } catch (e) {
            n(r("getErrorSafe")(e));
          }
        })),
        s.apply(this, arguments)
      );
    }
    l.default = e;
  },
  98,
);
