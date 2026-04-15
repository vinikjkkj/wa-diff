__d(
  "WAWebQBMLoggerBuilder",
  [
    "WAWebABProps",
    "WAWebBizMessageAttributionFields",
    "WAWebMsgGetters",
    "WAWebWamEnumChatsFolderType",
    "WAWebWamEnumContactType",
    "WAWebWamEnumQbmFlag",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = "ds",
      s = (function () {
        function t(e, t) {
          ((this.msg = e), (this.chat = t), (this.sharedFields = {}));
        }
        var n = t.prototype;
        return (
          (n.isLoggingAllowed = function (t) {
            return o("WAWebABProps").getABPropConfigValue(
              "web_biz_quality_telemetry_enabled",
            )
              ? !!this.getBusinessContactType(t)
              : !1;
          }),
          (n.log = function (t) {
            this.isLoggingAllowed(this.chat) && t(this.sharedFields);
          }),
          (n.addCommonFields = function () {
            var e,
              t,
              n,
              r = this.getBusinessContactType(this.chat),
              a = this.msg.broadcast === !0;
            return (
              (this.sharedFields = babelHelpers.extends({}, this.sharedFields, {
                chatsFolderType: this.getFolderType(),
                contactType: r != null ? r : void 0,
                decisionId: (e = this.msg.decisionId) != null ? e : void 0,
                entSourceSubplatform:
                  (t = this.msg.sourceType) != null ? t : void 0,
                deltaTime: this.getDeltaTimeSeconds(this.msg.t),
                deltaTimeReceived: this.getDeltaTimeFromMillis(
                  this.msg.clientReceivedTsMillis,
                ),
                hsmTagStr:
                  (n = o("WAWebMsgGetters").getHsmTag(this.msg)) != null
                    ? n
                    : void 0,
                isBroadcastMessage: a,
                isCoex: this.getIsCoex(),
                isThroughDecisionService: this.getIsThroughDecisionService(),
                messageTypeStr: this.msg.type,
                qbmFlag: this.getQbmFlag(),
                isOba: this.getIsOba(this.chat),
              })),
              this
            );
          }),
          (n.addAttributionFields = function () {
            var e = o(
              "WAWebBizMessageAttributionFields",
            ).extractBizMessageAttribution(this.msg);
            return (
              (this.sharedFields = babelHelpers.extends(
                {},
                this.sharedFields,
                e,
              )),
              this
            );
          }),
          (n.getQbmFlag = function () {
            var e = o("WAWebMsgGetters").getBizSource(this.msg);
            return o("WAWebMsgGetters").isBizSourceFromMarketingMessage(e)
              ? o("WAWebWamEnumQbmFlag").QBM_FLAG.MARKETING_MESSAGE_SMB
              : (function (e) {
                  return e === "UTILITY"
                    ? o("WAWebWamEnumQbmFlag").QBM_FLAG.TRANSACTIONAL
                    : e === "MARKETING"
                      ? o("WAWebWamEnumQbmFlag").QBM_FLAG.PROMOTIONAL
                      : e === "AUTHENTICATION"
                        ? o("WAWebWamEnumQbmFlag").QBM_FLAG.OTP
                        : o("WAWebWamEnumQbmFlag").QBM_FLAG.OTHER;
                })(o("WAWebMsgGetters").getHsmTag(this.msg));
          }),
          (n.getBusinessContactType = function (t) {
            if (t.contact.isEnterprise === !0)
              return o("WAWebWamEnumContactType").CONTACT_TYPE.ENTERPRISE;
            if (t.contact.isBusiness === !0)
              return o("WAWebWamEnumContactType").CONTACT_TYPE.SMB;
          }),
          (n.getDeltaTimeSeconds = function (t) {
            if (!(t == null || t <= 0)) return Math.floor(Date.now() / 1e3) - t;
          }),
          (n.getDeltaTimeFromMillis = function (t) {
            if (!(t == null || t <= 0))
              return Math.floor((Date.now() - t) / 1e3);
          }),
          (n.getIsCoex = function () {
            return this.chat.contact.isHosted === !0;
          }),
          (n.getFolderType = function () {
            var e;
            return ((e = this.chat) == null ? void 0 : e.archive) === !0
              ? o("WAWebWamEnumChatsFolderType").CHATS_FOLDER_TYPE.ARCHIVED
              : o("WAWebWamEnumChatsFolderType").CHATS_FOLDER_TYPE.INBOX;
          }),
          (n.getIsThroughDecisionService = function () {
            var t,
              n = this.msg.decisionSources;
            return (t = n == null ? void 0 : n.includes(e)) != null ? t : !1;
          }),
          (n.getIsOba = function (t) {
            var e;
            return (
              ((e = t.contact.businessProfile) == null
                ? void 0
                : e.isAuthorizedAgent) === !0
            );
          }),
          t
        );
      })();
    l.QBMLoggerBuilder = s;
  },
  98,
);
