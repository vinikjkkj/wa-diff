__d(
  "WAWebReadHatchSubscription",
  [
    "WALogger",
    "WAWebHatchJsonReaders",
    "WAWebHatchLogging",
    "WAWebHatchSubscriptionGetJob",
    "WAWebNetworkStatus",
    "WAWebStreamGetters",
    "WAWebStreamModel",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = 100,
      c = new Set([
        "CANCEL",
        "CLAIM_META_HOME_LINK",
        "DISMISS",
        "MANAGE_BILLING",
        "REACTIVATE",
        "REFRESH",
        "REVOKE_AND_REFUND",
      ]),
      d = new Map([
        ["NOT_ABRA_LINKED", "error_code_not_abra_linked"],
        ["SESSION_INVALID", "error_code_session_invalid"],
        ["UPSTREAM_UNAVAILABLE", "error_code_upstream_unavailable"],
      ]);
    function m(e) {
      return p.apply(this, arguments);
    }
    function p() {
      return (
        (p = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.source,
            n;
          try {
            n = yield o(
              "WAWebHatchSubscriptionGetJob",
            ).commitHatchSubscriptionGet();
          } catch (e) {
            return _("request", { failureReason: f(), source: t });
          }
          if (n == null || n.success == null)
            return _("empty", { failureReason: "empty_response", source: t });
          if (n.success !== !0 || n.error_code != null) {
            var r = d.get(n.error_code);
            return _(
              "error_code:" + (r != null ? String(n.error_code) : "other"),
              { failureReason: r != null ? r : "error_code_other", source: t },
            );
          }
          var a;
          try {
            a = h(n.subscription);
          } catch (e) {
            return _("malformed", { failureReason: "malformed", source: t });
          }
          return a == null
            ? _("malformed", { failureReason: "malformed", source: t })
            : (o("WAWebHatchLogging").logHatchSubscriptionRead({
                isTopUpUnreadable: a.isTopUpUnreadable,
                outcome: "success",
                source: t,
              }),
              { kind: "ok", subscription: a.subscription });
        })),
        p.apply(this, arguments)
      );
    }
    function _(t, n) {
      try {
        o("WALogger")
          .WARN(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "hatch-subscription: read failed reason=",
                "",
              ])),
            t,
          )
          .sendLogs("hatch-subscription-read-failed");
      } catch (e) {}
      return (
        o("WAWebHatchLogging").logHatchSubscriptionRead({
          outcome: "error",
          reason: n.failureReason,
          source: n.source,
        }),
        { kind: "unavailable" }
      );
    }
    function f() {
      try {
        return r("WAWebNetworkStatus").online === !1 ||
          o("WAWebStreamGetters").getDisplayInfo(
            o("WAWebStreamModel").Stream,
          ) === o("WAWebStreamModel").StreamInfo.OFFLINE
          ? "offline"
          : "request_failed";
      } catch (e) {
        return "request_failed";
      }
    }
    function g(e) {
      var t, n;
      return (t = (n = h(e)) == null ? void 0 : n.subscription) != null
        ? t
        : null;
    }
    function h(e) {
      var t,
        n = (t = o("WAWebHatchJsonReaders")).readObject(e, "tier"),
        r = t.readObject(e, "usage"),
        a = E(n, "name"),
        i = t.readBool(n, "is_paid"),
        l = y(t.readString(r, "state"));
      if (
        o("WAWebHatchJsonReaders").readString(n, "tier_id") == null ||
        a == null ||
        i == null ||
        l == null
      )
        return null;
      var s = null,
        c = null;
      if (l === "METERED") {
        if (
          ((s = o("WAWebHatchJsonReaders").readInteger(r, "percent_used")),
          s == null || s < 0 || s > u)
        )
          return null;
        var d = o("WAWebHatchJsonReaders").readInteger(r, "resets_at");
        c = d != null && d > 0 ? d : null;
      }
      var m = b(e);
      return {
        isTopUpUnreadable: m.isUnreadable,
        subscription: {
          billingSubtitle: E(e, "billing_subtitle"),
          isPaid: i,
          managementRows: S(e),
          percentUsed: s,
          planName: a,
          quotaStatus: o("WAWebHatchJsonReaders").readString(r, "quota_status"),
          resetsAtSeconds: c,
          statusSubtitle: E(e, "status_subtitle"),
          topUp: m.topUp,
          topUpEligible: o("WAWebHatchJsonReaders").readBool(
            e,
            "topup_eligible",
          ),
          usageRowFooter: E(e, "usage_row_footer"),
          usageRowLabel: E(e, "usage_row_label"),
          usageRowValueLabel: E(e, "usage_row_value_label"),
          usageState: l,
        },
      };
    }
    function y(e) {
      return e === "METERED"
        ? "METERED"
        : e === "UNLIMITED"
          ? "UNLIMITED"
          : e === "UNKNOWN"
            ? "UNKNOWN"
            : null;
    }
    function C(e) {
      return e.topUpEligible === !0;
    }
    function b(e) {
      try {
        return { isUnreadable: !1, topUp: v(e) };
      } catch (e) {
        try {
          o("WALogger")
            .WARN(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
                  "hatch-subscription: top-up unreadable",
                ])),
            )
            .sendLogs("hatch-subscription-topup-unreadable");
        } catch (e) {}
        return { isUnreadable: !0, topUp: null };
      }
    }
    function v(e) {
      var t = o("WAWebHatchJsonReaders").readInteger(e, "topup_total"),
        n = o("WAWebHatchJsonReaders").readInteger(e, "topup_balance"),
        r = E(e, "topup_row_value_label");
      if (
        t == null ||
        n == null ||
        t <= 0 ||
        !Number.isSafeInteger(t) ||
        !Number.isSafeInteger(n) ||
        r == null ||
        r.trim() === ""
      )
        return null;
      var a = Math.min(Math.max(n, 0), t),
        i = E(e, "topup_row_label");
      return {
        percentUsed: Math.round((u * (t - a)) / t),
        title: i != null && i.trim() !== "" ? i : null,
        valueLabel: r,
      };
    }
    function S(e) {
      var t = o("WAWebHatchJsonReaders").readObject(e, "management_actions"),
        n = [];
      for (var r of o("WAWebHatchJsonReaders").readObjects(
        t,
        "management_rows",
      )) {
        var a = R(r);
        a != null && n.push(a);
      }
      return n;
    }
    function R(e) {
      var t = o("WAWebHatchJsonReaders").readString(e, "action"),
        n = E(e, "label"),
        r = L(o("WAWebHatchJsonReaders").readString(e, "style"));
      if (t == null || !c.has(t) || n == null || n.trim() === "" || r == null)
        return null;
      var a = E(e, "subtitle");
      return {
        action: t,
        label: n,
        style: r,
        subtitle: a != null && a.trim() !== "" ? a : null,
      };
    }
    function L(e) {
      return e === "destructive"
        ? "destructive"
        : e === "primary"
          ? "primary"
          : e === "secondary"
            ? "secondary"
            : null;
    }
    function E(e, t) {
      var n,
        r,
        a = o("WAWebHatchJsonReaders").readString(e, t);
      if (a == null || (!a.includes("<") && !a.includes("&")))
        return a === "" ? null : a;
      var i = new DOMParser().parseFromString(a, "text/html");
      for (var l of i.querySelectorAll("script, style, noscript")) l.remove();
      var s = (
        (n = (r = i.body) == null ? void 0 : r.textContent) != null ? n : ""
      ).trim();
      return s === "" ? null : s;
    }
    ((l.readHatchSubscription = m),
      (l.parseHatchSubscription = g),
      (l.shouldShowBuyAdditionalTokens = C));
  },
  98,
);
