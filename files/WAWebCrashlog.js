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
      G = n("$InternalEnum")({ CRASHLOG: "crashlog", SUPPORT: "support" }),
      z = "server-requested",
      j = "manual-upload",
      K = "user-report",
      Q = n("$InternalEnum")({ ONLY_EXCEPTION: "only_exception" }),
      X = 100,
      Y = new Map(),
      J = {
        shouldHitCheckEndpoint: (W = o("WAWebBoolFunc")).returnFalse,
        expectedCodes: [],
        appendToFormDataForCheck: function (t) {},
        appendToFormDataForUpload: function (t, n) {},
        shouldUseLightWeightLogs: W.returnFalse,
      },
      Z = {
        shouldHitCheckEndpoint: W.returnTrue,
        expectedCodes: [200, 403],
        appendToFormDataForCheck: function (t, n) {
          t.append("reason", n);
        },
        appendToFormDataForUpload: function (t, n) {},
        shouldUseLightWeightLogs: W.returnFalse,
      },
      ee = {
        shouldHitCheckEndpoint: W.returnTrue,
        expectedCodes: [200, 403],
        appendToFormDataForCheck: function (t, n) {
          (t.append("support_exception_only_upload", "true"),
            t.append("reason", n));
        },
        appendToFormDataForUpload: function (t, n) {
          n &&
            n.upload === Q.ONLY_EXCEPTION &&
            t.append("exception_only_upload", "true");
        },
        shouldUseLightWeightLogs: function (t) {
          return t ? t.upload === Q.ONLY_EXCEPTION : !1;
        },
      };
    function te(e) {
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
    function ne(e) {
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
    function re(e) {
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
    function oe(e, t, n) {
      return (!r("gkx")("26258") && e) || n ? J : t ? ee : Z;
    }
    var ae = 72e5,
      ie = o("WAThrottle").throttle(de, ae, { trailing: !1 });
    function le(e) {
      U = e;
    }
    function se(e) {
      V = e;
    }
    function ue(e) {
      H = e;
    }
    async function ce(t) {
      var n = t.reason,
        a = n === void 0 ? "reason-unspecified" : n,
        i = t.immediate,
        l = i === void 0 ? !1 : i,
        d = t.logType,
        g = d === void 0 ? G.CRASHLOG : d,
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
      g === G.SUPPORT && (await o("WAWebPriorLogs").printAllPriorLogs());
      var P = E,
        N = V != null && V();
      if (
        (N && (P = P.concat("web-joined-beta")),
        o("WAWebRuntimeEnvironmentUtils").isWorker() &&
          (P = P.concat("service-worker")),
        (P = P.concat(te(T))),
        Y.size <= X)
      ) {
        var M = Y.get(a);
        M ? M.count++ : Y.set(a, { count: 1, uploaded: !1 });
      }
      var w = o("WALogger").SadSendLogsTypes.has(T);
      if (w) {
        P = P.concat("sad");
        try {
          var A,
            F,
            O = ne(T),
            B = new (o("WAWebCrashLogWamEvent").CrashLogWamEvent)({
              crashReason: a,
              crashType: O,
              crashCount:
                (A = (F = Y.get(a)) == null ? void 0 : F.count) != null ? A : 0,
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
            (H.logType = re(T)),
            P.length && (H.logContext = P.join(",")),
            (H.logCount =
              (q = (U = Y.get(a)) == null ? void 0 : U.count) != null ? q : 0),
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
      var j = !w;
      if (
        (R > 0 && R < 1 && (P = P.concat(["sampled", R.toString()])),
        j && r("gkx")("26258")
          ? o("WAWebLoggerUtils").passesSamplingPerUser(R, a, me())
          : o("WAWebLoggerUtils").passesSampling(R))
      ) {
        var K = de;
        if (!y) {
          r("gkx")("26259") && (P = P.concat(["intern"]));
          var Q = Y.get(a);
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
            Y.size >
              o("WAWebCrashlogConstants")
                .UNIQUE_UPLOADS_ALLOWED_BEFORE_THROTTLE &&
              (o("WALogger").LOG(
                p ||
                  (p = babelHelpers.taggedTemplateLiteralLoose([
                    "wa:uploadLogs using throttle",
                  ])),
              ),
              (K = ie)));
        }
        var J = oe(y, b, a === z);
        try {
          var Z = await K({
            isHighPri: y,
            immediate: l,
            logType: g,
            ticketId: v,
            uploadStrategy: J,
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
    async function de(e) {
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
        G = e.fromTimestamp,
        j = e.bugId,
        K = e.isReporter,
        Q = K === void 0 ? !1 : K,
        X = U != null ? U() : { platform: void 0, ref: void 0 };
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
          (t = X.ref) != null ? t : "no conn",
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
          (a = X.platform) != null ? a : "no platform",
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
      var Y;
      if (m.shouldHitCheckEndpoint()) {
        var J = pe({ isHighPri: s });
        m.appendToFormDataForCheck(J, B);
        var Z = _e(c);
        if (
          ((Y = await self.fetch(Z, { method: "POST", body: J })),
          !m.expectedCodes.includes(Y.status))
        ) {
          var ee = "";
          try {
            ee = await Y.text();
          } catch (e) {
            ee = "(failed to read response body)";
          }
          (o("WALogger").LOG(
            $ ||
              ($ = babelHelpers.taggedTemplateLiteralLoose([
                "Crashlog:doUpload code of ",
                " from ",
                " was unexpected, expected values are: ",
                "",
              ])),
            Y.status,
            o("WAWebCrashlogConstants").CLB_CHECK_URL,
            m.expectedCodes.toString(),
          ),
            o("WALogger").LOG(
              P ||
                (P = babelHelpers.taggedTemplateLiteralLoose([
                  "Crashlog:doUpload check response body: ",
                  "",
                ])),
              ee,
            ));
          var te = r("WAWebBrowserInfo")();
          o("WALogger").LOG(
            N ||
              (N = babelHelpers.taggedTemplateLiteralLoose([
                "Crashlog:doUpload check request agent: ",
                "",
              ])),
            o("WAWebCrashlogUserAgent").getLogUserAgent({
              device: te.os,
              browser: te.ua,
              appVersion: o("WAWebBuildConstants").VERSION_BASE,
            }),
          );
          return;
        }
        if (Y.status === 403) {
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
      var ne = null;
      if (Y)
        try {
          var re;
          if (
            ((ne = JSON.parse(await Y.text())),
            ((re = ne) == null || (re = re.config) == null
              ? void 0
              : re.sampling) != null &&
              (ne.config.sampling === 0 ||
                Math.random() * ne.config.sampling > 1))
          ) {
            o("WALogger").LOG(
              A ||
                (A = babelHelpers.taggedTemplateLiteralLoose([
                  "Crashlog:doUpload server configured sampling check w/rate: ",
                  " prevented upload",
                ])),
              ne.config.sampling,
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
      var oe = pe({ isHighPri: s });
      m.appendToFormDataForUpload(oe, ne);
      var ae = o("WAWebLoggerImpl").Logger.getLogs(
        m.shouldUseLightWeightLogs(ne),
        B === z ? 0 : G,
      );
      if (B === z) {
        var ie;
        n("cr:17160") == null ||
          (ie = n("cr:17160").WAWebWindowsGetBridge()) == null ||
          (ie = ie.getDebugFeatures()) == null ||
          ie.sendAdminLogs();
      }
      var le =
          B === z
            ? null
            : n("cr:17160") == null ||
                (i = n("cr:17160").WAWebWindowsGetBridge()) == null ||
                (i = i.getDebugFeatures()) == null
              ? void 0
              : i.requestNativeLogs(),
        se = await Promise.all([ae, le]),
        ue = se[0],
        ce = se[1];
      r("gkx")("26258") &&
        (ue = ue.map(o("WAWebLogLineSanitizer").sanitizeLine));
      var de = ue.join(`
`),
        me = new Blob([de], { type: "text/plain" });
      if ((oe.append("file", me, "logs.txt"), ce != null)) {
        var ge = new Blob([ce], { type: "text/plain" });
        oe.append("secondary_log_files[windows_hybrid]", ge, "native_logs.txt");
      }
      if (H != null) {
        var he = H();
        if (he.length > 0) {
          var ye = new Blob([JSON.stringify(he)], { type: "text/plain" });
          oe.append(
            "secondary_log_files[pathfinder]",
            ye,
            "pathfinder_trace.json",
          );
        }
      }
      var Ce = _;
      (j != null &&
        (oe.append("bug_id", j), Q && (Ce = Ce.concat("is_reporter"))),
        Ce.length && oe.append("tags", Ce.join(",")),
        r("isStringNullOrEmpty")(d) || oe.append("ticket_id", d));
      var be = fe(c),
        ve = await self.fetch(be, { method: "POST", body: oe });
      if (ve.status !== 200) {
        var Se = "";
        try {
          Se = await ve.text();
        } catch (e) {
          Se = "(failed to read response body)";
        }
        throw (
          o("WALogger").LOG(
            O ||
              (O = babelHelpers.taggedTemplateLiteralLoose([
                "Crashlog:doUpload upload response body: ",
                "",
              ])),
            Se,
          ),
          r("err")(
            "Status code of " +
              ve.status +
              " from " +
              be +
              " was unexpected, expected 200",
          )
        );
      }
      return ve.headers.get("X-Uploaded-File-Id");
    }
    function me() {
      var e =
        o("WAWebRuntimeEnvironmentUtils").isWorker() &&
        !o("WAWebGlobals").areGlobalsReady()
          ? void 0
          : o("WAWebUserPrefsMeUser").getMaybeMeDevicePn();
      return e ? e.toString() : o("WAWebUserPrefsMeUser").getUnknownId();
    }
    function pe(e) {
      var t = e.isHighPri,
        n = new FormData();
      ((!r("gkx")("26258") || t) && n.append("forced", "true"),
        o("WAWebABProps").getABPropConfigValue(
          "is_meta_employee_or_internal_tester",
        ) && n.append("is_internal", "true"),
        n.append("from_jid", me()));
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
    function _e(e) {
      return r("WAWebURLUtils").build(
        o("WAWebCrashlogConstants").CLB_CHECK_URL,
        {
          type: String(e),
          access_token: o("WAWebCrashlogConstants").CLB_TOKEN,
        },
      );
    }
    function fe(e) {
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
    async function ge(e, t) {
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
          var i = await ce({
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
    function he() {
      (ie.cancel(), Y.clear());
    }
    ((l.LogType = G),
      (l.SERVER_REQUESTED = z),
      (l.MANUAL_UPLOAD = j),
      (l.USER_REPORT = K),
      (l.registerCrashlogUploadInformationalLoggingFunction = le),
      (l.registerCrashlogUploadIsUserInExternalBetaFunction = se),
      (l.registerPathfinderSnapshotCallback = ue),
      (l.upload = ce),
      (l.sendLogs = ge),
      (l.reset = he));
  },
  98,
);
