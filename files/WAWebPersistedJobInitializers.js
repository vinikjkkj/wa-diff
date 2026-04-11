__d(
  "WAWebPersistedJobInitializers",
  [
    "Promise",
    "WAWebDeleteAddonsJob",
    "WAWebDeleteReactionsJob",
    "WAWebJobDismissQuickPromotion",
    "WAWebJobImpressionOnQuickPromotion",
    "WAWebJobPrimaryActionClickInQuickPromotion",
    "WAWebJobUserExposureToQuickPromotion",
    "WAWebNewsletterIncrementForwardCounterJob",
    "WAWebQueryAndUpdateGroupsMetadataByJidsJob",
    "WAWebQueryGetPublicKeyJob",
    "WAWebQueryGetSignedUserInfoJob",
    "WAWebQueryProductListCatalogJob",
    "WAWebResendGroupMsgJob",
    "WAWebResendUserMsgJob",
    "WAWebRotateKeyJob",
    "WAWebSendRequestedKeyShareJob",
    "WAWebSetAboutJob",
    "WAWebSetTextStatusJob",
    "WAWebVerifyPostcodeJob",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = {
        rotateKey: function () {
          return (e || (e = n("Promise"))).resolve(
            o("WAWebRotateKeyJob").rotateKey,
          );
        },
        setAbout: function () {
          return (e || (e = n("Promise"))).resolve(
            o("WAWebSetAboutJob").setAbout,
          );
        },
        setTextStatus: function () {
          return (e || (e = n("Promise"))).resolve(
            o("WAWebSetTextStatusJob").setTextStatus,
          );
        },
        queryProductList: function () {
          return (e || (e = n("Promise"))).resolve(
            o("WAWebQueryProductListCatalogJob").QueryProductListCatalog,
          );
        },
        getPublicKey: function () {
          return (e || (e = n("Promise"))).resolve(
            o("WAWebQueryGetPublicKeyJob").QueryGetPublicKey,
          );
        },
        getSignedUserInfo: function () {
          return (e || (e = n("Promise"))).resolve(
            o("WAWebQueryGetSignedUserInfoJob").QueryGetSignedUserInfo,
          );
        },
        verifyPostcode: function () {
          return (e || (e = n("Promise"))).resolve(
            o("WAWebVerifyPostcodeJob").VerifyPostcode,
          );
        },
        deleteReactions: function () {
          return (e || (e = n("Promise"))).resolve(
            o("WAWebDeleteReactionsJob").deleteReactions,
          );
        },
        deleteReactionsV2: function () {
          return (e || (e = n("Promise"))).resolve(
            o("WAWebDeleteAddonsJob").deleteReactionsV2,
          );
        },
        deleteAddOns: function () {
          return (e || (e = n("Promise"))).resolve(
            o("WAWebDeleteAddonsJob").deleteAddOns,
          );
        },
        sendRequestedKeyShare: function () {
          return (e || (e = n("Promise"))).resolve(
            o("WAWebSendRequestedKeyShareJob").sendRequestedKeyShare,
          );
        },
        dismissQuickPromotion: function () {
          return (e || (e = n("Promise"))).resolve(
            o("WAWebJobDismissQuickPromotion").dismissQuickPromotion,
          );
        },
        primaryActionClickInQuickPromotion: function () {
          return (e || (e = n("Promise"))).resolve(
            o("WAWebJobPrimaryActionClickInQuickPromotion")
              .primaryActionClickInQuickPromotion,
          );
        },
        impressionOnQuickPromotion: function () {
          return (e || (e = n("Promise"))).resolve(
            o("WAWebJobImpressionOnQuickPromotion").impressionOnQuickPromotion,
          );
        },
        userExposureToQuickPromotion: function () {
          return (e || (e = n("Promise"))).resolve(
            o("WAWebJobUserExposureToQuickPromotion")
              .userExposureToQuickPromotion,
          );
        },
        queryAndUpdateGroupsMetadataByJids: function () {
          return (e || (e = n("Promise"))).resolve(
            o("WAWebQueryAndUpdateGroupsMetadataByJidsJob")
              .queryAndUpdateGroupsMetadataByJidsJob,
          );
        },
        resendUserMsg: function () {
          return (e || (e = n("Promise"))).resolve(
            o("WAWebResendUserMsgJob").resendUserMsgJob,
          );
        },
        resendGroupMsg: function () {
          return (e || (e = n("Promise"))).resolve(
            o("WAWebResendGroupMsgJob").resendGroupMsgJob,
          );
        },
        incrementNewsletterForwardCounter: function () {
          return (e || (e = n("Promise"))).resolve(
            o("WAWebNewsletterIncrementForwardCounterJob")
              .incrementNewsletterForwardCounterJob,
          );
        },
      },
      u = s;
    l.default = u;
  },
  98,
);
