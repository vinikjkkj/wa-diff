__d(
  "ZenonLoggingHooks",
  [
    "FBLogger",
    "RtcWebUserActionsDebugFalcoEvent",
    "RtcWebUserActionsFalcoEvent",
    "ZenonCallsContext",
    "ZenonCallsHooks",
    "ZenonCallsModelTypes",
    "ZenonDebugLogger",
    "ZenonLoggingContext",
    "ZenonLoggingSurfaceContext",
    "ZenonLoggingUtils",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = s.useCallback,
      c = s.useContext,
      d = s.useEffect,
      m = s.useRef;
    function p() {
      var e = c(r("ZenonLoggingContext"));
      return u(
        function (t) {
          e.setIsCaller(t);
        },
        [e],
      );
    }
    function _() {
      var e = c(r("ZenonLoggingContext"));
      return u(
        function (t) {
          e.setCallTrigger(t);
        },
        [e],
      );
    }
    function f(e) {
      var t = E();
      d(
        function () {
          t({ component: e });
        },
        [e, t],
      );
    }
    function g(e, t) {
      t === void 0 && (t = !0);
      var n = E(),
        r = m(!1);
      return u(
        function () {
          (t && r.current === !0) || (n({ component: e }), (r.current = !0));
        },
        [e, n, t],
      );
    }
    function h(e) {
      var t = E();
      d(
        function () {
          e != null && t({ component: e });
        },
        [e, t],
      );
    }
    function y(e, t) {
      var n = k();
      return u(
        function (r) {
          return (n({ component: t }), e(r));
        },
        [e, t, n],
      );
    }
    function C() {
      var e = I();
      return u(
        function (t) {
          return e({ checkpoint: t });
        },
        [e],
      );
    }
    function b(e) {
      var t = c(r("ZenonLoggingContext")),
        n = t.isErrorDomainLogged,
        o = t.setErrorDomainLogged,
        a = L();
      return u(
        function (t) {
          n(e) ||
            (o(e),
            a({ errorDomain: e, errorType: t.toString() }),
            r("FBLogger")("rtc_www").catching(t).warn(e));
        },
        [e, n, a, o],
      );
    }
    function v() {
      var e = L();
      return u(
        function (t) {
          var n = t.checkpoint,
            o = t.error,
            a = t.errorDomain;
          (e({ checkpoint: n, errorDomain: a, errorType: o.toString() }),
            o instanceof Error
              ? r("FBLogger")("rtc_www").catching(o).warn(n)
              : r("FBLogger")("rtc_www").warn(n + "_" + o.toString()));
        },
        [e],
      );
    }
    function S(e) {
      var t = c(r("ZenonLoggingContext")),
        n = t.isCheckpointDomainLogged,
        o = t.setCheckpointDomainLogged,
        a = I();
      return u(
        function () {
          n(e) || (o(e), a({ checkpoint: e }));
        },
        [e, n, a, o],
      );
    }
    function R(e, t) {
      var n = c(r("ZenonLoggingContext")),
        o = n.startTimer,
        a = n.stopTimer,
        i = u(
          function () {
            return o(e);
          },
          [e, o],
        ),
        l = I(),
        s = u(
          function () {
            var n = t != null ? t : e,
              r = a(e);
            return (l({ checkpoint: n + "_timerEnd", timeElapsed: r }), r);
          },
          [t, l, e, a],
        );
      return [i, s];
    }
    function L() {
      var e = T();
      return u(
        function (t) {
          return e(babelHelpers.extends({ eventName: "error" }, t));
        },
        [e],
      );
    }
    function E() {
      var e = T();
      return u(
        function (t) {
          return e(babelHelpers.extends({ eventName: "impression" }, t));
        },
        [e],
      );
    }
    function k() {
      var e = T();
      return u(
        function (t) {
          return e(babelHelpers.extends({ eventName: "tap" }, t));
        },
        [e],
      );
    }
    function I() {
      var e = T();
      return u(
        function (t) {
          return e(babelHelpers.extends({ eventName: "checkpoint" }, t));
        },
        [e],
      );
    }
    function T() {
      var e = D(),
        t = c(r("ZenonCallsContext")),
        n = t.isE2eeMandated;
      return u(
        function (t) {
          if (!(n || !o("ZenonLoggingUtils").shouldAllowLogging())) {
            e(t, r("RtcWebUserActionsDebugFalcoEvent"));
            var a = e(t, r("RtcWebUserActionsFalcoEvent"));
            x(t.eventName, a);
          }
        },
        [n, e],
      );
    }
    function D() {
      var e = c(r("ZenonLoggingSurfaceContext")),
        t = r("ZenonCallsHooks").useCallState(),
        n = c(r("ZenonCallsContext")),
        o = c(r("ZenonLoggingContext")),
        a = r("ZenonCallsHooks").useIsAudioCall(),
        i = m(e),
        l = m(t),
        s = m(n),
        d = m(o),
        p = m(a);
      return (
        (i.current = e),
        (l.current = t),
        (s.current = n),
        (d.current = o),
        (p.current = a),
        u(function (e, t) {
          var n,
            r,
            o,
            a = s.current,
            u = a.calls,
            c = a.currentCallInstanceSDK,
            m = p.current ? "audio" : "video",
            _ =
              d.current.signalingID == null
                ? void 0
                : String(d.current.signalingID),
            f =
              (n = d.current.roomID) != null
                ? n
                : c == null
                  ? void 0
                  : c.getConferenceName(),
            g = d.current.isCaller,
            h = d.current.page,
            y = d.current.deviceID,
            C = d.current.callTrigger,
            b = d.current.codebaseVersion,
            v = d.current.peerID,
            S =
              (r = u.get(c.getClientCallID_DEPRECATED())) == null
                ? void 0
                : r.collisionContext.serverInfoData,
            R = {
              call_id: _,
              call_trigger: C,
              call_type: "mw",
              checkpoint: e.checkpoint,
              client_time: Date.now().toString(),
              codebase_version: b,
              component: e.component,
              conference_name: f,
              conference_state: $(l.current),
              device_id: y,
              error_domain: e.errorDomain,
              error_type: e.errorType,
              event: e.eventName,
              event_time_elapsed:
                (o = e.timeElapsed) == null ? void 0 : o.toString(),
              is_caller: g,
              media_type: m,
              page: P(h),
              peer_id: v,
              server_info_data: S,
              surface: i.current,
            };
          return (
            t.log(function () {
              return R;
            }),
            R
          );
        }, [])
      );
    }
    function x(e, t) {
      var n = e == null ? "null" : e;
      r("ZenonDebugLogger")
        .getInstance()
        .getLogHistory()
        .log(n, JSON.stringify(t));
    }
    function $(e) {
      switch (e) {
        case o("ZenonCallsModelTypes").ZenonCallState.New:
          return "NEW";
        case o("ZenonCallsModelTypes").ZenonCallState.Connecting:
          return "CONNECTING";
        case o("ZenonCallsModelTypes").ZenonCallState.Connected:
          return "CONNECTED";
        case o("ZenonCallsModelTypes").ZenonCallState.Terminating:
          return "TERMINATING";
        case o("ZenonCallsModelTypes").ZenonCallState.Terminated:
          return "TERMINATED";
        case o("ZenonCallsModelTypes").ZenonCallState.PendingApproval:
          return "PENDING_APPROVAL";
      }
    }
    function P(e) {
      switch (e) {
        case "messenger_dot_com":
        case "facebook":
        case "mweb":
        case "workplace":
          return e;
        default:
          return null;
      }
    }
    ((l.useSetIsCaller = p),
      (l.useSetCallTrigger = _),
      (l.useImpressionLogging = f),
      (l.useImpressionLogger = g),
      (l.useImpressionLoggingOptional = h),
      (l.useClickLogging = y),
      (l.useCheckpointLogging = C),
      (l.useErrorLoggingOnceForDomain = b),
      (l.useErrorLogging = v),
      (l.useCheckpointLoggingOnceForDomain = S),
      (l.useTimerLogging = R));
  },
  98,
);
