__d(
  "oz-player/drm/OzDrmManager",
  [
    "oz-player/drm/OzDrmUtils",
    "oz-player/loggings/OzLoggingUtils",
    "oz-player/loggings/OzOperationLoggerBase",
    "oz-player/shims/OzDOMEventListener",
    "oz-player/shims/OzMaybeNativePromise",
    "oz-player/shims/OzSubscriptionsHandler",
    "oz-player/utils/OzErrorEmitter",
    "oz-player/utils/OzErrorUtils",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = (function () {
      function e(e, t, n) {
        var a = this;
        (n === void 0 && (n = null),
          (this.$1 = null),
          (this.$2 = new Map()),
          (this.$4 = !1),
          (this.$6 = new (r("oz-player/shims/OzSubscriptionsHandler"))()),
          (this.$7 = new (r("oz-player/utils/OzErrorEmitter"))()),
          (this.$8 = !1),
          (this.$9 = null),
          (this.$10 = 0),
          (this.$11 = []),
          (this.$12 = []),
          (this.$22 = function (e, t) {
            (e instanceof r("oz-player/loggings/OzOperationLoggerBase") &&
              e.getError() &&
              e.setResult("failed"),
              t != null && e.setReason(t));
          }),
          (this.$19 = function (e) {
            if (a.$4)
              return r("oz-player/shims/OzMaybeNativePromise").reject(
                o("oz-player/utils/OzErrorUtils").createOzError({
                  type: "OZ_DRM_MANAGER",
                  description:
                    "OzDrmManager destroyed before call to mediaKeySystemAccess.createMediaKeys().",
                }),
              );
            var t =
                a.$5.mediaKeys != null
                  ? r("oz-player/shims/OzMaybeNativePromise").resolve(
                      a.$5.mediaKeys,
                    )
                  : e.createMediaKeys(),
              n = t.then(function (t) {
                return { mediaKeySystemAccess: e, mediaKeys: t };
              });
            return (
              o(
                "oz-player/loggings/OzLoggingUtils",
              ).monitorPromiseAndLogOperation(
                n,
                a.$3,
                "drm_create_media_keys",
                function () {},
                a.$22,
              ),
              n
            );
          }),
          (this.$20 = function (e) {
            if (a.$4)
              return r("oz-player/shims/OzMaybeNativePromise").reject(
                o("oz-player/utils/OzErrorUtils").createOzError({
                  type: "OZ_DRM_MANAGER",
                  description:
                    "OzDrmManager destroyed before call to setMediaKeys()",
                }),
              );
            var t = e.mediaKeys,
              n = e.mediaKeySystemAccess;
            if (!t)
              throw o("oz-player/utils/OzErrorUtils").createOzError({
                type: "OZ_DRM_MANAGER",
                description: "No mediaKeys for mediaKeySystemAccess",
              });
            var i = a.$5.setMediaKeys(t).then(function () {
              if (a.$4)
                return r("oz-player/shims/OzMaybeNativePromise").reject(
                  o("oz-player/utils/OzErrorUtils").createOzError({
                    type: "OZ_DRM_MANAGER",
                    description:
                      "OzDrmManager destroyed after setMediaKeys() called.",
                  }),
                );
              var e = Array.from(a.$2.values()).find(function (e) {
                return e.getKeySystem() === n.keySystem;
              });
              if (!e)
                throw o("oz-player/utils/OzErrorUtils").createOzError({
                  type: "OZ_DRM_MANAGER",
                  description:
                    "Can't find OzDrmProvider for keySystem " + n.keySystem,
                });
              var i = e.getServerCertificate();
              return i
                ? t.setServerCertificate(i).then(function () {
                    return { mediaKeys: t, provider: e };
                  })
                : { mediaKeys: t, provider: e };
            });
            return (
              o(
                "oz-player/loggings/OzLoggingUtils",
              ).monitorPromiseAndLogOperation(
                i,
                a.$3,
                "drm_set_media_keys",
                function () {},
                a.$22,
              ),
              i
            );
          }),
          (this.$21 = function (e) {
            var t = e.mediaKeys,
              n = e.provider,
              i = n.getInitDatas();
            if (i.length === 0)
              return (
                a.$6.addSubscriptions(
                  r("oz-player/shims/OzDOMEventListener").listenDOMEvent(
                    a.$5,
                    "encrypted",
                    function (e) {
                      a.$23(t, n, e).catch(function (e) {
                        a.$14(
                          o(
                            "oz-player/utils/OzErrorUtils",
                          ).convertPromiseRejectionReasonToOzError(e, {
                            type: "OZ_DRM_MANAGER",
                            description: "DRM encrypted rejection",
                          }),
                        );
                      });
                    },
                  ),
                ),
                r("oz-player/shims/OzMaybeNativePromise").resolve([])
              );
            var l = i.map(function (e) {
                return a.$23(t, n, { initData: e.data, initDataType: e.type });
              }),
              s = r("oz-player/shims/OzMaybeNativePromise").all(l);
            return (
              o(
                "oz-player/loggings/OzLoggingUtils",
              ).monitorPromiseAndLogOperation(
                s,
                a.$3,
                "drm_request_license",
                function () {},
                a.$22,
              ),
              s
            );
          }),
          (this.$5 = t),
          (this.$1 = n),
          (this.$3 = e.cloneContext().setType("drm_manager")));
      }
      var t = e.prototype;
      return (
        (t.hasContentProtections = function () {
          return this.$9;
        }),
        (t.onError = function (t) {
          return this.$7.onError(t);
        }),
        (t.$13 = function (t) {
          this.$7.emitError(t);
        }),
        (t.$14 = function (t) {
          var e,
            n,
            r =
              (e = (n = this.$1) == null ? void 0 : n.maxStartEMEAttempts) !=
              null
                ? e
                : -1;
          this.$10 < r ? this.$15() : this.$13(t);
        }),
        (t.addProvider = function (t) {
          this.$2.set(t.getSchemeId(), t);
        }),
        (t.getProviderForSchemeId = function (t) {
          return this.$2.get(t);
        }),
        (t.$16 = function (t) {
          if (!t) return null;
          for (var e = [], n = 0; n < t.length; n++) {
            var r = t[n],
              a = r.$.schemeIdUri,
              i = this.getProviderForSchemeId(a);
            if (i) {
              var l = i.getInitDatas();
              if (
                l.length === 0 &&
                r["cenc:pssh"] &&
                r["cenc:pssh"].length === 1
              ) {
                var s,
                  u = (s = r["cenc:pssh"][0]._) != null ? s : "",
                  c = o("oz-player/drm/OzDrmUtils").base64ToUint8Array(
                    u.replace(/-/g, "+").replace(/_/g, "/"),
                  );
                ((l = [{ data: c, type: "cenc" }]), i.setInitDatas(l));
              }
              e.push({ provider: i, initDatas: l });
            }
          }
          return e;
        }),
        (t.$15 = function () {
          try {
            ((this.$8 = !1), this.startEME(this.$11, this.$12));
          } catch (t) {
            var e = t;
            this.$13(
              o("oz-player/utils/OzErrorUtils").createOzError({
                type: "OZ_DRM_MANAGER",
                description: "Restart EME failed with: " + String(e),
                extra: {},
              }),
            );
          }
        }),
        (t.startEME = function (t, n) {
          var e = this;
          if (!this.$8) {
            ((this.$8 = !0), (this.$10 += 1), (this.$11 = t), (this.$12 = n));
            var r = new Map();
            (this.$17(n, r, "audio"), this.$17(t, r, "video"));
            var a;
            if (
              (r.forEach(function (t, n) {
                a
                  ? (a = a.catch(function () {
                      return e.$18(n, t);
                    }))
                  : (a = e.$18(n, t));
              }),
              !a)
            ) {
              this.$9 = !1;
              return;
            }
            var i = a;
            this.$9 = !0;
            var l = this.$3.getOperationLogger("drm_setup").start();
            i.then(this.$19)
              .then(this.$20)
              .then(this.$21)
              .then(
                function () {
                  return l.log();
                },
                function (t) {
                  var n = o(
                    "oz-player/utils/OzErrorUtils",
                  ).convertPromiseRejectionReasonToOzError(t, {
                    type: "OZ_DRM_MANAGER",
                    description: "DRM definedKeyPromiseChain rejection",
                  });
                  (e.$13(n), l.setResult("failed").setError(n).log());
                },
              );
          }
        }),
        (t.$17 = function (t, n, r) {
          var e = this;
          t.forEach(function (t) {
            var o = e.$16(t.getContentProtectionXml()),
              a = t.getMimeCodecs();
            o != null &&
              o.forEach(function (e) {
                var t = e.provider,
                  o = t.getKeySystem(),
                  i = n.get(o);
                (i ||
                  ((i = {
                    audioCapabilities: new Map(),
                    videoCapabilities: new Map(),
                    distinctiveIdentifier: t.getRequireDistinctiveIdentifier(),
                    persistentState: t.getRequirePersistentState(),
                    sessionTypes: t.getDrmSessionTypes(),
                    initDataTypes: t.getInitDataTypes(),
                  }),
                  n.set(o, i)),
                  r === "audio" &&
                    !i.audioCapabilities.has(a) &&
                    i.audioCapabilities.set(a, {
                      contentType: a,
                      robustness: t.getAudioRobustness(),
                    }),
                  r === "video" &&
                    !i.videoCapabilities.has(a) &&
                    i.videoCapabilities.set(a, {
                      contentType: a,
                      robustness: t.getVideoRobustness(),
                    }));
              });
          });
        }),
        (t.destroy = function () {
          (this.$6.release(), (this.$4 = !0));
        }),
        (t.$18 = function (t, n) {
          var e = this,
            a = {
              audioCapabilities: Array.from(n.audioCapabilities.values()),
              videoCapabilities: Array.from(n.videoCapabilities.values()),
              distinctiveIdentifier: n.distinctiveIdentifier,
              persistentState: n.persistentState,
              sessionTypes: n.sessionTypes,
              initDataTypes: n.initDataTypes,
            },
            i = window.navigator.requestMediaKeySystemAccess(t, [a]);
          return (
            o(
              "oz-player/loggings/OzLoggingUtils",
            ).monitorPromiseAndLogOperation(
              i,
              this.$3,
              "drm_request_media_key_system_access",
              function () {},
              function (n) {
                var o = null;
                return (
                  n instanceof r("oz-player/loggings/OzOperationLoggerBase") &&
                    n.getError() &&
                    (o =
                      "keySystem: " + t + ";domConfig: " + JSON.stringify(a)),
                  e.$22(n, o)
                );
              },
            ),
            i
          );
        }),
        (t.$23 = function (t, n, a) {
          var e = this,
            i = t.createSession();
          return (
            this.$6.addSubscriptions(
              r("oz-player/shims/OzDOMEventListener").listenDOMEvent(
                i,
                "message",
                function (t) {
                  e.$24(i, n, t).catch(function (t) {
                    e.$14(
                      o(
                        "oz-player/utils/OzErrorUtils",
                      ).convertPromiseRejectionReasonToOzError(t, {
                        type: "OZ_DRM_MANAGER",
                        description: "DRM message rejection",
                      }),
                    );
                  });
                },
              ),
              r("oz-player/shims/OzDOMEventListener").listenDOMEvent(
                i,
                "keystatuseschange",
                function (t) {
                  e.$25(i).catch(function (t) {
                    e.$14(
                      o(
                        "oz-player/utils/OzErrorUtils",
                      ).convertPromiseRejectionReasonToOzError(t, {
                        type: "OZ_DRM_MANAGER",
                        description: "DRM keystatuseschange rejection",
                      }),
                    );
                  });
                },
              ),
            ),
            i.generateRequest(a.initDataType, a.initData)
          );
        }),
        (t.$24 = function (t, n, r) {
          var e = this,
            a = n.getLicenseRequestInfo(r.message.slice(0)),
            i = this.$3
              .getOperationLogger("drm_fetch_license")
              .setResource(a.url)
              .start();
          return window.fetch(a.url, a).then(function (r) {
            return (
              r.ok
                ? i.setResult("success").setCode(r.status).log()
                : i
                    .setResult("failed")
                    .setCode(r.status)
                    .setError(
                      o("oz-player/utils/OzErrorUtils").createOzError({
                        type: "OZ_DRM_MANAGER",
                        description:
                          "DRM license fetch HTTP status not OK (" +
                          r.status +
                          ")",
                        extra: { code: r.status.toString() },
                      }),
                    )
                    .log(),
              r.arrayBuffer().then(function (a) {
                var i = new Uint8Array(a),
                  l = n.parseLicenseResponse(i);
                if (l == null || l.byteLength === 0) {
                  var s,
                    u,
                    c =
                      l == null
                        ? "License is null or undefined."
                        : "License is 0 bytes.";
                  r.ok
                    ? a.byteLength === 0 &&
                      (c +=
                        " HTTP status OK (" +
                        r.status +
                        "), but response body is 0 bytes")
                    : (c += " HTTP status not OK (" + r.status + ")");
                  var d = o("oz-player/utils/OzErrorUtils").createOzError({
                      type: "OZ_DRM_MANAGER",
                      description:
                        "No license for " + n.getKeySystem() + " - " + c,
                      extra: {
                        code: r.status.toString(),
                        headers: r.headers,
                        url: r.url,
                      },
                    }),
                    m =
                      (s =
                        (u = e.$1) == null ? void 0 : u.throwNoLicenseError) !=
                      null
                        ? s
                        : !1;
                  if (m) throw d;
                  e.$13(d);
                } else t.update(l);
              })
            );
          });
        }),
        (t.$25 = function (t) {
          return t.expiration < Date.now()
            ? t.close()
            : r("oz-player/shims/OzMaybeNativePromise").resolve();
        }),
        e
      );
    })();
    l.OzDrmManager = e;
  },
  98,
);
