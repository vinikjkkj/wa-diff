__d(
  "WAWebBizBroadcastProLocalCampaignCardAction",
  [
    "WALogger",
    "WAWebAck",
    "WAWebBizBroadcastCampaignTimestamp",
    "WAWebBizBroadcastProCampaignMessageData",
    "WAWebBroadcastConsts",
    "WAWebBroadcastMsgCollectionUtils",
    "WAWebBroadcastMsgDataUtils",
    "WAWebDBProcessMessage",
    "WAWebInteractiveMessageHeaderMediaType",
    "WAWebMsgKey",
    "WAWebMsgType",
    "asyncToGeneratorRuntime",
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c = 1;
    function d(e) {
      return m.apply(this, arguments);
    }
    function m() {
      return (
        (m = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          var n = t.broadcastJid,
            a = t.campaignId,
            i = t.campaignMessageData,
            l = t.campaignTimestamp,
            u = t.messageId,
            c = p(l);
          i == null;
          var d =
            i != null
              ? i
              : yield o(
                  "WAWebBizBroadcastProCampaignMessageData",
                ).fetchBizBroadcastProCampaignMessageData(a);
          if (d == null) {
            o("WALogger")
              .WARN(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "[bb-pro-local-card] campaign message data missing",
                  ])),
              )
              .sendLogs("bb-pro-local-card-message-data-missing");
            return;
          }
          if (
            d.message.trim() === "" &&
            d.attachmentData == null &&
            d.buttonData == null
          ) {
            o("WALogger")
              .WARN(
                s ||
                  (s = babelHelpers.taggedTemplateLiteralLoose([
                    "[bb-pro-local-card] campaign message data empty",
                  ])),
              )
              .sendLogs("bb-pro-local-card-message-data-empty");
            return;
          }
          var m = yield _(n, d),
            f = babelHelpers.extends({}, m, {
              ack: o("WAWebAck").ACK.SENT,
              bizSource: "smb_promo",
              id:
                u == null
                  ? m.id
                  : new (r("WAWebMsgKey"))({
                      fromMe: m.id.fromMe,
                      id: u,
                      participant: m.id.participant,
                      remote: m.id.remote,
                    }),
              local: !0,
              pmCampaignId: a,
              t: c,
            });
          yield C(f);
        })),
        m.apply(this, arguments)
      );
    }
    function p(e) {
      var t = Math.floor(
        o("WAWebBizBroadcastCampaignTimestamp").campaignTimestampToMillis(e) /
          o("WAWebBroadcastConsts").MS_PER_SEC,
      );
      if (!Number.isFinite(t) || t <= 0)
        throw r("err")("Campaign timestamp must be a finite positive number");
      return t;
    }
    function _(e, t) {
      return f.apply(this, arguments);
    }
    function f() {
      return (
        (f = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = t.attachmentData,
            r = t.buttonData,
            a = t.message,
            i = y(n);
          if (r == null && i == null)
            return o("WAWebBroadcastMsgDataUtils").createBroadcastTextMsgData(
              e,
              a,
            );
          var l = yield o(
            "WAWebBroadcastMsgDataUtils",
          ).createBroadcastInteractiveMsgData(e, a, g(r));
          return i == null
            ? l
            : babelHelpers.extends({}, l, {
                interactiveHeader: {
                  hasMediaAttachment: !0,
                  mediaType: i,
                  subtitle: null,
                  thumbnail: null,
                  title: null,
                },
              });
        })),
        f.apply(this, arguments)
      );
    }
    function g(e) {
      return e == null || e.type === "cta_catalog"
        ? { buttons: [], messageVersion: c }
        : {
            buttons: [{ buttonParamsJson: h(e), name: e.type }],
            messageVersion: c,
          };
    }
    function h(e) {
      return (function (e) {
        if (
          ((typeof e == "object" && e !== null) || typeof e == "function") &&
          e.type === "cta_url" &&
          "displayText" in e &&
          "url" in e
        ) {
          var t = e.displayText,
            n = e.url;
          return JSON.stringify({ display_text: t, url: n });
        }
        if (
          ((typeof e == "object" && e !== null) || typeof e == "function") &&
          e.type === "cta_call" &&
          "displayText" in e &&
          "phoneNumber" in e
        ) {
          var r = e.displayText,
            o = e.phoneNumber;
          return JSON.stringify({ display_text: r, phone_number: o });
        }
        if (
          ((typeof e == "object" && e !== null) || typeof e == "function") &&
          e.type === "quick_reply" &&
          "displayText" in e
        ) {
          var a = e.displayText;
          return JSON.stringify({ display_text: a, id: a });
        }
        if (
          ((typeof e == "object" && e !== null) || typeof e == "function") &&
          e.type === "cta_catalog" &&
          "businessPhoneNumber" in e &&
          "displayText" in e
        ) {
          var i = e.businessPhoneNumber,
            l = e.displayText;
          return JSON.stringify({ business_phone_number: i, display_text: l });
        }
        throw Error(
          "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
            e,
        );
      })(e);
    }
    function y(e) {
      return (function (e) {
        return e === o("WAWebMsgType").MSG_TYPE.IMAGE
          ? o("WAWebInteractiveMessageHeaderMediaType")
              .InteractiveMessageHeaderMediaType.IMAGE
          : e === o("WAWebMsgType").MSG_TYPE.VIDEO
            ? o("WAWebInteractiveMessageHeaderMediaType")
                .InteractiveMessageHeaderMediaType.VIDEO
            : null;
      })(e == null ? void 0 : e.mediaType);
    }
    function C(e) {
      return b.apply(this, arguments);
    }
    function b() {
      return (
        (b = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          try {
            yield o("WAWebDBProcessMessage").storeMessages([e], e.to);
          } catch (e) {
            if (e instanceof o("WAWebDBProcessMessage").DuplicateMessageError) {
              o("WALogger")
                .WARN(
                  u ||
                    (u = babelHelpers.taggedTemplateLiteralLoose([
                      "[bb-pro-local-card] duplicate message",
                    ])),
                )
                .sendLogs("bb-pro-local-card-duplicate");
              return;
            }
            throw e;
          }
          o("WAWebBroadcastMsgCollectionUtils").addMsgsToCollections(e, []);
        })),
        b.apply(this, arguments)
      );
    }
    l.default = d;
  },
  98,
);
