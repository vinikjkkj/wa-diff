__d(
  "WhatsAppPhoneNumberMentionsSourceUtils",
  ["fbt", "SearchableEntry"],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e = s._(/*BTDS*/ "Add link to WhatsApp");
    function u(t) {
      var n = [];
      return (
        t.forEach(function (t) {
          var o,
            a = (o = t.phone_number_formated) != null ? o : t.phone_number;
          n.push(
            new (r("SearchableEntry"))({
              keywordString: t.phone_number,
              subtitle: e,
              title: a,
              type: "PageWhatsAppNumber",
              uniqueID: t.id,
            }),
          );
        }),
        n
      );
    }
    l.getSearchableWhatsAppPhoneNumbersList = u;
  },
  226,
);
