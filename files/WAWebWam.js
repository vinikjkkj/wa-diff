__d(
  "WAWebWam",
  [
    "SiteData",
    "WALogger",
    "WAResolvable",
    "WAShiftTimer",
    "WATimeUtils",
    "WAWebABPropsCache",
    "WAWebABPropsLocalStorage",
    "WAWebBrowserApi",
    "WAWebBrowserInfo",
    "WAWebBuildConstants",
    "WAWebCrashlog",
    "WAWebEnvironment",
    "WAWebEventSampling",
    "WAWebFalcoCanonicalDedupKey",
    "WAWebGuestCoreWamUtils",
    "WAWebIsOfficialClient",
    "WAWebUploadStatsBackend",
    "WAWebUserPrefsIsLoggedIn",
    "WAWebUserPrefsTabMutex",
    "WAWebWamClientErrorsWamEvent",
    "WAWebWamCodegenUtils",
    "WAWebWamConstants",
    "WAWebWamEnumDeviceClassification",
    "WAWebWamEnumPlatformType",
    "WAWebWamEnumWebcWebPlatformType",
    "WAWebWamFalcoABProps",
    "WAWebWamFalcoBatchRouter",
    "WAWebWamFalcoLogger",
    "WAWebWamFalcoModes",
    "WAWebWamGlobals",
    "WAWebWamInterop",
    "WAWebWamLibContext",
    "WAWebWamPlatform",
    "WAWebWamPrivateStats",
    "WAWebWamRuntimeProvider",
    "WAWebWamStorage",
    "WAWebWamUtils",
    "getErrorSafe",
    "gkx",
    "isStringNullOrEmpty",
    "justknobx",
    "nullthrows",
    "requireDeferred",
    "sumBy",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c,
      d,
      m,
      p,
      _,
      f,
      g,
      h = r("requireDeferred")("WAWebUploadPrivateStatsBackend").__setRef(
        "WAWebWam",
      ),
      y,
      C = [],
      b = [],
      v = !1,
      S = "1",
      R = { commit: E(F), set: E(q), resumeJobs: E(G), initialize: E(U) };
    function L() {
      for (
        C = o("WAWebWamGlobals").PrivateStatsAllIds.map(function (e) {
          return e.key;
        }),
          o("WAWebWamPrivateStats")
            .initPrivateStats()
            .catch(function (t) {
              o("WALogger").LOG(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "[WAM] failed to initialise private stats for wam runtime ",
                  ])),
              );
            }),
          o("WAWebWamInterop").startWamStore(),
          y = new (o("WAShiftTimer").ShiftTimer)(function (e) {
            var t =
              !r("WAWebEnvironment").isGuest &&
              !o("WAWebUserPrefsTabMutex").currentTabHasMutex() &&
              o("WAWebUserPrefsIsLoggedIn").isLoggedIn();
            if (t) {
              o("WALogger").WARN(
                s ||
                  (s = babelHelpers.taggedTemplateLiteralLoose([
                    "[wam] bg tab, skipping WAM processing",
                  ])),
              );
              return;
            }
            z(e).catch(function (e) {
              o("WALogger").LOG(
                u ||
                  (u = babelHelpers.taggedTemplateLiteralLoose([
                    "[WAM] failed to execute pending jobs for wam runtime ",
                  ])),
              );
            });
          }),
          o("WAWebWamRuntimeProvider").setWamRuntime(R);
        b.length;
      ) {
        var t = b.pop();
        t && t();
      }
      v = !0;
    }
    function E(e) {
      return function () {
        for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++)
          n[r] = arguments[r];
        if (v) return e.apply(void 0, n);
        b.push(function () {
          e.apply(void 0, n);
        });
      };
    }
    var k = {},
      I = 0,
      T = [],
      D = !1,
      x = !1,
      $ = null;
    function P() {
      var e,
        t = (e = $) == null ? void 0 : e.abKey2;
      return t == null ? null : String(t);
    }
    var N = new (o("WAResolvable").Resolvable)(),
      M = !1,
      w = !1;
    function A(e, t) {
      if (!o("WAWebWamFalcoABProps").isFalcoLoggingEnabled())
        return { handled: !1, shouldUseLegacyBridge: !1 };
      var n = o("WAWebWamFalcoBatchRouter").resolveWamFalcoRoute(e);
      return n.sink === "wam"
        ? { handled: !1, shouldUseLegacyBridge: n.reason === "mode" }
        : t
          ? { handled: !1, shouldUseLegacyBridge: !1 }
          : {
              handled: o("WAWebWamFalcoLogger").logEventToGeneratedFalco(
                e,
                n.logger,
              ),
              shouldUseLegacyBridge: !1,
            };
    }
    function F(e, t) {
      var n;
      if (
        (t === void 0 && (t = !1), e.commitTime != null && e.commitTime !== 0)
      )
        return (
          o("WALogger").WARN(
            c ||
              (c = babelHelpers.taggedTemplateLiteralLoose([
                "wam:commit redundant commit! ",
                "",
              ])),
            e.$className,
          ),
          Promise.resolve()
        );
      e.wamChannel;
      var a = A(e, t);
      if (a.handled) return (B(e), Promise.resolve());
      var i =
          (n = o("WAWebEventSampling").getClientEventSamplingWeight(e.id)) !=
          null
            ? n
            : e.weight,
        l = i !== 0 && Math.random() * i > 1;
      if (
        (a.shouldUseLegacyBridge &&
          o("WAWebWamFalcoLogger").logEventToFalcoBridge(e, l),
        l || o("WAWebWamFalcoABProps").isWamLoggingDisabled())
      )
        return (
          (e.commitTime =
            o("WATimeUtils").unixTimeWithoutClockSkewCorrection()),
          Promise.resolve()
        );
      (O(e), B(e), o("WAWebWamUtils").maybeForwardWamEventToJestE2e(e));
      var s;
      return (
        e.wamChannel === "realtime"
          ? (s = r("justknobx")._("4680") ? "realtime" : "all")
          : r("WAWebEnvironment").isGuest || t
            ? (s = "all")
            : (s = "none"),
        V({ job: e, flushWamBuffers: s })
      );
    }
    function O(e) {
      e.wamChannel !== "private" &&
        o("WAWebWamCodegenUtils").getWamDedupKeyFieldId(e.id) != null &&
        o("WAWebABPropsCache").isABPropConfigsReady() &&
        o("WAWebWamFalcoABProps").getWamFalcoMode() ===
          o("WAWebWamFalcoModes").FALCO_MODE_WAM_OR_FALCO &&
        e.setWamDedupKey(r("WAWebFalcoCanonicalDedupKey")() - Math.pow(2, 52));
    }
    function B(e, t) {
      e.commitTime =
        t != null ? t : o("WATimeUtils").unixTimeWithoutClockSkewCorrection();
    }
    function W(e, t) {
      e.name === "memClass"
        ? o("WAWebBrowserApi").setMemClassOverride(
            typeof t == "number" ? t : null,
          )
        : e.name === "osVersion" &&
          o("WAWebBrowserApi").setOsVersionOverride(
            typeof t == "string" ? t : null,
          );
    }
    function q(e, t) {
      return (
        o("WAWebWamUtils").maybeForwardWamAttributeToJestE2e(e.name, String(t)),
        W(e, t),
        V({ job: [e, t], flushWamBuffers: "none" })
      );
    }
    async function U() {
      var e;
      if ($) return Promise.resolve($);
      var t = r("WAWebBrowserInfo")(),
        n = babelHelpers.extends(
          {
            appVersion: o("WAWebBuildConstants")
              .VERSION_BASE_WITH_WINDOWS_BUILD,
            appBuild: o("WAWebWamUtils").getAppBuild(),
            platform: o("WAWebWamEnumPlatformType").PLATFORM_TYPE.WEBCLIENT,
            webcWebArch: te(),
            appIsBetaRelease: await o("WAWebWamUtils").getAppIsBetaRelease(),
            browser: t.name || null,
            browserVersion: t.ua || null,
            deviceName: t.os || null,
            deviceVersion: t.version || null,
            osVersion: t.version || null,
            memClass: o("WAWebBrowserApi").getMemClass(),
            numCpu: o("WAWebBrowserApi").getNumCpu(),
            webcEnv: o("WAWebWamUtils").getWamEnv(),
            webcTabId: o("WAWebUserPrefsTabMutex").THIS_TAB,
            webcWebPlatform: o("WAWebWamEnumWebcWebPlatformType")
              .WEBC_WEB_PLATFORM_TYPE[o("WAWebWamPlatform").getWamPlatform()],
            ocVersion: o("WAWebIsOfficialClient").isOfficialClient ? 1 : 0,
            deviceClassification: o("WAWebWamEnumDeviceClassification")
              .DEVICE_CLASSIFICATION.DESKTOP,
            webcRevision: r("SiteData").client_revision,
            abKey2:
              (e = o("WAWebABPropsLocalStorage").getABKey()) != null ? e : "",
          },
          r("WAWebEnvironment").isGuest
            ? o("WAWebGuestCoreWamUtils").getGuestWamOverrides()
            : {},
        );
      return (
        ($ = n),
        (o("WAWebWamGlobals").Global.commitOnSet = !1),
        o("WAWebWamGlobals").Global.set($),
        (o("WAWebWamGlobals").Global.commitOnSet = !0),
        Object.keys(n).forEach(function (e) {
          return o("WAWebWamUtils").maybeForwardWamAttributeToJestE2e(
            e,
            String(n[e]),
          );
        }),
        n
      );
    }
    function V(e) {
      var t = e.flushWamBuffers,
        n = e.job;
      return (
        T.push(n),
        D
          ? t !== "none"
            ? ((M = !1),
              (w = !0),
              self.setTimeout(function () {
                return y.forceRunNow(t);
              }, 1))
            : y.onOrBefore(
                o("WAWebWamUtils").getInMemoryBufferingDurationInSecs() * 1e3,
              )
          : t === "realtime" && r("justknobx")._("3237")
            ? self.setTimeout(function () {
                return y.forceRunNow("realtime");
              }, 1)
            : t !== "none" && (y.cancel(), (M = !0), (w = !1)),
        N.promise
      );
    }
    function H() {
      ((D = !1), y.cancel());
      var e = N;
      return ((N = new (o("WAResolvable").Resolvable)()), e);
    }
    function G() {
      ((D = !0),
        (w = !1),
        T.length > 0 &&
          y.onOrBefore(
            o("WAWebWamUtils").getInMemoryBufferingDurationInSecs() * 1e3,
          ),
        M && ((M = !1), (w = !0), y.forceRunNow()));
    }
    async function z(e) {
      var t = w,
        n = !(e === "realtime" && r("justknobx")._("3237")),
        a = n ? H() : null,
        i,
        l;
      if (e === "realtime") {
        i = ["realtime"];
        var s = T.reduce(
          function (e, t) {
            var n = e[0],
              r = e[1];
            return (
              !Array.isArray(t) && t.wamChannel === "realtime"
                ? n.push(t)
                : r.push(t),
              [n, r]
            );
          },
          [[], []],
        );
        ((l = s[0]), (T = s[1]));
      } else
        ((i = ["regular", "realtime", "none"].concat(C)),
          (l = [].concat(T)),
          (T = []));
      try {
        var u = await U();
        if (e !== "realtime") {
          var c = await o("WAWebWamPrivateStats").maybeRotatePsIds();
          await Promise.all(
            c.map(function (e) {
              return j(e, u);
            }),
          );
        }
        await Promise.all(
          i.map(function (e) {
            return X({
              forceFlushBuffers: t,
              key: e,
              localScopeLockedInGlobals: u,
              toBeExecuted: l,
            });
          }),
        );
      } finally {
        n && (a == null || a.resolve(), G());
      }
    }
    async function j(e, t) {
      return (await Y(e, t), (k[e] = await K(e, t)), k[e]);
    }
    async function K(e, t) {
      return new (o("WAWebWamLibContext").WamContext)(
        e,
        await r("WAWebWamStorage").getNextSequenceNumberForStream(S),
        t,
      );
    }
    async function Q(e, t) {
      var n,
        r = (n = k[e]) != null ? n : await K(e, t);
      return ((k[e] = r), r);
    }
    async function X(e) {
      var t = e.forceFlushBuffers,
        n = e.key,
        a = e.localScopeLockedInGlobals,
        i = e.toBeExecuted,
        l = o("WAWebWamUtils").getChannelFromBufferKey(n),
        s;
      try {
        s = await Q(n, a);
      } catch (e) {
        var u,
          c = r("getErrorSafe")(e);
        o("WALogger").WARN(
          d ||
            (d = babelHelpers.taggedTemplateLiteralLoose([
              "[wam] executePendingForContext failed to get context ",
              "",
            ])),
          String((u = c.stack) != null ? u : c),
        );
        return;
      }
      try {
        for (var p = 0; p < i.length; p++) {
          if (s.size() > o("WAWebWamConstants").WAM_MAX_BUFFER_SIZE) {
            var _ = await j(n, a);
            if (_ == null) break;
            s = _;
          }
          var f = i[p];
          if (Array.isArray(f)) {
            var h = f[0],
              y = f[1],
              C = l === "realtime" ? "regular" : l;
            h.channels.includes(C) &&
              ((a[h.name] = y), s.set(h.id, y), W(h, y));
          } else {
            var g = f;
            (((g.wamChannel === "regular" || g.wamChannel === "realtime") &&
              g.wamChannel === l) ||
              (g.wamChannel === "private" &&
                n ===
                  o("WAWebWamPrivateStats").getPrivateStatsKeyFromInt(
                    g.privateStatsIdInt,
                  ))) &&
              s.write(g);
          }
        }
        var b = o("WATimeUtils").unixTimeWithoutClockSkewCorrection();
        if (
          s.eventsWritten > 0 &&
          (t ||
            s.size() > o("WAWebWamConstants").WAM_MAX_BUFFER_SIZE ||
            b >= I + o("WAWebWamUtils").getBufferRotateIntervalInSecs() ||
            !x)
        ) {
          var v = o("WAWebUserPrefsIsLoggedIn").isLoggedIn();
          if (!v) {
            s.buffer.size() > o("WAWebWamConstants").WAM_MAX_BUFFER_SIZE
              ? (k[n] = null)
              : await Y(n, a);
            return;
          }
          await J(n);
        } else await Y(n, a);
      } catch (e) {
        var S,
          R = r("getErrorSafe")(e);
        (o("WALogger").WARN(
          m ||
            (m = babelHelpers.taggedTemplateLiteralLoose([
              "[wam] _executePending error ",
              "",
            ])),
          String((S = R.stack) != null ? S : R),
        ),
          o("WAWebCrashlog").upload({ reason: "wam-error" }),
          new (o("WAWebWamClientErrorsWamEvent").WamClientErrorsWamEvent)({
            wamClientBufferDropErrorCount: 1,
          }).commit(),
          (k[n] = null));
      }
    }
    async function Y(e, t) {
      if (k[e]) {
        var n = k[e].stringBuffer();
        if (n) {
          var a = r("nullthrows")(k[e]).unsavedPortion;
          if (!(a && a.eventsWritten === 0)) {
            var i = r("nullthrows")(k[e]).saveKey;
            try {
              if (a) {
                var l = await r("WAWebWamStorage").update(i, e, n);
                if (!k[e]) return;
                if (l) r("nullthrows")(k[e]).unsavedPortion = await K(e, t);
                else {
                  ((k[e] = k[e].unsavedPortion), await Y(e, t));
                  return;
                }
              } else {
                if ((await r("WAWebWamStorage").add(i, e, n), !k[e])) return;
                r("nullthrows")(k[e]).unsavedPortion = await K(e, t);
              }
            } catch (e) {
              var s = r("getErrorSafe")(e);
              o("WALogger").WARN(
                p ||
                  (p = babelHelpers.taggedTemplateLiteralLoose([
                    "[wam] save WamStorage failed to save ",
                    "",
                  ])),
                String(s),
              );
            }
          }
        }
      }
    }
    async function J(e) {
      var t;
      try {
        t = await r("WAWebWamStorage").deleteAll(e);
      } catch (e) {
        var n = r("getErrorSafe")(e);
        ((t = {}),
          o("WALogger").WARN(
            _ ||
              (_ = babelHelpers.taggedTemplateLiteralLoose([
                "[wam] sendAllLogs failed to read because ",
                "",
              ])),
            String(n),
          ));
      }
      var a = t;
      if (k[e]) {
        k[e].unsavedPortion &&
          !(k[e].saveKey in a) &&
          (k[e] = k[e].unsavedPortion);
        var i = r("nullthrows")(k[e]).saveKey;
        a[i] = r("nullthrows")(k[e]).stringBuffer();
      }
      var l = await Promise.all(
          Object.entries(a).map(function (t) {
            var n = t[0],
              r = t[1];
            return Z(r, n, o("WAWebWamUtils").getChannelFromBufferKey(e));
          }),
        ),
        s = l.filter(Boolean);
      if (
        (s.length !== l.length &&
          ((I = o("WATimeUtils").unixTimeWithoutClockSkewCorrection()),
          (x = !0)),
        k[e] && !s.includes(k[e].saveKey) && (k[e] = null),
        s.length !== 0)
      ) {
        var u = r("sumBy")(s, function (e) {
          return a[e].length;
        });
        u < o("WAWebWamConstants").WAM_MAX_BUFFER_SIZE
          ? await Promise.all(
              s.map(async function (t) {
                try {
                  await r("WAWebWamStorage").add(t, e, a[t]);
                } catch (e) {
                  o("WALogger").WARN(
                    f ||
                      (f = babelHelpers.taggedTemplateLiteralLoose([
                        "sendAllLogs: adding to WamStorage failed",
                      ])),
                  );
                }
              }),
            )
          : ((k[e] = null),
            new (o("WAWebWamClientErrorsWamEvent").WamClientErrorsWamEvent)({
              wamClientBufferDropErrorCount: 1,
            }).commit(),
            o("WALogger").WARN(
              g ||
                (g = babelHelpers.taggedTemplateLiteralLoose([
                  "wam dropped ",
                  " buffers! (",
                  " bytes)",
                ])),
              s.length,
              u,
            ));
      }
    }
    async function Z(e, t, n) {
      return e === "" || e[0] === "["
        ? Promise.resolve()
        : o("WAWebWamUtils").isWamBufferTooBigToUpload(e)
          ? (new (o("WAWebWamClientErrorsWamEvent").WamClientErrorsWamEvent)({
              wamClientBufferDropErrorCount: 1,
            }).commit(),
            Promise.resolve())
          : n === "private"
            ? h.load().then(function (n) {
                return n(e, t);
              })
            : r("WAWebUploadStatsBackend")(e, t);
    }
    var ee = new Map([
      ["sandcastle", "dev"],
      ["trunkstable", "C1"],
    ]);
    function te() {
      var e = r("gkx")("26256");
      if (e) return "jest-e2e";
      if (!r("isStringNullOrEmpty")(o("WAWebBuildConstants").PUSH_PHASE)) {
        var t;
        return (t = ee.get(o("WAWebBuildConstants").PUSH_PHASE)) != null
          ? t
          : o("WAWebBuildConstants").PUSH_PHASE;
      }
    }
    ((l.Wam = R),
      (l.initWamRuntime = L),
      (l.getSerializedAbKey2 = P),
      (l.sendAllLogs = J),
      (l.getPushPhase = te));
  },
  98,
);
