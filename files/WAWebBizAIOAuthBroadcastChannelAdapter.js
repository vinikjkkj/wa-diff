__d(
  "WAWebBizAIOAuthBroadcastChannelAdapter",
  ["WAWebBizAIOAuthCallbackEventBus"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = "wa_web_biz_ai_oauth_complete",
      s = "wa_web_biz_ai_oauth_channel",
      u = "https://b.whatsapp.com/oauth/biz_ai_redirect",
      c = !1;
    function d(t) {
      var n = t.data;
      if (
        !(
          typeof n != "object" ||
          n == null ||
          n.message !== e ||
          t.origin !== window.location.origin
        )
      ) {
        var r = n.bizaiNonce,
          a = n.code,
          i = n.connectionId,
          l = n.error,
          s = n.pluginId,
          c = n.state;
        if (!(typeof c != "string" || !c)) {
          var d = null;
          if (typeof l == "string" && l !== "")
            d = { code: null, error: l, state: c };
          else if (
            typeof s == "string" &&
            s !== "" &&
            typeof r == "string" &&
            r !== "" &&
            typeof i == "string" &&
            i !== ""
          ) {
            var m = new URL(u);
            (m.searchParams.set("state", c),
              m.searchParams.set("plugin_id", s),
              m.searchParams.set("bizai_nonce", r),
              m.searchParams.set("connectionId", i),
              (d = {
                callbackUrl: m.toString(),
                code: null,
                error: null,
                state: c,
              }));
          } else
            typeof a == "string" && a !== ""
              ? (d = { code: a, error: null, state: c })
              : typeof s == "string" &&
                s !== "" &&
                (d = {
                  code: null,
                  error: "brokered_callback_incomplete",
                  state: c,
                });
          d != null &&
            o(
              "WAWebBizAIOAuthCallbackEventBus",
            ).WAWebBizAIOAuthCallbackEventBus.trigger(
              o("WAWebBizAIOAuthCallbackEventBus").BizAIOAuthCallbackEvent
                .BIZ_AI_OAUTH_CALLBACK,
              d,
            );
        }
      }
    }
    function m() {
      if (!c && self.BroadcastChannel != null) {
        var e = new self.BroadcastChannel(s);
        (e.addEventListener("message", d), (c = !0));
      }
    }
    ((l.handleBizAIOAuthMessage = d), (l.ensureInstalled = m));
  },
  98,
);
