__d(
  "WAWebGuestMessagingPersistedJobInitializers",
  ["Promise", "WAWebRotateKeyJob"],
  function (t, n, r, o, a, i, l) {
    var e;
    function s() {
      return [
        {
          stepName: "noop",
          info: function () {
            return {
              requirements: null,
              code: function () {
                return (e || (e = n("Promise"))).resolve();
              },
            };
          },
        },
      ];
    }
    var u = {
        rotateKey: function () {
          return (e || (e = n("Promise"))).resolve(
            o("WAWebRotateKeyJob").rotateKey,
          );
        },
        setTextStatus: function () {
          return (e || (e = n("Promise"))).resolve(s());
        },
        queryProductList: function () {
          return (e || (e = n("Promise"))).resolve(s());
        },
        getPublicKey: function () {
          return (e || (e = n("Promise"))).resolve(s());
        },
        getSignedUserInfo: function () {
          return (e || (e = n("Promise"))).resolve(s());
        },
        verifyPostcode: function () {
          return (e || (e = n("Promise"))).resolve(s());
        },
        deleteReactions: function () {
          return (e || (e = n("Promise"))).resolve(s());
        },
        deleteReactionsV2: function () {
          return (e || (e = n("Promise"))).resolve(s());
        },
        deleteAddOns: function () {
          return (e || (e = n("Promise"))).resolve(s());
        },
        sendRequestedKeyShare: function () {
          return (e || (e = n("Promise"))).resolve(s());
        },
        dismissQuickPromotion: function () {
          return (e || (e = n("Promise"))).resolve(s());
        },
        primaryActionClickInQuickPromotion: function () {
          return (e || (e = n("Promise"))).resolve(s());
        },
        impressionOnQuickPromotion: function () {
          return (e || (e = n("Promise"))).resolve(s());
        },
        userExposureToQuickPromotion: function () {
          return (e || (e = n("Promise"))).resolve(s());
        },
        queryAndUpdateGroupsMetadataByJids: function () {
          return (e || (e = n("Promise"))).resolve(s());
        },
        resendUserMsg: function () {
          return (e || (e = n("Promise"))).resolve(s());
        },
        resendGroupMsg: function () {
          return (e || (e = n("Promise"))).resolve(s());
        },
        incrementNewsletterForwardCounter: function () {
          return (e || (e = n("Promise"))).resolve(s());
        },
        metaAiThreadServerDelete: function () {
          return (e || (e = n("Promise"))).resolve(s());
        },
      },
      c = u;
    l.default = c;
  },
  98,
);
