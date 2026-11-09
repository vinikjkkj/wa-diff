__d(
  "WAWebCommonParsersParseBusinessProfile",
  [
    "WAWebBizProfileGatingUtils",
    "WAWebBotTypes",
    "WAWebBusinessProfileTypes",
    "WAWebParseProfilePills",
    "cr:17670",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t,
        r,
        a,
        i,
        l = e.maybeChild("address"),
        d = l ? l.contentString() : void 0,
        m,
        p = e.maybeChild("description");
      p && (m = p.contentString());
      var _ = e.maybeChild("email"),
        f = _ ? _.contentString() : void 0,
        g = e.maybeChild("price_tier"),
        h = g ? g.attrString("id") : void 0,
        y,
        C,
        b,
        v;
      if (o("WAWebBizProfileGatingUtils").isGoogleProfileIntegrationEnabled()) {
        var S = e.maybeChild("place_id");
        y = S ? S.contentString() : void 0;
        var R = e.maybeChild("show_google_reviews");
        C = R ? R.contentString() === "true" : void 0;
        var L = e.maybeChild("show_google_info");
        b = L ? L.contentString() === "true" : void 0;
        var E = e.maybeChild("google_place");
        if (E) {
          var k,
            I,
            T,
            D,
            x,
            $ = [];
          E.forEachChildWithTag("weekday_hours", function (e) {
            var t = e.contentString();
            t !== "" && $.push(t);
          });
          var P = E.maybeChild("rating"),
            N = E.maybeChild("user_rating_count"),
            M = E.maybeChild("latitude"),
            w = E.maybeChild("longitude"),
            A = E.maybeChild("google_open_now");
          v = {
            place_name:
              (k = E.maybeChild("place_name")) == null
                ? void 0
                : k.contentString(),
            formatted_address:
              (I = E.maybeChild("formatted_address")) == null
                ? void 0
                : I.contentString(),
            rating: P ? parseFloat(P.contentString()) : void 0,
            user_rating_count: N ? parseInt(N.contentString(), 10) : void 0,
            reviews_uri:
              (T = E.maybeChild("reviews_uri")) == null
                ? void 0
                : T.contentString(),
            google_maps_uri:
              (D = E.maybeChild("google_maps_uri")) == null
                ? void 0
                : D.contentString(),
            website_uri:
              (x = E.maybeChild("website_uri")) == null
                ? void 0
                : x.contentString(),
            weekday_hours: $.length > 0 ? $ : void 0,
            google_open_now: A ? A.contentString() === "true" : void 0,
            latitude: M ? parseFloat(M.contentString()) : void 0,
            longitude: w ? parseFloat(w.contentString()) : void 0,
          };
        }
      }
      var F = e.maybeChild("latitude"),
        O = F ? parseFloat(F.contentString()) : void 0,
        B = e.maybeChild("longitude"),
        W = B ? parseFloat(B.contentString()) : void 0,
        q = [];
      e.forEachChildWithTag("website", function (e) {
        q.push({ url: e.contentString() });
      });
      var U,
        V = e.maybeChild("member_since_text");
      V && (U = V.contentString());
      var H,
        G,
        z,
        j,
        K = e.maybeChild("authorized_agent");
      if (K) {
        H = K.maybeAttrString("is_authorized_agent") === "true";
        var Q = K.maybeChild("parent_company_name");
        G = Q ? Q.contentString() : void 0;
        var X = K.maybeChild("parent_company_logo_url");
        z = X ? X.contentString() : void 0;
        var Y = K.maybeChild("oba_phone_number");
        j = Y ? Y.contentString() : void 0;
      }
      var J = [],
        Z = e.maybeChild("categories");
      Z &&
        Z.forEachChildWithTag("category", function (e) {
          var t = e.attrString("id");
          J.push({ id: t, localized_display_name: e.contentString() });
        });
      var ee,
        te = e.maybeChild("business_hours");
      if (te) {
        var ne = te.maybeAttrString("timezone"),
          re = [];
        (te.forEachChildWithTag("business_hours_config", function (e) {
          re.push({
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
          (ee = { config: re }),
          ne != null && (ee.timezone = ne));
      }
      var oe,
        ae = e.maybeChild("profile_options");
      if (ae) {
        oe = {};
        var ie = ae.maybeChild("commerce_experience");
        if (ie) {
          var le;
          oe.commerce_experience =
            (le = o("WAWebBusinessProfileTypes").CommerceExperienceTypes.cast(
              ie.contentString(),
            )) != null
              ? le
              : o("WAWebBusinessProfileTypes").CommerceExperienceTypes.NONE;
        }
        var se = ae.maybeChild("cart_enabled");
        se && (oe.cart_enabled = se.contentString() === "true");
        var ue = ae.maybeChild("shop_url");
        ue && (oe.shop_url = ue.contentString());
        var ce = ae.maybeChild("commerce_manager_url");
        ce && (oe.commerce_manager_url = ce.contentString());
        var de = ae.maybeChild("is_banned");
        de && (oe.is_banned = de.contentString() === "true");
        var me = ae.maybeChild("direct_connection");
        me && (oe.direct_connection = me.contentString() === "true");
        var pe = ae.maybeChild("is_profile_edit_disabled");
        pe && (oe.is_profile_edit_disabled = pe.contentString() === "true");
        var _e = ae.maybeChild("business_calling");
        _e && (oe.business_calling = s(_e));
      }
      var fe = e.maybeChild("direct_connection"),
        ge;
      if (fe) {
        var he = fe.maybeChild("default_postcode");
        ge = {
          enabled: fe.maybeAttrString("enabled") === "true",
          defaultPostcode: he
            ? {
                code: he.attrString("code"),
                locationName: he.attrString("location_name"),
              }
            : void 0,
        };
      }
      var ye = [],
        Ce = e.maybeChild("service_areas");
      Ce &&
        Ce.forEachChildWithTag("service_area", function (e) {
          var t = e.maybeChild("area_radius_meters"),
            n = e.maybeChild("area_center"),
            r = e.maybeChild("area_description");
          if (t && n) {
            var o = n.maybeChild("latitude"),
              a = n.maybeChild("longitude");
            if (o && a) {
              var i;
              ye.push({
                radius: parseFloat(t.contentString()),
                latitude: parseFloat(o.contentString()),
                longitude: parseFloat(a.contentString()),
                areaDescription:
                  (i = r == null ? void 0 : r.contentString()) != null ? i : "",
              });
            }
          }
        });
      var be = e.maybeChild("catalog_status"),
        ve = be ? be.attrString("status") : void 0,
        Se = [],
        Re = e.maybeChild("offerings");
      Re &&
        Re.forEachChildWithTag("category", function (e) {
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
            Se.push({ id: t, name: n, offerings: r }));
        });
      var Le = {},
        Ee = {},
        ke = !1,
        Ie,
        Te = e.maybeChild("linked_accounts");
      if (Te) {
        ke = !0;
        var De = Te.maybeChild("fb_page");
        if (De) {
          var xe = De.maybeChild("display_name"),
            $e = De.maybeChild("likes");
          ((Le.display_name = xe == null ? void 0 : xe.contentString()),
            (Le.likes = $e == null ? void 0 : $e.contentInt()));
          var Pe = De.maybeAttrString("id");
          Pe != null && (Le.id = Pe);
        }
        var Ne = Te.maybeChild("ig_professional");
        if (Ne) {
          var Me = Ne.maybeChild("ig_handle"),
            we = Ne.maybeChild("followers");
          Ee = {
            ig_handle: Me == null ? void 0 : Me.contentString(),
            followers: we == null ? void 0 : we.contentInt(),
          };
        }
      }
      var Ae = e.maybeChild("cover_photo"),
        Fe = Ae
          ? { id: Ae.attrString("id"), url: new URL(Ae.contentString()) }
          : void 0,
        Oe = e.maybeChild("custom_url");
      Oe && (Ie = Oe.contentString());
      var Be = o("WAWebBotTypes").BizBotAutomatedType.cast(
          (t = e.maybeChild("automated_type")) == null
            ? void 0
            : t.contentString(),
        ),
        We = o("WAWebBotTypes").BotWelcomeMsgProtocolModeType.cast(
          (r = e.maybeChild("welcome_message_protocol_mode")) == null
            ? void 0
            : r.contentString(),
        ),
        qe,
        Ue = e.maybeChild("prompts");
      Ue && (qe = u(Ue));
      var Ve =
          (a = e.maybeChild("commands")) == null ||
          (a = a.maybeChild("description")) == null
            ? void 0
            : a.contentString(),
        He,
        Ge = e.maybeChild("commands");
      (Ge && (He = c(Ge)),
        n("cr:17670") &&
          n("cr:17670").debugBotConfigs.injectBizBotFields === !0 &&
          ((We = o("WAWebBotTypes").BotWelcomeMsgProtocolModeType.BASIC),
          (m =
            "Hello! I'm Midjourney, your personal assistant. I'm here to assist you with anything you might need, from travel information to workout plans, and even caring for your plants. I can even sketch your imagination!"),
          (qe = [
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
          (Ve = "Try these commands to get started"),
          (He = [
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
          q.length === 0 && (q = [{ url: "https://meta.com" }])));
      var ze = {
        address: d,
        description: m,
        email: f,
        latitude: O,
        longitude: W,
        website: q,
        categories: J,
        business_hours: ee,
        catalog_status: ve,
        profile_options: oe,
        fb_page: Le,
        ig_professional: Ee,
        profile_is_linked: ke,
        directConnection: ge,
        service_areas: ye.length > 0 ? ye : void 0,
        offerings: Se.length > 0 ? Se : void 0,
        cover_photo: Fe,
        custom_url: Ie,
        prompts: qe,
        commands: He,
        commands_description: Ve,
        automated_type: Be,
        welcome_message_protocol_mode: We,
        member_since_text: U,
        price_tier: h,
        is_authorized_agent: H,
        parent_company_name: G,
        parent_company_logo_url: z,
        oba_phone_number: j,
        google_place_id: y,
        show_google_reviews: C,
        show_google_info: b,
        google_place: v,
        pills:
          (i = o("WAWebParseProfilePills").parseProfilePills(e)) != null
            ? i
            : void 0,
      };
      return (
        Object.keys(ze).forEach(function (e) {
          ze[e] == null && delete ze[e];
        }),
        ze
      );
    }
    function s(e) {
      var t,
        n,
        r = e.maybeChild("user_initiated_calling"),
        o = r == null ? void 0 : r.maybeChild("call_icon_visibility"),
        a = o == null ? void 0 : o.maybeChild("limit_to_user_countries"),
        i =
          a != null && a.hasContent()
            ? a
                .contentString()
                .split(",")
                .map(function (e) {
                  return e.trim().toUpperCase();
                })
                .filter(function (e) {
                  return e !== "";
                })
            : [];
      return babelHelpers.extends(
        {
          enabled: e.maybeAttrString("enabled") === "true",
          video_calling_enabled:
            (r == null || (t = r.maybeChild("video_calling")) == null
              ? void 0
              : t.maybeAttrString("enabled")) === "true",
          call_icon_visibility:
            (n = o == null ? void 0 : o.maybeAttrInt("visibility")) != null
              ? n
              : 0,
        },
        i.length > 0 ? { limit_to_user_countries: i } : null,
      );
    }
    function u(e) {
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
    function c(e) {
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
