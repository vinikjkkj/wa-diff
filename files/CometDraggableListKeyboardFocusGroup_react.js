__d(
  "CometDraggableListKeyboardFocusGroup.react",
  [
    "CometDraggableListKeyboardContext",
    "CometDraggableListUtils",
    "CometFocusGroup.react",
    "react",
    "react-compiler-runtime",
    "stylex",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u = s || (s = o("react")),
      c = s.useContext;
    function d(t) {
      var n = o("react-compiler-runtime").c(11),
        a = t.children,
        i = t.direction,
        l = t.items,
        s = t.onReorder,
        d = c(r("CometDraggableListKeyboardContext")),
        m = d.keyboardActivatedSourceIndex,
        p = d.setKeyboardActivatedSourceIndex,
        _;
      n[0] !== l || n[1] !== m || n[2] !== s || n[3] !== p
        ? ((_ = function (t) {
            if (m != null) {
              var e = o(
                "CometDraggableListUtils",
              ).getTargetIndexByNavigationType(l, m, t.type);
              e !== m &&
                (s(o("CometDraggableListUtils").reorderList(l, m, e), m, e),
                p(e));
            }
          }),
          (n[0] = l),
          (n[1] = m),
          (n[2] = s),
          (n[3] = p),
          (n[4] = _))
        : (_ = n[4]);
      var f;
      n[5] !== a
        ? ((f = function (n) {
            return u.jsx(
              "div",
              babelHelpers.extends({}, (e || (e = r("stylex"))).props(n), {
                children: a,
              }),
            );
          }),
          (n[5] = a),
          (n[6] = f))
        : (f = n[6]);
      var g;
      return (
        n[7] !== i || n[8] !== _ || n[9] !== f
          ? ((g = u.jsx(r("CometFocusGroup.react"), {
              onNavigate: _,
              orientation: i,
              children: f,
            })),
            (n[7] = i),
            (n[8] = _),
            (n[9] = f),
            (n[10] = g))
          : (g = n[10]),
        g
      );
    }
    l.default = d;
  },
  98,
);
