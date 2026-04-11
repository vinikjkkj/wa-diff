__d(
  "WAWebKeyManagementHandleKeyShareApi",
  [
    "Promise",
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
      f = 0,
      g = 6,
      h = (function () {
        var t = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, r) {
          o(
            "WAWebSyncdCriticalBootstrapProcessingApi",
          ).logCriticalBootstrapStageIfNecessary(
            o("WAWebWamEnumBootstrapAppStateDataStageCode")
              .BOOTSTRAP_APP_STATE_DATA_STAGE_CODE.MISSING_KEYS_RECEIVED,
          );
          var a = r.getDeviceId();
          o("WALogger").LOG(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "syncd: handling key share from device ",
                " with ",
                " keys",
              ])),
            a,
            t.keys.length,
          );
          var i = [],
            l = t.keys;
          if (!l) return (_ || (_ = n("Promise"))).resolve();
          var p = 0,
            h = 0,
            y = 0,
            C = [];
          return (
            yield (_ || (_ = n("Promise"))).all(
              l.map(function (e) {
                var t,
                  n = (t = e.keyId) == null ? void 0 : t.keyId,
                  r = e.keyData,
                  l = r == null ? void 0 : r.keyData,
                  d = l == null ? null : o("WASyncdKeyTypes").toSyncKeyData(l);
                if (!n) {
                  p++;
                  return;
                }
                var m = o("WASyncdKeyTypes").toSyncKeyId(n),
                  _ = o("WAWebSyncdCryptoUtils").syncKeyIdToHex(m);
                if (
                  (l != null ? h++ : y++,
                  C.length < 3 && C.push(_),
                  n.byteLength !== g)
                )
                  return (
                    o(
                      "WAWebSyncdUploadFatalErrorMetric",
                    ).uploadFatalErrorMetric(
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
                        n.byteLength,
                      )
                      .sendLogs(
                        "syncd: fatal error: key share key id has invalid bytelength of " +
                          n.byteLength,
                      ),
                    o("WAWebSyncdFatal").handleFatalError()
                  );
                if (r) {
                  var b,
                    v,
                    S,
                    R = r.timestamp,
                    L = (b = r.fingerprint) == null ? void 0 : b.currentIndex,
                    E = (v = r.fingerprint) == null ? void 0 : v.rawId,
                    k = (S = r.fingerprint) == null ? void 0 : S.deviceIndexes;
                  if (!d || R == null || L == null || E == null || !k) {
                    if (a !== f) {
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
                    keyId: m,
                    keyEpoch: o("WASyncdKeyManagementUtils").getKeyEpoch(m),
                    keyData: d,
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
            p > 0 &&
              o("WALogger").LOG(
                d ||
                  (d = babelHelpers.taggedTemplateLiteralLoose([
                    "syncd: received ",
                    " keys with missing keyID from device ",
                    "",
                  ])),
                p,
                a,
              ),
            (h > 0 || y > 0) &&
              o("WALogger").LOG(
                m ||
                  (m = babelHelpers.taggedTemplateLiteralLoose([
                    "syncd: received key share from device ",
                    ": ",
                    " with keyData, ",
                    " without keyData => ",
                    "",
                  ])),
                a,
                h,
                y,
                C,
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
    function y(e, t) {
      return o("WAWebUserPrefsMeUser").isMeAccountNonLid(t)
        ? h(e, t)
        : (o("WALogger")
            .ERROR(
              p ||
                (p = babelHelpers.taggedTemplateLiteralLoose([
                  "syncd: key share wid error",
                ])),
            )
            .sendLogs("syncd: key share wid error"),
          (_ || (_ = n("Promise"))).resolve());
    }
    function C(e) {
      r("gkx")("26258") || (h = e(h));
    }
    ((l.handleAppStateSyncKeyShare = y),
      (l.setAppStateSyncKeyShareHandler = C));
  },
  98,
);
