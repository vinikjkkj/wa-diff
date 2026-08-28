__d(
  "BillingCreditCardUtils",
  [
    "fbt",
    "BillingContactFieldValidators",
    "BillingCreditCardConstants",
    "BillingCreditCardNumber",
    "BillingCreditCardTypes",
    "BillingPTTSharedUtils",
    "BillingPTTUtils",
    "BillingWizardRootUPLogger",
    "Promise",
    "XPlatReactCrypto",
    "asyncToGeneratorRuntime",
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
          : $(t)
            ? s._(/*BTDS*/ "Enter name on card.")
            : null;
      },
      f = function (t, n, a) {
        var e,
          i = o("BillingCreditCardTypes").BillingCreditCardTypes.unknown;
        (n == null ? void 0 : n.cardNumber) != null
          ? (i = S(n.cardNumber))
          : a != null && (i = v(a));
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
      },
      g = function (t, n, o) {
        n === void 0 && (n = !1);
        var e = s._(/*BTDS*/ "Enter the correct debit or credit card number."),
          a = S(t);
        return !a.isSupported && !(o != null && o())
          ? r("BillingCreditCardConstants").unsupportedCardErrorMessage
          : t.validate_DO_NOT_LOG(function (e) {
                return e.length !== a.cardLength;
              }) ||
              (!n && !R(t))
            ? e
            : null;
      },
      h = function (t, n, r) {
        r === void 0 && (r = new Date());
        var e = s._(/*BTDS*/ "The expiration date you entered is in the past."),
          o = s._(/*BTDS*/ "Enter the correct expiration date."),
          a = y(t),
          i = a.expirationMonth,
          l = a.expirationYear;
        if (l <= 0 || l > 99 || i <= 0 || i > 12 || t === "/") return o;
        var u = new Date(r.getFullYear(), r.getMonth()),
          c = parseInt("" + String(r.getFullYear()).substring(0, 2) + l, 10),
          d = new Date(c, i - 1);
        return d.getTime() < u.getTime() ? e : null;
      },
      y = function (t) {
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
      C = function (t) {
        return t.cardNumber !== void 0
          ? t.cardNumber.getLastFour()
          : t.__DO_NOT_USE_LAST_FOUR !== void 0
            ? t.__DO_NOT_USE_LAST_FOUR.substring(
                t.__DO_NOT_USE_LAST_FOUR.length - 4,
              )
            : "";
      },
      b = function (t) {
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
      v = function (t) {
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
      S = function (t) {
        if (b(t)) return o("BillingCreditCardTypes").BillingCreditCardTypes.elo;
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
      R = function (t) {
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
      L = function (t) {
        return t.transform_DO_NOT_LOG(function (e) {
          var n = S(t),
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
      E = function (t) {
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
      k = function (t, n) {
        return babelHelpers.extends({}, n, { expiration: E(t) });
      },
      I = function (t, n) {
        return babelHelpers.extends({}, n, { cardNumber: L(t) });
      };
    function T(e, t, n, r) {
      return babelHelpers.extends({}, e, {
        cardNetwork: n,
        lastFour: r,
        paymentMethodID: t,
      });
    }
    function D(e, t, n, r, o, a, i, l, s, u, c, d, m, p, _) {
      return x.apply(this, arguments);
    }
    function x() {
      return (
        (x = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (t, a, i, l, s, u, c, d, m, p, _, f, g, h, C) {
            var b, v, S, R, L, E;
            (f === void 0 && (f = !1),
              g === void 0 && (g = !1),
              h === void 0 && (h = null));
            var k = y((b = t.expiration) != null ? b : ""),
              I = String(k.expirationMonth),
              T = String(k.fullExpirationYear),
              D = t.securityCode,
              x = r("nullthrows")(
                (v = t.cardNumber) == null
                  ? void 0
                  : v.getCleanValue_DO_NOT_USE(),
              ),
              $ = r("nullthrows")(D == null ? void 0 : D.getValue_DO_NOT_USE()),
              P = null,
              N = yield (e || (e = n("Promise"))).all([
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
              M = N[0],
              w = N[1],
              A = o("BillingPTTSharedUtils").generatePTTInputFields($),
              F = A.authDataFields,
              O = A.paymentType,
              B = A.secretPayload,
              W = babelHelpers.extends(
                { credit_card: "$e2ee", expiry_month: I, expiry_year: T },
                F,
              ),
              q =
                B.csc != null
                  ? { credit_card: x, csc: B.csc }
                  : { credit_card: x },
              U = {
                authData: W,
                authInputOperation: f ? "CHARGE" : "ADD_CARD",
                paymentAccountID: a,
                paymentType: O,
                secretPayload: q,
              };
            if (
              ((P = yield o("BillingPTTUtils").generatePTTWithRequirement(
                function () {
                  return o("BillingPTTUtils").generatePTT(
                    U,
                    "save_credit_card",
                    !0,
                    !0,
                    p,
                    m,
                    _,
                    w && !f,
                    M && !f,
                  );
                },
                C,
              )),
              P != null && P !== "")
            ) {
              var V;
              ((x = U.authData.credit_card),
                ($ = (V = U.authData.csc) != null ? V : $));
            }
            var H = {
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
                  t.cardHolderEmail != null && t.cardHolderEmail !== ""
                    ? t.cardHolderEmail
                    : void 0,
                cardholder_name: (S = t.firstName) != null ? S : "",
                cardholder_phone_number:
                  t.cardHolderPhoneNumber != null &&
                  t.cardHolderPhoneNumber !== ""
                    ? t.cardHolderPhoneNumber
                    : void 0,
                credit_card_number: { sensitive_string_value: x },
                csc: { sensitive_string_value: $ },
                expiry_month: I,
                expiry_year: T,
                last_4:
                  (R = (L = t.cardNumber) == null ? void 0 : L.getLastFour()) !=
                  null
                    ? R
                    : "",
              },
              G = {
                country_code: i,
                zip:
                  ((E = t.postalCode) != null ? E : "").length === 0
                    ? void 0
                    : t.postalCode,
              },
              z = yield o("XPlatReactCrypto").isHardwareBackedAvailable();
            return {
              billing_address: G,
              biz_credential_is_sharable:
                t.credentialSharability != null
                  ? t.credentialSharability === "BUSINESS_SHARABLE"
                  : void 0,
              card_data: H,
              client_info: d,
              currency: l,
              intent: o("enumUtils").enumValueToKey(
                u,
                r("pm_capability_PaymentMethodUsabilityIntent"),
              ),
              is_hardware_backed_crypto_available: z,
              network_tokenization_consent_given: t.verifyTokenizationCheckbox,
              payment_account_id: a,
              payment_intent: s,
              platform_trust_token: P != null ? P : "",
              recurring_payment_consent_given: t.verifyRecurringCheckbox,
              set_default: c,
              share_to_child_payment_account_id: h,
              skip_cvv_for_eea_save: g,
              upl_logging_data: babelHelpers.extends(
                {},
                r("BillingWizardRootUPLogger").getLoggingData(
                  "useBillingAddCreditCardMutation",
                ),
                h != null ? { share_to_payment_account_id: h } : {},
              ),
            };
          },
        )),
        x.apply(this, arguments)
      );
    }
    var $ = function (t) {
      return d.test(t) || c.test(t) || u.test(t);
    };
    function P(e) {
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
      (l.validateCardNumber = g),
      (l.validateExpiration = h),
      (l.splitExpirationDate = y),
      (l.getLastFour = C),
      (l.isElo = b),
      (l.getCreditCardTypeFromGraphQLType = v),
      (l.getCreditCardType = S),
      (l.formatCardNumber = L),
      (l.formatExpiration = E),
      (l.onExpirationChange = k),
      (l.onCardNumberChange = I),
      (l.updateCreditCardAfterSave = T),
      (l.buildSaveCardCredentialInput = D),
      (l.formatCardType = P));
  },
  226,
);
