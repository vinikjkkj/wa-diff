__d(
  "WAWebPipelineDragAndDrop.react",
  ["react", "react-dnd-cjs", "react-dnd-html5-backend-cjs", "stylex"],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = s || (s = o("react")),
      c = s.useRef,
      d = "pipeline-card",
      m = { dropTargetActive: { opacity: "x1ks1olk", $$css: !0 } };
    function p(e) {
      var t = e.children;
      return u.jsx(o("react-dnd-cjs").DndProvider, {
        backend: r("react-dnd-html5-backend-cjs").default,
        children: t,
      });
    }
    p.displayName = p.name + " [from " + i.id + "]";
    function _(t) {
      var n = t.children,
        a = t.onCardDrop,
        i = t.stage,
        l = t.xstyle,
        s = c(null),
        p = o("react-dnd-cjs").useDrop({
          accept: d,
          drop: function (t) {
            t.fromStage !== i && a(t.customerId, t.fromStage, i);
          },
          collect: function (t) {
            return { isOver: t.isOver() };
          },
        }),
        _ = p[0].isOver,
        f = p[1];
      return u.jsx(
        "div",
        babelHelpers.extends(
          { ref: f(s) },
          (e || (e = r("stylex"))).props(l, _ && m.dropTargetActive),
          { children: n },
        ),
      );
    }
    _.displayName = _.name + " [from " + i.id + "]";
    function f(e) {
      var t = e.children,
        n = e.customerId,
        r = e.stage,
        a = c(null),
        i = { type: d, customerId: n, fromStage: r },
        l = o("react-dnd-cjs").useDrag({
          item: i,
          collect: function (t) {
            return { isDragging: t.isDragging() };
          },
        }),
        s = l[0].isDragging,
        m = l[1];
      return u.jsx(
        "div",
        babelHelpers.extends(
          { ref: m(a) },
          { 0: {}, 1: { className: "xg01cxk" } }[!!s << 0],
          { children: t },
        ),
      );
    }
    ((f.displayName = f.name + " [from " + i.id + "]"),
      (l.PipelineDragAndDropWrapper = p),
      (l.PipelineDroppableColumn = _),
      (l.PipelineDraggableCard = f));
  },
  98,
);
