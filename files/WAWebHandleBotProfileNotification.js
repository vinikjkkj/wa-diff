__d(
  "WAWebHandleBotProfileNotification",
  [
    "WALogger",
    "WAWap",
    "WAWapJid",
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
      return o("WAWap").wap("ack", {
        id: o("WAWap").CUSTOM_STRING(e),
        to: t instanceof o("WAWapJid").WapJid ? t : o("WAWap").CUSTOM_STRING(t),
        class: "notification",
        type: o("WAWap").CUSTOM_STRING(n),
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
            l =
              (t = (n = e.attrs.id) == null ? void 0 : n.toString()) != null
                ? t
                : "",
            s = (r = e.attrs.from) != null ? r : "",
            u =
              (a = (i = e.attrs.type) == null ? void 0 : i.toString()) != null
                ? a
                : m;
          try {
            var f = e.content,
              g = !1;
            if (Array.isArray(f))
              for (var y of f) {
                var C;
                if (
                  y.tag === p &&
                  ((C = y.attrs) == null || (C = C.type) == null
                    ? void 0
                    : C.toString()) === _
                ) {
                  var b,
                    S,
                    R,
                    L,
                    E =
                      (b = (S = y.attrs.jid) == null ? void 0 : S.toString()) !=
                      null
                        ? b
                        : "",
                    k =
                      (R =
                        (L = y.attrs.category) == null
                          ? void 0
                          : L.toString()) != null
                        ? R
                        : null;
                  if (E !== "") v(E, k);
                  else {
                    g = !0;
                    break;
                  }
                }
              }
            g &&
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
          return h(l, s, u);
        })),
        R.apply(this, arguments)
      );
    }
    l.handleBotProfileNotification = S;
  },
  98,
);
