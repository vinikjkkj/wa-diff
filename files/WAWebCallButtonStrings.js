__d(
  "WAWebCallButtonStrings",
  ["fbt"],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    function e() {
      return s._(/*BTDS*/ "Voice call");
    }
    function u() {
      return s._(/*BTDS*/ "Video call");
    }
    function c() {
      return s._(
        /*BTDS*/ "Your browser doesn't support calling. Please update your browser or try another browser.",
      );
    }
    function d() {
      return s._(
        /*BTDS*/ "Something went wrong. Please refresh the page and try again.",
      );
    }
    ((l.getVoiceCallLabel = e),
      (l.getVideoCallLabel = u),
      (l.getUnsupportedBrowserTooltip = c),
      (l.getCallingInitFailedTooltip = d));
  },
  226,
);
