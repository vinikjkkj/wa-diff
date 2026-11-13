__d(
  "WAWebHatchOAuthCallbackReceiver",
  [
    "WALogger",
    "WAWebHatchOAuthAttempts",
    "WAWebNoop",
    "WAWebRequestHatchConnectors",
    "WAWebWriteHatchConnectors",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = "wa_web_hatch_oauth_channel",
      u = "wa_web_hatch_oauth_complete",
      c = 4096,
      d = /^[a-z_]{1,64}$/,
      m = "access_denied",
      p = !1;
    function _() {
      if (!(p || self.BroadcastChannel == null)) {
        var e = new self.BroadcastChannel(s);
        (e.addEventListener("message", f), (p = !0));
      }
    }
    function f(t) {
      var n = y(t);
      if (n != null) {
        var a = o("WAWebHatchOAuthAttempts").consumeHatchOAuthAttempt(n.state);
        if (a == null) {
          o("WALogger")
            .WARN(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "hatch-oauth: callback matched no pending attempt",
                ])),
            )
            .sendLogs("hatch-oauth-callback-unmatched");
          return;
        }
        var i = n.code,
          l = n.error,
          s = n.issuer,
          u = n.state;
        if (i == null) {
          (l != null &&
            o("WAWebWriteHatchConnectors")
              .forwardHatchConnectorOAuthError(
                babelHelpers.extends({ error: l, state: u }, s),
              )
              .catch(r("WAWebNoop")),
            l !== m && a.onFailed());
          return;
        }
        g(babelHelpers.extends({ code: i, state: u }, s), a);
      }
    }
    function g(e, t) {
      return h.apply(this, arguments);
    }
    function h() {
      return (
        (h = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = yield o("WAWebWriteHatchConnectors")
            .completeHatchConnectorOAuth(e)
            .catch(function () {
              return "failed";
            });
          (o("WAWebRequestHatchConnectors")
            .requestHatchConnectors()
            .catch(r("WAWebNoop")),
            t.onSettled(),
            n === "failed" && t.onFailed());
        })),
        h.apply(this, arguments)
      );
    }
    function y(e) {
      var t = e.data;
      if (
        e.origin !== window.location.origin ||
        typeof t != "object" ||
        t == null ||
        t.message !== u ||
        !C(t.state) ||
        (t.iss != null && !C(t.iss))
      )
        return null;
      var n = t.code,
        r = t.error,
        o = t.iss,
        a = t.state,
        i = C(o) ? { iss: o } : {};
      return r != null
        ? typeof r == "string" && d.test(r)
          ? { code: null, error: r, issuer: i, state: a }
          : null
        : C(n)
          ? { code: n, error: null, issuer: i, state: a }
          : null;
    }
    function C(e) {
      return typeof e == "string" && e.length > 0 && e.length <= c;
    }
    ((l.ensureHatchOAuthCallbackReceiver = _),
      (l.handleHatchOAuthCallbackMessage = f));
  },
  98,
);
