__d(
  "AdStudiesLoadedReducerPlugin",
  ["LoadObject"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        reduce: function (t, n) {
          var e = n.adAccountID,
            o = n.studies,
            a = o
              .filter(function (n) {
                return !t
                  .getCached({ adAccountID: e, studyID: n.id })
                  .isLoading();
              })
              .map(function (t) {
                return [
                  { adAccountID: e, studyID: t.id },
                  r("LoadObject").withValue(t, { creatorModuleID: i.id }),
                ];
              });
          return t.merge(a);
        },
      },
      s = e;
    l.default = s;
  },
  98,
);
