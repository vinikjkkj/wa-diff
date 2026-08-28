__d(
  "AdsInstagramAccountLinkedPageReducerPlugin",
  ["LoadObject"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        reduce: function (t, n) {
          return t.set(
            r("LoadObject").withValue(n.instagramAccountLinkedPage, {
              creatorModuleID: i.id,
            }),
          );
        },
      },
      s = e;
    l.default = s;
  },
  98,
);
