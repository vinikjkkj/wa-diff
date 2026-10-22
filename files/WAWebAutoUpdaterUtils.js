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
      _ != null && (window.clearTimeout(_), (_ = null));
    }
    function h() {
      return y.apply(this, arguments);
    }
    function y() {
      return (
        (y = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          return (
            yield r("WAWebNetworkStatus").checkOnline(),
            !navigator.onLine || !r("WAWebNetworkStatus").online
          );
        })),
        y.apply(this, arguments)
      );
    }
    function C() {
      (g(),
        (_ = window.setTimeout(
          n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
            if (((_ = null), yield h())) {
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
              document.removeEventListener("visibilitychange", v),
              r("WAWebCallCollection").off("change:activeCall", v),
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
    function b() {
      return r("WAWebCallCollection").activeCall != null;
    }
    function v() {
      return S.apply(this, arguments);
    }
    function S() {
      return (
        (S = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          if (
            document.hidden &&
            !o("WAWebMsgCollection").MsgCollection.hasUnsentMessages() &&
            !R() &&
            !b()
          ) {
            if (yield h()) {
              (o("WALogger").LOG(
                c ||
                  (c = babelHelpers.taggedTemplateLiteralLoose([
                    "[Auto-refresh] skip: offline",
                  ])),
              ),
                g());
              return;
            }
            (o("WALogger").LOG(
              d ||
                (d = babelHelpers.taggedTemplateLiteralLoose([
                  "[Auto-refresh] conditions met, starting 1min timer",
                ])),
            ),
              C());
          } else {
            var e = o("WAWebMsgCollection").MsgCollection.hasUnsentMessages(),
              t = R(),
              n = b();
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
              g());
          }
        })),
        S.apply(this, arguments)
      );
    }
    function R() {
      var e = o("WAWebChatCollection").ChatCollection.getActive();
      return e != null && o("WAWebFrontendChatGetters").getHasDraftMessage(e);
    }
    function L() {
      return E.apply(this, arguments);
    }
    function E() {
      return (
        (E = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          (p ||
            (document.addEventListener("visibilitychange", v),
            r("WAWebCallCollection").on("change:activeCall", v),
            (p = !0)),
            yield v());
        })),
        E.apply(this, arguments)
      );
    }
    l.autoRefreshWhenHidden = L;
  },
  98,
);
