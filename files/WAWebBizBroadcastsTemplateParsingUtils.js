__d(
  "WAWebBizBroadcastsTemplateParsingUtils",
  [
    "fbt",
    "WAWebBizBroadcastsRecipientUtils",
    "WAWebContactImportTemplateParsingUtils",
  ],
  function (t, n, r, o, a, i, l, s) {
    function e(e) {
      var t = s._(/*BTDS*/ "Add a phone number here").toString();
      if (e)
        return (
          c() +
          "\n\n" +
          o("WAWebContactImportTemplateParsingUtils").FBT_PHONE +
          "\n\n" +
          t
        );
      var n = s._(/*BTDS*/ "Add a name here").toString();
      return (
        u() +
        "\n\n" +
        o("WAWebContactImportTemplateParsingUtils").FBT_NAME +
        "," +
        o("WAWebContactImportTemplateParsingUtils").FBT_PHONE +
        "\n\n" +
        n +
        "," +
        t
      );
    }
    function u() {
      return s
        ._(
          /*BTDS*/ "Enter each recipient's full name and phone number on a separate row. You can add up to {recipient-limit} recipients to an audience.",
          [
            s._param(
              "recipient-limit",
              o("WAWebBizBroadcastsRecipientUtils").getRecipientLimit(),
            ),
          ],
        )
        .toString();
    }
    function c() {
      return s
        ._(
          /*BTDS*/ "Enter each recipient's phone number on a separate row. You can add up to {recipient-limit} recipients to an audience.",
          [
            s._param(
              "recipient-limit",
              o("WAWebBizBroadcastsRecipientUtils").getRecipientLimit(),
            ),
          ],
        )
        .toString();
    }
    function d(t) {
      return (
        t === void 0 && (t = !1),
        {
          download: t
            ? "business_broadcast_audience_template_phone_only.csv"
            : "business_broadcast_audience_template.csv",
          href: "data:application/csv," + encodeURI(e(t)),
        }
      );
    }
    function m(e) {
      e === void 0 && (e = !1);
      var t = d(e);
      return { download: t.download, href: t.href };
    }
    ((l.getTemplateLinkProps = d), (l.getTemplateLinkPropsWithURL = m));
  },
  226,
);
