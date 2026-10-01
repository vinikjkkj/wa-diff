__d(
  "WAWebBizBroadcastProContactRecipientUtils",
  [
    "WAWebBizBroadcastsRecipientUtils",
    "WAWebContactImportTemplateParsingUtils",
    "WAWebLidMigrationUtils",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      var n = [];
      for (var r of e) {
        var a = o("WAWebBizBroadcastsRecipientUtils").getContactByUserId(r);
        if (a != null) {
          var i = o("WAWebLidMigrationUtils").toPn(a.id);
          i != null &&
            n.push(babelHelpers.extends({}, s(a, t), { phone: i.user }));
        }
      }
      return n;
    }
    function s(e, t) {
      if (t) return { first_name: null, last_name: null };
      var n = o("WAWebBizBroadcastsRecipientUtils").getSavedRecipientName(e);
      if (n == null) return { first_name: null, last_name: null };
      var r = o("WAWebContactImportTemplateParsingUtils").splitFullName(n),
        a = r.firstName,
        i = r.lastName;
      return { first_name: a, last_name: i === "" ? null : i };
    }
    l.toAudienceRecipientsFromContactIds = e;
  },
  98,
);
