__d(
  "WebDi.Async",
  ["WebDi.Cause", "WebDi.Fx", "WebDi.Result", "WebDi.UnsafeCoerce"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      return new (o("WebDi.Fx").Async)(function (n, r) {
        e(r).then(
          function (e) {
            return n(new (o("WebDi.Result").Ok)(e));
          },
          function (e) {
            return n(
              t == null
                ? new (o("WebDi.Fx").Raise)(new (o("WebDi.Cause").Die)(e))
                : new (o("WebDi.Result").Err)(t(e)),
            );
          },
        );
      });
    }
    var s = o("WebDi.UnsafeCoerce").coerce(e);
    function u(e) {
      return function (t) {
        return new (o("WebDi.Fx").Chain)(
          new (o("WebDi.Fx").Recover)(
            t,
            function (t) {
              return new (o("WebDi.Fx").Chain)(
                e(o("WebDi.Result").err(o("WebDi.UnsafeCoerce").coerce(t))),
                function () {
                  return new (o("WebDi.Fx").Raise)(t);
                },
              );
            },
            !0,
          ),
          function (t) {
            return new (o("WebDi.Fx").Chain)(
              e(o("WebDi.Result").ok(t)),
              function () {
                return new (o("WebDi.Result").Ok)(t);
              },
            );
          },
        );
      };
    }
    function c(e) {
      return function (t) {
        return new (o("WebDi.Fx").Recover)(t, function (t) {
          return new (o("WebDi.Result").Err)(
            e(o("WebDi.UnsafeCoerce").coerce(t)),
          );
        });
      };
    }
    function d(e) {
      return new (o("WebDi.Fx").Transform)(
        new (o("WebDi.Fx").Recover)(e, function (e) {
          return new (o("WebDi.Result").Ok)(new (o("WebDi.Result").Err)(e));
        }),
        function (e) {
          return o("WebDi.UnsafeCoerce").coerce(
            e instanceof o("WebDi.Result").Err
              ? e
              : new (o("WebDi.Result").Ok)(e),
          );
        },
      );
    }
    ((l.fromPromise = s),
      (l.ensuring = u),
      (l.mapError = c),
      (l.attemptFx = d));
  },
  98,
);
