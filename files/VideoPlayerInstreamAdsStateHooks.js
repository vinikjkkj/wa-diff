__d(
  "VideoPlayerInstreamAdsStateHooks",
  ["createVideoStateHook"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = (e = o("createVideoStateHook")).createVideoStateHook(),
      u = s.stateHook,
      c = s.valueHook,
      d = [];
    function m() {
      return u(d);
    }
    function p() {
      return c(d);
    }
    var _ = e.createVideoStateHook(),
      f = _.stateHook,
      g = _.valueHook,
      h = null;
    function y() {
      return f(h);
    }
    function C() {
      return g(h);
    }
    var b = e.createVideoStateHook(),
      v = b.setterHook,
      S = b.valueHook,
      R = !0;
    function L() {
      return v(R);
    }
    function E() {
      return S(R);
    }
    var k = e.createVideoStateHook(),
      I = k.stateHook,
      T = k.valueHook,
      D = "INIT";
    function x() {
      return I(D);
    }
    function $() {
      return T(D);
    }
    var P = e.createVideoStateHook(),
      N = P.stateHook,
      M = P.valueHook,
      w = !0;
    function A() {
      return N(w);
    }
    function F() {
      return M(w);
    }
    var O = e.createVideoStateHook(),
      B = O.stateHook,
      W = O.valueHook,
      q = null;
    function U() {
      return B(q);
    }
    function V() {
      return W(q);
    }
    var H = e.createVideoStateHook(),
      G = H.stateHook,
      z = null;
    function j() {
      return G(z);
    }
    var K = e.createVideoStateHook(),
      Q = K.stateHook,
      X = null;
    function Y() {
      return Q(X);
    }
    var J = e.createVideoStateHook(),
      Z = J.stateHook,
      ee = null;
    function te() {
      return Z(ee);
    }
    var ne = e.createVideoStateHook(),
      re = ne.stateHook,
      oe = null;
    function ae() {
      return re(oe);
    }
    var ie = e.createVideoStateHook(),
      le = ie.stateHook,
      se = 0;
    function ue() {
      return le(se);
    }
    var ce = e.createVideoStateHook(),
      de = ce.stateHook,
      me = !1;
    function pe() {
      return de(me);
    }
    var _e = e.createVideoStateHook(),
      fe = _e.stateHook,
      ge = _e.valueHook,
      he = null;
    function ye() {
      return fe(he);
    }
    function Ce() {
      return ge(he);
    }
    var be = e.createVideoStateHook(),
      ve = be.stateHook,
      Se = be.valueHook,
      Re = null;
    function Le() {
      return ve(Re);
    }
    function Ee() {
      return Se(Re);
    }
    function ke() {
      var e = $();
      return (
        e === "STARTING_INDICATOR" ||
        e === "START" ||
        e === "START_AD" ||
        e === "PLAY_NI_VIDEO"
      );
    }
    ((l.useInstreamAdsMidRollsState = m),
      (l.useInstreamAdsMidRollsValue = p),
      (l.useInstreamAdsPostRollState = y),
      (l.useInstreamAdsPostRollValue = C),
      (l.useInstreamAdsPostRollEndedOrSkippedStateSetter = L),
      (l.useInstreamAdsPostRollEndedOrSkippedStateValue = E),
      (l.useInstreamAdsState = x),
      (l.useInstreamAdsStateValue = $),
      (l.useInstreamAdsIsEmptyState = A),
      (l.useInstreamAdsIsEmptyStateValue = F),
      (l.useInstreamAdsCurrentInsertionState = U),
      (l.useInstreamAdsCurrentInsertionStateValue = V),
      (l.useStartIndicatorBeginningTimeState = j),
      (l.useAdBreaksTimeOffsetBeginningState = Y),
      (l.useInstreamAdsExtraFieldsState = te),
      (l.useInstreamAdsHideAdBehaviorState = ae),
      (l.useUnifiedSchedulerLastFetchTimeState = ue),
      (l.useWaitingForAdFetchState = pe),
      (l.useInstreamAdsFeedContextCardState = ye),
      (l.useInstreamAdsFeedContextCardStateValue = Ce),
      (l.useInstreamAdsFullScreenContextCardState = Le),
      (l.useInstreamAdsFullScreenContextCardStateValue = Ee),
      (l.useInstreamAdsIsStart = ke));
  },
  98,
);
