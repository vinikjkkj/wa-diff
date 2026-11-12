__d(
  "WAWebPathfinderHeldBackSurface",
  ["$InternalEnum"],
  function (t, n, r, o, a, i) {
    var e = n("$InternalEnum")({
        APP_LOCK_CONFIRMATION: "app-lock-confirmation",
        CHAT_LOCK_SECRET_CODE: "chat-lock-secret-code",
        CHAT_LOCK_SECRET_CODE_SETUP: "chat-lock-secret-code-setup",
        SCREEN_LOCK: "screen-lock",
        SCREEN_LOCK_ACTIVE_CALL_BLOCKER: "screen-lock-active-call-blocker",
        SCREEN_LOCK_PASSCODE_REMOVAL: "screen-lock-passcode-removal",
        SCREEN_LOCK_PASSCODE_SETUP: "screen-lock-passcode-setup",
        SCREEN_LOCK_SETTINGS: "screen-lock-settings",
      }),
      l = new Set([
        "confirm-logout-app-lock-link",
        "contextual-banner-app-lock-upsell",
        "mi-chatlock",
        "mi-logout menu-item",
        "mi-screen-lock menu-item",
        "screen-lock-settings-item",
      ]),
      s = [],
      u = 0,
      c = 0;
    function d(t) {
      return e.isValid(t);
    }
    function m(t) {
      return e.cast(t);
    }
    function p(e) {
      return (
        (e == null
          ? void 0
          : e.split("/").some(function (e) {
              return l.has(e);
            })) === !0
      );
    }
    function _() {
      return c;
    }
    function f() {
      c++;
    }
    var g = new Set([e.CHAT_LOCK_SECRET_CODE]);
    function h() {
      var e;
      return (e = s.findLast(function (e) {
        return e.rootTestId != null && !g.has(e.name);
      })) == null
        ? void 0
        : e.name;
    }
    function y(e, t) {
      var n = C(e);
      try {
        t();
      } finally {
        n();
      }
    }
    function C(e, t) {
      var n = u++;
      return (
        s.push({ name: e, rootTestId: t, token: n }),
        function () {
          var e = s.findIndex(function (e) {
            return e.token === n;
          });
          e !== -1 && s.splice(e, 1);
        }
      );
    }
    function b(e) {
      for (var t = s.length - 1; t >= 0; t--) {
        var n = s[t],
          r = n.name,
          o = n.rootTestId;
        if (o == null || S(e, o)) return r;
      }
      return null;
    }
    function v(e) {
      var t = e.heldBackSurface !== void 0 ? e.heldBackSurface : b();
      return t != null || d(e.screenName) || d(e.destinationName);
    }
    function S(e, t) {
      return (
        e instanceof Element && e.closest('[data-testid="' + t + '"]') != null
      );
    }
    ((i.HeldBackSurface = e),
      (i.isHeldBackScreen = d),
      (i.toHeldBackSurfaceName = m),
      (i.isHeldBackTapTrackingId = p),
      (i.getScreenUnlockCount = _),
      (i.noteScreenUnlocked = f),
      (i.getOpenScopedHeldBackSurface = h),
      (i.openHeldBack = y),
      (i.enterHeldBackSurface = C),
      (i.captureHeldBackSurface = b),
      (i.isHeldBackEvent = v));
  },
  66,
);
