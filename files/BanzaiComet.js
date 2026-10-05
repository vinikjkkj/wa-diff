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
    "justknobx",
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
      y = { basic: 0, vital: 0 },
      C = { basic: 0, vital: 0 },
      b = null;
    function v() {
      return (
        (s || (s = r("ExecutionEnvironment"))).isInSharedWorker ||
        ((s || (s = r("ExecutionEnvironment"))).isInWorker &&
          typeof DedicatedWorkerGlobalScope == "function" &&
          self instanceof DedicatedWorkerGlobalScope)
      );
    }
    function S() {
      return v() && r("justknobx")._("6180");
    }
    function R() {
      return S() ? r("justknobx")._("6181") : null;
    }
    function L(e) {
      (y[e]++,
        (C[e] =
          (u || (u = r("performanceAbsoluteNow")))() +
          Math.min(
            (c || (c = r("BanzaiConsts"))).VITAL_WAIT * Math.pow(2, y[e] - 1),
            r("justknobx")._("6182"),
          )));
    }
    var E = {
      _expiredBatchMap: function () {
        var e = (u || (u = r("performanceAbsoluteNow")))();
        for (var t of g.entries()) {
          var n = t[1];
          if (n.expiryTime <= e) {
            var o,
              a,
              i = n.posts[0],
              l =
                (o = i.__meta.priority) != null
                  ? o
                  : (c || (c = r("BanzaiConsts"))).BASIC;
            ((a = E._getPostBuffer(l)).push.apply(a, n.posts), g.delete(t[0]));
          }
        }
        g.size > 0 &&
          (h = r("setTimeout")(
            E._expiredBatchMap,
            (c || (c = r("BanzaiConsts"))).BATCH_TIMEOUT,
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
                : (c || (c = r("BanzaiConsts"))).BASIC;
          (n = E._getPostBuffer(a)).push.apply(n, e.posts);
        }
        g.clear();
      },
      _flushLazyQueue: function () {
        r("BanzaiLazyQueue")
          .flushQueue()
          .forEach(function (e) {
            return E.post.apply(E, e);
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
            (l = E._getPostBuffer(n)).push.apply(l, i.posts),
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
              E._expiredBatchMap,
              (c || (c = r("BanzaiConsts"))).BATCH_TIMEOUT,
            )),
          !0
        );
      },
      _handlePostPreflightChecks: function (t, n, o) {
        if (
          E.adapter.config.disabled === !0 ||
          (!(s || (s = r("ExecutionEnvironment"))).canUseDOM &&
            !(s || (s = r("ExecutionEnvironment"))).isInWorker) ||
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
        e.__meta.status = (c || (c = r("BanzaiConsts"))).POST_INFLIGHT;
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
            E._prepForTransit(i),
            function () {
              ((e.__meta.status = (c || (c = r("BanzaiConsts"))).POST_SENT),
                e.__meta.callback != null && e.__meta.callback());
            },
            function (e) {
              r("BanzaiUtils").retryPost(t, e, m[n], R());
            },
            !0,
          ),
          !e.__meta.retry
        );
      },
      _initialize: function () {
        var e = [(c || (c = r("BanzaiConsts"))).VITAL, c.BASIC];
        if ((s || (s = r("ExecutionEnvironment"))).canUseDOM) {
          if (
            (r("setInterval")(
              function () {
                E._flushLazyQueue();
              },
              (c || (c = r("BanzaiConsts"))).ENSURE_LAZY_QUEUE_FLUSH_TIMEOUT,
            ),
            r("Visibility").isSupported())
          ) {
            var t;
            ((t = r("Visibility")).addListener(t.HIDDEN, function () {
              (E._flushLazyQueue(),
                e.forEach(function (e) {
                  E._getPostBuffer(e).length > 0 && E._tryToSendViaBeacon(e);
                }),
                E._store());
            }),
              t.addListener(t.VISIBLE, function () {
                (E._flushLazyQueue(),
                  e.forEach(function (e) {
                    E._tryToSendViaBeacon(e);
                  }),
                  E._restore());
              }));
          } else E.adapter.setHooks(E);
          (o("Run").onBeforeUnload(function () {
            (E._flushLazyQueue(),
              E._flushBatchMap(),
              E._sendBeacon((c || (c = r("BanzaiConsts"))).VITAL),
              E._sendBeacon(c.BASIC));
          }, !1),
            E.adapter.setUnloadHook(E),
            o("Run").onAfterLoad(function () {
              E._restore();
            }));
        } else
          (s || (s = r("ExecutionEnvironment"))).isInWorker &&
            self.addEventListener("force-flush-logs", function () {
              (E.flush(), E._flushLazyQueue(), E._flushBatchMap());
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
                e.priority === (c || (c = r("BanzaiConsts"))).VITAL
                  ? (c || (c = r("BanzaiConsts"))).VITAL
                  : (c || (c = r("BanzaiConsts"))).BASIC;
            E._getPostBuffer(n).push(t);
          },
          t = r("BanzaiAdapterComet").getStorage();
        ((d || (d = r("ErrorGuard"))).applyWithGuard(t.restore, t, [e]),
          E._schedule((c || (c = r("BanzaiConsts"))).VITAL_WAIT, c.VITAL));
      },
      _schedule: function (t, n) {
        if (n == null) return !1;
        var e = function () {
            if (
              ((f[n] = null),
              (_[n] = null),
              (u || (u = r("performanceAbsoluteNow")))() < C[n])
            ) {
              E._schedule(0, n);
              return;
            }
            E._sendWithCallbacks(n, null, null);
          },
          o = (u || (u = r("performanceAbsoluteNow")))(),
          a = Math.max(t, C[n] - o),
          i = o + a;
        return _[n] == null || i < _[n]
          ? ((_[n] = i),
            f[n] !== null && r("clearTimeout")(f[n]),
            n === (c || (c = r("BanzaiConsts"))).VITAL
              ? (f.vital = r("setTimeoutCometLoggingPriWithFallback")(e, a))
              : (f.basic = r("setTimeoutCometSpeculativeWithFallback")(e, a)),
            !0)
          : !1;
      },
      _sendBeacon: function (t) {
        E._getPostBuffer(t).length > 0 && E._tryToSendViaBeacon(t);
      },
      _sendWithCallbacks: function (o, a, i) {
        if (
          (m[o].length > 0 &&
            E._schedule(
              o === "vital"
                ? (c || (c = r("BanzaiConsts"))).VITAL_WAIT
                : (c || (c = r("BanzaiConsts"))).BASIC_WAIT_COMET,
              o,
            ),
          !r("BanzaiAdapterComet").readyToSend())
        ) {
          i && i();
          return;
        }
        var t = r("BanzaiAdapterComet").getStorage();
        ((d || (d = r("ErrorGuard"))).applyWithGuard(t.flush, t, [E._restore]),
          r("BanzaiAdapterComet").inform((c || (c = r("BanzaiConsts"))).SEND));
        var l = [],
          s = [];
        if (
          ((m[o] = E._gatherWadsAndPostsFromBuffer(l, s, !0, o, m, !0)),
          l.length <= 0)
        ) {
          (r("BanzaiAdapterComet").inform((c || (c = r("BanzaiConsts"))).OK),
            a && a());
          return;
        }
        ((l[0].trigger = b),
          (b = null),
          l.forEach(function (e) {
            return (e.send_method = "ajax");
          }),
          p.push.apply(p, s),
          (e || (e = n("Promise")))
            .all(l.map(E._prepWadForTransitAsync))
            .finally(function () {
              E._isShutdown ||
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
                  E._prepForTransit(l),
                  function () {
                    ((y[o] = 0),
                      (C[o] = 0),
                      s.forEach(function (e) {
                        var t = e;
                        ((t.__meta.status = (
                          c || (c = r("BanzaiConsts"))
                        ).POST_SENT),
                          typeof t.__meta.callback == "function" &&
                            t.__meta.callback());
                      }),
                      a && a());
                  },
                  function (e) {
                    var t = R();
                    (s.forEach(function (n) {
                      r("BanzaiUtils").retryPost(n, e, m[o], t);
                    }),
                      S() && L(o),
                      E._store(),
                      i && i());
                  },
                ));
            }));
      },
      _store: function () {
        var e = r("BanzaiAdapterComet").getStorage();
        ((d || (d = r("ErrorGuard"))).applyWithGuard(e.store, e, [
          m[(c || (c = r("BanzaiConsts"))).VITAL],
        ]),
          d.applyWithGuard(e.store, e, [m[c.BASIC]]));
      },
      _testState: function () {
        return { postBuffer: m.basic, triggerRoute: b };
      },
      _tryToSendViaBeacon: function (n) {
        if (!(navigator && navigator.sendBeacon)) return !1;
        var e = !0,
          o = [],
          a = [];
        if (
          ((m[n] = E._gatherWadsAndPostsFromBuffer(o, a, !1, n, m, !1)),
          o.length <= 0)
        )
          return !1;
        (o.forEach(function (e) {
          return (e.send_method = "beacon");
        }),
          o.map(E._prepWadForTransit));
        var i = E._prepForTransit(o),
          l = E.adapter.getEndPointUrl(!0),
          s = t.navigator.sendBeacon(l, i);
        return (
          s ||
            ((e = !1),
            a.forEach(function (e) {
              (r("BanzaiUtils").resetPostStatus(e),
                E._getPostBuffer(n).push(e));
            })),
          e
        );
      },
      _unload: function () {
        (E._flushLazyQueue(),
          E._flushBatchMap(),
          r("BanzaiAdapterComet").cleanup(),
          r("BanzaiAdapterComet").inform(
            (c || (c = r("BanzaiConsts"))).SHUTDOWN,
          ),
          (E._isShutdown = !0),
          p.forEach(function (e) {
            var t = e,
              n = t.__meta.priority;
            r("BanzaiUtils").retryPost(
              e,
              444,
              E._getPostBuffer(
                n != null ? n : (c || (c = r("BanzaiConsts"))).VITAL,
              ),
            );
          }),
          E._sendBeacon(c.VITAL),
          E._sendBeacon(c.BASIC),
          E._store());
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
      BASIC: { delay: (c || (c = r("BanzaiConsts"))).BASIC_WAIT },
      BASIC_WAIT: c.BASIC_WAIT,
      ERROR: c.ERROR,
      EXPIRY: void 0,
      OK: c.OK,
      SEND: c.SEND,
      SHUTDOWN: c.SHUTDOWN,
      VITAL: { delay: c.VITAL_WAIT },
      VITAL_WAIT: c.VITAL_WAIT,
      adapter: r("BanzaiAdapterComet"),
      canUseNavigatorBeacon: function () {
        return !!(
          navigator &&
          navigator.sendBeacon &&
          r("BanzaiAdapterComet").isOkToSendViaBeacon()
        );
      },
      flush: function (t, n) {
        (E.flushHelper((c || (c = r("BanzaiConsts"))).VITAL, t, n),
          E.flushHelper(c.BASIC, t, n));
      },
      flushHelper: function (t, n, o) {
        ((_[t] = null),
          f[t] !== null && (r("clearTimeout")(f[t]), (f[t] = null)),
          E._sendWithCallbacks(t, n, o));
      },
      isEnabled: function (t) {
        return !!(
          r("BanzaiAdapterComet").config.gks &&
          r("BanzaiAdapterComet").config.gks[t]
        );
      },
      post: function (t, n, o) {
        var e, a;
        if ((E._flushLazyQueue(), !E._handlePostPreflightChecks(t, n, o))) {
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
              r("BanzaiAdapterComet").config.should_drop_unknown_routes === !0)
            )
          ) {
            var l = E._validateRouteAndSize(t, n),
              s = o || {},
              d = r("BanzaiUtils").wrapData(
                t,
                n,
                (u || (u = r("performanceAbsoluteNow")))(),
                s.retry,
                l,
              ),
              m = d;
            (s.callback && (m.__meta.callback = s.callback),
              s.compress != null && (m.__meta.compress = s.compress));
            var p =
                (e = s.delay) != null
                  ? e
                  : (c || (c = r("BanzaiConsts"))).BASIC_WAIT_COMET,
              _ =
                p > (c || (c = r("BanzaiConsts"))).VITAL_WAIT
                  ? (c || (c = r("BanzaiConsts"))).BASIC
                  : (c || (c = r("BanzaiConsts"))).VITAL;
            ((m.__meta.priority = _),
              !E._handleSignalPost(d, _, (a = s.signal) != null ? a : !1) &&
                (E._handleBatchPost(d, _, s.batch) ||
                  (E._getPostBuffer(_).push(d),
                  (E._schedule(p, _) || b == null) && (b = t))));
          }
        }
      },
      postsCount: new Map(),
      subscribe: r("BanzaiAdapterComet").subscribe,
    };
    E._initialize();
    var k = E;
    l.default = k;
  },
  98,
);
