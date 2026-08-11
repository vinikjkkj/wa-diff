__d(
  "WAWebBizAIOAuthBroadcastChannelAdapter",
  ["WAWebBizAIOAuthCallbackEventBus"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = "wa_web_biz_ai_oauth_complete",
      s = "wa_web_biz_ai_oauth_channel",
      u = !1;
    function c(t) {
      var n = t.data;
      if (
        !(
          typeof n != "object" ||
          n == null ||
          n.message !== e ||
          t.origin !== window.location.origin
        )
      ) {
        var r = n.code,
          a = n.error,
          i = n.state;
        if (!(typeof i != "string" || !i)) {
          var l = null;
          (typeof a == "string" && a !== ""
            ? (l = { code: null, error: a, state: i })
            : typeof r == "string" &&
              r !== "" &&
              (l = { code: r, error: null, state: i }),
            l != null &&
              o(
                "WAWebBizAIOAuthCallbackEventBus",
              ).WAWebBizAIOAuthCallbackEventBus.trigger(
                o("WAWebBizAIOAuthCallbackEventBus").BizAIOAuthCallbackEvent
                  .BIZ_AI_OAUTH_CALLBACK,
                l,
              ));
        }
      }
    }
    function d() {
      if (!u && self.BroadcastChannel != null) {
        var e = new self.BroadcastChannel(s);
        (e.addEventListener("message", c), (u = !0));
      }
    }
    ((l.handleBizAIOAuthMessage = c), (l.ensureInstalled = d));
  },
  98,
);
