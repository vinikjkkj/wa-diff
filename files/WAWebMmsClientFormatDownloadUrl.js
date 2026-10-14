__d(
  "WAWebMmsClientFormatDownloadUrl",
  [
    "WABase64UrlSafe",
    "WALogger",
    "WAWebABProps",
    "WAWebSharedConstants",
    "err",
    "isStringNullOrEmpty",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s;
    function u(t) {
      var n = t.byteRange,
        a = t.directPath,
        i = t.downloadBucket,
        l = t.encFilehash,
        s = t.hostname,
        u = t.mode,
        d = t.type;
      if (!r("isStringNullOrEmpty")(a)) {
        var m;
        return c({
          encFilehash: l,
          hostname: s,
          directPath: a,
          query:
            ((m = {
              mode: u,
              bytestart: n == null ? void 0 : n.start.toString(),
              byteend: n == null ? void 0 : n.end.toString(),
            }),
            (m[o("WAWebSharedConstants").MMS_URL_MEDIA_TYPE_SEARCH_PARAM] = d),
            (m[o("WAWebSharedConstants").IS_MMS_URL_SEARCH_PARAM] = ""),
            m),
          downloadBucket: i,
          type: d,
        });
      }
      throw (
        o("WALogger")
          .ERROR(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "[mms] missing direct path, media type: ",
                "",
              ])),
            d,
          )
          .sendLogs("media-fault: missing direct path"),
        r("err")("No direct path is available for download, abort")
      );
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
      var d = c.searchParams || new URLSearchParams(c.search);
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
