__d(
  "WAWebChatThreadLoggingUtils",
  [
    "WABase64",
    "WACryptoHmac",
    "WAJids",
    "WALogger",
    "WATimeUtils",
    "WAWebApiContact",
    "WAWebApiParse",
    "WAWebEphemeralityTypes",
    "WAWebInteractiveMessagesNativeFlowName",
    "WAWebLidAwareContactsDB",
    "WAWebModelStorageUtils",
    "WAWebMsgType",
    "WAWebUserUtils",
    "WAWebUsernameTypes",
    "WAWebWamEnumEphemeralityInitiatorType",
    "WAWebWamEnumEphemeralityTriggerActionType",
    "WAWebWamEnumOppositeVisibleIdentificationType",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = new TextEncoder();
    function u(e) {
      return s.encode(e).buffer;
    }
    async function c(e, t) {
      var n = await o("WACryptoHmac").hmacSha256(e, t);
      return o("WABase64").encodeB64(n);
    }
    async function d(e, t, n) {
      var r = u(t + n);
      return c(e, r);
    }
    async function m(e, t) {
      var n = u(t);
      return c(e, n);
    }
    var p = "ctwa_3pd_aggregated";
    async function _(e, t) {
      var n = u(t + p);
      return c(e, n);
    }
    async function f(e, t) {
      var n = u(t);
      return c(e, n);
    }
    function g(e) {
      return o("WATimeUtils")
        .toDate(
          o("WATimeUtils").castToUnixTime(
            e - 8 * o("WATimeUtils").HOUR_SECONDS,
          ),
        )
        .toISOString()
        .split("T")[0]
        .replace(/-/g, "/");
    }
    function h(e) {
      return g(e).replace(/\//g, "-");
    }
    function y(e) {
      var t = o("WATimeUtils").toDate(
          o("WATimeUtils").castToUnixTime(
            e - 8 * o("WATimeUtils").HOUR_SECONDS,
          ),
        ),
        n = t.getUTCFullYear(),
        r = String(t.getUTCMonth() + 1).padStart(2, "0");
      return n + "/" + r;
    }
    function C(e, t) {
      var n = t % o("WATimeUtils").DAY_SECONDS,
        r = t - n;
      return n >= e ? r + e : r - o("WATimeUtils").DAY_SECONDS + e;
    }
    function b(e, t, n) {
      return C(e, t) > n;
    }
    function v(e) {
      return e.type !== o("WAWebMsgType").MSG_TYPE.KEEP_IN_CHAT;
    }
    function S(e) {
      var t,
        n = new Set([
          o("WAWebMsgType").MSG_TYPE.PRODUCT,
          o("WAWebMsgType").MSG_TYPE.ORDER,
          o("WAWebMsgType").MSG_TYPE.LIST,
        ]);
      return (
        n.has(e.type) ||
        n.has((t = e.quotedMsg) == null ? void 0 : t.type) ||
        !!(e.matchedText != null && e.matchedText !== "" && R(e.matchedText)) ||
        (e.type === o("WAWebMsgType").MSG_TYPE.NATIVE_FLOW &&
          (e.nativeFlowName ===
            r("WAWebInteractiveMessagesNativeFlowName").ORDER_DETAILS ||
            e.nativeFlowName ===
              r("WAWebInteractiveMessagesNativeFlowName").ORDER_STATUS))
      );
    }
    function R(e) {
      return (
        o("WAWebApiParse").matchCatalogUrl(e) ||
        o("WAWebApiParse").matchProductUrl(e)
      );
    }
    function L(e) {
      if (e == null) return null;
      switch (e) {
        case o("WAWebEphemeralityTypes").DisappearingModeTrigger
          .AccountSettings:
          return o("WAWebWamEnumEphemeralityTriggerActionType")
            .EPHEMERALITY_TRIGGER_ACTION_TYPE.ACCOUNT_SETTINGS;
        case o("WAWebEphemeralityTypes").DisappearingModeTrigger.ChatSettings:
          return o("WAWebWamEnumEphemeralityTriggerActionType")
            .EPHEMERALITY_TRIGGER_ACTION_TYPE.CHAT_SETTINGS;
        case o("WAWebEphemeralityTypes").DisappearingModeTrigger.BulkChange:
          return o("WAWebWamEnumEphemeralityTriggerActionType")
            .EPHEMERALITY_TRIGGER_ACTION_TYPE.BULK_CHANGE;
        default:
          return null;
      }
    }
    function E(e) {
      if (e == null) return null;
      switch (e) {
        case o("WAWebEphemeralityTypes").DisappearingModeTrigger
          .AccountSettings:
          return o("WAWebWamEnumEphemeralityTriggerActionType")
            .EPHEMERALITY_TRIGGER_ACTION_TYPE.ACCOUNT_SETTINGS;
        case o("WAWebEphemeralityTypes").DisappearingModeTrigger.ChatSettings:
          return o("WAWebWamEnumEphemeralityTriggerActionType")
            .EPHEMERALITY_TRIGGER_ACTION_TYPE.CHAT_SETTINGS;
        case o("WAWebEphemeralityTypes").DisappearingModeTrigger.BulkChange:
          return o("WAWebWamEnumEphemeralityTriggerActionType")
            .EPHEMERALITY_TRIGGER_ACTION_TYPE.BULK_CHANGE;
        default:
          return null;
      }
    }
    function k(e) {
      return e == null
        ? null
        : e
          ? o("WAWebWamEnumEphemeralityInitiatorType")
              .EPHEMERALITY_INITIATOR_TYPE.INITIATED_BY_ME
          : o("WAWebWamEnumEphemeralityInitiatorType")
              .EPHEMERALITY_INITIATOR_TYPE.INITIATED_BY_OTHER;
    }
    async function I() {
      var e = o("WAWebUserUtils").getMeLidUserOrThrow(),
        t = await r("WAWebLidAwareContactsDB").get(e.toJid());
      return o("WAWebUsernameTypes").isPresentUsername(
        t == null ? void 0 : t.username,
      );
    }
    async function T() {
      var e = o("WAWebUserUtils").getMeLidUserOrThrow(),
        t = await r("WAWebLidAwareContactsDB").get(e.toJid());
      return (t == null ? void 0 : t.usernameKey) != null;
    }
    async function D(t) {
      return $(t)
        ? null
        : o("WAWebModelStorageUtils")
            .getStorage()
            .lock(["contact"], async function () {
              var n, a;
              if (t.isLid()) {
                var i = o("WAWebApiContact").getPhoneNumber(t);
                i == null
                  ? ((n = t.toString()), (a = "lid"))
                  : ((n = o("WAJids").toPhoneUserJid(i.user)), (a = "pn"));
              } else ((n = o("WAJids").toPhoneUserJid(t.user)), (a = "pn"));
              var l = await r("WAWebLidAwareContactsDB").get(n);
              return l == null
                ? (o("WALogger").ERROR(
                    e ||
                      (e = babelHelpers.taggedTemplateLiteralLoose([
                        "[getOppositeVisibleIdentificationType] contact not found ",
                        "",
                      ])),
                    t,
                  ),
                  null)
                : x(l, a);
            });
    }
    function x(e, t) {
      if (e == null)
        return o("WAWebWamEnumOppositeVisibleIdentificationType")
          .OPPOSITE_VISIBLE_IDENTIFICATION_TYPE.PLACEHOLDER;
      var n = o("WAWebWamEnumOppositeVisibleIdentificationType")
        .OPPOSITE_VISIBLE_IDENTIFICATION_TYPE.MASKED_PHONE_NUMBER;
      return (
        e == null
          ? (n = o("WAWebWamEnumOppositeVisibleIdentificationType")
              .OPPOSITE_VISIBLE_IDENTIFICATION_TYPE.PLACEHOLDER)
          : e.isAddressBookContact
            ? (n = o("WAWebWamEnumOppositeVisibleIdentificationType")
                .OPPOSITE_VISIBLE_IDENTIFICATION_TYPE.SAVED_CONTACT_NAME)
            : e.verifiedName
              ? (n = o("WAWebWamEnumOppositeVisibleIdentificationType")
                  .OPPOSITE_VISIBLE_IDENTIFICATION_TYPE.VERIFIED_BUSINESS_NAME)
              : t === "pn"
                ? (n = o("WAWebWamEnumOppositeVisibleIdentificationType")
                    .OPPOSITE_VISIBLE_IDENTIFICATION_TYPE.PHONE_NUMBER)
                : o("WAWebUsernameTypes").isPresentUsername(e.username) &&
                  (n = o("WAWebWamEnumOppositeVisibleIdentificationType")
                    .OPPOSITE_VISIBLE_IDENTIFICATION_TYPE.USERNAME),
        n
      );
    }
    function $(e) {
      return !e.isUser() || e.isPSA() || e.isBot();
    }
    ((l.generateThreadID = d),
      (l.generateThreadIDHMAC = m),
      (l.CTWA_3PD_AGGREGATED_THREAD_ID_HMAC_SALT = p),
      (l.generateCtwa3pdAggregatedThreadIDHMAC = _),
      (l.generateMessageIDHMAC = f),
      (l.getThreadDs = g),
      (l.getThreadDsForDb = h),
      (l.getThreadMonthDs = y),
      (l.computeStartTs = C),
      (l.shouldUpdateChatEvent = b),
      (l.shouldIncrementMsgSendAndReceive = v),
      (l.isCommerceMessage = S),
      (l.getWamDisappearingModeTrigger = L),
      (l.getWamDisappearingModeTriggerGroups = E),
      (l.getWamDisappearingModeInitiatedByMe = k),
      (l.getMeHasUsername = I),
      (l.getMeHasUsernamePin = T),
      (l.getOppositeVisibleIdentification = D),
      (l.getOppositeVisibleIdentificationType = x));
  },
  98,
);
