__d(
  "SignalsDSDIUtils",
  [
    "fbt",
    "SignalsEventDataSchema",
    "SignalsLeadAdsUploadConstants",
    "SignalsNumberNormalizationErrorTypes",
    "SignalsPropDescriptors",
    "SignalsTimestampNormalizationErrorTypes",
    "err",
    "getSignalsSchemaSummary",
    "normalizeSignalsFBIDType",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u = e || (e = o("react")),
      c = r("getSignalsSchemaSummary")(r("SignalsEventDataSchema")),
      d = "match_keys.",
      m = 1,
      p = 0.5,
      _ = 0.15,
      f = 0.08,
      g = 0.3,
      h = 0.7,
      y = s._(
        /*BTDS*/ "Select the customer information you plan to upload with your events.",
      ),
      C = s._(
        /*BTDS*/ "The customer information selected may not allow you to achieve a strong match rate. This could limit your ability to run ads or create audiences using these events.",
      ),
      b = s._(
        /*BTDS*/ "Your events should upload successfully, but you may want to provide additional customer information to improve match rate and performance.",
      ),
      v = s._(/*BTDS*/ "You've selected a good range of customer information."),
      S = s._(
        /*BTDS*/ "Select the event information you plan to upload with your events.",
      ),
      R = s._(
        /*BTDS*/ "The event information selected may stop your events uploading correctly. This could limit your ability to run ads or create audiences using these events.",
      ),
      L = s._(
        /*BTDS*/ "Your events should upload successfully, but you may want to provide more event information to improve match rate and performance.",
      ),
      E = s._(/*BTDS*/ "You've selected a good range of event information."),
      k = s._(
        /*BTDS*/ "Select the product information you plan to upload with your events.",
      ),
      I = s._(
        /*BTDS*/ "The product information selected may stop your events from correctly matching to a Catalog. This could limit your ability to run ads or create audiences using these events.",
      ),
      T = s._(
        /*BTDS*/ "Your events should upload successfully, but you may want to provide more product information to improve the Catalog match rate.",
      ),
      D = s._(/*BTDS*/ "You've selected a good range of product information.");
    function x(e) {
      return e != null && e.startsWith("custom_data.");
    }
    function $(e) {
      return e != null && e.startsWith("contents.");
    }
    function P(e) {
      return e === "match_keys.phone";
    }
    function N(e) {
      return (
        e.infoForNormalization === null ||
        (e.infoForNormalization != null &&
          e.infoForNormalization.alreadyHasPhoneCode === null) ||
        (e.infoForNormalization != null &&
          e.infoForNormalization.alreadyHasPhoneCode === !1 &&
          e.infoForNormalization.countryCode === null)
      );
    }
    var M = [
      "event_time",
      "match_keys.appuid",
      "match_keys.dob",
      "match_keys.extern_id",
      "match_keys.pageuid",
    ];
    function w(e) {
      return (e != null ? M.indexOf(e) : -1) >= 0 || $(e) || x(e) || P(e);
    }
    function A(e) {
      if (e == null) return s._(/*BTDS*/ "Ignored");
      if (x(e)) {
        var t = e.split(".");
        return t[t.length - 1];
      }
      var n = c.keysForSimplePropPaths[e];
      if (n != null) {
        var r = c.schemasForSimplePropsInSchema[n];
        if (r != null) return o("SignalsPropDescriptors").getPropLabel(r);
      }
      return e === "match_keys" ? s._(/*BTDS*/ "Matching identifiers") : e;
    }
    function F(e) {
      return e < 10 ? "0" + e : "" + e;
    }
    function O(e) {
      if (e < 60) return "0:" + F(e);
      if (e < 3600) {
        var t = Math.floor(e / 60),
          n = e % 60;
        return t + ":" + F(n);
      }
      var r = Math.floor(e / 3600),
        o = e % 3600,
        a = Math.floor(o / 60),
        i = o % 60;
      return r + ":" + F(a) + ":" + F(i);
    }
    function B(e, t, n) {
      if (
        t === "value" &&
        n != null &&
        n.errorType === r("SignalsNumberNormalizationErrorTypes").TOO_SMALL
      )
        return s._(
          /*BTDS*/ "We do not accept values that are less than or equal to zero. These events will be skipped during upload.",
        );
      if (t === "event_time" && n != null) {
        if (
          n.errorType ===
          r("SignalsTimestampNormalizationErrorTypes").REJECT_FUTURE
        )
          return s._(
            /*BTDS*/ "We don't accept timestamps that are dated in the future. These events will be skipped during upload. If you are sending booking events, include the purchase or booking time instead of the activity date and time.",
          );
        if (
          n.errorType ===
          r("SignalsTimestampNormalizationErrorTypes").REJECT_TOO_EARLY
        )
          return s._(
            /*BTDS*/ "We don't accept timestamps that occur over 2 years ago. These events will be skipped during upload.",
          );
        if (
          n.errorType ===
          o("SignalsLeadAdsUploadConstants").LEAD_ADS_EVENT_TIME_TOO_OLD_ERROR
        ) {
          var a,
            i = (a = n.maxAgeDays) != null ? a : 7;
          return s._(
            /*BTDS*/ "This event time is older than {max age days} days. We only accept events that occurred within that window \u2014 older events will be rejected on upload.",
            [s._param("max age days", i)],
          );
        }
      }
      if (t === "contents" && n != null) {
        var l = n
          .map(function (e, t) {
            var n = e.missingRequiredProps;
            return n !== null && n.length > 0
              ? u.jsx(
                  "div",
                  { children: t + " => " + n.sort().join(", ") },
                  "invalid_fields_" + t,
                )
              : null;
          })
          .filter(function (e) {
            return e !== null;
          });
        return s._(
          /*BTDS*/ "The data in this field is not formatted properly. Try fixing the following fields for the listed JSON objects: {invalid fields}",
          [s._param("invalid fields", l)],
        );
      }
      return t === "event_name"
        ? s._(
            /*BTDS*/ "Event names can't contain spaces and must be in PascalCase, such as Purchase or AddToCart. These events will be skipped during upload.",
          )
        : t === "match_keys.gen"
          ? s._(
              /*BTDS*/ "We accept gender as a single initial, such as F for female and M for male. These events will be skipped during upload.",
            )
          : s._(
              /*BTDS*/ "The data in this field is not formatted properly. Please review the settings for this field. You may need to use a new version of this file with a valid format.",
            );
    }
    B.displayName = B.name + " [from " + i.id + "]";
    function W(e, t) {
      return {
        columnConfig: e.columnConfig.toArray(),
        delimiter: e.delimiter,
        hasHeader: e.hasHeader,
        namespaceID: t,
        presetValues: e.presetValues,
      };
    }
    function q(e) {
      return e === ""
        ? !0
        : r("normalizeSignalsFBIDType")(e).normalizedValue != null;
    }
    function U(e) {
      var t = e
        .filter(function (e) {
          return e.startsWith(d);
        })
        .toSet()
        .toList()
        .map(function (e) {
          var t = e.replace(d, "");
          switch (t) {
            case "extern_id":
            case "lead_id":
              return m;
            case "email":
            case "phone":
            case "madid":
              return p;
            case "fn":
            case "ln":
            case "postal_code":
            case "dob":
              return _;
            default:
              return f;
          }
        })
        .reduce(function (e, t) {
          return e * (1 - t);
        }, 1);
      return 1 - t;
    }
    function V(e) {
      var t = U(e);
      return t >= h ? "STRONG" : t >= g ? "MEDIUM" : t > 0 ? "WEAK" : "NONE";
    }
    function H(e) {
      switch (e) {
        case "NONE":
          return y;
        case "WEAK":
          return C;
        case "MEDIUM":
          return b;
        case "STRONG":
          return v;
        default:
          throw r("err")("Invalid strength value: " + e);
      }
    }
    function G(e) {
      switch (e) {
        case "NONE":
          return S;
        case "WEAK":
          return R;
        case "MEDIUM":
          return L;
        case "STRONG":
          return E;
        default:
          throw r("err")("Invalid strength value: " + e);
      }
    }
    function z(e) {
      switch (e) {
        case "NONE":
          return k;
        case "WEAK":
          return I;
        case "MEDIUM":
          return T;
        case "STRONG":
          return D;
        default:
          throw r("err")("Invalid strength value: " + e);
      }
    }
    ((l.isCustomDataMapping = x),
      (l.needPhoneCountryCodeMapping = N),
      (l.needsSecondStep = w),
      (l.getFbtForMapping = A),
      (l.formatTimeDuration = O),
      (l.getFbtForValueError = B),
      (l.configToJSON = W),
      (l.isNamespaceIDValid = q),
      (l.getCustomerInformationStrength = U),
      (l.getCustomerInformationStrengthEnum = V),
      (l.getCustomerInformationSectionStrengthText = H),
      (l.getEventInformationSectionStrengthText = G),
      (l.getProductInformationSectionStrengthText = z));
  },
  226,
);
