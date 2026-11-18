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
    "react-compiler-runtime",
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
        t = g(
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
      var e = o("react-compiler-runtime").c(9),
        t = o("useWAWebABPropConfigValue").useABPropConfigValue(
          "enable_1on1_call_transfer_entry_point",
        ),
        n = r("useWAWebEventTargetValue")(
          o("WAWebVoipCallTransferEntryPointStore")
            .WAWebVoipCallTransferEntryPointStore,
          "change",
          f,
        ),
        a;
      e[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((a = o("WAWebVoipEventConstants").getChangeEvent(
            o("WAWebVoipEventConstants").VoipCallCollectionEvents.ACTIVE_CALL,
          )),
          (e[0] = a))
        : (a = e[0]);
      var i = r("useWAWebEventTargetValue")(r("WAWebCallCollection"), a, _),
        l;
      e[1] !== (i == null ? void 0 : i.id)
        ? ((l = function () {
            return i == null ? void 0 : i.id;
          }),
          (e[1] = i == null ? void 0 : i.id),
          (e[2] = l))
        : (l = e[2]);
      var s;
      e[3] !== i ? ((s = [i]), (e[3] = i), (e[4] = s)) : (s = e[4]);
      var u = r("useWAWebEventTargetValue")(i, "change:id", l, s),
        c;
      return (
        e[5] !== u || e[6] !== n || e[7] !== t
          ? ((c = t ? g(n, u) : new Set()),
            (e[5] = u),
            (e[6] = n),
            (e[7] = t),
            (e[8] = c))
          : (c = e[8]),
        c
      );
    }
    function _() {
      return r("WAWebCallCollection").activeCall;
    }
    function f() {
      return o(
        "WAWebVoipCallTransferEntryPointStore",
      ).WAWebVoipCallTransferEntryPointStore.getEntryPoints();
    }
    function g(e, t) {
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
