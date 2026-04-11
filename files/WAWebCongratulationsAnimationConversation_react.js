__d(
  "WAWebCongratulationsAnimationConversation.react",
  ["WAWebCongratulationsAnimation.react", "react", "useWAWebModelValues"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = e.useRef;
    function c(e, t) {
      e.animationCandidateData &&
        (t == null ||
          t.triggerAnimation({
            animation: e.animationCandidateData.animationType,
          }),
        e.setCelebrationAnimationLastPlayed());
    }
    function d(e) {
      var t = e.chat,
        n = u(),
        r = o("useWAWebModelValues").useModelValues(t, [
          "animationCandidateData",
          "celebrationAnimationLastPlayed",
        ]);
      return (
        r.animationCandidateData &&
          r.animationCandidateData.msgTimestampSeconds >
            r.celebrationAnimationLastPlayed &&
          c(r, n.current),
        s.jsx(
          o("WAWebCongratulationsAnimation.react").CongratulationsAnimation,
          { ref: n },
        )
      );
    }
    ((d.displayName = d.name + " [from " + i.id + "]"), (l.default = d));
  },
  98,
);
