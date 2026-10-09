__d(
  "WAWebVoipPopoutDisplayModeState",
  ["WALogger", "WAWebEventEmitter"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = "VoipWindowModeChanged",
      u = "compact",
      c = new (r("WAWebEventEmitter"))(),
      d = "normal";
    function m() {
      return d;
    }
    function p() {
      return d === "compact";
    }
    function _(t) {
      d !== t &&
        ((d = t),
        o("WALogger").LOG(
          e ||
            (e = babelHelpers.taggedTemplateLiteralLoose([
              "voip: popout display mode changed to ",
              "",
            ])),
          t,
        ),
        c.trigger("change", t));
    }
    function f() {
      _("normal");
    }
    function g(e) {
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
    ((l.WAWebVoipPopoutDisplayModeEmitter = c),
      (l.getVoipPopoutDisplayMode = m),
      (l.getIsVoipPopoutCompact = p),
      (l.setVoipPopoutDisplayMode = _),
      (l.resetVoipPopoutDisplayMode = f),
      (l.parseNativeWindowModeMessage = g));
  },
  98,
);
