__d(
  "react-query-2.25.2",
  ["babel-runtime-7.6.0", "react-dom-0.0.0", "react-0.0.0"],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = n("babel-runtime-7.6.0"),
      l = n("react-dom-0.0.0"),
      s = n("react-0.0.0"),
      u = {},
      c = { exports: u };
    function d() {
      ((u.__esModule = !0), (u.QueryStatus = void 0));
      var e;
      ((u.QueryStatus = e),
        (function (e) {
          ((e.Idle = "idle"),
            (e.Loading = "loading"),
            (e.Error = "error"),
            (e.Success = "success"));
        })(e || (u.QueryStatus = e = {})));
    }
    var m = !1;
    function p() {
      return (m || ((m = !0), d()), c.exports);
    }
    var _ = {},
      f = { exports: _ };
    function g() {
      var t = e("/helpers/interopRequireDefault");
      ((_.__esModule = !0),
        (_.uid = i),
        (_.noop = s),
        (_.setConsole = c),
        (_.functionalUpdate = d),
        (_.stableStringify = f),
        (_.deepIncludes = g),
        (_.isValidTimeout = h),
        (_.isDocumentVisible = y),
        (_.isOnline = C),
        (_.getQueryArgs = b),
        (_.replaceEqualDeep = v),
        (_.isPlainObject = S),
        (_.isCancelable = L),
        (_.isError = E),
        (_.isCancelledError = k),
        (_.sleep = I),
        (_.getStatusProps = T),
        (_.createSetHandler = D),
        (_.scheduleMicrotask = x),
        (_.setBatchedUpdates = P),
        (_.getBatchedUpdates = N),
        (_.Console = _.isServer = _.CancelledError = void 0));
      var n = t(e("/helpers/extends")),
        r = p(),
        o = function (t) {
          this.silent = t;
        };
      _.CancelledError = o;
      var a = 0;
      function i() {
        return a++;
      }
      var l = typeof window == "undefined";
      _.isServer = l;
      function s() {}
      var u = console || { error: s, warn: s, log: s };
      _.Console = u;
      function c(e) {
        _.Console = u = e;
      }
      function d(e, t) {
        return typeof e == "function" ? e(t) : e;
      }
      function m(e, t) {
        if (typeof t == "function") throw new Error();
        return S(t)
          ? Object.keys(t)
              .sort()
              .reduce(function (e, n) {
                return ((e[n] = t[n]), e);
              }, {})
          : t;
      }
      function f(e) {
        return JSON.stringify(e, m);
      }
      function g(e, t) {
        return e === t
          ? !0
          : typeof e != typeof t
            ? !1
            : typeof e == "object"
              ? !Object.keys(t).some(function (n) {
                  return !g(e[n], t[n]);
                })
              : !1;
      }
      function h(e) {
        return typeof e == "number" && e >= 0 && e !== 1 / 0;
      }
      function y() {
        return typeof document == "undefined"
          ? !0
          : [void 0, "visible", "prerender"].includes(document.visibilityState);
      }
      function C() {
        return navigator.onLine === void 0 || navigator.onLine;
      }
      function b(e, t, r, o) {
        var a, i, l, s;
        return (
          S(e)
            ? ((a = e.queryKey), (i = e.queryFn), (l = e.config), (s = t))
            : S(t)
              ? ((a = e), (l = t), (s = r))
              : ((a = e), (i = t), (l = r), (s = o)),
          (l = l || {}),
          i && (l = (0, n.default)({}, l, { queryFn: i })),
          [a, l, s]
        );
      }
      function v(e, t) {
        if (e === t) return e;
        var n = Array.isArray(e) && Array.isArray(t);
        if (n || (S(e) && S(t))) {
          for (
            var r = n ? e.length : Object.keys(e).length,
              o = n ? t : Object.keys(t),
              a = o.length,
              i = n ? [] : {},
              l = 0,
              s = 0;
            s < a;
            s++
          ) {
            var u = n ? s : o[s];
            ((i[u] = v(e[u], t[u])), i[u] === e[u] && l++);
          }
          return r === a && l === r ? e : i;
        }
        return t;
      }
      function S(e) {
        if (!R(e)) return !1;
        var t = e.constructor;
        if (typeof t == "undefined") return !0;
        var n = t.prototype;
        return !(!R(n) || !n.hasOwnProperty("isPrototypeOf"));
      }
      function R(e) {
        return Object.prototype.toString.call(e) === "[object Object]";
      }
      function L(e) {
        return typeof (e == null ? void 0 : e.cancel) == "function";
      }
      function E(e) {
        return e instanceof Error;
      }
      function k(e) {
        return e instanceof o;
      }
      function I(e) {
        return new Promise(function (t) {
          setTimeout(t, e);
        });
      }
      function T(e) {
        return {
          status: e,
          isLoading: e === r.QueryStatus.Loading,
          isSuccess: e === r.QueryStatus.Success,
          isError: e === r.QueryStatus.Error,
          isIdle: e === r.QueryStatus.Idle,
        };
      }
      function D(e) {
        var t;
        return function (n) {
          (t && t(), (t = n(e)));
        };
      }
      function x(e) {
        Promise.resolve()
          .then(e)
          .catch(function (e) {
            return setTimeout(function () {
              throw e;
            });
          });
      }
      var $ = function (t) {
        t();
      };
      function P(e) {
        $ = e;
      }
      function N() {
        return $;
      }
    }
    var h = !1;
    function y() {
      return (h || ((h = !0), g()), f.exports);
    }
    var C = {},
      b = { exports: C };
    function v() {
      var t = e("/helpers/interopRequireDefault");
      ((C.__esModule = !0),
        (C.getDefaultReactQueryConfig = i),
        (C.mergeReactQueryConfigs = l),
        (C.getResolvedQueryConfig = s),
        (C.isResolvedQueryConfig = u),
        (C.getResolvedMutationConfig = c),
        (C.DEFAULT_CONFIG = C.defaultQueryKeySerializerFn = void 0));
      var n = t(e("/helpers/extends")),
        r = y(),
        o = function (t) {
          try {
            var e = Array.isArray(t) ? t : [t],
              n = (0, r.stableStringify)(e);
            return ((e = JSON.parse(n)), [n, e]);
          } catch (e) {
            throw new Error("A valid query key is required!");
          }
        };
      C.defaultQueryKeySerializerFn = o;
      var a = {
        queries: {
          cacheTime: 300 * 1e3,
          enabled: !0,
          notifyOnStatusChange: !0,
          queryFn: function () {
            return Promise.reject();
          },
          queryKeySerializerFn: o,
          refetchOnMount: !0,
          refetchOnReconnect: !0,
          refetchOnWindowFocus: !0,
          retry: 3,
          retryDelay: function (t) {
            return Math.min(1e3 * Math.pow(2, t), 3e4);
          },
          staleTime: 0,
          structuralSharing: !0,
        },
      };
      C.DEFAULT_CONFIG = a;
      function i() {
        return {
          queries: (0, n.default)({}, a.queries),
          mutations: (0, n.default)({}, a.mutations),
        };
      }
      function l(e, t) {
        return {
          shared: (0, n.default)({}, e.shared, t.shared),
          queries: (0, n.default)({}, e.queries, t.queries),
          mutations: (0, n.default)({}, e.mutations, t.mutations),
        };
      }
      function s(e, t, r, o) {
        var i = e.getDefaultConfig(),
          l = (0, n.default)(
            {},
            a.queries,
            i == null ? void 0 : i.shared,
            i == null ? void 0 : i.queries,
            r == null ? void 0 : r.shared,
            r == null ? void 0 : r.queries,
            o,
          ),
          s = l.queryKeySerializerFn(t);
        return (
          (l.queryCache = e),
          (l.queryHash = s[0]),
          (l.queryKey = s[1]),
          l
        );
      }
      function u(e) {
        return !!e.queryHash;
      }
      function c(e, t, r) {
        var o = e.getDefaultConfig();
        return (0, n.default)(
          {},
          a.mutations,
          o == null ? void 0 : o.shared,
          o == null ? void 0 : o.mutations,
          t == null ? void 0 : t.shared,
          t == null ? void 0 : t.mutations,
          r,
        );
      }
    }
    var S = !1;
    function R() {
      return (S || ((S = !0), v()), b.exports);
    }
    var L = {},
      E = { exports: L };
    function k() {
      ((L.__esModule = !0), (L.notifyManager = L.NotifyManager = void 0));
      var e = y(),
        t = (function () {
          function t() {
            ((this.queue = []), (this.transactions = 0));
          }
          var n = t.prototype;
          return (
            (n.batch = function (t) {
              this.transactions++;
              var e = t();
              return (
                this.transactions--,
                this.transactions || this.flush(),
                e
              );
            }),
            (n.schedule = function (n) {
              this.transactions
                ? this.queue.push(n)
                : (0, e.scheduleMicrotask)(function () {
                    n();
                  });
            }),
            (n.flush = function () {
              var t = this.queue;
              ((this.queue = []),
                t.length &&
                  (0, e.scheduleMicrotask)(function () {
                    var n = (0, e.getBatchedUpdates)();
                    n(function () {
                      t.forEach(function (e) {
                        e();
                      });
                    });
                  }));
            }),
            t
          );
        })();
      L.NotifyManager = t;
      var n = new t();
      L.notifyManager = n;
    }
    var I = !1;
    function T() {
      return (I || ((I = !0), k()), E.exports);
    }
    var D = {},
      x = { exports: D };
    function $() {
      var t = e("/helpers/interopRequireDefault");
      ((D.__esModule = !0), (D.QueryObserver = void 0));
      var n = t(e("/helpers/extends")),
        r = y(),
        o = T(),
        a = p(),
        i = R(),
        l = (function () {
          function e(e) {
            ((this.config = e),
              (this.isStale = !0),
              (this.initialUpdateCount = 0),
              (this.remove = this.remove.bind(this)),
              (this.refetch = this.refetch.bind(this)),
              (this.fetchMore = this.fetchMore.bind(this)),
              (this.unsubscribe = this.unsubscribe.bind(this)),
              this.updateQuery());
          }
          var t = e.prototype;
          return (
            (t.subscribe = function (t) {
              return (
                (this.listener = t || r.noop),
                this.currentQuery.subscribeObserver(this),
                this.config.enabled &&
                (this.config.forceFetchOnMount ||
                  this.config.refetchOnMount === "always")
                  ? this.fetch()
                  : this.optionalFetch(),
                this.updateTimers(),
                this.unsubscribe
              );
            }),
            (t.unsubscribe = function () {
              ((this.listener = void 0),
                this.clearTimers(),
                this.currentQuery.unsubscribeObserver(this));
            }),
            (t.updateConfig = function (t) {
              var e = this.config,
                n = this.currentQuery;
              if (
                ((this.config = (0, i.isResolvedQueryConfig)(t)
                  ? t
                  : this.config.queryCache.getResolvedQueryConfig(
                      this.config.queryKey,
                      t,
                    )),
                this.updateQuery(),
                !!this.listener)
              ) {
                if (this.currentQuery !== n) {
                  (this.optionalFetch(), this.updateTimers());
                  return;
                }
                (t.enabled && !e.enabled && this.optionalFetch(),
                  (t.enabled !== e.enabled || t.staleTime !== e.staleTime) &&
                    this.updateStaleTimeout(),
                  (t.enabled !== e.enabled ||
                    t.refetchInterval !== e.refetchInterval) &&
                    this.updateRefetchInterval());
              }
            }),
            (t.getCurrentQuery = function () {
              return this.currentQuery;
            }),
            (t.getCurrentResult = function () {
              return this.currentResult;
            }),
            (t.clear = function () {
              this.remove();
            }),
            (t.remove = function () {
              this.currentQuery.remove();
            }),
            (t.refetch = function (t) {
              return this.currentQuery.refetch(t, this.config);
            }),
            (t.fetchMore = function (t, n) {
              return this.currentQuery
                .fetchMore(t, n, this.config)
                .catch(r.noop);
            }),
            (t.fetch = function () {
              var e;
              return this.config.queryFn ===
                ((e = i.DEFAULT_CONFIG.queries) == null ? void 0 : e.queryFn)
                ? Promise.resolve(this.currentResult.data)
                : this.currentQuery.fetch(void 0, this.config).catch(r.noop);
            }),
            (t.optionalFetch = function () {
              this.config.enabled &&
                this.isStale &&
                !(this.config.suspense && this.currentResult.isFetched) &&
                (this.config.refetchOnMount ||
                  this.currentQuery.observers.length === 1) &&
                this.fetch();
            }),
            (t.updateStaleTimeout = function () {
              var e = this;
              if (
                !r.isServer &&
                (this.clearStaleTimeout(),
                !(
                  this.isStale || !(0, r.isValidTimeout)(this.config.staleTime)
                ))
              ) {
                var t = Date.now() - this.currentResult.updatedAt,
                  n = this.config.staleTime - t + 1,
                  o = Math.max(n, 0);
                this.staleTimeoutId = setTimeout(function () {
                  e.isStale ||
                    ((e.isStale = !0),
                    e.updateResult(),
                    e.notify({ listener: !0, globalListeners: !0 }));
                }, o);
              }
            }),
            (t.updateRefetchInterval = function () {
              var e = this;
              r.isServer ||
                (this.clearRefetchInterval(),
                !(
                  !this.config.enabled ||
                  !(0, r.isValidTimeout)(this.config.refetchInterval)
                ) &&
                  (this.refetchIntervalId = setInterval(function () {
                    (e.config.refetchIntervalInBackground ||
                      (0, r.isDocumentVisible)()) &&
                      e.fetch();
                  }, this.config.refetchInterval)));
            }),
            (t.updateTimers = function () {
              (this.updateStaleTimeout(), this.updateRefetchInterval());
            }),
            (t.clearTimers = function () {
              (this.clearStaleTimeout(), this.clearRefetchInterval());
            }),
            (t.clearStaleTimeout = function () {
              this.staleTimeoutId &&
                (clearInterval(this.staleTimeoutId),
                (this.staleTimeoutId = void 0));
            }),
            (t.clearRefetchInterval = function () {
              this.refetchIntervalId &&
                (clearInterval(this.refetchIntervalId),
                (this.refetchIntervalId = void 0));
            }),
            (t.updateResult = function () {
              var e,
                t = this.currentQuery.state,
                o = t.data,
                i = t.status,
                l = t.updatedAt,
                s = !1,
                u = !1;
              if (
                (this.config.keepPreviousData &&
                  t.isInitialData &&
                  (e = this.previousQueryResult) != null &&
                  e.isSuccess &&
                  ((o = this.previousQueryResult.data),
                  (l = this.previousQueryResult.updatedAt),
                  (i = this.previousQueryResult.status),
                  (s = !0)),
                i === "loading" && this.config.placeholderData)
              ) {
                var c =
                  typeof this.config.placeholderData == "function"
                    ? this.config.placeholderData()
                    : this.config.placeholderData;
                typeof c != "undefined" &&
                  ((i = a.QueryStatus.Success), (o = c), (u = !0));
              }
              this.currentResult = (0, n.default)(
                {},
                (0, r.getStatusProps)(i),
                {
                  canFetchMore: t.canFetchMore,
                  clear: this.remove,
                  data: o,
                  error: t.error,
                  failureCount: t.failureCount,
                  fetchMore: this.fetchMore,
                  isFetched: t.updateCount > 0,
                  isFetchedAfterMount: t.updateCount > this.initialUpdateCount,
                  isFetching: t.isFetching,
                  isFetchingMore: t.isFetchingMore,
                  isInitialData: t.isInitialData,
                  isPreviousData: s,
                  isPlaceholderData: u,
                  isStale: this.isStale,
                  refetch: this.refetch,
                  remove: this.remove,
                  updatedAt: l,
                },
              );
            }),
            (t.updateQuery = function () {
              var e = this.config,
                t = this.currentQuery,
                n = e.queryCache.getQueryByHash(e.queryHash);
              (n || (n = e.queryCache.createQuery(e)),
                n !== t &&
                  ((this.previousQueryResult = this.currentResult),
                  (this.currentQuery = n),
                  (this.initialUpdateCount = n.state.updateCount),
                  n.state.isInitialData
                    ? e.keepPreviousData && t
                      ? (this.isStale = !0)
                      : typeof e.initialStale == "function"
                        ? (this.isStale = e.initialStale())
                        : typeof e.initialStale == "boolean"
                          ? (this.isStale = e.initialStale)
                          : (this.isStale = typeof n.state.data == "undefined")
                    : (this.isStale = n.isStaleByTime(e.staleTime)),
                  this.updateResult(),
                  this.listener &&
                    (t == null || t.unsubscribeObserver(this),
                    this.currentQuery.subscribeObserver(this))));
            }),
            (t.onQueryUpdate = function (t) {
              var e = this.config,
                n = t.type;
              (n === 2 || n === 3 || n === 4) &&
                (this.isStale = this.currentQuery.isStaleByTime(e.staleTime));
              var r = this.currentResult;
              this.updateResult();
              var o = this.currentResult;
              if (
                ((n === 2 || n === 3 || n === 4) && this.updateTimers(),
                !(n === 4 && o.isStale === r.isStale))
              ) {
                var a = {};
                (n === 2 ? (a.onSuccess = !0) : n === 3 && (a.onError = !0),
                  (e.notifyOnStatusChange ||
                    o.data !== r.data ||
                    o.error !== r.error) &&
                    (a.listener = !0),
                  this.notify(a));
              }
            }),
            (t.notify = function (t) {
              var e = this.config,
                n = this.currentResult,
                r = this.currentQuery,
                a = this.listener,
                i = e.onSuccess,
                l = e.onSettled,
                s = e.onError;
              o.notifyManager.batch(function () {
                (t.onSuccess
                  ? (i &&
                      o.notifyManager.schedule(function () {
                        i(n.data);
                      }),
                    l &&
                      o.notifyManager.schedule(function () {
                        l(n.data, null);
                      }))
                  : t.onError &&
                    (s &&
                      o.notifyManager.schedule(function () {
                        s(n.error);
                      }),
                    l &&
                      o.notifyManager.schedule(function () {
                        l(void 0, n.error);
                      })),
                  t.listener &&
                    a &&
                    o.notifyManager.schedule(function () {
                      a(n);
                    }),
                  t.globalListeners && e.queryCache.notifyGlobalListeners(r));
              });
            }),
            e
          );
        })();
      D.QueryObserver = l;
    }
    var P = !1;
    function N() {
      return (P || ((P = !0), $()), x.exports);
    }
    var M = {},
      w = { exports: M };
    function A() {
      var t = e("/helpers/interopRequireDefault");
      ((M.__esModule = !0), (M.queryReducer = b), (M.Query = void 0));
      var n = t(e("/helpers/extends")),
        r = y(),
        o = p(),
        a = N(),
        i = T();
      function l() {}
      var s = { Failed: 0, Fetch: 1, Success: 2, Error: 3, Invalidate: 4 };
      function u(e, t) {
        if (!t) return e && e.then ? e.then(l) : Promise.resolve();
      }
      function c(e, t) {
        var n = e();
        return n && n.then ? n.then(t) : t(n);
      }
      function d(e, t, n) {
        return n
          ? t
            ? t(e)
            : e
          : ((!e || !e.then) && (e = Promise.resolve(e)), t ? e.then(t) : e);
      }
      function m(e, t) {
        try {
          var n = e();
        } catch (e) {
          return t(e);
        }
        return n && n.then ? n.then(void 0, t) : n;
      }
      function _(e) {
        return function () {
          for (var t = [], n = 0; n < arguments.length; n++)
            t[n] = arguments[n];
          try {
            return Promise.resolve(e.apply(this, t));
          } catch (e) {
            return Promise.reject(e);
          }
        };
      }
      var f = (function () {
        function e(e) {
          ((this.config = e),
            (this.queryKey = e.queryKey),
            (this.queryHash = e.queryHash),
            (this.queryCache = e.queryCache),
            (this.cacheTime = e.cacheTime),
            (this.observers = []),
            (this.state = C(e)),
            this.scheduleGc());
        }
        var t = e.prototype;
        return (
          (t.updateConfig = function (t) {
            ((this.config = t),
              (this.cacheTime = Math.max(this.cacheTime, t.cacheTime)));
          }),
          (t.dispatch = function (t) {
            var e = this;
            ((this.state = b(this.state, t)),
              i.notifyManager.batch(function () {
                (e.observers.forEach(function (e) {
                  e.onQueryUpdate(t);
                }),
                  e.queryCache.notifyGlobalListeners(e));
              }));
          }),
          (t.scheduleGc = function () {
            var e = this;
            r.isServer ||
              (this.clearGcTimeout(),
              !(
                this.observers.length > 0 ||
                !(0, r.isValidTimeout)(this.cacheTime)
              ) &&
                (this.gcTimeout = setTimeout(function () {
                  e.remove();
                }, this.cacheTime)));
          }),
          (t.cancel = function (t) {
            var e = this.promise;
            return e && this.cancelFetch
              ? (this.cancelFetch(t), e.then(r.noop).catch(r.noop))
              : Promise.resolve(void 0);
          }),
          (t.continue = function () {
            var e;
            (e = this.continueFetch) == null || e.call(this);
          }),
          (t.clearTimersObservers = function () {
            this.observers.forEach(function (e) {
              e.clearTimers();
            });
          }),
          (t.clearGcTimeout = function () {
            this.gcTimeout &&
              (clearTimeout(this.gcTimeout), (this.gcTimeout = void 0));
          }),
          (t.setData = function (t, n) {
            var e,
              o,
              a = this.state.data,
              i = (0, r.functionalUpdate)(t, a);
            (this.config.structuralSharing &&
              (i = (0, r.replaceEqualDeep)(a, i)),
              (e = (o = this.config).isDataEqual) != null &&
                e.call(o, a, i) &&
                (i = a));
            var l = h(this.config, i);
            this.dispatch({
              type: s.Success,
              data: i,
              canFetchMore: l,
              updatedAt: n == null ? void 0 : n.updatedAt,
            });
          }),
          (t.clear = function () {
            (r.Console.warn(
              "react-query: clear() has been deprecated, please use remove() instead",
            ),
              this.remove());
          }),
          (t.remove = function () {
            this.queryCache.removeQuery(this);
          }),
          (t.destroy = function () {
            (this.clearGcTimeout(), this.clearTimersObservers(), this.cancel());
          }),
          (t.isActive = function () {
            return this.observers.some(function (e) {
              return e.config.enabled;
            });
          }),
          (t.isStale = function () {
            return (
              this.state.isInvalidated ||
              this.state.status !== o.QueryStatus.Success ||
              this.observers.some(function (e) {
                return e.getCurrentResult().isStale;
              })
            );
          }),
          (t.isStaleByTime = function (t) {
            return (
              t === void 0 && (t = 0),
              this.state.isInvalidated ||
                this.state.status !== o.QueryStatus.Success ||
                this.state.updatedAt + t <= Date.now()
            );
          }),
          (t.onInteraction = function (t) {
            var e = this.observers.find(function (e) {
              var n = e.config,
                r = e.getCurrentResult(),
                o = r.isStale;
              return (
                n.enabled &&
                ((t === "focus" &&
                  (n.refetchOnWindowFocus === "always" ||
                    (n.refetchOnWindowFocus && o))) ||
                  (t === "online" &&
                    (n.refetchOnReconnect === "always" ||
                      (n.refetchOnReconnect && o))))
              );
            });
            (e && e.fetch(), this.continue());
          }),
          (t.subscribe = function (t) {
            var e = new a.QueryObserver(this.config);
            return (e.subscribe(t), e);
          }),
          (t.subscribeObserver = function (t) {
            (this.observers.push(t), this.clearGcTimeout());
          }),
          (t.unsubscribeObserver = function (t) {
            ((this.observers = this.observers.filter(function (e) {
              return e !== t;
            })),
              this.observers.length ||
                (this.isTransportCancelable && this.cancel(),
                this.scheduleGc()));
          }),
          (t.invalidate = function () {
            this.state.isInvalidated || this.dispatch({ type: s.Invalidate });
          }),
          (t.refetch = function (t, n) {
            var e = this.fetch(void 0, n);
            return ((t != null && t.throwOnError) || (e = e.catch(r.noop)), e);
          }),
          (t.fetchMore = function (t, n, r) {
            return this.fetch(
              {
                fetchMore: {
                  fetchMoreVariable: t,
                  previous: (n == null ? void 0 : n.previous) || !1,
                },
              },
              r,
            );
          }),
          (t.fetch = function (t, n) {
            try {
              var e = !1,
                o = this;
              return c(
                function () {
                  if (o.promise)
                    return (function () {
                      return t != null && t.fetchMore && o.state.data
                        ? u(o.cancel(!0))
                        : ((e = !0), o.promise);
                    })();
                },
                function (a) {
                  if (e) return a;
                  (n && o.updateConfig(n), (n = o.config));
                  var i = n.queryFnParamsFilter,
                    l = i ? i(o.queryKey) : o.queryKey;
                  return (
                    (o.promise = _(function () {
                      return m(
                        function () {
                          var e;
                          return c(
                            function () {
                              return n.infinite
                                ? d(
                                    o.startInfiniteFetch(n, l, t),
                                    function (t) {
                                      e = t;
                                    },
                                  )
                                : d(o.startFetch(n, l, t), function (t) {
                                    e = t;
                                  });
                            },
                            function () {
                              return (o.setData(e), delete o.promise, e);
                            },
                          );
                        },
                        function (e) {
                          throw (
                            ((0, r.isCancelledError)(e) && e.silent) ||
                              o.dispatch({ type: s.Error, error: e }),
                            (0, r.isCancelledError)(e) || r.Console.error(e),
                            delete o.promise,
                            e
                          );
                        },
                      );
                    })()),
                    o.promise
                  );
                },
              );
            } catch (e) {
              return Promise.reject(e);
            }
          }),
          (t.startFetch = function (t, n, r) {
            var e = function () {
              return t.queryFn.apply(t, n);
            };
            return (
              this.state.isFetching || this.dispatch({ type: s.Fetch }),
              this.tryFetchData(t, e)
            );
          }),
          (t.startInfiniteFetch = function (t, n, r) {
            var e = r == null ? void 0 : r.fetchMore,
              o = e || {},
              a = o.previous,
              i = o.fetchMoreVariable,
              l = e ? (a ? "previous" : "next") : !1,
              u = this.state.data || [],
              c = _(function (e, r, o) {
                var a = g(e, r);
                return (
                  typeof o == "undefined" &&
                    typeof a != "undefined" &&
                    t.getFetchMore &&
                    (o = t.getFetchMore(a, e)),
                  !o && typeof a != "undefined"
                    ? e
                    : d(t.queryFn.apply(t, n.concat([o])), function (t) {
                        return r ? [t].concat(e) : [].concat(e, [t]);
                      })
                );
              }),
              m = function () {
                if (l) return c(u, a, i);
                if (u.length) {
                  for (var e = c([]), t = 1; t < u.length; t++) e = e.then(c);
                  return e;
                } else return c([]);
              };
            return (
              (!this.state.isFetching || this.state.isFetchingMore !== l) &&
                this.dispatch({ type: s.Fetch, isFetchingMore: l }),
              this.tryFetchData(t, m)
            );
          }),
          (t.tryFetchData = function (t, n) {
            var e = this;
            return new Promise(function (o, a) {
              var i = !1,
                l,
                p,
                f = function () {
                  ((i = !0),
                    delete e.cancelFetch,
                    delete e.continueFetch,
                    delete e.isTransportCancelable,
                    l == null || l());
                },
                g = function (t) {
                  (f(), o(t));
                },
                h = function (t) {
                  (f(), a(t));
                };
              ((e.cancelFetch = function (e) {
                (h(new r.CancelledError(e)), p == null || p());
              }),
                (e.continueFetch = function () {
                  l == null || l();
                }));
              var y = _(function () {
                return m(
                  function () {
                    var t = n();
                    return (
                      (0, r.isCancelable)(t) &&
                        ((p = function () {
                          try {
                            t.cancel();
                          } catch (e) {}
                        }),
                        (e.isTransportCancelable = !0)),
                      d(t, function (e) {
                        g(e);
                      })
                    );
                  },
                  function (n) {
                    if (!i) {
                      var o = e.state.failureCount,
                        a = t.retry,
                        m = t.retryDelay,
                        p =
                          a === !0 ||
                          o < a ||
                          (typeof a == "function" && a(o, n));
                      if (!p) {
                        h(n);
                        return;
                      }
                      return (
                        e.dispatch({ type: s.Failed }),
                        d(
                          (0, r.sleep)((0, r.functionalUpdate)(m, o) || 0),
                          function () {
                            return c(
                              function () {
                                if (
                                  !(0, r.isDocumentVisible)() ||
                                  !(0, r.isOnline)()
                                )
                                  return u(
                                    new Promise(function (e) {
                                      l = e;
                                    }),
                                  );
                              },
                              function () {
                                i || y();
                              },
                            );
                          },
                        )
                      );
                    }
                  },
                );
              });
              y();
            });
          }),
          e
        );
      })();
      M.Query = f;
      function g(e, t) {
        return t ? e[0] : e[e.length - 1];
      }
      function h(e, t, n) {
        if (e.infinite && e.getFetchMore && Array.isArray(t))
          return !!e.getFetchMore(g(t, n), t);
      }
      function C(e) {
        var t =
            typeof e.initialData == "function"
              ? e.initialData()
              : e.initialData,
          n =
            typeof t != "undefined"
              ? o.QueryStatus.Success
              : e.enabled
                ? o.QueryStatus.Loading
                : o.QueryStatus.Idle;
        return {
          canFetchMore: h(e, t),
          data: t,
          error: null,
          failureCount: 0,
          isFetching: n === o.QueryStatus.Loading,
          isFetchingMore: !1,
          isInitialData: !0,
          isInvalidated: !1,
          status: n,
          updateCount: 0,
          updatedAt: Date.now(),
        };
      }
      function b(e, t) {
        var r;
        switch (t.type) {
          case s.Failed:
            return (0, n.default)({}, e, { failureCount: e.failureCount + 1 });
          case s.Fetch:
            return (0, n.default)({}, e, {
              failureCount: 0,
              isFetching: !0,
              isFetchingMore: t.isFetchingMore || !1,
              status:
                typeof e.data != "undefined"
                  ? o.QueryStatus.Success
                  : o.QueryStatus.Loading,
            });
          case s.Success:
            return (0, n.default)({}, e, {
              canFetchMore: t.canFetchMore,
              data: t.data,
              error: null,
              failureCount: 0,
              isFetching: !1,
              isFetchingMore: !1,
              isInitialData: !1,
              isInvalidated: !1,
              status: o.QueryStatus.Success,
              updateCount: e.updateCount + 1,
              updatedAt: (r = t.updatedAt) != null ? r : Date.now(),
            });
          case s.Error:
            return (0, n.default)({}, e, {
              error: t.error,
              failureCount: e.failureCount + 1,
              isFetching: !1,
              isFetchingMore: !1,
              status: o.QueryStatus.Error,
              throwInErrorBoundary: !0,
              updateCount: e.updateCount + 1,
            });
          case s.Invalidate:
            return (0, n.default)({}, e, { isInvalidated: !0 });
          default:
            return e;
        }
      }
    }
    var F = !1;
    function O() {
      return (F || ((F = !0), A()), w.exports);
    }
    var B = {},
      W = { exports: B };
    function q() {
      var t = e("/helpers/interopRequireDefault");
      ((B.__esModule = !0),
        (B.makeQueryCache = d),
        (B.onVisibilityOrOnlineChange = m),
        (B.queryCaches = B.queryCache = B.QueryCache = void 0));
      var n = t(e("/helpers/extends")),
        r = y(),
        o = R(),
        a = O(),
        i = T(),
        l = N(),
        s = (function () {
          function e(e) {
            ((this.config = e || {}),
              (this.globalListeners = []),
              (this.queries = {}),
              (this.queriesArray = []),
              (this.isFetching = 0));
          }
          var t = e.prototype;
          return (
            (t.notifyGlobalListeners = function (t) {
              var e = this;
              ((this.isFetching = this.getQueries().reduce(function (e, t) {
                return t.state.isFetching ? e + 1 : e;
              }, 0)),
                i.notifyManager.batch(function () {
                  e.globalListeners.forEach(function (n) {
                    i.notifyManager.schedule(function () {
                      n(e, t);
                    });
                  });
                }));
            }),
            (t.getDefaultConfig = function () {
              return this.config.defaultConfig;
            }),
            (t.getResolvedQueryConfig = function (t, n) {
              return (0, o.getResolvedQueryConfig)(this, t, void 0, n);
            }),
            (t.subscribe = function (t) {
              var e = this;
              return (
                this.globalListeners.push(t),
                function () {
                  e.globalListeners = e.globalListeners.filter(function (e) {
                    return e !== t;
                  });
                }
              );
            }),
            (t.clear = function (t) {
              (this.removeQueries(),
                t != null && t.notify && this.notifyGlobalListeners());
            }),
            (t.getQueries = function (t, n) {
              var e = t === !0 || typeof t == "undefined";
              if (e && !n) return this.queriesArray;
              var o;
              if (typeof t == "function") o = t;
              else {
                var a = n || {},
                  i = a.exact,
                  l = a.active,
                  s = a.stale,
                  u = this.getResolvedQueryConfig(t);
                o = function (n) {
                  if (!e) {
                    if (i) {
                      if (n.queryHash !== u.queryHash) return !1;
                    } else if (!(0, r.deepIncludes)(n.queryKey, u.queryKey))
                      return !1;
                  }
                  return !(
                    (typeof l == "boolean" && n.isActive() !== l) ||
                    (typeof s == "boolean" && n.isStale() !== s)
                  );
                };
              }
              return this.queriesArray.filter(o);
            }),
            (t.getQuery = function (t) {
              return this.getQueries(t, { exact: !0 })[0];
            }),
            (t.getQueryByHash = function (t) {
              return this.queries[t];
            }),
            (t.getQueryData = function (t) {
              var e;
              return (e = this.getQuery(t)) == null ? void 0 : e.state.data;
            }),
            (t.removeQuery = function (t) {
              this.queries[t.queryHash] &&
                (t.destroy(),
                delete this.queries[t.queryHash],
                (this.queriesArray = this.queriesArray.filter(function (e) {
                  return e !== t;
                })),
                this.notifyGlobalListeners(t));
            }),
            (t.removeQueries = function (t, n) {
              var e = this;
              this.getQueries(t, n).forEach(function (t) {
                e.removeQuery(t);
              });
            }),
            (t.cancelQueries = function (t, n) {
              this.getQueries(t, n).forEach(function (e) {
                e.cancel();
              });
            }),
            (t.invalidateQueries = function (t, r) {
              var e = this.getQueries(t, r);
              i.notifyManager.batch(function () {
                e.forEach(function (e) {
                  e.invalidate();
                });
              });
              var o = r || {},
                a = o.refetchActive,
                l = a === void 0 ? !0 : a,
                s = o.refetchInactive,
                u = s === void 0 ? !1 : s;
              if (!u && !l) return Promise.resolve(e);
              var c = (0, n.default)({}, r);
              l && !u ? (c.active = !0) : u && !l && (c.active = !1);
              var d = this.refetchQueries(t, c);
              return (
                (r != null && r.throwOnError) ||
                  (d = d.catch(function () {
                    return e;
                  })),
                d.then(function () {
                  return e;
                })
              );
            }),
            (t.refetchQueries = function (t, n) {
              var e = this,
                r = [];
              return (
                i.notifyManager.batch(function () {
                  e.getQueries(t, n).forEach(function (e) {
                    var t = e.fetch().then(function () {
                      return e;
                    });
                    ((n != null && n.throwOnError) ||
                      (t = t.catch(function () {
                        return e;
                      })),
                      r.push(t));
                  });
                }),
                Promise.all(r)
              );
            }),
            (t.resetErrorBoundaries = function () {
              this.getQueries().forEach(function (e) {
                e.state.throwInErrorBoundary = !1;
              });
            }),
            (t.buildQuery = function (t, n) {
              var e = this.getResolvedQueryConfig(t, n),
                r = this.getQueryByHash(e.queryHash);
              return (r || (r = this.createQuery(e)), r);
            }),
            (t.createQuery = function (t) {
              var e = new a.Query(t);
              return (
                this.config.frozen ||
                  ((this.queries[e.queryHash] = e),
                  this.queriesArray.push(e),
                  this.notifyGlobalListeners(e)),
                e
              );
            }),
            (t.fetchQuery = function (t, o, a) {
              var e = (0, r.getQueryArgs)(t, o, a),
                i = e[0],
                l = e[1],
                s = this.getResolvedQueryConfig(
                  i,
                  (0, n.default)({ retry: !1 }, l),
                ),
                u = this.getQueryByHash(s.queryHash);
              return (
                u || (u = this.createQuery(s)),
                u.isStaleByTime(l.staleTime)
                  ? u.fetch(void 0, s)
                  : Promise.resolve(u.state.data)
              );
            }),
            (t.prefetchQuery = function (t, n, o, a) {
              (0, r.isPlainObject)(n) &&
                (n.hasOwnProperty("throwOnError") ||
                  n.hasOwnProperty("force")) &&
                ((a = n), (n = void 0), (o = void 0));
              var e = (0, r.getQueryArgs)(t, n, o, a),
                i = e[0],
                l = e[1],
                s = e[2];
              s != null && s.force && (l.staleTime = 0);
              var u = this.fetchQuery(i, l);
              return (
                (s != null && s.throwOnError) || (u = u.catch(r.noop)),
                u
              );
            }),
            (t.watchQuery = function (t, n, o) {
              var e = (0, r.getQueryArgs)(t, n, o),
                a = e[0],
                i = e[1],
                s = this.getResolvedQueryConfig(a, i);
              return new l.QueryObserver(s);
            }),
            (t.setQueryData = function (t, n, r) {
              this.buildQuery(t, r).setData(n);
            }),
            e
          );
        })();
      B.QueryCache = s;
      var u = new s({ frozen: r.isServer });
      B.queryCache = u;
      var c = [u];
      B.queryCaches = c;
      function d(e) {
        return new s(e);
      }
      function m(e) {
        (0, r.isDocumentVisible)() &&
          (0, r.isOnline)() &&
          i.notifyManager.batch(function () {
            c.forEach(function (t) {
              t.getQueries().forEach(function (t) {
                t.onInteraction(e);
              });
            });
          });
      }
    }
    var U = !1;
    function V() {
      return (U || ((U = !0), q()), W.exports);
    }
    var H = {},
      G = { exports: H };
    function z() {
      ((H.__esModule = !0), (H.setFocusHandler = void 0));
      var e = y(),
        t = V(),
        n = (0, e.createSetHandler)(function () {
          return (0, t.onVisibilityOrOnlineChange)("focus");
        });
      ((H.setFocusHandler = n),
        n(function (t) {
          var n;
          if (!(e.isServer || !((n = window) != null && n.addEventListener)))
            return (
              window.addEventListener("visibilitychange", t, !1),
              window.addEventListener("focus", t, !1),
              function () {
                (window.removeEventListener("visibilitychange", t),
                  window.removeEventListener("focus", t));
              }
            );
        }));
    }
    var j = !1;
    function K() {
      return (j || ((j = !0), z()), G.exports);
    }
    var Q = {},
      X = { exports: Q };
    function Y() {
      ((Q.__esModule = !0), (Q.setOnlineHandler = void 0));
      var e = y(),
        t = V(),
        n = (0, e.createSetHandler)(function () {
          return (0, t.onVisibilityOrOnlineChange)("online");
        });
      ((Q.setOnlineHandler = n),
        n(function (t) {
          var n;
          if (!(e.isServer || !((n = window) != null && n.addEventListener)))
            return (
              window.addEventListener("online", t, !1),
              function () {
                window.removeEventListener("online", t);
              }
            );
        }));
    }
    var J = !1;
    function Z() {
      return (J || ((J = !0), Y()), X.exports);
    }
    var ee = {},
      te = { exports: ee };
    function ne() {
      ee.__esModule = !0;
      var e = {
        getDefaultReactQueryConfig: !0,
        queryCache: !0,
        queryCaches: !0,
        makeQueryCache: !0,
        QueryCache: !0,
        setFocusHandler: !0,
        setOnlineHandler: !0,
        CancelledError: !0,
        isCancelledError: !0,
        isError: !0,
        setConsole: !0,
        setBatchedUpdates: !0,
      };
      ee.setBatchedUpdates =
        ee.setConsole =
        ee.isError =
        ee.isCancelledError =
        ee.CancelledError =
        ee.setOnlineHandler =
        ee.setFocusHandler =
        ee.QueryCache =
        ee.makeQueryCache =
        ee.queryCaches =
        ee.queryCache =
        ee.getDefaultReactQueryConfig =
          void 0;
      var t = R();
      ee.getDefaultReactQueryConfig = t.getDefaultReactQueryConfig;
      var n = V();
      ((ee.queryCache = n.queryCache),
        (ee.queryCaches = n.queryCaches),
        (ee.makeQueryCache = n.makeQueryCache),
        (ee.QueryCache = n.QueryCache));
      var r = K();
      ee.setFocusHandler = r.setFocusHandler;
      var o = Z();
      ee.setOnlineHandler = o.setOnlineHandler;
      var a = y();
      ((ee.CancelledError = a.CancelledError),
        (ee.isCancelledError = a.isCancelledError),
        (ee.isError = a.isError),
        (ee.setConsole = a.setConsole),
        (ee.setBatchedUpdates = a.setBatchedUpdates));
      var i = p();
      Object.keys(i).forEach(function (t) {
        t === "default" ||
          t === "__esModule" ||
          Object.prototype.hasOwnProperty.call(e, t) ||
          (ee[t] = i[t]);
      });
    }
    var re = !1;
    function oe() {
      return (re || ((re = !0), ne()), te.exports);
    }
    var ae = {},
      ie = { exports: ae };
    function le() {
      var t = e("/helpers/interopRequireDefault");
      ((ae.__esModule = !0), (ae.unstable_batchedUpdates = void 0));
      var n = t(l()),
        r = n.default.unstable_batchedUpdates;
      ae.unstable_batchedUpdates = r;
    }
    var se = !1;
    function ue() {
      return (se || ((se = !0), le()), ie.exports);
    }
    var ce = {},
      de = { exports: ce };
    function me() {
      var t = e("/helpers/interopRequireDefault");
      ((ce.__esModule = !0),
        (ce.ReactQueryCacheProvider = ce.useQueryCache = void 0));
      var n = t(s()),
        r = oe(),
        o = n.default.createContext(r.queryCache),
        a = function () {
          return n.default.useContext(o);
        };
      ce.useQueryCache = a;
      var i = function (t) {
        var e = t.queryCache,
          a = t.children,
          i = n.default.useMemo(
            function () {
              return e || new r.QueryCache();
            },
            [e],
          );
        return (
          n.default.useEffect(
            function () {
              return (
                r.queryCaches.push(i),
                function () {
                  var t = r.queryCaches.indexOf(i);
                  (t > -1 && r.queryCaches.splice(t, 1),
                    e == null && i.clear({ notify: !1 }));
                }
              );
            },
            [i, e],
          ),
          n.default.createElement(o.Provider, { value: i }, a)
        );
      };
      ce.ReactQueryCacheProvider = i;
    }
    var pe = !1;
    function _e() {
      return (pe || ((pe = !0), me()), de.exports);
    }
    var fe = {},
      ge = { exports: fe };
    function he() {
      var t = e("/helpers/interopRequireDefault");
      ((fe.__esModule = !0),
        (fe.useContextConfig = a),
        (fe.ReactQueryConfigProvider = void 0));
      var n = t(s()),
        r = R(),
        o = n.default.createContext(void 0);
      function a() {
        return n.default.useContext(o);
      }
      var i = function (t) {
        var e = t.config,
          i = t.children,
          l = a(),
          s = n.default.useMemo(
            function () {
              return l ? (0, r.mergeReactQueryConfigs)(l, e) : e;
            },
            [e, l],
          );
        return n.default.createElement(o.Provider, { value: s }, i);
      };
      fe.ReactQueryConfigProvider = i;
    }
    var ye = !1;
    function Ce() {
      return (ye || ((ye = !0), he()), ge.exports);
    }
    var be = {},
      ve = { exports: be };
    function Se() {
      var t = e("/helpers/interopRequireDefault");
      ((be.__esModule = !0),
        (be.ReactQueryErrorResetBoundary = be.useErrorResetBoundary = void 0));
      var n = t(s());
      function r() {
        var e = !1;
        return {
          clearReset: function () {
            e = !1;
          },
          reset: function () {
            e = !0;
          },
          isReset: function () {
            return e;
          },
        };
      }
      var o = n.default.createContext(r()),
        a = function () {
          return n.default.useContext(o);
        };
      be.useErrorResetBoundary = a;
      var i = function (t) {
        var e = t.children,
          a = n.default.useMemo(function () {
            return r();
          }, []);
        return n.default.createElement(
          o.Provider,
          { value: a },
          typeof e == "function" ? e(a) : e,
        );
      };
      be.ReactQueryErrorResetBoundary = i;
    }
    var Re = !1;
    function Le() {
      return (Re || ((Re = !0), Se()), ve.exports);
    }
    var Ee = {},
      ke = { exports: Ee };
    function Ie() {
      var t = e("/helpers/interopRequireDefault");
      ((Ee.__esModule = !0),
        (Ee.useIsMounted = o),
        (Ee.useMountedCallback = a));
      var n = t(s()),
        r = y();
      function o() {
        var e = n.default.useRef(!1),
          t = n.default.useCallback(function () {
            return e.current;
          }, []);
        return (
          n.default[r.isServer ? "useEffect" : "useLayoutEffect"](function () {
            return (
              (e.current = !0),
              function () {
                e.current = !1;
              }
            );
          }, []),
          t
        );
      }
      function a(e) {
        var t = o();
        return n.default.useCallback(
          function () {
            if (t()) return e.apply(void 0, arguments);
          },
          [e, t],
        );
      }
    }
    var Te = !1;
    function De() {
      return (Te || ((Te = !0), Ie()), ke.exports);
    }
    var xe = {},
      $e = { exports: xe };
    function Pe() {
      var t = e("/helpers/interopRequireDefault");
      ((xe.__esModule = !0), (xe.useIsFetching = a));
      var n = t(s()),
        r = _e(),
        o = De();
      function a() {
        var e = (0, o.useIsMounted)(),
          t = (0, r.useQueryCache)(),
          a = n.default.useState(t.isFetching),
          i = a[0],
          l = a[1];
        return (
          n.default.useEffect(
            function () {
              return t.subscribe(function () {
                e() && l(t.isFetching);
              });
            },
            [t, l, e],
          ),
          i
        );
      }
    }
    var Ne = !1;
    function Me() {
      return (Ne || ((Ne = !0), Pe()), $e.exports);
    }
    var we = {},
      Ae = { exports: we };
    function Fe() {
      var t = e("/helpers/interopRequireDefault");
      ((we.__esModule = !0), (we.useMutation = C));
      var n = t(e("/helpers/extends")),
        r = t(s()),
        o = De(),
        a = R(),
        i = y(),
        l = p(),
        u = _e(),
        c = Ce();
      function d(e, t, n) {
        return n
          ? t
            ? t(e)
            : e
          : ((!e || !e.then) && (e = Promise.resolve(e)), t ? e.then(t) : e);
      }
      var m = { Reset: 0, Loading: 1, Resolve: 2, Reject: 3 };
      function _(e, t) {
        try {
          var n = e();
        } catch (e) {
          return t(e);
        }
        return n && n.then ? n.then(void 0, t) : n;
      }
      function f(e) {
        return function () {
          for (var t = [], n = 0; n < arguments.length; n++)
            t[n] = arguments[n];
          try {
            return Promise.resolve(e.apply(this, t));
          } catch (e) {
            return Promise.reject(e);
          }
        };
      }
      function g() {
        return (0, n.default)({}, (0, i.getStatusProps)(l.QueryStatus.Idle), {
          data: void 0,
          error: null,
        });
      }
      function h(e, t) {
        switch (t.type) {
          case m.Reset:
            return g();
          case m.Loading:
            return (0, n.default)(
              {},
              (0, i.getStatusProps)(l.QueryStatus.Loading),
              { data: void 0, error: null },
            );
          case m.Resolve:
            return (0, n.default)(
              {},
              (0, i.getStatusProps)(l.QueryStatus.Success),
              { data: t.data, error: null },
            );
          case m.Reject:
            return (0, n.default)(
              {},
              (0, i.getStatusProps)(l.QueryStatus.Error),
              { data: void 0, error: t.error },
            );
          default:
            return e;
        }
      }
      function C(e, t) {
        t === void 0 && (t = {});
        var l = (0, u.useQueryCache)(),
          s = (0, c.useContextConfig)(),
          p = (0, a.getResolvedMutationConfig)(l, s, t),
          y = r.default.useReducer(h, null, g),
          C = y[0],
          b = y[1],
          v = (0, o.useMountedCallback)(b),
          S = r.default.useRef(),
          R = r.default.useRef(e);
        R.current = e;
        var L = r.default.useRef(p);
        L.current = p;
        var E = r.default.useCallback(
          f(function (e, t) {
            t === void 0 && (t = {});
            var n = L.current,
              r = (0, i.uid)();
            S.current = r;
            var o = function () {
                return S.current === r;
              },
              a;
            return _(
              function () {
                return (
                  v({ type: m.Loading }),
                  d(n.onMutate == null ? void 0 : n.onMutate(e), function (r) {
                    a = r;
                    var i = R.current;
                    return d(i(e), function (r) {
                      return (
                        o() && v({ type: m.Resolve, data: r }),
                        d(
                          n.onSuccess == null ? void 0 : n.onSuccess(r, e),
                          function () {
                            return d(
                              t.onSuccess == null ? void 0 : t.onSuccess(r, e),
                              function () {
                                return d(
                                  n.onSettled == null
                                    ? void 0
                                    : n.onSettled(r, null, e),
                                  function () {
                                    return d(
                                      t.onSettled == null
                                        ? void 0
                                        : t.onSettled(r, null, e),
                                      function () {
                                        return r;
                                      },
                                    );
                                  },
                                );
                              },
                            );
                          },
                        )
                      );
                    });
                  })
                );
              },
              function (r) {
                return (
                  i.Console.error(r),
                  d(
                    n.onError == null ? void 0 : n.onError(r, e, a),
                    function () {
                      return d(
                        t.onError == null ? void 0 : t.onError(r, e, a),
                        function () {
                          return d(
                            n.onSettled == null
                              ? void 0
                              : n.onSettled(void 0, r, e, a),
                            function () {
                              return d(
                                t.onSettled == null
                                  ? void 0
                                  : t.onSettled(void 0, r, e, a),
                                function () {
                                  if (
                                    (o() && v({ type: m.Reject, error: r }),
                                    t.throwOnError || n.throwOnError)
                                  )
                                    throw r;
                                },
                              );
                            },
                          );
                        },
                      );
                    },
                  )
                );
              },
            );
          }),
          [v],
        );
        r.default.useEffect(
          function () {
            var e = L.current,
              t = e.suspense,
              n = e.useErrorBoundary;
            if ((n || t) && C.error) throw C.error;
          },
          [C.error],
        );
        var k = r.default.useCallback(
            function () {
              v({ type: m.Reset });
            },
            [v],
          ),
          I = (0, n.default)({}, C, { reset: k });
        return [E, I];
      }
    }
    var Oe = !1;
    function Be() {
      return (Oe || ((Oe = !0), Fe()), Ae.exports);
    }
    var We = {},
      qe = { exports: We };
    function Ue() {
      var t = e("/helpers/interopRequireDefault");
      ((We.__esModule = !0), (We.useBaseQuery = c));
      var n = t(s()),
        r = De(),
        o = R(),
        a = N(),
        i = Le(),
        l = _e(),
        u = Ce();
      function c(e, t) {
        var s = n.default.useReducer(function (e) {
            return e + 1;
          }, 0),
          c = s[1],
          d = (0, r.useIsMounted)(),
          m = (0, l.useQueryCache)(),
          p = (0, u.useContextConfig)(),
          _ = (0, i.useErrorResetBoundary)(),
          f = (0, o.getResolvedQueryConfig)(m, e, p, t),
          g = n.default.useRef(),
          h = !g.current,
          y = g.current || new a.QueryObserver(f);
        ((g.current = y),
          n.default.useEffect(
            function () {
              return (
                _.clearReset(),
                y.subscribe(function () {
                  d() && c();
                })
              );
            },
            [d, y, c, _],
          ),
          h || y.updateConfig(f));
        var C = y.getCurrentResult();
        if (f.suspense || f.useErrorBoundary) {
          var b = y.getCurrentQuery();
          if (C.isError && !_.isReset() && b.state.throwInErrorBoundary)
            throw C.error;
          if (f.enabled && f.suspense && !C.isSuccess) {
            _.clearReset();
            var v = y.subscribe();
            throw y.fetch().finally(v);
          }
        }
        return C;
      }
    }
    var Ve = !1;
    function He() {
      return (Ve || ((Ve = !0), Ue()), qe.exports);
    }
    var Ge = {},
      ze = { exports: Ge };
    function je() {
      ((Ge.__esModule = !0), (Ge.useQuery = n));
      var e = y(),
        t = He();
      function n(n, r, o) {
        var a = (0, e.getQueryArgs)(n, r, o),
          i = a[0],
          l = a[1];
        return (0, t.useBaseQuery)(i, l);
      }
    }
    var Ke = !1;
    function Qe() {
      return (Ke || ((Ke = !0), je()), ze.exports);
    }
    var Xe = {},
      Ye = { exports: Xe };
    function Je() {
      var t = e("/helpers/interopRequireDefault");
      ((Xe.__esModule = !0), (Xe.usePaginatedQuery = a));
      var n = t(e("/helpers/extends")),
        r = y(),
        o = He();
      function a(e, t, a) {
        var i = (0, r.getQueryArgs)(e, t, a),
          l = i[0],
          s = i[1],
          u = (0, o.useBaseQuery)(
            l,
            (0, n.default)({ keepPreviousData: !0 }, s),
          );
        return (0, n.default)({}, u, {
          resolvedData: u.data,
          latestData: u.isPreviousData ? void 0 : u.data,
        });
      }
    }
    var Ze = !1;
    function et() {
      return (Ze || ((Ze = !0), Je()), Ye.exports);
    }
    var tt = {},
      nt = { exports: tt };
    function rt() {
      var t = e("/helpers/interopRequireDefault");
      ((tt.__esModule = !0), (tt.useInfiniteQuery = a));
      var n = t(e("/helpers/extends")),
        r = y(),
        o = He();
      function a(e, t, a) {
        var i = (0, r.getQueryArgs)(e, t, a),
          l = i[0],
          s = i[1];
        return (0, o.useBaseQuery)(l, (0, n.default)({}, s, { infinite: !0 }));
      }
    }
    var ot = !1;
    function at() {
      return (ot || ((ot = !0), rt()), nt.exports);
    }
    var it = {},
      lt = { exports: it };
    function st() {
      ((it.__esModule = !0),
        (it.useInfiniteQuery =
          it.usePaginatedQuery =
          it.useQuery =
          it.useMutation =
          it.useIsFetching =
          it.useErrorResetBoundary =
          it.ReactQueryErrorResetBoundary =
          it.ReactQueryConfigProvider =
          it.useQueryCache =
          it.ReactQueryCacheProvider =
            void 0));
      var e = _e();
      ((it.ReactQueryCacheProvider = e.ReactQueryCacheProvider),
        (it.useQueryCache = e.useQueryCache));
      var t = Ce();
      it.ReactQueryConfigProvider = t.ReactQueryConfigProvider;
      var n = Le();
      ((it.ReactQueryErrorResetBoundary = n.ReactQueryErrorResetBoundary),
        (it.useErrorResetBoundary = n.useErrorResetBoundary));
      var r = Me();
      it.useIsFetching = r.useIsFetching;
      var o = Be();
      it.useMutation = o.useMutation;
      var a = Qe();
      it.useQuery = a.useQuery;
      var i = et();
      it.usePaginatedQuery = i.usePaginatedQuery;
      var l = at();
      it.useInfiniteQuery = l.useInfiniteQuery;
    }
    var ut = !1;
    function ct() {
      return (ut || ((ut = !0), st()), lt.exports);
    }
    var dt = {},
      mt = { exports: dt };
    function pt() {
      dt.__esModule = !0;
      var e = oe();
      Object.keys(e).forEach(function (t) {
        t === "default" || t === "__esModule" || (dt[t] = e[t]);
      });
      var t = ue(),
        n = ct();
      (Object.keys(n).forEach(function (e) {
        e === "default" || e === "__esModule" || (dt[e] = n[e]);
      }),
        (0, e.setBatchedUpdates)(t.unstable_batchedUpdates));
    }
    var _t = !1;
    function ft() {
      return (_t || ((_t = !0), pt()), mt.exports);
    }
    function gt(e) {
      switch (e) {
        case void 0:
          return ft();
      }
    }
    a.exports = gt;
  },
  null,
);
