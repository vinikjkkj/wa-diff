__d(
  "WAWebSmbMarkAsXLabelAction",
  [
    "WASmaxInBizSettingsEnums",
    "WAWebBizGatingUtils",
    "WAWebCTWAConstants",
    "WAWebCTWADataSharingModel",
    "WAWebChatModel",
    "WAWebChatThreadLogging",
    "WAWebCommonCTWADataSharing",
    "WAWebCtwaConversationDepthUtils",
    "WAWebCtwaLabelSignalWamEvent",
    "WAWebLabelCollection",
    "WAWebLabelConstants",
    "WAWebPerCustomerDataSharingUtils",
    "WAWebWamEnumCtwaLabelTarget",
    "WAWebWamEnumCtwaLabelType",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = new Map([
        [
          (e = o("WAWebCTWAConstants")).ALLOWED_PREDEFINED_LABEL_IDS
            .NEW_CUSTOMER,
          (s = o("WAWebWamEnumCtwaLabelType")).CTWA_LABEL_TYPE.NEW_CUSTOMER,
        ],
        [e.ALLOWED_PREDEFINED_LABEL_IDS.NEW_ORDER, s.CTWA_LABEL_TYPE.NEW_ORDER],
        [
          e.ALLOWED_PREDEFINED_LABEL_IDS.PENDING_PAYMENT,
          s.CTWA_LABEL_TYPE.PENDING_PAYMENT,
        ],
        [e.ALLOWED_PREDEFINED_LABEL_IDS.PAID, s.CTWA_LABEL_TYPE.PAID],
        [
          e.ALLOWED_PREDEFINED_LABEL_IDS.ORDER_COMPLETE,
          s.CTWA_LABEL_TYPE.ORDER_COMPLETE,
        ],
        [e.ALLOWED_PREDEFINED_LABEL_IDS.FOLLOW_UP, s.CTWA_LABEL_TYPE.FOLLOW_UP],
        [e.ALLOWED_PREDEFINED_LABEL_IDS.LEAD, s.CTWA_LABEL_TYPE.LEAD],
      ]),
      c = { globalSharingSettingEnabled: !1 },
      d = function (t) {
        return t === o("WAWebWamEnumCtwaLabelType").CTWA_LABEL_TYPE.FOLLOW_UP ||
          t === o("WAWebWamEnumCtwaLabelType").CTWA_LABEL_TYPE.LEAD
          ? {}
          : t === o("WAWebWamEnumCtwaLabelType").CTWA_LABEL_TYPE.PAID
            ? { paid: !0 }
            : { paid: !1 };
      },
      m = function (t) {
        var e = o("WAWebCTWADataSharingModel").CTWADataSharingModel.getValue();
        switch (e) {
          case o("WASmaxInBizSettingsEnums").ENUM_FALSE_NOTSET_TRUE.true:
            return babelHelpers.extends(
              { globalSharingSettingEnabled: !0 },
              o("WAWebBizGatingUtils").isPerCustomerDataSharingControlsEnabled()
                ? null
                : { eventSharingSettingEnabled: t },
            );
          case o("WASmaxInBizSettingsEnums").ENUM_FALSE_NOTSET_TRUE.false:
            return c;
          case o("WASmaxInBizSettingsEnums").ENUM_FALSE_NOTSET_TRUE.notset:
          default:
            return null;
        }
      },
      p = function (t, n, a, i) {
        var e,
          l = r("WAWebCommonCTWADataSharing").getCTWAEligibilityFromChat(t);
        if (
          !(
            l == null ||
            !o("WAWebBizGatingUtils").isSMBLabelsDataSharingEnabledForChats()
          )
        ) {
          var s = (e = t.accountLid) == null ? void 0 : e.toString(),
            u = o(
              "WAWebPerCustomerDataSharingUtils",
            ).getCustomerAdsDataSharingState(s),
            c = o("WAWebCtwaConversationDepthUtils").getCtwaConversationDepth(
              t,
            );
          o("WAWebChatThreadLogging")
            .getChatThreadIDHMAC(t.id.toString())
            .then(function (e) {
              (n &&
                n.length !== 0 &&
                n.forEach(function (t) {
                  var n = d(t),
                    r = JSON.stringify(n),
                    i = babelHelpers.extends(
                      {
                        ctwaConversationDepth: c,
                        ctwaLabelSignalVersion: 1,
                        ctwaLabelTarget: o("WAWebWamEnumCtwaLabelTarget")
                          .CTWA_LABEL_TARGET.CHAT,
                        ctwaLabelType: t,
                        ctwaSignalMetadata: r,
                        deepLinkConversionSource: l.source,
                      },
                      m(a),
                      {
                        customerAdsSharingSettingEnabled: u,
                        threadIdHmac: e != null ? e : void 0,
                      },
                    );
                  new (o(
                    "WAWebCtwaLabelSignalWamEvent",
                  ).CtwaLabelSignalWamEvent)(i).commit();
                }),
                i &&
                  i.length !== 0 &&
                  i.forEach(function (t) {
                    var n = t.ctwa_3pd_conversion_subtype;
                    if (n) {
                      var r = babelHelpers.extends(
                        {
                          ctwaConversationDepth: c,
                          ctwaLabelSignalVersion: 1,
                          ctwaLabelTarget: o("WAWebWamEnumCtwaLabelTarget")
                            .CTWA_LABEL_TARGET.CHAT,
                          ctwaLabelType: o(
                            "WAWebLabelConstants",
                          ).mapCustomLabelSubtypeToCTWALabelType(n),
                          ctwaSignalMetadata: t.ctwa_3pd_conversion_metadata,
                          deepLinkConversionSource: l.source,
                        },
                        m(a),
                        {
                          customerAdsSharingSettingEnabled: u,
                          threadIdHmac: e != null ? e : void 0,
                        },
                      );
                      new (o(
                        "WAWebCtwaLabelSignalWamEvent",
                      ).CtwaLabelSignalWamEvent)(r).commit();
                    }
                  }));
            });
        }
      },
      _ = function (t, n, r) {
        var e = [];
        (n.forEach(function (t) {
          var n = o("WAWebLabelCollection").LabelCollection.get(t),
            r = n == null ? void 0 : n.predefinedId;
          if (r != null) {
            var a = u.get(r);
            (a != null && e.push(a),
              r === o("WAWebCTWAConstants").IMPORTANT_PREDEFINED_ID &&
                o("WAWebBizGatingUtils").is3pdImportantLabelSignalsEnabled() &&
                e.push(
                  o("WAWebWamEnumCtwaLabelType").CTWA_LABEL_TYPE.IMPORTANT,
                ));
          }
        }),
          e.length !== 0 &&
            t.forEach(function (t) {
              t instanceof o("WAWebChatModel").Chat && p(t, e, r);
            }));
      };
    ((l.logLabelAddedToChatAction = p), (l.logLabelSignalForModels = _));
  },
  98,
);
