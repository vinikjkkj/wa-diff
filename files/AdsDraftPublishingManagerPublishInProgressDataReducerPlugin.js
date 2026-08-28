__d(
  "AdsDraftPublishingManagerPublishInProgressDataReducerPlugin",
  ["adsDraftPublishingManagerUpdateState"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        reduce: function (t, n) {
          var e,
            o =
              (e = n.response) == null || (e = e.fragment_statuses) == null
                ? void 0
                : e.data;
          return o == null
            ? t
            : r("adsDraftPublishingManagerUpdateState")(t, o);
        },
      },
      s = e;
    l.default = s;
  },
  98,
);
