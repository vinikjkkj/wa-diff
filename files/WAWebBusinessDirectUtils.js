__d(
  "WAWebBusinessDirectUtils",
  [
    "WAArraysShallowEqual",
    "WACustomError",
    "WANullthrows",
    "WAWeb-moment",
    "WAWebBackendErrors",
    "WAWebBizBusinessProfileAction",
    "WAWebBusinessProfileCollection",
    "WAWebBusinessProfileVersioningBridge",
    "WAWebChatCollection",
    "WAWebDirectConnectionCypher",
    "WAWebDirectConnectionGatingUtils",
    "WAWebDirectConnectionUtils",
    "WAWebDirectConnectionX509",
    "WAWebServerPropConstants",
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    var e = "YYYYMMDDTHHmmssZ",
      s = (function (e) {
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
    function u(t, n, a) {
      if (
        (a === void 0 && (a = r("WAWeb-moment")()),
        t !==
          o("WAWebDirectConnectionCypher").CypherType.PhoneNumberAndPostcode)
      )
        return !1;
      if (n == null) return !0;
      var i = r("WAWeb-moment")(n, e),
        l = !(i.isValid() && i.isAfter(a));
      return l;
    }
    function c(e) {
      return !e;
    }
    async function d(e) {
      var t = await o("WAWebDirectConnectionX509").extractCertificates(
          o("WAWebDirectConnectionUtils").certificateStringToString(e),
        ),
        n = await o("WAWebDirectConnectionX509").validateCertificates(
          t.slice(1, -1),
          t.slice(-1),
        ),
        r = n.result;
      return r ? { string: e, chain: t } : null;
    }
    function m(e, t, n) {
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
    function p(e) {
      var t = e.cypherType,
        n = e.extractedCertificates,
        r = e.postcode,
        a = e.userInfo,
        i = m(t, r, a);
      return o("WAWebDirectConnectionCypher").genCypher(n[0], i);
    }
    async function _(e) {
      var t,
        n = await Promise.all([
          o("WAWebBizBusinessProfileAction").queryBusinessPublicKey(e),
          o("WAWebDirectConnectionX509").fetchFromCABundle(),
        ]),
        a = n[0].certificate,
        i = n[1];
      if (a == null)
        throw r("err")(
          "[direct-connection] no certificate returned from the get_public_key IQ",
        );
      var l = await o("WAWebDirectConnectionX509").extractCertificates(
          o("WAWebDirectConnectionUtils").certificateStringToString(a),
        ),
        s =
          l.length > 0
            ? (t = l[0].subject.typesAndValues.find(function (e) {
                return e.type === "2.5.4.3";
              })) == null
              ? void 0
              : t.value.valueBlock.value
            : null,
        u = r("WANullthrows")(
          await o("WAWebDirectConnectionX509").genRootIssuers(l, i),
        );
      return {
        certificateString: o("WAWebDirectConnectionX509").encodeToString(
          [].concat(l, u),
        ),
        leafCertificateCommonName: s,
      };
    }
    async function f(e) {
      var t;
      return !!(
        o("WAWebDirectConnectionGatingUtils").supportsDirectConnection() &&
        o("WAWebChatCollection").ChatCollection.get(e) != null &&
        (t = await o(
          "WAWebBusinessProfileCollection",
        ).BusinessProfileCollection.find(e)) != null &&
        t.isBusinessDirectConnection()
      );
    }
    function g(e) {
      var t = o("WAWebChatCollection").ChatCollection.get(e);
      return !!t && t.hasMaybeSentMsgToChat();
    }
    function h(e) {
      var t, n;
      return (
        ((t = e.directConnection) == null ? void 0 : t.enabled) === !0 &&
        typeof ((n = e.directConnection.defaultPostcode) == null
          ? void 0
          : n.code) == "string"
      );
    }
    async function y(e) {
      var t,
        n = await o(
          "WAWebBusinessProfileCollection",
        ).BusinessProfileCollection.find(e);
      if (
        (t = n.directConnection) != null &&
        t.enabled &&
        n.directConnection.defaultPostcode
      )
        return {
          postcode: n.directConnection.defaultPostcode.code,
          postcodeLocationName: n.directConnection.defaultPostcode.locationName,
        };
    }
    var C = 421;
    function b(e) {
      return (
        e instanceof o("WAWebBackendErrors").ServerStatusCodeError &&
        e.statusCode === C
      );
    }
    function v(e, t) {
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
    function S(e, t) {
      return e != null && !r("WAArraysShallowEqual")(e, t);
    }
    ((l.timestampFormat = e),
      (l.DCCertificateDomainMismatchError = s),
      (l.isCypherExpired = u),
      (l.isCypherFromLaunch1 = c),
      (l.getValidCertificate = d),
      (l.getCypher = p),
      (l.fetchCertificateFullChain = _),
      (l.isCypherNeeded = f),
      (l.userHasSentMessageToBusiness = g),
      (l.businessSupportsPostcode = h),
      (l.fetchDefaultPostcode = y),
      (l.errorIsDirectConnectionCypherError421 = b),
      (l.isDirectConnectionFlagChanged = v),
      (l.isDirectConnectionNumbersAbPropChanged = S));
  },
  98,
);
