__d(
  "WAWebBizPrivacyUtils",
  ["fbt", "WAWebProtobufsWeb.pb"],
  function (t, n, r, o, a, i, l, s) {
    function e(e) {
      switch (e) {
        case o("WAWebProtobufsWeb.pb").WebMessageInfo$BizPrivacyStatus.E2EE:
          return s._(
            /*BTDS*/ "This message was secured with end-to-end encryption.",
          );
        case o("WAWebProtobufsWeb.pb").WebMessageInfo$BizPrivacyStatus.BSP:
          return s._(
            /*BTDS*/ "This business worked with other companies to manage this message.",
          );
        case o("WAWebProtobufsWeb.pb").WebMessageInfo$BizPrivacyStatus
          .BSP_AND_FB:
        case o("WAWebProtobufsWeb.pb").WebMessageInfo$BizPrivacyStatus.FB:
          return s._(
            /*BTDS*/ "This business used a secure service from Meta to manage this message.",
          );
      }
    }
    l.getBizPrivacyInfoString = e;
  },
  226,
);
