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
    "WAWebProcessKeyBundle",
    "WAWebSignalCommonUtils",
    "WAWebSignalProtocolStore",
    "WAWebUserPrefsMeUser",
    "WAWebWidFactory",
    "WAWebWidToJid",
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
        n = await S(t),
        r = new Map();
      t.forEach(function (e, t) {
        var a = n[t],
          i = o("WAWebWidFactory").asUserWidOrThrow(e).toString(),
          l = r.get(i) || [];
        if (a != null) {
          var s;
          l.push({ id: (s = e.device) != null ? s : 0, regId: a });
        }
        r.set(i, l);
      });
      var a = [];
      (r.forEach(function (e, t) {
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
        a.push(r);
      }),
        o("WALogger").LOG(
          c ||
            (c = babelHelpers.taggedTemplateLiteralLoose([
              "fetchResendMissingKeys: start sending fetching iq for ",
              " wids",
            ])),
          e.length,
        ));
      var i = await o(
        "WASmaxPreKeysFetchMissingPreKeysRPC",
      ).sendFetchMissingPreKeysRPC({ userArgs: a });
      e: {
        var l = i;
        if (
          ((typeof l == "object" && l !== null) || typeof l == "function") &&
          l.name === "FetchMissingPreKeysResponseSuccess" &&
          "value" in l
        ) {
          var s = l.value;
          return (
            o("WALogger").LOG(
              d ||
                (d = babelHelpers.taggedTemplateLiteralLoose([
                  "fetchResendMissingKeys: start processing keys for ",
                  " wids",
                ])),
              e.length,
            ),
            R(s)
          );
          break e;
        }
        if (
          ((typeof l == "object" && l !== null) || typeof l == "function") &&
          l.name === "FetchMissingPreKeysResponseServerError" &&
          "value" in l
        ) {
          var _ = l.value,
            f = _.errorServerErrors.value;
          return (
            o("WALogger").LOG(
              m ||
                (m = babelHelpers.taggedTemplateLiteralLoose([
                  "fetchResendMissingKeys failed: ",
                  ":",
                  "",
                ])),
              f.code,
              f.text,
            ),
            Promise.reject(
              new (o("WAWebBackendErrors").ServerStatusCodeError)(
                Number(f.code),
                f.text,
              ),
            )
          );
          break e;
        }
        if (
          ((typeof l == "object" && l !== null) || typeof l == "function") &&
          l.name === "FetchMissingPreKeysResponseRequestError" &&
          "value" in l
        ) {
          var g = l.value,
            h = g.errorRequestErrorsFetch.value;
          return (
            o("WALogger").LOG(
              p ||
                (p = babelHelpers.taggedTemplateLiteralLoose([
                  "fetchResendMissingKeys failed: ",
                  ":",
                  "",
                ])),
              h.code,
              h.text,
            ),
            Promise.reject(
              new (o("WAWebBackendErrors").ServerStatusCodeError)(
                Number(h.code),
                h.text,
              ),
            )
          );
          break e;
        }
        throw Error(
          "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
            l,
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
                  n = e == null ? void 0 : e.sessions;
                if (n) {
                  for (var r in n)
                    if (n[r].indexInfo.closed === -1)
                      return n[r].registrationId;
                }
                return e == null || (t = e.remote) == null ? void 0 : t.regId;
              });
      });
      return Promise.all(t);
    }
    async function R(e) {
      var t = [],
        n = 0,
        r = [];
      if (
        (e.listUser.forEach(function (e) {
          var a =
            e.userFetchMissingPreKeysSuccessOrFetchMissingPreKeysErrorOrFetchMissingPreKeysErrorFallbackMixinGroup;
          switch (a.name) {
            case "FetchMissingPreKeysUserSuccess": {
              var i = a.value,
                l = i.device,
                s = i.jid,
                u = o("WAWebWidFactory").createWid(s);
              l.forEach(function (e) {
                var n,
                  r,
                  a = e.preKeyMixin;
                t.push({
                  identity: e.elementValue,
                  deviceIdentity:
                    (n =
                      (r = e.deviceIdentityMixin) == null
                        ? void 0
                        : r.deviceIdentityElementValue) != null
                      ? n
                      : null,
                  skey: {
                    id: o("WAParsableXmlNode").convertBytesToUint(
                      e.skeyIdKeyIDMixin.elementValue,
                      3,
                    ),
                    pubkey: e.skeyValueKeyDataMixin.elementValue,
                    signature: e.skeySignatureElementValue,
                  },
                  key: a && {
                    id: o("WAParsableXmlNode").convertBytesToUint(
                      a.keyIdKeyIDMixin.elementValue,
                      3,
                    ),
                    pubkey: a.keyValueKeyDataMixin.elementValue,
                  },
                  regId: o("WAParsableXmlNode").convertBytesToUint(
                    e.registrationElementValue,
                    4,
                  ),
                  wid: o("WAWebWidFactory").createDeviceWidFromDeviceListPk(
                    o("WAWebDeviceListPk").createDeviceListPK(u),
                    e.id,
                    !1,
                  ),
                });
              });
              return;
            }
            case "FetchMissingPreKeysUserErrorFallback":
            case "FetchMissingPreKeysUserError": {
              var c = a.value;
              (n++,
                r.length < 3 &&
                  r.push(e.jid + ": " + c.errorCode + ":" + c.errorText));
              return;
            }
          }
        }),
        n > 0 &&
          o("WALogger")
            .WARN(
              f ||
                (f = babelHelpers.taggedTemplateLiteralLoose([
                  "fetchResendMissingKeys failed for ",
                  " users => ",
                  "",
                ])),
              n,
              r,
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
        var a = await o("WAWebProcessKeyBundle").processKeyBundles(t),
          i = a.processedPrekeyCount;
        o("WALogger").LOG(
          h ||
            (h = babelHelpers.taggedTemplateLiteralLoose([
              "fetchResendMissingKeys: ",
              "/",
              " E2E sessions",
            ])),
          i,
          t.length,
        );
      }
    }
    l.fetchResendMissingKeys = C;
  },
  98,
);
