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
      c,
      d = 10,
      m = 1e9;
    function p(e) {
      var t = e.toString(16);
      return (t.length - 1).toString(16) + t;
    }
    function _(e) {
      if (e == null || e.length < 3) return null;
      var t = e.split("_")[2];
      return t ? o("WAWebOrderPreservingHex").undoOrderPreservingHex(t) : null;
    }
    function f(e, t, n) {
      var r = n != null ? p(n) : "";
      return e.toString() + "_" + t + "_" + r;
    }
    function g(e, t) {
      return e.toString() + "_" + t + "_g";
    }
    function h(e, t, n) {
      return y.apply(this, arguments);
    }
    function y() {
      return (
        (y = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
          var r = yield o("WAWebSchemaMessage")
              .getMessageTable()
              .between(["internalId"], e, t, n),
            a = r.filter(function (e) {
              return E(e);
            });
          return (yield k(a), a);
        })),
        y.apply(this, arguments)
      );
    }
    function C() {
      return b.apply(this, arguments);
    }
    function b() {
      return (
        (b = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e = yield o("WAWebSchemaMessage")
            .getMessageTable()
            .startsWithAnyOf(
              ["internalId"],
              [o("WAWebDBMessageUtils").InternalIdPrefix.GroupStatus],
            );
          return e;
        })),
        b.apply(this, arguments)
      );
    }
    function v() {
      return S.apply(this, arguments);
    }
    function S() {
      return (
        (S = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e = yield o("WAWebSchemaMessage")
            .getMessageTable()
            .startsWithAnyOf(
              ["internalId"],
              [o("WAWebDBMessageUtils").InternalIdPrefix.NewsletterStatus],
            );
          return e;
        })),
        S.apply(this, arguments)
      );
    }
    function R(e) {
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
    function L(e) {
      return e.type === o("WAWebMsgType").MSG_TYPE.UNKNOWN;
    }
    function E(e, t) {
      t === void 0 && (t = []);
      var n = o("WAWebDBMessageSerialization").messageFromDbRow(e),
        r = x(e),
        a = o("WAWebDBAddOnProviders").getAddOnProviderForFutureproofMsg(n);
      return !(
        r ||
        (L(e) && e.futureproofReparsed === !0) ||
        (a && a.canRenderInUi(n) && !t.includes(e.id.toString())) ||
        e.type === o("WAWebMsgType").MSG_TYPE.DEBUG ||
        (!o("WAWebBotBaseGating").isBizBot1pEnabled() &&
          e.type === o("WAWebMsgType").MSG_TYPE.NOTIFICATION_TEMPLATE &&
          e.subtype === "biz_bot_1p_disclosure")
      );
    }
    function k(e) {
      return I.apply(this, arguments);
    }
    function I() {
      return (
        (I = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = T(e);
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
                    c ||
                      (c = babelHelpers.taggedTemplateLiteralLoose([
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
        I.apply(this, arguments)
      );
    }
    function T(t) {
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
            ((e.rowId != null && e.rowId < m) || e.count == null)
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
    function D(e, t) {
      var n,
        r = self.performance.now(),
        a = o("WAWebABProps").getABPropConfigValue(
          "web_init_chat_max_unread_message_count",
        ),
        i,
        l = e.unreadCount,
        c = (n = e.unreadDividerOffset) != null ? n : 0,
        m = void 0,
        p = void 0,
        _ = void 0,
        f = 0,
        g = [],
        h = 0,
        y = function (r) {
          if (
            R(r) ||
            (f++,
            r.type === o("WAWebMsgType").MSG_TYPE.PROTOCOL &&
              r.subtype !== "ephemeral_setting")
          )
            return !1;
          var n = o("WAWebDBMessageSerialization").messageFromDbRow(r),
            u = x(r);
          if (u) return !1;
          if (L(r)) {
            var y = o(
              "WAWebDBAddOnProviders",
            ).getAddOnProviderForFutureproofMsg(n);
            if (r.futureproofReparsed === !0) return !1;
            if (!t) g.push(r);
            else if (y != null && y.canRenderInUi(n))
              return a !== 0 && h >= a
                ? (_ == null && (_ = r.id),
                  p ||
                    (o("WALogger").WARN(
                      s ||
                        (s = babelHelpers.taggedTemplateLiteralLoose([
                          "[init-from-storage] getKeyMsgsFromChatHistory: non-fp limit ",
                          "",
                        ])),
                      a,
                    ),
                    (p = r)),
                  !0)
                : (h++, !1);
          }
          if (
            (_ == null && (_ = r.id),
            p || (p = r),
            !m &&
              !u &&
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
              (m = r),
            !t && (m != null || f > d))
          )
            return !0;
          if (l === 0 && c > 0)
            if (r.type === o("WAWebMsgType").MSG_TYPE.REVOKED) {
              if (((c -= 1), c === 0)) return ((i = r.id.toString()), !0);
            } else return !0;
          return !!(
            (((l === 0 && c === 0) || (a !== 0 && e.unreadCount >= a)) && m) ||
            (l > 0 &&
              o("WAWebMsgGetters").getIsUnreadType(r) &&
              ((l -= 1), l === 0 && ((i = r.id.toString()), c === 0)))
          );
        };
      return o("WAWebSchemaMessage")
        .getMessageTable()
        .between(["internalId"], e.id + "_/", e.id + "_g", { reverse: !0 }, y)
        .then(function () {
          return (
            g.length &&
              o("WAWebFutureproofReparseMsgsAction")
                .processFutureproof(g)
                .catch(function (e) {
                  o("WALogger").WARN(
                    u ||
                      (u = babelHelpers.taggedTemplateLiteralLoose([
                        "[init-from-storage] getKeyMsgsFromChatHistory: processFutureproof failed: ",
                        "",
                      ])),
                    String(e),
                  );
                }),
            { anchor: i, previewMsg: m || p, lastReceivedKey: _ }
          );
        });
    }
    function x(e) {
      if (e.type === o("WAWebMsgType").MSG_TYPE.KEEP_IN_CHAT) return !0;
      var t = e.futureproofType;
      return t != null
        ? o("WAWebAddonGatingUtils").isUnifiedInfraEnabledForType(t)
        : o("WAWebAddonGatingUtils").isUnifiedInfraEnabledForType(e.type);
    }
    var $ = new Map([
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
    function P(e) {
      var t;
      return (
        ((t = $.get(e.type)) == null ? void 0 : t.includes(e.subtype)) || !1
      );
    }
    function N(e, t) {
      return o("WAWebSchemaMessage")
        .getMessageTable()
        .between(["internalId"], e + "_/", e + "_g", { reverse: !0 }, t);
    }
    function M(e) {
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
    function w(e) {
      return (
        e.type === o("WAWebMsgType").MSG_TYPE.NOTIFICATION_TEMPLATE &&
        (e.subtype === "bot_init" ||
          e.subtype === "biz_bot_1p_disclosure" ||
          e.subtype === "biz_bot_3p_disclosure" ||
          e.subtype === "bot_session_transparency_notice")
      );
    }
    ((l.extractC2STimestampFromMessageRangeIndex = _),
      (l.beginningOfMessageRange = f),
      (l.endOfMessageRange = g),
      (l.queryChatMessageHelper = h),
      (l.queryGroupStatusMsgsHelper = C),
      (l.queryNewsletterStatusMsgsHelper = v),
      (l.isInvalidCAGSystemMessage = R),
      (l.isFutureproof = L),
      (l.shouldRenderInUI = E),
      (l.maybeUpdateMsgAck = k),
      (l.getKeyMsgsFromChatHistory = D),
      (l.isSecuritySensitiveMessage = P),
      (l.getMessagesBefore = N),
      (l.isInitialEncryptionMessage = M),
      (l.isBotSystemMessageToPreserveOnClear = w));
  },
  98,
);
