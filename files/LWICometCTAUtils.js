__d(
  "LWICometCTAUtils",
  [
    "CallToActionTypes",
    "FBLogger",
    "LWICometCTAEditorNeedsOverrideType",
    "LWICometCTALinkUtils",
    "LWICometMessagingAppsSectionConstants",
    "enumUtils",
    "getJSEnumSafe",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      if (e == null) return null;
      if (e.object_story_id != null || e.instagram_story_id != null) {
        var n;
        return (n = e.call_to_action) != null ? n : null;
      }
      if (t != null) {
        var o,
          a = (o = t.call_to_actions) == null ? void 0 : o[0];
        if (a != null) {
          var i,
            l,
            s = { type: a.type, value: a.value },
            u =
              (i = t.link_urls) == null || (i = i[0]) == null
                ? void 0
                : i.website_url;
          return (
            ((l = s.value) == null ? void 0 : l.link) == null &&
              t.images != null &&
              t.images.length > 0 &&
              u != null &&
              r("LWICometCTAEditorNeedsOverrideType").cast(s.type) == null &&
              (s = {
                type: s.type,
                value: babelHelpers.extends({}, s.value, { link: u }),
              }),
            s
          );
        }
        return null;
      }
      var c = e.object_story_spec;
      if (c != null) {
        var d,
          m,
          p,
          _,
          f,
          g,
          h,
          y,
          C,
          b,
          v =
            (d =
              (m =
                (p =
                  (_ =
                    c == null || (f = c.link_data) == null
                      ? void 0
                      : f.call_to_action) != null
                    ? _
                    : c == null || (g = c.video_data) == null
                      ? void 0
                      : g.call_to_action) != null
                  ? p
                  : c == null || (h = c.template_data) == null
                    ? void 0
                    : h.call_to_action) != null
                ? m
                : c == null || (y = c.photo_data) == null
                  ? void 0
                  : y.call_to_action) != null
              ? d
              : null;
        if (
          v != null &&
          ((C = v.value) == null ? void 0 : C.link) == null &&
          ((b = c.link_data) == null ? void 0 : b.link) != null &&
          r("LWICometCTAEditorNeedsOverrideType").cast(v.type) == null
        ) {
          var S;
          v = {
            type: v.type,
            value: babelHelpers.extends({}, v.value, {
              link: (S = c.link_data) == null ? void 0 : S.link,
            }),
          };
        }
        return v;
      }
      return null;
    }
    function s(e, t, n, o, a) {
      var i;
      a === void 0 && (a = !0);
      var l = (i = e.clientCreativeSpec) == null ? void 0 : i.asset_feed_spec;
      if (l != null) {
        var s,
          u,
          c,
          d =
            (s = o ? ((u = t.value) == null ? void 0 : u.link) : n) != null
              ? s
              : l == null || (c = l.link_urls) == null
                ? void 0
                : c[0].website_url,
          m = r("getJSEnumSafe")(r("CallToActionTypes"), t.type);
        if (
          d != null &&
          m != null &&
          (t.value == null && (t.value = { link: d }), l != null)
        ) {
          var _ = [m],
            f = [{ type: m, value: t.value }],
            g =
              l.link_urls != null
                ? [babelHelpers.extends({}, l.link_urls[0], { website_url: d })]
                : l.link_urls;
          if (a)
            ((l.call_to_action_types = _),
              (l.call_to_actions = f),
              (l.link_urls = g));
          else
            return babelHelpers.extends({}, e.clientCreativeSpec, {
              asset_feed_spec: babelHelpers.extends({}, l, {
                call_to_action_types: _,
                call_to_actions: f,
                link_urls: g,
              }),
            });
        }
      }
      if (a) {
        var h,
          y =
            (h = e.clientCreativeSpec) == null ||
            (h = h.object_story_spec) == null
              ? void 0
              : h.link_data;
        if (y != null) {
          var C,
            b = r("getJSEnumSafe")(r("CallToActionTypes"), t.type);
          ((y.call_to_action = {
            type: b,
            value: t.value != null ? { link: t.value.link } : null,
          }),
            (y.link = p(
              o,
              (C = t.value) == null ? void 0 : C.link,
              y.link,
              n,
            )));
        }
      }
      return e.clientCreativeSpec;
    }
    function u(e, t, n, r, o) {
      o === void 0 && (o = !0);
      var a = e == null ? void 0 : e.assetFeedSpecPlus;
      if (a != null) {
        var i,
          l,
          s,
          u =
            (i = r ? ((l = t.value) == null ? void 0 : l.link) : n) != null
              ? i
              : (s = a.link_urls) == null
                ? void 0
                : s[0].website_url,
          c = a.link_urls != null ? [].concat(a.link_urls) : null;
        u != null &&
          (t.value == null && (t.value = { link: u }),
          (c = [{ website_url: u }]));
        var d = [babelHelpers.extends({}, t)];
        if (o) ((a.link_urls = c), (a.call_to_actions = d));
        else
          return babelHelpers.extends({}, a, {
            call_to_actions: d,
            link_urls: c,
          });
      }
      return a;
    }
    function c(e, t, n, r, o) {
      o === void 0 && (o = !0);
      var a = e == null ? void 0 : e.object_story_spec;
      if (a != null) {
        if (a.link_data != null) {
          var i,
            l = o ? a.link_data : babelHelpers.extends({}, a.link_data);
          if (
            ((l.call_to_action = t),
            (l.link = p(r, (i = t.value) == null ? void 0 : i.link, l.link, n)),
            !o)
          )
            return babelHelpers.extends({}, e, {
              object_story_spec: babelHelpers.extends({}, a, { link_data: l }),
            });
        } else if (a.video_data != null) {
          var s = o ? a.video_data : babelHelpers.extends({}, a.video_data);
          if (((s.call_to_action = t), !o))
            return babelHelpers.extends({}, e, {
              object_story_spec: babelHelpers.extends({}, a, { video_data: s }),
            });
        } else if (a.template_data != null) {
          var u,
            c = o ? a.template_data : babelHelpers.extends({}, a.template_data);
          if (
            ((c.call_to_action = t),
            (c.link = (u = t.value) == null ? void 0 : u.link),
            !o)
          )
            return babelHelpers.extends({}, e, {
              object_story_spec: babelHelpers.extends({}, a, {
                template_data: c,
              }),
            });
        } else if (a.photo_data != null) {
          var d = o ? a.photo_data : babelHelpers.extends({}, a.photo_data);
          if (((d.call_to_action = t), !o))
            return babelHelpers.extends({}, e, {
              object_story_spec: babelHelpers.extends({}, a, { photo_data: d }),
            });
        }
      }
      return e;
    }
    function d(e, t, n) {
      var r = e == null ? void 0 : e.creative;
      if (r == null) return e;
      var a = o("LWICometCTALinkUtils").getShouldUseLinkFromCTA(t);
      return r.object_story_id != null || r.instagram_story_id != null
        ? babelHelpers.extends({}, e, {
            creative: babelHelpers.extends({}, r, {
              call_to_action: t.type === "NO_BUTTON" ? null : t,
            }),
          })
        : babelHelpers.extends({}, e, {
            assetFeedSpecPlus: u(e, t, n, a, !1),
            clientCreativeSpec: s(e, t, n, a, !1),
            creative: c(r, t, n, a, !1),
          });
    }
    function m(e, t, n) {
      var r = e == null ? void 0 : e.creative;
      if (r == null) return e;
      var a = o("LWICometCTALinkUtils").getShouldUseLinkFromCTA(t);
      return r.object_story_id != null || r.instagram_story_id != null
        ? ((r.call_to_action = t.type === "NO_BUTTON" ? null : t), e)
        : (s(e, t, n, a), u(e, t, n, a), c(r, t, n, a), e);
    }
    function p(e, t, n, r) {
      return e ? (t != null ? t : n) : r != null ? r : n;
    }
    function _(t, n, o) {
      var a,
        i = t == null ? void 0 : t.creative;
      if (i == null) return t;
      var l = (a = e(i, t.assetFeedSpecPlus)) != null ? a : n;
      return n == null
        ? m(t, l, o)
        : r("LWICometCTAEditorNeedsOverrideType").cast(n.type) == null &&
            r("LWICometCTAEditorNeedsOverrideType").cast(l.type) == null &&
            n.value == null
          ? ((l = babelHelpers.extends({}, l, { type: n.type })), m(t, l, o))
          : m(t, n, o);
    }
    function f(t, n) {
      var r = t == null ? void 0 : t.creative;
      if (r == null) return t;
      var o = e(r, t.assetFeedSpecPlus);
      return ((o = g(o, n)), m(t, o));
    }
    function g(e, t) {
      if (e == null)
        throw r("FBLogger")("pages_lwi").mustfixThrow(
          "CTA must be not null when updating CTA value",
        );
      return ((e.value = t), e);
    }
    function h(e) {
      var t, n;
      if (e == null) return null;
      var a = (t = e.call_to_action_type) != null ? t : "NO_BUTTON",
        i = e.call_to_action_value,
        l =
          (n = o("enumUtils").coerce(a, r("CallToActionTypes"))) != null
            ? n
            : "NO_BUTTON";
      return { type: l, value: E(l, i) };
    }
    function y(e) {
      var t;
      if (e == null) return null;
      var n = e.value,
        r =
          e.type === "WHATSAPP_MESSAGE" &&
          (n == null ? void 0 : n.whatsapp_number) != null &&
          (n == null ? void 0 : n.whatsapp_number) !== ""
            ? n == null
              ? void 0
              : n.whatsapp_number
            : void 0,
        o =
          (n == null ? void 0 : n.link) != null &&
          (n == null ? void 0 : n.link) !== ""
            ? n == null
              ? void 0
              : n.link
            : void 0,
        a =
          (n == null ? void 0 : n.event_id) != null &&
          (n == null ? void 0 : n.event_id) !== ""
            ? n == null
              ? void 0
              : n.event_id
            : void 0,
        i =
          (n == null ? void 0 : n.lead_gen_form_id) != null &&
          (n == null ? void 0 : n.lead_gen_form_id) !== ""
            ? n == null
              ? void 0
              : n.lead_gen_form_id
            : void 0,
        l =
          (n == null ? void 0 : n.page) != null &&
          (n == null ? void 0 : n.page) !== ""
            ? n == null
              ? void 0
              : n.page
            : void 0,
        s =
          (n == null ? void 0 : n.app_destination) != null
            ? n == null
              ? void 0
              : n.app_destination
            : void 0,
        u;
      switch (!0) {
        case s != null:
          u = babelHelpers.extends({}, u, { app_destination: s });
        case a != null:
          u = babelHelpers.extends({}, u, { event_id: a });
        case o != null:
          u = babelHelpers.extends({}, u, { link: o });
        case l != null:
          u = babelHelpers.extends({}, u, { page: l });
        case r != null:
          u = babelHelpers.extends({}, u, { whatsapp_number: r });
        case i != null:
          u = babelHelpers.extends({}, u, { lead_gen_form_id: i });
      }
      return { type: (t = e.type) != null ? t : "NO_BUTTON", value: u };
    }
    function C(e) {
      var t;
      if (e == null) return null;
      var n = (t = e.type) != null ? t : "NO_BUTTON";
      return { type: n, value: E(n, e.value) };
    }
    var b = new Set(["REACH", "MESSAGES"]),
      v = new Set([
        "CALL_NOW",
        "GET_DIRECTIONS",
        "MESSAGE_PAGE",
        "WHATSAPP_MESSAGE",
      ]);
    function S(t, n, o) {
      var a,
        i = e(n, t);
      if (
        !(
          i == null ||
          r("LWICometCTAEditorNeedsOverrideType").cast(i.type) != null ||
          o === "LEAD_GENERATION"
        )
      )
        return i == null || (a = i.value) == null ? void 0 : a.link;
    }
    function R(e) {
      var t, n;
      if (e == null) return null;
      var a = (t = e.call_to_action_type) != null ? t : "NO_BUTTON",
        i =
          (n = o("enumUtils").coerce(a, r("CallToActionTypes"))) != null
            ? n
            : "NO_BUTTON";
      return { type: i, value: E(i, e.call_to_action_value) };
    }
    function L(e) {
      var t = e == null ? void 0 : e.type;
      return e == null || t == null ? null : { type: t, value: E(t, e) };
    }
    function E(e, t) {
      if (!(e === "NO_BUTTON" || t == null)) {
        var n = null;
        o("LWICometMessagingAppsSectionConstants").isMessagingAppCTAType(e) &&
          ((n = T(e)), n == null && (n = void 0));
        var r =
            e === "WHATSAPP_MESSAGE" &&
            t.whatsapp_number != null &&
            t.whatsapp_number !== ""
              ? t.whatsapp_number
              : void 0,
          a = t.link != null && t.link !== "" ? t.link : void 0,
          i = t.app_link != null && t.app_link !== "" ? t.app_link : void 0,
          l = t.event_id != null && t.event_id !== "" ? t.event_id : void 0,
          s = t.group_id != null && t.group_id !== "" ? t.group_id : void 0,
          u =
            t.lead_gen_form_id != null && t.lead_gen_form_id !== ""
              ? t.lead_gen_form_id
              : void 0,
          c = t.app_destination != null ? t.app_destination : n,
          d =
            t.page != null && t.page !== ""
              ? t.page
              : t.page_id != null && t.page_id !== ""
                ? t.page_id
                : void 0;
        return {
          app_destination: c != null ? c : void 0,
          app_link: i,
          event_id: l != null ? l : void 0,
          group_id: s != null ? s : void 0,
          lead_gen_form_id: u != null ? u : void 0,
          link: a != null ? a : void 0,
          page: d != null ? d : void 0,
          whatsapp_number: r != null ? r : void 0,
        };
      }
    }
    function k(e) {
      var t = e.buttonDestination,
        n = e.ctaType,
        o = e.goal,
        a = e.hideLinkEditor;
      if (
        t === "AUTOMATED_CHAT" ||
        t === "FORM_ON_FACEBOOK" ||
        (n === "BUY_TICKETS" && o === "EVENT_TICKETING")
      )
        return !0;
      var i = r("LWICometCTAEditorNeedsOverrideType").cast(n);
      if (i == null) return !a;
      var l = [
        r("LWICometCTAEditorNeedsOverrideType").CALL_NOW,
        r("LWICometCTAEditorNeedsOverrideType").GET_DIRECTIONS,
        r("LWICometCTAEditorNeedsOverrideType").INSTAGRAM_MESSAGE,
        r("LWICometCTAEditorNeedsOverrideType").VIEW_INSTAGRAM_PROFILE,
        r("LWICometCTAEditorNeedsOverrideType").WHATSAPP_MESSAGE,
      ];
      return l.includes(i);
    }
    function I(e) {
      var t,
        n,
        r = e.adgroupSpecs[e.selectedAdgroupID];
      return (t =
        (n = r.clientCreativeSpec) == null ? void 0 : n.asset_feed_spec) != null
        ? t
        : r.assetFeedSpecPlus;
    }
    function T(e) {
      switch (e) {
        case "MESSAGE_PAGE":
          return "MESSENGER";
        case "WHATSAPP_MESSAGE":
          return "WHATSAPP";
        case "INSTAGRAM_MESSAGE":
          return "INSTAGRAM_DIRECT";
        default:
          return null;
      }
    }
    ((l.getLWICometCTA = e),
      (l.setLWICometCTACreative = c),
      (l.setLWICometCTAReadOnly = d),
      (l.setLWICometCTA = m),
      (l.getLWICTALinkData = p),
      (l.setLWICometCTAType = _),
      (l.setLWICometCTAValue = f),
      (l.getTypedObjectStorySpecCTA = h),
      (l.getTypedLinkDataCTAfromAFS = y),
      (l.getTypedAssetFeedSpecCTA = C),
      (l.SHOULD_DISABLE_CTA_EDITING = b),
      (l.SHOULD_DISABLE_CTA_EDITING_TYPES = v),
      (l.getLWICometLinkURL = S),
      (l.getTypedCreativeCTA = R),
      (l.getTypedTopLevelCTA = L),
      (l.showCTAEditorWrapper = k),
      (l.getAssetFeedSpecOrPlus = I));
  },
  98,
);
