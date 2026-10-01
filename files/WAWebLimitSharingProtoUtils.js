__d(
  "WAWebLimitSharingProtoUtils",
  [
    "Promise",
    "WALogger",
    "WAPromiseQueue",
    "WATimeUtils",
    "WAWebCommonMsgSubtypeTypes",
    "WAWebLimitSharingGatingUtils",
    "WAWebLimitSharingModelUtils",
    "WAWebLimitSharingPropMappingUtils",
    "WAWebMsgType",
    "WAWebNoop",
    "WAWebParseLimitSharingHistorySyncProto",
    "WAWebProtobufsE2E.pb",
    "WAWebProtobufsWeb.pb",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u,
      c,
      d = 6e4,
      m = new (o("WAPromiseQueue").PromiseQueueMap)(d),
      p = new Map(),
      _ = 10080 * 60 * 1e3;
    function f(e) {
      var t = e == null ? void 0 : e.acp2Setting;
      return t == null ||
        !te(t) ||
        !o("WAWebLimitSharingGatingUtils").isAcp2Enabled()
        ? null
        : o(
            "WAWebParseLimitSharingHistorySyncProto",
          ).getAcp2SettingFromEnvelope(t);
    }
    function g(e, t, n) {
      return e == null ||
        !o("WAWebLimitSharingGatingUtils").isAcp2EnabledForWid(t)
        ? !1
        : !n.some(function (e) {
            return (
              (e == null ? void 0 : e.subtype) ===
              o("WAWebCommonMsgSubtypeTypes").MsgSubtype.Acp2SystemMessage
            );
          });
    }
    function h(e, t) {
      var n,
        r = e == null ? void 0 : e.acp2Setting;
      if (r == null || !te(r)) return !1;
      var a = e == null ? void 0 : e.id;
      if (
        a == null ||
        !o("WAWebLimitSharingGatingUtils").isAcp2EnabledForWid(
          o("WAWebWidFactory").createWid(a),
        )
      )
        return !1;
      var i = t == null ? void 0 : t.message;
      return !(
        (i == null ? void 0 : i.messageStubType) ===
          o("WAWebProtobufsWeb.pb").WebMessageInfo$StubType
            .CHANGE_ACP2_SETTING ||
        (i == null || (n = i.message) == null || (n = n.protocolMessage) == null
          ? void 0
          : n.type) ===
          o("WAWebProtobufsE2E.pb").Message$ProtocolMessage$Type.ACP2_SETTING
      );
    }
    function y(t) {
      return (c || (c = n("Promise")))
        .all(
          Array.from(t, function (t) {
            var n = t[0],
              a = t[1];
            return G(n, function () {
              return C(n, a);
            }).catch(function (t) {
              o("WALogger")
                .ERROR(
                  e ||
                    (e = babelHelpers.taggedTemplateLiteralLoose([
                      "[acp2] history sync adoption failed",
                    ])),
                )
                .catching(r("getErrorSafe")(t))
                .sendLogs("acp2-history-sync-adoption-failed");
            });
          }),
        )
        .then(r("WAWebNoop"));
    }
    function C(e, t) {
      return b.apply(this, arguments);
    }
    function b() {
      return (
        (b = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          if (!Y(t)) {
            var n = yield o("WAWebLimitSharingModelUtils").getChat(e);
            n == null ||
              !Z(t, n) ||
              (yield o("WAWebLimitSharingModelUtils").updateChatAcp2Setting(
                o("WAWebWidFactory").createWid(n.id),
                t,
              ));
          }
        })),
        b.apply(this, arguments)
      );
    }
    function v(e) {
      return {
        sharingLimited: e.limitSharing,
        trigger: o(
          "WAWebLimitSharingPropMappingUtils",
        ).getLimitSharingTriggerFromHistorySyncStubParameter(
          String(e.limitSharingTrigger),
        ),
        initiatedByMe: e.limitSharingInitiatedByMe,
        limitSharingSettingTimestamp: e.limitSharingSettingTimestamp,
      };
    }
    function S(e, t, n) {
      return R.apply(this, arguments);
    }
    function R() {
      return (
        (R = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
          var r, a;
          if (
            !o("WAWebLimitSharingGatingUtils").isOpusEnabled() &&
            !(
              t == null ||
              (e == null ? void 0 : e.from) == null ||
              (e == null || (r = e.id) == null ? void 0 : r.remote) == null
            )
          ) {
            var i = re(t);
            if (i) yield L(e, i);
            else if ((a = t.messageContextInfo) != null && a.limitSharingV2) {
              var l;
              yield k(
                e,
                (l = t.messageContextInfo) == null ? void 0 : l.limitSharingV2,
                n,
              );
            }
          }
        })),
        R.apply(this, arguments)
      );
    }
    function L(e, t) {
      return E.apply(this, arguments);
    }
    function E() {
      return (
        (E = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = o(
            "WAWebParseLimitSharingHistorySyncProto",
          ).getLimitSharingFromEnvelope(
            t,
            o("WAWebWidFactory").createWid(e.from.toString()),
          );
          ((e.type = o("WAWebMsgType").MSG_TYPE.NOTIFICATION_TEMPLATE),
            (e.subtype = o(
              "WAWebCommonMsgSubtypeTypes",
            ).MsgSubtype.LimitSharingSystemMessage),
            (e.limitSharing = n),
            yield T(e.id.remote.toString(), n));
        })),
        E.apply(this, arguments)
      );
    }
    function k(e, t, n) {
      return I.apply(this, arguments);
    }
    function I() {
      return (
        (I = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
          var r = o(
              "WAWebParseLimitSharingHistorySyncProto",
            ).getLimitSharingFromEnvelope(t),
            a = n === "history" ? "onValueChange" : "always";
          yield T(e.id.remote.toString(), r, a);
        })),
        I.apply(this, arguments)
      );
    }
    function T(e, t, n) {
      return D.apply(this, arguments);
    }
    function D() {
      return (
        (D = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
          if (!o("WAWebLimitSharingGatingUtils").isOpusEnabled())
            return m.enqueue(e, function () {
              return x(e, t, n);
            });
        })),
        D.apply(this, arguments)
      );
    }
    function x(e, t, n) {
      return $.apply(this, arguments);
    }
    function $() {
      return (
        ($ = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
          var r,
            a,
            i = yield o("WAWebLimitSharingModelUtils").getChat(e);
          if (!(i == null || !ne(t, i))) {
            var l = o("WAWebWidFactory").createWid(i.id),
              s =
                i.acp2Setting != null &&
                o("WAWebLimitSharingGatingUtils").isAcp2EnabledForWid(l) &&
                Number(
                  (r = i.acp2Setting) == null ? void 0 : r.settingTimestamp,
                ) >= Number(t.limitSharingSettingTimestamp),
              u =
                !s &&
                (n === "always" ||
                  (n === "onValueChange" &&
                    ((a = i.limitSharing) == null
                      ? void 0
                      : a.sharingLimited) !== t.sharingLimited));
            (yield P(i, l, t),
              yield o("WAWebLimitSharingModelUtils").updateChat(l, t),
              u &&
                (yield o(
                  "WAWebLimitSharingModelUtils",
                ).genLimitSharingSystemMessage(l, t)));
          }
        })),
        $.apply(this, arguments)
      );
    }
    function P(e, t, n) {
      return N.apply(this, arguments);
    }
    function N() {
      return (
        (N = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
          var r;
          n.sharingLimited !== !1 ||
            !t.isUser() ||
            ((r = e.acp2Setting) == null ? void 0 : r.enabled) !== !0 ||
            (yield j(e.id, {
              enabled: !1,
              trigger: n.trigger,
              settingTimestamp: n.limitSharingSettingTimestamp,
              initiatedBy: n.initiatedBy,
            }));
        })),
        N.apply(this, arguments)
      );
    }
    function M(e, t, n) {
      return w.apply(this, arguments);
    }
    function w() {
      return (
        (w = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
          var r;
          if (
            !(
              t == null ||
              (e == null ? void 0 : e.from) == null ||
              (e == null || (r = e.id) == null ? void 0 : r.remote) == null
            ) &&
            e.id.remote.isUser()
          ) {
            var o = ee(t);
            o && (yield A(e, o, n));
          }
        })),
        w.apply(this, arguments)
      );
    }
    function A(e, t, n) {
      return F.apply(this, arguments);
    }
    function F() {
      return (
        (F = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
          var r = o(
            "WAWebParseLimitSharingHistorySyncProto",
          ).getAcp2SettingFromEnvelope(
            t,
            o("WAWebWidFactory").createWid(e.from.toString()),
          );
          ((e.type = o("WAWebMsgType").MSG_TYPE.NOTIFICATION_TEMPLATE),
            (e.subtype = o(
              "WAWebCommonMsgSubtypeTypes",
            ).MsgSubtype.Acp2SystemMessage),
            (e.acp2Setting = r),
            n !== "history" && (yield O(e.id.remote.toString(), r)));
        })),
        F.apply(this, arguments)
      );
    }
    function O(e, t, r) {
      return o("WAWebLimitSharingGatingUtils").isAcp2Enabled()
        ? G(e, function () {
            return j(e, t, r);
          })
        : (c || (c = n("Promise"))).resolve();
    }
    function B(e, t, n) {
      return W.apply(this, arguments);
    }
    function W() {
      return (
        (W = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
          var a,
            i = e == null || (a = e.id) == null ? void 0 : a.remote;
          if (
            !(
              t == null ||
              (e == null ? void 0 : e.from) == null ||
              i == null ||
              !i.isUser() ||
              n === "history"
            )
          ) {
            var l = q(t);
            if (l != null)
              try {
                yield U(
                  i.toString(),
                  o(
                    "WAWebParseLimitSharingHistorySyncProto",
                  ).getAcp2SettingFromEnvelope(
                    l,
                    o("WAWebWidFactory").createWid(e.from.toString()),
                  ),
                );
              } catch (e) {
                o("WALogger").WARN(
                  u ||
                    (u = babelHelpers.taggedTemplateLiteralLoose([
                      "[acp2] ACP2 update outside the rollout failed: ",
                      "",
                    ])),
                  r("getErrorSafe")(e),
                );
              }
          }
        })),
        W.apply(this, arguments)
      );
    }
    function q(e) {
      var t = o(
        "WAWebParseLimitSharingHistorySyncProto",
      ).getAcp2EnvelopeFromProtobuf(e);
      return (t == null ? void 0 : t.type) !==
        o("WAWebProtobufsE2E.pb").Message$ProtocolMessage$Type.ACP2_SETTING
        ? null
        : t == null
          ? void 0
          : t.acp2Setting;
    }
    function U(e, t) {
      return m.enqueue(
        e,
        n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var n = yield o("WAWebLimitSharingModelUtils").getChat(e);
          (n == null ? void 0 : n.acp2Setting) != null && (yield j(e, t));
        }),
      );
    }
    function V(e) {
      return m.waitIfPending(e);
    }
    function H(e) {
      return p.has(e) ? m.waitIfPending(e) : null;
    }
    function G(e, t) {
      return (
        z(e, 1),
        m.enqueue(
          e,
          n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
            try {
              yield t();
            } finally {
              z(e, -1);
            }
          }),
        )
      );
    }
    function z(e, t) {
      var n,
        r = ((n = p.get(e)) != null ? n : 0) + t;
      r > 0 ? p.set(e, r) : p.delete(e);
    }
    function j(e, t, n) {
      return K.apply(this, arguments);
    }
    function K() {
      return (
        (K = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
          var r, a;
          if (!Y(t)) {
            var i = yield o("WAWebLimitSharingModelUtils").getChat(e);
            if (!(i == null || !Q(t, i))) {
              var l = o("WAWebWidFactory").createWid(i.id),
                s =
                  i.limitSharing != null &&
                  Number(
                    (r = i.limitSharing) == null
                      ? void 0
                      : r.limitSharingSettingTimestamp,
                  ) === Number(t.settingTimestamp),
                u =
                  o("WAWebLimitSharingGatingUtils").isAcp2EnabledForWid(l) &&
                  !s &&
                  (n === "always" ||
                    (n === "onValueChange" &&
                      ((a = i.acp2Setting) == null ? void 0 : a.enabled) !==
                        t.enabled));
              (o("WAWebLimitSharingModelUtils").noteDatedAcp2Write(l),
                yield o("WAWebLimitSharingModelUtils").updateChatAcp2Setting(
                  l,
                  t,
                ),
                u &&
                  (yield o("WAWebLimitSharingModelUtils").genAcp2SystemMessage(
                    l,
                    t,
                  )));
            }
          }
        })),
        K.apply(this, arguments)
      );
    }
    function Q(e, t) {
      return Z(e, t) && !X(e, t);
    }
    function X(e, t) {
      var n,
        r,
        o =
          (n = t.limitSharing) == null
            ? void 0
            : n.limitSharingSettingTimestamp;
      return (
        e.enabled === !0 &&
        !J(o) &&
        Number((r = e.settingTimestamp) != null ? r : 0) <
          Number(o != null ? o : 0)
      );
    }
    function Y(e) {
      return J(e.settingTimestamp)
        ? (o("WALogger").WARN(
            s ||
              (s = babelHelpers.taggedTemplateLiteralLoose([
                "[acp2] ignoring a setting dated more than the drift allowance ahead",
              ])),
          ),
          !0)
        : !1;
    }
    function J(e) {
      return Number(e != null ? e : 0) > o("WATimeUtils").unixTimeMs() + _;
    }
    function Z(e, t) {
      var n,
        r,
        o,
        a = (n = e == null ? void 0 : e.settingTimestamp) != null ? n : 0,
        i =
          (r =
            t == null || (o = t.acp2Setting) == null
              ? void 0
              : o.settingTimestamp) != null
            ? r
            : 0;
      return Number(a) > Number(i);
    }
    function ee(e) {
      return o("WAWebLimitSharingGatingUtils").isAcp2Enabled() ? q(e) : null;
    }
    function te(e) {
      var t;
      return (
        e.enabled === !0 && Number((t = e.settingTimestamp) != null ? t : 0) > 0
      );
    }
    function ne(e, t) {
      var n,
        r,
        o,
        a =
          (n = e == null ? void 0 : e.limitSharingSettingTimestamp) != null
            ? n
            : 0,
        i =
          (r =
            t == null || (o = t.limitSharing) == null
              ? void 0
              : o.limitSharingSettingTimestamp) != null
            ? r
            : 0;
      return Number(a) > Number(i);
    }
    function re(e) {
      var t;
      return (t = o(
        "WAWebParseLimitSharingHistorySyncProto",
      ).getLimitSharingEnvelopeFromProtobuf(e)) == null
        ? void 0
        : t.limitSharing;
    }
    ((l.getAcp2SettingFromProtocolHistorySyncConversation = f),
      (l.shouldInjectAcp2HistorySyncNotice = g),
      (l.shouldWithholdHistorySyncMessage = h),
      (l.applyAcp2HistorySyncAdoptions = y),
      (l.getLimitSharingFromProtocolHistorySyncConversation = v),
      (l.parseLimitSharingFromMessage = S),
      (l.updateChatWithLimitSharingIfNewer = T),
      (l.parseAcp2SettingFromMessage = M),
      (l.updateChatWithAcp2IfNewer = O),
      (l.updateExistingAcp2SettingFromMessage = B),
      (l.updateExistingAcp2SettingIfNewer = U),
      (l.getPendingLimitSharingUpdate = V),
      (l.getPendingAcp2Update = H));
  },
  98,
);
