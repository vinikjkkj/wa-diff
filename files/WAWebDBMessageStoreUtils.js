__d(
  "WAWebDBMessageStoreUtils",
  [
    "WALogger",
    "WAWebABProps",
    "WAWebAck",
    "WAWebAddonGatingUtils",
    "WAWebApiMessageInfoStore",
    "WAWebBotBaseGating",
    "WAWebDBAddOnProviders",
    "WAWebDBMessageSerialization",
    "WAWebDBMessageUtils",
    "WAWebFutureproofReparseMsgsAction",
    "WAWebGroupMetadataCollection",
    "WAWebGroupMetadataGetters",
    "WAWebGroupUtils",
    "WAWebMsgGetters",
    "WAWebMsgKey",
    "WAWebMsgType",
    "WAWebOrderPreservingHex",
    "WAWebSchemaMessage",
    "WAWebViewMode.flow",
    "WAWebViewModeUtils",
    "WAWebWid",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c = 10,
      d = 1e9;
    function m(e) {
      var t = e.toString(16);
      return (t.length - 1).toString(16) + t;
    }
    function p(e) {
      if (e == null || e.length < 3) return null;
      var t = e.split("_")[2];
      return t ? o("WAWebOrderPreservingHex").undoOrderPreservingHex(t) : null;
    }
    function _(e, t, n) {
      var r = n != null ? m(n) : "";
      return e.toString() + "_" + t + "_" + r;
    }
    function f(e, t) {
      return e.toString() + "_" + t + "_g";
    }
    function g(e, t, n) {
      return h.apply(this, arguments);
    }
    function h() {
      return (
        (h = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
          var r = yield o("WAWebSchemaMessage")
              .getMessageTable()
              .between(["internalId"], e, t, n),
            a = r.filter(function (e) {
              return L(e);
            });
          return (yield E(a), a);
        })),
        h.apply(this, arguments)
      );
    }
    function y() {
      return C.apply(this, arguments);
    }
    function C() {
      return (
        (C = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e = yield o("WAWebSchemaMessage")
            .getMessageTable()
            .startsWithAnyOf(
              ["internalId"],
              [o("WAWebDBMessageUtils").InternalIdPrefix.GroupStatus],
            );
          return e;
        })),
        C.apply(this, arguments)
      );
    }
    function b() {
      return v.apply(this, arguments);
    }
    function v() {
      return (
        (v = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e = yield o("WAWebSchemaMessage")
            .getMessageTable()
            .startsWithAnyOf(
              ["internalId"],
              [o("WAWebDBMessageUtils").InternalIdPrefix.NewsletterStatus],
            );
          return e;
        })),
        v.apply(this, arguments)
      );
    }
    function S(e) {
      if (
        !o("WAWebGroupUtils").INVALID_CAG_NON_ADMIN_SYSTEM_MSG_SUBTYPES.has(
          e.subtype,
        ) ||
        !r("WAWebWid").isGroup(e.from)
      )
        return !1;
      var t = r("WAWebGroupMetadataCollection").get(e.from);
      if (t == null || !o("WAWebGroupMetadataGetters").getIsCag(t)) return !1;
      var n = t.participants.iAmAdmin();
      return !n;
    }
    function R(e) {
      return e.type === o("WAWebMsgType").MSG_TYPE.UNKNOWN;
    }
    function L(e, t) {
      t === void 0 && (t = []);
      var n = o("WAWebDBMessageSerialization").messageFromDbRow(e),
        r = D(e),
        a = o("WAWebDBAddOnProviders").getAddOnProviderForFutureproofMsg(n);
      return !(
        r ||
        (R(e) && e.futureproofReparsed === !0) ||
        (a && a.canRenderInUi(n) && !t.includes(e.id.toString())) ||
        e.type === o("WAWebMsgType").MSG_TYPE.DEBUG ||
        (!o("WAWebBotBaseGating").isBizBot1pEnabled() &&
          e.type === o("WAWebMsgType").MSG_TYPE.NOTIFICATION_TEMPLATE &&
          e.subtype === "biz_bot_1p_disclosure")
      );
    }
    function E(e) {
      return k.apply(this, arguments);
    }
    function k() {
      return (
        (k = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = I(e);
          if (t.length !== 0) {
            var n = yield o("WAWebApiMessageInfoStore").getHighestMsgAcks(
                t.map(function (e) {
                  return r("WAWebMsgKey").from(e.id);
                }),
              ),
              a = [];
            (t.forEach(function (e) {
              var t = e.ack,
                r = e.id,
                o = n.get(r);
              o != null && o > t && (a.push({ id: r, ack: o }), (e.ack = o));
            }),
              a.length > 0 &&
                (o("WALogger")
                  .LOG(
                    u ||
                      (u = babelHelpers.taggedTemplateLiteralLoose([
                        "maybeUpdateMsgAck: storing ack updates ",
                        "",
                      ])),
                    JSON.stringify(a),
                  )
                  .tags("message-store"),
                o("WAWebSchemaMessage")
                  .getMessageTable()
                  .bulkCreateOrMerge(a)));
          }
        })),
        k.apply(this, arguments)
      );
    }
    function I(t) {
      var n = [],
        a = t.filter(function (e) {
          if (
            !o("WAWebMsgGetters").getIsUnreadType(e) ||
            e.type === o("WAWebMsgType").MSG_TYPE.CIPHERTEXT ||
            e.type === o("WAWebMsgType").MSG_TYPE.UNKNOWN ||
            e.ack <= o("WAWebAck").ACK.CLOCK
          )
            return !1;
          var t = r("WAWebMsgKey").fromString(e.id);
          if (!t.fromMe) return !1;
          if (
            t.remote.isGroup() &&
            ((e.rowId != null && e.rowId < d) || e.count == null)
          )
            return (n.length < 3 && n.push(e.id), !1);
          if (o("WAWebMsgGetters").getIsAckPlayable(e)) {
            if (e.ack === o("WAWebAck").ACK.PLAYED) return !1;
          } else if (e.ack === o("WAWebAck").ACK.READ) return !1;
          return !0;
        });
      return (
        n.length > 0 &&
          o("WALogger")
            .LOG(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "getMsgMayNeedAckUpdate: skipped ",
                  " history group messages => ",
                  "",
                ])),
              n.length,
              n,
            )
            .tags("message-store"),
        a
      );
    }
    function T(e, t) {
      var n,
        r = self.performance.now(),
        a = o("WAWebABProps").getABPropConfigValue(
          "web_init_chat_max_unread_message_count",
        ),
        i,
        l = e.unreadCount,
        u = (n = e.unreadDividerOffset) != null ? n : 0,
        d = void 0,
        m = void 0,
        p = void 0,
        _ = 0,
        f = [],
        g = 0,
        h = function (r) {
          if (
            S(r) ||
            (_++,
            r.type === o("WAWebMsgType").MSG_TYPE.PROTOCOL &&
              r.subtype !== "ephemeral_setting")
          )
            return !1;
          var n = o("WAWebDBMessageSerialization").messageFromDbRow(r),
            h = D(r);
          if (h) return !1;
          if (R(r)) {
            var y = o(
              "WAWebDBAddOnProviders",
            ).getAddOnProviderForFutureproofMsg(n);
            if (r.futureproofReparsed === !0) return !1;
            if (!t) f.push(r);
            else if (y != null && y.canRenderInUi(n))
              return a !== 0 && g >= a
                ? (p == null && (p = r.id),
                  m ||
                    (o("WALogger").WARN(
                      s ||
                        (s = babelHelpers.taggedTemplateLiteralLoose([
                          "[init-from-storage] getKeyMsgsFromChatHistory: non-fp limit ",
                          "",
                        ])),
                      a,
                    ),
                    (m = r)),
                  !0)
                : (g++, !1);
          }
          if (
            (p == null && (p = r.id),
            m || (m = r),
            !d &&
              !h &&
              r.botPluginReferenceIndex == null &&
              o("WAWebViewModeUtils").isViewModeVisibleInSurface(
                o("WAWebViewMode.flow").ViewModeSurface.CHAT_LIST,
                r.viewMode,
              ) &&
              ![
                o("WAWebMsgType").MSG_TYPE.E2E_NOTIFICATION,
                o("WAWebMsgType").MSG_TYPE.PROTOCOL,
                o("WAWebMsgType").MSG_TYPE.DEBUG,
              ].includes(r.type) &&
              (d = r),
            !t && (d != null || _ > c))
          )
            return !0;
          if (l === 0 && u > 0)
            if (r.type === o("WAWebMsgType").MSG_TYPE.REVOKED) {
              if (((u -= 1), u === 0)) return ((i = r.id.toString()), !0);
            } else return !0;
          return !!(
            (((l === 0 && u === 0) || (a !== 0 && e.unreadCount >= a)) && d) ||
            (l > 0 &&
              o("WAWebMsgGetters").getIsUnreadType(r) &&
              ((l -= 1), l === 0 && ((i = r.id.toString()), u === 0)))
          );
        };
      return o("WAWebSchemaMessage")
        .getMessageTable()
        .between(["internalId"], e.id + "_/", e.id + "_g", { reverse: !0 }, h)
        .then(function () {
          return (
            f.length &&
              o("WAWebFutureproofReparseMsgsAction").processFutureproof(f),
            { anchor: i, previewMsg: d || m, lastReceivedKey: p }
          );
        });
    }
    function D(e) {
      if (e.type === o("WAWebMsgType").MSG_TYPE.KEEP_IN_CHAT) return !0;
      var t = e.futureproofType;
      return t != null
        ? o("WAWebAddonGatingUtils").isUnifiedInfraEnabledForType(t)
        : o("WAWebAddonGatingUtils").isUnifiedInfraEnabledForType(e.type);
    }
    var x = new Map([
      [
        o("WAWebMsgType").MSG_TYPE.GP2,
        ["remove", "add", "ephemeral", "invite", "leave"],
      ],
      [
        o("WAWebMsgType").MSG_TYPE.E2E_NOTIFICATION,
        [
          "encrypt",
          "encrypt_now",
          "e2e_identity_unavailable",
          "identity",
          "device",
          "chat_psa",
        ],
      ],
      [
        o("WAWebMsgType").MSG_TYPE.NOTIFICATION_TEMPLATE,
        [
          "change_number",
          "masked_thread_created",
          "cag_masked_thread_created",
          "verified_initial_unknown",
          "verified_initial_low",
          "verified_initial_high",
          "verified_transition_any_to_none",
          "verified_transition_any_to_high",
          "verified_transition_high_to_low",
          "verified_transition_high_to_unknown",
          "verified_transition_unknown_to_low",
          "verified_transition_low_to_unknown",
          "verified_transition_none_to_low",
          "verified_transition_none_to_unknown",
          "payment_transaction_status_update_failed",
          "payment_transaction_status_update_refunded",
          "payment_transaction_status_update_refund_failed",
          "payment_transaction_status_receiver_pending_setup",
          "payment_transaction_status_receiver_success_after_hiccup",
          "payment_transaction_request_cancelled",
          "payment_action_account_setup_reminder",
          "payment_action_send_payment_reminder",
          "payment_action_send_payment_invitation",
          "payment_action_request_declined",
          "payment_action_request_expired",
          "biz_bot_1p_disclosure",
          "biz_bot_3p_disclosure",
          "bot_init",
        ],
      ],
    ]);
    function $(e) {
      var t;
      return (
        ((t = x.get(e.type)) == null ? void 0 : t.includes(e.subtype)) || !1
      );
    }
    function P(e, t) {
      return o("WAWebSchemaMessage")
        .getMessageTable()
        .between(["internalId"], e + "_/", e + "_g", { reverse: !0 }, t);
    }
    function N(e) {
      return (
        (e.type === o("WAWebMsgType").MSG_TYPE.E2E_NOTIFICATION &&
          e.subtype === "encrypt") ||
        (e.type === o("WAWebMsgType").MSG_TYPE.NOTIFICATION_TEMPLATE &&
          e.subtype === "biz_privacy_mode_init_fb") ||
        (e.type === o("WAWebMsgType").MSG_TYPE.NOTIFICATION_TEMPLATE &&
          e.subtype === "biz_me_account_type_is_hosted") ||
        (e.type === o("WAWebMsgType").MSG_TYPE.NOTIFICATION_TEMPLATE &&
          e.subtype === "biz_me_account_type_is_hosted_transition") ||
        (e.type === o("WAWebMsgType").MSG_TYPE.NOTIFICATION_TEMPLATE &&
          e.subtype === "biz_account_type_is_hosted") ||
        (e.type === o("WAWebMsgType").MSG_TYPE.NOTIFICATION_TEMPLATE &&
          e.subtype === "biz_account_type_changed_to_hosted")
      );
    }
    function M(e) {
      return (
        e.type === o("WAWebMsgType").MSG_TYPE.NOTIFICATION_TEMPLATE &&
        (e.subtype === "biz_bot_1p_disclosure" ||
          e.subtype === "biz_bot_3p_disclosure")
      );
    }
    function w(e) {
      return (
        e.type === o("WAWebMsgType").MSG_TYPE.NOTIFICATION_TEMPLATE &&
        (e.subtype === "bot_init" ||
          e.subtype === "biz_bot_1p_disclosure" ||
          e.subtype === "biz_bot_3p_disclosure" ||
          e.subtype === "bot_session_transparency_notice")
      );
    }
    ((l.extractC2STimestampFromMessageRangeIndex = p),
      (l.beginningOfMessageRange = _),
      (l.endOfMessageRange = f),
      (l.queryChatMessageHelper = g),
      (l.queryGroupStatusMsgsHelper = y),
      (l.queryNewsletterStatusMsgsHelper = b),
      (l.isInvalidCAGSystemMessage = S),
      (l.isFutureproof = R),
      (l.shouldRenderInUI = L),
      (l.maybeUpdateMsgAck = E),
      (l.getKeyMsgsFromChatHistory = T),
      (l.isSecuritySensitiveMessage = $),
      (l.getMessagesBefore = P),
      (l.isInitialEncryptionMessage = N),
      (l.isBizBotDisclosureMessage = M),
      (l.isBotSystemMessageToPreserveOnClear = w));
  },
  98,
);
