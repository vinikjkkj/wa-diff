__d(
  "WAWebBizBroadcastProUnsubscribeRecipientsMutation",
  [
    "WALogger",
    "WAPromiseTimeout",
    "WAWebBizBroadcastProUnsubscribeRecipientsMutation.graphql",
    "WAWebBizBroadcastRecipientLimitCommon",
    "WAWebFetchAdAccountToken",
    "WAWebRelayClient",
    "err",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u =
        e !== void 0
          ? e
          : (e = n(
              "WAWebBizBroadcastProUnsubscribeRecipientsMutation.graphql",
            )),
      c = 6e4;
    function d(e, t, n) {
      return o("WAPromiseTimeout").promiseTimeout(
        m(e, t, n),
        c,
        "BB Pro unsubscribe recipients timed out",
      );
    }
    async function m(e, t, n) {
      var a, i;
      if (n.length === 0)
        throw r("err")("Cannot unsubscribe an empty recipient selection");
      var l = Array.from(new Set(n));
      if (
        l.length >
        o("WAWebBizBroadcastRecipientLimitCommon").BB_PRO_RECIPIENTS_LIMIT
      )
        throw r("err")(
          "Cannot unsubscribe more than " +
            o("WAWebBizBroadcastRecipientLimitCommon").BB_PRO_RECIPIENTS_LIMIT +
            " recipients",
        );
      var c = await o("WAWebFetchAdAccountToken").fetchToken();
      if (c.type !== "success")
        throw r("err")("Failed to fetch ad account token: " + c.type);
      var d = c.token,
        m;
      try {
        m = await o("WAWebRelayClient").commitMutation(
          u,
          { businessID: e, phoneNumbers: [].concat(n), subscriberPoolID: t },
          {
            accessToken: { bp_id: d.bp_id, token: d.token, type: "FB" },
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
      var p = (a = m) == null ? void 0 : a.bb_pro_unsubscribe_recipients,
        _ = (i = p == null ? void 0 : p.invalid_rows_count) != null ? i : 0,
        f = p == null ? void 0 : p.unique_rows_count,
        g = p == null ? void 0 : p.duplicate_rows_count,
        h = f != null && g != null ? [f, g] : [l.length, n.length - l.length],
        y = h[0],
        C = h[1];
      return (p == null ? void 0 : p.success) !== !0
        ? (o("WALogger")
            .ERROR(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
                  "Failed to unsubscribe broadcast pro recipients; invalid row count: ",
                  "",
                ])),
              _,
            )
            .sendLogs("bb-pro-unsubscribe-recipients-failed"),
          {
            duplicateRowsCount: C,
            invalidRowsCount: _,
            type: "error",
            uniqueRowsCount: y,
          })
        : {
            duplicateRowsCount: C,
            invalidRowsCount: _,
            type: "success",
            uniqueRowsCount: y,
          };
    }
    l.unsubscribeBizBroadcastProRecipients = d;
  },
  98,
);
