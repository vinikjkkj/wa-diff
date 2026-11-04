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
      N = !1,
      M = !1,
      w = (function (t) {
        function n() {
          return t.apply(this, arguments) || this;
        }
        babelHelpers.inheritsLoose(n, t);
        var a = n.prototype;
        return (
          (a.initializeFromCache = function (t) {
            var e = this;
            ((M = o("WAWebABProps").getABPropConfigValue(
              "wa_web_enable_granular_notifications",
            )),
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
              ),
              (N = !0));
          }),
          (a.isGlobalSettingsRestored = function () {
            return N;
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
              M ||
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
              M ||
                (this.setGlobalNotificationsEnabled(t),
                this.setGlobalGroupNotificationsEnabled(t),
                this.setGlobalStatusNotificationsEnabled(t)));
          }),
          (a.getGlobalCallNotifications = function () {
            return m || F();
          }),
          (a.setGlobalCallNotifications = function (t) {
            (this.$MuteCollectionImpl$p_2(), this.$MuteCollectionImpl$p_3(t));
          }),
          (a.setGlobalCallNotificationsFromSync = function (t, n) {
            (!t && O(n)) || this.setGlobalCallNotifications(t);
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
            U();
            var t = p;
            if (!(m || t == null)) {
              var n = Math.max(
                0,
                (t - o("WATimeUtils").unixTimeWithoutClockSkewCorrection()) *
                  1e3,
              );
              f = self.setTimeout(function () {
                (e.setGlobalCallNotifications(!0), W());
              }, n);
            }
          }),
          (a.$MuteCollectionImpl$p_2 = function () {
            (U(),
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
              M && this.setGlobalNotifications(t));
          }),
          (a.getGlobalNotificationReactionsEnabled = function () {
            return E;
          }),
          (a.setGlobalNotificationReactionsEnabled = function (t) {
            ((E = t),
              o(
                "WAWebUserPrefsNotifications",
              ).setGlobalNotificationReactionsEnabled(t),
              M &&
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
              M && this.setGlobalSounds(t));
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
              M
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
    ((w.model = o("WAWebMuteModel").Mute),
      (w.cachePolicy = {
        id: o("WAWebUserPrefsKeys").COLLECTIONS_KEYS.MUTE_COLLECTION,
        policy: o("WAWebBaseCachePolicy").CACHE_POLICY.LOAD,
        delay: 1e3,
      }));
    var A = new w();
    function F() {
      return (
        !m &&
        p != null &&
        p <= o("WATimeUtils").unixTimeWithoutClockSkewCorrection()
      );
    }
    function O(e) {
      var t = _;
      return !m && p != null && t != null && e != null && e <= t + g;
    }
    var B = r("WAWebLazyLoadedRetriable")(function () {
      return r("JSResourceForInteraction")("WAWebSettingsSyncBridge")
        .__setRef("WAWebMuteCollection")
        .load();
    }, "SettingsSyncBridge");
    function W() {
      return q.apply(this, arguments);
    }
    function q() {
      return (
        (q = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          try {
            var e = yield B(),
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
        q.apply(this, arguments)
      );
    }
    function U() {
      f != null && (self.clearTimeout(f), (f = null));
    }
    l.MuteCollection = A;
  },
  98,
);
