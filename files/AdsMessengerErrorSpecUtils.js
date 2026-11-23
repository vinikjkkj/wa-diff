__d(
  "AdsMessengerErrorSpecUtils",
  ["errorCode", "fbt", "AdsMessengerErrorSpecType", "getByPath"],
  function (t, n, r, o, a, i, l, s, u) {
    "use strict";
    var e = u._(/*BTDS*/ ""),
      c = u._(/*BTDS*/ "");
    function d(e, t) {
      return e && e[t];
    }
    function m(e, t) {
      var n,
        o = d(e, r("AdsMessengerErrorSpecType").AUTOMATED_GREETING_MESSAGE_CTA);
      if (o == null) return null;
      var a = (n = t == null ? void 0 : t.trim()) != null ? n : "",
        i = a !== "" && !a.startsWith("https://");
      return String(i ? c : o);
    }
    function p(e, t) {
      var n = d(e, t);
      return n == null
        ? null
        : Array.isArray(n)
          ? { errorMessage: n }
          : { errorMessage: [n] };
    }
    function _(e, t, n) {
      var r = d(e, t);
      if (r instanceof Object) {
        var o = r && r[n];
        return o ? { errorMessage: o } : null;
      }
      return null;
    }
    function f(t, n) {
      if (t) {
        var o = r("getByPath")(t, [r("AdsMessengerErrorSpecType").VIDEO_API]);
        if (o) {
          var a = o.error_code === 1363025 ? o.error_title : o.error_message;
          return a || e;
        }
      }
      return null;
    }
    function g(e) {
      return (
        d(e, r("AdsMessengerErrorSpecType").ATTACHMENT_ID) ||
        f(e, r("AdsMessengerErrorSpecType").VIDEO_API)
      );
    }
    ((l.getErrorMessage = d),
      (l.getAutomatedGreetingMessageCTAURLErrorMessage = m),
      (l.getErrorObjectFromMessengerErrorSpecs = p),
      (l.getCTAError = _),
      (l.getVideoUploadError = f),
      (l.getVideoError = g));
  },
  226,
);
