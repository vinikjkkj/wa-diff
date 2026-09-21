__d(
  "WAWebABPropsSupportLid",
  ["WALogger", "WAWebABProps"],
  function (t, n, r, o, a, i, l) {
    var e;
    function s(e) {
      var t = o("WAWebABProps").getABPropConfigValue("support_lids");
      return t == null || t === "" ? !1 : t.split(",").includes(e);
    }
    function u(e) {
      var t = o("WAWebABProps").getABPropConfigValue("payment_support_lids");
      return t == null || t === "" ? !1 : t.split(",").includes(e);
    }
    function c(e) {
      return s(e) || u(e);
    }
    var d = "@bot",
      m = /^[1-9][0-9]{0,19}$/,
      p = new Set();
    function _(e) {
      return y("support_lids", e) && !g(e);
    }
    function f(e) {
      return y("support_lids", e) || g(e);
    }
    function g(e) {
      return y("payment_support_lids", e);
    }
    function h() {
      return C("support_lids", function (e) {
        return !g(e);
      });
    }
    function y(e, t) {
      var n = o("WAWebABProps").getABPropConfigValue(e);
      if (n == null || n === "") return !1;
      for (var r = n.split(","), a = !1, i = 0; i < r.length; i++)
        b(r[i].trim(), e, i) === t && (a = !0);
      return a;
    }
    function C(e, t) {
      var n = o("WAWebABProps").getABPropConfigValue(e);
      if (n == null || n === "") return null;
      for (var r = n.split(","), a = 0; a < r.length; a++) {
        var i = b(r[a].trim(), e, a);
        if (i != null && t(i)) return i;
      }
      return null;
    }
    function b(e, t, n) {
      if (!e.endsWith(d)) return null;
      var r = e.slice(0, -d.length);
      return m.test(r) ? r : (v(t, n), null);
    }
    function v(t, n) {
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
