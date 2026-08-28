__d(
  "AdsDraftPublishingManagerPublishingCompleteReducerPlugin",
  ["FBLogger", "adsDraftPublishingManagerUpdateState", "immutable"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        reduce: function (t, n) {
          var e,
            o = (e = n.response.fragment_statuses) == null ? void 0 : e.data,
            a = t.fragmentIDs;
          if (n.response.publish_error == null) {
            var i = t;
            if (o != null) i = r("adsDraftPublishingManagerUpdateState")(t, o);
            else {
              var l;
              if (
                ((l = n.response) == null ? void 0 : l.async_request_set_id) !=
                null
              ) {
                var s;
                r("FBLogger")(
                  "ads_front_end_infra",
                  "AdsDraftPublishingManagerPublishingCompleteReducerPlugin",
                ).debug(
                  "fragment_statuses should not be null. async_request_set_id: " +
                    (((s = n.response) == null
                      ? void 0
                      : s.async_request_set_id) || ""),
                );
              }
            }
            return i.set("isPublishingComplete", !0);
          }
          return t.withMutations(function (e) {
            (o != null &&
              o.forEach(function (t) {
                a.has(t.fragment_id) &&
                  e.set(
                    "failedFragments",
                    e.failedFragments.set(t.fragment_id, {
                      adObjectType: t.ad_object_type,
                      adObjectID: t.ad_object_id,
                      adObjectErrorMessage: t.error_message,
                      adObjectStatus: t.status,
                      adObjectErrorCode: t.error_code,
                    }),
                  );
              }),
              e.set("isPublishingComplete", !0),
              e.set("pendingFragments", r("immutable").Map()));
          });
        },
      },
      s = e;
    l.default = s;
  },
  98,
);
