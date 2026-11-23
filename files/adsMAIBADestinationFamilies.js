__d(
  "adsMAIBADestinationFamilies",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = new Map([
      ["WEBSITE", "website"],
      ["WEB_TO_APP", "website"],
      ["EXTERNAL", "website"],
      ["WEBSITE_AND_SHOPS", "website_and_shops"],
      ["SHOP", "website_and_shops"],
      ["SHOP_AUTOMATIC", "website_and_shops"],
      ["SHOP_MANUAL", "website_and_shops"],
      ["APP", "app"],
      ["APPLINKS_AUTOMATIC", "app"],
      ["APP_STORE", "app"],
      ["APP_DEEPLINK", "app"],
      ["PHONE_CALL", "phone_call"],
      ["ON_AD", "on_ad"],
      ["LEAD_FORM_MESSENGER", "on_ad"],
      ["LEAD_FROM_IG_DIRECT", "on_ad"],
      ["MESSENGER", "messaging"],
      ["WHATSAPP", "messaging"],
      ["INSTAGRAM_DIRECT", "messaging"],
      ["MESSAGING_MESSENGER_WHATSAPP", "messaging"],
      ["MESSAGING_INSTAGRAM_DIRECT_MESSENGER", "messaging"],
      ["MESSAGING_INSTAGRAM_DIRECT_MESSENGER_WHATSAPP", "messaging"],
      ["MESSAGING_INSTAGRAM_DIRECT_WHATSAPP", "messaging"],
    ]);
    function l(t) {
      var n;
      return t == null || t === ""
        ? "website"
        : (n = e.get(t)) != null
          ? n
          : "website";
    }
    var s = new Map([
        [
          "OUTCOME_TRAFFIC",
          new Set(["website", "app", "phone_call", "messaging"]),
        ],
        ["OUTCOME_LEADS", new Set(["website", "on_ad", "messaging"])],
        [
          "OUTCOME_SALES",
          new Set(["website", "app", "website_and_shops", "messaging"]),
        ],
        ["OUTCOME_ENGAGEMENT", new Set(["website", "messaging"])],
        ["OUTCOME_AWARENESS", new Set(["website", "phone_call", "messaging"])],
        ["OUTCOME_APP_PROMOTION", new Set(["app"])],
        [
          "LINK_CLICKS",
          new Set([
            "website",
            "app",
            "phone_call",
            "on_ad",
            "messaging",
            "website_and_shops",
          ]),
        ],
        [
          "CONVERSIONS",
          new Set([
            "website",
            "app",
            "phone_call",
            "on_ad",
            "messaging",
            "website_and_shops",
          ]),
        ],
      ]),
      u = [
        "website",
        "website_and_shops",
        "app",
        "phone_call",
        "on_ad",
        "messaging",
      ];
    function c(e, t, n) {
      var r = e != null ? s.get(e) : null,
        o = t === "RESERVED";
      return u.filter(function (e) {
        return !(
          (r != null && !r.has(e)) ||
          (o && e === "messaging") ||
          (e === "website_and_shops" && n !== e)
        );
      });
    }
    ((i.deriveMAIBADestinationFamily = l),
      (i.getVisibleMAIBADestinationFamilies = c));
  },
  66,
);
