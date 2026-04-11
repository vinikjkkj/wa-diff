__d(
  "WAWebMediaEditorCanvasOutline.react",
  [
    "ReactKonva",
    "WAWebMediaConstants",
    "WAWebMediaEditorGeometryRect",
    "lodash",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = e,
      c = u.useImperativeHandle,
      d = u.useRef;
    function m(e) {
      var t = o("react-compiler-runtime").c(14),
        n = e.layer,
        a = e.ref,
        i = d(),
        l = d(),
        u;
      (t[0] !== n
        ? ((u = function () {
            return {
              show: function () {
                var e;
                (e = i.current) == null || e.show();
              },
              hide: function () {
                var e;
                (e = i.current) == null || e.hide();
              },
              getBoundingRect: function () {
                var e = l.current;
                if (e) {
                  var t = e.getClientRect(),
                    o = t.height,
                    a = t.width,
                    i = t.x,
                    s = t.y;
                  return r("WAWebMediaEditorGeometryRect").create({
                    x: i,
                    y: s,
                    width: a,
                    height: o,
                    rotation: n.getRotation(),
                    scale: n.getScale(),
                  });
                }
              },
            };
          }),
          (t[0] = n),
          (t[1] = u))
        : (u = t[1]),
        c(a, u));
      var m;
      t[2] !== n
        ? ((m = r("lodash").flatMap(n.getAllPoints(), p)),
          (t[2] = n),
          (t[3] = m))
        : (m = t[3]);
      var _ = m,
        f;
      t[4] !== n ? ((f = n.getWidth()), (t[4] = n), (t[5] = f)) : (f = t[5]);
      var g;
      t[6] !== n ? ((g = n.getHeight()), (t[6] = n), (t[7] = g)) : (g = t[7]);
      var h;
      t[8] !== _
        ? ((h = s.jsx(o("ReactKonva").Line, {
            ref: l,
            points: _,
            closed: !0,
            fill: "white",
            lineCap: "round",
            lineJoin: "round",
            tension: o("WAWebMediaConstants").MEDIA_EDITOR_OUTLINE_TENSION,
            globalCompositeOperation: "destination-in",
          })),
          (t[8] = _),
          (t[9] = h))
        : (h = t[9]);
      var y;
      return (
        t[10] !== f || t[11] !== g || t[12] !== h
          ? ((y = s.jsx(o("ReactKonva").Group, {
              ref: i,
              width: f,
              height: g,
              visible: !1,
              children: h,
            })),
            (t[10] = f),
            (t[11] = g),
            (t[12] = h),
            (t[13] = y))
          : (y = t[13]),
        y
      );
    }
    function p(e) {
      return [e.getX(), e.getY()];
    }
    var _ = m;
    l.Outline = _;
  },
  98,
);
