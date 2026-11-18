__d(
  "WAWebEmployeeCommandHandoff",
  [
    "WALogger",
    "WARandomHex",
    "WAWebBoolFunc",
    "WAWebEmployeeCommandExtensionTransport",
    "WAWebEmployeeCommandLimits",
    "WAWebEnvironment",
    "WAWebNoop",
    "WAWebSelfReminderGating",
    "WAWebSlashCommandsUsageLogger",
    "getErrorSafe",
    "gkx",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = "wa-employee-command",
      c = "wa_web_employee_command_fetch",
      d = "wa_web_employee_command_data",
      m = "wa_web_employee_command_result",
      p = "wa_web_employee_command_ack",
      _ = "popup,width=480,height=640",
      f = 3e5,
      g = 60 * 1e3,
      h = 600 * 1e3,
      y = new Map(),
      C = null;
    function b(e) {
      return !o("WAWebSelfReminderGating").isSelfReminderEnabled() ||
        r("WAWebEnvironment").isWindows
        ? !1
        : (o(
            "WAWebEmployeeCommandExtensionTransport",
          ).prewarmEmployeeCommandExtension(),
          (e !== "thanks" && o("WAWebBoolFunc").returnFalse()) ||
            o(
              "WAWebEmployeeCommandExtensionTransport",
            ).isEmployeeCommandExtensionReady(e));
    }
    function v(e) {
      return (
        r("gkx")("9092") &&
        o(
          "WAWebEmployeeCommandExtensionTransport",
        ).isEmployeeCommandExtensionReady(e)
      );
    }
    function S(e) {
      var t = e.getData,
        n = e.kind,
        r = e.nonce,
        a = e.onFailure,
        i = e.onResult,
        l = e.startUrl,
        s = e.windowName;
      if (y.has(r)) return !1;
      if (
        o(
          "WAWebEmployeeCommandExtensionTransport",
        ).isEmployeeCommandExtensionReady(n) &&
        k({ getData: t, kind: n, nonce: r, onFailure: a, onResult: i })
      )
        return (
          o("WAWebSlashCommandsUsageLogger").noteHandOffTransport(
            n,
            "extension",
          ),
          !0
        );
      if (n === "thanks" || !o("WAWebBoolFunc").returnFalse()) return !1;
      var u = new URL(l);
      return (
        u.searchParams.set("nonce", r),
        u.searchParams.set("wa_origin", window.location.origin),
        window.open(u.toString(), s, _) == null
          ? !1
          : (T(r, {
              kind: n,
              helper: u.origin,
              getData: t,
              onResult: i,
              onFailure: a,
              fetched: !1,
              timeoutId: window.setTimeout(function () {
                return P(r, "timeout");
              }, f),
            }),
            !0)
      );
    }
    function R(e) {
      var t = e.kind,
        n = e.nonce,
        o = e.onResult;
      T(n, {
        kind: t,
        helper: null,
        getData: null,
        onResult: o,
        onFailure: r("WAWebNoop"),
        fetched: !0,
        timeoutId: window.setTimeout(function () {
          return w(n);
        }, h),
      });
    }
    function L() {
      return o("WARandomHex").randomHex(16).toLowerCase();
    }
    function E() {
      var e;
      (o(
        "WAWebEmployeeCommandExtensionTransport",
      ).resetEmployeeCommandExtensionForTesting(),
        y.forEach(function (e) {
          var t = e.timeoutId;
          return window.clearTimeout(t);
        }),
        y.clear(),
        (e = C) == null || e.close(),
        (C = null));
    }
    function k(t) {
      var n = t.getData,
        a = t.kind,
        i = t.nonce,
        l = t.onFailure,
        s = t.onResult,
        u;
      try {
        u = n();
      } catch (t) {
        return (
          o("WALogger")
            .ERROR(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "[slash_commands] hand-off data for ",
                  " failed",
                ])),
              a,
            )
            .catching(r("getErrorSafe")(t))
            .sendLogs("employee-command-handoff-data-failed"),
          l("create_error", !1),
          !0
        );
      }
      var c = I(a, u);
      return c == null
        ? !1
        : (o("WAWebEmployeeCommandExtensionTransport")
            .runInEmployeeCommandExtension(a, i, c)
            .then(function (e) {
              e.ok &&
              o("WAWebEmployeeCommandLimits").isValidHandoffRef(a, e.ref)
                ? s(e.ref)
                : !e.ok && e.error === "timeout"
                  ? l("timeout", !1)
                  : l(e.ok ? "invalid_input" : M(e.error), !1);
            }),
          !0);
    }
    function I(e, t) {
      var n, r;
      if (e !== "thanks") return t;
      var o = ((n = t.phones) != null ? n : "").split(",").filter(function (e) {
        return e !== "";
      });
      return o.length === 1
        ? { phone: o[0], text: (r = t.text) != null ? r : "" }
        : null;
    }
    function T(e, t) {
      (y.set(e, t),
        C == null && ((C = new BroadcastChannel(u)), (C.onmessage = D)));
    }
    function D(e) {
      var t = e.data;
      if (
        !(
          e.origin !== window.location.origin ||
          t == null ||
          typeof t != "object"
        )
      ) {
        var n = t.kind,
          r = t.message,
          o = t.nonce,
          a = typeof o == "string" ? y.get(o) : null;
        a == null ||
          typeof o != "string" ||
          n !== a.kind ||
          (r === c
            ? x(o, a)
            : r === m && a.fetched
              ? $(o, a, t.ref, t.error)
              : r === m && t.error && $(o, a, null, t.error));
      }
    }
    function x(e, t) {
      var n = t.getData,
        a = t.helper,
        i = t.kind;
      if (!(n == null || a == null || t.fetched)) {
        var l;
        try {
          l = n();
        } catch (t) {
          (o("WALogger")
            .ERROR(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
                  "[slash_commands] hand-off data for ",
                  " failed",
                ])),
              i,
            )
            .catching(r("getErrorSafe")(t))
            .sendLogs("employee-command-handoff-data-failed"),
            P(e, "create_error"));
          return;
        }
        ((t.fetched = !0),
          window.clearTimeout(t.timeoutId),
          (t.timeoutId = window.setTimeout(function () {
            return P(e, "timeout");
          }, g)),
          N({ message: d, kind: i, nonce: e, helper: a, data: l }));
      }
    }
    function $(e, t, n, r) {
      if (
        typeof n == "string" &&
        o("WAWebEmployeeCommandLimits").isValidHandoffRef(t.kind, n)
      ) {
        (N({ message: p, nonce: e, ok: !0 }), w(e), t.onResult(n));
        return;
      }
      (N({ message: p, nonce: e, ok: !1 }),
        w(e),
        t.onFailure(typeof n == "string" ? "invalid_input" : M(r), !1));
    }
    function P(e, t) {
      var n = y.get(e);
      (w(e), n == null || n.onFailure(t, !1));
    }
    function N(e) {
      var t;
      (t = C) == null || t.postMessage(e);
    }
    function M(e) {
      return e === "state_mismatch"
        ? "state_mismatch"
        : e === "expired"
          ? "expired"
          : e === "invalid_input"
            ? "invalid_input"
            : e === "rate_limited"
              ? "rate_limited"
              : e === "disabled"
                ? "disabled"
                : e === "not_employee"
                  ? "not_employee"
                  : e === "duplicate"
                    ? "duplicate"
                    : e === "in_progress"
                      ? "in_progress"
                      : e === "no_recipients"
                        ? "no_recipients"
                        : "create_error";
    }
    function w(e) {
      var t = y.get(e);
      if (
        (t != null && window.clearTimeout(t.timeoutId),
        y.delete(e),
        y.size === 0)
      ) {
        var n;
        ((n = C) == null || n.close(), (C = null));
      }
    }
    ((l.canHandOff = b),
      (l.canOfferHandoff = v),
      (l.startHandoff = S),
      (l.awaitHandoffLink = R),
      (l.createHandoffNonce = L),
      (l.resetHandoffsForTesting = E));
  },
  98,
);
