__d(
  "WAWebHandleBotProfileNotification",
  [
    "WALogger",
    "WAWap",
    "WAWapJid",
    "WAWebAIHatchIdentityStore",
    "WAWebHatchAgentStatusManager",
    "WAWebHatchLinkedStatusManager",
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
      m,
      p = "fb:update",
      _ = "update",
      f = "bot_profile",
      g = "cot",
      h = "identity",
      y = "link";
    function C(e, t, n) {
      return o("WAWap").wap("ack", {
        id: o("WAWap").CUSTOM_STRING(e),
        to: t instanceof o("WAWapJid").WapJid ? t : o("WAWap").CUSTOM_STRING(t),
        class: "notification",
        type: o("WAWap").CUSTOM_STRING(n),
      });
    }
    function b(t) {
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
    function v() {
      (o("WALogger").LOG(
        s ||
          (s = babelHelpers.taggedTemplateLiteralLoose([
            "[BotProfileNotification] refreshing hatch identity",
          ])),
      ),
        o("WAWebAIHatchIdentityStore").getHatchIdentity(!0));
    }
    function S() {
      (o("WALogger").LOG(
        u ||
          (u = babelHelpers.taggedTemplateLiteralLoose([
            "[BotProfileNotification] refreshing hatch linked status",
          ])),
      ),
        r("WAWebHatchLinkedStatusManager").fetchAndUpdateStatus());
    }
    function R(e) {
      (b(e), v(), S());
    }
    function L(e, t) {
      if (t == null || t === "") {
        R(e);
        return;
      }
      e: {
        if (t === g) {
          b(e);
          break e;
        }
        if (t === h) {
          v();
          break e;
        }
        if (t === y) {
          S();
          break e;
        }
        {
          o("WALogger").WARN(
            c ||
              (c = babelHelpers.taggedTemplateLiteralLoose([
                "[BotProfileNotification] unknown category: ",
                "",
              ])),
            t,
          );
          break e;
        }
      }
    }
    function E(e) {
      return k.apply(this, arguments);
    }
    function k() {
      return (
        (k = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
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
                : p;
          try {
            var c = e.content,
              g = !1;
            if (Array.isArray(c))
              for (var h of c) {
                var y;
                if (
                  h.tag === _ &&
                  ((y = h.attrs) == null || (y = y.type) == null
                    ? void 0
                    : y.toString()) === f
                ) {
                  var b,
                    v,
                    S,
                    R,
                    E =
                      (b = (v = h.attrs.jid) == null ? void 0 : v.toString()) !=
                      null
                        ? b
                        : "",
                    k =
                      (S =
                        (R = h.attrs.category) == null
                          ? void 0
                          : R.toString()) != null
                        ? S
                        : null;
                  if (E !== "") L(E, k);
                  else {
                    g = !0;
                    break;
                  }
                }
              }
            g &&
              (o("WALogger").LOG(
                d ||
                  (d = babelHelpers.taggedTemplateLiteralLoose([
                    "[BotProfileNotification] pruned update, full bot sync",
                  ])),
              ),
              o("WAWebInitializeBots").initializeBots());
          } catch (e) {
            o("WALogger").WARN(
              m ||
                (m = babelHelpers.taggedTemplateLiteralLoose([
                  "[BotProfileNotification] error processing stanza: ",
                  "",
                ])),
              String(e),
            );
          }
          return C(l, s, u);
        })),
        k.apply(this, arguments)
      );
    }
    l.handleBotProfileNotification = E;
  },
  98,
);
