__d(
  "WAWebLimitSharingProtoUtils",
  [
    "Promise",
    "WAPromiseQueue",
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
    var e,
      s = 6e4,
      u = new (o("WAPromiseQueue").PromiseQueueMap)(s);
    function c(e) {
      var t = e == null ? void 0 : e.acp2Setting;
      return t == null ||
        !B(t) ||
        !o("WAWebLimitSharingGatingUtils").isAcp2Enabled()
        ? null
        : o(
            "WAWebParseLimitSharingHistorySyncProto",
          ).getAcp2SettingFromEnvelope(t);
    }
    function d(e, t, n) {
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
    function m(e, t) {
      var n,
        r = e == null ? void 0 : e.acp2Setting;
      if (r == null || !B(r)) return !1;
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
    function p(e) {
      return _.apply(this, arguments);
    }
    function _() {
      return (
        (_ = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
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
              return F(n, a[t]);
            }),
          );
        })),
        _.apply(this, arguments)
      );
    }
    function f(e) {
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
    function g(e, t, n) {
      return h.apply(this, arguments);
    }
    function h() {
      return (
        (h = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
          var r, a;
          if (
            !o("WAWebLimitSharingGatingUtils").isOpusEnabled() &&
            !(
              t == null ||
              (e == null ? void 0 : e.from) == null ||
              (e == null || (r = e.id) == null ? void 0 : r.remote) == null
            )
          ) {
            var i = q(t);
            if (i) yield y(e, i);
            else if ((a = t.messageContextInfo) != null && a.limitSharingV2) {
              var l;
              yield b(
                e,
                (l = t.messageContextInfo) == null ? void 0 : l.limitSharingV2,
                n,
              );
            }
          }
        })),
        h.apply(this, arguments)
      );
    }
    function y(e, t) {
      return C.apply(this, arguments);
    }
    function C() {
      return (
        (C = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
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
            yield S(e.id.remote.toString(), n));
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
          var r = o(
              "WAWebParseLimitSharingHistorySyncProto",
            ).getLimitSharingFromEnvelope(t),
            a = n === "history" ? "onValueChange" : "always";
          yield S(e.id.remote.toString(), r, a);
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
          var r, a;
          if (!o("WAWebLimitSharingGatingUtils").isOpusEnabled()) {
            var i = yield o("WAWebLimitSharingModelUtils").getChat(e);
            if (!(i == null || !W(t, i))) {
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
              (yield L(i, l, t),
                u &&
                  (yield o(
                    "WAWebLimitSharingModelUtils",
                  ).genLimitSharingSystemMessage(l, t)),
                yield o("WAWebLimitSharingModelUtils").updateChat(l, t));
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
          var r;
          n.sharingLimited !== !1 ||
            !t.isUser() ||
            ((r = e.acp2Setting) == null ? void 0 : r.enabled) !== !0 ||
            (yield P(e.id, {
              enabled: !1,
              trigger: n.trigger,
              settingTimestamp: n.limitSharingSettingTimestamp,
              initiatedBy: n.initiatedBy,
            }));
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
          var r, o;
          if (
            !(
              t == null ||
              (e == null ? void 0 : e.from) == null ||
              (e == null || (r = e.id) == null ? void 0 : r.remote) == null
            ) &&
            e.id.remote.isUser()
          ) {
            var a = O(t);
            if (a) yield T(e, a, n);
            else if (
              (o = t.messageContextInfo) != null &&
              o.acp2Setting &&
              n !== "history"
            ) {
              var i;
              yield x(
                e,
                (i = t.messageContextInfo) == null ? void 0 : i.acp2Setting,
              );
            }
          }
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
            n !== "history" && (yield P(e.id.remote.toString(), r)));
        })),
        D.apply(this, arguments)
      );
    }
    function x(e, t) {
      return $.apply(this, arguments);
    }
    function $() {
      return (
        ($ = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          o("WAWebLimitSharingGatingUtils").isAcp2Enabled() &&
            (yield P(
              e.id.remote.toString(),
              o(
                "WAWebParseLimitSharingHistorySyncProto",
              ).getAcp2SettingFromEnvelope(t),
              "always",
            ));
        })),
        $.apply(this, arguments)
      );
    }
    function P(t, r, a) {
      return o("WAWebLimitSharingGatingUtils").isAcp2Enabled()
        ? u.enqueue(t, function () {
            return N(t, r, a);
          })
        : (e || (e = n("Promise"))).resolve();
    }
    function N(e, t, n) {
      return M.apply(this, arguments);
    }
    function M() {
      return (
        (M = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
          var r,
            a,
            i = yield o("WAWebLimitSharingModelUtils").getChat(e);
          if (!(i == null || !w(t, i))) {
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
        })),
        M.apply(this, arguments)
      );
    }
    function w(e, t) {
      return F(e, t) && !A(e, t);
    }
    function A(e, t) {
      var n, r, o;
      return (
        e.enabled === !0 &&
        Number((n = e.settingTimestamp) != null ? n : 0) <
          Number(
            (r =
              (o = t.limitSharing) == null
                ? void 0
                : o.limitSharingSettingTimestamp) != null
              ? r
              : 0,
          )
      );
    }
    function F(e, t) {
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
    function O(e) {
      var t;
      return o("WAWebLimitSharingGatingUtils").isAcp2Enabled()
        ? (t = o(
            "WAWebParseLimitSharingHistorySyncProto",
          ).getAcp2EnvelopeFromProtobuf(e)) == null
          ? void 0
          : t.acp2Setting
        : null;
    }
    function B(e) {
      var t;
      return (
        e.enabled === !0 && Number((t = e.settingTimestamp) != null ? t : 0) > 0
      );
    }
    function W(e, t) {
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
    function q(e) {
      var t;
      return (t = o(
        "WAWebParseLimitSharingHistorySyncProto",
      ).getLimitSharingEnvelopeFromProtobuf(e)) == null
        ? void 0
        : t.limitSharing;
    }
    ((l.getAcp2SettingFromProtocolHistorySyncConversation = c),
      (l.shouldInjectAcp2HistorySyncNotice = d),
      (l.shouldWithholdHistorySyncMessage = m),
      (l.selectNewerAcp2HistorySyncAdoptions = p),
      (l.getLimitSharingFromProtocolHistorySyncConversation = f),
      (l.parseLimitSharingFromMessage = g),
      (l.updateChatWithLimitSharingIfNewer = S),
      (l.parseAcp2SettingFromMessage = k),
      (l.updateChatWithAcp2IfNewer = P));
  },
  98,
);
