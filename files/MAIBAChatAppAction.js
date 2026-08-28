__d(
  "MAIBAChatAppAction",
  ["Laminar", "MAIBAChatAppReducerPlugin", "MAIBAChatAppUIProvider"],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = n("Laminar").__createAction(
      function () {
        return [
          n("Laminar").__createReducer(
            n("MAIBAChatAppReducerPlugin"),
            n("MAIBAChatAppUIProvider"),
            {},
            "",
          ),
        ];
      },
      function () {
        return [];
      },
      "MAIBA_UPDATE_CHAT_APP",
    );
    a.exports = e;
  },
  null,
);
