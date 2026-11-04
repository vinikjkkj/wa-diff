__d(
  "BanzaiUtils",
  ["BanzaiConsts", "FBLogger", "cr:1172", "cr:9985", "cr:9986"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e;
    function s(t) {
      return t[2] >= n("cr:9985")() - (e || (e = r("BanzaiConsts"))).EXPIRY;
    }
    function u(t, n, o, a) {
      if (
        a.overlimit ||
        (!a.sendMinimumOnePost &&
          t[4] + a.currentSize >
            (e || (e = r("BanzaiConsts"))).BATCH_SIZE_LIMIT)
      )
        return !0;
      var i = t.__meta;
      if (
        (i.status != null &&
          i.status >= (e || (e = r("BanzaiConsts"))).POST_SENT) ||
        !s(t)
      )
        return !1;
      if (
        i.status != null &&
        i.status >= (e || (e = r("BanzaiConsts"))).POST_INFLIGHT
      )
        return !0;
      var l = i.compress != null ? i.compress : !0,
        u =
          (i.webSessionId != null ? i.webSessionId : "null") +
          (i.userID != null ? i.userID : "null") +
          (i.appID != null ? i.appID : "null") +
          (l ? "compress" : ""),
        c = a.wadMap.get(u);
      return (
        c ||
          ((c = {
            app_id: i.appID,
            needs_compression: l,
            posts: [],
            user: i.userID,
            webSessionId: i.webSessionId,
          }),
          a.wadMap.set(u, c),
          n.push(c)),
        (i.status = (e || (e = r("BanzaiConsts"))).POST_INFLIGHT),
        Array.isArray(c.posts)
          ? c.posts.push(t)
          : r("FBLogger")("banzai").mustfix(
              "Posts were a string instead of array",
            ),
        o.push(t),
        (a.currentSize += t[4]),
        a.currentSize >= (e || (e = r("BanzaiConsts"))).BATCH_SIZE_LIMIT &&
          (a.overlimit = !0),
        a.keepRetryable && !!i.retry
      );
    }
    function c(t) {
      t.__meta.status = (e || (e = r("BanzaiConsts"))).POST_READY;
    }
    function d(t, n, o, a) {
      var i = t;
      if (((i[3] = (i[3] || 0) + 1), a != null && i[3] > a)) {
        i.__meta.status = (e || (e = r("BanzaiConsts"))).POST_SENT;
        return;
      }
      ((i.__meta.status = (e || (e = r("BanzaiConsts"))).POST_READY),
        i.__meta.retry !== !0 && n >= 400 && n < 600 && o.push(t));
    }
    function m(t, o, a, i, l) {
      var s = [t, o, a, 0, l != null ? l : o ? JSON.stringify(o).length : 0];
      return (
        (s.__meta = {
          appID: n("cr:9986").getAppID(),
          retry: i === !0,
          status: (e || (e = r("BanzaiConsts"))).POST_READY,
          userID: n("cr:9986").getPossiblyNonFacebookUserID(),
          webSessionId: n("cr:1172").getId(),
        }),
        s
      );
    }
    ((l.canSend = s),
      (l.filterPost = u),
      (l.resetPostStatus = c),
      (l.retryPost = d),
      (l.wrapData = m));
  },
  98,
);
