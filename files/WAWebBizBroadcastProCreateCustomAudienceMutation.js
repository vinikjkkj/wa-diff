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
      var t = (e != null ? e : "").trim();
      return t === "" ? null : t;
    }
    function c(e, t) {
      return e.map(function (e) {
        var n,
          r,
          a = (n = e.firstName) == null ? void 0 : n.trim(),
          i = (r = e.lastName) == null ? void 0 : r.trim(),
          l = o("WAWebContactImportFileProcessor").normalizePhoneNumber(
            e.phone,
          ),
          s = a != null && (a === e.phone.trim() || a === l),
          u = !t && !s,
          c = u && a != null && a !== "" ? a : null,
          d = u && i != null && i !== "" ? i : null;
        if (
          c != null &&
          d == null &&
          o("WAWebContactImportTemplateParsingUtils").isCombinedNameRow(
            e.rawRow,
          )
        ) {
          var m = o("WAWebContactImportTemplateParsingUtils").splitFullName(c);
          m.lastName !== "" && ((c = m.firstName), (d = m.lastName));
        }
        return { first_name: c, last_name: d, phone: l };
      });
    }
    function d(e, t, n) {
      return m.apply(this, arguments);
    }
    function m() {
      return (
        (m = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
          var a,
            i = yield o("WAWebFetchAdAccountToken").fetchToken();
          if (i.type !== "success")
            throw r("err")("Failed to fetch access token");
          var l = i.token,
            c = n.map(function (e) {
              return {
                first_name: u(e.first_name),
                last_name: u(e.last_name),
                phone: o(
                  "WAWebContactImportFileProcessor",
                ).normalizePhoneNumber(e.phone),
              };
            }),
            d = c.some(function (e) {
              return e.first_name != null || e.last_name != null;
            }),
            m = yield o("WAWebRelayClient").commitMutation(
              s,
              {
                input: {
                  name: t,
                  phone_numbers: d
                    ? null
                    : c.map(function (e) {
                        return e.phone;
                      }),
                  recipients: d ? c : null,
                  subscriber_pool_id: e,
                },
              },
              {
                accessToken: { type: "FB", token: l.token, bp_id: l.bp_id },
                environmentType: "facebook",
              },
            ),
            p =
              m == null ||
              (a = m.create_wa_marketing_messages_custom_audience) == null
                ? void 0
                : a.custom_audience_id;
          if (p == null) throw r("err")("Failed to create custom audience");
          return p;
        })),
        m.apply(this, arguments)
      );
    }
    ((l.toAudienceRecipients = c), (l.createCustomAudienceList = d));
  },
  98,
);
