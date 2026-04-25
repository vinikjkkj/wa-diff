__d(
  "WAWebBizBroadcastsTemplateParsingUtils",
  [
    "fbt",
    "WAWebBizBroadcastsRecipientUtils",
    "WAWebContactImportTemplateParsingUtils",
  ],
  function (t, n, r, o, a, i, l, s) {
    function e() {
      var e = o("WAWebBizBroadcastsRecipientUtils").getRecipientLimit(),
        t = s
          ._(
            /*BTDS*/ "Enter each recipient's full name and phone number on a separate row. You can add up to {recipient-limit} recipients to an audience.",
            [s._param("recipient-limit", e)],
          )
          .toString(),
        n = s._(/*BTDS*/ "Add a name here").toString(),
        r = s._(/*BTDS*/ "Add a phone number here").toString();
      return (
        t +
        "\n\n" +
        o("WAWebContactImportTemplateParsingUtils").FBT_NAME +
        "," +
        o("WAWebContactImportTemplateParsingUtils").FBT_PHONE +
        "\n\n" +
        n +
        "," +
        r
      );
    }
    function u() {
      return {
        download: "business_broadcast_audience_template.csv",
        href: "data:application/csv," + encodeURI(e()),
      };
    }
    function c() {
      var e = u();
      return { download: e.download, href: e.href };
    }
    ((l.getTemplateLinkProps = u), (l.getTemplateLinkPropsWithURL = c));
  },
  226,
);
