__d(
  "DataAtomBase",
  [
    "invariant",
    "AdsDataAtomInstrumentation",
    "AdsDataDispatchUtils",
    "AdsDispatchCycle",
    "AdsTransitionExemptActions",
    "EventEmitter",
    "FBLogger",
    "err",
    "getErrorSafe",
    "react",
    "requireWeak",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u = (e || (e = o("react"))).startTransition,
      c = null;
    try {
      r("requireWeak")("AdsEditorTransitionConfig", function (e) {
        c = e;
      });
    } catch (e) {}
    var d = typeof jest != "undefined",
      m = (function () {
        function e(e, t) {
          var n = this;
          ((this.registerContainer = function (e, t) {
            var r = n.$19(t),
              o = function (o) {
                return n.__invokeCallback(r, e, o);
              };
            return ((n.$5[r] = o), r);
          }),
            (this.registerDependency = function (e, t) {
              (n.$6[t] == null && (n.$6[t] = new Set()), n.$6[t].add(e));
            }),
            (this.$1 = {}),
            (this.__callbacksNames = {}),
            (this.$2 = {}),
            (this.$9 = {}),
            (this.$3 = {}),
            (this.$5 = {}),
            (this.$6 = {}),
            (this.$7 = {}),
            (this.$8 = {}),
            (this.__dispatchTokenActionTypes = {}),
            (this.$10 = 1),
            (this.$11 = null),
            (this.$12 = new Set()),
            (this.__dispatchSeqNumber = 0),
            (this.__catchErrors = !d),
            (this.$13 = []),
            (this.__laminarAlteredState = {}),
            (this.$14 = new (r("EventEmitter"))()),
            (this.$15 = []),
            (this.__previousLegacyFluxReducerProviderState = {}),
            (this.$16 = t),
            (this.$17 = new Set()),
            (this.$4 = {}),
            (this.$18 = e != null ? e : []));
        }
        var t = e.prototype;
        return (
          (t.register = function (t, n, r, o) {
            var e = this,
              a = t;
            this.$18.forEach(function (e) {
              e.wrapCallback != null && (a = e.wrapCallback(a, n));
            });
            var i = this.$19(n),
              l = function (n) {
                return e.__invokeCallback(i, a, n);
              };
            if (((this.$1[i] = l), (this.__callbacksNames[i] = o), r == null))
              this.$4[i] = l;
            else {
              var s = r.getActionTypes();
              (s != null && Array.isArray(s)
                ? (s.forEach(function (t) {
                    (e.$2[t] || ((e.$2[t] = {}), (e.$9[t] = {})),
                      (e.$2[t][i] = l),
                      r != null &&
                        r.__setAsUnchanged &&
                        (e.$9[t][i] = r.__setAsUnchanged.bind(r)));
                  }),
                  (this.__dispatchTokenActionTypes[i] = s))
                : (this.$3[i] = l),
                this.$20(r, i),
                (this.$7[i] = new Set(r.__getActionTypes())),
                this.$7[i].forEach(function (t) {
                  (e.$8[t] || (e.$8[t] = new Set()), e.$8[t].add(i));
                }));
            }
            return (
              this.$11 && this.$11.register(i, l),
              this.$18.forEach(function (e) {
                e.onRegistered != null && e.onRegistered(n, i, r);
              }),
              i
            );
          }),
          (t.unregister = function (t) {
            var e = this;
            (this.$1[t] || this.$5[t] || s(0, 1331, t),
              delete this.$1[t],
              delete this.$4[t],
              delete this.$5[t]);
            var n = this.__dispatchTokenActionTypes[t];
            (n
              ? (n.forEach(function (n) {
                  (delete e.$2[n][t], delete e.$9[n][t]);
                }),
                delete this.__dispatchTokenActionTypes[t])
              : delete this.$3[t],
              this.$6[t] && this.$6[t].size,
              delete this.$6[t],
              this.$18.forEach(function (e) {
                e.onUnregistered && e.onUnregistered(t);
              }));
          }),
          (t.$20 = function (t, n) {
            if (typeof t.__getDependencyStores == "function") {
              var e = t.__getDependencyStores();
              if (e)
                for (var r = 0; r < e.length; r++) {
                  var o =
                    e[r] && e[r].getDispatchToken && e[r].getDispatchToken();
                  o != null && this.registerDependency(n, o);
                }
            }
          }),
          (t.waitFor = function (t) {
            this.$18.forEach(function (e) {
              e.doWaitFor != null && e.doWaitFor(t);
            });
            var e = this.$11;
            (e || s(0, 1332),
              e.waitFor(t),
              this.$18.forEach(function (e) {
                e.didWaitFor != null && e.didWaitFor(t);
              }));
          }),
          (t.isDispatching = function () {
            return !!this.$11;
          }),
          (t.__invokeCallback = function (t, n, o) {
            if (this.__catchErrors)
              try {
                n(o);
              } catch (n) {
                var e,
                  a = (e = this.__callbacksNames[t]) != null ? e : t,
                  i = o && o.action && o.action.type;
                r("FBLogger")("laminar")
                  .catching(r("getErrorSafe")(n))
                  .warn(
                    "Error in DataAtom callback (Store: %s, Action: %s)",
                    a,
                    i,
                  );
              }
            else n(o);
          }),
          (t.$19 = function (t) {
            return (t != null && t !== "" ? t + "_" : "ID_") + this.$10++;
          }),
          (t.$21 = function (t) {
            var e = t.action;
            if (e) {
              var n = e.type || e.actionType;
              ((e.type = n), (e.actionType = n));
            }
          }),
          (t.$22 = function (t, n, r) {
            if (n !== r) {
              var e;
              ((this.__laminarAlteredState = babelHelpers.extends(
                {},
                this.__laminarAlteredState,
                ((e = {}), (e[t] = r), e),
              )),
                this.$12.add(t),
                this.$14.emit(t));
            }
          }),
          (t.$23 = function (t, n, r) {
            var e = this;
            n !== r &&
              t.forEach(function (t) {
                var n = e.__laminarAlteredState[t.provider],
                  o = t.reduce(r);
                e.$22(t.provider, n, o);
              });
          }),
          (t.$24 = function (t, n, r) {
            var e = this;
            this.__invokeCallback(
              t.provider,
              function (r) {
                var o = r.action;
                n != null &&
                  (e.$11 != null || s(0, 6393, t.provider), e.$11.waitFor(n));
                var a = e.__laminarAlteredState[t.provider],
                  i = t.reduce(e.__laminarAlteredState, o);
                (e.$22(t.provider, a, i), e.$23(t.triggerReducers, a, i));
              },
              r,
            );
          }),
          (t.$25 = function (t, n) {
            var e = this;
            this.__invokeCallback(
              t,
              function (n) {
                var r = n.action,
                  o = r.data;
                if (Object.prototype.hasOwnProperty.call(o, t)) {
                  var a;
                  e.__laminarAlteredState = babelHelpers.extends(
                    {},
                    e.__laminarAlteredState,
                    ((a = {}), (a[t] = o[t]), a),
                  );
                } else delete e.__laminarAlteredState[t];
                e.$14.emit(t);
              },
              n,
            );
          }),
          (t.$26 = function (t, n, a) {
            var e = this,
              i = [];
            this.$15.forEach(function (t) {
              e.__laminarAlteredState[t.provider] &&
                e.__previousLegacyFluxReducerProviderState[t.provider] !==
                  e.__laminarAlteredState[t.provider] &&
                (i.push(t),
                (e.__previousLegacyFluxReducerProviderState[t.provider] =
                  e.__laminarAlteredState[t.provider]));
            });
            var l = o("AdsDataDispatchUtils").mergeReducers(
                o("AdsDataDispatchUtils").getDataReducers(n),
                i,
              ),
              s = [],
              u = [],
              c = [],
              d = {};
            for (var m of l) {
              var p = this.__laminarAlteredState[m.provider],
                _ = m.reducerName;
              if (
                (s.push({ providerName: m.provider, alteredState: p }),
                m != null &&
                  (m.reducerName != null &&
                    m.reducerName !== "" &&
                    u.push(m.reducerName),
                  c.push(m.provider),
                  _ != null))
              ) {
                d[_] = { provider: m.provider, triggerReducers: {} };
                for (var f of m.triggerReducers)
                  if (f != null) {
                    var g = f.triggerReducer;
                    d[_].triggerReducers[g] = { provider: f.provider };
                  }
              }
            }
            var h = {
              actionItem: n,
              alteredStates: s,
              providers: c,
              reducers: u,
              actionDispatchGraph: d,
              newState: this.__laminarAlteredState,
              sequenceNumber: t,
              siblings: [],
              shouldDisplay: !0,
              isActive: !0,
              debugging: {
                stack: r("err")("").stack,
                options:
                  a != null
                    ? a
                    : { line: "0", module: "No Module", moduleID: null },
              },
            };
            this.$16 != null &&
              this.$16.addSnapshotToDebuggerActionDispatchQueue(h);
          }),
          (t.revert = function (t, n) {
            var e = this,
              o = new Map();
            (this.$16 != null && this.$16.setPauseActionDispatches(!0),
              n.forEach(function (t) {
                o.set(t, function (n) {
                  return e.$25(t, n);
                });
              }));
            var a = {
                type: "ADS_DATA_ATOM.REVERT",
                actionType: "ADS_DATA_ATOM.REVERT",
                data: t,
              },
              i = { action: a };
            (f(o, this.$1),
              f(o, this.$5),
              (this.$11 = new (r("AdsDispatchCycle"))(
                o,
                i,
                p(i),
                this.__callbacksNames,
              )),
              this.$11.start(),
              (this.$11 = null));
          }),
          (t.commitRevert = function () {
            var e = this.$16;
            e != null &&
              (e.setPauseActionDispatches(!1), e.clearActionDispatchQueue());
          }),
          (t.undoRevert = function (t) {
            var e = this,
              n = Object.keys(t).filter(function (n) {
                return t[n] !== e.__laminarAlteredState[n];
              });
            (this.revert(t, n),
              this.$16 != null && this.$16.setPauseActionDispatches(!1));
            for (
              var r = this.$16;
              r != null &&
              !r.isActionDispatchQueueEmpty() &&
              !r.getPauseActionDispatches();
            )
              (r.setPauseActionDispatches(!1),
                this.dispatch.apply(this, r.dequeueActionToDispatch()));
          }),
          (t.$27 = function (t) {
            var e = {},
              n = function (n) {
                n.triggerReducers.forEach(function (t) {
                  var r = t.provider;
                  Object.prototype.hasOwnProperty.call(e, r)
                    ? e[r].push(n.provider)
                    : (e[r] = [n.provider]);
                });
              };
            for (var r of t) n(r);
            return e;
          }),
          (t.$28 = function (t, n) {
            for (var e of n) {
              var r = this.$6[e];
              if (r) {
                for (var o of r) t.has(o) || t.set(o, this.$1[o]);
                this.$28(t, r);
              }
            }
          }),
          (t.__dispatch = function (t) {
            var e = this,
              n = t.action;
            this.__dispatchSeqNumber++;
            var a = n.type;
            (this.$18.forEach(function (e) {
              e.onDispatchStart != null && e.onDispatchStart(n);
            }),
              this.$11 && _(this.$11.getPayload(), t));
            var i = new Map(),
              l = o("AdsDataDispatchUtils").mergeReducers(
                o("AdsDataDispatchUtils").getDataReducers(n),
                o("AdsDataDispatchUtils").shouldSkipLegacyFluxDispatch(n)
                  ? []
                  : this.$15,
              ),
              s = this.$27(l),
              u = function (n) {
                (n.registries.length === 0 ||
                  n.registries.some(function (t) {
                    return e.$17.has(t);
                  })) &&
                  (i.set(n.provider, function (t) {
                    return e.$24(n, s[n.provider], t);
                  }),
                  (e.__callbacksNames[n.provider] = n.provider));
              };
            for (var c of l) u(c);
            o("AdsDataDispatchUtils").shouldSkipLegacyFluxDispatch(n)
              ? (this.$8[a] &&
                  this.$8[a].forEach(function (t) {
                    i.set(t, e.$1[t]);
                  }),
                this.$28(i, i.keys()),
                f(i, this.$4))
              : (f(i, this.$3), f(i, this.$2[a]), f(i, this.$4));
            var d = o("AdsDataDispatchUtils").getDataLoggers(n),
              m = function (n) {
                (n.registries.length === 0 ||
                  n.registries.some(function (t) {
                    return e.$17.has(t);
                  })) &&
                  (i.set(n.id, function (t) {
                    return e.__invokeCallback(
                      n.id,
                      function (e) {
                        var t = e.action;
                        n(t);
                      },
                      t,
                    );
                  }),
                  (e.__callbacksNames[n.id] = n.id));
              };
            for (var g of d) m(g);
            if (
              ((this.$11 = new (r("AdsDispatchCycle"))(
                i,
                t,
                p(t),
                this.__callbacksNames,
              )),
              this.$11.start(),
              (this.$11 = null),
              (this.$12 = new Set()),
              this.$9[a])
            )
              for (var h in this.$9[a]) this.$9[a][h]();
            this.$18.forEach(function (e) {
              e.onDispatchEnd != null && e.onDispatchEnd(n);
            });
          }),
          (t.__updateContainers = function (t) {
            var e = this;
            Object.keys(this.$5).forEach(function (n) {
              return e.$5[n] && e.$5[n](t);
            });
          }),
          (t.hasChangedInDispatchCycle = function (t) {
            return (this.$11 != null || s(0, 1335, t), this.$12.has(t));
          }),
          (t.__genReactBatchCallback = function (t, n) {
            var e = this;
            return function () {
              (o("AdsDataAtomInstrumentation").onDispatchCallbacksStart(
                t.action.type,
                n,
              ),
                e.__dispatch(t),
                o("AdsDataAtomInstrumentation").onDispatchCallbacksEnd(
                  t.action.type,
                  n,
                ),
                e.__updateContainers(t));
            };
          }),
          (t.dispatch = function (t, n) {
            var e,
              o = t == null || (e = t.action) == null ? void 0 : e.type;
            if (
              c != null &&
              c.shouldUseTransitions() &&
              !r("AdsTransitionExemptActions").shouldSkipTransition(o)
            ) {
              this.__dispatchWithTransition(t, n);
              return;
            }
            this.__dispatchWithoutTransition(t, n);
          }),
          (t.__dispatchWithTransition = function (t, n) {
            var e = this;
            u(function () {
              e.__dispatchWithoutTransition(t, n);
            });
          }),
          (t.__dispatchWithoutTransition = function (t, n) {
            var e = this.$16;
            if (e != null && e.getPauseActionDispatches()) {
              e.enqueueActionToDispatch(t, n);
              return;
            }
            this.$21(t);
            var r = this.__dispatchSeqNumber;
            o("AdsDataAtomInstrumentation").onActionStart(t.action.type, r);
            var a = this.__genReactBatchCallback(t, r);
            (a(),
              this.$26(r, t.action, n),
              this.$29(),
              o("AdsDataAtomInstrumentation").onActionEnd(t.action.type, r));
          }),
          (t.dispatchAction = function (t, n) {
            this.dispatch({ action: t }, n);
          }),
          (t.$29 = function () {
            var e = this.$13;
            ((this.$13 = []),
              e.forEach(function (e) {
                return e();
              }),
              (this.$13.length = 0));
          }),
          (t.handleUpdateFromServerResponse = function (t) {
            this.dispatch({ action: t });
          }),
          (t.handleUpdateFromViewAction = function (t) {
            this.dispatch({ action: t });
          }),
          (t.addPostDispatchCallback = function (t) {
            this.isDispatching() ? this.$13.push(t) : t();
          }),
          (t.setCatchErrors = function (t) {
            this.__catchErrors = t;
          }),
          (t.laminarRegisterLegacyFluxReducer = function (t) {
            (this.$15.push(t),
              (this.__previousLegacyFluxReducerProviderState[t.provider] =
                t.providerInitialState()));
          }),
          (t.getAlteredState = function () {
            return this.__laminarAlteredState;
          }),
          (t.addListener = function (t, n) {
            return this.$14.addListener(t, n);
          }),
          (t.loadRegistry = function (t) {
            this.$17.add(t);
          }),
          (t.unloadRegistry = function (t) {
            this.$17.delete(t);
          }),
          e
        );
      })();
    function p(e) {
      return (e && e.action && e.action.type) || "<unknown>";
    }
    function _(e, t) {
      s(0, 1336, p(t), p(e));
    }
    function f(e, t) {
      if (t != null) {
        var n = t;
        Object.keys(n).forEach(function (t) {
          return e.set(t, n[t]);
        });
      }
    }
    l.default = m;
  },
  98,
);
