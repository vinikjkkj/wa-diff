__d(
  "WebBloksCanvasDrawToContext",
  [
    "WebBloksCanvasMinificationKeys",
    "WebBloksCanvasUtils",
    "WebBloksConstants",
    "WebBloksErrors",
    "WebBloksUtils",
  ],
  function (t, n, r, o, a, i, l) {
    var e = "\u40E5",
      s = "\u40ED",
      u = "\u40EF",
      c = "\u40D1",
      d = "\u40E6",
      m = "\u40F4",
      p = "\u40D4",
      _ = "\u40D8",
      f = "\u40F5",
      g = "\u40E0",
      h = "\u40F6",
      y = "\u40F7",
      C = "\u40F8",
      b = "\u40DB",
      v = "\u40CC",
      S = "\u40D6",
      R = "\u40D5",
      L = "\u40DC",
      E = "\u40D9",
      k = "\u40EA",
      I = "\u40DE",
      T = "\u41C2",
      D = "\u40DF",
      x = "\u40CE",
      $ = "\u40CD",
      P = "\u41BE",
      N = "\u40D7";
    function M(t, n, r) {
      switch (t.styleId) {
        case s:
        case "bk.types.CanvasGroup": {
          var a = o("WebBloksUtils").cast(t),
            i = a.getSubNode(
              o("WebBloksCanvasMinificationKeys").CANVAS_GROUP_TRANSFORM,
            );
          i != null && B(i, n, r);
          var l = a.get(o("WebBloksCanvasMinificationKeys").CANVAS_GROUP_CLIP);
          l != null && (M(l, n, r), n.clip());
          var O = o("WebBloksCanvasUtils").getCanvasPixelValRelativeToWidth(
              a.get(o("WebBloksCanvasMinificationKeys").CANVAS_GROUP_WIDTH),
              n,
            ),
            W = o("WebBloksCanvasUtils").getCanvasPixelValRelativeToHeight(
              a.get(o("WebBloksCanvasMinificationKeys").CANVAS_GROUP_HEIGHT),
              n,
            );
          if (O > 0 && W > 0) {
            var q = o("WebBloksCanvasUtils").createSecondaryCanvasElement(O, W),
              U = q.getContext("2d");
            (B(a, U, r), n.drawImage(q, 0, 0), q.remove());
          } else B(a, n, r);
          break;
        }
        case u:
        case "bk.types.CanvasLayer": {
          var V = o("WebBloksUtils").cast(t),
            H = V.getSubNode(
              o("WebBloksCanvasMinificationKeys").CANVAS_LAYER_TRANSFORM,
            );
          H != null && B(H, n, r);
          var G = V.get(
            o("WebBloksCanvasMinificationKeys").CANVAS_LAYER_BLENDING_MODE,
          );
          G != null && o("WebBloksCanvasUtils").drawBlendingModeToCanvas(G, n);
          var z = V.get(o("WebBloksCanvasMinificationKeys").CANVAS_LAYER_CLIP);
          z != null && (M(z, n, r), n.clip());
          var j = V.get(o("WebBloksConstants").ALPHA_ATTRIBUTE_KEY);
          j != null && (n.globalAlpha = parseFloat(j));
          var K = o("WebBloksCanvasUtils").getCanvasPixelValRelativeToWidth(
              V.get(o("WebBloksCanvasMinificationKeys").CANVAS_LAYER_WIDTH),
              n,
            ),
            Q = o("WebBloksCanvasUtils").getCanvasPixelValRelativeToHeight(
              V.get(o("WebBloksCanvasMinificationKeys").CANVAS_LAYER_HEIGHT),
              n,
            );
          if (K > 0 && Q > 0) {
            var X = o("WebBloksCanvasUtils").createSecondaryCanvasElement(K, Q),
              Y = X.getContext("2d");
            (B(V, Y, r), n.drawImage(X, 0, 0), X.remove());
          } else B(V, n, r);
          break;
        }
        case I:
        case "bk.types.CanvasTransform": {
          var J,
            Z = o("WebBloksUtils").cast(t),
            ee = Z.get(
              (J = o("WebBloksCanvasMinificationKeys")).CANVAS_TRANSFORM_A,
            ),
            te = Z.get(J.CANVAS_TRANSFORM_B),
            ne = Z.get(J.CANVAS_TRANSFORM_C),
            re = Z.get(J.CANVAS_TRANSFORM_D),
            oe = Z.get(J.CANVAS_TRANSFORM_TX),
            ae = Z.get(J.CANVAS_TRANSFORM_TY);
          if (
            ee != null &&
            te != null &&
            ne != null &&
            re != null &&
            oe != null &&
            ae != null
          ) {
            var ie;
            n.setTransform(
              (ie = o("WebBloksCanvasUtils")).getCanvasPixelValRelativeToWidth(
                ee,
                n,
              ),
              ie.getCanvasPixelValRelativeToHeight(te, n),
              ie.getCanvasPixelValRelativeToWidth(ne, n),
              ie.getCanvasPixelValRelativeToHeight(re, n),
              ie.getCanvasPixelValRelativeToWidth(oe, n),
              ie.getCanvasPixelValRelativeToHeight(ae, n),
            );
          }
          B(Z, n, r);
          break;
        }
        case e:
        case "bk.types.CanvasFill": {
          var J,
            le = o("WebBloksUtils").cast(t),
            se = le.getSubNode(
              (J = o("WebBloksCanvasMinificationKeys")).CANVAS_FILL_SHAPE,
            ),
            ue = le.getSubNode(J.CANVAS_FILL_SHADING),
            ce = le.getSubNode(J.CANVAS_FILL_SHADOW),
            de = le.getSubNode(J.CANVAS_FILL_BLENDING_MODE);
          (se != null && M(se, n, r),
            ue != null &&
              o("WebBloksCanvasUtils").drawShadingToCanvas(ue, n, r),
            de != null &&
              o("WebBloksCanvasUtils").drawBlendingModeToCanvas(de, n),
            ce != null && o("WebBloksCanvasUtils").drawShadowToCanvas(ce, n, r),
            n.fill());
          break;
        }
        case c:
        case "bk.types.CanvasPath": {
          var me = o("WebBloksUtils").cast(t);
          (n.beginPath(), B(me, n, r));
          break;
        }
        case d:
        case m:
        case p:
        case _:
        case f:
        case g:
        case h:
        case y:
        case C:
        case b:
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
          A(o("WebBloksUtils").cast(t), n, r);
          break;
        }
        case S:
        case L:
        case v:
        case E:
        case R:
        case "bk.types.CanvasShapeCircle":
        case "bk.types.CanvasShapeLine":
        case "bk.types.CanvasShapeArc":
        case "bk.types.CanvasShapeRect":
        case "bk.types.CanvasShapeEllipse": {
          w(o("WebBloksUtils").cast(t), n);
          break;
        }
        case T:
        case D:
        case x:
        case $:
        case P:
        case N:
        case "bk.types.CanvasTransformInverseV2":
        case "bk.types.CanvasTransformRotate":
        case "bk.types.CanvasTransformScale":
        case "bk.types.CanvasTransformSkew":
        case "bk.types.CanvasTransformSkewV2":
        case "bk.types.CanvasTransformTranslate": {
          F(o("WebBloksUtils").cast(t), n);
          break;
        }
        case k:
        case "bk.types.CanvasStroke": {
          var pe = o("WebBloksUtils").cast(t);
          n.beginPath();
          var _e = pe.get(
            o("WebBloksCanvasMinificationKeys").CANVAS_STROKE_DASH_LENGTHS,
          );
          if ((_e != null && n.setLineDash(_e.map(parseFloat)), n != null)) {
            var fe, ge, he, ye;
            ((n.lineWidth = parseFloat(
              pe.get(
                o("WebBloksCanvasMinificationKeys").CANVAS_STROKE_LINE_WIDTH,
              ),
            )),
              (n.lineCap =
                (fe = pe.get(
                  o("WebBloksCanvasMinificationKeys").CANVAS_STROKE_LINE_CAP,
                )) != null
                  ? fe
                  : "butt"),
              (n.lineJoin =
                (ge = pe.get(
                  o("WebBloksCanvasMinificationKeys").CANVAS_STROKE_LINE_JOIN,
                )) != null
                  ? ge
                  : "miter"),
              (n.miterLimit = parseFloat(
                (he = pe.get(
                  o("WebBloksCanvasMinificationKeys").CANVAS_STROKE_MITER_LIMIT,
                )) != null
                  ? he
                  : 0,
              )),
              (n.lineDashOffset = parseFloat(
                (ye = pe.get(
                  o("WebBloksCanvasMinificationKeys").CANVAS_STROKE_DASH_PHASE,
                )) != null
                  ? ye
                  : 0,
              )));
          }
          var Ce = pe.getSubNode(
              o("WebBloksCanvasMinificationKeys").CANVAS_STROKE_SHAPE,
            ),
            be = pe.getSubNode(
              o("WebBloksCanvasMinificationKeys").CANVAS_STROKE_SHADING,
            ),
            ve = pe.getSubNode(
              o("WebBloksCanvasMinificationKeys").CANVAS_STROKE_SHADOW,
            ),
            Se = pe.getSubNode(
              o("WebBloksCanvasMinificationKeys").CANVAS_STROKE_BLENDING_MODE,
            );
          (Ce != null && M(Ce, n, r),
            be != null &&
              o("WebBloksCanvasUtils").drawShadingToCanvas(be, n, r),
            Se != null &&
              o("WebBloksCanvasUtils").drawBlendingModeToCanvas(Se, n),
            ve != null && o("WebBloksCanvasUtils").drawShadowToCanvas(ve, n, r),
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
    function w(e, t) {
      switch (e.styleId) {
        case v:
        case "bk.types.CanvasShapeArc": {
          var n,
            r,
            a = o("WebBloksUtils").cast(e);
          t.beginPath();
          var i = o("WebBloksCanvasUtils").getCanvasPixelValRelativeToWidth(
              a.get(
                o("WebBloksCanvasMinificationKeys").CANVAS_SHAPE_ARC_CENTER_X,
              ),
              t,
            ),
            l = o("WebBloksCanvasUtils").getCanvasPixelValRelativeToHeight(
              a.get(
                o("WebBloksCanvasMinificationKeys").CANVAS_SHAPE_ARC_CENTER_Y,
              ),
              t,
            ),
            s = o("WebBloksCanvasUtils").getCanvasPixelValRelativeToWidth(
              a.get(
                o("WebBloksCanvasMinificationKeys").CANVAS_SHAPE_ARC_RADIUS,
              ),
              t,
            ),
            u = parseFloat(
              (n = a.get(
                o("WebBloksCanvasMinificationKeys")
                  .CANVAS_SHAPE_ARC_START_ANGLE,
              )) != null
                ? n
                : 0,
            ),
            c = parseFloat(
              (r = a.get(
                o("WebBloksCanvasMinificationKeys").CANVAS_SHAPE_ARC_END_ANGLE,
              )) != null
                ? r
                : 360,
            ),
            d =
              a.get(
                o("WebBloksCanvasMinificationKeys").CANVAS_SHAPE_ARC_CLOCKWISE,
              ) != null
                ? !a.get(
                    o("WebBloksCanvasMinificationKeys")
                      .CANVAS_SHAPE_ARC_CLOCKWISE,
                  )
                : !1;
          t.arc(i, l, s, (u / 180) * Math.PI, (c / 180) * Math.PI, d);
          break;
        }
        case S:
        case "bk.types.CanvasShapeCircle": {
          var m = o("WebBloksUtils").cast(e);
          (t.beginPath(),
            t.arc(
              o("WebBloksCanvasUtils").getCanvasPixelValRelativeToWidth(
                m.get(
                  o("WebBloksCanvasMinificationKeys")
                    .CANVAS_SHAPE_CIRCLE_CENTER_X,
                ),
                t,
              ),
              o("WebBloksCanvasUtils").getCanvasPixelValRelativeToHeight(
                m.get(
                  o("WebBloksCanvasMinificationKeys")
                    .CANVAS_SHAPE_CIRCLE_CENTER_Y,
                ),
                t,
              ),
              o("WebBloksCanvasUtils").getCanvasPixelValRelativeToWidth(
                m.get(
                  o("WebBloksCanvasMinificationKeys")
                    .CANVAS_SHAPE_CIRCLE_RADIUS,
                ),
                t,
              ),
              0,
              2 * Math.PI,
            ));
          break;
        }
        case L:
        case "bk.types.CanvasShapeLine": {
          var p,
            _,
            f = o("WebBloksUtils").cast(e);
          (t.beginPath(),
            t.moveTo(
              (p = o("WebBloksCanvasUtils")).getCanvasPixelValRelativeToWidth(
                f.get(
                  (_ = o("WebBloksCanvasMinificationKeys"))
                    .CANVAS_SHAPE_LINE_START_X,
                ),
                t,
              ),
              p.getCanvasPixelValRelativeToHeight(
                f.get(_.CANVAS_SHAPE_LINE_START_Y),
                t,
              ),
            ),
            t.lineTo(
              p.getCanvasPixelValRelativeToWidth(
                f.get(_.CANVAS_SHAPE_LINE_END_X),
                t,
              ),
              p.getCanvasPixelValRelativeToHeight(
                f.get(_.CANVAS_SHAPE_LINE_END_Y),
                t,
              ),
            ));
          break;
        }
        case E:
        case "bk.types.CanvasShapeRect": {
          var g,
            p,
            _,
            h = o("WebBloksUtils").cast(e);
          (t.beginPath(),
            t.roundRect(
              (p = o("WebBloksCanvasUtils")).getCanvasPixelValRelativeToWidth(
                h.get(
                  (_ = o("WebBloksCanvasMinificationKeys")).CANVAS_SHAPE_RECT_X,
                ),
                t,
              ),
              p.getCanvasPixelValRelativeToHeight(
                h.get(_.CANVAS_SHAPE_RECT_Y),
                t,
              ),
              p.getCanvasPixelValRelativeToWidth(
                h.get(_.CANVAS_SHAPE_RECT_WIDTH),
                t,
              ),
              p.getCanvasPixelValRelativeToHeight(
                h.get(_.CANVAS_SHAPE_RECT_HEIGHT),
                t,
              ),
              parseFloat(
                (g = h.get(
                  o("WebBloksCanvasMinificationKeys")
                    .CANVAS_SHAPE_RECT_CORNER_RADIUS,
                )) != null
                  ? g
                  : 0,
              ),
            ));
          break;
        }
        case R:
        case "bk.types.CanvasShapeEllipse": {
          var p,
            _,
            y = o("WebBloksUtils").cast(e);
          t.beginPath();
          var C =
              (p = o("WebBloksCanvasUtils")).getCanvasPixelValRelativeToWidth(
                y.get(
                  (_ = o("WebBloksCanvasMinificationKeys"))
                    .CANVAS_SHAPE_ELLIPSE_WIDTH,
                ),
                t,
              ) / 2,
            b =
              p.getCanvasPixelValRelativeToHeight(
                y.get(_.CANVAS_SHAPE_ELLIPSE_HEIGHT),
                t,
              ) / 2;
          t.ellipse(
            p.getCanvasPixelValRelativeToWidth(
              y.get(_.CANVAS_SHAPE_ELLIPSE_X),
              t,
            ) + C,
            p.getCanvasPixelValRelativeToHeight(
              y.get(_.CANVAS_SHAPE_ELLIPSE_Y),
              t,
            ) + b,
            C,
            b,
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
    function A(e, t, n) {
      switch (e.styleId) {
        case d:
        case "bk.types.CanvasPathAdd": {
          var r = o("WebBloksUtils").cast(e),
            a = r.getSubNode(
              o("WebBloksCanvasMinificationKeys").CANVAS_PATH_ADD_TRANSFORM,
            ),
            i = r.getSubNode(
              o("WebBloksCanvasMinificationKeys").CANVAS_PATH_ADD_PATH,
            );
          (a != null && B(a, t, n), i != null && M(i, t, n));
          break;
        }
        case m:
        case "bk.types.CanvasPathArc": {
          var l,
            s,
            u = o("WebBloksUtils").cast(e),
            c = o("WebBloksCanvasUtils").getCanvasPixelValRelativeToWidth(
              u.get(
                o("WebBloksCanvasMinificationKeys").CANVAS_PATH_ARC_CENTER_X,
              ),
              t,
            ),
            v = o("WebBloksCanvasUtils").getCanvasPixelValRelativeToHeight(
              u.get(
                o("WebBloksCanvasMinificationKeys").CANVAS_PATH_ARC_CENTER_Y,
              ),
              t,
            ),
            S = o("WebBloksCanvasUtils").getCanvasPixelValRelativeToWidth(
              u.get(o("WebBloksCanvasMinificationKeys").CANVAS_PATH_ARC_RADIUS),
              t,
            ),
            R = parseFloat(
              (l = u.get(
                o("WebBloksCanvasMinificationKeys").CANVAS_PATH_ARC_START_ANGLE,
              )) != null
                ? l
                : 0,
            ),
            L = parseFloat(
              (s = u.get(
                o("WebBloksCanvasMinificationKeys").CANVAS_PATH_ARC_END_ANGLE,
              )) != null
                ? s
                : 360,
            ),
            E =
              u.get(
                o("WebBloksCanvasMinificationKeys").CANVAS_PATH_ARC_CLOCKWISE,
              ) != null
                ? !u.get(
                    o("WebBloksCanvasMinificationKeys")
                      .CANVAS_PATH_ARC_CLOCKWISE,
                  )
                : !1;
          t.arc(c, v, S, (R / 180) * Math.PI, (L / 180) * Math.PI, E);
          break;
        }
        case p:
        case "bk.types.CanvasPathCircle": {
          var k = o("WebBloksUtils").cast(e),
            I = o("WebBloksCanvasUtils").getCanvasPixelValRelativeToWidth(
              k.get(
                o("WebBloksCanvasMinificationKeys").CANVAS_PATH_CIRCLE_CENTER_X,
              ),
              t,
            ),
            T = o("WebBloksCanvasUtils").getCanvasPixelValRelativeToHeight(
              k.get(
                o("WebBloksCanvasMinificationKeys").CANVAS_PATH_CIRCLE_CENTER_Y,
              ),
              t,
            ),
            D = parseFloat(
              k.get(
                o("WebBloksCanvasMinificationKeys").CANVAS_PATH_CIRCLE_RADIUS,
              ),
            );
          (t.moveTo(I + D, T), t.arc(I, T, D, 0, 2 * Math.PI), t.restore());
          break;
        }
        case _:
        case "bk.types.CanvasPathClose": {
          t.closePath();
          break;
        }
        case f:
        case "bk.types.CanvasPathCubicTo": {
          var x,
            $,
            P = o("WebBloksUtils").cast(e);
          t.bezierCurveTo(
            (x = o("WebBloksCanvasUtils")).getCanvasPixelValRelativeToWidth(
              P.get(
                ($ = o("WebBloksCanvasMinificationKeys"))
                  .CANVAS_PATH_CUBIC_TO_CONTROL_A_X,
              ),
              t,
            ),
            x.getCanvasPixelValRelativeToHeight(
              P.get($.CANVAS_PATH_CUBIC_TO_CONTROL_A_Y),
              t,
            ),
            x.getCanvasPixelValRelativeToWidth(
              P.get($.CANVAS_PATH_CUBIC_TO_CONTROL_B_X),
              t,
            ),
            x.getCanvasPixelValRelativeToHeight(
              P.get($.CANVAS_PATH_CUBIC_TO_CONTROL_B_Y),
              t,
            ),
            x.getCanvasPixelValRelativeToWidth(
              P.get($.CANVAS_PATH_CUBIC_TO_END_X),
              t,
            ),
            x.getCanvasPixelValRelativeToHeight(
              P.get($.CANVAS_PATH_CUBIC_TO_END_Y),
              t,
            ),
          );
          break;
        }
        case g:
        case "bk.types.CanvasPathEllipse": {
          var x,
            $,
            N = o("WebBloksUtils").cast(e),
            w = (x = o("WebBloksCanvasUtils")).getCanvasPixelValRelativeToWidth(
              N.get(
                ($ = o("WebBloksCanvasMinificationKeys"))
                  .CANVAS_PATH_ELLIPSE_WIDTH,
              ),
              t,
            ),
            A = x.getCanvasPixelValRelativeToHeight(
              N.get($.CANVAS_PATH_ELLIPSE_HEIGHT),
              t,
            ),
            F = w / 2,
            O = A / 2,
            W = x.getCanvasPixelValRelativeToWidth(
              N.get($.CANVAS_PATH_ELLIPSE_X),
              t,
            ),
            q = x.getCanvasPixelValRelativeToHeight(
              N.get($.CANVAS_PATH_ELLIPSE_Y),
              t,
            ),
            U = W + F,
            V = q + O;
          (t.moveTo(W + w, q + O), t.ellipse(U, V, F, O, 0, 0, 2 * Math.PI));
          break;
        }
        case h:
        case "bk.types.CanvasPathLineTo": {
          var H = o("WebBloksUtils").cast(e);
          t.lineTo(
            o("WebBloksCanvasUtils").getCanvasPixelValRelativeToWidth(
              H.get(o("WebBloksCanvasMinificationKeys").CANVAS_PATH_LINE_TO_X),
              t,
            ),
            o("WebBloksCanvasUtils").getCanvasPixelValRelativeToHeight(
              H.get(o("WebBloksCanvasMinificationKeys").CANVAS_PATH_LINE_TO_Y),
              t,
            ),
          );
          break;
        }
        case y:
        case "bk.types.CanvasPathMoveTo": {
          var G = o("WebBloksUtils").cast(e);
          t.moveTo(
            o("WebBloksCanvasUtils").getCanvasPixelValRelativeToWidth(
              G.get(o("WebBloksCanvasMinificationKeys").CANVAS_PATH_MOVE_TO_X),
              t,
            ),
            o("WebBloksCanvasUtils").getCanvasPixelValRelativeToHeight(
              G.get(o("WebBloksCanvasMinificationKeys").CANVAS_PATH_MOVE_TO_Y),
              t,
            ),
          );
          break;
        }
        case C:
        case "bk.types.CanvasPathQuadTo": {
          var x,
            $,
            z = o("WebBloksUtils").cast(e);
          t.quadraticCurveTo(
            (x = o("WebBloksCanvasUtils")).getCanvasPixelValRelativeToWidth(
              z.get(
                ($ = o("WebBloksCanvasMinificationKeys"))
                  .CANVAS_PATH_QUAD_TO_CONTROL_X,
              ),
              t,
            ),
            x.getCanvasPixelValRelativeToHeight(
              z.get($.CANVAS_PATH_QUAD_TO_CONTROL_Y),
              t,
            ),
            x.getCanvasPixelValRelativeToWidth(
              z.get($.CANVAS_PATH_QUAD_TO_END_X),
              t,
            ),
            x.getCanvasPixelValRelativeToHeight(
              z.get($.CANVAS_PATH_QUAD_TO_END_Y),
              t,
            ),
          );
          break;
        }
        case b:
        case "bk.types.CanvasPathRect": {
          var j,
            x,
            $,
            K = o("WebBloksUtils").cast(e);
          t.roundRect(
            (x = o("WebBloksCanvasUtils")).getCanvasPixelValRelativeToWidth(
              K.get(
                ($ = o("WebBloksCanvasMinificationKeys")).CANVAS_PATH_RECT_X,
              ),
              t,
            ),
            x.getCanvasPixelValRelativeToHeight(K.get($.CANVAS_PATH_RECT_Y), t),
            x.getCanvasPixelValRelativeToWidth(
              K.get($.CANVAS_PATH_RECT_WIDTH),
              t,
            ),
            x.getCanvasPixelValRelativeToHeight(
              K.get($.CANVAS_PATH_RECT_HEIGHT),
              t,
            ),
            parseFloat(
              (j = K.get(
                o("WebBloksCanvasMinificationKeys")
                  .CANVAS_PATH_RECT_CORNER_RADIUS,
              )) != null
                ? j
                : 0,
            ),
          );
          break;
        }
        default:
          throw new (o("WebBloksErrors").WebBloksError)(
            e.styleId + " is not yet implemented. Please override in renderer",
          );
      }
    }
    function F(e, t) {
      switch (e.styleId) {
        case T:
        case "bk.types.CanvasTransformInverseV2": {
          var n = window.devicePixelRatio;
          (t.scale(1 / n, 1 / n),
            t.setTransform(t.getTransform().invertSelf()),
            t.scale(n, n));
          break;
        }
        case D:
        case "bk.types.CanvasTransformRotate": {
          var r,
            a,
            i = o("WebBloksUtils").cast(e);
          (t.translate(
            (r = o("WebBloksCanvasUtils")).getCanvasPixelValRelativeToWidth(
              i.get(
                (a = o("WebBloksCanvasMinificationKeys"))
                  .CANVAS_TRANSFORM_ROTATE_PIVOT_X,
              ),
              t,
            ),
            r.getCanvasPixelValRelativeToHeight(
              i.get(a.CANVAS_TRANSFORM_ROTATE_PIVOT_Y),
              t,
            ),
          ),
            t.rotate(
              (parseFloat(i.get(a.CANVAS_TRANSFORM_ROTATE_DEGREES)) * Math.PI) /
                180,
            ),
            t.translate(
              -r.getCanvasPixelValRelativeToWidth(
                i.get(a.CANVAS_TRANSFORM_ROTATE_PIVOT_X),
                t,
              ),
              -r.getCanvasPixelValRelativeToHeight(
                i.get(a.CANVAS_TRANSFORM_ROTATE_PIVOT_Y),
                t,
              ),
            ));
          break;
        }
        case x:
        case "bk.types.CanvasTransformScale": {
          var r,
            a,
            l = o("WebBloksUtils").cast(e);
          (t.translate(
            (r = o("WebBloksCanvasUtils")).getCanvasPixelValRelativeToWidth(
              l.get(
                (a = o("WebBloksCanvasMinificationKeys"))
                  .CANVAS_TRANSFORM_SCALE_PIVOT_X,
              ),
              t,
            ),
            r.getCanvasPixelValRelativeToHeight(
              l.get(a.CANVAS_TRANSFORM_SCALE_PIVOT_Y),
              t,
            ),
          ),
            t.scale(
              r.getCanvasPixelValRelativeToWidth(
                l.get(a.CANVAS_TRANSFORM_SCALE_X),
                t,
              ),
              r.getCanvasPixelValRelativeToHeight(
                l.get(a.CANVAS_TRANSFORM_SCALE_Y),
                t,
              ),
            ),
            t.translate(
              -r.getCanvasPixelValRelativeToWidth(
                l.get(a.CANVAS_TRANSFORM_SCALE_PIVOT_X),
                t,
              ),
              -r.getCanvasPixelValRelativeToHeight(
                l.get(a.CANVAS_TRANSFORM_SCALE_PIVOT_Y),
                t,
              ),
            ));
          break;
        }
        case $:
        case "bk.types.CanvasTransformSkew": {
          var a,
            s = o("WebBloksUtils").cast(e);
          O(
            s.get(
              (a = o("WebBloksCanvasMinificationKeys")).CANVAS_TRANSFORM_SKEW_X,
            ),
            s.get(a.CANVAS_TRANSFORM_SKEW_Y),
            s.get(a.CANVAS_TRANSFORM_SKEW_PIVOT_X),
            s.get(a.CANVAS_TRANSFORM_SKEW_PIVOT_Y),
            t,
          );
          break;
        }
        case P:
        case "bk.types.CanvasTransformSkewV2": {
          var a,
            u = o("WebBloksUtils").cast(e);
          O(
            u.get(
              (a = o("WebBloksCanvasMinificationKeys"))
                .CANVAS_TRANSFORM_SKEW_V2_X,
            ),
            u.get(a.CANVAS_TRANSFORM_SKEW_V2_Y),
            u.get(a.CANVAS_TRANSFORM_SKEW_V2_PIVOT_X),
            u.get(a.CANVAS_TRANSFORM_SKEW_V2_PIVOT_Y),
            t,
          );
          break;
        }
        case N:
        case "bk.types.CanvasTransformTranslate": {
          var c = o("WebBloksUtils").cast(e);
          t.translate(
            o("WebBloksCanvasUtils").getCanvasPixelValRelativeToWidth(
              c.get(
                o("WebBloksCanvasMinificationKeys")
                  .CANVAS_TRANSFORM_TRANSLATE_X,
              ),
              t,
            ),
            o("WebBloksCanvasUtils").getCanvasPixelValRelativeToHeight(
              c.get(
                o("WebBloksCanvasMinificationKeys")
                  .CANVAS_TRANSFORM_TRANSLATE_Y,
              ),
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
    function O(e, t, n, r, a) {
      var i;
      (a.translate(
        (i = o("WebBloksCanvasUtils")).getCanvasPixelValRelativeToWidth(n, a),
        i.getCanvasPixelValRelativeToHeight(r, a),
      ),
        a.transform(
          1,
          i.getCanvasPixelValRelativeToWidth(e, a),
          i.getCanvasPixelValRelativeToHeight(t, a),
          1,
          0,
          0,
        ),
        a.translate(
          -i.getCanvasPixelValRelativeToWidth(n, a),
          -i.getCanvasPixelValRelativeToHeight(r, a),
        ));
    }
    function B(e, t, n) {
      var r = e.getSubNodes(o("WebBloksConstants").CHILDREN_ATTRIBUTE_KEY);
      if (r != null) for (var a of r) M(a, t, n);
    }
    l.default = M;
  },
  98,
);
