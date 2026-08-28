__d(
  "AdsPageSignLeadgenTosSuccessDataAction",
  ["Laminar", "ifRequired_FOR_LAMINAR_CODEGEN"],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = n("Laminar").__createAction(
      function () {
        return [
          n("ifRequired_FOR_LAMINAR_CODEGEN")(
            "AdsPageSignLeadgenTosSuccessDataReducerPlugin",
            function (e) {
              return n("ifRequired_FOR_LAMINAR_CODEGEN")(
                "AdsCFPageDestinationDataProvider",
                function (t) {
                  return n("Laminar").__createReducer(e, t, {}, "");
                },
              );
            },
          ),
        ];
      },
      function () {
        return [];
      },
      "PAGE.SIGN_LEADGEN_TOS_SUCCESS",
    );
    a.exports = e;
  },
  null,
);
