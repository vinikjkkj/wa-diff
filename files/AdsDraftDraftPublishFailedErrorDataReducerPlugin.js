__d(
  "AdsDraftDraftPublishFailedErrorDataReducerPlugin",
  ["LoadObject"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        reduce: function (t, n) {
          return n.error
            ? t.merge({
                active: r("LoadObject").withError(n.error, {
                  creatorModuleID: i.id,
                }),
              })
            : t;
        },
      },
      s = e;
    l.default = s;
  },
  98,
);
