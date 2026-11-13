__d(
  "WAWebPathfinderHeldBackSurface",
  ["$InternalEnum"],
  function (t, n, r, o, a, i) {
    var e = n("$InternalEnum")({
        APP_LOCK_CONFIRMATION: "app-lock-confirmation",
        BLOCKED_CONTACTS: "blocked-contacts",
        CHAT_LOCK_SECRET_CODE: "chat-lock-secret-code",
        CHAT_LOCK_SECRET_CODE_SETUP: "chat-lock-secret-code-setup",
        CONFIRM_LOGOUT: "confirm-logout",
        SCREEN_LOCK: "screen-lock",
        SCREEN_LOCK_ACTIVE_CALL_BLOCKER: "screen-lock-active-call-blocker",
        SCREEN_LOCK_PASSCODE_REMOVAL: "screen-lock-passcode-removal",
        SCREEN_LOCK_PASSCODE_SETUP: "screen-lock-passcode-setup",
        SCREEN_LOCK_SETTINGS: "screen-lock-settings",
        SECURITY_SETTINGS: "security-settings",
        SELECT_CONTACTS_EXCEPT: "select-contacts-except",
        STATUS_AUDIENCE_SELECTOR: "status-audience-selector",
        STATUS_SELECT_CONTACTS: "status-select-contacts",
        VERIFICATION: "verification",
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
    function C(e, t, n) {
      n === void 0 && (n = !1);
      var r = u++;
      return (
        s.push({ holdsUntilRootAttached: n, name: e, rootTestId: t, token: r }),
        function () {
          var e = s.findIndex(function (e) {
            return e.token === r;
          });
          e !== -1 && s.splice(e, 1);
        }
      );
    }
    function b(e) {
      for (var t = s.length - 1; t >= 0; t--) {
        var n = s[t];
        if (S(n, e)) return n.name;
      }
      return null;
    }
    function v(e) {
      var t = e.heldBackSurface !== void 0 ? e.heldBackSurface : b();
      return t != null || d(e.screenName) || d(e.destinationName);
    }
    function S(e, t) {
      var n = e.holdsUntilRootAttached,
        r = e.rootTestId;
      return r == null || (n && !R(r)) ? !0 : L(t, r);
    }
    function R(e) {
      return document.querySelector('[data-testid="' + e + '"]') != null;
    }
    function L(e, t) {
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
