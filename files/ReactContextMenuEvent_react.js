__d(
  "ReactContextMenuEvent.react",
  [
    "ReactEventHookPropagation",
    "ReactUseEvent.react",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = (e || (e = o("react"))).useEffect;
    function u(e, t) {
      var n = o("react-compiler-runtime").c(7),
        a = t.disabled,
        i = t.onContextMenu,
        l = t.preventDefault,
        u = r("ReactUseEvent.react")("contextmenu"),
        c,
        d;
      (n[0] !== u || n[1] !== a || n[2] !== i || n[3] !== l || n[4] !== e
        ? ((c = function () {
            var t = e.current;
            t !== null &&
              u.setListener(t, function (e) {
                a !== !0 &&
                  (o(
                    "ReactEventHookPropagation",
                  ).hasEventHookPropagationStopped(e, "useContextMenu") ||
                    (o("ReactEventHookPropagation").stopEventHookPropagation(
                      e,
                      "useContextMenu",
                    ),
                    l !== !1 &&
                      !e.nativeEvent.defaultPrevented &&
                      e.preventDefault(),
                    i && i(e)));
              });
          }),
          (d = [a, e, u, l, i]),
          (n[0] = u),
          (n[1] = a),
          (n[2] = i),
          (n[3] = l),
          (n[4] = e),
          (n[5] = c),
          (n[6] = d))
        : ((c = n[5]), (d = n[6])),
        s(c, d));
    }
    l.useContextMenu = u;
  },
  98,
);
