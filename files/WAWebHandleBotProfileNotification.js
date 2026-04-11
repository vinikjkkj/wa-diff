__d(
  "WAWebHandleBotProfileNotification",
  [
    "WALogger",
    "WAWap",
    "WAWebAIHatchIdentityStore",
    "WAWebHatchAgentStatusManager",
    "WAWebInitializeBots",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u,
      c,
      d,
      m = "fb:update",
      p = "update",
      _ = "bot_profile",
      f = "cot",
      g = "identity";
    function h(e, t, n) {
      var r;
      return (r = o("WAWap")).wap("ack", {
        id: r.CUSTOM_STRING(e),
        to: r.CUSTOM_STRING(t),
        class: "notification",
        type: r.CUSTOM_STRING(n),
      });
    }
    function y(t) {
      (o("WALogger").LOG(
        e ||
          (e = babelHelpers.taggedTemplateLiteralLoose([
            "[BotProfileNotification] refreshing agent status for ",
            "",
          ])),
        t,
      ),
        r("WAWebHatchAgentStatusManager").fetchAndUpdateStatus(t));
    }
    function C() {
      (o("WALogger").LOG(
        s ||
          (s = babelHelpers.taggedTemplateLiteralLoose([
            "[BotProfileNotification] refreshing hatch identity",
          ])),
      ),
        o("WAWebAIHatchIdentityStore").getHatchIdentity(!0));
    }
    function b(e) {
      (y(e), C());
    }
    function v(e, t) {
      if (t == null || t === "") {
        b(e);
        return;
      }
      e: {
        if (t === f) {
          y(e);
          break e;
        }
        if (t === g) {
          C();
          break e;
        }
        {
          o("WALogger").WARN(
            u ||
              (u = babelHelpers.taggedTemplateLiteralLoose([
                "[BotProfileNotification] unknown category: ",
                "",
              ])),
            t,
          );
          break e;
        }
      }
    }
    function S(e) {
      return R.apply(this, arguments);
    }
    function R() {
      return (
        (R = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t,
            n,
            r,
            a,
            i,
            l,
            s =
              (t = (n = e.attrs.id) == null ? void 0 : n.toString()) != null
                ? t
                : "",
            u =
              (r = (a = e.attrs.from) == null ? void 0 : a.toString()) != null
                ? r
                : "",
            f =
              (i = (l = e.attrs.type) == null ? void 0 : l.toString()) != null
                ? i
                : m;
          try {
            var g = e.content,
              y = !1;
            if (Array.isArray(g))
              for (var C of g) {
                var b;
                if (
                  C.tag === p &&
                  ((b = C.attrs) == null || (b = b.type) == null
                    ? void 0
                    : b.toString()) === _
                ) {
                  var S,
                    R,
                    L,
                    E,
                    k =
                      (S = (R = C.attrs.jid) == null ? void 0 : R.toString()) !=
                      null
                        ? S
                        : "",
                    I =
                      (L =
                        (E = C.attrs.category) == null
                          ? void 0
                          : E.toString()) != null
                        ? L
                        : null;
                  if (k !== "") v(k, I);
                  else {
                    y = !0;
                    break;
                  }
                }
              }
            y &&
              (o("WALogger").LOG(
                c ||
                  (c = babelHelpers.taggedTemplateLiteralLoose([
                    "[BotProfileNotification] pruned update, full bot sync",
                  ])),
              ),
              o("WAWebInitializeBots").initializeBots());
          } catch (e) {
            o("WALogger").WARN(
              d ||
                (d = babelHelpers.taggedTemplateLiteralLoose([
                  "[BotProfileNotification] error processing stanza: ",
                  "",
                ])),
              String(e),
            );
          }
          return h(s, u, f);
        })),
        R.apply(this, arguments)
      );
    }
    l.handleBotProfileNotification = S;
  },
  98,
);
