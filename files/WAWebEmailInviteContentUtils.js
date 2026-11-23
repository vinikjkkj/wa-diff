__d(
  "WAWebEmailInviteContentUtils",
  ["fbt"],
  function (t, n, r, o, a, i, l, s) {
    function e(e, t, n) {
      if (t == null) {
        var r = s._(/*BTDS*/ "").toString(),
          o = s._(/*BTDS*/ "").toString();
        return { body: u(o, e, n), subject: r };
      }
      var a = s._(/*BTDS*/ "", [s._param("groupName", t)]).toString(),
        i = s._(/*BTDS*/ "", [s._param("groupName", t)]).toString();
      return { body: u(i, e, n), subject: a };
    }
    function u(e, t, n) {
      var r = s._(/*BTDS*/ "").toString(),
        o = [e, "", t, "", r];
      return (
        n != null &&
          n !== "" &&
          o.push(s._(/*BTDS*/ "", [s._param("senderName", n)]).toString()),
        o.join("\n")
      );
    }
    function c(e, t, n) {
      var r = e.map(encodeURIComponent).join(",");
      return (
        "https://mail.google.com/mail/?view=cm&fs=1&to=" +
        r +
        "&su=" +
        encodeURIComponent(t) +
        "&body=" +
        encodeURIComponent(n)
      );
    }
    function d(e, t, n) {
      var r = e.map(m).join(","),
        o = n.replace(/\r?\n/g, "\r\n");
      return (
        "mailto:" +
        r +
        "?subject=" +
        encodeURIComponent(t) +
        "&body=" +
        encodeURIComponent(o)
      );
    }
    function m(e) {
      return encodeURIComponent(e).replace(/%40/g, "@");
    }
    ((l.getEmailInviteContent = e),
      (l.buildGmailComposeUrl = c),
      (l.buildMailtoUrl = d));
  },
  226,
);
