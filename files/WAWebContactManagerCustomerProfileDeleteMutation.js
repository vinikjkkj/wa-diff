__d(
  "WAWebContactManagerCustomerProfileDeleteMutation",
  [
    "WAJids",
    "WALogger",
    "WAWebContactManagerCustomerProfileDeleteMutation.graphql",
    "WAWebCustomerManagerProfileRequest",
    "WAWebRelayClient",
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u =
        e !== void 0
          ? e
          : (e = n("WAWebContactManagerCustomerProfileDeleteMutation.graphql"));
    async function c(e) {
      var t,
        n = o("WAJids").validateLidUserJid(e);
      if (n == null)
        throw r("err")(
          "[CustomerManager] customer profile delete: chatJid must be a LID-based JID",
        );
      var a = await o(
        "WAWebCustomerManagerProfileRequest",
      ).runCustomerProfileRequest(
        "customer profile delete",
        function (e) {
          return o("WAWebRelayClient").commitMutation(u, { lid: n }, e);
        },
        { rateLimitSurface: "write" },
      );
      if (
        (a == null || (t = a.xfb_wa_delete_customer_profile) == null
          ? void 0
          : t.deleted_lid) !== n
      )
        throw r("err")(
          "[CustomerManager] customer profile delete: no confirmed delete",
        );
      o("WALogger").LOG(
        s ||
          (s = babelHelpers.taggedTemplateLiteralLoose([
            "[CustomerManager] customer profile delete: removed ",
            "",
          ])),
        e,
      );
    }
    l.deleteCustomerProfileFromServer = c;
  },
  98,
);
