__d(
  "WAWebBusinessDirectConnectionCollection",
  [
    "Promise",
    "WALogger",
    "WAWebApiDirectConnectionKeys",
    "WAWebBaseCollection",
    "WAWebBizBusinessProfileAction",
    "WAWebBusinessDirectConnectionModel",
    "WAWebBusinessDirectUtils",
    "WAWebCertificateString",
    "WAWebDirectConnectionCypher",
    "WAWebPersistedJobDefinitions",
    "WAWebPersistedJobManagerWorkerCompatible",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
    "nullthrows",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c,
      d,
      m = (function (t) {
        function a() {
          return t.apply(this, arguments) || this;
        }
        babelHelpers.inheritsLoose(a, t);
        var i = a.prototype;
        return (
          (i._getValidCertAndSignedUserInfo = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e) {
                var t = e.forceRenew,
                  r = e.id,
                  a = e.rowData;
                if (!t && a != null && a.certificateChain) {
                  var i = yield (d || (d = n("Promise"))).all([
                      o("WAWebBusinessDirectUtils").getValidCertificate(
                        o("WAWebCertificateString").stringToCertificateString(
                          a.certificateChain,
                        ),
                      ),
                      o("WAWebBizBusinessProfileAction").querySignedUserInfo(r),
                    ]),
                    l = i[0],
                    s = i[1];
                  if (l) return { signedUserInfo: s, validCertificate: l };
                }
                var u = yield (d || (d = n("Promise"))).all([
                    o("WAWebBizBusinessProfileAction").querySignedUserInfo(r),
                    o("WAWebBusinessDirectUtils").fetchCertificateFullChain(r),
                  ]),
                  c = u[0],
                  m = u[1],
                  p = m.certificateString,
                  _ = m.leafCertificateCommonName;
                if (c.businessDomain !== _)
                  throw new (o(
                    "WAWebBusinessDirectUtils",
                  ).DCCertificateDomainMismatchError)(
                    "[direct-connection] certificate common name does not match business domain",
                  );
                var f = yield o("WAWebBusinessDirectUtils").getValidCertificate(
                  p,
                );
                return { signedUserInfo: c, validCertificate: f };
              },
            );
            function t(t) {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          (i._getCypherTypeForConversation = function (t, n) {
            return o("WAWebBusinessDirectUtils").userHasSentMessageToBusiness(
              t,
            ) || n
              ? o("WAWebDirectConnectionCypher").CypherType
                  .PhoneNumberAndPostcode
              : o("WAWebDirectConnectionCypher").CypherType.Postcode;
          }),
          (i._fetchPostcode = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e, t) {
                if (
                  typeof (t == null ? void 0 : t.postcode) == "string" &&
                  t.postcodeSetByUser === !0
                ) {
                  var n;
                  return {
                    postcode: t.postcode,
                    postcodeSetByUser: t.postcodeSetByUser,
                    postcodeLocationName:
                      (n = t.postcodeLocationName) != null ? n : "",
                  };
                }
                var r = yield o(
                  "WAWebBusinessDirectUtils",
                ).fetchDefaultPostcode(e);
                if (r)
                  return babelHelpers.extends({}, r, { postcodeSetByUser: !1 });
              },
            );
            function t(t, n) {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          (i._getCypherFromDborApi = (function () {
            var t = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (t, n) {
                n === void 0 && (n = !1);
                var r = yield o(
                  "WAWebApiDirectConnectionKeys",
                ).fetchDirectConnectionKeys(t.toJid());
                if (!n && r && this._isRowDataInGoodCondition(t, r))
                  return {
                    id: t,
                    cypher: o(
                      "WAWebDirectConnectionCypher",
                    ).stringToCypherString(r.cypher),
                    cypherExpirationTimestamp: r.cypherExpirationTimestamp,
                    cypherType: r.cypherType,
                    certificateChain: r.certificateChain,
                    postcode: r.postcode,
                    postcodeSetByUser: r.postcodeSetByUser,
                    postcodeLocationName: r.postcodeLocationName,
                  };
                var a = this._getCypherTypeForConversation(
                    t,
                    typeof (r == null ? void 0 : r.postcode) == "string" &&
                      r.postcodeSetByUser === !0,
                  ),
                  i = yield this.genNewCypher(t, a, {
                    rowData: r,
                    forceRenew: n,
                  });
                return i == null
                  ? (o("WALogger").ERROR(
                      e ||
                        (e = babelHelpers.taggedTemplateLiteralLoose([
                          "[direct-connection] Cannot generate cypher",
                        ])),
                    ),
                    null)
                  : (yield o(
                      "WAWebApiDirectConnectionKeys",
                    ).createOrUpdateDirectConnectionKeys(
                      babelHelpers.extends({}, i, {
                        id: t.toJid(),
                        cypher: o(
                          "WAWebDirectConnectionCypher",
                        ).cypherStringToString(i.cypher),
                      }),
                    ),
                    i);
              },
            );
            function r(e, n) {
              return t.apply(this, arguments);
            }
            return r;
          })()),
          (i._verifyPostcode = function (t, n) {
            return o("WAWebPersistedJobManagerWorkerCompatible")
              .getJobManager()
              .waitUntilCompleted(
                o("WAWebPersistedJobDefinitions").jobSerializers.verifyPostcode(
                  t,
                  n,
                ),
              );
          }),
          (i._updateModel = function (t) {
            return this.set([t]);
          }),
          (i.genNewCypher = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e, t, a) {
                var i = a.forceRenew,
                  l = a.rowData,
                  c = yield (d || (d = n("Promise"))).all([
                    this._getValidCertAndSignedUserInfo({
                      forceRenew: !!i,
                      id: e,
                      rowData: l,
                    }),
                    this._fetchPostcode(e, l),
                  ]),
                  m = c[0],
                  p = m.signedUserInfo,
                  _ = m.validCertificate,
                  f = c[1];
                if (_ == null)
                  return (
                    o("WALogger").WARN(
                      s ||
                        (s = babelHelpers.taggedTemplateLiteralLoose([
                          "[direct-connection] no cert from get_public_key IQ",
                        ])),
                    ),
                    null
                  );
                if (f == null)
                  return (
                    o("WALogger").WARN(
                      u ||
                        (u = babelHelpers.taggedTemplateLiteralLoose([
                          "[direct-connection] Post code data could not be found",
                        ])),
                    ),
                    null
                  );
                var g = r("nullthrows")(
                    yield o("WAWebBusinessDirectUtils").getCypher({
                      cypherType: t,
                      extractedCertificates: _.chain,
                      postcode: f.postcode,
                      userInfo: p,
                    }),
                  ),
                  h = g.cypher,
                  y =
                    t ===
                    o("WAWebDirectConnectionCypher").CypherType
                      .PhoneNumberAndPostcode
                      ? p.phoneNumberSignatureExpiration
                      : null,
                  C = o("WAWebCertificateString").certificateStringToString(
                    _.string,
                  );
                return {
                  id: e,
                  cypher: h,
                  cypherExpirationTimestamp: y,
                  cypherType: t,
                  certificateChain: C,
                  postcode: f.postcode,
                  postcodeSetByUser: f.postcodeSetByUser,
                  postcodeLocationName: f.postcodeLocationName,
                };
              },
            );
            function t(t, n, r) {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          (i.verifyAndSavePostcode = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e, t, n) {
                n === void 0 && (n = !1);
                var a = yield o(
                    "WAWebApiDirectConnectionKeys",
                  ).fetchDirectConnectionKeys(e.toJid()),
                  i = o("WAWebDirectConnectionCypher").CypherType
                    .PhoneNumberAndPostcode,
                  l = yield this._getValidCertAndSignedUserInfo({
                    forceRenew: n,
                    id: e,
                    rowData: a,
                  }),
                  s = l.signedUserInfo,
                  u = l.validCertificate;
                if (u == null)
                  return (
                    o("WALogger").WARN(
                      c ||
                        (c = babelHelpers.taggedTemplateLiteralLoose([
                          "[direct-connection] cert null in verify postcode",
                        ])),
                    ),
                    null
                  );
                var d = r("nullthrows")(
                    yield o("WAWebBusinessDirectUtils").getCypher({
                      cypherType: i,
                      extractedCertificates: u.chain,
                      postcode: t,
                      userInfo: s,
                    }),
                  ),
                  m = d.cypher,
                  p = d.exportedAesKey,
                  _ = d.iv,
                  f =
                    i ===
                    o("WAWebDirectConnectionCypher").CypherType
                      .PhoneNumberAndPostcode
                      ? s.phoneNumberSignatureExpiration
                      : null;
                try {
                  var g = yield this._verifyPostcode(e, m),
                    h = g.encryptedLocationName,
                    y = g.resultCode;
                  if (y === "success" && typeof h == "string") {
                    var C = yield o(
                        "WAWebDirectConnectionCypher",
                      ).decryptDataWithSymmetricKeyToString(p, h, _),
                      b = o("WAWebCertificateString").certificateStringToString(
                        u.string,
                      ),
                      v = {
                        cypherExpirationTimestamp: f,
                        certificateChain: b,
                        cypherType: i,
                        postcode: t,
                        postcodeSetByUser: !0,
                        postcodeLocationName: C,
                      };
                    return (
                      yield o(
                        "WAWebApiDirectConnectionKeys",
                      ).createOrUpdateDirectConnectionKeys(
                        babelHelpers.extends(
                          {
                            id: e.toJid(),
                            cypher: o(
                              "WAWebDirectConnectionCypher",
                            ).cypherStringToString(m),
                          },
                          v,
                        ),
                      ),
                      this._updateModel(
                        babelHelpers.extends({ id: e, cypher: m }, v),
                      ),
                      { resultCode: y, decryptedLocationName: C }
                    );
                  }
                  return { resultCode: y };
                } catch (n) {
                  if (
                    n instanceof Error &&
                    o(
                      "WAWebBusinessDirectUtils",
                    ).errorIsDirectConnectionCypherError421(n)
                  )
                    return this.verifyAndSavePostcode(e, t, !0);
                  throw r("getErrorSafe")(n);
                }
              },
            );
            function t(t, n, r) {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          (i.removeCypher = function (t) {
            var e = this.get(t);
            return e
              ? (this.remove(e),
                o("WAWebApiDirectConnectionKeys").removeDirectConnectionKeys(
                  t.toJid(),
                ))
              : (d || (d = n("Promise"))).resolve();
          }),
          (i._isCypherInGoodCondition = function (t) {
            var e = t.cypherExpirationTimestamp,
              n = t.cypherType,
              r = t.id,
              a = t.postcodeSetByUser;
            return (
              !o("WAWebBusinessDirectUtils").isCypherFromLaunch1(n) &&
              !o("WAWebBusinessDirectUtils").isCypherExpired(n, e) &&
              n === this._getCypherTypeForConversation(r, a)
            );
          }),
          (i._isRowDataInGoodCondition = function (t, n) {
            return this._isCypherInGoodCondition({
              cypherExpirationTimestamp: n.cypherExpirationTimestamp,
              cypherType: n.cypherType,
              id: t,
              postcodeSetByUser: n.postcodeSetByUser === !0,
            });
          }),
          (i._isModelDataInGoodCondition = function (t, n) {
            return this._isCypherInGoodCondition({
              cypherExpirationTimestamp: n.cypherExpirationTimestamp,
              cypherType: n.cypherType,
              id: t,
              postcodeSetByUser: n.postcodeSetByUser === !0,
            });
          }),
          (i.getCypher = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e, t) {
                var n = t === void 0 ? {} : t,
                  r = n.forceRenew,
                  o = r === void 0 ? !1 : r,
                  a = o ? null : this.get(e);
                return !a || !this._isModelDataInGoodCondition(e, a)
                  ? [].concat(
                      yield this.update(e, { forceRenewDirectConnection: o }),
                    )[0]
                  : a;
              },
            );
            function t(t, n) {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          (i.findImpl = function (t) {
            return this._getCypherFromDborApi(t);
          }),
          (i._update = function (t, n) {
            var e = n.forceRenewDirectConnection;
            return this._getCypherFromDborApi(t, e);
          }),
          a
        );
      })(o("WAWebBaseCollection").BaseCollection);
    m.model = r("WAWebBusinessDirectConnectionModel");
    var p = new m();
    l.default = p;
  },
  98,
);
