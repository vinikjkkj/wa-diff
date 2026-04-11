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
    var e = ["message"],
      s,
      u,
      c = n(
        "relay-runtime/store/live-resolvers/LiveResolverSuspenseSentinel",
      ).isSuspenseSentinel,
      d = (u = n("relay-runtime/store/RelayStoreUtils"))
        .CLIENT_EDGE_TRAVERSAL_PATH,
      m = u.FIELD_GRANULAR_NOTIFICATIONS_KEY,
      p = u.FRAGMENT_OWNER_KEY,
      _ = u.FRAGMENT_PROP_NAME_KEY,
      f = u.FRAGMENTS_KEY,
      g = u.ID_KEY,
      h = u.MODULE_COMPONENT_KEY,
      y = u.ROOT_ID,
      C = u.getArgumentValues,
      b = u.getFieldNotificationKey,
      v = u.getModuleComponentKey,
      S = u.getStorageKey,
      R = n("relay-runtime/store/ResolverCache").NoopResolverCache,
      L = n(
        "relay-runtime/store/ResolverFragments",
      ).RESOLVER_FRAGMENT_ERRORED_SENTINEL,
      E = n("relay-runtime/store/ResolverFragments").withResolverContext,
      k = n("relay-runtime/store/TypeID").generateTypeID;
    function I(e, t, n, r, o) {
      var a = new T(e, t, n, r != null ? r : new R(), o);
      return a.read();
    }
    var T = (function () {
      function t(e, t, n, r, o) {
        var a, i, l, s;
        ((this.$1 =
          (a = t.clientEdgeTraversalPath) != null && a.length
            ? [].concat(t.clientEdgeTraversalPath)
            : []),
          (this.$3 = []),
          (this.$4 = []),
          (this.$2 = !1),
          (this.$5 = !1),
          (this.$6 = null),
          (this.$7 = null),
          (this.$8 = t.owner),
          (this.$9 =
            (i =
              (l = this.$8.node.operation.use_exec_time_resolvers) != null
                ? l
                : ((s =
                    this.$8.node.operation
                      .exec_time_resolvers_enabled_provider) == null
                    ? void 0
                    : s.get()) === !0) != null
              ? i
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
      var r = t.prototype;
      return (
        (r.read = function () {
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
        (r.$23 = function (t, r) {
          var e = (
            s || (s = n("relay-runtime/store/RelayModernRecord"))
          ).getErrors(t, r);
          if (e != null) {
            var o = this.$16;
            this.$6 == null && (this.$6 = []);
            for (var a = 0; a < e.length; a++) {
              var i,
                l,
                u,
                c = e[a];
              this.$6.push({
                error: c,
                fieldPath: ((i = c.path) != null ? i : []).join("."),
                handled: !1,
                kind: "relay_field_payload.error",
                owner: o,
                shouldThrow:
                  (l =
                    (u = this.$13.node.metadata) == null
                      ? void 0
                      : u.throwOnFieldError) != null
                    ? l
                    : !1,
                uiContext: void 0,
              });
            }
          }
        }),
        (r.$24 = function (t) {
          var e, n;
          if (!this.$5) {
            this.$6 == null && (this.$6 = []);
            var r = this.$16;
            if (
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
              this.$1.length)
            ) {
              var o = this.$1[this.$1.length - 1];
              o !== null &&
                this.$3.push({
                  clientEdgeDestinationID: o.clientEdgeDestinationID,
                  request: o.readerClientEdge.operation,
                });
            }
          }
        }),
        (r.$21 = function (t, r, o) {
          var e = this.$10.get(r),
            a = this.$7;
          if (
            (e != null &&
            (s || (s = n("relay-runtime/store/RelayModernRecord"))).getValue(
              e,
              m,
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
        (r.$26 = function (t) {
          return (
            Object.prototype.hasOwnProperty.call(this.$14, t) || l(0, 1306, t),
            this.$14[t]
          );
        }),
        (r.$27 = function (t) {
          if (t.action !== "NONE") {
            var e = this.$16;
            this.$6 == null && (this.$6 = []);
            var n;
            if (t.field.linkedField != null) {
              var r;
              n =
                (r = t.field.linkedField.alias) != null
                  ? r
                  : t.field.linkedField.name;
            } else {
              var o;
              n = (o = t.field.alias) != null ? o : t.field.name;
            }
            switch (t.action) {
              case "THROW":
                this.$6.push({
                  fieldPath: n,
                  handled: !1,
                  kind: "missing_required_field.throw",
                  owner: e,
                  uiContext: void 0,
                });
                return;
              case "LOG":
                this.$6.push({
                  fieldPath: n,
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
        (r.$28 = function (t, n) {
          return n == null ? (this.$27(t), !1) : !0;
        }),
        (r.$22 = function (t, n, r) {
          var e = t;
          switch (n) {
            case "RESULT":
              e = this.$29(t);
              break;
            case "NULL":
              this.$6 != null && this.$6.length > 0 && (e = null);
              break;
            default:
          }
          var o = this.$6;
          if (((this.$6 = r), o != null)) {
            this.$6 == null && (this.$6 = []);
            for (var a = 0; a < o.length; a++) this.$6.push(D(o[a]));
          }
          return e;
        }),
        (r.$29 = function (n) {
          if (this.$6 == null || this.$6.length === 0)
            return { ok: !0, value: n };
          var t = this.$6
            .map(function (t) {
              switch (t.kind) {
                case "relay_field_payload.error":
                  var n = t.error,
                    r = n.message,
                    o = babelHelpers.objectWithoutPropertiesLoose(n, e);
                  return o;
                case "missing_expected_data.throw":
                case "missing_expected_data.log":
                  return { path: t.fieldPath.split(".") };
                case "relay_resolver.error":
                  return {
                    message:
                      "Relay: Error in resolver for field at " +
                      t.fieldPath +
                      " in " +
                      t.owner,
                  };
                case "missing_required_field.throw":
                  return {
                    message:
                      "Relay: Missing @required value at path '" +
                      t.fieldPath +
                      "' in '" +
                      t.owner +
                      "'.",
                  };
                case "missing_required_field.log":
                  return null;
                default:
                  (t.kind, l(0, 89723, t.kind));
              }
            })
            .filter(Boolean);
          return { errors: t, ok: !1 };
        }),
        (r.$25 = function (t, n, r) {
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
                  y = this.$3.length;
                this.$1.push(null);
                var C = this.$25(o.selections, n, r);
                if (
                  ((this.$2 = h || this.$3.length > y || this.$4.length > 0),
                  this.$1.pop(),
                  !C)
                )
                  return !1;
                break;
              }
              case "Stream": {
                var b = this.$25(o.selections, n, r);
                if (!b) return !1;
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
                  var v = o.linkedField;
                  v.plural ? this.$32(v, n, r) : this.$33(v, n, r);
                } else this.$41(o, n, r);
                break;
              default:
                l(0, 1307, o.kind);
            }
          }
          return !0;
        }),
        (r.$30 = function (t, n, r) {
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
        (r.$35 = function (t, r, o) {
          var e,
            a = (
              s || (s = n("relay-runtime/store/RelayModernRecord"))
            ).getDataID(r),
            i = this.$6;
          this.$6 = null;
          var l = this.$42(t, a),
            u = (e = t.alias) != null ? e : t.name;
          return (this.$43(i, u), (o[u] = l), l);
        }),
        (r.$42 = function (t, n) {
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
                : ((o = I(e.$10, n, null, e.$15, void 0)),
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
                      (i[r.name] = r.args ? C(r.args, e.$14) : {}),
                      i),
                    __id: n,
                  };
                e.$1.length > 0 &&
                  e.$1[e.$1.length - 1] !== null &&
                  (l[d] = [].concat(e.$1));
                var s = { getDataForResolverFragment: a };
                return E(s, function () {
                  var n = x(t, e.$14, l, e.$17),
                    r = n[0],
                    a = n[1];
                  return { error: a, resolverResult: r, snapshot: o };
                });
              } else {
                var u = x(t, e.$14, null, e.$17),
                  c = u[0],
                  m = u[1];
                return { error: m, resolverResult: c, snapshot: void 0 };
              }
            },
            l = this.$15.readFromCacheOrEvaluate(n, t, this.$14, i, a),
            s = l[0],
            u = l[1],
            c = l[2],
            m = l[3],
            p = l[4],
            _ = l[5];
          return (this.$44(t.path, m, c, u, p, _), s);
        }),
        (r.$44 = function (t, n, r, o, a, i) {
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
                  : this.$6.push(D(p));
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
        (r.$41 = function (t, r, o) {
          var e,
            a = this,
            i = t.backingField;
          i.kind !== "ClientExtension" || l(0, 56148);
          var u = (e = i.alias) != null ? e : i.name,
            d = {};
          this.$25([i], r, d);
          var m = d[u];
          if (m == null || c(m)) return ((o[u] = m), m);
          if (t.linkedField.plural) {
            Array.isArray(m) || l(0, 86538, i.path, this.$8.identifier);
            var p;
            (t.kind === "ClientEdgeToClientObject" || l(0, 86537, t.kind),
              t.backingField.normalizationInfo == null
                ? (p = m.map(function (e) {
                    var n,
                      r = (n = t.concreteType) != null ? n : e.__typename;
                    typeof r == "string" ||
                      l(0, 86536, i.path, a.$8.identifier);
                    var o = $(e, i.path, a.$8.identifier),
                      s = a.$15.ensureClientRecord(o, r),
                      u = t.modelResolvers;
                    if (u != null) {
                      var c = u[r];
                      c !== void 0 ||
                        l(
                          0,
                          86535,
                          i.path,
                          a.$8.identifier,
                          Object.keys(u).join(", "),
                          r,
                        );
                      var d = a.$42(c, s);
                      return d != null ? s : null;
                    }
                    return s;
                  }))
                : (p = m.map(function (e) {
                    return $(e, i.path, a.$8.identifier);
                  })),
              this.$1.push(null));
            var _ = this.$45(t.linkedField, p, r, o);
            return (this.$1.pop(), (o[u] = _), _);
          } else {
            var f,
              g = $(m, i.path, this.$8.identifier),
              h,
              y = (f = t.concreteType) != null ? f : m.__typename,
              C;
            t.kind === "ClientEdgeToClientObject"
              ? t.backingField.normalizationInfo == null
                ? (typeof y == "string" ||
                    l(0, 86536, i.path, this.$8.identifier),
                  (h = this.$15.ensureClientRecord(g, y)),
                  (C = null))
                : ((h = g), (C = null))
              : ((h = g),
                (C = { clientEdgeDestinationID: g, readerClientEdge: t }));
            var b = t.modelResolvers;
            if (b != null) {
              typeof y == "string" || l(0, 86536, i.path, this.$8.identifier);
              var v = b[y];
              v !== void 0 ||
                l(
                  0,
                  86535,
                  i.path,
                  this.$8.identifier,
                  Object.keys(b).join(", "),
                  y,
                );
              var S = this.$42(v, h);
              if (S == null) return ((o[u] = null), null);
            }
            this.$1.push(C);
            var R = o[u];
            R == null ||
              typeof R == "object" ||
              l(
                0,
                86534,
                i.path,
                this.$8.identifier,
                (
                  s || (s = n("relay-runtime/store/RelayModernRecord"))
                ).getDataID(r),
                R,
              );
            var L = this.$6;
            this.$6 = null;
            var E = this.$21(t.linkedField, h, R);
            return (this.$43(L, u), this.$1.pop(), (o[u] = E), E);
          }
        }),
        (r.$31 = function (t, r, o) {
          var e,
            a = (e = t.alias) != null ? e : t.name,
            i = S(t, this.$14);
          this.$7 != null && this.$11.add(b(this.$7, i));
          var l = (
            s || (s = n("relay-runtime/store/RelayModernRecord"))
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
        (r.$33 = function (t, r, o) {
          var e,
            a = (e = t.alias) != null ? e : t.name,
            i = S(t, this.$14);
          this.$7 != null && this.$11.add(b(this.$7, i));
          var u = (
            s || (s = n("relay-runtime/store/RelayModernRecord"))
          ).getLinkedRecordID(r, i);
          if (u == null)
            return (
              (o[a] = u),
              u === null ? this.$23(r, i) : u === void 0 && this.$24(a),
              u
            );
          var c = o[a];
          c == null ||
            typeof c == "object" ||
            l(
              0,
              86540,
              a,
              this.$8.identifier,
              (s || (s = n("relay-runtime/store/RelayModernRecord"))).getDataID(
                r,
              ),
              c,
            );
          var d = this.$6;
          this.$6 = null;
          var m = this.$21(t, u, c);
          return (this.$43(d, a), (o[a] = m), m);
        }),
        (r.$43 = function (t, n) {
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
        (r.$40 = function (t, r, o) {
          var e,
            a = (e = t.alias) != null ? e : t.name,
            i = S(t, this.$14),
            l = (
              s || (s = n("relay-runtime/store/RelayModernRecord"))
            ).getActorLinkedRecordID(r, i);
          if (l == null)
            return (
              (o[a] = l),
              l === void 0 ? this.$24(a) : l === null && this.$23(r, i),
              o[a]
            );
          var u = l[0],
            c = l[1],
            d = {};
          return (
            this.$36(t.fragmentSpread, s.fromObject({ __id: c }), d),
            (o[a] = { __fragmentRef: d, __viewer: u }),
            o[a]
          );
        }),
        (r.$32 = function (t, r, o) {
          var e = S(t, this.$14);
          this.$7 != null && this.$11.add(b(this.$7, e));
          var a = (
            s || (s = n("relay-runtime/store/RelayModernRecord"))
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
        (r.$45 = function (t, r, o, a) {
          var e,
            i = this,
            u = (e = t.alias) != null ? e : t.name;
          if (r == null) return ((a[u] = r), r === void 0 && this.$24(u), r);
          var c = a[u];
          c == null ||
            Array.isArray(c) ||
            l(
              0,
              1309,
              u,
              (s || (s = n("relay-runtime/store/RelayModernRecord"))).getDataID(
                o,
              ),
              c,
            );
          var d = this.$6;
          this.$6 = null;
          var m = c || [];
          return (
            r.forEach(function (e, r) {
              if (e == null) {
                (e === void 0 && i.$24(String(r)), (m[r] = e));
                return;
              }
              var a = m[r];
              a == null ||
                typeof a == "object" ||
                l(
                  0,
                  1308,
                  u,
                  (
                    s || (s = n("relay-runtime/store/RelayModernRecord"))
                  ).getDataID(o),
                  a,
                );
              var c = i.$6;
              ((i.$6 = null), (m[r] = i.$21(t, e, a)), i.$43(c, r));
            }),
            this.$43(d, u),
            (a[u] = m),
            m
          );
        }),
        (r.$38 = function (t, r, o) {
          var e = v(t.documentName),
            a = (
              s || (s = n("relay-runtime/store/RelayModernRecord"))
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
            (o[_] = t.fragmentPropName),
            (o[h] = i));
        }),
        (r.$37 = function (t, n, r) {
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
        (r.$34 = function (t, n, r, o) {
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
        (r.$19 = function (t, r) {
          var e = (
            s || (s = n("relay-runtime/store/RelayModernRecord"))
          ).getType(t);
          return (
            (e != null && e === r) ||
            (s || (s = n("relay-runtime/store/RelayModernRecord"))).getDataID(
              t,
            ) === y
          );
        }),
        (r.$36 = function (t, r, o) {
          var e = o[f];
          (e == null && (e = o[f] = {}),
            (typeof e == "object" && e != null) || l(0, 1310, e),
            o[g] == null &&
              (o[g] = (
                s || (s = n("relay-runtime/store/RelayModernRecord"))
              ).getDataID(r)));
          var a = C(t.args, this.$14, this.$5);
          if (
            ((e[t.name] = a),
            (o[p] = this.$8),
            this.$1.length > 0 &&
              this.$1[this.$1.length - 1] !== null &&
              (o[d] = [].concat(this.$1)),
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
        (r.$39 = function (t, r, o) {
          var e = o[f];
          (e == null && (e = o[f] = {}),
            (typeof e == "object" && e != null) || l(0, 1310, e),
            o[g] == null &&
              (o[g] = (
                s || (s = n("relay-runtime/store/RelayModernRecord"))
              ).getDataID(r)));
          var a = {},
            i = this.$16;
          this.$16 = t.name;
          var u = this.$14,
            c = t.args ? C(t.args, this.$14) : {};
          ((this.$14 = n(
            "relay-runtime/store/RelayConcreteVariables",
          ).getFragmentVariables(t, this.$8.variables, c)),
            this.$25(t.selections, r, a),
            (this.$14 = u),
            (this.$16 = i),
            (e[t.name] = a));
        }),
        (r.$20 = function (t, r) {
          var e = (
              s || (s = n("relay-runtime/store/RelayModernRecord"))
            ).getType(t),
            o = this.$10.get(k(e)),
            a =
              o != null
                ? (
                    s || (s = n("relay-runtime/store/RelayModernRecord"))
                  ).getValue(o, r)
                : null;
          return (a == null && this.$24("<abstract-type-hint>"), a);
        }),
        t
      );
    })();
    function D(e) {
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
    function x(e, t, n, r) {
      var o =
          typeof e.resolverModule == "function"
            ? e.resolverModule
            : e.resolverModule.default,
        a = null,
        i = null;
      try {
        var l = [];
        e.fragment != null && l.push(n);
        var s = e.args ? C(e.args, t) : void 0;
        (l.push(s), l.push(r), (a = o.apply(null, l)));
      } catch (e) {
        ((a = null), e !== L && (i = e));
      }
      return [a, i];
    }
    function $(e, t, n) {
      if (typeof e == "string") return e;
      if (typeof e == "object" && e != null && typeof e.id == "string")
        return e.id;
      l(0, 86539, t, n);
    }
    a.exports = { read: I };
  },
  null,
);
