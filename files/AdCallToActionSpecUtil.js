__d(
  "AdCallToActionSpecUtil",
  [
    "CallToActionLinkFormats",
    "CallToActionTypes",
    "TypeCoercionUtils",
    "enumUtils",
    "getJSEnumSafe",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      var t,
        n,
        a,
        l,
        s,
        u,
        c,
        d,
        m,
        p,
        _,
        f,
        g,
        h,
        y,
        C,
        b,
        v,
        S,
        R,
        L,
        E,
        k,
        I,
        T,
        D,
        x,
        $,
        P,
        N,
        M,
        w,
        A,
        F,
        O,
        B,
        W,
        q,
        U,
        V,
        H,
        G;
      return {
        type:
          e.call_to_action_type !== null &&
          (t = o("enumUtils").coerce(
            o("TypeCoercionUtils").coerceNonMaybeValue(
              e.call_to_action_type,
              "call_to_action_type",
              i.id,
            ),
            r("CallToActionTypes"),
          )) != null
            ? t
            : void 0,
        value:
          e.call_to_action_value != null
            ? o("TypeCoercionUtils").coerceObjectToUndefined({
                android_url:
                  (n =
                    (a = e.call_to_action_value) == null
                      ? void 0
                      : a.android_url) != null
                    ? n
                    : void 0,
                app_destination:
                  (l =
                    (s = e.call_to_action_value) == null
                      ? void 0
                      : s.app_destination) != null
                    ? l
                    : void 0,
                app_destination_page_id:
                  (u =
                    (c = e.call_to_action_value) == null
                      ? void 0
                      : c.app_destination_page_id) != null
                    ? u
                    : void 0,
                app_link:
                  (d =
                    (m = e.call_to_action_value) == null
                      ? void 0
                      : m.app_link) != null
                    ? d
                    : void 0,
                application:
                  (p =
                    (_ = e.call_to_action_value) == null
                      ? void 0
                      : _.application) != null
                    ? p
                    : void 0,
                caption: void 0,
                channel_id:
                  (f =
                    (g = e.call_to_action_value) == null
                      ? void 0
                      : g.channel_id) != null
                    ? f
                    : void 0,
                event_id:
                  (h =
                    (y = e.call_to_action_value) == null
                      ? void 0
                      : y.event_id) != null
                    ? h
                    : void 0,
                fundraiser_campaign_id:
                  (C =
                    (b = e.call_to_action_value) == null
                      ? void 0
                      : b.fundraiser_campaign_id) != null
                    ? C
                    : void 0,
                group_id:
                  (v =
                    (S = e.call_to_action_value) == null
                      ? void 0
                      : S.group_id) != null
                    ? v
                    : void 0,
                instagram_profile_cta_destination:
                  (R =
                    (L = e.call_to_action_value) == null
                      ? void 0
                      : L.instagram_profile_cta_destination) != null
                    ? R
                    : void 0,
                ios_url:
                  (E =
                    (k = e.call_to_action_value) == null
                      ? void 0
                      : k.ios_url) != null
                    ? E
                    : void 0,
                lead_gen_form_id:
                  (I =
                    (T = e.call_to_action_value) == null
                      ? void 0
                      : T.lead_gen_form_id) != null
                    ? I
                    : void 0,
                link:
                  (D =
                    (x = e.call_to_action_value) == null ? void 0 : x.link) !=
                  null
                    ? D
                    : void 0,
                link_caption:
                  ($ =
                    (P = e.call_to_action_value) == null
                      ? void 0
                      : P.caption) != null
                    ? $
                    : void 0,
                link_description: void 0,
                link_format:
                  (N = r("getJSEnumSafe")(
                    r("CallToActionLinkFormats"),
                    (M = e.call_to_action_value) == null
                      ? void 0
                      : M.link_format,
                  )) != null
                    ? N
                    : void 0,
                link_title: void 0,
                movie_id:
                  (w =
                    (A = e.call_to_action_value) == null
                      ? void 0
                      : A.movie_id) != null
                    ? w
                    : void 0,
                object_store_urls: o(
                  "TypeCoercionUtils",
                ).coerceEmptyArrayToUndefined(
                  (F = e.call_to_action_value) == null
                    ? void 0
                    : F.object_store_urls,
                ),
                page:
                  (O =
                    (B = e.call_to_action_value) == null
                      ? void 0
                      : B.page_id) != null
                    ? O
                    : void 0,
                product_link:
                  (W =
                    (q = e.call_to_action_value) == null
                      ? void 0
                      : q.product_link) != null
                    ? W
                    : void 0,
                search_dialog_id:
                  (U =
                    (V = e.call_to_action_value) == null
                      ? void 0
                      : V.search_dialog_id) != null
                    ? U
                    : void 0,
                whatsapp_number:
                  (H =
                    (G = e.call_to_action_value) == null
                      ? void 0
                      : G.whatsapp_number) != null
                    ? H
                    : void 0,
              })
            : void 0,
      };
    }
    l.coerceGraphQLSpecToGraphAPI = e;
  },
  98,
);
