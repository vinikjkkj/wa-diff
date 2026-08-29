__d(
  "WebBloksCanvasDrawToContext",
  ["WebBloksCanvasUtils", "WebBloksErrors"],
  function (t, n, r, o, a, i, l) {
    function e(t, n, r) {
      switch (t.styleId) {
        case "bk.types.CanvasGroup": {
          var a = t.getSubNode("transform");
          a != null && d(a, n, r);
          var i = t.get("clip");
          i != null && (e(i, n, r), n.clip());
          var l = o("WebBloksCanvasUtils").getCanvasPixelValRelativeToWidth(
              t.get("width"),
              n,
            ),
            m = o("WebBloksCanvasUtils").getCanvasPixelValRelativeToHeight(
              t.get("height"),
              n,
            );
          if (l > 0 && m > 0) {
            var p = o("WebBloksCanvasUtils").createSecondaryCanvasElement(l, m),
              _ = p.getContext("2d");
            (d(t, _, r), n.drawImage(p, 0, 0), p.remove());
          } else d(t, n, r);
          break;
        }
        case "bk.types.CanvasLayer": {
          var f = t.getSubNode("transform");
          f != null && d(f, n, r);
          var g = t.get("blending_mode");
          g != null && o("WebBloksCanvasUtils").drawBlendingModeToCanvas(g, n);
          var h = t.get("clip");
          h != null && (e(h, n, r), n.clip());
          var y = t.get("alpha");
          y != null && (n.globalAlpha = parseFloat(y));
          var C = o("WebBloksCanvasUtils").getCanvasPixelValRelativeToWidth(
              t.get("width"),
              n,
            ),
            b = o("WebBloksCanvasUtils").getCanvasPixelValRelativeToHeight(
              t.get("height"),
              n,
            );
          if (C > 0 && b > 0) {
            var v = o("WebBloksCanvasUtils").createSecondaryCanvasElement(C, b),
              S = v.getContext("2d");
            (d(t, S, r), n.drawImage(v, 0, 0), v.remove());
          } else d(t, n, r);
          break;
        }
        case "bk.types.CanvasTransform": {
          var R = t.get("a"),
            L = t.get("b"),
            E = t.get("c"),
            k = t.get("d"),
            I = t.get("tx"),
            T = t.get("ty");
          if (
            R != null &&
            L != null &&
            E != null &&
            k != null &&
            I != null &&
            T != null
          ) {
            var D;
            n.setTransform(
              (D = o("WebBloksCanvasUtils")).getCanvasPixelValRelativeToWidth(
                R,
                n,
              ),
              D.getCanvasPixelValRelativeToHeight(L, n),
              D.getCanvasPixelValRelativeToWidth(E, n),
              D.getCanvasPixelValRelativeToHeight(k, n),
              D.getCanvasPixelValRelativeToWidth(I, n),
              D.getCanvasPixelValRelativeToHeight(T, n),
            );
          }
          d(t, n, r);
          break;
        }
        case "bk.types.CanvasFill": {
          var x = t.getSubNode("shape"),
            $ = t.getSubNode("shading"),
            P = t.getSubNode("shadow"),
            N = t.getSubNode("blending_mode");
          (x != null && e(x, n, r),
            $ != null && o("WebBloksCanvasUtils").drawShadingToCanvas($, n, r),
            N != null &&
              o("WebBloksCanvasUtils").drawBlendingModeToCanvas(N, n),
            P != null && o("WebBloksCanvasUtils").drawShadowToCanvas(P, n, r),
            n.fill());
          break;
        }
        case "bk.types.CanvasPath": {
          (n.beginPath(), d(t, n, r));
          break;
        }
        case "bk.types.CanvasPathAdd":
        case "bk.types.CanvasPathArc":
        case "bk.types.CanvasPathCircle":
        case "bk.types.CanvasPathClose":
        case "bk.types.CanvasPathCubicTo":
        case "bk.types.CanvasPathEllipse":
        case "bk.types.CanvasPathLineTo":
        case "bk.types.CanvasPathMoveTo":
        case "bk.types.CanvasPathQuadTo":
        case "bk.types.CanvasPathRect": {
          u(t, n, r);
          break;
        }
        case "bk.types.CanvasShapeCircle":
        case "bk.types.CanvasShapeLine":
        case "bk.types.CanvasShapeArc":
        case "bk.types.CanvasShapeRect":
        case "bk.types.CanvasShapeEllipse": {
          s(t, n);
          break;
        }
        case "bk.types.CanvasTransformInverseV2":
        case "bk.types.CanvasTransformRotate":
        case "bk.types.CanvasTransformScale":
        case "bk.types.CanvasTransformSkew":
        case "bk.types.CanvasTransformSkewV2":
        case "bk.types.CanvasTransformTranslate": {
          c(t, n);
          break;
        }
        case "bk.types.CanvasStroke": {
          n.beginPath();
          var M = t.get("dash_lengths");
          if ((M != null && n.setLineDash(M.map(parseFloat)), n != null)) {
            var w, A, F, O;
            ((n.lineWidth = parseFloat(t.get("line_width"))),
              (n.lineCap = (w = t.get("line_cap")) != null ? w : "butt"),
              (n.lineJoin = (A = t.get("line_join")) != null ? A : "miter"),
              (n.miterLimit = parseFloat(
                (F = t.get("miter_limit")) != null ? F : 0,
              )),
              (n.lineDashOffset = parseFloat(
                (O = t.get("dash_phase")) != null ? O : 0,
              )));
          }
          var B = t.getSubNode("shape"),
            W = t.getSubNode("shading"),
            q = t.getSubNode("shadow"),
            U = t.getSubNode("blending_mode");
          (B != null && e(B, n, r),
            W != null && o("WebBloksCanvasUtils").drawShadingToCanvas(W, n, r),
            U != null &&
              o("WebBloksCanvasUtils").drawBlendingModeToCanvas(U, n),
            q != null && o("WebBloksCanvasUtils").drawShadowToCanvas(q, n, r),
            n.stroke());
          break;
        }
        default:
          throw new (o("WebBloksErrors").WebBloksError)(
            t.styleId +
              " is not yet implemented. Add missing signature in `bk.component.Canvas`",
          );
      }
    }
    function s(e, t) {
      var n;
      switch (e.styleId) {
        case "bk.types.CanvasShapeArc": {
          var r, a;
          t.beginPath();
          var i = o("WebBloksCanvasUtils").getCanvasPixelValRelativeToWidth(
              e.get("center_x"),
              t,
            ),
            l = o("WebBloksCanvasUtils").getCanvasPixelValRelativeToHeight(
              e.get("center_y"),
              t,
            ),
            s = o("WebBloksCanvasUtils").getCanvasPixelValRelativeToWidth(
              e.get("radius"),
              t,
            ),
            u = parseFloat((r = e.get("start_angle")) != null ? r : 0),
            c = parseFloat((a = e.get("end_angle")) != null ? a : 360),
            d = e.get("clockwise") != null ? !e.get("clockwise") : !1;
          t.arc(i, l, s, (u / 180) * Math.PI, (c / 180) * Math.PI, d);
          break;
        }
        case "bk.types.CanvasShapeCircle":
          (t.beginPath(),
            t.arc(
              o("WebBloksCanvasUtils").getCanvasPixelValRelativeToWidth(
                e.get("center_x"),
                t,
              ),
              o("WebBloksCanvasUtils").getCanvasPixelValRelativeToHeight(
                e.get("center_y"),
                t,
              ),
              o("WebBloksCanvasUtils").getCanvasPixelValRelativeToWidth(
                e.get("radius"),
                t,
              ),
              0,
              2 * Math.PI,
            ));
          break;
        case "bk.types.CanvasShapeLine": {
          var m;
          (t.beginPath(),
            t.moveTo(
              (m = o("WebBloksCanvasUtils")).getCanvasPixelValRelativeToWidth(
                e.get("start_x"),
                t,
              ),
              m.getCanvasPixelValRelativeToHeight(e.get("start_y"), t),
            ),
            t.lineTo(
              m.getCanvasPixelValRelativeToWidth(e.get("end_x"), t),
              m.getCanvasPixelValRelativeToHeight(e.get("end_y"), t),
            ));
          break;
        }
        case "bk.types.CanvasShapeRect":
          (t.beginPath(),
            t.roundRect(
              o("WebBloksCanvasUtils").getCanvasPixelValRelativeToWidth(
                e.get("x"),
                t,
              ),
              o("WebBloksCanvasUtils").getCanvasPixelValRelativeToHeight(
                e.get("y"),
                t,
              ),
              o("WebBloksCanvasUtils").getCanvasPixelValRelativeToWidth(
                e.get("width"),
                t,
              ),
              o("WebBloksCanvasUtils").getCanvasPixelValRelativeToHeight(
                e.get("height"),
                t,
              ),
              parseFloat((n = e.get("corner_radius")) != null ? n : 0),
            ));
          break;
        case "bk.types.CanvasShapeEllipse": {
          var m;
          t.beginPath();
          var p =
              (m = o("WebBloksCanvasUtils")).getCanvasPixelValRelativeToWidth(
                e.get("width"),
                t,
              ) / 2,
            _ = m.getCanvasPixelValRelativeToHeight(e.get("height"), t) / 2;
          t.ellipse(
            m.getCanvasPixelValRelativeToWidth(e.get("x"), t) + p,
            m.getCanvasPixelValRelativeToHeight(e.get("y"), t) + _,
            p,
            _,
            0,
            0,
            2 * Math.PI,
          );
          break;
        }
        default:
          throw new (o("WebBloksErrors").WebBloksError)(
            e.styleId +
              " is not yet implemented. Add missing signature in `bk.component.Canvas`",
          );
      }
    }
    function u(t, n, r) {
      switch (t.styleId) {
        case "bk.types.CanvasPathAdd": {
          var a = t.getSubNode("transform"),
            i = t.getSubNode("path");
          (a != null && d(a, n, r), i != null && e(i, n, r));
          break;
        }
        case "bk.types.CanvasPathArc": {
          var l,
            s,
            u = o("WebBloksCanvasUtils").getCanvasPixelValRelativeToWidth(
              t.get("center_x"),
              n,
            ),
            c = o("WebBloksCanvasUtils").getCanvasPixelValRelativeToHeight(
              t.get("center_y"),
              n,
            ),
            m = o("WebBloksCanvasUtils").getCanvasPixelValRelativeToWidth(
              t.get("radius"),
              n,
            ),
            p = parseFloat((l = t.get("start_angle")) != null ? l : 0),
            _ = parseFloat((s = t.get("end_angle")) != null ? s : 360),
            f = t.get("clockwise") != null ? !t.get("clockwise") : !1;
          n.arc(u, c, m, (p / 180) * Math.PI, (_ / 180) * Math.PI, f);
          break;
        }
        case "bk.types.CanvasPathCircle": {
          var g = o("WebBloksCanvasUtils").getCanvasPixelValRelativeToWidth(
              t.get("center_x"),
              n,
            ),
            h = o("WebBloksCanvasUtils").getCanvasPixelValRelativeToHeight(
              t.get("center_y"),
              n,
            ),
            y = parseFloat(t.get("radius"));
          (n.moveTo(g + y, h), n.arc(g, h, y, 0, 2 * Math.PI), n.restore());
          break;
        }
        case "bk.types.CanvasPathClose": {
          n.closePath();
          break;
        }
        case "bk.types.CanvasPathCubicTo": {
          var C;
          n.bezierCurveTo(
            (C = o("WebBloksCanvasUtils")).getCanvasPixelValRelativeToWidth(
              t.get("control_a_x"),
              n,
            ),
            C.getCanvasPixelValRelativeToHeight(t.get("control_a_y"), n),
            C.getCanvasPixelValRelativeToWidth(t.get("control_b_x"), n),
            C.getCanvasPixelValRelativeToHeight(t.get("control_b_y"), n),
            C.getCanvasPixelValRelativeToWidth(t.get("end_x"), n),
            C.getCanvasPixelValRelativeToHeight(t.get("end_y"), n),
          );
          break;
        }
        case "bk.types.CanvasPathEllipse": {
          var C,
            b = (C = o("WebBloksCanvasUtils")).getCanvasPixelValRelativeToWidth(
              t.get("width"),
              n,
            ),
            v = C.getCanvasPixelValRelativeToHeight(t.get("height"), n),
            S = b / 2,
            R = v / 2,
            L = C.getCanvasPixelValRelativeToWidth(t.get("x"), n),
            E = C.getCanvasPixelValRelativeToHeight(t.get("y"), n),
            k = L + S,
            I = E + R;
          (n.moveTo(L + b, E + R), n.ellipse(k, I, S, R, 0, 0, 2 * Math.PI));
          break;
        }
        case "bk.types.CanvasPathLineTo": {
          n.lineTo(
            o("WebBloksCanvasUtils").getCanvasPixelValRelativeToWidth(
              t.get("x"),
              n,
            ),
            o("WebBloksCanvasUtils").getCanvasPixelValRelativeToHeight(
              t.get("y"),
              n,
            ),
          );
          break;
        }
        case "bk.types.CanvasPathMoveTo": {
          n.moveTo(
            o("WebBloksCanvasUtils").getCanvasPixelValRelativeToWidth(
              t.get("x"),
              n,
            ),
            o("WebBloksCanvasUtils").getCanvasPixelValRelativeToHeight(
              t.get("y"),
              n,
            ),
          );
          break;
        }
        case "bk.types.CanvasPathQuadTo": {
          var C;
          n.quadraticCurveTo(
            (C = o("WebBloksCanvasUtils")).getCanvasPixelValRelativeToWidth(
              t.get("control_x"),
              n,
            ),
            C.getCanvasPixelValRelativeToHeight(t.get("control_y"), n),
            C.getCanvasPixelValRelativeToWidth(t.get("end_x"), n),
            C.getCanvasPixelValRelativeToHeight(t.get("end_y"), n),
          );
          break;
        }
        case "bk.types.CanvasPathRect": {
          var T, C;
          n.roundRect(
            (C = o("WebBloksCanvasUtils")).getCanvasPixelValRelativeToWidth(
              t.get("x"),
              n,
            ),
            C.getCanvasPixelValRelativeToHeight(t.get("y"), n),
            C.getCanvasPixelValRelativeToWidth(t.get("width"), n),
            C.getCanvasPixelValRelativeToHeight(t.get("height"), n),
            parseFloat((T = t.get("corner_radius")) != null ? T : 0),
          );
          break;
        }
        default:
          throw new (o("WebBloksErrors").WebBloksError)(
            t.styleId + " is not yet implemented. Please override in renderer",
          );
      }
    }
    function c(e, t) {
      switch (e.styleId) {
        case "bk.types.CanvasTransformInverseV2": {
          var n = window.devicePixelRatio;
          (t.scale(1 / n, 1 / n),
            t.setTransform(t.getTransform().invertSelf()),
            t.scale(n, n));
          break;
        }
        case "bk.types.CanvasTransformRotate": {
          var r;
          (t.translate(
            (r = o("WebBloksCanvasUtils")).getCanvasPixelValRelativeToWidth(
              e.get("pivot_x"),
              t,
            ),
            r.getCanvasPixelValRelativeToHeight(e.get("pivot_y"), t),
          ),
            t.rotate((parseFloat(e.get("degrees")) * Math.PI) / 180),
            t.translate(
              -r.getCanvasPixelValRelativeToWidth(e.get("pivot_x"), t),
              -r.getCanvasPixelValRelativeToHeight(e.get("pivot_y"), t),
            ));
          break;
        }
        case "bk.types.CanvasTransformScale": {
          var r;
          (t.translate(
            (r = o("WebBloksCanvasUtils")).getCanvasPixelValRelativeToWidth(
              e.get("pivot_x"),
              t,
            ),
            r.getCanvasPixelValRelativeToHeight(e.get("pivot_y"), t),
          ),
            t.scale(
              r.getCanvasPixelValRelativeToWidth(e.get("x"), t),
              r.getCanvasPixelValRelativeToHeight(e.get("y"), t),
            ),
            t.translate(
              -r.getCanvasPixelValRelativeToWidth(e.get("pivot_x"), t),
              -r.getCanvasPixelValRelativeToHeight(e.get("pivot_y"), t),
            ));
          break;
        }
        case "bk.types.CanvasTransformSkew":
        case "bk.types.CanvasTransformSkewV2": {
          var r;
          (t.translate(
            (r = o("WebBloksCanvasUtils")).getCanvasPixelValRelativeToWidth(
              e.get("pivot_x"),
              t,
            ),
            r.getCanvasPixelValRelativeToHeight(e.get("pivot_y"), t),
          ),
            t.transform(
              1,
              r.getCanvasPixelValRelativeToWidth(e.get("x"), t),
              r.getCanvasPixelValRelativeToHeight(e.get("y"), t),
              1,
              0,
              0,
            ),
            t.translate(
              -r.getCanvasPixelValRelativeToWidth(e.get("pivot_x"), t),
              -r.getCanvasPixelValRelativeToHeight(e.get("pivot_y"), t),
            ));
          break;
        }
        case "bk.types.CanvasTransformTranslate": {
          t.translate(
            o("WebBloksCanvasUtils").getCanvasPixelValRelativeToWidth(
              e.get("x"),
              t,
            ),
            o("WebBloksCanvasUtils").getCanvasPixelValRelativeToHeight(
              e.get("y"),
              t,
            ),
          );
          break;
        }
        default:
          throw new (o("WebBloksErrors").WebBloksError)(
            e.styleId +
              " is not yet implemented. Add missing signature in `bk.component.Canvas`",
          );
      }
    }
    function d(t, n, r) {
      var o = t.getSubNodes("children");
      if (o != null) for (var a of o) e(a, n, r);
    }
    l.default = e;
  },
  98,
);
