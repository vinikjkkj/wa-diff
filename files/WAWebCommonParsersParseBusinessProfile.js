__d(
  "WAWebCommonParsersParseBusinessProfile",
  [
    "WAWebBizProfileGatingUtils",
    "WAWebBotTypes",
    "WAWebBusinessProfileTypes",
    "cr:17670",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t,
        r,
        a,
        i = e.maybeChild("address"),
        l = i ? i.contentString() : void 0,
        c,
        d = e.maybeChild("description");
      d && (c = d.contentString());
      var m = e.maybeChild("email"),
        p = m ? m.contentString() : void 0,
        _ = e.maybeChild("price_tier"),
        f = _ ? _.attrString("id") : void 0,
        g,
        h,
        y,
        C;
      if (o("WAWebBizProfileGatingUtils").isGoogleProfileIntegrationEnabled()) {
        var b = e.maybeChild("place_id");
        g = b ? b.contentString() : void 0;
        var v = e.maybeChild("show_google_reviews");
        h = v ? v.contentString() === "true" : void 0;
        var S = e.maybeChild("show_google_info");
        y = S ? S.contentString() === "true" : void 0;
        var R = e.maybeChild("google_place");
        if (R) {
          var L,
            E,
            k,
            I,
            T,
            D = [];
          R.forEachChildWithTag("weekday_hours", function (e) {
            var t = e.contentString();
            t !== "" && D.push(t);
          });
          var x = R.maybeChild("rating"),
            $ = R.maybeChild("user_rating_count"),
            P = R.maybeChild("latitude"),
            N = R.maybeChild("longitude"),
            M = R.maybeChild("google_open_now");
          C = {
            place_name:
              (L = R.maybeChild("place_name")) == null
                ? void 0
                : L.contentString(),
            formatted_address:
              (E = R.maybeChild("formatted_address")) == null
                ? void 0
                : E.contentString(),
            rating: x ? parseFloat(x.contentString()) : void 0,
            user_rating_count: $ ? parseInt($.contentString(), 10) : void 0,
            reviews_uri:
              (k = R.maybeChild("reviews_uri")) == null
                ? void 0
                : k.contentString(),
            google_maps_uri:
              (I = R.maybeChild("google_maps_uri")) == null
                ? void 0
                : I.contentString(),
            website_uri:
              (T = R.maybeChild("website_uri")) == null
                ? void 0
                : T.contentString(),
            weekday_hours: D.length > 0 ? D : void 0,
            google_open_now: M ? M.contentString() === "true" : void 0,
            latitude: P ? parseFloat(P.contentString()) : void 0,
            longitude: N ? parseFloat(N.contentString()) : void 0,
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
      var W,
        q = e.maybeChild("member_since_text");
      q && (W = q.contentString());
      var U,
        V,
        H,
        G,
        z = e.maybeChild("authorized_agent");
      if (z) {
        U = z.maybeAttrString("is_authorized_agent") === "true";
        var j = z.maybeChild("parent_company_name");
        V = j ? j.contentString() : void 0;
        var K = z.maybeChild("parent_company_logo_url");
        H = K ? K.contentString() : void 0;
        var Q = z.maybeChild("oba_phone_number");
        G = Q ? Q.contentString() : void 0;
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
          : void 0,
        we = e.maybeChild("custom_url");
      we && (Le = we.contentString());
      var Ae = o("WAWebBotTypes").BizBotAutomatedType.cast(
          (t = e.maybeChild("automated_type")) == null
            ? void 0
            : t.contentString(),
        ),
        Fe = o("WAWebBotTypes").BotWelcomeMsgProtocolModeType.cast(
          (r = e.maybeChild("welcome_message_protocol_mode")) == null
            ? void 0
            : r.contentString(),
        ),
        Oe,
        Be = e.maybeChild("prompts");
      Be && (Oe = s(Be));
      var We =
          (a = e.maybeChild("commands")) == null ||
          (a = a.maybeChild("description")) == null
            ? void 0
            : a.contentString(),
        qe,
        Ue = e.maybeChild("commands");
      (Ue && (qe = u(Ue)),
        n("cr:17670") &&
          n("cr:17670").debugBotConfigs.injectBizBotFields === !0 &&
          ((Fe = o("WAWebBotTypes").BotWelcomeMsgProtocolModeType.BASIC),
          (c =
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
        address: l,
        description: c,
        email: p,
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
        price_tier: f,
        is_authorized_agent: U,
        parent_company_name: V,
        parent_company_logo_url: H,
        oba_phone_number: G,
        google_place_id: g,
        show_google_reviews: h,
        show_google_info: y,
        google_place: C,
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
