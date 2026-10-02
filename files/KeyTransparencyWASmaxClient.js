__d(
  "KeyTransparencyWASmaxClient",
  [
    "MWFBLogger",
    "WAJids",
    "WASmaxKeyTransparencyMultiSerializedLookupRPC",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = "IQErrorSequencingPending";
    function u(e, t) {
      return c.apply(this, arguments);
    }
    function c() {
      return (
        (c = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, n) {
          o("MWFBLogger")
            .MWLogger()
            .tags(["KeyTransparency"])
            .DEBUG(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "Fetching KT1.0 data for ",
                  " users",
                ])),
              t.length,
            );
          var r = t.map(function (e) {
              var t = n == null ? void 0 : n.get(e);
              return t != null && t.size > 0
                ? {
                    aDVOrDeviceKeyMixinGroupArgs: {
                      deviceKey: {
                        deviceKeyArgs: Array.from(t.entries()).map(
                          function (e) {
                            var t = e[0],
                              n = e[1];
                            return { deviceKeyElementValue: n, deviceKeyId: t };
                          },
                        ),
                      },
                    },
                    hasAuditorSelection: !0,
                    labelOrUserLabelLabelMixinGroupArgs: {
                      userLabel: { userLabel: o("WAJids").toMsgrUserJid(e) },
                    },
                  }
                : {
                    hasAuditorSelection: !0,
                    labelOrUserLabelLabelMixinGroupArgs: {
                      userLabel: { userLabel: o("WAJids").toMsgrUserJid(e) },
                    },
                  };
            }),
            a = yield o(
              "WASmaxKeyTransparencyMultiSerializedLookupRPC",
            ).sendMultiSerializedLookupRPC({
              multiSerializedLookupVersion: "2",
              singleSerializedLookupArgs: r,
            });
          if (a.name === "MultiSerializedLookupResponseError") {
            var i,
              l,
              u = a.value,
              c =
                (i =
                  (l = u.errorKeyTransparencyErrorTypes) == null
                    ? void 0
                    : l.name) != null
                  ? i
                  : "Unknown";
            throw o("MWFBLogger")
              .MWLogger()
              .tags(["KeyTransparency"])
              .mustfixThrow("MultiSerializedLookup RPC failed: " + c);
          }
          if (a.value.singleSerializedProof.length !== t.length)
            throw o("MWFBLogger")
              .MWLogger()
              .tags(["KeyTransparency"])
              .mustfixThrow(
                "Unexpected number of singleSerializedProof results",
              );
          var d = new Map();
          return (
            a.value.singleSerializedProof.forEach(function (e, n) {
              var r = t[n],
                a = e.singleSerializedProofSuccessOrLookupErrorMixinGroup;
              if (a.name === "SingleSerializedProofSuccess") {
                var i = a.value,
                  l = i.rootHashRootHashMixin,
                  u = l.auditorSignature;
                if (u == null) {
                  d.set(
                    r,
                    o("MWFBLogger")
                      .MWLogger()
                      .tags(["KeyTransparency"])
                      .mustfixThrow("Auditor signature missing for user " + r),
                  );
                  return;
                }
                var c = {
                  cloudflareMessage: u.messageElementValue,
                  cloudflarePubKey: u.pubKeyElementValue,
                  cloudflareSignature: u.signatureElementValue,
                  currentEpoch: l.hashEpoch,
                  historyProof: i.serializedProofElementValue,
                  metaSignature: l.signatureElementValue,
                  rootHash: l.hashElementValue,
                };
                d.set(r, c);
              } else {
                var m,
                  p,
                  _ = a.value,
                  f =
                    (m =
                      (p = _.errorKeyTransparencyErrorTypes) == null
                        ? void 0
                        : p.name) != null
                      ? m
                      : "Unknown";
                f === s
                  ? d.set(r, "pending")
                  : d.set(
                      r,
                      o("MWFBLogger")
                        .MWLogger()
                        .tags(["KeyTransparency"])
                        .mustfixThrow(
                          "SerializedLookup failed for user " + r + ": " + f,
                        ),
                    );
              }
            }),
            d
          );
        })),
        c.apply(this, arguments)
      );
    }
    l.fetchKt10DataForMultipleUsers = u;
  },
  98,
);
