__d(
  "AdsPEPublishStartedReducerPlugin",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = {
        reduce: function (t, n) {
          return n.asyncRequestSetID
            ? t.merge({
                activePublishIDs: t.activePublishIDs
                  .remove(n.fakePublishID)
                  .add(n.asyncRequestSetID.toString()),
              })
            : t;
        },
      },
      l = e;
    i.default = l;
  },
  66,
);
