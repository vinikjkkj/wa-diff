__d(
  "WAWebCrashlog",
  [
    "$InternalEnum",
    "Promise",
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
    "asyncToGeneratorRuntime",
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
      q,
      U = function (t) {
        return new (q || (q = n("Promise")))(function (e) {
          return self.setTimeout(e, t);
        });
      },
      V,
      H,
      G,
      z,
      j = n("$InternalEnum")({ CRASHLOG: "crashlog", SUPPORT: "support" }),
      K = "server-requested",
      Q = "manual-upload",
      X = "user-report",
      Y = n("$InternalEnum")({ ONLY_EXCEPTION: "only_exception" }),
      J = 100,
      Z = new Map(),
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
            n.upload === Y.ONLY_EXCEPTION &&
            t.append("exception_only_upload", "true");
        },
        shouldUseLightWeightLogs: function (t) {
          return t ? t.upload === Y.ONLY_EXCEPTION : !1;
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
      V = e;
    }
    function de(e) {
      H = e;
    }
    function me(e) {
      G = e;
    }
    function pe(e) {
      z = e;
    }
    function _e(e) {
      return fe.apply(this, arguments);
    }
    function fe() {
      return (
        (fe = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          var a = t.reason,
            i = a === void 0 ? "reason-unspecified" : a,
            l = t.immediate,
            d = l === void 0 ? !1 : l,
            g = t.logType,
            h = g === void 0 ? j.CRASHLOG : g,
            y = t.isHighPri,
            C = y === void 0 ? !1 : y,
            b = t.hasTaggedMessage,
            v = b === void 0 ? !1 : b,
            S = t.ticketId,
            R = t.clientSamplingRate,
            L = R === void 0 ? 1 : R,
            E = t.tags,
            k = E === void 0 ? [] : E,
            I = t.fromTimestamp,
            T = t.sendLogsType,
            D = T === void 0 ? o("WALogger").SendLogsType.UNCATEGORIZED : T,
            x = t.bugId,
            $ = t.isReporter,
            P = $ === void 0 ? !1 : $;
          if (r("WAWebBrokerGlobalAppState").isLogoutInProgress)
            return (q || (q = n("Promise"))).resolve();
          h === j.SUPPORT && (yield o("WAWebPriorLogs").printAllPriorLogs());
          var N = k,
            M = H != null && H();
          if (
            (M && (N = N.concat("web-joined-beta")),
            o("WAWebRuntimeEnvironmentUtils").isWorker() &&
              (N = N.concat("service-worker")),
            (N = N.concat(re(D))),
            Z.size <= J)
          ) {
            var w = Z.get(i);
            w ? w.count++ : Z.set(i, { count: 1, uploaded: !1 });
          }
          var A = o("WALogger").SadSendLogsTypes.has(D);
          if (A) {
            N = N.concat("sad");
            try {
              var F,
                O,
                B = ae(D),
                W = new (o("WAWebCrashLogWamEvent").CrashLogWamEvent)({
                  crashReason: i,
                  crashType: B,
                  crashCount:
                    (F = (O = Z.get(i)) == null ? void 0 : O.count) != null
                      ? F
                      : 0,
                  crashApplicationState:
                    document.visibilityState === "visible"
                      ? o("WAWebWamEnumCrashApplicationState")
                          .CRASH_APPLICATION_STATE.FOREGROUND
                      : o("WAWebWamEnumCrashApplicationState")
                          .CRASH_APPLICATION_STATE.BACKGROUND,
                });
              (B === o("WAWebWamEnumCrashType").CRASH_TYPE.ANR &&
                (W.crashTimeout = 5),
                N.length && (W.crashContext = N.join(",")));
              var U = o("WAWebCrashContextUtils").getCrashEventAppContext(B);
              (U != null && (W.appContext = U),
                W.commitAndWaitForFlush().catch(function (t) {
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
              var V,
                G,
                z = new (o(
                  "WAWebWebcMinorEventLogWamEvent",
                ).WebcMinorEventLogWamEvent)();
              ((z.logReason = i),
                (z.logType = ie(D)),
                N.length && (z.logContext = N.join(",")),
                (z.logCount =
                  (V = (G = Z.get(i)) == null ? void 0 : G.count) != null
                    ? V
                    : 0),
                z.commitAndWaitForFlush().catch(function (e) {
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
            return (q || (q = n("Promise"))).resolve();
          o("WAWebLoggerUtils").setWaitingForUpload(!0);
          var Q = !A;
          if (
            (L > 0 && L < 1 && (N = N.concat(["sampled", L.toString()])),
            Q && r("gkx")("26258")
              ? o("WAWebLoggerUtils").passesSamplingPerUser(L, i, ye())
              : o("WAWebLoggerUtils").passesSampling(L))
          ) {
            var X = ge;
            if (!C) {
              r("gkx")("26259") && (N = N.concat(["intern"]));
              var Y = Z.get(i);
              if (Y != null && Y.uploaded) {
                (o("WALogger").LOG(
                  m ||
                    (m = babelHelpers.taggedTemplateLiteralLoose([
                      "wa:uploadLogs reason already uploaded, skipping",
                    ])),
                ),
                  o("WAWebLoggerUtils").setWaitingForUpload(!1));
                return;
              }
              (Y && (Y.uploaded = !0),
                Z.size >
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
            var ee = le(C, v, i === K);
            try {
              var te = yield X({
                isHighPri: C,
                immediate: d,
                logType: h,
                ticketId: S,
                uploadStrategy: ee,
                tags: N,
                reason: i,
                hasTaggedMessage: v,
                fromTimestamp: I,
                bugId: x,
                isReporter: P,
              });
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
                L,
              ));
        })),
        fe.apply(this, arguments)
      );
    }
    function ge(e) {
      return he.apply(this, arguments);
    }
    function he() {
      return (
        (he = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
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
            H = W === void 0 ? !1 : W,
            j = e.fromTimestamp,
            Q = e.bugId,
            X = e.isReporter,
            Y = X === void 0 ? !1 : X,
            J = V != null ? V() : { platform: void 0, ref: void 0 };
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
              (t = J.ref) != null ? t : "no conn",
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
              (a = J.platform) != null ? a : "no platform",
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
            H &&
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
            yield U(u ? 0 : 1e3));
          var Z;
          if (m.shouldHitCheckEndpoint()) {
            var ee = Ce({ isHighPri: s });
            m.appendToFormDataForCheck(ee, B);
            var te = be(c);
            if (
              ((Z = yield self.fetch(te, { method: "POST", body: ee })),
              !m.expectedCodes.includes(Z.status))
            ) {
              var ne = "";
              try {
                ne = yield Z.text();
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
                Z.status,
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
            if (Z.status === 403) {
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
          if (Z)
            try {
              var ie;
              if (
                ((ae = JSON.parse(yield Z.text())),
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
            B === K ? 0 : j,
          );
          if (B === K) {
            var ue;
            n("cr:17160") == null ||
              (ue = n("cr:17160").WAWebWindowsGetBridge()) == null ||
              (ue = ue.getDebugFeatures()) == null ||
              ue.sendAdminLogs();
          }
          var ce =
              B === K
                ? null
                : n("cr:17160") == null ||
                    (i = n("cr:17160").WAWebWindowsGetBridge()) == null ||
                    (i = i.getDebugFeatures()) == null
                  ? void 0
                  : i.requestNativeLogs(),
            de = yield (q || (q = n("Promise"))).all([se, ce]),
            me = de[0],
            pe = de[1];
          r("gkx")("26258") &&
            (me = me.map(o("WAWebLogLineSanitizer").sanitizeLine));
          var _e = me.join("\n"),
            fe = new Blob([_e], { type: "text/plain" });
          if ((le.append("file", fe, "logs.txt"), pe != null)) {
            var ge = new Blob([pe], { type: "text/plain" });
            le.append(
              "secondary_log_files[windows_hybrid]",
              ge,
              "native_logs.txt",
            );
          }
          if (G != null) {
            var he = G();
            if (he.length > 0) {
              var ye = new Blob([JSON.stringify(he)], { type: "text/plain" });
              le.append(
                "secondary_log_files[pathfinder]",
                ye,
                "pathfinder_trace.json",
              );
            }
          }
          var Se = _;
          Q != null &&
            (le.append("bug_id", Q), Y && (Se = Se.concat("is_reporter")));
          var Re = z != null ? z() : null;
          (Re != null &&
            (le.append("call_id", Re.callId), (Se = Se.concat(oe(Re)))),
            Se.length && le.append("tags", Se.join(",")),
            r("isStringNullOrEmpty")(d) || le.append("ticket_id", d));
          var Le = ve(c),
            Ee = yield self.fetch(Le, { method: "POST", body: le });
          if (Ee.status !== 200) {
            var ke = "";
            try {
              ke = yield Ee.text();
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
        })),
        he.apply(this, arguments)
      );
    }
    function ye() {
      var e =
        o("WAWebRuntimeEnvironmentUtils").isWorker() &&
        !o("WAWebGlobals").areGlobalsReady()
          ? void 0
          : o("WAWebUserPrefsMeUser").getMaybeMeDevicePn();
      return e ? e.toString() : o("WAWebUserPrefsMeUser").getUnknownId();
    }
    function Ce(e) {
      var t = e.isHighPri,
        n = new FormData();
      ((!r("gkx")("26258") || t) && n.append("forced", "true"),
        o("WAWebABProps").getABPropConfigValue(
          "is_meta_employee_or_internal_tester",
        ) && n.append("is_internal", "true"),
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
    function Se(e, t) {
      return Re.apply(this, arguments);
    }
    function Re() {
      return (
        (Re = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
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
              var i = yield _e({
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
        })),
        Re.apply(this, arguments)
      );
    }
    function Le() {
      (ue.cancel(), Z.clear());
    }
    ((l.LogType = j),
      (l.SERVER_REQUESTED = K),
      (l.MANUAL_UPLOAD = Q),
      (l.USER_REPORT = X),
      (l.registerCrashlogUploadInformationalLoggingFunction = ce),
      (l.registerCrashlogUploadIsUserInExternalBetaFunction = de),
      (l.registerPathfinderSnapshotCallback = me),
      (l.registerCrashlogVoipContextCallback = pe),
      (l.upload = _e),
      (l.sendLogs = Se),
      (l.reset = Le));
  },
  98,
);
