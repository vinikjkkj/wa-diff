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
    "WAWebPrivacySettings",
    "WAWebUserPrefsDebugKeys",
    "WAWebUserPrefsIndexedDBStorage",
    "WAWebUserPrefsKeys",
    "WAWebUserPrefsStore",
    "asyncToGeneratorRuntime",
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
      var e = r("WAWebUserPrefsStore").get(
        o("WAWebUserPrefsKeys").KEYS.BROWSER_ID,
      );
      return typeof e == "string" ? e : null;
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
      (o("WAWebUserPrefsIndexedDBStorage")
        .userPrefsIdb.set(
          o("WAWebUserPrefsKeys").HASHED_KEYS.USER_PRIVACY_SETTINGS,
          t,
        )
        .catch(function (t) {
          o("WALogger").ERROR(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "setUserPrivacySettings: failed to set to indexedDB",
              ])),
          );
        }),
        p.trigger("all", t));
    }
    function N() {
      return (
        r("WAWebUserPrefsStore").getUser(
          o("WAWebUserPrefsKeys").KEYS.AUTO_DOWNLOAD_PHOTOS,
        ) !== !1
      );
    }
    function M(e) {
      r("WAWebUserPrefsStore").setUser(
        o("WAWebUserPrefsKeys").KEYS.AUTO_DOWNLOAD_PHOTOS,
        e,
      );
    }
    function w() {
      return (
        r("WAWebUserPrefsStore").getUser(
          o("WAWebUserPrefsKeys").KEYS.AUTO_DOWNLOAD_AUDIO,
        ) !== !1
      );
    }
    function A(e) {
      r("WAWebUserPrefsStore").setUser(
        o("WAWebUserPrefsKeys").KEYS.AUTO_DOWNLOAD_AUDIO,
        e,
      );
    }
    function F() {
      var e = r("WAWebUserPrefsStore").getUser(
        o("WAWebUserPrefsKeys").KEYS.AUTO_DOWNLOAD_VIDEOS,
      );
      return r("WAWebEnvironment").isWindows ? e !== !1 : e === !0;
    }
    function O(e) {
      r("WAWebUserPrefsStore").setUser(
        o("WAWebUserPrefsKeys").KEYS.AUTO_DOWNLOAD_VIDEOS,
        e,
      );
    }
    function B() {
      var e = r("WAWebUserPrefsStore").getUser(
        o("WAWebUserPrefsKeys").KEYS.AUTO_DOWNLOAD_DOCUMENTS,
      );
      return r("WAWebEnvironment").isWindows ? e !== !1 : e === !0;
    }
    function W(e) {
      r("WAWebUserPrefsStore").setUser(
        o("WAWebUserPrefsKeys").KEYS.AUTO_DOWNLOAD_DOCUMENTS,
        e,
      );
    }
    function q() {
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
    function U() {
      var e;
      return (e = q()) != null
        ? e
        : o("WAWebMediaAutoDownloadQuality.flow").MediaAutoDownloadQuality
            .STANDARD;
    }
    function V(e) {
      r("WAWebUserPrefsStore").setUser(
        o("WAWebUserPrefsKeys").KEYS.AUTO_DOWNLOAD_MEDIA_QUALITY,
        Number(e),
      );
    }
    function H(e) {
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
    function G(e, t) {
      r("WAWebUserPrefsStore").setUser(
        o("WAWebUserPrefsKeys").KEYS.GROUP_ASSIGNED_COLOR + "-" + e.toString(),
        t,
      );
    }
    function z(e, t) {
      (j(e), K(t));
    }
    function j(e) {
      r("WAWebUserPrefsStore").set(
        o("WAWebUserPrefsKeys").KEYS.MEDIA_VOLUME,
        e,
      );
    }
    function K(e) {
      r("WAWebUserPrefsStore").set(o("WAWebUserPrefsKeys").KEYS.MEDIA_MUTE, e);
    }
    function Q() {
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
    var X = 1;
    function Y() {
      var e = r("WAWebUserPrefsStore").get(
        o("WAWebUserPrefsKeys").KEYS.PTT_PLAYBACK_RATE,
      );
      return typeof e != "number"
        ? X
        : e === 1 || e === 2
          ? e
          : Math.abs(e - 1.5) < Number.EPSILON
            ? 1.5
            : X;
    }
    function J(e) {
      r("WAWebUserPrefsStore").set(
        o("WAWebUserPrefsKeys").KEYS.PTT_PLAYBACK_RATE,
        e,
      );
    }
    function Z() {
      var e = r("WAWebUserPrefsStore").getUser(
        o("WAWebUserPrefsKeys").KEYS.LAST_STATUS_USAGE,
      );
      return typeof e == "number" ? e : null;
    }
    function ee() {
      r("WAWebUserPrefsStore").setUser(
        o("WAWebUserPrefsKeys").KEYS.LAST_STATUS_USAGE,
        Date.now(),
      );
    }
    function te() {
      var e = r("WAWebUserPrefsStore").getUser(
        o("WAWebUserPrefsKeys").KEYS.LAST_NEWSLETTER_STATUS_BACKFILL_TS,
      );
      return typeof e == "number" ? e : null;
    }
    function ne() {
      r("WAWebUserPrefsStore").setUser(
        o("WAWebUserPrefsKeys").KEYS.LAST_NEWSLETTER_STATUS_BACKFILL_TS,
        Date.now(),
      );
    }
    function re(e) {
      return (e.toString() || "").replace("@", "_");
    }
    function oe(e) {
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
    function ae(e) {
      var t = re(e),
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
      n = oe(n);
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
    function ie(e) {
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
      t = oe(t);
      var n = re(e);
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
    function le() {
      se();
    }
    function se() {
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
    function ue() {
      var e = r("WAWebUserPrefsStore").get(
        o("WAWebUserPrefsKeys").KEYS.PS_KILLSWITCH_TOKEN,
      );
      return typeof e == "string" ? e : null;
    }
    function ce(e) {
      r("WAWebUserPrefsStore").set(
        o("WAWebUserPrefsKeys").KEYS.PS_KILLSWITCH_TOKEN,
        e,
      );
    }
    function de() {
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
    function me(e) {
      r("gkx")("26258") ||
        r("WAWebUserPrefsStore").set(
          o("WAWebUserPrefsKeys").KEYS.STORAGE_DISMISS_STATE,
          JSON.stringify(e),
        );
    }
    function pe() {
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
    function _e(e) {
      r("gkx")("26258") ||
        r("WAWebUserPrefsStore").set(
          o("WAWebUserPrefsKeys").KEYS.STORAGE_ALERT_FLAG,
          e,
        );
    }
    function fe() {
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
    function ge(e) {
      r("WAWebUserPrefsStore").setUser(
        o("WAWebUserPrefsKeys").KEYS.PERSISTENT_EXPIRING_ID,
        e,
      );
    }
    function he() {
      var e = o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.get(
        o("WAWebUserPrefsKeys").KEYS.WHATSAPP_WEB_EXTERNAL_BETA_IDB,
      );
      return !!e;
    }
    function ye(e) {
      return o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.set(
        o("WAWebUserPrefsKeys").KEYS.WHATSAPP_WEB_EXTERNAL_BETA_IDB,
        e,
      );
    }
    function Ce() {
      var e = o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.get(
        o("WAWebUserPrefsKeys").KEYS.WHATSAPP_WEB_EXTERNAL_BETA_DIRTY_BIT_IDB,
      );
      return !!e;
    }
    function be(e) {
      return o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.set(
        o("WAWebUserPrefsKeys").KEYS.WHATSAPP_WEB_EXTERNAL_BETA_DIRTY_BIT_IDB,
        e,
      );
    }
    function ve() {
      return o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.get(
        o("WAWebUserPrefsKeys").BACKEND_ONLY_KEYS.APP_VERSION_BASE,
      );
    }
    function Se(e) {
      return Re.apply(this, arguments);
    }
    function Re() {
      return (
        (Re = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          e != null &&
            (yield o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.set(
              o("WAWebUserPrefsKeys").BACKEND_ONLY_KEYS.APP_VERSION_BASE,
              e,
            ));
        })),
        Re.apply(this, arguments)
      );
    }
    function Le() {
      var e;
      return (e = o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.get(
        o("WAWebUserPrefsKeys").BACKEND_ONLY_KEYS.LOGIN_COUNTER,
      )) != null
        ? e
        : 0;
    }
    function Ee() {
      return ke.apply(this, arguments);
    }
    function ke() {
      return (
        (ke = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e = Le(),
            t = Math.pow(2, 31) - 1,
            n = e >= t ? 0 : e + 1;
          yield o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.set(
            o("WAWebUserPrefsKeys").BACKEND_ONLY_KEYS.LOGIN_COUNTER,
            n,
          );
        })),
        ke.apply(this, arguments)
      );
    }
    function Ie() {
      return Te.apply(this, arguments);
    }
    function Te() {
      return (
        (Te = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          yield o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.set(
            o("WAWebUserPrefsKeys").BACKEND_ONLY_KEYS.LOGIN_COUNTER,
            0,
          );
        })),
        Te.apply(this, arguments)
      );
    }
    function De() {
      return o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.get(
        o("WAWebUserPrefsKeys").BACKEND_ONLY_KEYS.OFFLINE_PUSH_COUNT,
      );
    }
    function xe(e) {
      return $e.apply(this, arguments);
    }
    function $e() {
      return (
        ($e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          yield o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.set(
            o("WAWebUserPrefsKeys").BACKEND_ONLY_KEYS.OFFLINE_PUSH_COUNT,
            e,
          );
        })),
        $e.apply(this, arguments)
      );
    }
    function Pe() {
      return o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.get(
        o("WAWebUserPrefsKeys").BACKEND_ONLY_KEYS.LAST_PUSH_COMPLETE_TIMESTAMP,
      );
    }
    function Ne(e) {
      return Me.apply(this, arguments);
    }
    function Me() {
      return (
        (Me = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          yield o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.set(
            o("WAWebUserPrefsKeys").BACKEND_ONLY_KEYS
              .LAST_PUSH_COMPLETE_TIMESTAMP,
            e,
          );
        })),
        Me.apply(this, arguments)
      );
    }
    function we() {
      return Ae.apply(this, arguments);
    }
    function Ae() {
      return (
        (Ae = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          yield o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.remove(
            o("WAWebUserPrefsKeys").BACKEND_ONLY_KEYS
              .LAST_PUSH_COMPLETE_TIMESTAMP,
          );
        })),
        Ae.apply(this, arguments)
      );
    }
    function Fe() {
      return o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.get(
        o("WAWebUserPrefsKeys").BACKEND_ONLY_KEYS.OFFLINE_PUSH_DISABLED,
      );
    }
    function Oe(e) {
      return Be.apply(this, arguments);
    }
    function Be() {
      return (
        (Be = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          yield o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.set(
            o("WAWebUserPrefsKeys").BACKEND_ONLY_KEYS.OFFLINE_PUSH_DISABLED,
            e,
          );
        })),
        Be.apply(this, arguments)
      );
    }
    function We() {
      return o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.get(
        o("WAWebUserPrefsKeys").BACKEND_ONLY_KEYS
          .OFFLINE_NOTIFICATION_L10N_CONTENT,
      );
    }
    function qe(e) {
      return Ue.apply(this, arguments);
    }
    function Ue() {
      return (
        (Ue = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          yield o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.set(
            o("WAWebUserPrefsKeys").BACKEND_ONLY_KEYS
              .OFFLINE_NOTIFICATION_L10N_CONTENT,
            e,
          );
        })),
        Ue.apply(this, arguments)
      );
    }
    function Ve() {
      return o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.get(
        o("WAWebUserPrefsKeys").BACKEND_ONLY_KEYS
          .OFFLINE_NOTIFICATION_ENGAGEMENT,
      );
    }
    function He(e) {
      return o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.set(
        o("WAWebUserPrefsKeys").BACKEND_ONLY_KEYS
          .OFFLINE_NOTIFICATION_ENGAGEMENT,
        e,
      );
    }
    function Ge() {
      o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.remove(
        o("WAWebUserPrefsKeys").BACKEND_ONLY_KEYS
          .OFFLINE_NOTIFICATION_ENGAGEMENT,
      );
    }
    function ze() {
      return o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.get(
        o("WAWebUserPrefsKeys").BACKEND_ONLY_KEYS.NOTIFICATION_ENGAGEMENT,
      );
    }
    function je(e) {
      return o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.set(
        o("WAWebUserPrefsKeys").BACKEND_ONLY_KEYS.NOTIFICATION_ENGAGEMENT,
        e,
      );
    }
    function Ke() {
      o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.remove(
        o("WAWebUserPrefsKeys").BACKEND_ONLY_KEYS.NOTIFICATION_ENGAGEMENT,
      );
    }
    function Qe() {
      return Xe.apply(this, arguments);
    }
    function Xe() {
      return (
        (Xe = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          return o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.remove(
            "WABrigadingState",
          );
        })),
        Xe.apply(this, arguments)
      );
    }
    function Ye() {
      return o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.get(
        o("WAWebUserPrefsKeys").BACKEND_ONLY_KEYS.LOGOUT_REASON,
      );
    }
    function Je(e) {
      return Ze.apply(this, arguments);
    }
    function Ze() {
      return (
        (Ze = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          yield o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.set(
            o("WAWebUserPrefsKeys").BACKEND_ONLY_KEYS.LOGOUT_REASON,
            e,
          );
        })),
        Ze.apply(this, arguments)
      );
    }
    function et() {
      var e = r("WAWebUserPrefsStore").get(
        o("WAWebUserPrefsKeys").KEYS.LAST_PROFILE_PIC_THUMB_UPDATE_TS,
      );
      return typeof e == "number" ? e : null;
    }
    function tt(e) {
      r("WAWebUserPrefsStore").set(
        o("WAWebUserPrefsKeys").KEYS.LAST_PROFILE_PIC_THUMB_UPDATE_TS,
        e,
      );
    }
    function nt() {
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
    function rt(e) {
      r("WAWebUserPrefsStore").set(
        o("WAWebUserPrefsKeys").KEYS.WA_WEB_WAM_BEACONING_SETTINGS,
        JSON.stringify(e),
      );
    }
    function ot() {
      var e = r("WAWebUserPrefsStore").get(
        o("WAWebUserPrefsKeys").KEYS.CTWA_DATA_SHARING_COOL_OFF,
      );
      return typeof e == "number" ? e : null;
    }
    function at() {
      var e = r("WAWebUserPrefsStore").get(
        o("WAWebUserPrefsKeys").KEYS.CTWA_DATA_SHARING_DISCLOSURE_SHOWN_COUNT,
      );
      return typeof e == "number" ? e : 0;
    }
    function it(e) {
      r("WAWebUserPrefsStore").set(
        o("WAWebUserPrefsKeys").KEYS.CTWA_DATA_SHARING_DISCLOSURE_SHOWN_COUNT,
        e,
      );
    }
    function lt() {
      var e = r("WAWebUserPrefsStore").get(
        o("WAWebUserPrefsKeys").KEYS
          .CTWA_DATA_SHARING_OPT_OUT_DISCLOSURE_SHOWN_COUNT,
      );
      return typeof e == "number" ? e : 0;
    }
    function st(e) {
      r("WAWebUserPrefsStore").set(
        o("WAWebUserPrefsKeys").KEYS
          .CTWA_DATA_SHARING_OPT_OUT_DISCLOSURE_SHOWN_COUNT,
        e,
      );
    }
    function ut() {
      return (
        r("WAWebUserPrefsStore").get(
          o("WAWebUserPrefsKeys").KEYS.CTWA_DATA_SHARING_V2_DISCLOSURE_SEEN,
        ) === !0
      );
    }
    function ct() {
      r("WAWebUserPrefsStore").set(
        o("WAWebUserPrefsKeys").KEYS.CTWA_DATA_SHARING_V2_DISCLOSURE_SEEN,
        !0,
      );
    }
    function dt() {
      return !!r("WAWebUserPrefsStore").get(
        o("WAWebUserPrefsKeys").KEYS.CTWA_MESSAGE_RECEIVED,
      );
    }
    function mt(e) {
      r("WAWebUserPrefsStore").set(
        o("WAWebUserPrefsKeys").KEYS.CTWA_MESSAGE_RECEIVED,
        e,
      );
    }
    function pt(e) {
      r("WAWebUserPrefsStore").set(
        o("WAWebUserPrefsKeys").UserPrefs.GPCCompleted,
        e,
      );
    }
    function _t() {
      return (
        r("WAWebUserPrefsStore").get(
          o("WAWebUserPrefsKeys").UserPrefs.GPCCompleted,
        ) === !0
      );
    }
    function ft(e) {
      r("WAWebUserPrefsStore").set(
        r("WAWebUserPrefsDebugKeys").DEBUG_FACEBOOK_GRAPHQL_ENDPOINT_OVERRIDE,
        e,
      );
    }
    function gt() {
      var e = r("WAWebUserPrefsStore").get(
        r("WAWebUserPrefsDebugKeys").DEBUG_FACEBOOK_GRAPHQL_ENDPOINT_OVERRIDE,
      );
      return typeof e == "number" ? String(e) : typeof e == "string" ? e : null;
    }
    function ht() {
      return (
        r("WAWebUserPrefsStore").get(
          o("WAWebUserPrefsKeys").UserPrefs.DetectedOutcomeOnboardingStatus,
        ) === !0
      );
    }
    function yt(e) {
      r("WAWebUserPrefsStore").set(
        o("WAWebUserPrefsKeys").UserPrefs.DetectedOutcomeOnboardingStatus,
        e,
      );
    }
    function Ct() {
      var e = r("WAWebUserPrefsStore").get(
        o("WAWebUserPrefsKeys").KEYS.CTWA_PREFERRED_AD_ACCOUNT_TYPE,
      );
      return typeof e == "string" ? e : null;
    }
    function bt(e) {
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
      (l.getAutoDownloadPhotos = N),
      (l.setAutoDownloadPhotos = M),
      (l.getAutoDownloadAudio = w),
      (l.setAutoDownloadAudio = A),
      (l.getAutoDownloadVideos = F),
      (l.setAutoDownloadVideos = O),
      (l.getAutoDownloadDocuments = B),
      (l.setAutoDownloadDocuments = W),
      (l.getAutoDownloadMediaQuality = q),
      (l.resolveAutoDownloadMediaQuality = U),
      (l.setAutoDownloadMediaQuality = V),
      (l.getGroupParticipantAssignedColor = H),
      (l.setGroupParticipantAssignedColor = G),
      (l.setMediaVolumeSettings = z),
      (l.setMediaVolumeSetting = j),
      (l.setMediaMutedSetting = K),
      (l.getMediaVolumeSettings = Q),
      (l.DEFAULT_PTT_PLAYBACK_RATE = X),
      (l.getPttPlaybackRate = Y),
      (l.setPttPlaybackRate = J),
      (l.getLastStatusUsage = Z),
      (l.setLastStatusUsage = ee),
      (l.getLastNewsletterStatusBackfillTimestamp = te),
      (l.setLastNewsletterStatusBackfillTimestamp = ne),
      (l.markUserSentMessageToChat = ae),
      (l.removeUserSentMessageToChat = ie),
      (l.initDailyStatsStartTime = le),
      (l.getDailyStatsStartTime = se),
      (l.getPsKillSwitchToken = ue),
      (l.setPsKillSwitchToken = ce),
      (l.getStorageDismissState = de),
      (l.setStorageDismissState = me),
      (l.getStorageAlert = pe),
      (l.setStorageAlert = _e),
      (l.getPersistentExpiringId = fe),
      (l.setPersistentExpiringId = ge),
      (l.getWhatsAppWebExternalBetaJoinedIdb = he),
      (l.setWhatsAppWebExternalBetaJoinedIdb = ye),
      (l.getWhatsAppWebExternalBetaDirtyBitIdb = Ce),
      (l.setWhatsAppWebExternalBetaDirtyBitIdb = be),
      (l.getAppVersionBase = ve),
      (l.setAppVersionBase = Se),
      (l.getLoginCounter = Le),
      (l.incrementLoginCounter = Ee),
      (l.resetLoginCounter = Ie),
      (l.getOfflinePushCount = De),
      (l.setOfflinePushCount = xe),
      (l.getLastPushCompleteTimestamp = Pe),
      (l.setLastPushCompleteTimestamp = Ne),
      (l.clearLastPushCompleteTimestamp = we),
      (l.getOfflinePushDisabled = Fe),
      (l.setOfflinePushDisabled = Oe),
      (l.getOfflineNotificationContent = We),
      (l.setOfflineNotificationContent = qe),
      (l.getOfflineNotificationEngagement = Ve),
      (l.setOfflineNotificationContentEngagement = He),
      (l.clearOfflineNotificationContentEngagement = Ge),
      (l.getNotificationEngagement = ze),
      (l.setNotificationContentEngagement = je),
      (l.clearNotificationContentEngagement = Ke),
      (l.clearBrigadingstate = Qe),
      (l.getLogoutReason = Ye),
      (l.setLogoutReason = Je),
      (l.getLastProfilePicThumbUpdate = et),
      (l.setLastProfilePicThumbUpdate = tt),
      (l.getWamBeaconingSettings = nt),
      (l.setWamBeaconingSettings = rt),
      (l.getCTWADataSharingCoolOffTimestamp = ot),
      (l.getCTWADataSharingDisclosureShownCount = at),
      (l.setCTWADataSharingDisclosureShownCount = it),
      (l.getCTWADataSharingOptOutDisclosureShownCount = lt),
      (l.setCTWADataSharingOptOutDisclosureShownCount = st),
      (l.getCTWADataSharingV2DisclosureSeen = ut),
      (l.setCTWADataSharingV2DisclosureSeen = ct),
      (l.getCTWAMessageReceived = dt),
      (l.setCTWAMessageReceived = mt),
      (l.setGPCcompleted = pt),
      (l.getGPCCompleted = _t),
      (l.setDebugFacebookGraphQLEndpointOverride = ft),
      (l.getDebugFacebookGraphQLEndpointOverride = gt),
      (l.getDetectedOutcomeOnboardingStatus = ht),
      (l.setDetectedOutcomeOnboardingStatus = yt),
      (l.getLastUsedAdAccountType = Ct),
      (l.setLastUsedAdAccountType = bt));
  },
  98,
);
