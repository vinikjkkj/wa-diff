__d(
  "CometDraggableItem.react",
  [
    "CometDraggableListItemIndexContext",
    "CometDraggableListKeyboardContext",
    "CometFocusGroupContext",
    "react",
    "react-compiler-runtime",
    "stylex",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u = s || (s = o("react")),
      c = s.useContext,
      d = {
        draggable: {
          WebkitUserDrag: "x1hq9vpg",
          boxSizing: "x9f619",
          cursor: "xv5twrn",
          transitionDuration: "xii2z7h",
          transitionProperty: "x11xpdln",
          transitionTimingFunction: "x19c4wfv",
          userDrag: "x15ore7u",
          userSelect: "x87ps6o",
          willChange: "x1dwv3re",
          $$css: !0,
        },
        draggableFullWidth: { width: "xh8yej3", $$css: !0 },
        draggablePlaceholder: {
          borderTopColor: "x5rjk12",
          borderInlineEndColor: "xu14ctz",
          borderBottomColor: "xht8ovn",
          borderInlineStartColor: "xw13fz0",
          borderStartStartRadius: "x1obq294",
          borderStartEndRadius: "x5a5i1n",
          borderEndEndRadius: "xde0f50",
          borderEndStartRadius: "x15x8krk",
          borderTopStyle: "xlya59e",
          borderInlineEndStyle: "xwy3id5",
          borderBottomStyle: "xpvcztv",
          borderInlineStartStyle: "x11nt7xy",
          borderTopWidth: "x178xt8z",
          borderInlineEndWidth: "x1lun4ml",
          borderBottomWidth: "xso031l",
          borderInlineStartWidth: "xpilrb4",
          marginTop: "x1y332i5",
          marginInlineEnd: "xjn30re",
          marginBottom: "x1jyxor1",
          marginInlineStart: "x1hb08if",
          $$css: !0,
        },
        isDraggingStyle: { willChange: "x1so62im", $$css: !0 },
        keyboardActivated: {
          outlineStyle: "x107h2d7",
          transform: "xjzqdv7",
          transitionDuration: "x1eub6wo",
          transitionTimingFunction: "x18me7xm",
          $$css: !0,
        },
      };
    function m(t) {
      var n = o("react-compiler-runtime").c(23),
        a = t.dragging,
        i = t.expanded,
        l = t.index,
        s = t.item,
        m = t.placeholderXstyle,
        p = t.ref,
        _ = t.targetIndex,
        f = c(r("CometDraggableListKeyboardContext")),
        g = f.keyboardActivatedSourceIndex,
        h = c(r("CometFocusGroupContext")),
        y = h.FocusItem,
        C;
      n[0] !== a ||
      n[1] !== i ||
      n[2] !== l ||
      n[3] !== g ||
      n[4] !== m ||
      n[5] !== _
        ? ((C = (e || (e = r("stylex"))).props(
            d.draggable,
            [_, g].includes(l) && (m != null ? m : d.draggablePlaceholder),
            g === l && d.keyboardActivated,
            i === !0 && d.draggableFullWidth,
            a && d.isDraggingStyle,
          )),
          (n[0] = a),
          (n[1] = i),
          (n[2] = l),
          (n[3] = g),
          (n[4] = m),
          (n[5] = _),
          (n[6] = C))
        : (C = n[6]);
      var b;
      n[7] !== a || n[8] !== l || n[9] !== _
        ? ((b = {
            0: { className: "x9f619" },
            2: { className: "x9f619 x47corl" },
            1: { className: "x9f619 xlshs6z" },
            3: { className: "x9f619 x47corl xlshs6z" },
          }[(!!(a && l !== _) << 1) | ((l === _) << 0)]),
          (n[7] = a),
          (n[8] = l),
          (n[9] = _),
          (n[10] = b))
        : (b = n[10]);
      var v;
      n[11] !== s || n[12] !== b
        ? ((v = u.jsx("div", babelHelpers.extends({}, b, { children: s }))),
          (n[11] = s),
          (n[12] = b),
          (n[13] = v))
        : (v = n[13]);
      var S;
      n[14] !== l || n[15] !== p || n[16] !== C || n[17] !== v
        ? ((S = u.jsx(
            "div",
            babelHelpers.extends({}, C, {
              "data-key": l,
              draggable: !0,
              ref: p,
              role: "listitem",
              children: v,
            }),
          )),
          (n[14] = l),
          (n[15] = p),
          (n[16] = C),
          (n[17] = v),
          (n[18] = S))
        : (S = n[18]);
      var R = S,
        L;
      return (
        n[19] !== y || n[20] !== R || n[21] !== l
          ? ((L = y
              ? u.jsx(r("CometDraggableListItemIndexContext").Provider, {
                  value: l,
                  children: u.jsx(y, { children: R }),
                })
              : R),
            (n[19] = y),
            (n[20] = R),
            (n[21] = l),
            (n[22] = L))
          : (L = n[22]),
        L
      );
    }
    l.default = m;
  },
  98,
);
