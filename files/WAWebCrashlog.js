__d(
  "WAWebCrashlog",
  [
    "$InternalEnum",
    "Promise",
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
      W,
      q;
    function U(e) {
      return new (q || (q = n("Promise")))(function (t) {
        return self.setTimeout(t, e);
      });
    }
    var V,
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
      ee = 0,
      te = {
        shouldHitCheckEndpoint: (W = o("WAWebBoolFunc")).returnFalse,
        expectedCodes: [],
        appendToFormDataForCheck: function (t) {},
        appendToFormDataForUpload: function (t, n) {},
        shouldUseLightWeightLogs: W.returnFalse,
      },
      ne = {
        shouldHitCheckEndpoint: W.returnTrue,
        expectedCodes: [200, 403],
        appendToFormDataForCheck: function (t, n) {
          t.append("reason", n);
        },
        appendToFormDataForUpload: function (t, n) {},
        shouldUseLightWeightLogs: W.returnFalse,
      },
      re = {
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
      ce = o("WAThrottle").throttle(ye, ue, { trailing: !1 });
    function de(e) {
      V = e;
    }
    function me(e) {
      H = e;
    }
    function pe(e) {
      G = e;
    }
    function _e(e) {
      z = e;
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
            P = $ === void 0 ? !1 : $,
            N = t.requireFreshFileId,
            M = N === void 0 ? !1 : N;
          if (r("WAWebBrokerGlobalAppState").isLogoutInProgress)
            return (q || (q = n("Promise"))).resolve();
          h === j.SUPPORT && (yield o("WAWebPriorLogs").printAllPriorLogs());
          var w = k,
            A = H != null && H();
          if (
            (A && (w = w.concat("web-joined-beta")),
            o("WAWebRuntimeEnvironmentUtils").isWorker() &&
              (w = w.concat("service-worker")),
            (w = w.concat(oe(D))),
            Z.size <= J)
          ) {
            var F = Z.get(i);
            F ? F.count++ : Z.set(i, { count: 1, uploaded: !1 });
          }
          var O = o("WALogger").SadSendLogsTypes.has(D);
          if (O) {
            w = w.concat("sad");
            try {
              var B,
                W,
                U = ie(D),
                V = new (o("WAWebCrashLogWamEvent").CrashLogWamEvent)({
                  crashReason: i,
                  crashType: U,
                  crashCount:
                    (B = (W = Z.get(i)) == null ? void 0 : W.count) != null
                      ? B
                      : 0,
                  crashApplicationState:
                    document.visibilityState === "visible"
                      ? o("WAWebWamEnumCrashApplicationState")
                          .CRASH_APPLICATION_STATE.FOREGROUND
                      : o("WAWebWamEnumCrashApplicationState")
                          .CRASH_APPLICATION_STATE.BACKGROUND,
                });
              (U === o("WAWebWamEnumCrashType").CRASH_TYPE.ANR &&
                (V.crashTimeout = 5),
                w.length && (V.crashContext = w.join(",")));
              var G = o("WAWebCrashContextUtils").getCrashEventAppContext(U);
              (G != null && (V.appContext = G),
                V.commitAndWaitForFlush().catch(function (t) {
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
              var z,
                Q,
                X = new (o(
                  "WAWebWebcMinorEventLogWamEvent",
                ).WebcMinorEventLogWamEvent)();
              ((X.logReason = i),
                (X.logType = le(D)),
                w.length && (X.logContext = w.join(",")),
                (X.logCount =
                  (z = (Q = Z.get(i)) == null ? void 0 : Q.count) != null
                    ? z
                    : 0),
                X.commitAndWaitForFlush().catch(function (e) {
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
          var Y = !O;
          if (
            (L > 0 && L < 1 && (w = w.concat(["sampled", L.toString()])),
            Y && r("gkx")("26258")
              ? o("WAWebLoggerUtils").passesSamplingPerUser(L, i, be())
              : o("WAWebLoggerUtils").passesSampling(L))
          ) {
            var ee = ye;
            if (!C) {
              r("gkx")("26259") && (w = w.concat(["intern"]));
              var te = Z.get(i);
              if (te != null && te.uploaded) {
                (o("WALogger").LOG(
                  m ||
                    (m = babelHelpers.taggedTemplateLiteralLoose([
                      "wa:uploadLogs reason already uploaded, skipping",
                    ])),
                ),
                  o("WAWebLoggerUtils").setWaitingForUpload(!1));
                return;
              }
              (te && (te.uploaded = !0),
                Z.size >
                  o("WAWebCrashlogConstants")
                    .UNIQUE_UPLOADS_ALLOWED_BEFORE_THROTTLE &&
                  (o("WALogger").LOG(
                    p ||
                      (p = babelHelpers.taggedTemplateLiteralLoose([
                        "wa:uploadLogs using throttle",
                      ])),
                  ),
                  (ee = ce)));
            }
            var ne = se(C, v, i === K);
            try {
              var re = yield he(
                ee,
                {
                  isHighPri: C,
                  immediate: d,
                  logType: h,
                  ticketId: S,
                  uploadStrategy: ne,
                  tags: w,
                  reason: i,
                  hasTaggedMessage: v,
                  fromTimestamp: I,
                  bugId: x,
                  isReporter: P,
                },
                M,
              );
              return (o("WAWebLoggerUtils").setWaitingForUpload(!1), re);
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
    function he(e, t, r) {
      var o = ee,
        a = e(t);
      return !r || ee !== o
        ? a
        : (q || (q = n("Promise"))).resolve(a).then(function () {});
    }
    function ye(e) {
      return Ce.apply(this, arguments);
    }
    function Ce() {
      return (
        (Ce = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
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
            Y = X === void 0 ? !1 : X;
          ee++;
          var J = V != null ? V() : { platform: void 0, ref: void 0 };
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
            var te = ve({ isHighPri: s });
            m.appendToFormDataForCheck(te, B);
            var ne = Se(c);
            if (
              ((Z = yield self.fetch(ne, { method: "POST", body: te })),
              !m.expectedCodes.includes(Z.status))
            ) {
              var re = "";
              try {
                re = yield Z.text();
              } catch (e) {
                re = "(failed to read response body)";
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
                  re,
                ));
              var oe = r("WAWebBrowserInfo")();
              o("WALogger").LOG(
                N ||
                  (N = babelHelpers.taggedTemplateLiteralLoose([
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
          var ie = null;
          if (Z)
            try {
              var le;
              if (
                ((ie = JSON.parse(yield Z.text())),
                ((le = ie) == null || (le = le.config) == null
                  ? void 0
                  : le.sampling) != null &&
                  (ie.config.sampling === 0 ||
                    Math.random() * ie.config.sampling > 1))
              ) {
                o("WALogger").LOG(
                  A ||
                    (A = babelHelpers.taggedTemplateLiteralLoose([
                      "Crashlog:doUpload server configured sampling check w/rate: ",
                      " prevented upload",
                    ])),
                  ie.config.sampling,
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
          var se = ve({ isHighPri: s });
          m.appendToFormDataForUpload(se, ie);
          var ue = o("WAWebLoggerImpl").Logger.getLogs(
            m.shouldUseLightWeightLogs(ie),
            B === K ? 0 : j,
          );
          if (B === K) {
            var ce;
            n("cr:17160") == null ||
              (ce = n("cr:17160").WAWebWindowsGetBridge()) == null ||
              (ce = ce.getDebugFeatures()) == null ||
              ce.sendAdminLogs();
          }
          var de =
              B === K
                ? null
                : n("cr:17160") == null ||
                    (i = n("cr:17160").WAWebWindowsGetBridge()) == null ||
                    (i = i.getDebugFeatures()) == null
                  ? void 0
                  : i.requestNativeLogs(),
            me = yield (q || (q = n("Promise"))).all([ue, de]),
            pe = me[0],
            _e = me[1];
          (r("justknobx")._("7009") ? !r("gkx")("9092") : r("gkx")("26258")) &&
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
          if (G != null) {
            var ye = G();
            if (ye != null) {
              var Ce = new Blob([JSON.stringify(ye)], { type: "text/plain" });
              se.append(
                "secondary_log_files[pathfinder]",
                Ce,
                "pathfinder_trace.json",
              );
            }
          }
          var be = _;
          Q != null &&
            (se.append("bug_id", Q), Y && (be = be.concat("is_reporter")));
          var Le = z != null ? z() : null;
          (Le != null &&
            (se.append("call_id", Le.callId), (be = be.concat(ae(Le)))),
            be.length && se.append("tags", be.join(",")),
            r("isStringNullOrEmpty")(d) || se.append("ticket_id", d));
          var Ee = Re(c),
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
                O ||
                  (O = babelHelpers.taggedTemplateLiteralLoose([
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
        Ce.apply(this, arguments)
      );
    }
    function be() {
      var e =
        o("WAWebRuntimeEnvironmentUtils").isWorker() &&
        !o("WAWebGlobals").areGlobalsReady()
          ? void 0
          : o("WAWebUserPrefsMeUser").getMaybeMeDevicePn();
      return e ? e.toString() : o("WAWebUserPrefsMeUser").getUnknownId();
    }
    function ve(e) {
      var t = e.isHighPri,
        n = new FormData();
      ((!r("gkx")("26258") || t) && n.append("forced", "true"),
        r("gkx")("9092") && n.append("is_internal", "true"),
        n.append("from_jid", be()));
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
    function Se(e) {
      return r("WAWebURLUtils").build(
        o("WAWebCrashlogConstants").CLB_CHECK_URL,
        {
          type: String(e),
          access_token: o("WAWebCrashlogConstants").CLB_TOKEN,
        },
      );
    }
    function Re(e) {
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
    function Le(e, t) {
      return Ee.apply(this, arguments);
    }
    function Ee() {
      return (
        (Ee = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
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
              var l = yield fe({
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
        })),
        Ee.apply(this, arguments)
      );
    }
    function ke() {
      (ce.cancel(), Z.clear());
    }
    ((l.LogType = j),
      (l.SERVER_REQUESTED = K),
      (l.MANUAL_UPLOAD = Q),
      (l.USER_REPORT = X),
      (l.registerCrashlogUploadInformationalLoggingFunction = de),
      (l.registerCrashlogUploadIsUserInExternalBetaFunction = me),
      (l.registerPathfinderTraceCallback = pe),
      (l.registerCrashlogVoipContextCallback = _e),
      (l.upload = fe),
      (l.sendLogs = Le),
      (l.reset = ke));
  },
  98,
);
