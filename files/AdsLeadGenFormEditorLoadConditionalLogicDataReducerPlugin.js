__d(
  "AdsLeadGenFormEditorLoadConditionalLogicDataReducerPlugin",
  ["immutable"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        reduce: function (t, n) {
          var e = t.set(n.formID, null);
          return (
            n.response.isValid &&
              (e = e.set(n.formID, {
                displayPrimitives: r("immutable").List(
                  n.response.defaultPrimitives,
                ),
                questionAnswers: r("immutable").Map(),
                serverCookie: "",
                targetCode: n.response.targetCode,
              })),
            e
          );
        },
      },
      s = e;
    l.default = s;
  },
  98,
);
