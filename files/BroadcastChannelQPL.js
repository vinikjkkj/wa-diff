__d(
  "BroadcastChannelQPL",
  [
    "LSMessagingThreadTypeUtil",
    "QuickPerformanceLogger",
    "emptyFunction",
    "justknobx",
    "qpl",
    "react",
    "react-compiler-runtime",
    "requireDeferred",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u = (s || (s = o("react"))).useCallback,
      c = r("requireDeferred")("QPLUserFlow").__setRef("BroadcastChannelQPL");
    function d(e) {
      var t = m;
      return e ? t : r("emptyFunction");
    }
    function m() {
      (e || (e = r("QuickPerformanceLogger"))).markerStart(
        r("qpl")._(975838536, "1760"),
      );
    }
    function p(e) {
      var t = _;
      return e ? t : r("emptyFunction");
    }
    function _() {
      (e || (e = r("QuickPerformanceLogger"))).markerPoint(
        r("qpl")._(975838536, "1760"),
        "confirmation_dialog_rendered",
      );
    }
    function f(e) {
      var t = g;
      return e ? t : r("emptyFunction");
    }
    function g() {
      (e || (e = r("QuickPerformanceLogger"))).markerEnd(
        r("qpl")._(975838536, "1760"),
        3,
      );
    }
    function h(e) {
      var t = y;
      return e ? t : r("emptyFunction");
    }
    function y() {
      (e || (e = r("QuickPerformanceLogger"))).markerEnd(
        r("qpl")._(975838536, "1760"),
        2,
      );
    }
    function C(e) {
      var t = b;
      return e ? t : r("emptyFunction");
    }
    function b() {
      (e || (e = r("QuickPerformanceLogger"))).markerEnd(
        r("qpl")._(975838536, "1760"),
        4,
      );
    }
    function v(e) {
      var t = S;
      return e ? t : r("emptyFunction");
    }
    function S() {
      (e || (e = r("QuickPerformanceLogger"))).markerPoint(
        r("qpl")._(975838536, "1760"),
        "confirm_click",
      );
    }
    function R(e) {
      var t = o(
          "LSMessagingThreadTypeUtil",
        ).isDiscoverablePublicBroadcastChannel(e),
        n = L;
      return t ? n : r("emptyFunction");
    }
    function L() {
      (e || (e = r("QuickPerformanceLogger"))).markerStart(
        r("qpl")._(975844490, "1761"),
      );
    }
    function E(e) {
      var t = o(
          "LSMessagingThreadTypeUtil",
        ).isDiscoverablePublicBroadcastChannel(e),
        n = k;
      return t ? n : r("emptyFunction");
    }
    function k() {
      (e || (e = r("QuickPerformanceLogger"))).markerPoint(
        r("qpl")._(975844490, "1761"),
        "confirmation_dialog_rendered",
      );
    }
    function I(e) {
      var t = o(
          "LSMessagingThreadTypeUtil",
        ).isDiscoverablePublicBroadcastChannel(e),
        n = T;
      return t ? n : r("emptyFunction");
    }
    function T() {
      (e || (e = r("QuickPerformanceLogger"))).markerPoint(
        r("qpl")._(975844490, "1761"),
        "confirm_click",
      );
    }
    function D(e) {
      var t = o(
          "LSMessagingThreadTypeUtil",
        ).isDiscoverablePublicBroadcastChannel(e),
        n = x;
      return t ? n : r("emptyFunction");
    }
    function x() {
      (e || (e = r("QuickPerformanceLogger"))).markerEnd(
        r("qpl")._(975844490, "1761"),
        2,
      );
    }
    function $(e) {
      var t = o(
          "LSMessagingThreadTypeUtil",
        ).isDiscoverablePublicBroadcastChannel(e),
        n = P;
      return t ? n : r("emptyFunction");
    }
    function P() {
      (e || (e = r("QuickPerformanceLogger"))).markerStart(
        r("qpl")._(975834528, "1762"),
      );
    }
    function N(e) {
      var t = o(
          "LSMessagingThreadTypeUtil",
        ).isDiscoverablePublicBroadcastChannel(e),
        n = M;
      return t ? n : r("emptyFunction");
    }
    function M() {
      (e || (e = r("QuickPerformanceLogger"))).markerPoint(
        r("qpl")._(975834528, "1762"),
        "confirmation_dialog_rendered",
      );
    }
    function w(e) {
      var t = o(
          "LSMessagingThreadTypeUtil",
        ).isDiscoverablePublicBroadcastChannel(e.threadType),
        n = A;
      return t ? n : r("emptyFunction");
    }
    function A() {
      (e || (e = r("QuickPerformanceLogger"))).markerStart(
        r("qpl")._(975837640, "1763"),
      );
    }
    function F(e) {
      var t = o(
          "LSMessagingThreadTypeUtil",
        ).isDiscoverablePublicBroadcastChannel(e.threadType),
        n = O;
      return t ? n : r("emptyFunction");
    }
    function O() {
      (e || (e = r("QuickPerformanceLogger"))).markerPoint(
        r("qpl")._(975837640, "1763"),
        "confirmation_dialog_rendered",
      );
    }
    function B(e) {
      var t = o(
          "LSMessagingThreadTypeUtil",
        ).isDiscoverablePublicBroadcastChannel(e),
        n = W;
      return t ? n : r("emptyFunction");
    }
    function W() {
      (e || (e = r("QuickPerformanceLogger"))).markerStart(
        r("qpl")._(975847333, "1807"),
      );
    }
    function q(e) {
      var t = o(
          "LSMessagingThreadTypeUtil",
        ).isDiscoverablePublicBroadcastChannel(e),
        n = U;
      return t ? n : r("emptyFunction");
    }
    function U() {
      (e || (e = r("QuickPerformanceLogger"))).markerEnd(
        r("qpl")._(975847333, "1807"),
        4,
      );
    }
    function V(e) {
      var t = o(
          "LSMessagingThreadTypeUtil",
        ).isDiscoverablePublicBroadcastChannel(e),
        n = H;
      return t ? n : r("emptyFunction");
    }
    function H(t) {
      (e || (e = r("QuickPerformanceLogger"))).markerPoint(
        r("qpl")._(975847333, "1807"),
        "confirm_click",
        { data: t },
      );
    }
    function G(e) {
      var t = o(
          "LSMessagingThreadTypeUtil",
        ).isDiscoverablePublicBroadcastChannel(e),
        n = z;
      return t ? n : r("emptyFunction");
    }
    function z() {
      (e || (e = r("QuickPerformanceLogger"))).markerEnd(
        r("qpl")._(975847333, "1807"),
        2,
      );
    }
    function j(e) {
      var t = o(
          "LSMessagingThreadTypeUtil",
        ).isDiscoverablePublicBroadcastChannel(e),
        n = K;
      return t ? n : r("emptyFunction");
    }
    function K() {
      (e || (e = r("QuickPerformanceLogger"))).markerEnd(
        r("qpl")._(975847333, "1807"),
        3,
      );
    }
    function Q(e) {
      c.onReadyImmediately(function (t) {
        (t.start(r("qpl")._(975842187, "1868")),
          t.addAnnotations(r("qpl")._(975842187, "1868"), {
            string: { creation_entrypoint: e },
          }));
      });
    }
    function X(e, t) {
      c.onReadyImmediately(function (n) {
        n.start(r("qpl")._(975838038, "312"), {
          annotations: {
            bool: { is_graphql: t },
            string: { creation_entrypoint: e },
          },
          joinOptions: void 0,
          timeoutInMs: r("justknobx")._("1720"),
        });
      });
    }
    function Y() {
      c.onReadyImmediately(function (e) {
        e.endSuccess(r("qpl")._(975838038, "312"));
      });
    }
    function J() {
      c.onReadyImmediately(function (e) {
        e.endFailure(
          r("qpl")._(975838038, "312"),
          "create_broadcast_channel_failed",
        );
      });
    }
    function Z() {
      c.onReadyImmediately(function (e) {
        e.addPoint(r("qpl")._(975838038, "312"), "navigation_to_thread_start");
      });
    }
    function ee() {
      c.onReadyImmediately(function (e) {
        e.addPoint(r("qpl")._(975838038, "312"), "navigation_to_thread_end");
      });
    }
    function te() {
      c.onReadyImmediately(function (e) {
        e.endCancel(r("qpl")._(975842187, "1868"));
      });
    }
    function ne() {
      c.onReadyImmediately(function (e) {
        e.endSuccess(r("qpl")._(975842187, "1868"));
      });
    }
    function re() {
      c.onReadyImmediately(function (e) {
        e.endFailure(
          r("qpl")._(975842187, "1868"),
          "Create Broadcast Channel Failed",
        );
      });
    }
    function oe() {
      c.onReadyImmediately(function (e) {
        e.endTimeout(r("qpl")._(975842187, "1868"));
      });
    }
    function ae(t) {
      var n = o("react-compiler-runtime").c(2),
        a = String(t),
        i;
      return (
        n[0] !== a
          ? ((i = function () {
              ((e || (e = r("QuickPerformanceLogger"))).markerStart(
                r("qpl")._(975837312, "1871"),
              ),
                e.markerAnnotate(r("qpl")._(975837312, "1871"), {
                  string: { channel_type: a },
                }));
            }),
            (n[0] = a),
            (n[1] = i))
          : (i = n[1]),
        i
      );
    }
    function ie() {
      return le;
    }
    function le() {
      (e || (e = r("QuickPerformanceLogger"))).markerEnd(
        r("qpl")._(975837312, "1871"),
        2,
      );
    }
    function se() {
      return ue;
    }
    function ue() {
      (e || (e = r("QuickPerformanceLogger"))).markerEnd(
        r("qpl")._(975837312, "1871"),
        3,
      );
    }
    function ce() {
      return de;
    }
    function de(e, t) {
      c.onReadyImmediately(function (n) {
        n.start(r("qpl")._(975843910, "723"), {
          annotations: { bool: { is_viewing_self: t }, string: { source: e } },
        });
      });
    }
    function me() {
      return pe;
    }
    function pe(e, t, n) {
      c.onReadyImmediately(function (o) {
        (o.addPoint(r("qpl")._(975843910, "723"), "channels_tab_rendered"),
          o.addAnnotations(r("qpl")._(975843910, "723"), {
            bool: {
              has_channels: e > 0,
              is_eligible_for_creation: t,
              is_viewing_self: n,
            },
            int: { channel_count: e },
          }));
      });
    }
    function _e() {
      return fe;
    }
    function fe() {
      c.onReadyImmediately(ge);
    }
    function ge(e) {
      e.endSuccess(r("qpl")._(975843910, "723"));
    }
    function he(e, t, n) {
      c.onReadyImmediately(function (o) {
        (o.start(r("qpl")._(975843601, "1813"), {
          annotations: {
            bool: { is_graphql: n },
            string: { creation_entrypoint: e },
          },
          joinOptions: { joinId: t },
          timeoutInMs: r("justknobx")._("1720"),
        }),
          o.addAlignmentPointForJoin(r("qpl")._(975843601, "1813"), 0, {
            requestId: t,
          }));
      });
    }
    function ye() {
      c.onReadyImmediately(function (e) {
        e.endSuccess(r("qpl")._(975843601, "1813"));
      });
    }
    function Ce() {
      c.onReadyImmediately(function (e) {
        e.endFailure(
          r("qpl")._(975843601, "1813"),
          "create_broadcast_channel_failed",
        );
      });
    }
    function be() {
      c.onReadyImmediately(function (e) {
        e.addPoint(r("qpl")._(975843601, "1813"), "navigation_to_thread_start");
      });
    }
    function ve() {
      c.onReadyImmediately(function (e) {
        e.addPoint(r("qpl")._(975843601, "1813"), "navigation_to_thread_end");
      });
    }
    function Se(e, t, n) {
      c.onReadyImmediately(function (o) {
        (o.addPoint(r("qpl")._(975842187, "1868"), t, {
          data: { string: { creation_entrypoint: e } },
        }),
          n != null && o.addAnnotations(r("qpl")._(975842187, "1868"), n));
      });
    }
    ((l.useLogLeaveChannelStart = d),
      (l.useLogLeaveChannelDialogRendered = p),
      (l.useLogLeaveChannelFailed = f),
      (l.useLogLeaveChannelSuccess = h),
      (l.useLogLeaveChannelCanceled = C),
      (l.useLogLeaveChannelConfirmClick = v),
      (l.useLogDeleteChannelStart = R),
      (l.useLogDeleteChannelDialogRendered = E),
      (l.useLogDeleteChannelConfirmClick = I),
      (l.useLogDeleteChannelSuccess = D),
      (l.useLogMuteChannelStart = $),
      (l.useLogMuteChannelDialogRendered = N),
      (l.useLogRemoveMemberStart = w),
      (l.useLogRemoveMemberDialogRendered = F),
      (l.useLogEditChannelStart = B),
      (l.useLogEditChannelCancel = q),
      (l.useLogEditChannelConfirmClick = V),
      (l.useLogEditChannelSuccess = G),
      (l.useLogEditChannelFail = j),
      (l.logCreateBroadcastChannelQPLStart = Q),
      (l.logCreateChannelToThreadViewQPLStart = X),
      (l.logCreateChannelToThreadViewQPLSuccess = Y),
      (l.logCreateChannelToThreadViewQPLFail = J),
      (l.logCreateChannelNavigationToThreadStart = Z),
      (l.logCreateChannelNavigationToThreadEnd = ee),
      (l.logCreateBroadcastChannelQPLCancel = te),
      (l.logCreateBroadcastChannelQPLSuccess = ne),
      (l.logCreateBroadcastChannelQPLFail = re),
      (l.logCreateBroadcastChannelQPLTimeout = oe),
      (l.useLogJoinChannelStart = ae),
      (l.useLogJoinChannelSuccess = ie),
      (l.useLogJoinChannelFail = se),
      (l.useLogChannelsTabStart = ce),
      (l.useLogChannelsTabRender = me),
      (l.useLogChannelsTabEnd = _e),
      (l.logCCTVJoinStart = he),
      (l.logCCTVJoinSuccess = ye),
      (l.logCCTVJoinFail = Ce),
      (l.logCCTVJoinNavigationToThreadStart = be),
      (l.logCCTVJoinNavigationToThreadEnd = ve),
      (l.logCreateChannelDialogQPLPoint = Se));
  },
  98,
);
