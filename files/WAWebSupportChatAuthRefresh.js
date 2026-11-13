__d(
  "WAWebSupportChatAuthRefresh",
  [
    "JSResource",
    "WALogger",
    "WAWebABProps",
    "WAWebChatCollection",
    "WAWebCmd",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = r("JSResource")("WAWebSupportChatAuthRefreshHandler").__setRef(
        "WAWebSupportChatAuthRefresh",
      ),
      u = null,
      c = null,
      d = 0,
      m = !1;
    function p() {
      m ||
        ((m = !0),
        o("WAWebCmd").Cmd.on("open_chat", g),
        o("WAWebCmd").Cmd.on("close_chat", h),
        o("WAWebCmd").Cmd.on("close_active_chat", function () {
          c = null;
        }),
        o("WAWebCmd").Cmd.on("starting_logout_from_bridge", f),
        o("WAWebCmd").Cmd.on("logout_from_bridge", f),
        document.addEventListener("visibilitychange", y),
        window.addEventListener("focus", y));
    }
    function _() {
      return o("WAWebABProps").getABPropConfigValue(
        "support_wass_chat_auth_refresh_enabled",
      );
    }
    function f() {
      var e;
      (d++, (c = null), (e = u) == null || e.resetSession());
    }
    function g(e) {
      var t,
        n = e.chat,
        r = ((t = c) == null ? void 0 : t.equals(n.id)) === !0;
      ((c = n.id), !r && _() && C(n, "open"));
    }
    function h(e) {
      var t;
      ((t = c) == null ? void 0 : t.equals(e.id)) === !0 && (c = null);
    }
    function y() {
      if (!(document.hidden || !_())) {
        var e = o("WAWebChatCollection").ChatCollection.getActive();
        e != null && C(e, "resume");
      }
    }
    function C(t, n) {
      var a = d;
      s.load()
        .then(function (e) {
          ((u = e), a === d && e.refreshIfSupportChat(t, n));
        })
        .catch(function (t) {
          o("WALogger")
            .WARN(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "[support-chat-auth] ",
                  " refresh handler could not be loaded",
                ])),
              n,
            )
            .catching(r("getErrorSafe")(t));
        });
    }
    l.initSupportChatAuthRefresh = p;
  },
  98,
);
