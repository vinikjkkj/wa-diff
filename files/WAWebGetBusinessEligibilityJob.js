__d(
  "WAWebGetBusinessEligibilityJob",
  [
    "WALogger",
    "WASmaxBizMarketingMessageGetBusinessEligibilityRPC",
    "WAWebBackendErrors",
    "WAWebBizBroadcastGenAIEligibilityModel",
    "WAWebBizBroadcastGenAIGating",
    "WAWebBizBroadcastMarketingMessagesEligibilityModel",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u, c, d, m, p, _, f, g;
    function h(e) {
      var t = {};
      if (e.genai != null) {
        var n = e.genai.status;
        t.genai = { status: n };
      }
      if (e.metaVerified != null) {
        var r = e.metaVerified,
          o = r.shouldShowPrivacyInterstitialToNewUsers,
          a = r.status;
        t.metaVerified = babelHelpers.extends(
          {},
          o != null && {
            shouldShowPrivacyInterstitialToNewUsers: o === "true",
          },
          { status: a },
        );
      }
      if (e.marketingMessages != null) {
        var i = e.marketingMessages,
          l = i.expiration,
          s = i.status;
        t.marketingMessages = babelHelpers.extends(
          {},
          l != null && { expiration: l },
          { status: s },
        );
      }
      return t;
    }
    function y(e) {
      return C.apply(this, arguments);
    }
    function C() {
      return (
        (C = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          t === void 0 && (t = {});
          var n = t,
            r = n.checkGenAI,
            a = r === void 0 ? !1 : r,
            i = n.checkMarketingMessages,
            l = i === void 0 ? !1 : i,
            d = n.checkMetaVerified,
            m = d === void 0 ? !1 : d;
          o("WALogger").LOG(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "[getBusinessEligibility] metaVerified=",
                " marketingMsgs=",
                " genai=",
                "",
              ])),
            m,
            l,
            a,
          );
          var p = {};
          (a && (p = babelHelpers.extends({}, p, { featuresGenai: "true" })),
            m &&
              (p = babelHelpers.extends({}, p, {
                featuresMetaVerified: "true",
              })),
            l &&
              (p = babelHelpers.extends({}, p, {
                featuresMarketingMessages: "true",
              })),
            o("WALogger").LOG(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
                  "Sending business eligibility RPC request with args: ",
                  "",
                ])),
              JSON.stringify(p),
            ));
          var _ = yield o(
            "WASmaxBizMarketingMessageGetBusinessEligibilityRPC",
          ).sendGetBusinessEligibilityRPC(p);
          if (_.name === "GetBusinessEligibilityResponseSuccess") {
            var f = h(_.value);
            return (
              o("WALogger").LOG(
                u ||
                  (u = babelHelpers.taggedTemplateLiteralLoose([
                    "Business eligibility RPC request successful. Result: ",
                    "",
                  ])),
                JSON.stringify(f),
              ),
              f
            );
          }
          var g = _.value,
            y =
              g.errorIQErrorBadRequestOrForbiddenOrInternalServerErrorOrServiceUnavailableMixinGroup,
            C = y.value.code,
            b = y.value.text;
          throw (
            o("WALogger").ERROR(
              c ||
                (c = babelHelpers.taggedTemplateLiteralLoose([
                  "[getBusinessEligibility] failed: ",
                  " code=",
                  " text=",
                  "",
                ])),
              y.name,
              C,
              b,
            ),
            new (o("WAWebBackendErrors").ServerStatusCodeError)(C, b)
          );
        })),
        C.apply(this, arguments)
      );
    }
    function b() {
      return v.apply(this, arguments);
    }
    function v() {
      return (
        (v = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e;
          o("WALogger").LOG(
            d ||
              (d = babelHelpers.taggedTemplateLiteralLoose([
                "getMetaVerifiedEligibility called",
              ])),
          );
          var t = yield y({ checkMetaVerified: !0 });
          return (
            o("WALogger").LOG(
              m ||
                (m = babelHelpers.taggedTemplateLiteralLoose([
                  "getMetaVerifiedEligibility result: ",
                  "",
                ])),
              JSON.stringify(t.metaVerified),
            ),
            (e = t.metaVerified) != null ? e : null
          );
        })),
        v.apply(this, arguments)
      );
    }
    function S() {
      return R.apply(this, arguments);
    }
    function R() {
      return (
        (R = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e;
          o("WALogger").LOG(
            p ||
              (p = babelHelpers.taggedTemplateLiteralLoose([
                "getMarketingMessagesEligibility called",
              ])),
          );
          var t = yield y({ checkMarketingMessages: !0 });
          return (
            o("WALogger").LOG(
              _ ||
                (_ = babelHelpers.taggedTemplateLiteralLoose([
                  "getMarketingMessagesEligibility result: ",
                  "",
                ])),
              JSON.stringify(t.marketingMessages),
            ),
            (e = t.marketingMessages) != null ? e : null
          );
        })),
        R.apply(this, arguments)
      );
    }
    function L() {
      return E.apply(this, arguments);
    }
    function E() {
      return (
        (E = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          o("WALogger").LOG(
            f ||
              (f = babelHelpers.taggedTemplateLiteralLoose([
                "getAllBusinessEligibility called",
              ])),
          );
          var e = yield y({
            checkMarketingMessages: !0,
            checkMetaVerified: !0,
          });
          return (
            o("WALogger").LOG(
              g ||
                (g = babelHelpers.taggedTemplateLiteralLoose([
                  "getAllBusinessEligibility result: ",
                  "",
                ])),
              JSON.stringify(e),
            ),
            e
          );
        })),
        E.apply(this, arguments)
      );
    }
    function k() {
      return I.apply(this, arguments);
    }
    function I() {
      return (
        (I = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          try {
            var e,
              t,
              n = yield y({
                checkGenAI: o(
                  "WAWebBizBroadcastGenAIGating",
                ).isGenAITextEnabled(),
                checkMarketingMessages: !0,
              });
            return (
              o(
                "WAWebBizBroadcastMarketingMessagesEligibilityModel",
              ).updateMarketingMessagesEligibility(
                ((e = n.marketingMessages) == null ? void 0 : e.status) ===
                  "SUCCESS",
              ),
              o(
                "WAWebBizBroadcastGenAIEligibilityModel",
              ).updateGenAIEligibility(
                ((t = n.genai) == null ? void 0 : t.status) === "SUCCESS",
              ),
              n
            );
          } catch (e) {
            throw (
              o(
                "WAWebBizBroadcastMarketingMessagesEligibilityModel",
              ).updateMarketingMessagesEligibility(!1),
              o(
                "WAWebBizBroadcastGenAIEligibilityModel",
              ).updateGenAIEligibility(!1),
              e
            );
          }
        })),
        I.apply(this, arguments)
      );
    }
    ((l.getBusinessEligibility = y),
      (l.getMetaVerifiedEligibility = b),
      (l.getMarketingMessagesEligibility = S),
      (l.getAllBusinessEligibility = L),
      (l.fetchAndCacheBusinessEligibility = k));
  },
  98,
);
