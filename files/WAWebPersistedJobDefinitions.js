__d(
  "WAWebPersistedJobDefinitions",
  ["WATimeUtils", "WAWebBackendErrors", "WAWebBizGatingUtils"],
  function (t, n, r, o, a, i, l) {
    var e = {
      rotateKey: function () {
        return { type: "rotateKey", args: {}, uniqKey: "rotateKey" };
      },
      setAbout: function (t) {
        return { type: "setAbout", args: { content: t }, uniqKey: "setAbout" };
      },
      queryProductList: function (t, n, r, a, i) {
        if (
          (r === void 0 && (r = null),
          o("WAWebBizGatingUtils").commerceFeaturesDisabledBySanctions())
        )
          throw new (o("WAWebBackendErrors").E451)();
        return {
          type: "queryProductList",
          args: {
            catalogWid: t.toString(),
            productIds: n,
            width: a,
            height: i,
            directConnectionEncryptedInfo: r,
          },
          uniqKey:
            "queryProductList:" +
            n.slice().sort().join(",") +
            ":" +
            a +
            ":" +
            i,
        };
      },
      getPublicKey: function (t) {
        return {
          type: "getPublicKey",
          args: { businessJid: t.toString() },
          uniqKey: "getPublicKey:" + t.toString(),
        };
      },
      getSignedUserInfo: function (t) {
        return {
          type: "getSignedUserInfo",
          args: { businessJid: t.toString() },
          uniqKey: "getSignedUserInfo:" + t.toString(),
        };
      },
      verifyPostcode: function (t, n) {
        return {
          type: "verifyPostcode",
          args: { businessJid: t.toString(), directConnectionEncryptedInfo: n },
          uniqKey: "verifyPostcode:" + t.toString() + ":" + n,
        };
      },
      deleteReactions: function (t, n) {
        return {
          type: "deleteReactions",
          args: { chatId: t, parentMsgKeys: n },
          uniqKey: "deleteReactions:" + t,
        };
      },
      deleteReactionsV2: function (t, n) {
        return {
          type: "deleteReactionsV2",
          args: { chatId: t, parentMsgKeys: n },
        };
      },
      deleteAddOns: function (t, n) {
        return { type: "deleteAddOns", args: { chatId: t, parentMsgKeys: n } };
      },
      sendRequestedKeyShare: function (t, n, r) {
        return {
          type: "sendRequestedKeyShare",
          args: { keys: t, orphanKeys: n, peerDeviceId: r.toString() },
        };
      },
      dismissQuickPromotion: function (t) {
        var e = o("WATimeUtils").unixTime();
        return {
          type: "dismissQuickPromotion",
          args: { id: t, ts: e },
          uniqKey: "dismissQuickPromotion-" + t + "-" + e,
        };
      },
      primaryActionClickInQuickPromotion: function (t) {
        var e = o("WATimeUtils").unixTime();
        return {
          type: "primaryActionClickInQuickPromotion",
          args: { id: t, ts: e },
          uniqKey: "primaryActionClickInQuickPromotion-" + t + "-" + e,
        };
      },
      impressionOnQuickPromotion: function (t) {
        var e = o("WATimeUtils").unixTime();
        return {
          type: "impressionOnQuickPromotion",
          args: { id: t, ts: e },
          uniqKey: "impressionOnQuickPromotion-" + t + "-" + e,
        };
      },
      userExposureToQuickPromotion: function (t, n, r) {
        var e = o("WATimeUtils").unixTime();
        return {
          type: "userExposureToQuickPromotion",
          args: { id: t, ts: e, experimentKey: n, exposureHoldout: r },
          uniqKey: "userExposureToQuickPromotion-" + t + "-" + e,
        };
      },
      setTextStatus: function (t, n, r) {
        return {
          type: "setTextStatus",
          args: { text: t, emoji: n, ephemeralDurationSeconds: r },
          uniqKey: "setTextStatus",
        };
      },
      queryAndUpdateGroupsMetadataByJids: function (t) {
        var e = o("WATimeUtils").unixTime();
        return {
          type: "queryAndUpdateGroupsMetadataByJids",
          args: t,
          uniqKey: "handleGroupsDirtyNotification-" + e,
        };
      },
      resendUserMsg: function (t, n, r) {
        var e = t.data.id.toString();
        return {
          type: "resendUserMsg",
          args: {
            msgId: e,
            msgType: t.data.type,
            msgRecordType: t.type,
            excludeList: n.map(function (e) {
              return e.toString();
            }),
            ackTime: r,
          },
          uniqKey: "resendUserMsg-" + e,
        };
      },
      resendGroupMsg: function (t, n, r, o, a, i, l) {
        var e = t.data.id.toString(),
          s = n.groupId;
        return {
          type: "resendGroupMsg",
          args: {
            msgId: e,
            msgType: t.data.type,
            msgRecordType: t.type,
            groupId: s,
            isDirect: r,
            oldList: o.map(function (e) {
              return e.toString();
            }),
            phash: a,
            ackTime: i,
            serverAddressingMode: l,
          },
          uniqKey: "resendGroupMsg-" + e,
        };
      },
      incrementNewsletterForwardCounter: function (t, n, r, o) {
        return {
          type: "incrementNewsletterForwardCounter",
          args: { newsletterId: t, retriesRemaining: n, serverId: r },
          waitUntil: o,
        };
      },
    };
    l.jobSerializers = e;
  },
  98,
);
