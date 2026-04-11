__d(
  "BanzaiUtils",
  ["BanzaiConsts", "FBLogger", "cr:1172", "cr:9985", "cr:9986"],
  function (t, n, r, o, a, i) {
    "use strict";
    var e,
      l = {
        canSend: function (r) {
          return r[2] >= n("cr:9985")() - (e || (e = n("BanzaiConsts"))).EXPIRY;
        },
        filterPost: function (r, o, a, i) {
          if (
            i.overlimit ||
            (!i.sendMinimumOnePost &&
              r[4] + i.currentSize >
                (e || (e = n("BanzaiConsts"))).BATCH_SIZE_LIMIT)
          )
            return !0;
          var t = r.__meta;
          if (
            (t.status != null &&
              t.status >= (e || (e = n("BanzaiConsts"))).POST_SENT) ||
            !l.canSend(r)
          )
            return !1;
          if (
            t.status != null &&
            t.status >= (e || (e = n("BanzaiConsts"))).POST_INFLIGHT
          )
            return !0;
          var s = t.compress != null ? t.compress : !0,
            u =
              (t.webSessionId != null ? t.webSessionId : "null") +
              (t.userID != null ? t.userID : "null") +
              (t.appID != null ? t.appID : "null") +
              (s ? "compress" : ""),
            c = i.wadMap.get(u);
          return (
            c ||
              ((c = {
                app_id: t.appID,
                needs_compression: s,
                posts: [],
                user: t.userID,
                webSessionId: t.webSessionId,
              }),
              i.wadMap.set(u, c),
              o.push(c)),
            (t.status = (e || (e = n("BanzaiConsts"))).POST_INFLIGHT),
            Array.isArray(c.posts)
              ? c.posts.push(r)
              : n("FBLogger")("banzai").mustfix(
                  "Posts were a string instead of array",
                ),
            a.push(r),
            (i.currentSize += r[4]),
            i.currentSize >= (e || (e = n("BanzaiConsts"))).BATCH_SIZE_LIMIT &&
              (i.overlimit = !0),
            i.keepRetryable && !!t.retry
          );
        },
        resetPostStatus: function (r) {
          r.__meta.status = (e || (e = n("BanzaiConsts"))).POST_READY;
        },
        retryPost: function (r, o, a) {
          var t = r;
          ((t.__meta.status = (e || (e = n("BanzaiConsts"))).POST_READY),
            (t[3] = (t[3] || 0) + 1),
            t.__meta.retry !== !0 && o >= 400 && o < 600 && a.push(r));
        },
        wrapData: function (r, o, a, i, l) {
          var t = [
            r,
            o,
            a,
            0,
            l != null ? l : o ? JSON.stringify(o).length : 0,
          ];
          return (
            (t.__meta = {
              appID: n("cr:9986").getAppID(),
              retry: i === !0,
              status: (e || (e = n("BanzaiConsts"))).POST_READY,
              userID: n("cr:9986").getPossiblyNonFacebookUserID(),
              webSessionId: n("cr:1172").getId(),
            }),
            t
          );
        },
      };
    a.exports = l;
  },
  null,
);
