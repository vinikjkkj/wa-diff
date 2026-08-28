__d(
  "AdsDraftPublishingManagerPublishStartActionReducerPlugin",
  [
    "AdAsyncRequestStatus",
    "adsDraftGetFragmentStatusesFromPublishResponse",
    "immutable",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        reduce: function (t, n) {
          var e = r("immutable").Map(),
            o = r("immutable").Map(),
            a = t.isComponentRendered;
          return (
            r("adsDraftGetFragmentStatusesFromPublishResponse")(
              n.response,
            ).forEach(function (n) {
              t.fragmentIDs.has(n.fragment_id) &&
                ((a = !0),
                (n.status === r("AdAsyncRequestStatus").INITIAL ||
                  n.status ===
                    r("AdAsyncRequestStatus").PROCESS_BY_EVENT_PROCESSOR) &&
                  (e = e.set(n.fragment_id, {
                    adObjectType: n.ad_object_type,
                    adObjectID: n.ad_object_id,
                    adObjectErrorCode: n.error_code,
                  })),
                (n.status === r("AdAsyncRequestStatus").ERROR ||
                  n.status === r("AdAsyncRequestStatus").ERROR_DEPENDENCY) &&
                  (o = o.set(n.fragment_id, {
                    adObjectType: n.ad_object_type,
                    adObjectID: n.ad_object_id,
                    adObjectErrorMessage: n.error_message,
                    adObjectErrorCode: n.error_code,
                  })));
            }),
            t.merge({
              isComponentRendered: a,
              pendingFragments: e,
              failedFragments: o,
            })
          );
        },
      },
      s = e;
    l.default = s;
  },
  98,
);
