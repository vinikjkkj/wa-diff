__d(
  "VideoPlayerCaptionsDisplay.react",
  [
    "FBLogger",
    "VideoPlayerCaptionsDisplayConfigContext",
    "VideoPlayerControlsBottomRowAddOnContext",
    "VideoPlayerHooks",
    "react",
    "react-compiler-runtime",
    "stylex",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u,
      c = s || (s = o("react")),
      d = s.useContext,
      m = {
        captionsCenterAlign: {
          justifyContent: "xl56j7k",
          textAlign: "x2b8uid",
          $$css: !0,
        },
        captionsContainer: {
          bottom: "xfqi8uc",
          boxSizing: "x9f619",
          display: "x78zum5",
          justifyContent: "xl56j7k",
          position: "x10l6tqk",
          textAlign: "x2b8uid",
          transitionDuration: "xu6gjpd",
          transitionProperty: "x11xpdln",
          transitionTimingFunction: "x1r7x56h",
          width: "xh8yej3",
          $$css: !0,
        },
        captionsLeftAlign: {
          justifyContent: "x1nhvcw1",
          textAlign: "x1yc453h",
          $$css: !0,
        },
        captionsRightAlign: {
          justifyContent: "x13a6bvl",
          textAlign: "xp4054r",
          $$css: !0,
        },
      },
      p = {
        BIG: "25px",
        BIGGER: "30px",
        BIGGEST: "34px",
        DEFAULT: "17px",
        MEDIUM: "21px",
        SMALL: "13px",
        SMALLEST: "8px",
      },
      _ = { DARK: 0.75, DEFAULT: 0.45, LIGHT: 0.25, OPAQUE: 1, TRANSPARENT: 0 },
      f = {
        BLACK: "20, 22, 26",
        BLUE: "0, 0, 255",
        CYAN: "0, 255, 255",
        GREEN: "0, 255, 0",
        MAGENTA: "255, 0, 255",
        RED: "255, 0, 0",
        WHITE: "255, 255, 255",
        YELLOW: "255, 255, 0",
      };
    function g(e) {
      switch (e) {
        case "center":
          return m.captionsCenterAlign;
        case "left":
          return m.captionsLeftAlign;
        case "right":
          return m.captionsRightAlign;
        default:
          r("FBLogger")("comet_video_player").mustfix(
            "Unsupported captions text alignment: %s",
            e,
          );
      }
    }
    function h(e, t, n) {
      var r = {},
        o = e.captionsBackgroundColor,
        a = e.captionsBackgroundOpacity,
        i = e.captionsTextColor,
        l = e.captionsTextSize;
      if (o !== null) {
        var s = a !== null ? _[a] : 1;
        r.backgroundColor = "rgba(" + f[o] + "," + s + ")";
      }
      return (
        i !== null && (r.color = "rgba(" + f[i] + ")"),
        l !== null &&
          (r.fontSize = t != null ? babelHelpers.extends({}, p, t)[l] : p[l]),
        n && (r.marginBottom = 35),
        r
      );
    }
    function y(t) {
      var n,
        a,
        i = o("react-compiler-runtime").c(14),
        l = t.activeCaptions,
        s = t.adjustments,
        p = t.captionDisplayStyle,
        _ = l == null ? void 0 : l.rows,
        f = d(r("VideoPlayerCaptionsDisplayConfigContext")),
        y = f.liveCaptionsTextAlignment,
        S = f.textSizeMapping,
        R = d(
          o("VideoPlayerControlsBottomRowAddOnContext")
            .VideoPlayerControlsBottomRowAddOnContext,
        ),
        L;
      i[0] !== R
        ? ((L = R == null ? void 0 : R.getBottomRowAddOn()),
          (i[0] = R),
          (i[1] = L))
        : (L = i[1]);
      var E = L != null,
        k;
      i[2] === Symbol.for("react.memo_cache_sentinel")
        ? ((k = {}), (i[2] = k))
        : (k = i[2]);
      var I = k;
      if (p) {
        var T;
        (i[3] !== p || i[4] !== E || i[5] !== S
          ? ((T = h(p, S, E)), (i[3] = p), (i[4] = E), (i[5] = S), (i[6] = T))
          : (T = i[6]),
          (I = T));
      }
      var D = (u || (u = o("VideoPlayerHooks"))).useIsLive(),
        x =
          (n =
            l == null || (a = l.styles) == null ? void 0 : a.textAlignment) !=
          null
            ? n
            : "center";
      if (_ != null && _.length > 0) {
        var $;
        if (
          i[7] !== s ||
          i[8] !== I ||
          i[9] !== x ||
          i[10] !== D ||
          i[11] !== y ||
          i[12] !== _
        ) {
          var P = _.map(v).filter(b);
          (($ =
            P.length > 0
              ? c.jsx("div", {
                  className: (e || (e = r("stylex")))(
                    m.captionsContainer,
                    g(D && y != null ? y : x),
                  ),
                  style: {
                    paddingLeft: s.left,
                    paddingRight: s.right,
                    transform: "translateY(" + -s.bottom + "px)",
                  },
                  children: c.jsx("div", {
                    className:
                      "x18l40ae x14ctfv x1lkfr7t xk50ysn x37zpob xdj266r x32vodv xat24cr x1v6o4qg xulzisn xoge9qh x1uwfbks xytt9sc",
                    style: I,
                    children: P.map(C),
                  }),
                })
              : null),
            (i[7] = s),
            (i[8] = I),
            (i[9] = x),
            (i[10] = D),
            (i[11] = y),
            (i[12] = _),
            (i[13] = $));
        } else $ = i[13];
        return $;
      }
      return null;
    }
    function C(e, t) {
      return c.jsxs("span", { children: [e, c.jsx("br", {})] }, t);
    }
    C.displayName = C.name + " [from " + i.id + "]";
    function b(e) {
      return !!e;
    }
    function v(e) {
      return e.trim();
    }
    var S = c.memo(y),
      R = S;
    l.default = R;
  },
  98,
);
