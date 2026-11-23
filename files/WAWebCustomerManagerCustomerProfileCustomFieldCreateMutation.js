__d(
  "WAWebCustomerManagerCustomerProfileCustomFieldCreateMutation",
  [
    "WAWebCustomerManagerCustomerProfileCustomFieldCreateMutation.graphql",
    "WAWebCustomerManagerCustomerProfileDecoders",
    "WAWebCustomerManagerProfileRequest",
    "WAWebRelayClient",
    "XFBWACustomerProfileCustomFieldType.facebook",
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
    async function u(e) {
      var t,
        n = c(e),
        r = await o(
          "WAWebCustomerManagerProfileRequest",
        ).runCustomerProfileRequest(
          "custom field create",
          function (e) {
            return o("WAWebRelayClient").commitMutation(s, { input: n }, e);
          },
          { rateLimitSurface: "write" },
        );
      return m(
        r == null || (t = r.xfb_wa_create_customer_profile_custom_field) == null
          ? void 0
          : t.wa_customer_profile_custom_field,
      );
    }
    function c(e) {
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
        field_type: d(e.type),
        name: o,
      };
    }
    function d(e) {
      var t = r("XFBWACustomerProfileCustomFieldType.facebook").cast(e);
      if (t == null)
        throw r("err")(
          "[CustomerManager] custom field create: unknown field type for server enum",
        );
      return t;
    }
    function m(e) {
      var t = o(
        "WAWebCustomerManagerCustomerProfileDecoders",
      ).decodeCustomFieldDefinition(e);
      if (t == null)
        throw r("err")(
          "[CustomerManager] custom field create: incomplete field in create response",
        );
      return t;
    }
    l.createCustomerProfileCustomField = u;
  },
  98,
);
