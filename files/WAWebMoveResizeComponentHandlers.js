__d(
  "WAWebMoveResizeComponentHandlers",
  [
    "WALogger",
    "WAWebMoveResizeComponentUtils",
    "WAWebMoveResizeLogic",
    "WAWebMoveResizeValidation",
    "lodash",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u;
    function c(e) {
      var t = e.aspectRatio,
        n = e.clientX,
        r = e.clientY,
        a = e.extraBottomContentHeight,
        i = e.extraTopContentHeight,
        l = e.independentResize,
        s = e.margin,
        u = e.minHeight,
        c = e.minWidth,
        d = e.moveStartPositionStyle,
        m = e.resizeDirection,
        p = e.resizeStartHeight,
        _ = e.resizeStartMousePosition,
        f = e.resizeStartPiPStyle,
        g = e.width,
        h = o("WAWebMoveResizeLogic").calculateResizeDeltas(m, _, n, r, t, l),
        y = h.deltaBottom,
        C = h.deltaHeight,
        b = h.deltaLeft,
        v = h.deltaWidth;
      if (l) {
        var S = u != null ? u : c / t,
          R = o("WAWebMoveResizeLogic").calculateIndependentResize(
            v,
            C,
            b,
            y,
            f,
            p,
            c,
            S,
            s,
            i,
            a,
          );
        return {
          resizedWidth: R.resizedWidth,
          resizedHeight: R.resizedHeight,
          resizedLeft: R.resizedLeft,
          resizedBottom: R.resizedBottom,
        };
      }
      var L = void 0,
        E = {
          resizeStartPiPStyle: f,
          width: g,
          moveStartPositionStyle: d,
          margin: s,
          aspectRatio: t,
          minWidth: c,
          windowWidth: window.innerWidth,
          windowHeight: window.innerHeight,
          extraTopContentHeight: i,
          extraBottomContentHeight: a,
          height: L,
        },
        k = o("WAWebMoveResizeValidation").validateMoveResize({
          deltaBottom: y,
          deltaLeft: b,
          deltaWidth: v,
          params: E,
          type: "RESIZE",
        }),
        I = 0,
        T = 0,
        D = 0,
        x = 0;
      if (k.deltaWidth === 0 && k.deltaLeft === 0 && k.deltaBottom === 0) {
        if (v < 0) {
          var $ = o("WAWebMoveResizeLogic").adjustDeltasForMinWidth(
            m,
            c,
            f.width,
            t,
          );
          ((v = $.deltaWidth),
            (C = $.deltaHeight),
            (b = $.deltaLeft),
            (y = $.deltaBottom));
        } else if (v > 0) {
          var P = o("WAWebMoveResizeLogic").adjustDeltasForMaxBounds({
            aspectRatio: t,
            extraBottomContentHeight: a,
            extraTopContentHeight: i,
            margin: s,
            resizeDirection: m,
            resizeStartPiPStyle: f,
          });
          ((v = P.deltaWidth),
            (C = P.deltaHeight),
            (b = P.deltaLeft),
            (y = P.deltaBottom));
        }
        ((I = f.width + v), (T = f.left + b), (D = f.bottom + y), (x = I / t));
      } else
        ((I = f.width + k.deltaWidth),
          (T = f.left + k.deltaLeft),
          (D = f.bottom + k.deltaBottom),
          (x = I / t));
      return {
        resizedWidth: I,
        resizedHeight: x,
        resizedLeft: T,
        resizedBottom: D,
      };
    }
    function d(t) {
      var n = t.aspectRatio,
        r = t.clientX,
        a = t.clientY,
        i = t.extraBottomContentHeight,
        l = t.extraTopContentHeight,
        c = t.height,
        d = t.independentResize,
        m = t.margin,
        p = t.minWidth,
        _ = t.moveStartMousePosition,
        f = t.moveStartPositionStyle,
        g = t.resizeStartPiPStyle,
        h = t.width,
        y = r - _.x,
        C = _.y - a;
      o("WALogger").LOG(
        e ||
          (e = babelHelpers.taggedTemplateLiteralLoose([
            "[WC Drag] move dL=",
            " dB=",
            " cX=",
            " cY=",
            " startMouse=",
            " startStyle=",
            "",
          ])),
        y,
        C,
        r,
        a,
        JSON.stringify(_),
        JSON.stringify(f),
      );
      var b = {
          resizeStartPiPStyle: g,
          width: h,
          moveStartPositionStyle: f,
          margin: m,
          aspectRatio: n,
          minWidth: p,
          windowWidth: window.innerWidth,
          windowHeight: window.innerHeight,
          extraTopContentHeight: l,
          extraBottomContentHeight: i,
          height: d ? c : void 0,
        },
        v = o("WAWebMoveResizeValidation").validateMoveResize({
          deltaBottom: C,
          deltaLeft: y,
          deltaWidth: 0,
          params: b,
          type: "MOVE",
        }),
        S = 0,
        R = 0;
      if (
        (y !== 0 && v.deltaLeft === 0
          ? (o("WALogger").LOG(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
                  "[WC Drag] snap-h dL=",
                  " vdL=",
                  " mL=",
                  " winW=",
                  " w=",
                  " mX=",
                  "",
                ])),
              y,
              v.deltaLeft,
              S,
              window.innerWidth,
              h,
              m.x,
            ),
            y > 0 ? (S = window.innerWidth - h - m.x) : (S = m.x))
          : (S = f.left + v.deltaLeft),
        C !== 0 && v.deltaBottom === 0)
      )
        if (
          (o("WALogger").LOG(
            u ||
              (u = babelHelpers.taggedTemplateLiteralLoose([
                "[WC Drag] snap-v dB=",
                " vdB=",
                " mB=",
                " winH=",
                " mY=",
                "",
              ])),
            C,
            v.deltaBottom,
            R,
            window.innerHeight,
            m.y,
          ),
          C > 0)
        ) {
          var L = d ? c : h / n;
          R = window.innerHeight - L - m.y - l - 0.1;
        } else R = m.y + i;
      else R = f.bottom + v.deltaBottom;
      return { movedLeft: S, movedBottom: R };
    }
    function m(e) {
      var t = e.aspectRatio,
        n = e.bottom,
        a = e.escapeConversationHeader,
        i = e.extraBottomContentHeight,
        l = e.extraTopContentHeight,
        s = e.getConversationHeaderOffset,
        u = e.height,
        c = e.independentResize,
        d = e.left,
        m = e.margin,
        p = e.minWidth,
        _ = e.previousConvPanelRightBorder,
        f = e.previousWindowSize,
        g = e.width,
        h = window.innerHeight - 2 * m.y - l - i,
        y = window.innerWidth - 2 * m.x,
        C = g,
        b = C / t,
        v = null;
      c && (v = Math.min(u, h));
      var S = n,
        R = d;
      (b > h && ((b = h), (C = h * t)), C > y && ((b = y / t), (C = y)));
      var L = v != null ? v : b;
      (S + L > h + m.y + i && (S = h + m.y + i - L),
        R + C > y + m.x && (R = y + m.x - C),
        f.width <
          R + C + m.x + o("WAWebMoveResizeComponentUtils").BORDER_TOLERANCE &&
          (R = y + m.x - C),
        f.height <
          S +
            L +
            m.y +
            i +
            o("WAWebMoveResizeComponentUtils").BORDER_TOLERANCE &&
          (S = h + m.y + i - L));
      var E =
          _ != null &&
          _ > 0 &&
          Math.abs(d + C + m.x - _) <
            o("WAWebMoveResizeComponentUtils").BORDER_TOLERANCE,
        k;
      if (
        (a &&
          s(function (e) {
            k = e == null ? void 0 : e.right;
          }),
        E && k != null && k !== 0)
      ) {
        var I = k < window.innerWidth;
        I && (R = k - m.x - C);
      }
      var T = {
          bottom: Math.max(m.y, S),
          height: v,
          left: Math.max(m.x, R),
          width: Math.max(Math.min(p, y), C),
          previousWindowSize: {
            height: window.innerHeight,
            width: window.innerWidth,
          },
          previousConvPanelRightBorder: k,
        },
        D = {
          bottom: n,
          height: c ? u : null,
          left: d,
          width: g,
          previousWindowSize: f,
          previousConvPanelRightBorder: _,
        },
        x = !r("lodash").isEqual(T, D);
      return babelHelpers.extends({}, T, { hasChanges: x });
    }
    ((l.processResizeAction = c),
      (l.processMoveAction = d),
      (l.calculateWindowResizeState = m));
  },
  98,
);
