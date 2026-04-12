__d(
  "WAWebMultiParticipantCallImage.react",
  ["WAWebDetailImage.react", "WAWebVoipUiContext", "react", "stylex"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u = s || (s = o("react")),
      c = s.useContext,
      d = { width: "x5lhr3w", height: "x16ye13r", $$css: !0 },
      m = {
        container: {
          position: "x1n2onr6",
          backgroundColor: "x1c7u0tx",
          borderStartStartRadius: "x1c9tyrk",
          borderStartEndRadius: "xeusxvb",
          borderEndEndRadius: "x1pahc9y",
          borderEndStartRadius: "x1ertn4p",
          overflowX: "x6ikm8r",
          overflowY: "x10wlt62",
          $$css: !0,
        },
        containerSize: function (t) {
          return [
            {
              width: t != null ? "x5lhr3w" : t,
              height: t != null ? "x16ye13r" : t,
              $$css: !0,
            },
            {
              "--x-width": (function (e) {
                return typeof e == "number" ? e + "px" : e != null ? e : void 0;
              })(t),
              "--x-height": (function (e) {
                return typeof e == "number" ? e + "px" : e != null ? e : void 0;
              })(t),
            },
          ];
        },
        imageOneAuto: function (t) {
          return [
            d,
            {
              "--x-width": (function (e) {
                return typeof e == "number" ? e + "px" : e != null ? e : void 0;
              })("max(49px, min(" + (t != null ? t : 0) * 0.2 + "px, 120px))"),
              "--x-height": (function (e) {
                return typeof e == "number" ? e + "px" : e != null ? e : void 0;
              })("max(49px, min(" + (t != null ? t : 0) * 0.2 + "px, 120px))"),
            },
          ];
        },
      };
    function p(t) {
      var n = t.participantWids,
        a = t.size,
        i = a === void 0 ? 49 : a,
        l = c(r("WAWebVoipUiContext")),
        s = l.uiHeight,
        d = n.slice(0, 3),
        p = d.length;
      if (p === 0) return null;
      var _ = (function (e) {
          if (e === "auto") return 120;
          {
            var t = e;
            return t;
          }
        })(i),
        f = (function (e) {
          if (e === "auto" && p === 1) return null;
          if (e === "auto") return m.containerSize(120);
          {
            var t = e;
            return m.containerSize(t);
          }
        })(i),
        g = (function (e) {
          if (e === "auto")
            return o("WAWebDetailImage.react").DetailImageQuality.High;
          {
            var t = e;
            if (t > 49)
              return o("WAWebDetailImage.react").DetailImageQuality.High;
          }
          return o("WAWebDetailImage.react").DetailImageQuality.Low;
        })(i);
      if (p === 1)
        return u.jsx(
          "div",
          babelHelpers.extends(
            {},
            (e || (e = r("stylex"))).props(m.container, f),
            {
              children: u.jsx(o("WAWebDetailImage.react").DetailImage, {
                id: d[0],
                size: i === "auto" ? null : i,
                quality: g,
                customDimensionsStyle: i === "auto",
                waitIdle: !0,
                shape: o("WAWebDetailImage.react").DetailImageShape.Circle,
                xstyle: i === "auto" && m.imageOneAuto(s),
              }),
            },
          ),
        );
      if (p === 2) {
        var h = Math.round(_ * 1.5);
        return u.jsxs(
          "div",
          babelHelpers.extends(
            {},
            (e || (e = r("stylex"))).props(m.container, f),
            {
              children: [
                u.jsx("div", {
                  className:
                    "x10l6tqk x13vifvy x1o0tod x1ax8nco x5yr21d x6ikm8r x10wlt62",
                  children: u.jsx("div", {
                    className: "x10l6tqk xwa60dl xbudbmw x11lhmoz",
                    children: u.jsx(o("WAWebDetailImage.react").DetailImage, {
                      id: d[0],
                      size: h,
                      quality: o("WAWebDetailImage.react").DetailImageQuality
                        .High,
                      waitIdle: !0,
                    }),
                  }),
                }),
                u.jsx("div", {
                  className:
                    "x10l6tqk x13vifvy xtijo5x x1ax8nco x5yr21d x6ikm8r x10wlt62",
                  children: u.jsx("div", {
                    className: "x10l6tqk xwa60dl xbudbmw x11lhmoz",
                    children: u.jsx(o("WAWebDetailImage.react").DetailImage, {
                      id: d[1],
                      size: h,
                      quality: o("WAWebDetailImage.react").DetailImageQuality
                        .High,
                      waitIdle: !0,
                    }),
                  }),
                }),
              ],
            },
          ),
        );
      }
      var y = Math.round(_ * 1.5);
      return u.jsxs(
        "div",
        babelHelpers.extends(
          {},
          (e || (e = r("stylex"))).props(m.container, f),
          {
            children: [
              u.jsx("div", {
                className:
                  "x10l6tqk x13vifvy x1o0tod x1ax8nco x5yr21d x6ikm8r x10wlt62",
                children: u.jsx("div", {
                  className: "x10l6tqk xwa60dl xbudbmw x11lhmoz",
                  children: u.jsx(o("WAWebDetailImage.react").DetailImage, {
                    id: d[0],
                    size: y,
                    quality: o("WAWebDetailImage.react").DetailImageQuality
                      .High,
                    waitIdle: !0,
                  }),
                }),
              }),
              u.jsx("div", {
                className:
                  "x10l6tqk x13vifvy xtijo5x x1ax8nco xw4yvfu x6ikm8r x10wlt62",
                children: u.jsx("div", {
                  className: "x10l6tqk xwa60dl xbudbmw x11lhmoz",
                  children: u.jsx(o("WAWebDetailImage.react").DetailImage, {
                    id: d[1],
                    size: y,
                    quality: o("WAWebDetailImage.react").DetailImageQuality
                      .High,
                    waitIdle: !0,
                  }),
                }),
              }),
              u.jsx("div", {
                className:
                  "x10l6tqk x1ey2m1c xtijo5x x1ax8nco xw4yvfu x6ikm8r x10wlt62",
                children: u.jsx("div", {
                  className: "x10l6tqk xwa60dl xbudbmw x11lhmoz",
                  children: u.jsx(o("WAWebDetailImage.react").DetailImage, {
                    id: d[2],
                    size: y,
                    quality: o("WAWebDetailImage.react").DetailImageQuality
                      .High,
                    waitIdle: !0,
                  }),
                }),
              }),
            ],
          },
        ),
      );
    }
    ((p.displayName = p.name + " [from " + i.id + "]"), (l.default = p));
  },
  98,
);
