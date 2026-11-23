__d(
  "MAWRotateCAT",
  [
    "FBLogger",
    "MAWBridge",
    "MAWCatQuery.graphql",
    "MAWCryptoAuthToken",
    "MAWFbCat",
    "MAWODSProxy",
    "MAWQplProxy",
    "WAArrayBufferUtils",
    "WADbDeviceRegistration",
    "WADbMetaTxns",
    "WALogger",
    "WAOdsEnums",
    "WAPromiseRetryLoop",
    "WARetryUtils",
    "createWorkerQuery",
    "getErrorSafe",
    "gkx",
    "qpl",
    "requireDeferred",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u,
      c,
      d,
      m = r("requireDeferred")("WorkerRelayNetwork").__setRef("MAWRotateCAT"),
      p = r("qpl")._(1056847537, "2667"),
      _ = 0;
    function f(t) {
      var n = t.initiator,
        a = t.qplAnnotations;
      _++;
      var i = o("MAWQplProxy").startQplUserFlow(p, {
        int: babelHelpers.extends({}, a.int, { totalRotationCounter: _ }),
        string: babelHelpers.extends({}, a.string, { initiator: n }),
      });
      o("MAWODSProxy").odsBumpEntityKey({
        entity: o("WAOdsEnums").Entity.CAT_ROTATION,
        key: "rotateCAT",
      });
      var l = null;
      return (
        o("WALogger").LOG(
          e ||
            (e = babelHelpers.taggedTemplateLiteralLoose([
              "Starting rotate CAT Task Bridge event",
            ])),
        ),
        r("gkx")("8216")
          ? (i.addAnnotations({ string: { fetchFrom: "worker" } }),
            (l = y(i).catch(function (e) {
              return (
                i.addPoint("fallback_to_ui"),
                C().catch(function (t) {
                  var n = r("getErrorSafe")(t);
                  return (
                    i.addPoint("fallback_error", {
                      string: { errorDescriptionUI: n.message },
                    }),
                    Promise.reject(e)
                  );
                })
              );
            })))
          : (i.addAnnotations({ string: { fetchFrom: "tab" } }), (l = C())),
        l
          .then(function (e) {
            if (!e)
              throw (
                i.addPoint("no_valid_result"),
                r("FBLogger")("messenger_web").mustfixThrow(
                  "CAT Rotation failed: no valid result",
                )
              );
            return o("WADbMetaTxns").saveCAT(e);
          })
          .then(function (e) {
            return (
              i.addPoint("set_fb_cat"),
              o("MAWFbCat").setFbCat(
                o("WAArrayBufferUtils").stringToArrayBuffer(
                  e.encrypted_serialized_cat,
                ),
              ),
              o("WALogger").LOG(
                s ||
                  (s = babelHelpers.taggedTemplateLiteralLoose([
                    "CAT Finished Rotating",
                  ])),
              ),
              i.endSuccess(),
              e
            );
          })
          .catch(function (e) {
            var t = r("getErrorSafe")(e);
            return (
              o("WALogger").ERROR(
                u ||
                  (u = babelHelpers.taggedTemplateLiteralLoose([
                    "[MAWRotateCAT] Got an error while attempting to rotate CAT: ",
                    "",
                  ])),
                t,
              ),
              i.endFail("error", { string: { errorDescription: t.message } }),
              null
            );
          })
      );
    }
    var g = null;
    function h(e) {
      var t;
      if (g != null) return g.promise();
      var n =
          (t = e == null ? void 0 : e.retries) != null
            ? t
            : o("WADbDeviceRegistration").MAX_ROTATE_CRYPTO_AUTH_TOKEN_RETRIES,
        a = 0,
        i = new (o("WAPromiseRetryLoop").PromiseRetryLoop)({
          code: async function (i) {
            var t, l;
            if (a === n)
              throw (
                o("WALogger").COUNT(
                  c ||
                    (c = babelHelpers.taggedTemplateLiteralLoose([
                      "Unable to rotate CAT",
                    ])),
                ),
                r("FBLogger")("messenger_web").mustfixThrow(
                  "Unable to rotate CAT",
                )
              );
            var s = await f({
              initiator: "MAWRotateCAT::tryRotateCAT",
              qplAnnotations: {
                int: babelHelpers.extends(
                  {},
                  (t = e.qplAnnotations) == null ? void 0 : t.int,
                  {
                    retryLoopAllowedRetries: n,
                    retryLoopZeroBasedIteration: a,
                  },
                ),
                string: babelHelpers.extends(
                  {},
                  (l = e.qplAnnotations) == null ? void 0 : l.string,
                  { retryLoopInitiator: e.initiator },
                ),
              },
            });
            (s != null &&
              (o("WALogger").LOG(
                d ||
                  (d = babelHelpers.taggedTemplateLiteralLoose([
                    "Rotate CAT finished, ending rotate CAT promise retry loop",
                  ])),
              ),
              i()),
              a++);
          },
          name: "rotateCAT",
          timer: o("WARetryUtils").fibonacciBackoff(!0),
        });
      return (
        i.start(),
        i.promise().finally(function () {
          g = null;
        }),
        (g = i),
        i.promise()
      );
    }
    async function y(e) {
      return (
        await m.load().then(function (e) {
          var t = e.createWorkerNetworkExecute;
          t();
        }),
        r("createWorkerQuery")(
          r("MAWCatQuery.graphql"),
          {},
          {
            onExecute: function () {
              e.addPoint("query_executed");
            },
            onResponse: function (n) {
              if (
                (e.addPoint("response_received", {
                  bool: {
                    response_is_array: Array.isArray(n),
                    response_is_null: n === null,
                  },
                  int: {
                    response_array_size: Array.isArray(n) ? n.length : void 0,
                  },
                  string: { response_type: typeof n },
                }),
                typeof n == "object")
              ) {
                var t = Array.isArray(n) ? n[0] : n;
                t != null &&
                  e.addAnnotations({
                    string: { response_payload: JSON.stringify(t.payload) },
                    string_array: { response_keys: Object.keys(t) },
                  });
              }
            },
          },
        )
          .then(function (e) {
            return o("MAWCryptoAuthToken").processCatResponse(e);
          })
          .then(function (e) {
            if (e.error != null)
              throw r("FBLogger")("messenger_web").mustfixThrow(e.error);
            return e.success;
          })
      );
    }
    async function C() {
      return (
        await o("MAWQplProxy").workerBridgeDeferred.getPromise(),
        o("MAWBridge")
          .getBridge()
          .sendAndReceive("event", "rotateCryptoAuthToken", {})
      );
    }
    ((l.rotateCAT = f), (l.tryRotateCAT = h));
  },
  98,
);
