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
    function h(e, t) {
      return y.apply(this, arguments);
    }
    function y() {
      return (
        (y = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = c(t);
          return d(e, n);
        })),
        y.apply(this, arguments)
      );
    }
    function C(e, t) {
      return b.apply(this, arguments);
    }
    function b() {
      return (
        (b = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = yield v(e),
            r = c(t);
          return d(n, r);
        })),
        b.apply(this, arguments)
      );
    }
    function v(e) {
      return S.apply(this, arguments);
    }
    function S() {
      return (
        (S = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = c(e);
          return self.crypto.subtle.digest("SHA-256", t);
        })),
        S.apply(this, arguments)
      );
    }
    function R(e) {
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
    function L(e) {
      return R(e).replace(/\//g, "-");
    }
    function E(e) {
      var t = o("WATimeUtils").toDate(
          o("WATimeUtils").castToUnixTime(
            e - 8 * o("WATimeUtils").HOUR_SECONDS,
          ),
        ),
        n = t.getUTCFullYear(),
        r = String(t.getUTCMonth() + 1).padStart(2, "0");
      return n + "/" + r + "/01";
    }
    function k(e, t) {
      var n = t % o("WATimeUtils").DAY_SECONDS,
        r = t - n;
      return n >= e ? r + e : r - o("WATimeUtils").DAY_SECONDS + e;
    }
    function I(e, t, n) {
      return k(e, t) > n;
    }
    function T(e) {
      return e.type !== o("WAWebMsgType").MSG_TYPE.KEEP_IN_CHAT;
    }
    function D(e) {
      var t,
        n = new Set([
          o("WAWebMsgType").MSG_TYPE.PRODUCT,
          o("WAWebMsgType").MSG_TYPE.ORDER,
          o("WAWebMsgType").MSG_TYPE.LIST,
        ]);
      return (
        n.has(e.type) ||
        n.has((t = e.quotedMsg) == null ? void 0 : t.type) ||
        !!(e.matchedText != null && e.matchedText !== "" && x(e.matchedText)) ||
        (e.type === o("WAWebMsgType").MSG_TYPE.NATIVE_FLOW &&
          (e.nativeFlowName ===
            r("WAWebInteractiveMessagesNativeFlowName").ORDER_DETAILS ||
            e.nativeFlowName ===
              r("WAWebInteractiveMessagesNativeFlowName").ORDER_STATUS))
      );
    }
    function x(e) {
      return (
        o("WAWebApiParse").matchCatalogUrl(e) ||
        o("WAWebApiParse").matchProductUrl(e)
      );
    }
    function $(e) {
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
    function P(e) {
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
    function N(e) {
      return e == null
        ? null
        : e
          ? o("WAWebWamEnumEphemeralityInitiatorType")
              .EPHEMERALITY_INITIATOR_TYPE.INITIATED_BY_ME
          : o("WAWebWamEnumEphemeralityInitiatorType")
              .EPHEMERALITY_INITIATOR_TYPE.INITIATED_BY_OTHER;
    }
    function M() {
      return w.apply(this, arguments);
    }
    function w() {
      return (
        (w = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e = o("WAWebUserPrefsMeUser").getMePnUserOrThrow_DO_NOT_USE(),
            t = yield r("WAWebLidAwareContactsDB").get(e.toJid());
          return (t == null ? void 0 : t.username) != null && t.username !== "";
        })),
        w.apply(this, arguments)
      );
    }
    function A() {
      return F.apply(this, arguments);
    }
    function F() {
      return (
        (F = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e = o("WAWebUserPrefsMeUser").getMePnUserOrThrow_DO_NOT_USE(),
            t = yield r("WAWebLidAwareContactsDB").get(e.toJid());
          return (t == null ? void 0 : t.usernameKey) != null;
        })),
        F.apply(this, arguments)
      );
    }
    function O(e) {
      return B.apply(this, arguments);
    }
    function B() {
      return (
        (B = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          return V(t)
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
                      : W(l, a);
                  }),
                );
        })),
        B.apply(this, arguments)
      );
    }
    function W(e, t) {
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
                : e.username != null &&
                  e.username !== "" &&
                  (n = o("WAWebWamEnumOppositeVisibleIdentificationType")
                    .OPPOSITE_VISIBLE_IDENTIFICATION_TYPE.USERNAME),
        n
      );
    }
    function q(e) {
      return U.apply(this, arguments);
    }
    function U() {
      return (
        (U = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          return V(e)
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
        U.apply(this, arguments)
      );
    }
    function V(e) {
      return !e.isUser() || e.isPSA() || e.isBot();
    }
    ((l.generateThreadID = p),
      (l.generateThreadIDHMAC = f),
      (l.generateMessageIDHMAC = h),
      (l.generateUserThreadIDHMAC = C),
      (l.getThreadDs = R),
      (l.getThreadDsForDb = L),
      (l.getThreadMonthDs = E),
      (l.computeStartTs = k),
      (l.shouldUpdateChatEvent = I),
      (l.shouldIncrementMsgSendAndReceive = T),
      (l.isCommerceMessage = D),
      (l.getWamDisappearingModeTrigger = $),
      (l.getWamDisappearingModeTriggerGroups = P),
      (l.getWamDisappearingModeInitiatedByMe = N),
      (l.getMeHasUsername = M),
      (l.getMeHasUsernamePin = A),
      (l.getOppositeVisibleIdentification = O),
      (l.getOppositeVisibleIdentificationType = W),
      (l.getChatOriginType = q));
  },
  98,
);
