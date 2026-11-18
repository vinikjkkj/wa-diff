__d(
  "WAWebABPropsSupportLid",
  ["WALogger", "WAWebABProps"],
  function (t, n, r, o, a, i, l) {
    var e;
    function s(e) {
      return y("support_lids").includes(e);
    }
    function u(e) {
      return y("payment_support_lids").includes(e);
    }
    function c(e) {
      return s(e) || u(e);
    }
    var d = "@bot",
      m = /^[1-9][0-9]{0,19}$/,
      p = new Set();
    function _(e) {
      return C("support_lids", e) && !g(e);
    }
    function f(e) {
      return C("support_lids", e) || g(e);
    }
    function g(e) {
      return C("payment_support_lids", e);
    }
    function h() {
      return b("support_lids", function (e) {
        return !g(e);
      });
    }
    function y(e) {
      var t = o("WAWebABProps").getABPropConfigValue(e);
      return t == null || t === "" ? [] : t.split(",");
    }
    function C(e, t) {
      for (var n = y(e), r = !1, o = 0; o < n.length; o++)
        v(n[o].trim(), e, o) === t && (r = !0);
      return r;
    }
    function b(e, t) {
      for (var n = y(e), r = 0; r < n.length; r++) {
        var o = v(n[r].trim(), e, r);
        if (o != null && t(o)) return o;
      }
      return null;
    }
    function v(e, t, n) {
      if (!e.endsWith(d)) return null;
      var r = e.slice(0, -d.length);
      return m.test(r) ? r : (S(t, n), null);
    }
    function S(t, n) {
      var r = t + "\0" + n;
      p.has(r) ||
        (p.add(r),
        o("WALogger")
          .WARN(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "[abprops] ",
                " bot entry ",
                " is not a valid bot jid",
              ])),
            t,
            n,
          )
          .sendLogs("abprops-invalid-support-bot-entry"));
    }
    ((l.getIsWaCAPISupportLid = s),
      (l.getIsWaSupportLid = c),
      (l.getIsWaCAPISupportBotFbid = _),
      (l.getIsWaSupportBotFbid = f),
      (l.getIsWaPaymentSupportBotFbid = g),
      (l.getWaSupportAgentFbid = h));
  },
  98,
);
