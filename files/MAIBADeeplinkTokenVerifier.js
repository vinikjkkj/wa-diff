__d(
  "MAIBADeeplinkTokenVerifier",
  ["FBLogger", "getErrorSafe", "vulture"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        kty: "RSA",
        e: "AQAB",
        n: "nYKcgGILKuKwvOEKVf1LSbaOHQVQvPhHNmyLpdbKd5NqHL-UKUIBvu7may1Ht60drt931O8BZ3TaQFR8etiW2KIIKk27j5EKLRKIAS2RwPq8x2J6keOTeWIWdy5qotzYDvKrlrh32GVjNh0sgYeBSRPxD69zsvviuja-uH4-TNYJCVXg6LwB7po32tNThSq1SPZCi4ZD65TF7hWFr3A0kqlJB5U5HDDusMjceaW3j3cyBV28at0qBdj2zMuHUW_aEyWmVlBjXfmhdVqJxaWz2gpFEUVKhjKENTpQBlJO-bjKC0ewxZeiLc_xs-pzAEToi4Lhb0lv4GfSbhSFvmlcGw",
        alg: "RS256",
        ext: !0,
      },
      s = ".";
    function u(e) {
      return crypto.subtle.importKey(
        "jwk",
        e,
        { name: "RSASSA-PKCS1-v1_5", hash: "SHA-256" },
        !1,
        ["verify"],
      );
    }
    var c = null;
    function d() {
      return (c == null && (c = u(e)), c);
    }
    function m(e) {
      for (
        var t = e.replace(/-/g, "+").replace(/_/g, "/"),
          n = t.length % 4,
          r = n === 0 ? t : t + "=".repeat(4 - n),
          o = atob(r),
          a = new Uint8Array(o.length),
          i = 0;
        i < o.length;
        i++
      )
        a[i] = o.charCodeAt(i);
      return a;
    }
    function p(e) {
      var t = e.entrypoint_context;
      if (t == null || typeof t != "object") return null;
      var n = t.ad_object_ids,
        r = t.ad_object_level;
      if (
        !Array.isArray(n) ||
        (r !== "ADGROUP" && r !== "CAMPAIGN" && r !== "CAMPAIGN_GROUP")
      )
        return null;
      var o = n
        .filter(function (e) {
          return typeof e == "string" && /^\d+$/.test(e);
        })
        .slice(0, 1);
      return o.length === 0 ? null : { ad_object_ids: o, ad_object_level: r };
    }
    async function _(e, t) {
      var n = e.indexOf(s);
      if (n <= 0 || n === e.length - 1) return null;
      var o = e.slice(0, n),
        a = e.slice(n + 1);
      try {
        var i = await crypto.subtle.verify(
          { name: "RSASSA-PKCS1-v1_5" },
          t,
          m(a),
          new TextEncoder().encode(o),
        );
        if (!i) return null;
        var l = JSON.parse(new TextDecoder().decode(m(o)));
        if (
          l == null ||
          typeof l != "object" ||
          typeof l.prompt_text != "string" ||
          typeof l.prompt_id != "string"
        )
          return null;
        var u =
          typeof l.aud == "number"
            ? String(l.aud)
            : typeof l.aud == "string"
              ? l.aud
              : null;
        if (
          (l.exp !== void 0 &&
            (typeof l.exp != "number" ||
              !Number.isInteger(l.exp) ||
              l.exp <= 0)) ||
          (l.viewer_id !== void 0 &&
            (typeof l.viewer_id != "string" || !/^\d+$/.test(l.viewer_id)))
        )
          return null;
        var c = typeof l.admin_text == "string" ? l.admin_text : null,
          d = typeof l.exp == "number" ? l.exp : null,
          _ =
            typeof l.prediagnosed_routine_type == "string" &&
            /^[A-Z][A-Z0-9_]{0,127}$/.test(l.prediagnosed_routine_type)
              ? l.prediagnosed_routine_type
              : null,
          f = typeof l.viewer_id == "string" ? l.viewer_id : null,
          g = p(l);
        return {
          adminText: c,
          aud: u,
          entrypointContext: g,
          expiresAt: d,
          hideUserMessage: l.hide_user_message === !0,
          prediagnosedRoutineType: _,
          promptId: l.prompt_id,
          promptText: l.prompt_text,
          viewerId: f,
        };
      } catch (e) {
        return (
          r("FBLogger")("maiba_deeplink")
            .catching(r("getErrorSafe")(e))
            .warn("Failed to decode a signed MAIBA deeplink token"),
          null
        );
      }
    }
    async function f(e) {
      var t;
      try {
        t = await d();
      } catch (e) {
        return (
          r("FBLogger")("maiba_deeplink")
            .catching(r("getErrorSafe")(e))
            .warn("Failed to load the MAIBA deeplink verification key"),
          null
        );
      }
      return _(e, t);
    }
    async function g(e, t) {
      r("vulture")("8QmcpRqQz5yqcBvtuf-3xgvtfHQ=");
      var n;
      try {
        n = await u(t);
      } catch (e) {
        return (
          r("FBLogger")("maiba_deeplink")
            .catching(r("getErrorSafe")(e))
            .warn("Failed to import a MAIBA deeplink verification key"),
          null
        );
      }
      return _(e, n);
    }
    ((l.verifyDeeplinkToken = f), (l.verifyDeeplinkTokenWithKeyForTesting = g));
  },
  98,
);
