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
    function m(e) {
      return p.apply(this, arguments);
    }
    function p() {
      return (
        (p = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          t === void 0 && (t = {});
          var n = t,
            r = n.checkGenAI,
            a = r === void 0 ? !1 : r,
            i = n.checkMarketingMessages,
            l = i === void 0 ? !1 : i,
            m = n.checkMetaVerified,
            p = m === void 0 ? !1 : m;
          o("WALogger").LOG(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "[getBusinessEligibility] metaVerified=",
                " marketingMsgs=",
                " genai=",
                "",
              ])),
            p,
            l,
            a,
          );
          var _ = {};
          (a && (_ = babelHelpers.extends({}, _, { featuresGenai: "true" })),
            p &&
              (_ = babelHelpers.extends({}, _, {
                featuresMetaVerified: "true",
              })),
            l &&
              (_ = babelHelpers.extends({}, _, {
                featuresMarketingMessages: "true",
              })),
            o("WALogger").LOG(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
                  "Sending business eligibility RPC request with args: ",
                  "",
                ])),
              JSON.stringify(_),
            ));
          var f = yield o(
            "WASmaxBizMarketingMessageGetBusinessEligibilityRPC",
          ).sendGetBusinessEligibilityRPC(_);
          if (f.name === "GetBusinessEligibilityResponseSuccess") {
            var g = d(f.value);
            return (
              o("WALogger").LOG(
                u ||
                  (u = babelHelpers.taggedTemplateLiteralLoose([
                    "Business eligibility RPC request successful. Result: ",
                    "",
                  ])),
                JSON.stringify(g),
              ),
              g
            );
          }
          var h = f.value,
            y =
              h.errorIQErrorBadRequestOrForbiddenOrInternalServerErrorOrServiceUnavailableMixinGroup,
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
        p.apply(this, arguments)
      );
    }
    l.getBusinessEligibility = m;
  },
  98,
);
