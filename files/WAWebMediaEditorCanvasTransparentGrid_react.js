__d(
  "WAWebMediaEditorCanvasTransparentGrid.react",
  [
    "ReactKonva",
    "WAWebMediaEditorEnumsColors",
    "WAWebMediaEditorUtilsColor",
    "react",
    "react-compiler-runtime",
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
      var t = o("react-compiler-runtime").c(13),
        n = e.height,
        r = e.ref,
        a = e.width,
        i = p(),
        l;
      (t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((l = function () {
            return {
              hide: function () {
                var e;
                (e = i.current) == null || e.hide();
              },
              show: function () {
                var e;
                (e = i.current) == null || e.show();
              },
            };
          }),
          (t[0] = l))
        : (l = t[0]),
        d(r, l));
      var u;
      t[1] !== n || t[2] !== a
        ? ((u = document.createElement("canvas")),
          (u.width = Math.max(a, 1)),
          (u.height = Math.max(n, 1)),
          (t[1] = n),
          (t[2] = a),
          (t[3] = u))
        : (u = t[3]);
      var m = u,
        h,
        y;
      (t[4] !== n || t[5] !== m || t[6] !== a
        ? ((h = function () {
            var e,
              t = m.getContext("2d");
            t.clearRect(0, 0, m.width, m.height);
            for (
              var r = Math.ceil(a / _), o = Math.ceil(n / _), l = 0;
              l < o;
              l++
            )
              for (var s = 0; s < r; s++) {
                var u = (l + s) % 2 === 0 ? g : f;
                (t.beginPath(),
                  t.rect(s * _, l * _, _, _),
                  (t.fillStyle = u),
                  t.fill());
              }
            (e = i.current) == null ||
              (e = e.getLayer()) == null ||
              e.batchDraw();
          }),
          (y = [m, a, n]),
          (t[4] = n),
          (t[5] = m),
          (t[6] = a),
          (t[7] = h),
          (t[8] = y))
        : ((h = t[7]), (y = t[8])),
        c(h, y));
      var C;
      return (
        t[9] !== n || t[10] !== m || t[11] !== a
          ? ((C = s.jsx(o("ReactKonva").Image, {
              ref: i,
              width: a,
              height: n,
              image: m,
            })),
            (t[9] = n),
            (t[10] = m),
            (t[11] = a),
            (t[12] = C))
          : (C = t[12]),
        C
      );
    }
    l.default = h;
  },
  98,
);
