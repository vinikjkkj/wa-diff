__d(
  "MAIBALWIFormProposalCard",
  [
    "Currency",
    "LWIFormSyncState",
    "LWIMAIBACopilotEventLog",
    "LWIMAIBAFormGateway",
    "MAIBALWIFormProposalCardView",
    "MAIBALWIFormProposalForm",
    "MAIBALWIFormProposalPress",
    "MAIBALWIFormProposalResult",
    "MAIBAMessageContext",
    "Promise",
    "getLWIDirectApplyDecision",
    "getLWIMessageFinality",
    "isMAIBALWIFormApplyEnabled",
    "isMAIBALWIFormDirectApplyEnabled",
    "isMAIBALWIFormDurationApplyEnabled",
    "parseLWIFormProposal",
    "react",
    "toLWIDecimalAmount",
    "useJSON",
    "useMAIBASendMessageFromInsideChat",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u = s || (s = o("react")),
      c = s,
      d = c.useEffect,
      m = c.useEffectEvent,
      p = c.useMemo,
      _ = c.useRef,
      f = c.useState,
      g = c.useSyncExternalStore,
      h = new Set([
        "CTA_UNAVAILABLE",
        "CUSTOM_DISABLED",
        "CUSTOM_UNAVAILABLE",
        "FIELD_NOT_PATCHABLE",
        "GOAL_NEEDS_PIXEL",
        "GOAL_UNAVAILABLE",
        "INVALID_COMMAND",
        "NEEDS_CONFIRMATION",
        "SAC_RESTRICTED",
        "STALE_FORM",
        "WRITE_GATE_OFF",
      ]),
      y = new Set([
        "CONTROL_DIRTY",
        "CONTROL_NOT_MOUNTED",
        "FORM_NOT_RESOLVED",
      ]),
      C = new Set([
        "CTA_UNAVAILABLE",
        "CUSTOM_DISABLED",
        "CUSTOM_UNAVAILABLE",
        "GOAL_NEEDS_PIXEL",
        "GOAL_UNAVAILABLE",
        "SAC_RESTRICTED",
      ]),
      b = 5e3,
      v = { mode: "cta", origin: "maiba" },
      S = { mode: "direct", origin: "advertiser" },
      R = function (t) {
        return (t == null ? void 0 : t.status) === "refused" && y.has(t.reason);
      },
      L = function (t) {
        return R(t) || (t.status === "committed_unsettled" && t.to === t.from);
      };
    function E(e, t) {
      var n = t.result.receipt;
      return n.status === "refused" && n.reason === "LOCKED"
        ? "locked"
        : e === "undo" && L(n)
          ? "retry"
          : "result";
    }
    function k(e, t, n, r) {
      var a;
      return e === "undo" &&
        ((t == null ? void 0 : t.field) === "daily_budget" ||
          (t == null ? void 0 : t.field) === "duration_days") &&
        n != null &&
        typeof n.to == "number"
        ? o("parseLWIFormProposal").toLWIUndoCommand(t, n.to)
        : e === "undo" &&
            (t == null ? void 0 : t.field) === "start_date" &&
            (n == null ? void 0 : n.field) === "start_date"
          ? o("parseLWIFormProposal").toLWIStartDateUndoCommand(t, n.to)
          : e === "undo" &&
              (t == null ? void 0 : t.field) === "goal" &&
              (n == null ? void 0 : n.field) === "goal"
            ? o("parseLWIFormProposal").toLWIGoalUndoCommand(t, n.to)
            : e === "undo" &&
                (t == null ? void 0 : t.field) === "cta" &&
                (n == null ? void 0 : n.field) === "cta"
              ? o("parseLWIFormProposal").toLWICTAUndoCommand(t, n.to)
              : e === "undo" &&
                  ((t == null ? void 0 : t.field) === "audience_age" ||
                    (t == null ? void 0 : t.field) === "audience_custom" ||
                    (t == null ? void 0 : t.field) === "audience_gender" ||
                    (t == null ? void 0 : t.field) === "audience_interests" ||
                    (t == null ? void 0 : t.field) === "audience_location") &&
                  ((n == null ? void 0 : n.field) === "audience_age" ||
                    (n == null ? void 0 : n.field) === "audience_custom" ||
                    (n == null ? void 0 : n.field) === "audience_gender" ||
                    (n == null ? void 0 : n.field) === "audience_interests" ||
                    (n == null ? void 0 : n.field) === "audience_location")
                ? o("parseLWIFormProposal").toLWIAudienceUndoCommand(
                    t,
                    n.to,
                    (a = n.refs) == null ? void 0 : a.fromRefs,
                  )
                : t == null
                  ? null
                  : babelHelpers.extends({}, t, { mode: r ? "direct" : "cta" });
    }
    function I(e, t) {
      return (
        (e != null && C.has(e)) ||
        ((t == null ? void 0 : t.receipt.status) === "refused" &&
          C.has(t.receipt.reason))
      );
    }
    function T(e, t) {
      var n = o("MAIBALWIFormProposalPress").getLWIFormProposalPressInFlight(e),
        r = o("MAIBALWIFormProposalPress").getLWIFormProposalPressInFlight(t);
      return n != null
        ? { action: "apply", press: n }
        : r != null
          ? { action: "undo", press: r }
          : null;
    }
    function D(e, t) {
      var n;
      return (n = t.find(function (t) {
        var n = {
          apply: o("parseLWIFormProposal").getLWIFormProposalAttempt(
            e,
            t,
            "apply",
          ),
          undo: o("parseLWIFormProposal").getLWIFormProposalAttempt(
            e,
            t,
            "undo",
          ),
        };
        return (
          o("MAIBALWIFormProposalForm").getStoredLWIFormProposalResult(
            t.form,
            t.field,
            n,
          ) != null ||
          T(n.apply, n.undo) != null ||
          o("MAIBALWIFormProposalForm").wasLWIFormProposalHandled(n)
        );
      })) != null
        ? n
        : null;
    }
    function x(e) {
      return (e == null ? void 0 : e.status) === "applied" ||
        (e == null ? void 0 : e.status) === "adjusted" ||
        ((e == null ? void 0 : e.status) === "committed_unsettled" &&
          e.to !== e.from)
        ? e
        : null;
    }
    function $(e, t, n) {
      var o, a;
      if (e.isDirectAllowed !== !0) return !1;
      if (e.mode === "direct") return !0;
      var i =
        (o = n == null || (a = n.amounts) == null ? void 0 : a.amountsMinor) !=
        null
          ? o
          : [];
      return (
        i.length === 1 &&
        i[0] === t.toMinor &&
        r("isMAIBALWIFormDirectApplyEnabled")()
      );
    }
    function P(e, t, n, a, i, l, s, u) {
      var c = e.currency,
        d = e.field,
        m = e.form,
        p = o("LWIMAIBAFormGateway").resolveLWIMAIBAFormGateway(),
        _ = p.status === "OK" ? p.gateway : null,
        f = _ == null || _.readField == null ? void 0 : _.readField(d),
        g = typeof f == "number" ? f : null,
        h =
          _ == null || _.previewCommand == null
            ? void 0
            : _.previewCommand(d, i);
      return {
        input: {
          currency: c,
          field: d,
          form: m,
          fromMinor: i.fromMinor,
          isApplyGateOn: r("isMAIBALWIFormApplyEnabled")(),
          isBusy: o("LWIMAIBAFormGateway").isAnyLWIMAIBAFormApplying(),
          isControlBusy:
            (h == null ? void 0 : h.status) === "refused" &&
            h.reason === "CONTROL_DIRTY",
          isDirectGateOn: r("isMAIBALWIFormDirectApplyEnabled")(),
          isDocumentVisible: document.visibilityState !== "hidden",
          isFinal: s,
          isFirstDirect: u,
          isHandled:
            o("MAIBALWIFormProposalForm").wasLWIFormProposalHandled(t) ||
            o("MAIBALWIFormProposalForm").wasLWIFormProposalDismissed(t, n),
          isNewest: a,
          liveForm: _ == null ? void 0 : _.form,
          liveMinor: g,
          mode: "direct",
          now: Date.now(),
          previewMinor:
            (h == null ? void 0 : h.status) === "ok" &&
            h.field === "daily_budget"
              ? h.to
              : null,
          submitStatus:
            _ == null || _.getSubmitStatus == null
              ? void 0
              : _.getSubmitStatus(),
          toMinor: i.toMinor,
          typed: l,
        },
        liveMinor: g,
      };
    }
    function N(e, t, n, a, i, l, s, u) {
      var c =
        e.kind === "direct" &&
        !o("MAIBALWIFormProposalForm").claimLWIDirectProposal(t, l)
          ? { kind: "card", reason: "MULTIPLE_DIRECT" }
          : e;
      if (
        c.kind === "direct" &&
        o("LWIFormSyncState").takeLWITypedAmounts(s, u) != null
      )
        return !0;
      var d = c.kind === "card" ? c.reason : "NO_ECHO",
        m =
          d === "STALE_VALUE" &&
          (n.mode === "cta" || n.origin === "advertiser") &&
          a != null;
      return (
        o("MAIBALWIFormProposalForm").rememberLWIDirectFallback(l, {
          from: m && a != null ? r("toLWIDecimalAmount")(a, i) : null,
          reason: d,
        }),
        !1
      );
    }
    function M(e, t, n) {
      if (e != null) {
        var r = e + o("LWIFormSyncState").LWI_TYPED_AMOUNTS_TTL_MS - Date.now(),
          a = window.setTimeout(
            function () {
              return o("MAIBALWIFormProposalForm").rememberLWIDirectFallback(
                n,
                { from: null, reason: t ? "NO_ECHO" : "ECHO_EXPIRED" },
              );
            },
            Math.max(0, t ? Math.min(r, b) : r),
          );
        return function () {
          return window.clearTimeout(a);
        };
      }
    }
    function w(t) {
      var a,
        i,
        l = t.proposal,
        s = o("MAIBAMessageContext").useMAIBAMessageContext(),
        c = s.externalConversationId,
        y = r("useMAIBASendMessageFromInsideChat")(),
        C = p(
          function () {
            return o("parseLWIFormProposal").getLWIBudgetChoices(l);
          },
          [l],
        ),
        b = f(function () {
          return C == null ? null : D(c != null ? c : "", C);
        }),
        L = b[0],
        w = b[1],
        A = o("parseLWIFormProposal").getLWIFormProposalAttempt(
          c != null ? c : "",
          l,
          "apply",
        ),
        F = g(
          o("MAIBALWIFormProposalForm").subscribeToLWIDirectFallbacks,
          function () {
            return o("MAIBALWIFormProposalForm").getLWIDirectFallback(A);
          },
        ),
        O = p(
          function () {
            return L != null
              ? L
              : (F == null ? void 0 : F.from) == null
                ? l
                : babelHelpers.extends({}, l, { from: F.from });
          },
          [L, F, l],
        ),
        B = _(!1),
        W = r("getLWIMessageFinality")(s.streamingState),
        q = s.rowIndexFromBottom === 0,
        U = (a = s.offlineThreadingId) != null ? a : "",
        V = [s.botResponseId, U].filter(Boolean),
        H = O.currency,
        G = O.field,
        z = O.form,
        j = o("Currency").getOffset(H),
        K = o("parseLWIFormProposal").toLWIFieldCommand(O, j),
        Q = o("parseLWIFormProposal").getLWIFormProposalAttempt(
          c != null ? c : "",
          O,
          "apply",
        ),
        X = o("parseLWIFormProposal").getLWIFormProposalAttempt(
          c != null ? c : "",
          O,
          "undo",
        ),
        Y = { apply: Q, undo: X },
        J = g(
          o("MAIBALWIFormProposalForm").subscribeToLWIFormProposalForm,
          function () {
            return o("MAIBALWIFormProposalForm").isLWIFormDirtySinceApply(
              z,
              Y.apply,
            );
          },
        ),
        Z = g(
          o("MAIBALWIFormProposalForm").subscribeToLWIFormProposalForm,
          function () {
            return o("MAIBALWIFormProposalForm").readLWIFormProposalForm(z, K);
          },
        ),
        ee = r("useJSON")(Z || "null"),
        te = g(
          o("MAIBALWIFormProposalForm").subscribeToLWIFormProposalForm,
          function () {
            return C == null || L != null
              ? "[]"
              : "[" +
                  C.map(function (e) {
                    return (
                      o("MAIBALWIFormProposalForm").readLWIFormProposalForm(
                        z,
                        o("parseLWIFormProposal").toLWIFieldCommand(e, j),
                      ) || "null"
                    );
                  }).join(",") +
                  "]";
          },
        ),
        ne = r("useJSON")(te),
        re = f(function () {
          return o("MAIBALWIFormProposalForm").getStoredLWIFormProposalResult(
            z,
            G,
            Y,
          );
        }),
        oe = re[0],
        ae = re[1],
        ie = f(function () {
          return (
            oe == null &&
            o("MAIBALWIFormProposalForm").wasLWIFormProposalHandled(Y)
          );
        }),
        le = ie[0],
        se = f(function () {
          return T(Q, X);
        }),
        ue = se[0],
        ce = f(function () {
          return ue != null
            ? "pressed"
            : oe == null &&
                o("MAIBALWIFormProposalForm").wasLWIFormProposalDismissed(Y, V)
              ? "dismissed"
              : null;
        }),
        de = ce[0],
        me = ce[1],
        pe = f(null),
        _e = pe[0],
        fe = pe[1],
        ge = _(!1),
        he = _(null),
        ye = (oe == null ? void 0 : oe.action) === "apply" ? oe.receipt : null,
        Ce = x(ye),
        be =
          (ee == null ? void 0 : ee.status) === "refused" && h.has(ee.reason)
            ? ee.reason
            : null,
        ve = I(be, oe),
        Se = Z !== "" && c != null && de == null && !le;
      (d(
        function () {
          if (de === "locked") {
            var e = function () {
              var e = o(
                "MAIBALWIFormProposalForm",
              ).getStoredLWIFormProposalResult(z, G, { apply: Q, undo: X });
              (e != null ||
                !o("LWIMAIBAFormGateway").isAnyLWIMAIBAFormApplying()) &&
                (ae(function (t) {
                  return e != null ? e : t;
                }),
                me(null));
            };
            return (
              e(),
              o("MAIBALWIFormProposalForm").subscribeToLWIFormProposalForm(e)
            );
          }
        },
        [Q, G, z, de, X],
      ),
        d(
          function () {
            if (ue != null) {
              var e = !0;
              return (
                ue.press.then(function (t) {
                  if (e) {
                    var n = E(ue.action, t);
                    (me(n === "locked" ? "locked" : null),
                      n === "retry"
                        ? fe(t.result)
                        : n === "result" && ae(t.result));
                  }
                }),
                function () {
                  e = !1;
                }
              );
            }
          },
          [ue],
        ));
      var Re = function (r, a, i) {
          if (
            (a === void 0 && (a = !1),
            i === void 0 && (i = O),
            !(ge.current || c == null))
          ) {
            var t = k(
                r,
                i === O ? K : o("parseLWIFormProposal").toLWIFieldCommand(i, j),
                Ce,
                a,
              ),
              l = (
                r === "apply" ? a : (oe == null ? void 0 : oe.isDirect) === !0
              )
                ? S
                : v,
              s =
                i === O
                  ? Y[r]
                  : o("parseLWIFormProposal").getLWIFormProposalAttempt(
                      c,
                      i,
                      r,
                    );
            if (((ge.current = !0), me("pressed"), fe(null), !a)) {
              var u;
              (u = he.current) == null || u.focus();
            }
            var d = o("LWIFormSyncState").holdLWIFormSyncDeltas(c),
              m =
                r === "undo" &&
                o("MAIBALWIFormProposalForm").isLWIFormDirtySinceApply(
                  z,
                  Y.apply,
                )
                  ? (e || (e = n("Promise"))).resolve({
                      isReplay: !1,
                      result: {
                        action: r,
                        isRounded: !1,
                        receipt: { reason: "FORM_DIRTY", status: "refused" },
                      },
                    })
                  : o("MAIBALWIFormProposalPress").applyLWIFormProposal(
                      z,
                      t,
                      r,
                      s,
                    );
            return m
              .then(function (e) {
                var n = e.result.receipt;
                (r === "apply" &&
                  n.status !== "refused" &&
                  o("MAIBALWIFormProposalForm").captureLWIFormApplySnapshot(
                    z,
                    s,
                  ),
                  (ge.current = !1));
                var a = E(r, e);
                if (
                  (me(a === "locked" ? "locked" : null),
                  a === "retry" ? fe(e.result) : a === "result" && ae(e.result),
                  a !== "locked" && !e.isReplay)
                ) {
                  var u = o("MAIBALWIFormProposalResult").toLWIFormSyncReceipt(
                    r,
                    s,
                    i,
                    t,
                    j,
                    n,
                    l,
                  );
                  o("LWIFormSyncState").queueLWIFormSyncReceipt(c, z, u);
                }
              })
              .finally(d);
          }
        },
        Le = m(function () {
          if (
            !(
              B.current ||
              F != null ||
              c == null ||
              K == null ||
              K.field !== "daily_budget" ||
              U === "" ||
              oe != null ||
              le ||
              ue != null ||
              !r("isMAIBALWIFormDirectApplyEnabled")()
            )
          ) {
            var e =
                s.botResponseId != null && s.botResponseId !== ""
                  ? s.botResponseId
                  : U,
              t = o("LWIFormSyncState").peekLWITypedAmounts(c, U);
            if (!$(O, K, t)) {
              o("MAIBALWIFormProposalForm").isLWIDirectProposalClaimedByAnother(
                e,
                A,
              ) &&
                o("MAIBALWIFormProposalForm").rememberLWIDirectFallback(A, {
                  from: null,
                  reason: "MULTIPLE_DIRECT",
                });
              return;
            }
            B.current = !0;
            var n = P(O, Y, V, q, K, t, W === "final", !0),
              a = n.input,
              i = n.liveMinor,
              l = o("getLWIDirectApplyDecision").getLWIDirectApplyDecision(a);
            if (N(l, e, O, i, j, A, c, U)) {
              Re("apply", !0);
              return;
            }
          }
        });
      d(
        function () {
          W !== "pending" && !s.isFromHistory && U !== "" && Le();
        },
        [W, s.isFromHistory, U],
      );
      var Ee = !1,
        ke = null;
      if (
        oe == null &&
        F == null &&
        de == null &&
        ue == null &&
        !le &&
        !s.isFromHistory &&
        c != null &&
        K != null &&
        K.field === "daily_budget" &&
        (W === "pending" || W === "final") &&
        r("isMAIBALWIFormDirectApplyEnabled")()
      ) {
        var Ie,
          Te =
            U === ""
              ? o("LWIFormSyncState").peekLatestLWITypedAmounts(c)
              : o("LWIFormSyncState").peekLWITypedAmounts(c, U),
          De =
            $(O, K, Te) &&
            o("getLWIDirectApplyDecision").getLWIDirectApplyDecision(
              P(O, Y, V, q, K, Te, !0, !0).input,
            ).kind === "direct";
        ((ke =
          De && (Ie = Te == null ? void 0 : Te.sentAt) != null ? Ie : null),
          (Ee = ke != null));
      }
      var xe = W === "final" && U === "";
      d(
        function () {
          return M(ke, xe, A);
        },
        [ke, xe, A],
      );
      var $e = function (t) {
          ge.current || c == null || (w(t), Re("apply", !1, t));
        },
        Pe =
          C == null || L != null || oe != null || de != null || le
            ? null
            : C.map(function (e, t) {
                var n = ne[t],
                  r = o("parseLWIFormProposal").toLWIFieldCommand(e, j),
                  a =
                    (n == null ? void 0 : n.status) === "refused" &&
                    h.has(n.reason);
                return {
                  onApply:
                    Se && !a && r != null
                      ? function () {
                          return $e(e);
                        }
                      : null,
                  toMinor:
                    (r == null ? void 0 : r.field) === "daily_budget"
                      ? r.toMinor
                      : null,
                };
              }),
        Ne = _(!1),
        Me =
          (!Ee && Se && (oe == null || R(oe.receipt)) && !be) ||
          ((i =
            Pe == null
              ? void 0
              : Pe.some(function (e) {
                  return e.onApply != null;
                })) != null
            ? i
            : !1);
      return (
        d(
          function () {
            if (!(!Me || Ne.current)) {
              var e = o("LWIMAIBAFormGateway").resolveLWIMAIBAFormGateway();
              e.status === "OK" &&
                ((Ne.current = !0),
                o("LWIMAIBACopilotEventLog").logLWIMAIBACopilotEvent(
                  "maiba_copilot_apply_rendered",
                  {
                    action: "render",
                    conversationID: c,
                    extra_data: { attempt: Q, field: G, form: z },
                    product: e.gateway.product,
                  },
                ));
            }
          },
          [Q, c, G, z, Me],
        ),
        u.jsx(r("MAIBALWIFormProposalCardView"), {
          choices: Pe,
          command: K,
          isDismissed: de === "dismissed",
          isDowngraded: F != null && O.mode === "direct",
          isHandledEarlier: le,
          isPending: Ee,
          isPressed: de === "pressed" || de === "locked",
          isUndoDisabled: J,
          onApply:
            !Ee && Se && (oe == null || R(oe.receipt)) && !be
              ? function () {
                  Re("apply");
                }
              : null,
          onSeeOtherOptions: function (t) {
            var e;
            (o("MAIBALWIFormProposalForm").markLWIFormProposalDismissed(Y, V),
              me("dismissed"),
              (e = he.current) == null || e.focus(),
              c != null &&
                y({
                  externalConversationId: c,
                  isSentFromOutOfChat: !1,
                  message: t,
                  originComponent: "MAIBALWIFormProposalCard",
                }));
          },
          onShow:
            (Ce != null &&
              Ce.status !== "committed_unsettled" &&
              Ce.uiAck === "offscreen") ||
            ve
              ? function () {
                  var e = o("LWIMAIBAFormGateway").resolveLWIMAIBAFormGateway();
                  e.status === "OK" &&
                    (e.gateway.revealField == null ||
                      e.gateway.revealField(O.field));
                }
              : null,
          onUndo:
            Se && Ce != null && be !== "STALE_FORM"
              ? function () {
                  Re("undo");
                }
              : null,
          preview: ee,
          proposal: O,
          refused: be,
          result: oe,
          retry: _e,
          textRef: he,
        })
      );
    }
    w.displayName = w.name + " [from " + i.id + "]";
    function A(e) {
      var t = e.attributesJson,
        n = p(
          function () {
            return o("parseLWIFormProposal").parseLWIFormProposal(t);
          },
          [t],
        );
      return n == null ||
        ((n.field === "duration_days" || n.field === "start_date") &&
          !r("isMAIBALWIFormDurationApplyEnabled")())
        ? null
        : u.jsx(w, { proposal: n }, t);
    }
    ((A.displayName = A.name + " [from " + i.id + "]"), (l.default = A));
  },
  98,
);
