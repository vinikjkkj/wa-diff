__d(
  "AdsDMLQueryHandler",
  ["AdsDMLLog", "AdsDataAtom", "FBLogger", "SimpleHookSet", "abstractMethod"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = (function () {
        function e(e, t, n) {
          ((this.$1 = Object.create(null)),
            (this.$2 = new Proxy(this.$1, {
              get: function (t, n, r) {
                return (t[n] = null);
              },
            })),
            (this.argsGetter = e),
            (this.dataGetter = t),
            (this.__name = n));
        }
        var t = e.prototype;
        return (
          (t.__getQueryParts = function (t, n) {
            return { vars: t.vars, parent: t.parent, data: n != null ? n : {} };
          }),
          (t.__getArgs = function (t) {
            var e = this.argsGetter(t);
            return e;
          }),
          (t.__getFragment = function (t) {
            return (
              (this.$1 = Object.create(null)),
              (this.$2 = new Proxy(this.$1, {
                get: function (t, n, r) {
                  return (t[n] = null);
                },
              })),
              (t.data = this.$2),
              this.dataGetter(t),
              this.$1
            );
          }),
          (t.__loadFromLoadObject = function (t, n, r) {
            if (r.hasError()) throw r.getError();
            if (r.isLoadingOrEmpty()) {
              ((n.isLoading = !0), (n.data = null));
              return;
            }
            ((t.data = r.getValue()),
              (n.data = this.dataGetter(t)),
              (n.isLoading = !1));
          }),
          (t.__loadFromLoadObjectMap = function (t, n, r, o) {
            for (var e = Object.create(null), a = 0; a < r.length; a++) {
              var i = r[a],
                l = o.get(i);
              if (l.hasError()) throw l.getError();
              if (l.isLoadingOrEmpty()) {
                ((n.isLoading = !0), (n.data = null));
                return;
              }
              ((t.data = l.getValue()),
                (t.data = l.getValueEnforcing()),
                (e[i] = this.dataGetter(t)));
            }
            ((n.data = e), (n.isLoading = !1));
          }),
          e
        );
      })(),
      u = (function (e) {
        function t() {
          for (var t, n = arguments.length, r = new Array(n), a = 0; a < n; a++)
            r[a] = arguments[a];
          return (
            (t = e.call.apply(e, [this].concat(r)) || this),
            (t.storeListener = new (o("SimpleHookSet").SimpleHookSet)()),
            babelHelpers.assertThisInitialized(t) ||
              babelHelpers.assertThisInitialized(t)
          );
        }
        babelHelpers.inheritsLoose(t, e);
        var n = t.prototype;
        return (
          (n.addStores = function (t) {
            var e = this,
              n = this.$StoreQueryHandler$p_1;
            n == null && (n = this.$StoreQueryHandler$p_1 = new Set());
            for (var r of t)
              n.has(r) ||
                (n.add(r),
                r.addListener(function () {
                  e.storeListener.call();
                }));
          }),
          (n.__addOnUpdateCb = function (t) {
            t && this.storeListener.add(t);
          }),
          (n.__getRawDataAndUpdateQuery = function (t, n, o, a) {
            r("abstractMethod")(
              "StoreQueryHandler",
              "__getRawDataAndUpdateQuery",
            );
          }),
          (n.load = function (t, n) {
            var e = this.__getQueryParts(t),
              r = this.__getArgs(e),
              o = this.__getFragment(e);
            (this.__getRawDataAndUpdateQuery(t, e, r, o),
              this.__addOnUpdateCb(n));
          }),
          t
        );
      })(s);
    ((l.QueryHandler = s), (l.StoreQueryHandler = u));
  },
  98,
);
