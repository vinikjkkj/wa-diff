__d(
  "PublishCompletedReducerPlugin",
  ["AdDraftPublishStatuses"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        reduce: function (t, n) {
          var e;
          return babelHelpers.extends({}, t, {
            hasPublishCompleted:
              ((e = n.response) == null ? void 0 : e.status) ===
              r("AdDraftPublishStatuses").SUCCEEDED,
          });
        },
      },
      s = e;
    l.default = s;
  },
  98,
);
