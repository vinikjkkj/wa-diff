__d(
  "WAWebGetBizCatalogType",
  [
    "WALogger",
    "WAWebBusinessProfileTypes",
    "WAWebQueryBusinessProfile",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e;
    function s(e) {
      return u.apply(this, arguments);
    }
    function u() {
      return (
        (u = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          var n, r;
          try {
            r = yield o("WAWebQueryBusinessProfile").queryBusinessProfile([
              { wid: t },
            ]);
          } catch (t) {
            return (
              o("WALogger")
                .ERROR(
                  e ||
                    (e = babelHelpers.taggedTemplateLiteralLoose([
                      "[ThreadLogging] biz profile query fail: biz_catalog_type",
                    ])),
                )
                .verbose()
                .sendLogs("query-business-profile-fail"),
              null
            );
          }
          var a = r[0];
          if (!a) return null;
          var i =
            (n = a.profile) == null || (n = n.profile_options) == null
              ? void 0
              : n.commerce_experience;
          return i ===
            o("WAWebBusinessProfileTypes").CommerceExperienceTypes.CATALOG
            ? "native"
            : i === o("WAWebBusinessProfileTypes").CommerceExperienceTypes.SHOP
              ? "shop"
              : null;
        })),
        u.apply(this, arguments)
      );
    }
    l.getBizCatalogType = s;
  },
  98,
);
