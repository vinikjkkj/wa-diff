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
    "WAWebDBMessageRangeBounds",
    "WAWebDBMessageSerialization",
    "WAWebDBMessageUtils",
    "WAWebFutureproofReparseMsgsAction",
    "WAWebGroupMetadataCollection",
    "WAWebGroupMetadataGetters",
    "WAWebGroupUtils",
    "WAWebMsgGetters",
    "WAWebMsgKey",
    "WAWebMsgType",
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
    function p(e, t, n) {
      return _.apply(this, arguments);
    }
    function _() {
      return (
        (_ = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
          var r = yield o("WAWebSchemaMessage")
              .getMessageTable()
              .between(["internalId"], e, t, n),
            a = r.filter(function (e) {
              return v(e);
            });
          return (yield S(a), a);
        })),
        _.apply(this, arguments)
      );
    }
    function f() {
      return g.apply(this, arguments);
    }
    function g() {
      return (
        (g = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e = yield o("WAWebSchemaMessage")
            .getMessageTable()
            .startsWithAnyOf(
              ["internalId"],
              [o("WAWebDBMessageUtils").InternalIdPrefix.GroupStatus],
            );
          return e;
        })),
        g.apply(this, arguments)
      );
    }
    function h() {
      return y.apply(this, arguments);
    }
    function y() {
      return (
        (y = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e = yield o("WAWebSchemaMessage")
            .getMessageTable()
            .startsWithAnyOf(
              ["internalId"],
              [o("WAWebDBMessageUtils").InternalIdPrefix.NewsletterStatus],
            );
          return e;
        })),
        y.apply(this, arguments)
      );
    }
    function C(e) {
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
    function b(e) {
      return e.type === o("WAWebMsgType").MSG_TYPE.UNKNOWN;
    }
    function v(e, t) {
      t === void 0 && (t = []);
      var n = o("WAWebDBMessageSerialization").messageFromDbRow(e),
        r = I(e),
        a = o("WAWebDBAddOnProviders").getAddOnProviderForFutureproofMsg(n);
      return !(
        r ||
        (b(e) && e.futureproofReparsed === !0) ||
        (a && a.canRenderInUi(n) && !t.includes(e.id.toString())) ||
        e.type === o("WAWebMsgType").MSG_TYPE.DEBUG ||
        (!o("WAWebBotBaseGating").isBizBot1pEnabled() &&
          e.type === o("WAWebMsgType").MSG_TYPE.NOTIFICATION_TEMPLATE &&
          e.subtype === "biz_bot_1p_disclosure")
      );
    }
    function S(e) {
      return R.apply(this, arguments);
    }
    function R() {
      return (
        (R = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = L(e);
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
        R.apply(this, arguments)
      );
    }
    function L(t) {
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
          if (E(e, t)) {
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
    function E(e, t) {
      var n =
        r("WAWebWid").isNewsletter(e.from) ||
        t.remote.isNewsletter() ||
        e.forwardedNewsletterMessageInfo != null;
      return o("WAWebMsgGetters").isAckPlayableType(e.type, n);
    }
    function k(e, t) {
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
            C(r) ||
            (f++,
            r.type === o("WAWebMsgType").MSG_TYPE.PROTOCOL &&
              r.subtype !== "ephemeral_setting")
          )
            return !1;
          var n = o("WAWebDBMessageSerialization").messageFromDbRow(r),
            u = I(r);
          if (u) return !1;
          if (b(r)) {
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
    function I(e) {
      if (e.type === o("WAWebMsgType").MSG_TYPE.KEEP_IN_CHAT) return !0;
      var t = e.futureproofType;
      return t != null
        ? o("WAWebAddonGatingUtils").isUnifiedInfraEnabledForType(t)
        : o("WAWebAddonGatingUtils").isUnifiedInfraEnabledForType(e.type);
    }
    var T = new Map([
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
    function D(e) {
      var t;
      return (
        ((t = T.get(e.type)) == null ? void 0 : t.includes(e.subtype)) || !1
      );
    }
    function x(e, t) {
      return o("WAWebSchemaMessage")
        .getMessageTable()
        .between(["internalId"], e + "_/", e + "_g", { reverse: !0 }, t);
    }
    function $(e) {
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
    function P(e) {
      return (
        e.type === o("WAWebMsgType").MSG_TYPE.NOTIFICATION_TEMPLATE &&
        (e.subtype === "bot_init" ||
          e.subtype === "biz_bot_1p_disclosure" ||
          e.subtype === "biz_bot_3p_disclosure" ||
          e.subtype === "bot_session_transparency_notice")
      );
    }
    ((l.beginningOfMessageRange = o(
      "WAWebDBMessageRangeBounds",
    ).beginningOfMessageRange),
      (l.endOfMessageRange = o("WAWebDBMessageRangeBounds").endOfMessageRange),
      (l.extractC2STimestampFromMessageRangeIndex = o(
        "WAWebDBMessageRangeBounds",
      ).extractC2STimestampFromMessageRangeIndex),
      (l.queryChatMessageHelper = p),
      (l.queryGroupStatusMsgsHelper = f),
      (l.queryNewsletterStatusMsgsHelper = h),
      (l.isInvalidCAGSystemMessage = C),
      (l.isFutureproof = b),
      (l.shouldRenderInUI = v),
      (l.maybeUpdateMsgAck = S),
      (l.getKeyMsgsFromChatHistory = k),
      (l.isSecuritySensitiveMessage = D),
      (l.getMessagesBefore = x),
      (l.isInitialEncryptionMessage = $),
      (l.isBotSystemMessageToPreserveOnClear = P));
  },
  98,
);
