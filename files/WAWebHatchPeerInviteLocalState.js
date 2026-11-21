__d(
  "WAWebHatchPeerInviteLocalState",
  [
    "$InternalEnum",
    "WABinary",
    "WACrc32",
    "WALogger",
    "WAWebHatchLinkedStatusManager",
    "WAWebHatchPeerInviteUrl",
    "WAWebHatchVmConnection",
    "WAWebLocalStorage",
    "WAWebUserPrefsMeUser",
    "WAWebUserPrefsStore",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u,
      c = n("$InternalEnum").Mirrored(["HatchPeerConnectIntroSeen"]),
      d = c.HatchPeerConnectIntroSeen,
      m = "hatch-peer-invite-connect-states",
      p = 200,
      _ = !1,
      f = 0,
      g = new Set(),
      h = new Map();
    function y() {
      var e,
        t,
        n,
        a =
          (e = o("WAWebUserPrefsMeUser").getMaybeMeLidUser()) == null
            ? void 0
            : e.toString(),
        i =
          (t =
            (n = r("WAWebHatchLinkedStatusManager").getLinkedStatus()) == null
              ? void 0
              : n.channelFbid) != null
            ? t
            : null;
      return a != null && i != null ? a + "|" + i : null;
    }
    function C(e) {
      return r("WAWebHatchLinkedStatusManager").subscribeToLinkedStatus(
        function () {
          return e();
        },
      );
    }
    function b(e) {
      if ((D(), e == null)) return !1;
      try {
        return r("WAWebUserPrefsStore").getUser(d) === e;
      } catch (e) {
        return !1;
      }
    }
    function v(t) {
      D();
      try {
        r("WAWebUserPrefsStore").setUser(d, t);
      } catch (t) {
        o("WALogger")
          .WARN(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "[hatch-peer-invite] saving connect intro seen failed",
              ])),
          )
          .catching(r("getErrorSafe")(t));
      }
    }
    function S() {
      return f;
    }
    function R() {
      f++;
      try {
        (r("WAWebUserPrefsStore").setUser(d, null),
          r("WAWebLocalStorage") == null ||
            r("WAWebLocalStorage").removeItem(m));
      } catch (e) {
        o("WALogger")
          .WARN(
            s ||
              (s = babelHelpers.taggedTemplateLiteralLoose([
                "[hatch-peer-invite] clearing local state failed",
              ])),
          )
          .catching(r("getErrorSafe")(e));
      }
      (h.clear(),
        g.forEach(function (e) {
          return e();
        }));
    }
    function L(e) {
      return (
        g.add(e),
        function () {
          g.delete(e);
        }
      );
    }
    function E(e) {
      var t, n;
      return (t = (n = T(e)) == null ? void 0 : n.state) != null ? t : null;
    }
    function k(e) {
      var t, n;
      return (t = (n = T(e)) == null ? void 0 : n.museId) != null ? t : null;
    }
    function I(e, t, n) {
      D();
      var r = x(e);
      if (r != null) {
        var o = { museId: t === "requested" ? n : null, state: t },
          a = []
            .concat(
              P().filter(function (e) {
                var t = e[0];
                return t !== r;
              }),
              [o.museId != null ? [r, t, o.museId] : [r, t]],
            )
            .slice(-p);
        (M(m, JSON.stringify(a)) ? h.delete(r) : h.set(r, o),
          g.forEach(function (e) {
            return e();
          }));
      }
    }
    function T(e) {
      D();
      var t = x(e);
      if (t == null) return null;
      var n = P().find(function (e) {
        var n = e[0];
        return n === t;
      });
      return n != null ? { museId: n[2], state: n[1] } : h.get(t);
    }
    function D() {
      _ ||
        ((_ = !0),
        o("WAWebHatchVmConnection").subscribeToHatchVmAccountChange(R));
    }
    function x(e) {
      var t = y(),
        n = o("WAWebHatchPeerInviteUrl").getHatchPeerInviteFragment(e);
      return t != null && n != null ? $(t) + ":" + $(n) : null;
    }
    function $(e) {
      return r("WACrc32")(o("WABinary").Binary.build(e)).toString(16);
    }
    function P() {
      var e;
      try {
        var t =
          r("WAWebLocalStorage") == null
            ? void 0
            : r("WAWebLocalStorage").getItem(m);
        e = t != null ? JSON.parse(t) : null;
      } catch (e) {
        return [];
      }
      return Array.isArray(e)
        ? e.flatMap(function (e) {
            if (!Array.isArray(e) || typeof e[0] != "string") return [];
            var t = N(e[1]),
              n = typeof e[2] == "string" ? e[2] : null;
            return t != null ? [[e[0], t, n]] : [];
          })
        : [];
    }
    function N(e) {
      return e === "requested"
        ? "requested"
        : e === "connected"
          ? "connected"
          : null;
    }
    function M(e, t) {
      if (r("WAWebLocalStorage") == null) return !1;
      try {
        return (r("WAWebLocalStorage").setItem(e, t), !0);
      } catch (e) {
        return (
          o("WALogger")
            .WARN(
              u ||
                (u = babelHelpers.taggedTemplateLiteralLoose([
                  "[hatch-peer-invite] saving local state failed",
                ])),
            )
            .catching(r("getErrorSafe")(e)),
          !1
        );
      }
    }
    ((l.HatchPeerInviteUserPrefs = c),
      (l.readHatchPeerConnectIntroIdentity = y),
      (l.subscribeHatchPeerConnectIntroIdentity = C),
      (l.hasSeenHatchPeerConnectIntro = b),
      (l.markHatchPeerConnectIntroSeen = v),
      (l.getHatchPeerInviteLocalStateEpoch = S),
      (l.clearHatchPeerInviteLocalState = R),
      (l.subscribeHatchPeerInviteConnectStates = L),
      (l.getHatchPeerInviteConnectState = E),
      (l.getHatchPeerInviteMuseId = k),
      (l.saveHatchPeerInviteConnectState = I));
  },
  98,
);
