__d(
  "WAWebUserPrefsVoip",
  [
    "WALogger",
    "WATimeUtils",
    "WAWebLocalStorage",
    "WAWebUserPrefsStore",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = "calls_tab_last_seen",
      u = "selected_audio_input_device",
      c = "selected_audio_output_device",
      d = "selected_video_input_device",
      m = "video_effects_enabled",
      p = "video_effects_on_ms_since_kept_choice",
      _ = "background_blur_level",
      f = "background_blur_strength",
      g = "background_image",
      h = "last_call_rating_time",
      y = "sctp_prewarm_slow",
      C = -1;
    function b() {
      var e = r("WAWebUserPrefsStore").get(s);
      return typeof e == "number" ? e : 0;
    }
    function v() {
      var e = o("WATimeUtils").unixTime();
      r("WAWebUserPrefsStore").set(s, e);
    }
    function S() {
      var e = r("WAWebUserPrefsStore").get(u);
      return typeof e == "string" ? e : null;
    }
    function R(e) {
      r("WAWebUserPrefsStore").set(u, e);
    }
    function L() {
      var e = r("WAWebUserPrefsStore").get(c);
      return typeof e == "string" ? e : null;
    }
    function E(e) {
      r("WAWebUserPrefsStore").set(c, e);
    }
    function k() {
      var e = r("WAWebUserPrefsStore").get(d);
      return typeof e == "string" ? e : null;
    }
    function I(e) {
      r("WAWebUserPrefsStore").set(d, e);
    }
    function T() {
      return r("WAWebUserPrefsStore").get(m) === !0;
    }
    function D(e) {
      r("WAWebUserPrefsStore").set(m, e);
    }
    function x() {
      var e = $();
      return typeof e == "number" ? e : null;
    }
    function $() {
      if (r("WAWebLocalStorage") != null)
        try {
          return r("WAWebUserPrefsStore").getPSIgnoringCache(p);
        } catch (t) {
          o("WALogger")
            .WARN(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: [effects] could not read the time on",
                ])),
            )
            .catching(r("getErrorSafe")(t));
        }
      return r("WAWebUserPrefsStore").get(p);
    }
    function P(e) {
      r("WAWebUserPrefsStore").set(p, e);
    }
    function N() {
      var e = r("WAWebUserPrefsStore").get(_);
      return typeof e == "string" ? e : null;
    }
    function M() {
      var e = r("WAWebUserPrefsStore").get(f);
      return typeof e == "number" ? e : null;
    }
    function w(e) {
      r("WAWebUserPrefsStore").set(f, e);
    }
    function A() {
      var e = r("WAWebUserPrefsStore").get(g);
      return typeof e == "string" && e !== "" ? e : null;
    }
    function F(e) {
      r("WAWebUserPrefsStore").set(g, e);
    }
    var O = null;
    function B() {
      return O;
    }
    function W(e) {
      O = e;
    }
    function q() {
      O = null;
    }
    var U = null;
    function V() {
      return U;
    }
    function H(e) {
      U = e;
    }
    function G() {
      U = null;
    }
    function z() {
      var e = r("WAWebUserPrefsStore").get(h);
      return typeof e == "number" ? e : null;
    }
    function j(e) {
      r("WAWebUserPrefsStore").set(h, e);
    }
    function K() {
      var e = r("WAWebUserPrefsStore").get(y);
      return e == null ||
        typeof e != "object" ||
        typeof e.ms != "number" ||
        typeof e.at != "number"
        ? null
        : { ms: e.ms, at: e.at };
    }
    function Q(e) {
      var t = { ms: Math.round(e), at: o("WATimeUtils").unixTime() };
      r("WAWebUserPrefsStore").set(y, t);
    }
    ((l.SCTP_PREWARM_FAILED_MS = C),
      (l.getCallsTabLastSeenTimestamp = b),
      (l.setCallsTabLastSeenTimestamp = v),
      (l.getSelectedAudioInputDevice = S),
      (l.setSelectedAudioInputDevice = R),
      (l.getSelectedAudioOutputDevice = L),
      (l.setSelectedAudioOutputDevice = E),
      (l.getSelectedVideoInputDevice = k),
      (l.setSelectedVideoInputDevice = I),
      (l.getVideoEffectsEnabled = T),
      (l.setVideoEffectsEnabled = D),
      (l.getVideoEffectsOnMsSinceKeptChoice = x),
      (l.setVideoEffectsOnMsSinceKeptChoice = P),
      (l.getBackgroundBlurLevelPreference = N),
      (l.getBackgroundBlurStrengthPreference = M),
      (l.setBackgroundBlurStrengthPreference = w),
      (l.getBackgroundImagePreference = A),
      (l.setBackgroundImagePreference = F),
      (l.getLandingPageVideoDeviceId = B),
      (l.setLandingPageVideoDeviceId = W),
      (l.clearLandingPageVideoDeviceId = q),
      (l.getLandingPageColorIndex = V),
      (l.saveLandingPageColorIndex = H),
      (l.clearLandingPageColorIndex = G),
      (l.getLastCallRatingTime = z),
      (l.setLastCallRatingTime = j),
      (l.getSctpPrewarmSlowRecord = K),
      (l.markSctpPrewarmSlow = Q));
  },
  98,
);
