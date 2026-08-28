__d(
  "ZenonDeferrableStateMachine",
  ["DateConsts", "clearTimeout", "setTimeout", "xstate"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = 30 * o("DateConsts").MS_PER_SEC;
    function s(t, n) {
      var a = n === void 0 ? {} : n,
        i = a.deferTimeout,
        l = a.onDeferTimeout,
        s = [],
        u = new Map(),
        c = o("xstate")
          .interpret(
            t.withConfig({
              actions: {
                defer: function (n, o) {
                  (s.push(o),
                    l &&
                      u.set(
                        o,
                        r("setTimeout")(
                          function () {
                            l(o);
                          },
                          i != null ? i : e,
                        ),
                      ));
                },
              },
            }),
          )
          .onTransition(function (e) {
            var t;
            if (e.value !== ((t = e.history) == null ? void 0 : t.value)) {
              var n = s;
              for (s = []; n.length > 0; ) {
                var o = n.shift();
                (c.send(o), r("clearTimeout")(u.get(o)), u.delete(o));
              }
            }
          })
          .start();
      return c;
    }
    l.interpret = s;
  },
  98,
);
