__d(
  "AdsDefaultPageDataLoadedReducerPlugin",
  ["LoadObject", "Promise", "cr:34851", "promiseDone"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = {
        reduce: function (o, a) {
          var t = {
            createdTime: a.createdTime,
            pageIconURI: a.pageIconURI,
            pageID: a.pageID,
            pageName: a.pageName,
            pagePost: a.pagePost,
          };
          if (n("cr:34851") != null) {
            var l = a.adAccountID;
            r("promiseDone")(
              (e || (e = n("Promise"))).resolve().then(function () {
                n("cr:34851").validate(l, t);
              }),
            );
          }
          return o.set(
            a.adAccountID,
            r("LoadObject").withValue(t, { creatorModuleID: i.id }),
          );
        },
      },
      u = s;
    l.default = u;
  },
  98,
);
