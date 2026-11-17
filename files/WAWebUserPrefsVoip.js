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
      f = "background_image",
      g = "last_call_rating_time",
      h = "sctp_prewarm_slow",
      y = -1;
    function C() {
      var e = r("WAWebUserPrefsStore").get(s);
      return typeof e == "number" ? e : 0;
    }
    function b() {
      var e = o("WATimeUtils").unixTime();
      r("WAWebUserPrefsStore").set(s, e);
    }
    function v() {
      var e = r("WAWebUserPrefsStore").get(u);
      return typeof e == "string" ? e : null;
    }
    function S(e) {
      r("WAWebUserPrefsStore").set(u, e);
    }
    function R() {
      var e = r("WAWebUserPrefsStore").get(c);
      return typeof e == "string" ? e : null;
    }
    function L(e) {
      r("WAWebUserPrefsStore").set(c, e);
    }
    function E() {
      var e = r("WAWebUserPrefsStore").get(d);
      return typeof e == "string" ? e : null;
    }
    function k(e) {
      r("WAWebUserPrefsStore").set(d, e);
    }
    function I() {
      return r("WAWebUserPrefsStore").get(m) === !0;
    }
    function T(e) {
      r("WAWebUserPrefsStore").set(m, e);
    }
    function D() {
      var e = x();
      return typeof e == "number" ? e : null;
    }
    function x() {
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
    function $(e) {
      r("WAWebUserPrefsStore").set(p, e);
    }
    function P() {
      var e = r("WAWebUserPrefsStore").get(_);
      return typeof e == "string" ? e : null;
    }
    function N(e) {
      r("WAWebUserPrefsStore").set(_, e);
    }
    function M() {
      var e = r("WAWebUserPrefsStore").get(f);
      return typeof e == "string" && e !== "" ? e : null;
    }
    function w(e) {
      r("WAWebUserPrefsStore").set(f, e);
    }
    var A = null;
    function F() {
      return A;
    }
    function O(e) {
      A = e;
    }
    function B() {
      A = null;
    }
    var W = null;
    function q() {
      return W;
    }
    function U(e) {
      W = e;
    }
    function V() {
      W = null;
    }
    function H() {
      var e = r("WAWebUserPrefsStore").get(g);
      return typeof e == "number" ? e : null;
    }
    function G(e) {
      r("WAWebUserPrefsStore").set(g, e);
    }
    function z() {
      var e = r("WAWebUserPrefsStore").get(h);
      return e == null ||
        typeof e != "object" ||
        typeof e.ms != "number" ||
        typeof e.at != "number"
        ? null
        : { ms: e.ms, at: e.at };
    }
    function j(e) {
      var t = { ms: Math.round(e), at: o("WATimeUtils").unixTime() };
      r("WAWebUserPrefsStore").set(h, t);
    }
    ((l.SCTP_PREWARM_FAILED_MS = y),
      (l.getCallsTabLastSeenTimestamp = C),
      (l.setCallsTabLastSeenTimestamp = b),
      (l.getSelectedAudioInputDevice = v),
      (l.setSelectedAudioInputDevice = S),
      (l.getSelectedAudioOutputDevice = R),
      (l.setSelectedAudioOutputDevice = L),
      (l.getSelectedVideoInputDevice = E),
      (l.setSelectedVideoInputDevice = k),
      (l.getVideoEffectsEnabled = I),
      (l.setVideoEffectsEnabled = T),
      (l.getVideoEffectsOnMsSinceKeptChoice = D),
      (l.setVideoEffectsOnMsSinceKeptChoice = $),
      (l.getBackgroundBlurLevelPreference = P),
      (l.setBackgroundBlurLevelPreference = N),
      (l.getBackgroundImagePreference = M),
      (l.setBackgroundImagePreference = w),
      (l.getLandingPageVideoDeviceId = F),
      (l.setLandingPageVideoDeviceId = O),
      (l.clearLandingPageVideoDeviceId = B),
      (l.getLandingPageColorIndex = q),
      (l.saveLandingPageColorIndex = U),
      (l.clearLandingPageColorIndex = V),
      (l.getLastCallRatingTime = H),
      (l.setLastCallRatingTime = G),
      (l.getSctpPrewarmSlowRecord = z),
      (l.markSctpPrewarmSlow = j));
  },
  98,
);
