__d(
  "WebBloksCanvasUtils",
  ["WebBloksErrors", "WebBloksUtils"],
  function (t, n, r, o, a, i, l) {
    function e(e, t, n) {
      switch (e.styleId) {
        case "bk.types.CanvasShadow": {
          var r = f(e.get("dx"), t),
            a = g(e.get("dy"), t),
            i = f(e.get("radius"), t),
            l = o("WebBloksUtils").getRGBColorWithTheme(
              e.get("themed_color"),
              n,
            );
          ((t.shadowBlur = i * 2),
            (t.shadowOffsetX = r * 2),
            (t.shadowOffsetY = a * 2),
            (t.shadowColor = l));
          break;
        }
        default:
          throw new (o("WebBloksErrors").WebBloksError)(
            e.styleId +
              " is not yet implemented. Add missing signature in `bk.component.Canvas`",
          );
      }
    }
    function s(e, t, n) {
      switch (e.styleId) {
        case "bk.types.CanvasShadingColor": {
          var r = o("WebBloksUtils").getRGBColorWithTheme(
            e.get("themed_color"),
            n,
          );
          ((t.fillStyle = r), (t.strokeStyle = r));
          break;
        }
        case "bk.types.CanvasShadingGradientLinear": {
          var a = d(e, t, n);
          ((t.fillStyle = a), (t.strokeStyle = a));
          break;
        }
        case "bk.types.CanvasShadingGradientRadial": {
          var i = m(e, t, n);
          ((t.fillStyle = i), (t.strokeStyle = i));
          break;
        }
        default:
          throw new (o("WebBloksErrors").WebBloksError)(
            e.styleId +
              " is not yet implemented. Add missing signature in `bk.component.Canvas`",
          );
      }
    }
    function u(e, t) {
      switch (e.styleId) {
        case "bk.types.CanvasBlendingMode": {
          t.globalCompositeOperation = c(e.get("mode"));
          break;
        }
        default:
          throw new (o("WebBloksErrors").WebBloksError)(
            e.styleId +
              " is not yet implemented. Add missing signature in `bk.component.Canvas`",
          );
      }
    }
    function c(e) {
      switch (e) {
        case "dst_atop":
          return "destination-atop";
        case "dst_in":
          return "destination-in";
        case "dst_out":
          return "destination-out";
        case "dst_over":
          return "destination-over";
        case "src":
        case "src_over":
          return "source-over";
        case "src_atop":
          return "source-atop";
        case "src_in":
          return "source-in";
        case "src_out":
          return "source-out";
        default:
          return e;
      }
    }
    function d(e, t, n) {
      for (
        var r = f(e.get("start_x"), t),
          a = g(e.get("start_y"), t),
          i = f(e.get("end_x"), t),
          l = g(e.get("end_y"), t),
          s = t.createLinearGradient(r, a, i, l),
          u = e.get("gradient"),
          c = u.get("positions"),
          d = u.get("themed_colors"),
          m = 0;
        m < c.length;
        m++
      ) {
        var p = c[m],
          _ = d[m];
        s.addColorStop(p, o("WebBloksUtils").getRGBColorWithTheme(_, n));
      }
      return s;
    }
    function m(e, t, n) {
      for (
        var r = f(e.get("center_x"), t),
          a = g(e.get("center_y"), t),
          i = parseFloat(e.get("radius")),
          l = t.createRadialGradient(r, a, 0, r, a, i),
          s = e.get("gradient"),
          u = s.get("positions"),
          c = s.get("themed_colors"),
          d = 0;
        d < u.length;
        d++
      ) {
        var m = u[d],
          p = c[d];
        l.addColorStop(m, o("WebBloksUtils").getRGBColorWithTheme(p, n));
      }
      return l;
    }
    function p(e, t) {
      var n,
        r = document.createElement("canvas");
      return (
        (r.style.position = "absolute"),
        (r.style.top = "0"),
        (r.style.visibility = "hidden"),
        (n = document.body) == null || n.appendChild(r),
        (r.width = e),
        (r.height = t),
        r
      );
    }
    function _(e, t) {
      return t != null && typeof e == "string" && e.includes("%")
        ? (parseFloat(e) / 100) * t
        : parseFloat(e);
    }
    function f(e, t) {
      return _(e, t.canvas.clientWidth);
    }
    function g(e, t) {
      return _(e, t.canvas.clientHeight);
    }
    ((l.drawShadowToCanvas = e),
      (l.drawShadingToCanvas = s),
      (l.drawBlendingModeToCanvas = u),
      (l.getCompositeOperation = c),
      (l.createLinearGradient = d),
      (l.createRadialGradient = m),
      (l.createSecondaryCanvasElement = p),
      (l.getCanvasSizePixelValue = _),
      (l.getCanvasPixelValRelativeToWidth = f),
      (l.getCanvasPixelValRelativeToHeight = g));
  },
  98,
);
