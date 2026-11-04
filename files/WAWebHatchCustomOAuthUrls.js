__d(
  "WAWebHatchCustomOAuthUrls",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = "agent.meta.ai",
      l = "code_challenge",
      s = "code_challenge_method",
      u = "S256",
      c = "completion_callback_url",
      d = ["client_id", "redirect_uri", "state", "response_type", l, s],
      m = /^[^:]*:\/\/[^/?#]*@/,
      p = new Set([
        "access_token",
        "assertion",
        "client_assertion",
        "client_secret",
        "code",
        "id_token",
        "password",
        "redirect_uri",
        "refresh_token",
        "state",
        "token",
      ]),
      _ = /[#\\\s]/;
    function f(e, t) {
      var n = R(e);
      return (
        n != null &&
        L(n.hostname.replace(/\.$/, ""), t) &&
        !_.test(e) &&
        n.search
          .slice(1)
          .split("&")
          .every(function (e) {
            return !C(e.split("=")[0]);
          })
      );
    }
    function g(e) {
      var t;
      return (t = E(e)) == null
        ? void 0
        : t.hostname.toLowerCase().replace(/\.$/, "");
    }
    function h(t, n) {
      var r = R(t);
      if (r == null || m.test(t) || t.includes("#")) return !1;
      var o = r.hostname.toLowerCase().replace(/\.$/, ""),
        a = v(r.search);
      return (L(o, n) || o === e) && a != null && b(a);
    }
    function y(e) {
      var t = E(e);
      return t == null ? "/" : "" + t.pathname + t.search;
    }
    function C(e) {
      try {
        return p.has(decodeURIComponent(e.replace(/\+/g, "%2B")).toLowerCase());
      } catch (e) {
        return !0;
      }
    }
    function b(e) {
      var t,
        n = e.map(function (e) {
          return e.name;
        }),
        r = n.includes(l) || n.includes(s);
      return (
        !n.includes(c) &&
        d.every(function (e) {
          return (
            n.filter(function (t) {
              return t === e;
            }).length <= 1
          );
        }) &&
        (!r ||
          ((t = e.find(function (e) {
            return e.name === s;
          })) == null
            ? void 0
            : t.value) === u)
      );
    }
    function v(e) {
      var t = [];
      for (var n of e.slice(1).split("&"))
        if (n !== "") {
          var r = n.indexOf("="),
            o = S(r < 0 ? n : n.slice(0, r));
          if (o == null) return null;
          t.push({
            name: o.toLowerCase(),
            value: r < 0 ? "" : S(n.slice(r + 1)),
          });
        }
      return t;
    }
    function S(e) {
      try {
        return decodeURIComponent(e.replace(/\+/g, "%2B"));
      } catch (e) {
        return null;
      }
    }
    function R(e) {
      var t = E(e);
      return (t == null ? void 0 : t.protocol) === "https:" &&
        t.username === "" &&
        t.password === ""
        ? t
        : null;
    }
    function L(e, t) {
      var n = t.toLowerCase().replace(/\.$/, "");
      return e === n || e.endsWith("." + n);
    }
    function E(e) {
      try {
        return new URL(e);
      } catch (e) {
        return null;
      }
    }
    ((i.isHatchOAuthUrlAtIssuer = f),
      (i.hatchUrlHost = g),
      (i.isSafeHatchOAuthAuthorizeUrl = h),
      (i.hatchOAuthTokenRefreshPath = y));
  },
  66,
);
