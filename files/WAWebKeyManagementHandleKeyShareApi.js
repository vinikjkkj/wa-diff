__d(
  "WAWebKeyManagementHandleKeyShareApi",
  [
    "WAJids",
    "WALogger",
    "WALongInt",
    "WAWebSyncdCriticalBootstrapProcessingApi",
    "WAWebSyncdCryptoUtils",
    "WAWebSyncdFatal",
    "WAWebSyncdHandleKeyShare",
    "WAWebSyncdKeyManagementUtils",
    "WAWebSyncdKeyTypes",
    "WAWebSyncdUploadFatalErrorMetric",
    "WAWebUserUtils",
    "WAWebWamEnumBootstrapAppStateDataStageCode",
    "WAWebWamEnumMdSyncdFatalErrorCode",
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
      f = 0,
      g = 6,
      h = async function (n, r) {
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
              .sendLogs("failed-to-log-critical-bootstrap-stage-for-key-share");
          });
        var t = r.getDeviceId();
        o("WALogger").LOG(
          s ||
            (s = babelHelpers.taggedTemplateLiteralLoose([
              "syncd: handling key share from device ",
              " with ",
              " keys",
            ])),
          t,
          n.keys.length,
        );
        var a = [],
          i = n.keys;
        if (!i) return Promise.resolve();
        var l = 0,
          _ = 0,
          h = 0,
          y = [];
        return (
          await Promise.all(
            i.map(function (e) {
              var n,
                r = (n = e.keyId) == null ? void 0 : n.keyId,
                i = e.keyData,
                s = i == null ? void 0 : i.keyData,
                m = s == null ? null : o("WAWebSyncdKeyTypes").toSyncKeyData(s);
              if (!r) {
                l++;
                return;
              }
              var p = o("WAWebSyncdKeyTypes").toSyncKeyId(r),
                C = o("WAWebSyncdCryptoUtils").syncKeyIdToHex(p);
              if (
                (s != null ? _++ : h++,
                y.length < 3 && y.push(C),
                r.byteLength !== g)
              )
                return (
                  o("WAWebSyncdUploadFatalErrorMetric").uploadFatalErrorMetric({
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
                      r.byteLength,
                    )
                    .sendLogs(
                      "syncd: fatal error: key share key id has invalid bytelength of " +
                        r.byteLength,
                    ),
                  o("WAWebSyncdFatal").handleFatalError()
                );
              if (i) {
                var b,
                  v,
                  S,
                  R = i.timestamp,
                  L = (b = i.fingerprint) == null ? void 0 : b.currentIndex,
                  E = (v = i.fingerprint) == null ? void 0 : v.rawId,
                  k = (S = i.fingerprint) == null ? void 0 : S.deviceIndexes;
                if (!m || R == null || L == null || E == null || !k) {
                  if (t !== f) {
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
                  keyId: p,
                  keyEpoch: o("WAWebSyncdKeyManagementUtils").getKeyEpoch(p),
                  keyData: m,
                  timestamp: o("WALongInt").numberOrThrowIfTooLarge(R),
                  fingerprint: { rawId: E, currentIndex: L, deviceIndexes: k },
                };
                a.push({ keyId: p, fullKey: I });
              } else a.push({ keyId: p, fullKey: null });
            }),
          ),
          l > 0 &&
            o("WALogger").LOG(
              m ||
                (m = babelHelpers.taggedTemplateLiteralLoose([
                  "syncd: received ",
                  " keys with missing keyID from device ",
                  "",
                ])),
              l,
              t,
            ),
          (_ > 0 || h > 0) &&
            o("WALogger").LOG(
              p ||
                (p = babelHelpers.taggedTemplateLiteralLoose([
                  "syncd: received key share from device ",
                  ": ",
                  " with keyData, ",
                  " without keyData => ",
                  "",
                ])),
              t,
              _,
              h,
              y,
            ),
          o("WAWebSyncdHandleKeyShare").handleKeyShare(
            o("WAJids").interpretAsDeviceId(t),
            a,
          )
        );
      };
    function y(e, t) {
      return o("WAWebUserUtils").isMeAccount(t)
        ? h(e, t)
        : (o("WALogger")
            .ERROR(
              _ ||
                (_ = babelHelpers.taggedTemplateLiteralLoose([
                  "syncd: key share wid error",
                ])),
            )
            .sendLogs("syncd: key share wid error"),
          Promise.resolve());
    }
    l.handleAppStateSyncKeyShare = y;
  },
  98,
);
