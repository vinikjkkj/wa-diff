__d(
  "WAWebUserPrefsVoip",
  ["WATimeUtils", "WAWebUserPrefsStore"],
  function (t, n, r, o, a, i, l) {
    var e = "calls_tab_last_seen",
      s = "selected_audio_input_device",
      u = "selected_audio_output_device",
      c = "last_call_rating_time";
    function d() {
      var t = r("WAWebUserPrefsStore").get(e);
      return typeof t == "number" ? t : 0;
    }
    function m() {
      var t = o("WATimeUtils").unixTime();
      r("WAWebUserPrefsStore").set(e, t);
    }
    function p() {
      var e = r("WAWebUserPrefsStore").get(s);
      return typeof e == "string" ? e : null;
    }
    function _(e) {
      r("WAWebUserPrefsStore").set(s, e);
    }
    function f() {
      var e = r("WAWebUserPrefsStore").get(u);
      return typeof e == "string" ? e : null;
    }
    function g(e) {
      r("WAWebUserPrefsStore").set(u, e);
    }
    var h = null;
    function y() {
      return h;
    }
    function C(e) {
      h = e;
    }
    function b() {
      h = null;
    }
    var v = null;
    function S() {
      return v;
    }
    function R(e) {
      v = e;
    }
    function L() {
      v = null;
    }
    function E() {
      var e = r("WAWebUserPrefsStore").get(c);
      return typeof e == "number" ? e : null;
    }
    function k(e) {
      r("WAWebUserPrefsStore").set(c, e);
    }
    ((l.getCallsTabLastSeenTimestamp = d),
      (l.setCallsTabLastSeenTimestamp = m),
      (l.getSelectedAudioInputDevice = p),
      (l.setSelectedAudioInputDevice = _),
      (l.getSelectedAudioOutputDevice = f),
      (l.setSelectedAudioOutputDevice = g),
      (l.getLandingPageVideoDeviceId = y),
      (l.setLandingPageVideoDeviceId = C),
      (l.clearLandingPageVideoDeviceId = b),
      (l.getLandingPageColorIndex = S),
      (l.saveLandingPageColorIndex = R),
      (l.clearLandingPageColorIndex = L),
      (l.getLastCallRatingTime = E),
      (l.setLastCallRatingTime = k));
  },
  98,
);
