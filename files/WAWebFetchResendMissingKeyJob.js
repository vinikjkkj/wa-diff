__d(
  "WAWebFetchResendMissingKeyJob",
  [
    "Promise",
    "WALogger",
    "WAParsableXmlNode",
    "WAPromiseQueue",
    "WASmaxPreKeysFetchMissingPreKeysRPC",
    "WAWap",
    "WAWebApiDeviceList",
    "WAWebBackendErrors",
    "WAWebDeviceListPk",
    "WAWebEventsWaitForOfflineDeliveryEnd",
    "WAWebPQGatingUtils",
    "WAWebProcessKeyBundle",
    "WAWebSignalCommonUtils",
    "WAWebSignalProtocolStore",
    "WAWebUserPrefsMeUser",
    "WAWebWidFactory",
    "WAWebWidToJid",
    "asyncToGeneratorRuntime",
    "cr:475",
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
      g,
      h,
      y,
      C = new (o("WAPromiseQueue").PromiseQueueMap)();
    function b(e) {
      return v.apply(this, arguments);
    }
    function v() {
      return (
        (v = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          yield o(
            "WAWebEventsWaitForOfflineDeliveryEnd",
          ).waitForOfflineDeliveryEnd();
          var n = Array.from(
              new Set(
                t.map(function (e) {
                  return o("WAWebWidFactory").asUserWidOrThrow(e).toString();
                }),
              ),
            ).map(function (e) {
              return o("WAWebWidFactory").createUserWidOrThrow(e);
            }),
            r = n
              .map(function (e) {
                return e.toString();
              })
              .join();
          o("WALogger").LOG(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "fetchResendMissingKeys ",
                "",
              ])),
            r,
          );
          var a = C.waitIfPending(r);
          return a
            ? (o("WALogger").LOG(
                s ||
                  (s = babelHelpers.taggedTemplateLiteralLoose([
                    "fetchResendMissingKeys deduped ",
                    "",
                  ])),
                r,
              ),
              a)
            : C.enqueueHandlers(r, S(n));
        })),
        v.apply(this, arguments)
      );
    }
    function S(e) {
      return R.apply(this, arguments);
    }
    function R() {
      return (
        (R = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          o("WALogger").LOG(
            u ||
              (u = babelHelpers.taggedTemplateLiteralLoose([
                "fetchResendMissingKeys: start fetching key for ",
                " wids",
              ])),
            e.length,
          );
          var t = yield L(e),
            r = yield k(t),
            a = new Map();
          t.forEach(function (e, t) {
            var n = r[t],
              i = o("WAWebWidFactory").asUserWidOrThrow(e).toString(),
              l = a.get(i) || [];
            if (n != null) {
              var s;
              l.push({ id: (s = e.device) != null ? s : 0, regId: n });
            }
            a.set(i, l);
          });
          var i = [];
          (a.forEach(function (e, t) {
            var n = o("WAWebWidToJid").widToUserJid(
                o("WAWebWidFactory").createUserWidOrThrow(t),
              ),
              r = {
                userJid: n,
                hasUserReasonIdentity: !1,
                deviceArgs: e.map(function (e) {
                  return {
                    deviceId: e.id,
                    registrationElementValue: o("WAWap").BIG_ENDIAN_CONTENT(
                      e.regId,
                    ),
                  };
                }),
              };
            i.push(r);
          }),
            o("WALogger").LOG(
              c ||
                (c = babelHelpers.taggedTemplateLiteralLoose([
                  "fetchResendMissingKeys: start sending fetching iq for ",
                  " wids",
                ])),
              e.length,
            ));
          var l = yield o(
            "WASmaxPreKeysFetchMissingPreKeysRPC",
          ).sendFetchMissingPreKeysRPC({
            userArgs: i,
            hasKeyFetchPqsupportTrue:
              o("WAWebPQGatingUtils").isPq1on1MessageEnabled(),
          });
          e: {
            var s = l;
            if (
              ((typeof s == "object" && s !== null) ||
                typeof s == "function") &&
              s.name === "FetchMissingPreKeysResponseSuccess" &&
              "value" in s
            ) {
              var _ = s.value;
              return (
                o("WALogger").LOG(
                  d ||
                    (d = babelHelpers.taggedTemplateLiteralLoose([
                      "fetchResendMissingKeys: start processing keys for ",
                      " wids",
                    ])),
                  e.length,
                ),
                I(_)
              );
              break e;
            }
            if (
              ((typeof s == "object" && s !== null) ||
                typeof s == "function") &&
              s.name === "FetchMissingPreKeysResponseServerError" &&
              "value" in s
            ) {
              var f = s.value,
                g = f.errorServerErrors.value;
              return (
                o("WALogger").LOG(
                  m ||
                    (m = babelHelpers.taggedTemplateLiteralLoose([
                      "fetchResendMissingKeys failed: ",
                      ":",
                      "",
                    ])),
                  g.code,
                  g.text,
                ),
                (y || (y = n("Promise"))).reject(
                  new (o("WAWebBackendErrors").ServerStatusCodeError)(
                    Number(g.code),
                    g.text,
                  ),
                )
              );
              break e;
            }
            if (
              ((typeof s == "object" && s !== null) ||
                typeof s == "function") &&
              s.name === "FetchMissingPreKeysResponseRequestError" &&
              "value" in s
            ) {
              var h = s.value,
                C = h.errorRequestErrorsFetch.value;
              return (
                o("WALogger").LOG(
                  p ||
                    (p = babelHelpers.taggedTemplateLiteralLoose([
                      "fetchResendMissingKeys failed: ",
                      ":",
                      "",
                    ])),
                  C.code,
                  C.text,
                ),
                (y || (y = n("Promise"))).reject(
                  new (o("WAWebBackendErrors").ServerStatusCodeError)(
                    Number(C.code),
                    C.text,
                  ),
                )
              );
              break e;
            }
            throw Error(
              "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                s,
            );
          }
        })),
        R.apply(this, arguments)
      );
    }
    function L(e) {
      return E.apply(this, arguments);
    }
    function E() {
      return (
        (E = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          o("WALogger").LOG(
            _ ||
              (_ = babelHelpers.taggedTemplateLiteralLoose([
                "fetchResendMissingKeys: find ",
                " users",
              ])),
            e.length,
          );
          var t = yield o("WAWebApiDeviceList").getDeviceIds(e),
            n = new Map();
          return (
            t.forEach(function (t, r) {
              if (t) {
                var a = t.devices;
                a.forEach(function (e) {
                  if (e.id !== 0) {
                    var r = o(
                      "WAWebWidFactory",
                    ).createDeviceWidFromDeviceListPk(t.id, e.id, e.isHosted);
                    n.set(r.toString(), r);
                  }
                });
              }
              var i = o("WAWebWidFactory").asUserWidOrThrow(e[r]);
              n.set(i.toString(), i);
            }),
            Array.from(n.values())
          );
        })),
        E.apply(this, arguments)
      );
    }
    function k(e) {
      var t = e.map(function (e) {
        return o("WAWebUserPrefsMeUser").isMeDevice(e)
          ? o("WAWebSignalProtocolStore")
              .getSignalProtocolStore()
              .getLocalRegistrationId()
          : o("WAWebSignalProtocolStore")
              .getSignalProtocolStore()
              .loadSession(
                String(o("WAWebSignalCommonUtils").createSignalAddress(e)),
              )
              .then(function (e) {
                var t,
                  n = e instanceof ArrayBuffer ? void 0 : e,
                  r = n == null ? void 0 : n.sessions;
                if (r) {
                  for (var o in r)
                    if (r[o].indexInfo.closed === -1)
                      return r[o].registrationId;
                }
                return n == null || (t = n.remote) == null ? void 0 : t.regId;
              });
      });
      return (y || (y = n("Promise"))).all(t);
    }
    function I(e) {
      return T.apply(this, arguments);
    }
    function T() {
      return (
        (T = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = [],
            r = 0,
            a = [];
          if (
            (e.listUser.forEach(function (e) {
              var i =
                e.userFetchMissingPreKeysSuccessOrFetchMissingPreKeysErrorOrFetchMissingPreKeysErrorFallbackMixinGroup;
              switch (i.name) {
                case "FetchMissingPreKeysUserSuccess": {
                  var l = i.value,
                    s = l.device,
                    u = l.jid,
                    c = o("WAWebWidFactory").createWid(u);
                  s.forEach(function (e) {
                    var i,
                      l,
                      s,
                      d = e.deviceSuccessOrFetchMissingPreKeysErrorMixinGroup;
                    if (d.name === "FetchMissingPreKeysDeviceError") {
                      (r++,
                        a.length < 3 &&
                          a.push(
                            u +
                              ":" +
                              e.id +
                              ": " +
                              d.value.errorCode +
                              ":" +
                              d.value.errorText,
                          ));
                      return;
                    }
                    var m = d.value,
                      p = m.preKeyMixin,
                      _ = m.pQKeyMixin;
                    t.push({
                      aeaEvidence:
                        (i =
                          n("cr:475") == null
                            ? void 0
                            : n("cr:475").parseAeaEvidenceFromPrekey(
                                m.nonE2EEAttestationOrForceOverrideE2EEStateMixinGroup,
                              )) != null
                          ? i
                          : null,
                      identity: m.elementValue,
                      deviceIdentity:
                        (l =
                          (s = m.deviceIdentityMixin) == null
                            ? void 0
                            : s.deviceIdentityElementValue) != null
                          ? l
                          : null,
                      skey: {
                        id: o("WAParsableXmlNode").convertBytesToUint(
                          m.skeyIdKeyIDMixin.elementValue,
                          3,
                        ),
                        pubkey: m.skeyValueKeyDataMixin.elementValue,
                        signature: m.skeySignatureElementValue,
                      },
                      key: p && {
                        id: o("WAParsableXmlNode").convertBytesToUint(
                          p.keyIdKeyIDMixin.elementValue,
                          3,
                        ),
                        pubkey: p.keyValueKeyDataMixin.elementValue,
                      },
                      kyberKey: _
                        ? {
                            id: o("WAParsableXmlNode").convertBytesToUint(
                              _.idKeyIDMixin.elementValue,
                              3,
                            ),
                            publicKey: _.valuePQKeyDataMixin.elementValue,
                            signature: _.signatureElementValue,
                          }
                        : null,
                      regId: o("WAParsableXmlNode").convertBytesToUint(
                        m.registrationElementValue,
                        4,
                      ),
                      wid: o("WAWebWidFactory").createDeviceWidFromDeviceListPk(
                        o("WAWebDeviceListPk").createDeviceListPK(c),
                        e.id,
                        !1,
                      ),
                    });
                  });
                  return;
                }
                case "FetchMissingPreKeysUserErrorFallback":
                case "FetchMissingPreKeysUserError": {
                  var d = i.value;
                  (r++,
                    a.length < 3 &&
                      a.push(e.jid + ": " + d.errorCode + ":" + d.errorText));
                  return;
                }
              }
            }),
            r > 0 &&
              o("WALogger")
                .WARN(
                  f ||
                    (f = babelHelpers.taggedTemplateLiteralLoose([
                      "fetchResendMissingKeys failed for ",
                      " users/devices => ",
                      "",
                    ])),
                  r,
                  a,
                )
                .sendLogs("fetchResendMissingKeys-user-error"),
            o("WALogger").LOG(
              g ||
                (g = babelHelpers.taggedTemplateLiteralLoose([
                  "fetchResendMissingKeys: parsed ",
                  " keys",
                ])),
              t.length,
            ),
            t.length > 0)
          ) {
            var i = yield o("WAWebProcessKeyBundle").processKeyBundles(t),
              l = i.processedPrekeyCount;
            o("WALogger").LOG(
              h ||
                (h = babelHelpers.taggedTemplateLiteralLoose([
                  "fetchResendMissingKeys: ",
                  "/",
                  " E2E sessions",
                ])),
              l,
              t.length,
            );
          }
        })),
        T.apply(this, arguments)
      );
    }
    l.fetchResendMissingKeys = b;
  },
  98,
);
