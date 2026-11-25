__d(
  "createMAIBAPromptPresentationReliability",
  ["MAIBAPromptReliabilityCounters"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = 128,
      s = 256;
    function u(t) {
      if (!Array.isArray(t) || t.length > e) return null;
      var n = new Set();
      for (var r of t) {
        if (typeof r != "string" || r.length === 0 || r.length > s) return null;
        n.add(r);
      }
      return n;
    }
    function c(e, t, n) {
      var r = e.lbdCount,
        o = e.signalCount,
        a = e.staticCount,
        i = e.unknownCount,
        l = r + o,
        s = l + a + i;
      (n(s > 0 ? "presentations_rendered" : "presentations_empty_observed"),
        l > 0
          ? (n("presentations_support_rendered"),
            t && n("presentations_recovered_after_blocker"))
          : a > 0 && i === 0 && n("presentations_static_only_observed"),
        i > 0 && n("presentations_unknown_observed"));
    }
    function d(e, t, n) {
      return e ? "valid_empty" : t ? "failed" : n ? "mismatch" : "incomplete";
    }
    function m(e, t) {
      var n = u(e.renderedKeys),
        r = n == null ? "unobserved" : e.coverage,
        o = n != null ? n : new Set(),
        a = e.capped === !0,
        i = e.displayLimit,
        l = typeof i == "number" && Number.isSafeInteger(i) && i > 0 ? i : null;
      return {
        capped: a,
        currentBlocker: e.blockerResolved === !0 ? !1 : t,
        displayLimit: l,
        renderCoverage: r,
        rendered: o,
      };
    }
    function p(e, t, n) {
      var r = new Set(),
        a = o(
          "MAIBAPromptReliabilityCounters",
        ).getMAIBAPromptReliabilitySurface(e),
        i = !1,
        l = function (n) {
          a == null ||
            r.has(n) ||
            (r.add(n),
            o(
              "MAIBAPromptReliabilityCounters",
            ).bumpMAIBAPromptReliabilityCounter(a, t, n));
        },
        s = function () {
          try {
            l("presentations_started");
          } catch (e) {}
        },
        p = !1,
        _ = !1,
        f = 0,
        g = !1,
        h = !1,
        y = -1,
        C = -1,
        b = "pending",
        v = null,
        S = "pending",
        R = "not_committed",
        L = null,
        E = new Set(),
        k = !1,
        I = null,
        T = function () {
          ((g = !0), (h = !0), (y = ++f));
        },
        D = function (t) {
          try {
            C = ++f;
            var e = m(t, h);
            ((R = e.renderCoverage),
              (E = e.rendered),
              (k = e.capped),
              (I = e.displayLimit),
              (h = e.currentBlocker));
          } catch (e) {
            ((R = "unobserved"), (E = new Set()), (I = null));
          }
        },
        x = function () {
          var e,
            t,
            n = (e = (t = L) == null ? void 0 : t.size) != null ? e : 0,
            r = b === "success" && S === "complete" && L != null,
            o = R === "complete" || R === "not_committed",
            a = Array.from(E).every(function (e) {
              var t;
              return ((t = L) == null ? void 0 : t.has(e)) === !0;
            }),
            i = k && I != null && R === "complete" && E.size === Math.min(n, I),
            l = Array.from(L != null ? L : []).every(function (e) {
              return E.has(e);
            }),
            s = r && o && a && (i || l);
          if (s && n > 0 && !h)
            return g && C > y ? "recovered" : l ? "correct" : "capped";
          var u = r && R === "complete" && n === 0 && E.size === 0 && !h,
            c = h || b === "failure" || (g && !s),
            m = r && o && (n > 0 || E.size > 0);
          return d(u, c, m);
        },
        $ = function (r) {
          try {
            var e, i;
            if (p || n == null || a == null) return null;
            p = !0;
            var l = x(),
              s = R === "complete" || R === "not_committed",
              u = {
                authority: v,
                capped: k,
                closeReason: r,
                expectedCount:
                  S === "complete" &&
                  (e = (i = L) == null ? void 0 : i.size) != null
                    ? e
                    : null,
                hadBlocker: g,
                outcome: l,
                renderCoverage: R,
                renderedCount: s ? E.size : null,
                sourceCoverage: S,
                terminal: b,
              };
            return (
              (L = null),
              (E = new Set()),
              o("MAIBAPromptReliabilityCounters").bumpMAIBAPromptAttemptOutcome(
                a,
                t,
                l,
                {
                  arm: typeof n.arm == "function" ? n.arm() : n.arm,
                  entrypoint: n.entrypoint,
                },
              ),
              u
            );
          } catch (e) {
            return null;
          }
        },
        P = function () {
          try {
            if (p || n == null) return;
            var e = x();
            (e === "correct" ||
              e === "capped" ||
              e === "valid_empty" ||
              e === "recovered") &&
              $("settled");
          } catch (e) {}
        };
      return {
        onStart: s,
        onRender: function (t, n) {
          if (!_) {
            try {
              (s(), c(t, i, l));
            } catch (e) {}
            n != null && !p && (D(n), P());
          }
        },
        onBlocked: function (t) {
          if (!_) {
            ((i = !0), T());
            try {
              (s(),
                l(
                  t === "owner_error"
                    ? "presentations_owner_error"
                    : t === "source_error"
                      ? "presentations_source_error"
                      : t === "render_error"
                        ? "presentations_render_error"
                        : t === "timeout"
                          ? "presentations_timed_out"
                          : (function () {
                              throw Error(
                                "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                                  t,
                              );
                            })(),
                ));
            } catch (e) {}
          }
        },
        onResult: function (t) {
          try {
            if (p || _ || t.selectedAuthority !== !0) return;
            (f++, (b = t.terminal), (v = t.authority), b === "failure" && T());
            var e = u(t.expectedKeys);
            ((S = e == null ? "unobserved" : t.coverage), (L = e));
          } catch (e) {
            ((S = "unobserved"), (L = null));
          }
        },
        onEnd: function (t) {
          try {
            return _ ||
              n == null ||
              a == null ||
              t.kind === "effect_cleanup" ||
              (t.kind === "visibility_hidden" && x() === "incomplete")
              ? null
              : (t.kind === "retire" && (_ = !0), $(t.reason));
          } catch (e) {
            return null;
          }
        },
      };
    }
    l.createMAIBAPromptPresentationReliability = p;
  },
  98,
);
