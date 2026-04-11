__d(
  "WAWebGraphQLVerifyPostcodeJob",
  [
    "WAWebGraphQLServerError",
    "WAWebGraphQLVerifyPostcodeJobQuery.graphql",
    "WAWebMaybeThrowCatalogErrors",
    "WAWebRelayClient",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s =
        e !== void 0
          ? e
          : (e = n("WAWebGraphQLVerifyPostcodeJobQuery.graphql"));
    function u(e, t) {
      return o("WAWebRelayClient")
        .fetchQuery(s, {
          request: {
            verify_postcode: {
              biz_jid: e.toJid(),
              direct_connection_encrypted_info: t,
            },
          },
        })
        .then(function (e) {
          var t,
            n,
            r =
              (t =
                e == null ||
                (n = e.xwa_product_catalog_get_verify_postcode) == null
                  ? void 0
                  : n.postcode_verification_result) != null
                ? t
                : {},
            o = r.encrypted_location_name,
            a = r.result_code;
          return { encryptedLocationName: o, resultCode: c(a) };
        })
        .catch(function (e) {
          throw (
            e instanceof o("WAWebGraphQLServerError").GraphQLServerError &&
              o(
                "WAWebMaybeThrowCatalogErrors",
              ).maybeThrowLocalErrorForCatalogQuery(e),
            e
          );
        });
    }
    function c(e) {
      switch (e) {
        case "RESULT_CODE_SUCCESS":
          return "success";
        case "RESULT_CODE_UNSERVICEABLE_LOCATION":
          return "unserviceable_location";
        default:
          return "invalid_postcode";
      }
    }
    l.verifyPostcode = u;
  },
  98,
);
