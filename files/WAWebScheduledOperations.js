__d(
  "WAWebScheduledOperations",
  [
    "$InternalEnum",
    "NativeSchedulerTickStrategy",
    "TaskScheduler",
    "TaskSchedulerPriority",
  ],
  function (t, n, r, o, a, i, l) {
    var e = n("$InternalEnum")({
        DELETE_ADD_ONS: "deleteAddOns",
        DISMISS_QUICK_PROMOTION: "dismissQuickPromotion",
        IMPRESSION_ON_QUICK_PROMOTION: "impressionOnQuickPromotion",
        INCREMENT_NEWSLETTER_FORWARD_COUNTER:
          "incrementNewsletterForwardCounter",
        PRIMARY_ACTION_CLICK_IN_QUICK_PROMOTION:
          "primaryActionClickInQuickPromotion",
        QUERY_AND_UPDATE_GROUPS_METADATA_BY_JIDS:
          "queryAndUpdateGroupsMetadataByJids",
        QUERY_PRODUCT_LIST: "queryProductList",
        RESEND_GROUP_MSG: "resendGroupMsg",
        RESEND_USER_MSG: "resendUserMsg",
        ROTATE_KEY: "rotateKey",
        SEND_REQUESTED_KEY_SHARE: "sendRequestedKeyShare",
        SET_ABOUT: "setAbout",
        SET_TEXT_STATUS: "setTextStatus",
        USER_EXPOSURE_TO_QUICK_PROMOTION: "userExposureToQuickPromotion",
      }),
      s = 4,
      u = 3e4,
      c = 6e4,
      d = null;
    function m(e, t) {
      return _().run(t, { name: e.valueOf(), priority: p(e) }).promise;
    }
    function p(t) {
      return t === e.DELETE_ADD_ONS
        ? o("TaskSchedulerPriority").NORMAL_PRIORITY
        : t === e.DISMISS_QUICK_PROMOTION
          ? o("TaskSchedulerPriority").BACKGROUND_PRIORITY
          : t === e.RESEND_GROUP_MSG ||
              t === e.RESEND_USER_MSG ||
              t === e.SEND_REQUESTED_KEY_SHARE
            ? o("TaskSchedulerPriority").NORMAL_PRIORITY
            : t === e.IMPRESSION_ON_QUICK_PROMOTION ||
                t === e.INCREMENT_NEWSLETTER_FORWARD_COUNTER ||
                t === e.PRIMARY_ACTION_CLICK_IN_QUICK_PROMOTION ||
                t === e.QUERY_AND_UPDATE_GROUPS_METADATA_BY_JIDS ||
                t === e.QUERY_PRODUCT_LIST ||
                t === e.ROTATE_KEY ||
                t === e.SET_ABOUT ||
                t === e.SET_TEXT_STATUS ||
                t === e.USER_EXPOSURE_TO_QUICK_PROMOTION
              ? o("TaskSchedulerPriority").BACKGROUND_PRIORITY
              : (function () {
                  throw Error(
                    "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                      t,
                  );
                })();
    }
    function _() {
      return (
        d == null &&
          (d = o("TaskScheduler").taskScheduler(
            "wa-web-operations",
            {
              concurrency: s,
              failOnTimeout: !1,
              promotionTimeoutMs: u,
              timeoutMs: c,
            },
            o("NativeSchedulerTickStrategy").makeNativeSchedulerTickStrategy(),
          )),
        d
      );
    }
    ((l.ScheduledOperation = e), (l.scheduleOperation = m));
  },
  98,
);
