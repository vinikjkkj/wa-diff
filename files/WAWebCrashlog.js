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
      U,
      V = function (t) {
        return new (U || (U = n("Promise")))(function (e) {
          return self.setTimeout(e, t);
        });
      },
      H,
      G,
      z,
      j,
      K = n("$InternalEnum")({ CRASHLOG: "crashlog", SUPPORT: "support" }),
      Q = "server-requested",
      X = "manual-upload",
      Y = "user-report",
      J = n("$InternalEnum")({ ONLY_EXCEPTION: "only_exception" }),
      Z = 100,
      ee = new Map(),
      te = {
        shouldHitCheckEndpoint: (q = o("WAWebBoolFunc")).returnFalse,
        expectedCodes: [],
        appendToFormDataForCheck: function (t) {},
        appendToFormDataForUpload: function (t, n) {},
        shouldUseLightWeightLogs: q.returnFalse,
      },
      ne = {
        shouldHitCheckEndpoint: q.returnTrue,
        expectedCodes: [200, 403],
        appendToFormDataForCheck: function (t, n) {
          t.append("reason", n);
        },
        appendToFormDataForUpload: function (t, n) {},
        shouldUseLightWeightLogs: q.returnFalse,
      },
      re = {
        shouldHitCheckEndpoint: q.returnTrue,
        expectedCodes: [200, 403],
        appendToFormDataForCheck: function (t, n) {
          (t.append("support_exception_only_upload", "true"),
            t.append("reason", n));
        },
        appendToFormDataForUpload: function (t, n) {
          n &&
            n.upload === J.ONLY_EXCEPTION &&
            t.append("exception_only_upload", "true");
        },
        shouldUseLightWeightLogs: function (t) {
          return t ? t.upload === J.ONLY_EXCEPTION : !1;
        },
      };
    function oe(e) {
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
    function ae(e) {
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
    function ie(e) {
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
    function le(e) {
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
    function se(e, t, n) {
      return (!r("gkx")("26258") && e) || n ? te : t ? re : ne;
    }
    var ue = 72e5,
      ce = o("WAThrottle").throttle(he, ue, { trailing: !1 });
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
      j = e;
    }
    function fe(e) {
      return ge.apply(this, arguments);
    }
    function ge() {
      return (
        (ge = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          var a = t.reason,
            i = a === void 0 ? "reason-unspecified" : a,
            l = t.immediate,
            d = l === void 0 ? !1 : l,
            g = t.logType,
            h = g === void 0 ? K.CRASHLOG : g,
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
            return (U || (U = n("Promise"))).resolve();
          h === K.SUPPORT && (yield o("WAWebPriorLogs").printAllPriorLogs());
          var N = k,
            M = G != null && G();
          if (
            (M && (N = N.concat("web-joined-beta")),
            o("WAWebRuntimeEnvironmentUtils").isWorker() &&
              (N = N.concat("service-worker")),
            (N = N.concat(oe(D))),
            ee.size <= Z)
          ) {
            var w = ee.get(i);
            w ? w.count++ : ee.set(i, { count: 1, uploaded: !1 });
          }
          var A = o("WALogger").SadSendLogsTypes.has(D);
          if (A) {
            N = N.concat("sad");
            try {
              var F,
                O,
                B = ie(D),
                W = new (o("WAWebCrashLogWamEvent").CrashLogWamEvent)({
                  crashReason: i,
                  crashType: B,
                  crashCount:
                    (F = (O = ee.get(i)) == null ? void 0 : O.count) != null
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
              var q = o("WAWebCrashContextUtils").getCrashEventAppContext(B);
              (q != null && (W.appContext = q),
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
                H,
                z = new (o(
                  "WAWebWebcMinorEventLogWamEvent",
                ).WebcMinorEventLogWamEvent)();
              ((z.logReason = i),
                (z.logType = le(D)),
                N.length && (z.logContext = N.join(",")),
                (z.logCount =
                  (V = (H = ee.get(i)) == null ? void 0 : H.count) != null
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
            return (U || (U = n("Promise"))).resolve();
          o("WAWebLoggerUtils").setWaitingForUpload(!0);
          var j = !A;
          if (
            (L > 0 && L < 1 && (N = N.concat(["sampled", L.toString()])),
            j && r("gkx")("26258")
              ? o("WAWebLoggerUtils").passesSamplingPerUser(L, i, Ce())
              : o("WAWebLoggerUtils").passesSampling(L))
          ) {
            var X = he;
            if (!C) {
              r("gkx")("26259") && (N = N.concat(["intern"]));
              var Y = ee.get(i);
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
                ee.size >
                  o("WAWebCrashlogConstants")
                    .UNIQUE_UPLOADS_ALLOWED_BEFORE_THROTTLE &&
                  (o("WALogger").LOG(
                    p ||
                      (p = babelHelpers.taggedTemplateLiteralLoose([
                        "wa:uploadLogs using throttle",
                      ])),
                  ),
                  (X = ce)));
            }
            var J = se(C, v, i === Q);
            try {
              var te = yield X({
                isHighPri: C,
                immediate: d,
                logType: h,
                ticketId: S,
                uploadStrategy: J,
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
        ge.apply(this, arguments)
      );
    }
    function he(e) {
      return ye.apply(this, arguments);
    }
    function ye() {
      return (
        (ye = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
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
            W = f === void 0 ? "reason-unspecified" : f,
            q = e.hasTaggedMessage,
            G = q === void 0 ? !1 : q,
            K = e.fromTimestamp,
            X = e.bugId,
            Y = e.isReporter,
            J = Y === void 0 ? !1 : Y,
            Z = H != null ? H() : { platform: void 0, ref: void 0 };
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
              (t = Z.ref) != null ? t : "no conn",
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
              (a = Z.platform) != null ? a : "no platform",
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
            r("gkx")("26258") ||
              o("WALogger").LOG(
                T ||
                  (T = babelHelpers.taggedTemplateLiteralLoose([
                    "wa:uploadLogs react-compiler: ",
                    "",
                  ])),
                r("gkx")("7685") ? "forget" : "classic",
              ),
            G &&
              o("WALogger").LOG(
                D ||
                  (D = babelHelpers.taggedTemplateLiteralLoose([
                    "wa:uploadLogs hasTaggedMessage",
                  ])),
              ),
            o("WALogger").LOG(
              x ||
                (x = babelHelpers.taggedTemplateLiteralLoose([
                  "reason for logs: ",
                  "",
                ])),
              W,
            ),
            o("WALogger").LOG(
              $ || ($ = babelHelpers.taggedTemplateLiteralLoose(["", ""])),
              o("WAWebLoggerOptimizer").END_OF_UPLOAD,
            ),
            yield V(u ? 0 : 1e3));
          var ee;
          if (m.shouldHitCheckEndpoint()) {
            var te = be({ isHighPri: s });
            m.appendToFormDataForCheck(te, W);
            var ne = ve(c);
            if (
              ((ee = yield self.fetch(ne, { method: "POST", body: te })),
              !m.expectedCodes.includes(ee.status))
            ) {
              var re = "";
              try {
                re = yield ee.text();
              } catch (e) {
                re = "(failed to read response body)";
              }
              (o("WALogger").LOG(
                P ||
                  (P = babelHelpers.taggedTemplateLiteralLoose([
                    "Crashlog:doUpload code of ",
                    " from ",
                    " was unexpected, expected values are: ",
                    "",
                  ])),
                ee.status,
                o("WAWebCrashlogConstants").CLB_CHECK_URL,
                m.expectedCodes.toString(),
              ),
                o("WALogger").LOG(
                  N ||
                    (N = babelHelpers.taggedTemplateLiteralLoose([
                      "Crashlog:doUpload check response body: ",
                      "",
                    ])),
                  re,
                ));
              var oe = r("WAWebBrowserInfo")();
              o("WALogger").LOG(
                M ||
                  (M = babelHelpers.taggedTemplateLiteralLoose([
                    "Crashlog:doUpload check request agent: ",
                    "",
                  ])),
                o("WAWebCrashlogUserAgent").getLogUserAgent({
                  device: oe.os,
                  browser: oe.ua,
                  appVersion: o("WAWebBuildConstants").VERSION_BASE,
                }),
              );
              return;
            }
            if (ee.status === 403) {
              o("WALogger").LOG(
                w ||
                  (w = babelHelpers.taggedTemplateLiteralLoose([
                    "Crashlog:doUpload aborting crashlog upload due to 403 check response",
                  ])),
              );
              return;
            }
          } else
            o("WALogger").LOG(
              A ||
                (A = babelHelpers.taggedTemplateLiteralLoose([
                  "Crashlog:doUpload skipping sampling check",
                ])),
            );
          var ie = null;
          if (ee)
            try {
              var le;
              if (
                ((ie = JSON.parse(yield ee.text())),
                ((le = ie) == null || (le = le.config) == null
                  ? void 0
                  : le.sampling) != null &&
                  (ie.config.sampling === 0 ||
                    Math.random() * ie.config.sampling > 1))
              ) {
                o("WALogger").LOG(
                  F ||
                    (F = babelHelpers.taggedTemplateLiteralLoose([
                      "Crashlog:doUpload server configured sampling check w/rate: ",
                      " prevented upload",
                    ])),
                  ie.config.sampling,
                );
                return;
              }
            } catch (e) {
              o("WALogger").LOG(
                O ||
                  (O = babelHelpers.taggedTemplateLiteralLoose([
                    "Crashlog:failed to parse response from upload check ",
                    ", will perform default upload",
                  ])),
                String(e),
              );
            }
          var se = be({ isHighPri: s });
          m.appendToFormDataForUpload(se, ie);
          var ue = o("WAWebLoggerImpl").Logger.getLogs(
            m.shouldUseLightWeightLogs(ie),
            W === Q ? 0 : K,
          );
          if (W === Q) {
            var ce;
            n("cr:17160") == null ||
              (ce = n("cr:17160").WAWebWindowsGetBridge()) == null ||
              (ce = ce.getDebugFeatures()) == null ||
              ce.sendAdminLogs();
          }
          var de =
              W === Q
                ? null
                : n("cr:17160") == null ||
                    (i = n("cr:17160").WAWebWindowsGetBridge()) == null ||
                    (i = i.getDebugFeatures()) == null
                  ? void 0
                  : i.requestNativeLogs(),
            me = yield (U || (U = n("Promise"))).all([ue, de]),
            pe = me[0],
            _e = me[1];
          r("gkx")("26258") &&
            (pe = pe.map(o("WAWebLogLineSanitizer").sanitizeLine));
          var fe = pe.join("\n"),
            ge = new Blob([fe], { type: "text/plain" });
          if ((se.append("file", ge, "logs.txt"), _e != null)) {
            var he = new Blob([_e], { type: "text/plain" });
            se.append(
              "secondary_log_files[windows_hybrid]",
              he,
              "native_logs.txt",
            );
          }
          if (z != null) {
            var ye = z();
            if (ye.length > 0) {
              var Ce = new Blob([JSON.stringify(ye)], { type: "text/plain" });
              se.append(
                "secondary_log_files[pathfinder]",
                Ce,
                "pathfinder_trace.json",
              );
            }
          }
          var Re = _;
          X != null &&
            (se.append("bug_id", X), J && (Re = Re.concat("is_reporter")));
          var Le = j != null ? j() : null;
          (Le != null &&
            (se.append("call_id", Le.callId), (Re = Re.concat(ae(Le)))),
            Re.length && se.append("tags", Re.join(",")),
            r("isStringNullOrEmpty")(d) || se.append("ticket_id", d));
          var Ee = Se(c),
            ke = yield self.fetch(Ee, { method: "POST", body: se });
          if (ke.status !== 200) {
            var Ie = "";
            try {
              Ie = yield ke.text();
            } catch (e) {
              Ie = "(failed to read response body)";
            }
            throw (
              o("WALogger").LOG(
                B ||
                  (B = babelHelpers.taggedTemplateLiteralLoose([
                    "Crashlog:doUpload upload response body: ",
                    "",
                  ])),
                Ie,
              ),
              r("err")(
                "Status code of " +
                  ke.status +
                  " from " +
                  Ee +
                  " was unexpected, expected 200",
              )
            );
          }
          return ke.headers.get("X-Uploaded-File-Id");
        })),
        ye.apply(this, arguments)
      );
    }
    function Ce() {
      var e =
        o("WAWebRuntimeEnvironmentUtils").isWorker() &&
        !o("WAWebGlobals").areGlobalsReady()
          ? void 0
          : o("WAWebUserPrefsMeUser").getMaybeMeDevicePn();
      return e ? e.toString() : o("WAWebUserPrefsMeUser").getUnknownId();
    }
    function be(e) {
      var t = e.isHighPri,
        n = new FormData();
      ((!r("gkx")("26258") || t) && n.append("forced", "true"),
        o("WAWebABProps").getABPropConfigValue(
          "is_meta_employee_or_internal_tester",
        ) && n.append("is_internal", "true"),
        n.append("from_jid", Ce()));
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
    function ve(e) {
      return r("WAWebURLUtils").build(
        o("WAWebCrashlogConstants").CLB_CHECK_URL,
        {
          type: String(e),
          access_token: o("WAWebCrashlogConstants").CLB_TOKEN,
        },
      );
    }
    function Se(e) {
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
    function Re(e, t) {
      return Le.apply(this, arguments);
    }
    function Le() {
      return (
        (Le = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
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
              var i = yield fe({
                reason: r,
                hasTaggedMessage: !0,
                clientSamplingRate: a,
                tags: t == null ? void 0 : t.tags,
                sendLogsType: t == null ? void 0 : t.sendLogsType,
              });
              return i;
            } catch (e) {
              o("WALogger").ERROR(
                W ||
                  (W = babelHelpers.taggedTemplateLiteralLoose([
                    "Crash log sendLogs failed, ",
                    "",
                  ])),
                e,
              );
              return;
            }
        })),
        Le.apply(this, arguments)
      );
    }
    function Ee() {
      (ce.cancel(), ee.clear());
    }
    ((l.LogType = K),
      (l.SERVER_REQUESTED = Q),
      (l.MANUAL_UPLOAD = X),
      (l.USER_REPORT = Y),
      (l.registerCrashlogUploadInformationalLoggingFunction = de),
      (l.registerCrashlogUploadIsUserInExternalBetaFunction = me),
      (l.registerPathfinderSnapshotCallback = pe),
      (l.registerCrashlogVoipContextCallback = _e),
      (l.upload = fe),
      (l.sendLogs = Re),
      (l.reset = Ee));
  },
  98,
);
