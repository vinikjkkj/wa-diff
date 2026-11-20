__d(
  "WAWebHatchPeerInviteLocalState",
  [
    "$InternalEnum",
    "WABinary",
    "WACrc32",
    "WALogger",
    "WAWebHatchPeerInviteUrl",
    "WAWebLocalStorage",
    "WAWebUserPrefsStore",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u = n("$InternalEnum").Mirrored(["HatchPeerConnectIntroSeen"]),
      c = u.HatchPeerConnectIntroSeen,
      d = "hatch-peer-invite-connect-states",
      m = 200,
      p = new Set(),
      _ = new Map();
    function f() {
      try {
        return r("WAWebUserPrefsStore").getUser(c) === !0;
      } catch (e) {
        return !1;
      }
    }
    function g() {
      try {
        r("WAWebUserPrefsStore").setUser(c, !0);
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
    function h(e) {
      return (
        p.add(e),
        function () {
          p.delete(e);
        }
      );
    }
    function y(e) {
      var t, n;
      return (t = (n = v(e)) == null ? void 0 : n.state) != null ? t : null;
    }
    function C(e) {
      var t, n;
      return (t = (n = v(e)) == null ? void 0 : n.museId) != null ? t : null;
    }
    function b(e, t, n) {
      var r = S(e);
      if (r != null) {
        var o = { museId: t === "requested" ? n : null, state: t },
          a = []
            .concat(
              R().filter(function (e) {
                var t = e[0];
                return t !== r;
              }),
              [o.museId != null ? [r, t, o.museId] : [r, t]],
            )
            .slice(-m);
        (E(d, JSON.stringify(a)) ? _.delete(r) : _.set(r, o),
          p.forEach(function (e) {
            return e();
          }));
      }
    }
    function v(e) {
      var t = S(e);
      if (t == null) return null;
      var n = R().find(function (e) {
        var n = e[0];
        return n === t;
      });
      return n != null ? { museId: n[2], state: n[1] } : _.get(t);
    }
    function S(e) {
      var t = o("WAWebHatchPeerInviteUrl").getHatchPeerInviteFragment(e);
      return t != null
        ? r("WACrc32")(o("WABinary").Binary.build(t)).toString(16)
        : null;
    }
    function R() {
      var e;
      try {
        var t =
          r("WAWebLocalStorage") == null
            ? void 0
            : r("WAWebLocalStorage").getItem(d);
        e = t != null ? JSON.parse(t) : null;
      } catch (e) {
        return [];
      }
      return Array.isArray(e)
        ? e.flatMap(function (e) {
            if (!Array.isArray(e) || typeof e[0] != "string") return [];
            var t = L(e[1]),
              n = typeof e[2] == "string" ? e[2] : null;
            return t != null ? [[e[0], t, n]] : [];
          })
        : [];
    }
    function L(e) {
      return e === "requested"
        ? "requested"
        : e === "connected"
          ? "connected"
          : null;
    }
    function E(e, t) {
      if (r("WAWebLocalStorage") == null) return !1;
      try {
        return (r("WAWebLocalStorage").setItem(e, t), !0);
      } catch (e) {
        return (
          o("WALogger")
            .WARN(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
                  "[hatch-peer-invite] saving local state failed",
                ])),
            )
            .catching(r("getErrorSafe")(e)),
          !1
        );
      }
    }
    ((l.HatchPeerInviteUserPrefs = u),
      (l.hasSeenHatchPeerConnectIntro = f),
      (l.markHatchPeerConnectIntroSeen = g),
      (l.subscribeHatchPeerInviteConnectStates = h),
      (l.getHatchPeerInviteConnectState = y),
      (l.getHatchPeerInviteMuseId = C),
      (l.saveHatchPeerInviteConnectState = b));
  },
  98,
);
