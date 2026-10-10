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
          h = e.sink,
          y = e.source,
          C = e.treatMissingFieldsAsNull,
          b = e.deferDeduplicatedFields,
          v = e.updater,
          S = e.log,
          R = e.normalizeResponse;
        ((this.$1 = i),
          (this.$2 = l),
          (this.$3 = C),
          (this.$4 = b),
          (this.$5 = !1),
          (this.$6 = new Map()),
          (this.$7 = S),
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
          (this.$33 = !1),
          (this.$17 = 0),
          (this.$18 = s),
          (this.$19 = g),
          (this.$20 = h),
          (this.$21 = new Map()),
          (this.$22 = "started"),
          (this.$23 = u),
          (this.$24 = new Map()),
          (this.$25 = v),
          (this.$29 = c === !0),
          (this.$30 =
            this.$10.request.node.params.operationKind === "subscription"),
          (this.$28 = new Map()),
          (this.$31 = new Set()),
          (this.$27 = []),
          (this.$32 = R),
          (this.$34 =
            this.$10.request.node.params.id == null &&
            this.$10.request.node.params.text == null));
        var L = this.$9++;
        (n("relay-runtime/util/RelayFeatureFlags")
          .PROCESS_OPTIMISTIC_UPDATE_BEFORE_SUBSCRIPTION &&
          f != null &&
          this.$35(
            f.response != null ? { data: f.response } : null,
            f.updater,
            !1,
          ),
          y.subscribe({
            complete: function () {
              return a.$36(L);
            },
            error: function (t) {
              return a.$37(t);
            },
            next: function (t) {
              try {
                a.$38(L, t);
              } catch (e) {
                h.error(e);
              }
            },
            start: function (t) {
              var e;
              (a.$39(L, t),
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
            this.$35(
              f.response != null ? { data: f.response } : null,
              f.updater,
              !1,
            ));
      }
      var t = e.prototype;
      return (
        (t.cancel = function () {
          var e = this;
          if (this.$22 !== "completed") {
            ((this.$22 = "completed"),
              this.$11.delete(this.$10.request.identifier),
              this.$24.size !== 0 &&
                (this.$24.forEach(function (e) {
                  return e.unsubscribe();
                }),
                this.$24.clear()));
            var t = this.$15;
            (t !== null &&
              ((this.$15 = null),
              t.forEach(function (t) {
                return e.$40().revertUpdate(t);
              }),
              this.$41()),
              this.$6.clear(),
              this.$26 != null && (this.$26.dispose(), (this.$26 = null)),
              (this.$27 = []),
              this.$42(),
              this.$43());
          }
        }),
        (t.$44 = function () {
          var e;
          switch (this.$22) {
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
                this.$17 > 0 || (this.$16 && !this.$33) ? "active" : "inactive";
              break;
            }
            default:
              (this.$22, l(0, 42915));
          }
          this.$11.set(this.$10.request.identifier, e);
        }),
        (t.$45 = function (t, r) {
          var e = this,
            o = this.$19;
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
                  return e.$36(a);
                },
                error: function (n) {
                  return e.$37(n);
                },
                start: function (n) {
                  return e.$39(a, n);
                },
              });
          } else t();
        }),
        (t.$36 = function (t) {
          (this.$24.delete(t),
            this.$24.size === 0 &&
              (this.cancel(),
              this.$20.complete(),
              this.$7({ executeId: this.$8, name: "execute.complete" })));
        }),
        (t.$37 = function (t) {
          (this.cancel(),
            this.$20.error(t),
            this.$7({ error: t, executeId: this.$8, name: "execute.error" }));
        }),
        (t.$39 = function (t, n) {
          (this.$24.set(t, n), this.$44());
        }),
        (t.$38 = function (t, n) {
          var e = this,
            r = this.$22 === "loading_incremental" ? "low" : "default";
          this.$45(function () {
            if (!Array.isArray(n) && n.isPreNormalized === !0) {
              e.$46(n);
              return;
            }
            var t = n;
            (e.$7({
              executeId: e.$8,
              name: "execute.next.start",
              operation: e.$10,
              response: t,
            }),
              e.$47(t),
              e.$48(),
              e.$7({
                executeId: e.$8,
                name: "execute.next.end",
                operation: e.$10,
                response: t,
              }));
          }, r);
        }),
        (t.$49 = function (t) {
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
        (t.$50 = function (t) {
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
            r && this.$22 !== "started" && l(0, 42916),
            r ? (this.$35(n, null, this.$3), this.$20.next(n), !0) : !1
          );
        }),
        (t.$46 = function (t) {
          var e = this,
            n;
          if (this.$22 !== "completed") {
            (this.$31.clear(),
              this.$15 !== null &&
                (this.$15.forEach(function (t) {
                  return e.$40().revertUpdate(t);
                }),
                (this.$15 = null)),
              this.$40().commitPayload(
                this.$10,
                t,
                (n = t.storeUpdater) != null ? n : this.$25,
              ),
              t.isFinal
                ? (this.$22 = "loading_final")
                : this.$22 === "started" && (this.$22 = "loading_incremental"));
            var r = this.$10.request.identifier,
              o = this.$11.get(r) === "active",
              a = this.$41(this.$10);
            (this.$44(),
              this.$51(a),
              o &&
                this.$11.get(r) === "inactive" &&
                this.$20.next({ data: null, extensions: { is_final: !0 } }));
          }
        }),
        (t.$47 = function (t) {
          if (this.$22 !== "completed") {
            this.$31.clear();
            var e = Array.isArray(t) ? t : [t],
              r = this.$49(e);
            if (r.length === 0) {
              var o = e.some(function (e) {
                var t;
                return (
                  ((t = e.extensions) == null ? void 0 : t.is_final) === !0
                );
              });
              (o &&
                (this.$16 &&
                this.$22 !== "loading_final" &&
                e.some(function (e) {
                  var t;
                  return (
                    ((t = e.extensions) == null ? void 0 : t.is_normalized) ===
                    !0
                  );
                })
                  ? ((this.$33 = !0),
                    !this.$34 &&
                      e.some(function (e) {
                        var t;
                        return (
                          ((t = e.extensions) == null
                            ? void 0
                            : t.is_client_only) === !0
                        );
                      }) &&
                      (this.$34 = !0),
                    this.$34 && (this.$22 = "loading_final"),
                    this.$44())
                  : ((this.$22 = "loading_final"), this.$44(), (this.$5 = !1))),
                this.$20.next(t));
              return;
            }
            var a = this.$50(r);
            if (!a) {
              var i = v(r),
                l = i[0],
                s = i[1],
                u = i[2],
                c = l.length > 0,
                d = u.length > 0;
              if (c) {
                if (this.$30) {
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
                var g = this.$52(l);
                this.$53(g);
              }
              if (d) {
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
                    !0 && (this.$34 = !0);
                  var E = {
                    errors: [],
                    fieldPayloads: [],
                    followupPayloads: [],
                    incrementalPlaceholders: [],
                    isFinal: L,
                    source: R,
                  };
                  (this.$40().commitPayload(this.$10, E, this.$25),
                    h.push(E),
                    (this.$33 = L),
                    L && this.$34 && (this.$22 = "loading_final"));
                }
                this.$44();
              }
              if (s.length > 0) {
                var k = this.$54(s);
                this.$53(k);
              }
              this.$30 &&
                (r[0].extensions == null
                  ? (r[0].extensions = {
                      __relay_subscription_root_id: this.$10.fragment.dataID,
                    })
                  : (r[0].extensions.__relay_subscription_root_id =
                      this.$10.fragment.dataID));
              var I = this.$41(c || d ? this.$10 : void 0);
              (c && this.$5 && this.$55(), this.$51(I), this.$20.next(t));
            }
          }
        }),
        (t.$35 = function (t, r, o) {
          var e = this;
          if ((this.$15 === null || l(0, 49719), !(t == null && r == null))) {
            var a = [];
            if (t) {
              var i = this.$32(
                t,
                this.$10.root,
                g,
                {
                  actorIdentifier: this.$1,
                  deferDeduplicatedFields: !1,
                  getDataID: this.$2,
                  log: this.$7,
                  path: [],
                  treatMissingFieldsAsNull: o,
                },
                this.$16,
              );
              (R(i),
                a.push({ operation: this.$10, payload: i, updater: r }),
                this.$56(i, a));
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
                return e.$40().applyUpdate(t);
              }));
            var s = this.$41();
            n("relay-runtime/util/RelayFeatureFlags")
              .ENABLE_OPERATION_TRACKER_OPTIMISTIC_UPDATES && this.$51(s);
          }
        }),
        (t.$56 = function (t, r) {
          if (t.followupPayloads && t.followupPayloads.length) {
            var e = t.followupPayloads;
            for (var o of e)
              switch (o.kind) {
                case "ModuleImportPayload":
                  var a = this.$57(),
                    i = a.get(o.operationReference);
                  if (i == null) this.$58(o);
                  else {
                    var s = this.$59(i, o);
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
        (t.$60 = function (t, n) {
          var e;
          n.kind === "SplitOperation" && t.kind === "ModuleImportPayload"
            ? (e = p(t.variables, n.argumentDefinitions, t.args))
            : (e = t.variables);
          var r = _(n, t.dataID, e),
            o = {
              data: t.data,
              extensions:
                this.$22 === "loading_final" ? { is_final: !0 } : void 0,
            };
          return this.$32(
            o,
            r,
            t.typeName,
            {
              actorIdentifier: this.$1,
              deferDeduplicatedFields: !1,
              getDataID: this.$2,
              log: this.$7,
              path: t.path,
              treatMissingFieldsAsNull: this.$3,
            },
            this.$16,
          );
        }),
        (t.$59 = function (t, r) {
          var e = n("relay-runtime/util/getOperation")(t),
            o = [],
            a = this.$60(r, e);
          return (
            R(a),
            o.push({ operation: this.$10, payload: a, updater: null }),
            this.$56(a, o),
            o
          );
        }),
        (t.$58 = function (t) {
          var e = this;
          this.$57()
            .load(t.operationReference)
            .then(function (r) {
              if (!(r == null || e.$22 !== "started")) {
                var o = e.$59(r, t);
                if (
                  (o.forEach(function (t) {
                    return e.$40().applyUpdate(t);
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
                  ((a = e.$15).push.apply(a, o), e.$41());
                }
              }
            });
        }),
        (t.$52 = function (t) {
          var e = this;
          return (
            this.$7({ name: "execute.normalize.start", operation: this.$10 }),
            this.$15 !== null &&
              (this.$15.forEach(function (t) {
                e.$40().revertUpdate(t);
              }),
              (this.$15 = null)),
            (this.$5 = !1),
            this.$6.clear(),
            this.$21.clear(),
            t.map(function (t) {
              var n = e.$32(
                t,
                e.$10.root,
                g,
                {
                  actorIdentifier: e.$1,
                  deferDeduplicatedFields: !1,
                  getDataID: e.$2,
                  log: e.$7,
                  path: [],
                  treatMissingFieldsAsNull: e.$3,
                },
                e.$16,
              );
              return (
                e.$40().commitPayload(e.$10, n, e.$25),
                e.$7({ name: "execute.normalize.end", operation: e.$10 }),
                n
              );
            })
          );
        }),
        (t.$53 = function (t) {
          var e = this;
          this.$22 !== "completed" &&
            t.forEach(function (t) {
              var r = t.incrementalPlaceholders,
                o = t.followupPayloads,
                a = t.isFinal;
              if (
                ((e.$22 = a ? "loading_final" : "loading_incremental"),
                e.$44(),
                a && (e.$5 = !1),
                o &&
                  o.length !== 0 &&
                  o.forEach(function (t) {
                    var n,
                      r = e.$1;
                    ((e.$1 = (n = t.actorIdentifier) != null ? n : e.$1),
                      e.$61(t),
                      (e.$1 = r));
                  }),
                r &&
                  r.length !== 0 &&
                  ((e.$5 = e.$22 !== "loading_final"),
                  r.forEach(function (n) {
                    var r,
                      o = e.$1;
                    ((e.$1 = (r = n.actorIdentifier) != null ? r : e.$1),
                      e.$62(t, n),
                      (e.$1 = o));
                  }),
                  e.$29 || e.$22 === "loading_final"))
              ) {
                n("warning")(
                  e.$29,
                  "RelayModernEnvironment: Operation `%s` contains @defer/@stream directives but was executed in non-streaming mode. See https://fburl.com/relay-incremental-delivery-non-streaming-warning.",
                  e.$10.request.node.params.name,
                );
                var i = [];
                (r.forEach(function (t) {
                  t.kind === "defer" &&
                    i.push(
                      e.$63(t.label, t.path, t, {
                        data: t.data,
                        extensions: { is_final: !0 },
                      }),
                    );
                }),
                  i.length > 0 && e.$53(i));
              }
            });
        }),
        (t.$48 = function () {
          (!this.$30 &&
            !(this.$16 && this.$33 && this.$22 === "loading_final")) ||
            (this.$17 === 0 && this.$5 === !1 && this.$42());
        }),
        (t.$61 = function (t) {
          var e = this;
          switch (t.kind) {
            case "ModuleImportPayload":
              var r = this.$57(),
                o = r.get(t.operationReference);
              if (o != null)
                this.$64(t, n("relay-runtime/util/getOperation")(o));
              else {
                var a = this.$9++;
                this.$17++;
                var i = function () {
                    (e.$17--, e.$48());
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
                                      if ((e.$65(t, o), l))
                                        e.$66(a, r.complete);
                                      else {
                                        var n = e.$41();
                                        e.$51(n);
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
                              l = e.$19;
                            l == null ? a() : (o = l.schedule(a));
                          } else r.complete();
                        },
                      });
                    return function () {
                      (a.unsubscribe(),
                        e.$19 != null && o != null && e.$19.cancel(o));
                    };
                  })
                  .subscribe({
                    complete: function () {
                      (e.$36(a), i());
                    },
                    error: function (n) {
                      (e.$37(n), i());
                    },
                    start: function (n) {
                      return e.$39(a, n);
                    },
                  });
              }
              break;
            case "ActorPayload":
              this.$64(t, t.node);
              break;
            default:
              l(0, 49721, t.kind);
          }
        }),
        (t.$64 = function (t, n) {
          (this.$65(t, n), this.$48());
        }),
        (t.$65 = function (t, n) {
          var e = this.$60(t, n);
          (this.$40().commitPayload(this.$10, e), this.$53([e]));
        }),
        (t.$62 = function (t, r) {
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
            y = this.$21.get(p);
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
          if ((this.$21.set(p, { fieldPayloads: h, record: g }), m != null)) {
            var v = this.$54(m);
            this.$53(v);
          }
        }),
        (t.$54 = function (t) {
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
                  n.push(e.$63(r, o, c, a)));
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
                  n.push(e.$67(r, o, p, a)));
              }
            }),
            n
          );
        }),
        (t.$63 = function (t, r, o, a) {
          var e,
            i = o.selector.dataID,
            s = this.$1;
          this.$1 = (e = o.actorIdentifier) != null ? e : this.$1;
          var u = this.$32(
            a,
            o.selector,
            o.typeName,
            {
              actorIdentifier: this.$1,
              deferDeduplicatedFields: this.$4,
              getDataID: this.$2,
              log: this.$7,
              path: o.path,
              treatMissingFieldsAsNull: this.$3,
            },
            this.$16,
          );
          this.$40().commitPayload(this.$10, u);
          var c = this.$21.get(i);
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
            this.$40().commitPayload(this.$10, p);
          }
          return ((this.$1 = s), u);
        }),
        (t.$67 = function (t, r, o, a) {
          var e = o.parentID,
            i = o.node,
            s = o.variables,
            u = o.actorIdentifier,
            c = this.$1;
          this.$1 = u != null ? u : this.$1;
          var d = i.selections[0];
          (d != null && d.kind === "LinkedField" && d.plural === !0) ||
            l(0, 49727);
          var m = this.$68(a, e, d, s, r, o.path),
            p = m.fieldPayloads,
            _ = m.itemID,
            f = m.itemIndex,
            g = m.prevIDs,
            h = m.relayPayload,
            y = m.storageKey;
          if (
            (this.$40().commitPayload(this.$10, h, function (t) {
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
            this.$40().commitPayload(this.$10, C);
          }
          return ((this.$1 = c), h);
        }),
        (t.$68 = function (t, r, o, a, i, s) {
          var e,
            c,
            m,
            p,
            f = t.data;
          typeof f == "object" || l(0, 49728);
          var g = (e = o.alias) != null ? e : o.name,
            C = y(o, a),
            b = this.$21.get(r);
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
            this.$21.set(r, { fieldPayloads: S, record: D }));
          var $ = this.$32(
            t,
            T,
            k,
            {
              actorIdentifier: this.$1,
              deferDeduplicatedFields: !1,
              getDataID: this.$2,
              log: this.$7,
              path: [].concat(s, [g, String(E)]),
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
        (t.$66 = function (t, n) {
          var e = this;
          (this.$27.push(n),
            this.$26 == null &&
              (this.$26 = t(function () {
                e.$26 = null;
                var t = e.$41();
                e.$51(t);
                for (var n of e.$27) n();
                e.$27 = [];
              })));
        }),
        (t.$51 = function (t) {
          t != null &&
            t.length > 0 &&
            this.$13.update(this.$10.request, new Set(t));
        }),
        (t.$42 = function () {
          this.$13.complete(this.$10.request);
        }),
        (t.$40 = function () {
          return (this.$31.add(this.$1), this.$18(this.$1));
        }),
        (t.$69 = function () {
          return this.$31.size === 0 ? new Set([this.$1]) : this.$31;
        }),
        (t.$41 = function (t) {
          var e = new Set();
          for (var n of this.$69()) {
            var r = this.$18(n).run(t);
            r.forEach(function (t) {
              return e.add(t);
            });
          }
          return Array.from(e);
        }),
        (t.$55 = function () {
          for (var e of this.$69())
            this.$28.has(e) || this.$28.set(e, this.$23(e).retain(this.$10));
        }),
        (t.$43 = function () {
          for (var e of this.$28.values()) e.dispose();
          this.$28.clear();
        }),
        (t.$57 = function () {
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
