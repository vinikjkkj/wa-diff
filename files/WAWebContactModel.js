__d(
  "WAWebContactModel",
  [
    "fbt",
    "WALogger",
    "WATimeUtils",
    "WAWebAIHatchIdentitySync",
    "WAWebAlarm",
    "WAWebApiContact",
    "WAWebBaseModel",
    "WAWebBizBusinessChangeAction",
    "WAWebBizGatingUtils",
    "WAWebBizLabelUtils",
    "WAWebBlocklistCollection",
    "WAWebBlocklistMigration",
    "WAWebBotBaseGating",
    "WAWebBotGating",
    "WAWebBotGroupGatingUtils",
    "WAWebBotUtils",
    "WAWebBusinessProfileCollection",
    "WAWebChatCollection",
    "WAWebConnModel",
    "WAWebContactCollection",
    "WAWebContactGetters",
    "WAWebContactManagementGating",
    "WAWebContactSearchGatingUtils",
    "WAWebContactShortName",
    "WAWebExactSearchMatchResult",
    "WAWebFrontendContactGetters",
    "WAWebFuzzyMatcher",
    "WAWebFuzzySearchMatchResult",
    "WAWebL10N",
    "WAWebL10NAccentFold",
    "WAWebListsGatingUtils",
    "WAWebMetaAiRingAssetResolver",
    "WAWebOptOutListCollection",
    "WAWebPrefixSearchMatchResult",
    "WAWebProfilePicThumbCollection",
    "WAWebSearchMatchStrategies",
    "WAWebTextStatusCollection",
    "WAWebTextStatusGatingUtils",
    "WAWebTextStatusUtils",
    "WAWebUpdateTextStatusForContact",
    "WAWebUsernameGatingUtils",
    "WAWebWid",
    "WAWebWidFactory",
    "err",
    "isStringNullOrEmpty",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u,
      c = 1e3,
      d = (function (t) {
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
              o("WAWebUpdateTextStatusForContact").updateTextStatusForContact(
                this.id,
                (e = o("WAWebTextStatusUtils")).CLEAR_TEXT_STATUS_STRING_VAL,
                e.CLEAR_TEXT_STATUS_EMOJI_VAL,
                e.CLEAR_TEXT_STATUS_EPHEMERAL_DURATION_VAL,
                e.CLEAR_TEXT_STATUS_LAST_UPDATE_TIME_VAL,
              ));
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
                    t * c,
                    this.meTextStatusExpiryTimer,
                  )));
          }),
          (a.initialize = function () {
            var e = this;
            if ((t.prototype.initialize.call(this), !!this.id)) {
              (o("WAWebContactGetters").getIsMe(this) &&
                this.addChild(
                  "status",
                  o("WAWebTextStatusCollection").TextStatusCollection.gadd(
                    this.id,
                  ),
                ),
                o("WAWebContactGetters").getIsMe(this) &&
                  o("WAWebTextStatusGatingUtils").receiveTextStatusEnabled() &&
                  (this.setupStatusExpiration(),
                  this.listenTo(this, "change:textStatusExpiryTs", function () {
                    self.setTimeout(function () {
                      e.setupStatusExpiration();
                    });
                  })),
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
                this.listenTo(this, "change:isBusiness", function () {
                  return o("WAWebBizBusinessChangeAction").handleBusinessChange(
                    e,
                  );
                }),
                o("WAWebContactGetters").getIsMe(this) &&
                  this.listenTo(
                    o("WAWebConnModel").Conn,
                    "change:pushname",
                    function () {
                      e.set({ pushname: o("WAWebConnModel").Conn.pushname });
                    },
                  ),
                this.listenTo(r("WAWebL10N"), "locale_change", function () {
                  e.locale = r("WAWebL10N").getLocale();
                }),
                this.id.isUser() &&
                  (this.updateContactBlocked(),
                  this.updateContactOptedOutOfMarketingMessages()),
                this.listenTo(this, "change:name", this.updateShortName),
                this.listenTo(this, "change:name", this.updateName),
                (this.pendingAction = 0),
                (o("WAWebConnModel").Conn.isSMB ||
                  o("WAWebListsGatingUtils").isListsEnabled()) &&
                  o("WAWebBizLabelUtils").initializeLabels(this));
              var n = this.id;
              if (n.isLid()) {
                var a =
                  this.phoneNumber || o("WAWebApiContact").getPhoneNumber(n);
                a != null && this.copyFieldsFromPnContact(a);
              } else
                this.id.isUser() &&
                  (this.updateLidFields(),
                  this.listenTo(
                    this,
                    "change:name change:statusMute",
                    function () {
                      e.updateLidFields();
                    },
                  ));
              if (this.id.isBot()) {
                if (o("WAWebBotUtils").isManusBot(this.id)) {
                  this.set({ name: o("WAWebBotGating").getManusBotName() });
                  var i = o("WAWebBotGating").getManusBotProfileThumb();
                  i !== "" &&
                    o("WAWebProfilePicThumbCollection")
                      .ProfilePicThumbCollection.gadd(this.id)
                      .set({
                        eurl: i,
                        previewEurl: i,
                        tag: "man",
                        stale: !1,
                        timestamp: Date.now(),
                      });
                } else if (o("WAWebBotUtils").isHatchBot(this.id)) {
                  this.set({ name: o("WAWebBotGating").getHatchBotName() });
                  var l = o("WAWebBotGating").getHatchBotProfileThumb();
                  (l !== "" &&
                    o("WAWebProfilePicThumbCollection")
                      .ProfilePicThumbCollection.gadd(this.id)
                      .set({
                        eurl: l,
                        previewEurl: l,
                        tag: "hat",
                        stale: !1,
                        timestamp: Date.now(),
                      }),
                    o("WAWebAIHatchIdentitySync").syncHatchContactIdentity(
                      this,
                      this.id,
                    ));
                } else {
                  if (this.name) return;
                  if (o("WAWebBotUtils").isMetaAiBot(this.id))
                    this.set({ name: "Meta AI" });
                  else if (
                    o(
                      "WAWebBotGroupGatingUtils",
                    ).isTEEGroupBotParticipantAddEnabled() &&
                    this.id.server === "bot" &&
                    this.id.user ===
                      o("WAWebBotUtils").META_BOT_TEE_FBID_WID.user
                  ) {
                    this.set({ name: "Meta AI" });
                    var u = o(
                      "WAWebMetaAiRingAssetResolver",
                    ).getMetaAiProfileURL();
                    o("WAWebProfilePicThumbCollection")
                      .ProfilePicThumbCollection.gadd(this.id)
                      .set({
                        eurl: u,
                        previewEurl: u,
                        tag: "man",
                        stale: !1,
                        timestamp: Date.now(),
                      });
                  } else this.set({ name: s._(/*BTDS*/ "AI").toString() });
                }
                this.set({ type: "out" });
              }
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
          (a.updateShortName = function () {
            if (
              o("WAWebContactGetters").getIsUser(this) &&
              this.name &&
              !this.shortName
            ) {
              var e = o("WAWebContactShortName").getShortName(this.name);
              e != null && this.set("shortName", e);
            }
          }),
          (a.getCurrentLidContact = function () {
            var e = o("WAWebWidFactory").asUserWidOrThrow(this.id);
            if (e.isLid()) return this;
            var t = o("WAWebApiContact").getCurrentLid(e);
            return t != null
              ? o("WAWebContactCollection").ContactCollection.get(t)
              : null;
          }),
          (a.updateLidFields = function () {
            var e = this.getCurrentLidContact();
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
                  e ||
                    (e = babelHelpers.taggedTemplateLiteralLoose([
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
                e.decPending();
              };
            return (t.then(n, n), this.pendingAction++, t);
          }),
          (a.decPending = function () {
            this.pendingAction > 0
              ? this.pendingAction--
              : (o("WALogger").LOG(
                  u ||
                    (u = babelHelpers.taggedTemplateLiteralLoose([
                      "contact:onPendingActionUpdate pendingAction value is invalid",
                    ])),
                ),
                (this.pendingAction = 0));
          }),
          (a.updateContactBlocked = function () {
            this.id.isUser() &&
              (o("WAWebBlocklistMigration").applyBlocklistV2Rules()
                ? (this.isContactBlocked = this.$Contact$p_2())
                : (this.isContactBlocked = this.$Contact$p_3()));
          }),
          (a.$Contact$p_3 = function () {
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
          (a.$Contact$p_2 = function () {
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
          (a.getIsMarketingMessageThread = function () {
            return this.isMarketingMessageThread;
          }),
          (a.$Contact$p_4 = function () {
            var e = o("WAWebFrontendContactGetters").getUsername(this);
            if (r("isStringNullOrEmpty")(e)) return !1;
            var t = o("WAWebFrontendContactGetters").getSearchName(this);
            if (!r("isStringNullOrEmpty")(t)) return !1;
            var n = o("WAWebFrontendContactGetters").getSearchVerifiedName(
              this,
            );
            return r("isStringNullOrEmpty")(n);
          }),
          (a.$Contact$p_5 = function (t) {
            return t.slice(1).replace(/#.*/, "");
          }),
          (a.$Contact$p_6 = function (t) {
            if (r("isStringNullOrEmpty")(t) || this.$Contact$p_4()) return null;
            var e = o("WAWebContactGetters").getUserid(this);
            if (this.id.isLid()) {
              if (e != null) {
                var n = o("WAWebWidFactory").asUserLidOrThrow(
                    o("WAWebWidFactory").createUserWidOrThrow(e, "lid"),
                  ),
                  a = o("WAWebApiContact").getPhoneNumber(n);
                if (a != null) {
                  var i = a.toString();
                  return i.includes(t) ? i : null;
                }
              }
            } else return e != null && e.includes(t) ? e : null;
            return null;
          }),
          (a.$Contact$p_7 = function (t, n, r) {
            var e = this.$Contact$p_8(
              t,
              n,
              r,
              o("WAWebSearchMatchStrategies").substringMatch,
            );
            return e == null
              ? null
              : {
                  match: e.match,
                  results: e.results.map(function (e) {
                    return new (o(
                      "WAWebExactSearchMatchResult",
                    ).WAWebExactSearchMatchResult)(e.startIndex, e.length);
                  }),
                };
          }),
          (a.$Contact$p_9 = function (t, n, r) {
            var e = this.$Contact$p_8(
              t,
              n,
              r,
              o("WAWebSearchMatchStrategies").wordBoundaryMatch,
            );
            return e == null
              ? null
              : {
                  match: e.match,
                  results: e.results.map(function (e) {
                    return new (o(
                      "WAWebPrefixSearchMatchResult",
                    ).WAWebPrefixSearchMatchResult)(e.startIndex, e.length);
                  }),
                };
          }),
          (a.$Contact$p_8 = function (t, n, a, i) {
            var e = o("WAWebFrontendContactGetters").getSearchName(this);
            if (
              (o("WAWebBizGatingUtils").canDisplayLabel() ||
                o("WAWebListsGatingUtils").isListsEnabled()) &&
              !r("isStringNullOrEmpty")(a)
            ) {
              var l,
                u = o("WAWebFrontendContactGetters").getUsername(this);
              return t &&
                !r("isStringNullOrEmpty")(e) &&
                i(e, t) == null &&
                !r("isStringNullOrEmpty")(u) &&
                i(u, t) == null
                ? null
                : (l = this.labels) != null && l.includes(a)
                  ? {
                      match: a,
                      results: t ? [{ startIndex: 0, length: a.length }] : [],
                    }
                  : null;
            }
            if (!t) return null;
            if (!r("isStringNullOrEmpty")(e)) {
              var c = i(e, t);
              if (c != null) return { match: e, results: c };
            }
            var d = o("WAWebContactGetters").getUserid(this);
            if (
              !r("isStringNullOrEmpty")(d) &&
              d.includes(t) &&
              !this.$Contact$p_4()
            ) {
              var m = d.indexOf(t);
              return {
                match: d,
                results: [{ startIndex: m, length: t.length }],
              };
            }
            var p = this.$Contact$p_6(n);
            if (p != null && n != null) {
              var _ = p.indexOf(n);
              return {
                match: p,
                results: [{ startIndex: _, length: n.length }],
              };
            }
            var f = o("WAWebFrontendContactGetters").getSearchVerifiedName(
              this,
            );
            if (!r("isStringNullOrEmpty")(f)) {
              var g = i(f, t);
              if (g != null) return { match: f, results: g };
            }
            if (this.pushname) {
              var h = i(o("WAWebL10NAccentFold").accentFold(this.pushname), t);
              if (h != null) return { match: this.pushname, results: h };
            }
            var y = this.username;
            if (y != null) {
              var C = o("WAWebL10NAccentFold").accentFold(y),
                b = i(C, t);
              if (
                b != null &&
                o("WAWebUsernameGatingUtils").usernameDisplayedEnabled()
              )
                return { match: y, results: b };
            }
            if (o("WAWebContactGetters").getIsMe(this)) {
              var v = o("WAWebL10NAccentFold").accentFold(
                  s._(/*BTDS*/ "Me").toString(),
                ),
                S = i(v, t);
              if (S != null) return { match: v, results: S };
            }
            return null;
          }),
          (a.$Contact$p_10 = function (t, n, a) {
            if (a < 0 || a > 1)
              throw r("err")(
                "similarityThreshold must be between 0.0 and 1.0, got: " + a,
              );
            if (t.length === 0) return null;
            var e = o("WAWebFuzzyMatcher").fuzzyMatch(
              n,
              t,
              o("WAWebFuzzySearchMatchResult").MAX_ALLOWED_COST,
            );
            return e.isMatch() && e.getSimilarityRating() >= a ? e : null;
          }),
          (a.$Contact$p_11 = function (t) {
            var e = t.split(/\s+/).filter(Boolean);
            if (e.length === 0) return null;
            var n = [
                o("WAWebFrontendContactGetters").getSearchName(this),
                o("WAWebFrontendContactGetters").getSearchVerifiedName(this),
                o("WAWebL10NAccentFold").accentFold(this.pushname),
              ]
                .concat(
                  o("WAWebUsernameGatingUtils").usernameDisplayedEnabled() &&
                    this.username != null
                    ? [o("WAWebL10NAccentFold").accentFold(this.username)]
                    : [],
                )
                .filter(Boolean),
              r =
                1 -
                o(
                  "WAWebContactSearchGatingUtils",
                ).getFuzzySearchDistanceThreshold();
            for (var a of n) {
              var i = [];
              for (var l of e) {
                var s = this.$Contact$p_10(l, a, r);
                if (s == null) break;
                i.push(s);
              }
              if (i.length === e.length) return { match: a, results: i };
            }
            return null;
          }),
          (a.searchMatchPrefix = function (t, n, r) {
            if (
              t.startsWith("@") &&
              o("WAWebUsernameGatingUtils").usernameDisplayedEnabled()
            ) {
              var e,
                a = this.$Contact$p_5(t);
              return (e = this.$Contact$p_9(a, n, r)) != null
                ? e
                : this.$Contact$p_9(t, n, r);
            }
            return this.$Contact$p_9(t, n, r);
          }),
          (a.searchMatchExact = function (t, n, r) {
            if (
              t.startsWith("@") &&
              o("WAWebUsernameGatingUtils").usernameDisplayedEnabled()
            ) {
              var e,
                a = this.$Contact$p_5(t);
              return (e = this.$Contact$p_7(a, n, r)) != null
                ? e
                : this.$Contact$p_7(t, n, r);
            }
            return this.$Contact$p_7(t, n, r);
          }),
          (a.searchMatchFuzzy = function (t) {
            if (
              t.startsWith("@") &&
              o("WAWebUsernameGatingUtils").usernameDisplayedEnabled()
            ) {
              var e,
                n = this.$Contact$p_5(t);
              return (e = this.$Contact$p_11(n)) != null
                ? e
                : this.$Contact$p_11(t);
            }
            return this.$Contact$p_11(t);
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
          (a.setNotMyContact = function () {
            (this.name &&
              (this.set("name", void 0),
              this.set("shortName", void 0),
              this.set("type", "out")),
              this.set("isUsernameContact", !1));
          }),
          (a.getSyncToAddressbook = function () {
            var e;
            return o("WAWebContactManagementGating").contactManagementEnabled()
              ? (e = this.syncToAddressbook) != null
                ? e
                : !0
              : !1;
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
    ((d.Proxy = "contact"), (d.idClass = r("WAWebWid")));
    var m = o("WAWebBaseModel").defineModel(d);
    l.default = m;
  },
  226,
);
