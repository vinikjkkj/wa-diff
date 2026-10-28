__d(
  "WASmaxAbPropsGetGroupExperimentConfigRPC",
  [
    "WAComms",
    "WAResultOrError",
    "WASmaxAttrs",
    "WASmaxInAbPropsExperimentConfigMixin",
    "WASmaxInAbPropsIQErrorBadRequestMixin",
    "WASmaxInAbPropsIQErrorFeatureNotImplementedMixin",
    "WASmaxInAbPropsIQErrorInternalServerErrorMixin",
    "WASmaxInAbPropsIQErrorResponseMixin",
    "WASmaxInAbPropsIQResultResponseMixin",
    "WASmaxInAbPropsSamplingConfigMixin",
    "WASmaxJsx",
    "WASmaxOutAbPropsBaseIQGetRequestMixin",
    "WASmaxParseUtils",
    "WASmaxParsingFailure",
    "WASmaxRpcUtils",
    "WAWap",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e, t) {
      return s.apply(this, arguments);
    }
    function s() {
      return (
        (s = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = _(e),
            r = yield o("WAComms").sendSmaxStanza(n, t),
            a = m(r, n);
          if (a.success)
            return {
              name: "GetGroupExperimentConfigResponseSuccess",
              value: a.value,
            };
          var i = u(r, n);
          if (i.success)
            return {
              name: "GetGroupExperimentConfigResponseErrorNoRetry",
              value: i.value,
            };
          var l = c(r, n);
          if (l.success)
            return {
              name: "GetGroupExperimentConfigResponseErrorRetry",
              value: l.value,
            };
          throw new (o("WASmaxParsingFailure").SmaxParsingFailure)(
            o("WASmaxRpcUtils").errorMessageRpcParsing(
              "GetGroupExperimentConfig",
              { Success: a, ErrorNoRetry: i, ErrorRetry: l },
            ),
          );
        })),
        s.apply(this, arguments)
      );
    }
    function u(e, t) {
      var n = o("WASmaxParseUtils").assertTag(e, "iq");
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").flattenedChildWithTag(e, "error");
      if (!r.success) return r;
      var a = o(
        "WASmaxInAbPropsIQErrorResponseMixin",
      ).parseIQErrorResponseMixin(e, t);
      if (!a.success) return a;
      var i = p(r.value);
      return i.success
        ? o("WAResultOrError").makeResult(
            babelHelpers.extends({}, a.value, {
              errorIQErrorBadRequestOrFeatureNotImplementedMixinGroup: i.value,
            }),
          )
        : i;
    }
    function c(e, t) {
      var n = o("WASmaxParseUtils").assertTag(e, "iq");
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").flattenedChildWithTag(e, "error");
      if (!r.success) return r;
      var a = o(
        "WASmaxInAbPropsIQErrorInternalServerErrorMixin",
      ).parseIQErrorInternalServerErrorMixin(r.value);
      if (!a.success) return a;
      var i = o(
        "WASmaxInAbPropsIQErrorResponseMixin",
      ).parseIQErrorResponseMixin(e, t);
      return i.success
        ? o("WAResultOrError").makeResult(
            babelHelpers.extends(
              { errorIQErrorInternalServerErrorMixin: a.value },
              i.value,
            ),
          )
        : i;
    }
    function d(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "prop");
      if (!t.success) return t;
      var n = f(e);
      return n.success
        ? o("WAResultOrError").makeResult({
            experimentOrSamplingConfigMixinGroup: n.value,
          })
        : n;
    }
    function m(e, t) {
      var n = o("WASmaxParseUtils").assertTag(e, "iq");
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").flattenedChildWithTag(e, "props");
      if (!r.success) return r;
      var a = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrString,
        r.value,
        "ab_key",
      );
      if (!a.success) return a;
      var i = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrString,
        r.value,
        "hash",
      );
      if (!i.success) return i;
      var l = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrIntRange,
        r.value,
        "refresh",
        0,
        void 0,
      );
      if (!l.success) return l;
      var s = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrIntRange,
        r.value,
        "refresh_id",
        0,
        void 0,
      );
      if (!s.success) return s;
      var u = o(
        "WASmaxInAbPropsIQResultResponseMixin",
      ).parseIQResultResponseMixin(e, t);
      if (!u.success) return u;
      var c = o("WASmaxParseUtils").mapChildrenWithTag(
        r.value,
        "prop",
        0,
        1 / 0,
        d,
      );
      return c.success
        ? o("WAResultOrError").makeResult(
            babelHelpers.extends(
              {
                propsAbKey: a.value,
                propsHash: i.value,
                propsRefresh: l.value,
                propsRefreshId: s.value,
              },
              u.value,
              { propsProp: c.value },
            ),
          )
        : c;
    }
    function p(e) {
      var t = o(
        "WASmaxInAbPropsIQErrorBadRequestMixin",
      ).parseIQErrorBadRequestMixin(e);
      if (t.success)
        return o("WAResultOrError").makeResult({
          name: "IQErrorBadRequest",
          value: t.value,
        });
      var n = o(
        "WASmaxInAbPropsIQErrorFeatureNotImplementedMixin",
      ).parseIQErrorFeatureNotImplementedMixin(e);
      return n.success
        ? o("WAResultOrError").makeResult({
            name: "IQErrorFeatureNotImplemented",
            value: n.value,
          })
        : o("WASmaxParseUtils").errorMixinDisjunction(
            e,
            ["IQErrorBadRequest", "IQErrorFeatureNotImplemented"],
            [t, n],
          );
    }
    function _(e) {
      var t = e.propsGroup,
        n = e.propsHash,
        r = o(
          "WASmaxOutAbPropsBaseIQGetRequestMixin",
        ).mergeBaseIQGetRequestMixin(
          o("WASmaxJsx").smax(
            "iq",
            { xmlns: "abt", to: o("WAWap").S_WHATSAPP_NET },
            o("WASmaxJsx").smax("props", {
              group: o("WAWap").GROUP_JID(t),
              hash: o("WASmaxAttrs").OPTIONAL(o("WAWap").CUSTOM_STRING, n),
            }),
          ),
        );
      return r;
    }
    function f(e) {
      var t = o(
        "WASmaxInAbPropsExperimentConfigMixin",
      ).parseExperimentConfigMixin(e);
      if (t.success)
        return o("WAResultOrError").makeResult({
          name: "ExperimentConfig",
          value: t.value,
        });
      var n = o("WASmaxInAbPropsSamplingConfigMixin").parseSamplingConfigMixin(
        e,
      );
      return n.success
        ? o("WAResultOrError").makeResult({
            name: "SamplingConfig",
            value: n.value,
          })
        : o("WASmaxParseUtils").errorMixinDisjunction(
            e,
            ["ExperimentConfig", "SamplingConfig"],
            [t, n],
          );
    }
    ((l.sendGetGroupExperimentConfigRPC = e),
      (l.parseGetGroupExperimentConfigResponseErrorNoRetry = u),
      (l.parseGetGroupExperimentConfigResponseErrorRetry = c),
      (l.parseGetGroupExperimentConfigResponseSuccessPropsProp = d),
      (l.parseGetGroupExperimentConfigResponseSuccess = m),
      (l.parseIQErrorBadRequestOrFeatureNotImplementedMixinGroup = p),
      (l.makeGetGroupExperimentConfigRequest = _),
      (l.parseExperimentOrSamplingConfigMixinGroup = f));
  },
  98,
);
