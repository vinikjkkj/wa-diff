__d(
  "WAWebCrashlog",
  [
    "$InternalEnum",
    "WALogger",
    "WAThrottle",
    "WAWebBoolFunc",
    "WAWebBrokerGlobalAppState",
    "WAWebBrowserInfo",
    "WAWebBuildConstants",
    "WAWebCrashContextUtils",
    "WAWebCrashLogWamEvent",
    "WAWebCrashlogConstants",
    "WAWebCrashlogUserAgent",
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
    "WAWebUserUtils",
    "WAWebWamEnumCrashApplicationState",
    "WAWebWamEnumCrashType",
    "WAWebWamEnumLogType",
    "WAWebWebcMinorEventLogWamEvent",
    "cr:17160",
    "cr:4722",
    "err",
    "gkx",
    "isStringNullOrEmpty",
    "justknobx",
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
      W;
    function q(e) {
      return new Promise(function (t) {
        return self.setTimeout(t, e);
      });
    }
    var U,
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
      Z = 0,
      ee = {
        shouldHitCheckEndpoint: (W = o("WAWebBoolFunc")).returnFalse,
        expectedCodes: [],
        appendToFormDataForCheck: function (t) {},
        appendToFormDataForUpload: function (t, n) {},
        shouldUseLightWeightLogs: W.returnFalse,
      },
      te = {
        shouldHitCheckEndpoint: W.returnTrue,
        expectedCodes: [200, 403],
        appendToFormDataForCheck: function (t, n) {
          t.append("reason", n);
        },
        appendToFormDataForUpload: function (t, n) {},
        shouldUseLightWeightLogs: W.returnFalse,
      },
      ne = {
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
    function re(e) {
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
    function oe(e) {
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
    function ae(e) {
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
    function ie(e) {
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
    function le(e, t, n) {
      return (!r("gkx")("26258") && e) || n ? ee : t ? ne : te;
    }
    var se = 72e5,
      ue = o("WAThrottle").throttle(ge, se, { trailing: !1 });
    function ce(e) {
      U = e;
    }
    function de(e) {
      V = e;
    }
    function me(e) {
      H = e;
    }
    function pe(e) {
      G = e;
    }
    async function _e(t) {
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
        $ = x === void 0 ? !1 : x,
        P = t.requireFreshFileId,
        N = P === void 0 ? !1 : P;
      if (r("WAWebBrokerGlobalAppState").isLogoutInProgress)
        return Promise.resolve(void 0);
      g === z.SUPPORT && (await o("WAWebPriorLogs").printAllPriorLogs());
      var M = E,
        w = V != null && V();
      if (
        (w && (M = M.concat("web-joined-beta")),
        o("WAWebRuntimeEnvironmentUtils").isWorker() &&
          (M = M.concat("service-worker")),
        (M = M.concat(re(T))),
        J.size <= Y)
      ) {
        var A = J.get(a);
        A ? A.count++ : J.set(a, { count: 1, uploaded: !1 });
      }
      var F = o("WALogger").SadSendLogsTypes.has(T);
      if (F) {
        M = M.concat("sad");
        try {
          var O,
            B,
            W = ae(T),
            q = new (o("WAWebCrashLogWamEvent").CrashLogWamEvent)({
              crashReason: a,
              crashType: W,
              crashCount:
                (O = (B = J.get(a)) == null ? void 0 : B.count) != null ? O : 0,
              crashApplicationState:
                document.visibilityState === "visible"
                  ? o("WAWebWamEnumCrashApplicationState")
                      .CRASH_APPLICATION_STATE.FOREGROUND
                  : o("WAWebWamEnumCrashApplicationState")
                      .CRASH_APPLICATION_STATE.BACKGROUND,
            });
          (W === o("WAWebWamEnumCrashType").CRASH_TYPE.ANR &&
            (q.crashTimeout = 5),
            M.length && (q.crashContext = M.join(",")));
          var U = o("WAWebCrashContextUtils").getCrashEventAppContext(W);
          (U != null && (q.appContext = U),
            q.commitAndWaitForFlush().catch(function (t) {
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
          var H,
            G,
            K = new (o(
              "WAWebWebcMinorEventLogWamEvent",
            ).WebcMinorEventLogWamEvent)();
          ((K.logReason = a),
            (K.logType = ie(T)),
            M.length && (K.logContext = M.join(",")),
            (K.logCount =
              (H = (G = J.get(a)) == null ? void 0 : G.count) != null ? H : 0),
            K.commitAndWaitForFlush().catch(function (e) {
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
      if (o("WAWebLoggerUtils").isWaitingForUpload())
        return Promise.resolve(void 0);
      o("WAWebLoggerUtils").setWaitingForUpload(!0);
      var Q = !F;
      if (
        (R > 0 && R < 1 && (M = M.concat(["sampled", R.toString()])),
        Q && r("gkx")("26258")
          ? o("WAWebLoggerUtils").passesSamplingPerUser(R, a, ye())
          : o("WAWebLoggerUtils").passesSampling(R))
      ) {
        var X = ge;
        if (!y) {
          r("gkx")("26259") && (M = M.concat(["intern"]));
          var Z = J.get(a);
          if (Z != null && Z.uploaded) {
            (o("WALogger").LOG(
              m ||
                (m = babelHelpers.taggedTemplateLiteralLoose([
                  "wa:uploadLogs reason already uploaded, skipping",
                ])),
            ),
              o("WAWebLoggerUtils").setWaitingForUpload(!1));
            return;
          }
          (Z && (Z.uploaded = !0),
            J.size >
              o("WAWebCrashlogConstants")
                .UNIQUE_UPLOADS_ALLOWED_BEFORE_THROTTLE &&
              (o("WALogger").LOG(
                p ||
                  (p = babelHelpers.taggedTemplateLiteralLoose([
                    "wa:uploadLogs using throttle",
                  ])),
              ),
              (X = ue)));
        }
        var ee = le(y, b, a === j);
        try {
          var te = await fe(
            X,
            {
              isHighPri: y,
              immediate: l,
              logType: g,
              ticketId: v,
              uploadStrategy: ee,
              tags: M,
              reason: a,
              hasTaggedMessage: b,
              fromTimestamp: k,
              bugId: D,
              isReporter: $,
            },
            N,
          );
          return (o("WAWebLoggerUtils").setWaitingForUpload(!1), te);
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
    function fe(e, t, n) {
      var r = Z,
        o = e(t);
      return !n || Z !== r ? o : Promise.resolve(o).then(function () {});
    }
    async function ge(e) {
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
        X = Q === void 0 ? !1 : Q;
      Z++;
      var Y = U != null ? U() : { platform: void 0, ref: void 0 };
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
              "wa:uploadLogs version: ",
              "",
            ])),
          o("WAWebBuildConstants").VERSION_BASE,
        ),
        o("WALogger").LOG(
          I ||
            (I = babelHelpers.taggedTemplateLiteralLoose([
              "wa:uploadLogs pushPhase: ",
              "",
            ])),
          o("WAWebBuildConstants").PUSH_PHASE,
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
        var ee = Ce({ isHighPri: s });
        m.appendToFormDataForCheck(ee, B);
        var te = be(c);
        if (
          ((J = await self.fetch(te, { method: "POST", body: ee })),
          !m.expectedCodes.includes(J.status))
        ) {
          var ne = "";
          try {
            ne = await J.text();
          } catch (e) {
            ne = "(failed to read response body)";
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
              ne,
            ));
          var re = r("WAWebBrowserInfo")();
          o("WALogger").LOG(
            N ||
              (N = babelHelpers.taggedTemplateLiteralLoose([
                "Crashlog:doUpload check request agent: ",
                "",
              ])),
            o("WAWebCrashlogUserAgent").getLogUserAgent({
              device: re.os,
              browser: re.ua,
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
      var ae = null;
      if (J)
        try {
          var ie;
          if (
            ((ae = JSON.parse(await J.text())),
            ((ie = ae) == null || (ie = ie.config) == null
              ? void 0
              : ie.sampling) != null &&
              (ae.config.sampling === 0 ||
                Math.random() * ae.config.sampling > 1))
          ) {
            o("WALogger").LOG(
              A ||
                (A = babelHelpers.taggedTemplateLiteralLoose([
                  "Crashlog:doUpload server configured sampling check w/rate: ",
                  " prevented upload",
                ])),
              ae.config.sampling,
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
      var le = Ce({ isHighPri: s });
      m.appendToFormDataForUpload(le, ae);
      var se = o("WAWebLoggerImpl").Logger.getLogs(
        m.shouldUseLightWeightLogs(ae),
        B === j ? 0 : z,
      );
      if (B === j) {
        var ue;
        n("cr:17160") == null ||
          (ue = n("cr:17160").WAWebWindowsGetBridge()) == null ||
          (ue = ue.getDebugFeatures()) == null ||
          ue.sendAdminLogs();
      }
      var ce =
          B === j
            ? null
            : n("cr:17160") == null ||
                (i = n("cr:17160").WAWebWindowsGetBridge()) == null ||
                (i = i.getDebugFeatures()) == null
              ? void 0
              : i.requestNativeLogs(),
        de = await Promise.all([se, ce]),
        me = de[0],
        pe = de[1];
      (r("justknobx")._("7009") ? !r("gkx")("9092") : r("gkx")("26258")) &&
        (me = me.map(o("WAWebLogLineSanitizer").sanitizeLine));
      var _e = me.join(`
`),
        fe = new Blob([_e], { type: "text/plain" });
      if ((le.append("file", fe, "logs.txt"), pe != null)) {
        var ge = new Blob([pe], { type: "text/plain" });
        le.append("secondary_log_files[windows_hybrid]", ge, "native_logs.txt");
      }
      if (H != null) {
        var he = H();
        if (he != null) {
          var ye = new Blob([JSON.stringify(he)], { type: "text/plain" });
          le.append(
            "secondary_log_files[pathfinder]",
            ye,
            "pathfinder_trace.json",
          );
        }
      }
      var Se = _;
      K != null &&
        (le.append("bug_id", K), X && (Se = Se.concat("is_reporter")));
      var Re = G != null ? G() : null;
      (Re != null &&
        (le.append("call_id", Re.callId), (Se = Se.concat(oe(Re)))),
        Se.length && le.append("tags", Se.join(",")),
        r("isStringNullOrEmpty")(d) || le.append("ticket_id", d));
      var Le = ve(c),
        Ee = await self.fetch(Le, { method: "POST", body: le });
      if (Ee.status !== 200) {
        var ke = "";
        try {
          ke = await Ee.text();
        } catch (e) {
          ke = "(failed to read response body)";
        }
        throw (
          o("WALogger").LOG(
            O ||
              (O = babelHelpers.taggedTemplateLiteralLoose([
                "Crashlog:doUpload upload response body: ",
                "",
              ])),
            ke,
          ),
          r("err")(
            "Status code of " +
              Ee.status +
              " from " +
              Le +
              " was unexpected, expected 200",
          )
        );
      }
      return Ee.headers.get("X-Uploaded-File-Id");
    }
    function he(e) {
      if (n("cr:4722") != null) {
        var t = new Blob([n("cr:4722").Profiler.export()], {
          type: "text/plain",
        });
        e.append("attachment", t, "profiler_data.txt");
      }
    }
    function ye() {
      var e =
        (o("WAWebRuntimeEnvironmentUtils").isWorker() &&
          !o("WAWebGlobals").areGlobalsReady()) ||
        !o("WAWebUserUtils").hasLoggedIn()
          ? void 0
          : o("WAWebUserUtils").getMeDeviceOrThrow();
      return e ? e.toString() : o("WAWebUserPrefsMeUser").getUnknownId();
    }
    function Ce(e) {
      var t = e.isHighPri,
        n = new FormData();
      ((!r("gkx")("26258") || t) && n.append("forced", "true"),
        r("gkx")("9092") && n.append("is_internal", "true"),
        n.append("from_jid", ye()));
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
    function be(e) {
      return r("WAWebURLUtils").build(
        o("WAWebCrashlogConstants").CLB_CHECK_URL,
        {
          type: String(e),
          access_token: o("WAWebCrashlogConstants").CLB_TOKEN,
        },
      );
    }
    function ve(e) {
      var t = {
        type: String(e),
        access_token: o("WAWebCrashlogConstants").CLB_TOKEN,
      };
      return (
        r("WAWebEnvironment").isWindows &&
          (t["additional_metadata[category]"] = "hybrid"),
        r("WAWebEnvironment").isGuest &&
          (t["additional_metadata[category]"] = o(
            "WAWebCrashlogConstants",
          ).CLB_SUBPLATFORM),
        r("WAWebURLUtils").build(o("WAWebCrashlogConstants").CLB_URL, t)
      );
    }
    async function Se(e, t) {
      if (!o("WAWebLoggerImpl").Logger.isTakeOver)
        try {
          var n,
            a = e,
            i = (n = t == null ? void 0 : t.sampling) != null ? n : 1;
          (t == null ? void 0 : t.separateEmployeeLog) !== !1 &&
            r("gkx")("9092") &&
            ((a = e + "-employee"),
            (t == null ? void 0 : t.employeeSampling) != null &&
              (i = t.employeeSampling));
          var l = await _e({
            reason: a,
            hasTaggedMessage: !0,
            clientSamplingRate: i,
            tags: t == null ? void 0 : t.tags,
            sendLogsType: t == null ? void 0 : t.sendLogsType,
            requireFreshFileId: t == null ? void 0 : t.requireFreshFileId,
          });
          return l;
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
    function Re() {
      (ue.cancel(), J.clear());
    }
    ((l.LogType = z),
      (l.SERVER_REQUESTED = j),
      (l.MANUAL_UPLOAD = K),
      (l.USER_REPORT = Q),
      (l.registerCrashlogUploadInformationalLoggingFunction = ce),
      (l.registerCrashlogUploadIsUserInExternalBetaFunction = de),
      (l.registerPathfinderTraceCallback = me),
      (l.registerCrashlogVoipContextCallback = pe),
      (l.upload = _e),
      (l.sendLogs = Se),
      (l.reset = Re));
  },
  98,
);
