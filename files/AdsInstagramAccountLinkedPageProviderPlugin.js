__d(
  "AdsInstagramAccountLinkedPageProviderPlugin",
  [
    "AdsInstagramAccountLinkedPageDataManager",
    "LoadObject",
    "LoadObjectLoader",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        initialState: function (t) {
          return new (r("LoadObjectLoader"))(function () {
            (t(function (e) {
              return e.set(r("LoadObject").loading({ creatorModuleID: i.id }));
            }),
              r(
                "AdsInstagramAccountLinkedPageDataManager",
              ).loadInstagramAccountLinkedPage());
          });
        },
      },
      s = e;
    l.default = s;
  },
  98,
);
