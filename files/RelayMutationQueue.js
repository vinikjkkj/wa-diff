__d(
  "RelayMutationQueue",
  ["relay-runtime"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = (function () {
      function e(e) {
        ((this.$2 = null), (this.$3 = new Set()), (this.$1 = e));
      }
      var t = e.prototype;
      return (
        (t.getQueuedMutations = function () {
          return this.$3;
        }),
        (t.push = function (t) {
          var e = this,
            n = null,
            r = t.onServerCompleted
              ? function (e, r) {
                  ((n = r), t.updater == null || t.updater(e, r));
                }
              : t.updater,
            o;
          (t.optimisticResponse || t.optimisticUpdater) &&
            (o = this.$1.applyMutation(this.$4(t)));
          var a = function (r) {
              if (
                (r === void 0 && (r = function () {}),
                (e.$2 = null),
                o && o.dispose(),
                t.onServerCompleted != null)
              )
                try {
                  r();
                } finally {
                  e.$5();
                }
              else (r(), e.$5());
            },
            i = {
              configs: t.configs,
              mutation: t.mutation,
              onCompleted: function (r, o) {
                a(function () {
                  try {
                    t.onCompleted == null || t.onCompleted(r);
                  } finally {
                    t.onServerCompleted == null || t.onServerCompleted(n, o);
                  }
                });
              },
              onError: function (n) {
                a(function () {
                  t.onError && t.onError(n);
                });
              },
              updater: r,
              uploadables: t.uploadables,
              variables: t.variables,
            };
          return (
            this.$3.add(i),
            this.$5(),
            {
              dispose: function () {
                if (e.$2 && e.$2.config === i) {
                  (e.$2.disposable.dispose(), a());
                  return;
                }
                var t = e.$3.has(i);
                t && (e.$3.delete(i), o && o.dispose());
              },
            }
          );
        }),
        (t.$5 = function () {
          if (!this.$2) {
            var e = s(this.$3);
            e !== void 0 && (this.$2 = { config: e, disposable: this.$6(e) });
          }
        }),
        (t.$6 = function (t) {
          return o("relay-runtime").commitMutation(this.$1, t);
        }),
        (t.$7 = function (t) {
          var e = o("relay-runtime").getRequest(t.mutation);
          if (e.params.operationKind !== "mutation") {
            var n = new TypeError("enqueueMutation: Expected a mutation");
            throw (n.stack, n);
          }
          if (e.kind !== "Request") {
            var r = new TypeError(
              "enqueueMutation: Expected mutation to be of type request",
            );
            throw (r.stack, r);
          }
          return o("relay-runtime").createOperationDescriptor(e, t.variables);
        }),
        (t.$4 = function (t) {
          return {
            operation: this.$7(t),
            response: t.optimisticResponse,
            updater: t.optimisticUpdater,
          };
        }),
        e
      );
    })();
    function s(e) {
      var t = e.values(),
        n = t.next();
      if (n.done !== !0) return (e.delete(n.value), n.value);
    }
    l.default = e;
  },
  98,
);
