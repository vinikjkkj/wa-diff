__d(
  "AdsDefaultPageDataLoadedReducerPlugin",
  ["LoadObject"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        reduce: function (t, n) {
          var e = {
            createdTime: n.createdTime,
            pageIconURI: n.pageIconURI,
            pageID: n.pageID,
            pageName: n.pageName,
            pagePost: n.pagePost,
          };
          return t.set(
            n.adAccountID,
            r("LoadObject").withValue(e, { creatorModuleID: i.id }),
          );
        },
      },
      s = e;
    l.default = s;
  },
  98,
);
