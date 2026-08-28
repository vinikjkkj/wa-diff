__d(
  "WebBloksHandleLoginResponse",
  [
    "CAAWebBloksMinificationKeys",
    "CAAWebBloksQPLUtils",
    "CAAWebBloksUrlUtils",
    "CAAWebLoggingUtils",
    "InstagramUserAgent",
    "WebBloksScriptDebuggingUtils",
    "WebBloksURLUtils",
    "gkx",
    "justknobx",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = o("CAAWebBloksUrlUtils").addAppDeeplinkBlockingQueryParam("/"),
      s = o("CAAWebBloksUrlUtils").addAutoLoginQueryParam("/");
    function u(t, n, a) {
      if ((a === void 0 && (a = !1), t == null || t === "")) return n ? s : e;
      try {
        var i = new URL(t, window.location.href);
        return (
          a &&
            r("justknobx")._("2026") &&
            i.hostname === "i.instagram.com" &&
            (i = new URL(i.pathname + i.search, "https://www.instagram.com")),
          (i.hash = ""),
          n
            ? o("CAAWebBloksUrlUtils").addAutoLoginQueryParam(i.toString())
            : o("CAAWebBloksUrlUtils").addAppDeeplinkBlockingQueryParam(
                i.toString(),
              )
        );
      } catch (t) {
        return n ? s : e;
      }
    }
    function c(e, t, n) {
      var a = JSON.parse(
          t.get(
            o("CAAWebBloksMinificationKeys").LOGIN_RESPONSE_SUCCESS_RESPONSE,
          ),
        ),
        i = t.get(o("CAAWebBloksMinificationKeys").LOGIN_RESPONSE_LOGIN_TYPE),
        l = t.get(o("CAAWebBloksMinificationKeys").LOGIN_RESPONSE_LOGIN_SOURCE);
      if (n != null)
        try {
          (e.execute(n, []),
            o("CAAWebBloksQPLUtils").getQPLMarkerEndLoginTTISuccess(
              i != null ? i : "Unknown",
              l != null ? l : "Unknown",
            ));
        } catch (t) {
          (o("WebBloksScriptDebuggingUtils").logScriptError(
            e.bloksContext.objectSet,
            t,
            n,
            e,
          ),
            o("CAAWebBloksQPLUtils").getQPLMarkerEndLoginTTIFail(
              i != null ? i : "Unknown",
              l != null ? l : "Unknown",
              "generic_error_dialog",
            ));
        }
      var s = r("InstagramUserAgent").is_mobile;
      if (
        (s &&
          a.error_message === "checkpoint_required" &&
          o("CAAWebLoggingUtils").logmWebCheckpointedEvent(l != null ? l : ""),
        l !== "Registration")
      ) {
        var c = l === "AutoLogin";
        s && r("gkx")("8251")
          ? window.setTimeout(function () {
              return o("WebBloksURLUtils").openURL(u(a.redirect_uri, c, s));
            }, 500)
          : o("WebBloksURLUtils").openURL(u(a.redirect_uri, c, s));
      }
    }
    l.default = c;
  },
  98,
);
