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
      m = 6e4,
      p = new (o("WAPromiseQueue").PromiseQueueMap)(m),
      _ = new Map(),
      f = 10080 * 60 * 1e3,
      g = 50,
      h = new Map();
    function y(e) {
      var t = e == null ? void 0 : e.acp2Setting;
      return t == null ||
        !Ce(t) ||
        !o("WAWebLimitSharingGatingUtils").isAcp2Enabled()
        ? null
        : o(
            "WAWebParseLimitSharingHistorySyncProto",
          ).getAcp2SettingFromEnvelope(t);
    }
    function C(e, t, n) {
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
    function b(e, t) {
      var n,
        r = e == null ? void 0 : e.acp2Setting;
      if (r == null || !Ce(r)) return !1;
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
    function v(t) {
      return (d || (d = n("Promise")))
        .all(
          Array.from(t, function (t) {
            var n = t[0],
              a = t[1];
            return ue(n, function () {
              return S(n, a);
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
    function S(e, t) {
      return R.apply(this, arguments);
    }
    function R() {
      return (
        (R = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          if (!fe(t)) {
            var n = yield o("WAWebLimitSharingModelUtils").getChat(e);
            n == null ||
              !he(t, n) ||
              (yield o("WAWebLimitSharingModelUtils").updateChatAcp2Setting(
                o("WAWebWidFactory").createWid(n.id),
                t,
              ));
          }
        })),
        R.apply(this, arguments)
      );
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
    function E(e, t, n) {
      return k.apply(this, arguments);
    }
    function k() {
      return (
        (k = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
          var r, a;
          if (
            !o("WAWebLimitSharingGatingUtils").isOpusEnabled() &&
            !(
              t == null ||
              (e == null ? void 0 : e.from) == null ||
              (e == null || (r = e.id) == null ? void 0 : r.remote) == null
            )
          ) {
            var i = ve(t);
            if (i) {
              yield I(e, i);
              return;
            }
            var l =
                (a = t.messageContextInfo) == null ? void 0 : a.limitSharingV2,
              s = D(e, t, n);
            (l != null || s != null) && (yield x(e, l, s, n));
          }
        })),
        k.apply(this, arguments)
      );
    }
    function I(e, t) {
      return T.apply(this, arguments);
    }
    function T() {
      return (
        (T = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
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
            yield B(e.id.remote.toString(), n));
        })),
        T.apply(this, arguments)
      );
    }
    function D(e, t, n) {
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
    function x(e, t, n, r) {
      return $.apply(this, arguments);
    }
    function $() {
      return (
        ($ = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, n, r) {
            var a = {
                limitSharing:
                  t != null
                    ? o(
                        "WAWebParseLimitSharingHistorySyncProto",
                      ).getLimitSharingFromEnvelope(t)
                    : null,
                acp2Rider: n,
              },
              i = e.id.remote.toString(),
              l = r === "history" ? null : e.id.toString(),
              s = function () {
                return P(i, a, l);
              };
            n != null ? yield ue(i, s) : yield p.enqueue(i, s);
          },
        )),
        $.apply(this, arguments)
      );
    }
    function P(e, t, n) {
      return N.apply(this, arguments);
    }
    function N() {
      return (
        (N = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
          var r = yield o("WAWebLimitSharingModelUtils").getChat(e);
          if (r == null) {
            n != null && F(n, t);
            return;
          }
          var a = o("WAWebWidFactory").createWid(r.id);
          if (!Y(r, a)) {
            var i = t.acp2Rider,
              l = t.limitSharing;
            if (i != null && (yield M(r, a, i))) {
              yield j(
                babelHelpers.extends({}, r, { acp2Setting: i }),
                a,
                l != null ? l : A(i),
                "onValueChange",
              );
              return;
            }
            l != null && (yield j(r, a, l, "onValueChange"));
          }
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
          return !o("WAWebLimitSharingGatingUtils").isAcp2EnabledForWid(t) ||
            fe(n) ||
            !pe(n, e)
            ? !1
            : (o("WAWebLimitSharingModelUtils").noteDatedAcp2Write(t),
              yield o("WAWebLimitSharingModelUtils").updateChatAcp2Setting(
                t,
                n,
              ),
              yield o("WAWebLimitSharingModelUtils").genAcp2SystemMessage(t, n),
              !0);
        })),
        w.apply(this, arguments)
      );
    }
    function A(e) {
      return {
        sharingLimited: !0,
        trigger: e.trigger,
        limitSharingSettingTimestamp: e.settingTimestamp,
      };
    }
    function F(e, t) {
      if (h.size >= g) {
        var n = h.keys().next().value;
        n != null && h.delete(n);
      }
      h.set(e, t);
    }
    function O(e) {
      if (h.size !== 0) {
        var t = function () {
            var e = a.id.toString(),
              t = h.get(e);
            if (
              t == null ||
              (h.delete(e), o("WAWebLimitSharingGatingUtils").isOpusEnabled())
            )
              return 0;
            var n = a.id.remote.toString();
            p.enqueue(n, function () {
              return P(n, t, null);
            }).catch(function (e) {
              o("WALogger")
                .ERROR(
                  s ||
                    (s = babelHelpers.taggedTemplateLiteralLoose([
                      "[acp2] applying held riders failed",
                    ])),
                )
                .catching(r("getErrorSafe")(e))
                .sendLogs("acp2-held-riders-apply-failed");
            });
          },
          n;
        for (var a of e) n = t();
      }
    }
    function B(e, t, n) {
      return W.apply(this, arguments);
    }
    function W() {
      return (
        (W = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
          if (!o("WAWebLimitSharingGatingUtils").isOpusEnabled())
            return p.enqueue(e, function () {
              return G(e, t, n);
            });
        })),
        W.apply(this, arguments)
      );
    }
    function q(e, t, n) {
      return U.apply(this, arguments);
    }
    function U() {
      return (
        (U = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
          return n == null
            ? B(e, t, "onValueChange")
            : o("WAWebLimitSharingGatingUtils").isAcp2GroupEnabled()
              ? ue(e, function () {
                  return V(e, t, n);
                })
              : (yield ie(e, n), B(e, t, "onValueChange"));
        })),
        U.apply(this, arguments)
      );
    }
    function V(e, t, n) {
      return H.apply(this, arguments);
    }
    function H() {
      return (
        (H = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
          var r = n.enabled === t.sharingLimited,
            a = yield de(e, n, r ? "onValueChange" : void 0);
          if (!o("WAWebLimitSharingGatingUtils").isOpusEnabled()) {
            var i = !a && n.enabled !== !0;
            yield G(e, t, i ? "onValueChange" : void 0);
          }
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
          var r = yield o("WAWebLimitSharingModelUtils").getChat(e);
          r != null && (yield j(r, o("WAWebWidFactory").createWid(r.id), t, n));
        })),
        z.apply(this, arguments)
      );
    }
    function j(e, t, n, r) {
      return K.apply(this, arguments);
    }
    function K() {
      return (
        (K = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, n, r) {
            var a, i;
            if (be(n, e)) {
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
              (yield Q(e, t, n),
                yield o("WAWebLimitSharingModelUtils").updateChat(t, n),
                s &&
                  (yield o(
                    "WAWebLimitSharingModelUtils",
                  ).genLimitSharingSystemMessage(t, n)));
            }
          },
        )),
        K.apply(this, arguments)
      );
    }
    function Q(e, t, n) {
      return X.apply(this, arguments);
    }
    function X() {
      return (
        (X = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
          var r;
          n.sharingLimited !== !1 ||
            !t.isUser() ||
            ((r = e.acp2Setting) == null ? void 0 : r.enabled) !== !0 ||
            (yield de(e.id, {
              enabled: !1,
              trigger: n.trigger,
              settingTimestamp: n.limitSharingSettingTimestamp,
              initiatedBy: n.initiatedBy,
            }));
        })),
        X.apply(this, arguments)
      );
    }
    function Y(e, t) {
      var n;
      return (
        ((n = e.acp2Setting) == null ? void 0 : n.enabled) === !0 &&
        o("WAWebLimitSharingGatingUtils").isAcp2EnabledForWid(t)
      );
    }
    function J(e, t, n) {
      return Z.apply(this, arguments);
    }
    function Z() {
      return (
        (Z = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
          var r;
          if (
            !(
              t == null ||
              (e == null ? void 0 : e.from) == null ||
              (e == null || (r = e.id) == null ? void 0 : r.remote) == null
            ) &&
            e.id.remote.isUser()
          ) {
            var o = ye(t);
            o && (yield ee(e, o, n));
          }
        })),
        Z.apply(this, arguments)
      );
    }
    function ee(e, t, n) {
      return te.apply(this, arguments);
    }
    function te() {
      return (
        (te = n("asyncToGeneratorRuntime").asyncToGenerator(
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
              n !== "history" && (yield ne(e.id.remote.toString(), r)));
          },
        )),
        te.apply(this, arguments)
      );
    }
    function ne(e, t, r) {
      return o("WAWebLimitSharingGatingUtils").isAcp2Enabled()
        ? ue(
            e,
            n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
              yield de(e, t, r);
            }),
          )
        : (d || (d = n("Promise"))).resolve();
    }
    function re(e, t, n) {
      return oe.apply(this, arguments);
    }
    function oe() {
      return (
        (oe = n("asyncToGeneratorRuntime").asyncToGenerator(
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
              var l = ae(t);
              if (l != null)
                try {
                  yield ie(
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
          },
        )),
        oe.apply(this, arguments)
      );
    }
    function ae(e) {
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
    function ie(e, t) {
      return p.enqueue(
        e,
        n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var n = yield o("WAWebLimitSharingModelUtils").getChat(e);
          (n == null ? void 0 : n.acp2Setting) != null && (yield de(e, t));
        }),
      );
    }
    function le(e) {
      return p.waitIfPending(e);
    }
    function se(e) {
      return _.has(e) ? p.waitIfPending(e) : null;
    }
    function ue(e, t) {
      return (
        ce(e, 1),
        p.enqueue(
          e,
          n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
            try {
              yield t();
            } finally {
              ce(e, -1);
            }
          }),
        )
      );
    }
    function ce(e, t) {
      var n,
        r = ((n = _.get(e)) != null ? n : 0) + t;
      r > 0 ? _.set(e, r) : _.delete(e);
    }
    function de(e, t, n) {
      return me.apply(this, arguments);
    }
    function me() {
      return (
        (me = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, n) {
            var r, a;
            if (fe(t)) return !1;
            var i = yield o("WAWebLimitSharingModelUtils").getChat(e);
            if (i == null || !pe(t, i)) return !1;
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
                    (((a = i.acp2Setting) == null ? void 0 : a.enabled) ===
                      !0) !==
                      t.enabled));
            return (
              o("WAWebLimitSharingModelUtils").noteDatedAcp2Write(l),
              yield o("WAWebLimitSharingModelUtils").updateChatAcp2Setting(
                l,
                t,
              ),
              u &&
                (yield o("WAWebLimitSharingModelUtils").genAcp2SystemMessage(
                  l,
                  t,
                )),
              u
            );
          },
        )),
        me.apply(this, arguments)
      );
    }
    function pe(e, t) {
      return he(e, t) && !_e(e, t);
    }
    function _e(e, t) {
      var n,
        r,
        o =
          (n = t.limitSharing) == null
            ? void 0
            : n.limitSharingSettingTimestamp;
      return (
        e.enabled === !0 &&
        !ge(o) &&
        Number((r = e.settingTimestamp) != null ? r : 0) <
          Number(o != null ? o : 0)
      );
    }
    function fe(e) {
      return ge(e.settingTimestamp)
        ? (o("WALogger").WARN(
            u ||
              (u = babelHelpers.taggedTemplateLiteralLoose([
                "[acp2] ignoring a setting dated more than the drift allowance ahead",
              ])),
          ),
          !0)
        : !1;
    }
    function ge(e) {
      return Number(e != null ? e : 0) > o("WATimeUtils").unixTimeMs() + f;
    }
    function he(e, t) {
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
    function ye(e) {
      return o("WAWebLimitSharingGatingUtils").isAcp2Enabled() ? ae(e) : null;
    }
    function Ce(e) {
      var t;
      return (
        e.enabled === !0 && Number((t = e.settingTimestamp) != null ? t : 0) > 0
      );
    }
    function be(e, t) {
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
    function ve(e) {
      var t;
      return (t = o(
        "WAWebParseLimitSharingHistorySyncProto",
      ).getLimitSharingEnvelopeFromProtobuf(e)) == null
        ? void 0
        : t.limitSharing;
    }
    ((l.getAcp2SettingFromProtocolHistorySyncConversation = y),
      (l.shouldInjectAcp2HistorySyncNotice = C),
      (l.shouldWithholdHistorySyncMessage = b),
      (l.applyAcp2HistorySyncAdoptions = v),
      (l.getLimitSharingFromProtocolHistorySyncConversation = L),
      (l.parseLimitSharingFromMessage = E),
      (l.applyRidersHeldForStoredMsgs = O),
      (l.updateChatWithLimitSharingIfNewer = B),
      (l.updateGroupWithLimitSharingIfNewer = q),
      (l.parseAcp2SettingFromMessage = J),
      (l.updateChatWithAcp2IfNewer = ne),
      (l.updateExistingAcp2SettingFromMessage = re),
      (l.updateExistingAcp2SettingIfNewer = ie),
      (l.getPendingLimitSharingUpdate = le),
      (l.getPendingAcp2Update = se));
  },
  98,
);
