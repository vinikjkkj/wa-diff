__d(
  "WAWebWam",
  [
    "SiteData",
    "WALogger",
    "WANullthrows",
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
    "WAWebWamFalcoLogger",
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
      y = [],
      C = [],
      b = !1,
      v = "1",
      S = { commit: L(M), set: L(A), resumeJobs: L(W), initialize: L(F) };
    function R() {
      for (
        y = o("WAWebWamGlobals").PrivateStatsAllIds.map(function (e) {
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
          h = new (o("WAShiftTimer").ShiftTimer)(function (e) {
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
            q(e).catch(function (e) {
              o("WALogger").LOG(
                u ||
                  (u = babelHelpers.taggedTemplateLiteralLoose([
                    "[WAM] failed to execute pending jobs for wam runtime ",
                  ])),
              );
            });
          }),
          o("WAWebWamRuntimeProvider").setWamRuntime(S);
        C.length;
      ) {
        var t = C.pop();
        t && t();
      }
      b = !0;
    }
    function L(e) {
      return function () {
        for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++)
          n[r] = arguments[r];
        if (b) return e.apply(void 0, n);
        C.push(function () {
          e.apply(void 0, n);
        });
      };
    }
    var E = {},
      k = 0,
      I = [],
      T = !1,
      D = !1,
      x = null,
      $ = new (o("WAResolvable").Resolvable)(),
      P = !1,
      N = !1;
    function M(e, t) {
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
      var a =
          (n = o("WAWebEventSampling").getClientEventSamplingWeight(e.id)) !=
          null
            ? n
            : e.weight,
        i = a !== 0 && Math.random() * a > 1;
      if (
        (o("WAWebWamFalcoABProps").isFalcoLoggingEnabled() &&
          (o("WAWebWamFalcoLogger").maybeSetTraceIdForShadowLogging(e),
          o("WAWebWamFalcoLogger").logEventToFalcoBridge(e, i)),
        i || o("WAWebWamFalcoABProps").isWamLoggingDisabled())
      )
        return (
          (e.commitTime =
            o("WATimeUtils").unixTimeWithoutClockSkewCorrection()),
          Promise.resolve()
        );
      (w(e), o("WAWebWamUtils").maybeForwardWamEventToJestE2e(e));
      var l;
      return (
        e.wamChannel === "realtime"
          ? (l = r("justknobx")._("4680") ? "realtime" : "all")
          : r("WAWebEnvironment").isGuest || t
            ? (l = "all")
            : (l = "none"),
        O({ job: e, flushWamBuffers: l })
      );
    }
    function w(e, t) {
      e.commitTime =
        t != null ? t : o("WATimeUtils").unixTimeWithoutClockSkewCorrection();
    }
    function A(e, t) {
      return (
        o("WAWebWamUtils").maybeForwardWamAttributeToJestE2e(e.name, String(t)),
        O({ job: [e, t], flushWamBuffers: "none" })
      );
    }
    async function F() {
      var e;
      if (x) return Promise.resolve(x);
      var t = r("WAWebBrowserInfo")(),
        n = babelHelpers.extends(
          {
            appVersion: o("WAWebBuildConstants")
              .VERSION_BASE_WITH_WINDOWS_BUILD,
            appBuild: o("WAWebWamUtils").getAppBuild(),
            platform: o("WAWebWamEnumPlatformType").PLATFORM_TYPE.WEBCLIENT,
            webcWebArch: X(),
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
        (x = n),
        (o("WAWebWamGlobals").Global.commitOnSet = !1),
        o("WAWebWamGlobals").Global.set(x),
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
    function O(e) {
      var t = e.flushWamBuffers,
        n = e.job;
      return (
        I.push(n),
        T
          ? t !== "none"
            ? ((P = !1),
              (N = !0),
              self.setTimeout(function () {
                return h.forceRunNow(t);
              }, 1))
            : h.onOrBefore(
                o("WAWebWamUtils").getInMemoryBufferingDurationInSecs() * 1e3,
              )
          : t === "realtime" && r("justknobx")._("3237")
            ? self.setTimeout(function () {
                return h.forceRunNow("realtime");
              }, 1)
            : t !== "none" && (h.cancel(), (P = !0), (N = !1)),
        $.promise
      );
    }
    function B() {
      ((T = !1), h.cancel());
      var e = $;
      return (($ = new (o("WAResolvable").Resolvable)()), e);
    }
    function W() {
      ((T = !0),
        (N = !1),
        I.length > 0 &&
          h.onOrBefore(
            o("WAWebWamUtils").getInMemoryBufferingDurationInSecs() * 1e3,
          ),
        P && ((P = !1), (N = !0), h.forceRunNow()));
    }
    async function q(e) {
      var t = N,
        n = !(e === "realtime" && r("justknobx")._("3237")),
        a = n ? B() : null,
        i,
        l;
      if (e === "realtime") {
        i = ["realtime"];
        var s = I.reduce(
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
        ((l = s[0]), (I = s[1]));
      } else
        ((i = ["regular", "realtime", "none"].concat(y)),
          (l = [].concat(I)),
          (I = []));
      try {
        var u = await F();
        if (e !== "realtime") {
          var c = await o("WAWebWamPrivateStats").maybeRotatePsIds();
          await Promise.all(
            c.map(function (e) {
              return U(e, u);
            }),
          );
        }
        await Promise.all(
          i.map(function (e) {
            return G(e, l, t, u);
          }),
        );
      } finally {
        n && (a == null || a.resolve(), W());
      }
    }
    async function U(e, t) {
      return (await z(e, t), (E[e] = await V(e, t)), E[e]);
    }
    async function V(e, t) {
      return new (o("WAWebWamLibContext").WamContext)(
        e,
        await r("WAWebWamStorage").getNextSequenceNumberForStream(v),
        t,
      );
    }
    async function H(e, t) {
      var n,
        r = (n = E[e]) != null ? n : await V(e, t);
      return ((E[e] = r), r);
    }
    async function G(e, t, n, a) {
      var i = o("WAWebWamUtils").getChannelFromBufferKey(e),
        l;
      try {
        l = await H(e, a);
      } catch (e) {
        var s,
          u = r("getErrorSafe")(e);
        o("WALogger").WARN(
          d ||
            (d = babelHelpers.taggedTemplateLiteralLoose([
              "[wam] executePendingForContext failed to get context ",
              "",
            ])),
          String((s = u.stack) != null ? s : u),
        );
        return;
      }
      try {
        for (var c = 0; c < t.length; c++) {
          if (l.size() > o("WAWebWamConstants").WAM_MAX_BUFFER_SIZE) {
            var p = await U(e, a);
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
            (((f.wamChannel === "regular" || f.wamChannel === "realtime") &&
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
            C >= k + o("WAWebWamUtils").getBufferRotateIntervalInSecs() ||
            !D)
        ) {
          var b = o("WAWebUserPrefsIsLoggedIn").isLoggedIn();
          if (!b) {
            l.buffer.size() > o("WAWebWamConstants").WAM_MAX_BUFFER_SIZE
              ? (E[e] = null)
              : await z(e, a);
            return;
          }
          await j(e);
        } else await z(e, a);
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
          new (o("WAWebWamClientErrorsWamEvent").WamClientErrorsWamEvent)({
            wamClientBufferDropErrorCount: 1,
          }).commit(),
          (E[e] = null));
      }
    }
    async function z(e, t) {
      if (E[e]) {
        var n = E[e].stringBuffer();
        if (n) {
          var a = r("WANullthrows")(E[e]).unsavedPortion;
          if (!(a && a.eventsWritten === 0)) {
            var i = r("WANullthrows")(E[e]).saveKey;
            try {
              if (a) {
                var l = await r("WAWebWamStorage").update(i, e, n);
                if (!E[e]) return;
                if (l) r("WANullthrows")(E[e]).unsavedPortion = await V(e, t);
                else {
                  ((E[e] = E[e].unsavedPortion), await z(e, t));
                  return;
                }
              } else {
                if ((await r("WAWebWamStorage").add(i, e, n), !E[e])) return;
                r("WANullthrows")(E[e]).unsavedPortion = await V(e, t);
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
    async function j(e) {
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
      if (E[e]) {
        E[e].unsavedPortion &&
          !(E[e].saveKey in a) &&
          (E[e] = E[e].unsavedPortion);
        var i = r("WANullthrows")(E[e]).saveKey;
        a[i] = r("WANullthrows")(E[e]).stringBuffer();
      }
      var l = await Promise.all(
          Object.entries(a).map(function (t) {
            var n = t[0],
              r = t[1];
            return K(r, n, o("WAWebWamUtils").getChannelFromBufferKey(e));
          }),
        ),
        s = l.filter(Boolean);
      if (
        (s.length !== l.length &&
          ((k = o("WATimeUtils").unixTimeWithoutClockSkewCorrection()),
          (D = !0)),
        E[e] && !s.includes(E[e].saveKey) && (E[e] = null),
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
          : ((E[e] = null),
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
    async function K(e, t, n) {
      return e === "" || e[0] === "["
        ? Promise.resolve()
        : o("WAWebWamUtils").isWamBufferTooBigToUpload(e)
          ? (new (o("WAWebWamClientErrorsWamEvent").WamClientErrorsWamEvent)({
              wamClientBufferDropErrorCount: 1,
            }).commit(),
            Promise.resolve())
          : n === "private"
            ? r("WAWebUploadPrivateStatsBackend")(e, t)
            : r("WAWebUploadStatsBackend")(e, t);
    }
    var Q = new Map([
      ["sandcastle", "dev"],
      ["trunkstable", "C1"],
    ]);
    function X() {
      var e = r("gkx")("26256");
      if (e) return "jest-e2e";
      if (!r("isStringNullOrEmpty")(o("WAWebBuildConstants").PUSH_PHASE)) {
        var t;
        return (t = Q.get(o("WAWebBuildConstants").PUSH_PHASE)) != null
          ? t
          : o("WAWebBuildConstants").PUSH_PHASE;
      }
    }
    ((l.Wam = S),
      (l.initWamRuntime = R),
      (l.sendAllLogs = j),
      (l.getPushPhase = X));
  },
  98,
);
