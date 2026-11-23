__d(
  "WAWebSlashCommandsUsageLogger",
  [
    "WALogger",
    "WAWebEmployeeCommandExtensionTransport",
    "WAWebEnvironment",
    "WAWebSelfReminderGating",
    "WAWebUA",
    "WAWebUserPrefsIndexedDBStorage",
    "WAWebUserUtils",
    "WaWebEmployeeSlashCommandFalcoEvent",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c = new Set([
        "remindus",
        "delay",
        "remindme",
        "fileavc",
        "fileawavc",
        "thanks",
        "fileatask",
      ]),
      d = "WASlashCommandUsageDays",
      m = 1200 * 1e3,
      p = 2e3,
      _ = { task: "fileatask", thanks: "thanks", vc: "fileavc" },
      f = new Set(Object.values(_)),
      g = [
        [1e3, "under_1s"],
        [3e3, "under_3s"],
        [1e4, "under_10s"],
        [3e4, "under_30s"],
        [6e4, "under_1m"],
        [3e5, "under_5m"],
      ],
      h = [],
      y = Promise.resolve();
    function C(t) {
      var n,
        a,
        i = (n = t.command) != null ? n : "none",
        l = i === "none" || c.has(i);
      if (!(!l || !o("WAWebSelfReminderGating").isSelfReminderEnabled())) {
        var s =
            t.prefilled != null
              ? t.action + ":" + i + ":" + t.prefilled
              : t.action + ":" + i,
          u = (a = t.transport) != null ? a : D(t),
          d = A();
        O(s)
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
                return babelHelpers.extends({}, d, {
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
    function b(e, t) {
      try {
        C({
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
    function v(e, t, n, r) {
      r === void 0 && (r = "popup");
      try {
        h = [].concat(
          h.filter(function (n) {
            return n.command !== e || !n.chat.id.equals(t.id);
          }),
          [
            {
              command: e,
              chat: t,
              prefilled: n,
              transport: r,
              startedAt: Date.now(),
              until: Date.now() + m,
            },
          ],
        );
      } catch (e) {
        T(e);
      }
    }
    function S(e, t) {
      var n = _[e],
        r = h.filter(function (e) {
          return e.command === n;
        }),
        o = r[r.length - 1];
      o != null &&
        (h = h.map(function (e) {
          return e === o ? babelHelpers.extends({}, o, { transport: t }) : e;
        }));
    }
    function R(e, t) {
      try {
        C({ action: "fallback_open", command: e, chat: t });
      } catch (e) {
        T(e);
      }
    }
    function L(e) {
      I("fileatask", e);
    }
    function E(e) {
      I("thanks", e);
    }
    function k(e) {
      I("fileavc", e);
    }
    function I(e, t) {
      try {
        var n = t.chat,
          r = Date.now();
        h = h.filter(function (e) {
          return e.until >= r;
        });
        var o = h.find(function (t) {
            return t.command === e && t.chat.id.equals(n.id);
          }),
          a = {
            command: e,
            chat: n,
            prefilled: o == null ? void 0 : o.prefilled,
            transport: o == null ? void 0 : o.transport,
            latency: o != null ? x(r - o.startedAt) : void 0,
          };
        t.outcome != null
          ? ((h = h.filter(function (e) {
              return e !== o;
            })),
            C(
              babelHelpers.extends({}, a, {
                action: "command_followup_done",
                handback: t.outcome,
              }),
            ))
          : C(
              babelHelpers.extends({}, a, {
                action: "command_fallback",
                fallbackReason: t.fallbackReason,
                fallbackKind: $(t.fallbackReason, t.fallbackOpened === !0),
              }),
            );
      } catch (e) {
        T(e);
      }
    }
    function T(e) {
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
    function D(e) {
      var t = e.chat,
        n = e.command;
      if (
        !(
          e.action !== "command_done" ||
          t == null ||
          !f.has(n != null ? n : "")
        )
      ) {
        var r = h.find(function (e) {
          return e.command === n && e.chat.id.equals(t.id);
        });
        return r != null && Date.now() - r.startedAt < p
          ? r.transport
          : "prefilled_page";
      }
    }
    function x(e) {
      var t, n;
      return (t =
        (n = g.find(function (t) {
          var n = t[0];
          return e < n;
        })) == null
          ? void 0
          : n[1]) != null
        ? t
        : "over_5m";
    }
    function $(e, t) {
      return e === "timeout"
        ? "check_first"
        : t
          ? "tab_opened"
          : "open_offered";
    }
    var P = {
        chrome: "chrome",
        edge: "edge",
        firefox: "firefox",
        safari: "safari",
      },
      N = { "mac os": "mac", windows: "windows", "chromium os": "chromeos" },
      M = { prod: "web", intern: "dev_web", dev: "dev_build" },
      w = { web: "browser_tab", pwa: "pwa", win_hybrid: "windows_app" };
    function A() {
      var e,
        t = parseInt(o("WAWebUA").UA.browserVersion, 10);
      return {
        browser: (e = P[o("WAWebUA").UA.browser]) != null ? e : "other",
        browser_major: t > 0 ? String(t) : null,
        os: F(),
        client_tier: M[r("WAWebEnvironment").getEnvironment()],
        app_shell: w[r("WAWebEnvironment").getSubPlatform()],
        extension_state: o(
          "WAWebEmployeeCommandExtensionTransport",
        ).getEmployeeCommandExtensionState(),
      };
    }
    function F() {
      var e = N[o("WAWebUA").UA.os];
      return e != null
        ? e
        : o("WAWebUA").UA.os !== "android" &&
            /\blinux\b/i.test(o("WAWebUA").UA.parser.getUA())
          ? "linux"
          : "other";
    }
    function O(e) {
      var t = y.then(async function () {
        var t;
        await o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.init();
        var n =
            (t = o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.get(d)) !=
            null
              ? t
              : {},
          r = B(new Date()),
          a = n[e];
        if (a !== r) {
          var i;
          await o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.set(
            d,
            babelHelpers.extends({}, n, ((i = {}), (i[e] = r), i)),
          );
        }
        return { isFirstToday: a !== r, isFirstEver: a == null };
      });
      return ((y = t.catch(function () {})), t);
    }
    function B(e) {
      var t = String(e.getMonth() + 1).padStart(2, "0"),
        n = String(e.getDate()).padStart(2, "0");
      return e.getFullYear() + "-" + t + "-" + n;
    }
    ((l.LOGGED_COMMAND_NAMES = c),
      (l.logSlashCommandUsage = C),
      (l.logReminderUsage = b),
      (l.expectHandBack = v),
      (l.noteHandOffTransport = S),
      (l.logFallbackOpen = R),
      (l.logFileTaskResult = L),
      (l.logThanksResult = E),
      (l.logFileAVCResult = k));
  },
  98,
);
