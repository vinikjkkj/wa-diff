__d(
  "WAWebFetchPrekeysJob",
  [
    "WAJids",
    "WALogger",
    "WAParsableXmlNode",
    "WASmaxPreKeysFetchKeyBundlesRPC",
    "WAWebBackendErrors",
    "WAWebPQGatingUtils",
    "WAWebPrekeysFetchWamEvent",
    "WAWebWidFactory",
    "WAWebWidToJid",
    "asyncToGeneratorRuntime",
    "cr:475",
    "err",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = (function (e) {
        function t() {
          return e.apply(this, arguments) || this;
        }
        return (babelHelpers.inheritsLoose(t, e), t);
      })(babelHelpers.wrapNativeSuper(Error));
    function u(e, t, n) {
      return c.apply(this, arguments);
    }
    function c() {
      return (
        (c = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, a) {
          (t === void 0 && (t = !1), a != null && d(e, a, t));
          var i = {
              userArgs: e.map(function (e) {
                return {
                  userJid: o("WAWebWidToJid").widToDeviceJid(e),
                  userReason: t ? "identity" : void 0,
                };
              }),
              hasKeyPqsupportTrue:
                o("WAWebPQGatingUtils").isPq1on1MessageEnabled(),
            },
            l = null,
            u =
              n("cr:475") == null
                ? yield o(
                    "WASmaxPreKeysFetchKeyBundlesRPC",
                  ).sendFetchKeyBundlesRPC(i)
                : yield o(
                    "WASmaxPreKeysFetchKeyBundlesRPC",
                  ).sendFetchKeyBundlesRPC(i, {
                    onResponse: function (t) {
                      l = t;
                    },
                  });
          if (u.name === "FetchKeyBundlesResponseServerError") {
            var c = u.value.errorServerErrors.value;
            throw new (o("WAWebBackendErrors").ServerStatusCodeError)(
              Number(c.code),
              "fetchPrekeys: server error: " + c.code + " " + c.text,
            );
          } else if (u.name === "FetchKeyBundlesResponseRequestError") {
            var m = u.value.errorRequestErrorsFetch.value;
            throw new (o("WAWebBackendErrors").ServerStatusCodeError)(
              Number(m.code),
              "fetchPrekeys: request error: " + m.code + " " + m.text,
            );
          }
          var p = [],
            _ = [],
            f = [],
            g =
              n("cr:475") == null
                ? void 0
                : n("cr:475").getRawPrekeyUsers(l, u.value.listUser.length);
          for (var h of u.value.listUser.entries()) {
            var y = h[0],
              C = h[1],
              b =
                C.userFetchKeyBundlesSuccessOrFetchKeyBundlesErrorOrFetchKeyBundlesErrorFallbackMixinGroup;
            e: {
              var v = b;
              if (
                ((typeof v == "object" && v !== null) ||
                  typeof v == "function") &&
                v.name === "FetchKeyBundlesUserSuccess" &&
                "value" in v
              ) {
                var S,
                  R,
                  L,
                  E = v.value,
                  k = E.deviceIdentityMixin,
                  I = E.elementValue,
                  T = E.nonE2EEAttestationOrForceOverrideE2EEStateMixinGroup,
                  D = E.pQKeyMixin,
                  x = E.preKeyMixin,
                  $ = E.registrationElementValue,
                  P = E.skeyIdKeyIDMixin,
                  N = E.skeySignatureElementValue,
                  M = E.skeyValueKeyDataMixin,
                  w = {
                    aeaEvidence:
                      (S =
                        n("cr:475") == null
                          ? void 0
                          : n("cr:475").parseAeaEvidenceFromKeyNode(
                              T,
                              g == null ? void 0 : g[y],
                            )) != null
                        ? S
                        : null,
                    deviceIdentity:
                      (R = k == null ? void 0 : k.deviceIdentityElementValue) !=
                      null
                        ? R
                        : null,
                    identity: I,
                    skey: {
                      id: o("WAParsableXmlNode").convertBytesToUint(
                        P.elementValue,
                        3,
                      ),
                      pubkey: M.elementValue,
                      signature: N,
                    },
                    key: x
                      ? {
                          id: o("WAParsableXmlNode").convertBytesToUint(
                            x.keyIdKeyIDMixin.elementValue,
                            3,
                          ),
                          pubkey:
                            (L = x.keyValueKeyDataMixin) == null
                              ? void 0
                              : L.elementValue,
                        }
                      : null,
                    kyberKey: D
                      ? {
                          id: o("WAParsableXmlNode").convertBytesToUint(
                            D.idKeyIDMixin.elementValue,
                            3,
                          ),
                          publicKey: D.valuePQKeyDataMixin.elementValue,
                          signature: D.signatureElementValue,
                        }
                      : null,
                    regId: o("WAParsableXmlNode").convertBytesToUint($, 4),
                    wid: o("WAWebWidFactory").createWid(C.jid),
                  };
                w.wid.device != null &&
                w.wid.device !== o("WAJids").DEFAULT_DEVICE_ID
                  ? _.push(w)
                  : p.push(w);
                break e;
              }
              if (
                ((typeof v == "object" && v !== null) ||
                  typeof v == "function") &&
                v.name === "FetchKeyBundlesUserErrorFallback" &&
                "value" in v
              ) {
                var A = v.value,
                  F = A.errorCode,
                  O = A.errorText;
                f.push(
                  r("err")("fetchPrekeys: list item error: " + F + " " + O),
                );
                break e;
              }
              if (
                ((typeof v == "object" && v !== null) ||
                  typeof v == "function") &&
                v.name === "FetchKeyBundlesUserError" &&
                "value" in v
              ) {
                var B = v.value,
                  W = B.errorCode,
                  q = B.errorText;
                f.push(
                  r("err")("fetchPrekeys: list item error: " + W + " " + q),
                );
                break e;
              }
              throw Error(
                "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                  v,
              );
            }
          }
          if (p.length === 0 && _.length === 0 && f.length === 0)
            throw new s("fetchPrekeys: empty key info");
          return { prekeyBundles: [].concat(p, _), errors: f };
        })),
        c.apply(this, arguments)
      );
    }
    function d(t, n, a) {
      try {
        new (o("WAWebPrekeysFetchWamEvent").PrekeysFetchWamEvent)({
          onIdentityChange: a,
          prekeysFetchContext: n,
          prekeysFetchCount: t.length,
          prekeysFetchHostedDeviceCount: t.filter(function (e) {
            return e.isHosted();
          }).length,
        }).commit();
      } catch (t) {
        o("WALogger")
          .WARN(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "fetchPrekeys: failed to report the prekey fetch",
              ])),
          )
          .catching(r("getErrorSafe")(t))
          .sendLogs("prekeys-fetch-report-fail");
      }
    }
    ((l.EmptyKeyInfoError = s), (l.fetchPrekeys = u));
  },
  98,
);
