__d(
  "WAWebMmsClientFormatDownloadUrl",
  [
    "WABase64UrlSafe",
    "WALogger",
    "WAWebABProps",
    "WAWebMmsClientFormatHashUrl",
    "WAWebPonyfillsUrlSearchParams",
    "WAWebSharedConstants",
    "err",
    "isStringNullOrEmpty",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s;
    function u(t) {
      var n,
        a = t.byteRange,
        i = t.directPath,
        l = t.downloadBucket,
        s = t.encFilehash,
        u = t.hostname,
        d = t.mode,
        m = t.type;
      if (!r("isStringNullOrEmpty")(i)) {
        var p;
        return c({
          encFilehash: s,
          hostname: u,
          directPath: i,
          query:
            ((p = {
              mode: d,
              bytestart: a == null ? void 0 : a.start.toString(),
              byteend: a == null ? void 0 : a.end.toString(),
            }),
            (p[o("WAWebSharedConstants").MMS_URL_MEDIA_TYPE_SEARCH_PARAM] = m),
            (p[o("WAWebSharedConstants").IS_MMS_URL_SEARCH_PARAM] = ""),
            p),
          downloadBucket: l,
          type: m,
        });
      }
      if (
        o("WAWebABProps").getABPropConfigValue(
          "web_deprecate_mms4_hash_based_download",
        )
      )
        throw (
          o("WALogger")
            .ERROR(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "[mms] missing direct path, media type: ",
                  "",
                ])),
              m,
            )
            .sendLogs("media-fault: missing direct path"),
          r("err")("No direct path is available for download, abort")
        );
      if (s == null)
        throw r("err")(
          "No direct path or encFilehash available for download, abort",
        );
      return r("WAWebMmsClientFormatHashUrl")({
        hostname: u,
        type: m,
        encFilehash: s,
        query:
          ((n = { mode: d }),
          (n[o("WAWebSharedConstants").IS_MMS_URL_SEARCH_PARAM] = ""),
          n),
      });
    }
    function c(e) {
      var t = e.directPath,
        n = e.downloadBucket,
        a = e.encFilehash,
        i = e.hostname,
        l = e.query,
        u = e.type,
        c = new URL(t, "https://" + i);
      if (c.hostname !== i)
        throw (
          o("WALogger")
            .ERROR(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
                  "url.hostname: ",
                  ", hostname: ",
                  ", directPath: ",
                  "",
                ])),
              c.hostname,
              i,
              t,
            )
            .sendLogs("malicious directPath"),
          r("err")("malicious directPath")
        );
      var d =
        c.searchParams || new (r("WAWebPonyfillsUrlSearchParams"))(c.search);
      (a != null &&
        a !== "" &&
        d.set("hash", o("WABase64UrlSafe").urlSafeBase64(a)),
        n != null && d.set("_nc_cat", n.toString()));
      var m = o("WAWebABProps").getABPropConfigValue(
        "low_cache_hit_rate_media_types",
      );
      if (m != null) {
        var p = m.split(",");
        p.includes(u) && d.set("_nc_map", "whatsapp-nofna");
      }
      return (
        Object.keys(l).forEach(function (e) {
          var t = l[e];
          t != null && d.set(e, t);
        }),
        "https://" + c.host + c.pathname + "?" + d.toString()
      );
    }
    l.default = u;
  },
  98,
);
