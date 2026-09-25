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
            var t, a, i;
            return babelHelpers.extends(
              {
                msgKey: e.id.toString(),
                parentMsgKey: n(e).toString(),
                sender:
                  (t = o("WAWebMsgGetters").getSender(e)) == null
                    ? void 0
                    : t.toString(),
                parsedMsgPayload: o(
                  "WAWebDBMessageSerialization",
                ).dbRowFromMessage(babelHelpers.extends({}, e), r),
                type:
                  (a =
                    (i = o("WAWebDBAddOnProviders").addOnProviders.find(
                      function (t) {
                        return t.matches(e);
                      },
                    )) == null
                      ? void 0
                      : i.type) != null
                    ? a
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
