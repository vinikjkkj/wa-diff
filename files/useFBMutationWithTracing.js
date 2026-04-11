__d(
  "useFBMutationWithTracing",
  [
    "react",
    "react-compiler-runtime",
    "useCometInteractionTracing",
    "useFBMutation",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = (e || (e = o("react"))).useCallback;
    function u(e, t) {
      var n = o("react-compiler-runtime").c(6),
        a = t.interactionClass,
        i = t.qplEvent,
        l = t.tracePolicy,
        s = t.traceType,
        u = s === void 0 ? "INTERACTION" : s,
        c = r("useFBMutation")(e),
        d = c[0],
        m = c[1],
        p = r("useCometInteractionTracing")(i, a, u, l),
        _;
      n[0] !== d || n[1] !== p
        ? ((_ = function (t) {
            var e = null,
              n = null,
              r = {
                dispose: function () {
                  var t, r;
                  ((t = e) == null || t.failTrace("Mutation cancelled", !0),
                    (r = n) == null || r.dispose(),
                    (e = null),
                    (n = null));
                },
              },
              o = p(function (o) {
                e = o;
                var a = function (t) {
                  var e = t.onError,
                    a = babelHelpers.extends({}, t, {
                      onError: function (n) {
                        (e == null || e(n),
                          o.addAnnotation("errorName", n.name),
                          o.failTrace(n.message, !0));
                      },
                    });
                  return ((n = d(a)), r);
                };
                t(o, a);
              });
            return [o, r];
          }),
          (n[0] = d),
          (n[1] = p),
          (n[2] = _))
        : (_ = n[2]);
      var f = _,
        g;
      return (
        n[3] !== m || n[4] !== f
          ? ((g = [f, m]), (n[3] = m), (n[4] = f), (n[5] = g))
          : (g = n[5]),
        g
      );
    }
    l.useFBMutationWithTracing = u;
  },
  98,
);
