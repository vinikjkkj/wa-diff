__d(
  "WAWebMexFetchNewChatMessageCappingInfoJob",
  [
    "WALogger",
    "WAWebBackendErrors",
    "WAWebIndividualNewChatMessageCappingLimitUtils",
    "WAWebMessageCappingWamEvent",
    "WAWebMexClient",
    "WAWebMexFetchNewChatMessageCappingInfoJobQuery.graphql",
    "WAWebWamEnumMessageCappingActionType",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u =
        e !== void 0
          ? e
          : (e = n("WAWebMexFetchNewChatMessageCappingInfoJobQuery.graphql"));
    function c() {
      return d.apply(this, arguments);
    }
    function d() {
      return (
        (d = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e,
            t,
            n,
            r,
            a,
            i = { input: { type: "INDIVIDUAL_NEW_CHAT_THREAD" } };
          new (o("WAWebMessageCappingWamEvent").MessageCappingWamEvent)({
            messageCappingActionType: o("WAWebWamEnumMessageCappingActionType")
              .MESSAGE_CAPPING_ACTION_TYPE.API,
            userActionTarget: "fetch_capping_data",
            extraAttributes: JSON.stringify(
              o(
                "WAWebIndividualNewChatMessageCappingLimitUtils",
              ).getCappingData() || {},
            ),
          }).commit();
          var l = yield o("WAWebMexClient").fetchQuery(u, i),
            c = l == null ? void 0 : l.xwa2_message_capping_info;
          if ((l == null ? void 0 : l.xwa2_message_capping_info) == null)
            throw (
              new (o("WAWebMessageCappingWamEvent").MessageCappingWamEvent)({
                messageCappingActionType: o(
                  "WAWebWamEnumMessageCappingActionType",
                ).MESSAGE_CAPPING_ACTION_TYPE.API,
                userActionTarget: "fetch_capping_data_response",
                extraAttributes: JSON.stringify({ api_status: "failure" }),
              }).commit(),
              new (o("WAWebBackendErrors").ServerStatusCodeError)(
                500,
                "Mex unexpected null response for new chat message capping info",
              )
            );
          return (
            new (o("WAWebMessageCappingWamEvent").MessageCappingWamEvent)({
              messageCappingActionType: o(
                "WAWebWamEnumMessageCappingActionType",
              ).MESSAGE_CAPPING_ACTION_TYPE.API,
              userActionTarget: "fetch_capping_data_response",
              extraAttributes: JSON.stringify({
                api_status: "success",
                capping_info: l,
              }),
            }).commit(),
            o("WALogger")
              .LOG(
                s ||
                  (s = babelHelpers.taggedTemplateLiteralLoose([
                    "[MEX][CAP] fetched new chat msg capping info",
                  ])),
              )
              .tags("GQL", "MEX", "wa_biz_tools", "CAP"),
            {
              total_quota:
                (e = c == null ? void 0 : c.total_quota) != null ? e : 0,
              used_quota:
                (t = c == null ? void 0 : c.used_quota) != null ? t : 0,
              cycle_start_timestamp:
                (n = c == null ? void 0 : c.cycle_start_timestamp) != null
                  ? n
                  : "",
              cycle_end_timestamp:
                (r = c == null ? void 0 : c.cycle_end_timestamp) != null
                  ? r
                  : "",
              server_sent_timestamp:
                (a = c == null ? void 0 : c.server_sent_timestamp) != null
                  ? a
                  : "",
              ote_status: c == null ? void 0 : c.ote_status,
              mv_status: c == null ? void 0 : c.mv_status,
              capping_status: c == null ? void 0 : c.capping_status,
            }
          );
        })),
        d.apply(this, arguments)
      );
    }
    l.mexFetchNewChatMessageCapping = c;
  },
  98,
);
