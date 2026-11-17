__d(
  "CurrentUser",
  ["Cookie", "CurrentUserInitialData"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = {
        getID: function () {
          return (e || (e = r("CurrentUserInitialData"))).USER_ID;
        },
        getAccountID: function () {
          return (e || (e = r("CurrentUserInitialData"))).ACCOUNT_ID;
        },
        getPossiblyNonFacebookUserID: function () {
          var t;
          return (t = (e || (e = r("CurrentUserInitialData")))
            .NON_FACEBOOK_USER_ID) != null
            ? t
            : s.getID();
        },
        getEIMU: function () {
          var t;
          return (t = (e || (e = r("CurrentUserInitialData"))).IG_USER_EIMU) !=
            null
            ? t
            : "0";
        },
        getEmployeeWorkUserID: function () {
          return (e || (e = r("CurrentUserInitialData"))).WORK_USER_ID;
        },
        getName: function () {
          return (e || (e = r("CurrentUserInitialData"))).NAME;
        },
        getShortName: function () {
          return (e || (e = r("CurrentUserInitialData"))).SHORT_NAME;
        },
        getAbraID: function () {
          var t;
          return (t = (e || (e = r("CurrentUserInitialData"))).ABRA_ID) != null
            ? t
            : "0";
        },
        getAbraStorageID: function () {
          var t;
          return (t = (e || (e = r("CurrentUserInitialData")))
            .ABRA_STORAGE_ID) != null
            ? t
            : "0";
        },
        getARID: function () {
          var t;
          return (t = (e || (e = r("CurrentUserInitialData"))).AR_ID) != null
            ? t
            : "0";
        },
        getEPOU: function () {
          var t;
          return (t = (e || (e = r("CurrentUserInitialData"))).EPOU_ID) != null
            ? t
            : "0";
        },
        getEOCPU: function () {
          var t;
          return (t = (e || (e = r("CurrentUserInitialData"))).EOCPU_ID) != null
            ? t
            : "0";
        },
        isLoggedIn: function () {
          return s.getPossiblyNonFacebookUserID() !== "0";
        },
        isLoggedInNow: function () {
          var t;
          return s.isLoggedIn()
            ? (e || (e = r("CurrentUserInitialData"))).IS_INTERN_SITE ||
              (e || (e = r("CurrentUserInitialData"))).IS_ABRA_USER ||
              (e || (e = r("CurrentUserInitialData"))).IS_ENTERPRISE_USER ||
              (e || (e = r("CurrentUserInitialData"))).IS_FRL_USER ||
              (e || (e = r("CurrentUserInitialData"))).IS_IMAGINE_USER ||
              (e || (e = r("CurrentUserInitialData"))).IS_INSTAGRAM_USER ||
              (e || (e = r("CurrentUserInitialData"))).IS_META_SPARK_USER ||
              (e || (e = r("CurrentUserInitialData"))).IS_OCULUS_USER ||
              (e || (e = r("CurrentUserInitialData"))).IS_THREADS_USER ||
              (e || (e = r("CurrentUserInitialData"))).IS_TOGETHER_APP_USER ||
              (e || (e = r("CurrentUserInitialData")))
                .IS_WORK_MESSENGER_CALL_GUEST_USER ||
              (e || (e = r("CurrentUserInitialData"))).IS_WORK_USER ||
              (e || (e = r("CurrentUserInitialData"))).IS_WORKROOMS_USER ||
              (e || (e = r("CurrentUserInitialData")))
                .IS_ANONYMOUS_CASTING_USER ||
              (e || (e = r("CurrentUserInitialData"))).IS_META_CAREERS_USER
              ? !0
              : (e || (e = r("CurrentUserInitialData"))).ORIGINAL_USER_ID !=
                    null &&
                  (e || (e = r("CurrentUserInitialData"))).ORIGINAL_USER_ID !=
                    ""
                ? (e || (e = r("CurrentUserInitialData"))).ORIGINAL_USER_ID ===
                  r("Cookie").get("c_user")
                : (e || (e = r("CurrentUserInitialData")))
                      .IS_BUSINESS_DOMAIN === !0 &&
                    (e || (e = r("CurrentUserInitialData")))
                      .MULTI_LOGIN_PRIMARY_USER_ID != null &&
                    String(
                      (e || (e = r("CurrentUserInitialData")))
                        .MULTI_LOGIN_PRIMARY_USER_ID,
                    ) === r("Cookie").get("c_user")
                  ? !0
                  : (e || (e = r("CurrentUserInitialData")))
                        .IS_BUSINESS_DOMAIN === !0
                    ? (e || (e = r("CurrentUserInitialData"))).USER_ID ==
                      r("Cookie").get("c_user")
                    : (e || (e = r("CurrentUserInitialData"))).USER_ID ===
                      ((t = r("Cookie").get("i_user")) != null
                        ? t
                        : r("Cookie").get("c_user"))
            : !1;
        },
        isEmployee: function () {
          return !!(e || (e = r("CurrentUserInitialData"))).IS_EMPLOYEE;
        },
        isAccountEmployee: function () {
          return !!(e || (e = r("CurrentUserInitialData"))).IS_ACCOUNT_EMPLOYEE;
        },
        isContingentWorker: function () {
          return !!(e || (e = r("CurrentUserInitialData"))).IS_CONTINGENT;
        },
        isTestUser: function () {
          return !!(e || (e = r("CurrentUserInitialData"))).IS_TEST_USER;
        },
        hasWorkUser: function () {
          return !!(e || (e = r("CurrentUserInitialData"))).HAS_WORK_USER;
        },
        isWorkUser: function () {
          return !!(e || (e = r("CurrentUserInitialData"))).IS_WORK_USER;
        },
        isWorkroomsUser: function () {
          return !!(e || (e = r("CurrentUserInitialData"))).IS_WORKROOMS_USER;
        },
        isGray: function () {
          return !!(e || (e = r("CurrentUserInitialData"))).IS_GRAY;
        },
        isUnderage: function () {
          return !!(e || (e = r("CurrentUserInitialData"))).IS_UNDERAGE;
        },
        isManagedMetaAccount: function () {
          return !!(e || (e = r("CurrentUserInitialData")))
            .IS_MANAGED_META_ACCOUNT;
        },
        isMessengerOnlyUser: function () {
          return !!(e || (e = r("CurrentUserInitialData")))
            .IS_MESSENGER_ONLY_USER;
        },
        isDeactivatedAllowedOnMessenger: function () {
          return !!(e || (e = r("CurrentUserInitialData")))
            .IS_DEACTIVATED_ALLOWED_ON_MESSENGER;
        },
        isMessengerCallGuestUser: function () {
          return !!(e || (e = r("CurrentUserInitialData")))
            .IS_MESSENGER_CALL_GUEST_USER;
        },
        isBusinessPersonAccount: function () {
          return (e || (e = r("CurrentUserInitialData")))
            .IS_BUSINESS_PERSON_ACCOUNT;
        },
        hasSecondaryBusinessPerson: function () {
          return (e || (e = r("CurrentUserInitialData")))
            .HAS_SECONDARY_BUSINESS_PERSON;
        },
        getAppID: function () {
          return (e || (e = r("CurrentUserInitialData"))).APP_ID;
        },
        isFacebookWorkAccount: function () {
          return (e || (e = r("CurrentUserInitialData")))
            .IS_FACEBOOK_WORK_ACCOUNT;
        },
        isInstagramBusinessPerson: function () {
          return (e || (e = r("CurrentUserInitialData")))
            .IS_INSTAGRAM_BUSINESS_PERSON;
        },
        isWabaBusinessPerson: function () {
          return (e || (e = r("CurrentUserInitialData")))
            .IS_WABA_BUSINESS_PERSON;
        },
        isBusinessDomain: function () {
          return (e || (e = r("CurrentUserInitialData"))).IS_BUSINESS_DOMAIN;
        },
        getPageMessagingMailboxId: function () {
          var t;
          return String(
            (t = (e || (e = r("CurrentUserInitialData")))
              .PAGE_MESSAGING_MAILBOX_ID) != null
              ? t
              : "0",
          );
        },
      };
    i.exports = s;
  },
  34,
);
