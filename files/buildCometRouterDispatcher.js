__d(
  "buildCometRouterDispatcher",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    function e(e, t) {
      var n = babelHelpers.extends({}, e);
      return (
        t.actorID !== void 0 && (n.actorID = t.actorID),
        t.from !== void 0 && (n.from = t.from),
        t.tracePolicy !== void 0 && (n.tracePolicy = t.tracePolicy),
        t.url !== void 0 && (n.url = t.url),
        n
      );
    }
    var l = (function () {
      function t(e) {
        this.$1 = e;
      }
      var n = t.prototype;
      return (
        (n.getRouterDispatcher = function () {
          return this.$1;
        }),
        (n.setRouterDispatcher = function (t) {
          this.$1 = t;
        }),
        (n.go = function (t, n) {
          return this.$1.go(t, n, {});
        }),
        (n.goTo = function (t, n) {
          return this.$1.goTo(t, n, {});
        }),
        (n.prefetchRouteQueries = function (t, n, r) {
          return this.$1.prefetchRouteQueries(t, n, r, {});
        }),
        (n.preloadRouteCode = function (t, n) {
          return this.$1.preloadRouteCode(t, n, {});
        }),
        (n.goBack = function (t) {
          return this.$1.goBack(t);
        }),
        (n.popPushView = function () {
          return this.$1.popPushView();
        }),
        (n.prefetchRouteDefinition = function (t) {
          return this.$1.prefetchRouteDefinition(t);
        }),
        (n.withContext = function (n) {
          return this.$2(function (t) {
            return {
              go: function (o, a, i) {
                return t.go(o, a, e(n, i));
              },
              goTo: function (o, a, i) {
                return t.goTo(o, a, e(n, i));
              },
              prefetchRouteQueries: function (o, a, i, l) {
                return t.prefetchRouteQueries(o, a, i, e(n, l));
              },
              preloadRouteCode: function (o, a, i) {
                return t.preloadRouteCode(o, a, e(n, i));
              },
            };
          });
        }),
        (n.$2 = function (n) {
          n === void 0 &&
            (n = function () {
              return {};
            });
          var e = n(this.$1);
          return new t(babelHelpers.extends({}, this.$1, e));
        }),
        (n.withOverrides = function (t) {
          return (
            t === void 0 &&
              (t = function () {
                return {};
              }),
            this.$2(function (e) {
              var n = { value: {} },
                r = babelHelpers.extends({}, e, {
                  go: function (r, o) {
                    return e.go(r, o, n.value);
                  },
                  goAsync: function (r, o) {
                    return e.goAsync(r, o, n.value);
                  },
                  goTo: function (r, o) {
                    return e.goTo(r, o, n.value);
                  },
                  goToAsync: function (r, o) {
                    return e.goToAsync(r, o, n.value);
                  },
                  prefetchRouteQueries: function (r, o, a) {
                    return e.prefetchRouteQueries(r, o, a, n.value);
                  },
                  preloadRouteCode: function (r, o) {
                    return e.preloadRouteCode(r, o, n.value);
                  },
                }),
                o = babelHelpers.extends({}, r, t(r));
              function a(e) {
                return ((n.value = e), o);
              }
              return babelHelpers.extends({}, o, {
                go: function (t, n, r) {
                  return a(r).go(t, n);
                },
                goAsync: function (t, n, r) {
                  return a(r).goAsync(t, n);
                },
                goTo: function (t, n, r) {
                  return a(r).goTo(t, n);
                },
                goToAsync: function (t, n, r) {
                  return a(r).goToAsync(t, n);
                },
                prefetchRouteQueries: function (t, n, r, o) {
                  return a(o).prefetchRouteQueries(t, n, r);
                },
                preloadRouteCode: function (t, n, r) {
                  return a(r).preloadRouteCode(t, n);
                },
              });
            })
          );
        }),
        t
      );
    })();
    i.Dispatcher = l;
  },
  66,
);
