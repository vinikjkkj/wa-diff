__d(
  "WAWebHatchPeerInviteLocalState",
  [
    "WABinary",
    "WACrc32",
    "WALogger",
    "WAWebHatchPeerInviteUrl",
    "WAWebLocalStorage",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = "hatch-peer-connect-intro-seen",
      u = "hatch-peer-invite-connect-states",
      c = 200,
      d = new Set(),
      m = new Map();
    function p() {
      try {
        return (
          (r("WAWebLocalStorage") == null
            ? void 0
            : r("WAWebLocalStorage").getItem(s)) === "1"
        );
      } catch (e) {
        return !1;
      }
    }
    function _() {
      R(s, "1");
    }
    function f(e) {
      return (
        d.add(e),
        function () {
          d.delete(e);
        }
      );
    }
    function g(e) {
      var t, n;
      return (t = (n = C(e)) == null ? void 0 : n.state) != null ? t : null;
    }
    function h(e) {
      var t, n;
      return (t = (n = C(e)) == null ? void 0 : n.museId) != null ? t : null;
    }
    function y(e, t, n) {
      var r = b(e);
      if (r != null) {
        var o = { museId: t === "requested" ? n : null, state: t },
          a = []
            .concat(
              v().filter(function (e) {
                var t = e[0];
                return t !== r;
              }),
              [o.museId != null ? [r, t, o.museId] : [r, t]],
            )
            .slice(-c);
        (R(u, JSON.stringify(a)) ? m.delete(r) : m.set(r, o),
          d.forEach(function (e) {
            return e();
          }));
      }
    }
    function C(e) {
      var t = b(e);
      if (t == null) return null;
      var n = v().find(function (e) {
        var n = e[0];
        return n === t;
      });
      return n != null ? { museId: n[2], state: n[1] } : m.get(t);
    }
    function b(e) {
      var t = o("WAWebHatchPeerInviteUrl").getHatchPeerInviteFragment(e);
      return t != null
        ? r("WACrc32")(o("WABinary").Binary.build(t)).toString(16)
        : null;
    }
    function v() {
      var e;
      try {
        var t =
          r("WAWebLocalStorage") == null
            ? void 0
            : r("WAWebLocalStorage").getItem(u);
        e = t != null ? JSON.parse(t) : null;
      } catch (e) {
        return [];
      }
      return Array.isArray(e)
        ? e.flatMap(function (e) {
            if (!Array.isArray(e) || typeof e[0] != "string") return [];
            var t = S(e[1]),
              n = typeof e[2] == "string" ? e[2] : null;
            return t != null ? [[e[0], t, n]] : [];
          })
        : [];
    }
    function S(e) {
      return e === "requested"
        ? "requested"
        : e === "connected"
          ? "connected"
          : null;
    }
    function R(t, n) {
      if (r("WAWebLocalStorage") == null) return !1;
      try {
        return (r("WAWebLocalStorage").setItem(t, n), !0);
      } catch (t) {
        return (
          o("WALogger")
            .WARN(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "[hatch-peer-invite] saving local state failed",
                ])),
            )
            .catching(r("getErrorSafe")(t)),
          !1
        );
      }
    }
    ((l.hasSeenHatchPeerConnectIntro = p),
      (l.markHatchPeerConnectIntroSeen = _),
      (l.subscribeHatchPeerInviteConnectStates = f),
      (l.getHatchPeerInviteConnectState = g),
      (l.getHatchPeerInviteMuseId = h),
      (l.saveHatchPeerInviteConnectState = y));
  },
  98,
);
