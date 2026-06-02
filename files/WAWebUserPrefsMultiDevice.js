__d(
  "WAWebUserPrefsMultiDevice",
  [
    "WAWebBizCoexGatingUtils",
    "WAWebEventEmitter",
    "WAWebMobilePlatforms",
    "WAWebPermanentStorage",
    "WAWebUserPrefsCacheStorage",
    "WAWebUserPrefsIndexedDBStorage",
    "WAWebUserPrefsKeys",
    "WAWebUserPrefsLocalStorage",
    "WAWebUserPrefsMeUser",
    "WAWebUserPrefsStore",
  ],
  function (t, n, r, o, a, i, l) {
    async function e() {
      var e,
        t = [
          (e = o("WAWebUserPrefsKeys")).MD_KEYS.NOISE_INFO,
          e.MD_KEYS.ME_INFO,
          e.MD_KEYS.DEVICE_ID,
          e.MD_KEYS.INITIAL_HISTORY_SYNCED,
          e.MD_KEYS.WEB_ENC_SALT,
        ];
      (t.push(e.KEYS.LAST_WID_MD),
        t.map(function (e) {
          r("WAWebUserPrefsStore").set(e, void 0);
        }),
        await o(
          "WAWebUserPrefsCacheStorage",
        ).userPrefsCacheStorage.clearCacheStorage());
    }
    async function s(e) {
      (r("WAWebUserPrefsLocalStorage").setItemToLocalStorage(
        o("WAWebUserPrefsKeys").MD_NOISE_KEYS.NOISE_INFO,
        e,
      ),
        await o(
          "WAWebUserPrefsCacheStorage",
        ).userPrefsCacheStorage.setItemToCacheStorage(
          o("WAWebUserPrefsKeys").MD_NOISE_KEYS.NOISE_INFO,
          e,
        ));
    }
    function u() {
      return r("WAWebUserPrefsLocalStorage").getItemFromLocalStorage(
        o("WAWebUserPrefsKeys").MD_NOISE_KEYS.NOISE_INFO,
      );
    }
    function c() {
      return r("WAWebUserPrefsLocalStorage").getItemFromLocalStorage(
        o("WAWebUserPrefsKeys").BACKEND_ONLY_KEYS.MMS4_CONN,
      );
    }
    function d(e) {
      return r("WAWebUserPrefsLocalStorage").setItemToLocalStorage(
        o("WAWebUserPrefsKeys").BACKEND_ONLY_KEYS.MMS4_CONN,
        e,
      );
    }
    async function m(e) {
      (r("WAWebUserPrefsLocalStorage").setItemToLocalStorage(
        o("WAWebUserPrefsKeys").MD_NOISE_KEYS.NOISE_INFO_IV,
        e,
      ),
        await o(
          "WAWebUserPrefsCacheStorage",
        ).userPrefsCacheStorage.setItemToCacheStorage(
          o("WAWebUserPrefsKeys").MD_NOISE_KEYS.NOISE_INFO_IV,
          e,
        ));
    }
    function p() {
      return r("WAWebUserPrefsLocalStorage").getItemFromLocalStorage(
        o("WAWebUserPrefsKeys").MD_NOISE_KEYS.NOISE_INFO_IV,
      );
    }
    async function _(e) {
      await o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.set(
        o("WAWebUserPrefsKeys").BACKEND_ONLY_KEYS.ROUTING_INFO,
        e,
      );
    }
    function f() {
      var e = o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.get(
        o("WAWebUserPrefsKeys").BACKEND_ONLY_KEYS.ROUTING_INFO,
      );
      return e;
    }
    function g(e, t) {
      return r("WAWebUserPrefsStore").set(
        o("WAWebUserPrefsKeys").MD_KEYS.KEY_SEVER_CLIENT_EXPIRATION_OVERRIDE,
        { ts: e, appVersion: t },
      );
    }
    function h() {
      var e = r("WAWebUserPrefsStore").get(
        o("WAWebUserPrefsKeys").MD_KEYS.KEY_SEVER_CLIENT_EXPIRATION_OVERRIDE,
      );
      if (
        !(
          (e == null ? void 0 : e.ts) == null ||
          (e == null ? void 0 : e.appVersion) == null
        )
      )
        return { timestamp: parseInt(e.ts, 10), appVersion: e.appVersion };
    }
    function y() {
      return r("WAWebUserPrefsStore").set(
        o("WAWebUserPrefsKeys").MD_KEYS.KEY_SEVER_CLIENT_EXPIRATION_OVERRIDE,
        void 0,
      );
    }
    function C() {
      return !!(u() && o("WAWebUserPrefsMeUser").getMaybeMeDevicePn());
    }
    async function b(e) {
      return (
        e != null
          ? (r("WAWebUserPrefsLocalStorage").setItemToLocalStorage(
              o("WAWebUserPrefsKeys").MD_NOISE_KEYS.WEB_ENC_SALT,
              e,
            ),
            await o(
              "WAWebUserPrefsCacheStorage",
            ).userPrefsCacheStorage.setItemToCacheStorage(
              o("WAWebUserPrefsKeys").MD_NOISE_KEYS.WEB_ENC_SALT,
              e,
            ))
          : (r("WAWebUserPrefsLocalStorage").removeItemFromLocalStorage(
              o("WAWebUserPrefsKeys").MD_NOISE_KEYS.WEB_ENC_SALT,
            ),
            await o(
              "WAWebUserPrefsCacheStorage",
            ).userPrefsCacheStorage.removeItemFromCacheStorage(
              o("WAWebUserPrefsKeys").MD_NOISE_KEYS.WEB_ENC_SALT,
            )),
        r("WAWebUserPrefsStore").set(
          o("WAWebUserPrefsKeys").MD_KEYS.WEB_ENC_SALT,
          e,
          { shouldWriteToIdb: !1 },
        )
      );
    }
    function v() {
      return r("WAWebUserPrefsLocalStorage").getItemFromLocalStorage(
        o("WAWebUserPrefsKeys").MD_NOISE_KEYS.WEB_ENC_SALT,
      );
    }
    var S = new (r("WAWebEventEmitter"))();
    async function R(e) {
      e == null
        ? await o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.remove(
            o("WAWebUserPrefsKeys").BACKEND_ONLY_KEYS.ADV_SECRET_KEY,
          )
        : await o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.set(
            o("WAWebUserPrefsKeys").BACKEND_ONLY_KEYS.ADV_SECRET_KEY,
            e,
          );
    }
    function L() {
      var e = o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.get(
        o("WAWebUserPrefsKeys").BACKEND_ONLY_KEYS.ADV_SECRET_KEY,
      );
      return e;
    }
    async function E(e) {
      e == null
        ? await o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.remove(
            o("WAWebUserPrefsKeys").BACKEND_ONLY_KEYS.BLOCKLIST_HASH,
          )
        : await o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.set(
            o("WAWebUserPrefsKeys").BACKEND_ONLY_KEYS.BLOCKLIST_HASH,
            e,
          );
    }
    function k() {
      var e = o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.get(
        o("WAWebUserPrefsKeys").BACKEND_ONLY_KEYS.BLOCKLIST_HASH,
      );
      return e;
    }
    async function I(e) {
      await o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.set(
        o("WAWebUserPrefsKeys").BACKEND_ONLY_KEYS.OPTOUTLIST_HASH,
        e,
      );
    }
    function T() {
      var e = o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.get(
        o("WAWebUserPrefsKeys").BACKEND_ONLY_KEYS.OPTOUTLIST_HASH,
      );
      if (typeof e == "string") return e;
    }
    async function D(e) {
      await o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.set(
        o("WAWebUserPrefsKeys").BACKEND_ONLY_KEYS.PAIRING_TIMESTAMP,
        e,
      );
    }
    function x() {
      var e = o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.get(
        o("WAWebUserPrefsKeys").BACKEND_ONLY_KEYS.PAIRING_TIMESTAMP,
      );
      return e == null ? null : parseInt(e, 10);
    }
    async function $(e) {
      await o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.set(
        o("WAWebUserPrefsKeys").BACKEND_ONLY_KEYS.RECENT_MAILBOX_AGE_DAYS,
        e,
      );
    }
    async function P() {
      var e = o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.get(
        o("WAWebUserPrefsKeys").BACKEND_ONLY_KEYS.RECENT_MAILBOX_AGE_DAYS,
      );
      return e;
    }
    function N() {
      var e = o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.get(
        o("WAWebUserPrefsKeys").BACKEND_ONLY_KEYS
          .SHOULD_CHECK_CONTACT_SYNC_STATUS,
      );
      return e === !0;
    }
    function M() {
      var e = o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.get(
        o("WAWebUserPrefsKeys").BACKEND_ONLY_KEYS.UNARCHIVE_CHATS_SETTING,
      );
      return e === !0;
    }
    async function w(e) {
      await o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.set(
        o("WAWebUserPrefsKeys").BACKEND_ONLY_KEYS.UNARCHIVE_CHATS_SETTING,
        e,
      );
    }
    function A() {
      var e = o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.get(
        o("WAWebUserPrefsKeys").BACKEND_ONLY_KEYS.ARCHIVE_V2_ENABLED_SETTING,
      );
      return e === !0;
    }
    async function F(e) {
      await o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.set(
        o("WAWebUserPrefsKeys").BACKEND_ONLY_KEYS.ARCHIVE_V2_ENABLED_SETTING,
        e,
      );
    }
    async function O(e) {
      await o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.set(
        o("WAWebUserPrefsKeys").BACKEND_ONLY_KEYS.CHAT_THREAD_LOGGING_OFFSET,
        e,
      );
    }
    function B() {
      var e = o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.get(
        o("WAWebUserPrefsKeys").BACKEND_ONLY_KEYS.CHAT_THREAD_LOGGING_OFFSET,
      );
      return e;
    }
    async function W(e) {
      await o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.set(
        o("WAWebUserPrefsKeys").BACKEND_ONLY_KEYS.CHAT_THREAD_LOGGING_SECRET,
        e,
      );
    }
    function q() {
      var e = o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.get(
        o("WAWebUserPrefsKeys").BACKEND_ONLY_KEYS.CHAT_THREAD_LOGGING_SECRET,
      );
      return Promise.resolve(e);
    }
    async function U(e) {
      await o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.set(
        o("WAWebUserPrefsKeys").BACKEND_ONLY_KEYS
          .CHAT_THREAD_LOGGING_LAST_UPLOADED_START_TS,
        e,
      );
    }
    function V() {
      var e = o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.get(
        o("WAWebUserPrefsKeys").BACKEND_ONLY_KEYS
          .CHAT_THREAD_LOGGING_LAST_UPLOADED_START_TS,
      );
      return e;
    }
    function H(e) {
      return r("WAWebUserPrefsStore").set(
        o("WAWebUserPrefsKeys").MD_KEYS.CACHED_PROFILE_PIC_EURL,
        e,
      );
    }
    function G() {
      return r("WAWebUserPrefsStore").get(
        o("WAWebUserPrefsKeys").MD_KEYS.CACHED_PROFILE_PIC_EURL,
        { storage: r("WAWebPermanentStorage") },
      );
    }
    function z() {
      var e;
      return (e = r("WAWebUserPrefsStore").get(
        o("WAWebUserPrefsKeys").MD_KEYS.COMMUNITY_TAB_LAST_SEEN_TIMESTAMP,
      )) != null
        ? e
        : 0;
    }
    function j(e) {
      r("WAWebUserPrefsStore").set(
        o("WAWebUserPrefsKeys").MD_KEYS.COMMUNITY_TAB_LAST_SEEN_TIMESTAMP,
        e,
      );
    }
    function K() {
      r("WAWebUserPrefsStore").set(
        o("WAWebUserPrefsKeys").MD_KEYS.NEWSLETTER_WAS_BOOTSTRAPPED,
        !0,
      );
    }
    function Q() {
      var e = r("WAWebUserPrefsStore").get(
        o("WAWebUserPrefsKeys").MD_KEYS.NEWSLETTER_WAS_BOOTSTRAPPED,
      );
      return typeof e == "boolean" ? e : !1;
    }
    async function X() {
      o("WAWebBizCoexGatingUtils").smbHostedPrimaryPairingAllowed() &&
        o("WAWebMobilePlatforms").isSMB() &&
        (r("WAWebUserPrefsStore").set(
          o("WAWebUserPrefsKeys").BACKEND_ONLY_KEYS.IS_HOSTED_ME_ACCOUNT,
          !0,
        ),
        await o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.set(
          o("WAWebUserPrefsKeys").BACKEND_ONLY_KEYS.IS_HOSTED_ME_ACCOUNT,
          !0,
        ));
    }
    async function Y() {
      if (
        o("WAWebBizCoexGatingUtils").bizHostedDevicesEnabled() &&
        o("WAWebMobilePlatforms").isSMB()
      ) {
        var e = await o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.get(
          o("WAWebUserPrefsKeys").BACKEND_ONLY_KEYS.IS_HOSTED_ME_ACCOUNT,
        );
        if (e === !0) return !0;
      }
      return !1;
    }
    function J() {
      if (
        o("WAWebBizCoexGatingUtils").bizHostedDevicesEnabled() &&
        o("WAWebMobilePlatforms").isSMB()
      ) {
        var e = r("WAWebUserPrefsStore").get(
          o("WAWebUserPrefsKeys").BACKEND_ONLY_KEYS.IS_HOSTED_ME_ACCOUNT,
        );
        if (e === !0) return !0;
      }
      return !1;
    }
    async function Z() {
      if (o("WAWebBizCoexGatingUtils").bizHostedDevicesEnabled()) {
        if (
          o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.get(
            o("WAWebUserPrefsKeys").BACKEND_ONLY_KEYS.HAVE_PROCESSED_COEX_ADV,
          ) === !0
        )
          return;
        await o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.set(
          o("WAWebUserPrefsKeys").BACKEND_ONLY_KEYS.HAVE_PROCESSED_COEX_ADV,
          !0,
        );
      }
    }
    function ee() {
      return o("WAWebBizCoexGatingUtils").bizHostedDevicesEnabled()
        ? o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.get(
            o("WAWebUserPrefsKeys").BACKEND_ONLY_KEYS.HAVE_PROCESSED_COEX_ADV,
          ) === !0
        : !1;
    }
    ((l.clearRegistrationInfo = e),
      (l.setNoiseInfo = s),
      (l.getNoiseInfo = u),
      (l.getMms4Conn = c),
      (l.setMms4Conn = d),
      (l.setNoiseInfoIv = m),
      (l.getNoiseInfoIv = p),
      (l.setRoutingInfo = _),
      (l.getRoutingInfo = f),
      (l.setServerClientExpirationOverride = g),
      (l.getServerClientExpirationOverride = h),
      (l.clearServerClientExpirationOverride = y),
      (l.isRegistered = C),
      (l.setWebEncSalt = b),
      (l.getWebEncSalt = v),
      (l.advSecretEventEmitter = S),
      (l.setADVSecretKey = R),
      (l.getADVSecretKey = L),
      (l.setBlocklistHash = E),
      (l.getBlocklistHash = k),
      (l.setOptOutlistHash = I),
      (l.getOptOutListHash = T),
      (l.setPairingTimestamp = D),
      (l.getPairingTimestamp = x),
      (l.setRecentMailboxAgeDays = $),
      (l.getRecentMailboxAgeDays = P),
      (l.getShouldCheckContactSyncStatus = N),
      (l.getUnarchiveChatsSetting = M),
      (l.setUnarchiveChatsSetting = w),
      (l.getArchiveV2EnabledSetting = A),
      (l.setArchiveV2EnabledSetting = F),
      (l.setChatThreadLoggingOffset = O),
      (l.getChatThreadLoggingOffset = B),
      (l.setChatThreadLoggingSecretB64 = W),
      (l.getChatThreadLoggingSecretB64 = q),
      (l.setChatThreadLoggingLastUploadedStartTs = U),
      (l.getChatThreadLoggingLastUploadedStartTs = V),
      (l.setCachedProfilePicEURL = H),
      (l.getCachedProfilePicEURL = G),
      (l.getCommunityTabLastSeenTimestamp = z),
      (l.setCommunityTabLastSeenTimestamp = j),
      (l.setNewsletterWasBootstrapped = K),
      (l.getNewsletterWasBootstrapped = Q),
      (l.setIsHostedMeAccount = X),
      (l.getIsHostedMeAccount = Y),
      (l.getIsHostedMeAccountFromLocalStorage = J),
      (l.setHaveProcessedCoexAdv = Z),
      (l.getHaveProcessedCoexAdv = ee));
  },
  98,
);
