__d(
  "WAWebCacheStorageOpenFailedPopup.react",
  [
    "fbt",
    "WALogger",
    "WAWebABProps",
    "WAWebABPropsCache",
    "WAWebLogoutReasonConstants",
    "WAWebStorageErrorHandlingUtils",
    "WAWebStorageRecoveryPopup.react",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u,
      c = u || (u = o("react")),
      d = u,
      m = d.useEffect,
      p = d.useState;
    function _() {
      var e = p(null),
        t = e[0],
        n = e[1];
      return (
        m(function () {
          var e = o(
            "WAWebStorageErrorHandlingUtils",
          ).didReloadAppForStorageRecovery();
          o("WAWebABPropsCache")
            .waitForABPropConfigsReady()
            .then(function () {
              var t = o("WAWebABProps").getABPropConfigValue(
                "web_cache_open_failed_reload_flow_enabled",
              );
              n(t && !e);
            });
        }, []),
        t == null ? null : t ? c.jsx(f, {}) : c.jsx(g, {})
      );
    }
    _.displayName = _.name + " [from " + i.id + "]";
    function f() {
      return c.jsx(
        o("WAWebStorageRecoveryPopup.react").WAWebStorageReloadHandler,
        { onReload: h },
      );
    }
    f.displayName = f.name + " [from " + i.id + "]";
    function g() {
      return c.jsx(
        o("WAWebStorageRecoveryPopup.react").WAWebStorageLogoutHandler,
        {
          bugReportDescription:
            "Failed to open cache storage after reload attempt",
          reason: o("WAWebLogoutReasonConstants").LogoutReason
            .CacheStorageOpenFailed,
          children: s._(
            /*BTDS*/ "Your computer does not have enough space for WhatsApp to run. Please create more storage by deleting unused files from your computer, then log in again.",
          ),
        },
      );
    }
    g.displayName = g.name + " [from " + i.id + "]";
    function h() {
      o("WALogger").ERROR(
        e ||
          (e = babelHelpers.taggedTemplateLiteralLoose([
            "[cache-storage] open failed, reloading to recover",
          ])),
      );
    }
    l.default = _;
  },
  226,
);
