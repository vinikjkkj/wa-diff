__d(
  "adsMessengerDataModelRemoveQuickReply",
  [
    "adsMessengerDataModelClone",
    "adsMessengerDataModelGetQRPath",
    "adsMessengerDataModelGetQuickReplies",
    "deleteByPath",
    "setByPath",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      var n = r("adsMessengerDataModelGetQuickReplies")(e) || [];
      (n && n.splice(t, 1),
        n.filter(function (e) {
          return !!e;
        }));
      var o = r("adsMessengerDataModelGetQRPath")(e);
      if (!o) return e;
      var a = r("adsMessengerDataModelClone")(e);
      return (n.length ? r("setByPath")(a, o, n) : r("deleteByPath")(a, o), a);
    }
    l.default = e;
  },
  98,
);
