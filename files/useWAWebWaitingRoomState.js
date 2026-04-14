__d(
  "useWAWebWaitingRoomState",
  [
    "WAWebCallCollection",
    "WAWebContactCollection",
    "WAWebFrontendContactGetters",
    "WAWebVoipEventConstants",
    "WAWebVoipStackInterface",
    "asyncToGeneratorRuntime",
    "react",
    "useWAWebEventTargetValue",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = s.useCallback,
      c = s.useMemo,
      d = [];
    function m() {
      var e = r("WAWebCallCollection").activeCall,
        t = r("useWAWebEventTargetValue")(
          e,
          o("WAWebVoipEventConstants").getChangeEvent(
            o("WAWebVoipEventConstants").VoipCallModelEvents.WAITING_ROOM_STATE,
          ),
          function () {
            var t, n, r;
            return [
              (t = e == null ? void 0 : e.waitingRoomUsersCount) != null
                ? t
                : 0,
              (n = e == null ? void 0 : e.isWaitingRoomAdmin) != null ? n : !1,
              (r = e == null ? void 0 : e.waitingRoomUsers) != null ? r : d,
            ];
          },
        ),
        a = t[0],
        i = t[1],
        l = t[2],
        s = c(
          function () {
            var e = l[0];
            if (e == null) return "";
            var t = o("WAWebContactCollection").ContactCollection.get(e);
            return t != null
              ? o("WAWebFrontendContactGetters").getDisplayName(t)
              : e.toString();
          },
          [l],
        ),
        m = u(function () {
          n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
            var e,
              t =
                (e = r("WAWebCallCollection").activeCall) == null ||
                (e = e.waitingRoomUsers) == null
                  ? void 0
                  : e[0];
            if (t != null) {
              var n = yield o(
                "WAWebVoipStackInterface",
              ).getVoipStackInterface();
              n != null &&
                n.type === "web" &&
                (yield n.waitingRoomAdmit(t.toString({ legacy: !0 })));
            }
          })();
        }, []),
        p = u(function () {
          n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
            var e,
              t =
                (e = r("WAWebCallCollection").activeCall) == null ||
                (e = e.waitingRoomUsers) == null
                  ? void 0
                  : e[0];
            if (t != null) {
              var n = yield o(
                "WAWebVoipStackInterface",
              ).getVoipStackInterface();
              n != null &&
                n.type === "web" &&
                (yield n.waitingRoomDeny(t.toString({ legacy: !0 })));
            }
          })();
        }, []);
      return {
        waitingRoomUsersCount: a,
        isWaitingRoomAdmin: i,
        firstWaitingRoomUserName: s,
        handleWaitingRoomApprove: m,
        handleWaitingRoomDeny: p,
      };
    }
    l.default = m;
  },
  98,
);
