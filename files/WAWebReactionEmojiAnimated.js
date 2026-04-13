__d(
  "WAWebReactionEmojiAnimated",
  [
    "WAWebReactionEmoji.react",
    "WAWebReactionGatingUtils",
    "WAWebVelocityAnimate",
    "react",
    "react-compiler-runtime",
    "stylex",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = s || (s = o("react")),
      c = s,
      d = c.useEffect,
      m = c.useRef,
      p = 70,
      _ = "xhfnc4l-B",
      f = "xk5vrc9-B",
      g = {
        animateReaction: {
          animationName: "xpxtiw3",
          animationDuration: "x2mfxb",
          animationTimingFunction: "x933yfc",
          animationFillMode: "x10e4vud",
          backfaceVisibility: "xlp1x4z",
          willChange: "x14wcmtf",
          $$css: !0,
        },
        animateReactionV2: {
          animationName: "x1nyre92",
          animationDuration: "xof6966",
          animationTimingFunction: "xu04aca",
          animationFillMode: "x10e4vud",
          backfaceVisibility: "xlp1x4z",
          willChange: "x14wcmtf",
          $$css: !0,
        },
      };
    function h(t) {
      var n = o("react-compiler-runtime").c(11),
        a = t.reaction,
        i = t.removeAnimation,
        l = t.shouldAnimate,
        s = m(null),
        c,
        _;
      (n[0] !== i
        ? ((c = function () {
            (i == null ? void 0 : i.shouldRemoveAnimation) === !0 &&
              s.current != null &&
              r("WAWebVelocityAnimate")(
                s.current,
                { scale: [0, 1] },
                { duration: p, easing: [0.83, 0, 0.17, 1] },
              ).then(function () {
                i.animationFinished();
              });
          }),
          (_ = [i]),
          (n[0] = i),
          (n[1] = c),
          (n[2] = _))
        : ((c = n[1]), (_ = n[2])),
        d(c, _));
      var f;
      n[3] !== (i == null ? void 0 : i.shouldRemoveAnimation) || n[4] !== l
        ? ((f = (e || (e = r("stylex"))).props(
            l &&
              (i == null ? void 0 : i.shouldRemoveAnimation) !== !0 &&
              (o("WAWebReactionGatingUtils").isReactionsMotionV2Enabled()
                ? g.animateReactionV2
                : g.animateReaction),
          )),
          (n[3] = i == null ? void 0 : i.shouldRemoveAnimation),
          (n[4] = l),
          (n[5] = f))
        : (f = n[5]);
      var h;
      n[6] !== a
        ? ((h = u.jsx(o("WAWebReactionEmoji.react").ReactionEmoji, {
            reaction: a,
            scale: "bubble",
          })),
          (n[6] = a),
          (n[7] = h))
        : (h = n[7]);
      var y;
      return (
        n[8] !== f || n[9] !== h
          ? ((y = u.jsx(
              "div",
              babelHelpers.extends({ ref: s }, f, { children: h }),
            )),
            (n[8] = f),
            (n[9] = h),
            (n[10] = y))
          : (y = n[10]),
        y
      );
    }
    ((l.ANIMATION_REMOVE_LENGTH = p), (l.ReactionEmojiAnimated = h));
  },
  98,
);
