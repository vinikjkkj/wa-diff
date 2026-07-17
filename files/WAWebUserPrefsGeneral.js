__d(
  "WAWebUserPrefsGeneral",
  [
    "WALogger",
    "WAWebComposeBoxPanelTypes",
    "WAWebDbUsageApiConst",
    "WAWebEnvironment",
    "WAWebEventEmitter",
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
    function q(e) {
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
    function U(e, t) {
      r("WAWebUserPrefsStore").setUser(
        o("WAWebUserPrefsKeys").KEYS.GROUP_ASSIGNED_COLOR + "-" + e.toString(),
        t,
      );
    }
    function V(e, t) {
      (H(e), G(t));
    }
    function H(e) {
      r("WAWebUserPrefsStore").set(
        o("WAWebUserPrefsKeys").KEYS.MEDIA_VOLUME,
        e,
      );
    }
    function G(e) {
      r("WAWebUserPrefsStore").set(o("WAWebUserPrefsKeys").KEYS.MEDIA_MUTE, e);
    }
    function z() {
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
    var j = 1;
    function K() {
      var e = r("WAWebUserPrefsStore").get(
        o("WAWebUserPrefsKeys").KEYS.PTT_PLAYBACK_RATE,
      );
      return typeof e != "number"
        ? j
        : e === 1 || e === 2
          ? e
          : Math.abs(e - 1.5) < Number.EPSILON
            ? 1.5
            : j;
    }
    function Q(e) {
      r("WAWebUserPrefsStore").set(
        o("WAWebUserPrefsKeys").KEYS.PTT_PLAYBACK_RATE,
        e,
      );
    }
    function X() {
      var e = r("WAWebUserPrefsStore").getUser(
        o("WAWebUserPrefsKeys").KEYS.LAST_STATUS_USAGE,
      );
      return typeof e == "number" ? e : null;
    }
    function Y() {
      r("WAWebUserPrefsStore").setUser(
        o("WAWebUserPrefsKeys").KEYS.LAST_STATUS_USAGE,
        Date.now(),
      );
    }
    function J() {
      var e = r("WAWebUserPrefsStore").getUser(
        o("WAWebUserPrefsKeys").KEYS.LAST_NEWSLETTER_STATUS_BACKFILL_TS,
      );
      return typeof e == "number" ? e : null;
    }
    function Z() {
      r("WAWebUserPrefsStore").setUser(
        o("WAWebUserPrefsKeys").KEYS.LAST_NEWSLETTER_STATUS_BACKFILL_TS,
        Date.now(),
      );
    }
    function ee() {
      return (
        r("WAWebUserPrefsStore").getUser(
          o("WAWebUserPrefsKeys").KEYS.POSTCODE_AUTO_OPEN_CHANGE_POSTCODE_DONE,
        ) === !0
      );
    }
    function te(e) {
      r("WAWebUserPrefsStore").setUser(
        o("WAWebUserPrefsKeys").KEYS.POSTCODE_AUTO_OPEN_CHANGE_POSTCODE_DONE,
        e,
      );
    }
    function ne() {
      var e = r("WAWebUserPrefsStore").getUser(
        o("WAWebUserPrefsKeys").KEYS.POSTCODE_AUTO_OPEN_CHANGE_POSTCODE_COUNT,
      );
      return typeof e == "number" ? e : 0;
    }
    function re(e) {
      r("WAWebUserPrefsStore").setUser(
        o("WAWebUserPrefsKeys").KEYS.POSTCODE_AUTO_OPEN_CHANGE_POSTCODE_COUNT,
        e,
      );
    }
    function oe(e) {
      r("WAWebUserPrefsStore").setUser(
        o("WAWebUserPrefsKeys").KEYS.POSTCODE_TOOLTIP_VIEW_COUNT,
        e,
      );
    }
    function ae() {
      var e = r("WAWebUserPrefsStore").getUser(
        o("WAWebUserPrefsKeys").KEYS.POSTCODE_TOOLTIP_VIEW_COUNT,
      );
      return typeof e == "number" ? e : 0;
    }
    function ie(e) {
      r("WAWebUserPrefsStore").setUser(
        o("WAWebUserPrefsKeys").KEYS.POSTCODE_TOOLTIP_VIEWED_IN_SESSION,
        e,
      );
    }
    function le() {
      return (
        r("WAWebUserPrefsStore").getUser(
          o("WAWebUserPrefsKeys").KEYS.POSTCODE_TOOLTIP_VIEWED_IN_SESSION,
        ) === !0
      );
    }
    function se(e) {
      return (e.toString() || "").replace("@", "_");
    }
    function ue(e) {
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
    function ce(e) {
      var t = se(e),
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
      n = ue(n);
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
    function de(e) {
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
      t = ue(t);
      var n = se(e);
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
    function me() {
      pe();
    }
    function pe() {
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
    function _e() {
      var e = r("WAWebUserPrefsStore").get(
        o("WAWebUserPrefsKeys").KEYS.PS_KILLSWITCH_TOKEN,
      );
      return typeof e == "string" ? e : null;
    }
    function fe(e) {
      r("WAWebUserPrefsStore").set(
        o("WAWebUserPrefsKeys").KEYS.PS_KILLSWITCH_TOKEN,
        e,
      );
    }
    function ge() {
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
    function he(e) {
      r("gkx")("26258") ||
        r("WAWebUserPrefsStore").set(
          o("WAWebUserPrefsKeys").KEYS.STORAGE_DISMISS_STATE,
          JSON.stringify(e),
        );
    }
    function ye() {
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
    function Ce(e) {
      r("gkx")("26258") ||
        r("WAWebUserPrefsStore").set(
          o("WAWebUserPrefsKeys").KEYS.STORAGE_ALERT_FLAG,
          e,
        );
    }
    function be() {
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
    function ve(e) {
      r("WAWebUserPrefsStore").setUser(
        o("WAWebUserPrefsKeys").KEYS.PERSISTENT_EXPIRING_ID,
        e,
      );
    }
    function Se() {
      var e = o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.get(
        o("WAWebUserPrefsKeys").KEYS.WHATSAPP_WEB_EXTERNAL_BETA_IDB,
      );
      return !!e;
    }
    function Re(e) {
      return o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.set(
        o("WAWebUserPrefsKeys").KEYS.WHATSAPP_WEB_EXTERNAL_BETA_IDB,
        e,
      );
    }
    function Le() {
      var e = o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.get(
        o("WAWebUserPrefsKeys").KEYS.WHATSAPP_WEB_EXTERNAL_BETA_DIRTY_BIT_IDB,
      );
      return !!e;
    }
    function Ee(e) {
      return o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.set(
        o("WAWebUserPrefsKeys").KEYS.WHATSAPP_WEB_EXTERNAL_BETA_DIRTY_BIT_IDB,
        e,
      );
    }
    function ke() {
      return o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.get(
        o("WAWebUserPrefsKeys").BACKEND_ONLY_KEYS.APP_VERSION_BASE,
      );
    }
    function Ie(e) {
      return Te.apply(this, arguments);
    }
    function Te() {
      return (
        (Te = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          e != null &&
            (yield o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.set(
              o("WAWebUserPrefsKeys").BACKEND_ONLY_KEYS.APP_VERSION_BASE,
              e,
            ));
        })),
        Te.apply(this, arguments)
      );
    }
    function De() {
      var e;
      return (e = o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.get(
        o("WAWebUserPrefsKeys").BACKEND_ONLY_KEYS.LOGIN_COUNTER,
      )) != null
        ? e
        : 0;
    }
    function xe() {
      return $e.apply(this, arguments);
    }
    function $e() {
      return (
        ($e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e = De(),
            t = Math.pow(2, 31) - 1,
            n = e >= t ? 0 : e + 1;
          yield o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.set(
            o("WAWebUserPrefsKeys").BACKEND_ONLY_KEYS.LOGIN_COUNTER,
            n,
          );
        })),
        $e.apply(this, arguments)
      );
    }
    function Pe() {
      return Ne.apply(this, arguments);
    }
    function Ne() {
      return (
        (Ne = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          yield o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.set(
            o("WAWebUserPrefsKeys").BACKEND_ONLY_KEYS.LOGIN_COUNTER,
            0,
          );
        })),
        Ne.apply(this, arguments)
      );
    }
    function Me() {
      return o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.get(
        o("WAWebUserPrefsKeys").BACKEND_ONLY_KEYS.OFFLINE_PUSH_COUNT,
      );
    }
    function we(e) {
      return Ae.apply(this, arguments);
    }
    function Ae() {
      return (
        (Ae = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          yield o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.set(
            o("WAWebUserPrefsKeys").BACKEND_ONLY_KEYS.OFFLINE_PUSH_COUNT,
            e,
          );
        })),
        Ae.apply(this, arguments)
      );
    }
    function Fe() {
      return o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.get(
        o("WAWebUserPrefsKeys").BACKEND_ONLY_KEYS.LAST_PUSH_COMPLETE_TIMESTAMP,
      );
    }
    function Oe(e) {
      return Be.apply(this, arguments);
    }
    function Be() {
      return (
        (Be = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          yield o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.set(
            o("WAWebUserPrefsKeys").BACKEND_ONLY_KEYS
              .LAST_PUSH_COMPLETE_TIMESTAMP,
            e,
          );
        })),
        Be.apply(this, arguments)
      );
    }
    function We() {
      return qe.apply(this, arguments);
    }
    function qe() {
      return (
        (qe = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          yield o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.remove(
            o("WAWebUserPrefsKeys").BACKEND_ONLY_KEYS
              .LAST_PUSH_COMPLETE_TIMESTAMP,
          );
        })),
        qe.apply(this, arguments)
      );
    }
    function Ue() {
      return o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.get(
        o("WAWebUserPrefsKeys").BACKEND_ONLY_KEYS.OFFLINE_PUSH_DISABLED,
      );
    }
    function Ve(e) {
      return He.apply(this, arguments);
    }
    function He() {
      return (
        (He = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          yield o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.set(
            o("WAWebUserPrefsKeys").BACKEND_ONLY_KEYS.OFFLINE_PUSH_DISABLED,
            e,
          );
        })),
        He.apply(this, arguments)
      );
    }
    function Ge() {
      return o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.get(
        o("WAWebUserPrefsKeys").BACKEND_ONLY_KEYS
          .OFFLINE_NOTIFICATION_L10N_CONTENT,
      );
    }
    function ze(e) {
      return je.apply(this, arguments);
    }
    function je() {
      return (
        (je = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          yield o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.set(
            o("WAWebUserPrefsKeys").BACKEND_ONLY_KEYS
              .OFFLINE_NOTIFICATION_L10N_CONTENT,
            e,
          );
        })),
        je.apply(this, arguments)
      );
    }
    function Ke() {
      return o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.get(
        o("WAWebUserPrefsKeys").BACKEND_ONLY_KEYS
          .OFFLINE_NOTIFICATION_ENGAGEMENT,
      );
    }
    function Qe(e) {
      return o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.set(
        o("WAWebUserPrefsKeys").BACKEND_ONLY_KEYS
          .OFFLINE_NOTIFICATION_ENGAGEMENT,
        e,
      );
    }
    function Xe() {
      o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.remove(
        o("WAWebUserPrefsKeys").BACKEND_ONLY_KEYS
          .OFFLINE_NOTIFICATION_ENGAGEMENT,
      );
    }
    function Ye() {
      return o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.get(
        o("WAWebUserPrefsKeys").BACKEND_ONLY_KEYS.NOTIFICATION_ENGAGEMENT,
      );
    }
    function Je(e) {
      return o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.set(
        o("WAWebUserPrefsKeys").BACKEND_ONLY_KEYS.NOTIFICATION_ENGAGEMENT,
        e,
      );
    }
    function Ze() {
      o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.remove(
        o("WAWebUserPrefsKeys").BACKEND_ONLY_KEYS.NOTIFICATION_ENGAGEMENT,
      );
    }
    function et() {
      return tt.apply(this, arguments);
    }
    function tt() {
      return (
        (tt = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          return o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.remove(
            "WABrigadingState",
          );
        })),
        tt.apply(this, arguments)
      );
    }
    function nt() {
      return o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.get(
        o("WAWebUserPrefsKeys").BACKEND_ONLY_KEYS.LOGOUT_REASON,
      );
    }
    function rt(e) {
      return ot.apply(this, arguments);
    }
    function ot() {
      return (
        (ot = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          yield o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.set(
            o("WAWebUserPrefsKeys").BACKEND_ONLY_KEYS.LOGOUT_REASON,
            e,
          );
        })),
        ot.apply(this, arguments)
      );
    }
    function at() {
      var e = r("WAWebUserPrefsStore").get(
        o("WAWebUserPrefsKeys").KEYS.LAST_PROFILE_PIC_THUMB_UPDATE_TS,
      );
      return typeof e == "number" ? e : null;
    }
    function it(e) {
      r("WAWebUserPrefsStore").set(
        o("WAWebUserPrefsKeys").KEYS.LAST_PROFILE_PIC_THUMB_UPDATE_TS,
        e,
      );
    }
    function lt() {
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
    function st(e) {
      r("WAWebUserPrefsStore").set(
        o("WAWebUserPrefsKeys").KEYS.WA_WEB_WAM_BEACONING_SETTINGS,
        JSON.stringify(e),
      );
    }
    function ut() {
      var e = r("WAWebUserPrefsStore").get(
        o("WAWebUserPrefsKeys").KEYS.CTWA_DATA_SHARING_COOL_OFF,
      );
      return typeof e == "number" ? e : null;
    }
    function ct() {
      var e = r("WAWebUserPrefsStore").get(
        o("WAWebUserPrefsKeys").KEYS.CTWA_DATA_SHARING_DISCLOSURE_SHOWN_COUNT,
      );
      return typeof e == "number" ? e : 0;
    }
    function dt(e) {
      r("WAWebUserPrefsStore").set(
        o("WAWebUserPrefsKeys").KEYS.CTWA_DATA_SHARING_DISCLOSURE_SHOWN_COUNT,
        e,
      );
    }
    function mt() {
      var e = r("WAWebUserPrefsStore").get(
        o("WAWebUserPrefsKeys").KEYS
          .CTWA_DATA_SHARING_OPT_OUT_DISCLOSURE_SHOWN_COUNT,
      );
      return typeof e == "number" ? e : 0;
    }
    function pt(e) {
      r("WAWebUserPrefsStore").set(
        o("WAWebUserPrefsKeys").KEYS
          .CTWA_DATA_SHARING_OPT_OUT_DISCLOSURE_SHOWN_COUNT,
        e,
      );
    }
    function _t() {
      return (
        r("WAWebUserPrefsStore").get(
          o("WAWebUserPrefsKeys").KEYS.CTWA_DATA_SHARING_V2_DISCLOSURE_SEEN,
        ) === !0
      );
    }
    function ft() {
      r("WAWebUserPrefsStore").set(
        o("WAWebUserPrefsKeys").KEYS.CTWA_DATA_SHARING_V2_DISCLOSURE_SEEN,
        !0,
      );
    }
    function gt() {
      return !!r("WAWebUserPrefsStore").get(
        o("WAWebUserPrefsKeys").KEYS.CTWA_MESSAGE_RECEIVED,
      );
    }
    function ht(e) {
      r("WAWebUserPrefsStore").set(
        o("WAWebUserPrefsKeys").KEYS.CTWA_MESSAGE_RECEIVED,
        e,
      );
    }
    function yt(e) {
      r("WAWebUserPrefsStore").set(
        o("WAWebUserPrefsKeys").UserPrefs.GPCCompleted,
        e,
      );
    }
    function Ct() {
      return (
        r("WAWebUserPrefsStore").get(
          o("WAWebUserPrefsKeys").UserPrefs.GPCCompleted,
        ) === !0
      );
    }
    function bt(e) {
      r("WAWebUserPrefsStore").set(
        r("WAWebUserPrefsDebugKeys").DEBUG_FACEBOOK_GRAPHQL_ENDPOINT_OVERRIDE,
        e,
      );
    }
    function vt() {
      var e = r("WAWebUserPrefsStore").get(
        r("WAWebUserPrefsDebugKeys").DEBUG_FACEBOOK_GRAPHQL_ENDPOINT_OVERRIDE,
      );
      return typeof e == "number" ? String(e) : typeof e == "string" ? e : null;
    }
    function St() {
      return (
        r("WAWebUserPrefsStore").get(
          o("WAWebUserPrefsKeys").UserPrefs.DetectedOutcomeOnboardingStatus,
        ) === !0
      );
    }
    function Rt(e) {
      r("WAWebUserPrefsStore").set(
        o("WAWebUserPrefsKeys").UserPrefs.DetectedOutcomeOnboardingStatus,
        e,
      );
    }
    function Lt() {
      var e = r("WAWebUserPrefsStore").get(
        o("WAWebUserPrefsKeys").KEYS.CTWA_PREFERRED_AD_ACCOUNT_TYPE,
      );
      return typeof e == "string" ? e : null;
    }
    function Et(e) {
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
      (l.getGroupParticipantAssignedColor = q),
      (l.setGroupParticipantAssignedColor = U),
      (l.setMediaVolumeSettings = V),
      (l.setMediaVolumeSetting = H),
      (l.setMediaMutedSetting = G),
      (l.getMediaVolumeSettings = z),
      (l.DEFAULT_PTT_PLAYBACK_RATE = j),
      (l.getPttPlaybackRate = K),
      (l.setPttPlaybackRate = Q),
      (l.getLastStatusUsage = X),
      (l.setLastStatusUsage = Y),
      (l.getLastNewsletterStatusBackfillTimestamp = J),
      (l.setLastNewsletterStatusBackfillTimestamp = Z),
      (l.getPostcodeAutoOpenChangePostcodeDone = ee),
      (l.setPostcodeAutoOpenChangePostcodeDone = te),
      (l.getPostcodeAutoOpenChangePostcodeCount = ne),
      (l.setPostcodeAutoOpenChangePostcodeCount = re),
      (l.setPostcodeTooltipViewCount = oe),
      (l.getPostcodeTooltipViewCount = ae),
      (l.setPostcodeTooltipViewedInSession = ie),
      (l.getPostcodeTooltipViewedInSession = le),
      (l.markUserSentMessageToChat = ce),
      (l.removeUserSentMessageToChat = de),
      (l.initDailyStatsStartTime = me),
      (l.getDailyStatsStartTime = pe),
      (l.getPsKillSwitchToken = _e),
      (l.setPsKillSwitchToken = fe),
      (l.getStorageDismissState = ge),
      (l.setStorageDismissState = he),
      (l.getStorageAlert = ye),
      (l.setStorageAlert = Ce),
      (l.getPersistentExpiringId = be),
      (l.setPersistentExpiringId = ve),
      (l.getWhatsAppWebExternalBetaJoinedIdb = Se),
      (l.setWhatsAppWebExternalBetaJoinedIdb = Re),
      (l.getWhatsAppWebExternalBetaDirtyBitIdb = Le),
      (l.setWhatsAppWebExternalBetaDirtyBitIdb = Ee),
      (l.getAppVersionBase = ke),
      (l.setAppVersionBase = Ie),
      (l.getLoginCounter = De),
      (l.incrementLoginCounter = xe),
      (l.resetLoginCounter = Pe),
      (l.getOfflinePushCount = Me),
      (l.setOfflinePushCount = we),
      (l.getLastPushCompleteTimestamp = Fe),
      (l.setLastPushCompleteTimestamp = Oe),
      (l.clearLastPushCompleteTimestamp = We),
      (l.getOfflinePushDisabled = Ue),
      (l.setOfflinePushDisabled = Ve),
      (l.getOfflineNotificationContent = Ge),
      (l.setOfflineNotificationContent = ze),
      (l.getOfflineNotificationEngagement = Ke),
      (l.setOfflineNotificationContentEngagement = Qe),
      (l.clearOfflineNotificationContentEngagement = Xe),
      (l.getNotificationEngagement = Ye),
      (l.setNotificationContentEngagement = Je),
      (l.clearNotificationContentEngagement = Ze),
      (l.clearBrigadingstate = et),
      (l.getLogoutReason = nt),
      (l.setLogoutReason = rt),
      (l.getLastProfilePicThumbUpdate = at),
      (l.setLastProfilePicThumbUpdate = it),
      (l.getWamBeaconingSettings = lt),
      (l.setWamBeaconingSettings = st),
      (l.getCTWADataSharingCoolOffTimestamp = ut),
      (l.getCTWADataSharingDisclosureShownCount = ct),
      (l.setCTWADataSharingDisclosureShownCount = dt),
      (l.getCTWADataSharingOptOutDisclosureShownCount = mt),
      (l.setCTWADataSharingOptOutDisclosureShownCount = pt),
      (l.getCTWADataSharingV2DisclosureSeen = _t),
      (l.setCTWADataSharingV2DisclosureSeen = ft),
      (l.getCTWAMessageReceived = gt),
      (l.setCTWAMessageReceived = ht),
      (l.setGPCcompleted = yt),
      (l.getGPCCompleted = Ct),
      (l.setDebugFacebookGraphQLEndpointOverride = bt),
      (l.getDebugFacebookGraphQLEndpointOverride = vt),
      (l.getDetectedOutcomeOnboardingStatus = St),
      (l.setDetectedOutcomeOnboardingStatus = Rt),
      (l.getLastUsedAdAccountType = Lt),
      (l.setLastUsedAdAccountType = Et));
  },
  98,
);
