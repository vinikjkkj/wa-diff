__d(
  "WAWebVoipOngoingTransferCalls",
  [
    "Promise",
    "WAWebABProps",
    "WAWebCallCollection",
    "WAWebVoipCallTransferEntryPointStore",
    "WAWebVoipEventConstants",
    "WAWebVoipTransferredCallRegistry",
    "react",
    "useWAWebABPropConfigValue",
    "useWAWebEventTargetValue",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u = (s || (s = o("react"))).useMemo,
      c = 1e4;
    function d(t) {
      return (
        t === void 0 && (t = c),
        o("WAWebABProps").getABPropConfigValue(
          "enable_1on1_call_transfer_entry_point",
        ) !== !0
          ? (e || (e = n("Promise"))).resolve(null)
          : o(
              "WAWebVoipCallTransferEntryPointStore",
            ).WAWebVoipCallTransferEntryPointStore.waitForEntryPoint(t)
      );
    }
    function m() {
      var e,
        t = _(
          o(
            "WAWebVoipCallTransferEntryPointStore",
          ).WAWebVoipCallTransferEntryPointStore.getEntryPoints(),
          (e = r("WAWebCallCollection").activeCall) == null ? void 0 : e.id,
        );
      return t.size > 0 &&
        o("WAWebABProps").getABPropConfigValue(
          "enable_1on1_call_transfer_entry_point",
        )
        ? t
        : new Set();
    }
    function p() {
      var e = o("useWAWebABPropConfigValue").useABPropConfigValue(
          "enable_1on1_call_transfer_entry_point",
        ),
        t = r("useWAWebEventTargetValue")(
          o("WAWebVoipCallTransferEntryPointStore")
            .WAWebVoipCallTransferEntryPointStore,
          "change",
          function () {
            return o(
              "WAWebVoipCallTransferEntryPointStore",
            ).WAWebVoipCallTransferEntryPointStore.getEntryPoints();
          },
        ),
        n = r("useWAWebEventTargetValue")(
          r("WAWebCallCollection"),
          o("WAWebVoipEventConstants").getChangeEvent(
            o("WAWebVoipEventConstants").VoipCallCollectionEvents.ACTIVE_CALL,
          ),
          function () {
            return r("WAWebCallCollection").activeCall;
          },
        ),
        a = r("useWAWebEventTargetValue")(
          n,
          "change:id",
          function () {
            return n == null ? void 0 : n.id;
          },
          [n],
        );
      return u(
        function () {
          return e ? _(t, a) : new Set();
        },
        [e, t, a],
      );
    }
    function _(e, t) {
      var n = new Set(
          e.map(function (e) {
            var t = e.rootCallId;
            return t;
          }),
        ),
        r = o("WAWebVoipTransferredCallRegistry").getLiveTransferredCallRootId(
          t,
        );
      return (r != null && n.add(r), n);
    }
    ((l.waitForOngoingTransferEntryPoint = d),
      (l.getOngoingTransferRootCallIds = m),
      (l.useWAWebVoipOngoingTransferRootCallIds = p));
  },
  98,
);
