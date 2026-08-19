__d(
  "WAWebBusinessProfileModel",
  [
    "WAWebBaseModel",
    "WAWebBotBaseGating",
    "WAWebBotTypes",
    "WAWebBusinessProfileCollection",
    "WAWebBusinessProfileGetters",
    "WAWebBusinessProfileTypes",
    "WAWebChatCollection",
    "WAWebChatGroupUtils",
    "WAWebContactCollection",
    "WAWebFrontendBusinessProfileGetters",
    "WAWebOrderRequestMsg.flow",
    "WAWebWid",
  ],
  function (t, n, r, o, a, i, l) {
    var e = 3,
      s = (function (e) {
        function t() {
          for (var t, n = arguments.length, r = new Array(n), a = 0; a < n; a++)
            r[a] = arguments[a];
          return (
            (t = e.call.apply(e, [this].concat(r)) || this),
            (t.id = o("WAWebBaseModel").prop()),
            (t.dataSource = o("WAWebBaseModel").prop("placeholder")),
            (t.tag = o("WAWebBaseModel").prop()),
            (t.description = o("WAWebBaseModel").prop()),
            (t.categories = o("WAWebBaseModel").prop()),
            (t.profileOptions = o("WAWebBaseModel").prop()),
            (t.email = o("WAWebBaseModel").prop()),
            (t.website = o("WAWebBaseModel").prop()),
            (t.latitude = o("WAWebBaseModel").prop()),
            (t.longitude = o("WAWebBaseModel").prop()),
            (t.businessHours = o("WAWebBaseModel").prop()),
            (t.catalogStatus = o("WAWebBaseModel").prop()),
            (t.address = o("WAWebBaseModel").prop()),
            (t.priceTier = o("WAWebBaseModel").prop()),
            (t.structuredAddress = o("WAWebBaseModel").prop()),
            (t.serviceAreas = o("WAWebBaseModel").prop()),
            (t.offerings = o("WAWebBaseModel").prop()),
            (t.legalEntityDetails = o("WAWebBaseModel").prop()),
            (t.fbPage = o("WAWebBaseModel").prop()),
            (t.igProfessional = o("WAWebBaseModel").prop()),
            (t.isProfileLinked = o("WAWebBaseModel").prop()),
            (t.directConnection = o("WAWebBaseModel").prop()),
            (t.customUrlPath = o("WAWebBaseModel").prop()),
            (t.isProfileLocked = o("WAWebBaseModel").prop(!0)),
            (t.memberSinceText = o("WAWebBaseModel").prop()),
            (t.isAuthorizedAgent = o("WAWebBaseModel").prop()),
            (t.parentCompanyName = o("WAWebBaseModel").prop()),
            (t.parentCompanyLogoUrl = o("WAWebBaseModel").prop()),
            (t.obaPhoneNumber = o("WAWebBaseModel").prop()),
            (t.googlePlaceId = o("WAWebBaseModel").prop()),
            (t.showGoogleReviews = o("WAWebBaseModel").prop()),
            (t.showGoogleInfo = o("WAWebBaseModel").prop()),
            (t.googlePlace = o("WAWebBaseModel").session()),
            (t.coverPhoto = o("WAWebBaseModel").prop()),
            (t.automatedType = o("WAWebBaseModel").prop(
              o("WAWebBotTypes").BizBotAutomatedType.UNKNOWN,
            )),
            (t.welcomeMsgProtocolMode = o("WAWebBaseModel").prop(
              o("WAWebBotTypes").BotWelcomeMsgProtocolModeType.NONE,
            )),
            (t.prompts = o("WAWebBaseModel").prop()),
            (t.commandsDescription = o("WAWebBaseModel").prop()),
            (t.commands = o("WAWebBaseModel").prop()),
            (t.stale = o("WAWebBaseModel").session(!0)),
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
              this.listenTo(this, "change:automatedType", function () {
                (t.$BusinessProfileImpl$p_1(), t.$BusinessProfileImpl$p_2());
              }),
              this.$BusinessProfileImpl$p_1(),
              this.$BusinessProfileImpl$p_2());
          }),
          (n.markStale = function () {
            ((this.stale = !0),
              this.hasObservers() && this.getCollection().find(this.id));
          }),
          (n.getCollection = function () {
            return o("WAWebBusinessProfileCollection")
              .BusinessProfileCollection;
          }),
          (n.isValid = function () {
            return Array.isArray(this.categories);
          }),
          (n.isBusinessDirectConnection = function () {
            var e, t, n, r;
            return (e =
              (t = (n = this.directConnection) == null ? void 0 : n.enabled) !=
              null
                ? t
                : (r = this.profileOptions) == null
                  ? void 0
                  : r.directConnection) != null
              ? e
              : !1;
          }),
          (n.getCatalogType = function () {
            var e, t;
            return ((e = this.profileOptions) == null
              ? void 0
              : e.commerceExperience) ===
              o("WAWebBusinessProfileTypes").CommerceExperienceTypes
                .META_CATALOG
              ? o("WAWebOrderRequestMsg.flow").CatalogType.SMB_META_CATALOG
              : ((t = this.profileOptions) == null
                    ? void 0
                    : t.commerceExperience) ===
                  o("WAWebBusinessProfileTypes").CommerceExperienceTypes.CATALOG
                ? o("WAWebOrderRequestMsg.flow").CatalogType.NATIVE
                : o("WAWebOrderRequestMsg.flow").CatalogType.UNKNOWN;
          }),
          (n.$BusinessProfileImpl$p_2 = function () {
            if (
              !(
                !o("WAWebBotBaseGating").isBizBot3pEnabled() ||
                !o("WAWebBusinessProfileGetters").getIsBizBot3p(this)
              )
            ) {
              var e = o("WAWebContactCollection").ContactCollection.get(
                this.id,
              );
              e == null || e.updateName();
            }
          }),
          (n.$BusinessProfileImpl$p_1 = function () {
            var e = o("WAWebChatCollection").ChatCollection.getLatestChatForWid(
              this.id,
            );
            e && o("WAWebChatGroupUtils").updateCanSend(e, this);
          }),
          (n.delete = function () {
            (e.prototype.delete.call(this),
              o(
                "WAWebBusinessProfileGetters",
              ).clearBusinessProfileGetterCacheFor(this),
              o(
                "WAWebFrontendBusinessProfileGetters",
              ).clearFrontendBusinessProfileGetterCacheFor(this));
          }),
          t
        );
      })(o("WAWebBaseModel").BaseModel);
    ((s.Proxy = "businessProfile"), (s.idClass = r("WAWebWid")));
    var u = o("WAWebBaseModel").defineModel(s),
      c = {
        description: null,
        email: null,
        website: null,
        latitude: null,
        longitude: null,
      };
    ((l.MAX_BUSINESS_CATEGORIES = e),
      (l.BusinessProfile = u),
      (l.DEFAULTS = c));
  },
  98,
);
