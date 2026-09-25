__d(
  "WAWebLimitSharingProtoUtils",
  [
    "Promise",
    "WAWebCommonMsgSubtypeTypes",
    "WAWebLimitSharingGatingUtils",
    "WAWebLimitSharingModelUtils",
    "WAWebLimitSharingPropMappingUtils",
    "WAWebMsgType",
    "WAWebParseLimitSharingHistorySyncProto",
    "WAWebProtobufsE2E.pb",
    "WAWebProtobufsWeb.pb",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e;
    function s(e) {
      var t = e == null ? void 0 : e.acp2Setting;
      return t == null ||
        !P(t) ||
        !o("WAWebLimitSharingGatingUtils").isAcp2Enabled()
        ? null
        : o(
            "WAWebParseLimitSharingHistorySyncProto",
          ).getAcp2SettingFromEnvelope(t);
    }
    function u(e, t, n) {
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
    function c(e, t) {
      var n,
        r = e == null ? void 0 : e.acp2Setting;
      if (r == null || !P(r)) return !1;
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
    function d(e) {
      return m.apply(this, arguments);
    }
    function m() {
      return (
        (m = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          var r = Array.from(t),
            a = yield (e || (e = n("Promise"))).all(
              r.map(function (e) {
                var t = e[0];
                return o("WAWebLimitSharingModelUtils").getChat(t);
              }),
            );
          return new Map(
            r.filter(function (e, t) {
              var n = e[1];
              return x(n, a[t]);
            }),
          );
        })),
        m.apply(this, arguments)
      );
    }
    function p(e) {
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
    function _(e, t, n) {
      return f.apply(this, arguments);
    }
    function f() {
      return (
        (f = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
          var r, a;
          if (
            !o("WAWebLimitSharingGatingUtils").isOpusEnabled() &&
            !(
              t == null ||
              (e == null ? void 0 : e.from) == null ||
              (e == null || (r = e.id) == null ? void 0 : r.remote) == null
            )
          ) {
            var i = M(t);
            if (i) yield g(e, i);
            else if ((a = t.messageContextInfo) != null && a.limitSharingV2) {
              var l;
              yield y(
                e,
                (l = t.messageContextInfo) == null ? void 0 : l.limitSharingV2,
                n,
              );
            }
          }
        })),
        f.apply(this, arguments)
      );
    }
    function g(e, t) {
      return h.apply(this, arguments);
    }
    function h() {
      return (
        (h = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
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
            yield b(e.id.remote.toString(), n));
        })),
        h.apply(this, arguments)
      );
    }
    function y(e, t, n) {
      return C.apply(this, arguments);
    }
    function C() {
      return (
        (C = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
          var r = o(
              "WAWebParseLimitSharingHistorySyncProto",
            ).getLimitSharingFromEnvelope(t),
            a = n === "history" ? "onValueChange" : "always";
          yield b(e.id.remote.toString(), r, a);
        })),
        C.apply(this, arguments)
      );
    }
    function b(e, t, n) {
      return v.apply(this, arguments);
    }
    function v() {
      return (
        (v = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
          var r, a;
          if (!o("WAWebLimitSharingGatingUtils").isOpusEnabled()) {
            var i = yield o("WAWebLimitSharingModelUtils").getChat(e);
            if (!(i == null || !N(t, i))) {
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
              (u &&
                (yield o(
                  "WAWebLimitSharingModelUtils",
                ).genLimitSharingSystemMessage(l, t)),
                yield o("WAWebLimitSharingModelUtils").updateChat(l, t));
            }
          }
        })),
        v.apply(this, arguments)
      );
    }
    function S(e, t, n) {
      return R.apply(this, arguments);
    }
    function R() {
      return (
        (R = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
          var r, o;
          if (
            !(
              t == null ||
              (e == null ? void 0 : e.from) == null ||
              (e == null || (r = e.id) == null ? void 0 : r.remote) == null
            ) &&
            e.id.remote.isUser()
          ) {
            var a = $(t);
            if (a) yield L(e, a, n);
            else if (
              (o = t.messageContextInfo) != null &&
              o.acp2Setting &&
              n !== "history"
            ) {
              var i;
              yield k(
                e,
                (i = t.messageContextInfo) == null ? void 0 : i.acp2Setting,
              );
            }
          }
        })),
        R.apply(this, arguments)
      );
    }
    function L(e, t, n) {
      return E.apply(this, arguments);
    }
    function E() {
      return (
        (E = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
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
            n !== "history" && (yield T(e.id.remote.toString(), r)));
        })),
        E.apply(this, arguments)
      );
    }
    function k(e, t) {
      return I.apply(this, arguments);
    }
    function I() {
      return (
        (I = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          o("WAWebLimitSharingGatingUtils").isAcp2Enabled() &&
            (yield T(
              e.id.remote.toString(),
              o(
                "WAWebParseLimitSharingHistorySyncProto",
              ).getAcp2SettingFromEnvelope(t),
              "always",
            ));
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
          var r, a;
          if (o("WAWebLimitSharingGatingUtils").isAcp2Enabled()) {
            var i = yield o("WAWebLimitSharingModelUtils").getChat(e);
            if (!(i == null || !x(t, i))) {
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
              (u &&
                (yield o("WAWebLimitSharingModelUtils").genAcp2SystemMessage(
                  l,
                  t,
                )),
                o("WAWebLimitSharingModelUtils").noteDatedAcp2Write(l),
                yield o("WAWebLimitSharingModelUtils").updateChatAcp2Setting(
                  l,
                  t,
                ));
            }
          }
        })),
        D.apply(this, arguments)
      );
    }
    function x(e, t) {
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
    function $(e) {
      var t;
      return o("WAWebLimitSharingGatingUtils").isAcp2Enabled()
        ? (t = o(
            "WAWebParseLimitSharingHistorySyncProto",
          ).getAcp2EnvelopeFromProtobuf(e)) == null
          ? void 0
          : t.acp2Setting
        : null;
    }
    function P(e) {
      var t;
      return (
        e.enabled === !0 && Number((t = e.settingTimestamp) != null ? t : 0) > 0
      );
    }
    function N(e, t) {
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
    function M(e) {
      var t;
      return (t = o(
        "WAWebParseLimitSharingHistorySyncProto",
      ).getLimitSharingEnvelopeFromProtobuf(e)) == null
        ? void 0
        : t.limitSharing;
    }
    ((l.getAcp2SettingFromProtocolHistorySyncConversation = s),
      (l.shouldInjectAcp2HistorySyncNotice = u),
      (l.shouldWithholdHistorySyncMessage = c),
      (l.selectNewerAcp2HistorySyncAdoptions = d),
      (l.getLimitSharingFromProtocolHistorySyncConversation = p),
      (l.parseLimitSharingFromMessage = _),
      (l.updateChatWithLimitSharingIfNewer = b),
      (l.parseAcp2SettingFromMessage = S),
      (l.updateChatWithAcp2IfNewer = T));
  },
  98,
);
