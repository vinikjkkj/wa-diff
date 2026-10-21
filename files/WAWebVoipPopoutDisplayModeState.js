__d(
  "WAWebVoipPopoutDisplayModeState",
  ["SecurePostMessage", "WALogger", "WAWebEventEmitter"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = "VoipWindowModeChanged",
      u = "compact",
      c = "VoipCompactContentShape",
      d = new (r("WAWebEventEmitter"))(),
      m = new (r("WAWebEventEmitter"))(),
      p = "normal",
      _ = null;
    function f() {
      return p;
    }
    function g() {
      return p === "compact";
    }
    function h(t) {
      p !== t &&
        ((p = t),
        o("WALogger").LOG(
          e ||
            (e = babelHelpers.taggedTemplateLiteralLoose([
              "voip: popout display mode changed to ",
              "",
            ])),
          t,
        ),
        d.trigger("change", t));
    }
    function y() {
      h("normal");
    }
    function C() {
      return _;
    }
    function b(e) {
      _ !== e && ((_ = e), m.trigger("change", e));
    }
    function v(e, t) {
      return e
        ? t != null && t < 1
          ? "video-portrait"
          : "video-landscape"
        : "audio";
    }
    function S(e, t) {
      e != null &&
        r("SecurePostMessage").sendMessageToSpecificOrigin(
          e,
          { messageType: c, shape: t },
          window.location.origin,
        );
    }
    function R(e) {
      if (e == null || typeof e != "object") return null;
      var t = e.waVoipWindowMode;
      return typeof t == "string"
        ? t === u
          ? "compact"
          : "normal"
        : e.messageType === s
          ? e.mode === u
            ? "compact"
            : "normal"
          : null;
    }
    ((l.WAWebVoipPopoutDisplayModeEmitter = d),
      (l.WAWebVoipPeerVideoAspectRatioEmitter = m),
      (l.getVoipPopoutDisplayMode = f),
      (l.getIsVoipPopoutCompact = g),
      (l.setVoipPopoutDisplayMode = h),
      (l.resetVoipPopoutDisplayMode = y),
      (l.getPeerVideoAspectRatio = C),
      (l.setPeerVideoAspectRatio = b),
      (l.getVoipCompactContentShape = v),
      (l.postVoipCompactContentShape = S),
      (l.parseNativeWindowModeMessage = R));
  },
  98,
);
