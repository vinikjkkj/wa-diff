__d(
  "WAWebReadHatchSubscription",
  [
    "WALogger",
    "WAWebHatchJsonReaders",
    "WAWebHatchSubscriptionGetJob",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = 100,
      c = new Set(["METERED", "UNLIMITED", "UNKNOWN"]),
      d = new Set([
        "CANCEL",
        "CLAIM_META_HOME_LINK",
        "DISMISS",
        "MANAGE_BILLING",
        "REACTIVATE",
        "REFRESH",
        "REVOKE_AND_REFUND",
      ]),
      m = new Set([
        "NOT_ABRA_LINKED",
        "SESSION_INVALID",
        "UPSTREAM_UNAVAILABLE",
      ]);
    function p() {
      return _.apply(this, arguments);
    }
    function _() {
      return (
        (_ = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e;
          try {
            e = yield o(
              "WAWebHatchSubscriptionGetJob",
            ).commitHatchSubscriptionGet();
          } catch (e) {
            return f("request");
          }
          if (e == null || e.success == null) return f("empty");
          if (e.success !== !0 || e.error_code != null)
            return f(
              "error_code:" +
                (m.has(e.error_code) ? String(e.error_code) : "other"),
            );
          var t;
          try {
            t = g(e.subscription);
          } catch (e) {
            return f("malformed");
          }
          return t == null ? f("malformed") : { kind: "ok", subscription: t };
        })),
        _.apply(this, arguments)
      );
    }
    function f(t) {
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
      return { kind: "unavailable" };
    }
    function g(e) {
      var t,
        n = (t = o("WAWebHatchJsonReaders")).readObject(e, "tier"),
        r = t.readObject(e, "usage"),
        a = R(n, "name"),
        i = t.readBool(n, "is_paid"),
        l = t.readString(r, "state");
      if (
        o("WAWebHatchJsonReaders").readString(n, "tier_id") == null ||
        a == null ||
        i == null ||
        !c.has(l)
      )
        return null;
      var s = null,
        d = null;
      if (l === "METERED") {
        if (
          ((s = o("WAWebHatchJsonReaders").readInteger(r, "percent_used")),
          s == null || s < 0 || s > u)
        )
          return null;
        var m = o("WAWebHatchJsonReaders").readInteger(r, "resets_at");
        d = m != null && m > 0 ? m : null;
      }
      return {
        billingSubtitle: R(e, "billing_subtitle"),
        isPaid: i,
        managementRows: b(e),
        percentUsed: s,
        planName: a,
        quotaStatus: o("WAWebHatchJsonReaders").readString(r, "quota_status"),
        resetsAtSeconds: d,
        statusSubtitle: R(e, "status_subtitle"),
        topUp: y(e),
        topUpEligible: o("WAWebHatchJsonReaders").readBool(e, "topup_eligible"),
        usageRowFooter: R(e, "usage_row_footer"),
        usageRowLabel: R(e, "usage_row_label"),
        usageRowValueLabel: R(e, "usage_row_value_label"),
      };
    }
    function h(e) {
      return e.topUpEligible === !0;
    }
    function y(e) {
      try {
        return C(e);
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
        return null;
      }
    }
    function C(e) {
      var t = o("WAWebHatchJsonReaders").readInteger(e, "topup_total"),
        n = o("WAWebHatchJsonReaders").readInteger(e, "topup_balance"),
        r = R(e, "topup_row_value_label");
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
        i = R(e, "topup_row_label");
      return {
        percentUsed: Math.round((u * (t - a)) / t),
        title: i != null && i.trim() !== "" ? i : null,
        valueLabel: r,
      };
    }
    function b(e) {
      var t = o("WAWebHatchJsonReaders").readObject(e, "management_actions"),
        n = [];
      for (var r of o("WAWebHatchJsonReaders").readObjects(
        t,
        "management_rows",
      )) {
        var a = v(r);
        a != null && n.push(a);
      }
      return n;
    }
    function v(e) {
      var t = o("WAWebHatchJsonReaders").readString(e, "action"),
        n = R(e, "label"),
        r = S(o("WAWebHatchJsonReaders").readString(e, "style"));
      if (t == null || !d.has(t) || n == null || n.trim() === "" || r == null)
        return null;
      var a = R(e, "subtitle");
      return {
        action: t,
        label: n,
        style: r,
        subtitle: a != null && a.trim() !== "" ? a : null,
      };
    }
    function S(e) {
      return e === "destructive"
        ? "destructive"
        : e === "primary"
          ? "primary"
          : e === "secondary"
            ? "secondary"
            : null;
    }
    function R(e, t) {
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
    ((l.readHatchSubscription = p),
      (l.parseHatchSubscription = g),
      (l.shouldShowBuyAdditionalTokens = h));
  },
  98,
);
