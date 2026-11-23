__d(
  "AdsPEExportShowFileFormatDialogAction",
  ["AdsExportAdObjectLoggerPlugin", "Laminar"],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = n("Laminar").__createAction(
      function () {
        return [];
      },
      function () {
        return [
          n("Laminar").__createLogger(
            "AdsExportAdObjectLoggerPlugin",
            n("AdsExportAdObjectLoggerPlugin"),
            {},
          ),
        ];
      },
      "AdsPEExportShowFileFormatDialogActionPlugin",
      void 0,
      void 0,
      function (e) {
        return function (n, r) {
          e(n, r);
        };
      },
    );
    a.exports = e;
  },
  null,
);
