__d(
  "WAWebListDragAndDropItem.react",
  [
    "WAWebListUseDragAndAutoScrollForSafari",
    "WAWebUA",
    "react",
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
      var t = e.children,
        n = e.containerRef,
        a = o(
          "WAWebListUseDragAndAutoScrollForSafari",
        ).useDragAndAutoScrollForSafari(n);
      return s.jsx(f.Provider, {
        value: a,
        children: s.jsx(o("react-dnd-cjs").DndProvider, {
          backend: r("react-dnd-html5-backend-cjs").default,
          children: t,
        }),
      });
    }
    y.displayName = y.name + " [from " + i.id + "]";
    function C(e) {
      var t = e.children,
        n = e.containerRef;
      return o("WAWebUA").UA.isSafari && n
        ? s.jsx(y, { containerRef: n, children: t })
        : s.jsx(f.Provider, {
            value: o("WAWebListUseDragAndAutoScrollForSafari")
              .EMPTY_SCROLL_EVENTS,
            children: s.jsx(o("react-dnd-cjs").DndProvider, {
              backend: r("react-dnd-html5-backend-cjs").default,
              children: t,
            }),
          });
    }
    ((C.displayName = C.name + " [from " + i.id + "]"),
      (l.DragAndDropItem = h),
      (l.DragAndDropWrapper = C));
  },
  98,
);
