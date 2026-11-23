__d(
  "AdsLeadGenFormEditorLoadConditionalInteractionDataReducerPlugin",
  ["immutable"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        reduce: function (t, n) {
          var e = t,
            o = e.get(n.formID);
          if (o != null) {
            var a = o.questionAnswers,
              i = o.targetCode;
            e = e.set(n.formID, {
              displayPrimitives: r("immutable")
                .List(n.response.success.keys())
                .filter(function (e) {
                  return e !== "next";
                }),
              questionAnswers: a,
              serverCookie: n.response.serverCookie,
              targetCode: i,
            });
          }
          return e;
        },
      },
      s = e;
    l.default = s;
  },
  98,
);
