__d(
  "WAWebSlashCommandsToolText",
  ["fbt", "WAWebPhoneNumberSearch", "WAWebSlashCommandThanksRecipient"],
  function (t, n, r, o, a, i, l, s) {
    var e = /@\+?\d[\d \-]{4,}\d/g;
    function u(e, t) {
      var n,
        r =
          (n = o("WAWebSlashCommandThanksRecipient").getContactName(e)) != null
            ? n
            : t != null &&
                t !== "" &&
                !o("WAWebPhoneNumberSearch").isPhoneNumberLike(t)
              ? t
              : null;
      return r != null ? r : f();
    }
    function c(e, t) {
      var n = (t != null ? t : []).reduce(function (e, t) {
        return e.replace(new RegExp("@" + t.user + "(?!\\d)", "g"), m(t));
      }, e);
      return p(n);
    }
    function d(e, t) {
      var n = "",
        r = e;
      for (var o of t) {
        var a = o.name,
          i = o.wid,
          l = "@" + a,
          s = r.indexOf(l);
        s !== -1 &&
          ((n += r.slice(0, s) + m(i, a)), (r = r.slice(s + l.length)));
      }
      return p(n + r);
    }
    function m(e, t) {
      return _(u(e, t));
    }
    function p(t) {
      return t.replace(e, _(f()));
    }
    function _(e) {
      return e.startsWith("@") ? e : "@" + e;
    }
    function f() {
      return s._(/*BTDS*/ "someone").toString();
    }
    ((l.getToolMentionName = u),
      (l.nameMessageMentions = c),
      (l.nameComposerMentions = d),
      (l.getToolMention = m),
      (l.hideNumberMentions = p));
  },
  226,
);
