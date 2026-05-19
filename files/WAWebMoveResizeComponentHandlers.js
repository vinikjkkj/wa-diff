__d(
  "WAWebMoveResizeComponentHandlers",
  [
    "WADeepEquals",
    "WALogger",
    "WAWebMoveResizeComponentUtils",
    "WAWebMoveResizeLogic",
    "WAWebMoveResizeValidation",
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
        r = e.escapeConversationHeader,
        a = e.extraBottomContentHeight,
        i = e.extraTopContentHeight,
        l = e.getConversationHeaderOffset,
        s = e.height,
        u = e.independentResize,
        c = e.left,
        d = e.margin,
        m = e.minWidth,
        p = e.previousConvPanelRightBorder,
        _ = e.previousWindowSize,
        f = e.width,
        g = window.innerHeight - 2 * d.y - i - a,
        h = window.innerWidth - 2 * d.x,
        y = f,
        C = y / t,
        b = null;
      u && (b = Math.min(s, g));
      var v = n,
        S = c;
      (C > g && ((C = g), (y = g * t)), y > h && ((C = h / t), (y = h)));
      var R = b != null ? b : C;
      (v + R > g + d.y + a && (v = g + d.y + a - R),
        S + y > h + d.x && (S = h + d.x - y),
        _.width <
          S + y + d.x + o("WAWebMoveResizeComponentUtils").BORDER_TOLERANCE &&
          (S = h + d.x - y),
        _.height <
          v +
            R +
            d.y +
            a +
            o("WAWebMoveResizeComponentUtils").BORDER_TOLERANCE &&
          (v = g + d.y + a - R));
      var L =
          p != null &&
          p > 0 &&
          Math.abs(c + y + d.x - p) <
            o("WAWebMoveResizeComponentUtils").BORDER_TOLERANCE,
        E;
      if (
        (r &&
          l(function (e) {
            E = e == null ? void 0 : e.right;
          }),
        L && E != null && E !== 0)
      ) {
        var k = E < window.innerWidth;
        k && (S = E - d.x - y);
      }
      var I = {
          bottom: Math.max(d.y, v),
          height: b,
          left: Math.max(d.x, S),
          width: Math.max(Math.min(m, h), y),
          previousWindowSize: {
            height: window.innerHeight,
            width: window.innerWidth,
          },
          previousConvPanelRightBorder: E,
        },
        T = {
          bottom: n,
          height: u ? s : null,
          left: c,
          width: f,
          previousWindowSize: _,
          previousConvPanelRightBorder: p,
        },
        D = !o("WADeepEquals").deepEqual(I, T);
      return babelHelpers.extends({}, I, { hasChanges: D });
    }
    ((l.processResizeAction = c),
      (l.processMoveAction = d),
      (l.calculateWindowResizeState = m));
  },
  98,
);
