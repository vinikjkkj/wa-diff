__d(
  "WAWebQbmMessageClickLogEvent",
  [
    "WAWebABProps",
    "WAWebChatThreadLogging",
    "WAWebFrontendContactGetters",
    "WAWebMsgGetters",
    "WAWebQBMLoggerBuilder",
    "WAWebQbmMessageClickWamEvent",
    "WAWebWamEnumQbmMessageClickButtonClickedType",
    "WAWebWamEnumThumbnailType",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = {
        cta_url: (e = o("WAWebWamEnumQbmMessageClickButtonClickedType"))
          .QBM_MESSAGE_CLICK_BUTTON_CLICKED_TYPE.URL,
        quick_reply: e.QBM_MESSAGE_CLICK_BUTTON_CLICKED_TYPE.QUICK_REPLY,
        cta_call: e.QBM_MESSAGE_CLICK_BUTTON_CLICKED_TYPE.PHONE_NUMBER,
        cta_copy: e.QBM_MESSAGE_CLICK_BUTTON_CLICKED_TYPE.COPY_CODE,
        cta_catalog: e.QBM_MESSAGE_CLICK_BUTTON_CLICKED_TYPE.CATALOG,
        mpm: e.QBM_MESSAGE_CLICK_BUTTON_CLICKED_TYPE.MPM,
        galaxy_message: e.QBM_MESSAGE_CLICK_BUTTON_CLICKED_TYPE.FLOW,
        cta_app: e.QBM_MESSAGE_CLICK_BUTTON_CLICKED_TYPE.APP,
      };
    function u(e) {
      var t = e.interactivePayload;
      if ((t == null ? void 0 : t.messageParamsJson) == null) return !1;
      try {
        var n,
          r = JSON.parse(t.messageParamsJson);
        return (
          (r == null || (n = r.mediaThumbnailConfiguration) == null
            ? void 0
            : n.useCustomVideoThumbnail) === !0
        );
      } catch (e) {
        return !1;
      }
    }
    function c(e) {
      return u(e)
        ? o("WAWebWamEnumThumbnailType").THUMBNAIL_TYPE.CUSTOM
        : o("WAWebMsgGetters").getThumbnailHQ(e) != null
          ? o("WAWebWamEnumThumbnailType").THUMBNAIL_TYPE.HQ
          : o("WAWebWamEnumThumbnailType").THUMBNAIL_TYPE.MEDIA_BASED;
    }
    function d(e, t) {
      if (t != null) {
        var n;
        return (n = s[t]) != null
          ? n
          : o("WAWebWamEnumQbmMessageClickButtonClickedType")
              .QBM_MESSAGE_CLICK_BUTTON_CLICKED_TYPE.OTHER;
      }
      return e;
    }
    async function m(e) {
      var t = e.buttonClickedType,
        n = e.chat,
        r = e.msg,
        a = e.nativeFlowName;
      o("WAWebABProps").getABPropConfigValue(
        "web_biz_quality_telemetry_message_clicks_enabled",
      ) &&
        new (o("WAWebQBMLoggerBuilder").QBMLoggerBuilder)(r, n)
          .addCommonFields()
          .addAttributionFields()
          .log(async function (e) {
            var i = d(t, a),
              l = o("WAWebFrontendContactGetters").getIsMyContact(n.contact),
              s = await Promise.all([
                o("WAWebChatThreadLogging").getMessageIDHMAC(r.id.toString()),
                o("WAWebChatThreadLogging").getChatThreadIDHMAC(
                  n.id.toString(),
                ),
              ]),
              u = s[0],
              m = s[1];
            new (o("WAWebQbmMessageClickWamEvent").QbmMessageClickWamEvent)(
              babelHelpers.extends({}, e, {
                isInsubContact: l,
                buttonClickedType: i,
                thumbnailType: c(r),
                messageIdHmac: u != null ? u : void 0,
                threadIdHmac: m != null ? m : void 0,
              }),
            ).commit();
          });
    }
    l.logQbmMessageClick = m;
  },
  98,
);
