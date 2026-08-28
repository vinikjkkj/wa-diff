__d(
  "AdsInteractiveComponentConstants",
  ["fbt", "AdCampaignDestination", "AdsAPIObjectives", "immutable"],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u,
      c,
      d,
      m,
      p,
      _,
      f,
      g = "1001530549444",
      h = "1001547657418",
      y = (p = r("immutable")).Map(
        ((e = {}),
        (e.question_text = "Poll Question"),
        (e.option_a_text = "option 1"),
        (e.option_b_text = "option 2"),
        (e.theme_color = "FF6F9FFB"),
        e),
      ),
      C = p.Map(
        ((u = {}),
        (u.question_text = "Poll Question"),
        (u.option_a_text = "option 1"),
        (u.option_b_text = "option 2"),
        (u.link_display = "http://displaylink.com"),
        u),
      ),
      b = p.Map(
        ((c = {}),
        (c.question_text = P().toString()),
        (c.option_a_text = N(!0).toString()),
        (c.option_b_text = N(!1).toString()),
        (c.theme_color = "FF6F9FFB"),
        c),
      ),
      v = p.Map(
        ((d = {}),
        (d.x = 0.5),
        (d.y = 0.5),
        (d.width = 0.65),
        (d.height = 1),
        (d.rotation = 0),
        d),
      ),
      S = p.Map(
        ((m = {}),
        (m.x = 0.5),
        (m.y = 0.5),
        (m.width = 0.65),
        (m.height = 0.15313236),
        (m.rotation = 0),
        m),
      ),
      R = "POLL",
      L = "COUNTDOWN",
      E = "CTA_STICKER",
      k = "PRODUCT_TAG",
      I = { value: { link: "", link_format: "VIDEO_LPP" }, type: "LEARN_MORE" },
      T = p.List([
        { platform: "facebook", position: "feed" },
        { platform: "facebook", position: "story" },
      ]),
      D = p.List([
        (_ = r("AdsAPIObjectives")).APP_INSTALLS,
        _.BRAND_AWARENESS,
        _.CONVERSIONS,
        _.LINK_CLICKS,
        _.REACH,
      ]),
      x = p.List([
        (f = r("AdCampaignDestination")).APP,
        f.MESSENGER,
        f.WHATSAPP,
      ]),
      $ = p.List([f.WHATSAPP]);
    function P() {
      return s._(/*BTDS*/ "Which would you choose?");
    }
    function N(e) {
      return e ? s._(/*BTDS*/ "Choice 1") : s._(/*BTDS*/ "Choice 2");
    }
    ((l.WATCH_AND_BROWSE_VIDEO_ID = g),
      (l.WATCH_AND_INSTALL_VIDEO_ID = h),
      (l.DEFAULT_POLL_SPEC = y),
      (l.DEFAULT_POLL_SPEC_WITH_DISPLAY_LINK = C),
      (l.DEFAULT_POLL_SPEC_PANEL_V2 = b),
      (l.DEFAULT_POLL_POSITION_SPEC = v),
      (l.DEFAULT_COUNTDOWN_POSITION_SPEC = S),
      (l.INTERACTIVE_COMPONENT_POLL_TYPE = R),
      (l.INTERACTIVE_COMPONENT_COUNTDOWN_TYPE = L),
      (l.INTERACTIVE_CTA_STICKER = E),
      (l.SHOPPING_PRODUCT_TAG = k),
      (l.DEFAULT_CTA_DATA = I),
      (l.SUPPORTED_PLACEMENTS = T),
      (l.SUPPORTED_OBJECTIVES = D),
      (l.UNSUPPORTED_DESTINATION_FOR_LINK_CLICKS = x),
      (l.UNSUPPORTED_DESTINATION_FOR_CONVERSIONS = $));
  },
  226,
);
