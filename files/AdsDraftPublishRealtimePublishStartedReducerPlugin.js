__d(
  "AdsDraftPublishRealtimePublishStartedReducerPlugin",
  ["LoadObject"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        reduce: function (t, n) {
          var e = n.response,
            o = r("LoadObject").loading({ creatorModuleID: i.id });
          return t.merge({ active: e == null ? o : o.setValue(e) });
        },
      },
      s = e;
    l.default = s;
  },
  98,
);
