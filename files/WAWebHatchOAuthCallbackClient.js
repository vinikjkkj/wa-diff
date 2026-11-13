__d(
  "WAWebHatchOAuthCallbackClient",
  ["WALogger", "WAWebEnvironment", "justknobx"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = new Map([
        ["web.whatsapp.com", "wa_web"],
        ["dev-web.whatsapp.com", "wa_web_dev"],
      ]);
    function u(e) {
      e === void 0 && (e = window.location.hostname);
      var t = s.get(e);
      return t == null ||
        r("WAWebEnvironment").getSubPlatform() === "win_hybrid" ||
        !c()
        ? null
        : t;
    }
    function c() {
      try {
        return r("justknobx")._("7681") && r("justknobx")._("7682");
      } catch (t) {
        return (
          o("WALogger")
            .WARN(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "hatch-oauth-callback-client/knob-unreadable",
                ])),
            )
            .sendLogs("hatch-oauth-callback-client-knob-unreadable"),
          !1
        );
      }
    }
    l.getHatchOAuthCallbackClient = u;
  },
  98,
);
