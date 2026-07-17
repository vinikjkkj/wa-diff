__d(
  "WAWebContactModel",
  [
    "fbt",
    "WALogger",
    "WATimeUtils",
    "WAWebABProps",
    "WAWebAIHatchIdentityStore",
    "WAWebAIHatchIdentitySync",
    "WAWebAlarm",
    "WAWebApiContact",
    "WAWebBaseModel",
    "WAWebBizBusinessChangeAction",
    "WAWebBizLabelUtils",
    "WAWebBlocklistCollection",
    "WAWebBlocklistMigration",
    "WAWebBotBaseGating",
    "WAWebBotGating",
    "WAWebBotUtils",
    "WAWebBusinessProfileCollection",
    "WAWebChatCollection",
    "WAWebConnModel",
    "WAWebContactCollection",
    "WAWebContactGetters",
    "WAWebContactSearchMatcher",
    "WAWebContactShortName",
    "WAWebFrontendContactGetters",
    "WAWebL10N",
    "WAWebListsGatingUtils",
    "WAWebMetaAiRingAssetResolver",
    "WAWebOptOutListCollection",
    "WAWebProfilePicThumbCollection",
    "WAWebTextStatusCollection",
    "WAWebTextStatusGatingUtils",
    "WAWebTextStatusUtils",
    "WAWebUpdateTextStatusForContact",
    "WAWebWid",
    "WAWebWidFactory",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u,
      c,
      d = 1e3,
      m = (function (t) {
        function n() {
          for (var e, n = arguments.length, r = new Array(n), a = 0; a < n; a++)
            r[a] = arguments[a];
          return (
            (e = t.call.apply(t, [this].concat(r)) || this),
            (e.id = o("WAWebBaseModel").prop()),
            (e.name = o("WAWebBaseModel").prop()),
            (e.shortName = o("WAWebBaseModel").prop()),
            (e.pushname = o("WAWebBaseModel").prop()),
            (e.type = o("WAWebBaseModel").prop("in")),
            (e.isDeactivated = o("WAWebBaseModel").prop(!1)),
            (e.verifiedName = o("WAWebBaseModel").prop()),
            (e.isBusiness = o("WAWebBaseModel").prop()),
            (e.isEnterprise = o("WAWebBaseModel").prop()),
            (e.isSmb = o("WAWebBaseModel").prop()),
            (e.verifiedLevel = o("WAWebBaseModel").prop()),
            (e.privacyMode = o("WAWebBaseModel").prop()),
            (e.statusMute = o("WAWebBaseModel").prop()),
            (e.parentStatusMute = o("WAWebBaseModel").prop()),
            (e.sectionHeader = o("WAWebBaseModel").prop()),
            (e.labels = o("WAWebBaseModel").prop()),
            (e.isContactSyncCompleted = o("WAWebBaseModel").prop()),
            (e.forcedBusinessUpdateFromServer = o("WAWebBaseModel").prop()),
            (e.disappearingModeDuration = o("WAWebBaseModel").prop()),
            (e.disappearingModeSettingTimestamp = o("WAWebBaseModel").prop()),
            (e.isEphemeralityDisabled = o("WAWebBaseModel").prop()),
            (e.textStatusString = o("WAWebBaseModel").prop()),
            (e.textStatusEmoji = o("WAWebBaseModel").prop()),
            (e.textStatusEphemeralDuration = o("WAWebBaseModel").prop()),
            (e.textStatusLastUpdateTime = o("WAWebBaseModel").prop(
              o("WAWebTextStatusUtils").TEXT_STATUS_NOT_FETCHED,
            )),
            (e.textStatusExpiryTs = o("WAWebBaseModel").prop()),
            (e.requestedPnTimestamp = o("WAWebBaseModel").prop()),
            (e.username = o("WAWebBaseModel").prop()),
            (e.usernameKey = o("WAWebBaseModel").prop()),
            (e.usernameCountryCode = o("WAWebBaseModel").prop()),
            (e.isUsernameContact = o("WAWebBaseModel").prop(!1)),
            (e.externalUserState = o("WAWebBaseModel").prop()),
            (e.syncToAddressbook = o("WAWebBaseModel").prop(!1)),
            (e.isContactBlocked = o("WAWebBaseModel").session(!1)),
            (e.isContactOptedOut = o("WAWebBaseModel").session(!1)),
            (e.isEverOptedOutOfMarketingMessages =
              o("WAWebBaseModel").session(!1)),
            (e.isMarketingMessageThread = o("WAWebBaseModel").session(!1)),
            (e.pendingAction = o("WAWebBaseModel").session()),
            (e.promises = o("WAWebBaseModel").session(function () {
              return {};
            })),
            (e.status = o("WAWebBaseModel").session()),
            (e.profilePicThumb = o("WAWebBaseModel").session()),
            (e.businessProfile = o("WAWebBaseModel").session()),
            (e.commonGroups = o("WAWebBaseModel").session()),
            (e.businessCatalog = o("WAWebBaseModel").session()),
            (e.locale = o("WAWebBaseModel").session()),
            (e.shareOwnPn = o("WAWebBaseModel").session()),
            (e.phoneNumber = o("WAWebBaseModel").session()),
            (e.displayNameLID = o("WAWebBaseModel").session()),
            (e.isHosted = o("WAWebBaseModel").session(!1)),
            (e.isOrHasBeenHosted = o("WAWebBaseModel").session(!1)),
            (e.isFavorite = o("WAWebBaseModel").session(!1)),
            (e.meTextStatusExpiryTimer = o("WAWebBaseModel").session()),
            (e.maybeCommonGroupChatModel = o("WAWebBaseModel").session()),
            (e.canSendMsgWhileTimelocked = o("WAWebBaseModel").session(!0)),
            babelHelpers.assertThisInitialized(e) ||
              babelHelpers.assertThisInitialized(e)
          );
        }
        babelHelpers.inheritsLoose(n, t);
        var a = n.prototype;
        return (
          (a.$Contact$p_1 = function () {
            var e;
            (r("WAWebAlarm").clearTimeout(this.meTextStatusExpiryTimer),
              this.unset(["meTextStatusExpiryTimer"]),
              o("WAWebUpdateTextStatusForContact").updateTextStatusForContact({
                contactId: this.id,
                textString: (e = o("WAWebTextStatusUtils"))
                  .CLEAR_TEXT_STATUS_STRING_VAL,
                emoji: e.CLEAR_TEXT_STATUS_EMOJI_VAL,
                ephemeralDuration: e.CLEAR_TEXT_STATUS_EPHEMERAL_DURATION_VAL,
                newUpdateTime: e.CLEAR_TEXT_STATUS_LAST_UPDATE_TIME_VAL,
                source: "clear-self-expiry",
              }));
          }),
          (a.setupStatusExpiration = function () {
            var e = this,
              t = this.textStatusExpiryTs;
            t != null &&
              (this.meTextStatusExpiryTimer != null &&
                r("WAWebAlarm").clearTimeout(this.meTextStatusExpiryTimer),
              t < o("WATimeUtils").unixTime()
                ? self.setTimeout(function () {
                    e.$Contact$p_1();
                  })
                : (this.meTextStatusExpiryTimer = r(
                    "WAWebAlarm",
                  ).setGlobalTimeout(
                    function () {
                      return e.$Contact$p_1();
                    },
                    t * d,
                    this.meTextStatusExpiryTimer,
                  )));
          }),
          (a.initialize = function () {
            var n = this;
            if ((t.prototype.initialize.call(this), !!this.id)) {
              var a = o("WAWebABProps").getABPropConfigValue(
                "web_optimized_event_handlers",
              );
              (this.id.device != null &&
                o("WALogger")
                  .ERROR(
                    e ||
                      (e = babelHelpers.taggedTemplateLiteralLoose([
                        "[contact] ContactModel created with device wid: ",
                        "",
                      ])),
                    this.id.toLogString(),
                  )
                  .sendLogs("contact-model-device-wid"),
                o("WAWebContactGetters").getIsMe(this) &&
                  this.addChild(
                    "status",
                    o("WAWebTextStatusCollection").TextStatusCollection.gadd(
                      this.id,
                    ),
                  ),
                o("WAWebContactGetters").getIsMe(this) &&
                  o("WAWebTextStatusGatingUtils").receiveTextStatusEnabled() &&
                  (this.setupStatusExpiration(),
                  this.listenTo(
                    this,
                    "change:textStatusExpiryTs",
                    a
                      ? this.$Contact$p_2
                      : function () {
                          self.setTimeout(function () {
                            n.setupStatusExpiration();
                          });
                        },
                  )),
                o("WAWebContactGetters").getIsMe(this) &&
                  this.addChild(
                    "profilePicThumb",
                    o(
                      "WAWebProfilePicThumbCollection",
                    ).ProfilePicThumbCollection.gadd(this.id),
                  ),
                (this.isBusiness ||
                  (o("WAWebContactGetters").getIsMe(this) &&
                    o("WAWebConnModel").Conn.isSMB)) &&
                  this.addChild(
                    "businessProfile",
                    o(
                      "WAWebBusinessProfileCollection",
                    ).BusinessProfileCollection.gadd(this.id),
                  ),
                this.listenTo(
                  this,
                  "change:isBusiness",
                  a
                    ? this.$Contact$p_3
                    : function () {
                        return o(
                          "WAWebBizBusinessChangeAction",
                        ).handleBusinessChange(n);
                      },
                ),
                o("WAWebContactGetters").getIsMe(this) &&
                  this.listenTo(
                    o("WAWebConnModel").Conn,
                    "change:pushname",
                    a
                      ? this.$Contact$p_4
                      : function () {
                          n.set({
                            pushname: o("WAWebConnModel").Conn.pushname,
                          });
                        },
                  ),
                o("WAWebABProps").getABPropConfigValue(
                  "web_contact_collection_locale_listener",
                ) ||
                  this.listenTo(
                    r("WAWebL10N"),
                    "locale_change",
                    a
                      ? this.$Contact$p_5
                      : function () {
                          n.locale = r("WAWebL10N").getLocale();
                        },
                  ),
                this.id.isUser() &&
                  (this.updateContactBlocked(),
                  this.updateContactOptedOutOfMarketingMessages()),
                this.listenTo(this, "change:name", this.$Contact$p_6),
                this.listenTo(this, "change:name", this.updateName),
                (this.pendingAction = 0),
                (o("WAWebConnModel").Conn.isSMB ||
                  o("WAWebListsGatingUtils").isListsEnabled()) &&
                  o("WAWebBizLabelUtils").initializeLabels(this));
              var i = this.id;
              if (i.isLid()) {
                var l =
                  this.phoneNumber || o("WAWebApiContact").getPhoneNumber(i);
                l != null && this.copyFieldsFromPnContact(l);
              } else
                this.id.isUser() &&
                  (this.$Contact$p_7(),
                  this.listenTo(
                    this,
                    "change:name change:statusMute",
                    a
                      ? this.$Contact$p_7
                      : function () {
                          n.$Contact$p_7();
                        },
                  ));
              this.$Contact$p_8();
            }
          }),
          (a.$Contact$p_2 = function () {
            var e = this;
            self.setTimeout(function () {
              e.setupStatusExpiration();
            });
          }),
          (a.$Contact$p_3 = function () {
            o("WAWebBizBusinessChangeAction").handleBusinessChange(this);
          }),
          (a.$Contact$p_4 = function () {
            this.set({ pushname: o("WAWebConnModel").Conn.pushname });
          }),
          (a.$Contact$p_5 = function () {
            this.locale = r("WAWebL10N").getLocale();
          }),
          (a.$Contact$p_8 = function () {
            if (this.id.isBot()) {
              if (o("WAWebBotUtils").isManusBot(this.id)) {
                this.set({ name: o("WAWebBotGating").getManusBotName() });
                var e = o("WAWebBotGating").getManusBotProfileThumb();
                e !== "" &&
                  o("WAWebProfilePicThumbCollection")
                    .ProfilePicThumbCollection.gadd(this.id)
                    .set({
                      eurl: e,
                      previewEurl: e,
                      tag: "man",
                      stale: !1,
                      timestamp: Date.now(),
                    });
              } else if (o("WAWebBotUtils").isHatchBot(this.id)) {
                var t = o(
                    "WAWebAIHatchIdentityStore",
                  ).getHatchInitialIdentity(),
                  n = t.name,
                  r = t.profileThumb;
                (this.set({ name: n }),
                  r !== "" &&
                    o("WAWebProfilePicThumbCollection")
                      .ProfilePicThumbCollection.gadd(this.id)
                      .set({
                        eurl: r,
                        previewEurl: r,
                        tag: "hat",
                        stale: !1,
                        timestamp: Date.now(),
                      }),
                  o("WAWebAIHatchIdentitySync").syncHatchContactIdentity({
                    contact: this,
                    wid: this.id,
                  }));
              } else if (
                o("WAWebBotUtils").isMetaAiBot(this.id) ||
                o("WAWebBotUtils").isWidTeeGroupMetaBotFbidWid(this.id)
              ) {
                this.set({ name: "Meta AI" });
                var a = o("WAWebMetaAiRingAssetResolver").getMetaAiProfileURL();
                o("WAWebProfilePicThumbCollection")
                  .ProfilePicThumbCollection.gadd(this.id)
                  .set({
                    eurl: a,
                    previewEurl: a,
                    tag: "man",
                    stale: !1,
                    timestamp: Date.now(),
                  });
              } else {
                if (this.name) return;
                this.set({ name: s._(/*BTDS*/ "AI").toString() });
              }
              this.set({ type: "out" });
            }
          }),
          (a.updateName = function () {
            var e;
            !o("WAWebFrontendContactGetters").getIsMyContact(this) &&
              o("WAWebBotBaseGating").isBizBot3pEnabled() &&
              ((e = this.businessProfile) == null ? void 0 : e.isBizBot3p) ===
                !0 &&
              this.verifiedName != null &&
              this.set({ name: this.verifiedName });
          }),
          (a.$Contact$p_6 = function () {
            if (
              o("WAWebContactGetters").getIsUser(this) &&
              this.name &&
              !this.shortName
            ) {
              var e = o("WAWebContactShortName").getShortName(this.name);
              e != null && this.set("shortName", e);
            }
          }),
          (a.$Contact$p_9 = function () {
            var e = o("WAWebWidFactory").asUserWidOrThrow(this.id);
            if (e.isLid()) return this;
            var t = o("WAWebApiContact").getCurrentLid(e);
            return t != null
              ? o("WAWebContactCollection").ContactCollection.get(t)
              : null;
          }),
          (a.$Contact$p_7 = function () {
            var e = this.$Contact$p_9();
            e &&
              (e.set({ name: this.name }),
              e.set({ parentStatusMute: this.statusMute }));
          }),
          (a.isActive = function () {
            var e = this.id;
            return e.isLid()
              ? e.equals(o("WAWebApiContact").getLatestLid(e))
              : !0;
          }),
          (a.copyFieldsFromPnContact = function (t) {
            var e = this.getCollection().get(t);
            ((e == null ? void 0 : e.name) != null &&
              this.set({ name: e.name }),
              (e == null ? void 0 : e.statusMute) != null &&
                this.set({ parentStatusMute: e.statusMute }),
              this.set({ phoneNumber: t }));
          }),
          (a.getStatus = function () {
            return (
              r("WAWebWid").user(this.id) ||
                o("WALogger").LOG(
                  u ||
                    (u = babelHelpers.taggedTemplateLiteralLoose([
                      "contact:getStatus for non-user ",
                      "",
                    ])),
                  this.id.toString(),
                ),
              (this.status = o(
                "WAWebTextStatusCollection",
              ).TextStatusCollection.gadd(this.id))
            );
          }),
          (a.getProfilePicThumb = function () {
            return (this.profilePicThumb = o(
              "WAWebProfilePicThumbCollection",
            ).ProfilePicThumbCollection.gadd(this.id));
          }),
          (a.addPendingAction = function (t) {
            var e = this,
              n = function () {
                e.$Contact$p_10();
              };
            return (t.then(n, n), this.pendingAction++, t);
          }),
          (a.$Contact$p_10 = function () {
            this.pendingAction > 0
              ? this.pendingAction--
              : (o("WALogger").LOG(
                  c ||
                    (c = babelHelpers.taggedTemplateLiteralLoose([
                      "contact:onPendingActionUpdate pendingAction value is invalid",
                    ])),
                ),
                (this.pendingAction = 0));
          }),
          (a.updateContactBlocked = function () {
            this.id.isUser() &&
              (o("WAWebBlocklistMigration").applyBlocklistV2Rules()
                ? (this.isContactBlocked = this.$Contact$p_11())
                : (this.isContactBlocked = this.$Contact$p_12()));
          }),
          (a.$Contact$p_12 = function () {
            if (o("WAWebBlocklistCollection").BlocklistCollection.get(this.id))
              return !0;
            if (this.id.isLid() && this.phoneNumber != null)
              return (
                o("WAWebBlocklistCollection").BlocklistCollection.get(
                  this.phoneNumber,
                ) != null
              );
            var e = o("WAWebApiContact").getAlternateUserWid(
                o("WAWebWidFactory").asUserWidOrThrow(this.id),
              ),
              t =
                e != null &&
                o("WAWebBlocklistCollection").BlocklistCollection.get(e) !=
                  null;
            return t;
          }),
          (a.$Contact$p_11 = function () {
            if (this.id.isRegularUserPn()) {
              var e = o("WAWebChatCollection").ChatCollection.get(this.id);
              return (e == null ? void 0 : e.accountLid) == null
                ? !1
                : o("WAWebBlocklistCollection").BlocklistCollection.get(
                    e.accountLid,
                  ) != null;
            }
            return (
              o("WAWebBlocklistCollection").BlocklistCollection.get(this.id) !=
              null
            );
          }),
          (a.updateContactOptedOutOfMarketingMessages = function () {
            if (this.id.isUser()) {
              if (
                o("WAWebOptOutListCollection").OptOutListCollection.get(this.id)
              )
                this.isContactOptedOut = !0;
              else if (this.id.isLid() && this.phoneNumber != null)
                this.isContactOptedOut =
                  o("WAWebOptOutListCollection").OptOutListCollection.get(
                    this.phoneNumber,
                  ) != null;
              else {
                var e = o("WAWebApiContact").getAlternateUserWid(
                    o("WAWebWidFactory").asUserWidOrThrow(this.id),
                  ),
                  t =
                    e != null &&
                    o("WAWebOptOutListCollection").OptOutListCollection.get(
                      e,
                    ) != null;
                this.isContactOptedOut = t;
              }
              this.isContactOptedOut &&
                (this.isEverOptedOutOfMarketingMessages = !0);
            }
          }),
          (a.setIsMarketingMessageThread = function (t) {
            this.isMarketingMessageThread = t;
          }),
          (a.searchMatchPrefix = function (t, n, r) {
            return o("WAWebContactSearchMatcher").searchMatchPrefix(
              this,
              t,
              n,
              r,
            );
          }),
          (a.searchMatchExact = function (t, n, r) {
            return o("WAWebContactSearchMatcher").searchMatchExact(
              this,
              t,
              n,
              r,
            );
          }),
          (a.searchMatchFuzzy = function (t) {
            return o("WAWebContactSearchMatcher").searchMatchFuzzy(this, t);
          }),
          (a.set = function (n, r, a) {
            var e = t.prototype.set.call(this, n, r, a);
            if (typeof n != "string" && r != null && r.merge && e) {
              if (o("WAWebContactGetters").getIsPSA(e) || e.id.isBot())
                return e;
              (!n.name && e.name && (e.unset("name"), e.unset("shortName")),
                !n.verifiedName && e.verifiedName && e.unset("verifiedName"));
            }
            return e;
          }),
          (a.getCollection = function () {
            return o("WAWebContactCollection").ContactCollection;
          }),
          (a.canToggleFavorite = function () {
            return o("WAWebListsGatingUtils").isListsEnabled() ||
              this.isFavorite
              ? !0
              : o("WAWebFrontendContactGetters").getIsMyContact(this) &&
                  !this.id.isBot() &&
                  !o("WAWebContactGetters").getIsMe(this);
          }),
          n
        );
      })(o("WAWebBaseModel").BaseModel);
    ((m.Proxy = "contact"), (m.idClass = r("WAWebWid")));
    var p = o("WAWebBaseModel").defineModel(m);
    l.default = p;
  },
  226,
);
