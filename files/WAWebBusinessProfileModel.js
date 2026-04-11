__d(
  "WAWebBusinessProfileModel",
  [
    "WAWebBaseModel",
    "WAWebBotBaseGating",
    "WAWebBotTypes",
    "WAWebBusinessProfileCollection",
    "WAWebBusinessProfileTypes",
    "WAWebChatCollection",
    "WAWebChatGroupUtils",
    "WAWebContactCollection",
    "WAWebOrderRequestMsg.flow",
    "WAWebProductCatalogMetaLinkingGatingUtils",
    "WAWebWid",
  ],
  function (t, n, r, o, a, i, l) {
    var e = "wa.me/",
      s = 3,
      u = (function (t) {
        function n() {
          for (var n, r = arguments.length, a = new Array(r), i = 0; i < r; i++)
            a[i] = arguments[i];
          return (
            (n = t.call.apply(t, [this].concat(a)) || this),
            (n.id = o("WAWebBaseModel").prop()),
            (n.dataSource = o("WAWebBaseModel").prop("placeholder")),
            (n.tag = o("WAWebBaseModel").prop()),
            (n.description = o("WAWebBaseModel").prop()),
            (n.categories = o("WAWebBaseModel").prop()),
            (n.profileOptions = o("WAWebBaseModel").prop()),
            (n.email = o("WAWebBaseModel").prop()),
            (n.website = o("WAWebBaseModel").prop()),
            (n.latitude = o("WAWebBaseModel").prop()),
            (n.longitude = o("WAWebBaseModel").prop()),
            (n.businessHours = o("WAWebBaseModel").prop()),
            (n.catalogStatus = o("WAWebBaseModel").prop()),
            (n.address = o("WAWebBaseModel").prop()),
            (n.priceTier = o("WAWebBaseModel").prop()),
            (n.structuredAddress = o("WAWebBaseModel").prop()),
            (n.serviceAreas = o("WAWebBaseModel").prop()),
            (n.offerings = o("WAWebBaseModel").prop()),
            (n.legalEntityDetails = o("WAWebBaseModel").prop()),
            (n.fbPage = o("WAWebBaseModel").prop()),
            (n.igProfessional = o("WAWebBaseModel").prop()),
            (n.isProfileLinked = o("WAWebBaseModel").prop()),
            (n.directConnection = o("WAWebBaseModel").prop()),
            (n.customUrlPath = o("WAWebBaseModel").prop()),
            (n.isProfileLocked = o("WAWebBaseModel").prop(!0)),
            (n.memberSinceText = o("WAWebBaseModel").prop()),
            (n.isAuthorizedAgent = o("WAWebBaseModel").prop()),
            (n.parentCompanyName = o("WAWebBaseModel").prop()),
            (n.parentCompanyLogoUrl = o("WAWebBaseModel").prop()),
            (n.obaPhoneNumber = o("WAWebBaseModel").prop()),
            (n.customUrl = o("WAWebBaseModel").derived(
              function () {
                var t;
                if (this.customUrlPath != null) t = this.customUrlPath;
                else return null;
                return "" + e + t;
              },
              ["customUrlPath"],
            )),
            (n.coverPhoto = o("WAWebBaseModel").prop()),
            (n.automatedType = o("WAWebBaseModel").prop(
              o("WAWebBotTypes").BizBotAutomatedType.UNKNOWN,
            )),
            (n.welcomeMsgProtocolMode = o("WAWebBaseModel").prop(
              o("WAWebBotTypes").BotWelcomeMsgProtocolModeType.NONE,
            )),
            (n.prompts = o("WAWebBaseModel").prop()),
            (n.commandsDescription = o("WAWebBaseModel").prop()),
            (n.commands = o("WAWebBaseModel").prop()),
            (n.stale = o("WAWebBaseModel").session(!0)),
            (n.isBizBot3p = o("WAWebBaseModel").derived(
              function () {
                return (
                  this.automatedType ===
                  o("WAWebBotTypes").BizBotAutomatedType.FULL_3P
                );
              },
              ["automatedType"],
            )),
            (n.isBizBot1p = o("WAWebBaseModel").derived(
              function () {
                return (
                  this.automatedType ===
                  o("WAWebBotTypes").BizBotAutomatedType.PARTIAL_1P
                );
              },
              ["automatedType"],
            )),
            (n.isCatalogDisabledDueToMetaLinking = o("WAWebBaseModel").derived(
              function () {
                return o(
                  "WAWebProductCatalogMetaLinkingGatingUtils",
                ).shouldDisableCatalogDueToMetaLinkingForProfile(this);
              },
              ["profileOptions"],
            )),
            babelHelpers.assertThisInitialized(n) ||
              babelHelpers.assertThisInitialized(n)
          );
        }
        babelHelpers.inheritsLoose(n, t);
        var r = n.prototype;
        return (
          (r.initialize = function () {
            var e = this;
            (t.prototype.initialize.call(this),
              this.listenTo(this, "change:automatedType", function () {
                (e.$BusinessProfileImpl$p_1(), e.$BusinessProfileImpl$p_2());
              }),
              this.$BusinessProfileImpl$p_1(),
              this.$BusinessProfileImpl$p_2());
          }),
          (r.markStale = function () {
            ((this.stale = !0),
              this.hasObservers() && this.getCollection().find(this.id));
          }),
          (r.getCollection = function () {
            return o("WAWebBusinessProfileCollection")
              .BusinessProfileCollection;
          }),
          (r.isValid = function () {
            return Array.isArray(this.categories);
          }),
          (r.isBusinessDirectConnection = function () {
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
          (r.getCatalogType = function () {
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
          (r.$BusinessProfileImpl$p_2 = function () {
            if (
              !(
                !o("WAWebBotBaseGating").isBizBot3pEnabled() || !this.isBizBot3p
              )
            ) {
              var e = o("WAWebContactCollection").ContactCollection.get(
                this.id,
              );
              e == null || e.updateName();
            }
          }),
          (r.$BusinessProfileImpl$p_1 = function () {
            var e = o("WAWebChatCollection").ChatCollection.getLatestChatForWid(
              this.id,
            );
            e && o("WAWebChatGroupUtils").updateCanSend(e, this);
          }),
          n
        );
      })(o("WAWebBaseModel").BaseModel);
    ((u.Proxy = "businessProfile"), (u.idClass = r("WAWebWid")));
    var c = o("WAWebBaseModel").defineModel(u),
      d = {
        description: null,
        email: null,
        website: null,
        latitude: null,
        longitude: null,
      };
    ((l.BUSINESS_URL_DOMAIN = e),
      (l.MAX_BUSINESS_CATEGORIES = s),
      (l.BusinessProfile = c),
      (l.DEFAULTS = d));
  },
  98,
);
