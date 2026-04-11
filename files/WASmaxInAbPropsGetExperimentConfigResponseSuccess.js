__d(
  "WASmaxInAbPropsGetExperimentConfigResponseSuccess",
  [
    "WAResultOrError",
    "WASmaxInAbPropsConfigs",
    "WASmaxInAbPropsEnums",
    "WASmaxInAbPropsIQResultResponseMixin",
    "WASmaxParseUtils",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "prop");
      if (!t.success) return t;
      var n = o("WASmaxInAbPropsConfigs").parseConfigs(e);
      return n.success
        ? o("WAResultOrError").makeResult({ configs: n.value })
        : n;
    }
    function s(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "erid");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").contentBytesRange(e, 1, 100);
      return n.success
        ? o("WAResultOrError").makeResult({ elementValue: n.value })
        : n;
    }
    function u(t, n) {
      var r = o("WASmaxParseUtils").assertTag(t, "iq");
      if (!r.success) return r;
      var a = o("WASmaxParseUtils").flattenedChildWithTag(t, "props");
      if (!a.success) return a;
      var i = o("WASmaxParseUtils").optionalChildWithTag(t, "erid", s);
      if (!i.success) return i;
      var l = o("WASmaxParseUtils").literal(
        o("WASmaxParseUtils").attrString,
        a.value,
        "protocol",
        "1",
      );
      if (!l.success) return l;
      var u = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrString,
        a.value,
        "ab_key",
      );
      if (!u.success) return u;
      var c = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrString,
        a.value,
        "hash",
      );
      if (!c.success) return c;
      var d = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrIntRange,
        a.value,
        "refresh",
        0,
        void 0,
      );
      if (!d.success) return d;
      var m = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrIntRange,
        a.value,
        "refresh_id",
        0,
        void 0,
      );
      if (!m.success) return m;
      var p = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrStringEnum,
        a.value,
        "delta_update",
        o("WASmaxInAbPropsEnums").ENUM_FALSE_TRUE,
      );
      if (!p.success) return p;
      var _ = o(
        "WASmaxInAbPropsIQResultResponseMixin",
      ).parseIQResultResponseMixin(t, n);
      if (!_.success) return _;
      var f = o("WASmaxParseUtils").mapChildrenWithTag(
        a.value,
        "prop",
        0,
        1 / 0,
        e,
      );
      return f.success
        ? o("WAResultOrError").makeResult(
            babelHelpers.extends(
              {
                propsProtocol: l.value,
                propsAbKey: u.value,
                propsHash: c.value,
                propsRefresh: d.value,
                propsRefreshId: m.value,
                propsDeltaUpdate: p.value,
              },
              _.value,
              { erid: i.value, propsProp: f.value },
            ),
          )
        : f;
    }
    ((l.parseGetExperimentConfigResponseSuccessPropsProp = e),
      (l.parseGetExperimentConfigResponseSuccessErid = s),
      (l.parseGetExperimentConfigResponseSuccess = u));
  },
  98,
);
