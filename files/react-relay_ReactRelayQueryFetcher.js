__d(
  "react-relay/ReactRelayQueryFetcher",
  ["invariant", "relay-runtime"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = n("relay-runtime").__internal.fetchQuery,
      s = n("relay-runtime").createOperationDescriptor,
      u = n("relay-runtime").isRelayModernEnvironment,
      c = (function () {
        function t(e) {
          ((this.$4 = []),
            (this.$8 = !1),
            e != null &&
              ((this.$7 = e.cacheSelectionReference),
              (this.$4 = e.selectionReferences)));
        }
        var n = t.prototype;
        return (
          (n.getSelectionReferences = function () {
            return {
              cacheSelectionReference: this.$7,
              selectionReferences: this.$4,
            };
          }),
          (n.lookupInStore = function (t, n, r) {
            return (r === "store-and-network" || r === "store-or-network") &&
              t.check(n).status === "available"
              ? (this.$9(t, n), t.lookup(n.fragment))
              : null;
          }),
          (n.getFetchResult = function () {
            if (this.$8) {
              if (this.$6 != null) return { error: this.$6 };
              if (this.$5 != null) return { snapshot: this.$5 };
            } else return null;
          }),
          (n.execute = function (n) {
            var t = this,
              r = n.environment,
              o = n.operation,
              a = n.preservePreviousReferences,
              i = a === void 0 ? !1 : a,
              l = r.retain(o),
              s = function () {
                t.$4 = t.$4.concat(l);
              },
              c = function () {
                (i || t.disposeSelectionReferences(), (t.$4 = t.$4.concat(l)));
              },
              d = function () {
                t.$4 = t.$4.concat(l);
              };
            return u(r)
              ? e(r, o).do({ error: s, complete: c, unsubscribe: d })
              : r
                  .execute({ operation: o })
                  .do({ error: s, complete: c, unsubscribe: d });
          }),
          (n.setOnDataChange = function (t) {
            (this.$1 || l(0, 4542),
              typeof t == "function" &&
                ((this.$1.onDataChangeCallbacks =
                  this.$1.onDataChangeCallbacks || []),
                this.$1.onDataChangeCallbacks.push(t),
                this.$8 &&
                  (this.$6 != null
                    ? t({ error: this.$6 })
                    : this.$5 != null && t({ snapshot: this.$5 }))));
          }),
          (n.fetch = function (t, n) {
            var e = this,
              r = t.environment,
              o = t.operation,
              a = t.onDataChange,
              i = !1,
              l;
            this.disposeRequest();
            var u = this.$1 && this.$1.onDataChangeCallbacks;
            ((this.$1 = {
              environment: r,
              onDataChangeCallbacks: u || [],
              operation: o,
            }),
              a &&
                this.$1.onDataChangeCallbacks.indexOf(a) === -1 &&
                this.$1.onDataChangeCallbacks.push(a));
            var c = n ? s(o.request.node, o.request.variables, n) : o,
              d = this.execute({ environment: r, operation: c })
                .finally(function () {
                  e.$2 = null;
                })
                .subscribe({
                  next: function () {
                    ((e.$8 = !0),
                      (e.$6 = null),
                      e.$10({ notifyFirstResult: i }));
                  },
                  error: function (n) {
                    ((e.$8 = !0), (e.$6 = n), (e.$5 = null));
                    var t = e.$1 && e.$1.onDataChangeCallbacks;
                    i
                      ? t &&
                        t.forEach(function (e) {
                          e({ error: n });
                        })
                      : (l = n);
                  },
                });
            if (
              ((this.$2 = {
                dispose: function () {
                  d.unsubscribe();
                },
              }),
              (i = !0),
              l)
            )
              throw l;
            return this.$5;
          }),
          (n.retry = function (t) {
            return (
              this.$1 || l(0, 4543),
              this.fetch(
                {
                  environment: this.$1.environment,
                  operation: this.$1.operation,
                  onDataChange: null,
                },
                t,
              )
            );
          }),
          (n.dispose = function () {
            (this.disposeRequest(), this.disposeSelectionReferences());
          }),
          (n.disposeRequest = function () {
            ((this.$6 = null),
              (this.$5 = null),
              this.$2 && this.$2.dispose(),
              this.$3 && (this.$3.dispose(), (this.$3 = null)));
          }),
          (n.$9 = function (t, n) {
            (this.$11(), (this.$7 = t.retain(n)));
          }),
          (n.$11 = function () {
            (this.$7 && this.$7.dispose(), (this.$7 = null));
          }),
          (n.disposeSelectionReferences = function () {
            (this.$11(),
              this.$4.forEach(function (e) {
                return e.dispose();
              }),
              (this.$4 = []));
          }),
          (n.$10 = function (t) {
            var e = this,
              n = t.notifyFirstResult;
            this.$1 || l(0, 4544);
            var r = this.$1,
              o = r.environment,
              a = r.onDataChangeCallbacks,
              i = r.operation;
            if (
              !this.$5 &&
              ((this.$5 = o.lookup(i.fragment)),
              (this.$3 = o.subscribe(this.$5, function (t) {
                if (e.$1 != null) {
                  var n = e.$1.onDataChangeCallbacks;
                  Array.isArray(n) &&
                    n.forEach(function (e) {
                      return e({ snapshot: t });
                    });
                }
              })),
              this.$5 && n && Array.isArray(a))
            ) {
              var s = this.$5;
              a.forEach(function (e) {
                return e({ snapshot: s });
              });
            }
          }),
          t
        );
      })();
    a.exports = c;
  },
  null,
);
