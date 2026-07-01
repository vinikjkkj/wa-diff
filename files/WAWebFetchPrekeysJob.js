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
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e, t) {
      return s.apply(this, arguments);
    }
    function s() {
      return (
        (s = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          t === void 0 && (t = !1);
          var n = yield o(
            "WASmaxPreKeysFetchKeyBundlesRPC",
          ).sendFetchKeyBundlesRPC({
            userArgs: e.map(function (e) {
              return {
                userJid: o("WAWebWidToJid").widToDeviceJid(e),
                hasUserReasonIdentity: t,
              };
            }),
            hasKeyPqsupportTrue:
              o("WAWebPQGatingUtils").isPq1on1MessageEnabled(),
          });
          if (n.name === "FetchKeyBundlesResponseServerError") {
            var a = n.value.errorServerErrors.value;
            throw new (o("WAWebBackendErrors").ServerStatusCodeError)(
              Number(a.code),
              "fetchPrekeys: server error: " + a.code + " " + a.text,
            );
          } else if (n.name === "FetchKeyBundlesResponseRequestError") {
            var i = n.value.errorRequestErrorsFetch.value;
            throw new (o("WAWebBackendErrors").ServerStatusCodeError)(
              Number(i.code),
              "fetchPrekeys: request error: " + i.code + " " + i.text,
            );
          }
          var l = [],
            s = [],
            u = [];
          for (var c of n.value.listUser) {
            var d =
              c.userFetchKeyBundlesSuccessOrFetchKeyBundlesErrorOrFetchKeyBundlesErrorFallbackMixinGroup;
            e: {
              var m = d;
              if (
                ((typeof m == "object" && m !== null) ||
                  typeof m == "function") &&
                m.name === "FetchKeyBundlesUserSuccess" &&
                "value" in m
              ) {
                var p,
                  _,
                  f = m.value,
                  g = f.deviceIdentityMixin,
                  h = f.elementValue,
                  y = f.pQKeyMixin,
                  C = f.preKeyMixin,
                  b = f.registrationElementValue,
                  v = f.skeyIdKeyIDMixin,
                  S = f.skeySignatureElementValue,
                  R = f.skeyValueKeyDataMixin,
                  L = {
                    deviceIdentity:
                      (p = g == null ? void 0 : g.deviceIdentityElementValue) !=
                      null
                        ? p
                        : null,
                    identity: h,
                    skey: {
                      id: o("WAParsableXmlNode").convertBytesToUint(
                        v.elementValue,
                        3,
                      ),
                      pubkey: R.elementValue,
                      signature: S,
                    },
                    key: C
                      ? {
                          id: o("WAParsableXmlNode").convertBytesToUint(
                            C.keyIdKeyIDMixin.elementValue,
                            3,
                          ),
                          pubkey:
                            (_ = C.keyValueKeyDataMixin) == null
                              ? void 0
                              : _.elementValue,
                        }
                      : null,
                    kyberKey: y
                      ? {
                          id: o("WAParsableXmlNode").convertBytesToUint(
                            y.pqkeyIdKeyIDMixin.elementValue,
                            3,
                          ),
                          publicKey: y.pqkeyValuePQKeyDataMixin.elementValue,
                          signature: y.pqkeySignatureElementValue,
                        }
                      : null,
                    regId: o("WAParsableXmlNode").convertBytesToUint(b, 4),
                    wid: o("WAWebWidFactory").createWid(c.jid),
                  };
                L.wid.device != null &&
                L.wid.device !== o("WAJids").DEFAULT_DEVICE_ID
                  ? s.push(L)
                  : l.push(L);
                break e;
              }
              if (
                ((typeof m == "object" && m !== null) ||
                  typeof m == "function") &&
                m.name === "FetchKeyBundlesUserErrorFallback" &&
                "value" in m
              ) {
                var E = m.value,
                  k = E.errorCode,
                  I = E.errorText;
                u.push(
                  r("err")("fetchPrekeys: list item error: " + k + " " + I),
                );
                break e;
              }
              if (
                ((typeof m == "object" && m !== null) ||
                  typeof m == "function") &&
                m.name === "FetchKeyBundlesUserError" &&
                "value" in m
              ) {
                var T = m.value,
                  D = T.errorCode,
                  x = T.errorText;
                u.push(
                  r("err")("fetchPrekeys: list item error: " + D + " " + x),
                );
                break e;
              }
              throw Error(
                "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                  m,
              );
            }
          }
          if (l.length === 0 && s.length === 0 && u.length === 0)
            throw r("err")("fetchPrekeys: empty key info");
          return { prekeyBundles: [].concat(l, s), errors: u };
        })),
        s.apply(this, arguments)
      );
    }
    l.fetchPrekeys = e;
  },
  98,
);
