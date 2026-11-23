__d(
  "WAWebBizBroadcastProLocalCampaignCardAction",
  [
    "WALogger",
    "WAWebAck",
    "WAWebBackendRuntime",
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
    "WAWebMediaMsgRegistration",
    "WAWebMessageStoreService",
    "WAWebMsgDataFromModel",
    "WAWebMsgKey",
    "WAWebMsgModel",
    "WAWebMsgType",
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
    async function p(t) {
      var n = t.broadcastJid,
        r = t.campaignId,
        a = t.campaignMessageData,
        i = t.campaignTimestamp,
        l = t.messageId;
      if (
        (await o("WAWebBizBroadcastCampaignDataLayer").lookupCampaignMessage(
          l,
          n,
        )) == null
      ) {
        var u = h(i);
        a == null;
        var c =
          a != null
            ? a
            : await o(
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
        var d = await _({
          broadcastJid: n,
          campaignId: r,
          campaignMessageData: c,
          messageId: l,
          timestampSeconds: u,
        });
        if (d != null) {
          var m = !1;
          try {
            if (
              (await o(
                "WAWebBizBroadcastCampaignDataLayer",
              ).lookupCampaignMessage(l, n)) != null ||
              !(await L(d))
            )
              return;
            (o("WAWebBroadcastMsgCollectionUtils").addMsgModelToCollections(d),
              (m = !0));
          } finally {
            m || o("WAWebMediaMsgRegistration").deregisterMsg(d);
          }
        }
      }
    }
    async function _(e) {
      var t = e.broadcastJid,
        n = e.campaignId,
        a = e.campaignMessageData,
        i = e.messageId,
        l = e.timestampSeconds;
      if (a.attachmentData == null) {
        var s = await y(t, a);
        return g(s.msgData, n, i, l);
      }
      try {
        var c = await y(t, a);
        return await f(c, n, i, l);
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
    }
    async function f(e, t, n, r) {
      var a = g(e.msgData, t, n, r);
      try {
        return (await C(a, e.mediaType), a);
      } catch (e) {
        throw (o("WAWebMediaMsgRegistration").deregisterMsg(a), e);
      }
    }
    function g(e, t, n, a) {
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
    function h(e) {
      var t = Math.floor(
        o("WAWebBizBroadcastCampaignTimestamp").campaignTimestampToMillis(e) /
          o("WAWebBroadcastConsts").MS_PER_SEC,
      );
      if (!Number.isFinite(t) || t <= 0)
        throw r("err")("Campaign timestamp must be a finite positive number");
      return t;
    }
    async function y(e, t) {
      var n = t.attachmentData,
        r = t.buttonData,
        a = t.message;
      if (n == null)
        return {
          mediaType: null,
          msgData:
            r == null
              ? await o(
                  "WAWebBroadcastMsgDataUtils",
                ).createBroadcastTextMsgData(e, a)
              : await o(
                  "WAWebBroadcastMsgDataUtils",
                ).createBroadcastInteractiveMsgData(e, a, S(r)),
        };
      var i = await b(n),
        l =
          r == null
            ? await o(
                "WAWebBizBroadcastMediaProcessor",
              ).processMediaForBroadcast(i, m, e, a)
            : await o(
                "WAWebBizBroadcastMediaProcessor",
              ).processMediaWithCTAForBroadcast(i, m, e, a, S(r));
      return { mediaType: l.freshMedia.type, msgData: l.mediaMsgData };
    }
    async function C(e, t) {
      t != null &&
        (await e.waitForPrep(),
        await o(
          "WAWebBizBroadcastMediaProcessor",
        ).createBroadcastMediaUploadCallback(t)(e));
    }
    async function b(e) {
      if (e.file != null) return e.file;
      if (e.previewUrl == null) throw r("err")("Campaign media is unavailable");
      if (e.mediaType === o("WAWebMsgType").MSG_TYPE.IMAGE) {
        var t = await o("WAWebImageUtils").urlToFile(e.previewUrl);
        return v(t, e);
      }
      var n = await window.fetch(e.previewUrl);
      if (!n.ok)
        throw r("err")(
          "Campaign media download failed with status " + n.status,
        );
      var a = await n.blob();
      return v(a, e);
    }
    function v(e, t) {
      var n =
          t.fileExt == null ? "campaign-media" : "campaign-media." + t.fileExt,
        r = e.type.startsWith(t.mediaType + "/") ? e.type : t.mimetype;
      return o("WAWebCreateFile").createFile(
        [e],
        t.fileName === "" ? n : t.fileName,
        { type: r },
      );
    }
    function S(e) {
      return e == null || e.type === "cta_catalog"
        ? { buttons: [], messageVersion: d }
        : {
            buttons: [{ buttonParamsJson: R(e), name: e.type }],
            messageVersion: d,
          };
    }
    function R(e) {
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
    async function L(e) {
      var t = babelHelpers.extends(
        {},
        o("WAWebMsgDataFromModel").msgDataFromMsgModel(e),
        { local: !0 },
      );
      try {
        await (
          o("WAWebBackendRuntime").isWebDiBackendEnabled()
            ? o("WAWebBackendRuntime").runtime(
                o("WAWebMessageStoreService").MessageStoreService,
              ).storeMessages
            : o("WAWebDBProcessMessage").storeMessages
        )([t], t.to);
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
    }
    l.default = p;
  },
  98,
);
