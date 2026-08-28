__d(
  "MarketingMessageButtonUtils",
  ["err", "immutable"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = function (t) {
        return typeof t == "string" ? t : null;
      },
      s = function (t, n) {
        return typeof t == "string" ? t : n;
      },
      u = function (t) {
        return r("immutable")
          .Map()
          .set("text", t.text)
          .set("type", t.type)
          .set("preconfigured_response", t.preconfigured_response)
          .set("url", t.url)
          .set("phone_number", t.phone_number)
          .set("coupon_code", t.coupon_code)
          .set("custom_field_for_url_suffix", t.custom_field_for_url_suffix)
          .set("quick_reply_payload", t.quick_reply_payload)
          .set("ios_app_metadata", t.ios_app_metadata)
          .set("android_app_metadata", t.android_app_metadata)
          .set(
            "preconfigured_response_image_hash",
            t.preconfigured_response_image_hash,
          )
          .set(
            "preconfigured_response_video_id",
            t.preconfigured_response_video_id,
          )
          .set(
            "preconfigured_response_video_thumbnail_url",
            t.preconfigured_response_video_thumbnail_url,
          )
          .set("app_id", t.app_id)
          .set(
            "preconfigured_response_button",
            t.preconfigured_response_button,
          );
      },
      c = function (t) {
        return r("immutable")
          .Map()
          .set("text", t.text)
          .set("type", t.type)
          .set("url", t.url);
      },
      d = function (n) {
        var t,
          o,
          a,
          i,
          l,
          u,
          c = n.get("type"),
          d = n.get("text"),
          m = n.get("url"),
          p = n.get("custom_field_for_url_suffix"),
          _ = n.get("phone_number"),
          y = n.get("coupon_code"),
          C = n.get("app_id"),
          b = n.get("preconfigured_response"),
          v = n.get("quick_reply_payload"),
          S = e(c),
          R = n.get("android_app_metadata"),
          L =
            (t = r("immutable").fromJS(R)) != null ? t : r("immutable").List(),
          E = n.get("ios_app_metadata"),
          k =
            (o = r("immutable").fromJS(E)) != null ? o : r("immutable").List(),
          I = n.has("preconfigured_response_image_hash")
            ? (a = n.get("preconfigured_response_image_hash")) != null
              ? a
              : ""
            : null,
          T = (i = n.get("preconfigured_response_video_id")) != null ? i : "",
          D = n.has("preconfigured_response_video_thumbnail_url")
            ? (l = n.get("preconfigured_response_video_thumbnail_url")) != null
              ? l
              : ""
            : null,
          x = n.get("preconfigured_response_button"),
          $ = (u = r("immutable").fromJS(x)) != null ? u : null,
          P = g($),
          N = R != null ? f(L) : null,
          M = E != null ? f(k) : null;
        return {
          type: h(S),
          text: s(d, ""),
          url: e(m),
          phone_number: e(_),
          coupon_code: e(y),
          preconfigured_response_image_hash: e(I),
          preconfigured_response_video_id: s(T, ""),
          preconfigured_response_video_thumbnail_url: e(D),
          preconfigured_response: e(b),
          custom_field_for_url_suffix: e(p),
          quick_reply_payload: e(v),
          ios_app_metadata: M,
          android_app_metadata: N,
          preconfigured_response_button: P,
          app_id: e(C),
        };
      },
      m = function (t) {
        switch (t) {
          case "DEEPLINK_WITH_WEB_FALLBACK":
            return "deeplink_with_web_fallback";
          case "DEEPLINK_WITH_APPSTORE_FALLBACK":
            return "deeplink_with_appstore_fallback";
          case "WEB_ONLY":
            return "web_only";
          default:
            throw r("err")("Unsupported app link treatment: ", t);
        }
      },
      p = function (t) {
        switch (t) {
          case "deeplink_with_web_fallback":
            return "deeplink_with_web_fallback";
          case "deeplink_with_appstore_fallback":
            return "deeplink_with_appstore_fallback";
          case "web_only":
            return "web_only";
        }
        throw r("err")("Unsupported app link treatment: ", t);
      },
      _ = function (t) {
        switch (t) {
          case "URL":
            return "URL";
          case "PHONE_NUMBER":
            return "PHONE_NUMBER";
          case "COPY_CODE":
            return "COPY_CODE";
          case "QUICK_REPLY":
            return "QUICK_REPLY";
          case "APP":
            return "APP";
        }
        throw r("err")("Unsupported button type: ", t);
      },
      f = function (t) {
        var e = t.get("deep_link_url"),
          n = t.get("type"),
          r = t.get("app_store_url");
        return {
          deep_link_url: typeof e == "string" ? e : "",
          type: p(n),
          app_store_url: typeof r == "string" ? r : null,
        };
      },
      g = function (t) {
        if (t == null) return null;
        var e = t.get("url"),
          n = t.get("type"),
          r = t.get("text");
        return {
          url: typeof e == "string" ? e : "",
          type: _(n),
          text: typeof r == "string" ? r : "",
        };
      },
      h = function (t) {
        switch (t) {
          case "URL":
            return "URL";
          case "PHONE_NUMBER":
            return "PHONE_NUMBER";
          case "COPY_CODE":
            return "COPY_CODE";
          case "QUICK_REPLY":
            return "QUICK_REPLY";
          case "APP":
            return "APP";
          default:
            throw r("err")(
              "Unsupported button type: " + (t != null ? t : "(null)"),
            );
        }
      };
    function y(e) {
      var t,
        n =
          (t = e == null ? void 0 : e.map(c)) != null
            ? t
            : r("immutable").List(),
        o = n.first();
      if (o === void 0) return null;
      var a = o.has("url") ? o.get("url") : null,
        i = o.has("text") ? o.get("text") : null;
      return {
        url: typeof a == "string" ? a : null,
        type: "URL",
        text: typeof i == "string" ? i : "",
      };
    }
    ((l.getButtonDictFromMarketingMessageButton = u),
      (l.getButtonDictForPCRV2FromMarketingMessageButton = c),
      (l.getMarketingMessageButtonFromButtonDict = d),
      (l.getWhatsAppAppLinkTreatmentTypeFromGraphQLType = m),
      (l.getPreconfiguredResponseButton = g),
      (l.getPCRButtonFromMarketingMessageButtons = y));
  },
  98,
);
