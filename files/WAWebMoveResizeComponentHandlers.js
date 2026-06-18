__d(
  "WAWebMoveResizeComponentHandlers",
  [
    "WADeepEquals",
    "WAWebMoveResizeComponentUtils",
    "WAWebMoveResizeLogic",
    "WAWebMoveResizeValidation",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
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
    function s(e) {
      var t = e.aspectRatio,
        n = e.clientX,
        r = e.clientY,
        a = e.extraBottomContentHeight,
        i = e.extraTopContentHeight,
        l = e.height,
        s = e.independentResize,
        u = e.margin,
        c = e.minWidth,
        d = e.moveStartMousePosition,
        m = e.moveStartPositionStyle,
        p = e.resizeStartPiPStyle,
        _ = e.width,
        f = n - d.x,
        g = d.y - r,
        h = {
          resizeStartPiPStyle: p,
          width: _,
          moveStartPositionStyle: m,
          margin: u,
          aspectRatio: t,
          minWidth: c,
          windowWidth: window.innerWidth,
          windowHeight: window.innerHeight,
          extraTopContentHeight: i,
          extraBottomContentHeight: a,
          height: s ? l : void 0,
        },
        y = o("WAWebMoveResizeValidation").validateMoveResize({
          deltaBottom: g,
          deltaLeft: f,
          deltaWidth: 0,
          params: h,
          type: "MOVE",
        }),
        C = 0,
        b = 0;
      if (
        (f !== 0 && y.deltaLeft === 0
          ? f > 0
            ? (C = window.innerWidth - _ - u.x)
            : (C = u.x)
          : (C = m.left + y.deltaLeft),
        g !== 0 && y.deltaBottom === 0)
      )
        if (g > 0) {
          var v = s ? l : _ / t;
          b = window.innerHeight - v - u.y - i - 0.1;
        } else b = u.y + a;
      else b = m.bottom + y.deltaBottom;
      return { movedLeft: C, movedBottom: b };
    }
    function u(e) {
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
    ((l.processResizeAction = e),
      (l.processMoveAction = s),
      (l.calculateWindowResizeState = u));
  },
  98,
);
