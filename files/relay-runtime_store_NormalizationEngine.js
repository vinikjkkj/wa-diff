__d(
  "relay-runtime/store/NormalizationEngine",
  [
    "relay-runtime/store/ClientID",
    "relay-runtime/store/RelayConcreteVariables",
    "relay-runtime/store/RelayModernRecord",
    "relay-runtime/store/RelayModernSelector",
    "relay-runtime/store/RelayStoreUtils",
    "relay-runtime/store/defaultGetDataID",
    "relay-runtime/util/stableCopy",
  ],
  function (t, n, r, o, a, i) {
    "use strict";
    var e,
      l,
      s = (e || (e = n("relay-runtime/util/stableCopy"))).stableCopy,
      u = n("relay-runtime/store/ClientID").generateClientID,
      c = n("relay-runtime/store/RelayConcreteVariables").getLocalVariables,
      d = n(
        "relay-runtime/store/RelayModernSelector",
      ).createNormalizationSelector,
      m = n("relay-runtime/store/RelayStoreUtils").ROOT_ID,
      p = n("relay-runtime/store/RelayStoreUtils").ROOT_TYPE,
      _ = n("relay-runtime/store/RelayStoreUtils").getStorageKey;
    function f(e) {
      var t = new Error(e);
      return (t.stack, t);
    }
    function g(e) {
      var t;
      return (t = JSON.stringify(s(e))) != null ? t : "";
    }
    var h = (function () {
      function e(e) {
        var t, r, o, a, i, l;
        ((this.$1 = e.normalizeResponse),
          (this.$2 = (t = e.operationLoader) != null ? t : null),
          (this.$4 = { dataID: m, node: e.operation, variables: e.variables }),
          (this.$3 = {
            deferDeduplicatedFields: !1,
            getDataID:
              (r = e.getDataID) != null
                ? r
                : n("relay-runtime/store/defaultGetDataID"),
            log: null,
            path: [],
            treatMissingFieldsAsNull:
              (o = e.treatMissingFieldsAsNull) != null ? o : !1,
          }),
          (this.$5 =
            (a =
              (i = e.operation.use_exec_time_resolvers) != null
                ? i
                : ((l = e.operation.exec_time_resolvers_enabled_provider) ==
                  null
                    ? void 0
                    : l.get()) === !0) != null
              ? a
              : !1),
          (this.$6 = new Map()),
          (this.$7 = new Map()),
          (this.$8 = new Map()),
          (this.$9 = !1));
      }
      var t = e.prototype;
      return (
        (t.processResponse = function (t) {
          var e = this.$1(t, this.$4, p, this.$3, this.$5),
            n = [],
            r = [],
            o = [];
          (e.incrementalPlaceholders != null &&
            e.incrementalPlaceholders.length > 0 &&
            this.$10(
              e.incrementalPlaceholders,
              e.source,
              e.fieldPayloads,
              n,
              r,
              o,
            ),
            e.followupPayloads != null &&
              e.followupPayloads.length > 0 &&
              this.$11(e.followupPayloads, null, e.isFinal, n, r, o));
          var a = babelHelpers.extends({}, e, {
            followupPayloads: null,
            incrementalPlaceholders: null,
            isFinal: this.$12(e.isFinal),
            isPreNormalized: !0,
          });
          return {
            payloads: [a].concat(n),
            payloadOrigins: [null].concat(r),
            pendingModules: o,
          };
        }),
        (t.processIncrementalResponse = function (t) {
          var e = t.label,
            n = t.path;
          if (e == null || n == null)
            throw f(
              "NormalizationEngine: Expected incremental response to have `label` and `path` properties.",
            );
          var r = e.indexOf("$defer$") !== -1,
            o = r
              ? n.map(String).join(".")
              : n.slice(0, -2).map(String).join("."),
            a = y(e, o),
            i = this.$6.get(a);
          if (i == null) {
            var l = this.$7.get(a);
            return (
              l == null && ((l = []), this.$7.set(a, l)),
              l.push(t),
              null
            );
          }
          return i.kind === "defer" ? this.$13(t, n, i) : this.$14(t, n, i);
        }),
        (t.setServerComplete = function () {
          this.$9 = !0;
        }),
        (t.isFinal = function () {
          return this.$9 && this.$7.size === 0 && this.$6.size === 0;
        }),
        (t.$13 = function (t, n, r) {
          var e = this.$1(
              t,
              r.selector,
              r.typeName,
              babelHelpers.extends({}, this.$3, {
                deferDeduplicatedFields: !0,
                path: r.path,
              }),
              this.$5,
            ),
            o = [],
            a = [],
            i = [];
          (e.incrementalPlaceholders != null &&
            e.incrementalPlaceholders.length > 0 &&
            this.$10(
              e.incrementalPlaceholders,
              e.source,
              e.fieldPayloads,
              o,
              a,
              i,
            ),
            e.followupPayloads != null &&
              e.followupPayloads.length > 0 &&
              this.$11(e.followupPayloads, r, e.isFinal, o, a, i));
          var l = r.selector.dataID,
            s = this.$8.get(l),
            u = e.fieldPayloads;
          s != null &&
            s.fieldPayloads.length > 0 &&
            (u = (u != null ? u : []).concat(s.fieldPayloads));
          var c = babelHelpers.extends({}, e, {
            fieldPayloads: u,
            followupPayloads: null,
            incrementalPlaceholders: null,
            isFinal: this.$12(e.isFinal),
            isPreNormalized: !0,
          });
          return {
            payloads: [c].concat(o),
            payloadOrigins: [r].concat(a),
            pendingModules: i,
          };
        }),
        (t.$14 = function (t, n, r) {
          var e = r.node,
            o = r.parentID,
            a = r.variables,
            i = e.selections[0];
          if (i == null || i.kind !== "LinkedField" || i.plural !== !0)
            throw f(
              "NormalizationEngine: Expected @stream to be used on a plural field.",
            );
          var l = this.$15(t, o, i, a, n, r.path),
            s = l.fieldPayloads,
            u = l.itemID,
            c = l.itemIndex,
            d = l.prevIDs,
            m = l.relayPayload,
            p = l.storageKey,
            _ = function (t) {
              var e = t.get(o);
              if (e != null) {
                var n = e.getLinkedRecords(p);
                if (
                  n != null &&
                  !(
                    n.length !== d.length ||
                    n.some(function (e, t) {
                      return d[t] !== (e && e.getDataID());
                    })
                  )
                ) {
                  var r = [].concat(n);
                  ((r[c] = t.get(u)), e.setLinkedRecords(r, p));
                }
              }
            },
            g = m.fieldPayloads;
          return (
            s.length > 0 && (g = (g != null ? g : []).concat(s)),
            {
              payloads: [
                babelHelpers.extends({}, m, {
                  fieldPayloads: g,
                  followupPayloads: null,
                  incrementalPlaceholders: null,
                  isFinal: this.$12(m.isFinal),
                  isPreNormalized: !0,
                  storeUpdater: _,
                }),
              ],
              payloadOrigins: [null],
              pendingModules: [],
            }
          );
        }),
        (t.$15 = function (t, r, o, a, i, s) {
          var e,
            c,
            m,
            p,
            g = t.data;
          if (typeof g != "object")
            throw f(
              "NormalizationEngine: Expected the GraphQL @stream payload `data` value to be an object.",
            );
          var h = (e = o.alias) != null ? e : o.name,
            y = _(o, a),
            C = this.$8.get(r);
          if (C == null)
            throw f(
              "NormalizationEngine: Expected the parent record `" +
                r +
                "` for @stream data to exist.",
            );
          var b = C.fieldPayloads,
            v = C.record,
            S = (
              l || (l = n("relay-runtime/store/RelayModernRecord"))
            ).getLinkedRecordIDs(v, y);
          if (S == null)
            throw f(
              "NormalizationEngine: Expected record `" +
                r +
                "` to have fetched field `" +
                o.name +
                "` with @stream.",
            );
          var R = i[i.length - 1],
            L = parseInt(R, 10);
          if (L !== R || L < 0)
            throw f(
              "NormalizationEngine: Expected path for @stream to end in a positive integer index, got `" +
                String(R) +
                "`",
            );
          var E = (c = o.concreteType) != null ? c : g.__typename;
          if (typeof E != "string")
            throw f(
              "NormalizationEngine: Expected @stream field `" +
                o.name +
                "` to have a __typename.",
            );
          var k = this.$3.getDataID,
            I =
              (m =
                (p = typeof k == "function" ? k(g, E) : null) != null
                  ? p
                  : S == null
                    ? void 0
                    : S[L]) != null
                ? m
                : u(r, y, L);
          if (typeof I != "string")
            throw f(
              "NormalizationEngine: Expected id of elements of field `" +
                y +
                "` to be strings.",
            );
          var T = d(o, I, a),
            D = l.clone(v),
            x = [].concat(S);
          ((x[L] = I),
            l.setLinkedRecordIDs(D, y, x),
            this.$8.set(r, { fieldPayloads: b, record: D }));
          var $ = this.$1(
            t,
            T,
            E,
            babelHelpers.extends({}, this.$3, {
              path: [].concat(s, [h, String(L)]),
            }),
            this.$5,
          );
          return {
            fieldPayloads: b,
            itemID: I,
            itemIndex: L,
            prevIDs: S,
            relayPayload: $,
            storageKey: y,
          };
        }),
        (t.$10 = function (t, r, o, a, i, s) {
          for (
            var e = this,
              c = function () {
                var c = t[d],
                  m = c.label,
                  p = c.path,
                  _ = p.map(String).join("."),
                  h = y(m, _);
                e.$6.set(h, c);
                var C;
                c.kind === "stream"
                  ? (C = c.parentID)
                  : (C = c.selector.dataID);
                var b = r.get(C);
                if (b == null)
                  throw f(
                    "NormalizationEngine: Expected record `" +
                      C +
                      "` to exist.",
                  );
                var v = (o != null ? o : []).filter(function (e) {
                    var t = u(e.dataID, e.fieldKey);
                    return e.dataID === C || t === C;
                  }),
                  S = e.$8.get(C);
                if (S != null) {
                  for (
                    var R = (
                        l || (l = n("relay-runtime/store/RelayModernRecord"))
                      ).update(S.record, b),
                      L = new Map(),
                      E = 0;
                    E < S.fieldPayloads.length;
                    E++
                  ) {
                    var k = S.fieldPayloads[E];
                    L.set(g(k), k);
                  }
                  for (var I = 0; I < v.length; I++) {
                    var T = v[I];
                    L.set(g(T), T);
                  }
                  e.$8.set(C, {
                    fieldPayloads: Array.from(L.values()),
                    record: R,
                  });
                } else e.$8.set(C, { fieldPayloads: v, record: b });
                var D = e.$7.get(h);
                if (D != null) {
                  e.$7.delete(h);
                  for (var x = 0; x < D.length; x++) {
                    var $ = D[x],
                      P = void 0;
                    if (c.kind === "defer") {
                      var N;
                      P = e.$13($, (N = $.path) != null ? N : [], c);
                    } else {
                      var M;
                      P = e.$14($, (M = $.path) != null ? M : [], c);
                    }
                    P != null &&
                      (a.push.apply(a, P.payloads),
                      i.push.apply(i, P.payloadOrigins),
                      s.push.apply(s, P.pendingModules));
                  }
                }
              },
              d = 0;
            d < t.length;
            d++
          )
            c();
        }),
        (t.$11 = function (t, n, r, o, a, i) {
          for (var e = 0; e < t.length; e++) {
            var l = t[e];
            l.kind === "ModuleImportPayload" && this.$16(l, n, r, o, a, i);
          }
        }),
        (t.$16 = function (t, n, r, o, a, i) {
          var e = this,
            l = this.$2;
          if (l != null) {
            var s = l.get(t.operationReference);
            if (s != null) {
              var u = this.$17(t, s, n, r);
              (o.push.apply(o, u.payloads),
                a.push.apply(a, u.payloadOrigins),
                i.push.apply(i, u.pendingModules));
              return;
            }
            var c = { payloads: [], payloadOrigins: [], pendingModules: [] };
            i.push(
              l.load(t.operationReference).then(function (o) {
                return o != null ? e.$17(t, o, n, r) : c;
              }),
            );
          }
        }),
        (t.$17 = function (t, n, r, o) {
          var e = n.kind === "SplitOperation" ? n : n.operation,
            a =
              e.kind === "SplitOperation"
                ? c(t.variables, e.argumentDefinitions, t.args)
                : t.variables,
            i = d(e, t.dataID, a),
            l = this.$1(
              { data: t.data, extensions: o ? { is_final: !0 } : void 0 },
              i,
              t.typeName,
              babelHelpers.extends({}, this.$3, { path: t.path }),
              this.$5,
            ),
            s = [],
            u = [],
            m = [];
          (l.incrementalPlaceholders != null &&
            l.incrementalPlaceholders.length > 0 &&
            this.$10(
              l.incrementalPlaceholders,
              l.source,
              l.fieldPayloads,
              s,
              u,
              m,
            ),
            l.followupPayloads != null &&
              l.followupPayloads.length > 0 &&
              this.$11(l.followupPayloads, r, l.isFinal, s, u, m));
          var p = babelHelpers.extends({}, l, {
            followupPayloads: null,
            incrementalPlaceholders: null,
            isFinal: this.$12(l.isFinal),
            isPreNormalized: !0,
          });
          return {
            payloads: [p].concat(s),
            payloadOrigins: [r].concat(u),
            pendingModules: m,
          };
        }),
        (t.$12 = function (t) {
          return (t || this.$9) && this.$7.size === 0;
        }),
        e
      );
    })();
    function y(e, t) {
      return e + "::" + t;
    }
    a.exports = h;
  },
  null,
);
