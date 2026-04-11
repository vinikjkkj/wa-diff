__d(
  "RequireDeferredReference",
  [
    "CallbackDependencyManager",
    "Promise",
    "RequireDeferredFactoryEvent",
    "ifRequireable",
    "ifRequired",
    "performanceNow",
    "promiseDone",
    "requireWeak",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u = 1,
      c = 2,
      d = 16,
      m = u | c | d,
      p = null;
    function _() {
      return (p == null && (p = new (r("CallbackDependencyManager"))()), p);
    }
    function f(e, t) {
      return e + ":" + t;
    }
    var g = new Set(),
      h = (function () {
        function t(e) {
          this.$1 = e;
        }
        var o = t.prototype;
        return (
          (o.setRequireDeferredForDisplay = function (t) {
            this.$2 = t;
          }),
          (o.isRequireDeferredForDisplay = function () {
            return this.$2;
          }),
          (o.getModuleId = function () {
            var e = this.$1;
            return e;
          }),
          (o.getModuleIdAsRef = function () {
            return this.$1;
          }),
          (o.preload = function () {}),
          (o.getModuleIfRequired = function () {
            return r("ifRequired").call(null, this.$1, function (e) {
              return e;
            });
          }),
          (o.getModuleIfRequireable = function () {
            return r("ifRequireable").call(null, this.$1, function (e) {
              return e;
            });
          }),
          (o.isAvailableInSSR_DO_NOT_USE = function () {
            return !0;
          }),
          (o.$3 = function (t) {
            var e = this,
              n = r("ifRequireable")("InteractionTracingMetrics", function (t) {
                return t
                  .currentInteractionLogger()
                  .addRequireDeferred(
                    e.getModuleId(),
                    (s || (s = r("performanceNow")))(),
                  );
              }),
              o = !1,
              a = function (a, i) {
                (n == null || n((s || (s = r("performanceNow")))(), i),
                  o || t(a));
              };
            return (
              r("ifRequireable").call(
                null,
                this.$1,
                function (e) {
                  return a(e, !0);
                },
                function () {
                  r("requireWeak").call(null, e.$1, function (e) {
                    return a(e, !1);
                  });
                },
              ),
              {
                remove: function () {
                  o = !0;
                },
              }
            );
          }),
          (o.load = function () {
            var t = this;
            return new (e || (e = n("Promise")))(function (e) {
              return t.$3(e);
            });
          }),
          (o.__setRef = function (t) {
            return this;
          }),
          (o.onReadyImmediately = function (t) {
            return this.$3(t);
          }),
          (o.onReady = function (o) {
            var t = !1,
              a = this.$3(function (a) {
                r("promiseDone")(
                  (e || (e = n("Promise"))).resolve().then(function () {
                    t || o(a);
                  }),
                );
              });
            return {
              remove: function () {
                ((t = !0), a.remove());
              },
            };
          }),
          (o.loadImmediately = function (t) {
            return this.$3(t);
          }),
          (t.getRDModuleName_DO_NOT_USE = function (t) {
            return "rd:" + t;
          }),
          (t.unblock = function (o, a) {
            var e = _(),
              i = function (i) {
                (g.has(i) ||
                  (g.add(i),
                  e.registerCallback(
                    function () {
                      define(
                        t.getRDModuleName_DO_NOT_USE(i),
                        [i],
                        function () {
                          n.call(null, i);
                        },
                        m,
                      );
                    },
                    Array.from(
                      r("RequireDeferredFactoryEvent").members(),
                      function (e) {
                        return f(i, e);
                      },
                    ),
                  )),
                  e.satisfyPersistentDependency(f(i, a)));
              };
            for (var l of o) i(l);
          }),
          t
        );
      })();
    l.default = h;
  },
  98,
);
