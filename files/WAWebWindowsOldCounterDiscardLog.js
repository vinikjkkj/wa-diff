__d(
  "WAWebWindowsOldCounterDiscardLog",
  [
    "WAComms",
    "WALogger",
    "WAShiftTimer",
    "WAWebBackendEventBus",
    "WAWebBackendJobs.flow",
    "WAWebCommsGating",
    "WAWebHandleMsgTypes",
    "WAWebProtobufsWa6.pb",
    "WAWebSocketConstants",
    "WAWebWindowsBackgroundRun",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c,
      d,
      m,
      p = "windows-old-counter-discard",
      _ = 12e4,
      f = 50,
      g = 500,
      h = 1e3,
      y = 5e3,
      C = 0,
      b = "unknown",
      v = new Map(),
      S = new Map(),
      R = new Map(),
      L = 0,
      E = 0,
      k = "idle",
      I = null,
      T = new (o("WAShiftTimer").ShiftTimer)(function () {
        return W("timer");
      }),
      D = new (o("WAShiftTimer").ShiftTimer)(function () {
        return W("run_socket_closed");
      });
    function x(t, n, r) {
      try {
        if (k === "sent") return;
        if (
          n ===
          o("WAWebHandleMsgTypes").E2EProcessResult.SIGNAL_OLD_COUNTER_ERROR
        )
          N(t);
        else if (
          n === o("WAWebHandleMsgTypes").E2EProcessResult.SUCCESS &&
          v.size > 0
        ) {
          var a, i;
          M(
            t,
            (a = (i = r[0]) == null ? void 0 : i.retryCount) != null ? a : 0,
          );
        }
      } catch (t) {
        o("WALogger").WARN(
          e ||
            (e = babelHelpers.taggedTemplateLiteralLoose([
              "[windows-old-counter] decrypt result not recorded",
            ])),
        );
      }
    }
    function $(e) {
      try {
        if (k === "sent") return;
        var t = o(
          "WAWebWindowsBackgroundRun",
        ).getWindowsBackgroundRunLogContext();
        if (e.enc.retryCount < 1 && !t.loadedForRun) return;
        (F(t), w(e, t));
      } catch (e) {
        o("WALogger").WARN(
          s ||
            (s = babelHelpers.taggedTemplateLiteralLoose([
              "[windows-old-counter] discard not recorded",
            ])),
        );
      }
    }
    function P(e) {
      return e.externalId + " " + String(e.chat) + " " + String(e.author);
    }
    function N(e) {
      if (S.size >= g) {
        var t = S.keys().next().value;
        t != null && S.delete(t);
      }
      var n = q();
      (S.set(P(e), n), U(n));
    }
    function M(e, t) {
      var n = v.get(P(e));
      if (!(n == null || n.isDecrypted)) {
        ((n.isDecrypted = !0), E++);
        var r = V(Date.now() - n.discardedAtMs);
        o("WALogger").WARN(
          u ||
            (u = babelHelpers.taggedTemplateLiteralLoose([
              "[windows-old-counter] decrypted id=",
              " retry=",
              " after_s=",
              "",
            ])),
          n.msgId,
          t,
          r,
        );
      }
    }
    function w(e, t) {
      var n = e.enc,
        r = e.msgInfo;
      L++;
      var a = P(r),
        i = A(a),
        l = i.conn,
        s = i.newerConn;
      if (!v.has(a)) {
        if (v.size >= f) return;
        v.set(a, {
          discardedAtMs: Date.now(),
          isDecrypted: !1,
          msgId: r.externalId,
        });
      }
      var u = r.offline != null ? "offline" : "live",
        d = V(self.performance.now()),
        m = t.lastLoginAgeMs == null ? "none" : V(t.lastLoginAgeMs),
        p = t.lastLoginReason == null ? "none" : H(t.lastLoginReason, z);
      o("WALogger").WARN(
        c ||
          (c = babelHelpers.taggedTemplateLiteralLoose([
            "[windows-old-counter] discard id=",
            " e2e=",
            " retry=",
            " path=",
            " page_age_s=",
            " run_page=",
            " run_ended=",
            " logins=",
            " last_login_age_s=",
            " last_login_reason=",
            " conn=",
            " newer_conn=",
            " comms_in_worker=",
            "",
          ])),
        r.externalId,
        H(n.e2eType, G),
        n.retryCount,
        u,
        d,
        String(t.loadedForRun),
        String(t.runEnded),
        t.loginCount,
        m,
        p,
        l,
        s,
        String(o("WAWebCommsGating").isCommsInWorker()),
      );
    }
    function A(e) {
      var t = S.get(e);
      S.delete(e);
      var n = t == null ? null : U(t),
        r = U(q());
      if (n == null) return { conn: b, newerConn: b };
      var o = n !== C && r > n;
      return { conn: n, newerConn: o ? "true" : "false" };
    }
    function F(e) {
      var t;
      k === "idle" &&
        ((k = "scheduled"),
        T.onOrBefore(_),
        !(!e.loadedForRun || e.runEnded) &&
          ((I = o("WAWebWindowsBackgroundRun").onWindowsBackgroundRunEnd(
            function () {
              return W("run_end");
            },
          )),
          o("WAWebBackendEventBus").BackendEventBus.onSocketStreamDisconnected(
            O,
          ),
          o("WAWebBackendEventBus").BackendEventBus.onSetSocketState(B),
          ((t = o("WAComms").getComms()) == null
            ? void 0
            : t.isSocketConnected()) === !1 && O()));
    }
    function O() {
      o("WAWebBackendEventBus").BackendEventBus.isOfflineDeliveryEnd &&
        D.onOrBefore(y);
    }
    function B(e) {
      e === o("WAWebSocketConstants").SOCKET_STATE.CONNECTED && D.cancel();
    }
    function W(e) {
      try {
        if (k !== "scheduled") return;
        ((k = "sent"),
          T.cancel(),
          D.cancel(),
          I == null || I(),
          (I = null),
          o("WAWebBackendEventBus").BackendEventBus.off(
            "socket_stream_disconnected",
            O,
          ),
          o("WAWebBackendEventBus").BackendEventBus.off("set_socket_state", B));
        var t = v.size - E;
        (o("WALogger")
          .WARN(
            d ||
              (d = babelHelpers.taggedTemplateLiteralLoose([
                "[windows-old-counter] upload trigger=",
                " discards=",
                " messages=",
                " later_decrypted=",
                " unresolved=",
                "",
              ])),
            e,
            L,
            v.size,
            E,
            t,
          )
          .sendLogs(p, { skipFBLoggerReporting: !0 }),
          v.clear(),
          S.clear());
      } catch (e) {
        o("WALogger").WARN(
          m ||
            (m = babelHelpers.taggedTemplateLiteralLoose([
              "[windows-old-counter] upload not sent",
            ])),
        );
      }
    }
    function q() {
      var e, t;
      return (e =
        (t = o("WAComms").getComms()) == null ? void 0 : t.socketId) != null
        ? e
        : o("WAComms").toSocketId(0);
    }
    function U(e) {
      if (e === o("WAComms").toSocketId(0)) return C;
      var t = R.get(e);
      if (t != null) return t;
      var n = R.size + 1;
      return (R.set(e, n), n);
    }
    function V(e) {
      return Math.round(e / h);
    }
    function H(e, t) {
      try {
        return t(e);
      } catch (e) {
        return "OTHER";
      }
    }
    function G(e) {
      return e === o("WAWebBackendJobs.flow").CiphertextType.Msg
        ? "MSG"
        : e === o("WAWebBackendJobs.flow").CiphertextType.Pkmsg
          ? "PKMSG"
          : e === o("WAWebBackendJobs.flow").CiphertextType.Skmsg
            ? "SKMSG"
            : e === o("WAWebBackendJobs.flow").CiphertextType.Msmsg
              ? "MSMSG"
              : (function () {
                  throw Error(
                    "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                      e,
                  );
                })();
    }
    function z(e) {
      return e === o("WAWebProtobufsWa6.pb").ClientPayload$ConnectReason.PUSH
        ? "PUSH"
        : e ===
            o("WAWebProtobufsWa6.pb").ClientPayload$ConnectReason.USER_ACTIVATED
          ? "USER_ACTIVATED"
          : e ===
              o("WAWebProtobufsWa6.pb").ClientPayload$ConnectReason.SCHEDULED
            ? "SCHEDULED"
            : e ===
                o("WAWebProtobufsWa6.pb").ClientPayload$ConnectReason
                  .ERROR_RECONNECT
              ? "ERROR_RECONNECT"
              : e ===
                  o("WAWebProtobufsWa6.pb").ClientPayload$ConnectReason
                    .NETWORK_SWITCH
                ? "NETWORK_SWITCH"
                : e ===
                    o("WAWebProtobufsWa6.pb").ClientPayload$ConnectReason
                      .PING_RECONNECT
                  ? "PING_RECONNECT"
                  : e ===
                      o("WAWebProtobufsWa6.pb").ClientPayload$ConnectReason
                        .UNKNOWN
                    ? "UNKNOWN"
                    : (function () {
                        throw Error(
                          "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                            e,
                        );
                      })();
    }
    ((l.noteWindowsDecryptResult = x), (l.noteWindowsOldCounterDiscard = $));
  },
  98,
);
