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
        "NOT_ABRA_LINKED",
        "SESSION_INVALID",
        "UPSTREAM_UNAVAILABLE",
      ]);
    function m() {
      return p.apply(this, arguments);
    }
    function p() {
      return (
        (p = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e;
          try {
            e = yield o(
              "WAWebHatchSubscriptionGetJob",
            ).commitHatchSubscriptionGet();
          } catch (e) {
            return _("request");
          }
          if (e == null || e.success == null) return _("empty");
          if (e.success !== !0 || e.error_code != null)
            return _(
              "error_code:" +
                (d.has(e.error_code) ? String(e.error_code) : "other"),
            );
          var t;
          try {
            t = f(e.subscription);
          } catch (e) {
            return _("malformed");
          }
          return t == null ? _("malformed") : { kind: "ok", subscription: t };
        })),
        p.apply(this, arguments)
      );
    }
    function _(t) {
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
    function f(e) {
      var t,
        n = (t = o("WAWebHatchJsonReaders")).readObject(e, "tier"),
        r = t.readObject(e, "usage"),
        a = C(n, "name"),
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
        billingSubtitle: C(e, "billing_subtitle"),
        isPaid: i,
        percentUsed: s,
        planName: a,
        resetsAtSeconds: d,
        statusSubtitle: C(e, "status_subtitle"),
        topUp: h(e),
        topUpEligible: o("WAWebHatchJsonReaders").readBool(e, "topup_eligible"),
        usageRowFooter: C(e, "usage_row_footer"),
        usageRowLabel: C(e, "usage_row_label"),
        usageRowValueLabel: C(e, "usage_row_value_label"),
      };
    }
    function g(e) {
      return e.topUpEligible === !0;
    }
    function h(e) {
      try {
        return y(e);
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
    function y(e) {
      var t = o("WAWebHatchJsonReaders").readInteger(e, "topup_total"),
        n = o("WAWebHatchJsonReaders").readInteger(e, "topup_balance"),
        r = C(e, "topup_row_value_label");
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
        i = C(e, "topup_row_label");
      return {
        percentUsed: Math.round((u * (t - a)) / t),
        title: i != null && i.trim() !== "" ? i : null,
        valueLabel: r,
      };
    }
    function C(e, t) {
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
      (l.parseHatchSubscription = f),
      (l.shouldShowBuyAdditionalTokens = g));
  },
  98,
);
