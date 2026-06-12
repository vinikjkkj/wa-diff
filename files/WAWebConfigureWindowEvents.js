__d(
  "WAWebConfigureWindowEvents",
  [
    "WAComms",
    "WALogger",
    "WATypeUtils",
    "WAWebApp.react",
    "WAWebAppTracker",
    "WAWebBuildConstants",
    "WAWebExternalLink.react",
    "WAWebMiscBrowserUtils",
    "WAWebTrackBrowserTabHidden",
    "fbs",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u, c, d;
    function m() {
      (p(),
        (window.onbeforeunload = function () {
          var t = !1,
            n = o("WAWebApp.react").hasPendingActions();
          if (
            !n &&
            !o("WAWebExternalLink.react").isOpeningDeeplinkInCurrentTab()
          )
            try {
              ((t = !0), o("WAComms").closeSocketAndPreventRetry());
            } catch (t) {
              o("WALogger").ERROR(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "error while stopping comms onbeforeunload: ",
                    "",
                  ])),
                t,
              );
            }
          if (r("WAWebMiscBrowserUtils").isDownloading()) {
            r("WAWebMiscBrowserUtils").clearDownloading();
            return;
          }
          if (
            (o("WALogger").LOG(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
                  "onbeforeunload triggered, version: ",
                  "",
                ])),
              o("WAWebBuildConstants").VERSION_STR,
            ),
            !(r("WAWebMiscBrowserUtils").promptUnloadGuards > 0))
          ) {
            if (n)
              return (
                o("WAWebAppTracker").AppTracker.start(
                  o("WAWebAppTracker").AppTrackerType.ClosingBrowserTab,
                ),
                self.setTimeout(function () {
                  o("WAWebAppTracker").AppTracker.stop(
                    o("WAWebAppTracker").AppTrackerType.ClosingBrowserTab,
                  );
                }, 0),
                o("WALogger").LOG(
                  u ||
                    (u = babelHelpers.taggedTemplateLiteralLoose([
                      "Prompt onbeforeunload due to pending actions",
                    ])),
                ),
                r("fbs")._(/*BTDS*/ "You are closing WhatsApp.").toString()
              );
            if (t) {
              var a = 15e3;
              self.setTimeout(function () {
                try {
                  (o("WALogger").ERROR(
                    c ||
                      (c = babelHelpers.taggedTemplateLiteralLoose([
                        "unload failed, force restarting comms",
                      ])),
                  ),
                    o("WAComms").socketLoopIteration());
                } catch (e) {
                  o("WALogger").ERROR(
                    d ||
                      (d = babelHelpers.taggedTemplateLiteralLoose([
                        "error while force restarting comms after unload failure: ",
                        "",
                      ])),
                    e,
                  );
                }
              }, a);
            }
          }
        }),
        window.addEventListener("dragover", function (e) {
          e.preventDefault();
        }),
        window.addEventListener("drop", function (e) {
          e.preventDefault();
        }),
        o("WAWebTrackBrowserTabHidden").trackBrowserTabHidden());
    }
    function p() {
      ["getSelection", "open", "focus"].forEach(function (e) {
        var t = Object.getPrototypeOf(window)[e];
        o("WATypeUtils").isFunction(t) && window[e] !== t && (window[e] = t);
      });
    }
    l.configureWindowEvents = m;
  },
  226,
);
