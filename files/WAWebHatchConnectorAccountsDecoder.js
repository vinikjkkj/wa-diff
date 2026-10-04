__d(
  "WAWebHatchConnectorAccountsDecoder",
  ["WAWebHatchConnectInfoDecoder", "WAWebHatchJsonReaders"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      var t = o("WAWebHatchJsonReaders").readArray(e, "accounts");
      if (t == null) return null;
      var n = [];
      for (var r of t) {
        var a = u(r);
        if (a == null) return null;
        n.push(a);
      }
      return n;
    }
    function s(e) {
      var t,
        n =
          (t = o("WAWebHatchJsonReaders").readString(e, "link_url")) != null
            ? t
            : o("WAWebHatchJsonReaders").readString(e, "url");
      return n != null && o("WAWebHatchConnectInfoDecoder").isUsableHttpsUrl(n)
        ? n
        : null;
    }
    function u(e) {
      var t,
        n = o("WAWebHatchJsonReaders").readTrimmedString(e, "account_id");
      if (o("WAWebHatchJsonReaders").isBlankText(n)) return null;
      var r =
        (t = o("WAWebHatchJsonReaders").readField(e, "is_default")) != null
          ? t
          : !1;
      return typeof r != "boolean"
        ? null
        : {
            accountId: n,
            displayName: o("WAWebHatchJsonReaders").trimToNull(
              o("WAWebHatchJsonReaders").readTrimmedString(e, "display_name"),
            ),
            isDefault: r,
          };
    }
    ((l.decodeHatchConnectorAccounts = e),
      (l.decodeHatchConnectorAccountLinkUrl = s));
  },
  98,
);
