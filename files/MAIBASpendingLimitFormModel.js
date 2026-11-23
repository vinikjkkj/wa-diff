__d(
  "MAIBASpendingLimitFormModel",
  [
    "$InternalEnum",
    "AdsCMAccountSpendLimitDataLoader",
    "BillingCurrencyAmount",
    "MAIBASpendingLimitLiveStateLoader",
    "PECurrency",
    "promiseDone",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = 1e-6,
      u = 8 * Number.EPSILON,
      c = "save_started",
      d = "save_refused",
      m = "saved_reset",
      p = "saved_raise:",
      _ = (e = n("$InternalEnum")).Mirrored(["BelowMinimum", "Invalid"]),
      f = e.Mirrored([
        "Editing",
        "Failed",
        "OutOfDate",
        "Saved",
        "Saving",
        "Unconfirmed",
      ]),
      g = e.Mirrored(["Raise", "Reset"]);
    function h(e, t) {
      var n;
      return (n = o("BillingCurrencyAmount").getFromPECurrencyAmount({
        amount_with_offset: e,
        currency: t,
      })) != null
        ? n
        : o("BillingCurrencyAmount").createZero(t);
    }
    function y(e) {
      return Number(e.asGraphQLInput().amount);
    }
    function C(e, t) {
      var n,
        a = e * r("PECurrency").DEFAULT_AMOUNT_OFFSET,
        i = Math.round(a),
        l =
          (n = r("PECurrency").getCurrencyOffset(t)) != null
            ? n
            : r("PECurrency").DEFAULT_AMOUNT_OFFSET,
        c = Math.max(1, r("PECurrency").DEFAULT_AMOUNT_OFFSET / l);
      return e > o("BillingCurrencyAmount").MAX_SAFE_ACCOUNT_SPEND_LIMIT ||
        !Number.isSafeInteger(i) ||
        Math.abs(a - i) > Math.max(s, Math.abs(a) * u) ||
        i % c !== 0
        ? null
        : h(String(i), t);
    }
    function b(e, t) {
      var n,
        o = Math.min(
          (n = r("PECurrency").getCurrencyOffset(t)) != null
            ? n
            : r("PECurrency").DEFAULT_AMOUNT_OFFSET,
          r("PECurrency").DEFAULT_AMOUNT_OFFSET,
        ),
        a = e * o,
        i = Math.round(a);
      return !Number.isSafeInteger(i) ||
        Math.abs(a - i) <= Math.max(s, Math.abs(a) * u)
        ? e
        : Math.trunc(a) / o;
    }
    function v(e, t, n) {
      return e.compare(t) <= 0 || e.compare(n) < 0;
    }
    function S(e, t, n, r) {
      return e == null
        ? null
        : t == null
          ? _.Invalid
          : v(t, n, r)
            ? _.BelowMinimum
            : null;
    }
    function R(e) {
      if (e == null || typeof e != "object") return null;
      var t = e.error_user_msg;
      return e.is_transient === !0 || typeof t != "string" || t.trim() === ""
        ? null
        : t;
    }
    function L(e, t, n) {
      var r = n.amountSpent,
        o = n.currentLimit,
        a = n.minimumLimit;
      return e === g.Reset
        ? r.isZero()
          ? null
          : { actionType: "reset", spendLimit: y(o) }
        : t == null || v(t, o, a)
          ? null
          : { actionType: "update", spendLimit: y(t) };
    }
    var E = e.Mirrored(["OutOfDate", "Saved"]),
      k = new Map();
    function I(e, t) {
      var n;
      if (e.currency !== t.currency) return !1;
      var o =
        (n = r("PECurrency").getCurrencyOffset(t.currency)) != null
          ? n
          : r("PECurrency").DEFAULT_AMOUNT_OFFSET;
      return (
        Number(e.spend_cap) * r("PECurrency").DEFAULT_AMOUNT_OFFSET ===
        Number(t.currentLimit.getAmountWithPEOffset()) * o
      );
    }
    async function T(e, t, n) {
      var r = await o(
        "MAIBASpendingLimitLiveStateLoader",
      ).loadMAIBASpendingLimitLiveState(e);
      return I(r, n)
        ? (await o("AdsCMAccountSpendLimitDataLoader").updateAccountSpendLimit(
            e,
            t.actionType,
            t.spendLimit,
          ),
          E.Saved)
        : E.OutOfDate;
    }
    function D(e, t, n, o, a, i) {
      var l = Date.now(),
        s = new Promise(function (e) {
          e(T(t, n, o));
        });
      k.set(e, s);
      var u = function () {
        k.get(e) === s && k.delete(e);
      };
      r("promiseDone")(
        s,
        function (e) {
          (u(), a(e, Date.now() - l));
        },
        function (e) {
          (u(), i(e, Date.now() - l));
        },
      );
    }
    function x(e) {
      return k.get(e);
    }
    function $(e, t) {
      return (e == null ? void 0 : e.status) === "CONFIRMED"
        ? f.Saved
        : t || ((e == null ? void 0 : e.status) === "PENDING" && e.data !== d)
          ? f.Unconfirmed
          : f.Editing;
    }
    function P(e) {
      return "spending_limit_form:" + e;
    }
    function N(e) {
      var t = e.newLimit;
      return t == null ? m : p + t.getAmountWithPEOffset();
    }
    function M(e, t) {
      if (e === m) return { newLimit: null };
      if (e == null || !e.startsWith(p)) return null;
      var n = e.slice(p.length);
      return /^[1-9][0-9]*$/.test(n) ? { newLimit: h(n, t) } : null;
    }
    ((l.SAVE_STARTED = c),
      (l.SAVE_REFUSED = d),
      (l.SpendingLimitAmountError = _),
      (l.SpendingLimitFormPhase = f),
      (l.SpendingLimitOption = g),
      (l.toCurrencyAmount = h),
      (l.toMajorUnits = y),
      (l.toTypedLimit = C),
      (l.truncateToSmallestUnit = b),
      (l.isBelowRaiseFloor = v),
      (l.getAmountError = S),
      (l.getBillingRefusalMessage = R),
      (l.getUpdateRequest = L),
      (l.SpendingLimitUpdateOutcome = E),
      (l.runSpendingLimitUpdate = D),
      (l.getInFlightSpendingLimitUpdate = x),
      (l.getInitialPhase = $),
      (l.getWidgetStateKey = P),
      (l.encodeSavedChange = N),
      (l.decodeSavedChange = M));
  },
  98,
);
