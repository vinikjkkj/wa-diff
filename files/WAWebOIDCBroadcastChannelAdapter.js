__d(
  "WAWebOIDCBroadcastChannelAdapter",
  ["WAWebOIDCCallbackEventBus"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = "wa_web_oidc_flow_complete",
      s = "wa_web_oidc_channel",
      u = !1;
    function c(t) {
      var n = t.data;
      if (
        typeof n == "object" &&
        n != null &&
        n.message === e &&
        t.origin === window.location.origin
      ) {
        var r = n.code,
          a = n.state;
        typeof r == "string" &&
          r &&
          typeof a == "string" &&
          o("WAWebOIDCCallbackEventBus").WAWebOIDCCallbackEventBus.trigger(
            o("WAWebOIDCCallbackEventBus").OIDCCallbackEvent.OIDC_CALLBACK,
            { code: r, state: a },
          );
      }
    }
    function d() {
      if (!u) {
        var e = new BroadcastChannel(s);
        (e.addEventListener("message", c), (u = !0));
      }
    }
    ((l.handleOIDCMessage = c), (l.ensureInstalled = d));
  },
  98,
);
