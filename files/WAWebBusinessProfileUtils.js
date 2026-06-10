__d(
  "WAWebBusinessProfileUtils",
  [
    "fbt",
    "WALogger",
    "WAUpperFirst",
    "WAWebBizCatalogGatingUtils",
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
        "google_place",
        "google_place_id",
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
        "show_google_info",
        "show_google_reviews",
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
            o(
              "WAWebBizCatalogGatingUtils",
            ).isCatalogVariantsViewingEnabled()) ||
          (t == null ? void 0 : t.catalog_status) === c
        );
      };
    function f(e) {
      if (e && e instanceof o("WAWebBusinessProfileModel").BusinessProfile) {
        var t, n;
        return (
          ((t = e.profileOptions) == null ? void 0 : t.commerceExperience) ===
            o("WAWebBusinessProfileTypes").CommerceExperienceTypes.CATALOG ||
          (((n = e.profileOptions) == null ? void 0 : n.commerceExperience) ===
            o("WAWebBusinessProfileTypes").CommerceExperienceTypes
              .META_CATALOG &&
            o(
              "WAWebBizCatalogGatingUtils",
            ).isCatalogVariantsViewingEnabled()) ||
          e.catalogStatus === c
        );
      }
      return _(e);
    }
    function g(e) {
      var t, n;
      return (
        (e == null || (t = e.profileOptions) == null
          ? void 0
          : t.commerceExperience) ===
          o("WAWebBusinessProfileTypes").CommerceExperienceTypes.SHOP &&
        !!(!(e == null || (n = e.profileOptions) == null) && n.shopURL)
      );
    }
    function h(e) {
      var t, n;
      return (
        (e == null || (t = e.profileOptions) == null
          ? void 0
          : t.commerceExperience) ===
          o("WAWebBusinessProfileTypes").CommerceExperienceTypes.NONE ||
        (g(e) && !!(e != null && (n = e.profileOptions) != null && n.isBanned))
      );
    }
    function y(e) {
      var t = e == null ? void 0 : e.googlePlaceId;
      return t != null && t !== "";
    }
    function C(e) {
      var t,
        n = e == null || (t = e.profileOptions) == null ? void 0 : t.shopURL;
      n != null && n !== "" && o("WAWebExternalLink.react").openExternalLink(n);
    }
    function b(e) {
      var t,
        n =
          e == null || (t = e.profileOptions) == null
            ? void 0
            : t.commerceManagerURL,
        r = n != null && n !== "" ? n : d;
      o("WAWebExternalLink.react").openExternalLink(r);
    }
    var v = function (t) {
        return _(t);
      },
      S = function (t) {
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
      R = function (t) {
        var e = t.email,
          n = t.landline_number,
          r = t.mobile_number;
        return S({ email: e, landline_number: n, mobile_number: r });
      },
      L = function (t) {
        var e = t.email,
          n = t.landline_number,
          r = t.mobile_number,
          o = t.name,
          a = S({ email: e, landline_number: n, mobile_number: r });
        return babelHelpers.extends({}, a, { name: o });
      },
      E = function (t) {
        var e = t.customer_care_details,
          n = t.entity_name,
          o = t.entity_type,
          a = t.entity_type_custom,
          i = t.grievance_officer_details,
          l = t.is_registered,
          s = { entityName: n, entityType: o, isRegistered: l };
        return (
          r("isStringNullOrEmpty")(a) || (s.entityTypeCustom = a),
          e && (s.customerCareDetails = R(e)),
          i && (s.grievanceOfficerDetails = L(i)),
          s
        );
      },
      k = function (t) {
        var e = {
          commerceExperience: t.commerce_experience,
          directConnection: t.direct_connection,
        };
        return (
          t.cart_enabled != null && (e.cartEnabled = t.cart_enabled),
          t.shop_url != null && (e.shopURL = t.shop_url),
          t.commerce_manager_url != null &&
            (e.commerceManagerURL = t.commerce_manager_url),
          t.is_banned != null && (e.isBanned = t.is_banned),
          t.is_profile_edit_disabled != null &&
            (e.isProfileEditDisabled = t.is_profile_edit_disabled),
          e
        );
      };
    function I(t) {
      var n = t.id,
        a = t.profile,
        i = t.queryCatalog;
      if (!a) return { id: n };
      var l = a.address,
        s = a.automated_type,
        c = a.business_hours,
        d = a.catalog_status,
        m = a.commands,
        _ = a.commands_description,
        f = a.cover_photo,
        g = a.custom_url,
        h = a.fb_page,
        y = a.google_place,
        C = a.google_place_id,
        b = a.ig_professional,
        S = a.is_authorized_agent,
        R = a.legal_entity_details,
        L = a.member_since_text,
        I = a.oba_phone_number,
        T = a.offerings,
        D = a.parent_company_logo_url,
        x = a.parent_company_name,
        $ = a.price_tier,
        P = a.profile_is_linked,
        N = a.profile_options,
        M = a.prompts,
        w = a.service_areas,
        A = a.show_google_info,
        F = a.show_google_reviews,
        O = a.structured_address,
        B = a.welcome_message_protocol_mode,
        W = babelHelpers.objectWithoutPropertiesLoose(a, u),
        q = { id: n };
      return (
        c ? (q.businessHours = p(c)) : (q.businessHours = null),
        L != null && (q.memberSinceText = L),
        N && (q.profileOptions = k(N)),
        v(a) &&
          ((q.catalogStatus = d),
          i &&
            o("WAWebCatalogCollection")
              .CatalogCollection.findCarouselCatalog(n)
              .then(function (e) {
                var t = Array.isArray(e) ? e[0] : e,
                  r = o("WAWebContactCollection").ContactCollection.get(n);
                r && (r.businessCatalog = t);
              })
              .catch(function (t) {
                return o("WALogger").WARN(
                  e ||
                    (e = babelHelpers.taggedTemplateLiteralLoose([
                      "Store:BusinessProfile:missing catalog",
                    ])),
                );
              })),
        O
          ? (q.structuredAddress = {
              streetAddress: O.street_address,
              cityId: O.city_id,
              localizedCityName: O.localized_city_name,
              zipCode: O.zip_code,
            })
          : (q.address = r("isStringNullOrEmpty")(l) ? null : l),
        (q.priceTier = $ != null ? $ : null),
        R && (q.legalEntityDetails = E(R)),
        h &&
          (q.fbPage = {
            displayName: h.display_name,
            likes: h.likes,
            id: h.id,
          }),
        b &&
          (q.igProfessional = { handle: b.ig_handle, followers: b.followers }),
        P != null && (q.isProfileLinked = !!P),
        g != null && (q.customUrlPath = g),
        (q.automatedType =
          s != null ? s : o("WAWebBotTypes").BizBotAutomatedType.UNKNOWN),
        (q.welcomeMsgProtocolMode =
          B != null
            ? B
            : o("WAWebBotTypes").BotWelcomeMsgProtocolModeType.NONE),
        (q.commandsDescription = _ != null ? _ : null),
        (q.prompts = M != null ? M : null),
        (q.commands = m != null ? m : null),
        (q.coverPhoto = f != null ? { id: f.id, url: f.url } : null),
        w != null && w.length > 0
          ? (q.serviceAreas = w)
          : (q.serviceAreas = null),
        T != null && T.length > 0 ? (q.offerings = T) : (q.offerings = null),
        S != null && (q.isAuthorizedAgent = S),
        x != null && (q.parentCompanyName = x),
        D != null && (q.parentCompanyLogoUrl = D),
        I != null && (q.obaPhoneNumber = I),
        C != null && (q.googlePlaceId = C),
        F != null && (q.showGoogleReviews = F),
        A != null && (q.showGoogleInfo = A),
        y != null &&
          (q.googlePlace = {
            placeName: y.place_name,
            formattedAddress: y.formatted_address,
            rating: y.rating,
            userRatingCount: y.user_rating_count,
            reviewsUri: y.reviews_uri,
            mapsUri: y.google_maps_uri,
            websiteUri: y.website_uri,
            weekdayHours: y.weekday_hours,
            latitude: y.latitude,
            longitude: y.longitude,
          }),
        babelHelpers.extends({}, o("WAWebBusinessProfileModel").DEFAULTS, W, q)
      );
    }
    var T = {
      OPEN: "open",
      CLOSED: "closed",
      OPEN_TODAY: "open_today",
      CLOSED_TODAY: "closed_today",
      OPEN_APPOINTMENT: "open_appointment",
      OPEN_24H: "open_24h",
      UNKNOWN: "unknown",
    };
    function D(e, t) {
      if (e.timezone == null) return { status: "unknown" };
      var n = t || new Date(),
        r = new Date(n.toLocaleString("en-US", { timeZone: e.timezone })),
        a = (n.getTime() - r.getTime()) / 1e3 / 60,
        i = e.config[o("WAWebBusinessProfileTypes").DAYS_OF_WEEK[n.getDay()]];
      if (!i) return { status: T.CLOSED_TODAY };
      var l = i.mode;
      switch (l) {
        case o("WAWebBusinessProfileTypes").BUSINESS_HOUR_MODES.OPEN_24H:
          return { status: T.OPEN_24H };
        case o("WAWebBusinessProfileTypes").BUSINESS_HOUR_MODES
          .APPOINTMENT_ONLY:
          return { status: T.OPEN_APPOINTMENT };
        case o("WAWebBusinessProfileTypes").BUSINESS_HOUR_MODES
          .SPECIFIC_HOURS: {
          var s,
            u,
            c = n.getHours() * 60 + n.getMinutes();
          if (((s = i.hours) == null ? void 0 : s.length) === 1) {
            var d = i.hours[0][0],
              m = i.hours[0][1];
            return c >= d && c <= m
              ? { status: T.OPEN, openUntil: x(a + m) }
              : c <= d
                ? { status: T.CLOSED, opensAt: x(a + d) }
                : { status: T.CLOSED };
          } else if (((u = i.hours) == null ? void 0 : u.length) === 2) {
            var p = i.hours[0][0],
              _ = i.hours[0][1],
              f = i.hours[1][0],
              g = i.hours[1][1];
            return c >= p && c <= _
              ? {
                  status: T.OPEN,
                  openUntil: x(a + _),
                  additionalOpen: x(a + f),
                  additionalClose: x(a + g),
                }
              : c < p
                ? {
                    status: T.CLOSED,
                    opensAt: x(a + p),
                    additionalOpen: x(a + f),
                    additionalClose: x(a + g),
                  }
                : c >= f && c <= g
                  ? { status: T.OPEN, openUntil: x(a + g) }
                  : c < f
                    ? { status: T.CLOSED, opensAt: x(a + f) }
                    : { status: T.CLOSED };
          }
          break;
        }
      }
      return { status: "unknown" };
    }
    function x(e) {
      var t = new Date(),
        n = Math.floor(e / 60);
      return (t.setHours(n), t.setMinutes(e % 60), t.setSeconds(0), t);
    }
    function $(e) {
      var t = D(e);
      switch (t.status) {
        case T.OPEN_24H:
        case T.OPEN_APPOINTMENT:
        case T.OPEN:
          return !0;
        case T.CLOSED:
        case T.CLOSED_TODAY:
        default:
          return !1;
      }
    }
    function P(e) {
      var t = $(e)
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
      (l.isGoogleLinked = y),
      (l.goToShop = C),
      (l.goToCommerceManager = b),
      (l.parseBusinessProfile = I),
      (l.BUSINESS_OPEN_STATUS = T),
      (l.getBusinessOpenState = D),
      (l.quickReplyHoursStr = P));
  },
  226,
);
