__d(
  "AdsInstagramAccountLinkedPageSuccessDataAction",
  [
    "AdsInstagramAccountLinkedPageProvider",
    "AdsInstagramAccountLinkedPageReducerPlugin",
    "Laminar",
  ],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = n("Laminar").__createAction(
      function () {
        return [
          n("Laminar").__createReducer(
            n("AdsInstagramAccountLinkedPageReducerPlugin"),
            n("AdsInstagramAccountLinkedPageProvider"),
            {},
            "",
          ),
        ];
      },
      function () {
        return [];
      },
      "AdsInstagramAccountLinkedPageSuccessDataActionPlugin",
    );
    a.exports = e;
  },
  null,
);
