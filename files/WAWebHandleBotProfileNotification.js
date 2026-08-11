__d(
  "WAWebHandleBotProfileNotification",
  [
    "WALogger",
    "WAWap",
    "WAWapJid",
    "WAWebBotBaseGating",
    "WAWebHatchLinkedStatusManager",
    "WAWebInitializeBots",
    "WAWebReconcileBotSupportFields",
    "WAWebSyncBotSupportFields",
    "WAWebWidFactory",
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
      p,
      _,
      f = "fb:update",
      g = "update",
      h = "bot_profile",
      y = "link";
    function C(e, t, n) {
      return o("WAWap").wap("ack", {
        id: o("WAWap").CUSTOM_STRING(e),
        to: t instanceof o("WAWapJid").WapJid ? t : o("WAWap").CUSTOM_STRING(t),
        class: "notification",
        type: o("WAWap").CUSTOM_STRING(n),
      });
    }
    function b() {
      (o("WALogger").LOG(
        e ||
          (e = babelHelpers.taggedTemplateLiteralLoose([
            "[BotProfileNotification] refreshing hatch linked status",
          ])),
      ),
        r("WAWebHatchLinkedStatusManager").fetchAndUpdateStatus());
    }
    function v(e) {
      if (e == null || e === "" || e === y) {
        b();
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
    function S(e) {
      if (o("WAWebBotBaseGating").isStandardBotProfileEnabled())
        try {
          var t = o("WAWebWidFactory").createWid(e);
          if (!t.isFbidBot()) return;
          o("WAWebSyncBotSupportFields")
            .syncBotSupportFields(t)
            .catch(function (e) {
              o("WALogger").WARN(
                u ||
                  (u = babelHelpers.taggedTemplateLiteralLoose([
                    "[BotProfileNotification] bot support sync failed: ",
                    "",
                  ])),
                String(e),
              );
            });
        } catch (t) {
          o("WALogger").WARN(
            c ||
              (c = babelHelpers.taggedTemplateLiteralLoose([
                "[BotProfileNotification] invalid jid: ",
                " (",
                ")",
              ])),
            e,
            String(t),
          );
        }
    }
    function R(e) {
      return L.apply(this, arguments);
    }
    function L() {
      return (
        (L = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
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
                : f;
          try {
            var c = e.content,
              y = !1;
            if (Array.isArray(c))
              for (var b of c) {
                var R;
                if (
                  b.tag === g &&
                  ((R = b.attrs) == null || (R = R.type) == null
                    ? void 0
                    : R.toString()) === h
                ) {
                  var L,
                    E,
                    k,
                    I,
                    T =
                      (L = (E = b.attrs.jid) == null ? void 0 : E.toString()) !=
                      null
                        ? L
                        : "",
                    D =
                      (k =
                        (I = b.attrs.category) == null
                          ? void 0
                          : I.toString()) != null
                        ? k
                        : null;
                  if (T !== "") (v(D), S(T));
                  else {
                    y = !0;
                    break;
                  }
                }
              }
            y &&
              (o("WALogger").LOG(
                d ||
                  (d = babelHelpers.taggedTemplateLiteralLoose([
                    "[BotProfileNotification] pruned update, full bot sync",
                  ])),
              ),
              o("WAWebInitializeBots")
                .initializeBots()
                .catch(function (e) {
                  o("WALogger").WARN(
                    m ||
                      (m = babelHelpers.taggedTemplateLiteralLoose([
                        "[BotProfileNotification] full bot sync failed: ",
                        "",
                      ])),
                    String(e),
                  );
                }),
              o("WAWebReconcileBotSupportFields")
                .reconcileBotSupportFields()
                .catch(function (e) {
                  o("WALogger").WARN(
                    p ||
                      (p = babelHelpers.taggedTemplateLiteralLoose([
                        "[BotProfileNotification] bot support reconcile failed: ",
                        "",
                      ])),
                    String(e),
                  );
                }));
          } catch (e) {
            o("WALogger").WARN(
              _ ||
                (_ = babelHelpers.taggedTemplateLiteralLoose([
                  "[BotProfileNotification] error processing stanza: ",
                  "",
                ])),
              String(e),
            );
          }
          return C(l, s, u);
        })),
        L.apply(this, arguments)
      );
    }
    l.handleBotProfileNotification = R;
  },
  98,
);
