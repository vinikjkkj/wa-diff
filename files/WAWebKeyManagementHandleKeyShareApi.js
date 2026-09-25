__d(
  "WAWebKeyManagementHandleKeyShareApi",
  [
    "Promise",
    "WAJids",
    "WALogger",
    "WALongInt",
    "WASyncdKeyTypes",
    "WAWebSyncdCriticalBootstrapProcessingApi",
    "WAWebSyncdCryptoUtils",
    "WAWebSyncdFatal",
    "WAWebSyncdHandleKeyShare",
    "WAWebSyncdKeyManagementUtils",
    "WAWebSyncdUploadFatalErrorMetric",
    "WAWebUserPrefsMeUser",
    "WAWebWamEnumBootstrapAppStateDataStageCode",
    "WAWebWamEnumMdSyncdFatalErrorCode",
    "asyncToGeneratorRuntime",
    "gkx",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c,
      d,
      m,
      p,
      _,
      f,
      g = 0,
      h = 6,
      y = (function () {
        var t = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, r) {
          o("WAWebSyncdCriticalBootstrapProcessingApi")
            .logCriticalBootstrapStageIfNecessary(
              o("WAWebWamEnumBootstrapAppStateDataStageCode")
                .BOOTSTRAP_APP_STATE_DATA_STAGE_CODE.MISSING_KEYS_RECEIVED,
            )
            .catch(function () {
              o("WALogger")
                .ERROR(
                  e ||
                    (e = babelHelpers.taggedTemplateLiteralLoose([
                      "syncd: failed to log critical bootstrap stage for key share",
                    ])),
                )
                .sendLogs(
                  "failed-to-log-critical-bootstrap-stage-for-key-share",
                );
            });
          var a = r.getDeviceId();
          o("WALogger").LOG(
            s ||
              (s = babelHelpers.taggedTemplateLiteralLoose([
                "syncd: handling key share from device ",
                " with ",
                " keys",
              ])),
            a,
            t.keys.length,
          );
          var i = [],
            l = t.keys;
          if (!l) return (f || (f = n("Promise"))).resolve();
          var _ = 0,
            y = 0,
            C = 0,
            b = [];
          return (
            yield (f || (f = n("Promise"))).all(
              l.map(function (e) {
                var t,
                  n = (t = e.keyId) == null ? void 0 : t.keyId,
                  r = e.keyData,
                  l = r == null ? void 0 : r.keyData,
                  s = l == null ? null : o("WASyncdKeyTypes").toSyncKeyData(l);
                if (!n) {
                  _++;
                  return;
                }
                var m = o("WASyncdKeyTypes").toSyncKeyId(n),
                  p = o("WAWebSyncdCryptoUtils").syncKeyIdToHex(m);
                if (
                  (l != null ? y++ : C++,
                  b.length < 3 && b.push(p),
                  n.byteLength !== h)
                )
                  return (
                    o(
                      "WAWebSyncdUploadFatalErrorMetric",
                    ).uploadFatalErrorMetric({
                      collection: null,
                      mdFatalErrorCode: o("WAWebWamEnumMdSyncdFatalErrorCode")
                        .MD_SYNCD_FATAL_ERROR_CODE.INVALID_KEY_SHARE_KEY_ID,
                    }),
                    o("WALogger")
                      .ERROR(
                        u ||
                          (u = babelHelpers.taggedTemplateLiteralLoose([
                            "syncd: fatal error: key share key id has invalid bytelength of ",
                            "",
                          ])),
                        n.byteLength,
                      )
                      .sendLogs(
                        "syncd: fatal error: key share key id has invalid bytelength of " +
                          n.byteLength,
                      ),
                    o("WAWebSyncdFatal").handleFatalError()
                  );
                if (r) {
                  var f,
                    v,
                    S,
                    R = r.timestamp,
                    L = (f = r.fingerprint) == null ? void 0 : f.currentIndex,
                    E = (v = r.fingerprint) == null ? void 0 : v.rawId,
                    k = (S = r.fingerprint) == null ? void 0 : S.deviceIndexes;
                  if (!s || R == null || L == null || E == null || !k) {
                    if (a !== g) {
                      o("WALogger")
                        .ERROR(
                          c ||
                            (c = babelHelpers.taggedTemplateLiteralLoose([
                              "syncd: fatal error: invalid key share key data (from companion)",
                            ])),
                        )
                        .sendLogs(
                          "syncd: fatal error: invalid key share key data (from companion)",
                        );
                      return;
                    }
                    return (
                      o(
                        "WAWebSyncdUploadFatalErrorMetric",
                      ).uploadFatalErrorMetric({
                        collection: null,
                        mdFatalErrorCode: o("WAWebWamEnumMdSyncdFatalErrorCode")
                          .MD_SYNCD_FATAL_ERROR_CODE.INVALID_KEY_SHARE_KEY_DATA,
                      }),
                      o("WALogger")
                        .ERROR(
                          d ||
                            (d = babelHelpers.taggedTemplateLiteralLoose([
                              "syncd: fatal error: invalid key share key data",
                            ])),
                        )
                        .sendLogs(
                          "syncd: fatal error: invalid key share key data",
                        ),
                      o("WAWebSyncdFatal").handleFatalError()
                    );
                  }
                  var I = {
                    keyId: m,
                    keyEpoch: o("WAWebSyncdKeyManagementUtils").getKeyEpoch(m),
                    keyData: s,
                    timestamp: o("WALongInt").numberOrThrowIfTooLarge(R),
                    fingerprint: {
                      rawId: E,
                      currentIndex: L,
                      deviceIndexes: k,
                    },
                  };
                  i.push({ keyId: m, fullKey: I });
                } else i.push({ keyId: m, fullKey: null });
              }),
            ),
            _ > 0 &&
              o("WALogger").LOG(
                m ||
                  (m = babelHelpers.taggedTemplateLiteralLoose([
                    "syncd: received ",
                    " keys with missing keyID from device ",
                    "",
                  ])),
                _,
                a,
              ),
            (y > 0 || C > 0) &&
              o("WALogger").LOG(
                p ||
                  (p = babelHelpers.taggedTemplateLiteralLoose([
                    "syncd: received key share from device ",
                    ": ",
                    " with keyData, ",
                    " without keyData => ",
                    "",
                  ])),
                a,
                y,
                C,
                b,
              ),
            o("WAWebSyncdHandleKeyShare").handleKeyShare(
              o("WAJids").interpretAsDeviceId(a),
              i,
            )
          );
        });
        return function (n, r) {
          return t.apply(this, arguments);
        };
      })();
    function C(e, t) {
      return o("WAWebUserPrefsMeUser").isMeAccount(t)
        ? y(e, t)
        : (o("WALogger")
            .ERROR(
              _ ||
                (_ = babelHelpers.taggedTemplateLiteralLoose([
                  "syncd: key share wid error",
                ])),
            )
            .sendLogs("syncd: key share wid error"),
          (f || (f = n("Promise"))).resolve());
    }
    function b(e) {
      r("gkx")("26258") || (y = e(y));
    }
    ((l.handleAppStateSyncKeyShare = C),
      (l.setAppStateSyncKeyShareHandler = b));
  },
  98,
);
