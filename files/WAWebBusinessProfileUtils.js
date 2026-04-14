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
      E = function (t) {
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
      },
      k = function (n) {
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
          k = a.offerings,
          I = a.parent_company_logo_url,
          T = a.parent_company_name,
          D = a.price_tier,
          x = a.profile_is_linked,
          $ = a.profile_options,
          P = a.prompts,
          N = a.service_areas,
          M = a.structured_address,
          w = a.welcome_message_protocol_mode,
          A = babelHelpers.objectWithoutPropertiesLoose(a, u),
          F = { id: t };
        return (
          c ? (F.businessHours = p(c)) : (F.businessHours = null),
          S != null &&
            o("WAWebBizGatingUtils").getFmxAgmEnabled() &&
            (F.memberSinceText = S),
          $ && (F.profileOptions = E($)),
          b(a) &&
            ((F.catalogStatus = d),
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
          M
            ? (F.structuredAddress = {
                streetAddress: M.street_address,
                cityId: M.city_id,
                localizedCityName: M.localized_city_name,
                zipCode: M.zip_code,
              })
            : (F.address = r("isStringNullOrEmpty")(l) ? null : l),
          (F.priceTier = D != null ? D : null),
          v && (F.legalEntityDetails = L(v)),
          h &&
            (F.fbPage = {
              displayName: h.display_name,
              likes: h.likes,
              id: h.id,
            }),
          y &&
            (F.igProfessional = {
              handle: y.ig_handle,
              followers: y.followers,
            }),
          x != null && (F.isProfileLinked = !!x),
          g != null && (F.customUrlPath = g),
          (F.automatedType =
            s != null ? s : o("WAWebBotTypes").BizBotAutomatedType.UNKNOWN),
          (F.welcomeMsgProtocolMode =
            w != null
              ? w
              : o("WAWebBotTypes").BotWelcomeMsgProtocolModeType.NONE),
          (F.commandsDescription = _ != null ? _ : null),
          (F.prompts = P != null ? P : null),
          (F.commands = m != null ? m : null),
          (F.coverPhoto = f != null ? { id: f.id, url: f.url } : null),
          N != null && N.length > 0
            ? (F.serviceAreas = N)
            : (F.serviceAreas = null),
          k != null && k.length > 0 ? (F.offerings = k) : (F.offerings = null),
          C != null && (F.isAuthorizedAgent = C),
          T != null && (F.parentCompanyName = T),
          I != null && (F.parentCompanyLogoUrl = I),
          R != null && (F.obaPhoneNumber = R),
          babelHelpers.extends(
            {},
            o("WAWebBusinessProfileModel").DEFAULTS,
            A,
            F,
          )
        );
      },
      I = {
        OPEN: "open",
        CLOSED: "closed",
        OPEN_TODAY: "open_today",
        CLOSED_TODAY: "closed_today",
        OPEN_APPOINTMENT: "open_appointment",
        OPEN_24H: "open_24h",
        UNKNOWN: "unknown",
      };
    function T(e, t) {
      if (e.timezone == null) return { status: "unknown" };
      var n = t || new Date(),
        r = new Date(n.toLocaleString("en-US", { timeZone: e.timezone })),
        a = (n.getTime() - r.getTime()) / 1e3 / 60,
        i = e.config[o("WAWebBusinessProfileTypes").DAYS_OF_WEEK[n.getDay()]];
      if (!i) return { status: I.CLOSED_TODAY };
      var l = i.mode;
      switch (l) {
        case o("WAWebBusinessProfileTypes").BUSINESS_HOUR_MODES.OPEN_24H:
          return { status: I.OPEN_24H };
        case o("WAWebBusinessProfileTypes").BUSINESS_HOUR_MODES
          .APPOINTMENT_ONLY:
          return { status: I.OPEN_APPOINTMENT };
        case o("WAWebBusinessProfileTypes").BUSINESS_HOUR_MODES
          .SPECIFIC_HOURS: {
          var s,
            u,
            c = n.getHours() * 60 + n.getMinutes();
          if (((s = i.hours) == null ? void 0 : s.length) === 1) {
            var d = i.hours[0][0],
              m = i.hours[0][1];
            return c >= d && c <= m
              ? { status: I.OPEN, openUntil: D(a + m) }
              : c <= d
                ? { status: I.CLOSED, opensAt: D(a + d) }
                : { status: I.CLOSED };
          } else if (((u = i.hours) == null ? void 0 : u.length) === 2) {
            var p = i.hours[0][0],
              _ = i.hours[0][1],
              f = i.hours[1][0],
              g = i.hours[1][1];
            return c >= p && c <= _
              ? {
                  status: I.OPEN,
                  openUntil: D(a + _),
                  additionalOpen: D(a + f),
                  additionalClose: D(a + g),
                }
              : c < p
                ? {
                    status: I.CLOSED,
                    opensAt: D(a + p),
                    additionalOpen: D(a + f),
                    additionalClose: D(a + g),
                  }
                : c >= f && c <= g
                  ? { status: I.OPEN, openUntil: D(a + g) }
                  : c < f
                    ? { status: I.CLOSED, opensAt: D(a + f) }
                    : { status: I.CLOSED };
          }
          break;
        }
      }
      return { status: "unknown" };
    }
    function D(e) {
      var t = new Date(),
        n = Math.floor(e / 60);
      return (t.setHours(n), t.setMinutes(e % 60), t.setSeconds(0), t);
    }
    function x(e) {
      var t = T(e);
      switch (t.status) {
        case I.OPEN_24H:
        case I.OPEN_APPOINTMENT:
        case I.OPEN:
          return !0;
        case I.CLOSED:
        case I.CLOSED_TODAY:
        default:
          return !1;
      }
    }
    function $(e) {
      var t = x(e)
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
      (l.parseBusinessProfile = k),
      (l.BUSINESS_OPEN_STATUS = I),
      (l.getBusinessOpenState = T),
      (l.quickReplyHoursStr = $));
  },
  226,
);
