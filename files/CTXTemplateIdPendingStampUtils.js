__d(
  "CTXTemplateIdPendingStampUtils",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = new Map();
    function l(e, t) {
      return String(e) + ":" + t;
    }
    function s(t, n, r) {
      r != null && e.set(l(t, r), n);
    }
    function u(t, n) {
      if (n == null) return null;
      var r = l(t, n),
        o = e.get(r);
      return o == null ? null : (e.delete(r), o);
    }
    var c = new Map();
    function d(e, t) {
      if (t == null) {
        c.delete(e);
        return;
      }
      c.set(e, t);
    }
    function m(e) {
      e.forEach(function (e) {
        return c.delete(e);
      });
    }
    function p(e) {
      var t = c.get(e);
      return (c.delete(e), t);
    }
    ((i.recordPendingTemplateStamp = s),
      (i.consumePendingTemplateStamp = u),
      (i.markPageWelcomeMessageWritten = d),
      (i.clearPageWelcomeMessageWritten = m),
      (i.consumePageWelcomeMessageWritten = p));
  },
  66,
);
