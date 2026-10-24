__d(
  "WAWebVoipOngoingTransferCalls",
  [
    "WAWebABProps",
    "WAWebCallCollection",
    "WAWebVoipCallTransferEntryPointStore",
    "WAWebVoipEventConstants",
    "WAWebVoipTransferredCallRegistry",
    "react",
    "react-compiler-runtime",
    "useWAWebABPropConfigValue",
    "useWAWebEventTargetValue",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = (e || (e = o("react"))).useMemo;
    function u() {
      var e,
        t = p(
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
    function c() {
      var e = o("react-compiler-runtime").c(5),
        t = o("useWAWebABPropConfigValue").useABPropConfigValue(
          "enable_1on1_call_transfer_entry_point",
        ),
        n = r("useWAWebEventTargetValue")(
          o("WAWebVoipCallTransferEntryPointStore")
            .WAWebVoipCallTransferEntryPointStore,
          "change",
          m,
        ),
        a;
      e[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((a = o("WAWebVoipEventConstants").getChangeEvent(
            o("WAWebVoipEventConstants").VoipCallCollectionEvents.ACTIVE_CALL,
          )),
          (e[0] = a))
        : (a = e[0]);
      var i = r("useWAWebEventTargetValue")(r("WAWebCallCollection"), a, d),
        l;
      return (
        e[1] !== i || e[2] !== n || e[3] !== t
          ? ((l = t ? p(n, i) : new Set()),
            (e[1] = i),
            (e[2] = n),
            (e[3] = t),
            (e[4] = l))
          : (l = e[4]),
        l
      );
    }
    function d() {
      var e;
      return (e = r("WAWebCallCollection").activeCall) == null ? void 0 : e.id;
    }
    function m() {
      return o(
        "WAWebVoipCallTransferEntryPointStore",
      ).WAWebVoipCallTransferEntryPointStore.getEntryPoints();
    }
    function p(e, t) {
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
    ((l.getOngoingTransferRootCallIds = u),
      (l.useWAWebVoipOngoingTransferRootCallIds = c));
  },
  98,
);
