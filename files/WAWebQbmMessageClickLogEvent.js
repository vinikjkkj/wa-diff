__d(
  "WAWebQbmMessageClickLogEvent",
  [
    "Promise",
    "WAWebABProps",
    "WAWebChatThreadLogging",
    "WAWebFrontendContactGetters",
    "WAWebMsgGetters",
    "WAWebQBMLoggerBuilder",
    "WAWebQbmMessageClickWamEvent",
    "WAWebWamEnumQbmMessageClickButtonClickedType",
    "WAWebWamEnumThumbnailType",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u = {
        cta_url: (s = o("WAWebWamEnumQbmMessageClickButtonClickedType"))
          .QBM_MESSAGE_CLICK_BUTTON_CLICKED_TYPE.URL,
        quick_reply: s.QBM_MESSAGE_CLICK_BUTTON_CLICKED_TYPE.QUICK_REPLY,
        cta_call: s.QBM_MESSAGE_CLICK_BUTTON_CLICKED_TYPE.PHONE_NUMBER,
        cta_copy: s.QBM_MESSAGE_CLICK_BUTTON_CLICKED_TYPE.COPY_CODE,
        cta_catalog: s.QBM_MESSAGE_CLICK_BUTTON_CLICKED_TYPE.CATALOG,
        mpm: s.QBM_MESSAGE_CLICK_BUTTON_CLICKED_TYPE.MPM,
        galaxy_message: s.QBM_MESSAGE_CLICK_BUTTON_CLICKED_TYPE.FLOW,
        cta_app: s.QBM_MESSAGE_CLICK_BUTTON_CLICKED_TYPE.APP,
      };
    function c(e) {
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
    function d(e) {
      return c(e)
        ? o("WAWebWamEnumThumbnailType").THUMBNAIL_TYPE.CUSTOM
        : o("WAWebMsgGetters").getThumbnailHQ(e) != null
          ? o("WAWebWamEnumThumbnailType").THUMBNAIL_TYPE.HQ
          : o("WAWebWamEnumThumbnailType").THUMBNAIL_TYPE.MEDIA_BASED;
    }
    function m(e, t) {
      if (t != null) {
        var n;
        return (n = u[t]) != null
          ? n
          : o("WAWebWamEnumQbmMessageClickButtonClickedType")
              .QBM_MESSAGE_CLICK_BUTTON_CLICKED_TYPE.OTHER;
      }
      return e;
    }
    function p(e) {
      return _.apply(this, arguments);
    }
    function _() {
      return (
        (_ = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          var r = t.buttonClickedType,
            a = t.chat,
            i = t.msg,
            l = t.nativeFlowName;
          o("WAWebABProps").getABPropConfigValue(
            "web_biz_quality_telemetry_message_clicks_enabled",
          ) &&
            new (o("WAWebQBMLoggerBuilder").QBMLoggerBuilder)(i, a)
              .addCommonFields()
              .addAttributionFields()
              .log(
                (function () {
                  var t = n("asyncToGeneratorRuntime").asyncToGenerator(
                    function* (t) {
                      var s = m(r, l),
                        u = o("WAWebFrontendContactGetters").getIsMyContact(
                          a.contact,
                        ),
                        c = yield (e || (e = n("Promise"))).all([
                          o("WAWebChatThreadLogging").getMessageIDHMAC(
                            i.id.toString(),
                          ),
                          o("WAWebChatThreadLogging").getChatThreadIDHMAC(
                            a.id.toString(),
                          ),
                        ]),
                        p = c[0],
                        _ = c[1];
                      new (o(
                        "WAWebQbmMessageClickWamEvent",
                      ).QbmMessageClickWamEvent)(
                        babelHelpers.extends({}, t, {
                          isInsubContact: u,
                          buttonClickedType: s,
                          thumbnailType: d(i),
                          messageIdHmac: p != null ? p : void 0,
                          threadIdHmac: _ != null ? _ : void 0,
                        }),
                      ).commit();
                    },
                  );
                  return function (e) {
                    return t.apply(this, arguments);
                  };
                })(),
              );
        })),
        _.apply(this, arguments)
      );
    }
    l.logQbmMessageClick = p;
  },
  98,
);
