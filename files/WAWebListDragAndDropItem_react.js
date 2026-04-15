__d(
  "WAWebListDragAndDropItem.react",
  [
    "WAWebListUseDragAndAutoScrollForSafari",
    "WAWebUA",
    "react",
    "react-compiler-runtime",
    "react-dnd-cjs",
    "react-dnd-html5-backend-cjs",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = e,
      c = u.createContext,
      d = u.memo,
      m = u.useContext,
      p = u.useRef,
      _ = "item",
      f = c(o("WAWebListUseDragAndAutoScrollForSafari").EMPTY_SCROLL_EVENTS);
    function g(e) {
      var t = e.children,
        n = e.index,
        r = e.onFinalDrop,
        a = e.onMove,
        i = p(null),
        l = m(f),
        u = l.addDragScroll,
        c = l.removeDragScroll,
        d = o("react-dnd-cjs").useDrop({
          accept: _,
          collect: function (t) {
            return { handlerId: t.getHandlerId() };
          },
          hover: function (t, r) {
            var e;
            if (i.current) {
              var o = t.index,
                l = n;
              if (o !== l) {
                var s =
                    (e = i.current) == null
                      ? void 0
                      : e.getBoundingClientRect(),
                  u = (s.bottom - s.top) / 2,
                  c = r.getClientOffset(),
                  d = c.y - s.top;
                (o < l && d < u) ||
                  (o > l && d > u) ||
                  (a(o, l), (t.index = l));
              }
            }
          },
        }),
        g = d[0].handlerId,
        h = d[1],
        y = { index: n, type: _ },
        C = o("react-dnd-cjs").useDrag({
          item: y,
          begin: function () {
            return (u == null || u(), y);
          },
          end: function () {
            (c == null || c(), r == null || r());
          },
          collect: function (t) {
            return { handlerId: t.getHandlerId(), isDragging: t.isDragging() };
          },
        }),
        b = C[0].isDragging,
        v = C[1];
      return s.jsx(
        "div",
        babelHelpers.extends(
          { ref: v(h(i)) },
          { 0: { className: "xv5twrn" }, 1: { className: "xv5twrn xg01cxk" } }[
            !!b << 0
          ],
          { "data-handler-id": g, children: t },
        ),
      );
    }
    g.displayName = g.name + " [from " + i.id + "]";
    var h = d(g);
    function y(e) {
      var t = o("react-compiler-runtime").c(5),
        n = e.children,
        a = e.containerRef,
        i = o(
          "WAWebListUseDragAndAutoScrollForSafari",
        ).useDragAndAutoScrollForSafari(a),
        l;
      t[0] !== n
        ? ((l = s.jsx(o("react-dnd-cjs").DndProvider, {
            backend: r("react-dnd-html5-backend-cjs").default,
            children: n,
          })),
          (t[0] = n),
          (t[1] = l))
        : (l = t[1]);
      var u;
      return (
        t[2] !== i || t[3] !== l
          ? ((u = s.jsx(f.Provider, { value: i, children: l })),
            (t[2] = i),
            (t[3] = l),
            (t[4] = u))
          : (u = t[4]),
        u
      );
    }
    function C(e) {
      var t = o("react-compiler-runtime").c(5),
        n = e.children,
        a = e.containerRef;
      if (o("WAWebUA").UA.isSafari && a) {
        var i;
        return (
          t[0] !== n || t[1] !== a
            ? ((i = s.jsx(y, { containerRef: a, children: n })),
              (t[0] = n),
              (t[1] = a),
              (t[2] = i))
            : (i = t[2]),
          i
        );
      }
      var l;
      return (
        t[3] !== n
          ? ((l = s.jsx(f.Provider, {
              value: o("WAWebListUseDragAndAutoScrollForSafari")
                .EMPTY_SCROLL_EVENTS,
              children: s.jsx(o("react-dnd-cjs").DndProvider, {
                backend: r("react-dnd-html5-backend-cjs").default,
                children: n,
              }),
            })),
            (t[3] = n),
            (t[4] = l))
          : (l = t[4]),
        l
      );
    }
    ((l.DragAndDropItem = h), (l.DragAndDropWrapper = C));
  },
  98,
);
