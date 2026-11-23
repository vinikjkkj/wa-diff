__d(
  "WAWebBizPrivacyUtils",
  ["fbt", "WAWebProtobufsWeb.pb"],
  function (t, n, r, o, a, i, l, s) {
    function e(e) {
      switch (e) {
        case o("WAWebProtobufsWeb.pb").WebMessageInfo$BizPrivacyStatus.E2EE:
          return s._(/*BTDS*/ "");
        case o("WAWebProtobufsWeb.pb").WebMessageInfo$BizPrivacyStatus.BSP:
          return s._(/*BTDS*/ "");
        case o("WAWebProtobufsWeb.pb").WebMessageInfo$BizPrivacyStatus
          .BSP_AND_FB:
        case o("WAWebProtobufsWeb.pb").WebMessageInfo$BizPrivacyStatus.FB:
          return s._(/*BTDS*/ "");
      }
    }
    l.getBizPrivacyInfoString = e;
  },
  226,
);
