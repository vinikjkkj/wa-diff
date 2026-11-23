__d(
  "WAWebChatInternalStatusHook",
  [
    "WATimeUtils",
    "WAWebContactCollection",
    "WAWebFrontendContactGetters",
    "WAWebTextStatusAction",
    "WAWebTextStatusUtils",
    "err",
    "react",
    "useWAWebAsync",
    "useWAWebContactValues",
    "useWAWebTimeout",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = s.useEffect,
      c = s.useState,
      d = { brb: "BRB", pto: "PTO", sick: "SICK" },
      m = ["status"].concat(Object.keys(d)),
      p = /\{([^}]*)\}/g;
    function _(e) {
      var t = e,
        n = [],
        r = e.matchAll(p);
      for (var o of r) {
        var a,
          i = o == null ? void 0 : o[1],
          l = (a = i == null ? void 0 : i.split(":")) != null ? a : [],
          s = l[0],
          u = l[1];
        switch (s.toLowerCase()) {
          case "tz":
            (n.push({ name: "tz", params: [u] }),
              (t = t.replace((o == null ? void 0 : o[0]) || "", "")));
            break;
          default:
            break;
        }
      }
      return { status: t.trim(), addons: n };
    }
    function f(e) {
      try {
        var t = e.split("/"),
          n = new Date(),
          o = n.getFullYear();
        t.length === 2 && t.push(o.toString());
        var a = new Date(t[0] + "/" + t[1] + "/" + t[2]);
        return a;
      } catch (e) {
        throw r("err")("Invalid date format");
      }
    }
    function g(e) {
      try {
        var t = e == null ? void 0 : e.match(/@(\w+)\s*\{([^}]*)\}/),
          n = t == null ? void 0 : t[2];
        if (n == null) return !0;
        var r = n.split("-"),
          o = r[0],
          a = r[1],
          i = f(o),
          l = a === "" ? i : f(a),
          s = new Date();
        return i <= s && s <= l;
      } catch (e) {
        return !0;
      }
    }
    function h(e) {
      var t = e.isRegularUser();
      t && o("WAWebContactCollection").ContactCollection.gadd(e);
      var n = o("useWAWebContactValues").useOptionalContactValues(
          t ? e : null,
          [
            o("WAWebFrontendContactGetters").getTextStatusString,
            o("WAWebFrontendContactGetters").getTextStatusEmoji,
            o("WAWebFrontendContactGetters").getTextStatusLastUpdateTime,
            o("WAWebFrontendContactGetters").getTextStatusExpiryTs,
            o("WAWebFrontendContactGetters").getTextStatusEphemeralDuration,
          ],
        ),
        a = n != null ? n : [],
        i = a[0],
        l = a[1],
        s = a[2],
        p = a[3],
        f = a[4];
      r("useWAWebAsync")(
        async function () {
          return o("WAWebTextStatusAction").getTextStatus(e, s);
        },
        [e, s],
        t && o("WAWebTextStatusUtils").isTextStatusNotFetched(s),
      );
      var h = c(o("WATimeUtils").unixTime),
        y = h[0],
        C = h[1],
        b =
          o("WAWebTextStatusUtils").isEphemeralTextStatus(f) &&
          p != null &&
          p <= y,
        v =
          t &&
          !o("WAWebTextStatusUtils").isTextStatusNotFetched(s) &&
          !b &&
          o("WAWebTextStatusUtils").shouldDisplayTextStatus({
            textStatusString: i,
            textStatusEmoji: l,
            textStatusLastUpdateTime: s,
            textStatusExpiryTs: p,
            textStatusEphemeralDuration: f,
          }),
        S = o("useWAWebTimeout").useAlarm(
          function () {
            return C(o("WATimeUtils").unixTime());
          },
          o("WATimeUtils").castToUnixTime(p != null ? p : 0),
          { isGlobal: !0 },
        ),
        R = S[0],
        L = S[1];
      u(
        function () {
          return (
            v && o("WAWebTextStatusUtils").isEphemeralTextStatus(f) && R(),
            L
          );
        },
        [v, f, R, L],
      );
      var E = _(v && i != null ? i : ""),
        k = E.addons,
        I = E.status,
        T = I == null ? void 0 : I.match(/@(\w*)\b/),
        D = T == null ? void 0 : T[1].toLowerCase(),
        x = D != null && m.includes(D),
        $ = x ? g(I) : !1,
        P = D != null && $ ? d[D] : null,
        N = !!P;
      return {
        status: I,
        hasStatus: x,
        hasActiveStatus: $,
        overlay: P,
        hasOverlay: N,
        addons: k,
      };
    }
    l.default = h;
  },
  98,
);
