__d(
  "adsDraftPublishingManagerUpdateState",
  ["AdAsyncRequestStatus"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      if (e.pendingFragments.has(t.fragment_id)) {
        var n = e.pendingFragments.delete(t.fragment_id);
        return e.merge({ pendingFragments: n });
      }
      if (e.publishingFragments.has(t.fragment_id)) {
        var r = e.publishingFragments.delete(t.fragment_id);
        return e.merge({ publishingFragments: r });
      }
      if (e.publishedFragments.has(t.fragment_id)) {
        var o = e.publishedFragments.delete(t.fragment_id);
        return e.merge({ publishedFragments: o });
      }
      if (e.failedFragments.has(t.fragment_id)) {
        var a = e.failedFragments.delete(t.fragment_id);
        return e.merge({ failedFragments: a });
      }
      if (e.cancelledFragments.has(t.fragment_id)) {
        var i = e.cancelledFragments.delete(t.fragment_id);
        return e.merge({ cancelledFragments: i });
      }
      return e;
    }
    function s(e, t) {
      return t.withMutations(function (t) {
        e.forEach(function (e) {
          t.set(e.fragment_id, {
            adObjectType: e.ad_object_type,
            adObjectID: e.ad_object_id,
            adObjectErrorMessage: e.error_message,
            adObjectStatus: e.status,
            adObjectErrorCode: e.error_code,
          });
        });
      });
    }
    function u(t, n) {
      var o = [],
        a = [],
        i = [],
        l = [],
        u = [],
        c = t;
      return (
        n.forEach(function (t) {
          switch (((c = e(c, t)), t.status)) {
            case r("AdAsyncRequestStatus").INITIAL:
            case r("AdAsyncRequestStatus").PENDING_DEPENDENCY:
            case r("AdAsyncRequestStatus").PROCESS_BY_EVENT_PROCESSOR:
              o.push(t);
              break;
            case r("AdAsyncRequestStatus").IN_PROGRESS:
              a.push(t);
              break;
            case r("AdAsyncRequestStatus").SUCCESS:
              i.push(t);
              break;
            case r("AdAsyncRequestStatus").ERROR:
            case r("AdAsyncRequestStatus").ERROR_DEPENDENCY:
              l.push(t);
              break;
            case r("AdAsyncRequestStatus").CANCELED:
            case r("AdAsyncRequestStatus").CANCELED_DEPENDENCY:
              u.push(t);
          }
        }),
        c.merge({
          pendingFragments: s(o, c.pendingFragments),
          publishingFragments: s(a, c.publishingFragments),
          publishedFragments: s(i, c.publishedFragments),
          failedFragments: s(l, c.failedFragments),
          cancelledFragments: s(u, c.cancelledFragments),
        })
      );
    }
    l.default = u;
  },
  98,
);
