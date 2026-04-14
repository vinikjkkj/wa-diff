__d(
  "WAWebMediaEditorCanvasOutline.react",
  [
    "ReactKonva",
    "WAWebMediaConstants",
    "WAWebMediaEditorGeometryRect",
    "lodash",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = e,
      c = u.useImperativeHandle,
      d = u.useRef;
    function m(e) {
      var t = e.layer,
        n = e.ref,
        a = d(),
        i = d();
      c(n, function () {
        return {
          show: function () {
            var e;
            (e = a.current) == null || e.show();
          },
          hide: function () {
            var e;
            (e = a.current) == null || e.hide();
          },
          getBoundingRect: function () {
            var e = i.current;
            if (e) {
              var n = e.getClientRect(),
                o = n.height,
                a = n.width,
                l = n.x,
                s = n.y;
              return r("WAWebMediaEditorGeometryRect").create({
                x: l,
                y: s,
                width: a,
                height: o,
                rotation: t.getRotation(),
                scale: t.getScale(),
              });
            }
          },
        };
      });
      var l = r("lodash").flatMap(t.getAllPoints(), function (e) {
        return [e.getX(), e.getY()];
      });
      return s.jsx(o("ReactKonva").Group, {
        ref: a,
        width: t.getWidth(),
        height: t.getHeight(),
        visible: !1,
        children: s.jsx(o("ReactKonva").Line, {
          ref: i,
          points: l,
          closed: !0,
          fill: "white",
          lineCap: "round",
          lineJoin: "round",
          tension: o("WAWebMediaConstants").MEDIA_EDITOR_OUTLINE_TENSION,
          globalCompositeOperation: "destination-in",
        }),
      });
    }
    m.displayName = m.name + " [from " + i.id + "]";
    var p = m;
    l.Outline = p;
  },
  98,
);
