__d(
  "WAWebBusinessDirectUtils",
  [
    "Promise",
    "WAArraysShallowEqual",
    "WACustomError",
    "WAWeb-moment",
    "WAWebBackendErrors",
    "WAWebBizBusinessProfileAction",
    "WAWebBusinessProfileCollection",
    "WAWebBusinessProfileVersioningBridge",
    "WAWebCertificateString",
    "WAWebChatCollection",
    "WAWebDirectConnectionCypher",
    "WAWebDirectConnectionGatingUtils",
    "WAWebServerPropConstants",
    "WAWebX509Utils",
    "asyncToGeneratorRuntime",
    "err",
    "nullthrows",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = "YYYYMMDDTHHmmssZ",
      u = (function (e) {
        function t(t) {
          var n;
          return (
            (n = e.call(this, t != null ? t : "") || this),
            (n.name = "DCCertificateDomainMismatchError"),
            n
          );
        }
        return (babelHelpers.inheritsLoose(t, e), t);
      })(o("WACustomError").CustomError);
    function c(e, t, n) {
      if (
        (n === void 0 && (n = r("WAWeb-moment")()),
        e !==
          o("WAWebDirectConnectionCypher").CypherType.PhoneNumberAndPostcode)
      )
        return !1;
      if (t == null) return !0;
      var a = r("WAWeb-moment")(t, s),
        i = !(a.isValid() && a.isAfter(n));
      return i;
    }
    function d(e) {
      return !e;
    }
    function m(e) {
      return p.apply(this, arguments);
    }
    function p() {
      return (
        (p = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = yield o("WAWebX509Utils").extractCertificates(
              o("WAWebCertificateString").certificateStringToString(e),
            ),
            n = yield o("WAWebX509Utils").validateCertificates(
              t.slice(1, -1),
              t.slice(-1),
            ),
            r = n.result;
          return r ? { string: e, chain: t } : null;
        })),
        p.apply(this, arguments)
      );
    }
    function _(e, t, n) {
      switch (e) {
        case o("WAWebDirectConnectionCypher").CypherType.PhoneNumberAndPostcode:
          return {
            postcode: t,
            phone_number: n.phoneNumber,
            ttl_timestamp: n.phoneNumberSignatureExpiration,
            phone_number_signature: n.phoneNumberSignature,
          };
        case o("WAWebDirectConnectionCypher").CypherType.Postcode:
          return { postcode: t };
      }
    }
    function f(e) {
      var t = e.cypherType,
        n = e.extractedCertificates,
        r = e.postcode,
        a = e.userInfo,
        i = _(t, r, a);
      return o("WAWebDirectConnectionCypher").genCypher(n[0], i);
    }
    function g(e) {
      return h.apply(this, arguments);
    }
    function h() {
      return (
        (h = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          var a,
            i = yield (e || (e = n("Promise"))).all([
              o("WAWebBizBusinessProfileAction").queryBusinessPublicKey(t),
              o("WAWebX509Utils").fetchFromCABundle(),
            ]),
            l = i[0].certificate,
            s = i[1];
          if (l == null)
            throw r("err")(
              "[direct-connection] no certificate returned from the get_public_key IQ",
            );
          var u = yield o("WAWebX509Utils").extractCertificates(
              o("WAWebCertificateString").certificateStringToString(l),
            ),
            c =
              u.length > 0
                ? (a = u[0].subject.typesAndValues.find(function (e) {
                    return e.type === "2.5.4.3";
                  })) == null
                  ? void 0
                  : a.value.valueBlock.value
                : null,
            d = r("nullthrows")(yield o("WAWebX509Utils").genRootIssuers(u, s));
          return {
            certificateString: o("WAWebX509Utils").encodeToString(
              [].concat(u, d),
            ),
            leafCertificateCommonName: c,
          };
        })),
        h.apply(this, arguments)
      );
    }
    function y(e) {
      return C.apply(this, arguments);
    }
    function C() {
      return (
        (C = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t;
          return !!(
            o("WAWebDirectConnectionGatingUtils").supportsDirectConnection() &&
            o("WAWebChatCollection").ChatCollection.get(e) != null &&
            (t = yield o(
              "WAWebBusinessProfileCollection",
            ).BusinessProfileCollection.find(e)) != null &&
            t.isBusinessDirectConnection()
          );
        })),
        C.apply(this, arguments)
      );
    }
    function b(e) {
      var t = o("WAWebChatCollection").ChatCollection.get(e);
      return !!t && t.hasMaybeSentMsgToChat();
    }
    function v(e) {
      var t, n;
      return (
        ((t = e.directConnection) == null ? void 0 : t.enabled) === !0 &&
        typeof ((n = e.directConnection.defaultPostcode) == null
          ? void 0
          : n.code) == "string"
      );
    }
    function S(e) {
      return R.apply(this, arguments);
    }
    function R() {
      return (
        (R = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t,
            n = yield o(
              "WAWebBusinessProfileCollection",
            ).BusinessProfileCollection.find(e);
          if (
            (t = n.directConnection) != null &&
            t.enabled &&
            n.directConnection.defaultPostcode
          )
            return {
              postcode: n.directConnection.defaultPostcode.code,
              postcodeLocationName:
                n.directConnection.defaultPostcode.locationName,
            };
        })),
        R.apply(this, arguments)
      );
    }
    var L = 421;
    function E(e) {
      return (
        e instanceof o("WAWebBackendErrors").ServerStatusCodeError &&
        e.statusCode === L
      );
    }
    function k(e, t) {
      if (
        e ===
        o("WAWebServerPropConstants")
          .UNINITIALIZED_VALUE_WEB_BIZ_PROFILE_OPTIONS
      )
        return !1;
      var n =
          (o(
            "WAWebBusinessProfileVersioningBridge",
          ).getBusinessProfileQueryVersionWithCustomBizProfileOptions(e) &
            o("WAWebBusinessProfileVersioningBridge").DIRECT_CONNECTION_FLAG) >
          0,
        r =
          (o(
            "WAWebBusinessProfileVersioningBridge",
          ).getBusinessProfileQueryVersionWithCustomBizProfileOptions(t) &
            o("WAWebBusinessProfileVersioningBridge").DIRECT_CONNECTION_FLAG) >
          0;
      return n !== r;
    }
    function I(e, t) {
      return e != null && !r("WAArraysShallowEqual")(e, t);
    }
    ((l.timestampFormat = s),
      (l.DCCertificateDomainMismatchError = u),
      (l.isCypherExpired = c),
      (l.isCypherFromLaunch1 = d),
      (l.getValidCertificate = m),
      (l.getCypher = f),
      (l.fetchCertificateFullChain = g),
      (l.isCypherNeeded = y),
      (l.userHasSentMessageToBusiness = b),
      (l.businessSupportsPostcode = v),
      (l.fetchDefaultPostcode = S),
      (l.errorIsDirectConnectionCypherError421 = E),
      (l.isDirectConnectionFlagChanged = k),
      (l.isDirectConnectionNumbersAbPropChanged = I));
  },
  98,
);
