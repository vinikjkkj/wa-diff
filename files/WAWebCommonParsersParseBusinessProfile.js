__d(
  "WAWebCommonParsersParseBusinessProfile",
  [
    "WAWebBizCoexGatingUtils",
    "WAWebBizGatingUtils",
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
        h = e.maybeChild("latitude"),
        y = h ? parseFloat(h.contentString()) : void 0,
        C = e.maybeChild("longitude"),
        b = C ? parseFloat(C.contentString()) : void 0,
        v = [];
      e.forEachChildWithTag("website", function (e) {
        v.push({ url: e.contentString() });
      });
      var S;
      if (o("WAWebBizGatingUtils").getFmxAgmEnabled()) {
        var R = e.maybeChild("member_since_text");
        R && (S = R.contentString());
      }
      var L, E, k, I;
      if (o("WAWebBizCoexGatingUtils").authorizedAgentsEnabled()) {
        var T = e.maybeChild("authorized_agent");
        if (T) {
          L = T.maybeAttrString("is_authorized_agent") === "true";
          var D = T.maybeChild("parent_company_name");
          E = D ? D.contentString() : void 0;
          var x = T.maybeChild("parent_company_logo_url");
          k = x ? x.contentString() : void 0;
          var $ = T.maybeChild("oba_phone_number");
          I = $ ? $.contentString() : void 0;
        }
      }
      var P = [],
        N = e.maybeChild("categories");
      N &&
        N.forEachChildWithTag("category", function (e) {
          var t = e.attrString("id");
          P.push({ id: t, localized_display_name: e.contentString() });
        });
      var M,
        w = e.maybeChild("business_hours");
      if (w) {
        var A = w.maybeAttrString("timezone"),
          F = [];
        (w.forEachChildWithTag("business_hours_config", function (e) {
          F.push({
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
          (M = { config: F }),
          A != null && (M.timezone = A));
      }
      var O,
        B = e.maybeChild("profile_options");
      if (B) {
        O = {};
        var W = B.maybeChild("commerce_experience");
        if (W) {
          var q;
          O.commerce_experience =
            (q = o("WAWebBusinessProfileTypes").CommerceExperienceTypes.cast(
              W.contentString(),
            )) != null
              ? q
              : o("WAWebBusinessProfileTypes").CommerceExperienceTypes.NONE;
        }
        var U = B.maybeChild("cart_enabled");
        U && (O.cart_enabled = U.contentString() === "true");
        var V = B.maybeChild("shop_url");
        V && (O.shop_url = V.contentString());
        var H = B.maybeChild("commerce_manager_url");
        H && (O.commerce_manager_url = H.contentString());
        var G = B.maybeChild("is_banned");
        G && (O.is_banned = G.contentString() === "true");
        var z = B.maybeChild("direct_connection");
        z && (O.direct_connection = z.contentString() === "true");
        var j = B.maybeChild("is_profile_edit_disabled");
        j && (O.is_profile_edit_disabled = j.contentString() === "true");
      }
      var K = e.maybeChild("direct_connection"),
        Q;
      if (K) {
        var X = K.maybeChild("default_postcode");
        Q = {
          enabled: K.maybeAttrString("enabled") === "true",
          defaultPostcode: X
            ? {
                code: X.attrString("code"),
                locationName: X.attrString("location_name"),
              }
            : void 0,
        };
      }
      var Y = [],
        J = e.maybeChild("service_areas");
      J &&
        J.forEachChildWithTag("service_area", function (e) {
          var t = e.maybeChild("area_radius_meters"),
            n = e.maybeChild("area_center"),
            r = e.maybeChild("area_description");
          if (t && n) {
            var o = n.maybeChild("latitude"),
              a = n.maybeChild("longitude");
            if (o && a) {
              var i;
              Y.push({
                radius: parseFloat(t.contentString()),
                latitude: parseFloat(o.contentString()),
                longitude: parseFloat(a.contentString()),
                areaDescription:
                  (i = r == null ? void 0 : r.contentString()) != null ? i : "",
              });
            }
          }
        });
      var Z = e.maybeChild("catalog_status"),
        ee = Z ? Z.attrString("status") : void 0,
        te = [],
        ne = e.maybeChild("offerings");
      ne &&
        ne.forEachChildWithTag("category", function (e) {
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
            te.push({ id: t, name: n, offerings: r }));
        });
      var re = {},
        oe = {},
        ae = !1,
        ie,
        le = e.maybeChild("linked_accounts");
      if (le) {
        ae = !0;
        var se = le.maybeChild("fb_page");
        if (se) {
          var ue = se.maybeChild("display_name"),
            ce = se.maybeChild("likes");
          ((re.display_name = ue == null ? void 0 : ue.contentString()),
            (re.likes = ce == null ? void 0 : ce.contentInt()));
          var de = se.maybeAttrString("id");
          de != null && (re.id = de);
        }
        var me = le.maybeChild("ig_professional");
        if (me) {
          var pe = me.maybeChild("ig_handle"),
            _e = me.maybeChild("followers");
          oe = {
            ig_handle: pe == null ? void 0 : pe.contentString(),
            followers: _e == null ? void 0 : _e.contentInt(),
          };
        }
      }
      var fe = e.maybeChild("cover_photo"),
        ge = fe
          ? { id: fe.attrString("id"), url: new URL(fe.contentString()) }
          : void 0;
      if (o("WAWebBizGatingUtils").isCustomURLViaBizProfileEnabled()) {
        var he = e.maybeChild("custom_url");
        he && (ie = he.contentString());
      }
      var ye = o("WAWebBotTypes").BizBotAutomatedType.cast(
          (t = e.maybeChild("automated_type")) == null
            ? void 0
            : t.contentString(),
        ),
        Ce = o("WAWebBotTypes").BotWelcomeMsgProtocolModeType.cast(
          (a = e.maybeChild("welcome_message_protocol_mode")) == null
            ? void 0
            : a.contentString(),
        ),
        be,
        ve = e.maybeChild("prompts");
      ve && (be = s(ve));
      var Se =
          (i = e.maybeChild("commands")) == null ||
          (i = i.maybeChild("description")) == null
            ? void 0
            : i.contentString(),
        Re,
        Le = e.maybeChild("commands");
      (Le && (Re = u(Le)),
        !r("gkx")("26258") &&
          n("cr:5664") &&
          n("cr:5664").debugBotConfigs.injectBizBotFields === !0 &&
          ((Ce = o("WAWebBotTypes").BotWelcomeMsgProtocolModeType.BASIC),
          (d =
            "Hello! I'm Midjourney, your personal assistant. I'm here to assist you with anything you might need, from travel information to workout plans, and even caring for your plants. I can even sketch your imagination!"),
          (be = [
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
          (Se = "Try these commands to get started"),
          (Re = [
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
          v.length === 0 && (v = [{ url: "https://meta.com" }])));
      var Ee = {
        address: c,
        description: d,
        email: _,
        latitude: y,
        longitude: b,
        website: v,
        categories: P,
        business_hours: M,
        catalog_status: ee,
        profile_options: O,
        fb_page: re,
        ig_professional: oe,
        profile_is_linked: ae,
        directConnection: Q,
        service_areas: Y.length > 0 ? Y : void 0,
        offerings: te.length > 0 ? te : void 0,
        cover_photo: ge,
        custom_url: ie,
        prompts: be,
        commands: Re,
        commands_description: Se,
        automated_type: ye,
        welcome_message_protocol_mode: Ce,
        member_since_text: S,
        price_tier: g,
        is_authorized_agent: L,
        parent_company_name: E,
        parent_company_logo_url: k,
        oba_phone_number: I,
      };
      return (
        Object.keys(Ee).forEach(function (e) {
          Ee[e] == null && delete Ee[e];
        }),
        Ee
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
