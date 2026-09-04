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
    "WAWebUploadPrivateStatsBackend",
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
      y,
      C = [],
      b = [],
      v = !1,
      S = "1",
      R = { commit: E(F), set: E(W), resumeJobs: E(G), initialize: E(q) };
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
              !o("WAWebUserPrefsTabMutex").currentTabHasMutex();
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
      var i = A(e, t);
      if (i.handled) return (O(e), (h || (h = n("Promise"))).resolve());
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
      (O(e), o("WAWebWamUtils").maybeForwardWamEventToJestE2e(e));
      var u;
      return (
        e.wamChannel === "realtime"
          ? (u = r("justknobx")._("4680") ? "realtime" : "all")
          : r("WAWebEnvironment").isGuest || t
            ? (u = "all")
            : (u = "none"),
        V({ job: e, flushWamBuffers: u })
      );
    }
    function O(e, t) {
      e.commitTime =
        t != null ? t : o("WATimeUtils").unixTimeWithoutClockSkewCorrection();
    }
    function B(e, t) {
      e.name === "memClass"
        ? o("WAWebBrowserApi").setMemClassOverride(
            typeof t == "number" ? t : null,
          )
        : e.name === "osVersion" &&
          o("WAWebBrowserApi").setOsVersionOverride(
            typeof t == "string" ? t : null,
          );
    }
    function W(e, t) {
      return (
        o("WAWebWamUtils").maybeForwardWamAttributeToJestE2e(e.name, String(t)),
        B(e, t),
        V({ job: [e, t], flushWamBuffers: "none" })
      );
    }
    function q() {
      return U.apply(this, arguments);
    }
    function U() {
      return (
        (U = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e;
          if ($) return (h || (h = n("Promise"))).resolve($);
          var t = r("WAWebBrowserInfo")(),
            a = babelHelpers.extends(
              {
                appVersion: o("WAWebBuildConstants")
                  .VERSION_BASE_WITH_WINDOWS_BUILD,
                appBuild: o("WAWebWamUtils").getAppBuild(),
                platform: o("WAWebWamEnumPlatformType").PLATFORM_TYPE.WEBCLIENT,
                webcWebArch: ue(),
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
            ($ = a),
            (o("WAWebWamGlobals").Global.commitOnSet = !1),
            o("WAWebWamGlobals").Global.set($),
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
        U.apply(this, arguments)
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
    function z(e) {
      return j.apply(this, arguments);
    }
    function j() {
      return (
        (j = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = w,
            a = !(e === "realtime" && r("justknobx")._("3237")),
            i = a ? H() : null,
            l,
            s;
          if (e === "realtime") {
            l = ["realtime"];
            var u = T.reduce(
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
            ((s = u[0]), (T = u[1]));
          } else
            ((l = ["regular", "realtime", "none"].concat(C)),
              (s = [].concat(T)),
              (T = []));
          try {
            var c = yield q();
            if (e !== "realtime") {
              var d = yield o("WAWebWamPrivateStats").maybeRotatePsIds();
              yield (h || (h = n("Promise"))).all(
                d.map(function (e) {
                  return K(e, c);
                }),
              );
            }
            yield (h || (h = n("Promise"))).all(
              l.map(function (e) {
                return ee({
                  forceFlushBuffers: t,
                  key: e,
                  localScopeLockedInGlobals: c,
                  toBeExecuted: s,
                });
              }),
            );
          } finally {
            a && (i == null || i.resolve(), G());
          }
        })),
        j.apply(this, arguments)
      );
    }
    function K(e, t) {
      return Q.apply(this, arguments);
    }
    function Q() {
      return (
        (Q = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          return (yield ne(e, t), (k[e] = yield X(e, t)), k[e]);
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
          return new (o("WAWebWamLibContext").WamContext)(
            e,
            yield r("WAWebWamStorage").getNextSequenceNumberForStream(S),
            t,
          );
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
          var n,
            r = (n = k[e]) != null ? n : yield X(e, t);
          return ((k[e] = r), r);
        })),
        Z.apply(this, arguments)
      );
    }
    function ee(e) {
      return te.apply(this, arguments);
    }
    function te() {
      return (
        (te = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.forceFlushBuffers,
            n = e.key,
            a = e.localScopeLockedInGlobals,
            i = e.toBeExecuted,
            l = o("WAWebWamUtils").getChannelFromBufferKey(n),
            s;
          try {
            s = yield J(n, a);
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
                var _ = yield K(n, a);
                if (_ == null) break;
                s = _;
              }
              var f = i[p];
              if (Array.isArray(f)) {
                var h = f[0],
                  y = f[1],
                  C = l === "realtime" ? "regular" : l;
                h.channels.includes(C) &&
                  ((a[h.name] = y), s.set(h.id, y), B(h, y));
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
                  : yield ne(n, a);
                return;
              }
              yield oe(n);
            } else yield ne(n, a);
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
        })),
        te.apply(this, arguments)
      );
    }
    function ne(e, t) {
      return re.apply(this, arguments);
    }
    function re() {
      return (
        (re = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          if (k[e]) {
            var n = k[e].stringBuffer();
            if (n) {
              var a = r("nullthrows")(k[e]).unsavedPortion;
              if (!(a && a.eventsWritten === 0)) {
                var i = r("nullthrows")(k[e]).saveKey;
                try {
                  if (a) {
                    var l = yield r("WAWebWamStorage").update(i, e, n);
                    if (!k[e]) return;
                    if (l) r("nullthrows")(k[e]).unsavedPortion = yield X(e, t);
                    else {
                      ((k[e] = k[e].unsavedPortion), yield ne(e, t));
                      return;
                    }
                  } else {
                    if ((yield r("WAWebWamStorage").add(i, e, n), !k[e]))
                      return;
                    r("nullthrows")(k[e]).unsavedPortion = yield X(e, t);
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
        re.apply(this, arguments)
      );
    }
    function oe(e) {
      return ae.apply(this, arguments);
    }
    function ae() {
      return (
        (ae = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
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
          if (k[e]) {
            k[e].unsavedPortion &&
              !(k[e].saveKey in i) &&
              (k[e] = k[e].unsavedPortion);
            var l = r("nullthrows")(k[e]).saveKey;
            i[l] = r("nullthrows")(k[e]).stringBuffer();
          }
          var s = yield (h || (h = n("Promise"))).all(
              Object.entries(i).map(function (t) {
                var n = t[0],
                  r = t[1];
                return ie(r, n, o("WAWebWamUtils").getChannelFromBufferKey(e));
              }),
            ),
            u = s.filter(Boolean);
          if (
            (u.length !== s.length &&
              ((I = o("WATimeUtils").unixTimeWithoutClockSkewCorrection()),
              (x = !0)),
            k[e] && !u.includes(k[e].saveKey) && (k[e] = null),
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
              : ((k[e] = null),
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
        ae.apply(this, arguments)
      );
    }
    function ie(e, t, n) {
      return le.apply(this, arguments);
    }
    function le() {
      return (
        (le = n("asyncToGeneratorRuntime").asyncToGenerator(
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
                  ? r("WAWebUploadPrivateStatsBackend")(e, t)
                  : r("WAWebUploadStatsBackend")(e, t);
          },
        )),
        le.apply(this, arguments)
      );
    }
    var se = new Map([
      ["sandcastle", "dev"],
      ["trunkstable", "C1"],
    ]);
    function ue() {
      var e = r("gkx")("26256");
      if (e) return "jest-e2e";
      if (!r("isStringNullOrEmpty")(o("WAWebBuildConstants").PUSH_PHASE)) {
        var t;
        return (t = se.get(o("WAWebBuildConstants").PUSH_PHASE)) != null
          ? t
          : o("WAWebBuildConstants").PUSH_PHASE;
      }
    }
    ((l.Wam = R),
      (l.initWamRuntime = L),
      (l.getSerializedAbKey2 = P),
      (l.sendAllLogs = oe),
      (l.getPushPhase = ue));
  },
  98,
);
