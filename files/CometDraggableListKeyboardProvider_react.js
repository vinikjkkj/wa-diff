__d(
  "CometDraggableListKeyboardProvider.react",
  [
    "fbt",
    "CometComponentWithKeyCommands.react",
    "CometDraggableListKeyboardContext",
    "CometKeys",
    "FocusWithinHandler.react",
    "react",
    "react-compiler-runtime",
    "useTriggerAccessibilityAlert",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u = e || (e = o("react")),
      c = e,
      d = c.useMemo,
      m = c.useState;
    function p(e) {
      var t = o("react-compiler-runtime").c(14),
        n = e.children,
        a = r("useTriggerAccessibilityAlert")(),
        i = m(null),
        l = i[0],
        c = i[1],
        d;
      t[0] !== l
        ? ((d = {
            keyboardActivatedSourceIndex: l,
            setKeyboardActivatedSourceIndex: c,
          }),
          (t[0] = l),
          (t[1] = d))
        : (d = t[1]);
      var p = d,
        _;
      t[2] === Symbol.for("react.memo_cache_sentinel")
        ? ((_ = [
            {
              command: { key: r("CometKeys").ESCAPE },
              description: s._(/*BTDS*/ "Stop selecting an Item"),
              handler: function () {
                c(null);
              },
            },
          ]),
          (t[2] = _))
        : (_ = t[2]);
      var f = _,
        g;
      t[3] === Symbol.for("react.memo_cache_sentinel")
        ? ((g = function () {
            c(null);
          }),
          (t[3] = g))
        : (g = t[3]);
      var h;
      t[4] !== a
        ? ((h = function () {
            return a(s._(/*BTDS*/ "Press spacebar to grab and re-order"));
          }),
          (t[4] = a),
          (t[5] = h))
        : (h = t[5]);
      var y;
      t[6] !== n
        ? ((y = u.jsx(r("CometComponentWithKeyCommands.react"), {
            commandConfigs: f,
            isWrapperFocusable: !0,
            children: n,
          })),
          (t[6] = n),
          (t[7] = y))
        : (y = t[7]);
      var C;
      t[8] !== h || t[9] !== y
        ? ((C = u.jsx(r("FocusWithinHandler.react"), {
            onBlurWithin: g,
            onFocusWithin: h,
            children: y,
          })),
          (t[8] = h),
          (t[9] = y),
          (t[10] = C))
        : (C = t[10]);
      var b;
      return (
        t[11] !== p || t[12] !== C
          ? ((b = u.jsx(r("CometDraggableListKeyboardContext").Provider, {
              value: p,
              children: C,
            })),
            (t[11] = p),
            (t[12] = C),
            (t[13] = b))
          : (b = t[13]),
        b
      );
    }
    l.default = p;
  },
  226,
);
