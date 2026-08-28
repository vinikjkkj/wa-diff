__d(
  "AdsTargetingRuleUtils",
  [
    "invariant",
    "AdsAPIAudienceNetworkPosition",
    "AdsAPIFacebookPosition",
    "AdsAPIInstagramPosition",
    "AdsAPIMessengerPosition",
    "AdsAPIOculusPosition",
    "AdsAPIStreamingServicesPosition",
    "AdsAPIThreadsPosition",
    "AdsAPIWhatsAppPosition",
    "immutable",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e, u;
    function c(e) {
      return Object.keys(e).reduce(function (t, n) {
        return ((t[e[n]] = n), t);
      }, {});
    }
    var d = {
        facebook_positions: "facebook",
        instagram_positions: "instagram",
        audience_network_positions: "audience_network",
        messenger_positions: "messenger",
        whatsapp_positions: "whatsapp",
        oculus_positions: "oculus",
        threads_positions: "threads",
      },
      m = c(d),
      p =
        ((e = {}),
        (e.facebook = (u = r("immutable")).Set(
          Object.values(r("AdsAPIFacebookPosition")),
        )),
        (e.instagram = u.Set(Object.values(r("AdsAPIInstagramPosition")))),
        (e.audience_network = u.Set(
          Object.values(r("AdsAPIAudienceNetworkPosition")),
        )),
        (e.messenger = u.Set(Object.values(r("AdsAPIMessengerPosition")))),
        (e.whatsapp = u.Set(Object.values(r("AdsAPIWhatsAppPosition")))),
        (e.oculus = u.Set(Object.values(r("AdsAPIOculusPosition")))),
        (e.threads = u.Set(Object.values(r("AdsAPIThreadsPosition")))),
        (e.streaming_services = u.Set(
          Object.values(r("AdsAPIStreamingServicesPosition")),
        )),
        e);
    function _(e, t) {
      p[t].has(e) || s(0, 11825, t, e);
    }
    function f(e, t, n) {
      if (!e) return { index: null, value: null };
      var o = e.findEntry(function (e) {
        var o = e.get(t);
        return o
          ? (o instanceof r("immutable").Map || s(0, 4994), o.get("name") === n)
          : !1;
      });
      if (o) {
        var a = o[0],
          i = o[1];
        if (a > -1) return { index: a, value: i };
      }
      return { index: null, value: null };
    }
    function g(e, t, n) {
      var o;
      if (e) {
        (t >= 0 && t < e.size) || s(0, 4995);
        var a = (o = e.get(t)) == null ? void 0 : o.get(n);
        if (a)
          return (a instanceof r("immutable").Map || s(0, 4996), a.get("name"));
      }
    }
    ((l.TARGETING_POSITION_FIELDS_TO_PLATFORMS = d),
      (l.PLATFORMS_TO_TARGETING_POSITION_FIELDS = m),
      (l.PLATFORMS_TO_POSITION_VALUES = p),
      (l.assertValidPositionForPlatform = _),
      (l.getTargetingRuleEntryForLabel = f),
      (l.getTargetingRuleLabelAtIndex = g));
  },
  98,
);
