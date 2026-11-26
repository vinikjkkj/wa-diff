__d(
  "WAWebPathfinderHeldBackSurface",
  ["$InternalEnum", "WALogger"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = n("$InternalEnum")({
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
      u = new Set([
        "confirm-logout-app-lock-link",
        "contextual-banner-app-lock-upsell",
        "mi-chatlock",
        "mi-logout menu-item",
        "mi-screen-lock menu-item",
        "navbar-item-locked",
        "screen-lock-settings-item",
      ]),
      c = [],
      d = 0,
      m = 0,
      p = 16,
      _ = [],
      f = !1;
    function g(e) {
      return s.isValid(e);
    }
    function h(e) {
      return s.cast(e);
    }
    var y = new Map();
    function C(e) {
      return (
        (e == null
          ? void 0
          : e.split("/").some(function (e) {
              return u.has(e) || y.has(e);
            })) === !0
      );
    }
    function b(e) {
      var t;
      y.set(e, ((t = y.get(e)) != null ? t : 0) + 1);
      var n = !1;
      return function () {
        var t;
        if (!n) {
          n = !0;
          var r = ((t = y.get(e)) != null ? t : 1) - 1;
          r > 0 ? y.set(e, r) : y.delete(e);
        }
      };
    }
    var v = new Set();
    function S(e) {
      (L(), v.add(e));
    }
    function R(e) {
      return (
        L(),
        Array.from(v).some(function (t) {
          return t.contains(e);
        })
      );
    }
    function L() {
      for (var e of v) e.isConnected || v.delete(e);
    }
    function E(e) {
      return e instanceof Element
        ? (L(),
          c.some(function (t) {
            return k(t, e);
          }) ||
            Array.from(v).some(function (t) {
              return t.contains(e);
            }) ||
            I(e))
        : !1;
    }
    function k(e, t) {
      var n = e.getRoot,
        r = e.rootTestId;
      if (n != null) {
        var o = n();
        return o != null && o.isConnected && o.contains(t);
      }
      return r != null && Y(t, r);
    }
    function I(e) {
      for (var t = e; t != null; t = t.parentElement)
        if (C(t.getAttribute("data-testid"))) return !0;
      return !1;
    }
    function T() {
      return m;
    }
    function D() {
      m++;
    }
    var x = 0,
      $ = !1;
    function P(e) {
      (e && !$ && x++, ($ = e));
    }
    function N() {
      return $ ? null : x;
    }
    var M = new Set([
      s.CHAT_LOCK_SECRET_CODE,
      s.DIAL_PAD,
      s.PDF_PASSWORD_DIALOG,
    ]);
    function w() {
      var e;
      return (e = c.findLast(function (e) {
        return (
          (e.rootTestId != null || e.getRoot != null) &&
          !M.has(e.name) &&
          (e.isCurrent == null ? void 0 : e.isCurrent()) !== !1
        );
      })) == null
        ? void 0
        : e.name;
    }
    function A(e, t) {
      var n = F(e);
      try {
        t();
      } finally {
        n();
      }
    }
    function F(e, t) {
      var n = t === void 0 ? {} : t,
        r = n.getRoot,
        o = n.holdsUntilRootAttached,
        a = o === void 0 ? !1 : o,
        i = n.isCurrent,
        l = n.rootTestId,
        s = n.screenName,
        u = d++;
      return (
        c.push({
          getRoot: r,
          holdsUntilRootAttached: a,
          isCurrent: i,
          name: e,
          rootTestId: l,
          screenName: s,
          token: u,
        }),
        function () {
          var e = c.findIndex(function (e) {
            return e.token === u;
          });
          if (e !== -1) {
            var t = c.splice(e, 1),
              n = t[0];
            B(n);
          }
        }
      );
    }
    function O(e) {
      return c.some(function (t) {
        return t.screenName === e;
      });
    }
    function B(e) {
      var t = W(function () {
          return Q(e, null);
        }, !0),
        n = c.some(function (n) {
          return (
            n.name === e.name &&
            n.screenName === e.screenName &&
            W(function () {
              return (n.isCurrent == null ? void 0 : n.isCurrent()) !== !1;
            }, !1) &&
            (!t ||
              W(function () {
                return Q(n, null);
              }, !1))
          );
        });
      n ||
        (_.push({
          name: e.name,
          screenName: e.screenName,
          coversUntargeted: t,
          exitedAtPerfMs: self.performance.now(),
        }),
        _.length > p && _.shift());
    }
    function W(t, n) {
      try {
        return t();
      } catch (t) {
        return (
          f ||
            ((f = !0),
            o("WALogger")
              .WARN(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "[pathfinder] hold unreadable at exit: ",
                    "",
                  ])),
                t instanceof Error ? t.name : typeof t,
              )
              .sendLogs("pathfinder-hold-unreadable-at-exit")),
          n
        );
      }
    }
    function q(e, t) {
      if (_.length === p && _[0].exitedAtPerfMs >= t) return _[0].name;
      var n = _.findLast(function (n) {
        return (
          n.exitedAtPerfMs >= t &&
          (n.coversUntargeted || (e != null && n.screenName === e))
        );
      });
      return n != null ? n.name : void 0;
    }
    function U(e) {
      var t = c.findLast(function (t) {
        return (
          e != null &&
          t.screenName === e &&
          (t.isCurrent == null ? void 0 : t.isCurrent()) !== !1
        );
      });
      return t != null ? t.name : null;
    }
    var V = null;
    function H(e) {
      V = e;
    }
    function G(e) {
      for (var t, n = c.length - 1; n >= 0; n--) {
        var r = c[n];
        if (Q(r, e)) return r.name;
      }
      return e != null && (t = V == null ? void 0 : V(e)) != null ? t : null;
    }
    function z(e) {
      return c
        .filter(function (t) {
          return Q(t, e);
        })
        .map(function (e) {
          var t = e.name,
            n = e.token;
          return { name: t, token: n };
        });
    }
    function j() {
      return new Set(
        c.map(function (e) {
          return e.token;
        }),
      );
    }
    function K(e) {
      var t = e.heldBackSurface !== void 0 ? e.heldBackSurface : G();
      return (
        t != null ||
        g(e.screenName) ||
        g(e.destinationName) ||
        U(e.screenName) != null
      );
    }
    function Q(e, t) {
      var n = e.getRoot,
        r = e.holdsUntilRootAttached,
        o = e.rootTestId;
      if (n != null) {
        var a = n();
        return a == null || !a.isConnected
          ? r
          : t instanceof Node && a.contains(t);
      }
      return o == null || (r && !X(o)) ? !0 : Y(t, o);
    }
    function X(e) {
      return document.querySelector('[data-testid="' + e + '"]') != null;
    }
    function Y(e, t) {
      return (
        e instanceof Element && e.closest('[data-testid="' + t + '"]') != null
      );
    }
    ((l.HeldBackSurface = s),
      (l.isHeldBackScreen = g),
      (l.toHeldBackSurfaceName = h),
      (l.isHeldBackTapTrackingId = C),
      (l.holdBackTapsOn = b),
      (l.holdBackTapsInside = S),
      (l.isInsideHeldTapElement = R),
      (l.isInsideHeldBackElement = E),
      (l.getScreenUnlockCount = T),
      (l.noteScreenUnlocked = D),
      (l.noteBackgroundTransition = P),
      (l.getForegroundEpoch = N),
      (l.getOpenScopedHeldBackSurface = w),
      (l.openHeldBack = A),
      (l.enterHeldBackSurface = F),
      (l.isScreenClaimedByOpenSurface = O),
      (l.getHoldEndedSince = q),
      (l.captureHeldBackScreen = U),
      (l.setHeldPopupLookup = H),
      (l.captureHeldBackSurface = G),
      (l.getCoveringHeldBackHolds = z),
      (l.getActiveHeldBackTokens = j),
      (l.isHeldBackEvent = K));
  },
  98,
);
