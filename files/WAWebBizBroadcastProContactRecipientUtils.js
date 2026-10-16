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
          var i = u(a);
          i != null &&
            n.push(babelHelpers.extends({}, c(a, t), { phone: i.user }));
        }
      }
      return n;
    }
    function s(e) {
      return u(e) != null;
    }
    function u(e) {
      return o("WAWebLidMigrationUtils").toPn(e.id);
    }
    function c(e, t) {
      if (t) return { first_name: null, last_name: null };
      var n = o("WAWebBizBroadcastsRecipientUtils").getSavedRecipientName(e);
      if (n == null) return { first_name: null, last_name: null };
      var r = o("WAWebContactImportTemplateParsingUtils").splitFullName(n),
        a = r.firstName,
        i = r.lastName;
      return { first_name: a, last_name: i === "" ? null : i };
    }
    ((l.toAudienceRecipientsFromContactIds = e), (l.hasRecipientPhone = s));
  },
  98,
);
