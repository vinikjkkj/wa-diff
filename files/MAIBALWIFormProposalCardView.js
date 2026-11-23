__d(
  "MAIBALWIFormProposalCardView",
  [
    "fbt",
    "AdsCurrencyFormatter",
    "GeoButton.react",
    "GeoFlexbox.react",
    "GeoHStack.react",
    "GeoText.react",
    "GeoVStack.react",
    "MAIBALWIDurationFieldCopy",
    "MAIBALWIFieldCopy",
    "MAIBALWIFormProposalResult",
    "MAIBALWIStartDateFieldCopy",
    "fbs",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u = e || (e = o("react"));
    (o("MAIBALWIFieldCopy").registerLWIFieldCopy(
      "daily_budget",
      o("MAIBALWIFormProposalResult").budgetFieldCopy,
    ),
      o("MAIBALWIFieldCopy").registerLWIFieldCopy(
        "duration_days",
        o("MAIBALWIDurationFieldCopy").durationFieldCopy,
      ),
      o("MAIBALWIFieldCopy").registerLWIFieldCopy(
        "start_date",
        o("MAIBALWIStartDateFieldCopy").startDateFieldCopy,
      ),
      o("MAIBALWIFieldCopy").registerLWIFieldCopy(
        "goal",
        o("MAIBALWIFormProposalResult").goalFieldCopy,
      ),
      o("MAIBALWIFieldCopy").registerLWIFieldCopy(
        "cta",
        o("MAIBALWIFormProposalResult").ctaFieldCopy,
      ),
      o("MAIBALWIFieldCopy").registerLWIFieldCopy(
        "audience_age",
        o("MAIBALWIFormProposalResult").audienceAgeFieldCopy,
      ),
      o("MAIBALWIFieldCopy").registerLWIFieldCopy(
        "audience_custom",
        o("MAIBALWIFormProposalResult").audienceCustomFieldCopy,
      ),
      o("MAIBALWIFieldCopy").registerLWIFieldCopy(
        "audience_gender",
        o("MAIBALWIFormProposalResult").audienceGenderFieldCopy,
      ),
      o("MAIBALWIFieldCopy").registerLWIFieldCopy(
        "audience_interests",
        o("MAIBALWIFormProposalResult").audienceInterestsFieldCopy,
      ),
      o("MAIBALWIFieldCopy").registerLWIFieldCopy(
        "audience_location",
        o("MAIBALWIFormProposalResult").audienceLocationFieldCopy,
      ));
    var c = "\xA0";
    function d(e) {
      return e === "goal"
        ? s._(/*BTDS*/ "")
        : e === "cta"
          ? s._(/*BTDS*/ "")
          : e === "duration_days"
            ? s._(/*BTDS*/ "")
            : e === "start_date"
              ? s._(/*BTDS*/ "")
              : e === "audience_age"
                ? s._(/*BTDS*/ "")
                : e === "audience_custom"
                  ? s._(/*BTDS*/ "")
                  : e === "audience_gender"
                    ? s._(/*BTDS*/ "")
                    : e === "audience_interests"
                      ? s._(/*BTDS*/ "")
                      : e === "audience_location"
                        ? s._(/*BTDS*/ "")
                        : s._(/*BTDS*/ "");
    }
    function m(e) {
      return (e == null ? void 0 : e.status) === "ok" &&
        (e.field === "audience_age" ||
          e.field === "audience_custom" ||
          e.field === "audience_gender" ||
          e.field === "audience_interests" ||
          e.field === "audience_location") &&
        e.regulated != null
        ? o("MAIBALWIFormProposalResult").describeLWIAudienceRegulated(
            e.regulated,
          )
        : null;
    }
    function p(e, t, n, r) {
      var o,
        a,
        i,
        l,
        s =
          (e == null ? void 0 : e.status) === "ok" &&
          e.field === "daily_budget" &&
          e.to !== e.requested
            ? r(e.to)
            : null,
        u = null;
      (((e == null ? void 0 : e.status) === "ok" &&
        e.field === (t == null ? void 0 : t.field) &&
        e.field !== "duration_days" &&
        e.field !== "start_date") ||
        ((e == null ? void 0 : e.status) === "refused" && e.display != null)) &&
        (u = e.display);
      var c =
          (t == null ? void 0 : t.field) === "daily_budget"
            ? r(t.fromMinor)
            : (o = (a = u) == null ? void 0 : a.from) != null
              ? o
              : n.from,
        d =
          (t == null ? void 0 : t.field) === "daily_budget"
            ? r(t.toMinor)
            : (i = (l = u) == null ? void 0 : l.requested) != null
              ? i
              : n.to;
      return { from: c, titles: u, to: d, willSet: s };
    }
    function _(e, t, n, r, a, i) {
      return e
        ? s._(/*BTDS*/ "")
        : t
          ? s._(/*BTDS*/ "")
          : n
            ? s._(/*BTDS*/ "")
            : a != null
              ? o("MAIBALWIFieldCopy").describeLWIFieldResult(r, a, i)
              : null;
    }
    function f(e, t, n, r, a, i) {
      var l;
      return t != null
        ? o("MAIBALWIFieldCopy").describeLWIFieldRefusal(e, t, "preview")
        : n
          ? s._(/*BTDS*/ "", [s._param("amount", r != null ? r : a)])
          : r != null
            ? s._(/*BTDS*/ "", [s._param("amount", r)])
            : (l = i == null ? void 0 : i.note) != null
              ? l
              : null;
    }
    function g(e) {
      var t,
        n,
        a = e.choices,
        i = a === void 0 ? null : a,
        l = e.command,
        g = e.isDismissed,
        h = e.isDowngraded,
        y = h === void 0 ? !1 : h,
        C = e.isHandledEarlier,
        b = e.isPending,
        v = b === void 0 ? !1 : b,
        S = e.isPressed,
        R = e.isUndoDisabled,
        L = R === void 0 ? !1 : R,
        E = e.onApply,
        k = e.onSeeOtherOptions,
        I = e.onShow,
        T = e.onUndo,
        D = e.preview,
        x = e.proposal,
        $ = e.refused,
        P = e.result,
        N = e.retry,
        M = e.textRef,
        w = function (t) {
          return o("AdsCurrencyFormatter").formatCurrencyFullFormat(
            x.currency,
            t,
            !1,
            !0,
          );
        },
        A =
          x.field === "duration_days"
            ? o("MAIBALWIDurationFieldCopy").getLWIDurationCardCopy(
                x,
                D,
                S ? null : P,
              )
            : x.field === "start_date"
              ? o("MAIBALWIStartDateFieldCopy").getLWIStartDateCardCopy(x, D)
              : null,
        F = p(D, l, x, w),
        O = F.from,
        B = F.titles,
        W = F.to,
        q = F.willSet,
        U = d(x.field),
        V = m(D),
        H =
          T != null && P != null
            ? o("MAIBALWIFieldCopy").describeLWIFieldUndoDisclosure(
                x.field,
                P.receipt,
              )
            : null,
        G = _(g, S, C, x.field, P, w),
        z = f(x.field, $, y, q, W, A),
        j = (x.field !== "goal" && x.field !== "cta") || $ == null || B != null,
        K = u.jsx(r("GeoButton.react"), {
          ariaLabel: s._(/*BTDS*/ "", [s._param("field", U)]),
          label: s._(/*BTDS*/ ""),
          loggingName: "MAIBALWIFormProposalSeeOtherOptions",
          onClick: function () {
            return k(
              r("fbs")
                ._(/*BTDS*/ "", [r("fbs")._param("field", String(U))])
                .toString(),
            );
          },
          variant: "default",
        });
      return u.jsxs(r("GeoVStack.react"), {
        context: "component",
        relation: "unrelated",
        children: [
          u.jsx("div", {
            ref: M,
            role: "status",
            tabIndex: -1,
            children: v
              ? u.jsx(r("GeoText.react"), { children: c })
              : G != null
                ? u.jsxs(u.Fragment, {
                    children: [
                      u.jsx(r("GeoText.react"), { children: G }),
                      (A == null ? void 0 : A.resultNote) == null
                        ? null
                        : u.jsxs(u.Fragment, {
                            children: [
                              " ",
                              u.jsx(r("GeoText.react"), {
                                children: A.resultNote,
                              }),
                            ],
                          }),
                      N == null
                        ? null
                        : u.jsxs(u.Fragment, {
                            children: [
                              " ",
                              u.jsx(r("GeoText.react"), {
                                children: o(
                                  "MAIBALWIFieldCopy",
                                ).describeLWIFieldResult(x.field, N, w),
                              }),
                            ],
                          }),
                      H == null
                        ? null
                        : u.jsxs(u.Fragment, {
                            children: [
                              " ",
                              u.jsx(r("GeoText.react"), { children: H }),
                            ],
                          }),
                    ],
                  })
                : i != null
                  ? u.jsxs(u.Fragment, {
                      children: [
                        u.jsx(r("GeoText.react"), {
                          children: o(
                            "MAIBALWIFormProposalResult",
                          ).describeLWIBudgetChoice(O),
                        }),
                        $ == null
                          ? null
                          : u.jsxs(u.Fragment, {
                              children: [
                                " ",
                                u.jsx(r("GeoText.react"), {
                                  children: o(
                                    "MAIBALWIFieldCopy",
                                  ).describeLWIFieldRefusal(
                                    x.field,
                                    $,
                                    "preview",
                                  ),
                                }),
                              ],
                            }),
                      ],
                    })
                  : u.jsxs(u.Fragment, {
                      children: [
                        j
                          ? u.jsx(r("GeoText.react"), {
                              children: o(
                                "MAIBALWIFieldCopy",
                              ).describeLWIFieldProposal(x.field, O, W),
                            })
                          : null,
                        z == null
                          ? null
                          : u.jsxs(u.Fragment, {
                              children: [
                                " ",
                                u.jsx(r("GeoText.react"), { children: z }),
                              ],
                            }),
                        A == null
                          ? void 0
                          : A.concerns.map(function (e, t) {
                              return u.jsxs(
                                u.Fragment,
                                {
                                  children: [
                                    " ",
                                    u.jsx(r("GeoText.react"), { children: e }),
                                  ],
                                },
                                t,
                              );
                            }),
                        V == null
                          ? null
                          : u.jsxs(u.Fragment, {
                              children: [
                                " ",
                                u.jsx(r("GeoText.react"), { children: V }),
                              ],
                            }),
                      ],
                    }),
          }),
          !v && i != null && G == null
            ? u.jsxs(r("GeoFlexbox.react"), {
                direction: "row",
                gap: 8,
                wrap: "wrap",
                children: [
                  i.map(function (e, t) {
                    var n = e.onApply,
                      o = e.toMinor;
                    if (n == null || o == null) return null;
                    var a = w(o);
                    return u.jsx(
                      r("GeoButton.react"),
                      {
                        ariaLabel: s._(/*BTDS*/ "", [
                          s._param("field", U),
                          s._param("amount", a),
                        ]),
                        label: s._(/*BTDS*/ "", [s._param("amount", a)]),
                        loggingName: "MAIBALWIFormProposalApplyChoice",
                        onClick: n,
                        variant: t === 0 ? "primary" : "default",
                      },
                      t,
                    );
                  }),
                  i.some(function (e) {
                    return e.onApply != null;
                  })
                    ? K
                    : null,
                ],
              })
            : !v && (E != null || T != null || I != null)
              ? u.jsxs(r("GeoHStack.react"), {
                  context: "container",
                  relation: "related",
                  children: [
                    E != null
                      ? u.jsxs(u.Fragment, {
                          children: [
                            u.jsx(r("GeoButton.react"), {
                              ariaLabel:
                                (t = A == null ? void 0 : A.apply) != null
                                  ? t
                                  : s._(/*BTDS*/ "", [
                                      s._param("field", U),
                                      s._param("amount", q != null ? q : W),
                                    ]),
                              label: s._(/*BTDS*/ ""),
                              loggingName: "MAIBALWIFormProposalApply",
                              onClick: E,
                              variant: "primary",
                            }),
                            K,
                          ],
                        })
                      : null,
                    T != null
                      ? u.jsx(r("GeoButton.react"), {
                          ariaLabel:
                            (n = A == null ? void 0 : A.undo) != null
                              ? n
                              : s._(/*BTDS*/ "", [
                                  s._param("field", U),
                                  s._param("amount", O),
                                ]),
                          isDisabled: L,
                          label: s._(/*BTDS*/ ""),
                          loggingName: "MAIBALWIFormProposalUndo",
                          onClick: T,
                          variant: "default",
                        })
                      : null,
                    I != null
                      ? u.jsx(r("GeoButton.react"), {
                          ariaLabel: s._(/*BTDS*/ "", [s._param("field", U)]),
                          label: s._(/*BTDS*/ ""),
                          loggingName: "MAIBALWIFormProposalShow",
                          onClick: I,
                          variant: "default",
                        })
                      : null,
                  ],
                })
              : null,
        ],
      });
    }
    ((g.displayName = g.name + " [from " + i.id + "]"), (l.default = g));
  },
  226,
);
