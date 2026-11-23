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
    async function u(e, t, a, i) {
      (t === void 0 && (t = !1), a != null && c(e, a, t));
      var l = (i == null ? void 0 : i.requestPqBundles) === !0,
        u = {
          userArgs: e.map(function (e) {
            return {
              userJid: o("WAWebWidToJid").widToDeviceJid(e),
              userReason: d(t, l),
            };
          }),
          hasKeyPqsupportTrue:
            l ||
            ((i == null ? void 0 : i.pqSupport) === !0 &&
              o("WAWebPQGatingUtils").isPq1on1MessageEnabled()),
        },
        m = null,
        p =
          n("cr:475") == null
            ? await o("WASmaxPreKeysFetchKeyBundlesRPC").sendFetchKeyBundlesRPC(
                u,
              )
            : await o("WASmaxPreKeysFetchKeyBundlesRPC").sendFetchKeyBundlesRPC(
                u,
                {
                  onResponse: function (t) {
                    m = t;
                  },
                },
              );
      if (p.name === "FetchKeyBundlesResponseServerError") {
        var _ = p.value.errorServerErrors.value;
        throw new (o("WAWebBackendErrors").ServerStatusCodeError)(
          Number(_.code),
          "fetchPrekeys: server error: " + _.code + " " + _.text,
        );
      } else if (p.name === "FetchKeyBundlesResponseRequestError") {
        var f = p.value.errorRequestErrorsFetch.value;
        throw new (o("WAWebBackendErrors").ServerStatusCodeError)(
          Number(f.code),
          "fetchPrekeys: request error: " + f.code + " " + f.text,
        );
      }
      var g = [],
        h = [],
        y = [],
        C =
          n("cr:475") == null
            ? void 0
            : n("cr:475").getRawPrekeyUsers(m, p.value.listUser.length);
      for (var b of p.value.listUser.entries()) {
        var v = b[0],
          S = b[1],
          R =
            S.userFetchKeyBundlesSuccessOrFetchKeyBundlesErrorOrFetchKeyBundlesErrorFallbackMixinGroup;
        e: {
          var L = R;
          if (
            ((typeof L == "object" && L !== null) || typeof L == "function") &&
            L.name === "FetchKeyBundlesUserSuccess" &&
            "value" in L
          ) {
            var E,
              k,
              I,
              T = L.value,
              D = T.deviceIdentityMixin,
              x = T.elementValue,
              $ = T.nonE2EEAttestationOrForceOverrideE2EEStateMixinGroup,
              P = T.pQKeyMixin,
              N = T.preKeyMixin,
              M = T.registrationElementValue,
              w = T.skeyIdKeyIDMixin,
              A = T.skeySignatureElementValue,
              F = T.skeyValueKeyDataMixin,
              O = {
                aeaEvidence:
                  (E =
                    n("cr:475") == null
                      ? void 0
                      : n("cr:475").parseAeaEvidenceFromKeyNode(
                          $,
                          C == null ? void 0 : C[v],
                        )) != null
                    ? E
                    : null,
                deviceIdentity:
                  (k = D == null ? void 0 : D.deviceIdentityElementValue) !=
                  null
                    ? k
                    : null,
                identity: x,
                skey: {
                  id: o("WAParsableXmlNode").convertBytesToUint(
                    w.elementValue,
                    3,
                  ),
                  pubkey: F.elementValue,
                  signature: A,
                },
                key: N
                  ? {
                      id: o("WAParsableXmlNode").convertBytesToUint(
                        N.keyIdKeyIDMixin.elementValue,
                        3,
                      ),
                      pubkey:
                        (I = N.keyValueKeyDataMixin) == null
                          ? void 0
                          : I.elementValue,
                    }
                  : null,
                kyberKey: P
                  ? {
                      id: o("WAParsableXmlNode").convertBytesToUint(
                        P.idKeyIDMixin.elementValue,
                        3,
                      ),
                      publicKey: P.valuePQKeyDataMixin.elementValue,
                      signature: P.signatureElementValue,
                    }
                  : null,
                regId: o("WAParsableXmlNode").convertBytesToUint(M, 4),
                wid: o("WAWebWidFactory").createWid(S.jid),
              };
            O.wid.device != null &&
            O.wid.device !== o("WAJids").DEFAULT_DEVICE_ID
              ? h.push(O)
              : g.push(O);
            break e;
          }
          if (
            ((typeof L == "object" && L !== null) || typeof L == "function") &&
            L.name === "FetchKeyBundlesUserErrorFallback" &&
            "value" in L
          ) {
            var B = L.value,
              W = B.errorCode,
              q = B.errorText;
            y.push(r("err")("fetchPrekeys: list item error: " + W + " " + q));
            break e;
          }
          if (
            ((typeof L == "object" && L !== null) || typeof L == "function") &&
            L.name === "FetchKeyBundlesUserError" &&
            "value" in L
          ) {
            var U = L.value,
              V = U.errorCode,
              H = U.errorText;
            y.push(r("err")("fetchPrekeys: list item error: " + V + " " + H));
            break e;
          }
          throw Error(
            "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
              L,
          );
        }
      }
      if (g.length === 0 && h.length === 0 && y.length === 0)
        throw new s("fetchPrekeys: empty key info");
      return { prekeyBundles: [].concat(g, h), errors: y };
    }
    function c(t, n, a) {
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
    function d(e, t) {
      return e ? "identity" : t ? "pq" : void 0;
    }
    ((l.EmptyKeyInfoError = s), (l.fetchPrekeys = u));
  },
  98,
);
