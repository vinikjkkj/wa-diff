__d(
  "WAWebCommonParsersParseBusinessProfile",
  [
    "WAWebBizCoexGatingUtils",
    "WAWebBizProfileGatingUtils",
    "WAWebBotTypes",
    "WAWebBusinessProfileTypes",
    "WAWebCTWAGatingUtils",
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
            M = L.maybeChild("longitude");
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
            latitude: N ? parseFloat(N.contentString()) : void 0,
            longitude: M ? parseFloat(M.contentString()) : void 0,
          };
        }
      }
      var w = e.maybeChild("latitude"),
        A = w ? parseFloat(w.contentString()) : void 0,
        F = e.maybeChild("longitude"),
        O = F ? parseFloat(F.contentString()) : void 0,
        B = [];
      e.forEachChildWithTag("website", function (e) {
        B.push({ url: e.contentString() });
      });
      var W;
      if (o("WAWebCTWAGatingUtils").getFmxAgmEnabled()) {
        var q = e.maybeChild("member_since_text");
        q && (W = q.contentString());
      }
      var U, V, H, G;
      if (o("WAWebBizCoexGatingUtils").authorizedAgentsEnabled()) {
        var z = e.maybeChild("authorized_agent");
        if (z) {
          U = z.maybeAttrString("is_authorized_agent") === "true";
          var j = z.maybeChild("parent_company_name");
          V = j ? j.contentString() : void 0;
          var K = z.maybeChild("parent_company_logo_url");
          H = K ? K.contentString() : void 0;
          var Q = z.maybeChild("oba_phone_number");
          G = Q ? Q.contentString() : void 0;
        }
      }
      var X = [],
        Y = e.maybeChild("categories");
      Y &&
        Y.forEachChildWithTag("category", function (e) {
          var t = e.attrString("id");
          X.push({ id: t, localized_display_name: e.contentString() });
        });
      var J,
        Z = e.maybeChild("business_hours");
      if (Z) {
        var ee = Z.maybeAttrString("timezone"),
          te = [];
        (Z.forEachChildWithTag("business_hours_config", function (e) {
          te.push({
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
          (J = { config: te }),
          ee != null && (J.timezone = ee));
      }
      var ne,
        re = e.maybeChild("profile_options");
      if (re) {
        ne = {};
        var oe = re.maybeChild("commerce_experience");
        if (oe) {
          var ae;
          ne.commerce_experience =
            (ae = o("WAWebBusinessProfileTypes").CommerceExperienceTypes.cast(
              oe.contentString(),
            )) != null
              ? ae
              : o("WAWebBusinessProfileTypes").CommerceExperienceTypes.NONE;
        }
        var ie = re.maybeChild("cart_enabled");
        ie && (ne.cart_enabled = ie.contentString() === "true");
        var le = re.maybeChild("shop_url");
        le && (ne.shop_url = le.contentString());
        var se = re.maybeChild("commerce_manager_url");
        se && (ne.commerce_manager_url = se.contentString());
        var ue = re.maybeChild("is_banned");
        ue && (ne.is_banned = ue.contentString() === "true");
        var ce = re.maybeChild("direct_connection");
        ce && (ne.direct_connection = ce.contentString() === "true");
        var de = re.maybeChild("is_profile_edit_disabled");
        de && (ne.is_profile_edit_disabled = de.contentString() === "true");
      }
      var me = e.maybeChild("direct_connection"),
        pe;
      if (me) {
        var _e = me.maybeChild("default_postcode");
        pe = {
          enabled: me.maybeAttrString("enabled") === "true",
          defaultPostcode: _e
            ? {
                code: _e.attrString("code"),
                locationName: _e.attrString("location_name"),
              }
            : void 0,
        };
      }
      var fe = [],
        ge = e.maybeChild("service_areas");
      ge &&
        ge.forEachChildWithTag("service_area", function (e) {
          var t = e.maybeChild("area_radius_meters"),
            n = e.maybeChild("area_center"),
            r = e.maybeChild("area_description");
          if (t && n) {
            var o = n.maybeChild("latitude"),
              a = n.maybeChild("longitude");
            if (o && a) {
              var i;
              fe.push({
                radius: parseFloat(t.contentString()),
                latitude: parseFloat(o.contentString()),
                longitude: parseFloat(a.contentString()),
                areaDescription:
                  (i = r == null ? void 0 : r.contentString()) != null ? i : "",
              });
            }
          }
        });
      var he = e.maybeChild("catalog_status"),
        ye = he ? he.attrString("status") : void 0,
        Ce = [],
        be = e.maybeChild("offerings");
      be &&
        be.forEachChildWithTag("category", function (e) {
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
            Ce.push({ id: t, name: n, offerings: r }));
        });
      var ve = {},
        Se = {},
        Re = !1,
        Le,
        Ee = e.maybeChild("linked_accounts");
      if (Ee) {
        Re = !0;
        var ke = Ee.maybeChild("fb_page");
        if (ke) {
          var Ie = ke.maybeChild("display_name"),
            Te = ke.maybeChild("likes");
          ((ve.display_name = Ie == null ? void 0 : Ie.contentString()),
            (ve.likes = Te == null ? void 0 : Te.contentInt()));
          var De = ke.maybeAttrString("id");
          De != null && (ve.id = De);
        }
        var xe = Ee.maybeChild("ig_professional");
        if (xe) {
          var $e = xe.maybeChild("ig_handle"),
            Pe = xe.maybeChild("followers");
          Se = {
            ig_handle: $e == null ? void 0 : $e.contentString(),
            followers: Pe == null ? void 0 : Pe.contentInt(),
          };
        }
      }
      var Ne = e.maybeChild("cover_photo"),
        Me = Ne
          ? { id: Ne.attrString("id"), url: new URL(Ne.contentString()) }
          : void 0;
      if (o("WAWebBizProfileGatingUtils").isCustomURLViaBizProfileEnabled()) {
        var we = e.maybeChild("custom_url");
        we && (Le = we.contentString());
      }
      var Ae = o("WAWebBotTypes").BizBotAutomatedType.cast(
          (t = e.maybeChild("automated_type")) == null
            ? void 0
            : t.contentString(),
        ),
        Fe = o("WAWebBotTypes").BotWelcomeMsgProtocolModeType.cast(
          (a = e.maybeChild("welcome_message_protocol_mode")) == null
            ? void 0
            : a.contentString(),
        ),
        Oe,
        Be = e.maybeChild("prompts");
      Be && (Oe = s(Be));
      var We =
          (i = e.maybeChild("commands")) == null ||
          (i = i.maybeChild("description")) == null
            ? void 0
            : i.contentString(),
        qe,
        Ue = e.maybeChild("commands");
      (Ue && (qe = u(Ue)),
        !r("gkx")("26258") &&
          n("cr:5664") &&
          n("cr:5664").debugBotConfigs.injectBizBotFields === !0 &&
          ((Fe = o("WAWebBotTypes").BotWelcomeMsgProtocolModeType.BASIC),
          (d =
            "Hello! I'm Midjourney, your personal assistant. I'm here to assist you with anything you might need, from travel information to workout plans, and even caring for your plants. I can even sketch your imagination!"),
          (Oe = [
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
          (We = "Try these commands to get started"),
          (qe = [
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
          B.length === 0 && (B = [{ url: "https://meta.com" }])));
      var Ve = {
        address: c,
        description: d,
        email: _,
        latitude: A,
        longitude: O,
        website: B,
        categories: X,
        business_hours: J,
        catalog_status: ye,
        profile_options: ne,
        fb_page: ve,
        ig_professional: Se,
        profile_is_linked: Re,
        directConnection: pe,
        service_areas: fe.length > 0 ? fe : void 0,
        offerings: Ce.length > 0 ? Ce : void 0,
        cover_photo: Me,
        custom_url: Le,
        prompts: Oe,
        commands: qe,
        commands_description: We,
        automated_type: Ae,
        welcome_message_protocol_mode: Fe,
        member_since_text: W,
        price_tier: g,
        is_authorized_agent: U,
        parent_company_name: V,
        parent_company_logo_url: H,
        oba_phone_number: G,
        google_place_id: h,
        show_google_reviews: y,
        show_google_info: C,
        google_place: b,
      };
      return (
        Object.keys(Ve).forEach(function (e) {
          Ve[e] == null && delete Ve[e];
        }),
        Ve
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
