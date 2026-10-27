__d(
  "WAWebUpdaterMixedRevisions",
  [
    "ClientConsistency",
    "WALogger",
    "WAWebEnvironment",
    "ifRequireable",
    "requireDeferred",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = r("requireDeferred")("WAWebAutoUpdaterUtils").__setRef(
        "WAWebUpdaterMixedRevisions",
      ),
      c = !1;
    function d() {
      return Array.from(r("ClientConsistency").getAdditionalRevisions());
    }
    function m() {
      c ||
        r("WAWebEnvironment").isWindows ||
        r("ClientConsistency").getAdditionalRevisions().size === 0 ||
        ((c = !0),
        o("WALogger").LOG(
          e ||
            (e = babelHelpers.taggedTemplateLiteralLoose([
              "[mixed-revisions] scheduling a refresh",
            ])),
        ),
        r("ifRequireable")("WAWebUpdater", function (e) {
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
    ((l.getOtherJsRevisions = d), (l.refreshAfterMixedRevisionCrash = m));
  },
  98,
);
