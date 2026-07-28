__d(
  "WAWebSmbMarkAsXLabelAction",
  [
    "WASmaxInBizSettingsEnums",
    "WATimeUtils",
    "WAWebCTWAConstants",
    "WAWebCTWADataSharingModel",
    "WAWebCTWAGatingUtils",
    "WAWebChatModel",
    "WAWebChatThreadLogging",
    "WAWebCommonCTWADataSharing",
    "WAWebConversionTupleCollection",
    "WAWebConversionTupleModel",
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
              o(
                "WAWebCTWAGatingUtils",
              ).isPerCustomerDataSharingControlsEnabled()
                ? null
                : { eventSharingSettingEnabled: t },
            );
          case o("WASmaxInBizSettingsEnums").ENUM_FALSE_NOTSET_TRUE.false:
            return c;
          case o("WASmaxInBizSettingsEnums").ENUM_FALSE_NOTSET_TRUE.notset:
          default:
            return null;
        }
      };
    function p(e, t, n, a) {
      var i,
        l,
        s = o("WAWebCommonCTWADataSharing").getCTWAEligibilityFromChat(e);
      if (
        !(
          s == null ||
          !o("WAWebCTWAGatingUtils").isSMBLabelsDataSharingEnabledForChats()
        ) &&
        !o("WAWebCTWAGatingUtils").isCtwa3pdAggregatedConversionEnabled()
      ) {
        var u = r("WAWebConversionTupleCollection").get(e.id);
        if (
          !(
            u != null &&
            o("WATimeUtils").unixTime() - u.timestamp >
              o("WAWebConversionTupleModel").ConversionTupleExpiry &&
            o("WAWebCTWAGatingUtils").isCtwaConversionCreationFromDelayEnabled()
          )
        ) {
          var c = (i = e.accountLid) == null ? void 0 : i.toString(),
            p = o(
              "WAWebPerCustomerDataSharingUtils",
            ).getCustomerAdsDataSharingState(c),
            _ = (l = u == null ? void 0 : u.conversationDepth) != null ? l : 0;
          o("WAWebChatThreadLogging")
            .getChatThreadIDHMAC(e.id.toString())
            .then(function (e) {
              (t &&
                t.length !== 0 &&
                t.forEach(function (t) {
                  var r = d(t),
                    a = JSON.stringify(r),
                    i = babelHelpers.extends(
                      {
                        ctwaConversationDepth: _,
                        ctwaLabelSignalVersion: 1,
                        ctwaLabelTarget: o("WAWebWamEnumCtwaLabelTarget")
                          .CTWA_LABEL_TARGET.CHAT,
                        ctwaLabelType: t,
                        ctwaSignalMetadata: a,
                        deepLinkConversionSource: s.source,
                      },
                      m(n),
                      {
                        customerAdsSharingSettingEnabled: p,
                        threadIdHmac: e != null ? e : void 0,
                      },
                    );
                  new (o(
                    "WAWebCtwaLabelSignalWamEvent",
                  ).CtwaLabelSignalWamEvent)(i).commit();
                }),
                a &&
                  a.length !== 0 &&
                  a.forEach(function (t) {
                    var r = t.ctwa_3pd_conversion_subtype;
                    if (r) {
                      var a = babelHelpers.extends(
                        {
                          ctwaConversationDepth: _,
                          ctwaLabelSignalVersion: 1,
                          ctwaLabelTarget: o("WAWebWamEnumCtwaLabelTarget")
                            .CTWA_LABEL_TARGET.CHAT,
                          ctwaLabelType: o(
                            "WAWebLabelConstants",
                          ).mapCustomLabelSubtypeToCTWALabelType(r),
                          ctwaSignalMetadata: t.ctwa_3pd_conversion_metadata,
                          deepLinkConversionSource: s.source,
                        },
                        m(n),
                        {
                          customerAdsSharingSettingEnabled: p,
                          threadIdHmac: e != null ? e : void 0,
                        },
                      );
                      new (o(
                        "WAWebCtwaLabelSignalWamEvent",
                      ).CtwaLabelSignalWamEvent)(a).commit();
                    }
                  }));
            });
        }
      }
    }
    function _(e, t, n) {
      var r = [];
      (t.forEach(function (e) {
        var t = o("WAWebLabelCollection").LabelCollection.get(e),
          n = t == null ? void 0 : t.predefinedId;
        if (n != null) {
          var a = u.get(n);
          (a != null && r.push(a),
            n === o("WAWebCTWAConstants").IMPORTANT_PREDEFINED_ID &&
              o("WAWebCTWAGatingUtils").is3pdImportantLabelSignalsEnabled() &&
              r.push(o("WAWebWamEnumCtwaLabelType").CTWA_LABEL_TYPE.IMPORTANT));
        }
      }),
        r.length !== 0 &&
          e.forEach(function (e) {
            e instanceof o("WAWebChatModel").Chat && p(e, r, n);
          }));
    }
    ((l.logLabelAddedToChatAction = p), (l.logLabelSignalForModels = _));
  },
  98,
);
