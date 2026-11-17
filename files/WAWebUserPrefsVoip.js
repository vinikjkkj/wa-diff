__d(
  "WAWebUserPrefsVoip",
  ["WATimeUtils", "WAWebUserPrefsStore"],
  function (t, n, r, o, a, i, l) {
    var e = "calls_tab_last_seen",
      s = "selected_audio_input_device",
      u = "selected_audio_output_device",
      c = "selected_video_input_device",
      d = "video_effects_enabled",
      m = "last_call_rating_time",
      p = "sctp_prewarm_slow",
      _ = -1;
    function f() {
      var t = r("WAWebUserPrefsStore").get(e);
      return typeof t == "number" ? t : 0;
    }
    function g() {
      var t = o("WATimeUtils").unixTime();
      r("WAWebUserPrefsStore").set(e, t);
    }
    function h() {
      var e = r("WAWebUserPrefsStore").get(s);
      return typeof e == "string" ? e : null;
    }
    function y(e) {
      r("WAWebUserPrefsStore").set(s, e);
    }
    function C() {
      var e = r("WAWebUserPrefsStore").get(u);
      return typeof e == "string" ? e : null;
    }
    function b(e) {
      r("WAWebUserPrefsStore").set(u, e);
    }
    function v() {
      var e = r("WAWebUserPrefsStore").get(c);
      return typeof e == "string" ? e : null;
    }
    function S(e) {
      r("WAWebUserPrefsStore").set(c, e);
    }
    function R() {
      return r("WAWebUserPrefsStore").get(d) === !0;
    }
    function L(e) {
      r("WAWebUserPrefsStore").set(d, e);
    }
    var E = null;
    function k() {
      return E;
    }
    function I(e) {
      E = e;
    }
    function T() {
      E = null;
    }
    var D = null;
    function x() {
      return D;
    }
    function $(e) {
      D = e;
    }
    function P() {
      D = null;
    }
    function N() {
      var e = r("WAWebUserPrefsStore").get(m);
      return typeof e == "number" ? e : null;
    }
    function M(e) {
      r("WAWebUserPrefsStore").set(m, e);
    }
    function w() {
      var e = r("WAWebUserPrefsStore").get(p);
      return e == null ||
        typeof e != "object" ||
        typeof e.ms != "number" ||
        typeof e.at != "number"
        ? null
        : { ms: e.ms, at: e.at };
    }
    function A(e) {
      var t = { ms: Math.round(e), at: o("WATimeUtils").unixTime() };
      r("WAWebUserPrefsStore").set(p, t);
    }
    ((l.SCTP_PREWARM_FAILED_MS = _),
      (l.getCallsTabLastSeenTimestamp = f),
      (l.setCallsTabLastSeenTimestamp = g),
      (l.getSelectedAudioInputDevice = h),
      (l.setSelectedAudioInputDevice = y),
      (l.getSelectedAudioOutputDevice = C),
      (l.setSelectedAudioOutputDevice = b),
      (l.getSelectedVideoInputDevice = v),
      (l.setSelectedVideoInputDevice = S),
      (l.getVideoEffectsEnabled = R),
      (l.setVideoEffectsEnabled = L),
      (l.getLandingPageVideoDeviceId = k),
      (l.setLandingPageVideoDeviceId = I),
      (l.clearLandingPageVideoDeviceId = T),
      (l.getLandingPageColorIndex = x),
      (l.saveLandingPageColorIndex = $),
      (l.clearLandingPageColorIndex = P),
      (l.getLastCallRatingTime = N),
      (l.setLastCallRatingTime = M),
      (l.getSctpPrewarmSlowRecord = w),
      (l.markSctpPrewarmSlow = A));
  },
  98,
);
