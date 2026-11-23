__d(
  "MAIBAInlineActionUtils",
  [
    "A2UIAddFundsChipsContract",
    "A2UIBlockParser",
    "A2UISpendingLimitFormContract",
    "MAIBABillingInlineActionWebRegistry",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = "1",
      s = new Set([
        "account_billing",
        "billing",
        "billing_hub",
        "payment_activity",
        "payment_settings",
      ]);
    function u(e) {
      return e != null && e !== "" && e.trim() === e;
    }
    function c(e) {
      return e != null && /^[1-9][0-9]*$/.test(e);
    }
    function d(e) {
      return (
        e != null &&
        /^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i.test(
          e,
        )
      );
    }
    function m(t) {
      if (t == null || typeof t != "object" || Array.isArray(t)) return null;
      var n = t,
        r = n.action_id,
        a = n.asset_id,
        i = n.payment_account_id;
      if (
        n.schema_version !== e ||
        n.platform !== "web" ||
        typeof r != "string" ||
        !d(r) ||
        typeof a != "string" ||
        !c(a) ||
        typeof i != "string" ||
        !c(i)
      )
        return null;
      var l = o(
        "MAIBABillingInlineActionWebRegistry",
      ).getMAIBAInlineBillingActionRule(n.feature_key);
      if (l == null) return null;
      var s = {
          actionID: r,
          actionType: l.actionType,
          paymentAccountID: i,
          unavailableLabel: l.unavailableLabel,
        },
        u = n.payment_method_id;
      return l.paymentMethod === "forbidden"
        ? u == null
          ? s
          : null
        : typeof u == "string" && u !== ""
          ? babelHelpers.extends({}, s, { paymentMethodID: u })
          : null;
    }
    function p(e) {
      if (e == null || !o("A2UIBlockParser").hasA2UIBlocks(e)) return [];
      var t = [];
      return (
        o("A2UIBlockParser")
          .parseA2UIBlocks(e)
          .forEach(function (e) {
            if (e.kind === "a2ui") {
              if (e.data.type === "add_funds_chips") {
                var n = o(
                  "A2UIAddFundsChipsContract",
                ).parseAddFundsChipsContract(e.data);
                n != null && t.push(n.href);
                return;
              }
              if (e.data.type === "spending_limit_form") {
                var r = o(
                  "A2UISpendingLimitFormContract",
                ).parseSpendingLimitFormContract(e.data);
                r != null && t.push(r.href);
                return;
              }
              if (e.data.type === "link_button") {
                var a = e.data.url;
                typeof e.data.label == "string" &&
                  e.data.label !== "" &&
                  typeof a == "string" &&
                  a !== "" &&
                  m(e.data.url_generator) != null &&
                  t.push(a);
              }
            }
          }),
        t
      );
    }
    function _(e) {
      return e.replace(/[A-Z]/g, function (e) {
        return e.toLowerCase();
      });
    }
    function f(e) {
      if (typeof e != "string") return null;
      var t = _(e)
        .replace(/[ \t\n\r\f\v]+/g, " ")
        .replace(
          /^[ \t\n\r\f\v.,!?:;\'\"`*_~()[\]{}\u00AB\u00BB\u201C\u201D\u2018\u2019]+|[ \t\n\r\f\v.,!?:;\'\"`*_~()[\]{}\u00AB\u00BB\u201C\u201D\u2018\u2019]+$/g,
          "",
        );
      return t === "" ? null : t;
    }
    function g(e) {
      if (typeof e != "string") return null;
      var t = e.replace(/^[ \t\n\r\0\v]+|[ \t\n\r\0\v]+$/g, ""),
        n = /^([A-Za-z][A-Za-z0-9+.-]*):/.exec(t);
      if (n != null) {
        var r = _(n[1]);
        if (
          ((t = t.slice(n[0].length)),
          (r !== "http" && r !== "https") || !t.startsWith("//"))
        )
          return null;
      }
      var o = !t.startsWith("//");
      if (!o) {
        var a,
          i,
          l,
          s =
            (a = (i = /^\/\/([^/?#]*)/.exec(t)) == null ? void 0 : i[1]) != null
              ? a
              : "",
          u = _((l = s.split("@").pop()) != null ? l : "")
            .replace(/:[0-9]*$/, "")
            .replace(/\.$/, "");
        if (u !== "facebook.com" && !u.endsWith(".facebook.com")) return null;
        t = t.slice(2 + s.length);
      }
      var c = t.replace(/[?#][\s\S]*$/, "");
      return o && c === ""
        ? null
        : _(c)
            .split("/")
            .filter(function (e) {
              return e !== "";
            });
    }
    function h(e) {
      var t = g(e);
      return t == null
        ? !1
        : t.length === 0 ||
            t.some(function (e, n) {
              return (
                s.has(e) ||
                (e === "ads" &&
                  t[n + 1] === "manager" &&
                  t[n + 2] === "account_settings")
              );
            });
    }
    function y(e) {
      if (e == null || !o("A2UIBlockParser").hasA2UIBlocks(e)) return [];
      var t = [];
      return (
        o("A2UIBlockParser")
          .parseA2UIBlocks(e)
          .forEach(function (e) {
            if (e.kind === "a2ui") {
              var n = null;
              if (
                (e.data.type === "add_funds_chips"
                  ? (n = o(
                      "A2UIAddFundsChipsContract",
                    ).parseAddFundsChipsContract(e.data))
                  : e.data.type === "spending_limit_form" &&
                    (n = o(
                      "A2UISpendingLimitFormContract",
                    ).parseSpendingLimitFormContract(e.data)),
                n != null)
              ) {
                var r;
                t.push((r = f(n.label)) != null ? r : "");
              }
            }
          }),
        t
      );
    }
    ((l.isCanonicalNonEmptyString = u),
      (l.isPositiveNumericID = c),
      (l.isUUIDv4 = d),
      (l.getMAIBAInlineBillingActionConfig = m),
      (l.getCanonicalMAIBAInlineActionURLs = p),
      (l.normalizeMAIBAInlineActionLabel = f),
      (l.isFirstPartyBillingURL = h),
      (l.getGuardedMAIBAInlineActionLabels = y));
  },
  98,
);
