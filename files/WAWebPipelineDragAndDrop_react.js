__d(
  "WAWebPipelineDragAndDrop.react",
  [
    "react",
    "react-compiler-runtime",
    "react-dnd-cjs",
    "react-dnd-html5-backend-cjs",
    "stylex",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = s || (s = o("react")),
      c = s.useRef,
      d = "pipeline-card",
      m = { dropTargetActive: { opacity: "x1ks1olk", $$css: !0 } };
    function p(e) {
      var t = o("react-compiler-runtime").c(2),
        n = e.children,
        a;
      return (
        t[0] !== n
          ? ((a = u.jsx(o("react-dnd-cjs").DndProvider, {
              backend: r("react-dnd-html5-backend-cjs").default,
              children: n,
            })),
            (t[0] = n),
            (t[1] = a))
          : (a = t[1]),
        a
      );
    }
    function _(t) {
      var n = o("react-compiler-runtime").c(12),
        a = t.children,
        i = t.onCardDrop,
        l = t.stage,
        s = t.xstyle,
        p = c(null),
        _;
      n[0] !== i || n[1] !== l
        ? ((_ = {
            accept: d,
            drop: function (t) {
              t.fromStage !== l && i(t.customerId, t.fromStage, l);
            },
            collect: f,
          }),
          (n[0] = i),
          (n[1] = l),
          (n[2] = _))
        : (_ = n[2]);
      var g = o("react-dnd-cjs").useDrop(_),
        h = g[0],
        y = g[1],
        C = h.isOver,
        b;
      n[3] !== y ? ((b = y(p)), (n[3] = y), (n[4] = b)) : (b = n[4]);
      var v;
      n[5] !== C || n[6] !== s
        ? ((v = (e || (e = r("stylex"))).props(s, C && m.dropTargetActive)),
          (n[5] = C),
          (n[6] = s),
          (n[7] = v))
        : (v = n[7]);
      var S;
      return (
        n[8] !== a || n[9] !== b || n[10] !== v
          ? ((S = u.jsx(
              "div",
              babelHelpers.extends({ ref: b }, v, { children: a }),
            )),
            (n[8] = a),
            (n[9] = b),
            (n[10] = v),
            (n[11] = S))
          : (S = n[11]),
        S
      );
    }
    function f(e) {
      return { isOver: e.isOver() };
    }
    function g(e) {
      var t = o("react-compiler-runtime").c(13),
        n = e.children,
        r = e.customerId,
        a = e.stage,
        i = c(null),
        l;
      t[0] !== r || t[1] !== a
        ? ((l = { type: d, customerId: r, fromStage: a }),
          (t[0] = r),
          (t[1] = a),
          (t[2] = l))
        : (l = t[2]);
      var s = l,
        m;
      t[3] !== s
        ? ((m = { item: s, collect: h }), (t[3] = s), (t[4] = m))
        : (m = t[4]);
      var p = o("react-dnd-cjs").useDrag(m),
        _ = p[0],
        f = p[1],
        g = _.isDragging,
        y;
      t[5] !== f ? ((y = f(i)), (t[5] = f), (t[6] = y)) : (y = t[6]);
      var C;
      t[7] !== g
        ? ((C = { 0: {}, 1: { className: "xg01cxk" } }[!!g << 0]),
          (t[7] = g),
          (t[8] = C))
        : (C = t[8]);
      var b;
      return (
        t[9] !== n || t[10] !== y || t[11] !== C
          ? ((b = u.jsx(
              "div",
              babelHelpers.extends({ ref: y }, C, { children: n }),
            )),
            (t[9] = n),
            (t[10] = y),
            (t[11] = C),
            (t[12] = b))
          : (b = t[12]),
        b
      );
    }
    function h(e) {
      return { isDragging: e.isDragging() };
    }
    ((l.PipelineDragAndDropWrapper = p),
      (l.PipelineDroppableColumn = _),
      (l.PipelineDraggableCard = g));
  },
  98,
);
