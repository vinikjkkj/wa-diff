__d(
  "WAWebBizBroadcastProLocalCampaignCardAction",
  [
    "WALogger",
    "WAWebAck",
    "WAWebBizBroadcastCampaignTimestamp",
    "WAWebBizBroadcastMediaProcessor",
    "WAWebBizBroadcastProCampaignMessageData",
    "WAWebBroadcastConsts",
    "WAWebBroadcastMsgCollectionUtils",
    "WAWebBroadcastMsgDataUtils",
    "WAWebCreateFile",
    "WAWebDBProcessMessage",
    "WAWebInteractiveMessageHeaderMediaType",
    "WAWebMsgKey",
    "WAWebMsgType",
    "asyncToGeneratorRuntime",
    "err",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c,
      d = 1,
      m = 1;
    function p(e) {
      return _.apply(this, arguments);
    }
    function _() {
      return (
        (_ = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          var n = t.broadcastJid,
            a = t.campaignId,
            i = t.campaignMessageData,
            l = t.campaignTimestamp,
            u = t.messageId,
            c = f(l);
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
          var m = yield g(n, d),
            p = babelHelpers.extends({}, m, {
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
          yield R(p);
        })),
        _.apply(this, arguments)
      );
    }
    function f(e) {
      var t = Math.floor(
        o("WAWebBizBroadcastCampaignTimestamp").campaignTimestampToMillis(e) /
          o("WAWebBroadcastConsts").MS_PER_SEC,
      );
      if (!Number.isFinite(t) || t <= 0)
        throw r("err")("Campaign timestamp must be a finite positive number");
      return t;
    }
    function g(e, t) {
      return h.apply(this, arguments);
    }
    function h() {
      return (
        (h = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = t.attachmentData,
            a = t.buttonData,
            i = t.message,
            l = S(n);
          if (a == null && l == null)
            return o("WAWebBroadcastMsgDataUtils").createBroadcastTextMsgData(
              e,
              i,
            );
          var s = b(a);
          if (n != null && l != null)
            try {
              var c = yield y(n);
              if (c != null) {
                var d = yield o(
                    "WAWebBizBroadcastMediaProcessor",
                  ).processMediaWithCTAForBroadcast(c, m, e, i, s),
                  p = d.mediaMsgData;
                return p;
              }
            } catch (e) {
              o("WALogger")
                .WARN(
                  u ||
                    (u = babelHelpers.taggedTemplateLiteralLoose([
                      "[bb-pro-local-card] failed to process campaign media",
                    ])),
                )
                .catching(r("getErrorSafe")(e))
                .sendLogs("bb-pro-local-campaign-media-processing-failed");
            }
          var _ = yield o(
            "WAWebBroadcastMsgDataUtils",
          ).createBroadcastInteractiveMsgData(e, i, s);
          return l == null
            ? _
            : babelHelpers.extends({}, _, {
                interactiveHeader: {
                  hasMediaAttachment: !0,
                  mediaType: l,
                  subtitle: null,
                  thumbnail: null,
                  title: null,
                },
              });
        })),
        h.apply(this, arguments)
      );
    }
    function y(e) {
      return C.apply(this, arguments);
    }
    function C() {
      return (
        (C = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          if (e.file != null) return e.file;
          if (e.previewUrl == null) return null;
          var t = yield window.fetch(e.previewUrl);
          if (!t.ok)
            throw r("err")(
              "Campaign media download failed with status " + t.status,
            );
          var n = yield t.blob(),
            a =
              e.fileExt == null
                ? "campaign-media"
                : "campaign-media." + e.fileExt,
            i = n.type.startsWith(e.mediaType + "/") ? n.type : e.mimetype;
          return o("WAWebCreateFile").createFile(
            [n],
            e.fileName === "" ? a : e.fileName,
            { type: i },
          );
        })),
        C.apply(this, arguments)
      );
    }
    function b(e) {
      return e == null || e.type === "cta_catalog"
        ? { buttons: [], messageVersion: d }
        : {
            buttons: [{ buttonParamsJson: v(e), name: e.type }],
            messageVersion: d,
          };
    }
    function v(e) {
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
    function S(e) {
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
    function R(e) {
      return L.apply(this, arguments);
    }
    function L() {
      return (
        (L = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          try {
            yield o("WAWebDBProcessMessage").storeMessages([e], e.to);
          } catch (e) {
            if (e instanceof o("WAWebDBProcessMessage").DuplicateMessageError) {
              o("WALogger")
                .WARN(
                  c ||
                    (c = babelHelpers.taggedTemplateLiteralLoose([
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
        L.apply(this, arguments)
      );
    }
    l.default = p;
  },
  98,
);
