__d(
  "WAWebWam",
  [
    "Promise",
    "SiteData",
    "WALogger",
    "WAResolvable",
    "WAShiftTimer",
    "WATimeUtils",
    "WAWebABPropsLocalStorage",
    "WAWebBrowserApi",
    "WAWebBrowserInfo",
    "WAWebBuildConstants",
    "WAWebCrashlog",
    "WAWebEnvironment",
    "WAWebEventSampling",
    "WAWebGuestCoreWamUtils",
    "WAWebIsOfficialClient",
    "WAWebUploadStatsBackend",
    "WAWebUserPrefsIsLoggedIn",
    "WAWebUserPrefsTabMutex",
    "WAWebWamClientErrorsWamEvent",
    "WAWebWamConstants",
    "WAWebWamEnumDeviceClassification",
    "WAWebWamEnumPlatformType",
    "WAWebWamEnumWebcWebPlatformType",
    "WAWebWamFalcoABProps",
    "WAWebWamFalcoBatchRouter",
    "WAWebWamFalcoLogger",
    "WAWebWamGlobals",
    "WAWebWamInterop",
    "WAWebWamLibContext",
    "WAWebWamPlatform",
    "WAWebWamPrivateStats",
    "WAWebWamRuntimeProvider",
    "WAWebWamStorage",
    "WAWebWamUtils",
    "asyncToGeneratorRuntime",
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
      h,
      y = r("requireDeferred")("WAWebUploadPrivateStatsBackend").__setRef(
        "WAWebWam",
      ),
      C,
      b = [],
      v = [],
      S = !1,
      R = "1",
      L = { commit: k(O), set: k(q), resumeJobs: k(z), initialize: k(U) };
    function E() {
      for (
        b = o("WAWebWamGlobals").PrivateStatsAllIds.map(function (e) {
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
          C = new (o("WAShiftTimer").ShiftTimer)(function (e) {
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
            j(e).catch(function (e) {
              o("WALogger").LOG(
                u ||
                  (u = babelHelpers.taggedTemplateLiteralLoose([
                    "[WAM] failed to execute pending jobs for wam runtime ",
                  ])),
              );
            });
          }),
          o("WAWebWamRuntimeProvider").setWamRuntime(L);
        v.length;
      ) {
        var t = v.pop();
        t && t();
      }
      S = !0;
    }
    function k(e) {
      return function () {
        for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++)
          n[r] = arguments[r];
        if (S) return e.apply(void 0, n);
        v.push(function () {
          e.apply(void 0, n);
        });
      };
    }
    var I = {},
      T = 0,
      D = [],
      x = !1,
      $ = !1,
      P = null;
    function N() {
      var e,
        t = (e = P) == null ? void 0 : e.abKey2;
      return t == null ? null : String(t);
    }
    var M = new (o("WAResolvable").Resolvable)(),
      w = !1,
      A = !1;
    function F(e, t) {
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
    function O(e, t) {
      var a;
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
          (h || (h = n("Promise"))).resolve()
        );
      e.wamChannel;
      var i = F(e, t);
      if (i.handled) return (B(e), (h || (h = n("Promise"))).resolve());
      var l =
          (a = o("WAWebEventSampling").getClientEventSamplingWeight(e.id)) !=
          null
            ? a
            : e.weight,
        s = l !== 0 && Math.random() * l > 1;
      if (
        (i.shouldUseLegacyBridge &&
          o("WAWebWamFalcoLogger").logEventToFalcoBridge(e, s),
        s || o("WAWebWamFalcoABProps").isWamLoggingDisabled())
      )
        return (
          (e.commitTime =
            o("WATimeUtils").unixTimeWithoutClockSkewCorrection()),
          (h || (h = n("Promise"))).resolve()
        );
      (B(e), o("WAWebWamUtils").maybeForwardWamEventToJestE2e(e));
      var u;
      return (
        e.wamChannel === "realtime"
          ? (u = r("justknobx")._("4680") ? "realtime" : "all")
          : r("WAWebEnvironment").isGuest || t
            ? (u = "all")
            : (u = "none"),
        H({ job: e, flushWamBuffers: u })
      );
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
        H({ job: [e, t], flushWamBuffers: "none" })
      );
    }
    function U() {
      return V.apply(this, arguments);
    }
    function V() {
      return (
        (V = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e;
          if (P) return (h || (h = n("Promise"))).resolve(P);
          var t = r("WAWebBrowserInfo")(),
            a = babelHelpers.extends(
              {
                appVersion: o("WAWebBuildConstants")
                  .VERSION_BASE_WITH_WINDOWS_BUILD,
                appBuild: o("WAWebWamUtils").getAppBuild(),
                platform: o("WAWebWamEnumPlatformType").PLATFORM_TYPE.WEBCLIENT,
                webcWebArch: ce(),
                appIsBetaRelease:
                  yield o("WAWebWamUtils").getAppIsBetaRelease(),
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
                  .WEBC_WEB_PLATFORM_TYPE[
                  o("WAWebWamPlatform").getWamPlatform()
                ],
                ocVersion: o("WAWebIsOfficialClient").isOfficialClient ? 1 : 0,
                deviceClassification: o("WAWebWamEnumDeviceClassification")
                  .DEVICE_CLASSIFICATION.DESKTOP,
                webcRevision: r("SiteData").client_revision,
                abKey2:
                  (e = o("WAWebABPropsLocalStorage").getABKey()) != null
                    ? e
                    : "",
              },
              r("WAWebEnvironment").isGuest
                ? o("WAWebGuestCoreWamUtils").getGuestWamOverrides()
                : {},
            );
          return (
            (P = a),
            (o("WAWebWamGlobals").Global.commitOnSet = !1),
            o("WAWebWamGlobals").Global.set(P),
            (o("WAWebWamGlobals").Global.commitOnSet = !0),
            Object.keys(a).forEach(function (e) {
              return o("WAWebWamUtils").maybeForwardWamAttributeToJestE2e(
                e,
                String(a[e]),
              );
            }),
            a
          );
        })),
        V.apply(this, arguments)
      );
    }
    function H(e) {
      var t = e.flushWamBuffers,
        n = e.job;
      return (
        D.push(n),
        x
          ? t !== "none"
            ? ((w = !1),
              (A = !0),
              self.setTimeout(function () {
                return C.forceRunNow(t);
              }, 1))
            : C.onOrBefore(
                o("WAWebWamUtils").getInMemoryBufferingDurationInSecs() * 1e3,
              )
          : t === "realtime" && r("justknobx")._("3237")
            ? self.setTimeout(function () {
                return C.forceRunNow("realtime");
              }, 1)
            : t !== "none" && (C.cancel(), (w = !0), (A = !1)),
        M.promise
      );
    }
    function G() {
      ((x = !1), C.cancel());
      var e = M;
      return ((M = new (o("WAResolvable").Resolvable)()), e);
    }
    function z() {
      ((x = !0),
        (A = !1),
        D.length > 0 &&
          C.onOrBefore(
            o("WAWebWamUtils").getInMemoryBufferingDurationInSecs() * 1e3,
          ),
        w && ((w = !1), (A = !0), C.forceRunNow()));
    }
    function j(e) {
      return K.apply(this, arguments);
    }
    function K() {
      return (
        (K = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = A,
            a = !(e === "realtime" && r("justknobx")._("3237")),
            i = a ? G() : null,
            l,
            s;
          if (e === "realtime") {
            l = ["realtime"];
            var u = D.reduce(
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
            ((s = u[0]), (D = u[1]));
          } else
            ((l = ["regular", "realtime", "none"].concat(b)),
              (s = [].concat(D)),
              (D = []));
          try {
            var c = yield U();
            if (e !== "realtime") {
              var d = yield o("WAWebWamPrivateStats").maybeRotatePsIds();
              yield (h || (h = n("Promise"))).all(
                d.map(function (e) {
                  return Q(e, c);
                }),
              );
            }
            yield (h || (h = n("Promise"))).all(
              l.map(function (e) {
                return te({
                  forceFlushBuffers: t,
                  key: e,
                  localScopeLockedInGlobals: c,
                  toBeExecuted: s,
                });
              }),
            );
          } finally {
            a && (i == null || i.resolve(), z());
          }
        })),
        K.apply(this, arguments)
      );
    }
    function Q(e, t) {
      return X.apply(this, arguments);
    }
    function X() {
      return (
        (X = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          return (yield re(e, t), (I[e] = yield Y(e, t)), I[e]);
        })),
        X.apply(this, arguments)
      );
    }
    function Y(e, t) {
      return J.apply(this, arguments);
    }
    function J() {
      return (
        (J = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          return new (o("WAWebWamLibContext").WamContext)(
            e,
            yield r("WAWebWamStorage").getNextSequenceNumberForStream(R),
            t,
          );
        })),
        J.apply(this, arguments)
      );
    }
    function Z(e, t) {
      return ee.apply(this, arguments);
    }
    function ee() {
      return (
        (ee = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n,
            r = (n = I[e]) != null ? n : yield Y(e, t);
          return ((I[e] = r), r);
        })),
        ee.apply(this, arguments)
      );
    }
    function te(e) {
      return ne.apply(this, arguments);
    }
    function ne() {
      return (
        (ne = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.forceFlushBuffers,
            n = e.key,
            a = e.localScopeLockedInGlobals,
            i = e.toBeExecuted,
            l = o("WAWebWamUtils").getChannelFromBufferKey(n),
            s;
          try {
            s = yield Z(n, a);
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
                var _ = yield Q(n, a);
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
                b >= T + o("WAWebWamUtils").getBufferRotateIntervalInSecs() ||
                !$)
            ) {
              var v = o("WAWebUserPrefsIsLoggedIn").isLoggedIn();
              if (!v) {
                s.buffer.size() > o("WAWebWamConstants").WAM_MAX_BUFFER_SIZE
                  ? (I[n] = null)
                  : yield re(n, a);
                return;
              }
              yield ae(n);
            } else yield re(n, a);
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
              (I[n] = null));
          }
        })),
        ne.apply(this, arguments)
      );
    }
    function re(e, t) {
      return oe.apply(this, arguments);
    }
    function oe() {
      return (
        (oe = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          if (I[e]) {
            var n = I[e].stringBuffer();
            if (n) {
              var a = r("nullthrows")(I[e]).unsavedPortion;
              if (!(a && a.eventsWritten === 0)) {
                var i = r("nullthrows")(I[e]).saveKey;
                try {
                  if (a) {
                    var l = yield r("WAWebWamStorage").update(i, e, n);
                    if (!I[e]) return;
                    if (l) r("nullthrows")(I[e]).unsavedPortion = yield Y(e, t);
                    else {
                      ((I[e] = I[e].unsavedPortion), yield re(e, t));
                      return;
                    }
                  } else {
                    if ((yield r("WAWebWamStorage").add(i, e, n), !I[e]))
                      return;
                    r("nullthrows")(I[e]).unsavedPortion = yield Y(e, t);
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
        })),
        oe.apply(this, arguments)
      );
    }
    function ae(e) {
      return ie.apply(this, arguments);
    }
    function ie() {
      return (
        (ie = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t;
          try {
            t = yield r("WAWebWamStorage").deleteAll(e);
          } catch (e) {
            var a = r("getErrorSafe")(e);
            ((t = {}),
              o("WALogger").WARN(
                _ ||
                  (_ = babelHelpers.taggedTemplateLiteralLoose([
                    "[wam] sendAllLogs failed to read because ",
                    "",
                  ])),
                String(a),
              ));
          }
          var i = t;
          if (I[e]) {
            I[e].unsavedPortion &&
              !(I[e].saveKey in i) &&
              (I[e] = I[e].unsavedPortion);
            var l = r("nullthrows")(I[e]).saveKey;
            i[l] = r("nullthrows")(I[e]).stringBuffer();
          }
          var s = yield (h || (h = n("Promise"))).all(
              Object.entries(i).map(function (t) {
                var n = t[0],
                  r = t[1];
                return le(r, n, o("WAWebWamUtils").getChannelFromBufferKey(e));
              }),
            ),
            u = s.filter(Boolean);
          if (
            (u.length !== s.length &&
              ((T = o("WATimeUtils").unixTimeWithoutClockSkewCorrection()),
              ($ = !0)),
            I[e] && !u.includes(I[e].saveKey) && (I[e] = null),
            u.length !== 0)
          ) {
            var c = r("sumBy")(u, function (e) {
              return i[e].length;
            });
            c < o("WAWebWamConstants").WAM_MAX_BUFFER_SIZE
              ? yield (h || (h = n("Promise"))).all(
                  u.map(
                    (function () {
                      var t = n("asyncToGeneratorRuntime").asyncToGenerator(
                        function* (t) {
                          try {
                            yield r("WAWebWamStorage").add(t, e, i[t]);
                          } catch (e) {
                            o("WALogger").WARN(
                              f ||
                                (f = babelHelpers.taggedTemplateLiteralLoose([
                                  "sendAllLogs: adding to WamStorage failed",
                                ])),
                            );
                          }
                        },
                      );
                      return function (e) {
                        return t.apply(this, arguments);
                      };
                    })(),
                  ),
                )
              : ((I[e] = null),
                new (o("WAWebWamClientErrorsWamEvent").WamClientErrorsWamEvent)(
                  { wamClientBufferDropErrorCount: 1 },
                ).commit(),
                o("WALogger").WARN(
                  g ||
                    (g = babelHelpers.taggedTemplateLiteralLoose([
                      "wam dropped ",
                      " buffers! (",
                      " bytes)",
                    ])),
                  u.length,
                  c,
                ));
          }
        })),
        ie.apply(this, arguments)
      );
    }
    function le(e, t, n) {
      return se.apply(this, arguments);
    }
    function se() {
      return (
        (se = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, a) {
            return e === "" || e[0] === "["
              ? (h || (h = n("Promise"))).resolve()
              : o("WAWebWamUtils").isWamBufferTooBigToUpload(e)
                ? (new (o(
                    "WAWebWamClientErrorsWamEvent",
                  ).WamClientErrorsWamEvent)({
                    wamClientBufferDropErrorCount: 1,
                  }).commit(),
                  (h || (h = n("Promise"))).resolve())
                : a === "private"
                  ? y.load().then(function (n) {
                      return n(e, t);
                    })
                  : r("WAWebUploadStatsBackend")(e, t);
          },
        )),
        se.apply(this, arguments)
      );
    }
    var ue = new Map([
      ["sandcastle", "dev"],
      ["trunkstable", "C1"],
    ]);
    function ce() {
      var e = r("gkx")("26256");
      if (e) return "jest-e2e";
      if (!r("isStringNullOrEmpty")(o("WAWebBuildConstants").PUSH_PHASE)) {
        var t;
        return (t = ue.get(o("WAWebBuildConstants").PUSH_PHASE)) != null
          ? t
          : o("WAWebBuildConstants").PUSH_PHASE;
      }
    }
    ((l.Wam = L),
      (l.initWamRuntime = E),
      (l.getSerializedAbKey2 = N),
      (l.sendAllLogs = ae),
      (l.getPushPhase = ce));
  },
  98,
);
