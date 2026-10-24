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
    function u(e, t, n, r) {
      return c.apply(this, arguments);
    }
    function c() {
      return (
        (c = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, a, i) {
            (t === void 0 && (t = !1), a != null && d(e, a, t));
            var l = {
                userArgs: e.map(function (e) {
                  return {
                    userJid: o("WAWebWidToJid").widToDeviceJid(e),
                    userReason: t ? "identity" : void 0,
                  };
                }),
                hasKeyPqsupportTrue:
                  (i == null ? void 0 : i.pqSupport) === !0 &&
                  o("WAWebPQGatingUtils").isPq1on1MessageEnabled(),
              },
              u = null,
              c =
                n("cr:475") == null
                  ? yield o(
                      "WASmaxPreKeysFetchKeyBundlesRPC",
                    ).sendFetchKeyBundlesRPC(l)
                  : yield o(
                      "WASmaxPreKeysFetchKeyBundlesRPC",
                    ).sendFetchKeyBundlesRPC(l, {
                      onResponse: function (t) {
                        u = t;
                      },
                    });
            if (c.name === "FetchKeyBundlesResponseServerError") {
              var m = c.value.errorServerErrors.value;
              throw new (o("WAWebBackendErrors").ServerStatusCodeError)(
                Number(m.code),
                "fetchPrekeys: server error: " + m.code + " " + m.text,
              );
            } else if (c.name === "FetchKeyBundlesResponseRequestError") {
              var p = c.value.errorRequestErrorsFetch.value;
              throw new (o("WAWebBackendErrors").ServerStatusCodeError)(
                Number(p.code),
                "fetchPrekeys: request error: " + p.code + " " + p.text,
              );
            }
            var _ = [],
              f = [],
              g = [],
              h =
                n("cr:475") == null
                  ? void 0
                  : n("cr:475").getRawPrekeyUsers(u, c.value.listUser.length);
            for (var y of c.value.listUser.entries()) {
              var C = y[0],
                b = y[1],
                v =
                  b.userFetchKeyBundlesSuccessOrFetchKeyBundlesErrorOrFetchKeyBundlesErrorFallbackMixinGroup;
              e: {
                var S = v;
                if (
                  ((typeof S == "object" && S !== null) ||
                    typeof S == "function") &&
                  S.name === "FetchKeyBundlesUserSuccess" &&
                  "value" in S
                ) {
                  var R,
                    L,
                    E,
                    k = S.value,
                    I = k.deviceIdentityMixin,
                    T = k.elementValue,
                    D = k.nonE2EEAttestationOrForceOverrideE2EEStateMixinGroup,
                    x = k.pQKeyMixin,
                    $ = k.preKeyMixin,
                    P = k.registrationElementValue,
                    N = k.skeyIdKeyIDMixin,
                    M = k.skeySignatureElementValue,
                    w = k.skeyValueKeyDataMixin,
                    A = {
                      aeaEvidence:
                        (R =
                          n("cr:475") == null
                            ? void 0
                            : n("cr:475").parseAeaEvidenceFromKeyNode(
                                D,
                                h == null ? void 0 : h[C],
                              )) != null
                          ? R
                          : null,
                      deviceIdentity:
                        (L =
                          I == null ? void 0 : I.deviceIdentityElementValue) !=
                        null
                          ? L
                          : null,
                      identity: T,
                      skey: {
                        id: o("WAParsableXmlNode").convertBytesToUint(
                          N.elementValue,
                          3,
                        ),
                        pubkey: w.elementValue,
                        signature: M,
                      },
                      key: $
                        ? {
                            id: o("WAParsableXmlNode").convertBytesToUint(
                              $.keyIdKeyIDMixin.elementValue,
                              3,
                            ),
                            pubkey:
                              (E = $.keyValueKeyDataMixin) == null
                                ? void 0
                                : E.elementValue,
                          }
                        : null,
                      kyberKey: x
                        ? {
                            id: o("WAParsableXmlNode").convertBytesToUint(
                              x.idKeyIDMixin.elementValue,
                              3,
                            ),
                            publicKey: x.valuePQKeyDataMixin.elementValue,
                            signature: x.signatureElementValue,
                          }
                        : null,
                      regId: o("WAParsableXmlNode").convertBytesToUint(P, 4),
                      wid: o("WAWebWidFactory").createWid(b.jid),
                    };
                  A.wid.device != null &&
                  A.wid.device !== o("WAJids").DEFAULT_DEVICE_ID
                    ? f.push(A)
                    : _.push(A);
                  break e;
                }
                if (
                  ((typeof S == "object" && S !== null) ||
                    typeof S == "function") &&
                  S.name === "FetchKeyBundlesUserErrorFallback" &&
                  "value" in S
                ) {
                  var F = S.value,
                    O = F.errorCode,
                    B = F.errorText;
                  g.push(
                    r("err")("fetchPrekeys: list item error: " + O + " " + B),
                  );
                  break e;
                }
                if (
                  ((typeof S == "object" && S !== null) ||
                    typeof S == "function") &&
                  S.name === "FetchKeyBundlesUserError" &&
                  "value" in S
                ) {
                  var W = S.value,
                    q = W.errorCode,
                    U = W.errorText;
                  g.push(
                    r("err")("fetchPrekeys: list item error: " + q + " " + U),
                  );
                  break e;
                }
                throw Error(
                  "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                    S,
                );
              }
            }
            if (_.length === 0 && f.length === 0 && g.length === 0)
              throw new s("fetchPrekeys: empty key info");
            return { prekeyBundles: [].concat(_, f), errors: g };
          },
        )),
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
