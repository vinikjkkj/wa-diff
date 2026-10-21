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
          var i = yield o(
            "WASmaxPreKeysFetchKeyBundlesRPC",
          ).sendFetchKeyBundlesRPC({
            userArgs: e.map(function (e) {
              return {
                userJid: o("WAWebWidToJid").widToDeviceJid(e),
                userReason: t ? "identity" : void 0,
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
            var u = i.value.errorRequestErrorsFetch.value;
            throw new (o("WAWebBackendErrors").ServerStatusCodeError)(
              Number(u.code),
              "fetchPrekeys: request error: " + u.code + " " + u.text,
            );
          }
          var c = [],
            m = [],
            p = [];
          for (var _ of i.value.listUser) {
            var f =
              _.userFetchKeyBundlesSuccessOrFetchKeyBundlesErrorOrFetchKeyBundlesErrorFallbackMixinGroup;
            e: {
              var g = f;
              if (
                ((typeof g == "object" && g !== null) ||
                  typeof g == "function") &&
                g.name === "FetchKeyBundlesUserSuccess" &&
                "value" in g
              ) {
                var h,
                  y,
                  C,
                  b = g.value,
                  v = b.deviceIdentityMixin,
                  S = b.elementValue,
                  R = b.nonE2EEAttestationOrForceOverrideE2EEStateMixinGroup,
                  L = b.pQKeyMixin,
                  E = b.preKeyMixin,
                  k = b.registrationElementValue,
                  I = b.skeyIdKeyIDMixin,
                  T = b.skeySignatureElementValue,
                  D = b.skeyValueKeyDataMixin,
                  x = {
                    aeaEvidence:
                      (h =
                        n("cr:475") == null
                          ? void 0
                          : n("cr:475").parseAeaEvidenceFromPrekey(R)) != null
                        ? h
                        : null,
                    deviceIdentity:
                      (y = v == null ? void 0 : v.deviceIdentityElementValue) !=
                      null
                        ? y
                        : null,
                    identity: S,
                    skey: {
                      id: o("WAParsableXmlNode").convertBytesToUint(
                        I.elementValue,
                        3,
                      ),
                      pubkey: D.elementValue,
                      signature: T,
                    },
                    key: E
                      ? {
                          id: o("WAParsableXmlNode").convertBytesToUint(
                            E.keyIdKeyIDMixin.elementValue,
                            3,
                          ),
                          pubkey:
                            (C = E.keyValueKeyDataMixin) == null
                              ? void 0
                              : C.elementValue,
                        }
                      : null,
                    kyberKey: L
                      ? {
                          id: o("WAParsableXmlNode").convertBytesToUint(
                            L.idKeyIDMixin.elementValue,
                            3,
                          ),
                          publicKey: L.valuePQKeyDataMixin.elementValue,
                          signature: L.signatureElementValue,
                        }
                      : null,
                    regId: o("WAParsableXmlNode").convertBytesToUint(k, 4),
                    wid: o("WAWebWidFactory").createWid(_.jid),
                  };
                x.wid.device != null &&
                x.wid.device !== o("WAJids").DEFAULT_DEVICE_ID
                  ? m.push(x)
                  : c.push(x);
                break e;
              }
              if (
                ((typeof g == "object" && g !== null) ||
                  typeof g == "function") &&
                g.name === "FetchKeyBundlesUserErrorFallback" &&
                "value" in g
              ) {
                var $ = g.value,
                  P = $.errorCode,
                  N = $.errorText;
                p.push(
                  r("err")("fetchPrekeys: list item error: " + P + " " + N),
                );
                break e;
              }
              if (
                ((typeof g == "object" && g !== null) ||
                  typeof g == "function") &&
                g.name === "FetchKeyBundlesUserError" &&
                "value" in g
              ) {
                var M = g.value,
                  w = M.errorCode,
                  A = M.errorText;
                p.push(
                  r("err")("fetchPrekeys: list item error: " + w + " " + A),
                );
                break e;
              }
              throw Error(
                "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                  g,
              );
            }
          }
          if (c.length === 0 && m.length === 0 && p.length === 0)
            throw new s("fetchPrekeys: empty key info");
          return { prekeyBundles: [].concat(c, m), errors: p };
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
