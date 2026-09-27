__d(
  "WAWebBizBroadcastProCreateCustomAudienceMutation",
  [
    "WAWebBizBroadcastProCreateCustomAudienceMutation.graphql",
    "WAWebContactImportFileProcessor",
    "WAWebContactImportTemplateParsingUtils",
    "WAWebFetchAdAccountToken",
    "WAWebRelayClient",
    "asyncToGeneratorRuntime",
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s =
        e !== void 0
          ? e
          : (e = n("WAWebBizBroadcastProCreateCustomAudienceMutation.graphql"));
    function u(e) {
      return e.map(function (e) {
        var t,
          n,
          r = (t = e.firstName) == null ? void 0 : t.trim(),
          a = (n = e.lastName) == null ? void 0 : n.trim(),
          i = o("WAWebContactImportFileProcessor").normalizePhoneNumber(
            e.phone,
          ),
          l = r != null && (r === e.phone.trim() || r === i),
          s = !l,
          u = s && r != null && r !== "" ? r : null,
          c = s && a != null && a !== "" ? a : null;
        if (
          u != null &&
          c == null &&
          o("WAWebContactImportTemplateParsingUtils").isCombinedNameRow(
            e.rawRow,
          )
        ) {
          var d = o("WAWebContactImportTemplateParsingUtils").splitFullName(u);
          d.lastName !== "" && ((u = d.firstName), (c = d.lastName));
        }
        return { first_name: u, last_name: c, phone: i };
      });
    }
    function c(e, t, n) {
      return d.apply(this, arguments);
    }
    function d() {
      return (
        (d = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
          var a,
            i = yield o("WAWebFetchAdAccountToken").fetchToken();
          if (i.type !== "success")
            throw r("err")("Failed to fetch access token");
          var l = i.token,
            u = yield o("WAWebRelayClient").commitMutation(
              s,
              {
                input: {
                  name: t,
                  phone_numbers: n.map(function (e) {
                    return e.phone;
                  }),
                  recipients: null,
                  subscriber_pool_id: e,
                },
              },
              {
                accessToken: { type: "FB", token: l.token, bp_id: l.bp_id },
                environmentType: "facebook",
              },
            ),
            c =
              u == null ||
              (a = u.create_wa_marketing_messages_custom_audience) == null
                ? void 0
                : a.custom_audience_id;
          if (c == null) throw r("err")("Failed to create custom audience");
          return c;
        })),
        d.apply(this, arguments)
      );
    }
    ((l.toAudienceRecipients = u), (l.createCustomAudienceList = c));
  },
  98,
);
