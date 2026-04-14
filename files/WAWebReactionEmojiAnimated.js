__d(
  "WAWebReactionEmojiAnimated",
  [
    "WAWebReactionEmoji.react",
    "WAWebReactionGatingUtils",
    "WAWebVelocityAnimate",
    "react",
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
      var n = t.reaction,
        a = t.removeAnimation,
        i = t.shouldAnimate,
        l = m(null);
      return (
        d(
          function () {
            (a == null ? void 0 : a.shouldRemoveAnimation) === !0 &&
              l.current != null &&
              r("WAWebVelocityAnimate")(
                l.current,
                { scale: [0, 1] },
                { duration: p, easing: [0.83, 0, 0.17, 1] },
              ).then(function () {
                a.animationFinished();
              });
          },
          [a],
        ),
        u.jsx(
          "div",
          babelHelpers.extends(
            { ref: l },
            (e || (e = r("stylex"))).props(
              i &&
                (a == null ? void 0 : a.shouldRemoveAnimation) !== !0 &&
                (o("WAWebReactionGatingUtils").isReactionsMotionV2Enabled()
                  ? g.animateReactionV2
                  : g.animateReaction),
            ),
            {
              children: u.jsx(o("WAWebReactionEmoji.react").ReactionEmoji, {
                reaction: n,
                scale: "bubble",
              }),
            },
          ),
        )
      );
    }
    ((h.displayName = h.name + " [from " + i.id + "]"),
      (l.ANIMATION_REMOVE_LENGTH = p),
      (l.ReactionEmojiAnimated = h));
  },
  98,
);
