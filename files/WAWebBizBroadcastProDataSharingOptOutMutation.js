__d(
  "WAWebBizBroadcastProDataSharingOptOutMutation",
  [
    "WAPromiseTimeout",
    "WAWebBizBroadcastProDataSharingOptOutMutation.graphql",
    "WAWebFetchAdAccountToken",
    "WAWebRelayClient",
    "err",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s =
        e !== void 0
          ? e
          : (e = n("WAWebBizBroadcastProDataSharingOptOutMutation.graphql")),
      u = 3e4;
    function c(e, t) {
      return o("WAPromiseTimeout").promiseTimeout(
        d(e, t),
        u,
        "BB Pro data sharing opt-out timed out",
      );
    }
    async function d(e, t) {
      var n, a;
      if (t === "")
        throw r("err")(
          "Cannot opt out an empty phone number from data sharing",
        );
      var i = await o("WAWebFetchAdAccountToken").fetchToken();
      if (i.type !== "success")
        throw r("err")("Failed to fetch ad account token: " + i.type);
      var l = i.token,
        u;
      try {
        u = await o("WAWebRelayClient").commitMutation(
          s,
          { phoneNumbers: [t], subscriberPoolID: e },
          {
            accessToken: { bp_id: l.bp_id, token: l.token, type: "FB" },
            environmentType: "facebook",
          },
        );
      } catch (e) {
        throw (
          o("WAWebFetchAdAccountToken").hasGraphQLAuthError(
            r("getErrorSafe")(e),
          ) && o("WAWebFetchAdAccountToken").markTokenAsInvalid(),
          e
        );
      }
      return (n =
        (a = u) == null ||
        (a = a.xfb_opt_out_phone_numbers_from_message_activity_tracking) == null
          ? void 0
          : a.phone_numbers) != null
        ? n
        : [];
    }
    l.optOutBizBroadcastProRecipientFromDataSharing = c;
  },
  98,
);
