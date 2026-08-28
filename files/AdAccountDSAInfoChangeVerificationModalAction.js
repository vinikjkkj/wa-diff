__d(
  "AdAccountDSAInfoChangeVerificationModalAction",
  [
    "AdAccountDSAInfoChangeVerificationModalProvider",
    "AdAccountDSAInfoChangeVerificationModalReducerPlugin",
    "Laminar",
  ],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = n("Laminar").__createAction(
      function () {
        return [
          n("Laminar").__createReducer(
            n("AdAccountDSAInfoChangeVerificationModalReducerPlugin"),
            n("AdAccountDSAInfoChangeVerificationModalProvider"),
            {},
            "",
          ),
        ];
      },
      function () {
        return [];
      },
      "AdAccountDSAInfoChangeVerificationModalActionPlugin",
    );
    a.exports = e;
  },
  null,
);
