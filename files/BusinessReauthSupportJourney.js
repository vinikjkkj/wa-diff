__d(
  "BusinessReauthSupportJourney",
  [
    "CurrentUser",
    "FBLogger",
    "I64",
    "WebStorage",
    "getErrorSafe",
    "isValidID",
    "justknobx",
    "requireDeferred",
    "uuidv4",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u = r("requireDeferred")("BusinessReauthSupportFalcoEvent").__setRef(
        "BusinessReauthSupportJourney",
      ),
      c = "bpcs_business_reauth_support_journeys",
      d = "bpcs_business_reauth_support_conversations",
      m = "bpcs_business_reauth_support_impressions",
      p = !1,
      _ = new Set(),
      f = "bpcs_business_reauth_support_first_answers",
      g = new Map(),
      h = !1,
      y = Date.now(),
      C = new Set();
    function b() {
      if (!h) {
        h = !0;
        try {
          var e,
            t,
            n = JSON.parse(
              (e =
                (t = (s || (s = r("WebStorage"))).getSessionStorageForRead()) ==
                null
                  ? void 0
                  : t.getItem(f)) != null
                ? e
                : "[]",
            );
          if (Array.isArray(n)) {
            for (var o of n.slice(-200))
              if (Array.isArray(o)) {
                var a = o[0],
                  i = o[1];
                typeof a == "string" && typeof i == "number" && g.set(a, i);
              }
          }
        } catch (e) {
          r("FBLogger")("bpcs_business_reauth_support").warn(
            "Business reauth support answer dedup storage unavailable or malformed",
          );
        }
      }
    }
    function v(e, t, n) {
      n === void 0 && (n = !1);
      var o = G(e);
      if (o != null) {
        var a = o.attemptID,
          i = o.helpStartedAtMs;
        if (!(a == null || i == null)) {
          b();
          var l = o.journeyID + ":" + a;
          if (!g.has(l) && !(t == null || t < i || (C.has(e) && t < y && !n))) {
            var u = Date.now();
            for (g.set(l, u); g.size > 200; ) {
              var c = g.keys().next().value;
              if (c == null) break;
              g.delete(c);
            }
            ((s || (s = r("WebStorage"))).setItemGuarded(
              s.getSessionStorage(),
              f,
              JSON.stringify(Array.from(g.entries())),
            ),
              U(o, "ai_reply_started"));
          }
        }
      }
    }
    var S = 1440 * 60 * 1e3,
      R = 20,
      L = new Map(),
      E = new Map(),
      k = new Map(),
      I = new Set(),
      T = new Set(),
      D = 0;
    function x(e) {
      return (
        T.add(e),
        function () {
          T.delete(e);
        }
      );
    }
    function $() {
      return D;
    }
    function P() {
      D += 1;
      for (var e of T) e();
    }
    function N(e) {
      r("FBLogger")("bpcs_business_reauth_support")
        .catching(r("getErrorSafe")(e))
        .warn("Business reauth support telemetry could not be recorded");
    }
    function M() {
      return r("justknobx")._("7265");
    }
    function w(e) {
      var t,
        n = Date.now() - ((t = e.helpStartedAtMs) != null ? t : e.startedAtMs);
      return e.actorID === r("CurrentUser").getID() && n >= 0 && n < S;
    }
    function A() {
      for (var e of E) {
        var t = e[0],
          n = e[1];
        w(n) || E.delete(t);
      }
      for (var r of k) {
        var o = r[0],
          a = r[1];
        w(a) || k.delete(o);
      }
      for (; E.size > R * 10; ) {
        var i = E.keys().next().value;
        if (i == null) break;
        E.delete(i);
      }
      for (; k.size > R * 10; ) {
        var l = k.keys().next().value;
        if (l == null) break;
        k.delete(l);
      }
      for (; I.size > R * 100; ) {
        var s = I.values().next().value;
        if (s == null) break;
        I.delete(s);
      }
    }
    function F(t) {
      if (t == null || !r("isValidID")(t)) return null;
      var n = (e || (e = o("I64"))).of_string_opt(t);
      return n != null &&
        (e || (e = o("I64"))).compare(n, (e || (e = o("I64"))).zero) > 0 &&
        (e || (e = o("I64"))).to_string(n) === t
        ? t
        : null;
    }
    function O() {
      if (!p) {
        ((p = !0), W());
        try {
          var e,
            t,
            n,
            o,
            a = JSON.parse(
              (e =
                (t = (s || (s = r("WebStorage"))).getSessionStorageForRead()) ==
                null
                  ? void 0
                  : t.getItem(d)) != null
                ? e
                : "[]",
            );
          if (Array.isArray(a)) {
            for (var i of a.slice(-R * 10))
              if (!(i == null || typeof i != "object")) {
                var l = i.actorID,
                  u = i.attemptID,
                  c = i.businessID,
                  f = i.conversationID,
                  g = i.helpStartedAtMs,
                  h = i.journeyID,
                  y = i.methodCount,
                  b = i.screenType,
                  v = i.startedAtMs;
                if (
                  !(
                    typeof l != "string" ||
                    typeof h != "string" ||
                    typeof v != "number" ||
                    !Number.isFinite(v) ||
                    typeof y != "number" ||
                    (b !== "full_page" && b !== "settings_dialog") ||
                    typeof f != "string"
                  )
                ) {
                  var S = {
                    actorID: l,
                    attemptID: typeof u == "string" ? u : null,
                    businessID: typeof c == "string" ? c : null,
                    conversationID: f,
                    helpStartedAtMs: typeof g == "number" ? g : null,
                    journeyID: h,
                    methodCount: y,
                    screenType: b,
                    startedAtMs: v,
                  };
                  w(S) && (E.set(f, S), C.add(f));
                }
              }
          }
          var L = JSON.parse(
            (n =
              (o = (s || (s = r("WebStorage"))).getSessionStorageForRead()) ==
              null
                ? void 0
                : o.getItem(m)) != null
              ? n
              : "[]",
          );
          if (Array.isArray(L))
            for (var k of L.slice(-R * 2)) typeof k == "string" && _.add(k);
        } catch (e) {
          r("FBLogger")("bpcs_business_reauth_support").warn(
            "Business reauth support correlation storage unavailable or malformed",
          );
        }
      }
    }
    function B(e) {
      (L.set(e.journeyID, e),
        e.conversationID != null && E.set(e.conversationID, e));
      for (var t of L) {
        var n = t[0],
          o = t[1];
        w(o) || L.delete(n);
      }
      for (; L.size > R; ) {
        var a = L.keys().next().value;
        if (a == null) break;
        L.delete(a);
      }
      A();
      var i = (s || (s = r("WebStorage"))).setItemGuarded(
        s.getSessionStorage(),
        c,
        JSON.stringify(Array.from(L.values())),
      );
      i != null &&
        (s || (s = r("WebStorage"))).getSessionStorage() != null &&
        N(i);
    }
    function W() {
      try {
        var e,
          t,
          n = JSON.parse(
            (e =
              (t = (s || (s = r("WebStorage"))).getSessionStorageForRead()) ==
              null
                ? void 0
                : t.getItem(c)) != null
              ? e
              : "[]",
          );
        if (!Array.isArray(n)) return;
        for (var o of n.slice(-R))
          if (!(o == null || typeof o != "object")) {
            var a = o.actorID,
              i = o.journeyID,
              l = o.startedAtMs,
              u = o.methodCount,
              d = o.screenType,
              m = o.attemptID,
              p = o.businessID,
              _ = o.conversationID,
              f = o.helpStartedAtMs;
            if (
              !(
                typeof a != "string" ||
                typeof i != "string" ||
                typeof l != "number" ||
                !Number.isFinite(l) ||
                typeof u != "number" ||
                (d !== "full_page" && d !== "settings_dialog")
              )
            ) {
              var g = {
                actorID: a,
                attemptID: typeof m == "string" ? m : null,
                businessID: typeof p == "string" ? p : null,
                conversationID: typeof _ == "string" ? _ : null,
                helpStartedAtMs:
                  typeof f == "number" && Number.isFinite(f) ? f : null,
                journeyID: i,
                methodCount: u,
                screenType: d,
                startedAtMs: l,
              };
              if (w(g)) {
                L.set(g.journeyID, g);
                var h = g.conversationID;
                h != null && (E.has(h) || C.add(h), E.set(h, g));
              }
            }
          }
      } catch (e) {
        r("FBLogger")("bpcs_business_reauth_support").warn(
          "Business reauth support journey storage unavailable or malformed",
        );
      }
    }
    function q(e, t, n, o) {
      (o === void 0 && (o = null), O());
      var a = null;
      if (o != null && w(o) && (o.businessID == null || o.businessID === e))
        a = o;
      else if (e != null) {
        var i;
        a =
          (i = Array.from(L.values()).find(function (t) {
            return w(t) && t.businessID === e;
          })) != null
            ? i
            : null;
      }
      var l =
        a != null
          ? babelHelpers.extends({}, a, {
              businessID: e,
              methodCount: n,
              screenType: t,
            })
          : {
              actorID: r("CurrentUser").getID(),
              attemptID: null,
              businessID: e,
              conversationID: null,
              helpStartedAtMs: null,
              journeyID: r("uuidv4")(),
              methodCount: n,
              screenType: t,
              startedAtMs: Date.now(),
            };
      return (B(l), l);
    }
    function U(e, t, n) {
      var o, a;
      if (!(!M() || !w(e))) {
        var i = e,
          l = (o = n == null ? void 0 : n.attempt_id) != null ? o : i.attemptID,
          c =
            i.journeyID +
            ":" +
            t +
            ":" +
            (l != null ? l : "") +
            ":" +
            ((a = n == null ? void 0 : n.handover_id) != null ? a : ""),
          d =
            t === "chat_launch_succeeded" ||
            t === "chat_launch_failed" ||
            t === "chat_initiated" ||
            t === "chat_ready" ||
            t === "ai_reply_started";
        if (!(d && I.has(c))) {
          d && I.add(c);
          try {
            var p, f;
            if (t === "screen_shown" || t === "help_shown") {
              O();
              var g = e.journeyID + ":" + t;
              if (_.has(g)) return;
              for (_.add(g); _.size > R * 2; ) {
                var h = _.values().next().value;
                if (h == null) break;
                _.delete(h);
              }
              (s || (s = r("WebStorage"))).setItemGuarded(
                s.getSessionStorage(),
                m,
                JSON.stringify(Array.from(_)),
              );
            }
            var y = {
              attempt_id: l,
              business_id: F(i.businessID),
              conversation_id: i.conversationID,
              event_id: r("uuidv4")(),
              event_name: t,
              event_time_ms: String(Date.now()),
              handover_id:
                (p = n == null ? void 0 : n.handover_id) != null ? p : null,
              journey_id: i.journeyID,
              method_count: String(i.methodCount),
              result: (f = n == null ? void 0 : n.result) != null ? f : null,
              screen_type: i.screenType,
            };
            u.onReadyImmediately(function (e) {
              try {
                e.log(function () {
                  return y;
                });
              } catch (e) {
                (I.delete(c), N(e));
              }
            });
          } catch (e) {
            (I.delete(c), N(e));
          }
        }
      }
    }
    function V(e) {
      var t,
        n,
        o = w(e)
          ? (t = L.get(e.journeyID)) != null
            ? t
            : e
          : q(e.businessID, e.screenType, e.methodCount),
        a = babelHelpers.extends({}, o, {
          attemptID: r("uuidv4")(),
          conversationID: null,
          helpStartedAtMs: (n = o.helpStartedAtMs) != null ? n : Date.now(),
        });
      return (B(a), P(), U(a, "help_clicked"), a);
    }
    function H(e, t) {
      O();
      var n = babelHelpers.extends({}, e, { conversationID: t });
      (C.delete(t), E.set(t, n), U(n, "chat_initiated"));
      var o = L.get(e.journeyID);
      ((o == null || o.attemptID === e.attemptID) && B(n),
        A(),
        (s || (s = r("WebStorage"))).setItemGuarded(
          s.getSessionStorage(),
          d,
          JSON.stringify(Array.from(E.values())),
        ),
        P());
    }
    function G(e) {
      O();
      var t = E.get(e);
      return t != null && w(t) && M() ? t : null;
    }
    function z(e, t) {
      (k.set(t, e), A(), P());
    }
    function j(e) {
      var t = k.get(e);
      return t != null && w(t) && M() ? t : null;
    }
    function K(e) {
      L.delete(e.journeyID);
      for (var t of E) {
        var n = t[0],
          o = t[1];
        o.journeyID === e.journeyID && E.delete(n);
      }
      for (var a of k) {
        var i = a[0],
          l = a[1];
        l.journeyID === e.journeyID && k.delete(i);
      }
      (P(),
        (s || (s = r("WebStorage"))).setItemGuarded(
          s.getSessionStorage(),
          d,
          JSON.stringify(Array.from(E.values())),
        ),
        s.setItemGuarded(
          s.getSessionStorage(),
          c,
          JSON.stringify(Array.from(L.values())),
        ));
    }
    function Q(e) {
      return (e == null ? void 0 : e.businessID) != null
        ? {
            reauth_support_business_id: e.businessID,
            reauth_support_journey_id: e.journeyID,
          }
        : {};
    }
    ((l.logBusinessReauthFirstAnswer = v),
      (l.subscribeBusinessReauthSupportCorrelations = x),
      (l.getBusinessReauthSupportCorrelationVersion = $),
      (l.getOrCreateBusinessReauthSupportJourney = q),
      (l.logBusinessReauthSupportEvent = U),
      (l.beginBusinessReauthSupportAttempt = V),
      (l.associateBusinessReauthSupportConversation = H),
      (l.getBusinessReauthSupportJourneyForConversation = G),
      (l.associateBusinessReauthSupportThread = z),
      (l.getBusinessReauthSupportJourneyForThread = j),
      (l.finishBusinessReauthSupportJourney = K),
      (l.getBusinessReauthSupportRequestParams = Q));
  },
  98,
);
