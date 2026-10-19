__d(
  "MAWP2pPaymentMessage",
  [
    "MSGDataclassTypes.flow",
    "WAArmadilloApplication.pb",
    "WAArmadilloXMA.pb",
    "WABuildMpsPayload",
    "WAJids",
    "WAMsgApplication.pb",
    "WAStanzaUtils",
    "WATimeUtils",
    "encodeProtobuf",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      var t = o("MSGDataclassTypes.flow").XmsgXmaOpgP2pPaymentMethodType.cast(
          e.initiatingUserWalletType,
        ),
        n = o("MSGDataclassTypes.flow").XmsgXmaOpgP2pTransactionType.cast(
          e.transactionType,
        );
      return t == null || n == null
        ? null
        : {
            content: {
              __typename: "XMSGXmaSingleContent",
              custom_template_data: {
                __typename: "XMSGXmaOpgP2pTemplateData",
                transaction_data: {
                  __typename: "XMSGXmaOpgP2pTransactionData",
                  amount: e.amount,
                  currency_symbol: "$",
                  initiating_user_fb_id: e.initiatingUserFbid,
                  initiating_user_wallet_type: t,
                  status: 0,
                  target_user_fb_id: e.targetUserFbid,
                  transaction_type: n,
                },
              },
            },
            layout_type: o("MSGDataclassTypes.flow").XmsgXmaLayoutType.Single,
          };
    }
    function s(t, n) {
      var r = e(t);
      if (r == null || t.offlineThreadingId === "") return null;
      var a =
          n === t.initiatingUserFbid ? t.targetUserFbid : t.initiatingUserFbid,
        i = o("encodeProtobuf")
          .encodeProtobuf(o("WAArmadilloApplication.pb").ArmadilloSpec, {
            payload: {
              content: {
                extendedContentMessage: {
                  targetType:
                    o("WAArmadilloXMA.pb")
                      .EXTENDED_CONTENT_MESSAGE_EXTENDED_CONTENT_TYPE
                      .MSG_OPG_P2P_PAYMENT,
                  xmaDataclass: JSON.stringify(r),
                  xmaLayoutType:
                    o("WAArmadilloXMA.pb")
                      .EXTENDED_CONTENT_MESSAGE_XMA_LAYOUT_TYPE.SINGLE,
                },
              },
            },
          })
          .readBuffer();
      return o("WABuildMpsPayload").buildMpsMessage(
        {
          encryptedTransportMessage: o("encodeProtobuf")
            .encodeProtobuf(o("WAMsgApplication.pb").MessageApplicationSpec, {
              payload: {
                subProtocol: { armadillo: { payload: i, version: 1 } },
              },
            })
            .readBuffer(),
        },
        {
          externalId: o("WAStanzaUtils").toStanzaId(t.offlineThreadingId),
          millisServerTs: o("WATimeUtils").castToMillisTime(
            t.serverTimestampMs,
          ),
          senderJid: o("WAJids").toMsgrUserJid(t.initiatingUserFbid),
          threadId: o("WAJids").toMsgrUserJid(a),
        },
      );
    }
    ((l.buildP2pPaymentDataclass = e), (l.buildP2pPaymentMessage = s));
  },
  98,
);
