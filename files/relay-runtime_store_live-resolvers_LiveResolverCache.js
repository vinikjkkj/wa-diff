__d(
  "relay-runtime/store/live-resolvers/LiveResolverCache",
  [
    "invariant",
    "Promise",
    "relay-runtime/store/ClientID",
    "relay-runtime/store/RelayModernRecord",
    "relay-runtime/store/RelayModernSelector",
    "relay-runtime/store/RelayRecordSource",
    "relay-runtime/store/RelayResponseNormalizer",
    "relay-runtime/store/RelayStoreUtils",
    "relay-runtime/store/live-resolvers/LiveResolverSuspenseSentinel",
    "relay-runtime/store/live-resolvers/getOutputTypeRecordIDs",
    "relay-runtime/store/live-resolvers/isLiveStateValue",
    "relay-runtime/util/RelayConcreteNode",
    "relay-runtime/util/RelayFeatureFlags",
    "relay-runtime/util/recycleNodesInto",
    "relay-runtime/util/shallowFreeze",
    "warning",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u,
      c = n("relay-runtime/util/RelayConcreteNode").RELAY_LIVE_RESOLVER,
      d = n("relay-runtime/store/ClientID").generateClientID,
      m = n("relay-runtime/store/ClientID").generateClientObjectClientID,
      p = n(
        "relay-runtime/store/RelayModernSelector",
      ).createNormalizationSelector,
      _ = n("relay-runtime/store/RelayResponseNormalizer").normalize,
      f = (u = n("relay-runtime/store/RelayStoreUtils"))
        .RELAY_RESOLVER_ERROR_KEY,
      g = u.RELAY_RESOLVER_INVALIDATION_KEY,
      h = u.RELAY_RESOLVER_OUTPUT_TYPE_RECORD_IDS,
      y = u.RELAY_RESOLVER_RECORD_TYPENAME,
      C = u.RELAY_RESOLVER_SNAPSHOT_KEY,
      b = u.RELAY_RESOLVER_VALUE_KEY,
      v = u.getReadTimeResolverStorageKey,
      S = u.getStorageKey,
      R = n(
        "relay-runtime/store/live-resolvers/LiveResolverSuspenseSentinel",
      ).isSuspenseSentinel,
      L = "__resolverLiveStateSubscription",
      E = "__resolverLiveStateValue",
      k = "__resolverLiveStateDirty",
      I = "__relay_model_instance";
    function T(e, t, n) {
      var r = e.get(t);
      (r || ((r = new Set()), e.set(t, r)), r.add(n));
    }
    var D = (function () {
      function t(e, t) {
        ((this.$1 = new Map()),
          (this.$2 = new Map()),
          (this.$3 = e),
          (this.$4 = t),
          (this.$5 = !1),
          (this.$6 = null));
      }
      var r = t.prototype;
      return (
        (r.readFromCacheOrEvaluate = function (r, o, a, i, s) {
          var t = this.$3(),
            u = F(t, r),
            m = v(o, a),
            p = (
              e || (e = n("relay-runtime/store/RelayModernRecord"))
            ).getLinkedRecordID(u, m),
            _ = p == null ? null : t.get(p),
            g;
          if (_ == null || this.$7(_, s)) {
            (_ != null && A(_),
              (p = p != null ? p : d(r, m)),
              (_ = (
                e || (e = n("relay-runtime/store/RelayModernRecord"))
              ).create(p, y)));
            var h = i();
            if (
              (e.setValue(_, C, h.snapshot),
              e.setValue(_, f, h.error),
              o.kind === c)
            ) {
              if (h.resolverResult != null) {
                h.error == null || l(0, 71543);
                var b = h.resolverResult;
                g = this.$8(_, p, b, o, a);
              }
            } else g = this.$9(_, h.resolverResult, o, a);
            t.set(p, _);
            var L = F(t, r),
              I = e.clone(L);
            if (
              (e.setLinkedRecordID(I, m, p), t.set(r, I), o.fragment != null)
            ) {
              var D,
                x = S(o.fragment, a),
                $ = d(r, x);
              (T(this.$1, $, p), T(this.$2, r, $));
              var P = (D = h.snapshot) == null ? void 0 : D.seenRecords;
              if (P != null) for (var N of P) T(this.$2, N, $);
            }
          } else if (
            o.kind === c &&
            (e || (e = n("relay-runtime/store/RelayModernRecord"))).getValue(
              _,
              k,
            )
          ) {
            ((p = p != null ? p : d(r, m)),
              (_ = (
                e || (e = n("relay-runtime/store/RelayModernRecord"))
              ).clone(_)));
            var M = e.getValue(_, E);
            (n("relay-runtime/store/live-resolvers/isLiveStateValue")(M) ||
              l(0, 64172, o.path, JSON.stringify(_)),
              (g = this.$10(_, M, o, a)),
              e.setValue(_, k, !1),
              t.set(p, _));
          }
          var w = this.$11(_),
            O = e.getValue(_, C),
            B = e.getValue(_, f),
            W = null;
          return (R(w) && (W = p != null ? p : d(r, m)), [w, p, B, O, W, g]);
        }),
        (r.getLiveResolverPromise = function (r) {
          var t = this.$3(),
            o = t.get(r);
          o != null || l(0, 59681);
          var a = (
            e || (e = n("relay-runtime/store/RelayModernRecord"))
          ).getValue(o, E);
          return new (s || (s = n("Promise")))(function (e) {
            var t = a.subscribe(function () {
              (t(), e());
            });
          });
        }),
        (r.$8 = function (r, o, a, i, l) {
          var t = this.$12(o),
            s = a.subscribe(t);
          (e || (e = n("relay-runtime/store/RelayModernRecord"))).setValue(
            r,
            E,
            a,
          );
          var u = this.$10(r, a, i, l);
          return (e.setValue(r, k, !1), e.setValue(r, L, s), u);
        }),
        (r.$12 = function (r) {
          var t = this;
          return function () {
            var o = t.$3(),
              a = o.get(r);
            if (a) {
              if (
                !(
                  e || (e = n("relay-runtime/store/RelayModernRecord"))
                ).hasValue(a, E)
              ) {
                n("warning")(
                  !1,
                  "Unexpected callback for a incomplete live resolver record (__id: `%s`). The record has missing live state value. This is a no-op and indicates a memory leak, and possible bug in Relay Live Resolvers. Possible cause: The original record was GC-ed, or was created with the optimistic record source. Record details: `%s`.",
                  r,
                  JSON.stringify(a),
                );
                return;
              }
              var i = (
                e || (e = n("relay-runtime/store/RelayModernRecord"))
              ).clone(a);
              (e.setValue(i, k, !0), t.$13(r, i));
            }
          };
        }),
        (r.$13 = function (t, r) {
          if (this.$5)
            (this.$6 == null &&
              (this.$6 = n("relay-runtime/store/RelayRecordSource").create()),
              this.$6.set(t, r));
          else {
            var e = n("relay-runtime/store/RelayRecordSource").create();
            (e.set(t, r), this.$4.publish(e), this.$4.notify());
          }
        }),
        (r.batchLiveStateUpdates = function (t) {
          (!this.$5 || l(0, 65685), (this.$5 = !0));
          try {
            t();
          } finally {
            (this.$6 != null && (this.$4.publish(this.$6), this.$4.notify()),
              (this.$6 = null),
              (this.$5 = !1));
          }
        }),
        (r.batchLiveStateUpdatesWithoutNotify = function (t) {
          (!this.$5 || l(0, 65685), (this.$5 = !0));
          try {
            t();
          } finally {
            var e = this.$6 != null;
            return (
              e && this.$4.publish(this.$6),
              (this.$6 = null),
              (this.$5 = !1),
              e
            );
          }
        }),
        (r.$10 = function (r, o, a, i) {
          var t = null,
            l = null;
          try {
            t = o.read();
          } catch (e) {
            l = e;
          }
          return (
            (e || (e = n("relay-runtime/store/RelayModernRecord"))).setValue(
              r,
              f,
              l,
            ),
            this.$9(r, t, a, i)
          );
        }),
        (r.$9 = function (r, o, a, i) {
          var t = a.normalizationInfo,
            s = null;
          if (o != null && t != null && !R(o)) {
            var u,
              c = n(
                "relay-runtime/store/live-resolvers/getOutputTypeRecordIDs",
              )(r),
              d = new Set(),
              p = this.$3();
            if (t.plural) {
              (Array.isArray(o) || l(0, 65023), (u = []));
              for (
                var _ = n("relay-runtime/store/RelayRecordSource").create(),
                  f = 0;
                f < o.length;
                f++
              ) {
                var g = o[f];
                if (g != null) {
                  typeof g == "object" || l(0, 65024);
                  var y = B(t, g),
                    C = m(
                      y,
                      (
                        e || (e = n("relay-runtime/store/RelayModernRecord"))
                      ).getDataID(r),
                      f,
                    ),
                    v = this.$14(C, g, i, t, [a.path, String(f)], y);
                  for (var S of v.getRecordIDs()) (_.set(S, F(v, S)), d.add(S));
                  u.push(C);
                }
              }
              s = x(p, _, c);
            } else {
              typeof o == "object" || l(0, 65024);
              var L = B(t, o),
                E = m(
                  L,
                  (
                    e || (e = n("relay-runtime/store/RelayModernRecord"))
                  ).getDataID(r),
                ),
                k = this.$14(E, o, i, t, [a.path], L);
              for (var I of k.getRecordIDs()) d.add(I);
              ((u = E), (s = x(p, k, c)));
            }
            ((e || (e = n("relay-runtime/store/RelayModernRecord"))).setValue(
              r,
              h,
              d,
            ),
              n("relay-runtime/util/shallowFreeze")(u),
              e.setValue(r, b, u));
          } else
            (n("relay-runtime/util/shallowFreeze")(o),
              (e || (e = n("relay-runtime/store/RelayModernRecord"))).setValue(
                r,
                b,
                o,
              ),
              e.setValue(r, h, new Set()));
          return s;
        }),
        (r.notifyUpdatedSubscribers = function (t) {
          this.$4.__notifyUpdatedSubscribers(t);
        }),
        (r.$11 = function (r) {
          return (
            e || (e = n("relay-runtime/store/RelayModernRecord"))
          ).getValue(r, b);
        }),
        (r.invalidateDataIDs = function (t) {
          for (
            var e = this.$3(), n = new Set(), r = Array.from(t);
            r.length;
          ) {
            var o = r.pop();
            (n.add(o), t.add(o));
            var a = this.$2.get(o);
            if (a != null) {
              for (var i of a)
                if (!n.has(i)) {
                  n.add(i);
                  var l = this.$1.get(i);
                  if (l == null) continue;
                  for (var s of l) (P(s, e), n.has(s) || (n.add(s), r.push(s)));
                }
            }
          }
        }),
        (r.$7 = function (r, o) {
          if (
            !(e || (e = n("relay-runtime/store/RelayModernRecord"))).getValue(
              r,
              g,
            )
          )
            return !1;
          var t = (
              e || (e = n("relay-runtime/store/RelayModernRecord"))
            ).getValue(r, C),
            a = t == null ? void 0 : t.data,
            i = t == null ? void 0 : t.selector;
          if (a == null || i == null)
            return (
              n("warning")(
                !1,
                "Expected previous inputs and reader selector on resolver record with ID %s, but they were missing.",
                (
                  e || (e = n("relay-runtime/store/RelayModernRecord"))
                ).getDataID(r),
              ),
              !0
            );
          var l = o(i),
            s = l.data,
            u = n("relay-runtime/util/recycleNodesInto")(a, s);
          if (u !== a) return !0;
          if (
            n("relay-runtime/util/RelayFeatureFlags")
              .MARK_RESOLVER_VALUES_AS_CLEAN_AFTER_FRAGMENT_REREAD
          ) {
            var c = (
              e || (e = n("relay-runtime/store/RelayModernRecord"))
            ).clone(r);
            e.setValue(c, g, !1);
            var d = this.$3();
            d.set(e.getDataID(r), c);
          }
          return !1;
        }),
        (r.$14 = function (r, o, a, i, s, u) {
          var t = n("relay-runtime/store/RelayRecordSource").create();
          switch (i.kind) {
            case "OutputType": {
              var c = (
                e || (e = n("relay-runtime/store/RelayModernRecord"))
              ).create(r, u);
              t.set(r, c);
              var d = p(i.normalizationNode, r, a),
                m = !1,
                f = this.$4.__getNormalizationOptions(s);
              return _(t, d, o, f, void 0, m).source;
            }
            case "WeakModel": {
              var g = (
                e || (e = n("relay-runtime/store/RelayModernRecord"))
              ).create(r, u);
              return (e.setValue(g, I, o), t.set(r, g), t);
            }
            default:
              (i.kind, l(0, 79414, i.kind));
          }
        }),
        (r.ensureClientRecord = function (r, o) {
          var t = m(o, r),
            a = this.$3();
          if (!a.has(t)) {
            var i = (
              e || (e = n("relay-runtime/store/RelayModernRecord"))
            ).create(t, o);
            (e.setValue(i, "id", r), a.set(t, i));
          }
          return t;
        }),
        (r.unsubscribeFromLiveResolverRecords = function (t) {
          return M(this.$3(), t);
        }),
        (r.invalidateResolverRecords = function (t) {
          if (t.size !== 0)
            for (var e of t) {
              var n = this.$3().get(e);
              n != null && w(n) && this.$3().delete(e);
            }
        }),
        t
      );
    })();
    function x(t, r, o) {
      var a = new Set();
      if (o != null) for (var i of o) r.has(i) || (a.add(i), t.remove(i));
      for (var l of r.getRecordIDs()) {
        var s = F(r, l);
        if (t.has(l)) {
          var u = F(t, l),
            c = (e || (e = n("relay-runtime/store/RelayModernRecord"))).update(
              u,
              s,
            );
          c !== u && (a.add(l), t.set(l, c), N(u, t));
        } else t.set(l, s);
      }
      return a;
    }
    function $(t) {
      var r = new Set();
      return (
        (e || (e = n("relay-runtime/store/RelayModernRecord")))
          .getFields(t)
          .forEach(function (o) {
            if (
              (
                e || (e = n("relay-runtime/store/RelayModernRecord"))
              ).hasLinkedRecordID(t, o)
            ) {
              var a = (
                e || (e = n("relay-runtime/store/RelayModernRecord"))
              ).getLinkedRecordID(t, o);
              a != null && r.add(a);
            } else if (
              (
                e || (e = n("relay-runtime/store/RelayModernRecord"))
              ).hasLinkedRecordIDs(t, o)
            ) {
              var i;
              (i = (
                e || (e = n("relay-runtime/store/RelayModernRecord"))
              ).getLinkedRecordIDs(t, o)) == null ||
                i.forEach(function (e) {
                  e != null && r.add(e);
                });
            }
          }),
        r
      );
    }
    function P(t, r) {
      var o = r.get(t);
      if (!o) {
        n("warning")(
          !1,
          "Expected a resolver record with ID %s, but it was missing.",
          t,
        );
        return;
      }
      var a = (e || (e = n("relay-runtime/store/RelayModernRecord"))).clone(o);
      (e.setValue(a, g, !0), r.set(t, a));
    }
    function N(e, t) {
      var n = $(e);
      for (var r of n) {
        var o = t.get(r);
        o != null && w(o) && P(r, t);
      }
    }
    function M(e, t) {
      if (t.size !== 0)
        for (var n of t) {
          var r = e.get(n);
          r != null && w(r) && A(r);
        }
    }
    function w(t) {
      return (
        (e || (e = n("relay-runtime/store/RelayModernRecord"))).getType(t) === y
      );
    }
    function A(t) {
      var r = (e || (e = n("relay-runtime/store/RelayModernRecord"))).getValue(
        t,
        L,
      );
      r != null && r();
    }
    function F(e, t) {
      var n = e.get(t);
      return (n != null || l(0, 65242, t), n);
    }
    function O(e) {
      return e;
    }
    function B(e, t) {
      var n,
        r = (n = e.concreteType) != null ? n : t.__typename;
      return (r != null || l(0, 66856), r);
    }
    a.exports = {
      LiveResolverCache: D,
      RELAY_RESOLVER_LIVE_STATE_SUBSCRIPTION_KEY: L,
      getUpdatedDataIDs: O,
    };
  },
  null,
);
