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
        HATCH_CVM_PIN: "hatch-cvm-pin",
        HATCH_SECURE_CREDENTIAL_DETAIL: "hatch-secure-credential-detail",
        HATCH_SECURE_CREDENTIAL_EDIT: "hatch-secure-credential-edit",
        HATCH_SECURE_CREDENTIAL_ENTRY: "hatch-secure-credential-entry",
        LOCKED_CHATS_DRAWER: "locked-chats-drawer",
        PASSKEY_CHECKPOINT: "passkey-checkpoint",
        PAYMENTS_PASSKEY_NOTICE: "payments-passkey-notice",
        PDF_PASSWORD_DIALOG: "pdf-password-dialog",
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
    function b(e) {
      return e instanceof Element
        ? (C(),
          s.some(function (t) {
            return v(t, e);
          }) ||
            Array.from(g).some(function (t) {
              return t.contains(e);
            }) ||
            S(e))
        : !1;
    }
    function v(e, t) {
      var n = e.getRoot,
        r = e.rootTestId;
      if (n != null) {
        var o = n();
        return o != null && o.isConnected && o.contains(t);
      }
      return r != null && B(t, r);
    }
    function S(e) {
      for (var t = e; t != null; t = t.parentElement)
        if (_(t.getAttribute("data-testid"))) return !0;
      return !1;
    }
    function R() {
      return c;
    }
    function L() {
      c++;
    }
    var E = new Set([
      e.CHAT_LOCK_SECRET_CODE,
      e.DIAL_PAD,
      e.PDF_PASSWORD_DIALOG,
    ]);
    function k() {
      var e;
      return (e = s.findLast(function (e) {
        return (
          (e.rootTestId != null || e.getRoot != null) &&
          !E.has(e.name) &&
          (e.isCurrent == null ? void 0 : e.isCurrent()) !== !1
        );
      })) == null
        ? void 0
        : e.name;
    }
    function I(e, t) {
      var n = T(e);
      try {
        t();
      } finally {
        n();
      }
    }
    function T(e, t) {
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
    function D(e) {
      return s.some(function (t) {
        return t.screenName === e;
      });
    }
    function x(e) {
      var t = s.findLast(function (t) {
        return (
          e != null &&
          t.screenName === e &&
          (t.isCurrent == null ? void 0 : t.isCurrent()) !== !1
        );
      });
      return t != null ? t.name : null;
    }
    var $ = null;
    function P(e) {
      $ = e;
    }
    function N(e) {
      for (var t, n = s.length - 1; n >= 0; n--) {
        var r = s[n];
        if (F(r, e)) return r.name;
      }
      return e != null && (t = $ == null ? void 0 : $(e)) != null ? t : null;
    }
    function M(e) {
      return s
        .filter(function (t) {
          return F(t, e);
        })
        .map(function (e) {
          var t = e.name,
            n = e.token;
          return { name: t, token: n };
        });
    }
    function w() {
      return new Set(
        s.map(function (e) {
          return e.token;
        }),
      );
    }
    function A(e) {
      var t = e.heldBackSurface !== void 0 ? e.heldBackSurface : N();
      return (
        t != null ||
        d(e.screenName) ||
        d(e.destinationName) ||
        x(e.screenName) != null
      );
    }
    function F(e, t) {
      var n = e.getRoot,
        r = e.holdsUntilRootAttached,
        o = e.rootTestId;
      if (n != null) {
        var a = n();
        return a == null || !a.isConnected
          ? r
          : t instanceof Node && a.contains(t);
      }
      return o == null || (r && !O(o)) ? !0 : B(t, o);
    }
    function O(e) {
      return document.querySelector('[data-testid="' + e + '"]') != null;
    }
    function B(e, t) {
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
      (i.isInsideHeldBackElement = b),
      (i.getScreenUnlockCount = R),
      (i.noteScreenUnlocked = L),
      (i.getOpenScopedHeldBackSurface = k),
      (i.openHeldBack = I),
      (i.enterHeldBackSurface = T),
      (i.isScreenClaimedByOpenSurface = D),
      (i.captureHeldBackScreen = x),
      (i.setHeldPopupLookup = P),
      (i.captureHeldBackSurface = N),
      (i.getCoveringHeldBackHolds = M),
      (i.getActiveHeldBackTokens = w),
      (i.isHeldBackEvent = A));
  },
  66,
);
