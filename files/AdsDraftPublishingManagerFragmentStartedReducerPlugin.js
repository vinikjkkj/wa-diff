__d(
  "AdsDraftPublishingManagerFragmentStartedReducerPlugin",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = {
        reduce: function (t, n) {
          var e = t.pendingFragments,
            r = t.publishingFragments;
          return (
            n.fragments.forEach(function (t) {
              ((e = e.delete(t.fragmentID)),
                (r = r.set(t.fragmentID, {
                  adObjectType: t.adObjectType,
                  adObjectID: t.adObjectID,
                  adObjectErrorCode: t.adObjectErrorCode,
                })));
            }),
            t.merge({ pendingFragments: e, publishingFragments: r })
          );
        },
      },
      l = e;
    i.default = l;
  },
  66,
);
