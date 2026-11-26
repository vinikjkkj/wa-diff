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
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c,
      d = 10,
      m = 1e9;
    async function p(e, t, n) {
      var r = await o("WAWebSchemaMessage")
          .getMessageTable()
          .between(["internalId"], e, t, n),
        a = r.filter(function (e) {
          return y(e);
        });
      return (await C(a), a);
    }
    async function _() {
      var e = await o("WAWebSchemaMessage")
        .getMessageTable()
        .startsWithAnyOf(
          ["internalId"],
          [o("WAWebDBMessageUtils").InternalIdPrefix.GroupStatus],
        );
      return e;
    }
    async function f() {
      var e = await o("WAWebSchemaMessage")
        .getMessageTable()
        .startsWithAnyOf(
          ["internalId"],
          [o("WAWebDBMessageUtils").InternalIdPrefix.NewsletterStatus],
        );
      return e;
    }
    function g(e) {
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
    function h(e) {
      return e.type === o("WAWebMsgType").MSG_TYPE.UNKNOWN;
    }
    function y(e, t) {
      t === void 0 && (t = []);
      var n = o("WAWebDBMessageSerialization").messageFromDbRow(e),
        r = R(e),
        a = o("WAWebDBAddOnProviders").getAddOnProviderForFutureproofMsg(n);
      return !(
        r ||
        (h(e) && e.futureproofReparsed === !0) ||
        (a && a.canRenderInUi(n) && !t.includes(e.id.toString())) ||
        e.type === o("WAWebMsgType").MSG_TYPE.DEBUG ||
        (!o("WAWebBotBaseGating").isBizBot1pEnabled() &&
          e.type === o("WAWebMsgType").MSG_TYPE.NOTIFICATION_TEMPLATE &&
          e.subtype === "biz_bot_1p_disclosure")
      );
    }
    async function C(t) {
      var n = b(t);
      if (n.length !== 0) {
        var a = await o("WAWebApiMessageInfoStore").getHighestMsgAcks(
            n.map(function (e) {
              return r("WAWebMsgKey").from(e.id);
            }),
          ),
          i = [];
        (n.forEach(function (e) {
          var t = e.ack,
            n = e.id,
            r = a.get(n);
          r != null && r > t && (i.push({ id: n, ack: r }), (e.ack = r));
        }),
          i.length > 0 &&
            (o("WALogger")
              .LOG(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "maybeUpdateMsgAck: storing ack updates ",
                    "",
                  ])),
                JSON.stringify(i),
              )
              .tags("message-store"),
            o("WAWebSchemaMessage").getMessageTable().bulkCreateOrMerge(i)));
      }
    }
    function b(e) {
      var t = [],
        n = e.filter(function (e) {
          if (
            !o("WAWebMsgGetters").getIsUnreadType(e) ||
            e.type === o("WAWebMsgType").MSG_TYPE.CIPHERTEXT ||
            e.type === o("WAWebMsgType").MSG_TYPE.UNKNOWN ||
            e.ack <= o("WAWebAck").ACK.CLOCK
          )
            return !1;
          var n = r("WAWebMsgKey").fromString(e.id);
          if (!n.fromMe) return !1;
          if (
            n.remote.isGroup() &&
            ((e.rowId != null && e.rowId < m) || e.count == null)
          )
            return (t.length < 3 && t.push(e.id), !1);
          if (v(e, n)) {
            if (e.ack === o("WAWebAck").ACK.PLAYED) return !1;
          } else if (e.ack === o("WAWebAck").ACK.READ) return !1;
          return !0;
        });
      return (
        t.length > 0 &&
          o("WALogger")
            .LOG(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
                  "getMsgMayNeedAckUpdate: skipped ",
                  " history group messages => ",
                  "",
                ])),
              t.length,
              t,
            )
            .tags("message-store"),
        n
      );
    }
    function v(e, t) {
      var n =
        r("WAWebWid").isNewsletter(e.from) ||
        t.remote.isNewsletter() ||
        e.forwardedNewsletterMessageInfo != null;
      return o("WAWebMsgGetters").isAckPlayableType(e.type, n);
    }
    function S(e, t) {
      var n,
        r = self.performance.now(),
        a = o("WAWebABProps").getABPropConfigValue(
          "web_init_chat_max_unread_message_count",
        ),
        i,
        l = e.unreadCount,
        s = (n = e.unreadDividerOffset) != null ? n : 0,
        m = void 0,
        p = void 0,
        _ = void 0,
        f = 0,
        y = [],
        C = 0,
        b = function (r) {
          if (g(r)) return !1;
          if (
            r.viewMode ===
            o("WAWebViewMode.flow").ViewModeType.CALL_LOG_OUT_OF_ORDER
          )
            return (_ != null || (_ = r.id), !1);
          if (
            (f++,
            r.type === o("WAWebMsgType").MSG_TYPE.PROTOCOL &&
              r.subtype !== "ephemeral_setting")
          )
            return !1;
          var n = o("WAWebDBMessageSerialization").messageFromDbRow(r),
            c = R(r);
          if (c) return !1;
          if (h(r)) {
            var b = o(
              "WAWebDBAddOnProviders",
            ).getAddOnProviderForFutureproofMsg(n);
            if (r.futureproofReparsed === !0) return !1;
            if (!t) y.push(r);
            else if (b != null && b.canRenderInUi(n))
              return a !== 0 && C >= a
                ? (_ == null && (_ = r.id),
                  p ||
                    (o("WALogger").WARN(
                      u ||
                        (u = babelHelpers.taggedTemplateLiteralLoose([
                          "[init-from-storage] getKeyMsgsFromChatHistory: non-fp limit ",
                          "",
                        ])),
                      a,
                    ),
                    (p = r)),
                  !0)
                : (C++, !1);
          }
          if (
            (_ == null && (_ = r.id),
            p || (p = r),
            !m &&
              !c &&
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
          if (l === 0 && s > 0)
            if (r.type === o("WAWebMsgType").MSG_TYPE.REVOKED) {
              if (((s -= 1), s === 0)) return ((i = r.id.toString()), !0);
            } else return !0;
          return !!(
            (((l === 0 && s === 0) || (a !== 0 && e.unreadCount >= a)) && m) ||
            (l > 0 &&
              o("WAWebMsgGetters").getIsUnreadType(r) &&
              ((l -= 1), l === 0 && ((i = r.id.toString()), s === 0)))
          );
        };
      return o("WAWebSchemaMessage")
        .getMessageTable()
        .between(["internalId"], e.id + "_/", e.id + "_g", { reverse: !0 }, b)
        .then(function () {
          return (
            y.length &&
              o("WAWebFutureproofReparseMsgsAction")
                .processFutureproof(y)
                .catch(function (e) {
                  o("WALogger").WARN(
                    c ||
                      (c = babelHelpers.taggedTemplateLiteralLoose([
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
    function R(e) {
      if (e.type === o("WAWebMsgType").MSG_TYPE.KEEP_IN_CHAT) return !0;
      var t = e.futureproofType;
      return t != null
        ? o("WAWebAddonGatingUtils").isUnifiedInfraEnabledForType(t)
        : o("WAWebAddonGatingUtils").isUnifiedInfraEnabledForType(e.type);
    }
    var L = new Map([
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
    function E(e) {
      var t;
      return (
        ((t = L.get(e.type)) == null ? void 0 : t.includes(e.subtype)) || !1
      );
    }
    function k(e, t) {
      return o("WAWebSchemaMessage")
        .getMessageTable()
        .between(["internalId"], e + "_/", e + "_g", { reverse: !0 }, t);
    }
    var I = [
      "biz_privacy_mode_init_fb",
      "biz_me_account_type_is_hosted",
      "biz_me_account_type_is_hosted_transition",
      "biz_account_type_is_hosted",
      "biz_account_type_changed_to_hosted",
      "chat_privacy_non_e2ee",
      "chat_privacy_non_e2ee_init",
    ];
    function T(e) {
      return (
        (e.type === o("WAWebMsgType").MSG_TYPE.E2E_NOTIFICATION &&
          e.subtype === "encrypt") ||
        (e.type === o("WAWebMsgType").MSG_TYPE.NOTIFICATION_TEMPLATE &&
          I.includes(e.subtype))
      );
    }
    function D(e) {
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
      (l.queryGroupStatusMsgsHelper = _),
      (l.queryNewsletterStatusMsgsHelper = f),
      (l.isInvalidCAGSystemMessage = g),
      (l.isFutureproof = h),
      (l.shouldRenderInUI = y),
      (l.maybeUpdateMsgAck = C),
      (l.getKeyMsgsFromChatHistory = S),
      (l.isSecuritySensitiveMessage = E),
      (l.getMessagesBefore = k),
      (l.isInitialEncryptionMessage = T),
      (l.isBotSystemMessageToPreserveOnClear = D));
  },
  98,
);
