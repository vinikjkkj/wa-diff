__d(
  "AdsDraftPublishUIReducerPlugins",
  ["immutable"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        reduce: function (t, n) {
          var e,
            r = t.set("isReceiptShown", !0);
          return r.set(
            "areAllDeleting",
            (e = n.areAllDeleting) != null ? e : !1,
          );
        },
      },
      s = {
        reduce: function (t, n) {
          return t.set("isReceiptShown", !1);
        },
      },
      u = {
        reduce: function (t, n) {
          var e = n.progress,
            r = Math.min(e, 1);
          return r <= t.progress ? t : t.set("progress", r);
        },
      },
      c = {
        reduce: function (t, n) {
          return t.set("recentlyPublishedIDs", r("immutable").Set());
        },
      };
    ((l.ShowPublishDetailsReducer = e),
      (l.HidePublishDetailsReducer = s),
      (l.FakeProgressReducer = u),
      (l.ClearRecentlyPublishedReducer = c));
  },
  98,
);
