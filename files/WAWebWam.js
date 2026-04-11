__d(
  "WAWebWam",
  [
    "Promise",
    "SiteData",
    "WALogger",
    "WANullthrows",
    "WAResolvable",
    "WAShiftTimer",
    "WATimeUtils",
    "WAWebABProps",
    "WAWebABPropsLocalStorage",
    "WAWebBrowserApi",
    "WAWebBuildConstants",
    "WAWebCrashlog",
    "WAWebEnvironment",
    "WAWebEventSampling",
    "WAWebGuestWamUtils",
    "WAWebIsOfficialClient",
    "WAWebMiscBrowserUtils",
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
      R = { commit: E(w), set: E(F), resumeJobs: E(U), initialize: E(O) };
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
            V(e).catch(function (e) {
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
      $ = null,
      P = new (o("WAResolvable").Resolvable)(),
      N = !1,
      M = !1;
    function w(e, t) {
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
      var i =
        (a = o("WAWebEventSampling").getClientEventSamplingWeight(e.id)) != null
          ? a
          : e.weight;
      if (i !== 0 && Math.random() * i > 1)
        return (
          (e.commitTime =
            o("WATimeUtils").unixTimeWithoutClockSkewCorrection()),
          (h || (h = n("Promise"))).resolve()
        );
      (A(e),
        o("WAWebWamUtils").maybeForwardWamEventToJestE2e(e),
        o("WAWebWamFalcoABProps").isFalcoLoggingEnabled() &&
          (o("WAWebWamFalcoLogger").maybeSetTraceIdForShadowLogging(e),
          o("WAWebWamFalcoLogger").logEventToFalcoBridge(e, i)));
      var l;
      return (
        e.wamChannel === "realtime"
          ? (l = r("justknobx")._("4680") ? "realtime" : "all")
          : r("WAWebEnvironment").isGuest || t
            ? (l = "all")
            : (l = "none"),
        W({ job: e, flushWamBuffers: l })
      );
    }
    function A(e, t) {
      e.commitTime =
        t != null ? t : o("WATimeUtils").unixTimeWithoutClockSkewCorrection();
    }
    function F(e, t) {
      return (
        o("WAWebWamUtils").maybeForwardWamAttributeToJestE2e(e.name, String(t)),
        W({ job: [e, t], flushWamBuffers: "none" })
      );
    }
    function O() {
      return B.apply(this, arguments);
    }
    function B() {
      return (
        (B = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e;
          if ($) return (h || (h = n("Promise"))).resolve($);
          var t = r("WAWebMiscBrowserUtils").info(),
            a = babelHelpers.extends(
              {
                appVersion: o("WAWebBuildConstants")
                  .VERSION_BASE_WITH_WINDOWS_BUILD,
                appBuild: o("WAWebWamUtils").getAppBuild(),
                platform: o("WAWebWamEnumPlatformType").PLATFORM_TYPE.WEBCLIENT,
                webcWebArch: ie(),
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
                abKey2: o("WAWebABProps").getABPropConfigValue(
                  "wam_disable_abkey_attribute",
                )
                  ? null
                  : (e = o("WAWebABPropsLocalStorage").getABKey()) != null
                    ? e
                    : "",
              },
              r("WAWebEnvironment").isGuest
                ? o("WAWebGuestWamUtils").getGuestWamOverrides()
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
        B.apply(this, arguments)
      );
    }
    function W(e) {
      var t = e.flushWamBuffers,
        n = e.job;
      return (
        T.push(n),
        D
          ? t !== "none"
            ? ((N = !1),
              (M = !0),
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
            : t !== "none" && (y.cancel(), (N = !0), (M = !1)),
        P.promise
      );
    }
    function q() {
      ((D = !1), y.cancel());
      var e = P;
      return ((P = new (o("WAResolvable").Resolvable)()), e);
    }
    function U() {
      ((D = !0),
        (M = !1),
        T.length > 0 &&
          y.onOrBefore(
            o("WAWebWamUtils").getInMemoryBufferingDurationInSecs() * 1e3,
          ),
        N && ((N = !1), (M = !0), y.forceRunNow()));
    }
    function V(e) {
      return H.apply(this, arguments);
    }
    function H() {
      return (
        (H = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = M,
            a = !(e === "realtime" && r("justknobx")._("3237")),
            i = a ? q() : null,
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
            var c = yield O();
            if (e !== "realtime") {
              var d = yield o("WAWebWamPrivateStats").maybeRotatePsIds();
              yield (h || (h = n("Promise"))).all(
                d.map(function (e) {
                  return G(e, c);
                }),
              );
            }
            yield (h || (h = n("Promise"))).all(
              l.map(function (e) {
                return Y(e, s, t, c);
              }),
            );
          } finally {
            a && (i == null || i.resolve(), U());
          }
        })),
        H.apply(this, arguments)
      );
    }
    function G(e, t) {
      return z.apply(this, arguments);
    }
    function z() {
      return (
        (z = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          return (yield Z(e, t), (k[e] = yield j(e, t)), k[e]);
        })),
        z.apply(this, arguments)
      );
    }
    function j(e, t) {
      return K.apply(this, arguments);
    }
    function K() {
      return (
        (K = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          return new (o("WAWebWamLibContext").WamContext)(
            e,
            yield r("WAWebWamStorage").getNextSequenceNumberForStream(S),
            t,
          );
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
          var n,
            r = (n = k[e]) != null ? n : yield j(e, t);
          return ((k[e] = r), r);
        })),
        X.apply(this, arguments)
      );
    }
    function Y(e, t, n, r) {
      return J.apply(this, arguments);
    }
    function J() {
      return (
        (J = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, n, a) {
            var i = o("WAWebWamUtils").getChannelFromBufferKey(e),
              l;
            try {
              l = yield Q(e, a);
            } catch (e) {
              var s,
                u = r("getErrorSafe")(e);
              o("WALogger").WARN(
                d ||
                  (d = babelHelpers.taggedTemplateLiteralLoose([
                    "[wam] _executePendingForContext failed to get context ",
                    "",
                  ])),
                String((s = u.stack) != null ? s : u),
              );
              return;
            }
            try {
              for (var c = 0; c < t.length; c++) {
                if (l.size() > o("WAWebWamConstants").WAM_MAX_BUFFER_SIZE) {
                  var p = yield G(e, a);
                  if (p == null) break;
                  l = p;
                }
                var _ = t[c];
                if (Array.isArray(_)) {
                  var g = _[0],
                    h = _[1],
                    y = i === "realtime" ? "regular" : i;
                  g.channels.includes(y) && ((a[g.name] = h), l.set(g.id, h));
                } else {
                  var f = _;
                  (((f.wamChannel === "regular" ||
                    f.wamChannel === "realtime") &&
                    f.wamChannel === i) ||
                    (f.wamChannel === "private" &&
                      e ===
                        o("WAWebWamPrivateStats").getPrivateStatsKeyFromInt(
                          f.privateStatsIdInt,
                        ))) &&
                    l.write(f);
                }
              }
              var C = o("WATimeUtils").unixTimeWithoutClockSkewCorrection();
              if (
                l.eventsWritten > 0 &&
                (n ||
                  l.size() > o("WAWebWamConstants").WAM_MAX_BUFFER_SIZE ||
                  C >= I + o("WAWebWamUtils").getBufferRotateIntervalInSecs() ||
                  !x)
              ) {
                var b = o("WAWebUserPrefsIsLoggedIn").isLoggedIn();
                if (!b) {
                  l.buffer.size() > o("WAWebWamConstants").WAM_MAX_BUFFER_SIZE
                    ? (k[e] = null)
                    : yield Z(e, a);
                  return;
                }
                yield te(e);
              } else yield Z(e, a);
            } catch (t) {
              var v,
                S = r("getErrorSafe")(t);
              (o("WALogger").WARN(
                m ||
                  (m = babelHelpers.taggedTemplateLiteralLoose([
                    "[wam] _executePending error ",
                    "",
                  ])),
                String((v = S.stack) != null ? v : S),
              ),
                o("WAWebCrashlog").upload({ reason: "wam-error" }),
                new (o("WAWebWamClientErrorsWamEvent").WamClientErrorsWamEvent)(
                  { wamClientBufferDropErrorCount: 1 },
                ).commit(),
                (k[e] = null));
            }
          },
        )),
        J.apply(this, arguments)
      );
    }
    function Z(e, t) {
      return ee.apply(this, arguments);
    }
    function ee() {
      return (
        (ee = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          if (k[e]) {
            var n = k[e].stringBuffer();
            if (n) {
              var a = r("WANullthrows")(k[e]).unsavedPortion;
              if (!(a && a.eventsWritten === 0)) {
                var i = r("WANullthrows")(k[e]).saveKey;
                try {
                  if (a) {
                    var l = yield r("WAWebWamStorage").update(i, e, n);
                    if (!k[e]) return;
                    if (l)
                      r("WANullthrows")(k[e]).unsavedPortion = yield j(e, t);
                    else {
                      ((k[e] = k[e].unsavedPortion), yield Z(e, t));
                      return;
                    }
                  } else {
                    if ((yield r("WAWebWamStorage").add(i, e, n), !k[e]))
                      return;
                    r("WANullthrows")(k[e]).unsavedPortion = yield j(e, t);
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
        ee.apply(this, arguments)
      );
    }
    function te(e) {
      return ne.apply(this, arguments);
    }
    function ne() {
      return (
        (ne = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
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
            var l = r("WANullthrows")(k[e]).saveKey;
            i[l] = r("WANullthrows")(k[e]).stringBuffer();
          }
          var s = yield (h || (h = n("Promise"))).all(
              Object.entries(i).map(function (t) {
                var n = t[0],
                  r = t[1];
                return re(r, n, o("WAWebWamUtils").getChannelFromBufferKey(e));
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
        ne.apply(this, arguments)
      );
    }
    function re(e, t, n) {
      return oe.apply(this, arguments);
    }
    function oe() {
      return (
        (oe = n("asyncToGeneratorRuntime").asyncToGenerator(
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
        oe.apply(this, arguments)
      );
    }
    var ae = new Map([
      ["sandcastle", "dev"],
      ["trunkstable", "C1"],
    ]);
    function ie() {
      var e = r("gkx")("26256");
      if (e) return "jest-e2e";
      if (!r("isStringNullOrEmpty")(o("WAWebBuildConstants").PUSH_PHASE)) {
        var t;
        return (t = ae.get(o("WAWebBuildConstants").PUSH_PHASE)) != null
          ? t
          : o("WAWebBuildConstants").PUSH_PHASE;
      }
    }
    ((l.Wam = R),
      (l.initWamRuntime = L),
      (l.sendAllLogs = te),
      (l.getPushPhase = ie));
  },
  98,
);
