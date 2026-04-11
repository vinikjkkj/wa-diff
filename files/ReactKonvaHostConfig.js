__d(
  "ReactKonvaHostConfig",
  [
    "ReactKonvaMakeUpdates",
    "ReactReconcilerConstants_DO_NOT_USE_OR_YOU_WILL_BE_FIRED",
    "konva-7.2.3",
  ],
  function (t, n, r, o, a, i) {
    var e = n("ReactKonvaMakeUpdates").EVENTS_NAMESPACE,
      l = n("ReactKonvaMakeUpdates").applyNodeProps,
      s = n("ReactKonvaMakeUpdates").updatePicture,
      u = n(
        "ReactReconcilerConstants_DO_NOT_USE_OR_YOU_WILL_BE_FIRED",
      ).DefaultEventPriority,
      c = n(
        "ReactReconcilerConstants_DO_NOT_USE_OR_YOU_WILL_BE_FIRED",
      ).NoEventPriority,
      d = n("konva-7.2.3")("/lib/Core.js"),
      m = {},
      p = {};
    d.Node.prototype._applyProps = l;
    var _ = c;
    function f(e, t) {
      if (typeof t == "string") {
        "" + t;
        return;
      }
      (e.add(t), s(e));
    }
    function g(e, t, n) {
      var r = d[e];
      r || ("" + e + e, (r = d.Group));
      var o = {},
        a = {};
      for (var i in t) {
        var s = i.slice(0, 2) === "on";
        s ? (a[i] = t[i]) : (o[i] = t[i]);
      }
      var u = new r(o);
      return (l(u, a), u);
    }
    function h(e, t, n) {
      "" + e;
    }
    function y(e, t, n) {
      return !1;
    }
    function C(e) {
      return e;
    }
    function b() {
      return null;
    }
    function v() {
      return null;
    }
    function S(e, t, n, r) {
      return p;
    }
    function R() {}
    function L(e) {}
    function E(e, t) {
      return !1;
    }
    function k() {
      return m;
    }
    function I() {
      return m;
    }
    function T(e, t) {
      return !1;
    }
    function D(e, t) {
      (t.parent === e ? t.moveToTop() : e.add(t), s(e));
    }
    function x(e, t) {
      (t.parent === e ? t.moveToTop() : e.add(t), s(e));
    }
    function $(e, t, n) {
      (t._remove(), e.add(t), t.setZIndex(n.getZIndex()), s(e));
    }
    function P(e, t, n) {
      $(e, t, n);
    }
    function N(t, n) {
      (n.destroy(), n.off(e), s(t));
    }
    function M(t, n) {
      (n.destroy(), n.off(e), s(t));
    }
    function w(e, t, n) {
      "" + n;
    }
    function A(e, t, n) {}
    function F(e, t, n, r) {
      l(e, r, n);
    }
    function O(e) {
      (e.hide(), s(e));
    }
    function B(e) {}
    function W(e, t) {
      (t.visible == null || t.visible) && e.show();
    }
    function q(e, t) {}
    function U(e) {}
    function V() {}
    function H() {
      return _;
    }
    function G() {}
    function z() {
      return null;
    }
    function j(e) {
      _ = e;
    }
    function K() {
      return _;
    }
    function Q() {
      return _ || u;
    }
    function X() {
      return !1;
    }
    function Y() {}
    function J() {
      return !1;
    }
    function Z() {
      return !1;
    }
    function ee() {
      return !1;
    }
    function te() {
      return !0;
    }
    function ne() {}
    function re() {}
    function oe() {
      return null;
    }
    function ae() {}
    function ie() {}
    function le() {
      return -1.1;
    }
    function se() {
      return null;
    }
    function ue() {}
    ((i.prepareForCommit = b),
      (i.resetAfterCommit = R),
      (i.getRootHostContext = k),
      (i.getChildHostContext = I),
      (i.shouldSetTextContent = T),
      (i.createInstance = g),
      (i.finalizeInitialChildren = y),
      (i.appendInitialChild = f),
      (i.appendChildToContainer = x),
      (i.clearContainer = U),
      (i.setCurrentUpdatePriority = j),
      (i.getCurrentUpdatePriority = K),
      (i.resolveUpdatePriority = Q),
      (i.trackSchedulerEvent = ue),
      (i.resolveEventType = se),
      (i.resolveEventTimeStamp = le),
      (i.shouldAttemptEagerTransition = X),
      (i.requestPostPaintCallback = Y),
      (i.maySuspendCommit = J),
      (i.maySuspendCommitOnUpdate = Z),
      (i.maySuspendCommitInSyncRender = ee),
      (i.preloadInstance = te),
      (i.startSuspendingCommit = ne),
      (i.suspendInstance = re),
      (i.suspendOnActiveViewTransition = ie),
      (i.waitForCommitToBeReady = oe),
      (i.supportsMutation = !0),
      (i.isPrimaryRenderer = !1),
      (i.NotPendingTransition = null),
      (i.warnsIfNotActing = !0),
      (i.scheduleTimeout = window.setTimeout),
      (i.cancelTimeout = window.clearTimeout),
      (i.noTimeout = -1),
      (i.createTextInstance = h),
      (i.getPublicInstance = C),
      (i.preparePortalMount = v),
      (i.prepareUpdate = S),
      (i.resetTextContent = L),
      (i.shouldDeprioritizeSubtree = E),
      (i.appendChild = D),
      (i.insertBefore = $),
      (i.insertInContainerBefore = P),
      (i.removeChild = N),
      (i.removeChildFromContainer = M),
      (i.commitTextUpdate = w),
      (i.commitMount = A),
      (i.commitUpdate = F),
      (i.hideInstance = O),
      (i.hideTextInstance = B),
      (i.unhideInstance = W),
      (i.unhideTextInstance = q),
      (i.detachDeletedInstance = V),
      (i.getCurrentEventPriority = H),
      (i.prepareScopeUpdate = G),
      (i.getInstanceFromScope = z),
      (i.resetFormInstance = ae));
  },
  null,
);
