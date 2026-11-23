__d(
  "WASmaxAbPropsGetExperimentConfigRPC",
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
  ],
  function (t, n, r, o, a, i, l) {
    async function e(e, t) {
      var n = _(e),
        r = await o("WAComms").sendSmaxStanza(n, t),
        a = m(r, n);
      if (a.success)
        return { name: "GetExperimentConfigResponseSuccess", value: a.value };
      var i = s(r, n);
      if (i.success)
        return {
          name: "GetExperimentConfigResponseErrorNoRetry",
          value: i.value,
        };
      var l = u(r, n);
      if (l.success)
        return {
          name: "GetExperimentConfigResponseErrorRetry",
          value: l.value,
        };
      throw new (o("WASmaxParsingFailure").SmaxParsingFailure)(
        o("WASmaxRpcUtils").errorMessageRpcParsing("GetExperimentConfig", {
          Success: a,
          ErrorNoRetry: i,
          ErrorRetry: l,
        }),
      );
    }
    function s(e, t) {
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
            babelHelpers.extends({}, a.value, { errorNoRetryErrors: i.value }),
          )
        : i;
    }
    function u(e, t) {
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
    function c(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "prop");
      if (!t.success) return t;
      var n = f(e);
      return n.success
        ? o("WAResultOrError").makeResult({ configs: n.value })
        : n;
    }
    function d(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "erid");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").contentBytesRange(e, 1, 100);
      return n.success
        ? o("WAResultOrError").makeResult({ elementValue: n.value })
        : n;
    }
    function m(e, t) {
      var n = o("WASmaxParseUtils").assertTag(e, "iq");
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").flattenedChildWithTag(e, "props");
      if (!r.success) return r;
      var a = o("WASmaxParseUtils").optionalChildWithTag(e, "erid", d);
      if (!a.success) return a;
      var i = o("WASmaxParseUtils").literal(
        o("WASmaxParseUtils").attrString,
        r.value,
        "protocol",
        "1",
      );
      if (!i.success) return i;
      var l = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrString,
        r.value,
        "ab_key",
      );
      if (!l.success) return l;
      var s = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrString,
        r.value,
        "hash",
      );
      if (!s.success) return s;
      var u = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrIntRange,
        r.value,
        "refresh",
        0,
        void 0,
      );
      if (!u.success) return u;
      var m = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrIntRange,
        r.value,
        "refresh_id",
        0,
        void 0,
      );
      if (!m.success) return m;
      var p = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrStringEnum,
        r.value,
        "delta_update",
        g,
      );
      if (!p.success) return p;
      var _ = o(
        "WASmaxInAbPropsIQResultResponseMixin",
      ).parseIQResultResponseMixin(e, t);
      if (!_.success) return _;
      var f = o("WASmaxParseUtils").mapChildrenWithTag(
        r.value,
        "prop",
        0,
        1 / 0,
        c,
      );
      return f.success
        ? o("WAResultOrError").makeResult(
            babelHelpers.extends(
              {
                propsProtocol: i.value,
                propsAbKey: l.value,
                propsHash: s.value,
                propsRefresh: u.value,
                propsRefreshId: m.value,
                propsDeltaUpdate: p.value,
              },
              _.value,
              { erid: a.value, propsProp: f.value },
            ),
          )
        : f;
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
      var t = e.propsHash,
        n = e.propsRefreshId,
        r = o(
          "WASmaxOutAbPropsBaseIQGetRequestMixin",
        ).mergeBaseIQGetRequestMixin(
          o("WASmaxJsx").smax(
            "iq",
            { xmlns: "abt", to: o("WAWap").S_WHATSAPP_NET },
            o("WASmaxJsx").smax("props", {
              protocol: "1",
              hash: o("WASmaxAttrs").OPTIONAL(o("WAWap").CUSTOM_STRING, t),
              refresh_id: o("WASmaxAttrs").OPTIONAL(o("WAWap").INT, n),
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
    var g = { false: "false", true: "true" };
    ((l.sendGetExperimentConfigRPC = e),
      (l.parseGetExperimentConfigResponseErrorNoRetry = s),
      (l.parseGetExperimentConfigResponseErrorRetry = u),
      (l.parseGetExperimentConfigResponseSuccess = m),
      (l.makeGetExperimentConfigRequest = _),
      (l.ENUM_FALSE_TRUE = g));
  },
  98,
);
