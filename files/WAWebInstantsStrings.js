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
      return s._(/*BTDS*/ "Close").toString();
    }
    function f() {
      return s._(/*BTDS*/ "Next").toString();
    }
    function g() {
      return s._(/*BTDS*/ "More reactions").toString();
    }
    function h() {
      return s._(/*BTDS*/ "Reply\u2026").toString();
    }
    function y() {
      return s._(/*BTDS*/ "Send").toString();
    }
    function C(e) {
      return e
        ? s._(/*BTDS*/ "Exit full screen").toString()
        : s._(/*BTDS*/ "Full screen").toString();
    }
    function b() {
      return s._(/*BTDS*/ "More options").toString();
    }
    function v() {
      return s._(/*BTDS*/ "Report").toString();
    }
    function S() {
      return s._(/*BTDS*/ "This Zap was deleted").toString();
    }
    ((l.getInstantLabel = e),
      (l.getInstantCardRetryLabel = u),
      (l.getInstantCardLabel = c),
      (l.getInstantReplayLabel = d),
      (l.getInstantCardAccessibilityLabel = m),
      (l.getInstantViewerAccessibilityLabel = p),
      (l.getInstantViewerCloseLabel = _),
      (l.getInstantViewerNextLabel = f),
      (l.getInstantViewerMoreReactionsLabel = g),
      (l.getInstantViewerReplyPlaceholder = h),
      (l.getInstantViewerSendLabel = y),
      (l.getInstantViewerFullscreenLabel = C),
      (l.getInstantViewerMoreOptionsLabel = b),
      (l.getInstantViewerReportLabel = v),
      (l.getInstantViewerDeletedLabel = S));
  },
  226,
);
