__d(
  "WAWebHandlePairDevice",
  [
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
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = 6e4,
      u = 20 * 1e3,
      c = [],
      d = null;
    async function m(t) {
      var n;
      try {
        n = o("WASmaxMdSetToCompanionRPC").receiveSetToCompanionRPC(t);
      } catch (t) {
        var a = r("getErrorSafe")(t);
        return (
          o("WALogger")
            .ERROR(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "handlePairDevice: error",
                ])),
            )
            .catching(a),
          Promise.reject(a)
        );
      }
      var i = n,
        l = i.makeSetToCompanionResponseClientResponse,
        s = i.parsedRequest,
        u = s.pairDeviceRef.map(function (e) {
          var t = o("WABinary").Binary.build(e.elementValue);
          return t.readString(t.size());
        });
      return (f(u), l());
    }
    function p() {
      return d != null && c.length === 0;
    }
    function _() {
      var e;
      ((e = d) == null || e.cancel(), (d = null), (c = []));
    }
    async function f(e) {
      (await o("WAWebAdvSignatureApi").generateADVSecretKey(),
        (c = e),
        d ||
          (d = new (o("WAShiftTimer").ShiftTimer)(function () {
            if (
              o("WAWebUserPrefsMultiDevice").isRegistered() ||
              !r("WAWebNetworkStatus").online
            )
              (d && d.cancel(), (d = null));
            else if (!c || !c.length)
              (d && d.cancel(),
                (d = null),
                o("WAWebBackendEventBus").BackendEventBus.triggerSetSocketState(
                  o("WAWebSocketConstants").SOCKET_STATE.UNPAIRED_IDLE,
                ));
            else {
              var e = c.length === 6 ? s : u,
                t = c.shift();
              (o("WAWebConnModel").Conn.set({ ref: t, refTTL: e }),
                o("WAWebBackendEventBus").BackendEventBus.triggerSetSocketState(
                  o("WAWebSocketConstants").SOCKET_STATE.UNPAIRED,
                ),
                d && d.onOrAfter(e));
            }
          })),
        d.forceRunNow());
    }
    ((l.handlePairDevice = m),
      (l.isLastLoginRefShown = p),
      (l.discardLoginRefs = _));
  },
  98,
);
