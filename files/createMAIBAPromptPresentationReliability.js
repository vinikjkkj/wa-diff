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
    function d(e, t) {
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
    function m(e, t, n) {
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
        m = !1,
        p = !1,
        _ = 0,
        f = !1,
        g = !1,
        h = -1,
        y = -1,
        C = "pending",
        b = null,
        v = "pending",
        S = "not_committed",
        R = null,
        L = new Set(),
        E = !1,
        k = null,
        I = function () {
          ((f = !0), (g = !0), (h = ++_));
        },
        T = function (t) {
          try {
            y = ++_;
            var e = d(t, g);
            ((S = e.renderCoverage),
              (L = e.rendered),
              (E = e.capped),
              (k = e.displayLimit),
              (g = e.currentBlocker));
          } catch (e) {
            ((S = "unobserved"), (L = new Set()), (k = null));
          }
        },
        D = function () {
          var e,
            t,
            n = (e = (t = R) == null ? void 0 : t.size) != null ? e : 0,
            r = C === "success" && v === "complete" && R != null,
            o = S === "complete" || S === "not_committed",
            a = Array.from(L).every(function (e) {
              var t;
              return ((t = R) == null ? void 0 : t.has(e)) === !0;
            }),
            i = E && k != null && S === "complete" && L.size === Math.min(n, k),
            l = Array.from(R != null ? R : []).every(function (e) {
              return L.has(e);
            }),
            s = r && o && a && (i || l);
          return s && n > 0 && !g
            ? f && y > h
              ? "recovered"
              : l
                ? "correct"
                : "capped"
            : r && S === "complete" && n === 0 && L.size === 0 && !g
              ? "valid_empty"
              : g || C === "failure" || (f && !s)
                ? "failed"
                : r && o && (n > 0 || L.size > 0)
                  ? "mismatch"
                  : "incomplete";
        },
        x = function (r) {
          try {
            var e, i;
            if (m || n == null || a == null) return null;
            m = !0;
            var l = D(),
              s = S === "complete" || S === "not_committed",
              u = {
                authority: b,
                capped: E,
                closeReason: r,
                expectedCount:
                  v === "complete" &&
                  (e = (i = R) == null ? void 0 : i.size) != null
                    ? e
                    : null,
                hadBlocker: f,
                outcome: l,
                renderCoverage: S,
                renderedCount: s ? L.size : null,
                sourceCoverage: v,
                terminal: C,
              };
            return (
              (R = null),
              (L = new Set()),
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
        $ = function () {
          try {
            if (m || n == null) return;
            var e = D();
            (e === "correct" ||
              e === "capped" ||
              e === "valid_empty" ||
              e === "recovered") &&
              x("settled");
          } catch (e) {}
        };
      return {
        onStart: s,
        onRender: function (t, n) {
          if (!p) {
            try {
              (s(), c(t, i, l));
            } catch (e) {}
            n != null && !m && (T(n), $());
          }
        },
        onBlocked: function (t) {
          if (!p) {
            ((i = !0), I());
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
            if (m || p || t.selectedAuthority !== !0) return;
            (_++, (C = t.terminal), (b = t.authority), C === "failure" && I());
            var e = u(t.expectedKeys);
            ((v = e == null ? "unobserved" : t.coverage), (R = e));
          } catch (e) {
            ((v = "unobserved"), (R = null));
          }
        },
        onEnd: function (t) {
          try {
            return p ||
              n == null ||
              a == null ||
              t.kind === "effect_cleanup" ||
              (t.kind === "visibility_hidden" && D() === "incomplete")
              ? null
              : (t.kind === "retire" && (p = !0), x(t.reason));
          } catch (e) {
            return null;
          }
        },
      };
    }
    l.createMAIBAPromptPresentationReliability = m;
  },
  98,
);
