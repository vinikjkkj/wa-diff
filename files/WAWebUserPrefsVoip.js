__d(
  "WAWebUserPrefsVoip",
  ["WATimeUtils", "WAWebUserPrefsStore"],
  function (t, n, r, o, a, i, l) {
    var e = "calls_tab_last_seen",
      s = "selected_audio_input_device",
      u = "selected_audio_output_device",
      c = "selected_video_input_device",
      d = "last_call_rating_time",
      m = "sctp_prewarm_slow",
      p = -1;
    function _() {
      var t = r("WAWebUserPrefsStore").get(e);
      return typeof t == "number" ? t : 0;
    }
    function f() {
      var t = o("WATimeUtils").unixTime();
      r("WAWebUserPrefsStore").set(e, t);
    }
    function g() {
      var e = r("WAWebUserPrefsStore").get(s);
      return typeof e == "string" ? e : null;
    }
    function h(e) {
      r("WAWebUserPrefsStore").set(s, e);
    }
    function y() {
      var e = r("WAWebUserPrefsStore").get(u);
      return typeof e == "string" ? e : null;
    }
    function C(e) {
      r("WAWebUserPrefsStore").set(u, e);
    }
    function b() {
      var e = r("WAWebUserPrefsStore").get(c);
      return typeof e == "string" ? e : null;
    }
    function v(e) {
      r("WAWebUserPrefsStore").set(c, e);
    }
    var S = null;
    function R() {
      return S;
    }
    function L(e) {
      S = e;
    }
    function E() {
      S = null;
    }
    var k = null;
    function I() {
      return k;
    }
    function T(e) {
      k = e;
    }
    function D() {
      k = null;
    }
    function x() {
      var e = r("WAWebUserPrefsStore").get(d);
      return typeof e == "number" ? e : null;
    }
    function $(e) {
      r("WAWebUserPrefsStore").set(d, e);
    }
    function P() {
      var e = r("WAWebUserPrefsStore").get(m);
      return e == null ||
        typeof e != "object" ||
        typeof e.ms != "number" ||
        typeof e.at != "number"
        ? null
        : { ms: e.ms, at: e.at };
    }
    function N(e) {
      var t = { ms: Math.round(e), at: o("WATimeUtils").unixTime() };
      r("WAWebUserPrefsStore").set(m, t);
    }
    ((l.SCTP_PREWARM_FAILED_MS = p),
      (l.getCallsTabLastSeenTimestamp = _),
      (l.setCallsTabLastSeenTimestamp = f),
      (l.getSelectedAudioInputDevice = g),
      (l.setSelectedAudioInputDevice = h),
      (l.getSelectedAudioOutputDevice = y),
      (l.setSelectedAudioOutputDevice = C),
      (l.getSelectedVideoInputDevice = b),
      (l.setSelectedVideoInputDevice = v),
      (l.getLandingPageVideoDeviceId = R),
      (l.setLandingPageVideoDeviceId = L),
      (l.clearLandingPageVideoDeviceId = E),
      (l.getLandingPageColorIndex = I),
      (l.saveLandingPageColorIndex = T),
      (l.clearLandingPageColorIndex = D),
      (l.getLastCallRatingTime = x),
      (l.setLastCallRatingTime = $),
      (l.getSctpPrewarmSlowRecord = P),
      (l.markSctpPrewarmSlow = N));
  },
  98,
);
