__d(
  "WAWebCommonParsersParseBusinessProfile",
  [
    "WAWebBizCoexGatingUtils",
    "WAWebBizProfileGatingUtils",
    "WAWebBotTypes",
    "WAWebBusinessProfileTypes",
    "cr:5664",
    "gkx",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t,
        a,
        i,
        l = e.maybeChild("address"),
        c = l ? l.contentString() : void 0,
        d,
        m = e.maybeChild("description");
      m && (d = m.contentString());
      var p = e.maybeChild("email"),
        _ = p ? p.contentString() : void 0,
        f = e.maybeChild("price_tier"),
        g = f ? f.attrString("id") : void 0,
        h,
        y,
        C,
        b;
      if (o("WAWebBizProfileGatingUtils").isGoogleProfileIntegrationEnabled()) {
        var v = e.maybeChild("place_id");
        h = v ? v.contentString() : void 0;
        var S = e.maybeChild("show_google_reviews");
        y = S ? S.contentString() === "true" : void 0;
        var R = e.maybeChild("show_google_info");
        C = R ? R.contentString() === "true" : void 0;
        var L = e.maybeChild("google_place");
        if (L) {
          var E,
            k,
            I,
            T,
            D,
            x = [];
          L.forEachChildWithTag("weekday_hours", function (e) {
            var t = e.contentString();
            t !== "" && x.push(t);
          });
          var $ = L.maybeChild("rating"),
            P = L.maybeChild("user_rating_count"),
            N = L.maybeChild("latitude"),
            M = L.maybeChild("longitude"),
            w = L.maybeChild("google_open_now");
          b = {
            place_name:
              (E = L.maybeChild("place_name")) == null
                ? void 0
                : E.contentString(),
            formatted_address:
              (k = L.maybeChild("formatted_address")) == null
                ? void 0
                : k.contentString(),
            rating: $ ? parseFloat($.contentString()) : void 0,
            user_rating_count: P ? parseInt(P.contentString(), 10) : void 0,
            reviews_uri:
              (I = L.maybeChild("reviews_uri")) == null
                ? void 0
                : I.contentString(),
            google_maps_uri:
              (T = L.maybeChild("google_maps_uri")) == null
                ? void 0
                : T.contentString(),
            website_uri:
              (D = L.maybeChild("website_uri")) == null
                ? void 0
                : D.contentString(),
            weekday_hours: x.length > 0 ? x : void 0,
            google_open_now: w ? w.contentString() === "true" : void 0,
            latitude: N ? parseFloat(N.contentString()) : void 0,
            longitude: M ? parseFloat(M.contentString()) : void 0,
          };
        }
      }
      var A = e.maybeChild("latitude"),
        F = A ? parseFloat(A.contentString()) : void 0,
        O = e.maybeChild("longitude"),
        B = O ? parseFloat(O.contentString()) : void 0,
        W = [];
      e.forEachChildWithTag("website", function (e) {
        W.push({ url: e.contentString() });
      });
      var q,
        U = e.maybeChild("member_since_text");
      U && (q = U.contentString());
      var V, H, G, z;
      if (o("WAWebBizCoexGatingUtils").authorizedAgentsEnabled()) {
        var j = e.maybeChild("authorized_agent");
        if (j) {
          V = j.maybeAttrString("is_authorized_agent") === "true";
          var K = j.maybeChild("parent_company_name");
          H = K ? K.contentString() : void 0;
          var Q = j.maybeChild("parent_company_logo_url");
          G = Q ? Q.contentString() : void 0;
          var X = j.maybeChild("oba_phone_number");
          z = X ? X.contentString() : void 0;
        }
      }
      var Y = [],
        J = e.maybeChild("categories");
      J &&
        J.forEachChildWithTag("category", function (e) {
          var t = e.attrString("id");
          Y.push({ id: t, localized_display_name: e.contentString() });
        });
      var Z,
        ee = e.maybeChild("business_hours");
      if (ee) {
        var te = ee.maybeAttrString("timezone"),
          ne = [];
        (ee.forEachChildWithTag("business_hours_config", function (e) {
          ne.push({
            day_of_week: e.attrString("day_of_week"),
            mode: e.attrString("mode"),
            open_time: e.hasAttr("open_time")
              ? parseInt(e.attrString("open_time"), 10)
              : 0,
            close_time: e.hasAttr("close_time")
              ? parseInt(e.attrString("close_time"), 10)
              : 0,
          });
        }),
          (Z = { config: ne }),
          te != null && (Z.timezone = te));
      }
      var re,
        oe = e.maybeChild("profile_options");
      if (oe) {
        re = {};
        var ae = oe.maybeChild("commerce_experience");
        if (ae) {
          var ie;
          re.commerce_experience =
            (ie = o("WAWebBusinessProfileTypes").CommerceExperienceTypes.cast(
              ae.contentString(),
            )) != null
              ? ie
              : o("WAWebBusinessProfileTypes").CommerceExperienceTypes.NONE;
        }
        var le = oe.maybeChild("cart_enabled");
        le && (re.cart_enabled = le.contentString() === "true");
        var se = oe.maybeChild("shop_url");
        se && (re.shop_url = se.contentString());
        var ue = oe.maybeChild("commerce_manager_url");
        ue && (re.commerce_manager_url = ue.contentString());
        var ce = oe.maybeChild("is_banned");
        ce && (re.is_banned = ce.contentString() === "true");
        var de = oe.maybeChild("direct_connection");
        de && (re.direct_connection = de.contentString() === "true");
        var me = oe.maybeChild("is_profile_edit_disabled");
        me && (re.is_profile_edit_disabled = me.contentString() === "true");
      }
      var pe = e.maybeChild("direct_connection"),
        _e;
      if (pe) {
        var fe = pe.maybeChild("default_postcode");
        _e = {
          enabled: pe.maybeAttrString("enabled") === "true",
          defaultPostcode: fe
            ? {
                code: fe.attrString("code"),
                locationName: fe.attrString("location_name"),
              }
            : void 0,
        };
      }
      var ge = [],
        he = e.maybeChild("service_areas");
      he &&
        he.forEachChildWithTag("service_area", function (e) {
          var t = e.maybeChild("area_radius_meters"),
            n = e.maybeChild("area_center"),
            r = e.maybeChild("area_description");
          if (t && n) {
            var o = n.maybeChild("latitude"),
              a = n.maybeChild("longitude");
            if (o && a) {
              var i;
              ge.push({
                radius: parseFloat(t.contentString()),
                latitude: parseFloat(o.contentString()),
                longitude: parseFloat(a.contentString()),
                areaDescription:
                  (i = r == null ? void 0 : r.contentString()) != null ? i : "",
              });
            }
          }
        });
      var ye = e.maybeChild("catalog_status"),
        Ce = ye ? ye.attrString("status") : void 0,
        be = [],
        ve = e.maybeChild("offerings");
      ve &&
        ve.forEachChildWithTag("category", function (e) {
          var t = e.attrString("id"),
            n = e.attrString("name"),
            r = [];
          (e.forEachChildWithTag("offering", function (e) {
            r.push({
              id: e.attrString("id"),
              localized_display_name: e.contentString(),
              is_offered: e.maybeAttrString("is_offered") === "true",
            });
          }),
            be.push({ id: t, name: n, offerings: r }));
        });
      var Se = {},
        Re = {},
        Le = !1,
        Ee,
        ke = e.maybeChild("linked_accounts");
      if (ke) {
        Le = !0;
        var Ie = ke.maybeChild("fb_page");
        if (Ie) {
          var Te = Ie.maybeChild("display_name"),
            De = Ie.maybeChild("likes");
          ((Se.display_name = Te == null ? void 0 : Te.contentString()),
            (Se.likes = De == null ? void 0 : De.contentInt()));
          var xe = Ie.maybeAttrString("id");
          xe != null && (Se.id = xe);
        }
        var $e = ke.maybeChild("ig_professional");
        if ($e) {
          var Pe = $e.maybeChild("ig_handle"),
            Ne = $e.maybeChild("followers");
          Re = {
            ig_handle: Pe == null ? void 0 : Pe.contentString(),
            followers: Ne == null ? void 0 : Ne.contentInt(),
          };
        }
      }
      var Me = e.maybeChild("cover_photo"),
        we = Me
          ? { id: Me.attrString("id"), url: new URL(Me.contentString()) }
          : void 0;
      if (o("WAWebBizProfileGatingUtils").isCustomURLViaBizProfileEnabled()) {
        var Ae = e.maybeChild("custom_url");
        Ae && (Ee = Ae.contentString());
      }
      var Fe = o("WAWebBotTypes").BizBotAutomatedType.cast(
          (t = e.maybeChild("automated_type")) == null
            ? void 0
            : t.contentString(),
        ),
        Oe = o("WAWebBotTypes").BotWelcomeMsgProtocolModeType.cast(
          (a = e.maybeChild("welcome_message_protocol_mode")) == null
            ? void 0
            : a.contentString(),
        ),
        Be,
        We = e.maybeChild("prompts");
      We && (Be = s(We));
      var qe =
          (i = e.maybeChild("commands")) == null ||
          (i = i.maybeChild("description")) == null
            ? void 0
            : i.contentString(),
        Ue,
        Ve = e.maybeChild("commands");
      (Ve && (Ue = u(Ve)),
        !r("gkx")("26258") &&
          n("cr:5664") &&
          n("cr:5664").debugBotConfigs.injectBizBotFields === !0 &&
          ((Oe = o("WAWebBotTypes").BotWelcomeMsgProtocolModeType.BASIC),
          (d =
            "Hello! I'm Midjourney, your personal assistant. I'm here to assist you with anything you might need, from travel information to workout plans, and even caring for your plants. I can even sketch your imagination!"),
          (Be = [
            { emoji: "\u2728", text: "Create an alien world!" },
            { emoji: "\uD83D\uDD25", text: "Show a future city!" },
            { emoji: "\u2728", text: "Fantasy landscape? Generate now!" },
            {
              emoji: "\uD83D\uDD25",
              text: "Describe a mythical world filled with magical creatures and let the bot generate an image that brings it to life!",
            },
            {
              emoji: "\u2728",
              text: "Picture an enchanted forest with towering trees, sparkling fairies, and vibrant flora, and let the bot create an image that captures its magic!",
            },
            {
              emoji: "\uD83D\uDD25",
              text: "Imagine yourself as a time traveler who has just stepped into an ancient civilization. You find yourself surrounded by towering structures and exotic landscapes that are unfamiliar to you. Take a moment to observe the surroundings, notice the intricate details on the buildings and the unique attire worn by the people. Now, let the bot generate an image that captures the essence of this unexplored world, bringing forth a visual representation that transcends time and space!",
            },
          ]),
          (qe = "Try these commands to get started"),
          (Ue = [
            { description: "Create images with Midjourney", name: "imagine" },
            {
              description: "View and adjust your personal settings",
              name: "settings",
            },
            { description: "Blend images together seamlessly", name: "blend" },
            {
              description: "View information about your profile",
              name: "info",
            },
            {
              description: "Subscribe to the profile for updates",
              name: "subscribe",
            },
          ]),
          W.length === 0 && (W = [{ url: "https://meta.com" }])));
      var He = {
        address: c,
        description: d,
        email: _,
        latitude: F,
        longitude: B,
        website: W,
        categories: Y,
        business_hours: Z,
        catalog_status: Ce,
        profile_options: re,
        fb_page: Se,
        ig_professional: Re,
        profile_is_linked: Le,
        directConnection: _e,
        service_areas: ge.length > 0 ? ge : void 0,
        offerings: be.length > 0 ? be : void 0,
        cover_photo: we,
        custom_url: Ee,
        prompts: Be,
        commands: Ue,
        commands_description: qe,
        automated_type: Fe,
        welcome_message_protocol_mode: Oe,
        member_since_text: q,
        price_tier: g,
        is_authorized_agent: V,
        parent_company_name: H,
        parent_company_logo_url: G,
        oba_phone_number: z,
        google_place_id: h,
        show_google_reviews: y,
        show_google_info: C,
        google_place: b,
      };
      return (
        Object.keys(He).forEach(function (e) {
          He[e] == null && delete He[e];
        }),
        He
      );
    }
    function s(e) {
      var t = [];
      return (
        e.forEachChildWithTag("prompt", function (e) {
          var n,
            r,
            o = e.maybeChild("emoji"),
            a = (n = o == null ? void 0 : o.contentString()) != null ? n : "",
            i = e.maybeChild("text"),
            l = (r = i == null ? void 0 : i.contentString()) != null ? r : "";
          t.push({ emoji: a, text: l });
        }),
        t
      );
    }
    function u(e) {
      var t = [];
      return (
        e.forEachChildWithTag("command", function (e) {
          var n,
            r,
            o = e.maybeChild("name"),
            a = (n = o == null ? void 0 : o.contentString()) != null ? n : "",
            i = e.maybeChild("description"),
            l = (r = i == null ? void 0 : i.contentString()) != null ? r : "";
          t.push({ name: a, description: l });
        }),
        t
      );
    }
    l.default = e;
  },
  98,
);
