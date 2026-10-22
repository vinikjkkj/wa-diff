__d(
  "WAWebUpdaterMixedRevisions",
  ["ClientConsistency", "WALogger", "WAWebEnvironment", "requireDeferred"],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = r("requireDeferred")("WAWebAutoUpdaterUtils").__setRef(
        "WAWebUpdaterMixedRevisions",
      ),
      c = r("requireDeferred")("WAWebUpdater").__setRef(
        "WAWebUpdaterMixedRevisions",
      ),
      d = !1;
    function m() {
      return Array.from(r("ClientConsistency").getAdditionalRevisions());
    }
    function p() {
      d ||
        r("WAWebEnvironment").isWindows ||
        r("ClientConsistency").getAdditionalRevisions().size === 0 ||
        ((d = !0),
        o("WALogger").LOG(
          e ||
            (e = babelHelpers.taggedTemplateLiteralLoose([
              "[mixed-revisions] scheduling a refresh",
            ])),
        ),
        c.onReady(function (e) {
          var t = e.Updater;
          t.showSoftUpdateBanner();
        }),
        u.onReady(function (e) {
          var t = e.autoRefreshWhenHidden;
          t().catch(function (e) {
            o("WALogger").LOG(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
                  "[mixed-revisions] refresh when hidden failed: ",
                  "",
                ])),
              e,
            );
          });
        }));
    }
    ((l.getOtherJsRevisions = m), (l.refreshAfterMixedRevisionCrash = p));
  },
  98,
);
