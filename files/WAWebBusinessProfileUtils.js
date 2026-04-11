__d(
  "WAWebBusinessProfileUtils",
  [
    "fbt",
    "WALogger",
    "WAUpperFirst",
    "WAWebBizGatingUtils",
    "WAWebBotTypes",
    "WAWebBusinessProfileModel",
    "WAWebBusinessProfileSMBUserJourneyLogger",
    "WAWebBusinessProfileTypes",
    "WAWebCatalogCollection",
    "WAWebContactCollection",
    "WAWebExternalLink.react",
    "WAWebSmbUtils",
    "isStringNullOrEmpty",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = [
        "address",
        "automated_type",
        "business_hours",
        "catalog_status",
        "commands",
        "commands_description",
        "cover_photo",
        "custom_url",
        "fb_page",
        "ig_professional",
        "is_authorized_agent",
        "legal_entity_details",
        "member_since_text",
        "oba_phone_number",
        "offerings",
        "parent_company_logo_url",
        "parent_company_name",
        "price_tier",
        "profile_is_linked",
        "profile_options",
        "prompts",
        "service_areas",
        "structured_address",
        "welcome_message_protocol_mode",
      ],
      c = "catalog_exists",
      d = "https://business.facebook.com/commerce/";
    function m(e, t) {
      var n,
        r,
        a = (n = e == null ? void 0 : e.trim()) != null ? n : "",
        i = (r = t == null ? void 0 : t.trim()) != null ? r : "";
      return a === i
        ? null
        : a === "" && i !== ""
          ? o("WAWebBusinessProfileSMBUserJourneyLogger").OperationType.ADD
          : a !== "" && i === ""
            ? o("WAWebBusinessProfileSMBUserJourneyLogger").OperationType.REMOVE
            : o("WAWebBusinessProfileSMBUserJourneyLogger").OperationType
                .MODIFY;
    }
    var p = function (t) {
        var e = t.config,
          n = t.timezone,
          r = {};
        return (
          e.forEach(function (e) {
            var t = e.day_of_week,
              n = e.mode;
            if (o("WAWebBusinessProfileTypes").isBusinessHoursDayName(t))
              if (
                n ===
                o("WAWebBusinessProfileTypes").BUSINESS_HOUR_MODES
                  .SPECIFIC_HOURS
              ) {
                var a,
                  i = e.close_time,
                  l = e.open_time;
                (r[t] || (r[t] = { mode: n, hours: [] }),
                  l != null &&
                    i != null &&
                    (a = r[t]) != null &&
                    a.hours &&
                    r[t].hours.push([l, i]));
              } else r[t] = { mode: n };
          }),
          { config: r, timezone: n }
        );
      },
      _ = function (t) {
        var e, n;
        return (
          (t == null || (e = t.profile_options) == null
            ? void 0
            : e.commerce_experience) ===
            o("WAWebBusinessProfileTypes").CommerceExperienceTypes.CATALOG ||
          ((t == null || (n = t.profile_options) == null
            ? void 0
            : n.commerce_experience) ===
            o("WAWebBusinessProfileTypes").CommerceExperienceTypes
              .META_CATALOG &&
            o("WAWebBizGatingUtils").isCatalogVariantsViewingEnabled()) ||
          (t == null ? void 0 : t.catalog_status) === c
        );
      },
      f = function (t) {
        if (t && t instanceof o("WAWebBusinessProfileModel").BusinessProfile) {
          var e, n;
          return (
            ((e = t.profileOptions) == null ? void 0 : e.commerceExperience) ===
              o("WAWebBusinessProfileTypes").CommerceExperienceTypes.CATALOG ||
            (((n = t.profileOptions) == null
              ? void 0
              : n.commerceExperience) ===
              o("WAWebBusinessProfileTypes").CommerceExperienceTypes
                .META_CATALOG &&
              o("WAWebBizGatingUtils").isCatalogVariantsViewingEnabled()) ||
            t.catalogStatus === c
          );
        }
        return _(t);
      },
      g = function (t) {
        var e, n;
        return (
          (t == null || (e = t.profileOptions) == null
            ? void 0
            : e.commerceExperience) ===
            o("WAWebBusinessProfileTypes").CommerceExperienceTypes.SHOP &&
          !!(!(t == null || (n = t.profileOptions) == null) && n.shopURL)
        );
      },
      h = function (t) {
        var e, n;
        return (
          (t == null || (e = t.profileOptions) == null
            ? void 0
            : e.commerceExperience) ===
            o("WAWebBusinessProfileTypes").CommerceExperienceTypes.NONE ||
          (g(t) &&
            !!(t != null && (n = t.profileOptions) != null && n.isBanned))
        );
      },
      y = function (t) {
        var e,
          n = t == null || (e = t.profileOptions) == null ? void 0 : e.shopURL;
        n != null &&
          n !== "" &&
          o("WAWebExternalLink.react").openExternalLink(n);
      },
      C = function (t) {
        var e,
          n =
            t == null || (e = t.profileOptions) == null
              ? void 0
              : e.commerceManagerURL,
          r = n != null && n !== "" ? n : d;
        o("WAWebExternalLink.react").openExternalLink(r);
      },
      b = function (t) {
        return _(t);
      },
      v = function (t) {
        var e = t.email,
          n = t.landline_number,
          o = t.mobile_number,
          a = { email: e };
        return (
          r("isStringNullOrEmpty")(n) || (a.landlineNumber = n),
          r("isStringNullOrEmpty")(o) || (a.mobileNumber = o),
          a
        );
      },
      S = function (t) {
        var e = t.email,
          n = t.landline_number,
          r = t.mobile_number;
        return v({ email: e, landline_number: n, mobile_number: r });
      },
      R = function (t) {
        var e = t.email,
          n = t.landline_number,
          r = t.mobile_number,
          o = t.name,
          a = v({ email: e, landline_number: n, mobile_number: r });
        return babelHelpers.extends({}, a, { name: o });
      },
      L = function (t) {
        var e = t.customer_care_details,
          n = t.entity_name,
          o = t.entity_type,
          a = t.entity_type_custom,
          i = t.grievance_officer_details,
          l = t.is_registered,
          s = { entityName: n, entityType: o, isRegistered: l };
        return (
          r("isStringNullOrEmpty")(a) || (s.entityTypeCustom = a),
          e && (s.customerCareDetails = S(e)),
          i && (s.grievanceOfficerDetails = R(i)),
          s
        );
      },
      E = function (n) {
        var t = n.id,
          a = n.profile,
          i = n.queryCatalog;
        if (!a) return { id: t };
        var l = a.address,
          s = a.automated_type,
          c = a.business_hours,
          d = a.catalog_status,
          m = a.commands,
          _ = a.commands_description,
          f = a.cover_photo,
          g = a.custom_url,
          h = a.fb_page,
          y = a.ig_professional,
          C = a.is_authorized_agent,
          v = a.legal_entity_details,
          S = a.member_since_text,
          R = a.oba_phone_number,
          E = a.offerings,
          k = a.parent_company_logo_url,
          I = a.parent_company_name,
          T = a.price_tier,
          D = a.profile_is_linked,
          x = a.profile_options,
          $ = a.prompts,
          P = a.service_areas,
          N = a.structured_address,
          M = a.welcome_message_protocol_mode,
          w = babelHelpers.objectWithoutPropertiesLoose(a, u),
          A = { id: t };
        return (
          c ? (A.businessHours = p(c)) : (A.businessHours = null),
          S != null &&
            o("WAWebBizGatingUtils").getFmxAgmEnabled() &&
            (A.memberSinceText = S),
          x &&
            ((A.profileOptions = {
              commerceExperience: x.commerce_experience,
              directConnection: x.direct_connection,
            }),
            x.cart_enabled != null &&
              (A.profileOptions.cartEnabled = x.cart_enabled),
            x.shop_url != null && (A.profileOptions.shopURL = x.shop_url),
            x.commerce_manager_url != null &&
              (A.profileOptions.commerceManagerURL = x.commerce_manager_url),
            x.is_banned != null && (A.profileOptions.isBanned = x.is_banned),
            x.is_profile_edit_disabled != null &&
              (A.profileOptions.isProfileEditDisabled =
                x.is_profile_edit_disabled)),
          b(a) &&
            ((A.catalogStatus = d),
            i &&
              o("WAWebCatalogCollection")
                .CatalogCollection.findCarouselCatalog(t)
                .then(function (e) {
                  var n = Array.isArray(e) ? e[0] : e,
                    r = o("WAWebContactCollection").ContactCollection.get(t);
                  r && (r.businessCatalog = n);
                })
                .catch(function (t) {
                  return o("WALogger").WARN(
                    e ||
                      (e = babelHelpers.taggedTemplateLiteralLoose([
                        "Store:BusinessProfile:missing catalog",
                      ])),
                  );
                })),
          N
            ? (A.structuredAddress = {
                streetAddress: N.street_address,
                cityId: N.city_id,
                localizedCityName: N.localized_city_name,
                zipCode: N.zip_code,
              })
            : (A.address = r("isStringNullOrEmpty")(l) ? null : l),
          (A.priceTier = T != null ? T : null),
          v && (A.legalEntityDetails = L(v)),
          h &&
            (A.fbPage = {
              displayName: h.display_name,
              likes: h.likes,
              id: h.id,
            }),
          y &&
            (A.igProfessional = {
              handle: y.ig_handle,
              followers: y.followers,
            }),
          D != null && (A.isProfileLinked = !!D),
          g != null && (A.customUrlPath = g),
          (A.automatedType =
            s != null ? s : o("WAWebBotTypes").BizBotAutomatedType.UNKNOWN),
          (A.welcomeMsgProtocolMode =
            M != null
              ? M
              : o("WAWebBotTypes").BotWelcomeMsgProtocolModeType.NONE),
          (A.commandsDescription = _ != null ? _ : null),
          (A.prompts = $ != null ? $ : null),
          (A.commands = m != null ? m : null),
          (A.coverPhoto = f != null ? { id: f.id, url: f.url } : null),
          P != null && P.length > 0
            ? (A.serviceAreas = P)
            : (A.serviceAreas = null),
          E != null && E.length > 0 ? (A.offerings = E) : (A.offerings = null),
          C != null && (A.isAuthorizedAgent = C),
          I != null && (A.parentCompanyName = I),
          k != null && (A.parentCompanyLogoUrl = k),
          R != null && (A.obaPhoneNumber = R),
          babelHelpers.extends(
            {},
            o("WAWebBusinessProfileModel").DEFAULTS,
            w,
            A,
          )
        );
      },
      k = {
        OPEN: "open",
        CLOSED: "closed",
        OPEN_TODAY: "open_today",
        CLOSED_TODAY: "closed_today",
        OPEN_APPOINTMENT: "open_appointment",
        OPEN_24H: "open_24h",
        UNKNOWN: "unknown",
      };
    function I(e, t) {
      if (e.timezone == null) return { status: "unknown" };
      var n = t || new Date(),
        r = new Date(n.toLocaleString("en-US", { timeZone: e.timezone })),
        a = (n.getTime() - r.getTime()) / 1e3 / 60,
        i = e.config[o("WAWebBusinessProfileTypes").DAYS_OF_WEEK[n.getDay()]];
      if (!i) return { status: k.CLOSED_TODAY };
      var l = i.mode;
      switch (l) {
        case o("WAWebBusinessProfileTypes").BUSINESS_HOUR_MODES.OPEN_24H:
          return { status: k.OPEN_24H };
        case o("WAWebBusinessProfileTypes").BUSINESS_HOUR_MODES
          .APPOINTMENT_ONLY:
          return { status: k.OPEN_APPOINTMENT };
        case o("WAWebBusinessProfileTypes").BUSINESS_HOUR_MODES
          .SPECIFIC_HOURS: {
          var s,
            u,
            c = n.getHours() * 60 + n.getMinutes();
          if (((s = i.hours) == null ? void 0 : s.length) === 1) {
            var d = i.hours[0][0],
              m = i.hours[0][1];
            return c >= d && c <= m
              ? { status: k.OPEN, openUntil: T(a + m) }
              : c <= d
                ? { status: k.CLOSED, opensAt: T(a + d) }
                : { status: k.CLOSED };
          } else if (((u = i.hours) == null ? void 0 : u.length) === 2) {
            var p = i.hours[0][0],
              _ = i.hours[0][1],
              f = i.hours[1][0],
              g = i.hours[1][1];
            return c >= p && c <= _
              ? {
                  status: k.OPEN,
                  openUntil: T(a + _),
                  additionalOpen: T(a + f),
                  additionalClose: T(a + g),
                }
              : c < p
                ? {
                    status: k.CLOSED,
                    opensAt: T(a + p),
                    additionalOpen: T(a + f),
                    additionalClose: T(a + g),
                  }
                : c >= f && c <= g
                  ? { status: k.OPEN, openUntil: T(a + g) }
                  : c < f
                    ? { status: k.CLOSED, opensAt: T(a + f) }
                    : { status: k.CLOSED };
          }
          break;
        }
      }
      return { status: "unknown" };
    }
    function T(e) {
      var t = new Date(),
        n = Math.floor(e / 60);
      return (t.setHours(n), t.setMinutes(e % 60), t.setSeconds(0), t);
    }
    function D(e) {
      var t = I(e);
      switch (t.status) {
        case k.OPEN_24H:
        case k.OPEN_APPOINTMENT:
        case k.OPEN:
          return !0;
        case k.CLOSED:
        case k.CLOSED_TODAY:
        default:
          return !1;
      }
    }
    function x(e) {
      var t = D(e)
          ? s._(/*BTDS*/ "We're currently *open*")
          : s._(/*BTDS*/ "We're currently *closed*"),
        n = s._(/*BTDS*/ "Our business hours are:"),
        a = o("WAWebSmbUtils").getBusinessHours(e, !0),
        i = a
          .map(function (e) {
            return r("WAUpperFirst")(e.day) + ": " + e.hours;
          })
          .join("\n");
      return [t, n, i].join("\n");
    }
    ((l.CATALOG_EXISTS = c),
      (l.getEditOperationType = m),
      (l.hasCatalog = f),
      (l.hasShop = g),
      (l.isShopBanned = h),
      (l.goToShop = y),
      (l.goToCommerceManager = C),
      (l.parseBusinessProfile = E),
      (l.BUSINESS_OPEN_STATUS = k),
      (l.getBusinessOpenState = I),
      (l.quickReplyHoursStr = x));
  },
  226,
);
