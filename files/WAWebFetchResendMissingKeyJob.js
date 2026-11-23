__d(
  "WAWebFetchResendMissingKeyJob",
  [
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
    "WAWebUserUtils",
    "WAWebWidFactory",
    "WAWebWidToJid",
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
      y = new (o("WAPromiseQueue").PromiseQueueMap)();
    async function C(t) {
      await o(
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
      var a = y.waitIfPending(r);
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
        : y.enqueueHandlers(r, b(n));
    }
    async function b(e) {
      o("WALogger").LOG(
        u ||
          (u = babelHelpers.taggedTemplateLiteralLoose([
            "fetchResendMissingKeys: start fetching key for ",
            " wids",
          ])),
        e.length,
      );
      var t = await v(e),
        r = await S(t),
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
      var l = {
          userArgs: i,
          hasKeyFetchPqsupportTrue:
            o("WAWebPQGatingUtils").isPq1on1MessageEnabled(),
        },
        s = null,
        _ =
          n("cr:475") == null
            ? await o(
                "WASmaxPreKeysFetchMissingPreKeysRPC",
              ).sendFetchMissingPreKeysRPC(l)
            : await o(
                "WASmaxPreKeysFetchMissingPreKeysRPC",
              ).sendFetchMissingPreKeysRPC(l, {
                onResponse: function (t) {
                  s = t;
                },
              });
      e: {
        var f = _;
        if (
          ((typeof f == "object" && f !== null) || typeof f == "function") &&
          f.name === "FetchMissingPreKeysResponseSuccess" &&
          "value" in f
        ) {
          var g = f.value;
          return (
            o("WALogger").LOG(
              d ||
                (d = babelHelpers.taggedTemplateLiteralLoose([
                  "fetchResendMissingKeys: start processing keys for ",
                  " wids",
                ])),
              e.length,
            ),
            R(g, s)
          );
          break e;
        }
        if (
          ((typeof f == "object" && f !== null) || typeof f == "function") &&
          f.name === "FetchMissingPreKeysResponseServerError" &&
          "value" in f
        ) {
          var h = f.value,
            y = h.errorServerErrors.value;
          return (
            o("WALogger").LOG(
              m ||
                (m = babelHelpers.taggedTemplateLiteralLoose([
                  "fetchResendMissingKeys failed: ",
                  ":",
                  "",
                ])),
              y.code,
              y.text,
            ),
            Promise.reject(
              new (o("WAWebBackendErrors").ServerStatusCodeError)(
                Number(y.code),
                y.text,
              ),
            )
          );
          break e;
        }
        if (
          ((typeof f == "object" && f !== null) || typeof f == "function") &&
          f.name === "FetchMissingPreKeysResponseRequestError" &&
          "value" in f
        ) {
          var C = f.value,
            b = C.errorRequestErrorsFetch.value;
          return (
            o("WALogger").LOG(
              p ||
                (p = babelHelpers.taggedTemplateLiteralLoose([
                  "fetchResendMissingKeys failed: ",
                  ":",
                  "",
                ])),
              b.code,
              b.text,
            ),
            Promise.reject(
              new (o("WAWebBackendErrors").ServerStatusCodeError)(
                Number(b.code),
                b.text,
              ),
            )
          );
          break e;
        }
        throw Error(
          "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
            f,
        );
      }
    }
    async function v(e) {
      o("WALogger").LOG(
        _ ||
          (_ = babelHelpers.taggedTemplateLiteralLoose([
            "fetchResendMissingKeys: find ",
            " users",
          ])),
        e.length,
      );
      var t = await o("WAWebApiDeviceList").getDeviceIds(e),
        n = new Map();
      return (
        t.forEach(function (t, r) {
          if (t) {
            var a = t.devices;
            a.forEach(function (e) {
              if (e.id !== 0) {
                var r = o("WAWebWidFactory").createDeviceWidFromDeviceListPk(
                  t.id,
                  e.id,
                  e.isHosted,
                );
                n.set(r.toString(), r);
              }
            });
          }
          var i = o("WAWebWidFactory").asUserWidOrThrow(e[r]);
          n.set(i.toString(), i);
        }),
        Array.from(n.values())
      );
    }
    function S(e) {
      var t = e.map(function (e) {
        return o("WAWebUserUtils").isMeDevice(e)
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
      return Promise.all(t);
    }
    async function R(e, t) {
      var r =
          n("cr:475") == null
            ? void 0
            : n("cr:475").getRawPrekeyUsers(t, e.listUser.length),
        a = [],
        i = 0,
        l = [];
      if (
        (e.listUser.forEach(function (e, t) {
          var s =
            e.userFetchMissingPreKeysSuccessOrFetchMissingPreKeysErrorOrFetchMissingPreKeysErrorFallbackMixinGroup;
          switch (s.name) {
            case "FetchMissingPreKeysUserSuccess": {
              var u = s.value,
                c = u.device,
                d = u.jid,
                m = o("WAWebWidFactory").createWid(d),
                p =
                  n("cr:475") == null
                    ? void 0
                    : n("cr:475").getRawPrekeyDevices(
                        r == null ? void 0 : r[t],
                        c.length,
                      );
              c.forEach(function (e, t) {
                var r,
                  s,
                  u,
                  c = e.deviceSuccessOrFetchMissingPreKeysErrorMixinGroup;
                if (c.name === "FetchMissingPreKeysDeviceError") {
                  (i++,
                    l.length < 3 &&
                      l.push(
                        d +
                          ":" +
                          e.id +
                          ": " +
                          c.value.errorCode +
                          ":" +
                          c.value.errorText,
                      ));
                  return;
                }
                var _ = c.value,
                  f = _.preKeyMixin,
                  g = _.pQKeyMixin;
                a.push({
                  aeaEvidence:
                    (r =
                      n("cr:475") == null
                        ? void 0
                        : n("cr:475").parseAeaEvidenceFromKeyNode(
                            _.nonE2EEAttestationOrForceOverrideE2EEStateMixinGroup,
                            p == null ? void 0 : p[t],
                          )) != null
                      ? r
                      : null,
                  identity: _.elementValue,
                  deviceIdentity:
                    (s =
                      (u = _.deviceIdentityMixin) == null
                        ? void 0
                        : u.deviceIdentityElementValue) != null
                      ? s
                      : null,
                  skey: {
                    id: o("WAParsableXmlNode").convertBytesToUint(
                      _.skeyIdKeyIDMixin.elementValue,
                      3,
                    ),
                    pubkey: _.skeyValueKeyDataMixin.elementValue,
                    signature: _.skeySignatureElementValue,
                  },
                  key: f && {
                    id: o("WAParsableXmlNode").convertBytesToUint(
                      f.keyIdKeyIDMixin.elementValue,
                      3,
                    ),
                    pubkey: f.keyValueKeyDataMixin.elementValue,
                  },
                  kyberKey: g
                    ? {
                        id: o("WAParsableXmlNode").convertBytesToUint(
                          g.idKeyIDMixin.elementValue,
                          3,
                        ),
                        publicKey: g.valuePQKeyDataMixin.elementValue,
                        signature: g.signatureElementValue,
                      }
                    : null,
                  regId: o("WAParsableXmlNode").convertBytesToUint(
                    _.registrationElementValue,
                    4,
                  ),
                  wid: o("WAWebWidFactory").createDeviceWidFromDeviceListPk(
                    o("WAWebDeviceListPk").createDeviceListPK(m),
                    e.id,
                    !1,
                  ),
                });
              });
              return;
            }
            case "FetchMissingPreKeysUserErrorFallback":
            case "FetchMissingPreKeysUserError": {
              var _ = s.value;
              (i++,
                l.length < 3 &&
                  l.push(e.jid + ": " + _.errorCode + ":" + _.errorText));
              return;
            }
          }
        }),
        i > 0 &&
          o("WALogger")
            .WARN(
              f ||
                (f = babelHelpers.taggedTemplateLiteralLoose([
                  "fetchResendMissingKeys failed for ",
                  " users/devices => ",
                  "",
                ])),
              i,
              l,
            )
            .sendLogs("fetchResendMissingKeys-user-error"),
        o("WALogger").LOG(
          g ||
            (g = babelHelpers.taggedTemplateLiteralLoose([
              "fetchResendMissingKeys: parsed ",
              " keys",
            ])),
          a.length,
        ),
        a.length > 0)
      ) {
        var s = await o("WAWebProcessKeyBundle").processKeyBundles(a),
          u = s.processedPrekeyCount;
        o("WALogger").LOG(
          h ||
            (h = babelHelpers.taggedTemplateLiteralLoose([
              "fetchResendMissingKeys: ",
              "/",
              " E2E sessions",
            ])),
          u,
          a.length,
        );
      }
    }
    l.fetchResendMissingKeys = C;
  },
  98,
);
