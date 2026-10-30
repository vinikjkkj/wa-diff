__d(
  "relay-runtime/store/RelayReader",
  [
    "invariant",
    "relay-runtime/store/RelayConcreteVariables",
    "relay-runtime/store/RelayModernRecord",
    "relay-runtime/store/RelayStoreUtils",
    "relay-runtime/store/ResolverCache",
    "relay-runtime/store/ResolverFragments",
    "relay-runtime/store/TypeID",
    "relay-runtime/store/live-resolvers/LiveResolverSuspenseSentinel",
    "relay-runtime/util/RelayFeatureFlags",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = ["message"],
      u = ["message"],
      c,
      d,
      m = n(
        "relay-runtime/store/live-resolvers/LiveResolverSuspenseSentinel",
      ).isSuspenseSentinel,
      p = (d = n("relay-runtime/store/RelayStoreUtils"))
        .FIELD_GRANULAR_NOTIFICATIONS_KEY,
      _ = d.FRAGMENT_OWNER_KEY,
      f = d.FRAGMENT_POINTER_IS_WITHIN_UNMATCHED_TYPE_REFINEMENT,
      g = d.FRAGMENT_PROP_NAME_KEY,
      h = d.FRAGMENTS_KEY,
      y = d.ID_KEY,
      C = d.MODULE_COMPONENT_KEY,
      b = d.PARENT_CLIENT_EDGE,
      v = d.ROOT_ID,
      S = d.getArgumentValues,
      R = d.getFieldNotificationKey,
      L = d.getModuleComponentKey,
      E = d.getStorageKey,
      k = n("relay-runtime/store/ResolverCache").NoopResolverCache,
      I = n(
        "relay-runtime/store/ResolverFragments",
      ).RESOLVER_FRAGMENT_ERRORED_SENTINEL,
      T = n("relay-runtime/store/ResolverFragments").withResolverContext,
      D = n("relay-runtime/store/TypeID").generateTypeID;
    function x(e, t, r, o, a) {
      if (n("relay-runtime/util/RelayFeatureFlags").ENABLE_PERF_READER)
        return G(e, t, r, o, a);
      var i = new $(e, t, r, o != null ? o : new k(), a);
      return i.read();
    }
    var $ = (function () {
      function e(e, t, n, r, o) {
        var a, i, l;
        ((this.$1 = t.parentClientEdge),
          (this.$3 = []),
          (this.$4 = []),
          (this.$2 = !1),
          (this.$5 = !1),
          (this.$6 = null),
          (this.$7 = null),
          (this.$8 = t.owner),
          (this.$9 =
            (a =
              (i = this.$8.node.operation.use_exec_time_resolvers) != null
                ? i
                : ((l =
                    this.$8.node.operation
                      .exec_time_resolvers_enabled_provider) == null
                    ? void 0
                    : l.get()) === !0) != null
              ? a
              : !1),
          (this.$10 = e),
          (this.$11 = new Set()),
          (this.$13 = t),
          (this.$14 = t.variables),
          (this.$15 = r),
          (this.$16 = t.node.name),
          (this.$12 = new Set()),
          (this.$17 = o),
          (this.$18 = n));
      }
      var t = e.prototype;
      return (
        (t.read = function () {
          var e,
            t = this.$13,
            r = t.node,
            o = t.dataID,
            a = t.isWithinUnmatchedTypeRefinement,
            i = r.abstractKey,
            l = this.$10.get(o),
            s = !a;
          if (
            (s && i == null && l != null && (this.$19(l, r.type) || (s = !1)),
            s && i != null && l != null)
          ) {
            var u = this.$20(l, i);
            u === !1 && (s = !1);
          }
          this.$5 = !s;
          var c = this.$21(r, o, null),
            d = (e = this.$13.node.metadata) == null ? void 0 : e.catchTo;
          if (
            (d != null && (c = this.$22(c, d, null)),
            this.$12.size > 0 &&
              (this.$15.notifyUpdatedSubscribers(this.$12), this.$12.clear()),
            n("relay-runtime/util/RelayFeatureFlags")
              .ENABLE_READER_FRAGMENTS_LOGGING)
          ) {
            var m;
            (m = this.$18) == null ||
              m.call(this, { name: "reader.read", selector: this.$13 });
          }
          return {
            data: c,
            fieldErrors: this.$6,
            isMissingData: this.$2 && s,
            missingClientEdges: this.$3.length ? this.$3 : null,
            missingLiveResolverFields: this.$4,
            seenRecords: this.$11,
            selector: this.$13,
          };
        }),
        (t.$23 = function (t, r) {
          var e = (
            c || (c = n("relay-runtime/store/RelayModernRecord"))
          ).getErrors(t, r);
          if (e != null) {
            var o = this.$16;
            this.$6 == null && (this.$6 = []);
            for (var a = 0; a < e.length; a++) {
              var i,
                l,
                s,
                u = e[a];
              this.$6.push({
                error: u,
                fieldPath: ((i = u.path) != null ? i : []).join("."),
                handled: !1,
                kind: "relay_field_payload.error",
                owner: o,
                shouldThrow:
                  (l =
                    (s = this.$13.node.metadata) == null
                      ? void 0
                      : s.throwOnFieldError) != null
                    ? l
                    : !1,
                uiContext: void 0,
              });
            }
          }
        }),
        (t.$24 = function (t) {
          var e, n;
          if (!this.$5) {
            this.$6 == null && (this.$6 = []);
            var r = this.$16;
            (this.$6.push(
              (e =
                (n = this.$13.node.metadata) == null
                  ? void 0
                  : n.throwOnFieldError) != null && e
                ? {
                    fieldPath: t,
                    handled: !1,
                    kind: "missing_expected_data.throw",
                    owner: r,
                    uiContext: void 0,
                  }
                : {
                    fieldPath: t,
                    kind: "missing_expected_data.log",
                    owner: r,
                    uiContext: void 0,
                  },
            ),
              (this.$2 = !0),
              this.$1 !== null &&
                this.$3.push({
                  clientEdgeDestinationID: this.$1.clientEdgeDestinationID,
                  request: this.$1.readerClientEdge.operation,
                }));
          }
        }),
        (t.$21 = function (t, r, o) {
          var e = this.$10.get(r),
            a = this.$7;
          if (
            (e != null &&
            (c || (c = n("relay-runtime/store/RelayModernRecord"))).getValue(
              e,
              p,
            )
              ? (this.$7 = r)
              : (this.$11.add(r), (this.$7 = null)),
            e == null)
          )
            return (e === void 0 && this.$24("<record>"), (this.$7 = a), e);
          var i = o || {},
            l = this.$25(t.selections, e, i);
          return ((this.$7 = a), l ? i : null);
        }),
        (t.$26 = function (t) {
          return (
            Object.prototype.hasOwnProperty.call(this.$14, t) || l(0, 1306, t),
            this.$14[t]
          );
        }),
        (t.$27 = function (t, n) {
          if (t.action !== "NONE") {
            var e = this.$16;
            this.$6 == null && (this.$6 = []);
            var r;
            if (t.field.linkedField != null) {
              var o;
              r =
                (o = t.field.linkedField.alias) != null
                  ? o
                  : t.field.linkedField.name;
            } else {
              var a;
              r = (a = t.field.alias) != null ? a : t.field.name;
            }
            var i = null;
            if (n === null && this.$6.length > 0) {
              var l = this.$6[this.$6.length - 1];
              l.kind === "relay_field_payload.error" && (i = l.error);
            }
            switch (t.action) {
              case "THROW":
                this.$6.push({
                  fieldError: i,
                  fieldPath: r,
                  fieldValue: n,
                  handled: !1,
                  kind: "missing_required_field.throw",
                  owner: e,
                  uiContext: void 0,
                });
                return;
              case "LOG":
                this.$6.push({
                  fieldError: i,
                  fieldPath: r,
                  fieldValue: n,
                  kind: "missing_required_field.log",
                  owner: e,
                  uiContext: void 0,
                });
                return;
              default:
                t.action;
            }
          }
        }),
        (t.$28 = function (t, n) {
          return n == null ? (this.$27(t, n), !1) : !0;
        }),
        (t.$22 = function (t, r, o) {
          var e = t;
          switch (r) {
            case "RESULT":
              e = this.$29(t);
              break;
            case "NULL":
              n("relay-runtime/util/RelayFeatureFlags")
                .ENABLE_CATCH_IGNORE_HANDLED_FIELD_ERRORS
                ? this.$6 != null &&
                  this.$6.some(function (e) {
                    return !e.handled;
                  }) &&
                  (e = null)
                : this.$6 != null && this.$6.length > 0 && (e = null);
              break;
            default:
          }
          var a = this.$6;
          if (((this.$6 = o), a != null)) {
            this.$6 == null && (this.$6 = []);
            for (var i = 0; i < a.length; i++) this.$6.push(P(a[i]));
          }
          return e;
        }),
        (t.$29 = function (t) {
          var e,
            r = n("relay-runtime/util/RelayFeatureFlags")
              .ENABLE_CATCH_IGNORE_HANDLED_FIELD_ERRORS
              ? (e = this.$6) == null
                ? void 0
                : e.filter(function (e) {
                    return !e.handled;
                  })
              : this.$6;
          if (r == null || r.length === 0) return { ok: !0, value: t };
          var o = r
            .map(function (e) {
              switch (e.kind) {
                case "relay_field_payload.error":
                  var t = e.error,
                    n = t.message,
                    r = babelHelpers.objectWithoutPropertiesLoose(t, s);
                  return r;
                case "missing_expected_data.throw":
                case "missing_expected_data.log":
                  return { path: e.fieldPath.split(".") };
                case "relay_resolver.error":
                  return {
                    message:
                      "Relay: Error in resolver for field at " +
                      e.fieldPath +
                      " in " +
                      e.owner,
                  };
                case "missing_required_field.throw": {
                  var o;
                  return (
                    e.fieldValue === null
                      ? (o =
                          e.fieldError != null
                            ? "the server returned null with an error: " +
                              e.fieldError.message
                            : "the server returned null")
                      : (o =
                          "the field was missing in the store (data may not have been fetched, or was removed by a graph relationship change: https://relay.dev/docs/next/debugging/why-null/#graph-relationship-change)"),
                    {
                      message:
                        "Relay: Missing @required value at path '" +
                        e.fieldPath +
                        "' in '" +
                        e.owner +
                        "': " +
                        o +
                        ".",
                    }
                  );
                }
                case "missing_required_field.log":
                  return null;
                default:
                  (e.kind, l(0, 89723, e.kind));
              }
            })
            .filter(Boolean);
          return { errors: o, ok: !1 };
        }),
        (t.$25 = function (t, n, r) {
          for (var e = 0; e < t.length; e++) {
            var o = t[e];
            switch (o.kind) {
              case "RequiredField":
                var a = this.$30(o, n, r);
                if (!this.$28(o, a)) return !1;
                break;
              case "CatchField": {
                var i,
                  s,
                  u,
                  c = this.$6;
                this.$6 = null;
                var d = this.$30(o, n, r),
                  m =
                    (i = (s = o.field) == null ? void 0 : s.backingField) !=
                    null
                      ? i
                      : o.field,
                  p =
                    (u = m == null ? void 0 : m.alias) != null
                      ? u
                      : m == null
                        ? void 0
                        : m.name;
                (p != null || l(0, 79709), (r[p] = this.$22(d, o.to, c)));
                break;
              }
              case "ScalarField":
                this.$31(o, n, r);
                break;
              case "LinkedField":
                o.plural ? this.$32(o, n, r) : this.$33(o, n, r);
                break;
              case "Condition":
                var _ = !!this.$26(o.condition);
                if (_ === o.passingValue) {
                  var f = this.$25(o.selections, n, r);
                  if (!f) return !1;
                }
                break;
              case "InlineFragment": {
                var g = this.$34(o, n, r, !1);
                if (g === !1) return !1;
                break;
              }
              case "RelayLiveResolver":
              case "RelayResolver": {
                this.$9 ? this.$31(o, n, r) : this.$35(o, n, r);
                break;
              }
              case "FragmentSpread":
                this.$36(o, n, r);
                break;
              case "AliasedInlineFragmentSpread": {
                this.$37(o, n, r);
                break;
              }
              case "ModuleImport":
                this.$38(o, n, r);
                break;
              case "InlineDataFragmentSpread":
                this.$39(o, n, r);
                break;
              case "Defer":
              case "ClientExtension": {
                var h = this.$2,
                  y = this.$3.length,
                  C = this.$1;
                this.$1 = null;
                var b = this.$25(o.selections, n, r);
                if (
                  ((this.$2 = h || this.$3.length > y || this.$4.length > 0),
                  (this.$1 = C),
                  !b)
                )
                  return !1;
                break;
              }
              case "Stream": {
                var v = this.$25(o.selections, n, r);
                if (!v) return !1;
                break;
              }
              case "ActorChange":
                this.$40(o, n, r);
                break;
              case "ClientEdgeToClientObject":
              case "ClientEdgeToServerObject":
                if (
                  this.$9 &&
                  (o.backingField.kind === "RelayResolver" ||
                    o.backingField.kind === "RelayLiveResolver")
                ) {
                  var S = o.linkedField;
                  S.plural ? this.$32(S, n, r) : this.$33(S, n, r);
                } else this.$41(o, n, r);
                break;
              default:
                l(0, 1307, o.kind);
            }
          }
          return !0;
        }),
        (t.$30 = function (t, n, r) {
          switch (t.field.kind) {
            case "ScalarField":
              return this.$31(t.field, n, r);
            case "LinkedField":
              return t.field.plural
                ? this.$32(t.field, n, r)
                : this.$33(t.field, n, r);
            case "RelayResolver":
            case "RelayLiveResolver":
              return this.$9
                ? this.$31(t.field, n, r)
                : this.$35(t.field, n, r);
            case "ClientEdgeToClientObject":
            case "ClientEdgeToServerObject":
              if (
                this.$9 &&
                (t.field.backingField.kind === "RelayResolver" ||
                  t.field.backingField.kind === "RelayLiveResolver")
              ) {
                var e = t.field;
                return e.linkedField.plural
                  ? this.$32(e.linkedField, n, r)
                  : this.$33(e.linkedField, n, r);
              } else return this.$41(t.field, n, r);
            case "AliasedInlineFragmentSpread":
              return this.$37(t.field, n, r);
            default:
              (t.field.kind, l(0, 1307, t.field.kind));
          }
        }),
        (t.$35 = function (t, r, o) {
          var e,
            a = (
              c || (c = n("relay-runtime/store/RelayModernRecord"))
            ).getDataID(r),
            i = this.$6;
          this.$6 = null;
          var l = this.$42(t, a),
            s = (e = t.alias) != null ? e : t.name;
          return (this.$43(i, s), (o[s] = l), l);
        }),
        (t.$42 = function (t, n) {
          var e = this,
            r = t.fragment,
            o,
            a = function (n) {
              return o != null
                ? {
                    data: o.data,
                    fieldErrors: o.fieldErrors,
                    isMissingData: o.isMissingData,
                  }
                : ((o = x(e.$10, n, null, e.$15, void 0)),
                  {
                    data: o.data,
                    fieldErrors: o.fieldErrors,
                    isMissingData: o.isMissingData,
                  });
            },
            i = function () {
              if (r != null) {
                var i,
                  l = {
                    __fragmentOwner: e.$8,
                    __fragments:
                      ((i = {}),
                      (i[r.name] = r.args ? S(r.args, e.$14) : {}),
                      i),
                    __id: n,
                  };
                e.$1 !== null && (l[b] = e.$1);
                var s = { getDataForResolverFragment: a };
                return T(s, function () {
                  var n = N(t, e.$14, l, e.$17),
                    r = n[0],
                    a = n[1];
                  return { error: a, resolverResult: r, snapshot: o };
                });
              } else {
                var u = N(t, e.$14, null, e.$17),
                  c = u[0],
                  d = u[1];
                return { error: d, resolverResult: c, snapshot: void 0 };
              }
            },
            l = this.$15.readFromCacheOrEvaluate(n, t, this.$14, i, a),
            s = l[0],
            u = l[1],
            c = l[2],
            d = l[3],
            m = l[4],
            p = l[5];
          return (this.$44(t.path, d, c, u, m, p), s);
        }),
        (t.$44 = function (t, n, r, o, a, i) {
          var e = this;
          if (n != null) {
            if (n.missingClientEdges != null)
              for (var l = 0; l < n.missingClientEdges.length; l++) {
                var s = n.missingClientEdges[l];
                this.$3.push(s);
              }
            if (n.missingLiveResolverFields != null) {
              this.$2 = this.$2 || n.missingLiveResolverFields.length > 0;
              for (var u = 0; u < n.missingLiveResolverFields.length; u++) {
                var c = n.missingLiveResolverFields[u];
                this.$4.push(c);
              }
            }
            if (n.fieldErrors != null) {
              this.$6 == null && (this.$6 = []);
              for (var d = 0; d < n.fieldErrors.length; d++) {
                var m,
                  p = n.fieldErrors[d];
                ((m = this.$13.node.metadata) == null
                  ? void 0
                  : m.throwOnFieldError) === !0
                  ? this.$6.push(p)
                  : this.$6.push(P(p));
              }
            }
            this.$2 = this.$2 || n.isMissingData;
          }
          if (r) {
            var _,
              f,
              g = {
                error: r,
                fieldPath: t,
                handled: !1,
                kind: "relay_resolver.error",
                owner: this.$16,
                shouldThrow:
                  (_ =
                    (f = this.$13.node.metadata) == null
                      ? void 0
                      : f.throwOnFieldError) != null
                    ? _
                    : !1,
                uiContext: void 0,
              };
            this.$6 == null ? (this.$6 = [g]) : this.$6.push(g);
          }
          (o != null && this.$11.add(o),
            a != null && ((this.$2 = !0), this.$4.push(a)),
            i != null &&
              i.forEach(function (t) {
                e.$12.add(t);
              }));
        }),
        (t.$41 = function (t, r, o) {
          var e,
            a = this,
            i = t.backingField;
          i.kind !== "ClientExtension" || l(0, 56148);
          var s = (e = i.alias) != null ? e : i.name,
            u = {};
          this.$25([i], r, u);
          var d = u[s];
          if (d == null || m(d)) return ((o[s] = d), d);
          if (t.linkedField.plural) {
            (Array.isArray(d) || l(0, 86538, i.path, this.$8.identifier),
              t.kind === "ClientEdgeToClientObject" || l(0, 86537, t.kind));
            var p, _;
            if (t.backingField.normalizationInfo == null) {
              ((p = []), (_ = []));
              for (var f = 0; f < d.length; f++) {
                var g,
                  h = d[f];
                if (h == null) {
                  (p.push(null), _.push(null));
                  continue;
                }
                var y = (g = t.concreteType) != null ? g : h.__typename;
                typeof y == "string" || l(0, 86536, i.path, this.$8.identifier);
                var C = M(h, i.path, this.$8.identifier),
                  b = t.modelResolvers;
                if (b != null) {
                  var v = b[y];
                  if (v !== void 0) {
                    var S = this.$15.ensureClientRecord(C, y),
                      R = this.$42(v, S);
                    (p.push(R != null ? S : null), _.push(null));
                  } else {
                    var L, E;
                    p.push(C);
                    var k =
                      (L =
                        (E = t.serverObjectOperations) == null
                          ? void 0
                          : E[y]) != null
                        ? L
                        : null;
                    k != null
                      ? _.push({
                          clientEdgeDestinationID: C,
                          readerClientEdge: { operation: k },
                        })
                      : _.push(null);
                  }
                } else
                  (p.push(this.$15.ensureClientRecord(C, y)), _.push(null));
              }
            } else
              ((p = d.map(function (e) {
                return M(e, i.path, a.$8.identifier);
              })),
                (_ = null));
            var I = this.$1;
            this.$1 = null;
            var T = this.$45(t.linkedField, p, r, o, _);
            return ((this.$1 = I), (o[s] = T), T);
          } else {
            var D,
              x,
              $ = (D = i.normalizationInfo) == null ? void 0 : D.kind,
              P =
                $ === "ServerWeak" || $ === "AbstractInline"
                  ? w(d, i.path, this.$8.identifier)
                  : M(d, i.path, this.$8.identifier),
              N,
              A = (x = t.concreteType) != null ? x : d.__typename,
              F;
            if (t.kind === "ClientEdgeToClientObject")
              if (t.backingField.normalizationInfo == null) {
                typeof A == "string" || l(0, 86536, i.path, this.$8.identifier);
                var O = t.modelResolvers;
                if (O != null) {
                  var B = O[A];
                  if (B !== void 0) {
                    N = this.$15.ensureClientRecord(P, A);
                    var W = this.$42(B, N);
                    if (W == null) return ((o[s] = null), null);
                    F = null;
                  } else {
                    N = P;
                    var q = t.serverObjectOperations,
                      U = q != null ? q[A] : null;
                    U != null
                      ? (F = {
                          clientEdgeDestinationID: P,
                          readerClientEdge: { operation: U },
                        })
                      : (F = null);
                  }
                } else ((N = this.$15.ensureClientRecord(P, A)), (F = null));
              } else {
                N = P;
                var V = t.backingField.normalizationInfo,
                  H =
                    (V == null ? void 0 : V.kind) === "AbstractInline"
                      ? V.inlineKinds[A]
                      : V == null
                        ? void 0
                        : V.kind;
                F = null;
              }
            else
              ((N = P),
                (F = { clientEdgeDestinationID: P, readerClientEdge: t }));
            var G = this.$1;
            this.$1 = F;
            var z = o[s];
            z == null ||
              typeof z == "object" ||
              l(
                0,
                86534,
                i.path,
                this.$8.identifier,
                (
                  c || (c = n("relay-runtime/store/RelayModernRecord"))
                ).getDataID(r),
                z,
              );
            var j = this.$6;
            this.$6 = null;
            var K = this.$21(t.linkedField, N, z);
            return (this.$43(j, s), (this.$1 = G), (o[s] = K), K);
          }
        }),
        (t.$31 = function (t, r, o) {
          var e,
            a = (e = t.alias) != null ? e : t.name,
            i = E(t, this.$14);
          this.$7 != null && this.$11.add(R(this.$7, i));
          var l = (
            c || (c = n("relay-runtime/store/RelayModernRecord"))
          ).getValue(r, i);
          return (
            l === null ||
            (n("relay-runtime/util/RelayFeatureFlags")
              .ENABLE_NONCOMPLIANT_ERROR_HANDLING_ON_LISTS &&
              Array.isArray(l) &&
              l.length === 0)
              ? this.$23(r, i)
              : l === void 0 && this.$24(a),
            (o[a] = l),
            l
          );
        }),
        (t.$33 = function (t, r, o) {
          var e,
            a = (e = t.alias) != null ? e : t.name,
            i = E(t, this.$14);
          this.$7 != null && this.$11.add(R(this.$7, i));
          var s = (
            c || (c = n("relay-runtime/store/RelayModernRecord"))
          ).getLinkedRecordID(r, i);
          if (s == null)
            return (
              (o[a] = s),
              s === null ? this.$23(r, i) : s === void 0 && this.$24(a),
              s
            );
          var u = o[a];
          u == null ||
            typeof u == "object" ||
            l(
              0,
              86540,
              a,
              this.$8.identifier,
              (c || (c = n("relay-runtime/store/RelayModernRecord"))).getDataID(
                r,
              ),
              u,
            );
          var d = this.$6;
          this.$6 = null;
          var m = this.$21(t, s, u);
          return (this.$43(d, a), (o[a] = m), m);
        }),
        (t.$43 = function (t, n) {
          if (this.$6 != null) {
            for (var e = 0; e < this.$6.length; e++) {
              var r = this.$6[e];
              r.owner === this.$16 &&
                (r.kind === "missing_expected_data.throw" ||
                  r.kind === "missing_expected_data.log" ||
                  r.kind === "missing_required_field.throw" ||
                  r.kind === "missing_required_field.log") &&
                (r.fieldPath = n + "." + r.fieldPath);
            }
            if (t != null) {
              for (var o = this.$6.length - 1; o >= 0; o--) t.push(this.$6[o]);
              this.$6 = t;
            }
          } else this.$6 = t;
        }),
        (t.$40 = function (t, r, o) {
          var e,
            a = (e = t.alias) != null ? e : t.name,
            i = E(t, this.$14),
            l = (
              c || (c = n("relay-runtime/store/RelayModernRecord"))
            ).getActorLinkedRecordID(r, i);
          if (l == null)
            return (
              (o[a] = l),
              l === void 0 ? this.$24(a) : l === null && this.$23(r, i),
              o[a]
            );
          var s = l[0],
            u = l[1],
            d = {};
          return (
            this.$36(t.fragmentSpread, c.fromObject({ __id: u }), d),
            (o[a] = { __fragmentRef: d, __viewer: s }),
            o[a]
          );
        }),
        (t.$32 = function (t, r, o) {
          var e = E(t, this.$14);
          this.$7 != null && this.$11.add(R(this.$7, e));
          var a = (
            c || (c = n("relay-runtime/store/RelayModernRecord"))
          ).getLinkedRecordIDs(r, e);
          return (
            (a === null ||
              (n("relay-runtime/util/RelayFeatureFlags")
                .ENABLE_NONCOMPLIANT_ERROR_HANDLING_ON_LISTS &&
                Array.isArray(a) &&
                a.length === 0)) &&
              this.$23(r, e),
            this.$45(t, a, r, o)
          );
        }),
        (t.$45 = function (t, r, o, a, i) {
          var e,
            s = this,
            u = (e = t.alias) != null ? e : t.name;
          if (r == null) return ((a[u] = r), r === void 0 && this.$24(u), r);
          var d = a[u];
          d == null ||
            Array.isArray(d) ||
            l(
              0,
              1309,
              u,
              (c || (c = n("relay-runtime/store/RelayModernRecord"))).getDataID(
                o,
              ),
              d,
            );
          var m = this.$6;
          this.$6 = null;
          var p = d || [];
          return (
            r.forEach(function (e, r) {
              if (e == null) {
                (e === void 0 && s.$24(String(r)), (p[r] = e));
                return;
              }
              var a = p[r];
              a == null ||
                typeof a == "object" ||
                l(
                  0,
                  1308,
                  u,
                  (
                    c || (c = n("relay-runtime/store/RelayModernRecord"))
                  ).getDataID(o),
                  a,
                );
              var d = s.$6;
              s.$6 = null;
              var m = s.$1;
              if (i != null) {
                var _;
                s.$1 = (_ = i[r]) != null ? _ : null;
              }
              ((p[r] = s.$21(t, e, a)), (s.$1 = m), s.$43(d, r));
            }),
            this.$43(m, u),
            (a[u] = p),
            p
          );
        }),
        (t.$38 = function (t, r, o) {
          var e = L(t.documentName),
            a = (
              c || (c = n("relay-runtime/store/RelayModernRecord"))
            ).getValue(r, e),
            i = a !== void 0 ? a : t.componentModuleProvider;
          if (i == null) {
            i === void 0 && this.$24("<module-import>");
            return;
          }
          (this.$36(
            { args: t.args, kind: "FragmentSpread", name: t.fragmentName },
            r,
            o,
          ),
            (o[g] = t.fragmentPropName),
            (o[C] = i));
        }),
        (t.$37 = function (t, n, r) {
          var e = this.$6;
          this.$6 = null;
          var o = this.$34(t.fragment, n, {}, !0);
          return (
            this.$43(e, t.name),
            o === !1 && (o = null),
            (r[t.name] = o),
            o
          );
        }),
        (t.$34 = function (t, n, r, o) {
          if (t.type == null) {
            var e = this.$25(t.selections, n, r);
            return e === !1 ? !1 : r;
          }
          var a = t.abstractKey;
          if (a == null)
            if (this.$19(n, t.type)) {
              var i = this.$25(t.selections, n, r);
              if (!i) return !1;
            } else return null;
          else {
            var l = this.$20(n, a);
            if (l === !1 && o) return null;
            var s = this.$2,
              u = this.$5;
            this.$5 = u || l === !1;
            var c = this.$25(t.selections, n, r);
            if (((this.$5 = u), l === !1)) return ((this.$2 = s), null);
            if (l == null) return;
            if (c === !1) return !1;
          }
          return r;
        }),
        (t.$19 = function (t, r) {
          var e = (
            c || (c = n("relay-runtime/store/RelayModernRecord"))
          ).getType(t);
          return (
            (e != null && e === r) ||
            (c || (c = n("relay-runtime/store/RelayModernRecord"))).getDataID(
              t,
            ) === v
          );
        }),
        (t.$36 = function (t, r, o) {
          var e = o[h];
          (e == null && (e = o[h] = {}),
            (typeof e == "object" && e != null) || l(0, 1310, e),
            o[y] == null &&
              (o[y] = (
                c || (c = n("relay-runtime/store/RelayModernRecord"))
              ).getDataID(r)));
          var a = S(t.args, this.$14, this.$5);
          if (
            ((e[t.name] = a),
            (o[_] = this.$8),
            this.$1 !== null && (o[b] = this.$1),
            n("relay-runtime/util/RelayFeatureFlags")
              .ENABLE_READER_FRAGMENTS_LOGGING)
          ) {
            var i;
            (i = this.$18) == null ||
              i.call(this, {
                name: "reader.fragmentSpread",
                fragmentName: t.name,
                data: o,
              });
          }
        }),
        (t.$39 = function (t, r, o) {
          var e = o[h];
          (e == null && (e = o[h] = {}),
            (typeof e == "object" && e != null) || l(0, 1310, e),
            o[y] == null &&
              (o[y] = (
                c || (c = n("relay-runtime/store/RelayModernRecord"))
              ).getDataID(r)));
          var a = {},
            i = this.$16;
          this.$16 = t.name;
          var s = this.$14,
            u = t.args ? S(t.args, this.$14) : {};
          ((this.$14 = n(
            "relay-runtime/store/RelayConcreteVariables",
          ).getFragmentVariables(t, this.$8.variables, u)),
            this.$25(t.selections, r, a),
            (this.$14 = s),
            (this.$16 = i),
            (e[t.name] = a));
        }),
        (t.$20 = function (t, r) {
          var e = (
              c || (c = n("relay-runtime/store/RelayModernRecord"))
            ).getType(t),
            o = this.$10.get(D(e)),
            a =
              o != null
                ? (
                    c || (c = n("relay-runtime/store/RelayModernRecord"))
                  ).getValue(o, r)
                : null;
          if (a == null) {
            var i;
            if (
              ((i = this.$8.node.operation.clientAbstractTypes) == null ||
              (i = i[r]) == null
                ? void 0
                : i.includes(e)) === !0
            )
              return !0;
            this.$24("<abstract-type-hint>");
          }
          return a;
        }),
        e
      );
    })();
    function P(e) {
      switch (e.kind) {
        case "missing_expected_data.throw":
        case "missing_required_field.throw":
        case "relay_field_payload.error":
        case "relay_resolver.error":
          return babelHelpers.extends({}, e, { handled: !0 });
        case "missing_expected_data.log":
        case "missing_required_field.log":
          return e;
        default:
          (e.kind, l(0, 87029, e.kind));
      }
    }
    function N(e, t, n, r) {
      var o =
          typeof e.resolverModule == "function"
            ? e.resolverModule
            : e.resolverModule.default,
        a = null,
        i = null;
      try {
        var l = [];
        e.fragment != null && l.push(n);
        var s = e.args ? S(e.args, t) : void 0;
        (l.push(s), l.push(r), (a = o.apply(null, l)));
      } catch (e) {
        ((a = null), e !== I && (i = e));
      }
      return [a, i];
    }
    function M(e, t, n) {
      if (typeof e == "string") return e;
      if (typeof e == "object" && e != null && typeof e.id == "string")
        return e.id;
      l(0, 86539, t, n);
    }
    function w(e, t, n) {
      return typeof e == "object" && e != null && typeof e.__id == "string"
        ? e.__id
        : M(e, t, n);
    }
    var A = Object.freeze({}),
      F = Object.freeze(((e = {}), (e[f] = !0), e)),
      O = 16,
      B = 64,
      W = new WeakMap(),
      q = Object.freeze({});
    function U(e, t) {
      if (!W.has(e)) {
        var n = Object.keys(t);
        if (n.length <= O || n.length > B) {
          W.set(e, q);
          return;
        }
        for (var r = {}, o = 0; o < n.length; o++)
          Object.defineProperty(r, n[o], {
            configurable: !0,
            enumerable: !0,
            value: void 0,
            writable: !0,
          });
        W.set(e, r);
      }
    }
    var V = Object.freeze([]),
      H = (function () {
        function e(e, t, n, r, o) {
          var a, i, l;
          ((this.$1 = t.parentClientEdge),
            (this.$3 = null),
            (this.$4 = null),
            (this.$2 = !1),
            (this.$5 = !1),
            (this.$6 = null),
            (this.$7 = null),
            (this.$8 = t.owner),
            (this.$9 =
              (a =
                (i = this.$8.node.operation.use_exec_time_resolvers) != null
                  ? i
                  : ((l =
                      this.$8.node.operation
                        .exec_time_resolvers_enabled_provider) == null
                      ? void 0
                      : l.get()) === !0) != null
                ? a
                : !1),
            (this.$10 = e),
            (this.$11 = new Set()),
            (this.$13 = t),
            (this.$14 = t.variables),
            (this.$15 = r),
            (this.$16 = t.node.name),
            (this.$12 = null),
            (this.$17 = o),
            (this.$18 = n));
        }
        var t = e.prototype;
        return (
          (t.read = function () {
            var e,
              t,
              r = this.$13,
              o = r.node,
              a = r.dataID,
              i = r.isWithinUnmatchedTypeRefinement,
              l = o.abstractKey,
              s = this.$10.get(a),
              u = !i;
            if (
              (u && l == null && s != null && (this.$19(s, o.type) || (u = !1)),
              u && l != null && s != null)
            ) {
              var c = this.$20(s, l);
              c === !1 && (u = !1);
            }
            this.$5 = !u;
            var d = this.$21(o, a, null),
              m = (e = this.$13.node.metadata) == null ? void 0 : e.catchTo;
            m != null && (d = this.$22(d, m, null));
            var p = this.$12;
            if (
              (p != null &&
                p.size > 0 &&
                (this.$15.notifyUpdatedSubscribers(p), (this.$12 = null)),
              n("relay-runtime/util/RelayFeatureFlags")
                .ENABLE_READER_FRAGMENTS_LOGGING)
            ) {
              var _;
              (_ = this.$18) == null ||
                _.call(this, { name: "reader.read", selector: this.$13 });
            }
            return {
              data: d,
              fieldErrors: this.$6,
              isMissingData: this.$2 && u,
              missingClientEdges:
                this.$3 != null && this.$3.length ? this.$3 : null,
              missingLiveResolverFields: (t = this.$4) != null ? t : V,
              seenRecords: this.$11,
              selector: this.$13,
            };
          }),
          (t.$23 = function (t, r) {
            var e = (
              c || (c = n("relay-runtime/store/RelayModernRecord"))
            ).getErrors(t, r);
            if (e != null) {
              var o = this.$16;
              this.$6 == null && (this.$6 = []);
              for (var a = 0; a < e.length; a++) {
                var i,
                  l,
                  s,
                  u = e[a];
                this.$6.push({
                  error: u,
                  fieldPath: ((i = u.path) != null ? i : []).join("."),
                  handled: !1,
                  kind: "relay_field_payload.error",
                  owner: o,
                  shouldThrow:
                    (l =
                      (s = this.$13.node.metadata) == null
                        ? void 0
                        : s.throwOnFieldError) != null
                      ? l
                      : !1,
                  uiContext: void 0,
                });
              }
            }
          }),
          (t.$24 = function (t) {
            var e, n;
            if (!this.$5) {
              this.$6 == null && (this.$6 = []);
              var r = this.$16;
              (this.$6.push(
                (e =
                  (n = this.$13.node.metadata) == null
                    ? void 0
                    : n.throwOnFieldError) != null && e
                  ? {
                      fieldPath: t,
                      handled: !1,
                      kind: "missing_expected_data.throw",
                      owner: r,
                      uiContext: void 0,
                    }
                  : {
                      fieldPath: t,
                      kind: "missing_expected_data.log",
                      owner: r,
                      uiContext: void 0,
                    },
              ),
                (this.$2 = !0),
                this.$1 !== null &&
                  this.$25({
                    clientEdgeDestinationID: this.$1.clientEdgeDestinationID,
                    request: this.$1.readerClientEdge.operation,
                  }));
            }
          }),
          (t.$21 = function (t, r, o) {
            var e = this.$10.get(r),
              a = this.$7;
            if (
              (e != null &&
              (c || (c = n("relay-runtime/store/RelayModernRecord"))).getValue(
                e,
                p,
              )
                ? (this.$7 = r)
                : (this.$11.add(r), (this.$7 = null)),
              e == null)
            )
              return (e === void 0 && this.$24("<record>"), (this.$7 = a), e);
            var i = o || {},
              l = this.$26(t.selections, e, i);
            return (
              l && o == null && t.selections.length > O && U(t, i),
              (this.$7 = a),
              l ? i : null
            );
          }),
          (t.$27 = function (t) {
            return (
              Object.prototype.hasOwnProperty.call(this.$14, t) ||
                l(0, 1306, t),
              this.$14[t]
            );
          }),
          (t.$28 = function (t, n) {
            if (t.action !== "NONE") {
              var e = this.$16;
              this.$6 == null && (this.$6 = []);
              var r;
              if (t.field.linkedField != null) {
                var o;
                r =
                  (o = t.field.linkedField.alias) != null
                    ? o
                    : t.field.linkedField.name;
              } else {
                var a;
                r = (a = t.field.alias) != null ? a : t.field.name;
              }
              var i = null;
              if (n === null && this.$6.length > 0) {
                var l = this.$6[this.$6.length - 1];
                l.kind === "relay_field_payload.error" && (i = l.error);
              }
              switch (t.action) {
                case "THROW":
                  this.$6.push({
                    fieldError: i,
                    fieldPath: r,
                    fieldValue: n,
                    handled: !1,
                    kind: "missing_required_field.throw",
                    owner: e,
                    uiContext: void 0,
                  });
                  return;
                case "LOG":
                  this.$6.push({
                    fieldError: i,
                    fieldPath: r,
                    fieldValue: n,
                    kind: "missing_required_field.log",
                    owner: e,
                    uiContext: void 0,
                  });
                  return;
                default:
                  t.action;
              }
            }
          }),
          (t.$29 = function (t, n) {
            return n == null ? (this.$28(t, n), !1) : !0;
          }),
          (t.$22 = function (t, r, o) {
            var e = t;
            switch (r) {
              case "RESULT":
                e = this.$30(t);
                break;
              case "NULL":
                n("relay-runtime/util/RelayFeatureFlags")
                  .ENABLE_CATCH_IGNORE_HANDLED_FIELD_ERRORS
                  ? this.$6 != null &&
                    this.$6.some(function (e) {
                      return !e.handled;
                    }) &&
                    (e = null)
                  : this.$6 != null && this.$6.length > 0 && (e = null);
                break;
              default:
            }
            var a = this.$6;
            if (((this.$6 = o), a != null)) {
              this.$6 == null && (this.$6 = []);
              for (var i = 0; i < a.length; i++) this.$6.push(P(a[i]));
            }
            return e;
          }),
          (t.$30 = function (t) {
            var e,
              r = n("relay-runtime/util/RelayFeatureFlags")
                .ENABLE_CATCH_IGNORE_HANDLED_FIELD_ERRORS
                ? (e = this.$6) == null
                  ? void 0
                  : e.filter(function (e) {
                      return !e.handled;
                    })
                : this.$6;
            if (r == null || r.length === 0) return { ok: !0, value: t };
            var o = r
              .map(function (e) {
                switch (e.kind) {
                  case "relay_field_payload.error":
                    var t = e.error,
                      n = t.message,
                      r = babelHelpers.objectWithoutPropertiesLoose(t, u);
                    return r;
                  case "missing_expected_data.throw":
                  case "missing_expected_data.log":
                    return { path: e.fieldPath.split(".") };
                  case "relay_resolver.error":
                    return {
                      message:
                        "Relay: Error in resolver for field at " +
                        e.fieldPath +
                        " in " +
                        e.owner,
                    };
                  case "missing_required_field.throw": {
                    var o;
                    return (
                      e.fieldValue === null
                        ? (o =
                            e.fieldError != null
                              ? "the server returned null with an error: " +
                                e.fieldError.message
                              : "the server returned null")
                        : (o =
                            "the field was missing in the store (data may not have been fetched, or was removed by a graph relationship change: https://relay.dev/docs/next/debugging/why-null/#graph-relationship-change)"),
                      {
                        message:
                          "Relay: Missing @required value at path '" +
                          e.fieldPath +
                          "' in '" +
                          e.owner +
                          "': " +
                          o +
                          ".",
                      }
                    );
                  }
                  case "missing_required_field.log":
                    return null;
                  default:
                    (e.kind, l(0, 89723, e.kind));
                }
              })
              .filter(Boolean);
            return { errors: o, ok: !1 };
          }),
          (t.$26 = function (t, n, r) {
            for (var e = 0; e < t.length; e++) {
              var o = t[e];
              switch (o.kind) {
                case "RequiredField":
                  var a = this.$31(o, n, r);
                  if (!this.$29(o, a)) return !1;
                  break;
                case "CatchField": {
                  var i,
                    s,
                    u,
                    c = this.$6;
                  this.$6 = null;
                  var d = this.$31(o, n, r),
                    m =
                      (i = (s = o.field) == null ? void 0 : s.backingField) !=
                      null
                        ? i
                        : o.field,
                    p =
                      (u = m == null ? void 0 : m.alias) != null
                        ? u
                        : m == null
                          ? void 0
                          : m.name;
                  (p != null || l(0, 79709), (r[p] = this.$22(d, o.to, c)));
                  break;
                }
                case "ScalarField":
                  this.$32(o, n, r);
                  break;
                case "LinkedField":
                  o.plural ? this.$33(o, n, r) : this.$34(o, n, r);
                  break;
                case "Condition":
                  var _ = !!this.$27(o.condition);
                  if (_ === o.passingValue) {
                    var f = this.$26(o.selections, n, r);
                    if (!f) return !1;
                  }
                  break;
                case "InlineFragment": {
                  var g = this.$35(o, n, r, !1);
                  if (g === !1) return !1;
                  break;
                }
                case "RelayLiveResolver":
                case "RelayResolver": {
                  this.$9 ? this.$32(o, n, r) : this.$36(o, n, r);
                  break;
                }
                case "FragmentSpread":
                  this.$37(o, n, r);
                  break;
                case "AliasedInlineFragmentSpread": {
                  this.$38(o, n, r);
                  break;
                }
                case "ModuleImport":
                  this.$39(o, n, r);
                  break;
                case "InlineDataFragmentSpread":
                  this.$40(o, n, r);
                  break;
                case "Defer":
                case "ClientExtension": {
                  var h,
                    y,
                    C,
                    b,
                    v = this.$2,
                    S =
                      (h = (y = this.$3) == null ? void 0 : y.length) != null
                        ? h
                        : 0,
                    R = this.$1;
                  this.$1 = null;
                  var L = this.$26(o.selections, n, r);
                  if (
                    ((this.$2 =
                      v ||
                      ((C = (b = this.$3) == null ? void 0 : b.length) != null
                        ? C
                        : 0) > S ||
                      (this.$4 != null && this.$4.length > 0)),
                    (this.$1 = R),
                    !L)
                  )
                    return !1;
                  break;
                }
                case "Stream": {
                  var E = this.$26(o.selections, n, r);
                  if (!E) return !1;
                  break;
                }
                case "ActorChange":
                  this.$41(o, n, r);
                  break;
                case "ClientEdgeToClientObject":
                case "ClientEdgeToServerObject":
                  if (
                    this.$9 &&
                    (o.backingField.kind === "RelayResolver" ||
                      o.backingField.kind === "RelayLiveResolver")
                  ) {
                    var k = o.linkedField;
                    k.plural ? this.$33(k, n, r) : this.$34(k, n, r);
                  } else this.$42(o, n, r);
                  break;
                default:
                  l(0, 1307, o.kind);
              }
            }
            return !0;
          }),
          (t.$31 = function (t, n, r) {
            switch (t.field.kind) {
              case "ScalarField":
                return this.$32(t.field, n, r);
              case "LinkedField":
                return t.field.plural
                  ? this.$33(t.field, n, r)
                  : this.$34(t.field, n, r);
              case "RelayResolver":
              case "RelayLiveResolver":
                return this.$9
                  ? this.$32(t.field, n, r)
                  : this.$36(t.field, n, r);
              case "ClientEdgeToClientObject":
              case "ClientEdgeToServerObject":
                if (
                  this.$9 &&
                  (t.field.backingField.kind === "RelayResolver" ||
                    t.field.backingField.kind === "RelayLiveResolver")
                ) {
                  var e = t.field;
                  return e.linkedField.plural
                    ? this.$33(e.linkedField, n, r)
                    : this.$34(e.linkedField, n, r);
                } else return this.$42(t.field, n, r);
              case "AliasedInlineFragmentSpread":
                return this.$38(t.field, n, r);
              default:
                (t.field.kind, l(0, 1307, t.field.kind));
            }
          }),
          (t.$36 = function (t, r, o) {
            var e,
              a = (
                c || (c = n("relay-runtime/store/RelayModernRecord"))
              ).getDataID(r),
              i = this.$6;
            this.$6 = null;
            var l = this.$43(t, a),
              s = (e = t.alias) != null ? e : t.name;
            return (this.$44(i, s), (o[s] = l), l);
          }),
          (t.$43 = function (t, n) {
            var e = this,
              r = t.fragment,
              o,
              a = function (n) {
                return o != null
                  ? {
                      data: o.data,
                      fieldErrors: o.fieldErrors,
                      isMissingData: o.isMissingData,
                    }
                  : ((o = G(e.$10, n, null, e.$15, void 0)),
                    {
                      data: o.data,
                      fieldErrors: o.fieldErrors,
                      isMissingData: o.isMissingData,
                    });
              },
              i = function () {
                if (r != null) {
                  var i,
                    l = {
                      __fragmentOwner: e.$8,
                      __fragments:
                        ((i = {}),
                        (i[r.name] = r.args ? S(r.args, e.$14) : {}),
                        i),
                      __id: n,
                    };
                  e.$1 !== null && (l[b] = e.$1);
                  var s = { getDataForResolverFragment: a };
                  return T(s, function () {
                    var n = N(t, e.$14, l, e.$17),
                      r = n[0],
                      a = n[1];
                    return { error: a, resolverResult: r, snapshot: o };
                  });
                } else {
                  var u = N(t, e.$14, null, e.$17),
                    c = u[0],
                    d = u[1];
                  return { error: d, resolverResult: c, snapshot: void 0 };
                }
              },
              l = this.$15.readFromCacheOrEvaluate(n, t, this.$14, i, a),
              s = l[0],
              u = l[1],
              c = l[2],
              d = l[3],
              m = l[4],
              p = l[5];
            return (this.$45(t.path, d, c, u, m, p), s);
          }),
          (t.$45 = function (t, n, r, o, a, i) {
            if (n != null) {
              if (n.missingClientEdges != null)
                for (var e = 0; e < n.missingClientEdges.length; e++) {
                  var l = n.missingClientEdges[e];
                  this.$25(l);
                }
              var s = n.missingLiveResolverFields;
              if (s != null && s.length > 0) {
                this.$2 = !0;
                for (var u = 0; u < s.length; u++) this.$46(s[u]);
              }
              if (n.fieldErrors != null) {
                this.$6 == null && (this.$6 = []);
                for (var c = 0; c < n.fieldErrors.length; c++) {
                  var d,
                    m = n.fieldErrors[c];
                  ((d = this.$13.node.metadata) == null
                    ? void 0
                    : d.throwOnFieldError) === !0
                    ? this.$6.push(m)
                    : this.$6.push(P(m));
                }
              }
              this.$2 = this.$2 || n.isMissingData;
            }
            if (r) {
              var p,
                _,
                f = {
                  error: r,
                  fieldPath: t,
                  handled: !1,
                  kind: "relay_resolver.error",
                  owner: this.$16,
                  shouldThrow:
                    (p =
                      (_ = this.$13.node.metadata) == null
                        ? void 0
                        : _.throwOnFieldError) != null
                      ? p
                      : !1,
                  uiContext: void 0,
                };
              this.$6 == null ? (this.$6 = [f]) : this.$6.push(f);
            }
            if (
              (o != null && this.$11.add(o),
              a != null && ((this.$2 = !0), this.$46(a)),
              i != null)
            ) {
              var g = this.$12;
              g == null && ((g = new Set()), (this.$12 = g));
              var h = g;
              i.forEach(function (e) {
                h.add(e);
              });
            }
          }),
          (t.$46 = function (t) {
            this.$4 == null ? (this.$4 = [t]) : this.$4.push(t);
          }),
          (t.$25 = function (t) {
            this.$3 == null ? (this.$3 = [t]) : this.$3.push(t);
          }),
          (t.$42 = function (t, r, o) {
            var e,
              a = this,
              i = t.backingField;
            i.kind !== "ClientExtension" || l(0, 56148);
            var s = (e = i.alias) != null ? e : i.name,
              u = {};
            this.$26([i], r, u);
            var d = u[s];
            if (d == null || m(d)) return ((o[s] = d), d);
            if (t.linkedField.plural) {
              (Array.isArray(d) || l(0, 86538, i.path, this.$8.identifier),
                t.kind === "ClientEdgeToClientObject" || l(0, 86537, t.kind));
              var p, _;
              if (t.backingField.normalizationInfo == null) {
                ((p = []), (_ = []));
                for (var f = 0; f < d.length; f++) {
                  var g,
                    h = d[f];
                  if (h == null) {
                    (p.push(null), _.push(null));
                    continue;
                  }
                  var y = (g = t.concreteType) != null ? g : h.__typename;
                  typeof y == "string" ||
                    l(0, 86536, i.path, this.$8.identifier);
                  var C = M(h, i.path, this.$8.identifier),
                    b = t.modelResolvers;
                  if (b != null) {
                    var v = b[y];
                    if (v !== void 0) {
                      var S = this.$15.ensureClientRecord(C, y),
                        R = this.$43(v, S);
                      (p.push(R != null ? S : null), _.push(null));
                    } else {
                      var L, E;
                      p.push(C);
                      var k =
                        (L =
                          (E = t.serverObjectOperations) == null
                            ? void 0
                            : E[y]) != null
                          ? L
                          : null;
                      k != null
                        ? _.push({
                            clientEdgeDestinationID: C,
                            readerClientEdge: { operation: k },
                          })
                        : _.push(null);
                    }
                  } else
                    (p.push(this.$15.ensureClientRecord(C, y)), _.push(null));
                }
              } else
                ((p = d.map(function (e) {
                  return M(e, i.path, a.$8.identifier);
                })),
                  (_ = null));
              var I = this.$1;
              this.$1 = null;
              var T = this.$47(t.linkedField, p, r, o, _);
              return ((this.$1 = I), (o[s] = T), T);
            } else {
              var D,
                x,
                $ = (D = i.normalizationInfo) == null ? void 0 : D.kind,
                P =
                  $ === "ServerWeak" || $ === "AbstractInline"
                    ? w(d, i.path, this.$8.identifier)
                    : M(d, i.path, this.$8.identifier),
                N,
                A = (x = t.concreteType) != null ? x : d.__typename,
                F;
              if (t.kind === "ClientEdgeToClientObject")
                if (t.backingField.normalizationInfo == null) {
                  typeof A == "string" ||
                    l(0, 86536, i.path, this.$8.identifier);
                  var O = t.modelResolvers;
                  if (O != null) {
                    var B = O[A];
                    if (B !== void 0) {
                      N = this.$15.ensureClientRecord(P, A);
                      var W = this.$43(B, N);
                      if (W == null) return ((o[s] = null), null);
                      F = null;
                    } else {
                      N = P;
                      var q = t.serverObjectOperations,
                        U = q != null ? q[A] : null;
                      U != null
                        ? (F = {
                            clientEdgeDestinationID: P,
                            readerClientEdge: { operation: U },
                          })
                        : (F = null);
                    }
                  } else ((N = this.$15.ensureClientRecord(P, A)), (F = null));
                } else {
                  N = P;
                  var V = t.backingField.normalizationInfo,
                    H =
                      (V == null ? void 0 : V.kind) === "AbstractInline"
                        ? V.inlineKinds[A]
                        : V == null
                          ? void 0
                          : V.kind;
                  F = null;
                }
              else
                ((N = P),
                  (F = { clientEdgeDestinationID: P, readerClientEdge: t }));
              var G = this.$1;
              this.$1 = F;
              var z = o[s];
              z == null ||
                typeof z == "object" ||
                l(
                  0,
                  86534,
                  i.path,
                  this.$8.identifier,
                  (
                    c || (c = n("relay-runtime/store/RelayModernRecord"))
                  ).getDataID(r),
                  z,
                );
              var j = this.$6;
              this.$6 = null;
              var K = this.$21(t.linkedField, N, z);
              return (this.$44(j, s), (this.$1 = G), (o[s] = K), K);
            }
          }),
          (t.$32 = function (t, r, o) {
            var e,
              a = (e = t.alias) != null ? e : t.name,
              i =
                (t.kind === "ScalarField" &&
                  (t.args == null ? t.name : t.storageKey)) ||
                E(t, this.$14);
            this.$7 != null && this.$11.add(R(this.$7, i));
            var l = (
              c || (c = n("relay-runtime/store/RelayModernRecord"))
            ).getValue(r, i);
            return (
              l === null ||
              (n("relay-runtime/util/RelayFeatureFlags")
                .ENABLE_NONCOMPLIANT_ERROR_HANDLING_ON_LISTS &&
                Array.isArray(l) &&
                l.length === 0)
                ? this.$23(r, i)
                : l === void 0 && this.$24(a),
              (o[a] = l),
              l
            );
          }),
          (t.$34 = function (t, r, o) {
            var e,
              a = (e = t.alias) != null ? e : t.name,
              i = t.args == null ? t.name : E(t, this.$14);
            this.$7 != null && this.$11.add(R(this.$7, i));
            var s = (
              c || (c = n("relay-runtime/store/RelayModernRecord"))
            ).getLinkedRecordID(r, i);
            if (s == null)
              return (
                (o[a] = s),
                s === null ? this.$23(r, i) : s === void 0 && this.$24(a),
                s
              );
            var u = o[a];
            u == null ||
              typeof u == "object" ||
              l(
                0,
                86540,
                a,
                this.$8.identifier,
                (
                  c || (c = n("relay-runtime/store/RelayModernRecord"))
                ).getDataID(r),
                u,
              );
            var d = this.$6;
            this.$6 = null;
            var m = this.$21(t, s, u);
            return (this.$44(d, a), (o[a] = m), m);
          }),
          (t.$44 = function (t, n) {
            if (this.$6 != null) {
              for (var e = 0; e < this.$6.length; e++) {
                var r = this.$6[e];
                r.owner === this.$16 &&
                  (r.kind === "missing_expected_data.throw" ||
                    r.kind === "missing_expected_data.log" ||
                    r.kind === "missing_required_field.throw" ||
                    r.kind === "missing_required_field.log") &&
                  (r.fieldPath = n + "." + r.fieldPath);
              }
              if (t != null) {
                for (var o = this.$6.length - 1; o >= 0; o--)
                  t.push(this.$6[o]);
                this.$6 = t;
              }
            } else this.$6 = t;
          }),
          (t.$41 = function (t, r, o) {
            var e,
              a = (e = t.alias) != null ? e : t.name,
              i = E(t, this.$14),
              l = (
                c || (c = n("relay-runtime/store/RelayModernRecord"))
              ).getActorLinkedRecordID(r, i);
            if (l == null)
              return (
                (o[a] = l),
                l === void 0 ? this.$24(a) : l === null && this.$23(r, i),
                o[a]
              );
            var s = l[0],
              u = l[1],
              d = {};
            return (
              this.$37(t.fragmentSpread, c.fromObject({ __id: u }), d),
              (o[a] = { __fragmentRef: d, __viewer: s }),
              o[a]
            );
          }),
          (t.$33 = function (t, r, o) {
            var e = t.args == null ? t.name : E(t, this.$14);
            this.$7 != null && this.$11.add(R(this.$7, e));
            var a = (
              c || (c = n("relay-runtime/store/RelayModernRecord"))
            ).getLinkedRecordIDs(r, e);
            return (
              (a === null ||
                (n("relay-runtime/util/RelayFeatureFlags")
                  .ENABLE_NONCOMPLIANT_ERROR_HANDLING_ON_LISTS &&
                  Array.isArray(a) &&
                  a.length === 0)) &&
                this.$23(r, e),
              this.$47(t, a, r, o)
            );
          }),
          (t.$47 = function (t, r, o, a, i) {
            var e,
              s = this,
              u = (e = t.alias) != null ? e : t.name;
            if (r == null) return ((a[u] = r), r === void 0 && this.$24(u), r);
            var d = a[u];
            d == null ||
              Array.isArray(d) ||
              l(
                0,
                1309,
                u,
                (
                  c || (c = n("relay-runtime/store/RelayModernRecord"))
                ).getDataID(o),
                d,
              );
            var m = this.$6;
            this.$6 = null;
            var p = d || [];
            return (
              r.forEach(function (e, r) {
                if (e == null) {
                  (e === void 0 && s.$24(String(r)), (p[r] = e));
                  return;
                }
                var a = p[r];
                a == null ||
                  typeof a == "object" ||
                  l(
                    0,
                    1308,
                    u,
                    (
                      c || (c = n("relay-runtime/store/RelayModernRecord"))
                    ).getDataID(o),
                    a,
                  );
                var d = s.$6;
                s.$6 = null;
                var m = s.$1;
                if (i != null) {
                  var _;
                  s.$1 = (_ = i[r]) != null ? _ : null;
                }
                ((p[r] = s.$21(t, e, a)), (s.$1 = m), s.$44(d, r));
              }),
              this.$44(m, u),
              (a[u] = p),
              p
            );
          }),
          (t.$39 = function (t, r, o) {
            var e = L(t.documentName),
              a = (
                c || (c = n("relay-runtime/store/RelayModernRecord"))
              ).getValue(r, e),
              i = a !== void 0 ? a : t.componentModuleProvider;
            if (i == null) {
              i === void 0 && this.$24("<module-import>");
              return;
            }
            (this.$37(
              { args: t.args, kind: "FragmentSpread", name: t.fragmentName },
              r,
              o,
            ),
              (o[g] = t.fragmentPropName),
              (o[C] = i));
          }),
          (t.$38 = function (t, n, r) {
            var e = this.$6;
            this.$6 = null;
            var o = this.$35(t.fragment, n, {}, !0);
            return (
              this.$44(e, t.name),
              o === !1 && (o = null),
              (r[t.name] = o),
              o
            );
          }),
          (t.$35 = function (t, n, r, o) {
            if (t.type == null) {
              var e = this.$26(t.selections, n, r);
              return e === !1 ? !1 : r;
            }
            var a = t.abstractKey;
            if (a == null)
              if (this.$19(n, t.type)) {
                var i = this.$26(t.selections, n, r);
                if (!i) return !1;
              } else return null;
            else {
              var l = this.$20(n, a);
              if (l === !1 && o) return null;
              var s = this.$2,
                u = this.$5;
              this.$5 = u || l === !1;
              var c = this.$26(t.selections, n, r);
              if (((this.$5 = u), l === !1)) return ((this.$2 = s), null);
              if (l == null) return;
              if (c === !1) return !1;
            }
            return r;
          }),
          (t.$19 = function (t, r) {
            var e = (
              c || (c = n("relay-runtime/store/RelayModernRecord"))
            ).getType(t);
            return (
              (e != null && e === r) ||
              (c || (c = n("relay-runtime/store/RelayModernRecord"))).getDataID(
                t,
              ) === v
            );
          }),
          (t.$37 = function (t, r, o) {
            var e = o[h];
            (e == null && (e = o[h] = {}),
              (typeof e == "object" && e != null) || l(0, 1310, e),
              o[y] == null &&
                (o[y] = (
                  c || (c = n("relay-runtime/store/RelayModernRecord"))
                ).getDataID(r)));
            var a =
              t.args == null ? (this.$5 ? F : A) : S(t.args, this.$14, this.$5);
            if (
              ((e[t.name] = a),
              (o[_] = this.$8),
              this.$1 !== null && (o[b] = this.$1),
              n("relay-runtime/util/RelayFeatureFlags")
                .ENABLE_READER_FRAGMENTS_LOGGING)
            ) {
              var i;
              (i = this.$18) == null ||
                i.call(this, {
                  name: "reader.fragmentSpread",
                  fragmentName: t.name,
                  data: o,
                });
            }
          }),
          (t.$40 = function (t, r, o) {
            var e = o[h];
            (e == null && (e = o[h] = {}),
              (typeof e == "object" && e != null) || l(0, 1310, e),
              o[y] == null &&
                (o[y] = (
                  c || (c = n("relay-runtime/store/RelayModernRecord"))
                ).getDataID(r)));
            var a = {},
              i = this.$16;
            this.$16 = t.name;
            var s = this.$14,
              u = t.args ? S(t.args, this.$14) : {};
            ((this.$14 = n(
              "relay-runtime/store/RelayConcreteVariables",
            ).getFragmentVariables(t, this.$8.variables, u)),
              this.$26(t.selections, r, a),
              (this.$14 = s),
              (this.$16 = i),
              (e[t.name] = a));
          }),
          (t.$20 = function (t, r) {
            var e = (
                c || (c = n("relay-runtime/store/RelayModernRecord"))
              ).getType(t),
              o = this.$10.get(D(e)),
              a =
                o != null
                  ? (
                      c || (c = n("relay-runtime/store/RelayModernRecord"))
                    ).getValue(o, r)
                  : null;
            if (a == null) {
              var i;
              if (
                ((i = this.$8.node.operation.clientAbstractTypes) == null ||
                (i = i[r]) == null
                  ? void 0
                  : i.includes(e)) === !0
              )
                return !0;
              this.$24("<abstract-type-hint>");
            }
            return a;
          }),
          e
        );
      })();
    function G(e, t, n, r, o) {
      var a = new H(e, t, n, r != null ? r : new k(), o);
      return a.read();
    }
    a.exports = { read: x, readPerf: G };
  },
  null,
);
