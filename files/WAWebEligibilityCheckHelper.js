__d(
  "WAWebEligibilityCheckHelper",
  [
    "WABase64",
    "WATimeUtils",
    "WAWebAccountLinkingDBOperationsAPI",
    "WAWebBackendApi",
    "WAWebCrossposting.flow",
    "WAWebCrosspostingAPI",
    "WAWebCrosspostingCryptoHelper",
    "WAWebCrosspostingDBOperations",
    "WAWebCrosspostingParser",
    "WAWebCrosspostingUploader",
    "WAWebCryptoCrosspostingUtil",
    "WAWebPonyfillsCryptoRandomUUID",
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    var e = o("WAWebAccountLinkingDBOperationsAPI").getAccountLinkingDBOps(
      "crossposting",
    );
    async function s(e) {
      var t = await o("WAWebCrosspostingDBOperations").getCrosspostingUniqueIds(
          e.id,
        ),
        n = new Map();
      return t.length === 0
        ? (n.set(
            e.toString(),
            o("WAWebCrossposting.flow").NoPreviousCrosspostingRecord,
          ),
          n)
        : (n.set(e.toString(), t[0]), n);
    }
    function u() {
      var e = r("WAWebPonyfillsCryptoRandomUUID")(),
        t = e.split("-");
      return (t.splice(2, 0, "waffle"), t.join("-"));
    }
    function c(e) {
      return e.map(function (e) {
        return { waffle_xan: e, waffle_xs: "S" };
      });
    }
    function d(e) {
      return e ===
        o("WAWebCrossposting.flow").CrosspostingDestinationGQLValue.FACEBOOK
        ? "F"
        : e ===
            o("WAWebCrossposting.flow").CrosspostingDestinationGQLValue
              .INSTAGRAM
          ? "I"
          : (function () {
              throw Error(
                "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                  e,
              );
            })();
    }
    function m(e) {
      if (e === "F")
        return o("WAWebCrossposting.flow").CrosspostingDestination.FACEBOOK;
      if (e === "I")
        return o("WAWebCrossposting.flow").CrosspostingDestination.INSTAGRAM;
      throw r("err")("...");
    }
    async function p(e, t, n, r) {
      var a = e.hcbcPerStatus,
        i = e.purposeEncryptionParams,
        l = e.uniqueIds;
      return (
        await o(
          "WAWebCrosspostingCryptoHelper",
        ).validatePurposeEncryptionParams(i, t),
        _(a, r, m(n), l)
      );
    }
    async function _(e, t, n, r) {
      var a = [],
        i = [];
      for (var l of e.entries()) {
        var s = l[0],
          u = l[1],
          c = u.every(function (e) {
            return e === !0;
          });
        c
          ? i.push(
              o(
                "WAWebCrosspostingDBOperations",
              ).updateCrosspostingUniqueIdWithState({
                uniqueId: r[s],
                statusMessageId: t.toString(),
                crosspostingDestination: n,
                crosspostingState: o("WAWebCrossposting.flow").CrosspostingState
                  .SUCCESS,
                directUrlPath: "",
              }),
            )
          : (i.push(
              o("WAWebCrosspostingDBOperations").updateCrosspostingUniqueId(
                r[s],
                t.toString(),
                n,
              ),
            ),
            a.push(t));
      }
      return (await Promise.all(i), a);
    }
    async function f(t) {
      var n = t.caption,
        a = t.destinations,
        i = t.statusBlob,
        l = t.statusKey,
        d = t.statusTimestamp,
        _ = d + o("WATimeUtils").DAY_SECONDS,
        f = await o("WAWebCryptoCrosspostingUtil").generateKeys(),
        g = o("WABase64").encodeB64UrlSafe(f.publicKey),
        h = await s(l),
        y = h.get(l.toString());
      if (y == null) throw r("err")("Unique ID not found for status key");
      var C = u(),
        b = c(a);
      (await Promise.all(
        a.map(function (e) {
          var t = m(e);
          return o("WAWebCrosspostingDBOperations").createOrReplaceCrossposting(
            {
              statusMessageId: l.toString(),
              crosspostingSessionId: C,
              crosspostingDestination: t,
              crosspostingState: o("WAWebCrossposting.flow").CrosspostingState
                .PENDING,
              crosspostingStatusUniqueId: y,
              mediaFilePath: null,
              directUrlPath: null,
            },
          );
        }),
      ),
        o("WAWebBackendApi").frontendFireAndForget("updateCrosspostingInfo", {
          statusMessageId: l.toString(),
          crosspostingInfo: new Map(
            a.map(function (e) {
              return [
                m(e),
                {
                  crosspostingState: o("WAWebCrossposting.flow")
                    .CrosspostingState.PENDING,
                },
              ];
            }),
          ),
        }));
      try {
        var v = await o("WAWebCrosspostingAPI").makeEligibilityRequest({
            expirationTime: _,
            publicKeyBase64: g,
            uniqueIds: Array.from(h.values()),
            sessionId: C,
            destination: b,
          }),
          S = o("WAWebCrosspostingParser").parseEligibilityCheckResponse(v);
        (await e.updateDestinationIdentities(S.crosspostingDestinations),
          await Promise.all(
            a.map(async function (e) {
              var t = await p(S, f, e, l);
              await o("WAWebCrosspostingUploader").prepareUploads({
                caption: n,
                destination: e,
                destinationIdentities: S.crosspostingDestinations,
                keyPair: f,
                purposeEncryptionParams: S.purposeEncryptionParams,
                sessionId: C,
                statusBlob: i,
                statusKeys: t,
                uniqueId: S.uniqueIds[0],
              });
            }),
          ));
      } catch (e) {
        throw e;
      }
    }
    ((l.generateCrosspostSessionId = u),
      (l.translateCrosspostingDestination = d),
      (l.translateWaffleXANToCrosspostingDestination = m),
      (l.handleHCBCPerStatus = _),
      (l.initiateCrossposting = f));
  },
  98,
);
