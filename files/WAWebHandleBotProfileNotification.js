__d(
  "WAWebHandleBotProfileNotification",
  [
    "WALogger",
    "WAWap",
    "WAWapJid",
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
      d = "fb:update",
      m = "update",
      p = "bot_profile",
      _ = "link";
    function f(e, t, n) {
      return o("WAWap").wap("ack", {
        id: o("WAWap").CUSTOM_STRING(e),
        to: t instanceof o("WAWapJid").WapJid ? t : o("WAWap").CUSTOM_STRING(t),
        class: "notification",
        type: o("WAWap").CUSTOM_STRING(n),
      });
    }
    function g() {
      (o("WALogger").LOG(
        e ||
          (e = babelHelpers.taggedTemplateLiteralLoose([
            "[BotProfileNotification] refreshing hatch linked status",
          ])),
      ),
        r("WAWebHatchLinkedStatusManager").fetchAndUpdateStatus());
    }
    function h(e) {
      if (e == null || e === "" || e === _) {
        g();
        return;
      }
      o("WALogger").LOG(
        s ||
          (s = babelHelpers.taggedTemplateLiteralLoose([
            "[BotProfileNotification] ignoring category: ",
            "",
          ])),
        e,
      );
    }
    function y(e) {
      return C.apply(this, arguments);
    }
    function C() {
      return (
        (C = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
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
            _ =
              (a = (i = e.attrs.type) == null ? void 0 : i.toString()) != null
                ? a
                : d;
          try {
            var g = e.content,
              y = !1;
            if (Array.isArray(g))
              for (var C of g) {
                var b;
                if (
                  C.tag === m &&
                  ((b = C.attrs) == null || (b = b.type) == null
                    ? void 0
                    : b.toString()) === p
                ) {
                  var v,
                    S,
                    R,
                    L,
                    E =
                      (v = (S = C.attrs.jid) == null ? void 0 : S.toString()) !=
                      null
                        ? v
                        : "",
                    k =
                      (R =
                        (L = C.attrs.category) == null
                          ? void 0
                          : L.toString()) != null
                        ? R
                        : null;
                  if (E !== "") h(k);
                  else {
                    y = !0;
                    break;
                  }
                }
              }
            y &&
              (o("WALogger").LOG(
                u ||
                  (u = babelHelpers.taggedTemplateLiteralLoose([
                    "[BotProfileNotification] pruned update, full bot sync",
                  ])),
              ),
              o("WAWebInitializeBots").initializeBots());
          } catch (e) {
            o("WALogger").WARN(
              c ||
                (c = babelHelpers.taggedTemplateLiteralLoose([
                  "[BotProfileNotification] error processing stanza: ",
                  "",
                ])),
              String(e),
            );
          }
          return f(l, s, _);
        })),
        C.apply(this, arguments)
      );
    }
    l.handleBotProfileNotification = y;
  },
  98,
);
