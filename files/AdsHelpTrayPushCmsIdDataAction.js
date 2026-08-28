__d(
  "AdsHelpTrayPushCmsIdDataAction",
  [
    "AdsHelpTrayPushCmsIdDataReducerPlugin",
    "AdsHelpTrayUIProvider",
    "Laminar",
    "ifRequired_FOR_LAMINAR_CODEGEN",
  ],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = n("Laminar").__createAction(
      function () {
        return [
          n("Laminar").__createReducer(
            n("AdsHelpTrayPushCmsIdDataReducerPlugin"),
            n("AdsHelpTrayUIProvider"),
            {},
            "",
          ),
        ];
      },
      function () {
        return [
          n("ifRequired_FOR_LAMINAR_CODEGEN")(
            "AdsHelpTrayPushCmsIdDataActionFaqLoggerPlugin",
            function (e) {
              return n("Laminar").__createLogger(
                "AdsHelpTrayPushCmsIdDataActionFaqLoggerPlugin",
                e,
                {},
                ["AdsMgmtRegistry"],
              );
            },
          ),
        ];
      },
      "ADS_HELP_TRAY_PUSH_CMS_ID",
    );
    a.exports = e;
  },
  null,
);
