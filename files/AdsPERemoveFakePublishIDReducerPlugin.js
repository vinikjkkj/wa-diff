__d(
  "AdsPERemoveFakePublishIDReducerPlugin",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = {
        reduce: function (t, n) {
          return t.merge({
            activePublishIDs: t.activePublishIDs.remove(n.fakePublishID),
          });
        },
      },
      l = e;
    i.default = l;
  },
  66,
);
