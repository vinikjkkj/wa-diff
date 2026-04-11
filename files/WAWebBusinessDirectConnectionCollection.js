__d(
  "WAWebBusinessDirectConnectionCollection",
  [
    "Promise",
    "WALogger",
    "WANullthrows",
    "WAWebApiDirectConnectionKeys",
    "WAWebBaseCollection",
    "WAWebBizBusinessProfileAction",
    "WAWebBusinessDirectConnectionModel",
    "WAWebBusinessDirectUtils",
    "WAWebDirectConnectionCypher",
    "WAWebDirectConnectionUtils",
    "WAWebPersistedJobDefinitions",
    "WAWebPersistedJobManagerWorkerCompatible",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
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
              function* (e, t, r) {
                if (!r && t != null && t.certificateChain) {
                  var a = yield (d || (d = n("Promise"))).all([
                      o("WAWebBusinessDirectUtils").getValidCertificate(
                        o(
                          "WAWebDirectConnectionUtils",
                        ).stringToCertificateString(t.certificateChain),
                      ),
                      o("WAWebBizBusinessProfileAction").querySignedUserInfo(e),
                    ]),
                    i = a[0],
                    l = a[1];
                  if (i) return { signedUserInfo: l, validCertificate: i };
                }
                var s = yield (d || (d = n("Promise"))).all([
                    o("WAWebBizBusinessProfileAction").querySignedUserInfo(e),
                    o("WAWebBusinessDirectUtils").fetchCertificateFullChain(e),
                  ]),
                  u = s[0],
                  c = s[1],
                  m = c.certificateString,
                  p = c.leafCertificateCommonName;
                if (u.businessDomain !== p)
                  throw new (o(
                    "WAWebBusinessDirectUtils",
                  ).DCCertificateDomainMismatchError)(
                    "[direct-connection] certificate common name does not match business domain",
                  );
                var _ = yield o("WAWebBusinessDirectUtils").getValidCertificate(
                  m,
                );
                return { signedUserInfo: u, validCertificate: _ };
              },
            );
            function t(t, n, r) {
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
                    this._getValidCertAndSignedUserInfo(e, l, !!i),
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
                var g = r("WANullthrows")(
                    yield o("WAWebBusinessDirectUtils").getCypher(
                      _.chain,
                      f.postcode,
                      p,
                      t,
                    ),
                  ),
                  h = g.cypher,
                  y =
                    t ===
                    o("WAWebDirectConnectionCypher").CypherType
                      .PhoneNumberAndPostcode
                      ? p.phoneNumberSignatureExpiration
                      : null,
                  C = o("WAWebDirectConnectionUtils").certificateStringToString(
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
                  l = yield this._getValidCertAndSignedUserInfo(e, a, n),
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
                var d = r("WANullthrows")(
                    yield o("WAWebBusinessDirectUtils").getCypher(
                      u.chain,
                      t,
                      s,
                      i,
                    ),
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
                      b = o(
                        "WAWebDirectConnectionUtils",
                      ).certificateStringToString(u.string),
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
          (i._isCypherInGoodCondition = function (t, n, r, a) {
            return (
              !o("WAWebBusinessDirectUtils").isCypherFromLaunch1(n) &&
              !o("WAWebBusinessDirectUtils").isCypherExpired(n, r) &&
              n === this._getCypherTypeForConversation(t, a)
            );
          }),
          (i._isRowDataInGoodCondition = function (t, n) {
            return this._isCypherInGoodCondition(
              t,
              n.cypherType,
              n.cypherExpirationTimestamp,
              n.postcodeSetByUser === !0,
            );
          }),
          (i._isModelDataInGoodCondition = function (t, n) {
            return this._isCypherInGoodCondition(
              t,
              n.cypherType,
              n.cypherExpirationTimestamp,
              n.postcodeSetByUser === !0,
            );
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
