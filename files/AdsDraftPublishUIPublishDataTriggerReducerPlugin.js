__d(
  "AdsDraftPublishUIPublishDataTriggerReducerPlugin",
  [
    "AdAsyncRequestStatus",
    "AdsDraftClearRecentlyPublishedDataAction",
    "AdsDraftDraftPublishInitProgressDataAction",
    "AdsDraftPublishUIProviderActionType",
    "AdsNewIDs",
    "FBLogger",
    "PowerEditorConfig.experimental",
    "clearTimeout",
    "fakeProgress",
    "getByPath",
    "isValidID",
    "setTimeout",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      return r("getByPath")(
        r("PowerEditorConfig.experimental"),
        ["config", "DRAFT", e],
        t,
      );
    }
    var s = e("PUBLISH_INIT_TIME", 750),
      u = e("PUBLISH_REALTIME_UPDATE_TIMEOUT", 3e4),
      c = e("PUBLISH_END_DURATION", 3e4),
      d = null,
      m = null,
      p = {
        reduce: function (t, n) {
          var e,
            o = n.completedAdObjectIDs,
            a = n.fragments,
            l = n.lastActionType,
            p = n.pendingAdObjectIDs,
            _ = n.publishID,
            f = n.requestedAdObjectIDs,
            g = p.size + f.size,
            h = o.size + g,
            y = t.initComplete || r("isValidID")(_),
            C = a.valueSeq(),
            b = C.some(function (e) {
              return (
                r("AdsNewIDs").isNewNegativeID(e.fragment_id) ||
                e.fragment_id === ""
              );
            });
          if (
            (b &&
              r("FBLogger")("ads", "draft_publish_invalid_fragments").warn(
                "Added invalid fragments to the publish status map in AdsDraftPublishDataProvider.",
              ),
            y === t.initComplete &&
              h === t.totalCount &&
              g === t.processingCount)
          )
            return t;
          if (h === 0) {
            var v;
            return (
              (v = d) == null || v.stop(),
              r("clearTimeout")(m),
              (m = r("setTimeout")(function () {
                r("AdsDraftClearRecentlyPublishedDataAction").dispatch(
                  {},
                  {
                    line: "92",
                    module:
                      "AdsDraftPublishUIPublishDataTriggerReducerPlugin.js",
                    moduleID: i.id,
                  },
                );
              }, c)),
              t.merge({
                lastActionType: null,
                initComplete: !1,
                progress: 0,
                processingCount: 0,
                totalCount: 0,
              })
            );
          }
          var S = t.recentlyPublishedIDs;
          l !== r("AdsDraftPublishUIProviderActionType").DELETE &&
            (S = t.recentlyPublishedIDs.union(
              o.filter(function (e) {
                var t;
                return (
                  ((t = a.get(e)) == null ? void 0 : t.status) ===
                  r("AdAsyncRequestStatus").SUCCESS
                );
              }),
            ));
          var R = ((y ? 1 : 0) + o.size) / (h + 1);
          return (
            (e = d) == null || e.stop(),
            (d = r("fakeProgress")((y ? u : s) / 1e3, function (e) {
              return r("AdsDraftDraftPublishInitProgressDataAction").dispatch(
                { progress: R + e / (h + 1) },
                {
                  line: "124",
                  module: "AdsDraftPublishUIPublishDataTriggerReducerPlugin.js",
                  moduleID: i.id,
                },
              );
            })),
            t.merge({
              lastActionType: l,
              initComplete: y,
              progress: R,
              processingCount: g,
              recentlyPublishedIDs: S,
              totalCount: h,
            })
          );
        },
      },
      _ = p;
    l.default = _;
  },
  98,
);
