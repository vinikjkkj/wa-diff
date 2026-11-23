__d(
  "WASmaxDevicesFetchSelfRPC",
  [
    "WAComms",
    "WAResultOrError",
    "WASmaxInDevicesDeviceIqErrors",
    "WASmaxInDevicesIQErrorResponseMixin",
    "WASmaxInDevicesIQResultResponseMixin",
    "WASmaxInDevicesIdentityKeyMixin",
    "WASmaxJsx",
    "WASmaxOutDevicesBaseIQGetRequestMixin",
    "WASmaxParseUtils",
    "WASmaxParsingFailure",
    "WASmaxRpcUtils",
    "WAWap",
  ],
  function (t, n, r, o, a, i, l) {
    async function e(e) {
      var t = d(),
        n = await o("WAComms").sendSmaxStanza(t, e),
        r = c(n, t);
      if (r.success)
        return { name: "FetchSelfResponseSuccess", value: r.value };
      var a = s(n, t);
      if (a.success) return { name: "FetchSelfResponseError", value: a.value };
      throw new (o("WASmaxParsingFailure").SmaxParsingFailure)(
        o("WASmaxRpcUtils").errorMessageRpcParsing("FetchSelf", {
          Success: r,
          Error: a,
        }),
      );
    }
    function s(e, t) {
      var n = o("WASmaxParseUtils").assertTag(e, "iq");
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").flattenedChildWithTag(e, "error");
      if (!r.success) return r;
      var a = o(
        "WASmaxInDevicesIQErrorResponseMixin",
      ).parseIQErrorResponseMixin(e, t);
      if (!a.success) return a;
      var i = o("WASmaxInDevicesDeviceIqErrors").parseDeviceIqErrors(r.value);
      return i.success
        ? o("WAResultOrError").makeResult(
            babelHelpers.extends({}, a.value, { errorDeviceIqErrors: i.value }),
          )
        : i;
    }
    function u(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "device");
      if (!t.success) return t;
      var n = C(e);
      return (n.success, n);
    }
    function c(e, t) {
      var n = o("WASmaxParseUtils").assertTag(e, "iq");
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").flattenedChildWithTag(e, "self");
      if (!r.success) return r;
      var a = o(
        "WASmaxInDevicesIQResultResponseMixin",
      ).parseIQResultResponseMixin(e, t);
      if (!a.success) return a;
      var i = o("WASmaxParseUtils").mapChildrenWithTag(
        r.value,
        "device",
        1,
        25,
        u,
      );
      return i.success
        ? o("WAResultOrError").makeResult(
            babelHelpers.extends({}, a.value, { selfDevice: i.value }),
          )
        : i;
    }
    function d() {
      var e = o(
        "WASmaxOutDevicesBaseIQGetRequestMixin",
      ).mergeBaseIQGetRequestMixin(
        o("WASmaxJsx").smax(
          "iq",
          { to: o("WAWap").S_WHATSAPP_NET, xmlns: "fbid:devices" },
          o("WASmaxJsx").smax("self", null),
        ),
      );
      return e;
    }
    function m(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "platform");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").contentString(e);
      return n.success
        ? o("WAResultOrError").makeResult({ elementValue: n.value })
        : n;
    }
    function p(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "manufacturer");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").contentString(e);
      return n.success
        ? o("WAResultOrError").makeResult({ elementValue: n.value })
        : n;
    }
    function _(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "model");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").contentString(e);
      return n.success
        ? o("WAResultOrError").makeResult({ elementValue: n.value })
        : n;
    }
    function f(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "seen");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").contentInt(e);
      return n.success
        ? o("WAResultOrError").makeResult({ elementValue: n.value })
        : n;
    }
    function g(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "creation");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").contentInt(e);
      return n.success
        ? o("WAResultOrError").makeResult({ elementValue: n.value })
        : n;
    }
    function h(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "ip");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").contentString(e);
      return n.success
        ? o("WAResultOrError").makeResult({ elementValue: n.value })
        : n;
    }
    function y(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "location");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").attrString(e, "latitude");
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").attrString(e, "longitude");
      if (!r.success) return r;
      var a = o("WASmaxParseUtils").contentString(e);
      return a.success
        ? o("WAResultOrError").makeResult({
            latitude: n.value,
            longitude: r.value,
            elementValue: a.value,
          })
        : a;
    }
    function C(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "device");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").optionalChildWithTag(e, "platform", m);
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").optionalChildWithTag(e, "manufacturer", p);
      if (!r.success) return r;
      var a = o("WASmaxParseUtils").optionalChildWithTag(e, "model", _);
      if (!a.success) return a;
      var i = o("WASmaxParseUtils").optionalChildWithTag(e, "seen", f);
      if (!i.success) return i;
      var l = o("WASmaxParseUtils").optionalChildWithTag(e, "creation", g);
      if (!l.success) return l;
      var s = o("WASmaxParseUtils").optionalChildWithTag(e, "ip", h);
      if (!s.success) return s;
      var u = o("WASmaxParseUtils").optionalChildWithTag(e, "location", y);
      if (!u.success) return u;
      var c = o("WASmaxParseUtils").attrIntRange(e, "id", 1, 999);
      if (!c.success) return c;
      var d = o("WASmaxInDevicesIdentityKeyMixin").parseIdentityKeyMixin(e);
      return o("WAResultOrError").makeResult({
        id: c.value,
        identityKeyMixin: d.success ? d.value : null,
        platform: n.value,
        manufacturer: r.value,
        model: a.value,
        seen: i.value,
        creation: l.value,
        ip: s.value,
        location: u.value,
      });
    }
    ((l.sendFetchSelfRPC = e),
      (l.parseFetchSelfResponseError = s),
      (l.parseFetchSelfResponseSuccess = c),
      (l.makeFetchSelfRequest = d));
  },
  98,
);
