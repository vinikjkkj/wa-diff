__d(
  "WAWebFilenameManager",
  [
    "WAUpperFirst",
    "WAWeb-moment",
    "WAWebClock",
    "WAWebMimeTypes",
    "WAWebMsgType",
    "WAWebVcardUtils",
    "fbs",
  ],
  function (t, n, r, o, a, i, l) {
    var e = /[\x00-\x1F\x7F\u202A-\u202E\u2066-\u2069<>:\"\/\\|?*]/g;
    function s(t) {
      return t.replace(e, "");
    }
    function u(e) {
      var t;
      return (
        e.type === o("WAWebMsgType").MSG_TYPE.DOCUMENT
          ? ((t =
              s((e.filename || "").trim()) ||
              s((e.caption || "").trim()) ||
              r("fbs")._(/*BTDS*/ "Untitled").toString()),
            (t = d(t, e)))
          : e.type === o("WAWebMsgType").MSG_TYPE.VCARD
            ? ((t = (e.vcardFormattedName || "").trim() || m(e)), (t = d(t, e)))
            : e.type === o("WAWebMsgType").MSG_TYPE.MULTI_VCARD
              ? ((t = e.vcardList
                  ? o("WAWebVcardUtils").getNameString(e.vcardList).toString()
                  : m(e)),
                (t = d(t, e)))
              : ((t = m(e)), (t = d(t, e))),
        t
      );
    }
    var c = 255;
    function d(e, t) {
      var n = e,
        r =
          t.type === o("WAWebMsgType").MSG_TYPE.VCARD ||
          t.type === o("WAWebMsgType").MSG_TYPE.MULTI_VCARD
            ? "text/vcard"
            : t.mimetype,
        a = r != null ? o("WAWebMimeTypes").getExtension(r) : "";
      if (a !== "" && !n.toLowerCase().endsWith(a)) {
        var i = n.length + a.length;
        if (i > c) {
          var l = c - a.length;
          n = n.substring(0, l);
        }
        n += a;
      }
      return n;
    }
    function m(e) {
      var t = r("WAWeb-moment").unix(e.t).locale("en"),
        n =
          t.format("YYYY-MM-DD") +
          " at " +
          t.format(
            o("WAWebClock").Clock.getIs24Hour() ? "HH.mm.ss" : "h.mm.ss A",
          );
      return "WhatsApp " + r("WAUpperFirst")(e.type) + " " + n;
    }
    l.getDefaultName = u;
  },
  226,
);
