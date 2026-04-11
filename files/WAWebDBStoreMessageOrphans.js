__d(
  "WAWebDBStoreMessageOrphans",
  [
    "WALogger",
    "WAWebDBAddOnProviders",
    "WAWebDBMessageSerialization",
    "WAWebMessageAddOnType",
    "WAWebMsgGetters",
    "WAWebSchemaMessageOrphans",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e;
    function s(e, t, n) {
      return u.apply(this, arguments);
    }
    function u() {
      return (
        (u = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, n, r) {
          o("WALogger").LOG(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "storeMessageOrphans:",
              ])),
          );
          var a = t.map(function (e) {
            var t, a;
            return babelHelpers.extends(
              {
                msgKey: e.id.toString(),
                parentMsgKey: n(e).toString(),
                sender: o("WAWebMsgGetters").getSender(e).toString(),
                parsedMsgPayload: o(
                  "WAWebDBMessageSerialization",
                ).dbRowFromMessage(babelHelpers.extends({}, e), r),
                type:
                  (t =
                    (a = o("WAWebDBAddOnProviders").addOnProviders.find(
                      function (t) {
                        return t.matches(e);
                      },
                    )) == null
                      ? void 0
                      : a.type) != null
                    ? t
                    : o("WAWebMessageAddOnType").MessageAddOnType.Unknown,
                senderTimestampMs: e.senderTimestampMs,
                t: e.t,
              },
              (r == null ? void 0 : r.storeReportingInfo) === !0 &&
                e.reportingTokenInfo != null && {
                  reportingTokenInfo: e.reportingTokenInfo,
                },
            );
          });
          yield o("WAWebSchemaMessageOrphans")
            .getMessageOrphanTable()
            .bulkCreateOrReplace(a);
        })),
        u.apply(this, arguments)
      );
    }
    l.storeMessageOrphans = s;
  },
  98,
);
