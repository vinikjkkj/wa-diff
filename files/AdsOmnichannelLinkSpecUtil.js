__d(
  "AdsOmnichannelLinkSpecUtil",
  ["TypeCoercionUtils"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      var t, n, r, a, i, l, s, u, c, d, m, p, _, f, g, h, y, C, b, v;
      return {
        app: e.app
          ? o("TypeCoercionUtils").coerceObjectToUndefined({
              application_id: (t = e.app.application_id) != null ? t : void 0,
              platform_specs:
                (n = e.app) != null && n.platform_specs
                  ? o("TypeCoercionUtils").coerceObjectToUndefined({
                      android:
                        (r = e.app) != null &&
                        (r = r.platform_specs) != null &&
                        r.android
                          ? o("TypeCoercionUtils").coerceObjectToUndefined({
                              app_name:
                                (a = e.app.platform_specs.android.app_name) !=
                                null
                                  ? a
                                  : void 0,
                              package_name:
                                (i =
                                  e.app.platform_specs.android.package_name) !=
                                null
                                  ? i
                                  : void 0,
                              url:
                                (l = e.app.platform_specs.android.url) != null
                                  ? l
                                  : void 0,
                            })
                          : void 0,
                      ios:
                        (s = e.app) != null &&
                        (s = s.platform_specs) != null &&
                        s.ios
                          ? o("TypeCoercionUtils").coerceObjectToUndefined({
                              app_name:
                                (u = e.app.platform_specs.ios.app_name) != null
                                  ? u
                                  : void 0,
                              app_store_id:
                                (c = e.app.platform_specs.ios.app_store_id) !=
                                null
                                  ? c
                                  : void 0,
                              url:
                                (d = e.app.platform_specs.ios.url) != null
                                  ? d
                                  : void 0,
                            })
                          : void 0,
                      ipad:
                        (m = e.app) != null &&
                        (m = m.platform_specs) != null &&
                        m.ipad
                          ? o("TypeCoercionUtils").coerceObjectToUndefined({
                              app_name:
                                (p = e.app.platform_specs.ipad.app_name) != null
                                  ? p
                                  : void 0,
                              app_store_id:
                                (_ = e.app.platform_specs.ipad.app_store_id) !=
                                null
                                  ? _
                                  : void 0,
                              url:
                                (f = e.app.platform_specs.ipad.url) != null
                                  ? f
                                  : void 0,
                            })
                          : void 0,
                      iphone:
                        (g = e.app) != null &&
                        (g = g.platform_specs) != null &&
                        g.iphone
                          ? o("TypeCoercionUtils").coerceObjectToUndefined({
                              app_name:
                                (h = e.app.platform_specs.iphone.app_name) !=
                                null
                                  ? h
                                  : void 0,
                              app_store_id:
                                (y =
                                  e.app.platform_specs.iphone.app_store_id) !=
                                null
                                  ? y
                                  : void 0,
                              url:
                                (C = e.app.platform_specs.iphone.url) != null
                                  ? C
                                  : void 0,
                            })
                          : void 0,
                    })
                  : void 0,
            })
          : void 0,
        web:
          ((b = e.web) == null ? void 0 : b.url) != null
            ? o("TypeCoercionUtils").coerceObjectToUndefined({
                url: (v = e.web) == null ? void 0 : v.url,
              })
            : void 0,
      };
    }
    l.coerceGraphQLSpecToGraphAPI = e;
  },
  98,
);
