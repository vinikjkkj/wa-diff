__d(
  "WAWebHandlePairDevice",
  [
    "Promise",
    "WABinary",
    "WALogger",
    "WAShiftTimer",
    "WASmaxMdSetToCompanionRPC",
    "WAWebAdvSignatureApi",
    "WAWebBackendEventBus",
    "WAWebConnModel",
    "WAWebNetworkStatus",
    "WAWebSocketConstants",
    "WAWebUserPrefsMultiDevice",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = 6e4,
      c = 20 * 1e3,
      d = [],
      m = null;
    function p(e) {
      return _.apply(this, arguments);
    }
    function _() {
      return (
        (_ = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          var a;
          try {
            a = o("WASmaxMdSetToCompanionRPC").receiveSetToCompanionRPC(t);
          } catch (t) {
            var i = r("getErrorSafe")(t);
            return (
              o("WALogger")
                .ERROR(
                  e ||
                    (e = babelHelpers.taggedTemplateLiteralLoose([
                      "handlePairDevice: error",
                    ])),
                )
                .catching(i),
              (s || (s = n("Promise"))).reject(i)
            );
          }
          var l = a,
            u = l.makeSetToCompanionResponseClientResponse,
            c = l.parsedRequest,
            d = c.pairDeviceRef.map(function (e) {
              var t = new (o("WABinary").Binary)(e.elementValue);
              return t.readString(t.size());
            });
          return (f(d), u());
        })),
        _.apply(this, arguments)
      );
    }
    function f(e) {
      return g.apply(this, arguments);
    }
    function g() {
      return (
        (g = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          (yield o("WAWebAdvSignatureApi").generateADVSecretKey(),
            (d = e),
            m ||
              (m = new (o("WAShiftTimer").ShiftTimer)(function () {
                if (
                  o("WAWebUserPrefsMultiDevice").isRegistered() ||
                  !r("WAWebNetworkStatus").online
                )
                  (m && m.cancel(), (m = null));
                else if (!d || !d.length)
                  (m && m.cancel(),
                    (m = null),
                    o(
                      "WAWebBackendEventBus",
                    ).BackendEventBus.triggerSetSocketState(
                      o("WAWebSocketConstants").SOCKET_STATE.UNPAIRED_IDLE,
                    ));
                else {
                  var e = d.length === 6 ? u : c,
                    t = d.shift();
                  (o("WAWebConnModel").Conn.set({ ref: t, refTTL: e }),
                    o(
                      "WAWebBackendEventBus",
                    ).BackendEventBus.triggerSetSocketState(
                      o("WAWebSocketConstants").SOCKET_STATE.UNPAIRED,
                    ),
                    m && m.onOrAfter(e));
                }
              })),
            m.forceRunNow());
        })),
        g.apply(this, arguments)
      );
    }
    l.default = p;
  },
  98,
);
