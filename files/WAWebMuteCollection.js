__d(
  "WAWebMuteCollection",
  [
    "WALogger",
    "WAWebABProps",
    "WAWebBaseCachePolicy",
    "WAWebBaseCollection",
    "WAWebConnModel",
    "WAWebMuteModel",
    "WAWebUserPrefsKeys",
    "WAWebUserPrefsNotifications",
    "WAWebUserPrefsStore",
    "gkx",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s;
    function u(e) {
      throw new TypeError('"' + e + '" is read-only');
    }
    var c = !0,
      d = !0,
      m = !0,
      p = !1,
      _ = !1,
      f = !1,
      g = !1,
      h = !1,
      y = !1,
      C = !1,
      b = !1,
      v = !0,
      S = !1,
      R = !1,
      L = !0,
      E = !1,
      k = !1,
      I = !0,
      T = (function (t) {
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
              this.setGlobalCallNotifications(
                o("WAWebUserPrefsNotifications").getGlobalCallNotifications(),
              ),
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
            return c;
          }),
          (a.setGlobalSounds = function (t) {
            ((c = t),
              o("WAWebUserPrefsNotifications").setGlobalSounds(t),
              this.isGranularNotificationsEnabled ||
                (this.setGlobalSoundsEnabled(t),
                this.setGlobalGroupSoundsEnabled(t),
                this.setGlobalStatusSoundsEnabled(t)));
          }),
          (a.getGlobalCallRingtone = function () {
            return m;
          }),
          (a.setGlobalCallRingtone = function (t) {
            ((m = t),
              o("WAWebUserPrefsNotifications").setGlobalCallRingtone(t));
          }),
          (a.getGlobalNotifications = function () {
            return p;
          }),
          (a.setGlobalNotifications = function (t) {
            ((p = t),
              o("WAWebUserPrefsNotifications").setGlobalNotifications(t),
              this.isGranularNotificationsEnabled ||
                (this.setGlobalNotificationsEnabled(t),
                this.setGlobalGroupNotificationsEnabled(t),
                this.setGlobalStatusNotificationsEnabled(t)));
          }),
          (a.getGlobalCallNotifications = function () {
            return d;
          }),
          (a.setGlobalCallNotifications = function (t) {
            ((d = t),
              o("WAWebUserPrefsNotifications").setGlobalCallNotifications(t));
          }),
          (a.getGlobalOfflineNotifications = function () {
            return _;
          }),
          (a.setGlobalOfflineNotifications = function (t) {
            ((_ = t),
              o("WAWebUserPrefsNotifications").setGlobalOfflineNotifications(
                t,
              ));
          }),
          (a.getGlobalPreviews = function () {
            return f;
          }),
          (a.setGlobalPreviews = function (t) {
            ((f = t), o("WAWebUserPrefsNotifications").setGlobalPreviews(t));
          }),
          (a.getCollapseMuted = function () {
            return g;
          }),
          (a.setCollapseMuted = function (t) {
            ((g = t),
              o("WAWebUserPrefsNotifications").setCollapseMuted(t),
              this.trigger("change:collapseMuted", g));
          }),
          (a.getOutgoingMessageSound = function () {
            return h;
          }),
          (a.setOutgoingMessageSound = function (t) {
            ((h = t),
              o("WAWebUserPrefsNotifications").setOutgoingMessageSound(t));
          }),
          (a.getIgnoreNondirectGroupMsg = function () {
            return r("gkx")("26258") ? !1 : y;
          }),
          (a.setIgnoreNondirectGroupMsg = function (t) {
            r("gkx")("26258") ||
              ((y = t),
              o("WAWebUserPrefsNotifications").setIgnoreNondirectGroupMsg(t));
          }),
          (a.getGlobalNotificationsEnabled = function () {
            return C;
          }),
          (a.setGlobalNotificationsEnabled = function (t) {
            ((C = t),
              o("WAWebUserPrefsNotifications").setGlobalNotificationsEnabled(t),
              this.trigger("change:notificationsEnabled"),
              this.isGranularNotificationsEnabled &&
                this.setGlobalNotifications(t));
          }),
          (a.getGlobalNotificationReactionsEnabled = function () {
            return b;
          }),
          (a.setGlobalNotificationReactionsEnabled = function (t) {
            ((b = t),
              o(
                "WAWebUserPrefsNotifications",
              ).setGlobalNotificationReactionsEnabled(t),
              this.isGranularNotificationsEnabled &&
                (t
                  ? this.globalReactionsMute().unmute()
                  : this.globalReactionsMute().mute({ expiration: -1 })));
          }),
          (a.getGlobalSoundsEnabled = function () {
            return v;
          }),
          (a.setGlobalSoundsEnabled = function (t) {
            ((v = t),
              o("WAWebUserPrefsNotifications").setGlobalSoundsEnabled(t),
              this.isGranularNotificationsEnabled && this.setGlobalSounds(t));
          }),
          (a.getGlobalGroupNotificationsEnabled = function () {
            return S;
          }),
          (a.setGlobalGroupNotificationsEnabled = function (t) {
            ((S = t),
              o(
                "WAWebUserPrefsNotifications",
              ).setGlobalGroupNotificationsEnabled(t),
              this.trigger("change:notificationsEnabled"));
          }),
          (a.getGlobalGroupNotificationReactionsEnabled = function () {
            return R;
          }),
          (a.setGlobalGroupNotificationReactionsEnabled = function (t) {
            ((R = t),
              o(
                "WAWebUserPrefsNotifications",
              ).setGlobalGroupNotificationReactionsEnabled(t));
          }),
          (a.getGlobalGroupSoundsEnabled = function () {
            return L;
          }),
          (a.setGlobalGroupSoundsEnabled = function (t) {
            ((L = t),
              o("WAWebUserPrefsNotifications").setGlobalGroupSoundsEnabled(t));
          }),
          (a.getGlobalStatusNotificationsEnabled = function () {
            return E;
          }),
          (a.setGlobalStatusNotificationsEnabled = function (t) {
            ((E = t),
              o(
                "WAWebUserPrefsNotifications",
              ).setGlobalStatusNotificationsEnabled(t),
              this.trigger("change:notificationsEnabled"));
          }),
          (a.getGlobalStatusNotificationReactionsEnabled = function () {
            return k;
          }),
          (a.setGlobalStatusNotificationReactionsEnabled = function (t) {
            ((k = t),
              o(
                "WAWebUserPrefsNotifications",
              ).setGlobalStatusNotificationReactionsEnabled(t));
          }),
          (a.getGlobalStatusSoundsEnabled = function () {
            return I;
          }),
          (a.setGlobalStatusSoundsEnabled = function (t) {
            ((I = t),
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
    ((T.model = o("WAWebMuteModel").Mute),
      (T.cachePolicy = {
        id: o("WAWebUserPrefsKeys").COLLECTIONS_KEYS.MUTE_COLLECTION,
        policy: o("WAWebBaseCachePolicy").CACHE_POLICY.LOAD,
        delay: 1e3,
      }));
    var D = new T();
    l.MuteCollection = D;
  },
  98,
);
