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
    "WAWebGroupUtils",
    "WAWebMsgGetters",
    "WAWebMsgKey",
    "WAWebMsgType",
    "WAWebReparseRichResponseMsgs",
    "WAWebRichResponse.flow",
    "WAWebSchemaMessage",
    "WAWebViewMode.flow",
    "WAWebViewModeUtils",
    "WAWebWid",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e = ["limit"],
      s,
      u,
      c,
      d,
      m = 10,
      p = 1e9;
    function _(e) {
      var t = e.toString(16);
      return (t.length - 1).toString(16) + t;
    }
    function f(e) {
      if (e == null || e.length < 3) return null;
      var t = e.split("_")[2];
      return t ? o("WAWebDBMessageUtils").undoOrderPreservingHex(t) : null;
    }
    function g(e, t, n) {
      var r = n != null ? _(n) : "";
      return e.toString() + "_" + t + "_" + r;
    }
    function h(e, t) {
      return e.toString() + "_" + t + "_g";
    }
    function y(e, t, n) {
      return C.apply(this, arguments);
    }
    function C() {
      return (
        (C = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
          var r = yield o("WAWebSchemaMessage")
              .getMessageTable()
              .between(["internalId"], e, t, n),
            a = r.filter(function (e) {
              return D(e);
            });
          return (yield x(a), a);
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
              [o("WAWebDBMessageUtils").InternalIdPrefix.GroupStatus],
            );
          return e;
        })),
        v.apply(this, arguments)
      );
    }
    function S() {
      return R.apply(this, arguments);
    }
    function R() {
      return (
        (R = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e = yield o("WAWebSchemaMessage")
            .getMessageTable()
            .startsWithAnyOf(
              ["internalId"],
              [o("WAWebDBMessageUtils").InternalIdPrefix.NewsletterStatus],
            );
          return e;
        })),
        R.apply(this, arguments)
      );
    }
    function L(e) {
      if (
        !o("WAWebGroupUtils").INVALID_CAG_NON_ADMIN_SYSTEM_MSG_SUBTYPES.has(
          e.subtype,
        ) ||
        !r("WAWebWid").isGroup(e.from)
      )
        return !1;
      var t = r("WAWebGroupMetadataCollection").get(e.from);
      if (t == null || !t.isCag) return !1;
      var n = t.participants.iAmAdmin();
      return !n;
    }
    function E(e) {
      return k.apply(this, arguments);
    }
    function k() {
      return (
        (k = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          var n = t.lowerBound,
            r = t.upperBound,
            a = t.options,
            i = t.count,
            l = t.addOnReparseExclusionList,
            s = l === void 0 ? [] : l,
            u = t.index,
            d = a.limit,
            m = babelHelpers.objectWithoutPropertiesLoose(a, e),
            p = o("WAWebABProps").getABPropConfigValue(
              "web_init_chat_max_unread_message_count",
            ),
            _ = [],
            f = [],
            g = 0,
            h = 0,
            y = !1,
            C = function (t) {
              return (
                h++,
                i != null && g === i
                  ? !0
                  : (D(t, s) &&
                      (o("WAWebViewModeUtils").isViewModeVisibleInSurface(
                        o("WAWebViewMode.flow").ViewModeSurface.CHAT,
                        t.viewMode,
                      ) && g++,
                      g > p && (y = !0)),
                    !1)
              );
            },
            b = self.performance.now(),
            v = yield o("WAWebSchemaMessage")
              .getMessageTable()
              .between(u != null ? u : ["internalId"], n, r, m, C);
          y &&
            o("WALogger").WARN(
              c ||
                (c = babelHelpers.taggedTemplateLiteralLoose([
                  "queryChatVisibleMessageHelper: visibleMsgsCount ",
                  " exceeds the threshold ",
                  "",
                ])),
              g,
              p,
            );
          var S = v.filter(function (e) {
            if (I(e)) {
              var t = o("WAWebDBMessageSerialization").messageFromDbRow(e),
                n = o(
                  "WAWebDBAddOnProviders",
                ).getAddOnProviderForFutureproofMsg(t);
              e.futureproofReparsed !== !0 &&
                (!n ||
                  (n != null &&
                    n.canRenderInUi(t) &&
                    !s.includes(e.id.toString()))) &&
                _.push(e);
            } else
              T(e) &&
                o(
                  "WAWebBotBaseGating",
                ).isRichStructuredResponseReceiverEnabled() &&
                f.push(e);
            return !(!D(e, s) || L(e));
          });
          return (
            yield x(S),
            _.length &&
              o("WAWebFutureproofReparseMsgsAction").processFutureproof(_),
            f.length &&
              o("WAWebReparseRichResponseMsgs").reparseRichResponseMsgs(f),
            S
          );
        })),
        k.apply(this, arguments)
      );
    }
    function I(e) {
      return e.type === o("WAWebMsgType").MSG_TYPE.UNKNOWN;
    }
    function T(e) {
      var t;
      return (
        e.type === o("WAWebMsgType").MSG_TYPE.RICH_RESPONSE &&
        ((t = e.richResponse) == null ? void 0 : t.parseState) !==
          o("WAWebRichResponse.flow").RichResponseParseState.Parsed
      );
    }
    function D(e, t) {
      t === void 0 && (t = []);
      var n = o("WAWebDBMessageSerialization").messageFromDbRow(e),
        r = M(e),
        a = o("WAWebDBAddOnProviders").getAddOnProviderForFutureproofMsg(n);
      return !(
        r ||
        (I(e) && e.futureproofReparsed === !0) ||
        (a && a.canRenderInUi(n) && !t.includes(e.id.toString())) ||
        e.type === o("WAWebMsgType").MSG_TYPE.DEBUG ||
        (!o("WAWebBotBaseGating").isBizBot1pEnabled() &&
          e.type === o("WAWebMsgType").MSG_TYPE.NOTIFICATION_TEMPLATE &&
          e.subtype === "biz_bot_1p_disclosure")
      );
    }
    function x(e) {
      return $.apply(this, arguments);
    }
    function $() {
      return (
        ($ = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = P(e);
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
                    d ||
                      (d = babelHelpers.taggedTemplateLiteralLoose([
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
        $.apply(this, arguments)
      );
    }
    function P(e) {
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
            ((e.rowId != null && e.rowId < p) || e.count == null)
          )
            return (t.length < 3 && t.push(e.id), !1);
          if (o("WAWebMsgGetters").getIsAckPlayable(e)) {
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
    function N(e, t) {
      var n,
        r = self.performance.now(),
        a = o("WAWebABProps").getABPropConfigValue(
          "web_init_chat_max_unread_message_count",
        ),
        i,
        l = e.unreadCount,
        s = (n = e.unreadDividerOffset) != null ? n : 0,
        c = void 0,
        d = void 0,
        p = void 0,
        _ = 0,
        f = [],
        g = 0,
        h = function (r) {
          if (
            L(r) ||
            (_++,
            r.type === o("WAWebMsgType").MSG_TYPE.PROTOCOL &&
              r.subtype !== "ephemeral_setting")
          )
            return !1;
          var n = o("WAWebDBMessageSerialization").messageFromDbRow(r),
            h = M(r);
          if (h) return !1;
          if (I(r)) {
            var y = o(
              "WAWebDBAddOnProviders",
            ).getAddOnProviderForFutureproofMsg(n);
            if (r.futureproofReparsed === !0) return !1;
            if (!t) f.push(r);
            else if (y != null && y.canRenderInUi(n))
              return a !== 0 && g >= a
                ? (p == null && (p = r.id),
                  d ||
                    (o("WALogger").WARN(
                      u ||
                        (u = babelHelpers.taggedTemplateLiteralLoose([
                          "[init-from-storage] getKeyMsgsFromChatHistory: Exceeded limit ",
                          " to find a non futureproof reaction message",
                        ])),
                      a,
                    ),
                    (d = r)),
                  !0)
                : (g++, !1);
          }
          if (
            (p == null && (p = r.id),
            d || (d = r),
            !c &&
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
              (c = r),
            !t && (c != null || _ > m))
          )
            return !0;
          if (l === 0 && s > 0)
            if (r.type === o("WAWebMsgType").MSG_TYPE.REVOKED) {
              if (((s -= 1), s === 0)) return ((i = r.id.toString()), !0);
            } else return !0;
          return !!(
            (((l === 0 && s === 0) || (a !== 0 && e.unreadCount >= a)) && c) ||
            (l > 0 &&
              o("WAWebMsgGetters").getIsUnreadType(r) &&
              ((l -= 1), l === 0 && ((i = r.id.toString()), s === 0)))
          );
        };
      return o("WAWebSchemaMessage")
        .getMessageTable()
        .between(["internalId"], e.id + "_/", e.id + "_g", { reverse: !0 }, h)
        .then(function () {
          return (
            f.length &&
              o("WAWebFutureproofReparseMsgsAction").processFutureproof(f),
            { anchor: i, previewMsg: c || d, lastReceivedKey: p }
          );
        });
    }
    function M(e) {
      if (e.type === o("WAWebMsgType").MSG_TYPE.KEEP_IN_CHAT) return !0;
      var t = e.futureproofType;
      return t != null
        ? o("WAWebAddonGatingUtils").isUnifiedInfraEnabledForType(t)
        : o("WAWebAddonGatingUtils").isUnifiedInfraEnabledForType(e.type);
    }
    var w = new Map([
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
    function A(e) {
      var t;
      return (
        ((t = w.get(e.type)) == null ? void 0 : t.includes(e.subtype)) || !1
      );
    }
    function F(e, t) {
      return o("WAWebSchemaMessage")
        .getMessageTable()
        .between(["internalId"], e + "_/", e + "_g", { reverse: !0 }, t);
    }
    function O(e) {
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
    function B(e) {
      return (
        e.type === o("WAWebMsgType").MSG_TYPE.NOTIFICATION_TEMPLATE &&
        (e.subtype === "biz_bot_1p_disclosure" ||
          e.subtype === "biz_bot_3p_disclosure")
      );
    }
    ((l.extractC2STimestampFromMessageRangeIndex = f),
      (l.beginningOfMessageRange = g),
      (l.endOfMessageRange = h),
      (l.queryChatMessageHelper = y),
      (l.queryGroupStatusMsgsHelper = b),
      (l.queryNewsletterStatusMsgsHelper = S),
      (l.queryChatVisibleMessageHelper = E),
      (l.shouldRenderInUI = D),
      (l.getKeyMsgsFromChatHistory = N),
      (l.isSecuritySensitiveMessage = A),
      (l.getMessagesBefore = F),
      (l.isInitialEncryptionMessage = O),
      (l.isBizBotDisclosureMessage = B));
  },
  98,
);
