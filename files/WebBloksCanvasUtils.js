__d(
  "WebBloksCanvasUtils",
  ["WebBloksCanvasMinificationKeys", "WebBloksErrors", "WebBloksUtils"],
  function (t, n, r, o, a, i, l) {
    var e = "\u40E2",
      s = "\u40CF",
      u = "\u40E8",
      c = "\u40E7",
      d = "\u40D3";
    function m(e, t, n) {
      switch (e.styleId) {
        case d:
        case "bk.types.CanvasShadow": {
          var r,
            a = b(
              e.get((r = o("WebBloksCanvasMinificationKeys")).CANVAS_SHADOW_DX),
              t,
            ),
            i = v(e.get(r.CANVAS_SHADOW_DY), t),
            l = b(e.get(r.CANVAS_SHADOW_RADIUS), t),
            s = o("WebBloksUtils").getRGBColorWithTheme(
              e.get(r.CANVAS_SHADOW_THEMED_COLOR),
              n,
            );
          ((t.shadowBlur = l * 2),
            (t.shadowOffsetX = a * 2),
            (t.shadowOffsetY = i * 2),
            (t.shadowColor = s));
          break;
        }
        default:
          throw new (o("WebBloksErrors").WebBloksError)(
            e.styleId +
              " is not yet implemented. Add missing signature in `bk.component.Canvas`",
          );
      }
    }
    function p(e, t, n) {
      switch (e.styleId) {
        case s:
        case "bk.types.CanvasShadingColor": {
          var r = o("WebBloksUtils").getRGBColorWithTheme(
            e.get(
              o("WebBloksCanvasMinificationKeys")
                .CANVAS_SHADING_COLOR_THEMED_COLOR,
            ),
            n,
          );
          ((t.fillStyle = r), (t.strokeStyle = r));
          break;
        }
        case u:
        case "bk.types.CanvasShadingGradientLinear": {
          var a = g(e, t, n);
          ((t.fillStyle = a), (t.strokeStyle = a));
          break;
        }
        case c:
        case "bk.types.CanvasShadingGradientRadial": {
          var i = h(e, t, n);
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
    function _(t, n) {
      switch (t.styleId) {
        case e:
        case "bk.types.CanvasBlendingMode": {
          n.globalCompositeOperation = f(
            t.get(
              o("WebBloksCanvasMinificationKeys").CANVAS_BLENDING_MODE_MODE,
            ),
          );
          break;
        }
        default:
          throw new (o("WebBloksErrors").WebBloksError)(
            t.styleId +
              " is not yet implemented. Add missing signature in `bk.component.Canvas`",
          );
      }
    }
    function f(e) {
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
    function g(e, t, n) {
      for (
        var r,
          a = b(
            e.get(
              (r = o("WebBloksCanvasMinificationKeys"))
                .CANVAS_SHADING_LINEAR_START_X,
            ),
            t,
          ),
          i = v(e.get(r.CANVAS_SHADING_LINEAR_START_Y), t),
          l = b(e.get(r.CANVAS_SHADING_LINEAR_END_X), t),
          s = v(e.get(r.CANVAS_SHADING_LINEAR_END_Y), t),
          u = t.createLinearGradient(a, i, l, s),
          c = e.get(r.CANVAS_SHADING_LINEAR_GRADIENT),
          d = c.get(r.CANVAS_GRADIENT_POSITIONS),
          m = c.get(r.CANVAS_GRADIENT_THEMED_COLORS),
          p = 0;
        p < d.length;
        p++
      ) {
        var _ = d[p],
          f = m[p];
        u.addColorStop(_, o("WebBloksUtils").getRGBColorWithTheme(f, n));
      }
      return u;
    }
    function h(e, t, n) {
      for (
        var r,
          a = b(
            e.get(
              (r = o("WebBloksCanvasMinificationKeys"))
                .CANVAS_SHADING_RADIAL_CENTER_X,
            ),
            t,
          ),
          i = v(e.get(r.CANVAS_SHADING_RADIAL_CENTER_Y), t),
          l = parseFloat(e.get(r.CANVAS_SHADING_RADIAL_RADIUS)),
          s = t.createRadialGradient(a, i, 0, a, i, l),
          u = e.get(r.CANVAS_SHADING_RADIAL_GRADIENT),
          c = u.get(r.CANVAS_GRADIENT_POSITIONS),
          d = u.get(r.CANVAS_GRADIENT_THEMED_COLORS),
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
    function y(e, t) {
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
    function C(e, t) {
      return t != null && typeof e == "string" && e.includes("%")
        ? (parseFloat(e) / 100) * t
        : parseFloat(e);
    }
    function b(e, t) {
      return C(e, t.canvas.clientWidth);
    }
    function v(e, t) {
      return C(e, t.canvas.clientHeight);
    }
    ((l.drawShadowToCanvas = m),
      (l.drawShadingToCanvas = p),
      (l.drawBlendingModeToCanvas = _),
      (l.getCompositeOperation = f),
      (l.createLinearGradient = g),
      (l.createRadialGradient = h),
      (l.createSecondaryCanvasElement = y),
      (l.getCanvasSizePixelValue = C),
      (l.getCanvasPixelValRelativeToWidth = b),
      (l.getCanvasPixelValRelativeToHeight = v));
  },
  98,
);
