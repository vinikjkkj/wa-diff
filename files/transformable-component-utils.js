__d(
  "transformable-component-utils",
  ["err"],
  function (t, n, r, o, a, i, l) {
    var e = ["id"],
      s = function (t, n, r) {
        return babelHelpers.extends({}, t, {
          left: t.left + (r !== "vertical" ? n.dx : 0),
          top: t.top + (r !== "horizontal" ? n.dy : 0),
        });
      },
      u = function (t, n) {
        var e = t.left,
          r = t.top,
          o = n.height,
          a = n.left,
          i = n.top,
          l = n.width;
        return e >= a && e <= a + l && r >= i && r <= i + o;
      },
      c = function (t) {
        switch (t) {
          case "n":
          case "s":
            return "ns-resize";
          case "e":
          case "w":
            return "ew-resize";
          case "nw":
          case "se":
            return "nwse-resize";
          case "ne":
          case "sw":
            return "nesw-resize";
          default:
            return "default";
        }
      },
      d = 11,
      m = 5,
      p = ["n", "ne", "e", "se", "s", "sw", "w", "nw"],
      _ = function (t) {
        return "__<<<" + t + "-resize>>>";
      },
      f = function (t, n) {
        var e,
          r = (d - 1) / 2,
          o = r + 1,
          a = t.top - r,
          i = t.top + t.height - o,
          l = (a + i) / 2,
          s = t.left - r,
          u = t.left + t.width - o,
          c = (s + u) / 2,
          m = [
            [a, c, "n"],
            [a, u, "ne"],
            [l, u, "e"],
            [i, u, "se"],
            [i, c, "s"],
            [i, s, "sw"],
            [l, s, "w"],
            [a, s, "nw"],
          ];
        n.cornersOnly &&
          (m = m.filter(function (e) {
            var t = e[0],
              n = e[1],
              r = e[2];
            return r.length === 2;
          }));
        var p = Math.max(d, (e = n.diameter) != null ? e : 0);
        return m.map(function (e) {
          var n = e[0],
            r = e[1],
            o = e[2];
          return { id: "" + t.id + _(o), top: n, left: r, width: p, height: p };
        });
      },
      g = function (t) {
        return p.find(function (e) {
          return t.endsWith(_(e));
        });
      },
      h = function (t) {
        return Object.fromEntries(
          t.map(function (e) {
            var t = g(e.id);
            if (!t)
              throw r("err")(
                "This Transformable is not a Resize Handle: " +
                  JSON.stringify(e),
              );
            return [t, e];
          }),
        );
      },
      y = function (n) {
        var t = n.id,
          r = babelHelpers.objectWithoutPropertiesLoose(n, e);
        return r;
      },
      C = function (t, n, r) {
        var e = r.dx,
          o = r.dy,
          a = 30,
          i = babelHelpers.extends({}, t),
          l = function (t, n) {
            return n.includes(t) || t.includes(n);
          },
          s = ["w", "e"].find(function (e) {
            return l(e, n);
          }),
          u = ["n", "s"].find(function (e) {
            return l(e, n);
          }),
          c =
            t.height <= a && ((u === "n" && o > 0) || (u === "s" && o < 0))
              ? 0
              : o,
          d =
            t.width <= a && ((s === "w" && e > 0) || (s === "e" && e < 0))
              ? 0
              : e;
        return (
          (i.top += u === "n" ? c : 0),
          (i.left += s === "w" ? d : 0),
          (i.height += u === "n" ? -c : u === "s" ? c : 0),
          (i.width += s === "w" ? -d : s === "e" ? d : 0),
          i
        );
      };
    ((l.applyTranslation = s),
      (l.isWithinTransformable = u),
      (l.getResizeCursor = c),
      (l.RESIZE_HANDLE_SIZE = m),
      (l.getResizeHandleTransformables = f),
      (l.getResizeDirFromId = g),
      (l.getResizeTransoformableByDir = h),
      (l.getStyle = y),
      (l.resize = C));
  },
  98,
);
