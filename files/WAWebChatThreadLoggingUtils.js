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
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = new TextEncoder(),
      c = function (t) {
        return u.encode(t).buffer;
      };
    function d(e, t) {
      return m.apply(this, arguments);
    }
    function m() {
      return (
        (m = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = yield o("WACryptoHmac").hmacSha256(e, t);
          return o("WABase64").encodeB64(n);
        })),
        m.apply(this, arguments)
      );
    }
    function p(e, t, n) {
      return _.apply(this, arguments);
    }
    function _() {
      return (
        (_ = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
          var r = c(t + n);
          return d(e, r);
        })),
        _.apply(this, arguments)
      );
    }
    function f(e, t) {
      return g.apply(this, arguments);
    }
    function g() {
      return (
        (g = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = c(t);
          return d(e, n);
        })),
        g.apply(this, arguments)
      );
    }
    var h = "ctwa_3pd_aggregated";
    function y(e, t) {
      return C.apply(this, arguments);
    }
    function C() {
      return (
        (C = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = c(t + h);
          return d(e, n);
        })),
        C.apply(this, arguments)
      );
    }
    function b(e, t) {
      return v.apply(this, arguments);
    }
    function v() {
      return (
        (v = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = c(t);
          return d(e, n);
        })),
        v.apply(this, arguments)
      );
    }
    function S(e, t) {
      return R.apply(this, arguments);
    }
    function R() {
      return (
        (R = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = yield L(e),
            r = c(t);
          return d(n, r);
        })),
        R.apply(this, arguments)
      );
    }
    function L(e) {
      return E.apply(this, arguments);
    }
    function E() {
      return (
        (E = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = c(e);
          return self.crypto.subtle.digest("SHA-256", t);
        })),
        E.apply(this, arguments)
      );
    }
    function k(e) {
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
    function I(e) {
      return k(e).replace(/\//g, "-");
    }
    function T(e) {
      var t = o("WATimeUtils").toDate(
          o("WATimeUtils").castToUnixTime(
            e - 8 * o("WATimeUtils").HOUR_SECONDS,
          ),
        ),
        n = t.getUTCFullYear(),
        r = String(t.getUTCMonth() + 1).padStart(2, "0");
      return n + "/" + r;
    }
    function D(e, t) {
      var n = t % o("WATimeUtils").DAY_SECONDS,
        r = t - n;
      return n >= e ? r + e : r - o("WATimeUtils").DAY_SECONDS + e;
    }
    function x(e, t, n) {
      return D(e, t) > n;
    }
    function $(e) {
      return e.type !== o("WAWebMsgType").MSG_TYPE.KEEP_IN_CHAT;
    }
    function P(e) {
      var t,
        n = new Set([
          o("WAWebMsgType").MSG_TYPE.PRODUCT,
          o("WAWebMsgType").MSG_TYPE.ORDER,
          o("WAWebMsgType").MSG_TYPE.LIST,
        ]);
      return (
        n.has(e.type) ||
        n.has((t = e.quotedMsg) == null ? void 0 : t.type) ||
        !!(e.matchedText != null && e.matchedText !== "" && N(e.matchedText)) ||
        (e.type === o("WAWebMsgType").MSG_TYPE.NATIVE_FLOW &&
          (e.nativeFlowName ===
            r("WAWebInteractiveMessagesNativeFlowName").ORDER_DETAILS ||
            e.nativeFlowName ===
              r("WAWebInteractiveMessagesNativeFlowName").ORDER_STATUS))
      );
    }
    function N(e) {
      return (
        o("WAWebApiParse").matchCatalogUrl(e) ||
        o("WAWebApiParse").matchProductUrl(e)
      );
    }
    function M(e) {
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
    function w(e) {
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
    function A(e) {
      return e == null
        ? null
        : e
          ? o("WAWebWamEnumEphemeralityInitiatorType")
              .EPHEMERALITY_INITIATOR_TYPE.INITIATED_BY_ME
          : o("WAWebWamEnumEphemeralityInitiatorType")
              .EPHEMERALITY_INITIATOR_TYPE.INITIATED_BY_OTHER;
    }
    function F() {
      return O.apply(this, arguments);
    }
    function O() {
      return (
        (O = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e = o("WAWebUserPrefsMeUser").getMeLidUserOrThrow(),
            t = yield r("WAWebLidAwareContactsDB").get(e.toJid());
          return o("WAWebUsernameTypes").isPresentUsername(
            t == null ? void 0 : t.username,
          );
        })),
        O.apply(this, arguments)
      );
    }
    function B() {
      return W.apply(this, arguments);
    }
    function W() {
      return (
        (W = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e = o("WAWebUserPrefsMeUser").getMeLidUserOrThrow(),
            t = yield r("WAWebLidAwareContactsDB").get(e.toJid());
          return (t == null ? void 0 : t.usernameKey) != null;
        })),
        W.apply(this, arguments)
      );
    }
    function q(e) {
      return U.apply(this, arguments);
    }
    function U() {
      return (
        (U = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          return z(t)
            ? null
            : o("WAWebModelStorageUtils")
                .getStorage()
                .lock(
                  ["contact"],
                  n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
                    var n, a;
                    if (t.isLid()) {
                      var i = o("WAWebApiContact").getPhoneNumber(t);
                      i == null
                        ? ((n = t.toString()), (a = "lid"))
                        : ((n = o("WAJids").toPhoneUserJid(i.user)),
                          (a = "pn"));
                    } else
                      ((n = o("WAJids").toPhoneUserJid(t.user)), (a = "pn"));
                    var l = yield r("WAWebLidAwareContactsDB").get(n);
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
                      : V(l, a);
                  }),
                );
        })),
        U.apply(this, arguments)
      );
    }
    function V(e, t) {
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
    function H(e) {
      return G.apply(this, arguments);
    }
    function G() {
      return (
        (G = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          return z(e)
            ? null
            : o("WAWebModelStorageUtils")
                .getStorage()
                .lock(
                  ["chat"],
                  (function () {
                    var t = n("asyncToGeneratorRuntime").asyncToGenerator(
                      function* (t) {
                        var n = t[0],
                          r = e.toString(),
                          a = yield n.get(r);
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
                            return o("WAWebWamEnumChatOriginsType")
                              .CHAT_ORIGINS_TYPE.LID_CTWA;
                          default:
                            return o("WAWebWamEnumChatOriginsType")
                              .CHAT_ORIGINS_TYPE.OTHERS;
                        }
                      },
                    );
                    return function (e) {
                      return t.apply(this, arguments);
                    };
                  })(),
                );
        })),
        G.apply(this, arguments)
      );
    }
    function z(e) {
      return !e.isUser() || e.isPSA() || e.isBot();
    }
    ((l.generateThreadID = p),
      (l.generateThreadIDHMAC = f),
      (l.CTWA_3PD_AGGREGATED_THREAD_ID_HMAC_SALT = h),
      (l.generateCtwa3pdAggregatedThreadIDHMAC = y),
      (l.generateMessageIDHMAC = b),
      (l.generateUserThreadIDHMAC = S),
      (l.getThreadDs = k),
      (l.getThreadDsForDb = I),
      (l.getThreadMonthDs = T),
      (l.computeStartTs = D),
      (l.shouldUpdateChatEvent = x),
      (l.shouldIncrementMsgSendAndReceive = $),
      (l.isCommerceMessage = P),
      (l.getWamDisappearingModeTrigger = M),
      (l.getWamDisappearingModeTriggerGroups = w),
      (l.getWamDisappearingModeInitiatedByMe = A),
      (l.getMeHasUsername = F),
      (l.getMeHasUsernamePin = B),
      (l.getOppositeVisibleIdentification = q),
      (l.getOppositeVisibleIdentificationType = V),
      (l.getChatOriginType = H));
  },
  98,
);
