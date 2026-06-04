__d(
  "WAWebMexRequestOTEJob",
  [
    "WALogger",
    "WAWebBackendErrors",
    "WAWebIndividualNewChatMessageCappingLimitUtils",
    "WAWebMessageCappingWamEvent",
    "WAWebMexClient",
    "WAWebMexRequestOTEJobMutation.graphql",
    "WAWebWamEnumMessageCappingActionType",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u = e !== void 0 ? e : (e = n("WAWebMexRequestOTEJobMutation.graphql"));
    function c(e, t) {
      return d.apply(this, arguments);
    }
    function d() {
      return (
        (d = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n,
            r,
            a,
            i,
            l,
            c = {
              input: {
                type: "INDIVIDUAL_NEW_CHAT_THREAD",
                selected_reason: e,
                reason_text: t,
              },
            };
          new (o("WAWebMessageCappingWamEvent").MessageCappingWamEvent)({
            messageCappingActionType: o("WAWebWamEnumMessageCappingActionType")
              .MESSAGE_CAPPING_ACTION_TYPE.API,
            userActionTarget: "request_ote",
            extraAttributes: JSON.stringify(
              o(
                "WAWebIndividualNewChatMessageCappingLimitUtils",
              ).getCappingData() || {},
            ),
          }).commit();
          var d = yield o("WAWebMexClient").fetchQuery(u, c),
            m = d == null ? void 0 : d.xwa2_ncm_request_ote;
          if (m == null)
            throw (
              new (o("WAWebMessageCappingWamEvent").MessageCappingWamEvent)({
                messageCappingActionType: o(
                  "WAWebWamEnumMessageCappingActionType",
                ).MESSAGE_CAPPING_ACTION_TYPE.API,
                userActionTarget: "request_ote_response",
                extraAttributes: JSON.stringify({ api_status: "failure" }),
              }).commit(),
              new (o("WAWebBackendErrors").ServerStatusCodeError)(
                500,
                "Mex unexpected null response for OTE request",
              )
            );
          return (
            new (o("WAWebMessageCappingWamEvent").MessageCappingWamEvent)({
              messageCappingActionType: o(
                "WAWebWamEnumMessageCappingActionType",
              ).MESSAGE_CAPPING_ACTION_TYPE.API,
              userActionTarget: "request_ote_response",
              extraAttributes: JSON.stringify({
                api_status: "success",
                capping_info: m,
              }),
            }).commit(),
            o("WALogger")
              .LOG(
                s ||
                  (s = babelHelpers.taggedTemplateLiteralLoose([
                    "[MEX][CAP] requested OTE",
                  ])),
              )
              .tags("GQL", "MEX", "wa_biz_platform", "CAP"),
            {
              total_quota: (n = m.total_quota) != null ? n : 0,
              used_quota: (r = m.used_quota) != null ? r : 0,
              cycle_start_timestamp:
                (a = m.cycle_start_timestamp) != null ? a : "",
              cycle_end_timestamp: (i = m.cycle_end_timestamp) != null ? i : "",
              server_sent_timestamp:
                (l = m.server_sent_timestamp) != null ? l : "",
              ote_status: m.ote_status,
              mv_status: m.mv_status,
              capping_status: m.capping_status,
            }
          );
        })),
        d.apply(this, arguments)
      );
    }
    l.mexRequestOTE = c;
  },
  98,
);
