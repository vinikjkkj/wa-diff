__d(
  "WAWebMediaEditorCanvasImage.react",
  ["ReactKonva", "WAWebMediaEditorUtilsFilters", "react"],
  function (t, n, r, o, a, i, l) {
    var e = ["composition", "overlay"],
      s,
      u = s || (s = o("react")),
      c = s,
      d = c.useEffect,
      m = c.useState;
    function p(t) {
      var n = t.layer,
        r = t.activeFilter,
        a =
          r === void 0 ? o("WAWebMediaEditorUtilsFilters").FilterType.NONE : r,
        i = n.getImage(),
        l = m(null),
        s = l[0],
        c = l[1];
      d(
        function () {
          s == null || s.cache();
        },
        [i, s],
      );
      var p = o("WAWebMediaEditorUtilsFilters").getKonvaFilters(a),
        _ = o("WAWebMediaEditorUtilsFilters").getFilterPresets(a),
        f = _.composition,
        g = _.overlay,
        h = babelHelpers.objectWithoutPropertiesLoose(_, e);
      return u.jsxs(o("ReactKonva").Group, {
        width: n.getWidth(),
        height: n.getHeight(),
        children: [
          u.jsx(
            o("ReactKonva").Image,
            babelHelpers.extends(
              {
                ref: c,
                width: n.getWidth(),
                height: n.getHeight(),
                image: n.getImage(),
                filters: p,
              },
              h,
            ),
          ),
          u.jsx(o("ReactKonva").Rect, {
            width: n.getWidth(),
            height: n.getHeight(),
            fill: g,
            globalCompositeOperation: f,
          }),
        ],
      });
    }
    ((p.displayName = p.name + " [from " + i.id + "]"), (l.default = p));
  },
  98,
);
