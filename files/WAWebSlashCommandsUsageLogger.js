__d(
  "WAWebSlashCommandsUsageLogger",
  [
    "Promise",
    "WALogger",
    "WAWebEmployeeCommandExtensionTransport",
    "WAWebEnvironment",
    "WAWebSelfReminderGating",
    "WAWebUA",
    "WAWebUserPrefsIndexedDBStorage",
    "WAWebUserUtils",
    "WaWebEmployeeSlashCommandFalcoEvent",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c,
      d = new Set([
        "remindus",
        "delay",
        "remindme",
        "fileavc",
        "fileawavc",
        "thanks",
        "fileatask",
      ]),
      m = "WASlashCommandUsageDays",
      p = 1200 * 1e3,
      _ = 2e3,
      f = { task: "fileatask", thanks: "thanks", vc: "fileavc" },
      g = new Set(Object.values(f)),
      h = [
        [1e3, "under_1s"],
        [3e3, "under_3s"],
        [1e4, "under_10s"],
        [3e4, "under_30s"],
        [6e4, "under_1m"],
        [3e5, "under_5m"],
      ],
      y = [],
      C = (c || (c = n("Promise"))).resolve();
    function b(t) {
      var n,
        a,
        i = (n = t.command) != null ? n : "none",
        l = i === "none" || d.has(i);
      if (!(!l || !o("WAWebSelfReminderGating").isSelfReminderEnabled())) {
        var s =
            t.prefilled != null
              ? t.action + ":" + i + ":" + t.prefilled
              : t.action + ":" + i,
          u = (a = t.transport) != null ? a : x(t),
          c = F();
        B(s)
          .catch(function (t) {
            return (
              o("WALogger")
                .ERROR(
                  e ||
                    (e = babelHelpers.taggedTemplateLiteralLoose([
                      "[slash_commands] usage marks unavailable",
                    ])),
                )
                .catching(r("getErrorSafe")(t))
                .sendLogs("slash-command-usage-marks-failed"),
              null
            );
          })
          .then(function (e) {
            e != null &&
              r("WaWebEmployeeSlashCommandFalcoEvent").log(function () {
                return babelHelpers.extends({}, c, {
                  action: t.action,
                  command: i,
                  is_first_today: e.isFirstToday,
                  is_first_ever: e.isFirstEver,
                  trigger: t.trigger,
                  prefilled: t.prefilled,
                  handback: t.handback,
                  fallback_reason: t.fallbackReason,
                  failure_reason: t.failureReason,
                  transport: u,
                  latency: t.latency,
                  fallback_kind: t.fallbackKind,
                  dismiss_reason: t.dismissReason,
                });
              });
          });
      }
    }
    function v(e, t) {
      try {
        b({
          action: e,
          command: o("WAWebUserUtils").isMeAccount(t.id)
            ? "remindme"
            : "remindus",
          chat: t,
        });
      } catch (e) {
        o("WALogger")
          .ERROR(
            s ||
              (s = babelHelpers.taggedTemplateLiteralLoose([
                "[slash_commands] reminder usage not logged",
              ])),
          )
          .catching(r("getErrorSafe")(e))
          .sendLogs("slash-command-reminder-usage-failed");
      }
    }
    function S(e, t, n, r) {
      r === void 0 && (r = "popup");
      try {
        y = [].concat(
          y.filter(function (n) {
            return n.command !== e || !n.chat.id.equals(t.id);
          }),
          [
            {
              command: e,
              chat: t,
              prefilled: n,
              transport: r,
              startedAt: Date.now(),
              until: Date.now() + p,
            },
          ],
        );
      } catch (e) {
        D(e);
      }
    }
    function R(e, t) {
      var n = f[e],
        r = y.filter(function (e) {
          return e.command === n;
        }),
        o = r[r.length - 1];
      o != null &&
        (y = y.map(function (e) {
          return e === o ? babelHelpers.extends({}, o, { transport: t }) : e;
        }));
    }
    function L(e, t) {
      try {
        b({ action: "fallback_open", command: e, chat: t });
      } catch (e) {
        D(e);
      }
    }
    function E(e) {
      T("fileatask", e);
    }
    function k(e) {
      T("thanks", e);
    }
    function I(e) {
      T("fileavc", e);
    }
    function T(e, t) {
      try {
        var n = t.chat,
          r = Date.now();
        y = y.filter(function (e) {
          return e.until >= r;
        });
        var o = y.find(function (t) {
            return t.command === e && t.chat.id.equals(n.id);
          }),
          a = {
            command: e,
            chat: n,
            prefilled: o == null ? void 0 : o.prefilled,
            transport: o == null ? void 0 : o.transport,
            latency: o != null ? $(r - o.startedAt) : void 0,
          };
        t.outcome != null
          ? ((y = y.filter(function (e) {
              return e !== o;
            })),
            b(
              babelHelpers.extends({}, a, {
                action: "command_followup_done",
                handback: t.outcome,
              }),
            ))
          : b(
              babelHelpers.extends({}, a, {
                action: "command_fallback",
                fallbackReason: t.fallbackReason,
                fallbackKind: P(t.fallbackReason, t.fallbackOpened === !0),
              }),
            );
      } catch (e) {
        D(e);
      }
    }
    function D(e) {
      o("WALogger")
        .ERROR(
          u ||
            (u = babelHelpers.taggedTemplateLiteralLoose([
              "[slash_commands] hand-back logging failed",
            ])),
        )
        .catching(r("getErrorSafe")(e))
        .sendLogs("slash-command-hand-back-logging-failed");
    }
    function x(e) {
      var t = e.chat,
        n = e.command;
      if (
        !(
          e.action !== "command_done" ||
          t == null ||
          !g.has(n != null ? n : "")
        )
      ) {
        var r = y.find(function (e) {
          return e.command === n && e.chat.id.equals(t.id);
        });
        return r != null && Date.now() - r.startedAt < _
          ? r.transport
          : "prefilled_page";
      }
    }
    function $(e) {
      var t, n;
      return (t =
        (n = h.find(function (t) {
          var n = t[0];
          return e < n;
        })) == null
          ? void 0
          : n[1]) != null
        ? t
        : "over_5m";
    }
    function P(e, t) {
      return e === "timeout"
        ? "check_first"
        : t
          ? "tab_opened"
          : "open_offered";
    }
    var N = {
        chrome: "chrome",
        edge: "edge",
        firefox: "firefox",
        safari: "safari",
      },
      M = { "mac os": "mac", windows: "windows", "chromium os": "chromeos" },
      w = { prod: "web", intern: "dev_web", dev: "dev_build" },
      A = { web: "browser_tab", pwa: "pwa", win_hybrid: "windows_app" };
    function F() {
      var e,
        t = parseInt(o("WAWebUA").UA.browserVersion, 10);
      return {
        browser: (e = N[o("WAWebUA").UA.browser]) != null ? e : "other",
        browser_major: t > 0 ? String(t) : null,
        os: O(),
        client_tier: w[r("WAWebEnvironment").getEnvironment()],
        app_shell: A[r("WAWebEnvironment").getSubPlatform()],
        extension_state: o(
          "WAWebEmployeeCommandExtensionTransport",
        ).getEmployeeCommandExtensionState(),
      };
    }
    function O() {
      var e = M[o("WAWebUA").UA.os];
      return e != null
        ? e
        : o("WAWebUA").UA.os !== "android" &&
            /\blinux\b/i.test(o("WAWebUA").UA.parser.getUA())
          ? "linux"
          : "other";
    }
    function B(e) {
      var t = C.then(
        n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var t;
          yield o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.init();
          var n =
              (t = o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.get(m)) !=
              null
                ? t
                : {},
            r = W(new Date()),
            a = n[e];
          if (a !== r) {
            var i;
            yield o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.set(
              m,
              babelHelpers.extends({}, n, ((i = {}), (i[e] = r), i)),
            );
          }
          return { isFirstToday: a !== r, isFirstEver: a == null };
        }),
      );
      return ((C = t.catch(function () {})), t);
    }
    function W(e) {
      var t = String(e.getMonth() + 1).padStart(2, "0"),
        n = String(e.getDate()).padStart(2, "0");
      return e.getFullYear() + "-" + t + "-" + n;
    }
    ((l.LOGGED_COMMAND_NAMES = d),
      (l.logSlashCommandUsage = b),
      (l.logReminderUsage = v),
      (l.expectHandBack = S),
      (l.noteHandOffTransport = R),
      (l.logFallbackOpen = L),
      (l.logFileTaskResult = E),
      (l.logThanksResult = k),
      (l.logFileAVCResult = I));
  },
  98,
);
