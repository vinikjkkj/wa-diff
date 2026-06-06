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
    "WAWebUserPrefsMeUser",
    "WAWebUsernameTypes",
    "WAWebWamEnumChatOriginsType",
    "WAWebWamEnumEphemeralityInitiatorType",
    "WAWebWamEnumEphemeralityTriggerActionType",
    "WAWebWamEnumOppositeVisibleIdentificationType",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = new TextEncoder(),
      c = function (t) {
        return u.encode(t).buffer;
      };
    async function d(e, t) {
      var n = await o("WACryptoHmac").hmacSha256(e, t);
      return o("WABase64").encodeB64(n);
    }
    async function m(e, t, n) {
      var r = c(t + n);
      return d(e, r);
    }
    async function p(e, t) {
      var n = c(t);
      return d(e, n);
    }
    async function _(e, t) {
      var n = c(t);
      return d(e, n);
    }
    async function f(e, t) {
      var n = await g(e),
        r = c(t);
      return d(n, r);
    }
    async function g(e) {
      var t = c(e);
      return self.crypto.subtle.digest("SHA-256", t);
    }
    function h(e) {
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
    function y(e) {
      return h(e).replace(/\//g, "-");
    }
    function C(e) {
      var t = o("WATimeUtils").toDate(
          o("WATimeUtils").castToUnixTime(
            e - 8 * o("WATimeUtils").HOUR_SECONDS,
          ),
        ),
        n = t.getUTCFullYear(),
        r = String(t.getUTCMonth() + 1).padStart(2, "0");
      return n + "/" + r;
    }
    function b(e, t) {
      var n = t % o("WATimeUtils").DAY_SECONDS,
        r = t - n;
      return n >= e ? r + e : r - o("WATimeUtils").DAY_SECONDS + e;
    }
    function v(e, t, n) {
      return b(e, t) > n;
    }
    function S(e) {
      return e.type !== o("WAWebMsgType").MSG_TYPE.KEEP_IN_CHAT;
    }
    function R(e) {
      var t,
        n = new Set([
          o("WAWebMsgType").MSG_TYPE.PRODUCT,
          o("WAWebMsgType").MSG_TYPE.ORDER,
          o("WAWebMsgType").MSG_TYPE.LIST,
        ]);
      return (
        n.has(e.type) ||
        n.has((t = e.quotedMsg) == null ? void 0 : t.type) ||
        !!(e.matchedText != null && e.matchedText !== "" && L(e.matchedText)) ||
        (e.type === o("WAWebMsgType").MSG_TYPE.NATIVE_FLOW &&
          (e.nativeFlowName ===
            r("WAWebInteractiveMessagesNativeFlowName").ORDER_DETAILS ||
            e.nativeFlowName ===
              r("WAWebInteractiveMessagesNativeFlowName").ORDER_STATUS))
      );
    }
    function L(e) {
      return (
        o("WAWebApiParse").matchCatalogUrl(e) ||
        o("WAWebApiParse").matchProductUrl(e)
      );
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
    function I(e) {
      return e == null
        ? null
        : e
          ? o("WAWebWamEnumEphemeralityInitiatorType")
              .EPHEMERALITY_INITIATOR_TYPE.INITIATED_BY_ME
          : o("WAWebWamEnumEphemeralityInitiatorType")
              .EPHEMERALITY_INITIATOR_TYPE.INITIATED_BY_OTHER;
    }
    async function T() {
      var e = o("WAWebUserPrefsMeUser").getMeLidUserOrThrow(),
        t = await r("WAWebLidAwareContactsDB").get(e.toJid());
      return o("WAWebUsernameTypes").isPresentUsername(
        t == null ? void 0 : t.username,
      );
    }
    async function D() {
      var e = o("WAWebUserPrefsMeUser").getMeLidUserOrThrow(),
        t = await r("WAWebLidAwareContactsDB").get(e.toJid());
      return (t == null ? void 0 : t.usernameKey) != null;
    }
    async function x(t) {
      return N(t)
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
                : $(l, a);
            });
    }
    function $(e, t) {
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
    async function P(e) {
      return N(e)
        ? null
        : o("WAWebModelStorageUtils")
            .getStorage()
            .lock(["chat"], async function (t) {
              var n = t[0],
                r = e.toString(),
                a = await n.get(r);
              if (a == null) {
                o("WALogger").ERROR(
                  s ||
                    (s = babelHelpers.taggedTemplateLiteralLoose([
                      "getChatOriginType: could not find chat with id ",
                      "",
                    ])),
                  r,
                );
                return;
              }
              switch (a.lidOriginType) {
                case "ctwa":
                  return o("WAWebWamEnumChatOriginsType").CHAT_ORIGINS_TYPE
                    .LID_CTWA;
                default:
                  return o("WAWebWamEnumChatOriginsType").CHAT_ORIGINS_TYPE
                    .OTHERS;
              }
            });
    }
    function N(e) {
      return !e.isUser() || e.isPSA() || e.isBot();
    }
    ((l.generateThreadID = m),
      (l.generateThreadIDHMAC = p),
      (l.generateMessageIDHMAC = _),
      (l.generateUserThreadIDHMAC = f),
      (l.getThreadDs = h),
      (l.getThreadDsForDb = y),
      (l.getThreadMonthDs = C),
      (l.computeStartTs = b),
      (l.shouldUpdateChatEvent = v),
      (l.shouldIncrementMsgSendAndReceive = S),
      (l.isCommerceMessage = R),
      (l.getWamDisappearingModeTrigger = E),
      (l.getWamDisappearingModeTriggerGroups = k),
      (l.getWamDisappearingModeInitiatedByMe = I),
      (l.getMeHasUsername = T),
      (l.getMeHasUsernamePin = D),
      (l.getOppositeVisibleIdentification = x),
      (l.getOppositeVisibleIdentificationType = $),
      (l.getChatOriginType = P));
  },
  98,
);
