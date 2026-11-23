__d(
  "WAWebLimitSharingProtoUtils",
  [
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
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u,
      c,
      d,
      m = 6e4,
      p = new (o("WAPromiseQueue").PromiseQueueMap)(m),
      _ = new Map(),
      f = 10080 * 60 * 1e3,
      g = 50,
      h = new Map(),
      y = new Map();
    function C(e) {
      var t = e == null ? void 0 : e.acp2Setting;
      return t == null ||
        !ie(t) ||
        !o("WAWebLimitSharingGatingUtils").isAcp2Enabled()
        ? null
        : o(
            "WAWebParseLimitSharingHistorySyncProto",
          ).getAcp2SettingFromEnvelope(t);
    }
    function b(e, t, n) {
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
    function v(e, t) {
      var n,
        r = e == null ? void 0 : e.acp2Setting;
      if (r == null || !ie(r)) return !1;
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
    function S(t) {
      return Promise.all(
        Array.from(t, function (t) {
          var n = t[0],
            a = t[1];
          return Y(n, function () {
            return R(n, a);
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
      ).then(r("WAWebNoop"));
    }
    async function R(e, t) {
      if (!ne(t)) {
        var n = await o("WAWebLimitSharingModelUtils").getChat(e);
        n == null ||
          !oe(t, n) ||
          (await o("WAWebLimitSharingModelUtils").updateChatAcp2Setting(
            o("WAWebWidFactory").createWid(n.id),
            t,
          ));
      }
    }
    function L(e) {
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
    async function E(e, t, n) {
      var r, a;
      if (
        !o("WAWebLimitSharingGatingUtils").isOpusEnabled() &&
        !(
          t == null ||
          (e == null ? void 0 : e.from) == null ||
          (e == null || (r = e.id) == null ? void 0 : r.remote) == null
        )
      ) {
        var i = se(t);
        if (i) {
          await k(e, i);
          return;
        }
        var l = (a = t.messageContextInfo) == null ? void 0 : a.limitSharingV2,
          s = e.id.remote.isUser() && j(t) != null,
          u = s ? null : I(e, t, n);
        (l != null || u != null) && (await T(e, l, u, n, !s));
      }
    }
    async function k(e, t) {
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
        await A(e.id.remote.toString(), n));
    }
    function I(e, t, n) {
      var r,
        a,
        i = (r = t.messageContextInfo) == null ? void 0 : r.acp2Setting;
      return (i == null ? void 0 : i.enabled) !== !0 ||
        Number((a = i.settingTimestamp) != null ? a : 0) <= 0 ||
        n === "history" ||
        !e.id.remote.isUser() ||
        !o("WAWebLimitSharingGatingUtils").isAcp2Enabled()
        ? null
        : {
            enabled: !0,
            trigger: i.trigger,
            settingTimestamp: i.settingTimestamp,
          };
    }
    async function T(e, t, n, r, a) {
      var i = {
          limitSharing:
            t != null
              ? o(
                  "WAWebParseLimitSharingHistorySyncProto",
                ).getLimitSharingFromEnvelope(t)
              : null,
          acp2Rider: n,
          addsNotice: a,
        },
        l = e.id.remote.toString(),
        s = r === "history" ? null : e.id.toString(),
        u = function () {
          return D(l, i, s);
        };
      n != null ? await Y(l, u) : await p.enqueue(l, u);
    }
    async function D(e, t, n) {
      var r = await o("WAWebLimitSharingModelUtils").getChat(e);
      if (r == null) {
        n != null && P(h, n, t);
        return;
      }
      var a = o("WAWebWidFactory").createWid(r.id);
      if (!U(r, a)) {
        var i = t.acp2Rider,
          l = t.limitSharing;
        if (i != null && (await x(r, a, i))) {
          await W(
            babelHelpers.extends({}, r, { acp2Setting: i }),
            a,
            l != null ? l : $(i),
            "onValueChange",
          );
          return;
        }
        l != null &&
          (await W(r, a, l, t.addsNotice ? "onValueChange" : void 0));
      }
    }
    async function x(e, t, n) {
      return !o("WAWebLimitSharingGatingUtils").isAcp2EnabledForWid(t) ||
        ne(n) ||
        !ee(n, e)
        ? !1
        : (o("WAWebLimitSharingModelUtils").noteDatedAcp2Write(t),
          await o("WAWebLimitSharingModelUtils").updateChatAcp2Setting(t, n),
          await o("WAWebLimitSharingModelUtils").genAcp2SystemMessage(t, n),
          !0);
    }
    function $(e) {
      return {
        sharingLimited: !0,
        trigger: e.trigger,
        limitSharingSettingTimestamp: e.settingTimestamp,
      };
    }
    function P(e, t, n) {
      if (e.size >= g) {
        var r = e.keys().next().value;
        r != null && e.delete(r);
      }
      e.set(t, n);
    }
    function N(e) {
      if (!(y.size === 0 && h.size === 0))
        for (var t of e) {
          var n = t.id.toString(),
            r = t.id.remote.toString();
          (w(r, n), M(r, n));
        }
    }
    function M(e, t) {
      var n = y.get(t);
      n != null &&
        (y.delete(t),
        G(e, n).catch(function (e) {
          o("WALogger")
            .ERROR(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
                  "[acp2] applying held ACP2 setting failed",
                ])),
            )
            .catching(r("getErrorSafe")(e))
            .sendLogs("acp2-held-setting-apply-failed");
        }));
    }
    function w(e, t) {
      var n = h.get(t);
      n != null &&
        (h.delete(t),
        !o("WAWebLimitSharingGatingUtils").isOpusEnabled() &&
          p
            .enqueue(e, function () {
              return D(e, n, null);
            })
            .catch(function (e) {
              o("WALogger")
                .ERROR(
                  u ||
                    (u = babelHelpers.taggedTemplateLiteralLoose([
                      "[acp2] applying held riders failed",
                    ])),
                )
                .catching(r("getErrorSafe")(e))
                .sendLogs("acp2-held-riders-apply-failed");
            }));
    }
    async function A(e, t, n) {
      if (!o("WAWebLimitSharingGatingUtils").isOpusEnabled())
        return p.enqueue(e, function () {
          return B(e, t, n);
        });
    }
    async function F(e, t, n) {
      return n == null
        ? A(e, t, "onValueChange")
        : o("WAWebLimitSharingGatingUtils").isAcp2GroupEnabled()
          ? Y(e, function () {
              return O(e, t, n);
            })
          : (await K(e, n), A(e, t, "onValueChange"));
    }
    async function O(e, t, n) {
      var r = n.enabled === t.sharingLimited,
        a = await Z(e, n, r ? "onValueChange" : void 0);
      if (!o("WAWebLimitSharingGatingUtils").isOpusEnabled()) {
        var i = !a && n.enabled !== !0;
        await B(e, t, i ? "onValueChange" : void 0);
      }
    }
    async function B(e, t, n) {
      var r = await o("WAWebLimitSharingModelUtils").getChat(e);
      r != null && (await W(r, o("WAWebWidFactory").createWid(r.id), t, n));
    }
    async function W(e, t, n, r) {
      var a, i;
      if (le(n, e)) {
        var l =
            t.isUser() &&
            e.acp2Setting != null &&
            o("WAWebLimitSharingGatingUtils").isAcp2EnabledForWid(t) &&
            Number((a = e.acp2Setting) == null ? void 0 : a.settingTimestamp) >=
              Number(n.limitSharingSettingTimestamp),
          s =
            !l &&
            (r === "always" ||
              (r === "onValueChange" &&
                (((i = e.limitSharing) == null ? void 0 : i.sharingLimited) ===
                  !0) !=
                  (n.sharingLimited === !0)));
        (await q(e, t, n),
          await o("WAWebLimitSharingModelUtils").updateChat(t, n),
          s &&
            (await o(
              "WAWebLimitSharingModelUtils",
            ).genLimitSharingSystemMessage(t, n)));
      }
    }
    async function q(e, t, n) {
      var r;
      n.sharingLimited !== !1 ||
        !t.isUser() ||
        ((r = e.acp2Setting) == null ? void 0 : r.enabled) !== !0 ||
        (await Z(e.id, {
          enabled: !1,
          trigger: n.trigger,
          settingTimestamp: n.limitSharingSettingTimestamp,
          initiatedBy: n.initiatedBy,
        }));
    }
    function U(e, t) {
      var n;
      return (
        ((n = e.acp2Setting) == null ? void 0 : n.enabled) === !0 &&
        o("WAWebLimitSharingGatingUtils").isAcp2EnabledForWid(t)
      );
    }
    async function V(e, t, n) {
      var r;
      if (
        !(
          t == null ||
          (e == null ? void 0 : e.from) == null ||
          (e == null || (r = e.id) == null ? void 0 : r.remote) == null
        ) &&
        e.id.remote.isUser()
      ) {
        var o = ae(t);
        o && (await H(e, o, n));
      }
    }
    async function H(e, t, n) {
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
        n !== "history" &&
          (await G(e.id.remote.toString(), r, void 0, e.id.toString())));
    }
    function G(e, t, n, r) {
      return o("WAWebLimitSharingGatingUtils").isAcp2Enabled()
        ? Y(e, async function () {
            await Z(e, t, n, r);
          })
        : Promise.resolve();
    }
    async function z(e, t, n) {
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
        var l = j(t);
        if (l != null)
          try {
            await K(
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
              c ||
                (c = babelHelpers.taggedTemplateLiteralLoose([
                  "[acp2] ACP2 update outside the rollout failed: ",
                  "",
                ])),
              r("getErrorSafe")(e),
            );
          }
      }
    }
    function j(e) {
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
    function K(e, t) {
      return p.enqueue(e, async function () {
        var n = await o("WAWebLimitSharingModelUtils").getChat(e);
        (n == null ? void 0 : n.acp2Setting) != null && (await Z(e, t));
      });
    }
    function Q(e) {
      return p.waitIfPending(e);
    }
    function X(e) {
      return _.has(e) ? p.waitIfPending(e) : null;
    }
    function Y(e, t) {
      return (
        J(e, 1),
        p.enqueue(e, async function () {
          try {
            await t();
          } finally {
            J(e, -1);
          }
        })
      );
    }
    function J(e, t) {
      var n,
        r = ((n = _.get(e)) != null ? n : 0) + t;
      r > 0 ? _.set(e, r) : _.delete(e);
    }
    async function Z(e, t, n, r) {
      var a, i;
      if (ne(t)) return !1;
      var l = await o("WAWebLimitSharingModelUtils").getChat(e);
      if (l == null) return (r != null && P(y, r, t), !1);
      if (!ee(t, l)) return !1;
      var s = o("WAWebWidFactory").createWid(l.id),
        u =
          l.limitSharing != null &&
          Number(
            (a = l.limitSharing) == null
              ? void 0
              : a.limitSharingSettingTimestamp,
          ) === Number(t.settingTimestamp),
        c =
          o("WAWebLimitSharingGatingUtils").isAcp2EnabledForWid(s) &&
          !u &&
          (n === "always" ||
            (n === "onValueChange" &&
              (((i = l.acp2Setting) == null ? void 0 : i.enabled) === !0) !==
                t.enabled));
      return (
        o("WAWebLimitSharingModelUtils").noteDatedAcp2Write(s),
        await o("WAWebLimitSharingModelUtils").updateChatAcp2Setting(s, t),
        c &&
          (await o("WAWebLimitSharingModelUtils").genAcp2SystemMessage(s, t)),
        c
      );
    }
    function ee(e, t) {
      return oe(e, t) && !te(e, t);
    }
    function te(e, t) {
      var n,
        r,
        o =
          (n = t.limitSharing) == null
            ? void 0
            : n.limitSharingSettingTimestamp;
      return (
        e.enabled === !0 &&
        !re(o) &&
        Number((r = e.settingTimestamp) != null ? r : 0) <
          Number(o != null ? o : 0)
      );
    }
    function ne(e) {
      return re(e.settingTimestamp)
        ? (o("WALogger").WARN(
            d ||
              (d = babelHelpers.taggedTemplateLiteralLoose([
                "[acp2] ignoring a setting dated more than the drift allowance ahead",
              ])),
          ),
          !0)
        : !1;
    }
    function re(e) {
      return Number(e != null ? e : 0) > o("WATimeUtils").unixTimeMs() + f;
    }
    function oe(e, t) {
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
    function ae(e) {
      return o("WAWebLimitSharingGatingUtils").isAcp2Enabled() ? j(e) : null;
    }
    function ie(e) {
      var t;
      return (
        e.enabled === !0 && Number((t = e.settingTimestamp) != null ? t : 0) > 0
      );
    }
    function le(e, t) {
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
    function se(e) {
      var t;
      return (t = o(
        "WAWebParseLimitSharingHistorySyncProto",
      ).getLimitSharingEnvelopeFromProtobuf(e)) == null
        ? void 0
        : t.limitSharing;
    }
    ((l.getAcp2SettingFromProtocolHistorySyncConversation = C),
      (l.shouldInjectAcp2HistorySyncNotice = b),
      (l.shouldWithholdHistorySyncMessage = v),
      (l.applyAcp2HistorySyncAdoptions = S),
      (l.getLimitSharingFromProtocolHistorySyncConversation = L),
      (l.parseLimitSharingFromMessage = E),
      (l.applyLimitSharingHeldForStoredMsgs = N),
      (l.updateChatWithLimitSharingIfNewer = A),
      (l.updateGroupWithLimitSharingIfNewer = F),
      (l.parseAcp2SettingFromMessage = V),
      (l.updateChatWithAcp2IfNewer = G),
      (l.updateExistingAcp2SettingFromMessage = z),
      (l.getPendingLimitSharingUpdate = Q),
      (l.getPendingAcp2Update = X));
  },
  98,
);
