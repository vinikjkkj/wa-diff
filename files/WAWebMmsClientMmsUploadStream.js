__d(
  "WAWebMmsClientMmsUploadStream",
  [
    "WALogger",
    "WAWebHttpErrors",
    "WAWebHttpExtendedFetch",
    "WAWebMmsClientErrors",
    "WAWebMmsClientFormatUploadUrl",
    "WAWebMmsClientMmsLogError",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s;
    function u(e, t, n) {
      e: throw e === 401
        ? new (o("WAWebMmsClientErrors").MMSUnauthorizedError)(t, { url: n })
        : e === 413
          ? new (o("WAWebMmsClientErrors").MediaTooLargeError)(t, { url: n })
          : e === 415
            ? new (o("WAWebMmsClientErrors").MediaInvalidError)(
                t + ": hash mismatch",
                { url: n },
              )
            : e === 507
              ? new (o("WAWebMmsClientErrors").MMSThrottleError)(
                  "mmsUploadStreamFinalize",
                  { url: n },
                )
              : new (o("WAWebHttpErrors").HttpStatusCodeError)(e, t, {
                  url: n,
                });
    }
    function c(e) {
      var t = e.auth,
        n = e.byteEnd,
        a = e.byteStart,
        i = e.chunk,
        l = e.encFilehash,
        s = e.generateThumbnailOnServer,
        c = e.hostname,
        d = e.mediaId,
        m = e.onProgress,
        p = e.signal,
        _ = e.token,
        f = e.type,
        g = r("WAWebMmsClientFormatUploadUrl")({
          auth: t,
          encFilehash: l,
          type: f,
          hostname: c,
          query: { stream: 1, server_thumb_gen: s === !0 ? 1 : void 0 },
          byteRange: { start: a, end: n },
          mediaId: d,
          token: _,
        });
      return o("WAWebHttpExtendedFetch")
        .extendedFetch(g, { method: "post", body: i, signal: p, onProgress: m })
        .then(function (e) {
          e.ok || u(e.status, "mmsUploadStream", g);
        });
    }
    function d(e) {
      return m.apply(this, arguments);
    }
    function m() {
      return (
        (m = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          var n = t.auth,
            a = t.encFilehash,
            i = t.finalHash,
            l = t.generateThumbnailOnServer,
            c = t.hostname,
            d = t.mediaId,
            m = t.signal,
            p = t.type,
            _ = r("WAWebMmsClientFormatUploadUrl")({
              auth: n,
              encFilehash: a,
              type: p,
              hostname: c,
              query: {
                stream: 1,
                final_hash: i,
                server_thumb_gen: l === !0 ? 1 : void 0,
              },
              mediaId: d,
              token: a,
            }),
            f = { encFilehash: a, type: p, url: _ };
          o("WALogger").LOG(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "mmsUploadStreamFinalize: start",
              ])),
          );
          try {
            var g = yield o("WAWebHttpExtendedFetch")
              .extendedFetch(_, { method: "post", signal: m })
              .then(function (e) {
                return (
                  e.ok || u(e.status, "mmsUploadStreamFinalize", _),
                  e.json()
                );
              })
              .then(function (e) {
                if (e.direct_path == null || e.direct_path === "")
                  throw new (o("WAWebHttpErrors").HttpInvalidResponseError)(
                    "mmsUploadStreamFinalize: missing direct_path",
                  );
                if (e.url == null || e.url === "")
                  throw new (o("WAWebHttpErrors").HttpInvalidResponseError)(
                    "mmsUploadStreamFinalize: missing url",
                  );
                return {
                  directPath: e.direct_path,
                  url: e.url,
                  handle: e.handle,
                };
              });
            return (
              o("WALogger").LOG(
                s ||
                  (s = babelHelpers.taggedTemplateLiteralLoose([
                    "mmsUploadStreamFinalize: success",
                  ])),
              ),
              g
            );
          } catch (e) {
            throw (
              o("WAWebMmsClientMmsLogError").mmsLogError("mmsUpload", e, f, !1),
              e
            );
          }
        })),
        m.apply(this, arguments)
      );
    }
    ((l.mmsUploadStream = c), (l.mmsUploadStreamFinalize = d));
  },
  98,
);
