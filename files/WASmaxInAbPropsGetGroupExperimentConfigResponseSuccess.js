__d(
  "WASmaxInAbPropsGetGroupExperimentConfigResponseSuccess",
  [
    "WAResultOrError",
    "WASmaxInAbPropsExperimentOrSamplingConfigMixinGroup",
    "WASmaxInAbPropsIQResultResponseMixin",
    "WASmaxParseUtils",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "prop");
      if (!t.success) return t;
      var n = o(
        "WASmaxInAbPropsExperimentOrSamplingConfigMixinGroup",
      ).parseExperimentOrSamplingConfigMixinGroup(e);
      return n.success
        ? o("WAResultOrError").makeResult({
            experimentOrSamplingConfigMixinGroup: n.value,
          })
        : n;
    }
    function s(t, n) {
      var r = o("WASmaxParseUtils").assertTag(t, "iq");
      if (!r.success) return r;
      var a = o("WASmaxParseUtils").flattenedChildWithTag(t, "props");
      if (!a.success) return a;
      var i = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrString,
        a.value,
        "ab_key",
      );
      if (!i.success) return i;
      var l = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrString,
        a.value,
        "hash",
      );
      if (!l.success) return l;
      var s = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrIntRange,
        a.value,
        "refresh",
        0,
        void 0,
      );
      if (!s.success) return s;
      var u = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrIntRange,
        a.value,
        "refresh_id",
        0,
        void 0,
      );
      if (!u.success) return u;
      var c = o(
        "WASmaxInAbPropsIQResultResponseMixin",
      ).parseIQResultResponseMixin(t, n);
      if (!c.success) return c;
      var d = o("WASmaxParseUtils").mapChildrenWithTag(
        a.value,
        "prop",
        0,
        1 / 0,
        e,
      );
      return d.success
        ? o("WAResultOrError").makeResult(
            babelHelpers.extends(
              {
                propsAbKey: i.value,
                propsHash: l.value,
                propsRefresh: s.value,
                propsRefreshId: u.value,
              },
              c.value,
              { propsProp: d.value },
            ),
          )
        : d;
    }
    ((l.parseGetGroupExperimentConfigResponseSuccessPropsProp = e),
      (l.parseGetGroupExperimentConfigResponseSuccess = s));
  },
  98,
);
