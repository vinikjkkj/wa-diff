__d(
  "WAWebDirectConnectionGatingUtils",
  [
    "WALogger",
    "WAWebABProps",
    "WAWebBusinessProfileCollection",
    "WAWebBusinessProfileVersioningBridge",
    "WAWebMsgType",
    "WAWebProtobufsE2E.pb",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e;
    function s() {
      return (
        (o(
          "WAWebBusinessProfileVersioningBridge",
        ).getBusinessProfileQueryVersion() &
          o("WAWebBusinessProfileVersioningBridge").DIRECT_CONNECTION_FLAG) >
        0
      );
    }
    function u() {
      return !o("WAWebABProps").getABPropConfigValue(
        "web_abprop_direct_connection_md",
      );
    }
    function c(e, t) {
      return (
        e === o("WAWebMsgType").MSG_TYPE.LIST &&
        t ===
          o("WAWebProtobufsE2E.pb").Message$ListMessage$ListType.PRODUCT_LIST
      );
    }
    function d() {
      return o("WAWebABProps").getABPropConfigValue(
        "web_abprop_direct_connection_md",
      );
    }
    function m() {
      return o("WAWebABProps").getABPropConfigValue(
        "web_abprop_direct_connection_md",
      );
    }
    function p() {
      var e = o("WAWebABProps").getABPropConfigValue(
        "direct_connection_business_numbers",
      );
      return typeof e == "string" && e.length > 0 ? e.split(",") : [];
    }
    function _(e, t, n) {
      return f.apply(this, arguments);
    }
    function f() {
      return (
        (f = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, n, r) {
          if (u() || !c(t, n) || !r) return !1;
          if (!s())
            return (
              o("WALogger").WARN(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "[direct-connection] unable to detect DC biz for product list",
                  ])),
              ),
              "unknown"
            );
          var a = o("WAWebWidFactory").createWid(r),
            i = o(
              "WAWebBusinessProfileCollection",
            ).BusinessProfileCollection.get(a);
          return (
            (!i || !i.profileOptions) &&
              (i = yield o(
                "WAWebBusinessProfileCollection",
              ).BusinessProfileCollection.find(a)),
            i.isBusinessDirectConnection() || !1
          );
        })),
        f.apply(this, arguments)
      );
    }
    function g(e, t, n) {
      return h.apply(this, arguments);
    }
    function h() {
      return (
        (h = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
          var r = yield _(e, t, n);
          return r === !0 && !d()
            ? {
                requiresDirectConnection: r,
                type: o("WAWebMsgType").MSG_TYPE.UNKNOWN,
                subtype: "phone_only_feature",
              }
            : { requiresDirectConnection: r };
        })),
        h.apply(this, arguments)
      );
    }
    ((l.supportsDirectConnection = d),
      (l.enablePostcodeInCatalog = m),
      (l.directConnectionBusinessNumbersFromAbprop = p),
      (l.genDirectConnectionMessageModifiers = g));
  },
  98,
);
