__d(
  "WAWebVoipVideoEffectsMessages",
  ["fbt"],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e = "voip-video-effects-stopped";
    function u(e) {
      switch (e) {
        case "start_timeout":
          return s._(
            /*BTDS*/ "Effects took too long to start and were turned off",
          );
        case "start_error":
          return s._(/*BTDS*/ "Effects couldn't start and were turned off");
        case "start_failed":
          return s._(/*BTDS*/ "Couldn't turn on effects");
        case "failed":
          return s._(/*BTDS*/ "Effects stopped working and were turned off");
        case "overloaded":
          return s._(
            /*BTDS*/ "Effects were turned off to keep your video smooth",
          );
        case "too_slow":
          return s._(
            /*BTDS*/ "Effects can't run smoothly on this computer and were turned off",
          );
      }
    }
    function c() {
      return s._(/*BTDS*/ "Turn back on");
    }
    ((l.VIDEO_EFFECTS_STOPPED_TOAST_ID = e),
      (l.getVideoEffectsStoppedMessage = u),
      (l.getTurnVideoEffectsBackOnLabel = c));
  },
  226,
);
