__d(
  "CometDraggableListItemKeyboardHandler.react",
  [
    "fbt",
    "CometDraggableListItemIndexContext",
    "CometDraggableListKeyboardContext",
    "CometPressable.react",
    "react",
    "react-compiler-runtime",
    "useTriggerAccessibilityAlert",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u = e || (e = o("react")),
      c = e.useContext,
      d = {
        root: {
          cursor: "xv5twrn",
          outline: "x1a2a7pz",
          width: "xh8yej3",
          $$css: !0,
        },
        whenFocused: { boxShadow: "x1gnnqk1 xpx8ijz xq7l91r", $$css: !0 },
      };
    function m(e) {
      var t = o("react-compiler-runtime").c(12),
        n = e.children,
        a = e.xstyle,
        i = c(r("CometDraggableListKeyboardContext")),
        l = i.keyboardActivatedSourceIndex,
        m = i.setKeyboardActivatedSourceIndex,
        p = c(r("CometDraggableListItemIndexContext")),
        _ = r("useTriggerAccessibilityAlert")(),
        f;
      t[0] !== p || t[1] !== l || t[2] !== m || t[3] !== _
        ? ((f = function (t) {
            t.type === "keydown" &&
              (l != null
                ? (m(null), _(s._(/*BTDS*/ "Item has been released")))
                : m(p));
          }),
          (t[0] = p),
          (t[1] = l),
          (t[2] = m),
          (t[3] = _),
          (t[4] = f))
        : (f = t[4]);
      var g = l == null && d.whenFocused,
        h;
      t[5] !== g || t[6] !== a
        ? ((h = [d.root, g, a]), (t[5] = g), (t[6] = a), (t[7] = h))
        : (h = t[7]);
      var y;
      return (
        t[8] !== n || t[9] !== f || t[10] !== h
          ? ((y = u.jsx(r("CometPressable.react"), {
              onPress: f,
              overlayDisabled: !0,
              suppressFocusRing: !0,
              xstyle: h,
              children: n,
            })),
            (t[8] = n),
            (t[9] = f),
            (t[10] = h),
            (t[11] = y))
          : (y = t[11]),
        y
      );
    }
    l.default = m;
  },
  226,
);
