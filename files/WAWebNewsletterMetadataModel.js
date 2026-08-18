__d(
  "WAWebNewsletterMetadataModel",
  [
    "WAWebBaseModel",
    "WAWebClock",
    "WAWebCommonNewsletterEnums",
    "WAWebContactSearchGatingUtils",
    "WAWebExactSearchMatchResult",
    "WAWebFrontendNewsletterMetadataGetters",
    "WAWebFuzzyMatcher",
    "WAWebFuzzySearchMatchResult",
    "WAWebModelUtils",
    "WAWebNewsletterGeosuspendedCountryCollection",
    "WAWebNewsletterMembershipUtil",
    "WAWebNewsletterMessageDeliveryUpdateCollection",
    "WAWebNewsletterMetadataCollection",
    "WAWebNewsletterMetadataGetters",
    "WAWebNewsletterMetricUtils",
    "WAWebNewsletterPendingAdminsCollection",
    "WAWebNewsletterSubscribersCollection",
    "WAWebSearchMatchStrategies",
    "WAWebWid",
  ],
  function (t, n, r, o, a, i, l) {
    var e = (function (e) {
      function t() {
        for (var t, n = arguments.length, a = new Array(n), i = 0; i < n; i++)
          a[i] = arguments[i];
        return (
          (t = e.call.apply(e, [this].concat(a)) || this),
          (t.id = o("WAWebModelUtils").prop()),
          (t.creationTime = o("WAWebModelUtils").prop()),
          (t.name = o("WAWebModelUtils").prop()),
          (t.nameUpdateTime = o("WAWebModelUtils").prop()),
          (t.description = o("WAWebModelUtils").prop()),
          (t.descriptionUpdateTime = o("WAWebModelUtils").prop()),
          (t.handle = o("WAWebModelUtils").prop()),
          (t.inviteCode = o("WAWebModelUtils").prop()),
          (t.size = o("WAWebModelUtils").prop()),
          (t.verified = o("WAWebModelUtils").prop()),
          (t.membershipType = o("WAWebModelUtils").prop()),
          (t.privacy = o("WAWebModelUtils").prop()),
          (t.website = o("WAWebModelUtils").prop()),
          (t.messageDeliveryUpdates = o("WAWebModelUtils").collection(
            r("WAWebNewsletterMessageDeliveryUpdateCollection"),
          )),
          (t.reactionCodesSetting = o("WAWebModelUtils").prop()),
          (t.wamoSubPlanId = o("WAWebModelUtils").prop()),
          (t.wamoSubStatus = o("WAWebModelUtils").prop()),
          (t.statusMetadata = o("WAWebModelUtils").prop()),
          (t.lastFilledStatusServerId = o("WAWebModelUtils").prop()),
          (t.pinnedMessages = o("WAWebModelUtils").prop(function () {
            return [];
          })),
          (t.suspended = o("WAWebModelUtils").prop(!1)),
          (t.statusMute = o("WAWebModelUtils").prop(!1)),
          (t.geosuspended = o("WAWebModelUtils").prop(!1)),
          (t.hasProfilePictureDeletionAlerts = o("WAWebModelUtils").prop(!1)),
          (t.geosuspendedCountries = o("WAWebModelUtils").collection(
            r("WAWebNewsletterGeosuspendedCountryCollection"),
          )),
          (t.capabilities = o("WAWebModelUtils").prop(function () {
            return new Set();
          })),
          (t.adminInsights = o("WAWebModelUtils").session()),
          (t.adminProfile = o("WAWebModelUtils").prop()),
          (t.adminProfilesSettingEnabled = o("WAWebModelUtils").prop(!1)),
          (t.adminCount = o("WAWebModelUtils").prop(1)),
          (t.pendingAdmins = o("WAWebModelUtils").collection(
            r("WAWebNewsletterPendingAdminsCollection"),
          )),
          (t.subscribers = o("WAWebModelUtils").collection(
            r("WAWebNewsletterSubscribersCollection"),
          )),
          (t.terminated = o("WAWebModelUtils").prop(!1)),
          (t.followerActivityMuteExpiration = o("WAWebModelUtils").prop(0)),
          (t.similarNewsletters = o("WAWebModelUtils").session(function () {
            return [];
          })),
          (t.recentlyFollowedFrom = o("WAWebModelUtils").session()),
          (t.showInsightDelta = o("WAWebModelUtils").derived(
            function () {
              return (
                o("WAWebClock").Clock.daysDeltaAbs(this.creationTime) >=
                o("WAWebNewsletterMetricUtils").INSIGHT_DAYS_COVERED
              );
            },
            ["creationTime"],
          )),
          babelHelpers.assertThisInitialized(t) ||
            babelHelpers.assertThisInitialized(t)
        );
      }
      babelHelpers.inheritsLoose(t, e);
      var n = t.prototype;
      return (
        (n.initialize = function () {
          var t = this;
          (e.prototype.initialize.call(this),
            this.listenTo(
              this.subscribers,
              "change add reset set remove",
              function () {
                t.updateAdminCount();
              },
            ));
        }),
        (n.getCollection = function () {
          return r("WAWebNewsletterMetadataCollection");
        }),
        (n.resetRecentlyFollowedFrom = function () {
          this.recentlyFollowedFrom = null;
        }),
        (n.updateAdminCount = function () {
          var e,
            t,
            n =
              (e =
                (t = this.subscribers) == null
                  ? void 0
                  : t.countWhere(function (e) {
                      var t = e.membership;
                      return (
                        t ===
                          o("WAWebCommonNewsletterEnums")
                            .NewsletterMembershipType.Admin ||
                        t ===
                          o("WAWebCommonNewsletterEnums")
                            .NewsletterMembershipType.Owner
                      );
                    })) != null
                ? e
                : 0;
          this.adminCount =
            this.membershipType ===
            o("WAWebCommonNewsletterEnums").NewsletterMembershipType.Owner
              ? n + 1
              : n;
        }),
        (n.setFollowerActivityMuteExpiration = function (t) {
          this.followerActivityMuteExpiration = t;
        }),
        (n.iAmGuest = function () {
          return (
            this.membershipType ===
            o("WAWebCommonNewsletterEnums").NewsletterMembershipType.Guest
          );
        }),
        (n.iAmAdmin = function () {
          return (
            this.membershipType ===
            o("WAWebCommonNewsletterEnums").NewsletterMembershipType.Admin
          );
        }),
        (n.iAmSubscriber = function () {
          return (
            this.membershipType ===
            o("WAWebCommonNewsletterEnums").NewsletterMembershipType.Subscriber
          );
        }),
        (n.iAmOwner = function () {
          return o("WAWebNewsletterMembershipUtil").iAmOwner(this);
        }),
        (n.iAmAdminOrOwner = function () {
          return o("WAWebNewsletterMembershipUtil").iAmAdminOrOwner(this);
        }),
        (n.searchMatchExact = function (t) {
          var e = o("WAWebFrontendNewsletterMetadataGetters").getSearchName(
              this,
            ),
            n = o("WAWebSearchMatchStrategies").substringMatch(e, t);
          return n == null
            ? null
            : {
                match: e,
                results: n.map(function (e) {
                  return new (o(
                    "WAWebExactSearchMatchResult",
                  ).WAWebExactSearchMatchResult)(e.startIndex, e.length);
                }),
              };
        }),
        (n.searchMatchFuzzy = function (t) {
          var e = t.split(/\s+/).filter(Boolean);
          if (e.length === 0) return null;
          var n =
              1 -
              o(
                "WAWebContactSearchGatingUtils",
              ).getFuzzySearchDistanceThreshold(),
            r = o("WAWebFrontendNewsletterMetadataGetters").getSearchName(this),
            a = [];
          for (var i of e) {
            var l = o("WAWebFuzzyMatcher").fuzzyMatch({
              costTolerance: o("WAWebFuzzySearchMatchResult").MAX_ALLOWED_COST,
              input: r,
              query: i,
            });
            if (!l.isMatch() || l.getSimilarityRating() < n) return null;
            a.push(l);
          }
          return { match: r, results: a };
        }),
        (n.delete = function () {
          (e.prototype.delete.call(this),
            o(
              "WAWebNewsletterMetadataGetters",
            ).clearNewsletterMetadataGetterCacheFor(this),
            o(
              "WAWebFrontendNewsletterMetadataGetters",
            ).clearFrontendNewsletterMetadataGetterCacheFor(this));
        }),
        t
      );
    })(o("WAWebBaseModel").BaseModel);
    ((e.Proxy = "newsletterMetadata"), (e.idClass = r("WAWebWid")));
    var s = o("WAWebBaseModel").defineModel(e);
    l.NewsletterMetadata = s;
  },
  98,
);
