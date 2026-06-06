__d(
  "WAWebKeyManagementHandleKeyShareApi",
  [
    "WAJids",
    "WALogger",
    "WALongInt",
    "WASyncdKeyManagementUtils",
    "WASyncdKeyTypes",
    "WAWebSyncdCriticalBootstrapProcessingApi",
    "WAWebSyncdCryptoUtils",
    "WAWebSyncdFatal",
    "WAWebSyncdHandleKeyShare",
    "WAWebSyncdUploadFatalErrorMetric",
    "WAWebUserPrefsMeUser",
    "WAWebWamEnumBootstrapAppStateDataStageCode",
    "WAWebWamEnumMdSyncdFatalErrorCode",
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
      _ = 0,
      f = 6,
      g = async function (n, r) {
        o(
          "WAWebSyncdCriticalBootstrapProcessingApi",
        ).logCriticalBootstrapStageIfNecessary(
          o("WAWebWamEnumBootstrapAppStateDataStageCode")
            .BOOTSTRAP_APP_STATE_DATA_STAGE_CODE.MISSING_KEYS_RECEIVED,
        );
        var t = r.getDeviceId();
        o("WALogger").LOG(
          e ||
            (e = babelHelpers.taggedTemplateLiteralLoose([
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
          p = 0,
          g = 0,
          h = [];
        return (
          await Promise.all(
            i.map(function (e) {
              var n,
                r = (n = e.keyId) == null ? void 0 : n.keyId,
                i = e.keyData,
                d = i == null ? void 0 : i.keyData,
                m = d == null ? null : o("WASyncdKeyTypes").toSyncKeyData(d);
              if (!r) {
                l++;
                return;
              }
              var y = o("WASyncdKeyTypes").toSyncKeyId(r),
                C = o("WAWebSyncdCryptoUtils").syncKeyIdToHex(y);
              if (
                (d != null ? p++ : g++,
                h.length < 3 && h.push(C),
                r.byteLength !== f)
              )
                return (
                  o("WAWebSyncdUploadFatalErrorMetric").uploadFatalErrorMetric(
                    o("WAWebWamEnumMdSyncdFatalErrorCode")
                      .MD_SYNCD_FATAL_ERROR_CODE.INVALID_KEY_SHARE_KEY_ID,
                    null,
                  ),
                  o("WALogger")
                    .ERROR(
                      s ||
                        (s = babelHelpers.taggedTemplateLiteralLoose([
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
                  if (t !== _) {
                    o("WALogger")
                      .ERROR(
                        u ||
                          (u = babelHelpers.taggedTemplateLiteralLoose([
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
                    ).uploadFatalErrorMetric(
                      o("WAWebWamEnumMdSyncdFatalErrorCode")
                        .MD_SYNCD_FATAL_ERROR_CODE.INVALID_KEY_SHARE_KEY_DATA,
                      null,
                    ),
                    o("WALogger")
                      .ERROR(
                        c ||
                          (c = babelHelpers.taggedTemplateLiteralLoose([
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
                  keyId: y,
                  keyEpoch: o("WASyncdKeyManagementUtils").getKeyEpoch(y),
                  keyData: m,
                  timestamp: o("WALongInt").numberOrThrowIfTooLarge(R),
                  fingerprint: { rawId: E, currentIndex: L, deviceIndexes: k },
                };
                a.push({ keyId: y, fullKey: I });
              } else a.push({ keyId: y, fullKey: null });
            }),
          ),
          l > 0 &&
            o("WALogger").LOG(
              d ||
                (d = babelHelpers.taggedTemplateLiteralLoose([
                  "syncd: received ",
                  " keys with missing keyID from device ",
                  "",
                ])),
              l,
              t,
            ),
          (p > 0 || g > 0) &&
            o("WALogger").LOG(
              m ||
                (m = babelHelpers.taggedTemplateLiteralLoose([
                  "syncd: received key share from device ",
                  ": ",
                  " with keyData, ",
                  " without keyData => ",
                  "",
                ])),
              t,
              p,
              g,
              h,
            ),
          o("WAWebSyncdHandleKeyShare").handleKeyShare(
            o("WAJids").interpretAsDeviceId(t),
            a,
          )
        );
      };
    function h(e, t) {
      return o("WAWebUserPrefsMeUser").isMeAccount(t)
        ? g(e, t)
        : (o("WALogger")
            .ERROR(
              p ||
                (p = babelHelpers.taggedTemplateLiteralLoose([
                  "syncd: key share wid error",
                ])),
            )
            .sendLogs("syncd: key share wid error"),
          Promise.resolve());
    }
    function y(e) {
      r("gkx")("26258") || (g = e(g));
    }
    ((l.handleAppStateSyncKeyShare = h),
      (l.setAppStateSyncKeyShareHandler = y));
  },
  98,
);
