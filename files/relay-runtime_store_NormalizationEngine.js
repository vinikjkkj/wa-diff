__d(
  "relay-runtime/store/NormalizationEngine",
  [
    "relay-runtime/store/ClientID",
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
      c = n(
        "relay-runtime/store/RelayModernSelector",
      ).createNormalizationSelector,
      d = n("relay-runtime/store/RelayStoreUtils").ROOT_ID,
      m = n("relay-runtime/store/RelayStoreUtils").ROOT_TYPE,
      p = n("relay-runtime/store/RelayStoreUtils").getStorageKey;
    function _(e) {
      var t = new Error(e);
      return (t.stack, t);
    }
    function f(e) {
      var t;
      return (t = JSON.stringify(s(e))) != null ? t : "";
    }
    var g = (function () {
      function e(e) {
        var t, r, o, a, i, l;
        ((this.$1 = e.normalizeResponse),
          (this.$2 = (t = e.operationLoader) != null ? t : null),
          (this.$4 = { dataID: d, node: e.operation, variables: e.variables }),
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
          var e = this.$1(t, this.$4, m, this.$3, this.$5),
            n = [],
            r = [];
          (e.incrementalPlaceholders != null &&
            e.incrementalPlaceholders.length > 0 &&
            this.$10(
              e.incrementalPlaceholders,
              e.source,
              e.fieldPayloads,
              n,
              r,
            ),
            e.followupPayloads != null &&
              e.followupPayloads.length > 0 &&
              this.$11(e.followupPayloads, n, r));
          var o = babelHelpers.extends({}, e, {
            followupPayloads: null,
            incrementalPlaceholders: null,
            isFinal: this.$12(e.isFinal),
            isPreNormalized: !0,
          });
          return { payloads: [o].concat(n), pendingModules: r };
        }),
        (t.processIncrementalResponse = function (t) {
          var e = t.label,
            n = t.path;
          if (e == null || n == null)
            throw _(
              "NormalizationEngine: Expected incremental response to have `label` and `path` properties.",
            );
          var r = e.indexOf("$defer$") !== -1,
            o = r
              ? n.map(String).join(".")
              : n.slice(0, -2).map(String).join("."),
            a = h(e, o),
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
            a = [];
          (e.incrementalPlaceholders != null &&
            e.incrementalPlaceholders.length > 0 &&
            this.$10(
              e.incrementalPlaceholders,
              e.source,
              e.fieldPayloads,
              o,
              a,
            ),
            e.followupPayloads != null &&
              e.followupPayloads.length > 0 &&
              this.$11(e.followupPayloads, o, a));
          var i = r.selector.dataID,
            l = this.$8.get(i),
            s = e.fieldPayloads;
          l != null &&
            l.fieldPayloads.length > 0 &&
            (s = (s != null ? s : []).concat(l.fieldPayloads));
          var u = babelHelpers.extends({}, e, {
            fieldPayloads: s,
            followupPayloads: null,
            incrementalPlaceholders: null,
            isFinal: this.$12(e.isFinal),
            isPreNormalized: !0,
          });
          return { payloads: [u].concat(o), pendingModules: a };
        }),
        (t.$14 = function (t, n, r) {
          var e = r.node,
            o = r.parentID,
            a = r.variables,
            i = e.selections[0];
          if (i == null || i.kind !== "LinkedField" || i.plural !== !0)
            throw _(
              "NormalizationEngine: Expected @stream to be used on a plural field.",
            );
          var l = this.$15(t, o, i, a, n, r.path),
            s = l.fieldPayloads,
            u = l.itemID,
            c = l.itemIndex,
            d = l.prevIDs,
            m = l.relayPayload,
            p = l.storageKey,
            f = function (t) {
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
                  storeUpdater: f,
                }),
              ],
              pendingModules: [],
            }
          );
        }),
        (t.$15 = function (t, r, o, a, i, s) {
          var e,
            d,
            m,
            f,
            g = t.data;
          if (typeof g != "object")
            throw _(
              "NormalizationEngine: Expected the GraphQL @stream payload `data` value to be an object.",
            );
          var h = (e = o.alias) != null ? e : o.name,
            y = p(o, a),
            C = this.$8.get(r);
          if (C == null)
            throw _(
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
            throw _(
              "NormalizationEngine: Expected record `" +
                r +
                "` to have fetched field `" +
                o.name +
                "` with @stream.",
            );
          var R = i[i.length - 1],
            L = parseInt(R, 10);
          if (L !== R || L < 0)
            throw _(
              "NormalizationEngine: Expected path for @stream to end in a positive integer index, got `" +
                String(R) +
                "`",
            );
          var E = (d = o.concreteType) != null ? d : g.__typename;
          if (typeof E != "string")
            throw _(
              "NormalizationEngine: Expected @stream field `" +
                o.name +
                "` to have a __typename.",
            );
          var k = this.$3.getDataID,
            I =
              (m =
                (f = typeof k == "function" ? k(g, E) : null) != null
                  ? f
                  : S == null
                    ? void 0
                    : S[L]) != null
                ? m
                : u(r, y, L);
          if (typeof I != "string")
            throw _(
              "NormalizationEngine: Expected id of elements of field `" +
                y +
                "` to be strings.",
            );
          var T = c(o, I, a),
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
        (t.$10 = function (t, r, o, a, i) {
          for (
            var e = this,
              s = function () {
                var s = t[c],
                  d = s.label,
                  m = s.path,
                  p = m.map(String).join("."),
                  g = h(d, p);
                e.$6.set(g, s);
                var y;
                s.kind === "stream"
                  ? (y = s.parentID)
                  : (y = s.selector.dataID);
                var C = r.get(y);
                if (C == null)
                  throw _(
                    "NormalizationEngine: Expected record `" +
                      y +
                      "` to exist.",
                  );
                var b = (o != null ? o : []).filter(function (e) {
                    var t = u(e.dataID, e.fieldKey);
                    return e.dataID === y || t === y;
                  }),
                  v = e.$8.get(y);
                if (v != null) {
                  for (
                    var S = (
                        l || (l = n("relay-runtime/store/RelayModernRecord"))
                      ).update(v.record, C),
                      R = new Map(),
                      L = 0;
                    L < v.fieldPayloads.length;
                    L++
                  ) {
                    var E = v.fieldPayloads[L];
                    R.set(f(E), E);
                  }
                  for (var k = 0; k < b.length; k++) {
                    var I = b[k];
                    R.set(f(I), I);
                  }
                  e.$8.set(y, {
                    fieldPayloads: Array.from(R.values()),
                    record: S,
                  });
                } else e.$8.set(y, { fieldPayloads: b, record: C });
                var T = e.$7.get(g);
                if (T != null) {
                  e.$7.delete(g);
                  for (var D = 0; D < T.length; D++) {
                    var x = T[D],
                      $ = void 0;
                    if (s.kind === "defer") {
                      var P;
                      $ = e.$13(x, (P = x.path) != null ? P : [], s);
                    } else {
                      var N;
                      $ = e.$14(x, (N = x.path) != null ? N : [], s);
                    }
                    $ != null &&
                      (a.push.apply(a, $.payloads),
                      i.push.apply(i, $.pendingModules));
                  }
                }
              },
              c = 0;
            c < t.length;
            c++
          )
            s();
        }),
        (t.$11 = function (t, n, r) {
          for (var e = 0; e < t.length; e++) {
            var o = t[e];
            o.kind === "ModuleImportPayload" && this.$16(o, n, r);
          }
        }),
        (t.$16 = function (t, n, r) {
          var e = this,
            o = this.$2;
          if (o != null) {
            var a = o.get(t.operationReference);
            if (a != null) {
              var i = this.$17(t, a);
              (n.push.apply(n, i.payloads), r.push.apply(r, i.pendingModules));
              return;
            }
            var l = { payloads: [], pendingModules: [] };
            r.push(
              o
                .load(t.operationReference)
                .then(function (n) {
                  return n != null ? e.$17(t, n) : l;
                })
                .catch(function (e) {
                  return l;
                }),
            );
          }
        }),
        (t.$17 = function (t, n) {
          var e = n.kind === "SplitOperation" ? n : n.operation,
            r = c(e, t.dataID, t.variables),
            o = this.$1(
              { data: t.data },
              r,
              t.typeName,
              babelHelpers.extends({}, this.$3, { path: t.path }),
              this.$5,
            ),
            a = [],
            i = [];
          (o.incrementalPlaceholders != null &&
            o.incrementalPlaceholders.length > 0 &&
            this.$10(
              o.incrementalPlaceholders,
              o.source,
              o.fieldPayloads,
              a,
              i,
            ),
            o.followupPayloads != null &&
              o.followupPayloads.length > 0 &&
              this.$11(o.followupPayloads, a, i));
          var l = babelHelpers.extends({}, o, {
            followupPayloads: null,
            incrementalPlaceholders: null,
            isFinal: this.$12(o.isFinal),
            isPreNormalized: !0,
          });
          return { payloads: [l].concat(a), pendingModules: i };
        }),
        (t.$12 = function (t) {
          return (t || this.$9) && this.$7.size === 0;
        }),
        e
      );
    })();
    function h(e, t) {
      return e + "::" + t;
    }
    a.exports = g;
  },
  null,
);
