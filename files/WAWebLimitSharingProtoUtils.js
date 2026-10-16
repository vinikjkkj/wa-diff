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
      d,
      m,
      p = 6e4,
      _ = new (o("WAPromiseQueue").PromiseQueueMap)(p),
      f = new Map(),
      g = 10080 * 60 * 1e3,
      h = 50,
      y = new Map(),
      C = new Map();
    function b(e) {
      var t = e == null ? void 0 : e.acp2Setting;
      return t == null ||
        !Re(t) ||
        !o("WAWebLimitSharingGatingUtils").isAcp2Enabled()
        ? null
        : o(
            "WAWebParseLimitSharingHistorySyncProto",
          ).getAcp2SettingFromEnvelope(t);
    }
    function v(e, t, n) {
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
    function S(e, t) {
      var n,
        r = e == null ? void 0 : e.acp2Setting;
      if (r == null || !Re(r)) return !1;
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
    function R(t) {
      return (m || (m = n("Promise")))
        .all(
          Array.from(t, function (t) {
            var n = t[0],
              a = t[1];
            return pe(n, function () {
              return L(n, a);
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
    function L(e, t) {
      return E.apply(this, arguments);
    }
    function E() {
      return (
        (E = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          if (!Ce(t)) {
            var n = yield o("WAWebLimitSharingModelUtils").getChat(e);
            n == null ||
              !ve(t, n) ||
              (yield o("WAWebLimitSharingModelUtils").updateChatAcp2Setting(
                o("WAWebWidFactory").createWid(n.id),
                t,
              ));
          }
        })),
        E.apply(this, arguments)
      );
    }
    function k(e) {
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
    function I(e, t, n) {
      return T.apply(this, arguments);
    }
    function T() {
      return (
        (T = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
          var r, a;
          if (
            !o("WAWebLimitSharingGatingUtils").isOpusEnabled() &&
            !(
              t == null ||
              (e == null ? void 0 : e.from) == null ||
              (e == null || (r = e.id) == null ? void 0 : r.remote) == null
            )
          ) {
            var i = Ee(t);
            if (i) {
              yield D(e, i);
              return;
            }
            var l =
                (a = t.messageContextInfo) == null ? void 0 : a.limitSharingV2,
              s = e.id.remote.isUser() && ue(t) != null,
              u = s ? null : $(e, t, n);
            (l != null || u != null) && (yield P(e, l, u, n, !s));
          }
        })),
        T.apply(this, arguments)
      );
    }
    function D(e, t) {
      return x.apply(this, arguments);
    }
    function x() {
      return (
        (x = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
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
            yield V(e.id.remote.toString(), n));
        })),
        x.apply(this, arguments)
      );
    }
    function $(e, t, n) {
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
    function P(e, t, n, r, o) {
      return N.apply(this, arguments);
    }
    function N() {
      return (
        (N = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, n, r, a) {
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
                return M(l, i, s);
              };
            n != null ? yield pe(l, u) : yield _.enqueue(l, u);
          },
        )),
        N.apply(this, arguments)
      );
    }
    function M(e, t, n) {
      return w.apply(this, arguments);
    }
    function w() {
      return (
        (w = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
          var r = yield o("WAWebLimitSharingModelUtils").getChat(e);
          if (r == null) {
            n != null && B(y, n, t);
            return;
          }
          var a = o("WAWebWidFactory").createWid(r.id);
          if (!te(r, a)) {
            var i = t.acp2Rider,
              l = t.limitSharing;
            if (i != null && (yield A(r, a, i))) {
              yield Y(
                babelHelpers.extends({}, r, { acp2Setting: i }),
                a,
                l != null ? l : O(i),
                "onValueChange",
              );
              return;
            }
            l != null &&
              (yield Y(r, a, l, t.addsNotice ? "onValueChange" : void 0));
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
          return !o("WAWebLimitSharingGatingUtils").isAcp2EnabledForWid(t) ||
            Ce(n) ||
            !he(n, e)
            ? !1
            : (o("WAWebLimitSharingModelUtils").noteDatedAcp2Write(t),
              yield o("WAWebLimitSharingModelUtils").updateChatAcp2Setting(
                t,
                n,
              ),
              yield o("WAWebLimitSharingModelUtils").genAcp2SystemMessage(t, n),
              !0);
        })),
        F.apply(this, arguments)
      );
    }
    function O(e) {
      return {
        sharingLimited: !0,
        trigger: e.trigger,
        limitSharingSettingTimestamp: e.settingTimestamp,
      };
    }
    function B(e, t, n) {
      if (e.size >= h) {
        var r = e.keys().next().value;
        r != null && e.delete(r);
      }
      e.set(t, n);
    }
    function W(e) {
      if (!(C.size === 0 && y.size === 0))
        for (var t of e) {
          var n = t.id.toString(),
            r = t.id.remote.toString();
          (U(r, n), q(r, n));
        }
    }
    function q(e, t) {
      var n = C.get(t);
      n != null &&
        (C.delete(t),
        ie(e, n).catch(function (e) {
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
    function U(e, t) {
      var n = y.get(t);
      n != null &&
        (y.delete(t),
        !o("WAWebLimitSharingGatingUtils").isOpusEnabled() &&
          _.enqueue(e, function () {
            return M(e, n, null);
          }).catch(function (e) {
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
    function V(e, t, n) {
      return H.apply(this, arguments);
    }
    function H() {
      return (
        (H = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
          if (!o("WAWebLimitSharingGatingUtils").isOpusEnabled())
            return _.enqueue(e, function () {
              return Q(e, t, n);
            });
        })),
        H.apply(this, arguments)
      );
    }
    function G(e, t, n) {
      return z.apply(this, arguments);
    }
    function z() {
      return (
        (z = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
          return n == null
            ? V(e, t, "onValueChange")
            : o("WAWebLimitSharingGatingUtils").isAcp2GroupEnabled()
              ? pe(e, function () {
                  return j(e, t, n);
                })
              : (yield ce(e, n), V(e, t, "onValueChange"));
        })),
        z.apply(this, arguments)
      );
    }
    function j(e, t, n) {
      return K.apply(this, arguments);
    }
    function K() {
      return (
        (K = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
          var r = n.enabled === t.sharingLimited,
            a = yield fe(e, n, r ? "onValueChange" : void 0);
          if (!o("WAWebLimitSharingGatingUtils").isOpusEnabled()) {
            var i = !a && n.enabled !== !0;
            yield Q(e, t, i ? "onValueChange" : void 0);
          }
        })),
        K.apply(this, arguments)
      );
    }
    function Q(e, t, n) {
      return X.apply(this, arguments);
    }
    function X() {
      return (
        (X = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
          var r = yield o("WAWebLimitSharingModelUtils").getChat(e);
          r != null && (yield Y(r, o("WAWebWidFactory").createWid(r.id), t, n));
        })),
        X.apply(this, arguments)
      );
    }
    function Y(e, t, n, r) {
      return J.apply(this, arguments);
    }
    function J() {
      return (
        (J = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, n, r) {
            var a, i;
            if (Le(n, e)) {
              var l =
                  t.isUser() &&
                  e.acp2Setting != null &&
                  o("WAWebLimitSharingGatingUtils").isAcp2EnabledForWid(t) &&
                  Number(
                    (a = e.acp2Setting) == null ? void 0 : a.settingTimestamp,
                  ) >= Number(n.limitSharingSettingTimestamp),
                s =
                  !l &&
                  (r === "always" ||
                    (r === "onValueChange" &&
                      (((i = e.limitSharing) == null
                        ? void 0
                        : i.sharingLimited) ===
                        !0) !=
                        (n.sharingLimited === !0)));
              (yield Z(e, t, n),
                yield o("WAWebLimitSharingModelUtils").updateChat(t, n),
                s &&
                  (yield o(
                    "WAWebLimitSharingModelUtils",
                  ).genLimitSharingSystemMessage(t, n)));
            }
          },
        )),
        J.apply(this, arguments)
      );
    }
    function Z(e, t, n) {
      return ee.apply(this, arguments);
    }
    function ee() {
      return (
        (ee = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, n) {
            var r;
            n.sharingLimited !== !1 ||
              !t.isUser() ||
              ((r = e.acp2Setting) == null ? void 0 : r.enabled) !== !0 ||
              (yield fe(e.id, {
                enabled: !1,
                trigger: n.trigger,
                settingTimestamp: n.limitSharingSettingTimestamp,
                initiatedBy: n.initiatedBy,
              }));
          },
        )),
        ee.apply(this, arguments)
      );
    }
    function te(e, t) {
      var n;
      return (
        ((n = e.acp2Setting) == null ? void 0 : n.enabled) === !0 &&
        o("WAWebLimitSharingGatingUtils").isAcp2EnabledForWid(t)
      );
    }
    function ne(e, t, n) {
      return re.apply(this, arguments);
    }
    function re() {
      return (
        (re = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, n) {
            var r;
            if (
              !(
                t == null ||
                (e == null ? void 0 : e.from) == null ||
                (e == null || (r = e.id) == null ? void 0 : r.remote) == null
              ) &&
              e.id.remote.isUser()
            ) {
              var o = Se(t);
              o && (yield oe(e, o, n));
            }
          },
        )),
        re.apply(this, arguments)
      );
    }
    function oe(e, t, n) {
      return ae.apply(this, arguments);
    }
    function ae() {
      return (
        (ae = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, n) {
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
                (yield ie(e.id.remote.toString(), r, void 0, e.id.toString())));
          },
        )),
        ae.apply(this, arguments)
      );
    }
    function ie(e, t, r, a) {
      return o("WAWebLimitSharingGatingUtils").isAcp2Enabled()
        ? pe(
            e,
            n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
              yield fe(e, t, r, a);
            }),
          )
        : (m || (m = n("Promise"))).resolve();
    }
    function le(e, t, n) {
      return se.apply(this, arguments);
    }
    function se() {
      return (
        (se = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, n) {
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
              var l = ue(t);
              if (l != null)
                try {
                  yield ce(
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
                    d ||
                      (d = babelHelpers.taggedTemplateLiteralLoose([
                        "[acp2] ACP2 update outside the rollout failed: ",
                        "",
                      ])),
                    r("getErrorSafe")(e),
                  );
                }
            }
          },
        )),
        se.apply(this, arguments)
      );
    }
    function ue(e) {
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
    function ce(e, t) {
      return _.enqueue(
        e,
        n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var n = yield o("WAWebLimitSharingModelUtils").getChat(e);
          (n == null ? void 0 : n.acp2Setting) != null && (yield fe(e, t));
        }),
      );
    }
    function de(e) {
      return _.waitIfPending(e);
    }
    function me(e) {
      return f.has(e) ? _.waitIfPending(e) : null;
    }
    function pe(e, t) {
      return (
        _e(e, 1),
        _.enqueue(
          e,
          n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
            try {
              yield t();
            } finally {
              _e(e, -1);
            }
          }),
        )
      );
    }
    function _e(e, t) {
      var n,
        r = ((n = f.get(e)) != null ? n : 0) + t;
      r > 0 ? f.set(e, r) : f.delete(e);
    }
    function fe(e, t, n, r) {
      return ge.apply(this, arguments);
    }
    function ge() {
      return (
        (ge = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, n, r) {
            var a, i;
            if (Ce(t)) return !1;
            var l = yield o("WAWebLimitSharingModelUtils").getChat(e);
            if (l == null) return (r != null && B(C, r, t), !1);
            if (!he(t, l)) return !1;
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
                    (((i = l.acp2Setting) == null ? void 0 : i.enabled) ===
                      !0) !==
                      t.enabled));
            return (
              o("WAWebLimitSharingModelUtils").noteDatedAcp2Write(s),
              yield o("WAWebLimitSharingModelUtils").updateChatAcp2Setting(
                s,
                t,
              ),
              c &&
                (yield o("WAWebLimitSharingModelUtils").genAcp2SystemMessage(
                  s,
                  t,
                )),
              c
            );
          },
        )),
        ge.apply(this, arguments)
      );
    }
    function he(e, t) {
      return ve(e, t) && !ye(e, t);
    }
    function ye(e, t) {
      var n,
        r,
        o =
          (n = t.limitSharing) == null
            ? void 0
            : n.limitSharingSettingTimestamp;
      return (
        e.enabled === !0 &&
        !be(o) &&
        Number((r = e.settingTimestamp) != null ? r : 0) <
          Number(o != null ? o : 0)
      );
    }
    function Ce(e) {
      return be(e.settingTimestamp)
        ? (o("WALogger").WARN(
            c ||
              (c = babelHelpers.taggedTemplateLiteralLoose([
                "[acp2] ignoring a setting dated more than the drift allowance ahead",
              ])),
          ),
          !0)
        : !1;
    }
    function be(e) {
      return Number(e != null ? e : 0) > o("WATimeUtils").unixTimeMs() + g;
    }
    function ve(e, t) {
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
    function Se(e) {
      return o("WAWebLimitSharingGatingUtils").isAcp2Enabled() ? ue(e) : null;
    }
    function Re(e) {
      var t;
      return (
        e.enabled === !0 && Number((t = e.settingTimestamp) != null ? t : 0) > 0
      );
    }
    function Le(e, t) {
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
    function Ee(e) {
      var t;
      return (t = o(
        "WAWebParseLimitSharingHistorySyncProto",
      ).getLimitSharingEnvelopeFromProtobuf(e)) == null
        ? void 0
        : t.limitSharing;
    }
    ((l.getAcp2SettingFromProtocolHistorySyncConversation = b),
      (l.shouldInjectAcp2HistorySyncNotice = v),
      (l.shouldWithholdHistorySyncMessage = S),
      (l.applyAcp2HistorySyncAdoptions = R),
      (l.getLimitSharingFromProtocolHistorySyncConversation = k),
      (l.parseLimitSharingFromMessage = I),
      (l.applyLimitSharingHeldForStoredMsgs = W),
      (l.updateChatWithLimitSharingIfNewer = V),
      (l.updateGroupWithLimitSharingIfNewer = G),
      (l.parseAcp2SettingFromMessage = ne),
      (l.updateChatWithAcp2IfNewer = ie),
      (l.updateExistingAcp2SettingFromMessage = le),
      (l.getPendingLimitSharingUpdate = de),
      (l.getPendingAcp2Update = me));
  },
  98,
);
