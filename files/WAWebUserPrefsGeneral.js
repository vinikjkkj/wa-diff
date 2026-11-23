__d(
  "WAWebUserPrefsGeneral",
  [
    "WALogger",
    "WAWebComposeBoxPanelTypes",
    "WAWebDbUsageApiConst",
    "WAWebEnvironment",
    "WAWebEventEmitter",
    "WAWebMediaAutoDownloadQuality.flow",
    "WAWebMobilePlatformPersistence",
    "WAWebNonEmptyString",
    "WAWebPrivacySettings",
    "WAWebUserPrefsDebugKeys",
    "WAWebUserPrefsIndexedDBStorage",
    "WAWebUserPrefsKeys",
    "WAWebUserPrefsStore",
    "gkx",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c,
      d,
      m = "light",
      p = new (r("WAWebEventEmitter"))();
    function _(e) {
      r("WAWebUserPrefsStore").setUser(
        o("WAWebUserPrefsKeys").KEYS.LAST_PUSHNAME,
        e,
      );
    }
    function f() {
      var e = r("WAWebUserPrefsStore").getUser(
        o("WAWebUserPrefsKeys").KEYS.LAST_PUSHNAME,
      );
      return typeof e == "string" ? e : null;
    }
    function g() {
      var e,
        t = r("WAWebUserPrefsStore").get(
          o("WAWebUserPrefsKeys").KEYS.BROWSER_ID,
        );
      return typeof t == "string" &&
        (e = o("WAWebNonEmptyString").asMaybeNonEmptyString(t)) != null
        ? e
        : null;
    }
    function h(e) {
      r("WAWebUserPrefsStore").set(o("WAWebUserPrefsKeys").KEYS.BROWSER_ID, e);
    }
    function y(e) {
      r("WAWebUserPrefsStore").setUser(
        o("WAWebUserPrefsKeys").KEYS.LAST_CHAT_MUTE_DURATION,
        e === Number.POSITIVE_INFINITY ? "Infinity" : e,
      );
    }
    function C() {
      var e = r("WAWebUserPrefsStore").getUser(
        o("WAWebUserPrefsKeys").KEYS.LAST_CHAT_MUTE_DURATION,
      );
      return e === "Infinity"
        ? Number.POSITIVE_INFINITY
        : typeof e == "number"
          ? e
          : null;
    }
    function b(e) {
      r("WAWebUserPrefsStore").set(o("WAWebUserPrefsKeys").KEYS.THEME, e);
    }
    function v() {
      var e = r("WAWebUserPrefsStore").get(o("WAWebUserPrefsKeys").KEYS.THEME);
      return e === "light" || e === "dark" ? e : m;
    }
    function S(e) {
      r("WAWebUserPrefsStore").set(
        o("WAWebUserPrefsKeys").KEYS.SYSTEM_THEME_MODE,
        e,
      );
    }
    function R() {
      return (
        r("WAWebUserPrefsStore").get(
          o("WAWebUserPrefsKeys").KEYS.SYSTEM_THEME_MODE,
        ) !== !1
      );
    }
    function L(e) {
      r("WAWebUserPrefsStore").setUser(
        o("WAWebUserPrefsKeys").KEYS.LAST_MEDIA_EDITOR_PAINT_COLOR,
        e,
      );
    }
    function E() {
      var e = r("WAWebUserPrefsStore").getUser(
        o("WAWebUserPrefsKeys").KEYS.LAST_MEDIA_EDITOR_PAINT_COLOR,
      );
      return typeof e == "string" ? e : null;
    }
    function k(e) {
      r("WAWebUserPrefsStore").setUser(
        o("WAWebUserPrefsKeys").KEYS.LAST_SELECTED_COMPOSE_BOX_PANEL,
        e,
      );
    }
    function I() {
      var e = r("WAWebUserPrefsStore").getUser(
        o("WAWebUserPrefsKeys").KEYS.LAST_SELECTED_COMPOSE_BOX_PANEL,
      );
      return typeof e != "string"
        ? null
        : o("WAWebComposeBoxPanelTypes").ComposeBoxExpressionPanel.cast(e);
    }
    function T(e) {
      r("WAWebUserPrefsStore").setUser(e.toString(), !0);
    }
    function D(e) {
      return r("WAWebUserPrefsStore").getUser(e.toString()) === !0;
    }
    function x(e, t, n) {
      if (e != null) {
        var r = e[0],
          o = e[1];
        if (typeof n == "string") {
          var a = o[n];
          a != null && a === n && (t[r] = a);
        }
      }
    }
    function $() {
      var e = {},
        t = o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.get(
          o("WAWebUserPrefsKeys").HASHED_KEYS.USER_PRIVACY_SETTINGS,
        );
      return (
        t == null ||
          typeof t != "object" ||
          (x(
            ["readReceipts", o("WAWebPrivacySettings").ALL_NONE],
            e,
            t.readReceipts,
          ),
          x(["groupAdd", o("WAWebPrivacySettings").VISIBILITY], e, t.groupAdd),
          x(
            ["profilePicture", o("WAWebPrivacySettings").VISIBILITY],
            e,
            t.profilePicture,
          ),
          x(["about", o("WAWebPrivacySettings").VISIBILITY], e, t.about),
          x(["lastSeen", o("WAWebPrivacySettings").VISIBILITY], e, t.lastSeen),
          x(
            ["online", o("WAWebPrivacySettings").ONLINE_VISIBILITY],
            e,
            t.online,
          ),
          x(["callAdd", o("WAWebPrivacySettings").CALL_ADD], e, t.callAdd),
          x(
            ["messages", o("WAWebPrivacySettings").ALL_CONTACTS],
            e,
            t.messages,
          ),
          x(
            ["defenseMode", o("WAWebPrivacySettings").DEFENSE_MODE_STATE],
            e,
            t.defenseMode,
          ),
          x(["pix", o("WAWebPrivacySettings").VISIBILITY], e, t.pix),
          x(
            ["phoneNumberSharing", o("WAWebPrivacySettings").VISIBILITY],
            e,
            t.phoneNumberSharing,
          ),
          e.defenseMode != null && e.defenseMode !== "off"
            ? (e.disableLinkPreviews = !0)
            : t.disableLinkPreviews != null &&
              (e.disableLinkPreviews = t.disableLinkPreviews === !0),
          t.disallowAllP2p != null &&
            (e.disallowAllP2p = t.disallowAllP2p === !0)),
        e
      );
    }
    function P(t) {
      N(t).catch(function (t) {
        o("WALogger").ERROR(
          e ||
            (e = babelHelpers.taggedTemplateLiteralLoose([
              "setUserPrivacySettings: failed to set to indexedDB",
            ])),
        );
      });
    }
    function N(e) {
      var t = o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.set(
        o("WAWebUserPrefsKeys").HASHED_KEYS.USER_PRIVACY_SETTINGS,
        e,
      );
      return (p.trigger("all", e), t);
    }
    function M() {
      return (
        r("WAWebUserPrefsStore").getUser(
          o("WAWebUserPrefsKeys").KEYS.AUTO_DOWNLOAD_PHOTOS,
        ) !== !1
      );
    }
    function w(e) {
      r("WAWebUserPrefsStore").setUser(
        o("WAWebUserPrefsKeys").KEYS.AUTO_DOWNLOAD_PHOTOS,
        e,
      );
    }
    function A() {
      return (
        r("WAWebUserPrefsStore").getUser(
          o("WAWebUserPrefsKeys").KEYS.AUTO_DOWNLOAD_AUDIO,
        ) !== !1
      );
    }
    function F(e) {
      r("WAWebUserPrefsStore").setUser(
        o("WAWebUserPrefsKeys").KEYS.AUTO_DOWNLOAD_AUDIO,
        e,
      );
    }
    function O() {
      var e = r("WAWebUserPrefsStore").getUser(
        o("WAWebUserPrefsKeys").KEYS.AUTO_DOWNLOAD_VIDEOS,
      );
      return r("WAWebEnvironment").isWindows ? e !== !1 : e === !0;
    }
    function B(e) {
      r("WAWebUserPrefsStore").setUser(
        o("WAWebUserPrefsKeys").KEYS.AUTO_DOWNLOAD_VIDEOS,
        e,
      );
    }
    function W() {
      var e = r("WAWebUserPrefsStore").getUser(
        o("WAWebUserPrefsKeys").KEYS.AUTO_DOWNLOAD_DOCUMENTS,
      );
      return r("WAWebEnvironment").isWindows ? e !== !1 : e === !0;
    }
    function q(e) {
      r("WAWebUserPrefsStore").setUser(
        o("WAWebUserPrefsKeys").KEYS.AUTO_DOWNLOAD_DOCUMENTS,
        e,
      );
    }
    function U() {
      var e,
        t = r("WAWebUserPrefsStore").getUser(
          o("WAWebUserPrefsKeys").KEYS.AUTO_DOWNLOAD_MEDIA_QUALITY,
        );
      return typeof t != "number"
        ? null
        : (e = o(
              "WAWebMediaAutoDownloadQuality.flow",
            ).MediaAutoDownloadQuality.cast(t)) != null
          ? e
          : null;
    }
    function V() {
      var e;
      return (e = U()) != null
        ? e
        : o("WAWebMediaAutoDownloadQuality.flow").MediaAutoDownloadQuality
            .STANDARD;
    }
    function H(e) {
      r("WAWebUserPrefsStore").setUser(
        o("WAWebUserPrefsKeys").KEYS.AUTO_DOWNLOAD_MEDIA_QUALITY,
        Number(e),
      );
    }
    function G(e) {
      var t = r("WAWebUserPrefsStore").getUser(
          o("WAWebUserPrefsKeys").KEYS.GROUP_ASSIGNED_COLOR +
            "-" +
            e.toString(),
        ),
        n = {};
      return (
        t == null ||
          typeof t != "object" ||
          Object.entries(t).forEach(function (e) {
            var t = e[0],
              r = e[1];
            typeof r == "number" && (n[t] = r);
          }),
        n
      );
    }
    function z(e, t) {
      r("WAWebUserPrefsStore").setUser(
        o("WAWebUserPrefsKeys").KEYS.GROUP_ASSIGNED_COLOR + "-" + e.toString(),
        t,
      );
    }
    function j(e, t) {
      (K(e), Q(t));
    }
    function K(e) {
      r("WAWebUserPrefsStore").set(
        o("WAWebUserPrefsKeys").KEYS.MEDIA_VOLUME,
        e,
      );
    }
    function Q(e) {
      r("WAWebUserPrefsStore").set(o("WAWebUserPrefsKeys").KEYS.MEDIA_MUTE, e);
    }
    function X() {
      var e = r("WAWebUserPrefsStore").get(
        o("WAWebUserPrefsKeys").KEYS.MEDIA_VOLUME,
      );
      return {
        volume: typeof e == "number" ? e : null,
        muted:
          r("WAWebUserPrefsStore").get(
            o("WAWebUserPrefsKeys").KEYS.MEDIA_MUTE,
          ) === !0,
      };
    }
    var Y = 1;
    function J() {
      var e = r("WAWebUserPrefsStore").get(
        o("WAWebUserPrefsKeys").KEYS.PTT_PLAYBACK_RATE,
      );
      return typeof e != "number"
        ? Y
        : e === 1 || e === 2
          ? e
          : Math.abs(e - 1.5) < Number.EPSILON
            ? 1.5
            : Y;
    }
    function Z(e) {
      r("WAWebUserPrefsStore").set(
        o("WAWebUserPrefsKeys").KEYS.PTT_PLAYBACK_RATE,
        e,
      );
    }
    function ee() {
      var e = r("WAWebUserPrefsStore").getUser(
        o("WAWebUserPrefsKeys").KEYS.LAST_STATUS_USAGE,
      );
      return typeof e == "number" ? e : null;
    }
    function te() {
      r("WAWebUserPrefsStore").setUser(
        o("WAWebUserPrefsKeys").KEYS.LAST_STATUS_USAGE,
        Date.now(),
      );
    }
    function ne() {
      var e = r("WAWebUserPrefsStore").getUser(
        o("WAWebUserPrefsKeys").KEYS.LAST_NEWSLETTER_STATUS_BACKFILL_TS,
      );
      return typeof e == "number" ? e : null;
    }
    function re() {
      r("WAWebUserPrefsStore").setUser(
        o("WAWebUserPrefsKeys").KEYS.LAST_NEWSLETTER_STATUS_BACKFILL_TS,
        Date.now(),
      );
    }
    function oe(e) {
      return (e.toString() || "").replace("@", "_");
    }
    function ae(e) {
      if (
        e.some(function (e) {
          return e.endsWith("_");
        })
      ) {
        var t = e.map(function (e) {
          return e.replace(/_$/, "").replace("@", "_");
        });
        return (
          r("WAWebUserPrefsStore").setUser(
            o("WAWebUserPrefsKeys").KEYS.CHATS_USER_SENT_MESSAGE_TO,
            t,
          ),
          t
        );
      }
      return e;
    }
    function ie(e) {
      var t = oe(e),
        n =
          r("WAWebUserPrefsStore").getUser(
            o("WAWebUserPrefsKeys").KEYS.CHATS_USER_SENT_MESSAGE_TO,
          ) || [];
      if (!Array.isArray(n))
        return (
          o("WALogger").WARN(
            s ||
              (s = babelHelpers.taggedTemplateLiteralLoose([
                "markUserSentMessageToChat: store value not array",
              ])),
          ),
          r("WAWebUserPrefsStore").setUser(
            o("WAWebUserPrefsKeys").KEYS.CHATS_USER_SENT_MESSAGE_TO,
            [t],
          ),
          !1
        );
      n = ae(n);
      var a = !n.includes(t);
      return (
        a &&
          (n.push(t),
          r("WAWebUserPrefsStore").setUser(
            o("WAWebUserPrefsKeys").KEYS.CHATS_USER_SENT_MESSAGE_TO,
            n,
          )),
        o("WALogger").LOG(
          u ||
            (u = babelHelpers.taggedTemplateLiteralLoose([
              "UserPrefs:markUserSentMessageToChat",
            ])),
        ),
        a
      );
    }
    function le(e) {
      var t =
        r("WAWebUserPrefsStore").getUser(
          o("WAWebUserPrefsKeys").KEYS.CHATS_USER_SENT_MESSAGE_TO,
        ) || [];
      if (!Array.isArray(t)) {
        (o("WALogger").WARN(
          c ||
            (c = babelHelpers.taggedTemplateLiteralLoose([
              "removeUserSentMessageToChat: store value not array",
            ])),
        ),
          r("WAWebUserPrefsStore").setUser(
            o("WAWebUserPrefsKeys").KEYS.CHATS_USER_SENT_MESSAGE_TO,
            [],
          ));
        return;
      }
      t = ae(t);
      var n = oe(e);
      (t.includes(n) &&
        r("WAWebUserPrefsStore").setUser(
          o("WAWebUserPrefsKeys").KEYS.CHATS_USER_SENT_MESSAGE_TO,
          t.filter(function (e) {
            return e !== n;
          }),
        ),
        o("WALogger").LOG(
          d ||
            (d = babelHelpers.taggedTemplateLiteralLoose([
              "UserPrefs:removeUserSentMessageToChat",
            ])),
        ));
    }
    function se() {
      ue();
    }
    function ue() {
      var e = r("WAWebUserPrefsStore").get(
        o("WAWebUserPrefsKeys").KEYS.DAILY_STATS_START_TIME,
      );
      if (typeof e == "number") return e;
      var t = Date.now();
      return (
        r("WAWebUserPrefsStore").set(
          o("WAWebUserPrefsKeys").KEYS.DAILY_STATS_START_TIME,
          t,
        ),
        t
      );
    }
    function ce() {
      var e = r("WAWebUserPrefsStore").get(
        o("WAWebUserPrefsKeys").KEYS.PS_KILLSWITCH_TOKEN,
      );
      return typeof e == "string" ? e : null;
    }
    function de(e) {
      r("WAWebUserPrefsStore").set(
        o("WAWebUserPrefsKeys").KEYS.PS_KILLSWITCH_TOKEN,
        e,
      );
    }
    function me() {
      if (!r("gkx")("26258")) {
        var e = { lowQuotaDismissed: !1, highQuotaDismissed: !1 },
          t = r("WAWebUserPrefsStore").get(
            o("WAWebUserPrefsKeys").KEYS.STORAGE_DISMISS_STATE,
          );
        if (typeof t != "string") return e;
        var n;
        try {
          n = JSON.parse(t);
        } catch (t) {
          return e;
        }
        return n == null || typeof n != "object"
          ? e
          : {
              lowQuotaDismissed: n.lowQuotaDismissed === !0,
              highQuotaDismissed: n.highQuotaDismissed === !0,
            };
      }
      return { lowQuotaDismissed: !0, highQuotaDismissed: !0 };
    }
    function pe(e) {
      r("gkx")("26258") ||
        r("WAWebUserPrefsStore").set(
          o("WAWebUserPrefsKeys").KEYS.STORAGE_DISMISS_STATE,
          JSON.stringify(e),
        );
    }
    function _e() {
      if (!r("gkx")("26258")) {
        var e = r("WAWebUserPrefsStore").get(
          o("WAWebUserPrefsKeys").KEYS.STORAGE_ALERT_FLAG,
        );
        if (typeof e == "string") {
          var t;
          return (t = o("WAWebDbUsageApiConst").StorageAlertType.cast(e)) !=
            null
            ? t
            : o("WAWebDbUsageApiConst").StorageAlertType.NO_ALERT;
        }
      }
      return o("WAWebDbUsageApiConst").StorageAlertType.NO_ALERT;
    }
    function fe(e) {
      r("gkx")("26258") ||
        r("WAWebUserPrefsStore").set(
          o("WAWebUserPrefsKeys").KEYS.STORAGE_ALERT_FLAG,
          e,
        );
    }
    function ge() {
      var e = r("WAWebUserPrefsStore").getUser(
        o("WAWebUserPrefsKeys").KEYS.PERSISTENT_EXPIRING_ID,
      );
      if (e == null || typeof e != "object") return null;
      var t = e.ts,
        n = e.value;
      return typeof t != "number" || typeof n != "string"
        ? null
        : { ts: t, value: n };
    }
    function he(e) {
      r("WAWebUserPrefsStore").setUser(
        o("WAWebUserPrefsKeys").KEYS.PERSISTENT_EXPIRING_ID,
        e,
      );
    }
    function ye() {
      var e = o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.get(
        o("WAWebUserPrefsKeys").KEYS.WHATSAPP_WEB_EXTERNAL_BETA_IDB,
      );
      return !!e;
    }
    function Ce(e) {
      return o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.set(
        o("WAWebUserPrefsKeys").KEYS.WHATSAPP_WEB_EXTERNAL_BETA_IDB,
        e,
      );
    }
    function be() {
      var e = o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.get(
        o("WAWebUserPrefsKeys").KEYS.WHATSAPP_WEB_EXTERNAL_BETA_DIRTY_BIT_IDB,
      );
      return !!e;
    }
    function ve(e) {
      return o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.set(
        o("WAWebUserPrefsKeys").KEYS.WHATSAPP_WEB_EXTERNAL_BETA_DIRTY_BIT_IDB,
        e,
      );
    }
    function Se() {
      return o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.get(
        o("WAWebUserPrefsKeys").BACKEND_ONLY_KEYS.APP_VERSION_BASE,
      );
    }
    async function Re(e) {
      e != null &&
        (await o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.set(
          o("WAWebUserPrefsKeys").BACKEND_ONLY_KEYS.APP_VERSION_BASE,
          e,
        ));
    }
    function Le() {
      var e;
      return (e = o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.get(
        o("WAWebUserPrefsKeys").BACKEND_ONLY_KEYS.LOGIN_COUNTER,
      )) != null
        ? e
        : 0;
    }
    async function Ee() {
      var e = Le(),
        t = Math.pow(2, 31) - 1,
        n = e >= t ? 0 : e + 1;
      await o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.set(
        o("WAWebUserPrefsKeys").BACKEND_ONLY_KEYS.LOGIN_COUNTER,
        n,
      );
    }
    async function ke() {
      await o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.set(
        o("WAWebUserPrefsKeys").BACKEND_ONLY_KEYS.LOGIN_COUNTER,
        0,
      );
    }
    function Ie() {
      return o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.get(
        o("WAWebUserPrefsKeys").BACKEND_ONLY_KEYS.OFFLINE_PUSH_COUNT,
      );
    }
    async function Te(e) {
      await o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.set(
        o("WAWebUserPrefsKeys").BACKEND_ONLY_KEYS.OFFLINE_PUSH_COUNT,
        e,
      );
    }
    function De() {
      return o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.get(
        o("WAWebUserPrefsKeys").BACKEND_ONLY_KEYS.LAST_PUSH_COMPLETE_TIMESTAMP,
      );
    }
    async function xe(e) {
      await o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.set(
        o("WAWebUserPrefsKeys").BACKEND_ONLY_KEYS.LAST_PUSH_COMPLETE_TIMESTAMP,
        e,
      );
    }
    async function $e() {
      await o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.remove(
        o("WAWebUserPrefsKeys").BACKEND_ONLY_KEYS.LAST_PUSH_COMPLETE_TIMESTAMP,
      );
    }
    function Pe() {
      return o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.get(
        o("WAWebUserPrefsKeys").BACKEND_ONLY_KEYS.OFFLINE_PUSH_DISABLED,
      );
    }
    async function Ne(e) {
      await o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.set(
        o("WAWebUserPrefsKeys").BACKEND_ONLY_KEYS.OFFLINE_PUSH_DISABLED,
        e,
      );
    }
    function Me() {
      return o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.get(
        o("WAWebUserPrefsKeys").BACKEND_ONLY_KEYS
          .OFFLINE_NOTIFICATION_L10N_CONTENT,
      );
    }
    async function we(e) {
      await o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.set(
        o("WAWebUserPrefsKeys").BACKEND_ONLY_KEYS
          .OFFLINE_NOTIFICATION_L10N_CONTENT,
        e,
      );
    }
    function Ae() {
      return o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.get(
        o("WAWebUserPrefsKeys").BACKEND_ONLY_KEYS
          .OFFLINE_NOTIFICATION_ENGAGEMENT,
      );
    }
    function Fe(e) {
      return o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.set(
        o("WAWebUserPrefsKeys").BACKEND_ONLY_KEYS
          .OFFLINE_NOTIFICATION_ENGAGEMENT,
        e,
      );
    }
    function Oe() {
      var e = o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.get(
        o("WAWebUserPrefsKeys").BACKEND_ONLY_KEYS
          .WORKER_NOTIFICATION_INTERACTION_TIME,
      );
      return typeof e == "number" ? e : null;
    }
    function Be(e) {
      return o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.set(
        o("WAWebUserPrefsKeys").BACKEND_ONLY_KEYS
          .WORKER_NOTIFICATION_INTERACTION_TIME,
        e,
      );
    }
    function We() {
      o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.remove(
        o("WAWebUserPrefsKeys").BACKEND_ONLY_KEYS
          .OFFLINE_NOTIFICATION_ENGAGEMENT,
      );
    }
    function qe() {
      return o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.get(
        o("WAWebUserPrefsKeys").BACKEND_ONLY_KEYS.NOTIFICATION_ENGAGEMENT,
      );
    }
    function Ue(e) {
      return o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.set(
        o("WAWebUserPrefsKeys").BACKEND_ONLY_KEYS.NOTIFICATION_ENGAGEMENT,
        e,
      );
    }
    async function Ve(e) {
      var t,
        n,
        r,
        o,
        a,
        i,
        l,
        s,
        u = await qe();
      await Ue({
        totalNotifRtcVoipAccept:
          ((t = u == null ? void 0 : u.totalNotifRtcVoipAccept) != null
            ? t
            : 0) + ((n = e.totalNotifRtcVoipAccept) != null ? n : 0),
        totalNotifRtcVoipDecline:
          ((r = u == null ? void 0 : u.totalNotifRtcVoipDecline) != null
            ? r
            : 0) + ((o = e.totalNotifRtcVoipDecline) != null ? o : 0),
        totalNotifShown:
          ((a = u == null ? void 0 : u.totalNotifShown) != null ? a : 0) +
          ((i = e.totalNotifShown) != null ? i : 0),
        totalNotifTapToOpen:
          ((l = u == null ? void 0 : u.totalNotifTapToOpen) != null ? l : 0) +
          ((s = e.totalNotifTapToOpen) != null ? s : 0),
      });
    }
    function He() {
      o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.remove(
        o("WAWebUserPrefsKeys").BACKEND_ONLY_KEYS.NOTIFICATION_ENGAGEMENT,
      );
    }
    async function Ge() {
      return o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.remove(
        "WABrigadingState",
      );
    }
    function ze() {
      return o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.get(
        o("WAWebUserPrefsKeys").BACKEND_ONLY_KEYS.LOGOUT_REASON,
      );
    }
    async function je(e) {
      await o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.set(
        o("WAWebUserPrefsKeys").BACKEND_ONLY_KEYS.LOGOUT_REASON,
        e,
      );
    }
    function Ke() {
      var e = r("WAWebUserPrefsStore").get(
        o("WAWebUserPrefsKeys").KEYS.LAST_PROFILE_PIC_THUMB_UPDATE_TS,
      );
      return typeof e == "number" ? e : null;
    }
    function Qe(e) {
      r("WAWebUserPrefsStore").set(
        o("WAWebUserPrefsKeys").KEYS.LAST_PROFILE_PIC_THUMB_UPDATE_TS,
        e,
      );
    }
    function Xe() {
      var e = [],
        t = r("WAWebUserPrefsStore").get(
          o("WAWebUserPrefsKeys").KEYS.WA_WEB_WAM_BEACONING_SETTINGS,
        );
      if (typeof t != "string") return e;
      try {
        var n;
        return (n = JSON.parse(t)) != null ? n : e;
      } catch (t) {
        return e;
      }
    }
    function Ye(e) {
      r("WAWebUserPrefsStore").set(
        o("WAWebUserPrefsKeys").KEYS.WA_WEB_WAM_BEACONING_SETTINGS,
        JSON.stringify(e),
      );
    }
    function Je() {
      var e = r("WAWebUserPrefsStore").get(
        o("WAWebUserPrefsKeys").KEYS.CTWA_DATA_SHARING_COOL_OFF,
      );
      return typeof e == "number" ? e : null;
    }
    function Ze() {
      var e = r("WAWebUserPrefsStore").get(
        o("WAWebUserPrefsKeys").KEYS.CTWA_DATA_SHARING_DISCLOSURE_SHOWN_COUNT,
      );
      return typeof e == "number" ? e : 0;
    }
    function et(e) {
      r("WAWebUserPrefsStore").set(
        o("WAWebUserPrefsKeys").KEYS.CTWA_DATA_SHARING_DISCLOSURE_SHOWN_COUNT,
        e,
      );
    }
    function tt() {
      var e = r("WAWebUserPrefsStore").get(
        o("WAWebUserPrefsKeys").KEYS
          .CTWA_DATA_SHARING_OPT_OUT_DISCLOSURE_SHOWN_COUNT,
      );
      return typeof e == "number" ? e : 0;
    }
    function nt(e) {
      r("WAWebUserPrefsStore").set(
        o("WAWebUserPrefsKeys").KEYS
          .CTWA_DATA_SHARING_OPT_OUT_DISCLOSURE_SHOWN_COUNT,
        e,
      );
    }
    function rt() {
      return (
        r("WAWebUserPrefsStore").get(
          o("WAWebUserPrefsKeys").KEYS.CTWA_DATA_SHARING_V2_DISCLOSURE_SEEN,
        ) === !0
      );
    }
    function ot() {
      r("WAWebUserPrefsStore").set(
        o("WAWebUserPrefsKeys").KEYS.CTWA_DATA_SHARING_V2_DISCLOSURE_SEEN,
        !0,
      );
    }
    function at() {
      return !!r("WAWebUserPrefsStore").get(
        o("WAWebUserPrefsKeys").KEYS.CTWA_MESSAGE_RECEIVED,
      );
    }
    function it(e) {
      r("WAWebUserPrefsStore").set(
        o("WAWebUserPrefsKeys").KEYS.CTWA_MESSAGE_RECEIVED,
        e,
      );
    }
    function lt(e) {
      r("WAWebUserPrefsStore").set(
        o("WAWebUserPrefsKeys").UserPrefs.GPCCompleted,
        e,
      );
    }
    function st() {
      return (
        r("WAWebUserPrefsStore").get(
          o("WAWebUserPrefsKeys").UserPrefs.GPCCompleted,
        ) === !0
      );
    }
    function ut(e) {
      r("WAWebUserPrefsStore").set(
        r("WAWebUserPrefsDebugKeys").DEBUG_FACEBOOK_GRAPHQL_ENDPOINT_OVERRIDE,
        e,
      );
    }
    function ct() {
      var e = r("WAWebUserPrefsStore").get(
        r("WAWebUserPrefsDebugKeys").DEBUG_FACEBOOK_GRAPHQL_ENDPOINT_OVERRIDE,
      );
      return typeof e == "number" ? String(e) : typeof e == "string" ? e : null;
    }
    function dt() {
      return (
        r("WAWebUserPrefsStore").get(
          o("WAWebUserPrefsKeys").UserPrefs.DetectedOutcomeOnboardingStatus,
        ) === !0
      );
    }
    function mt(e) {
      r("WAWebUserPrefsStore").set(
        o("WAWebUserPrefsKeys").UserPrefs.DetectedOutcomeOnboardingStatus,
        e,
      );
    }
    function pt() {
      var e = r("WAWebUserPrefsStore").get(
        o("WAWebUserPrefsKeys").KEYS.CTWA_PREFERRED_AD_ACCOUNT_TYPE,
      );
      return typeof e == "string" ? e : null;
    }
    function _t(e) {
      r("WAWebUserPrefsStore").set(
        o("WAWebUserPrefsKeys").KEYS.CTWA_PREFERRED_AD_ACCOUNT_TYPE,
        e,
      );
    }
    ((l.privacySettingsEventEmitter = p),
      (l.setPushname = _),
      (l.getPushname = f),
      (l.getBrowserId = g),
      (l.setBrowserId = h),
      (l.getLastMobilePlatform = o(
        "WAWebMobilePlatformPersistence",
      ).getLastMobilePlatform),
      (l.setLastMobilePlatform = o(
        "WAWebMobilePlatformPersistence",
      ).setLastMobilePlatform),
      (l.setLastChatMuteDuration = y),
      (l.getLastChatMuteDuration = C),
      (l.setTheme = b),
      (l.getTheme = v),
      (l.setSystemThemeMode = S),
      (l.getSystemThemeMode = R),
      (l.setLastMediaEditorPaintColor = L),
      (l.getLastMediaEditorPaintColor = E),
      (l.setLastComposeBoxExpressionPanel = k),
      (l.getLastComposeBoxExpressionPanel = I),
      (l.setSeenGroupDesc = T),
      (l.getSeenGroupDesc = D),
      (l.applyPrivacySetting = x),
      (l.getUserPrivacySettings = $),
      (l.setUserPrivacySettings = P),
      (l.persistUserPrivacySettings = N),
      (l.getAutoDownloadPhotos = M),
      (l.setAutoDownloadPhotos = w),
      (l.getAutoDownloadAudio = A),
      (l.setAutoDownloadAudio = F),
      (l.getAutoDownloadVideos = O),
      (l.setAutoDownloadVideos = B),
      (l.getAutoDownloadDocuments = W),
      (l.setAutoDownloadDocuments = q),
      (l.getAutoDownloadMediaQuality = U),
      (l.resolveAutoDownloadMediaQuality = V),
      (l.setAutoDownloadMediaQuality = H),
      (l.getGroupParticipantAssignedColor = G),
      (l.setGroupParticipantAssignedColor = z),
      (l.setMediaVolumeSettings = j),
      (l.setMediaVolumeSetting = K),
      (l.setMediaMutedSetting = Q),
      (l.getMediaVolumeSettings = X),
      (l.DEFAULT_PTT_PLAYBACK_RATE = Y),
      (l.getPttPlaybackRate = J),
      (l.setPttPlaybackRate = Z),
      (l.getLastStatusUsage = ee),
      (l.setLastStatusUsage = te),
      (l.getLastNewsletterStatusBackfillTimestamp = ne),
      (l.setLastNewsletterStatusBackfillTimestamp = re),
      (l.markUserSentMessageToChat = ie),
      (l.removeUserSentMessageToChat = le),
      (l.initDailyStatsStartTime = se),
      (l.getDailyStatsStartTime = ue),
      (l.getPsKillSwitchToken = ce),
      (l.setPsKillSwitchToken = de),
      (l.getStorageDismissState = me),
      (l.setStorageDismissState = pe),
      (l.getStorageAlert = _e),
      (l.setStorageAlert = fe),
      (l.getPersistentExpiringId = ge),
      (l.setPersistentExpiringId = he),
      (l.getWhatsAppWebExternalBetaJoinedIdb = ye),
      (l.setWhatsAppWebExternalBetaJoinedIdb = Ce),
      (l.getWhatsAppWebExternalBetaDirtyBitIdb = be),
      (l.setWhatsAppWebExternalBetaDirtyBitIdb = ve),
      (l.getAppVersionBase = Se),
      (l.setAppVersionBase = Re),
      (l.getLoginCounter = Le),
      (l.incrementLoginCounter = Ee),
      (l.resetLoginCounter = ke),
      (l.getOfflinePushCount = Ie),
      (l.setOfflinePushCount = Te),
      (l.getLastPushCompleteTimestamp = De),
      (l.setLastPushCompleteTimestamp = xe),
      (l.clearLastPushCompleteTimestamp = $e),
      (l.getOfflinePushDisabled = Pe),
      (l.setOfflinePushDisabled = Ne),
      (l.getOfflineNotificationContent = Me),
      (l.setOfflineNotificationContent = we),
      (l.getOfflineNotificationEngagement = Ae),
      (l.setOfflineNotificationContentEngagement = Fe),
      (l.getWorkerNotificationInteractionTime = Oe),
      (l.setWorkerNotificationInteractionTime = Be),
      (l.clearOfflineNotificationContentEngagement = We),
      (l.getNotificationEngagement = qe),
      (l.setNotificationContentEngagement = Ue),
      (l.addToNotificationEngagement = Ve),
      (l.clearNotificationContentEngagement = He),
      (l.clearBrigadingstate = Ge),
      (l.getLogoutReason = ze),
      (l.setLogoutReason = je),
      (l.getLastProfilePicThumbUpdate = Ke),
      (l.setLastProfilePicThumbUpdate = Qe),
      (l.getWamBeaconingSettings = Xe),
      (l.setWamBeaconingSettings = Ye),
      (l.getCTWADataSharingCoolOffTimestamp = Je),
      (l.getCTWADataSharingDisclosureShownCount = Ze),
      (l.setCTWADataSharingDisclosureShownCount = et),
      (l.getCTWADataSharingOptOutDisclosureShownCount = tt),
      (l.setCTWADataSharingOptOutDisclosureShownCount = nt),
      (l.getCTWADataSharingV2DisclosureSeen = rt),
      (l.setCTWADataSharingV2DisclosureSeen = ot),
      (l.getCTWAMessageReceived = at),
      (l.setCTWAMessageReceived = it),
      (l.setGPCcompleted = lt),
      (l.getGPCCompleted = st),
      (l.setDebugFacebookGraphQLEndpointOverride = ut),
      (l.getDebugFacebookGraphQLEndpointOverride = ct),
      (l.getDetectedOutcomeOnboardingStatus = dt),
      (l.setDetectedOutcomeOnboardingStatus = mt),
      (l.getLastUsedAdAccountType = pt),
      (l.setLastUsedAdAccountType = _t));
  },
  98,
);
