__d(
  "WAWebBizBroadcastProUnsubscribeTemplateUtils",
  ["fbt", "WAWebContactImportTemplateParsingUtils"],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e = s._(/*BTDS*/ "").toString(),
      u = "\uFEFF",
      c =
        "" +
        u +
        m(e) +
        "\n\n" +
        m(o("WAWebContactImportTemplateParsingUtils").FBT_PHONE) +
        "\n";
    function d() {
      return {
        download: "business_broadcast_unsubscribe_recipients_template.csv",
        href: "data:text/csv;charset=utf-8," + encodeURIComponent(c),
      };
    }
    function m(e) {
      return '"' + e.replace(/\"/g, '""') + '"';
    }
    l.getUnsubscribeRecipientsTemplateLinkProps = d;
  },
  226,
);
