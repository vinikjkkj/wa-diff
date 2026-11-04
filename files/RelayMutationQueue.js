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
            n;
          (t.optimisticResponse || t.optimisticUpdater) &&
            (n = this.$1.applyMutation(this.$4(t)));
          var r = function (r) {
              (r === void 0 && (r = function () {}),
                (e.$2 = null),
                n && n.dispose(),
                r(),
                e.$5());
            },
            o = {
              configs: t.configs,
              mutation: t.mutation,
              onCompleted: function (n) {
                r(function () {
                  t.onCompleted && t.onCompleted(n);
                });
              },
              onError: function (n) {
                r(function () {
                  t.onError && t.onError(n);
                });
              },
              updater: t.updater,
              uploadables: t.uploadables,
              variables: t.variables,
            };
          return (
            this.$3.add(o),
            this.$5(),
            {
              dispose: function () {
                if (e.$2 && e.$2.config === o) {
                  (e.$2.disposable.dispose(), r());
                  return;
                }
                var t = e.$3.has(o);
                t && (e.$3.delete(o), n && n.dispose());
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
