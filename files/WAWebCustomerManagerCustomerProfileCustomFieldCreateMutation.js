__d(
  "WAWebCustomerManagerCustomerProfileCustomFieldCreateMutation",
  [
    "WAWebCustomerManagerCustomFieldTypes",
    "WAWebCustomerManagerCustomerProfileCustomFieldCreateMutation.graphql",
    "WAWebCustomerManagerProfileRequest",
    "WAWebRelayClient",
    "XFBWACustomerProfileCustomFieldType.facebook",
    "asyncToGeneratorRuntime",
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s =
        e !== void 0
          ? e
          : (e = n(
              "WAWebCustomerManagerCustomerProfileCustomFieldCreateMutation.graphql",
            ));
    function u(e) {
      return c.apply(this, arguments);
    }
    function c() {
      return (
        (c = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t,
            n = d(e),
            r = yield o(
              "WAWebCustomerManagerProfileRequest",
            ).runCustomerProfileRequest(
              "custom field create",
              function (e) {
                return o("WAWebRelayClient").commitMutation(s, { input: n }, e);
              },
              { rateLimitSurface: "write" },
            );
          return p(
            r == null ||
              (t = r.xfb_wa_create_customer_profile_custom_field) == null
              ? void 0
              : t.wa_customer_profile_custom_field,
          );
        })),
        c.apply(this, arguments)
      );
    }
    function d(e) {
      var t,
        n,
        o = e.name.trim();
      if (o === "")
        throw r("err")(
          "[CustomerManager] custom field create: name is required",
        );
      var a =
        e.type === "ENUM"
          ? ((t = e.enumValues) != null ? t : [])
              .map(function (e) {
                return e.trim();
              })
              .filter(function (e) {
                return e !== "";
              })
          : void 0;
      if ((a == null ? void 0 : a.length) === 0)
        throw r("err")(
          "[CustomerManager] custom field create: enum fields need at least one value",
        );
      return {
        currency: e.type === "MONEY" && (n = e.currency) != null ? n : void 0,
        enum_values: a,
        field_type: m(e.type),
        name: o,
      };
    }
    function m(e) {
      var t = r("XFBWACustomerProfileCustomFieldType.facebook").cast(e);
      if (t == null)
        throw r("err")(
          "[CustomerManager] custom field create: unknown field type for server enum",
        );
      return t;
    }
    function p(e) {
      var t,
        n,
        a,
        i,
        l =
          (e == null ? void 0 : e.field_type) != null
            ? o("WAWebCustomerManagerCustomFieldTypes").toCustomFieldType(
                e.field_type,
              )
            : null;
      if ((e == null ? void 0 : e.id) == null || e.name == null || l == null)
        throw r("err")(
          "[CustomerManager] custom field create: incomplete field in create response",
        );
      return {
        currency: (t = e.currency) != null ? t : null,
        currencyDecimalPlaces:
          (n = e.currency_decimal_places) != null ? n : null,
        enumOptionKeys: [].concat((a = e.enum_option_keys) != null ? a : []),
        enumValues: [].concat((i = e.enum_values) != null ? i : []),
        id: e.id,
        name: e.name,
        type: l,
      };
    }
    l.createCustomerProfileCustomField = u;
  },
  98,
);
