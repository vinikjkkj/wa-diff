__d(
  "WAWebCrashlog",
  [
    "$InternalEnum",
    "WALogger",
    "WAThrottle",
    "WAWebABProps",
    "WAWebBoolFunc",
    "WAWebBrokerGlobalAppState",
    "WAWebBrowserInfo",
    "WAWebBuildConstants",
    "WAWebCrashContextUtils",
    "WAWebCrashLogWamEvent",
    "WAWebCrashlogConstants",
    "WAWebCrashlogUserAgent",
    "WAWebCurrentUser",
    "WAWebEnvironment",
    "WAWebGlobals",
    "WAWebLogLineSanitizer",
    "WAWebLoggerImpl",
    "WAWebLoggerOptimizer",
    "WAWebLoggerUtils",
    "WAWebPriorLogs",
    "WAWebRuntimeEnvironmentUtils",
    "WAWebURLUtils",
    "WAWebUserPrefsMeUser",
    "WAWebWamEnumCrashApplicationState",
    "WAWebWamEnumCrashType",
    "WAWebWamEnumLogType",
    "WAWebWebcMinorEventLogWamEvent",
    "cr:17160",
    "cr:4722",
    "err",
    "gkx",
    "isStringNullOrEmpty",
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
      C,
      b,
      v,
      S,
      R,
      L,
      E,
      k,
      I,
      T,
      D,
      x,
      $,
      P,
      N,
      M,
      w,
      A,
      F,
      O,
      B,
      W,
      q = function (t) {
        return new Promise(function (e) {
          return self.setTimeout(e, t);
        });
      },
      U,
      V,
      H,
      G,
      z = n("$InternalEnum")({ CRASHLOG: "crashlog", SUPPORT: "support" }),
      j = "server-requested",
      K = "manual-upload",
      Q = "user-report",
      X = n("$InternalEnum")({ ONLY_EXCEPTION: "only_exception" }),
      Y = 100,
      J = new Map(),
      Z = {
        shouldHitCheckEndpoint: (W = o("WAWebBoolFunc")).returnFalse,
        expectedCodes: [],
        appendToFormDataForCheck: function (t) {},
        appendToFormDataForUpload: function (t, n) {},
        shouldUseLightWeightLogs: W.returnFalse,
      },
      ee = {
        shouldHitCheckEndpoint: W.returnTrue,
        expectedCodes: [200, 403],
        appendToFormDataForCheck: function (t, n) {
          t.append("reason", n);
        },
        appendToFormDataForUpload: function (t, n) {},
        shouldUseLightWeightLogs: W.returnFalse,
      },
      te = {
        shouldHitCheckEndpoint: W.returnTrue,
        expectedCodes: [200, 403],
        appendToFormDataForCheck: function (t, n) {
          (t.append("support_exception_only_upload", "true"),
            t.append("reason", n));
        },
        appendToFormDataForUpload: function (t, n) {
          n &&
            n.upload === X.ONLY_EXCEPTION &&
            t.append("exception_only_upload", "true");
        },
        shouldUseLightWeightLogs: function (t) {
          return t ? t.upload === X.ONLY_EXCEPTION : !1;
        },
      };
    function ne(e) {
      return e === o("WALogger").SendLogsType.UNCAUGHT_EXCEPTION ||
        e === o("WALogger").SendLogsType.UNCAUGHT_EXCEPTION_SAD
        ? ["uncaught_error"]
        : e === o("WALogger").SendLogsType.UNHANDLED_REJECTED_PROMISE ||
            e === o("WALogger").SendLogsType.UNHANDLED_REJECTED_PROMISE_SAD
          ? ["unhandled_promise"]
          : e === o("WALogger").SendLogsType.USER_FORCEFULLY_LOGGED_OUT_SAD
            ? ["logout"]
            : e ===
                  o("WALogger").SendLogsType.CRASH_OR_UNRECOVERABLE_ERROR_SAD ||
                e ===
                  o("WALogger").SendLogsType
                    .PERFORMANCE_OBSERVER_LONGTASK_SAD ||
                e === o("WALogger").SendLogsType.UNCATEGORIZED_SAD ||
                e ===
                  o("WALogger").SendLogsType
                    .EXTREMELY_BAD_USER_EXPERIENCE_SAD ||
                e === o("WALogger").SendLogsType.MINOR_ISSUE ||
                e === o("WALogger").SendLogsType.INVESTIGATION ||
                e === o("WALogger").SendLogsType.COUNTING_STAT ||
                e === o("WALogger").SendLogsType.UNCATEGORIZED
              ? []
              : (function () {
                  throw Error(
                    "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                      e,
                  );
                })();
    }
    function re(e) {
      var t = [];
      return (
        e.voipActivity != null && t.push("voip_activity:" + e.voipActivity),
        e.voipActivityTimestampSec != null &&
          t.push("voip_activity_ts_sec:" + e.voipActivityTimestampSec),
        e.voipUiActivity != null &&
          t.push("voip_ui_activity:" + e.voipUiActivity),
        e.voipUiActivityTimestampSec != null &&
          t.push("voip_ui_activity_ts_sec:" + e.voipUiActivityTimestampSec),
        t
      );
    }
    function oe(e) {
      switch (e) {
        case o("WALogger").SendLogsType.UNCAUGHT_EXCEPTION_SAD:
          return o("WAWebWamEnumCrashType").CRASH_TYPE.UNHANDLED_EXCEPTION;
        case o("WALogger").SendLogsType.UNHANDLED_REJECTED_PROMISE_SAD:
          return o("WAWebWamEnumCrashType").CRASH_TYPE.UNHANDLED_EXCEPTION;
        case o("WALogger").SendLogsType.USER_FORCEFULLY_LOGGED_OUT_SAD:
          return o("WAWebWamEnumCrashType").CRASH_TYPE.CRASH;
        case o("WALogger").SendLogsType.PERFORMANCE_OBSERVER_LONGTASK_SAD:
          return o("WAWebWamEnumCrashType").CRASH_TYPE.ANR;
        case o("WALogger").SendLogsType.CRASH_OR_UNRECOVERABLE_ERROR_SAD:
          return o("WAWebWamEnumCrashType").CRASH_TYPE.CRASH;
        case o("WALogger").SendLogsType.UNCATEGORIZED_SAD:
          return o("WAWebWamEnumCrashType").CRASH_TYPE.CRASH;
        default:
          return o("WAWebWamEnumCrashType").CRASH_TYPE.CRASH;
      }
    }
    function ae(e) {
      switch (e) {
        case o("WALogger").SendLogsType.COUNTING_STAT:
          return o("WAWebWamEnumLogType").LOG_TYPE.COUNTING_STAT;
        case o("WALogger").SendLogsType.UNCAUGHT_EXCEPTION:
          return o("WAWebWamEnumLogType").LOG_TYPE.UNCAUGHT_EXCEPTION;
        case o("WALogger").SendLogsType.UNHANDLED_REJECTED_PROMISE:
          return o("WAWebWamEnumLogType").LOG_TYPE.UNHANDLED_REJECTED_PROMISE;
        case o("WALogger").SendLogsType.INVESTIGATION:
          return o("WAWebWamEnumLogType").LOG_TYPE.INVESTIGATION;
        case o("WALogger").SendLogsType.UNCATEGORIZED:
          return o("WAWebWamEnumLogType").LOG_TYPE.UNCATEGORIZED;
        default:
          return o("WAWebWamEnumLogType").LOG_TYPE.UNCATEGORIZED;
      }
    }
    function ie(e, t, n) {
      return (!r("gkx")("26258") && e) || n ? Z : t ? te : ee;
    }
    var le = 72e5,
      se = o("WAThrottle").throttle(_e, le, { trailing: !1 });
    function ue(e) {
      U = e;
    }
    function ce(e) {
      V = e;
    }
    function de(e) {
      H = e;
    }
    function me(e) {
      G = e;
    }
    async function pe(t) {
      var n = t.reason,
        a = n === void 0 ? "reason-unspecified" : n,
        i = t.immediate,
        l = i === void 0 ? !1 : i,
        d = t.logType,
        g = d === void 0 ? z.CRASHLOG : d,
        h = t.isHighPri,
        y = h === void 0 ? !1 : h,
        C = t.hasTaggedMessage,
        b = C === void 0 ? !1 : C,
        v = t.ticketId,
        S = t.clientSamplingRate,
        R = S === void 0 ? 1 : S,
        L = t.tags,
        E = L === void 0 ? [] : L,
        k = t.fromTimestamp,
        I = t.sendLogsType,
        T = I === void 0 ? o("WALogger").SendLogsType.UNCATEGORIZED : I,
        D = t.bugId,
        x = t.isReporter,
        $ = x === void 0 ? !1 : x;
      if (r("WAWebBrokerGlobalAppState").isLogoutInProgress)
        return Promise.resolve();
      g === z.SUPPORT && (await o("WAWebPriorLogs").printAllPriorLogs());
      var P = E,
        N = V != null && V();
      if (
        (N && (P = P.concat("web-joined-beta")),
        o("WAWebRuntimeEnvironmentUtils").isWorker() &&
          (P = P.concat("service-worker")),
        (P = P.concat(ne(T))),
        J.size <= Y)
      ) {
        var M = J.get(a);
        M ? M.count++ : J.set(a, { count: 1, uploaded: !1 });
      }
      var w = o("WALogger").SadSendLogsTypes.has(T);
      if (w) {
        P = P.concat("sad");
        try {
          var A,
            F,
            O = oe(T),
            B = new (o("WAWebCrashLogWamEvent").CrashLogWamEvent)({
              crashReason: a,
              crashType: O,
              crashCount:
                (A = (F = J.get(a)) == null ? void 0 : F.count) != null ? A : 0,
              crashApplicationState:
                document.visibilityState === "visible"
                  ? o("WAWebWamEnumCrashApplicationState")
                      .CRASH_APPLICATION_STATE.FOREGROUND
                  : o("WAWebWamEnumCrashApplicationState")
                      .CRASH_APPLICATION_STATE.BACKGROUND,
            });
          (O === o("WAWebWamEnumCrashType").CRASH_TYPE.ANR &&
            (B.crashTimeout = 5),
            P.length && (B.crashContext = P.join(",")));
          var W = o("WAWebCrashContextUtils").getCrashEventAppContext(O);
          (W != null && (B.appContext = W),
            B.commitAndWaitForFlush().catch(function (t) {
              o("WALogger").LOG(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "wa:uploadLogs error during crashLog wam commit: ",
                    "",
                  ])),
                t,
              );
            }));
        } catch (e) {
          o("WALogger").LOG(
            s ||
              (s = babelHelpers.taggedTemplateLiteralLoose([
                "wa:uploadLogs error logging crashLog wam event: ",
                "",
              ])),
            e,
          );
        }
      } else
        try {
          var q,
            U,
            H = new (o(
              "WAWebWebcMinorEventLogWamEvent",
            ).WebcMinorEventLogWamEvent)();
          ((H.logReason = a),
            (H.logType = ae(T)),
            P.length && (H.logContext = P.join(",")),
            (H.logCount =
              (q = (U = J.get(a)) == null ? void 0 : U.count) != null ? q : 0),
            H.commitAndWaitForFlush().catch(function (e) {
              o("WALogger").LOG(
                u ||
                  (u = babelHelpers.taggedTemplateLiteralLoose([
                    "wa:uploadLogs error during minorEvent wam commit: ",
                    "",
                  ])),
                e,
              );
            }));
        } catch (e) {
          o("WALogger").LOG(
            c ||
              (c = babelHelpers.taggedTemplateLiteralLoose([
                "wa:uploadLogs error logging minorEvent wam event: ",
                "",
              ])),
            e,
          );
        }
      if (o("WAWebLoggerUtils").isWaitingForUpload()) return Promise.resolve();
      o("WAWebLoggerUtils").setWaitingForUpload(!0);
      var G = !w;
      if (
        (R > 0 && R < 1 && (P = P.concat(["sampled", R.toString()])),
        G && r("gkx")("26258")
          ? o("WAWebLoggerUtils").passesSamplingPerUser(R, a, fe())
          : o("WAWebLoggerUtils").passesSampling(R))
      ) {
        var K = _e;
        if (!y) {
          r("gkx")("26259") && (P = P.concat(["intern"]));
          var Q = J.get(a);
          if (Q != null && Q.uploaded) {
            (o("WALogger").LOG(
              m ||
                (m = babelHelpers.taggedTemplateLiteralLoose([
                  "wa:uploadLogs reason already uploaded, skipping",
                ])),
            ),
              o("WAWebLoggerUtils").setWaitingForUpload(!1));
            return;
          }
          (Q && (Q.uploaded = !0),
            J.size >
              o("WAWebCrashlogConstants")
                .UNIQUE_UPLOADS_ALLOWED_BEFORE_THROTTLE &&
              (o("WALogger").LOG(
                p ||
                  (p = babelHelpers.taggedTemplateLiteralLoose([
                    "wa:uploadLogs using throttle",
                  ])),
              ),
              (K = se)));
        }
        var X = ie(y, b, a === j);
        try {
          var Z = await K({
            isHighPri: y,
            immediate: l,
            logType: g,
            ticketId: v,
            uploadStrategy: X,
            tags: P,
            reason: a,
            hasTaggedMessage: b,
            fromTimestamp: k,
            bugId: D,
            isReporter: $,
          });
          return (o("WAWebLoggerUtils").setWaitingForUpload(!1), Z);
        } catch (e) {
          (o("WAWebLoggerUtils").setWaitingForUpload(!1),
            o("WALogger").LOG(
              _ ||
                (_ = babelHelpers.taggedTemplateLiteralLoose([
                  "wa:uploadLogs error uploading: ",
                  "",
                ])),
              e,
            ));
          return;
        }
      } else
        (o("WAWebLoggerUtils").setWaitingForUpload(!1),
          o("WALogger").LOG(
            f ||
              (f = babelHelpers.taggedTemplateLiteralLoose([
                "[crashlog] upload client sampling check rate: ",
                " prevented upload",
              ])),
            R,
          ));
    }
    async function _e(e) {
      var t,
        a,
        i,
        l = e.isHighPri,
        s = l === void 0 ? !1 : l,
        u = e.immediate,
        c = e.logType,
        d = e.ticketId,
        m = e.uploadStrategy,
        p = e.tags,
        _ = p === void 0 ? [] : p,
        f = e.reason,
        B = f === void 0 ? "reason-unspecified" : f,
        W = e.hasTaggedMessage,
        V = W === void 0 ? !1 : W,
        z = e.fromTimestamp,
        K = e.bugId,
        Q = e.isReporter,
        X = Q === void 0 ? !1 : Q,
        Y = U != null ? U() : { platform: void 0, ref: void 0 };
      (o("WALogger").LOG(
        g ||
          (g = babelHelpers.taggedTemplateLiteralLoose([
            "==================================================",
          ])),
      ),
        o("WALogger").LOG(
          h ||
            (h = babelHelpers.taggedTemplateLiteralLoose([
              "wa:uploadLogs ref: ",
              "",
            ])),
          (t = Y.ref) != null ? t : "no conn",
        ),
        o("WALogger").LOG(
          y ||
            (y = babelHelpers.taggedTemplateLiteralLoose([
              "wa:uploadLogs userAgent: ",
              "",
            ])),
          navigator.userAgent,
        ),
        o("WALogger").LOG(
          C ||
            (C = babelHelpers.taggedTemplateLiteralLoose([
              "wa:uploadLogs platform: ",
              "",
            ])),
          (a = Y.platform) != null ? a : "no platform",
        ),
        o("WALogger").LOG(
          b ||
            (b = babelHelpers.taggedTemplateLiteralLoose([
              "wa:uploadLogs webPlatform: ",
              "",
            ])),
          o("WAWebCrashlogConstants").CLB_PLATFORM,
        ),
        o("WALogger").LOG(
          v ||
            (v = babelHelpers.taggedTemplateLiteralLoose([
              "wa:uploadLogs is guest user: ",
              "",
            ])),
          r("WAWebEnvironment").isGuest,
        ),
        o("WALogger").LOG(
          S ||
            (S = babelHelpers.taggedTemplateLiteralLoose([
              "wa:uploadLogs appId: ",
              "",
            ])),
          o("WAWebCrashlogConstants").FB_APP_ID,
        ),
        o("WALogger").LOG(
          R ||
            (R = babelHelpers.taggedTemplateLiteralLoose([
              "wa:uploadLogs url: ",
              "",
            ])),
          location.href,
        ),
        o("WALogger").LOG(
          L ||
            (L = babelHelpers.taggedTemplateLiteralLoose([
              "wa:uploadLogs distribution: ",
              "",
            ])),
          o("WAWebCrashlogUserAgent").getDistribution(),
        ),
        o("WALogger").LOG(
          E ||
            (E = babelHelpers.taggedTemplateLiteralLoose([
              "wa:uploadLogs buildId: ",
              "",
            ])),
          o("WAWebCrashlogConstants").BUILD_ID,
        ),
        o("WALogger").LOG(
          k ||
            (k = babelHelpers.taggedTemplateLiteralLoose([
              "wa:uploadLogs pushPhase: ",
              "",
            ])),
          o("WAWebBuildConstants").PUSH_PHASE,
        ),
        r("gkx")("26258") ||
          o("WALogger").LOG(
            I ||
              (I = babelHelpers.taggedTemplateLiteralLoose([
                "wa:uploadLogs react-compiler: ",
                "",
              ])),
            r("gkx")("7685") ? "forget" : "classic",
          ),
        V &&
          o("WALogger").LOG(
            T ||
              (T = babelHelpers.taggedTemplateLiteralLoose([
                "wa:uploadLogs hasTaggedMessage",
              ])),
          ),
        o("WALogger").LOG(
          D ||
            (D = babelHelpers.taggedTemplateLiteralLoose([
              "reason for logs: ",
              "",
            ])),
          B,
        ),
        o("WALogger").LOG(
          x || (x = babelHelpers.taggedTemplateLiteralLoose(["", ""])),
          o("WAWebLoggerOptimizer").END_OF_UPLOAD,
        ),
        await q(u ? 0 : 1e3));
      var J;
      if (m.shouldHitCheckEndpoint()) {
        var Z = ge({ isHighPri: s });
        m.appendToFormDataForCheck(Z, B);
        var ee = he(c);
        if (
          ((J = await self.fetch(ee, { method: "POST", body: Z })),
          !m.expectedCodes.includes(J.status))
        ) {
          var te = "";
          try {
            te = await J.text();
          } catch (e) {
            te = "(failed to read response body)";
          }
          (o("WALogger").LOG(
            $ ||
              ($ = babelHelpers.taggedTemplateLiteralLoose([
                "Crashlog:doUpload code of ",
                " from ",
                " was unexpected, expected values are: ",
                "",
              ])),
            J.status,
            o("WAWebCrashlogConstants").CLB_CHECK_URL,
            m.expectedCodes.toString(),
          ),
            o("WALogger").LOG(
              P ||
                (P = babelHelpers.taggedTemplateLiteralLoose([
                  "Crashlog:doUpload check response body: ",
                  "",
                ])),
              te,
            ));
          var ne = r("WAWebBrowserInfo")();
          o("WALogger").LOG(
            N ||
              (N = babelHelpers.taggedTemplateLiteralLoose([
                "Crashlog:doUpload check request agent: ",
                "",
              ])),
            o("WAWebCrashlogUserAgent").getLogUserAgent({
              device: ne.os,
              browser: ne.ua,
              appVersion: o("WAWebBuildConstants").VERSION_BASE,
            }),
          );
          return;
        }
        if (J.status === 403) {
          o("WALogger").LOG(
            M ||
              (M = babelHelpers.taggedTemplateLiteralLoose([
                "Crashlog:doUpload aborting crashlog upload due to 403 check response",
              ])),
          );
          return;
        }
      } else
        o("WALogger").LOG(
          w ||
            (w = babelHelpers.taggedTemplateLiteralLoose([
              "Crashlog:doUpload skipping sampling check",
            ])),
        );
      var oe = null;
      if (J)
        try {
          var ae;
          if (
            ((oe = JSON.parse(await J.text())),
            ((ae = oe) == null || (ae = ae.config) == null
              ? void 0
              : ae.sampling) != null &&
              (oe.config.sampling === 0 ||
                Math.random() * oe.config.sampling > 1))
          ) {
            o("WALogger").LOG(
              A ||
                (A = babelHelpers.taggedTemplateLiteralLoose([
                  "Crashlog:doUpload server configured sampling check w/rate: ",
                  " prevented upload",
                ])),
              oe.config.sampling,
            );
            return;
          }
        } catch (e) {
          o("WALogger").LOG(
            F ||
              (F = babelHelpers.taggedTemplateLiteralLoose([
                "Crashlog:failed to parse response from upload check ",
                ", will perform default upload",
              ])),
            String(e),
          );
        }
      var ie = ge({ isHighPri: s });
      m.appendToFormDataForUpload(ie, oe);
      var le = o("WAWebLoggerImpl").Logger.getLogs(
        m.shouldUseLightWeightLogs(oe),
        B === j ? 0 : z,
      );
      if (B === j) {
        var se;
        n("cr:17160") == null ||
          (se = n("cr:17160").WAWebWindowsGetBridge()) == null ||
          (se = se.getDebugFeatures()) == null ||
          se.sendAdminLogs();
      }
      var ue =
          B === j
            ? null
            : n("cr:17160") == null ||
                (i = n("cr:17160").WAWebWindowsGetBridge()) == null ||
                (i = i.getDebugFeatures()) == null
              ? void 0
              : i.requestNativeLogs(),
        ce = await Promise.all([le, ue]),
        de = ce[0],
        me = ce[1];
      r("gkx")("26258") &&
        (de = de.map(o("WAWebLogLineSanitizer").sanitizeLine));
      var pe = de.join(`
`),
        _e = new Blob([pe], { type: "text/plain" });
      if ((ie.append("file", _e, "logs.txt"), me != null)) {
        var fe = new Blob([me], { type: "text/plain" });
        ie.append("secondary_log_files[windows_hybrid]", fe, "native_logs.txt");
      }
      if (H != null) {
        var Ce = H();
        if (Ce.length > 0) {
          var be = new Blob([JSON.stringify(Ce)], { type: "text/plain" });
          ie.append(
            "secondary_log_files[pathfinder]",
            be,
            "pathfinder_trace.json",
          );
        }
      }
      var ve = _;
      K != null &&
        (ie.append("bug_id", K), X && (ve = ve.concat("is_reporter")));
      var Se = G != null ? G() : null;
      (Se != null &&
        (ie.append("call_id", Se.callId), (ve = ve.concat(re(Se)))),
        ve.length && ie.append("tags", ve.join(",")),
        r("isStringNullOrEmpty")(d) || ie.append("ticket_id", d));
      var Re = ye(c),
        Le = await self.fetch(Re, { method: "POST", body: ie });
      if (Le.status !== 200) {
        var Ee = "";
        try {
          Ee = await Le.text();
        } catch (e) {
          Ee = "(failed to read response body)";
        }
        throw (
          o("WALogger").LOG(
            O ||
              (O = babelHelpers.taggedTemplateLiteralLoose([
                "Crashlog:doUpload upload response body: ",
                "",
              ])),
            Ee,
          ),
          r("err")(
            "Status code of " +
              Le.status +
              " from " +
              Re +
              " was unexpected, expected 200",
          )
        );
      }
      return Le.headers.get("X-Uploaded-File-Id");
    }
    function fe() {
      var e =
        o("WAWebRuntimeEnvironmentUtils").isWorker() &&
        !o("WAWebGlobals").areGlobalsReady()
          ? void 0
          : o("WAWebUserPrefsMeUser").getMaybeMeDevicePn();
      return e ? e.toString() : o("WAWebUserPrefsMeUser").getUnknownId();
    }
    function ge(e) {
      var t = e.isHighPri,
        n = new FormData();
      ((!r("gkx")("26258") || t) && n.append("forced", "true"),
        o("WAWebABProps").getABPropConfigValue(
          "is_meta_employee_or_internal_tester",
        ) && n.append("is_internal", "true"),
        n.append("from_jid", fe()));
      var a = r("WAWebBrowserInfo")(),
        i = o("WAWebCrashlogUserAgent").getLogUserAgent({
          device: a.os,
          browser: a.ua,
          appVersion: o("WAWebBuildConstants").VERSION_BASE,
        });
      return (
        n.append("agent", i),
        n.append("app_id", o("WAWebCrashlogConstants").FB_APP_ID),
        n.append("build_id", o("WAWebCrashlogConstants").BUILD_ID),
        n
      );
    }
    function he(e) {
      return r("WAWebURLUtils").build(
        o("WAWebCrashlogConstants").CLB_CHECK_URL,
        {
          type: String(e),
          access_token: o("WAWebCrashlogConstants").CLB_TOKEN,
        },
      );
    }
    function ye(e) {
      var t = {
        type: String(e),
        access_token: o("WAWebCrashlogConstants").CLB_TOKEN,
      };
      return (
        r("WAWebEnvironment").isWindows &&
          (t["additional_metadata[category]"] = "hybrid"),
        r("WAWebURLUtils").build(o("WAWebCrashlogConstants").CLB_URL, t)
      );
    }
    async function Ce(e, t) {
      if (!o("WAWebLoggerImpl").Logger.isTakeOver)
        try {
          var n,
            r = e,
            a = (n = t == null ? void 0 : t.sampling) != null ? n : 1;
          (t == null ? void 0 : t.separateEmployeeLog) !== !1 &&
            o("WAWebCurrentUser").isEmployee() &&
            ((r = e + "-employee"),
            (t == null ? void 0 : t.employeeSampling) != null &&
              (a = t.employeeSampling));
          var i = await pe({
            reason: r,
            hasTaggedMessage: !0,
            clientSamplingRate: a,
            tags: t == null ? void 0 : t.tags,
            sendLogsType: t == null ? void 0 : t.sendLogsType,
          });
          return i;
        } catch (e) {
          o("WALogger").ERROR(
            B ||
              (B = babelHelpers.taggedTemplateLiteralLoose([
                "Crash log sendLogs failed, ",
                "",
              ])),
            e,
          );
          return;
        }
    }
    function be() {
      (se.cancel(), J.clear());
    }
    ((l.LogType = z),
      (l.SERVER_REQUESTED = j),
      (l.MANUAL_UPLOAD = K),
      (l.USER_REPORT = Q),
      (l.registerCrashlogUploadInformationalLoggingFunction = ue),
      (l.registerCrashlogUploadIsUserInExternalBetaFunction = ce),
      (l.registerPathfinderSnapshotCallback = de),
      (l.registerCrashlogVoipContextCallback = me),
      (l.upload = pe),
      (l.sendLogs = Ce),
      (l.reset = be));
  },
  98,
);
