__d(
  "WAWebMediaEditorCanvasTransparentGrid.react",
  [
    "ReactKonva",
    "WAWebMediaEditorEnumsColors",
    "WAWebMediaEditorUtilsColor",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = e,
      c = u.useEffect,
      d = u.useImperativeHandle,
      m = u.useMemo,
      p = u.useRef,
      _ = 20,
      f = new (o("WAWebMediaEditorUtilsColor").Color)(
        230,
        230,
        230,
      ).toRgbString(),
      g = new (o("WAWebMediaEditorUtilsColor").Color)(
        255,
        255,
        255,
        1,
        o("WAWebMediaEditorEnumsColors").ColorType.WHITE,
      ).toRgbString();
    function h(e) {
      var t = e.height,
        n = e.ref,
        r = e.width,
        a = p();
      d(n, function () {
        return {
          hide: function () {
            var e;
            (e = a.current) == null || e.hide();
          },
          show: function () {
            var e;
            (e = a.current) == null || e.show();
          },
        };
      });
      var i = m(
        function () {
          var e = document.createElement("canvas");
          return ((e.width = Math.max(r, 1)), (e.height = Math.max(t, 1)), e);
        },
        [r, t],
      );
      return (
        c(
          function () {
            var e,
              n = i.getContext("2d");
            n.clearRect(0, 0, i.width, i.height);
            for (
              var o = _, l = Math.ceil(r / o), s = Math.ceil(t / o), u = 0;
              u < s;
              u++
            )
              for (var c = 0; c < l; c++) {
                var d = (u + c) % 2 === 0 ? g : f;
                (n.beginPath(),
                  n.rect(c * o, u * o, o, o),
                  (n.fillStyle = d),
                  n.fill());
              }
            (e = a.current) == null ||
              (e = e.getLayer()) == null ||
              e.batchDraw();
          },
          [i, r, t],
        ),
        s.jsx(o("ReactKonva").Image, { ref: a, width: r, height: t, image: i })
      );
    }
    ((h.displayName = h.name + " [from " + i.id + "]"), (l.default = h));
  },
  98,
);
