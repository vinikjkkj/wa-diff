__d(
  "CometDraggableList.react",
  [
    "CometDraggableListKeyboardFocusGroup.react",
    "CometDraggableListKeyboardProvider.react",
    "react",
    "react-compiler-runtime",
    "stylex",
    "useCometDraggableItems",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u = s || (s = o("react")),
      c = s.useRef,
      d = {
        root: {
          boxSizing: "x9f619",
          paddingTop: "x4p5aij",
          paddingInlineEnd: "x1ccui7m",
          paddingBottom: "x1j85h84",
          paddingInlineStart: "x18pi947",
          position: "x1n2onr6",
          $$css: !0,
        },
      };
    function m(t) {
      var n = o("react-compiler-runtime").c(22),
        a = t.direction,
        i = t.disabled,
        l = t.enableKeyboardInteraction,
        s = t.expanded,
        m = t.items,
        p = t.onReorder,
        _ = t.placeholderXstyle,
        f = t.xstyle,
        g = a === void 0 ? "vertical" : a,
        h = i === void 0 ? !1 : i,
        y = l === void 0 ? !1 : l,
        C = s === void 0 ? !1 : s,
        b = c(null),
        v;
      n[0] !== g ||
      n[1] !== h ||
      n[2] !== y ||
      n[3] !== C ||
      n[4] !== m ||
      n[5] !== p ||
      n[6] !== _
        ? ((v = {
            direction: g,
            disabled: h,
            enableKeyboardInteraction: y,
            expanded: C,
            items: m,
            onReorder: p,
            placeholderXstyle: _,
          }),
          (n[0] = g),
          (n[1] = h),
          (n[2] = y),
          (n[3] = C),
          (n[4] = m),
          (n[5] = p),
          (n[6] = _),
          (n[7] = v))
        : (v = n[7]);
      var S = r("useCometDraggableItems")(v),
        R;
      n[8] !== f
        ? ((R = (e || (e = r("stylex")))(d.root, f)), (n[8] = f), (n[9] = R))
        : (R = n[9]);
      var L = g === "vertical" ? "column" : "row",
        E;
      n[10] !== L
        ? ((E = { display: "flex", flexDirection: L }),
          (n[10] = L),
          (n[11] = E))
        : (E = n[11]);
      var k;
      n[12] !== S || n[13] !== R || n[14] !== E
        ? ((k = u.jsx("div", {
            className: R,
            ref: b,
            role: "list",
            style: E,
            children: S,
          })),
          (n[12] = S),
          (n[13] = R),
          (n[14] = E),
          (n[15] = k))
        : (k = n[15]);
      var I = k,
        T;
      return (
        n[16] !== g || n[17] !== I || n[18] !== y || n[19] !== m || n[20] !== p
          ? ((T = y
              ? u.jsx(r("CometDraggableListKeyboardProvider.react"), {
                  children: u.jsx(
                    r("CometDraggableListKeyboardFocusGroup.react"),
                    { direction: g, items: m, onReorder: p, children: I },
                  ),
                })
              : I),
            (n[16] = g),
            (n[17] = I),
            (n[18] = y),
            (n[19] = m),
            (n[20] = p),
            (n[21] = T))
          : (T = n[21]),
        T
      );
    }
    l.default = m;
  },
  98,
);
