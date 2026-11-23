__d(
  "WAWebSwCallPushNotification",
  [
    "WALogger",
    "WAWebApiContact",
    "WAWebInitializeWorkerBackendSw",
    "WAWebNotificationWorkerBackend",
    "WAWebSWBusActions",
    "WAWebSwCallNotificationTag",
    "WAWebSwWindowClients",
    "WAWebUserPrefsGeneral",
    "WAWebVoipClosedTabCallRings",
    "WAWebWidFactory",
    "getErrorSafe",
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
      L = new Set(),
      E = new Map(),
      k = "missed_",
      I = new Set(["relay_bind_failed", "timeout"]),
      T = 10,
      D = 120,
      x = 90 * 1e3,
      $ = 300 * 1e3,
      P = 2e3,
      N = 60,
      M = 600 * 1e3;
    function w(e) {
      if (e == null || typeof e != "object") return null;
      var t = e.call_id,
        n = e.call_terminate_reason,
        r = e.from_device_jid,
        o = e.from_pn,
        a = e.from_username,
        i = e.nt,
        l = e.offer_push_timeout_sec,
        s = e.offer_ts_sec,
        u = e.video_call;
      return i === "call_terminate"
        ? { nt: i, call_id: ie(t), call_terminate_reason: ie(n) }
        : i === "voip_call_offer_1on1" || i === "voip_call_offer_group"
          ? {
              nt: i,
              call_id: ie(t),
              from_device_jid: ie(r),
              from_pn: ie(o),
              from_username: ie(a),
              offer_push_timeout_sec: ie(l),
              offer_ts_sec: ie(s),
              video_call: ie(u),
            }
          : null;
    }
    function A(e, t) {
      var n;
      t === void 0 && (t = Date.now());
      var r = ae(e.offer_ts_sec);
      if (r == null) return !1;
      var o = Math.min((n = ae(e.offer_push_timeout_sec)) != null ? n : T, D),
        a = r + o + N;
      return t > a * 1e3;
    }
    function F(e, t) {
      var n;
      t === void 0 && (t = Date.now());
      var r = e.call_id;
      if (r == null) return !1;
      var o = (n = E.get(r)) == null ? void 0 : n.endedAtMs;
      if (o == null) return !1;
      var a = ae(e.offer_ts_sec);
      return a == null ? t - o < M : a * 1e3 <= o + N * 1e3;
    }
    function O(e, t, n) {
      n === void 0 && (n = Date.now());
      for (var r of E) {
        var o = r[0],
          a = r[1].endedAtMs;
        n - a >= M && E.delete(o);
      }
      E.set(e, { endedAtMs: n, unanswered: t });
    }
    function B(e) {
      var t = e.call_id;
      return t == null
        ? null
        : L.has(t)
          ? "main thread handling"
          : F(e)
            ? "call already ended"
            : null;
    }
    async function W(t) {
      var n,
        r,
        a = Date.now(),
        i = t.call_id,
        l = B(t);
      if (l != null) {
        o("WALogger").LOG(
          e ||
            (e = babelHelpers.taggedTemplateLiteralLoose([
              "[PushNotif] skip call notif - ",
              " ",
              "",
            ])),
          l,
          i != null ? i : "unknown",
        );
        return;
      }
      if (A(t)) {
        o("WALogger").LOG(
          s ||
            (s = babelHelpers.taggedTemplateLiteralLoose([
              "[PushNotif] skip call notif - offer push expired ",
              "",
            ])),
          i != null ? i : "unknown",
        );
        return;
      }
      var p = await o("WAWebUserPrefsGeneral").getOfflineNotificationContent(),
        _ = t.video_call === "1",
        f = K(
          t,
          (n = p == null ? void 0 : p.callNotificationUnknownCaller) != null
            ? n
            : "Unknown",
        ),
        g = f.name,
        h = f.source,
        y =
          i != null
            ? "" +
              o("WAWebSwCallNotificationTag").CALL_NOTIFICATION_TAG_PREFIX +
              i
            : void 0,
        C = t.nt === "voip_call_offer_group",
        b = !C,
        v = {
          callerName: g,
          isGroup: C,
          isVideo: _,
          missedCallBody: ee(p, _),
          ringExpiresAtMs: a + x,
        },
        S =
          "Incoming " +
          (C ? "group " : "") +
          (_ ? "video" : "voice") +
          " call from {name}",
        R;
      if (C) {
        var L, E;
        R = _
          ? (L = p == null ? void 0 : p.callNotificationGroupVideoTitle) != null
            ? L
            : S
          : (E = p == null ? void 0 : p.callNotificationGroupAudioTitle) != null
            ? E
            : S;
      } else {
        var k, I;
        R = _
          ? (k = p == null ? void 0 : p.callNotification1on1VideoTitle) != null
            ? k
            : S
          : (I = p == null ? void 0 : p.callNotification1on1AudioTitle) != null
            ? I
            : S;
      }
      var T = R.replace("{name}", g),
        D =
          (r = p == null ? void 0 : p.callNotificationBody) != null
            ? r
            : "Open WhatsApp Web to answer this call.";
      o("WALogger").LOG(
        u ||
          (u = babelHelpers.taggedTemplateLiteralLoose([
            "[PushNotif] Showing call notification for ",
            ", caller name from ",
            "",
          ])),
        t.nt,
        h,
      );
      try {
        await o("WAWebNotificationWorkerBackend").showCallNotification(
          T,
          D,
          y,
          { swRingingCall: v },
          b,
        );
      } catch (e) {
        (o("WALogger").ERROR(
          c ||
            (c = babelHelpers.taggedTemplateLiteralLoose([
              "[PushNotif] Failed to show call notification: ",
              "",
            ])),
          e,
        ),
          await q(i, "not_delivered"));
        return;
      }
      if (
        (await q(i, "shown"),
        !(i == null || y == null) && !(await Y(t, i, a, v)))
      ) {
        var $ = await X(t);
        if (!($ == null || $ === g) && !(!(await oe(y)) || re(t, a) != null)) {
          var P = R.replace("{name}", $);
          o("WALogger").LOG(
            d ||
              (d = babelHelpers.taggedTemplateLiteralLoose([
                "[PushNotif] Updating call notification with the resolved contact name",
              ])),
          );
          var N = babelHelpers.extends({}, v, { callerName: $ });
          try {
            await o("WAWebNotificationWorkerBackend").showCallNotification(
              P,
              D,
              y,
              { swRingingCall: N },
              b,
            );
          } catch (e) {
            o("WALogger").ERROR(
              m ||
                (m = babelHelpers.taggedTemplateLiteralLoose([
                  "[PushNotif] update call notif with resolved name failed: ",
                  "",
                ])),
              e,
            );
            return;
          }
          await Y(t, i, a, N);
        }
      }
    }
    async function q(e, t) {
      if (e != null)
        try {
          (await o("WAWebSwWindowClients").findWindowClient()) == null &&
            (await o("WAWebVoipClosedTabCallRings").recordClosedTabCallRing(
              e,
              t,
            ));
        } catch (e) {
          o("WALogger")
            .ERROR(
              p ||
                (p = babelHelpers.taggedTemplateLiteralLoose([
                  "[PushNotif] Failed to record a closed tab call ring: ",
                  "",
                ])),
              e,
            )
            .sendLogs("sw-closed-tab-call-ring-record-failed");
        }
    }
    async function U(e) {
      var t = e.call_id;
      if (t != null) {
        var n = e.call_terminate_reason;
        o("WALogger").LOG(
          _ ||
            (_ = babelHelpers.taggedTemplateLiteralLoose([
              "[PushNotif] call terminated (reason ",
              "), closing call notif ",
              "",
            ])),
          n != null ? n : "absent",
          t,
        );
        var r = n == null || I.has(n);
        O(t, r);
        var a =
          "" + o("WAWebSwCallNotificationTag").CALL_NOTIFICATION_TAG_PREFIX + t;
        await J(t, a, r && Z() ? await te(a) : null);
      }
    }
    async function V() {
      try {
        var e = Date.now(),
          t = function (n) {
            return H(ne(n), e);
          };
        if (
          !(await o("WAWebNotificationWorkerBackend").hasNotificationWithData(
            t,
          ))
        )
          return;
        (o("WAWebNotificationWorkerBackend").closingCanHideNewNotification() &&
          (await new Promise(function (e) {
            return self.setTimeout(e, P);
          })),
          await o("WAWebNotificationWorkerBackend").closeNotificationsWithData(
            t,
          ));
      } catch (e) {
        o("WALogger")
          .ERROR(
            f ||
              (f = babelHelpers.taggedTemplateLiteralLoose([
                "[PushNotif] closing expired call notifs failed",
              ])),
          )
          .catching(r("getErrorSafe")(e))
          .sendLogs("sw-call-notif-expiry-sweep-failed");
      }
    }
    function H(e, t) {
      if (e == null) return !1;
      var n = e.isGroup ? 0 : $;
      return e.ringExpiresAtMs + n <= t;
    }
    function G(e) {
      return (function (e) {
        if (
          ((typeof e == "object" && e !== null) || typeof e == "function") &&
          e.nt === "call_terminate"
        ) {
          var t = e;
          return U(t);
        }
        if (
          ((typeof e == "object" && e !== null) || typeof e == "function") &&
          (e.nt === "voip_call_offer_1on1" || e.nt === "voip_call_offer_group")
        ) {
          var n = e;
          return W(n);
        }
        throw Error(
          "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
            e,
        );
      })(e);
    }
    function z(e) {
      return (
        e === r("WAWebSWBusActions").HANDLE_CALL_NOTIFICATION ||
        e === r("WAWebSWBusActions").CLEAR_CALL_NOTIFICATION
      );
    }
    async function j(e, t) {
      var n = le(t);
      if (n != null) {
        var a =
          "" + o("WAWebSwCallNotificationTag").CALL_NOTIFICATION_TAG_PREFIX + n;
        e === r("WAWebSWBusActions").HANDLE_CALL_NOTIFICATION
          ? (L.add(n),
            await o("WAWebNotificationWorkerBackend").closeCallNotification(a))
          : e === r("WAWebSWBusActions").CLEAR_CALL_NOTIFICATION &&
            (L.delete(n),
            O(n, !1),
            await o("WAWebNotificationWorkerBackend").closeCallNotification(a));
      }
    }
    function K(e, t) {
      var n = e.from_username;
      if (n != null && n !== "") return { name: n, source: "username" };
      var r = Q(e.from_pn);
      if (r != null) return { name: r, source: "pn" };
      var o = Q(e.from_device_jid);
      return o != null
        ? { name: o, source: "device_jid" }
        : { name: t, source: "unknown" };
    }
    function Q(e) {
      if (e == null || e === "") return null;
      var t;
      try {
        t = o("WAWebWidFactory").createWid(e);
      } catch (e) {
        return (
          o("WALogger").ERROR(
            g ||
              (g = babelHelpers.taggedTemplateLiteralLoose([
                "[PushNotif] Unparsable caller jid: ",
                "",
              ])),
            e,
          ),
          null
        );
      }
      return !t.isRegularUserPn() || t.isHostedLid() ? null : "+" + t.user;
    }
    async function X(e) {
      var t = e.from_device_jid;
      if (t == null) return null;
      try {
        var n = await o("WAWebInitializeWorkerBackendSw").initializeDb();
        if (!n) return null;
        var r = o("WAWebWidFactory").createWid(t),
          a = r.isUser() ? o("WAWebWidFactory").asUserWidOrThrow(r) : r,
          i = await o("WAWebApiContact").getContactRecord(a);
        return (
          (i == null ? void 0 : i.name) ||
          (i == null ? void 0 : i.verifiedName) ||
          (i == null ? void 0 : i.pushname) ||
          null
        );
      } catch (e) {
        return (
          o("WALogger").ERROR(
            h ||
              (h = babelHelpers.taggedTemplateLiteralLoose([
                "[PushNotif] Failed to resolve caller name: ",
                "",
              ])),
            e,
          ),
          null
        );
      }
    }
    async function Y(e, t, n, r) {
      var a = re(e, n);
      if (a == null) return !1;
      var i =
        "" + o("WAWebSwCallNotificationTag").CALL_NOTIFICATION_TAG_PREFIX + t;
      return (
        o("WALogger").LOG(
          y ||
            (y = babelHelpers.taggedTemplateLiteralLoose([
              "[PushNotif] ",
              " during show, closing ",
              "",
            ])),
          a,
          i,
        ),
        await J(t, i, r),
        !0
      );
    }
    async function J(e, t, n) {
      var a;
      if (
        (await o("WAWebNotificationWorkerBackend").closeCallNotification(t),
        !(
          n == null ||
          n.isGroup ||
          ((a = E.get(e)) == null ? void 0 : a.unanswered) !== !0 ||
          !Z()
        ))
      ) {
        o("WALogger").LOG(
          C ||
            (C = babelHelpers.taggedTemplateLiteralLoose([
              "[PushNotif] call ",
              " went unanswered, showing missed call notif",
            ])),
          e,
        );
        try {
          await o("WAWebNotificationWorkerBackend").showMissedCallNotification(
            n.callerName,
            n.missedCallBody,
            "" + k + e,
          );
        } catch (e) {
          o("WALogger")
            .ERROR(
              b ||
                (b = babelHelpers.taggedTemplateLiteralLoose([
                  "[PushNotif] Failed to show missed call notification",
                ])),
            )
            .catching(r("getErrorSafe")(e))
            .sendLogs("sw-missed-call-notif-show-failed");
        }
      }
    }
    function Z() {
      try {
        return r("justknobx")._("7160") === !1;
      } catch (e) {
        return (
          o("WALogger")
            .ERROR(
              v ||
                (v = babelHelpers.taggedTemplateLiteralLoose([
                  "[PushNotif] missed call killswitch read failed",
                ])),
            )
            .catching(r("getErrorSafe")(e))
            .sendLogs("sw-missed-call-killswitch-read-failed"),
          !1
        );
      }
    }
    function ee(e, t) {
      var n, r;
      return t
        ? (n = e == null ? void 0 : e.callNotificationMissedVideoBody) != null
          ? n
          : "Missed video call"
        : (r = e == null ? void 0 : e.callNotificationMissedAudioBody) != null
          ? r
          : "Missed voice call";
    }
    async function te(e) {
      try {
        return ne(
          await o("WAWebNotificationWorkerBackend").getCallNotificationData(e),
        );
      } catch (e) {
        return (
          o("WALogger")
            .ERROR(
              S ||
                (S = babelHelpers.taggedTemplateLiteralLoose([
                  "[PushNotif] getNotifications failed: ",
                  "",
                ])),
              e,
            )
            .sendLogs("sw-call-notif-get-notifications-failed"),
          null
        );
      }
    }
    function ne(e) {
      if (e == null || typeof e != "object") return null;
      var t = e.swRingingCall;
      if (t == null || typeof t != "object") return null;
      var n = t.callerName,
        r = t.isGroup,
        o = t.isVideo,
        a = t.missedCallBody,
        i = t.ringExpiresAtMs;
      return typeof n != "string" ||
        typeof r != "boolean" ||
        typeof o != "boolean" ||
        typeof a != "string" ||
        typeof i != "number"
        ? null
        : {
            callerName: n,
            isGroup: r,
            isVideo: o,
            missedCallBody: a,
            ringExpiresAtMs: i,
          };
    }
    function re(e, t) {
      var n,
        r = B(e);
      if (r != null) return r;
      var o =
        e.call_id != null
          ? (n = E.get(e.call_id)) == null
            ? void 0
            : n.endedAtMs
          : null;
      return o != null && o >= t ? "call ended" : null;
    }
    async function oe(e) {
      try {
        return await o("WAWebNotificationWorkerBackend").hasCallNotification(e);
      } catch (e) {
        return (
          o("WALogger")
            .ERROR(
              R ||
                (R = babelHelpers.taggedTemplateLiteralLoose([
                  "[PushNotif] getNotifications failed: ",
                  "",
                ])),
              e,
            )
            .sendLogs("sw-call-notif-get-notifications-failed"),
          !1
        );
      }
    }
    function ae(e) {
      if (e == null || e === "") return null;
      var t = Number(e);
      return Number.isFinite(t) && t >= 0 ? t : null;
    }
    function ie(e) {
      return typeof e == "string" ? e : void 0;
    }
    function le(e) {
      if (e != null && typeof e == "object") {
        var t = e.callId;
        if (typeof t == "string") return t;
      }
      return null;
    }
    ((l.parseCallPushPayload = w),
      (l.isCallOfferPushExpired = A),
      (l.isOfferForEndedCall = F),
      (l.handleCallPushPayload = W),
      (l.handleCallTerminatePushPayload = U),
      (l.closeExpiredRings = V),
      (l.handleParsedCallPushPayload = G),
      (l.isCallAction = z),
      (l.handleCallAction = j));
  },
  98,
);
