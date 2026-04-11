__d(
  "WAWebUsyncLid",
  ["WAWap", "WAWebCommsWapMd"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      e.assertTag("lid");
      var t = e.maybeChild("error");
      return t
        ? { errorCode: t.attrInt("code"), errorText: t.attrString("text") }
        : e.maybeAttrLidUserJid("val");
    }
    var s = (function () {
      function e() {}
      var t = e.prototype;
      return (
        (t.getName = function () {
          return "lid";
        }),
        (t.getQueryElement = function () {
          return o("WAWap").wap("lid", null);
        }),
        (t.getUserElement = function (t) {
          var e = t.getLid();
          return e
            ? o("WAWap").wap("lid", {
                jid: e
                  ? o("WAWebCommsWapMd").USER_JID(e)
                  : o("WAWap").DROP_ATTR,
              })
            : null;
        }),
        e
      );
    })();
    ((l.lidParser = e), (l.USyncLidProtocol = s));
  },
  98,
);
