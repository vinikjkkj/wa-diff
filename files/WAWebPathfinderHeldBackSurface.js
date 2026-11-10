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
        "mi-logout menu-item",
        "mi-screen-lock menu-item",
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
    function g() {
      var e;
      return (e = s.findLast(function (e) {
        return e.rootTestId != null;
      })) == null
        ? void 0
        : e.name;
    }
    function h(e, t) {
      var n = y(e);
      try {
        t();
      } finally {
        n();
      }
    }
    function y(e, t) {
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
    function C(e) {
      for (var t = s.length - 1; t >= 0; t--) {
        var n = s[t],
          r = n.name,
          o = n.rootTestId;
        if (o == null || v(e, o)) return r;
      }
      return null;
    }
    function b(e) {
      var t = e.heldBackSurface !== void 0 ? e.heldBackSurface : C();
      return t != null || d(e.screenName) || d(e.destinationName);
    }
    function v(e, t) {
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
      (i.getOpenScopedHeldBackSurface = g),
      (i.openHeldBack = h),
      (i.enterHeldBackSurface = y),
      (i.captureHeldBackSurface = C),
      (i.isHeldBackEvent = b));
  },
  66,
);
