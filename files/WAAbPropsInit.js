__d(
  "WAAbPropsInit",
  [
    "WAAbProps",
    "WAAbPropsCache",
    "WAAbPropsConverters",
    "WAAbPropsToUI",
    "WAAbPropsTypes",
    "WABridge",
    "WAGetAbPropsApi",
    "WALogger",
    "WASetAbPropsApi",
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e, s, u;
    function c() {
      if (!u)
        throw r("err")("Trying to get hash before AbProps gets initialized");
      return Promise.resolve(u.getHash());
    }
    function d() {
      if (!u)
        throw r("err")(
          "Trying to get refresh secs before AbProps gets initialized",
        );
      return Promise.resolve(u.getRefreshSecs());
    }
    var m = {
      getAbProps: function () {
        if (!u)
          throw r("err")("Trying to read ABProps before they gets initialized");
        return Promise.resolve(u.readAll());
      },
      getHash: c,
      getRefreshSecs: d,
      setAbProps: async function (t) {
        var e,
          n = o("WAAbPropsConverters").convertAbPropsDataToParsed(t);
        ((e = u) == null || e.rewrite(n),
          await o("WASetAbPropsApi").setAbProps(
            o("WAAbPropsConverters").convertAbPropsParsedToDbEntity(n),
          ),
          p(n));
      },
    };
    function p(e) {
      if (e.propValues) {
        var t = o("WAAbPropsToUI").prepareAbPropsForUI(e.propValues);
        o("WABridge")
          .getBridge()
          .fireAndForget("event", "abPropsUpdated", { abProps: t });
      }
    }
    async function _() {
      o("WALogger").LOG(
        e ||
          (e = babelHelpers.taggedTemplateLiteralLoose([
            "Starting ABProps store",
          ])),
      );
      var t = await o("WAGetAbPropsApi").getAbProps(),
        n = {};
      (t && (n = o("WAAbPropsConverters").convertDbAbPropsToParsed(t)),
        (u = new (o("WAAbPropsCache").AbPropsCache)(n)),
        o("WAAbProps").startAbProps(m, o("WAAbPropsTypes").ABPropConfigs),
        p(n),
        o("WALogger").LOG(
          s ||
            (s = babelHelpers.taggedTemplateLiteralLoose(["ABProps inited"])),
        ));
    }
    function f(e, t) {
      if (u == null)
        throw r("err")("Trying to override ABProp before they get initialized");
      var n = u;
      (n.overrideAbProp(e, t),
        p(o("WAAbPropsConverters").convertAbPropsDataToParsed(n.readAll())));
    }
    function g(e) {
      return o("WAAbPropsTypes").ABPropConfigs[e][2];
    }
    function h() {
      if (!u)
        throw r("err")("Trying to read ABProps before they get initialized");
      return u.readAll();
    }
    function y(e) {
      if (!u)
        throw r("err")(
          "Trying to read ABProp " + e + " before AbProps gets initialized",
        );
      var t = u.getAbProp(e);
      return t != null ? t : g(e);
    }
    ((l.getHash = c),
      (l.getRefreshSecs = d),
      (l.initAbProps = _),
      (l.overrideAbProp = f),
      (l.getAbDefault = g),
      (l.getAbProps = h),
      (l.getAbProp = y));
  },
  98,
);
