__d(
  "AdCustomizationRuleSpecUtil",
  ["TypeCoercionUtils"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      var t,
        n,
        r,
        a,
        i,
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
        G,
        z,
        j,
        K,
        Q,
        X,
        Y,
        J,
        Z,
        ee,
        te,
        ne;
      return {
        caption: (t = e.caption) != null ? t : void 0,
        customization_spec:
          e.customization_spec != null
            ? o("TypeCoercionUtils").coerceObjectToUndefined({
                language:
                  (n = e.customization_spec.language) != null ? n : void 0,
              })
            : void 0,
        description: (r = e.description) != null ? r : void 0,
        image_hash: (a = e.image_hash) != null ? a : void 0,
        link: (i = e.link) != null ? i : void 0,
        message: (l = e.message) != null ? l : void 0,
        name: (s = e.name) != null ? s : void 0,
        priority: (u = e.priority) != null ? u : void 0,
        template_url_spec:
          e.template_url_spec != null
            ? o("TypeCoercionUtils").coerceObjectToUndefined({
                android:
                  ((c = e.template_url_spec) == null ? void 0 : c.android) !=
                  null
                    ? o("TypeCoercionUtils").coerceObjectToUndefined({
                        app_name:
                          (d =
                            (m = e.template_url_spec) == null ||
                            (m = m.android) == null
                              ? void 0
                              : m.app_name) != null
                            ? d
                            : void 0,
                        package:
                          (p =
                            (_ = e.template_url_spec) == null ||
                            (_ = _.android) == null
                              ? void 0
                              : _.package) != null
                            ? p
                            : void 0,
                        url:
                          (f =
                            (g = e.template_url_spec) == null ||
                            (g = g.android) == null
                              ? void 0
                              : g.url) != null
                            ? f
                            : void 0,
                      })
                    : void 0,
                config:
                  ((h = e.template_url_spec) == null ? void 0 : h.config) !=
                  null
                    ? o("TypeCoercionUtils").coerceObjectToUndefined({
                        app_id:
                          (y =
                            (C = e.template_url_spec) == null ||
                            (C = C.config) == null
                              ? void 0
                              : C.app_id) != null
                            ? y
                            : void 0,
                        enable_third_party_deeplink:
                          (b =
                            (v = e.template_url_spec) == null ||
                            (v = v.config) == null
                              ? void 0
                              : v.enable_third_party_deeplink) != null
                            ? b
                            : void 0,
                      })
                    : void 0,
                ios:
                  ((S = e.template_url_spec) == null ? void 0 : S.ios) != null
                    ? o("TypeCoercionUtils").coerceObjectToUndefined({
                        app_name:
                          (R =
                            (L = e.template_url_spec) == null ||
                            (L = L.ios) == null
                              ? void 0
                              : L.app_name) != null
                            ? R
                            : void 0,
                        app_store_id:
                          (E =
                            (k = e.template_url_spec) == null ||
                            (k = k.ios) == null
                              ? void 0
                              : k.app_store_id) != null
                            ? E
                            : void 0,
                        url:
                          (I =
                            (T = e.template_url_spec) == null ||
                            (T = T.ios) == null
                              ? void 0
                              : T.url) != null
                            ? I
                            : void 0,
                      })
                    : void 0,
                ipad:
                  ((D = e.template_url_spec) == null ? void 0 : D.ipad) != null
                    ? o("TypeCoercionUtils").coerceObjectToUndefined({
                        app_name:
                          (x =
                            ($ = e.template_url_spec) == null ||
                            ($ = $.ipad) == null
                              ? void 0
                              : $.app_name) != null
                            ? x
                            : void 0,
                        app_store_id:
                          (P =
                            (N = e.template_url_spec) == null ||
                            (N = N.ipad) == null
                              ? void 0
                              : N.app_store_id) != null
                            ? P
                            : void 0,
                        url:
                          (M =
                            (w = e.template_url_spec) == null ||
                            (w = w.ipad) == null
                              ? void 0
                              : w.url) != null
                            ? M
                            : void 0,
                      })
                    : void 0,
                iphone:
                  ((A = e.template_url_spec) == null ? void 0 : A.iphone) !=
                  null
                    ? o("TypeCoercionUtils").coerceObjectToUndefined({
                        app_name:
                          (F =
                            (O = e.template_url_spec) == null ||
                            (O = O.iphone) == null
                              ? void 0
                              : O.app_name) != null
                            ? F
                            : void 0,
                        app_store_id:
                          (B =
                            (W = e.template_url_spec) == null ||
                            (W = W.iphone) == null
                              ? void 0
                              : W.app_store_id) != null
                            ? B
                            : void 0,
                        url:
                          (q =
                            (U = e.template_url_spec) == null ||
                            (U = U.iphone) == null
                              ? void 0
                              : U.url) != null
                            ? q
                            : void 0,
                      })
                    : void 0,
                web:
                  ((V = e.template_url_spec) == null ? void 0 : V.web) != null
                    ? o("TypeCoercionUtils").coerceObjectToUndefined({
                        should_fallback:
                          (H =
                            (G = e.template_url_spec) == null ||
                            (G = G.web) == null
                              ? void 0
                              : G.should_fallback) != null
                            ? H
                            : void 0,
                        url:
                          (z =
                            (j = e.template_url_spec) == null ||
                            (j = j.web) == null
                              ? void 0
                              : j.url) != null
                            ? z
                            : void 0,
                      })
                    : void 0,
                windows_phone:
                  ((K = e.template_url_spec) == null
                    ? void 0
                    : K.windows_phone) != null
                    ? o("TypeCoercionUtils").coerceObjectToUndefined({
                        app_id:
                          (Q =
                            (X = e.template_url_spec) == null ||
                            (X = X.windows_phone) == null
                              ? void 0
                              : X.app_id) != null
                            ? Q
                            : void 0,
                        app_name:
                          (Y =
                            (J = e.template_url_spec) == null ||
                            (J = J.windows_phone) == null
                              ? void 0
                              : J.app_name) != null
                            ? Y
                            : void 0,
                        url:
                          (Z =
                            (ee = e.template_url_spec) == null ||
                            (ee = ee.windows_phone) == null
                              ? void 0
                              : ee.url) != null
                            ? Z
                            : void 0,
                      })
                    : void 0,
              })
            : void 0,
        thumbnail_url: (te = e.thumbnail_url) != null ? te : void 0,
        video_id: (ne = e.video_id) != null ? ne : void 0,
      };
    }
    l.coerceGraphQLSpecToGraphAPI = e;
  },
  98,
);
