__d(
  "WAWebAutoUpdaterUtils",
  [
    "WALogger",
    "WAWebCallCollection",
    "WAWebChatCollection",
    "WAWebFrontendChatGetters",
    "WAWebMsgCollection",
    "WAWebNetworkStatus",
    "WAWebUpdater",
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
      p = !1,
      _ = null,
      f = 60 * 1e3;
    function g() {
      (p &&
        (document.removeEventListener("visibilitychange", S),
        r("WAWebCallCollection").off("change:activeCall", S)),
        (p = !1),
        _ != null && (window.clearTimeout(_), (_ = null)));
    }
    function h() {
      _ != null && (window.clearTimeout(_), (_ = null));
    }
    function y() {
      return C.apply(this, arguments);
    }
    function C() {
      return (
        (C = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          return (
            yield r("WAWebNetworkStatus").checkOnline(),
            !navigator.onLine || !r("WAWebNetworkStatus").online
          );
        })),
        C.apply(this, arguments)
      );
    }
    function b() {
      (h(),
        (_ = window.setTimeout(
          n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
            if (((_ = null), yield y())) {
              o("WALogger").LOG(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "[Auto-refresh] skip update: offline",
                  ])),
              );
              return;
            }
            (o("WALogger").LOG(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
                  "[Auto-refresh] Updater: Updating dev-web.",
                ])),
            ),
              document.removeEventListener("visibilitychange", S),
              r("WAWebCallCollection").off("change:activeCall", S),
              (p = !1),
              o("WAWebUpdater")
                .Updater.update({ belowHard: 0, belowSoft: !1 })
                .catch(function (e) {
                  o("WALogger")
                    .LOG(
                      u ||
                        (u = babelHelpers.taggedTemplateLiteralLoose([
                          "Updater: hard update failed with ",
                          "",
                        ])),
                      e,
                    )
                    .sendLogs("Auto refresh failed");
                }));
          }),
          f,
        )));
    }
    function v() {
      return r("WAWebCallCollection").activeCall != null;
    }
    function S() {
      return R.apply(this, arguments);
    }
    function R() {
      return (
        (R = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          if (
            document.hidden &&
            !o("WAWebMsgCollection").MsgCollection.hasUnsentMessages() &&
            !L() &&
            !v()
          ) {
            if (yield y()) {
              (o("WALogger").LOG(
                c ||
                  (c = babelHelpers.taggedTemplateLiteralLoose([
                    "[Auto-refresh] skip: offline",
                  ])),
              ),
                h());
              return;
            }
            (o("WALogger").LOG(
              d ||
                (d = babelHelpers.taggedTemplateLiteralLoose([
                  "[Auto-refresh] conditions met, starting 1min timer",
                ])),
            ),
              b());
          } else {
            var e = o("WAWebMsgCollection").MsgCollection.hasUnsentMessages(),
              t = L(),
              n = v();
            (o("WALogger").LOG(
              m ||
                (m = babelHelpers.taggedTemplateLiteralLoose([
                  "[Auto-refresh] skip: hidden=",
                  " unsent=",
                  " draft=",
                  " call=",
                  "",
                ])),
              document.hidden,
              e,
              t,
              n,
            ),
              h());
          }
        })),
        R.apply(this, arguments)
      );
    }
    function L() {
      var e = o("WAWebChatCollection").ChatCollection.getActive();
      return e != null && o("WAWebFrontendChatGetters").getHasDraftMessage(e);
    }
    function E() {
      return k.apply(this, arguments);
    }
    function k() {
      return (
        (k = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          (p ||
            (document.addEventListener("visibilitychange", S),
            r("WAWebCallCollection").on("change:activeCall", S),
            (p = !0)),
            yield S());
        })),
        k.apply(this, arguments)
      );
    }
    ((l.__resetListenerForTesting = g), (l.autoRefreshWhenHidden = E));
  },
  98,
);
