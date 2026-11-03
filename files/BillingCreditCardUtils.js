__d(
  "BillingCreditCardUtils",
  [
    "fbt",
    "BillingContactFieldValidators",
    "BillingCountryCurrencyUtils",
    "BillingCreditCardConstants",
    "BillingCreditCardNumber",
    "BillingCreditCardTypes",
    "BillingPTTSharedUtils",
    "BillingPTTUtils",
    "BillingWizardRootUPLogger",
    "FrontierCardNumberUtils",
    "ISOCountryCode",
    "Promise",
    "XPlatReactCrypto",
    "asyncToGeneratorRuntime",
    "castToEnum",
    "enumUtils",
    "nullthrows",
    "pm_capability_PaymentMethodUsabilityIntent",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u = new RegExp(/\d{4}[ -]?\d{6}[ -]?\d{5}/),
      c = new RegExp(/(?:\d{4}[ -]?){3}\d{4}/),
      d = new RegExp(/\d{15}/),
      m = s._(/*BTDS*/ "Enter the 3-digit code on your card."),
      p = s._(/*BTDS*/ "Enter the 4-digit code on your card."),
      _ = function (t) {
        var e = 100;
        return t.length > e
          ? s._(
              /*BTDS*/ "Enter a name that's {max length} characters or less.",
              [s._param("max length", e)],
            )
          : A(t)
            ? s._(/*BTDS*/ "Enter name on card.")
            : null;
      },
      f = function (t, n, a) {
        var e,
          i = o("BillingCreditCardTypes").BillingCreditCardTypes.unknown;
        (n == null ? void 0 : n.cardNumber) != null
          ? (i = I(n.cardNumber))
          : a != null && (i = k(a));
        var l = t.getValue_DO_NOT_USE();
        return !/^\d+$/.test(l) ||
          ((e = i) == null ? void 0 : e.securityCodeLength) !== l.length
          ? i === o("BillingCreditCardTypes").BillingCreditCardTypes.unknown
            ? l.length === 4
              ? null
              : r("BillingCreditCardConstants").emptySecurityCodeError
            : i ===
                o("BillingCreditCardTypes").BillingCreditCardTypes
                  .americanExpress
              ? p
              : m
          : null;
      };
    function g(e, t, n) {
      var a = o("FrontierCardNumberUtils").getCardType(e),
        i = e.replace(/\D/g, "");
      if (a.name !== "amex" && i.length < 8) return null;
      if (a.name === "unknown" || t == null || t === "")
        return r("BillingCreditCardConstants").unsupportedCardErrorMessage;
      var l = n === 6,
        u = o("BillingCountryCurrencyUtils").getCountryName(
          r("castToEnum")(t, r("ISOCountryCode"), null),
        );
      return u.toString() === ""
        ? l
          ? s._(
              /*BTDS*/ "{card type} cards aren\u2019t supported for auto reload. Try adding a different card.",
              [s._param("card type", F(a.type))],
            )
          : s._(
              /*BTDS*/ "{card type} cards aren\u2019t supported for adding funds. Try adding a different card.",
              [s._param("card type", F(a.type))],
            )
        : l
          ? s._(
              /*BTDS*/ "{card type} cards aren\u2019t supported in {country} for auto reload. Try adding a different card.",
              [s._param("card type", F(a.type)), s._param("country", u)],
            )
          : s._(
              /*BTDS*/ "{card type} cards aren\u2019t supported in {country} for adding funds. Try adding a different card.",
              [s._param("card type", F(a.type)), s._param("country", u)],
            );
    }
    function h(e, t) {
      return g(e, t, 3);
    }
    function y(e, t, n) {
      return o("FrontierCardNumberUtils").getCardType(e).name !== "amex"
        ? null
        : g(e, t, n);
    }
    function C(e, t) {
      return y(e, t, 3);
    }
    function b(e) {
      return e === 3;
    }
    var v = function (t, n, o) {
        n === void 0 && (n = !1);
        var e = s._(/*BTDS*/ "Enter the correct debit or credit card number."),
          a = I(t);
        return !a.isSupported && !(o != null && o())
          ? r("BillingCreditCardConstants").unsupportedCardErrorMessage
          : t.validate_DO_NOT_LOG(function (e) {
                return e.length !== a.cardLength;
              }) ||
              (!n && !T(t))
            ? e
            : null;
      },
      S = function (t, n, r) {
        r === void 0 && (r = new Date());
        var e = s._(/*BTDS*/ "The expiration date you entered is in the past."),
          o = s._(/*BTDS*/ "Enter the correct expiration date."),
          a = R(t),
          i = a.expirationMonth,
          l = a.expirationYear;
        if (l <= 0 || l > 99 || i <= 0 || i > 12 || t === "/") return o;
        var u = new Date(r.getFullYear(), r.getMonth()),
          c = parseInt("" + String(r.getFullYear()).substring(0, 2) + l, 10),
          d = new Date(c, i - 1);
        return d.getTime() < u.getTime() ? e : null;
      },
      R = function (t) {
        var e = t.split("/");
        if (e.length !== 2)
          return {
            expirationMonth: 0,
            expirationYear: 0,
            fullExpirationYear: 0,
          };
        var n = parseInt(e[1], 10),
          r = parseInt(
            String(new Date().getFullYear()).slice(0, -2) + e[1],
            10,
          ),
          o = parseInt(e[0], 10);
        return { expirationMonth: o, expirationYear: n, fullExpirationYear: r };
      },
      L = function (t) {
        return t.cardNumber !== void 0
          ? t.cardNumber.getLastFour()
          : t.__DO_NOT_USE_LAST_FOUR !== void 0
            ? t.__DO_NOT_USE_LAST_FOUR.substring(
                t.__DO_NOT_USE_LAST_FOUR.length - 4,
              )
            : "";
      },
      E = function (t) {
        for (
          var e = [
              [401178, 401179],
              [431274, 431274],
              [438935, 438935],
              [457393, 457393],
              [457631, 457632],
              [504175, 504175],
              [506717, 506718],
              [506720, 506721],
              [506723, 506733],
              [506739, 506739],
              [506741, 506748],
              [506753, 506753],
              [506774, 506775],
              [506777, 506778],
              [509e3, 509002],
              [509004, 509012],
              [509014, 509014],
              [509020, 509030],
              [509035, 509053],
              [509064, 509064],
              [509066, 509072],
              [509074, 509083],
              [509085, 509092],
              [509095, 509103],
              [509105, 509105],
              [509107, 509807],
              [636297, 636297],
              [636368, 636368],
              [650485, 650513],
              [650516, 650516],
              [650518, 650538],
              [650552, 650598],
              [650720, 650727],
              [650901, 650922],
              [650928, 650928],
              [650939, 650939],
              [650946, 650978],
              [651652, 651704],
              [655e3, 655019],
              [655021, 655058],
            ],
            n = parseInt(t.getBin(), 10),
            r = 0;
          r < e.length;
          r++
        )
          if (n >= e[r][0] && n <= e[r][1]) return !0;
        return !1;
      },
      k = function (t) {
        for (var e in o("BillingCreditCardTypes").BillingCreditCardTypes) {
          var n = o("BillingCreditCardTypes").BillingCreditCardTypes[e];
          if (
            n.type.replace("_", "").toLocaleUpperCase() ===
            t.replace("_", "").toLocaleUpperCase()
          )
            return n;
        }
        return o("BillingCreditCardTypes").BillingCreditCardTypes.unknown;
      },
      I = function (t) {
        if (E(t)) return o("BillingCreditCardTypes").BillingCreditCardTypes.elo;
        if (t.getBin().substring(0, 2) === "65") {
          var e = parseInt(t.getBin(), 10);
          return e >= 652150 && e <= 653143
            ? o("BillingCreditCardTypes").BillingCreditCardTypes.rupay
            : o("BillingCreditCardTypes").BillingCreditCardTypes.discover;
        }
        for (var n in o("BillingCreditCardTypes").BillingCreditCardTypes) {
          var r = o("BillingCreditCardTypes").BillingCreditCardTypes[n];
          if (r.matchingPattern && r.matchingPattern.test(t.getBin())) return r;
        }
        return o("BillingCreditCardTypes").BillingCreditCardTypes.unknown;
      },
      T = function (t) {
        return t.validate_DO_NOT_LOG(function (e) {
          for (
            var t = e.split("").reverse(), n = "", r = 0;
            r < t.length;
            r++
          ) {
            var o = parseInt(t[r], 10);
            (r % 2 !== 0 && (o *= 2), (n += o));
          }
          for (var a = 0, i = 0; i < n.length; i++)
            a += parseInt(n.charAt(i), 10);
          return a !== 0 && a % 10 === 0;
        });
      },
      D = function (t) {
        return t.transform_DO_NOT_LOG(function (e) {
          var n = I(t),
            a = e.replace(/\D/g, "").substring(0, n.cardLength);
          if (
            n ===
            o("BillingCreditCardTypes").BillingCreditCardTypes.americanExpress
          )
            (a.length > 4 && (a = a.substr(0, 4) + "\xA0" + a.substr(4)),
              a.length > 11 && (a = a.substr(0, 11) + "\xA0" + a.substr(11)));
          else
            for (var i = 0, l = 1; l < a.length; l++)
              (l - i) % 4 === 0 &&
                l < a.length &&
                ((a = a.substr(0, l) + "\xA0" + a.substr(l)), i++, l++);
          return new (r("BillingCreditCardNumber"))(a);
        });
      },
      x = function (t) {
        if (t == null) return "";
        var e = t.replace(/[^\d/]+/g, "");
        return (
          !e.includes("/") &&
            e.length > 2 &&
            (e =
              e.replace("/", "").slice(0, 2) +
              "/" +
              e.replace("/", "").slice(2)),
          e.substring(0, 5)
        );
      },
      $ = function (t, n) {
        return babelHelpers.extends({}, n, { expiration: x(t) });
      },
      P = function (t, n) {
        return babelHelpers.extends({}, n, { cardNumber: D(t) });
      };
    function N(e, t, n, r) {
      return babelHelpers.extends({}, e, {
        cardNetwork: n,
        lastFour: r,
        paymentMethodID: t,
      });
    }
    function M(e, t, n, r, o, a, i, l, s, u, c, d, m, p) {
      return w.apply(this, arguments);
    }
    function w() {
      return (
        (w = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (t, a, i, l, s, u, c, d, m, p, _, f, g, h) {
            var y, C, b, v, S, L;
            (f === void 0 && (f = !1), g === void 0 && (g = null));
            var E = R((y = t.expiration) != null ? y : ""),
              k = String(E.expirationMonth),
              I = String(E.fullExpirationYear),
              T = t.securityCode,
              D = r("nullthrows")(
                (C = t.cardNumber) == null
                  ? void 0
                  : C.getCleanValue_DO_NOT_USE(),
              ),
              x = r("nullthrows")(T == null ? void 0 : T.getValue_DO_NOT_USE()),
              $ = null,
              P = yield (e || (e = n("Promise"))).all([
                yield p == null
                  ? void 0
                  : p.ama_user_fq.enabled
                      .get({ do_not_log_exposure_iknowwhatimdoing: !0 })
                      .then(function (e) {
                        return (
                          e &&
                          (m == null
                            ? void 0
                            : m.AMA_TRUSTED_DEVICE_KEY_REGISTRATION_ENABLED.get())
                        );
                      }),
                yield m == null
                  ? void 0
                  : m.AMA_TRUSTED_DEVICE_KEY_REGISTRATION_ENABLED.get(),
              ]),
              N = P[0],
              M = P[1],
              w = o("BillingPTTSharedUtils").generatePTTInputFields(x),
              A = w.authDataFields,
              F = w.paymentType,
              O = w.secretPayload,
              B = babelHelpers.extends(
                { credit_card: "$e2ee", expiry_month: k, expiry_year: I },
                A,
              ),
              W =
                O.csc != null
                  ? { credit_card: D, csc: O.csc }
                  : { credit_card: D },
              q = {
                authData: B,
                authInputOperation: f ? "CHARGE" : "ADD_CARD",
                paymentAccountID: a,
                paymentType: F,
                secretPayload: W,
              };
            if (
              (($ = yield o("BillingPTTUtils").generatePTTWithRequirement(
                function () {
                  return o("BillingPTTUtils").generatePTT(
                    q,
                    "save_credit_card",
                    !0,
                    !0,
                    p,
                    m,
                    _,
                    M && !f,
                    N && !f,
                  );
                },
                h,
              )),
              $ != null && $ !== "")
            ) {
              var U;
              ((D = q.authData.credit_card),
                (x = (U = q.authData.csc) != null ? U : x));
            }
            var V = {
                bin: (function (e, n, r) {
                  var o = (e = t.cardNumber) == null ? void 0 : e.getBin8();
                  return (n =
                    (o == null ? void 0 : o.length) === 8
                      ? o
                      : (r = t.cardNumber) == null
                        ? void 0
                        : r.getBin()) != null
                    ? n
                    : "";
                })(),
                cardholder_email:
                  t.requirePhoneNumberOrEmail === !0 &&
                  t.cardHolderEmail != null &&
                  t.cardHolderEmail !== ""
                    ? t.cardHolderEmail
                    : void 0,
                cardholder_name: (b = t.firstName) != null ? b : "",
                cardholder_phone_number:
                  t.requirePhoneNumberOrEmail === !0 &&
                  t.cardHolderPhoneNumber != null &&
                  t.cardHolderPhoneNumber !== ""
                    ? t.cardHolderPhoneNumber
                    : void 0,
                credit_card_number: { sensitive_string_value: D },
                csc: { sensitive_string_value: x },
                expiry_month: k,
                expiry_year: I,
                last_4:
                  (v = (S = t.cardNumber) == null ? void 0 : S.getLastFour()) !=
                  null
                    ? v
                    : "",
              },
              H = {
                country_code: i,
                zip:
                  ((L = t.postalCode) != null ? L : "").length === 0
                    ? void 0
                    : t.postalCode,
              },
              G = yield o("XPlatReactCrypto").isHardwareBackedAvailable();
            return {
              billing_address: H,
              biz_credential_is_sharable:
                t.credentialSharability != null
                  ? t.credentialSharability === "BUSINESS_SHARABLE"
                  : void 0,
              card_data: V,
              client_info: d,
              currency: l,
              intent: o("enumUtils").enumValueToKey(
                u,
                r("pm_capability_PaymentMethodUsabilityIntent"),
              ),
              is_hardware_backed_crypto_available: G,
              network_tokenization_consent_given: t.verifyTokenizationCheckbox,
              payment_account_id: a,
              payment_intent: s,
              platform_trust_token: $ != null ? $ : "",
              recurring_payment_consent_given: t.verifyRecurringCheckbox,
              set_default: c,
              share_to_child_payment_account_id: g,
              upl_logging_data: babelHelpers.extends(
                {},
                r("BillingWizardRootUPLogger").getLoggingData(
                  "useBillingAddCreditCardMutation",
                ),
                g != null ? { share_to_payment_account_id: g } : {},
              ),
            };
          },
        )),
        w.apply(this, arguments)
      );
    }
    var A = function (t) {
      return d.test(t) || c.test(t) || u.test(t);
    };
    function F(e) {
      return e
        ? e
            .toLowerCase()
            .replace(/_/g, " ")
            .split(" ")
            .map(function (e) {
              return e.charAt(0).toUpperCase() + e.slice(1);
            })
            .join(" ")
        : "";
    }
    ((l.validateEmail = o("BillingContactFieldValidators").validateEmailInput),
      (l.validatePhoneNumber = o(
        "BillingContactFieldValidators",
      ).validatePhoneNumberInput),
      (l.validateFullName = _),
      (l.validateSecurityCode = f),
      (l.getCardTypeUnsupportedForPrepaidIntentMessage = g),
      (l.getCardTypeUnsupportedForAddingFundsMessage = h),
      (l.getAmExUnsupportedForPrepaidIntentMessage = y),
      (l.getAmExUnsupportedForAddingFundsMessage = C),
      (l.isPrepaidFundingIntent = b),
      (l.validateCardNumber = v),
      (l.validateExpiration = S),
      (l.splitExpirationDate = R),
      (l.getLastFour = L),
      (l.isElo = E),
      (l.getCreditCardTypeFromGraphQLType = k),
      (l.getCreditCardType = I),
      (l.formatCardNumber = D),
      (l.formatExpiration = x),
      (l.onExpirationChange = $),
      (l.onCardNumberChange = P),
      (l.updateCreditCardAfterSave = N),
      (l.buildSaveCardCredentialInput = M),
      (l.formatCardType = F));
  },
  226,
);
