__d(
  "relay-runtime/store/OperationExecutor",
  [
    "invariant",
    "Promise",
    "relay-runtime/network/RelayObservable",
    "relay-runtime/store/ClientID",
    "relay-runtime/store/RelayConcreteVariables",
    "relay-runtime/store/RelayModernRecord",
    "relay-runtime/store/RelayModernSelector",
    "relay-runtime/store/RelayRecordSource",
    "relay-runtime/store/RelayStoreUtils",
    "relay-runtime/util/RelayError",
    "relay-runtime/util/RelayFeatureFlags",
    "relay-runtime/util/generateID",
    "relay-runtime/util/getOperation",
    "relay-runtime/util/stableCopy",
    "relay-runtime/util/withStartAndDuration",
    "warning",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u,
      c = (e || (e = n("relay-runtime/util/stableCopy"))).stableCopy,
      d = n("relay-runtime/store/ClientID").generateClientID,
      m = n("relay-runtime/store/ClientID").generateUniqueClientID,
      p = n("relay-runtime/store/RelayConcreteVariables").getLocalVariables,
      _ = n(
        "relay-runtime/store/RelayModernSelector",
      ).createNormalizationSelector,
      f = n("relay-runtime/store/RelayModernSelector").createReaderSelector,
      g = n("relay-runtime/store/RelayStoreUtils").ROOT_TYPE,
      h = n("relay-runtime/store/RelayStoreUtils").TYPENAME_KEY,
      y = n("relay-runtime/store/RelayStoreUtils").getStorageKey;
    function C(e) {
      return new b(e);
    }
    var b = (function () {
      function e(e) {
        var t,
          r,
          o,
          a = this,
          i = e.actorIdentifier,
          l = e.getDataID,
          s = e.getPublishQueue,
          u = e.getStore,
          c = e.isClientPayload,
          d = e.operation,
          m = e.operationExecutions,
          p = e.operationLoader,
          _ = e.operationTracker,
          f = e.optimisticConfig,
          g = e.scheduler,
          h = e.shouldProcessClientComponents,
          y = e.sink,
          C = e.source,
          b = e.treatMissingFieldsAsNull,
          v = e.deferDeduplicatedFields,
          S = e.updater,
          R = e.log,
          L = e.normalizeResponse;
        ((this.$1 = i),
          (this.$2 = l),
          (this.$3 = b),
          (this.$4 = v),
          (this.$5 = !1),
          (this.$6 = new Map()),
          (this.$7 = R),
          (this.$8 = n("relay-runtime/util/generateID")()),
          (this.$9 = 0),
          (this.$10 = d),
          (this.$11 = m),
          (this.$12 = p),
          (this.$13 = _),
          (this.$14 = new Map()),
          (this.$15 = null),
          (this.$16 =
            (t =
              (r = this.$10.request.node.operation.use_exec_time_resolvers) !=
              null
                ? r
                : ((o =
                    this.$10.request.node.operation
                      .exec_time_resolvers_enabled_provider) == null
                    ? void 0
                    : o.get()) === !0) != null
              ? t
              : !1),
          (this.$34 = !1),
          (this.$17 = 0),
          (this.$18 = s),
          (this.$20 = g),
          (this.$21 = y),
          (this.$22 = new Map()),
          (this.$23 = "started"),
          (this.$24 = u),
          (this.$25 = new Map()),
          (this.$26 = S),
          (this.$30 = c === !0),
          (this.$31 =
            this.$10.request.node.params.operationKind === "subscription"),
          (this.$19 = h),
          (this.$29 = new Map()),
          (this.$32 = new Set()),
          (this.$28 = []),
          (this.$33 = L),
          (this.$35 =
            this.$10.request.node.params.id == null &&
            this.$10.request.node.params.text == null));
        var E = this.$9++;
        (n("relay-runtime/util/RelayFeatureFlags")
          .PROCESS_OPTIMISTIC_UPDATE_BEFORE_SUBSCRIPTION &&
          f != null &&
          this.$36(
            f.response != null ? { data: f.response } : null,
            f.updater,
            !1,
          ),
          C.subscribe({
            complete: function () {
              return a.$37(E);
            },
            error: function (t) {
              return a.$38(t);
            },
            next: function (t) {
              try {
                a.$39(E, t);
              } catch (e) {
                y.error(e);
              }
            },
            start: function (t) {
              var e;
              (a.$40(E, t),
                a.$7({
                  cacheConfig: (e = a.$10.request.cacheConfig) != null ? e : {},
                  executeId: a.$8,
                  name: "execute.start",
                  params: a.$10.request.node.params,
                  variables: a.$10.request.variables,
                }));
            },
            unsubscribe: function () {
              a.$7({ executeId: a.$8, name: "execute.unsubscribe" });
            },
          }),
          !n("relay-runtime/util/RelayFeatureFlags")
            .PROCESS_OPTIMISTIC_UPDATE_BEFORE_SUBSCRIPTION &&
            f != null &&
            this.$36(
              f.response != null ? { data: f.response } : null,
              f.updater,
              !1,
            ));
      }
      var t = e.prototype;
      return (
        (t.cancel = function () {
          var e = this;
          if (this.$23 !== "completed") {
            ((this.$23 = "completed"),
              this.$11.delete(this.$10.request.identifier),
              this.$25.size !== 0 &&
                (this.$25.forEach(function (e) {
                  return e.unsubscribe();
                }),
                this.$25.clear()));
            var t = this.$15;
            (t !== null &&
              ((this.$15 = null),
              t.forEach(function (t) {
                return e.$41().revertUpdate(t);
              }),
              this.$42()),
              this.$6.clear(),
              this.$27 != null && (this.$27.dispose(), (this.$27 = null)),
              (this.$28 = []),
              this.$43(),
              this.$44());
          }
        }),
        (t.$45 = function () {
          var e;
          switch (this.$23) {
            case "started": {
              e = "active";
              break;
            }
            case "loading_incremental": {
              e = "active";
              break;
            }
            case "completed": {
              e = "inactive";
              break;
            }
            case "loading_final": {
              e =
                this.$17 > 0 || (this.$16 && !this.$34) ? "active" : "inactive";
              break;
            }
            default:
              (this.$23, l(0, 42915));
          }
          this.$11.set(this.$10.request.identifier, e);
        }),
        (t.$46 = function (t, r) {
          var e = this,
            o = this.$20;
          if (o != null) {
            var a = this.$9++;
            n("relay-runtime/network/RelayObservable")
              .create(function (e) {
                var n = o.schedule(function () {
                  try {
                    (t(), e.complete());
                  } catch (t) {
                    e.error(t);
                  }
                }, r);
                return function () {
                  return o.cancel(n);
                };
              })
              .subscribe({
                complete: function () {
                  return e.$37(a);
                },
                error: function (n) {
                  return e.$38(n);
                },
                start: function (n) {
                  return e.$40(a, n);
                },
              });
          } else t();
        }),
        (t.$37 = function (t) {
          (this.$25.delete(t),
            this.$25.size === 0 &&
              (this.cancel(),
              this.$21.complete(),
              this.$7({ executeId: this.$8, name: "execute.complete" })));
        }),
        (t.$38 = function (t) {
          (this.cancel(),
            this.$21.error(t),
            this.$7({ error: t, executeId: this.$8, name: "execute.error" }));
        }),
        (t.$40 = function (t, n) {
          (this.$25.set(t, n), this.$45());
        }),
        (t.$39 = function (t, n) {
          var e = this,
            r = this.$23 === "loading_incremental" ? "low" : "default";
          this.$46(function () {
            if (!Array.isArray(n) && n.isPreNormalized === !0) {
              e.$47(n);
              return;
            }
            var t = n;
            (e.$7({
              executeId: e.$8,
              name: "execute.next.start",
              operation: e.$10,
              response: t,
            }),
              e.$48(t),
              e.$49(),
              e.$7({
                executeId: e.$8,
                name: "execute.next.end",
                operation: e.$10,
                response: t,
              }));
          }, r);
        }),
        (t.$50 = function (t) {
          var e = this,
            r = [];
          return (
            t.forEach(function (t) {
              if (
                !(
                  t.data === null &&
                  t.extensions != null &&
                  !Object.prototype.hasOwnProperty.call(t, "errors")
                )
              )
                if (t.data == null) {
                  var o =
                      Object.prototype.hasOwnProperty.call(t, "errors") &&
                      t.errors != null
                        ? t.errors
                        : null,
                    a = o
                      ? o
                          .map(function (e) {
                            var t = e.message;
                            return t;
                          })
                          .join("\n")
                      : "(No errors)",
                    i = n("relay-runtime/util/RelayError").create(
                      "RelayNetwork",
                      "No data returned for operation `" +
                        e.$10.request.node.params.name +
                        "`, got error(s):\n" +
                        a +
                        "\n\nSee the error `source` property for more information.",
                    );
                  throw (
                    (i.source = {
                      errors: o,
                      operation: e.$10.request.node,
                      variables: e.$10.request.variables,
                    }),
                    i.stack,
                    i
                  );
                } else {
                  var l = t;
                  r.push(l);
                }
            }),
            r
          );
        }),
        (t.$51 = function (t) {
          var e;
          if (t.length > 1)
            return (
              t.some(function (e) {
                var t;
                return (
                  ((t = e.extensions) == null ? void 0 : t.isOptimistic) === !0
                );
              }) && l(0, 49718),
              !1
            );
          var n = t[0],
            r = ((e = n.extensions) == null ? void 0 : e.isOptimistic) === !0;
          return (
            r && this.$23 !== "started" && l(0, 42916),
            r ? (this.$36(n, null, this.$3), this.$21.next(n), !0) : !1
          );
        }),
        (t.$47 = function (t) {
          var e = this,
            n;
          if (this.$23 !== "completed") {
            (this.$32.clear(),
              this.$15 !== null &&
                (this.$15.forEach(function (t) {
                  return e.$41().revertUpdate(t);
                }),
                (this.$15 = null)),
              this.$41().commitPayload(
                this.$10,
                t,
                (n = t.storeUpdater) != null ? n : this.$26,
              ),
              t.isFinal
                ? (this.$23 = "loading_final")
                : this.$23 === "started" && (this.$23 = "loading_incremental"));
            var r = this.$42(this.$10);
            (this.$45(), this.$52(r));
          }
        }),
        (t.$48 = function (t) {
          if (this.$23 !== "completed") {
            this.$32.clear();
            var e = Array.isArray(t) ? t : [t],
              r = this.$50(e);
            if (r.length === 0) {
              var o = e.some(function (e) {
                var t;
                return (
                  ((t = e.extensions) == null ? void 0 : t.is_final) === !0
                );
              });
              (o &&
                (this.$16 &&
                this.$23 !== "loading_final" &&
                e.some(function (e) {
                  var t;
                  return (
                    ((t = e.extensions) == null ? void 0 : t.is_normalized) ===
                    !0
                  );
                })
                  ? ((this.$34 = !0),
                    !this.$35 &&
                      e.some(function (e) {
                        var t;
                        return (
                          ((t = e.extensions) == null
                            ? void 0
                            : t.is_client_only) === !0
                        );
                      }) &&
                      (this.$35 = !0),
                    this.$35 && (this.$23 = "loading_final"),
                    this.$45())
                  : ((this.$23 = "loading_final"), this.$45(), (this.$5 = !1))),
                this.$21.next(t));
              return;
            }
            var a = this.$51(r);
            if (!a) {
              var i = v(r),
                l = i[0],
                s = i[1],
                u = i[2],
                c = l.length > 0,
                d = u.length > 0;
              if (c) {
                if (this.$31) {
                  var p = m();
                  this.$10 = {
                    fragment: f(
                      this.$10.fragment.node,
                      p,
                      this.$10.fragment.variables,
                      this.$10.fragment.owner,
                    ),
                    request: this.$10.request,
                    root: _(this.$10.root.node, p, this.$10.root.variables),
                  };
                }
                var g = this.$53(l);
                this.$54(g);
              }
              if (d)
                for (var h = [], y = 0; y < u.length; y++) {
                  var C,
                    b,
                    S = u[y],
                    R = new (n("relay-runtime/store/RelayRecordSource"))(
                      S.data,
                    ),
                    L =
                      ((C = S.extensions) == null ? void 0 : C.is_final) === !0;
                  ((b = S.extensions) == null ? void 0 : b.is_client_only) ===
                    !0 && (this.$35 = !0);
                  var E = {
                    errors: [],
                    fieldPayloads: [],
                    followupPayloads: [],
                    incrementalPlaceholders: [],
                    isFinal: L,
                    source: R,
                  };
                  (this.$41().commitPayload(this.$10, E, this.$26),
                    h.push(E),
                    (this.$34 = L),
                    L &&
                      (this.$35 && (this.$23 = "loading_final"), this.$45()));
                }
              if (s.length > 0) {
                var k = this.$55(s);
                this.$54(k);
              }
              this.$31 &&
                (r[0].extensions == null
                  ? (r[0].extensions = {
                      __relay_subscription_root_id: this.$10.fragment.dataID,
                    })
                  : (r[0].extensions.__relay_subscription_root_id =
                      this.$10.fragment.dataID));
              var I = this.$42(c || d ? this.$10 : void 0);
              (c && this.$5 && this.$56(), this.$52(I), this.$21.next(t));
            }
          }
        }),
        (t.$36 = function (t, r, o) {
          var e = this;
          if ((this.$15 === null || l(0, 49719), !(t == null && r == null))) {
            var a = [];
            if (t) {
              var i = this.$33(
                t,
                this.$10.root,
                g,
                {
                  actorIdentifier: this.$1,
                  deferDeduplicatedFields: !1,
                  getDataID: this.$2,
                  log: this.$7,
                  path: [],
                  shouldProcessClientComponents: this.$19,
                  treatMissingFieldsAsNull: o,
                },
                this.$16,
              );
              (R(i),
                a.push({ operation: this.$10, payload: i, updater: r }),
                this.$57(i, a));
            } else
              r &&
                a.push({
                  operation: this.$10,
                  payload: {
                    errors: null,
                    fieldPayloads: null,
                    followupPayloads: null,
                    incrementalPlaceholders: null,
                    isFinal: !1,
                    source: n("relay-runtime/store/RelayRecordSource").create(),
                  },
                  updater: r,
                });
            ((this.$15 = a),
              a.forEach(function (t) {
                return e.$41().applyUpdate(t);
              }));
            var s = this.$42();
            n("relay-runtime/util/RelayFeatureFlags")
              .ENABLE_OPERATION_TRACKER_OPTIMISTIC_UPDATES && this.$52(s);
          }
        }),
        (t.$57 = function (t, r) {
          if (t.followupPayloads && t.followupPayloads.length) {
            var e = t.followupPayloads;
            for (var o of e)
              switch (o.kind) {
                case "ModuleImportPayload":
                  var a = this.$58(),
                    i = a.get(o.operationReference);
                  if (i == null) this.$59(o);
                  else {
                    var s = this.$60(i, o);
                    r.push.apply(r, s);
                  }
                  break;
                case "ActorPayload":
                  n("warning")(
                    !1,
                    "OperationExecutor: Unexpected optimistic ActorPayload. These updates are not supported.",
                  );
                  break;
                default:
                  l(0, 49799, o.kind);
              }
          }
        }),
        (t.$61 = function (t, n) {
          var e;
          n.kind === "SplitOperation" && t.kind === "ModuleImportPayload"
            ? (e = p(t.variables, n.argumentDefinitions, t.args))
            : (e = t.variables);
          var r = _(n, t.dataID, e),
            o = {
              data: t.data,
              extensions:
                this.$23 === "loading_final" ? { is_final: !0 } : void 0,
            };
          return this.$33(
            o,
            r,
            t.typeName,
            {
              actorIdentifier: this.$1,
              deferDeduplicatedFields: !1,
              getDataID: this.$2,
              log: this.$7,
              path: t.path,
              shouldProcessClientComponents: this.$19,
              treatMissingFieldsAsNull: this.$3,
            },
            this.$16,
          );
        }),
        (t.$60 = function (t, r) {
          var e = n("relay-runtime/util/getOperation")(t),
            o = [],
            a = this.$61(r, e);
          return (
            R(a),
            o.push({ operation: this.$10, payload: a, updater: null }),
            this.$57(a, o),
            o
          );
        }),
        (t.$59 = function (t) {
          var e = this;
          this.$58()
            .load(t.operationReference)
            .then(function (r) {
              if (!(r == null || e.$23 !== "started")) {
                var o = e.$60(r, t);
                if (
                  (o.forEach(function (t) {
                    return e.$41().applyUpdate(t);
                  }),
                  e.$15 == null)
                )
                  n("warning")(
                    !1,
                    "OperationExecutor: Unexpected ModuleImport optimistic update in operation %s." +
                      e.$10.request.node.params.name,
                  );
                else {
                  var a;
                  ((a = e.$15).push.apply(a, o), e.$42());
                }
              }
            });
        }),
        (t.$53 = function (t) {
          var e = this;
          return (
            this.$7({ name: "execute.normalize.start", operation: this.$10 }),
            this.$15 !== null &&
              (this.$15.forEach(function (t) {
                e.$41().revertUpdate(t);
              }),
              (this.$15 = null)),
            (this.$5 = !1),
            this.$6.clear(),
            this.$22.clear(),
            t.map(function (t) {
              var n = e.$33(
                t,
                e.$10.root,
                g,
                {
                  actorIdentifier: e.$1,
                  deferDeduplicatedFields: !1,
                  getDataID: e.$2,
                  log: e.$7,
                  path: [],
                  shouldProcessClientComponents: e.$19,
                  treatMissingFieldsAsNull: e.$3,
                },
                e.$16,
              );
              return (
                e.$41().commitPayload(e.$10, n, e.$26),
                e.$7({ name: "execute.normalize.end", operation: e.$10 }),
                n
              );
            })
          );
        }),
        (t.$54 = function (t) {
          var e = this;
          this.$23 !== "completed" &&
            t.forEach(function (t) {
              var r = t.incrementalPlaceholders,
                o = t.followupPayloads,
                a = t.isFinal;
              if (
                ((e.$23 = a ? "loading_final" : "loading_incremental"),
                e.$45(),
                a && (e.$5 = !1),
                o &&
                  o.length !== 0 &&
                  o.forEach(function (t) {
                    var n,
                      r = e.$1;
                    ((e.$1 = (n = t.actorIdentifier) != null ? n : e.$1),
                      e.$62(t),
                      (e.$1 = r));
                  }),
                r &&
                  r.length !== 0 &&
                  ((e.$5 = e.$23 !== "loading_final"),
                  r.forEach(function (n) {
                    var r,
                      o = e.$1;
                    ((e.$1 = (r = n.actorIdentifier) != null ? r : e.$1),
                      e.$63(t, n),
                      (e.$1 = o));
                  }),
                  e.$30 || e.$23 === "loading_final"))
              ) {
                n("warning")(
                  e.$30,
                  "RelayModernEnvironment: Operation `%s` contains @defer/@stream directives but was executed in non-streaming mode. See https://fburl.com/relay-incremental-delivery-non-streaming-warning.",
                  e.$10.request.node.params.name,
                );
                var i = [];
                (r.forEach(function (t) {
                  t.kind === "defer" &&
                    i.push(
                      e.$64(t.label, t.path, t, {
                        data: t.data,
                        extensions: { is_final: !0 },
                      }),
                    );
                }),
                  i.length > 0 && e.$54(i));
              }
            });
        }),
        (t.$49 = function () {
          (!this.$31 &&
            !(this.$16 && this.$34 && this.$23 === "loading_final")) ||
            (this.$17 === 0 && this.$5 === !1 && this.$43());
        }),
        (t.$62 = function (t) {
          var e = this;
          switch (t.kind) {
            case "ModuleImportPayload":
              var r = this.$58(),
                o = r.get(t.operationReference);
              if (o != null)
                this.$65(t, n("relay-runtime/util/getOperation")(o));
              else {
                var a = this.$9++;
                this.$17++;
                var i = function () {
                    (e.$17--, e.$49());
                  },
                  u = n("relay-runtime/network/RelayObservable").from(
                    new (s || (s = n("Promise")))(function (e, n) {
                      r.load(t.operationReference).then(e, n);
                    }),
                  );
                n("relay-runtime/network/RelayObservable")
                  .create(function (r) {
                    var o,
                      a = u.subscribe({
                        error: r.error,
                        next: function (i) {
                          if (i != null) {
                            var a = function () {
                                try {
                                  var o = n("relay-runtime/util/getOperation")(
                                      i,
                                    ),
                                    a = n(
                                      "relay-runtime/util/RelayFeatureFlags",
                                    ).BATCH_ASYNC_MODULE_UPDATES_FN,
                                    l = a != null && e.$17 > 1,
                                    s = n(
                                      "relay-runtime/util/withStartAndDuration",
                                    )(function () {
                                      if ((e.$66(t, o), l))
                                        e.$67(a, r.complete);
                                      else {
                                        var n = e.$42();
                                        e.$52(n);
                                      }
                                    }),
                                    u = s[0],
                                    c = s[1];
                                  (e.$7({
                                    duration: c,
                                    executeId: e.$8,
                                    name: "execute.async.module",
                                    operationName: o.name,
                                  }),
                                    l || r.complete());
                                } catch (e) {
                                  r.error(e);
                                }
                              },
                              l = e.$20;
                            l == null ? a() : (o = l.schedule(a));
                          } else r.complete();
                        },
                      });
                    return function () {
                      (a.unsubscribe(),
                        e.$20 != null && o != null && e.$20.cancel(o));
                    };
                  })
                  .subscribe({
                    complete: function () {
                      (e.$37(a), i());
                    },
                    error: function (n) {
                      (e.$38(n), i());
                    },
                    start: function (n) {
                      return e.$40(a, n);
                    },
                  });
              }
              break;
            case "ActorPayload":
              this.$65(t, t.node);
              break;
            default:
              l(0, 49721, t.kind);
          }
        }),
        (t.$65 = function (t, n) {
          (this.$66(t, n), this.$49());
        }),
        (t.$66 = function (t, n) {
          var e = this.$61(t, n);
          (this.$41().commitPayload(this.$10, e), this.$54([e]));
        }),
        (t.$63 = function (t, r) {
          var e,
            o = r.label,
            a = r.path,
            i = a.map(String).join("."),
            s = this.$6.get(o);
          s == null && ((s = new Map()), this.$6.set(o, s));
          var c = s.get(i),
            m = c != null && c.kind === "response" ? c.responses : null;
          s.set(i, { kind: "placeholder", placeholder: r });
          var p;
          r.kind === "stream"
            ? (p = r.parentID)
            : r.kind === "defer"
              ? (p = r.selector.dataID)
              : l(0, 49722, r.kind);
          var _ = t.source.get(p),
            f = ((e = t.fieldPayloads) != null ? e : []).filter(function (e) {
              var t = d(e.dataID, e.fieldKey);
              return e.dataID === p || t === p;
            });
          _ != null || l(0, 49723, p);
          var g,
            h,
            y = this.$22.get(p);
          if (y != null) {
            g = (u || (u = n("relay-runtime/store/RelayModernRecord"))).update(
              y.record,
              _,
            );
            var C = new Map(),
              b = function (t) {
                var e = S(t);
                C.set(e, t);
              };
            (y.fieldPayloads.forEach(b),
              f.forEach(b),
              (h = Array.from(C.values())));
          } else ((g = _), (h = f));
          if ((this.$22.set(p, { fieldPayloads: h, record: g }), m != null)) {
            var v = this.$55(m);
            this.$54(v);
          }
        }),
        (t.$55 = function (t) {
          var e = this,
            n = [];
          return (
            t.forEach(function (t) {
              var r = t.label,
                o = t.path,
                a = t.response,
                i = e.$6.get(r);
              if (
                (i == null && ((i = new Map()), e.$6.set(r, i)),
                r.indexOf("$defer$") !== -1)
              ) {
                var s = o.map(String).join("."),
                  u = i.get(s);
                if (u == null) {
                  ((u = { kind: "response", responses: [t] }), i.set(s, u));
                  return;
                } else if (u.kind === "response") {
                  u.responses.push(t);
                  return;
                }
                var c = u.placeholder;
                (c.kind === "defer" || l(0, 49724, s, r, c.kind),
                  n.push(e.$64(r, o, c, a)));
              } else {
                var d = o.slice(0, -2).map(String).join("."),
                  m = i.get(d);
                if (m == null) {
                  ((m = { kind: "response", responses: [t] }), i.set(d, m));
                  return;
                } else if (m.kind === "response") {
                  m.responses.push(t);
                  return;
                }
                var p = m.placeholder;
                (p.kind === "stream" || l(0, 49725, d, r, p.kind),
                  n.push(e.$68(r, o, p, a)));
              }
            }),
            n
          );
        }),
        (t.$64 = function (t, r, o, a) {
          var e,
            i = o.selector.dataID,
            s = this.$1;
          this.$1 = (e = o.actorIdentifier) != null ? e : this.$1;
          var u = this.$33(
            a,
            o.selector,
            o.typeName,
            {
              actorIdentifier: this.$1,
              deferDeduplicatedFields: this.$4,
              getDataID: this.$2,
              log: this.$7,
              path: o.path,
              shouldProcessClientComponents: this.$19,
              treatMissingFieldsAsNull: this.$3,
            },
            this.$16,
          );
          this.$41().commitPayload(this.$10, u);
          var c = this.$22.get(i);
          c != null || l(0, 49726, i);
          var d = c.fieldPayloads;
          if (d.length !== 0) {
            var m,
              p = {
                errors: null,
                fieldPayloads: d,
                followupPayloads: null,
                incrementalPlaceholders: null,
                isFinal:
                  ((m = a.extensions) == null ? void 0 : m.is_final) === !0,
                source: n("relay-runtime/store/RelayRecordSource").create(),
              };
            this.$41().commitPayload(this.$10, p);
          }
          return ((this.$1 = s), u);
        }),
        (t.$68 = function (t, r, o, a) {
          var e = o.parentID,
            i = o.node,
            s = o.variables,
            u = o.actorIdentifier,
            c = this.$1;
          this.$1 = u != null ? u : this.$1;
          var d = i.selections[0];
          (d != null && d.kind === "LinkedField" && d.plural === !0) ||
            l(0, 49727);
          var m = this.$69(a, e, d, s, r, o.path),
            p = m.fieldPayloads,
            _ = m.itemID,
            f = m.itemIndex,
            g = m.prevIDs,
            h = m.relayPayload,
            y = m.storageKey;
          if (
            (this.$41().commitPayload(this.$10, h, function (t) {
              var n = t.get(e);
              if (n != null) {
                var r = n.getLinkedRecords(y);
                if (
                  r != null &&
                  !(
                    r.length !== g.length ||
                    r.some(function (e, t) {
                      return g[t] !== (e && e.getDataID());
                    })
                  )
                ) {
                  var o = [].concat(r);
                  ((o[f] = t.get(_)), n.setLinkedRecords(o, y));
                }
              }
            }),
            p.length !== 0)
          ) {
            var C = {
              errors: null,
              fieldPayloads: p,
              followupPayloads: null,
              incrementalPlaceholders: null,
              isFinal: !1,
              source: n("relay-runtime/store/RelayRecordSource").create(),
            };
            this.$41().commitPayload(this.$10, C);
          }
          return ((this.$1 = c), h);
        }),
        (t.$69 = function (t, r, o, a, i, s) {
          var e,
            c,
            m,
            p,
            f = t.data;
          typeof f == "object" || l(0, 49728);
          var g = (e = o.alias) != null ? e : o.name,
            C = y(o, a),
            b = this.$22.get(r);
          b != null || l(0, 49729, r);
          var v = b.record,
            S = b.fieldPayloads,
            R = (
              u || (u = n("relay-runtime/store/RelayModernRecord"))
            ).getLinkedRecordIDs(v, C);
          R != null || l(0, 49730, r, o.name);
          var L = i[i.length - 1],
            E = parseInt(L, 10);
          (E === L && E >= 0) || l(0, 49731, L);
          var k = (c = o.concreteType) != null ? c : f[h];
          typeof k == "string" || l(0, 49720, o.name);
          var I =
            (m = (p = this.$2(f, k)) != null ? p : R == null ? void 0 : R[E]) !=
            null
              ? m
              : d(r, C, E);
          typeof I == "string" || l(0, 49716, C);
          var T = _(o, I, a),
            D = u.clone(v),
            x = [].concat(R);
          ((x[E] = I),
            u.setLinkedRecordIDs(D, C, x),
            this.$22.set(r, { fieldPayloads: S, record: D }));
          var $ = this.$33(
            t,
            T,
            k,
            {
              actorIdentifier: this.$1,
              deferDeduplicatedFields: !1,
              getDataID: this.$2,
              log: this.$7,
              path: [].concat(s, [g, String(E)]),
              shouldProcessClientComponents: this.$19,
              treatMissingFieldsAsNull: this.$3,
            },
            this.$16,
          );
          return {
            fieldPayloads: S,
            itemID: I,
            itemIndex: E,
            prevIDs: R,
            relayPayload: $,
            storageKey: C,
          };
        }),
        (t.$67 = function (t, n) {
          var e = this;
          (this.$28.push(n),
            this.$27 == null &&
              (this.$27 = t(function () {
                e.$27 = null;
                var t = e.$42();
                e.$52(t);
                for (var n of e.$28) n();
                e.$28 = [];
              })));
        }),
        (t.$52 = function (t) {
          t != null &&
            t.length > 0 &&
            this.$13.update(this.$10.request, new Set(t));
        }),
        (t.$43 = function () {
          this.$13.complete(this.$10.request);
        }),
        (t.$41 = function () {
          return (this.$32.add(this.$1), this.$18(this.$1));
        }),
        (t.$70 = function () {
          return this.$32.size === 0 ? new Set([this.$1]) : this.$32;
        }),
        (t.$42 = function (t) {
          var e = new Set();
          for (var n of this.$70()) {
            var r = this.$18(n).run(t);
            r.forEach(function (t) {
              return e.add(t);
            });
          }
          return Array.from(e);
        }),
        (t.$56 = function () {
          for (var e of this.$70())
            this.$29.has(e) || this.$29.set(e, this.$24(e).retain(this.$10));
        }),
        (t.$44 = function () {
          for (var e of this.$29.values()) e.dispose();
          this.$29.clear();
        }),
        (t.$58 = function () {
          var e = this.$12;
          return (e || l(0, 49717), e);
        }),
        e
      );
    })();
    function v(e) {
      var t = [],
        n = [],
        r = [];
      return (
        e.forEach(function (e) {
          var o;
          if (e.path != null || e.label != null) {
            var a = e.label,
              i = e.path;
            ((a == null || i == null) && l(0, 42913),
              n.push({ label: a, path: i, response: e }));
          } else
            ((o = e.extensions) == null ? void 0 : o.is_normalized) === !0
              ? r.push(e)
              : t.push(e);
        }),
        [t, n, r]
      );
    }
    function S(e) {
      var t;
      return (t = JSON.stringify(c(e))) != null ? t : "";
    }
    function R(e) {
      var t = e.incrementalPlaceholders;
      t != null && t.length !== 0 && l(0, 42914);
    }
    a.exports = { execute: C };
  },
  null,
);
