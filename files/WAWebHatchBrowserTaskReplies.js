__d(
  "WAWebHatchBrowserTaskReplies",
  ["WAWebHatchJsonReaders"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = Object.freeze({ body: null, statusCode: -1 }),
      s = 200,
      u = 409,
      c = 503,
      d = new Set([400, 404, 410]),
      m = new Set([
        "browser_stop_outcome_unconfirmed",
        "browser_stop_owner_settling",
        "browser_stop_cleanup_pending",
        "browser_stop_projection_settling",
      ]),
      p = "invalid_state",
      _ = "target_binding_unavailable",
      f = "user",
      g = Object.freeze({ kind: "retry" }),
      h = Object.freeze({ kind: "heldByOther" }),
      y = Object.freeze({ kind: "notControllable" });
    function C(e, t) {
      var n = E(t.body);
      return d.has(t.statusCode)
        ? "gone"
        : t.statusCode === s && (n == null ? void 0 : n.ok) === !0
          ? o("WAWebHatchJsonReaders").readStringOrEmpty(
              n.result,
              "presented_task_id",
            ) === e
            ? "presented"
            : "retry"
          : (n == null ? void 0 : n.errorRetryable) === !1
            ? "previewRevoked"
            : "retry";
    }
    function b(e, t, n, r) {
      if (d.has(t.statusCode)) return y;
      var a = E(t.body);
      return t.statusCode === u
        ? v(a == null ? void 0 : a.errorCode, r)
        : t.statusCode !== s || (a == null ? void 0 : a.ok) !== !0
          ? g
          : S(e, o("WAWebHatchJsonReaders").readField(a.result, "lease"), n);
    }
    function v(e, t) {
      return e === p ? y : e === _ ? (t ? y : g) : h;
    }
    function S(e, t, n) {
      var r;
      if (!o("WAWebHatchJsonReaders").isObject(t)) return g;
      var a = o("WAWebHatchJsonReaders").readStringOrEmpty(t, "task_id").trim(),
        i =
          (r = o("WAWebHatchJsonReaders").readNumber(
            t,
            "control_expires_at_ms",
          )) != null
            ? r
            : 0;
      return a === "" || i <= 0
        ? g
        : o("WAWebHatchJsonReaders")
              .readStringOrEmpty(t, "control_owner")
              .trim() !== f || a !== e
          ? h
          : i > n
            ? { kind: "granted", lease: { browserTaskID: a, expiresAtMs: i } }
            : g;
    }
    function R(e) {
      var t = E(e.body);
      if (
        e.statusCode === u ||
        d.has(e.statusCode) ||
        (e.statusCode === s && (t == null ? void 0 : t.ok) === !0)
      )
        return "stopped";
      var n = t == null ? void 0 : t.errorCode;
      return e.statusCode === c && n != null && m.has(n)
        ? "notSettled"
        : "failed";
    }
    function L(e) {
      return (e.statusCode >= 200 && e.statusCode < 300) || d.has(e.statusCode);
    }
    function E(e) {
      var t, n;
      if (e == null) return null;
      var r;
      try {
        r = JSON.parse(new TextDecoder().decode(e));
      } catch (e) {
        return null;
      }
      if (!o("WAWebHatchJsonReaders").isObject(r)) return null;
      var a = o("WAWebHatchJsonReaders").readField(r, "error");
      return {
        errorCode:
          (t = o("WAWebHatchJsonReaders").readString(a, "code")) == null
            ? void 0
            : t.trim().toLowerCase(),
        errorRetryable: o("WAWebHatchJsonReaders").readBool(a, "retryable"),
        ok: (n = o("WAWebHatchJsonReaders").readBool(r, "ok")) != null ? n : !0,
        result: o("WAWebHatchJsonReaders").readField(r, "result"),
      };
    }
    ((l.BROWSER_TASK_TRANSPORT_FAILURE = e),
      (l.readPresentReply = C),
      (l.readControlReply = b),
      (l.readStopReply = R),
      (l.isReleased = L));
  },
  98,
);
