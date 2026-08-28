__d(
  "AdsAssetFeedSpecForIGPostProviderPlugin",
  [
    "LoadObject",
    "LoadObjectMap",
    "PACIGExistingPostDataManager",
    "promiseDone",
  ],
  function (t, n, r, o, a, i, l) {
    var e = {
        initialState: function (t) {
          return r("LoadObjectMap").createKeyed(
            function (e) {
              e.forEach(function (e) {
                (r("promiseDone")(
                  r("PACIGExistingPostDataManager").convertPostToAssetFeedSpec(
                    e.accountID,
                    e.sourceInstagramMediaID,
                    e.cta,
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
              return [e.accountID, e.sourceInstagramMediaID, e.cta].join(":");
            },
          );
        },
      },
      s = e;
    l.default = s;
  },
  98,
);
