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
        DIAL_PAD: "dial-pad-drawer",
        LOCKED_CHATS_DRAWER: "locked-chats-drawer",
        PASSKEY_CHECKPOINT: "passkey-checkpoint",
        PAYMENTS_PASSKEY_NOTICE: "payments-passkey-notice",
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
        "navbar-item-locked",
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
    var p = new Map();
    function _(e) {
      return (
        (e == null
          ? void 0
          : e.split("/").some(function (e) {
              return l.has(e) || p.has(e);
            })) === !0
      );
    }
    function f(e) {
      var t;
      p.set(e, ((t = p.get(e)) != null ? t : 0) + 1);
      var n = !1;
      return function () {
        var t;
        if (!n) {
          n = !0;
          var r = ((t = p.get(e)) != null ? t : 1) - 1;
          r > 0 ? p.set(e, r) : p.delete(e);
        }
      };
    }
    var g = new Set();
    function h(e) {
      (C(), g.add(e));
    }
    function y(e) {
      return (
        C(),
        Array.from(g).some(function (t) {
          return t.contains(e);
        })
      );
    }
    function C() {
      for (var e of g) e.isConnected || g.delete(e);
    }
    function b() {
      return c;
    }
    function v() {
      c++;
    }
    var S = new Set([e.CHAT_LOCK_SECRET_CODE, e.DIAL_PAD]);
    function R() {
      var e;
      return (e = s.findLast(function (e) {
        return (
          (e.rootTestId != null || e.getRoot != null) &&
          !S.has(e.name) &&
          (e.isCurrent == null ? void 0 : e.isCurrent()) !== !1
        );
      })) == null
        ? void 0
        : e.name;
    }
    function L(e, t) {
      var n = E(e);
      try {
        t();
      } finally {
        n();
      }
    }
    function E(e, t) {
      var n = t === void 0 ? {} : t,
        r = n.getRoot,
        o = n.holdsUntilRootAttached,
        a = o === void 0 ? !1 : o,
        i = n.isCurrent,
        l = n.rootTestId,
        c = n.screenName,
        d = u++;
      return (
        s.push({
          getRoot: r,
          holdsUntilRootAttached: a,
          isCurrent: i,
          name: e,
          rootTestId: l,
          screenName: c,
          token: d,
        }),
        function () {
          var e = s.findIndex(function (e) {
            return e.token === d;
          });
          e !== -1 && s.splice(e, 1);
        }
      );
    }
    function k(e) {
      var t = s.findLast(function (t) {
        return (
          e != null &&
          t.screenName === e &&
          (t.isCurrent == null ? void 0 : t.isCurrent()) !== !1
        );
      });
      return t != null ? t.name : null;
    }
    var I = null;
    function T(e) {
      I = e;
    }
    function D(e) {
      for (var t, n = s.length - 1; n >= 0; n--) {
        var r = s[n];
        if (N(r, e)) return r.name;
      }
      return e != null && (t = I == null ? void 0 : I(e)) != null ? t : null;
    }
    function x(e) {
      return s
        .filter(function (t) {
          return N(t, e);
        })
        .map(function (e) {
          var t = e.name,
            n = e.token;
          return { name: t, token: n };
        });
    }
    function $() {
      return new Set(
        s.map(function (e) {
          return e.token;
        }),
      );
    }
    function P(e) {
      var t = e.heldBackSurface !== void 0 ? e.heldBackSurface : D();
      return (
        t != null ||
        d(e.screenName) ||
        d(e.destinationName) ||
        k(e.screenName) != null
      );
    }
    function N(e, t) {
      var n = e.getRoot,
        r = e.holdsUntilRootAttached,
        o = e.rootTestId;
      if (n != null) {
        var a = n();
        return a == null || !a.isConnected
          ? r
          : t instanceof Node && a.contains(t);
      }
      return o == null || (r && !M(o)) ? !0 : w(t, o);
    }
    function M(e) {
      return document.querySelector('[data-testid="' + e + '"]') != null;
    }
    function w(e, t) {
      return (
        e instanceof Element && e.closest('[data-testid="' + t + '"]') != null
      );
    }
    ((i.HeldBackSurface = e),
      (i.isHeldBackScreen = d),
      (i.toHeldBackSurfaceName = m),
      (i.isHeldBackTapTrackingId = _),
      (i.holdBackTapsOn = f),
      (i.holdBackTapsInside = h),
      (i.isInsideHeldTapElement = y),
      (i.getScreenUnlockCount = b),
      (i.noteScreenUnlocked = v),
      (i.getOpenScopedHeldBackSurface = R),
      (i.openHeldBack = L),
      (i.enterHeldBackSurface = E),
      (i.captureHeldBackScreen = k),
      (i.setHeldPopupLookup = T),
      (i.captureHeldBackSurface = D),
      (i.getCoveringHeldBackHolds = x),
      (i.getActiveHeldBackTokens = $),
      (i.isHeldBackEvent = P));
  },
  66,
);
