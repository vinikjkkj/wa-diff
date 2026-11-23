__d(
  "WACoalescer",
  ["WALogger", "getErrorSafe"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e;
    function s(t) {
      var n = t.dispatch,
        a = t.name,
        i = t.waitBeforeDispatch,
        l = [],
        s = !1;
      async function u() {
        try {
          await i();
        } finally {
          s = !1;
        }
        var e = l;
        ((l = []), await n(e));
      }
      return {
        add: function (n) {
          (l.push(n),
            !s &&
              ((s = !0),
              u().catch(function (t) {
                o("WALogger")
                  .ERROR(
                    e ||
                      (e = babelHelpers.taggedTemplateLiteralLoose([
                        "[coalescer] ",
                        " dispatch failed",
                      ])),
                    a,
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
