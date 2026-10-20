__d(
  "WAWebFetchPrekeysJob",
  [
    "WAJids",
    "WAParsableXmlNode",
    "WASmaxPreKeysFetchKeyBundlesRPC",
    "WAWebBackendErrors",
    "WAWebPQGatingUtils",
    "WAWebWidFactory",
    "WAWebWidToJid",
    "asyncToGeneratorRuntime",
    "cr:475",
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    var e = (function (e) {
      function t() {
        return e.apply(this, arguments) || this;
      }
      return (babelHelpers.inheritsLoose(t, e), t);
    })(babelHelpers.wrapNativeSuper(Error));
    function s(e, t) {
      return u.apply(this, arguments);
    }
    function u() {
      return (
        (u = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, a) {
          a === void 0 && (a = !1);
          var i = yield o(
            "WASmaxPreKeysFetchKeyBundlesRPC",
          ).sendFetchKeyBundlesRPC({
            userArgs: t.map(function (e) {
              return {
                userJid: o("WAWebWidToJid").widToDeviceJid(e),
                userReason: a ? "identity" : void 0,
              };
            }),
            hasKeyPqsupportTrue:
              o("WAWebPQGatingUtils").isPq1on1MessageEnabled(),
          });
          if (i.name === "FetchKeyBundlesResponseServerError") {
            var l = i.value.errorServerErrors.value;
            throw new (o("WAWebBackendErrors").ServerStatusCodeError)(
              Number(l.code),
              "fetchPrekeys: server error: " + l.code + " " + l.text,
            );
          } else if (i.name === "FetchKeyBundlesResponseRequestError") {
            var s = i.value.errorRequestErrorsFetch.value;
            throw new (o("WAWebBackendErrors").ServerStatusCodeError)(
              Number(s.code),
              "fetchPrekeys: request error: " + s.code + " " + s.text,
            );
          }
          var u = [],
            c = [],
            d = [];
          for (var m of i.value.listUser) {
            var p =
              m.userFetchKeyBundlesSuccessOrFetchKeyBundlesErrorOrFetchKeyBundlesErrorFallbackMixinGroup;
            e: {
              var _ = p;
              if (
                ((typeof _ == "object" && _ !== null) ||
                  typeof _ == "function") &&
                _.name === "FetchKeyBundlesUserSuccess" &&
                "value" in _
              ) {
                var f,
                  g,
                  h,
                  y = _.value,
                  C = y.deviceIdentityMixin,
                  b = y.elementValue,
                  v = y.nonE2EEAttestationOrForceOverrideE2EEStateMixinGroup,
                  S = y.pQKeyMixin,
                  R = y.preKeyMixin,
                  L = y.registrationElementValue,
                  E = y.skeyIdKeyIDMixin,
                  k = y.skeySignatureElementValue,
                  I = y.skeyValueKeyDataMixin,
                  T = {
                    aeaEvidence:
                      (f =
                        n("cr:475") == null
                          ? void 0
                          : n("cr:475").parseAeaEvidenceFromPrekey(v)) != null
                        ? f
                        : null,
                    deviceIdentity:
                      (g = C == null ? void 0 : C.deviceIdentityElementValue) !=
                      null
                        ? g
                        : null,
                    identity: b,
                    skey: {
                      id: o("WAParsableXmlNode").convertBytesToUint(
                        E.elementValue,
                        3,
                      ),
                      pubkey: I.elementValue,
                      signature: k,
                    },
                    key: R
                      ? {
                          id: o("WAParsableXmlNode").convertBytesToUint(
                            R.keyIdKeyIDMixin.elementValue,
                            3,
                          ),
                          pubkey:
                            (h = R.keyValueKeyDataMixin) == null
                              ? void 0
                              : h.elementValue,
                        }
                      : null,
                    kyberKey: S
                      ? {
                          id: o("WAParsableXmlNode").convertBytesToUint(
                            S.idKeyIDMixin.elementValue,
                            3,
                          ),
                          publicKey: S.valuePQKeyDataMixin.elementValue,
                          signature: S.signatureElementValue,
                        }
                      : null,
                    regId: o("WAParsableXmlNode").convertBytesToUint(L, 4),
                    wid: o("WAWebWidFactory").createWid(m.jid),
                  };
                T.wid.device != null &&
                T.wid.device !== o("WAJids").DEFAULT_DEVICE_ID
                  ? c.push(T)
                  : u.push(T);
                break e;
              }
              if (
                ((typeof _ == "object" && _ !== null) ||
                  typeof _ == "function") &&
                _.name === "FetchKeyBundlesUserErrorFallback" &&
                "value" in _
              ) {
                var D = _.value,
                  x = D.errorCode,
                  $ = D.errorText;
                d.push(
                  r("err")("fetchPrekeys: list item error: " + x + " " + $),
                );
                break e;
              }
              if (
                ((typeof _ == "object" && _ !== null) ||
                  typeof _ == "function") &&
                _.name === "FetchKeyBundlesUserError" &&
                "value" in _
              ) {
                var P = _.value,
                  N = P.errorCode,
                  M = P.errorText;
                d.push(
                  r("err")("fetchPrekeys: list item error: " + N + " " + M),
                );
                break e;
              }
              throw Error(
                "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                  _,
              );
            }
          }
          if (u.length === 0 && c.length === 0 && d.length === 0)
            throw new e("fetchPrekeys: empty key info");
          return { prekeyBundles: [].concat(u, c), errors: d };
        })),
        u.apply(this, arguments)
      );
    }
    ((l.EmptyKeyInfoError = e), (l.fetchPrekeys = s));
  },
  98,
);
