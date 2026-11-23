__d(
  "WAWebMmsClientCheckIfUploadExistsMethod",
  [
    "WAExponentialBackoff",
    "WALogger",
    "WAWebMmsClientIsErrorRetryable",
    "WAWebMmsClientMmsBackoffOptions",
    "WAWebMmsClientMmsCheckIfUploadExists",
    "WAWebMmsClientMmsLogError",
    "WAWebMmsClientSelectHost",
    "WAWebMmsOperationsConst",
    "WAWebNetworkStatusStateManager",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e, s, u;
    function c(t) {
      return n;
      async function n(n) {
        var a = n.encFilehash,
          i = n.generateThumbnailOnServer,
          l = n.mediaId,
          c = n.signal,
          d = n.type,
          m = !1,
          p = { encFilehash: n.encFilehash, type: n.type };
        o("WALogger").LOG(
          e ||
            (e = babelHelpers.taggedTemplateLiteralLoose([
              "mmsClient.checkIfUploadExists: start",
            ])),
        );
        try {
          var _ = null,
            f = await o("WAExponentialBackoff").exponentialBackoff(
              babelHelpers.extends({}, r("WAWebMmsClientMmsBackoffOptions"), {
                signal: c,
              }),
              async function (e, u) {
                var p;
                (o("WALogger").LOG(
                  s ||
                    (s = babelHelpers.taggedTemplateLiteralLoose([
                      "mmsClient.checkIfUploadExists: attempt #",
                      "",
                    ])),
                  u + 1,
                ),
                  (p = n.uploadQpl) == null ||
                    p.addAnnotations({
                      bool: {
                        network_online: t.networkStatus.isOnline(),
                        navigator_online: navigator.onLine,
                      },
                    }));
                var f = o(
                  "WAWebNetworkStatusStateManager",
                ).networkOfflineCauseStateManager.get();
                if (f != null) {
                  var g;
                  (g = n.uploadQpl) == null ||
                    g.addAnnotations({
                      string: { network_offline_source: f.source },
                      int: { network_offline_age_ms: Date.now() - f.sinceMs },
                    });
                }
                await t.networkStatus.waitIfOffline();
                try {
                  var h = await t.mediaHosts.getHostsInfo({
                      operation: r("WAWebMmsOperationsConst").UPLOAD,
                      encFilehash: a,
                      type: d,
                      signal: c,
                    }),
                    y = h.auth,
                    C = h.fallbackHost,
                    b = h.selectedHost,
                    v = r("WAWebMmsClientSelectHost")({
                      selectedHost: b,
                      fallbackHost: C,
                      lastHostUsed: _,
                      attemptCount: u,
                      lastFetchMadeProgress: m,
                    });
                  return (
                    (_ = v),
                    await r("WAWebMmsClientMmsCheckIfUploadExists")({
                      auth: y,
                      encFilehash: a,
                      hostname: v.hostname,
                      type: d,
                      signal: c,
                      onProgress: function () {
                        m = !0;
                      },
                      mediaId: l,
                      token: n.token,
                      generateThumbnailOnServer: i,
                    })
                  );
                } catch (t) {
                  var S = r("getErrorSafe")(t);
                  if (o("WAWebMmsClientIsErrorRetryable").isErrorRetryable(S))
                    return e(S);
                  throw S;
                }
              },
            );
          return (
            o("WALogger").LOG(
              u ||
                (u = babelHelpers.taggedTemplateLiteralLoose([
                  "mmsClient.checkIfUploadExists: success",
                ])),
            ),
            f
          );
        } catch (e) {
          var g = r("getErrorSafe")(e);
          throw (
            o("WAWebMmsClientMmsLogError").mmsLogError({
              debug: p,
              error: g,
              source: "mmsClient.checkIfUploadExists",
            }),
            g
          );
        }
      }
    }
    l.createCheckIfUploadExistsWithDependencies = c;
  },
  98,
);
