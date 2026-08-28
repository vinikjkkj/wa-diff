__d(
  "AdsDraftPublishingManagerProviderPlugin",
  ["immutable"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = {
        isExpanded: !1,
        isComponentRendered: !1,
        isPublishingComplete: !1,
        fragmentIDs: (e = r("immutable")).Set(),
        publishingFragments: e.Map(),
        pendingFragments: e.Map(),
        publishedFragments: e.Map(),
        failedFragments: e.Map(),
        cancelledFragments: e.Map(),
      },
      u = e.Record(s),
      c = function () {
        return u();
      },
      d = { initialState: c() },
      m = d;
    l.default = m;
  },
  98,
);
