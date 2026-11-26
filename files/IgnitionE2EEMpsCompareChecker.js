__d(
  "IgnitionE2EEMpsCompareChecker",
  [
    "EBMessageContentType",
    "EBMinosServerOriginGating",
    "IgnitionE2EEDeltaErrors",
    "IgnitionE2EEPaymentMessageCompare",
    "MAWEBLSInWorkerSwitch",
    "MAWMpsMigrationProtobufCorrectnessChecker",
    "MAWMpsMigrationProtobufCorrectnessCheckerUtils",
    "MAWProtobufDeserializers",
    "QPLUtils",
    "WAE2EEIgnitionGating",
    "WAJids",
    "WATimeUtils",
    "WMIQplFlow",
    "WmiErrorReport",
    "WmiOds",
    "clearTimeout",
    "justknobx",
    "qpl",
    "setTimeout",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("justknobx")._("4145"),
      s = 1e3;
    function u() {
      return r("justknobx")._("6327");
    }
    function c(e) {
      var t = u();
      return t > 0 && o("QPLUtils").unsignedCrc32(e) % t === 0;
    }
    var d = "dropped_below_watermark",
      m = "unpaired_tab_copy",
      p = {
        DNPP: "dnpp",
        IGNITION: "ignition",
        TABIGNITION: "tab_ignition",
        WA: "wai",
      };
    function _(e) {
      return e === "admin_message"
        ? "TABIGNITION"
        : e === "payment_message"
          ? "DNPP"
          : e === "transport_message"
            ? "WA"
            : (function () {
                throw Error(
                  "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                    e,
                );
              })();
    }
    function f(e, t) {
      return [p[e], p[t]].sort().join(",");
    }
    var g = new Map(),
      h = new Map(),
      y = new Set();
    function C(e) {
      if ((y.add(e), y.size > s)) {
        var t = y.values().next().value;
        t != null && y.delete(t);
      }
    }
    var b = 0;
    function v() {
      b++;
    }
    var S = "unknown";
    function R(e) {
      S = e;
    }
    var L = 0;
    function E(e) {
      return (
        o("WATimeUtils").castMilliSecondsToUnixTime(Number(e)) <
        o("WATimeUtils").castMilliSecondsToUnixTime(L)
      );
    }
    function k(e) {
      e > L && (L = e);
    }
    function I(e, t) {
      return e === 0
        ? t
          ? b > 0
            ? "missing_in_ignition_not_ready_cold_start"
            : "missing_in_ignition_not_ready_start_failed"
          : "missing_in_ignition_not_ready_eb_off"
        : "missing_in_ignition";
    }
    function T(e, t, n, a, i) {
      var l = o("WMIQplFlow").startQplFlow(r("qpl")._(521483895, "1514"));
      (l.addAnnotations({ string: { compare_surface: t } }),
        l.addAnnotations({ int: { compare_sample_rate: u() } }),
        n != null &&
          l.addAnnotations({
            int: {
              ign_delivery_ms: n.ignDeliveryMs,
              wai_delivery_ms: n.waiDeliveryMs,
            },
          }),
        a != null && l.addAnnotations({ string: a }));
      for (var s of i != null ? i : []) l.addPoint(s);
      e === "match"
        ? l.endSuccess()
        : e === d || e === m
          ? l.endCancel()
          : l.endFail(e);
    }
    function D(e, t, n, r) {
      var o = M(r.payload),
        a = o.contentKind,
        i = o.payloadKind;
      T(d, t, null, {
        content_kind: a,
        drop_reason: "below_watermark",
        message_id: r.messageId,
        payload_kind: i,
        side: p[e],
        stage: n,
        thread_type: w(r.threadId),
      });
    }
    function x(e) {
      return {
        messageId: String(e.messageId),
        payload: e.payload,
        senderId: e.senderId,
        threadId: String(e.threadId),
        timestampMs: o("WATimeUtils").castToMillisTime(Number(e.timestampMs)),
      };
    }
    function $(e, t) {
      return (
        o("WATimeUtils").castMilliSecondsToUnixTime(Number(e)) ===
        o("WATimeUtils").castMilliSecondsToUnixTime(Number(t))
      );
    }
    function P(e, t, n) {
      if (e.messageId !== t.messageId) return { outcome: "mismatch_messageId" };
      if (e.threadId !== t.threadId) return { outcome: "mismatch_threadId" };
      if (e.senderId !== t.senderId) return { outcome: "mismatch_senderId" };
      if (!$(e.timestampMs, t.timestampMs))
        return { outcome: "mismatch_timestampMs" };
      if (n === "payment_message")
        return (function (e) {
          if (
            ((typeof e == "object" && e !== null) || typeof e == "function") &&
            e.result === "match"
          )
            return { outcome: "match" };
          if (
            ((typeof e == "object" && e !== null) || typeof e == "function") &&
            e.result === "mismatch" &&
            "diffs" in e
          ) {
            var t = e.diffs;
            return { outcome: "mismatch_paymentMessagePayload", points: t };
          }
          if (
            ((typeof e == "object" && e !== null) || typeof e == "function") &&
            e.result === "not_compared" &&
            "errorReason" in e
          ) {
            var n = e.errorReason;
            return { errorReason: n, outcome: "not_compared" };
          }
          throw Error(
            "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
              e,
          );
        })(
          o("IgnitionE2EEPaymentMessageCompare").comparePaymentMessagePayloads(
            e.payload,
            t.payload,
          ),
        );
      var r = o("MAWMpsMigrationProtobufCorrectnessChecker").compareProtobufs(
        e.payload,
        t.payload,
      );
      if (!r.success) {
        if (r.error === "unsupported_protobuf_type") {
          var a = N(e.payload, t.payload);
          if (a != null) return { outcome: a };
        }
        return { outcome: "mismatch_applicationPayload_" + r.error };
      }
      return { outcome: "match" };
    }
    function N(e, t) {
      var n = o("MAWProtobufDeserializers").DeserializedBackupMessage.create(e)
          .proto.miTransportAdminMessage,
        r = o("MAWProtobufDeserializers").DeserializedBackupMessage.create(t)
          .proto.miTransportAdminMessage;
      return n == null || r == null
        ? null
        : o("MAWMpsMigrationProtobufCorrectnessCheckerUtils").compareBinary(
              n.payload,
              r.payload,
            )
          ? "match"
          : "mismatch_adminMessagePayload";
    }
    function M(e) {
      try {
        var t = o("MAWProtobufDeserializers").DeserializedBackupMessage.create(
          e,
        );
        return {
          contentKind: o("EBMessageContentType").determineMessageType(t),
          payloadKind: t.payload().kind,
        };
      } catch (e) {
        return { contentKind: "decode_error", payloadKind: null };
      }
    }
    function w(e) {
      return e.endsWith(o("WAJids").getGroupDomain()) ? "group" : "one_to_one";
    }
    function A(e) {
      var t = g.get(e);
      if (t != null) {
        g.delete(e);
        var n = t.message;
        if (n != null) {
          var r = x(n),
            o = t.surface;
          if (E(r.timestampMs)) {
            D(t.side, o, "expire", r);
            return;
          }
          var a = { sides_seen: p[t.side], thread_type: w(r.threadId) };
          if (t.side === "IGNITION") {
            var i = M(r.payload),
              l = i.contentKind,
              u = i.payloadKind;
            ((a.content_kind = l),
              (a.message_id = r.messageId),
              (a.payload_kind = u),
              (a.sender_is_self = String(t.senderIsSelf)),
              T("missing_in_" + p[_(o)], o, null, a));
          } else if (o === "admin_message")
            T(m, o, null, {
              drop_reason: m,
              message_id: r.messageId,
              side: p[t.side],
              thread_type: w(r.threadId),
            });
          else {
            ((a.ignition_health = t.ignitionHealthAtRecord),
              (a.sender_is_self = String(t.senderIsSelf)));
            var c = I(t.syncCountAtRecord, t.ebEnabledAtRecord);
            if (c === "missing_in_ignition") {
              var d = M(r.payload),
                f = d.contentKind,
                y = d.payloadKind;
              ((a.content_kind = f), (a.payload_kind = y));
            }
            ((a.ignition_delta_status = "not_received"),
              (a.message_id = r.messageId),
              T(c, o, null, a));
          }
          if ((h.set(e, t.side), h.size > s)) {
            var C = h.keys().next().value;
            C != null && h.delete(C);
          }
        }
      }
    }
    function F(t, n, a, i, l, s, u) {
      u === void 0 && (u = !1);
      var d = o("WATimeUtils").castToMillisTime(o("WATimeUtils").unixTimeMs());
      try {
        if (
          !o("WAE2EEIgnitionGating").isE2EEIgnitionSyncEnabled() ||
          !c(a) ||
          (n === "admin_message" &&
            !o("WAE2EEIgnitionGating").isE2EEIgnitionAdminCompareEnabled()) ||
          (n === "payment_message" &&
            !o("WAE2EEIgnitionGating").isE2EEIgnitionPaymentCompareEnabled())
        )
          return;
        var _ = r("MAWEBLSInWorkerSwitch").isEnabled();
        if (!_) return;
        if (u && i != null) {
          var v,
            R =
              (v = o("MAWProtobufDeserializers")
                .DeserializedBackupMessage.create(i.payload)
                .adminMessage()) == null
                ? void 0
                : v.proto;
          if (
            R == null ||
            !o("EBMinosServerOriginGating").isSupportedServerOriginAdminMessage(
              R,
            )
          )
            return;
        }
        if (a === "") return;
        var L = i != null ? x(i) : null;
        if (L != null && E(L.timestampMs)) {
          D(t, n, "record", L);
          return;
        }
        if (n === "payment_message" && y.has(a)) {
          o("WmiOds").wmiOdsBump(
            "e2ee_ignition_compare",
            "payment_message_already_settled",
          );
          return;
        }
        var k = h.get(a);
        if (k != null) {
          k !== t &&
            (h.delete(a),
            T("late_after_ttl_in_" + p[t], n, null, {
              message_id: a,
              sender_is_self: String(s),
              sides_seen: p[k] + "," + p[t],
            }),
            n === "payment_message" && C(a));
          return;
        }
        var I = g.get(a);
        if (I == null) {
          g.set(a, {
            arrivalEpochMs: d,
            ebEnabledAtRecord: _,
            failReason: l,
            ignitionHealthAtRecord: S,
            message: i,
            senderIsSelf: s,
            side: t,
            surface: n,
            syncCountAtRecord: b,
            timerId: r("setTimeout")(function () {
              return A(a);
            }, e),
          });
          return;
        }
        if (I.side === t) {
          ((I.message = i), (I.failReason = l));
          return;
        }
        (r("clearTimeout")(I.timerId), g.delete(a));
        var $ = I.surface,
          N = t === "IGNITION",
          F = N ? I.message : i;
        if (F == null) return;
        var O = x(F),
          B = N ? l : I.failReason;
        if (B != null) {
          var W = N ? n : I.surface,
            q = N ? I.side : t;
          if (q === "TABIGNITION" && W === "transport_message") {
            T(m, "admin_message", null, {
              drop_reason: m,
              ignition_fail_reason: B,
              message_id: O.messageId,
              side: p[q],
              thread_type: w(O.threadId),
            });
            return;
          }
          var U = M(O.payload),
            V = U.contentKind,
            H = U.payloadKind;
          (T("missing_in_ignition", $, null, {
            content_kind: V,
            ignition_delta_status: "received_not_produced",
            ignition_fail_reason: B,
            ignition_health: N ? I.ignitionHealthAtRecord : S,
            message_id: O.messageId,
            payload_kind: H,
            sender_is_self: String(N ? I.senderIsSelf : s),
            sides_seen: f(I.side, t),
            thread_type: w(O.threadId),
          }),
            $ === "payment_message" && C(a));
          return;
        }
        var G = N ? i : I.message;
        if (G == null) return;
        var z = x(G),
          j = N ? I.arrivalEpochMs : d,
          K = N ? d : I.arrivalEpochMs,
          Q = N ? I.senderIsSelf : s,
          X = N ? s : I.senderIsSelf,
          Y = P(O, z, $),
          J = Y.errorReason,
          Z = Y.outcome,
          ee = Y.points;
        (T(
          Z,
          $,
          {
            ignDeliveryMs: K - z.timestampMs,
            waiDeliveryMs: j - O.timestampMs,
          },
          babelHelpers.extends({}, J != null ? { error_reason: J } : {}, {
            first_arrival_side: p[I.side],
            ign_sender_is_self: String(X),
            message_id: O.messageId,
            sides_seen: f(I.side, t),
            wai_sender_is_self: String(Q),
          }),
          ee,
        ),
          $ === "payment_message" && C(a));
      } catch (e) {
        (o("WmiOds").wmiOdsBump("e2ee_ignition_compare", "record_error"),
          o("WmiErrorReport").reportWmiError(
            o("IgnitionE2EEDeltaErrors").IgnitionE2EEDeltaErrors.classify(
              e,
              "compare_record",
              "shadow_compare_failed",
            ),
            babelHelpers.extends(
              {},
              o("IgnitionE2EEDeltaErrors").IGNITION_E2EE_DELTA_REPORT_SINKS,
              { loggerSubject: t },
            ),
          ));
      }
    }
    function O(e, t) {
      (t === void 0 && (t = !1),
        e != null &&
          F("WA", "transport_message", String(e.messageId), e, null, t));
    }
    function B(e, t, n) {
      (t === void 0 && (t = !1),
        n === void 0 && (n = "transport_message"),
        e != null && F("IGNITION", n, String(e.messageId), e, null, t));
    }
    function W(e, t) {
      e != null &&
        F("DNPP", "payment_message", String(e.messageId), e, null, t);
    }
    function q(e) {
      e != null &&
        F("TABIGNITION", "admin_message", String(e.messageId), e, null, !1, !0);
    }
    function U(e, t, n) {
      (n === void 0 && (n = "transport_message"),
        F("IGNITION", n, e, null, t, !1));
    }
    function V() {
      for (var e of g) {
        var t = e[1];
        r("clearTimeout")(t.timerId);
      }
      (g.clear(), h.clear(), y.clear(), (b = 0), (S = "unknown"), (L = 0));
    }
    function H(e, t) {
      return P(x(e), x(t), "transport_message").outcome;
    }
    ((l.noteIgnitionSync = v),
      (l.noteIgnitionHealth = R),
      (l.noteResnapshotWatermark = k),
      (l.recordWaiSide = O),
      (l.recordIgnitionSide = B),
      (l.recordP2pPaymentCardSide = W),
      (l.recordTabIgnitionSide = q),
      (l.recordIgnitionDeltaFailure = U),
      (l.resetForTesting = V),
      (l.compareMessages = H));
  },
  98,
);
