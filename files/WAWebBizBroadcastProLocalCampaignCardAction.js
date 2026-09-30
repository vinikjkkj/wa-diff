__d(
  "WAWebBizBroadcastProLocalCampaignCardAction",
  [
    "WALogger",
    "WAWebAck",
    "WAWebBizBroadcastCampaignDataLayer",
    "WAWebBizBroadcastCampaignTimestamp",
    "WAWebBizBroadcastMediaProcessor",
    "WAWebBizBroadcastProCampaignMessageData",
    "WAWebBroadcastConsts",
    "WAWebBroadcastMsgCollectionUtils",
    "WAWebBroadcastMsgDataUtils",
    "WAWebCreateFile",
    "WAWebDBProcessMessage",
    "WAWebImageUtils",
    "WAWebMedia",
    "WAWebMsgDataFromModel",
    "WAWebMsgKey",
    "WAWebMsgModel",
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
            r = t.campaignId,
            a = t.campaignMessageData,
            i = t.campaignTimestamp,
            l = t.messageId;
          if (
            (yield o(
              "WAWebBizBroadcastCampaignDataLayer",
            ).lookupCampaignMessage(l, n)) == null
          ) {
            var u = b(i);
            a == null;
            var c =
              a != null
                ? a
                : yield o(
                    "WAWebBizBroadcastProCampaignMessageData",
                  ).fetchBizBroadcastProCampaignMessageData(r);
            if (c == null) {
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
              c.message.trim() === "" &&
              c.attachmentData == null &&
              c.buttonData == null
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
            var d = yield f(n, c, r, l, u);
            if (d != null) {
              var m = !1;
              try {
                if (
                  (yield o(
                    "WAWebBizBroadcastCampaignDataLayer",
                  ).lookupCampaignMessage(l, n)) != null ||
                  !(yield x(d))
                )
                  return;
                (o("WAWebBroadcastMsgCollectionUtils").addMsgModelToCollections(
                  d,
                ),
                  (m = !0));
              } finally {
                m || o("WAWebMedia").deregisterMsg(d);
              }
            }
          }
        })),
        _.apply(this, arguments)
      );
    }
    function f(e, t, n, r, o) {
      return g.apply(this, arguments);
    }
    function g() {
      return (
        (g = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, n, a, i) {
            if (t.attachmentData == null) {
              var l = yield v(e, t);
              return C(l.msgData, n, a, i);
            }
            try {
              var s = yield v(e, t);
              return yield h(s, n, a, i);
            } catch (e) {
              return (
                o("WALogger")
                  .WARN(
                    u ||
                      (u = babelHelpers.taggedTemplateLiteralLoose([
                        "[bb-pro-local-card] failed to process campaign media",
                      ])),
                  )
                  .catching(r("getErrorSafe")(e))
                  .sendLogs("bb-pro-local-campaign-media-processing-failed"),
                null
              );
            }
          },
        )),
        g.apply(this, arguments)
      );
    }
    function h(e, t, n, r) {
      return y.apply(this, arguments);
    }
    function y() {
      return (
        (y = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, n, r) {
            var a = C(e.msgData, t, n, r);
            try {
              return (yield R(a, e.mediaType), a);
            } catch (e) {
              throw (o("WAWebMedia").deregisterMsg(a), e);
            }
          },
        )),
        y.apply(this, arguments)
      );
    }
    function C(e, t, n, a) {
      return new (o("WAWebMsgModel").Msg)(
        babelHelpers.extends({}, e, {
          ack: o("WAWebAck").ACK.SENT,
          bizSource: "smb_promo",
          id: new (r("WAWebMsgKey"))({
            fromMe: e.id.fromMe,
            id: n,
            remote: e.id.remote,
          }),
          local: !0,
          pmCampaignId: t,
          t: a,
        }),
      );
    }
    function b(e) {
      var t = Math.floor(
        o("WAWebBizBroadcastCampaignTimestamp").campaignTimestampToMillis(e) /
          o("WAWebBroadcastConsts").MS_PER_SEC,
      );
      if (!Number.isFinite(t) || t <= 0)
        throw r("err")("Campaign timestamp must be a finite positive number");
      return t;
    }
    function v(e, t) {
      return S.apply(this, arguments);
    }
    function S() {
      return (
        (S = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = t.attachmentData,
            r = t.buttonData,
            a = t.message;
          if (n == null)
            return {
              mediaType: null,
              msgData:
                r == null
                  ? yield o(
                      "WAWebBroadcastMsgDataUtils",
                    ).createBroadcastTextMsgData(e, a)
                  : yield o(
                      "WAWebBroadcastMsgDataUtils",
                    ).createBroadcastInteractiveMsgData(e, a, T(r)),
            };
          var i = yield E(n),
            l =
              r == null
                ? yield o(
                    "WAWebBizBroadcastMediaProcessor",
                  ).processMediaForBroadcast(i, m, e, a)
                : yield o(
                    "WAWebBizBroadcastMediaProcessor",
                  ).processMediaWithCTAForBroadcast(i, m, e, a, T(r));
          return { mediaType: l.freshMedia.type, msgData: l.mediaMsgData };
        })),
        S.apply(this, arguments)
      );
    }
    function R(e, t) {
      return L.apply(this, arguments);
    }
    function L() {
      return (
        (L = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          t != null &&
            (yield e.waitForPrep(),
            yield o(
              "WAWebBizBroadcastMediaProcessor",
            ).createBroadcastMediaUploadCallback(t)(e));
        })),
        L.apply(this, arguments)
      );
    }
    function E(e) {
      return k.apply(this, arguments);
    }
    function k() {
      return (
        (k = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          if (e.file != null) return e.file;
          if (e.previewUrl == null)
            throw r("err")("Campaign media is unavailable");
          if (e.mediaType === o("WAWebMsgType").MSG_TYPE.IMAGE) {
            var t = yield o("WAWebImageUtils").urlToFile(e.previewUrl);
            return I(t, e);
          }
          var n = yield window.fetch(e.previewUrl);
          if (!n.ok)
            throw r("err")(
              "Campaign media download failed with status " + n.status,
            );
          var a = yield n.blob();
          return I(a, e);
        })),
        k.apply(this, arguments)
      );
    }
    function I(e, t) {
      var n =
          t.fileExt == null ? "campaign-media" : "campaign-media." + t.fileExt,
        r = e.type.startsWith(t.mediaType + "/") ? e.type : t.mimetype;
      return o("WAWebCreateFile").createFile(
        [e],
        t.fileName === "" ? n : t.fileName,
        { type: r },
      );
    }
    function T(e) {
      return e == null || e.type === "cta_catalog"
        ? { buttons: [], messageVersion: d }
        : {
            buttons: [{ buttonParamsJson: D(e), name: e.type }],
            messageVersion: d,
          };
    }
    function D(e) {
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
    function x(e) {
      return $.apply(this, arguments);
    }
    function $() {
      return (
        ($ = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = babelHelpers.extends(
            {},
            o("WAWebMsgDataFromModel").msgDataFromMsgModel(e),
            { local: !0 },
          );
          try {
            yield o("WAWebDBProcessMessage").storeMessages([t], t.to);
          } catch (e) {
            if (e instanceof o("WAWebDBProcessMessage").DuplicateMessageError)
              return (
                o("WALogger")
                  .WARN(
                    c ||
                      (c = babelHelpers.taggedTemplateLiteralLoose([
                        "[bb-pro-local-card] duplicate message",
                      ])),
                  )
                  .sendLogs("bb-pro-local-card-duplicate"),
                !1
              );
            throw e;
          }
          return !0;
        })),
        $.apply(this, arguments)
      );
    }
    l.default = p;
  },
  98,
);
