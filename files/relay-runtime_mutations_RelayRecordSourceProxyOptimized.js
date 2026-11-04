__d(
  "relay-runtime/mutations/RelayRecordSourceProxyOptimized",
  [
    "invariant",
    "relay-runtime/mutations/RelayRecordProxy",
    "relay-runtime/mutations/RelayRecordSourceProxy",
    "relay-runtime/store/RelayRecordState",
    "relay-runtime/store/RelayStoreUtils",
    "relay-runtime/util/RelayFeatureFlags",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = n("relay-runtime/store/RelayRecordState").EXISTENT,
      s = n("relay-runtime/store/RelayRecordState").NONEXISTENT,
      u = n("relay-runtime/store/RelayStoreUtils").ROOT_ID;
    function c(e) {
      return typeof e == "string" ? e : String(e);
    }
    var d = (function (t) {
      function r(e, n, r, o, a) {
        var i;
        return (
          (i = t.call(this, e, n, r, o, a) || this),
          (i.__mutator = e),
          (i.$RelayRecordSourceProxyOptimized1 = null),
          i
        );
      }
      babelHelpers.inheritsLoose(r, t);
      var o = r.prototype;
      return (
        (o.create = function (t, n) {
          this.__mutator.create(t, n);
          var e = this.$RelayRecordSourceProxyOptimized1;
          e != null && e.delete(c(t));
          var r = this.get(t);
          return (r || l(0, 2120), r);
        }),
        (o.delete = function (t) {
          t !== u || l(0, 2121);
          var e = this.$RelayRecordSourceProxyOptimized1;
          (e != null && e.delete(c(t)), this.__mutator.delete(t));
        }),
        (o.get = function (r) {
          var t = this.$RelayRecordSourceProxyOptimized1;
          t == null &&
            ((t = new Map()), (this.$RelayRecordSourceProxyOptimized1 = t));
          var o = c(r),
            a = t.get(o);
          if (a === void 0 && !t.has(o)) {
            var i = this.__mutator.getStatus(r);
            (i === e
              ? (a = new (n("relay-runtime/mutations/RelayRecordProxy"))(
                  this,
                  this.__mutator,
                  r,
                ))
              : (a = i === s ? null : void 0),
              t.set(o, a));
          }
          return a;
        }),
        r
      );
    })(n("relay-runtime/mutations/RelayRecordSourceProxy"));
    function m(e, t, r, o, a) {
      return n("relay-runtime/util/RelayFeatureFlags").ENABLE_PERF_PUBLISH
        ? new d(e, t, r, o, a)
        : new (n("relay-runtime/mutations/RelayRecordSourceProxy"))(
            e,
            t,
            r,
            o,
            a,
          );
    }
    a.exports = {
      RelayRecordSourceProxyOptimized: d,
      createRelayRecordSourceProxy: m,
    };
  },
  null,
);
