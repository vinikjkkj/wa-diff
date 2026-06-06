__d(
  "WAWebMmsClientMmsDeleteMdHistorySyncBlob",
  [
    "WABase64",
    "WABase64UrlSafe",
    "WAWebHttpErrors",
    "WAWebMmsClientFormatHashUrl",
    "WAWebMmsMediaTypes",
    "WAWebPonyfillsFetch",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      return s.apply(this, arguments);
    }
    function s() {
      return (
        (s = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.auth,
            n = e.companionUserSecret,
            a = e.directPath,
            i = e.encFilehash,
            l = e.encHandle,
            s = e.hostname,
            u = a.split("?")[0],
            c = new TextEncoder().encode(u),
            d = o("WABase64").encodeB64UrlSafe(c),
            m = o("WAWebMmsMediaTypes").MEDIA_TYPES.HISTORY_SYNC,
            p = r("WAWebMmsClientFormatHashUrl")({
              encFilehash: i,
              hostname: s,
              type: m,
              query: {
                token: o("WABase64UrlSafe").urlSafeBase64(i),
                d_md: d,
                auth: t,
                e_handle: l,
              },
            }),
            _ = {};
          l != null && n != null && (_.Companion_User_Secret = n);
          var f = yield r("WAWebPonyfillsFetch")(p, {
            method: "DELETE",
            headers: _,
          });
          if (!f.ok)
            throw new (o("WAWebHttpErrors").HttpStatusCodeError)(
              f.status,
              "MMS Delete error",
            );
        })),
        s.apply(this, arguments)
      );
    }
    l.default = e;
  },
  98,
);
