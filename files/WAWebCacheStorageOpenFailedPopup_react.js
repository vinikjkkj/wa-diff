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
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u,
      c = u || (u = o("react")),
      d = u,
      m = d.useEffect,
      p = d.useState;
    function _() {
      var e = o("react-compiler-runtime").c(4),
        t = p(null),
        n = t[0],
        r = t[1],
        a,
        i;
      if (
        (e[0] === Symbol.for("react.memo_cache_sentinel")
          ? ((a = function () {
              var e = o(
                "WAWebStorageErrorHandlingUtils",
              ).didReloadAppForStorageRecovery();
              o("WAWebABPropsCache")
                .waitForABPropConfigsReady()
                .then(function () {
                  var t = o("WAWebABProps").getABPropConfigValue(
                    "web_cache_open_failed_reload_flow_enabled",
                  );
                  r(t && !e);
                });
            }),
            (i = []),
            (e[0] = a),
            (e[1] = i))
          : ((a = e[0]), (i = e[1])),
        m(a, i),
        n == null)
      )
        return null;
      if (n) {
        var l;
        return (
          e[2] === Symbol.for("react.memo_cache_sentinel")
            ? ((l = c.jsx(f, {})), (e[2] = l))
            : (l = e[2]),
          l
        );
      }
      var s;
      return (
        e[3] === Symbol.for("react.memo_cache_sentinel")
          ? ((s = c.jsx(g, {})), (e[3] = s))
          : (s = e[3]),
        s
      );
    }
    function f() {
      var e = o("react-compiler-runtime").c(1),
        t;
      return (
        e[0] === Symbol.for("react.memo_cache_sentinel")
          ? ((t = c.jsx(
              o("WAWebStorageRecoveryPopup.react").WAWebStorageReloadHandler,
              { onReload: h },
            )),
            (e[0] = t))
          : (t = e[0]),
        t
      );
    }
    function g() {
      var e = o("react-compiler-runtime").c(1),
        t;
      return (
        e[0] === Symbol.for("react.memo_cache_sentinel")
          ? ((t = c.jsx(
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
            )),
            (e[0] = t))
          : (t = e[0]),
        t
      );
    }
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
