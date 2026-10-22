__d(
  "WAWebMuteCollection",
  [
    "JSResourceForInteraction",
    "WALogger",
    "WATimeUtils",
    "WAWebABProps",
    "WAWebBaseCachePolicy",
    "WAWebBaseCollection",
    "WAWebClock",
    "WAWebConnModel",
    "WAWebLazyLoadedRetriable",
    "WAWebMuteModel",
    "WAWebUserPrefsKeys",
    "WAWebUserPrefsNotifications",
    "WAWebUserPrefsStore",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
    "gkx",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u;
    function c(e) {
      throw new TypeError('"' + e + '" is read-only');
    }
    var d = !0,
      m = !0,
      p = null,
      _ = null,
      f = null,
      g = 1e4,
      h = !0,
      y = !1,
      C = !1,
      b = !1,
      v = !1,
      S = !1,
      R = !1,
      L = !1,
      E = !1,
      k = !0,
      I = !1,
      T = !1,
      D = !0,
      x = !1,
      $ = !1,
      P = !0,
      N = (function (t) {
        function n() {
          for (var e, n = arguments.length, r = new Array(n), o = 0; o < n; o++)
            r[o] = arguments[o];
          return (
            (e = t.call.apply(t, [this].concat(r)) || this),
            (e.isGranularNotificationsEnabled = !1),
            babelHelpers.assertThisInitialized(e) ||
              babelHelpers.assertThisInitialized(e)
          );
        }
        babelHelpers.inheritsLoose(n, t);
        var a = n.prototype;
        return (
          (a.initializeFromCache = function (t) {
            var e = this;
            ((this.isGranularNotificationsEnabled = o(
              "WAWebABProps",
            ).getABPropConfigValue("wa_web_enable_granular_notifications")),
              Array.isArray(t) &&
                t.forEach(function (t) {
                  o("WAWebMuteModel").GLOBAL_REACTIONS_MUTE === t.id &&
                    e.add(t, { remove: !1 });
                }),
              this.$MuteCollectionImpl$p_1(),
              this.setGlobalNotifications(
                o("WAWebUserPrefsNotifications").getGlobalNotifications(),
              ),
              this.setGlobalOfflineNotifications(
                o(
                  "WAWebUserPrefsNotifications",
                ).getGlobalOfflineNotifications(),
              ),
              this.setGlobalSounds(
                o("WAWebUserPrefsNotifications").getGlobalSounds(),
              ),
              this.setGlobalCallRingtone(
                o("WAWebUserPrefsNotifications").getGlobalCallRingtone(),
              ),
              this.setGlobalPreviews(
                o("WAWebUserPrefsNotifications").getGlobalPreviews(),
              ),
              this.setCollapseMuted(
                o("WAWebUserPrefsNotifications").getCollapseMuted(),
              ),
              this.setOutgoingMessageSound(
                o("WAWebUserPrefsNotifications").getOutgoingMessageSound(),
              ),
              this.setIgnoreNondirectGroupMsg(
                o("WAWebUserPrefsNotifications").getIgnoreNondirectGroupMsg(),
              ),
              this.setGlobalNotificationsEnabled(
                o(
                  "WAWebUserPrefsNotifications",
                ).getGlobalNotificationsEnabled(),
              ),
              this.setGlobalNotificationReactionsEnabled(
                o(
                  "WAWebUserPrefsNotifications",
                ).getGlobalNotificationReactionsEnabled(
                  !this.globalReactionsMute(),
                ),
              ),
              this.setGlobalSoundsEnabled(
                o("WAWebUserPrefsNotifications").getGlobalSoundsEnabled(),
              ),
              this.setGlobalGroupNotificationsEnabled(
                o(
                  "WAWebUserPrefsNotifications",
                ).getGlobalGroupNotificationsEnabled(),
              ),
              this.setGlobalGroupNotificationReactionsEnabled(
                o(
                  "WAWebUserPrefsNotifications",
                ).getGlobalGroupNotificationReactionsEnabled(),
              ),
              this.setGlobalGroupSoundsEnabled(
                o("WAWebUserPrefsNotifications").getGlobalGroupSoundsEnabled(),
              ),
              this.setGlobalStatusNotificationsEnabled(
                o(
                  "WAWebUserPrefsNotifications",
                ).getGlobalStatusNotificationsEnabled(),
              ),
              this.setGlobalStatusNotificationReactionsEnabled(
                o(
                  "WAWebUserPrefsNotifications",
                ).getGlobalStatusNotificationReactionsEnabled(),
              ),
              this.setGlobalStatusSoundsEnabled(
                o("WAWebUserPrefsNotifications").getGlobalStatusSoundsEnabled(),
              ));
          }),
          (a.saveToCache = function () {
            if (o("WAWebConnModel").Conn.shouldSaveToCache()) {
              var t = this.constructor.cachePolicy.id,
                n = [];
              o("WALogger").LOG(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "models:mute:cache-save: ",
                    "",
                  ])),
                String(t),
              );
              var a = this.get(o("WAWebMuteModel").GLOBAL_REACTIONS_MUTE);
              (a && n.push(a.toJSON()),
                n.length
                  ? r("WAWebUserPrefsStore").setCollection(t, n)
                  : o("WALogger").WARN(
                      s ||
                        (s = babelHelpers.taggedTemplateLiteralLoose([
                          "models:mute:cache-save: globalMuteModel or globalReactionsMuteModel does not exist",
                        ])),
                    ));
            }
          }),
          (a.globalReactionsMute = function () {
            var e = this.get(o("WAWebMuteModel").GLOBAL_REACTIONS_MUTE);
            if (e) return e;
            var t = new (o("WAWebMuteModel").Mute)({
              id: o("WAWebMuteModel").GLOBAL_REACTIONS_MUTE,
            });
            return (this.add(t), t);
          }),
          (a.getGlobalSounds = function () {
            return d;
          }),
          (a.setGlobalSounds = function (t) {
            ((d = t),
              o("WAWebUserPrefsNotifications").setGlobalSounds(t),
              this.isGranularNotificationsEnabled ||
                (this.setGlobalSoundsEnabled(t),
                this.setGlobalGroupSoundsEnabled(t),
                this.setGlobalStatusSoundsEnabled(t)));
          }),
          (a.getGlobalCallRingtone = function () {
            return h;
          }),
          (a.setGlobalCallRingtone = function (t) {
            ((h = t),
              o("WAWebUserPrefsNotifications").setGlobalCallRingtone(t));
          }),
          (a.getGlobalNotifications = function () {
            return y;
          }),
          (a.setGlobalNotifications = function (t) {
            ((y = t),
              o("WAWebUserPrefsNotifications").setGlobalNotifications(t),
              this.isGranularNotificationsEnabled ||
                (this.setGlobalNotificationsEnabled(t),
                this.setGlobalGroupNotificationsEnabled(t),
                this.setGlobalStatusNotificationsEnabled(t)));
          }),
          (a.getGlobalCallNotifications = function () {
            return m || w();
          }),
          (a.setGlobalCallNotifications = function (t) {
            (this.$MuteCollectionImpl$p_2(), this.$MuteCollectionImpl$p_3(t));
          }),
          (a.setGlobalCallNotificationsFromSync = function (t, n) {
            (!t && A(n)) || this.setGlobalCallNotifications(t);
          }),
          (a.getGlobalCallNotificationsMuteExpiration = function () {
            return this.getGlobalCallNotifications() ? null : p;
          }),
          (a.muteGlobalCallNotificationsUntil = function (t) {
            if (t === o("WAWebClock").MUTE_ALWAYS_EXPIRATION_SENTINEL) {
              this.setGlobalCallNotifications(!1);
              return;
            }
            (this.$MuteCollectionImpl$p_2(),
              (p = t),
              o(
                "WAWebUserPrefsNotifications",
              ).setGlobalCallNotificationsMuteExpiration(t),
              (_ = o("WATimeUtils").unixTimeMs()),
              o(
                "WAWebUserPrefsNotifications",
              ).setGlobalCallNotificationsMutedAt(_),
              this.$MuteCollectionImpl$p_3(!1),
              this.$MuteCollectionImpl$p_4());
          }),
          (a.$MuteCollectionImpl$p_1 = function () {
            ((p = o(
              "WAWebUserPrefsNotifications",
            ).getGlobalCallNotificationsMuteExpiration()),
              (_ = o(
                "WAWebUserPrefsNotifications",
              ).getGlobalCallNotificationsMutedAt()),
              this.$MuteCollectionImpl$p_3(
                o("WAWebUserPrefsNotifications").getGlobalCallNotifications(),
              ),
              this.$MuteCollectionImpl$p_4());
          }),
          (a.$MuteCollectionImpl$p_3 = function (t) {
            ((m = t),
              o("WAWebUserPrefsNotifications").setGlobalCallNotifications(t),
              this.trigger("change:notificationsEnabled"));
          }),
          (a.$MuteCollectionImpl$p_4 = function () {
            var e = this;
            W();
            var t = p;
            if (!(m || t == null)) {
              var n = Math.max(
                0,
                (t - o("WATimeUtils").unixTimeWithoutClockSkewCorrection()) *
                  1e3,
              );
              f = self.setTimeout(function () {
                (e.setGlobalCallNotifications(!0), O());
              }, n);
            }
          }),
          (a.$MuteCollectionImpl$p_2 = function () {
            (W(),
              (p = null),
              o(
                "WAWebUserPrefsNotifications",
              ).setGlobalCallNotificationsMuteExpiration(null),
              (_ = null),
              o(
                "WAWebUserPrefsNotifications",
              ).setGlobalCallNotificationsMutedAt(null));
          }),
          (a.getGlobalOfflineNotifications = function () {
            return C;
          }),
          (a.setGlobalOfflineNotifications = function (t) {
            ((C = t),
              o("WAWebUserPrefsNotifications").setGlobalOfflineNotifications(
                t,
              ));
          }),
          (a.getGlobalPreviews = function () {
            return b;
          }),
          (a.setGlobalPreviews = function (t) {
            ((b = t), o("WAWebUserPrefsNotifications").setGlobalPreviews(t));
          }),
          (a.getCollapseMuted = function () {
            return v;
          }),
          (a.setCollapseMuted = function (t) {
            ((v = t),
              o("WAWebUserPrefsNotifications").setCollapseMuted(t),
              this.trigger("change:collapseMuted", v));
          }),
          (a.getOutgoingMessageSound = function () {
            return S;
          }),
          (a.setOutgoingMessageSound = function (t) {
            ((S = t),
              o("WAWebUserPrefsNotifications").setOutgoingMessageSound(t));
          }),
          (a.getIgnoreNondirectGroupMsg = function () {
            return r("gkx")("26258") ? !1 : R;
          }),
          (a.setIgnoreNondirectGroupMsg = function (t) {
            r("gkx")("26258") ||
              ((R = t),
              o("WAWebUserPrefsNotifications").setIgnoreNondirectGroupMsg(t));
          }),
          (a.getGlobalNotificationsEnabled = function () {
            return L;
          }),
          (a.setGlobalNotificationsEnabled = function (t) {
            ((L = t),
              o("WAWebUserPrefsNotifications").setGlobalNotificationsEnabled(t),
              this.trigger("change:notificationsEnabled"),
              this.isGranularNotificationsEnabled &&
                this.setGlobalNotifications(t));
          }),
          (a.getGlobalNotificationReactionsEnabled = function () {
            return E;
          }),
          (a.setGlobalNotificationReactionsEnabled = function (t) {
            ((E = t),
              o(
                "WAWebUserPrefsNotifications",
              ).setGlobalNotificationReactionsEnabled(t),
              this.isGranularNotificationsEnabled &&
                (t
                  ? this.globalReactionsMute().unmute()
                  : this.globalReactionsMute().mute({ expiration: -1 })));
          }),
          (a.getGlobalSoundsEnabled = function () {
            return k;
          }),
          (a.setGlobalSoundsEnabled = function (t) {
            ((k = t),
              o("WAWebUserPrefsNotifications").setGlobalSoundsEnabled(t),
              this.isGranularNotificationsEnabled && this.setGlobalSounds(t));
          }),
          (a.getGlobalGroupNotificationsEnabled = function () {
            return I;
          }),
          (a.setGlobalGroupNotificationsEnabled = function (t) {
            ((I = t),
              o(
                "WAWebUserPrefsNotifications",
              ).setGlobalGroupNotificationsEnabled(t),
              this.trigger("change:notificationsEnabled"));
          }),
          (a.getGlobalGroupNotificationReactionsEnabled = function () {
            return T;
          }),
          (a.setGlobalGroupNotificationReactionsEnabled = function (t) {
            ((T = t),
              o(
                "WAWebUserPrefsNotifications",
              ).setGlobalGroupNotificationReactionsEnabled(t));
          }),
          (a.getGlobalGroupSoundsEnabled = function () {
            return D;
          }),
          (a.setGlobalGroupSoundsEnabled = function (t) {
            ((D = t),
              o("WAWebUserPrefsNotifications").setGlobalGroupSoundsEnabled(t));
          }),
          (a.getGlobalStatusNotificationsEnabled = function () {
            return x;
          }),
          (a.setGlobalStatusNotificationsEnabled = function (t) {
            ((x = t),
              o(
                "WAWebUserPrefsNotifications",
              ).setGlobalStatusNotificationsEnabled(t),
              this.trigger("change:notificationsEnabled"));
          }),
          (a.getGlobalStatusNotificationReactionsEnabled = function () {
            return $;
          }),
          (a.setGlobalStatusNotificationReactionsEnabled = function (t) {
            (($ = t),
              o(
                "WAWebUserPrefsNotifications",
              ).setGlobalStatusNotificationReactionsEnabled(t));
          }),
          (a.getGlobalStatusSoundsEnabled = function () {
            return P;
          }),
          (a.setGlobalStatusSoundsEnabled = function (t) {
            ((P = t),
              o("WAWebUserPrefsNotifications").setGlobalStatusSoundsEnabled(t));
          }),
          (a.setAllNotificationsAndReactions = function (t) {
            (this.setGlobalNotificationReactionsEnabled(t),
              this.setGlobalGroupNotificationReactionsEnabled(t),
              this.setGlobalStatusNotificationReactionsEnabled(t),
              this.isGranularNotificationsEnabled
                ? (this.setGlobalNotificationsEnabled(t),
                  this.setGlobalGroupNotificationsEnabled(t),
                  this.setGlobalStatusNotificationsEnabled(t))
                : (this.setGlobalNotifications(t),
                  t
                    ? this.globalReactionsMute().unmute()
                    : this.globalReactionsMute().mute({ expiration: -1 })));
          }),
          n
        );
      })(o("WAWebBaseCollection").BaseCollection);
    ((N.model = o("WAWebMuteModel").Mute),
      (N.cachePolicy = {
        id: o("WAWebUserPrefsKeys").COLLECTIONS_KEYS.MUTE_COLLECTION,
        policy: o("WAWebBaseCachePolicy").CACHE_POLICY.LOAD,
        delay: 1e3,
      }));
    var M = new N();
    function w() {
      return (
        !m &&
        p != null &&
        p <= o("WATimeUtils").unixTimeWithoutClockSkewCorrection()
      );
    }
    function A(e) {
      var t = _;
      return !m && p != null && t != null && e != null && e <= t + g;
    }
    var F = r("WAWebLazyLoadedRetriable")(function () {
      return r("JSResourceForInteraction")("WAWebSettingsSyncBridge")
        .__setRef("WAWebMuteCollection")
        .load();
    }, "SettingsSyncBridge");
    function O() {
      return B.apply(this, arguments);
    }
    function B() {
      return (
        (B = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          try {
            var e = yield F(),
              t = e.sendSettingChange;
            yield t("isCallsNotificationEnabled", !0);
          } catch (e) {
            o("WALogger")
              .ERROR(
                u ||
                  (u = babelHelpers.taggedTemplateLiteralLoose([
                    "Failed to sync call notifications turning back on",
                  ])),
              )
              .catching(r("getErrorSafe")(e))
              .sendLogs("calls-notification-unmute-sync-failed");
          }
        })),
        B.apply(this, arguments)
      );
    }
    function W() {
      f != null && (self.clearTimeout(f), (f = null));
    }
    l.MuteCollection = M;
  },
  98,
);
