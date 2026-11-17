__d(
  "WAWebInstantsStrings",
  ["fbt"],
  function (t, n, r, o, a, i, l, s) {
    function e() {
      return s._(/*BTDS*/ "Zap").toString();
    }
    function u() {
      return s._(/*BTDS*/ "Retry").toString();
    }
    function c(e) {
      return s
        ._(/*BTDS*/ '_j{"*":"{count} Zaps","_1":"Zap"}', [
          s._plural(e, "count"),
        ])
        .toString();
    }
    function d() {
      return s._(/*BTDS*/ "Replay").toString();
    }
    function m(e, t) {
      return e
        ? s
            ._(/*BTDS*/ '_j{"*":"{count} Zaps, opened","_1":"Zap, opened"}', [
              s._plural(t, "count"),
            ])
            .toString()
        : s
            ._(
              /*BTDS*/ '_j{"*":"{count} Zaps, unopened","_1":"Zap, unopened"}',
              [s._plural(t, "count")],
            )
            .toString();
    }
    function p(e, t) {
      return s
        ._(/*BTDS*/ "Zap {position} of {total}", [
          s._param("position", e),
          s._param("total", t),
        ])
        .toString();
    }
    function _() {
      return s._(/*BTDS*/ "You").toString();
    }
    function f() {
      return s._(/*BTDS*/ "Close").toString();
    }
    function g() {
      return s._(/*BTDS*/ "Next").toString();
    }
    function h() {
      return s._(/*BTDS*/ "More reactions").toString();
    }
    function y() {
      return s._(/*BTDS*/ "Reply\u2026").toString();
    }
    function C() {
      return s._(/*BTDS*/ "Send").toString();
    }
    function b(e) {
      return e
        ? s._(/*BTDS*/ "Exit full screen").toString()
        : s._(/*BTDS*/ "Full screen").toString();
    }
    function v(e) {
      return e
        ? s._(/*BTDS*/ "Unmute").toString()
        : s._(/*BTDS*/ "Mute").toString();
    }
    function S() {
      return s._(/*BTDS*/ "Couldn't play this video.").toString();
    }
    function R() {
      return s._(/*BTDS*/ "Retry").toString();
    }
    function L() {
      return s._(/*BTDS*/ "Play").toString();
    }
    function E() {
      return s._(/*BTDS*/ "More options").toString();
    }
    function k() {
      return s._(/*BTDS*/ "Report").toString();
    }
    function I() {
      return s._(/*BTDS*/ "This Zap was deleted").toString();
    }
    function T(e, t) {
      return t != null && t !== ""
        ? s
            ._(/*BTDS*/ "Video Zap from {sender name}: {caption}", [
              s._param("sender name", e),
              s._param("caption", t),
            ])
            .toString()
        : s
            ._(/*BTDS*/ "Video Zap from {sender name}", [
              s._param("sender name", e),
            ])
            .toString();
    }
    ((l.getInstantLabel = e),
      (l.getInstantCardRetryLabel = u),
      (l.getInstantCardLabel = c),
      (l.getInstantReplayLabel = d),
      (l.getInstantCardAccessibilityLabel = m),
      (l.getInstantViewerAccessibilityLabel = p),
      (l.getInstantViewerOwnSenderLabel = _),
      (l.getInstantViewerCloseLabel = f),
      (l.getInstantViewerNextLabel = g),
      (l.getInstantViewerMoreReactionsLabel = h),
      (l.getInstantViewerReplyPlaceholder = y),
      (l.getInstantViewerSendLabel = C),
      (l.getInstantViewerFullscreenLabel = b),
      (l.getInstantViewerSoundLabel = v),
      (l.getInstantViewerVideoFailedLabel = S),
      (l.getInstantViewerRetryLabel = R),
      (l.getInstantViewerPlayLabel = L),
      (l.getInstantViewerMoreOptionsLabel = E),
      (l.getInstantViewerReportLabel = k),
      (l.getInstantViewerDeletedLabel = I),
      (l.getInstantViewerVideoAccessibilityLabel = T));
  },
  226,
);
