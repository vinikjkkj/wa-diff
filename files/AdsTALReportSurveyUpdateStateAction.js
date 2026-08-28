__d(
  "AdsTALReportSurveyUpdateStateAction",
  [
    "AdsTALReportSurveyStateDataProvider",
    "AdsTALReportSurveyStateReducerPlugin",
    "Laminar",
  ],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = n("Laminar").__createAction(
      function () {
        return [
          n("Laminar").__createReducer(
            n("AdsTALReportSurveyStateReducerPlugin"),
            n("AdsTALReportSurveyStateDataProvider"),
            {},
            "",
          ),
        ];
      },
      function () {
        return [];
      },
      "AdsTALReportSurveyUpdateStateActionPlugin",
    );
    a.exports = e;
  },
  null,
);
