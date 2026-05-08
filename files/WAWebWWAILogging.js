__d(
  "WAWebWWAILogging",
  ["WALogger"],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c,
      d,
      m = !1;
    function p() {
      m ||
        ((m = !0),
        o("WALogger")
          .WARN(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "[WWAI] Transport not registered. Feature gated on but TEE connection unavailable.",
              ])),
          )
          .sendLogs("wwai-transport-missing"));
    }
    function _(e, t) {
      o("WALogger")
        .WARN(
          s ||
            (s = babelHelpers.taggedTemplateLiteralLoose([
              "[WWAI] Request sent: tone=",
              " requestId=",
              "",
            ])),
          e,
          t,
        )
        .sendLogs("wwai-request-sent");
    }
    function f(e, t) {
      o("WALogger")
        .WARN(
          u ||
            (u = babelHelpers.taggedTemplateLiteralLoose([
              "[WWAI] Request error: type=",
              " requestId=",
              "",
            ])),
          e,
          t,
        )
        .sendLogs("wwai-request-error");
    }
    function g(e, t) {
      o("WALogger")
        .WARN(
          c ||
            (c = babelHelpers.taggedTemplateLiteralLoose([
              "[WWAI] Feedback: type=",
              " tone=",
              "",
            ])),
          e,
          t,
        )
        .sendLogs("wwai-feedback");
    }
    function h(e) {
      o("WALogger")
        .WARN(
          d ||
            (d = babelHelpers.taggedTemplateLiteralLoose([
              "[WWAI] Suggestion accepted: tone=",
              "",
            ])),
          e,
        )
        .sendLogs("wwai-suggestion-accepted");
    }
    ((l.logTransportMissingOnce = p),
      (l.logRequestSent = _),
      (l.logRequestError = f),
      (l.logFeedback = g),
      (l.logSuggestionAccepted = h));
  },
  98,
);
