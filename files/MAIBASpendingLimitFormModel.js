__d(
  "MAIBASpendingLimitFormModel",
  [
    "$InternalEnum",
    "BillingCurrencyAmount",
    "PECurrency",
    "err",
    "promiseDone",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = 1e-6,
      u = 8 * Number.EPSILON,
      c = 1e12,
      d = "save_started",
      m = "save_refused",
      p = "save_unconfirmed",
      _ = "save_not_admitted",
      f = "saved_reset",
      g = "saved_raise:",
      h = (e = n("$InternalEnum")).Mirrored(["BelowMinimum", "Invalid"]),
      y = e.Mirrored([
        "Editing",
        "Failed",
        "NotAdmitted",
        "OutOfDate",
        "Saved",
        "Saving",
        "Unconfirmed",
      ]),
      C = e.Mirrored(["Raise", "Reset"]),
      b = (function (e) {
        function t(t) {
          var n;
          return (
            (n =
              e.call(this, "Billing refused the spending limit change") ||
              this),
            (n.error_user_msg = t),
            (n.is_transient = !1),
            n
          );
        }
        return (babelHelpers.inheritsLoose(t, e), t);
      })(babelHelpers.wrapNativeSuper(Error)),
      v = (function (e) {
        function t() {
          return (
            e.call(
              this,
              "The server couldn't save the spending limit form yet",
            ) || this
          );
        }
        return (babelHelpers.inheritsLoose(t, e), t);
      })(babelHelpers.wrapNativeSuper(Error));
    function S(e) {
      return e instanceof b
        ? "server_rejected"
        : e instanceof v
          ? "server_retryable"
          : "transport_error";
    }
    function R(e, t) {
      var n;
      return (n = o("BillingCurrencyAmount").getFromPECurrencyAmount({
        amount_with_offset: e,
        currency: t,
      })) != null
        ? n
        : o("BillingCurrencyAmount").createZero(t);
    }
    function L(e) {
      return Number(e.asGraphQLInput().amount);
    }
    function E(e, t) {
      var n,
        a = e * r("PECurrency").DEFAULT_AMOUNT_OFFSET,
        i = Math.round(a),
        l =
          (n = r("PECurrency").getCurrencyOffset(t)) != null
            ? n
            : r("PECurrency").DEFAULT_AMOUNT_OFFSET,
        d = Math.max(1, r("PECurrency").DEFAULT_AMOUNT_OFFSET / l);
      return e > o("BillingCurrencyAmount").MAX_SAFE_ACCOUNT_SPEND_LIMIT ||
        i >= c * r("PECurrency").DEFAULT_AMOUNT_OFFSET ||
        !Number.isSafeInteger(i) ||
        Math.abs(a - i) > Math.max(s, Math.abs(a) * u) ||
        i % d !== 0
        ? null
        : R(String(i), t);
    }
    function k(e, t) {
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
    function I(e, t, n) {
      return e.compare(t) <= 0 || e.compare(n) < 0;
    }
    function T(e, t, n, r) {
      return e == null
        ? null
        : t == null
          ? h.Invalid
          : I(t, n, r)
            ? h.BelowMinimum
            : null;
    }
    function D(e) {
      if (e == null || typeof e != "object") return null;
      var t = e.error_user_msg;
      return e.is_transient === !0 || typeof t != "string" || t.trim() === ""
        ? null
        : t;
    }
    function x(e, t, n) {
      var r = n.amountSpent,
        o = n.currentLimit,
        a = n.minimumLimit;
      return e === C.Reset
        ? r.isZero()
          ? null
          : { newSpendLimit: null }
        : t == null || I(t, o, a)
          ? null
          : { newSpendLimit: t.asGraphQLInput().amount };
    }
    var $ = e.Mirrored(["NotAdmitted", "OutOfDate", "Saved"]),
      P = new Map();
    async function N(e, t, n) {
      var o = await n(e, t),
        a = o.refusalMessage,
        i = o.result;
      e: {
        if (i === "SAVED") return $.Saved;
        if (i === "OUT_OF_DATE") return $.OutOfDate;
        if (i === "NOT_ADMITTED") return $.NotAdmitted;
        throw i === "REFUSED"
          ? new b(a)
          : i === "NOT_READY"
            ? new v()
            : r("err")(
                "The server didn't save the spending limit form: " + String(i),
              );
      }
    }
    function M(e, t, n, o, a, i) {
      var l = Date.now(),
        s = new Promise(function (e) {
          e(N(t, n, o));
        });
      P.set(e, s);
      var u = function () {
        P.get(e) === s && P.delete(e);
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
    function w(e) {
      return P.get(e);
    }
    function A(e, t) {
      return (e == null ? void 0 : e.status) === "CONFIRMED"
        ? y.Saved
        : t
          ? y.Unconfirmed
          : (e == null ? void 0 : e.status) === "PENDING" && e.data === _
            ? y.NotAdmitted
            : (e == null ? void 0 : e.status) === "PENDING" && e.data !== m
              ? y.Unconfirmed
              : y.Editing;
    }
    function F(e) {
      return "spending_limit_form:" + e;
    }
    function O(e) {
      var t = e.newLimit;
      return t == null ? f : g + t.getAmountWithPEOffset();
    }
    function B(e, t) {
      if (e === f) return { newLimit: null };
      if (e == null || !e.startsWith(g)) return null;
      var n = e.slice(g.length);
      return /^[1-9][0-9]*$/.test(n) ? { newLimit: R(n, t) } : null;
    }
    ((l.SAVE_STARTED = d),
      (l.SAVE_REFUSED = m),
      (l.SAVE_UNCONFIRMED = p),
      (l.SAVE_NOT_ADMITTED = _),
      (l.SpendingLimitAmountError = h),
      (l.SpendingLimitFormPhase = y),
      (l.SpendingLimitOption = C),
      (l.SpendingLimitRefusalError = b),
      (l.SpendingLimitNotReadyError = v),
      (l.getSaveFailureReason = S),
      (l.toCurrencyAmount = R),
      (l.toMajorUnits = L),
      (l.toTypedLimit = E),
      (l.truncateToSmallestUnit = k),
      (l.isBelowRaiseFloor = I),
      (l.getAmountError = T),
      (l.getBillingRefusalMessage = D),
      (l.getUpdateRequest = x),
      (l.SpendingLimitUpdateOutcome = $),
      (l.runSpendingLimitUpdate = M),
      (l.getInFlightSpendingLimitUpdate = w),
      (l.getInitialPhase = A),
      (l.getWidgetStateKey = F),
      (l.encodeSavedChange = O),
      (l.decodeSavedChange = B));
  },
  98,
);
