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
    async function h() {
      return (
        await r("WAWebNetworkStatus").checkOnline("auto_updater"),
        !navigator.onLine || !r("WAWebNetworkStatus").online
      );
    }
    function y() {
      (g(),
        (_ = window.setTimeout(async function () {
          if (((_ = null), await h())) {
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
            document.removeEventListener("visibilitychange", b),
            r("WAWebCallCollection").off("change:activeCall", b),
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
        }, f)));
    }
    function C() {
      return r("WAWebCallCollection").activeCall != null;
    }
    async function b() {
      if (
        document.hidden &&
        !o("WAWebMsgCollection").MsgCollection.hasUnsentMessages() &&
        !v() &&
        !C()
      ) {
        if (await h()) {
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
          y());
      } else {
        var e = o("WAWebMsgCollection").MsgCollection.hasUnsentMessages(),
          t = v(),
          n = C();
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
    }
    function v() {
      var e = o("WAWebChatCollection").ChatCollection.getActive();
      return e != null && o("WAWebFrontendChatGetters").getHasDraftMessage(e);
    }
    async function S() {
      (p ||
        (document.addEventListener("visibilitychange", b),
        r("WAWebCallCollection").on("change:activeCall", b),
        (p = !0)),
        await b());
    }
    l.autoRefreshWhenHidden = S;
  },
  98,
);
