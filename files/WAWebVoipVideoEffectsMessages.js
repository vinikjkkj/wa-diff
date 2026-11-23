__d(
  "WAWebVoipVideoEffectsMessages",
  ["fbt"],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e = "voip-video-effects-stopped";
    function u(e) {
      switch (e) {
        case "start_timeout":
          return s._(/*BTDS*/ "");
        case "start_error":
          return s._(/*BTDS*/ "");
        case "start_failed":
          return s._(/*BTDS*/ "");
        case "failed":
          return s._(/*BTDS*/ "");
        case "overloaded":
          return s._(/*BTDS*/ "");
        case "too_slow":
          return s._(/*BTDS*/ "");
      }
    }
    function c() {
      return s._(/*BTDS*/ "");
    }
    ((l.VIDEO_EFFECTS_STOPPED_TOAST_ID = e),
      (l.getVideoEffectsStoppedMessage = u),
      (l.getTurnVideoEffectsBackOnLabel = c));
  },
  226,
);
