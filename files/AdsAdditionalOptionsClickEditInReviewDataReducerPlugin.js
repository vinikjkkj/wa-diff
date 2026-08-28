__d(
  "AdsAdditionalOptionsClickEditInReviewDataReducerPlugin",
  ["AdsAdditionalOptionsStateReducerUtils"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        reduce: function (t, n) {
          var e = n.aoPluginKey;
          return e == null
            ? t
            : o("AdsAdditionalOptionsStateReducerUtils").setFieldValue(
                t,
                e,
                !0,
              );
        },
      },
      s = e;
    l.default = s;
  },
  98,
);
