__d(
  "WAWebBusinessDirectConnectionCollection",
  [
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
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c,
      d = (function (t) {
        function n() {
          return t.apply(this, arguments) || this;
        }
        babelHelpers.inheritsLoose(n, t);
        var a = n.prototype;
        return (
          (a._getValidCertAndSignedUserInfo = async function (t) {
            var e = t.forceRenew,
              n = t.id,
              r = t.rowData;
            if (!e && r != null && r.certificateChain) {
              var a = await Promise.all([
                  o("WAWebBusinessDirectUtils").getValidCertificate(
                    o("WAWebDirectConnectionUtils").stringToCertificateString(
                      r.certificateChain,
                    ),
                  ),
                  o("WAWebBizBusinessProfileAction").querySignedUserInfo(n),
                ]),
                i = a[0],
                l = a[1];
              if (i) return { signedUserInfo: l, validCertificate: i };
            }
            var s = await Promise.all([
                o("WAWebBizBusinessProfileAction").querySignedUserInfo(n),
                o("WAWebBusinessDirectUtils").fetchCertificateFullChain(n),
              ]),
              u = s[0],
              c = s[1],
              d = c.certificateString,
              m = c.leafCertificateCommonName;
            if (u.businessDomain !== m)
              throw new (o(
                "WAWebBusinessDirectUtils",
              ).DCCertificateDomainMismatchError)(
                "[direct-connection] certificate common name does not match business domain",
              );
            var p = await o("WAWebBusinessDirectUtils").getValidCertificate(d);
            return { signedUserInfo: u, validCertificate: p };
          }),
          (a._getCypherTypeForConversation = function (t, n) {
            return o("WAWebBusinessDirectUtils").userHasSentMessageToBusiness(
              t,
            ) || n
              ? o("WAWebDirectConnectionCypher").CypherType
                  .PhoneNumberAndPostcode
              : o("WAWebDirectConnectionCypher").CypherType.Postcode;
          }),
          (a._fetchPostcode = async function (t, n) {
            if (
              typeof (n == null ? void 0 : n.postcode) == "string" &&
              n.postcodeSetByUser === !0
            ) {
              var e;
              return {
                postcode: n.postcode,
                postcodeSetByUser: n.postcodeSetByUser,
                postcodeLocationName:
                  (e = n.postcodeLocationName) != null ? e : "",
              };
            }
            var r = await o("WAWebBusinessDirectUtils").fetchDefaultPostcode(t);
            if (r)
              return babelHelpers.extends({}, r, { postcodeSetByUser: !1 });
          }),
          (a._getCypherFromDborApi = async function (n, r) {
            r === void 0 && (r = !1);
            var t = await o(
              "WAWebApiDirectConnectionKeys",
            ).fetchDirectConnectionKeys(n.toJid());
            if (!r && t && this._isRowDataInGoodCondition(n, t))
              return {
                id: n,
                cypher: o("WAWebDirectConnectionCypher").stringToCypherString(
                  t.cypher,
                ),
                cypherExpirationTimestamp: t.cypherExpirationTimestamp,
                cypherType: t.cypherType,
                certificateChain: t.certificateChain,
                postcode: t.postcode,
                postcodeSetByUser: t.postcodeSetByUser,
                postcodeLocationName: t.postcodeLocationName,
              };
            var a = this._getCypherTypeForConversation(
                n,
                typeof (t == null ? void 0 : t.postcode) == "string" &&
                  t.postcodeSetByUser === !0,
              ),
              i = await this.genNewCypher(n, a, { rowData: t, forceRenew: r });
            return i == null
              ? (o("WALogger").ERROR(
                  e ||
                    (e = babelHelpers.taggedTemplateLiteralLoose([
                      "[direct-connection] Cannot generate cypher",
                    ])),
                ),
                null)
              : (await o(
                  "WAWebApiDirectConnectionKeys",
                ).createOrUpdateDirectConnectionKeys(
                  babelHelpers.extends({}, i, {
                    id: n.toJid(),
                    cypher: o(
                      "WAWebDirectConnectionCypher",
                    ).cypherStringToString(i.cypher),
                  }),
                ),
                i);
          }),
          (a._verifyPostcode = function (t, n) {
            return o("WAWebPersistedJobManagerWorkerCompatible")
              .getJobManager()
              .waitUntilCompleted(
                o("WAWebPersistedJobDefinitions").jobSerializers.verifyPostcode(
                  t,
                  n,
                ),
              );
          }),
          (a._updateModel = function (t) {
            return this.set([t]);
          }),
          (a.genNewCypher = async function (t, n, a) {
            var e = a.forceRenew,
              i = a.rowData,
              l = await Promise.all([
                this._getValidCertAndSignedUserInfo({
                  forceRenew: !!e,
                  id: t,
                  rowData: i,
                }),
                this._fetchPostcode(t, i),
              ]),
              c = l[0],
              d = c.signedUserInfo,
              m = c.validCertificate,
              p = l[1];
            if (m == null)
              return (
                o("WALogger").WARN(
                  s ||
                    (s = babelHelpers.taggedTemplateLiteralLoose([
                      "[direct-connection] no cert from get_public_key IQ",
                    ])),
                ),
                null
              );
            if (p == null)
              return (
                o("WALogger").WARN(
                  u ||
                    (u = babelHelpers.taggedTemplateLiteralLoose([
                      "[direct-connection] Post code data could not be found",
                    ])),
                ),
                null
              );
            var _ = r("WANullthrows")(
                await o("WAWebBusinessDirectUtils").getCypher({
                  cypherType: n,
                  extractedCertificates: m.chain,
                  postcode: p.postcode,
                  userInfo: d,
                }),
              ),
              f = _.cypher,
              g =
                n ===
                o("WAWebDirectConnectionCypher").CypherType
                  .PhoneNumberAndPostcode
                  ? d.phoneNumberSignatureExpiration
                  : null,
              h = o("WAWebDirectConnectionUtils").certificateStringToString(
                m.string,
              );
            return {
              id: t,
              cypher: f,
              cypherExpirationTimestamp: g,
              cypherType: n,
              certificateChain: h,
              postcode: p.postcode,
              postcodeSetByUser: p.postcodeSetByUser,
              postcodeLocationName: p.postcodeLocationName,
            };
          }),
          (a.verifyAndSavePostcode = async function (t, n, a) {
            a === void 0 && (a = !1);
            var e = await o(
                "WAWebApiDirectConnectionKeys",
              ).fetchDirectConnectionKeys(t.toJid()),
              i = o("WAWebDirectConnectionCypher").CypherType
                .PhoneNumberAndPostcode,
              l = await this._getValidCertAndSignedUserInfo({
                forceRenew: a,
                id: t,
                rowData: e,
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
            var d = r("WANullthrows")(
                await o("WAWebBusinessDirectUtils").getCypher({
                  cypherType: i,
                  extractedCertificates: u.chain,
                  postcode: n,
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
              var g = await this._verifyPostcode(t, m),
                h = g.encryptedLocationName,
                y = g.resultCode;
              if (y === "success" && typeof h == "string") {
                var C = await o(
                    "WAWebDirectConnectionCypher",
                  ).decryptDataWithSymmetricKeyToString(p, h, _),
                  b = o("WAWebDirectConnectionUtils").certificateStringToString(
                    u.string,
                  ),
                  v = {
                    cypherExpirationTimestamp: f,
                    certificateChain: b,
                    cypherType: i,
                    postcode: n,
                    postcodeSetByUser: !0,
                    postcodeLocationName: C,
                  };
                return (
                  await o(
                    "WAWebApiDirectConnectionKeys",
                  ).createOrUpdateDirectConnectionKeys(
                    babelHelpers.extends(
                      {
                        id: t.toJid(),
                        cypher: o(
                          "WAWebDirectConnectionCypher",
                        ).cypherStringToString(m),
                      },
                      v,
                    ),
                  ),
                  this._updateModel(
                    babelHelpers.extends({ id: t, cypher: m }, v),
                  ),
                  { resultCode: y, decryptedLocationName: C }
                );
              }
              return { resultCode: y };
            } catch (e) {
              if (
                e instanceof Error &&
                o(
                  "WAWebBusinessDirectUtils",
                ).errorIsDirectConnectionCypherError421(e)
              )
                return this.verifyAndSavePostcode(t, n, !0);
              throw r("getErrorSafe")(e);
            }
          }),
          (a.removeCypher = function (t) {
            var e = this.get(t);
            return e
              ? (this.remove(e),
                o("WAWebApiDirectConnectionKeys").removeDirectConnectionKeys(
                  t.toJid(),
                ))
              : Promise.resolve();
          }),
          (a._isCypherInGoodCondition = function (t, n, r, a) {
            return (
              !o("WAWebBusinessDirectUtils").isCypherFromLaunch1(n) &&
              !o("WAWebBusinessDirectUtils").isCypherExpired(n, r) &&
              n === this._getCypherTypeForConversation(t, a)
            );
          }),
          (a._isRowDataInGoodCondition = function (t, n) {
            return this._isCypherInGoodCondition(
              t,
              n.cypherType,
              n.cypherExpirationTimestamp,
              n.postcodeSetByUser === !0,
            );
          }),
          (a._isModelDataInGoodCondition = function (t, n) {
            return this._isCypherInGoodCondition(
              t,
              n.cypherType,
              n.cypherExpirationTimestamp,
              n.postcodeSetByUser === !0,
            );
          }),
          (a.getCypher = async function (t, n) {
            var e = n === void 0 ? {} : n,
              r = e.forceRenew,
              o = r === void 0 ? !1 : r,
              a = o ? null : this.get(t);
            return !a || !this._isModelDataInGoodCondition(t, a)
              ? [].concat(
                  await this.update(t, { forceRenewDirectConnection: o }),
                )[0]
              : a;
          }),
          (a.findImpl = function (t) {
            return this._getCypherFromDborApi(t);
          }),
          (a._update = function (t, n) {
            var e = n.forceRenewDirectConnection;
            return this._getCypherFromDborApi(t, e);
          }),
          n
        );
      })(o("WAWebBaseCollection").BaseCollection);
    d.model = r("WAWebBusinessDirectConnectionModel");
    var m = new d();
    l.default = m;
  },
  98,
);
