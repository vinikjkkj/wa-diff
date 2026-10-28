__d(
  "WAWebWam",
  [
    "Promise",
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
      L = { commit: k(O), set: k(U), resumeJobs: k(j), initialize: k(V) };
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
            K(e).catch(function (e) {
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
      if (i.handled) return (W(e), (h || (h = n("Promise"))).resolve());
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
      (B(e), W(e), o("WAWebWamUtils").maybeForwardWamEventToJestE2e(e));
      var u;
      return (
        e.wamChannel === "realtime"
          ? (u = r("justknobx")._("4680") ? "realtime" : "all")
          : r("WAWebEnvironment").isGuest || t
            ? (u = "all")
            : (u = "none"),
        G({ job: e, flushWamBuffers: u })
      );
    }
    function B(e) {
      e.wamChannel !== "private" &&
        o("WAWebWamCodegenUtils").getWamDedupKeyFieldId(e.id) != null &&
        o("WAWebABPropsCache").isABPropConfigsReady() &&
        o("WAWebWamFalcoABProps").getWamFalcoMode() ===
          o("WAWebWamFalcoModes").FALCO_MODE_WAM_OR_FALCO &&
        e.setWamDedupKey(r("WAWebFalcoCanonicalDedupKey")() - Math.pow(2, 52));
    }
    function W(e, t) {
      e.commitTime =
        t != null ? t : o("WATimeUtils").unixTimeWithoutClockSkewCorrection();
    }
    function q(e, t) {
      e.name === "memClass"
        ? o("WAWebBrowserApi").setMemClassOverride(
            typeof t == "number" ? t : null,
          )
        : e.name === "osVersion" &&
          o("WAWebBrowserApi").setOsVersionOverride(
            typeof t == "string" ? t : null,
          );
    }
    function U(e, t) {
      return (
        o("WAWebWamUtils").maybeForwardWamAttributeToJestE2e(e.name, String(t)),
        q(e, t),
        G({ job: [e, t], flushWamBuffers: "none" })
      );
    }
    function V() {
      return H.apply(this, arguments);
    }
    function H() {
      return (
        (H = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e;
          if (P) return (h || (h = n("Promise"))).resolve(P);
          var t = r("WAWebBrowserInfo")(),
            a = babelHelpers.extends(
              {
                appVersion: o("WAWebBuildConstants")
                  .VERSION_BASE_WITH_WINDOWS_BUILD,
                appBuild: o("WAWebWamUtils").getAppBuild(),
                platform: o("WAWebWamEnumPlatformType").PLATFORM_TYPE.WEBCLIENT,
                webcWebArch: de(),
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
        H.apply(this, arguments)
      );
    }
    function G(e) {
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
    function z() {
      ((x = !1), C.cancel());
      var e = M;
      return ((M = new (o("WAResolvable").Resolvable)()), e);
    }
    function j() {
      ((x = !0),
        (A = !1),
        D.length > 0 &&
          C.onOrBefore(
            o("WAWebWamUtils").getInMemoryBufferingDurationInSecs() * 1e3,
          ),
        w && ((w = !1), (A = !0), C.forceRunNow()));
    }
    function K(e) {
      return Q.apply(this, arguments);
    }
    function Q() {
      return (
        (Q = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = A,
            a = !(e === "realtime" && r("justknobx")._("3237")),
            i = a ? z() : null,
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
            var c = yield V();
            if (e !== "realtime") {
              var d = yield o("WAWebWamPrivateStats").maybeRotatePsIds();
              yield (h || (h = n("Promise"))).all(
                d.map(function (e) {
                  return X(e, c);
                }),
              );
            }
            yield (h || (h = n("Promise"))).all(
              l.map(function (e) {
                return ne({
                  forceFlushBuffers: t,
                  key: e,
                  localScopeLockedInGlobals: c,
                  toBeExecuted: s,
                });
              }),
            );
          } finally {
            a && (i == null || i.resolve(), j());
          }
        })),
        Q.apply(this, arguments)
      );
    }
    function X(e, t) {
      return Y.apply(this, arguments);
    }
    function Y() {
      return (
        (Y = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          return (yield oe(e, t), (I[e] = yield J(e, t)), I[e]);
        })),
        Y.apply(this, arguments)
      );
    }
    function J(e, t) {
      return Z.apply(this, arguments);
    }
    function Z() {
      return (
        (Z = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          return new (o("WAWebWamLibContext").WamContext)(
            e,
            yield r("WAWebWamStorage").getNextSequenceNumberForStream(R),
            t,
          );
        })),
        Z.apply(this, arguments)
      );
    }
    function ee(e, t) {
      return te.apply(this, arguments);
    }
    function te() {
      return (
        (te = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n,
            r = (n = I[e]) != null ? n : yield J(e, t);
          return ((I[e] = r), r);
        })),
        te.apply(this, arguments)
      );
    }
    function ne(e) {
      return re.apply(this, arguments);
    }
    function re() {
      return (
        (re = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.forceFlushBuffers,
            n = e.key,
            a = e.localScopeLockedInGlobals,
            i = e.toBeExecuted,
            l = o("WAWebWamUtils").getChannelFromBufferKey(n),
            s;
          try {
            s = yield ee(n, a);
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
                var _ = yield X(n, a);
                if (_ == null) break;
                s = _;
              }
              var f = i[p];
              if (Array.isArray(f)) {
                var h = f[0],
                  y = f[1],
                  C = l === "realtime" ? "regular" : l;
                h.channels.includes(C) &&
                  ((a[h.name] = y), s.set(h.id, y), q(h, y));
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
                  : yield oe(n, a);
                return;
              }
              yield ie(n);
            } else yield oe(n, a);
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
        re.apply(this, arguments)
      );
    }
    function oe(e, t) {
      return ae.apply(this, arguments);
    }
    function ae() {
      return (
        (ae = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
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
                    if (l) r("nullthrows")(I[e]).unsavedPortion = yield J(e, t);
                    else {
                      ((I[e] = I[e].unsavedPortion), yield oe(e, t));
                      return;
                    }
                  } else {
                    if ((yield r("WAWebWamStorage").add(i, e, n), !I[e]))
                      return;
                    r("nullthrows")(I[e]).unsavedPortion = yield J(e, t);
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
        ae.apply(this, arguments)
      );
    }
    function ie(e) {
      return le.apply(this, arguments);
    }
    function le() {
      return (
        (le = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
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
                return se(r, n, o("WAWebWamUtils").getChannelFromBufferKey(e));
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
        le.apply(this, arguments)
      );
    }
    function se(e, t, n) {
      return ue.apply(this, arguments);
    }
    function ue() {
      return (
        (ue = n("asyncToGeneratorRuntime").asyncToGenerator(
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
        ue.apply(this, arguments)
      );
    }
    var ce = new Map([
      ["sandcastle", "dev"],
      ["trunkstable", "C1"],
    ]);
    function de() {
      var e = r("gkx")("26256");
      if (e) return "jest-e2e";
      if (!r("isStringNullOrEmpty")(o("WAWebBuildConstants").PUSH_PHASE)) {
        var t;
        return (t = ce.get(o("WAWebBuildConstants").PUSH_PHASE)) != null
          ? t
          : o("WAWebBuildConstants").PUSH_PHASE;
      }
    }
    ((l.Wam = L),
      (l.initWamRuntime = E),
      (l.getSerializedAbKey2 = N),
      (l.sendAllLogs = ie),
      (l.getPushPhase = de));
  },
  98,
);
