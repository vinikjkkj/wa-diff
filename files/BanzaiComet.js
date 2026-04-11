__d(
  "BanzaiComet",
  [
    "BanzaiAdapterComet",
    "BanzaiCompressionUtils",
    "BanzaiConsts",
    "BanzaiLazyQueue",
    "BanzaiUtils",
    "CurrentAppID",
    "CurrentUser",
    "ErrorGuard",
    "ExecutionEnvironment",
    "FBLogger",
    "Promise",
    "Run",
    "Visibility",
    "WebSession",
    "clearTimeout",
    "performanceAbsoluteNow",
    "setInterval",
    "setTimeout",
    "setTimeoutCometLoggingPriWithFallback",
    "setTimeoutCometSpeculativeWithFallback",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u,
      c,
      d,
      m = { basic: [], vital: [] },
      p = [],
      _ = { basic: null, vital: null },
      f = { basic: null, vital: null },
      g = new Map(),
      h,
      y = null,
      C = {
        _expiredBatchMap: function () {
          var e = (s || (s = r("performanceAbsoluteNow")))();
          for (var t of g.entries()) {
            var n = t[1];
            if (n.expiryTime <= e) {
              var o,
                a,
                i = n.posts[0],
                l =
                  (o = i.__meta.priority) != null
                    ? o
                    : (u || (u = r("BanzaiConsts"))).BASIC;
              ((a = C._getPostBuffer(l)).push.apply(a, n.posts),
                g.delete(t[0]));
            }
          }
          g.size > 0 &&
            (h = r("setTimeout")(
              C._expiredBatchMap,
              (u || (u = r("BanzaiConsts"))).BATCH_TIMEOUT,
            ));
        },
        _flushBatchMap: function () {
          (r("clearTimeout")(h), (h = null));
          for (var e of g.values()) {
            var t,
              n,
              o = e.posts[0],
              a =
                (t = o.__meta.priority) != null
                  ? t
                  : (u || (u = r("BanzaiConsts"))).BASIC;
            (n = C._getPostBuffer(a)).push.apply(n, e.posts);
          }
          g.clear();
        },
        _flushLazyQueue: function () {
          r("BanzaiLazyQueue")
            .flushQueue()
            .forEach(function (e) {
              return C.post.apply(C, e);
            });
        },
        _gatherWadsAndPostsFromBuffer: function (t, n, o, a, i, l) {
          var e = {
              currentSize: 0,
              keepRetryable: o,
              overlimit: !1,
              sendMinimumOnePost: l,
              wadMap: new Map(),
            },
            s = i[a].filter(function (o) {
              return r("BanzaiUtils").filterPost(o, t, n, e);
            });
          return (
            !e.overlimit &&
              a === "vital" &&
              (i.basic = i.basic.filter(function (o) {
                return r("BanzaiUtils").filterPost(o, t, n, e);
              })),
            s
          );
        },
        _getPostBuffer: function (t) {
          return t == null ? m.basic : m[t] || [];
        },
        _handleBatchPost: function (t, n, o) {
          if (o == null) return !1;
          var e = t[2],
            a = t[0],
            i = g.get(a);
          if (i != null && i.expiryTime <= e) {
            var l;
            return (
              (l = C._getPostBuffer(n)).push.apply(l, i.posts),
              g.delete(a),
              !1
            );
          }
          if (i != null && i.expiryTime > e) return (i.posts.push(t), !0);
          var s = { expiryTime: e + o, posts: [t] };
          return (
            g.set(a, s),
            h ||
              (h = r("setTimeout")(
                C._expiredBatchMap,
                (u || (u = r("BanzaiConsts"))).BATCH_TIMEOUT,
              )),
            !0
          );
        },
        _handlePostPreflightChecks: function (t, n, o) {
          if (
            C.adapter.config.disabled === !0 ||
            (!(c || (c = r("ExecutionEnvironment"))).canUseDOM &&
              !(c || (c = r("ExecutionEnvironment"))).isInWorker) ||
            r("BanzaiAdapterComet").config.disabled === !0
          )
            return !0;
          var e = r("BanzaiAdapterComet").config.blacklist;
          return (
            e != null && typeof e.indexOf == "function" && e.indexOf(t) !== -1
          );
        },
        _handleSignalPost: function (t, n, a) {
          if (!a) return !1;
          var e = t;
          e.__meta.status = (u || (u = r("BanzaiConsts"))).POST_INFLIGHT;
          var i = [
            {
              app_id: o("CurrentAppID").getAppID(),
              posts: [t],
              trigger: t[0],
              user: r("CurrentUser").getPossiblyNonFacebookUserID(),
              webSessionId: o("WebSession").getId(),
            },
          ];
          return (
            r("BanzaiAdapterComet").send(
              C._prepForTransit(i),
              function () {
                ((e.__meta.status = (u || (u = r("BanzaiConsts"))).POST_SENT),
                  e.__meta.callback != null && e.__meta.callback());
              },
              function (e) {
                r("BanzaiUtils").retryPost(t, e, m[n]);
              },
              !0,
            ),
            !e.__meta.retry
          );
        },
        _initialize: function () {
          var e = [(u || (u = r("BanzaiConsts"))).VITAL, u.BASIC];
          if ((c || (c = r("ExecutionEnvironment"))).canUseDOM) {
            if (
              (r("setInterval")(
                function () {
                  C._flushLazyQueue();
                },
                (u || (u = r("BanzaiConsts"))).ENSURE_LAZY_QUEUE_FLUSH_TIMEOUT,
              ),
              r("Visibility").isSupported())
            ) {
              var t;
              ((t = r("Visibility")).addListener(t.HIDDEN, function () {
                (C._flushLazyQueue(),
                  e.forEach(function (e) {
                    C._getPostBuffer(e).length > 0 && C._tryToSendViaBeacon(e);
                  }),
                  C._store());
              }),
                t.addListener(t.VISIBLE, function () {
                  (C._flushLazyQueue(),
                    e.forEach(function (e) {
                      C._tryToSendViaBeacon(e);
                    }),
                    C._restore());
                }));
            } else C.adapter.setHooks(C);
            (o("Run").onBeforeUnload(function () {
              (C._flushLazyQueue(),
                C._flushBatchMap(),
                C._sendBeacon((u || (u = r("BanzaiConsts"))).VITAL),
                C._sendBeacon(u.BASIC));
            }, !1),
              C.adapter.setUnloadHook(C),
              o("Run").onAfterLoad(function () {
                C._restore();
              }));
          } else
            (c || (c = r("ExecutionEnvironment"))).isInWorker &&
              self.addEventListener("force-flush-logs", function () {
                (C.flush(), C._flushLazyQueue(), C._flushBatchMap());
              });
        },
        _isShutdown: !1,
        _prepForTransit: function (t) {
          var e = new FormData();
          e.append("ts", String(Date.now()));
          var n = r("BanzaiCompressionUtils").outOfBandsPosts(t);
          return (
            Object.keys(n).forEach(function (t) {
              e.append(t, n[t]);
            }),
            e.append("q", JSON.stringify(t)),
            e
          );
        },
        _prepWadForTransit: function (t) {
          r("BanzaiCompressionUtils").compressWad(
            t,
            r("BanzaiAdapterComet").preferredCompressionMethod(),
          );
        },
        _prepWadForTransitAsync: function (t) {
          return r("BanzaiCompressionUtils").compressWadAsync(
            t,
            r("BanzaiAdapterComet").preferredCompressionMethod(),
          );
        },
        _restore: function () {
          var e = function (t) {
              var e = t.__meta,
                n =
                  e.priority === (u || (u = r("BanzaiConsts"))).VITAL
                    ? (u || (u = r("BanzaiConsts"))).VITAL
                    : (u || (u = r("BanzaiConsts"))).BASIC;
              C._getPostBuffer(n).push(t);
            },
            t = r("BanzaiAdapterComet").getStorage();
          ((d || (d = r("ErrorGuard"))).applyWithGuard(t.restore, t, [e]),
            C._schedule((u || (u = r("BanzaiConsts"))).VITAL_WAIT, u.VITAL));
        },
        _schedule: function (t, n) {
          if (n == null) return !1;
          var e = function () {
              ((f[n] = null),
                (_[n] = null),
                C._sendWithCallbacks(n, null, null));
            },
            o = (s || (s = r("performanceAbsoluteNow")))() + t;
          return _[n] == null || o < _[n]
            ? ((_[n] = o),
              f[n] !== null && r("clearTimeout")(f[n]),
              n === (u || (u = r("BanzaiConsts"))).VITAL
                ? (f.vital = r("setTimeoutCometLoggingPriWithFallback")(e, t))
                : (f.basic = r("setTimeoutCometSpeculativeWithFallback")(e, t)),
              !0)
            : !1;
        },
        _sendBeacon: function (t) {
          C._getPostBuffer(t).length > 0 && C._tryToSendViaBeacon(t);
        },
        _sendWithCallbacks: function (o, a, i) {
          if (
            (m[o].length > 0 &&
              C._schedule(
                o === "vital"
                  ? (u || (u = r("BanzaiConsts"))).VITAL_WAIT
                  : (u || (u = r("BanzaiConsts"))).BASIC_WAIT_COMET,
                o,
              ),
            !r("BanzaiAdapterComet").readyToSend())
          ) {
            i && i();
            return;
          }
          var t = r("BanzaiAdapterComet").getStorage();
          ((d || (d = r("ErrorGuard"))).applyWithGuard(t.flush, t, [
            C._restore,
          ]),
            r("BanzaiAdapterComet").inform(
              (u || (u = r("BanzaiConsts"))).SEND,
            ));
          var l = [],
            s = [];
          if (
            ((m[o] = C._gatherWadsAndPostsFromBuffer(l, s, !0, o, m, !0)),
            l.length <= 0)
          ) {
            (r("BanzaiAdapterComet").inform((u || (u = r("BanzaiConsts"))).OK),
              a && a());
            return;
          }
          ((l[0].trigger = y),
            (y = null),
            l.forEach(function (e) {
              return (e.send_method = "ajax");
            }),
            p.push.apply(p, s),
            (e || (e = n("Promise")))
              .all(l.map(C._prepWadForTransitAsync))
              .finally(function () {
                C._isShutdown ||
                  (s.forEach(function (e) {
                    var t = p.indexOf(e);
                    if (t === -1) {
                      r("FBLogger")("comet_infra").mustfix(
                        "inflight post not found in inPreparationPosts",
                      );
                      return;
                    }
                    p.splice(t, 1);
                  }),
                  r("BanzaiAdapterComet").send(
                    C._prepForTransit(l),
                    function () {
                      (s.forEach(function (e) {
                        var t = e;
                        ((t.__meta.status = (
                          u || (u = r("BanzaiConsts"))
                        ).POST_SENT),
                          typeof t.__meta.callback == "function" &&
                            t.__meta.callback());
                      }),
                        a && a());
                    },
                    function (e) {
                      (s.forEach(function (t) {
                        r("BanzaiUtils").retryPost(t, e, m[o]);
                      }),
                        C._store(),
                        i && i());
                    },
                  ));
              }));
        },
        _store: function () {
          var e = r("BanzaiAdapterComet").getStorage();
          ((d || (d = r("ErrorGuard"))).applyWithGuard(e.store, e, [
            m[(u || (u = r("BanzaiConsts"))).VITAL],
          ]),
            d.applyWithGuard(e.store, e, [m[u.BASIC]]));
        },
        _testState: function () {
          return { postBuffer: m.basic, triggerRoute: y };
        },
        _tryToSendViaBeacon: function (n) {
          if (!(navigator && navigator.sendBeacon)) return !1;
          var e = !0,
            o = [],
            a = [];
          if (
            ((m[n] = C._gatherWadsAndPostsFromBuffer(o, a, !1, n, m, !1)),
            o.length <= 0)
          )
            return !1;
          (o.forEach(function (e) {
            return (e.send_method = "beacon");
          }),
            o.map(C._prepWadForTransit));
          var i = C._prepForTransit(o),
            l = C.adapter.getEndPointUrl(!0),
            s = t.navigator.sendBeacon(l, i);
          return (
            s ||
              ((e = !1),
              a.forEach(function (e) {
                (r("BanzaiUtils").resetPostStatus(e),
                  C._getPostBuffer(n).push(e));
              })),
            e
          );
        },
        _unload: function () {
          (C._flushLazyQueue(),
            C._flushBatchMap(),
            r("BanzaiAdapterComet").cleanup(),
            r("BanzaiAdapterComet").inform(
              (u || (u = r("BanzaiConsts"))).SHUTDOWN,
            ),
            (C._isShutdown = !0),
            p.forEach(function (e) {
              var t = e,
                n = t.__meta.priority;
              r("BanzaiUtils").retryPost(
                e,
                444,
                C._getPostBuffer(
                  n != null ? n : (u || (u = r("BanzaiConsts"))).VITAL,
                ),
              );
            }),
            C._sendBeacon(u.VITAL),
            C._sendBeacon(u.BASIC),
            C._store());
        },
        _validateRouteAndSize: function (t, n) {
          var e;
          return (
            t ||
              r("FBLogger")("banzai")
                .blameToPreviousFrame()
                .blameToPreviousFrame()
                .mustfix("BanzaiComet.post called without specifying a route"),
            ((e = JSON.stringify(n)) != null ? e : "").length
          );
        },
        BASIC: { delay: (u || (u = r("BanzaiConsts"))).BASIC_WAIT },
        BASIC_WAIT: u.BASIC_WAIT,
        ERROR: u.ERROR,
        EXPIRY: void 0,
        OK: u.OK,
        SEND: u.SEND,
        SHUTDOWN: u.SHUTDOWN,
        VITAL: { delay: u.VITAL_WAIT },
        VITAL_WAIT: u.VITAL_WAIT,
        adapter: r("BanzaiAdapterComet"),
        canUseNavigatorBeacon: function () {
          return !!(
            navigator &&
            navigator.sendBeacon &&
            r("BanzaiAdapterComet").isOkToSendViaBeacon()
          );
        },
        flush: function (t, n) {
          (C.flushHelper((u || (u = r("BanzaiConsts"))).VITAL, t, n),
            C.flushHelper(u.BASIC, t, n));
        },
        flushHelper: function (t, n, o) {
          ((_[t] = null),
            f[t] !== null && (r("clearTimeout")(f[t]), (f[t] = null)),
            C._sendWithCallbacks(t, n, o));
        },
        isEnabled: function (t) {
          return !!(
            r("BanzaiAdapterComet").config.gks &&
            r("BanzaiAdapterComet").config.gks[t]
          );
        },
        post: function (t, n, o) {
          var e, a;
          if ((C._flushLazyQueue(), !C._handlePostPreflightChecks(t, n, o))) {
            var i = t.split(":");
            if (
              !(
                (r("BanzaiAdapterComet").config.known_routes || []).indexOf(
                  i[0],
                ) === -1 &&
                (r("BanzaiAdapterComet").config.should_log_unknown_routes ===
                  !0 &&
                  r("FBLogger")("banzai")
                    .blameToPreviousFrame()
                    .mustfix(
                      "Attempted to post to invalid Banzai route '" +
                        t +
                        "'. This call site should be cleaned up.",
                    ),
                r("BanzaiAdapterComet").config.should_drop_unknown_routes ===
                  !0)
              )
            ) {
              var l = C._validateRouteAndSize(t, n),
                c = o || {},
                d = r("BanzaiUtils").wrapData(
                  t,
                  n,
                  (s || (s = r("performanceAbsoluteNow")))(),
                  c.retry,
                  l,
                ),
                m = d;
              (c.callback && (m.__meta.callback = c.callback),
                c.compress != null && (m.__meta.compress = c.compress));
              var p =
                  (e = c.delay) != null
                    ? e
                    : (u || (u = r("BanzaiConsts"))).BASIC_WAIT_COMET,
                _ =
                  p > (u || (u = r("BanzaiConsts"))).VITAL_WAIT
                    ? (u || (u = r("BanzaiConsts"))).BASIC
                    : (u || (u = r("BanzaiConsts"))).VITAL;
              ((m.__meta.priority = _),
                !C._handleSignalPost(d, _, (a = c.signal) != null ? a : !1) &&
                  (C._handleBatchPost(d, _, c.batch) ||
                    (C._getPostBuffer(_).push(d),
                    (C._schedule(p, _) || y == null) && (y = t))));
            }
          }
        },
        postsCount: new Map(),
        subscribe: r("BanzaiAdapterComet").subscribe,
      };
    C._initialize();
    var b = C;
    l.default = b;
  },
  98,
);
