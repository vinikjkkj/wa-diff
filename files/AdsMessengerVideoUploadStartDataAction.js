__d(
  "AdsMessengerVideoUploadStartDataAction",
  [
    "AdsMessengerVideoCreationPerfScenariosLoggerPlugins",
    "Laminar",
    "ifRequired_FOR_LAMINAR_CODEGEN",
  ],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = n("Laminar").__createAction(
      function () {
        return [];
      },
      function () {
        return [
          n("Laminar").__createLogger(
            "AdsMessengerVideoCreationPerfScenariosLoggerPlugins.AdsMessengerVideoCreationStartLoggerPlugin",
            n("AdsMessengerVideoCreationPerfScenariosLoggerPlugins")
              .AdsMessengerVideoCreationStartLoggerPlugin,
            {},
          ),
          n("ifRequired_FOR_LAMINAR_CODEGEN")(
            "AdsMessengerVideoUploadStartDataActionLoggerPlugin",
            function (e) {
              return n("Laminar").__createLogger(
                "AdsMessengerVideoUploadStartDataActionLoggerPlugin",
                e,
                {},
                ["AdsMgmtRegistry"],
              );
            },
          ),
        ];
      },
      "MESSENGER.VIDEO_UPLOAD_START",
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
