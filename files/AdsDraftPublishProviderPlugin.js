__d(
  "AdsDraftPublishProviderPlugin",
  ["LoadObject", "immutable"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("immutable").Record({
        active: r("LoadObject").empty({ creatorModuleID: i.id }),
        activePublishIDs: r("immutable").Set(),
        requestMetadata: r("immutable").Map(),
      }),
      s = function () {
        return e();
      },
      u = { initialState: s() },
      c = u;
    l.default = c;
  },
  98,
);
