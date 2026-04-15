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
    "react-compiler-runtime",
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
      var e = o("react-compiler-runtime").c(8),
        t = r("WAWebCallCollection").activeCall,
        n,
        a;
      e[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((n = o("WAWebVoipEventConstants").getChangeEvent(
            o("WAWebVoipEventConstants").VoipCallModelEvents.WAITING_ROOM_STATE,
          )),
          (a = function () {
            var e, n, r;
            return [
              (e = t == null ? void 0 : t.waitingRoomUsersCount) != null
                ? e
                : 0,
              (n = t == null ? void 0 : t.isWaitingRoomAdmin) != null ? n : !1,
              (r = t == null ? void 0 : t.waitingRoomUsers) != null ? r : d,
            ];
          }),
          (e[0] = n),
          (e[1] = a))
        : ((n = e[0]), (a = e[1]));
      var i = r("useWAWebEventTargetValue")(t, n, a),
        l = i[0],
        s = i[1],
        u = i[2],
        c;
      e: {
        var m = u[0];
        if (m == null) {
          c = "";
          break e;
        }
        var _;
        if (e[2] !== m) {
          var f = o("WAWebContactCollection").ContactCollection.get(m);
          ((_ =
            f != null
              ? o("WAWebFrontendContactGetters").getDisplayName(f)
              : m.toString()),
            (e[2] = m),
            (e[3] = _));
        } else _ = e[3];
        c = _;
      }
      var h = c,
        y = g,
        C = p,
        b;
      return (
        e[4] !== h || e[5] !== s || e[6] !== l
          ? ((b = {
              waitingRoomUsersCount: l,
              isWaitingRoomAdmin: s,
              firstWaitingRoomUserName: h,
              handleWaitingRoomApprove: y,
              handleWaitingRoomDeny: C,
            }),
            (e[4] = h),
            (e[5] = s),
            (e[6] = l),
            (e[7] = b))
          : (b = e[7]),
        b
      );
    }
    function p() {
      _();
    }
    function _() {
      return f.apply(this, arguments);
    }
    function f() {
      return (
        (f = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e,
            t =
              (e = r("WAWebCallCollection").activeCall) == null ||
              (e = e.waitingRoomUsers) == null
                ? void 0
                : e[0];
          if (t != null) {
            var n = yield o("WAWebVoipStackInterface").getVoipStackInterface();
            n != null &&
              n.type === "web" &&
              (yield n.waitingRoomDeny(t.toString({ legacy: !0 })));
          }
        })),
        f.apply(this, arguments)
      );
    }
    function g() {
      h();
    }
    function h() {
      return y.apply(this, arguments);
    }
    function y() {
      return (
        (y = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e,
            t =
              (e = r("WAWebCallCollection").activeCall) == null ||
              (e = e.waitingRoomUsers) == null
                ? void 0
                : e[0];
          if (t != null) {
            var n = yield o("WAWebVoipStackInterface").getVoipStackInterface();
            n != null &&
              n.type === "web" &&
              (yield n.waitingRoomAdmit(t.toString({ legacy: !0 })));
          }
        })),
        y.apply(this, arguments)
      );
    }
    l.default = m;
  },
  98,
);
