__d(
  "WAWebUserPrefsVoip",
  ["WATimeUtils", "WAWebUserPrefsStore"],
  function (t, n, r, o, a, i, l) {
    var e = "calls_tab_last_seen",
      s = "selected_audio_input_device",
      u = "selected_audio_output_device",
      c = "selected_video_input_device",
      d = "last_call_rating_time";
    function m() {
      var t = r("WAWebUserPrefsStore").get(e);
      return typeof t == "number" ? t : 0;
    }
    function p() {
      var t = o("WATimeUtils").unixTime();
      r("WAWebUserPrefsStore").set(e, t);
    }
    function _() {
      var e = r("WAWebUserPrefsStore").get(s);
      return typeof e == "string" ? e : null;
    }
    function f(e) {
      r("WAWebUserPrefsStore").set(s, e);
    }
    function g() {
      var e = r("WAWebUserPrefsStore").get(u);
      return typeof e == "string" ? e : null;
    }
    function h(e) {
      r("WAWebUserPrefsStore").set(u, e);
    }
    function y() {
      var e = r("WAWebUserPrefsStore").get(c);
      return typeof e == "string" ? e : null;
    }
    function C(e) {
      r("WAWebUserPrefsStore").set(c, e);
    }
    var b = null;
    function v() {
      return b;
    }
    function S(e) {
      b = e;
    }
    function R() {
      b = null;
    }
    var L = null;
    function E() {
      return L;
    }
    function k(e) {
      L = e;
    }
    function I() {
      L = null;
    }
    function T() {
      var e = r("WAWebUserPrefsStore").get(d);
      return typeof e == "number" ? e : null;
    }
    function D(e) {
      r("WAWebUserPrefsStore").set(d, e);
    }
    ((l.getCallsTabLastSeenTimestamp = m),
      (l.setCallsTabLastSeenTimestamp = p),
      (l.getSelectedAudioInputDevice = _),
      (l.setSelectedAudioInputDevice = f),
      (l.getSelectedAudioOutputDevice = g),
      (l.setSelectedAudioOutputDevice = h),
      (l.getSelectedVideoInputDevice = y),
      (l.setSelectedVideoInputDevice = C),
      (l.getLandingPageVideoDeviceId = v),
      (l.setLandingPageVideoDeviceId = S),
      (l.clearLandingPageVideoDeviceId = R),
      (l.getLandingPageColorIndex = E),
      (l.saveLandingPageColorIndex = k),
      (l.clearLandingPageColorIndex = I),
      (l.getLastCallRatingTime = T),
      (l.setLastCallRatingTime = D));
  },
  98,
);
