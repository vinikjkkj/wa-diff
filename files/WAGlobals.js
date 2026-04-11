__d(
  "WAGlobals",
  ["WAJids", "WALogger", "err"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = null;
    function u(e) {
      s = e;
    }
    function c() {
      if (s == null) throw r("err")("WaMsgr api called before set");
      return s;
    }
    function d() {
      return c().qpl;
    }
    function m() {
      var e;
      return (e = c().myJids) == null ? void 0 : e.deviceJid;
    }
    function p() {
      var e;
      return (e = c().myJids) == null ? void 0 : e.userJid;
    }
    function _(e) {
      return o("WAJids").extractUserJid(e) === o("WAJids").extractUserJid(m());
    }
    function f() {
      return c().config;
    }
    function g() {
      return c().dependencies;
    }
    var h = "WAOneQueue is not defined";
    function y() {
      var t = c().waOneQueue;
      if (t == null)
        throw (
          o("WALogger").ERROR(
            e || (e = babelHelpers.taggedTemplateLiteralLoose(["", ""])),
            h,
          ),
          r("err")(h)
        );
      return t;
    }
    function C() {
      return c().hmacKey;
    }
    ((l.setGlobals = u),
      (l.getWaQpl = d),
      (l.getMyDeviceJid = m),
      (l.getMyUserJid = p),
      (l.isPeerDevice = _),
      (l.getConfig = f),
      (l.getDependencies = g),
      (l.getWaOneQueue = y),
      (l.getHMACKey = C));
  },
  98,
);
