__d(
  "WAWebGetBusinessEligibilityJob",
  [
    "WALogger",
    "WASmaxBizMarketingMessageGetBusinessEligibilityRPC",
    "WAWebBackendErrors",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u, c;
    function d(e) {
      var t = {};
      if (e.bbPro != null) {
        var n = e.bbPro.status;
        t.bbPro = { status: n };
      }
      if (e.genai != null) {
        var r = e.genai.status;
        t.genai = { status: r };
      }
      if (e.metaVerified != null) {
        var o = e.metaVerified,
          a = o.shouldShowPrivacyInterstitialToNewUsers,
          i = o.status;
        t.metaVerified = babelHelpers.extends(
          {},
          a != null && {
            shouldShowPrivacyInterstitialToNewUsers: a === "true",
          },
          { status: i },
        );
      }
      if (e.marketingMessages != null) {
        var l = e.marketingMessages,
          s = l.expiration,
          u = l.status;
        t.marketingMessages = babelHelpers.extends(
          {},
          s != null && { expiration: s },
          { status: u },
        );
      }
      return t;
    }
    function m(e) {
      return p.apply(this, arguments);
    }
    function p() {
      return (
        (p = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          t === void 0 && (t = {});
          var n = t,
            r = n.checkBBPro,
            a = r === void 0 ? !1 : r,
            i = n.checkGenAI,
            l = i === void 0 ? !1 : i,
            m = n.checkMarketingMessages,
            p = m === void 0 ? !1 : m,
            _ = n.checkMetaVerified,
            f = _ === void 0 ? !1 : _;
          o("WALogger").LOG(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "[getBusinessEligibility] metaVerified=",
                " marketingMsgs=",
                " genai=",
                " bbPro=",
                "",
              ])),
            f,
            p,
            l,
            a,
          );
          var g = {};
          (l && (g = babelHelpers.extends({}, g, { featuresGenai: "true" })),
            f &&
              (g = babelHelpers.extends({}, g, {
                featuresMetaVerified: "true",
              })),
            p &&
              (g = babelHelpers.extends({}, g, {
                featuresMarketingMessages: "true",
              })),
            a && (g = babelHelpers.extends({}, g, { featuresBbPro: "true" })),
            o("WALogger").LOG(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
                  "Sending business eligibility RPC request with args: ",
                  "",
                ])),
              JSON.stringify(g),
            ));
          var h = yield o(
            "WASmaxBizMarketingMessageGetBusinessEligibilityRPC",
          ).sendGetBusinessEligibilityRPC(g);
          if (h.name === "GetBusinessEligibilityResponseSuccess") {
            var y = d(h.value);
            return (
              o("WALogger").LOG(
                u ||
                  (u = babelHelpers.taggedTemplateLiteralLoose([
                    "Business eligibility RPC request successful. Result: ",
                    "",
                  ])),
                JSON.stringify(y),
              ),
              y
            );
          }
          var C = h.value,
            b =
              C.errorIQErrorBadRequestOrForbiddenOrInternalServerErrorOrServiceUnavailableMixinGroup,
            v = b.value.code,
            S = b.value.text;
          throw (
            o("WALogger").LOG(
              c ||
                (c = babelHelpers.taggedTemplateLiteralLoose([
                  "[getBusinessEligibility] failed: ",
                  " code=",
                  " text=",
                  "",
                ])),
              b.name,
              v,
              S,
            ),
            new (o("WAWebBackendErrors").ServerStatusCodeError)(v, S)
          );
        })),
        p.apply(this, arguments)
      );
    }
    l.getBusinessEligibility = m;
  },
  98,
);
