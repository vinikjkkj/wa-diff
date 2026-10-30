__d(
  "WAWebVoipLobbyVisibilityStore",
  ["WAWebWamEnumLobbyEntryPointType"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = null;
    function s(t, n) {
      var r = e;
      e =
        r != null && r.callId === t
          ? babelHelpers.extends({}, r, {
              isGroupRing: r.isGroupRing || n,
              isRing: !0,
            })
          : { callId: t, isGroupRing: n, isRing: !0, visibleAtMs: null };
    }
    function u() {
      var t;
      return ((t = e) == null ? void 0 : t.isRing) === !0 ? e.callId : null;
    }
    function c(t) {
      var n = e;
      n == null || n.callId !== t
        ? (e = { callId: t, isGroupRing: !1, visibleAtMs: h() })
        : n.visibleAtMs == null &&
          (e = babelHelpers.extends({}, n, { visibleAtMs: h() }));
    }
    function d() {
      var t;
      return ((t = e) == null ? void 0 : t.isGroupRing) !== !0
        ? null
        : e.visibleAtMs != null
          ? o("WAWebWamEnumLobbyEntryPointType").LOBBY_ENTRY_POINT_TYPE
              .OPEN_FOR_RINGING
          : o("WAWebWamEnumLobbyEntryPointType").LOBBY_ENTRY_POINT_TYPE
              .NOT_OPENED;
    }
    function m() {
      var t,
        n = (t = e) == null ? void 0 : t.visibleAtMs;
      return n == null ? null : Math.round(h() - n);
    }
    function p(t) {
      var n = e;
      return n == null ||
        n.callId !== t ||
        n.isGroupRing ||
        n.isOneOnOneJoinableLogged === !0
        ? null
        : { lobbyVisibleForMs: m() };
    }
    function _(t) {
      var n = e;
      n != null &&
        n.callId === t &&
        (e = babelHelpers.extends({}, n, { isOneOnOneJoinableLogged: !0 }));
    }
    function f(t) {
      var n;
      t != null &&
        t !== "" &&
        ((n = e) == null ? void 0 : n.callId) !== t &&
        (e = null);
    }
    function g() {
      e = null;
    }
    function h() {
      var e, t;
      return (e = (t = globalThis.performance) == null ? void 0 : t.now()) !=
        null
        ? e
        : Date.now();
    }
    ((l.recordIncomingRing = s),
      (l.getRecordedRingCallId = u),
      (l.markLobbyVisible = c),
      (l.getGroupRingLobbyEntryPoint = d),
      (l.getLobbyVisibleForMs = m),
      (l.getOneOnOneRingForJoinableCall = p),
      (l.markOneOnOneJoinableCallLogged = _),
      (l.dropLobbyVisibilityOfOtherCall = f),
      (l.resetLobbyVisibility = g));
  },
  98,
);
