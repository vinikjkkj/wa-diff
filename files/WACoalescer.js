__d(
  "WACoalescer",
  ["WALogger", "asyncToGeneratorRuntime", "getErrorSafe"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e;
    function s(t) {
      var a = t.dispatch,
        i = t.name,
        l = t.waitBeforeDispatch,
        s = [],
        u = !1;
      function c() {
        return d.apply(this, arguments);
      }
      function d() {
        return (
          (d = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
            try {
              yield l();
            } finally {
              u = !1;
            }
            var e = s;
            ((s = []), yield a(e));
          })),
          d.apply(this, arguments)
        );
      }
      return {
        add: function (n) {
          (s.push(n),
            !u &&
              ((u = !0),
              c().catch(function (t) {
                o("WALogger")
                  .ERROR(
                    e ||
                      (e = babelHelpers.taggedTemplateLiteralLoose([
                        "[coalescer] ",
                        " dispatch failed",
                      ])),
                    i,
                  )
                  .catching(r("getErrorSafe")(t))
                  .sendLogs("coalescer-dispatch-failed");
              })));
        },
      };
    }
    l.createCoalescer = s;
  },
  98,
);
