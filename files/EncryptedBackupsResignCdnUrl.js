__d(
  "EncryptedBackupsResignCdnUrl",
  ["EBLSResignCdnUrlDeferred", "WAResultOrError", "getSafeQplErrorMessage"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e;
    function s(t) {
      var n = t.deliveryObjectId,
        r = t.logger,
        a = t.mediaDownloadFlow,
        i = t.mediaKey,
        l = t.mediaType,
        s = t.msgId,
        c = t.protocolMsgId,
        d = t.sortOrderMs;
      return (
        a.addPoint("resign_cdn_url_start"),
        u({
          deliveryObjectId: n,
          mediaDownloadFlow: {
            addAnnotations: function (t) {
              a == null || a.addAnnotations(babelHelpers.extends({}, t));
            },
            addPoint: function (t, n) {
              a == null || a.addPoint(t, babelHelpers.extends({}, n));
            },
          },
          mediaKey: i,
          mediaType: l,
          msgId: s,
          protocolMsgId: c,
          sortOrderMs: d,
        })
          .then(function (e) {
            return e.success
              ? (a == null || a.addPoint("resign_cdn_url_end"), e)
              : (a.addPoint("resign_cdn_url_fail", {
                  string: { resignCdnUrlFailReason: e.error },
                }),
                e);
          })
          .catch(function (t) {
            return (
              r.ERROR(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "resignCdnUrl runtime-error: ",
                    "",
                  ])),
                String(t),
              ),
              a.addPoint("resign_cdn_url_fail", {
                string: {
                  resignCdnUrlFailReason: o(
                    "getSafeQplErrorMessage",
                  ).getSafeQPLErrorMessage(t),
                },
              }),
              o("WAResultOrError").makeError("resign-cdn-url-runtime-error")
            );
          })
      );
    }
    async function u(e) {
      var t = e.deliveryObjectId,
        n = e.mediaDownloadFlow,
        r = e.mediaKey,
        a = e.mediaType,
        i = e.msgId,
        l = e.protocolMsgId,
        s = e.sortOrderMs,
        u = await o("EBLSResignCdnUrlDeferred").eblsResignCdnUrlWithGraphQL({
          chatJid: l.chat,
          deliveryObjectId: t,
          externalId: l.externalId,
          mediaDownloadFlow: n,
          mediaKey: r,
          mediaType: a,
          sortOrderMs: s,
        });
      return u.success ? o("WAResultOrError").makeResult(u.value) : u;
    }
    l.resignCdnUrl = s;
  },
  98,
);
