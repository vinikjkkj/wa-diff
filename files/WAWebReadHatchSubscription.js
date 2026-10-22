__d(
  "WAWebReadHatchSubscription",
  [
    "fbt",
    "WALogger",
    "WAWebHatchJsonReaders",
    "WAWebHatchSubscriptionGetJob",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u,
      c = 100,
      d = new Set(["METERED", "UNLIMITED", "UNKNOWN"]),
      m = new Set(["CHANGE_PLAN", "OPEN_PAYWALL"]),
      p = new Set([
        "NOT_ABRA_LINKED",
        "SESSION_INVALID",
        "UPSTREAM_UNAVAILABLE",
      ]);
    function _() {
      return f.apply(this, arguments);
    }
    function f() {
      return (
        (f = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e;
          try {
            e = yield o(
              "WAWebHatchSubscriptionGetJob",
            ).commitHatchSubscriptionGet();
          } catch (e) {
            return g("request");
          }
          if (e == null || e.success == null) return g("empty");
          if (e.success !== !0 || e.error_code != null)
            return g(
              "error_code:" +
                (p.has(e.error_code) ? String(e.error_code) : "other"),
            );
          var t;
          try {
            t = h(e.subscription);
          } catch (e) {
            return g("malformed");
          }
          return t == null ? g("malformed") : { kind: "ok", subscription: t };
        })),
        f.apply(this, arguments)
      );
    }
    function g(t) {
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
    function h(e) {
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
        !d.has(l)
      )
        return null;
      var s = null,
        u = null;
      if (l === "METERED") {
        if (
          ((s = o("WAWebHatchJsonReaders").readInteger(r, "percent_used")),
          s == null || s < 0 || s > c)
        )
          return null;
        var m = o("WAWebHatchJsonReaders").readInteger(r, "resets_at");
        u = m != null && m > 0 ? m : null;
      }
      return {
        billingSubtitle: R(e, "billing_subtitle"),
        isPaid: i,
        percentUsed: s,
        planName: a,
        primaryAction: v(e, i),
        resetsAtSeconds: u,
        statusSubtitle: R(e, "status_subtitle"),
        topUp: C(e),
        topUpEligible: o("WAWebHatchJsonReaders").readBool(e, "topup_eligible"),
        usageRowFooter: R(e, "usage_row_footer"),
        usageRowLabel: R(e, "usage_row_label"),
        usageRowValueLabel: R(e, "usage_row_value_label"),
      };
    }
    function y(e) {
      return e.topUpEligible === !0;
    }
    function C(e) {
      try {
        return b(e);
      } catch (e) {
        try {
          o("WALogger")
            .WARN(
              u ||
                (u = babelHelpers.taggedTemplateLiteralLoose([
                  "hatch-subscription: top-up unreadable",
                ])),
            )
            .sendLogs("hatch-subscription-topup-unreadable");
        } catch (e) {}
        return null;
      }
    }
    function b(e) {
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
        percentUsed: Math.round((c * (t - a)) / t),
        title: i != null && i.trim() !== "" ? i : null,
        valueLabel: r,
      };
    }
    function v(e, t) {
      var n = o("WAWebHatchJsonReaders").readObject(e, "management_actions"),
        r = o("WAWebHatchJsonReaders").readObject(n, "primary_cta");
      if (r != null) {
        var a = R(r, "label");
        return m.has(o("WAWebHatchJsonReaders").readString(r, "action")) &&
          a != null
          ? { label: a }
          : null;
      }
      return t
        ? n != null
          ? null
          : (function (e) {
              if (e === !0) return { label: S() };
              if (e === !1)
                return { label: s._(/*BTDS*/ "Change subscription") };
              if (e == null) return null;
              throw Error(
                "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                  e,
              );
            })(o("WAWebHatchJsonReaders").readBool(e, "upgrade_eligible"))
        : { label: S() };
    }
    function S() {
      return s._(/*BTDS*/ "Upgrade");
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
    ((l.readHatchSubscription = _),
      (l.parseHatchSubscription = h),
      (l.shouldShowBuyAdditionalTokens = y));
  },
  226,
);
