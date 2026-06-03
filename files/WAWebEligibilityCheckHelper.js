__d(
  "WAWebEligibilityCheckHelper",
  [
    "Promise",
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
    "asyncToGeneratorRuntime",
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = o("WAWebAccountLinkingDBOperationsAPI").getAccountLinkingDBOps(
        "crossposting",
      );
    function u(e) {
      return c.apply(this, arguments);
    }
    function c() {
      return (
        (c = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = yield o(
              "WAWebCrosspostingDBOperations",
            ).getCrosspostingUniqueIds(e.id),
            n = new Map();
          return t.length === 0
            ? (n.set(
                e.toString(),
                o("WAWebCrossposting.flow").NoPreviousCrosspostingRecord,
              ),
              n)
            : (n.set(e.toString(), t[0]), n);
        })),
        c.apply(this, arguments)
      );
    }
    function d() {
      var e = r("WAWebPonyfillsCryptoRandomUUID")(),
        t = e.split("-");
      return (t.splice(2, 0, "waffle"), t.join("-"));
    }
    function m(e) {
      return e.map(function (e) {
        return { waffle_xan: e, waffle_xs: "S" };
      });
    }
    function p(e) {
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
    function _(e) {
      if (e === "F")
        return o("WAWebCrossposting.flow").CrosspostingDestination.FACEBOOK;
      if (e === "I")
        return o("WAWebCrossposting.flow").CrosspostingDestination.INSTAGRAM;
      throw r("err")("...");
    }
    function f(e, t, n, r) {
      return g.apply(this, arguments);
    }
    function g() {
      return (
        (g = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, n, r) {
            var a = e.hcbcPerStatus,
              i = e.purposeEncryptionParams,
              l = e.uniqueIds;
            return (
              yield o(
                "WAWebCrosspostingCryptoHelper",
              ).validatePurposeEncryptionParams(i, t),
              h(a, r, _(n), l)
            );
          },
        )),
        g.apply(this, arguments)
      );
    }
    function h(e, t, n, r) {
      return y.apply(this, arguments);
    }
    function y() {
      return (
        (y = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (t, r, a, i) {
            var l = [],
              s = [];
            for (var u of t.entries()) {
              var c = u[0],
                d = u[1],
                m = d.every(function (e) {
                  return e === !0;
                });
              m
                ? s.push(
                    o(
                      "WAWebCrosspostingDBOperations",
                    ).updateCrosspostingUniqueIdWithState({
                      uniqueId: i[c],
                      statusMessageId: r.toString(),
                      crosspostingDestination: a,
                      crosspostingState: o("WAWebCrossposting.flow")
                        .CrosspostingState.SUCCESS,
                      directUrlPath: "",
                    }),
                  )
                : (s.push(
                    o(
                      "WAWebCrosspostingDBOperations",
                    ).updateCrosspostingUniqueId(i[c], r.toString(), a),
                  ),
                  l.push(r));
            }
            return (yield (e || (e = n("Promise"))).all(s), l);
          },
        )),
        y.apply(this, arguments)
      );
    }
    function C(e) {
      return b.apply(this, arguments);
    }
    function b() {
      return (
        (b = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          var a = t.caption,
            i = t.destinations,
            l = t.statusBlob,
            c = t.statusKey,
            p = t.statusTimestamp,
            g = p + o("WATimeUtils").DAY_SECONDS,
            h = yield o("WAWebCryptoCrosspostingUtil").generateKeys(),
            y = o("WABase64").encodeB64UrlSafe(h.publicKey),
            C = yield u(c),
            b = C.get(c.toString());
          if (b == null) throw r("err")("Unique ID not found for status key");
          var v = d(),
            S = m(i);
          (yield (e || (e = n("Promise"))).all(
            i.map(function (e) {
              var t = _(e);
              return o(
                "WAWebCrosspostingDBOperations",
              ).createOrReplaceCrossposting({
                statusMessageId: c.toString(),
                crosspostingSessionId: v,
                crosspostingDestination: t,
                crosspostingState: o("WAWebCrossposting.flow").CrosspostingState
                  .PENDING,
                crosspostingStatusUniqueId: b,
                mediaFilePath: null,
                directUrlPath: null,
              });
            }),
          ),
            o("WAWebBackendApi").frontendFireAndForget(
              "updateCrosspostingInfo",
              {
                statusMessageId: c.toString(),
                crosspostingInfo: new Map(
                  i.map(function (e) {
                    return [
                      _(e),
                      {
                        crosspostingState: o("WAWebCrossposting.flow")
                          .CrosspostingState.PENDING,
                      },
                    ];
                  }),
                ),
              },
            ));
          try {
            var R = yield o("WAWebCrosspostingAPI").makeEligibilityRequest({
                expirationTime: g,
                publicKeyBase64: y,
                uniqueIds: Array.from(C.values()),
                sessionId: v,
                destination: S,
              }),
              L = o("WAWebCrosspostingParser").parseEligibilityCheckResponse(R);
            (yield s.updateDestinationIdentities(L.crosspostingDestinations),
              yield (e || (e = n("Promise"))).all(
                i.map(
                  (function () {
                    var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                      function* (e) {
                        var t = yield f(L, h, e, c);
                        yield o("WAWebCrosspostingUploader").prepareUploads({
                          caption: a,
                          destination: e,
                          destinationIdentities: L.crosspostingDestinations,
                          keyPair: h,
                          purposeEncryptionParams: L.purposeEncryptionParams,
                          sessionId: v,
                          statusBlob: l,
                          statusKeys: t,
                          uniqueId: L.uniqueIds[0],
                        });
                      },
                    );
                    return function (t) {
                      return e.apply(this, arguments);
                    };
                  })(),
                ),
              ));
          } catch (e) {
            throw e;
          }
        })),
        b.apply(this, arguments)
      );
    }
    ((l.generateCrosspostSessionId = d),
      (l.translateCrosspostingDestination = p),
      (l.translateWaffleXANToCrosspostingDestination = _),
      (l.handleHCBCPerStatus = h),
      (l.initiateCrossposting = C));
  },
  98,
);
