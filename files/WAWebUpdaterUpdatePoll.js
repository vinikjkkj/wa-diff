__d(
  "WAWebUpdaterUpdatePoll",
  [
    "$InternalEnum",
    "WALogger",
    "WATimeUtils",
    "WAWebBuildConstants",
    "WAWebCurrentUser",
    "WAWebEnvironment",
    "WAWebLazyPoll",
    "WAWebNetworkStatus",
    "WAWebPonyfillsFetch",
    "WAWebUpdater",
    "asyncToGeneratorRuntime",
    "cr:27423",
    "err",
    "gkx",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c,
      d,
      m,
      p = o("WAWebBuildConstants").DYN_ORIGIN + "spin",
      _ = 1800,
      f = 3600,
      g = _ * 0.1,
      h = Date.now(),
      y = o("WATimeUtils").DAY_MILLISECONDS * 3,
      C = o("WATimeUtils").DAY_MILLISECONDS * 30,
      b = !0,
      v = 0,
      S = n("$InternalEnum").Mirrored(["SOFT_REFRESH", "HARD_REFRESH"]),
      R = 6e4,
      L = new (r("WAWebLazyPoll"))({
        name: "updater",
        interval: _,
        restingInterval: f,
        randomIntervalExtension: g,
      });
    function E() {
      return k.apply(this, arguments);
    }
    function k() {
      return (
        (k = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          if (
            (yield r("WAWebNetworkStatus").checkOnline(),
            !navigator.onLine || !r("WAWebNetworkStatus").online)
          )
            return (
              o("WALogger").LOG(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "Update check skipped because user is offline.",
                  ])),
              ),
              !1
            );
          var t = o("WAWebBuildConstants").VERSION_TERTIARY;
          try {
            var n = yield r("WAWebPonyfillsFetch")(
              p + "?subplatform=web&revision=" + t,
              {
                headers: {
                  Accept: "application/json",
                  "Content-Type": "application/json",
                },
              },
            );
            if (!n.ok)
              throw r("err")(
                "{status: " + n.status + ", message: " + n.statusText + "}",
              );
            var a = yield n.json(),
              i = new Date().toISOString();
            if (
              (o("WALogger").LOG(
                s ||
                  (s = babelHelpers.taggedTemplateLiteralLoose([
                    "Updater: Checked at ",
                    "",
                  ])),
                i,
              ),
              (v = 0),
              !(a != null && a.isBroken))
            )
              return !1;
            e: {
              var l = a == null ? void 0 : a.action;
              if (l === S.SOFT_REFRESH) {
                return (o("WAWebUpdater").Updater.showSoftUpdateBanner(), !0);
                break e;
              }
              if (l === S.HARD_REFRESH) {
                return (
                  o("WAWebUpdater")
                    .Updater.update({ belowHard: R, belowSoft: !1 })
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
                        .sendLogs("SPIN hard refresh failed");
                    }),
                  !0
                );
                break e;
              }
              if (l === void 0) break e;
              throw Error(
                "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                  l,
              );
            }
          } catch (e) {
            ((v += 1),
              v >= 3
                ? (o("WALogger")
                    .ERROR(
                      c ||
                        (c = babelHelpers.taggedTemplateLiteralLoose([
                          "Updater: Version check failed for ",
                          " consecutive times: ",
                          "",
                        ])),
                      v,
                      e,
                    )
                    .sendLogs("updater-spin-version-check-failed"),
                  (v = 0))
                : o("WALogger").ERROR(
                    d ||
                      (d = babelHelpers.taggedTemplateLiteralLoose([
                        "Updater: Version check failed: ",
                        "",
                      ])),
                    e,
                  ));
          }
          return !1;
        })),
        k.apply(this, arguments)
      );
    }
    function I() {
      return T.apply(this, arguments);
    }
    function T() {
      return (
        (T = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          if (r("WAWebEnvironment").isWindows) return !0;
          var e = Date.now() - h;
          return e > C
            ? (o("WAWebUpdater")
                .Updater.update({ belowHard: R, belowSoft: !1 })
                .catch(function (e) {
                  o("WALogger")
                    .LOG(
                      m ||
                        (m = babelHelpers.taggedTemplateLiteralLoose([
                          "Updater: hard update failed with ",
                          "",
                        ])),
                      e,
                    )
                    .sendLogs("thirty day hard expiration failed");
                }),
              !0)
            : ((r("gkx")("18269") && !b && (yield E())) ||
                (n("cr:27423") &&
                  r("gkx")("11017") &&
                  !b &&
                  (yield n("cr:27423").autoRefreshWhenHidden()),
                (e > y ||
                  (o("WAWebCurrentUser").isEmployee() &&
                    e > o("WATimeUtils").DAY_MILLISECONDS)) &&
                  o("WAWebUpdater").Updater.showSoftUpdateBanner(),
                (b = !1)),
              !0);
        })),
        T.apply(this, arguments)
      );
    }
    ((l.updatePoll = L), (l.checkForUpdates = I));
  },
  98,
);
