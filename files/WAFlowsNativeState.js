__d(
  "WAFlowsNativeState",
  [
    "WAFlowsNavigationUtils",
    "WAFlowsNoop",
    "WAFlowsStateProvider.react",
    "WAFlowsWELJActionCreators",
    "WAFlowsWebToNativeEvents",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = s.createContext,
      c = s.useCallback,
      d = s.useContext,
      m = s.useEffect,
      p = s.useState,
      _ = u({ keyboardState: { change: "hidden" } });
    function f() {
      var e = p({ change: "hidden" }),
        t = e[0],
        n = e[1],
        r = o("WAFlowsNavigationUtils").useBackOrCloseNavigationClick(),
        a = g();
      return (
        m(
          function () {
            (h.on("WAFOnKeyboardStateChange", function (e) {
              e != null
                ? o("WAFlowsWebToNativeEvents").isKeyboardEvent(e) &&
                  (e == null ? void 0 : e.change) != null &&
                  n({ change: e.change })
                : r();
            }),
              h.on("WAFOnHardwareBack", function (e) {
                r();
              }),
              h.on("WAFOnOutsideClick", function (e) {
                a();
              }));
          },
          [a, r],
        ),
        { keyboardStatus: t }
      );
    }
    function g() {
      var e = d(o("WAFlowsStateProvider.react").FlowStateDispatchContext);
      return c(
        function () {
          e(
            o("WAFlowsWELJActionCreators").createToggleNavBarContextMenuAction(
              !1,
            ),
          );
        },
        [e],
      );
    }
    var h = (function () {
      var e = Object.keys(
        o("WAFlowsWebToNativeEvents").WAFlowsWebToNativeEventNames,
      ).reduce(function (e, t) {
        return (e.set(t, r("WAFlowsNoop")), e);
      }, new Map());
      return (
        Object.keys(
          o("WAFlowsWebToNativeEvents").WAFlowsWebToNativeEventNames,
        ).forEach(function (t) {
          window[
            o("WAFlowsWebToNativeEvents").WAFlowsWebToNativeEventNames[t]
          ] = function (n) {
            var r;
            (r = e.get(t)) == null || r(n);
          };
        }),
        {
          on: function (n, r) {
            e.has(n) && e.set(n, r);
          },
          remove: function (n) {
            e.has(n) && e.set(n, r("WAFlowsNoop"));
          },
        }
      );
    })();
    ((l.NativeContext = _),
      (l.useListenToNativeEventsAndReturnState = f),
      (l.NativeStateChangeEventEmitter = h));
  },
  98,
);
