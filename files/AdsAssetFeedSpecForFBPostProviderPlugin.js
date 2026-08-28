__d(
  "AdsAssetFeedSpecForFBPostProviderPlugin",
  [
    "LoadObject",
    "LoadObjectMap",
    "PACFBExistingPostDataManager",
    "promiseDone",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        initialState: function (t) {
          return r("LoadObjectMap").createKeyed(
            function (e) {
              e.forEach(function (e) {
                (r("promiseDone")(
                  r("PACFBExistingPostDataManager").convertPostToAssetFeedSpec(
                    e.accountID,
                    e.objectStoryID,
                    e.instagramActorID,
                  ),
                  function (n) {
                    t(function (t) {
                      return t.set(
                        e,
                        r("LoadObject").withValue(n, { creatorModuleID: i.id }),
                      );
                    });
                  },
                  function (n) {
                    t(function (t) {
                      return t.set(
                        e,
                        r("LoadObject").withError(n, { creatorModuleID: i.id }),
                      );
                    });
                  },
                ),
                  t(function (t) {
                    return t.set(
                      e,
                      r("LoadObject").loading({ creatorModuleID: i.id }),
                    );
                  }));
              });
            },
            function (e) {
              return [e.accountID, e.instagramActorID, e.objectStoryID].join(
                ":",
              );
            },
          );
        },
      },
      s = e;
    l.default = s;
  },
  98,
);
