__d(
  "useWAWebGdprRequest",
  [
    "Promise",
    "WAWap",
    "WAWebChannelDyiWamEvent",
    "WAWebDyiReportRequestWamEvent",
    "WAWebGdprConstants",
    "WAWebGdprErrors",
    "WAWebGdprHookUtils",
    "WAWebWamEnumChannelDyiEventType",
    "WAWebWamEnumDyiReportTypeCode",
    "WAWebWamEnumDyiTriggerTypeCode",
    "useWAWebGdprStatus",
    "useWAWebSendIq",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = function (t) {
        switch (t) {
          case o("WAWebGdprConstants").ReportType.Account:
            return o("WAWebGdprConstants").ReportType.Newsletters;
          case o("WAWebGdprConstants").ReportType.Newsletters:
            return o("WAWebGdprConstants").ReportType.Account;
        }
      };
    function u(t, r) {
      var a = o("WAWebGdprHookUtils").getGdprIq(
          o("WAWap").generateId(),
          t,
          "request",
        ),
        i = o("useWAWebSendIq").useSendIq(
          a,
          o("useWAWebGdprStatus").GdprStatusWapParser,
        ),
        l = i[0],
        u = i[1],
        c = o("WAWebGdprHookUtils").getGdprIq(
          o("WAWap").generateId(),
          s(t),
          "delete",
        ),
        d = o("useWAWebSendIq").useSendIq(
          c,
          o("useWAWebGdprStatus").GdprStatusWapParser,
        ),
        m = d[1],
        p = r
          ? m
          : function () {
              return (e || (e = n("Promise"))).resolve();
            };
      return [
        l,
        function (a) {
          if ((a === void 0 && (a = !1), !a && r))
            return (e || (e = n("Promise"))).reject(
              new (o("WAWebGdprErrors").PendingGdprRequestsError)(
                "GDPR request already in progress",
              ),
            );
          (t === o("WAWebGdprConstants").ReportType.Newsletters &&
            new (o("WAWebChannelDyiWamEvent").ChannelDyiWamEvent)({
              channelDyiEventType: o("WAWebWamEnumChannelDyiEventType")
                .CHANNEL_DYI_EVENT_TYPE.CHANNEL_REPORT_REQUEST,
            }).commit(),
            new (o("WAWebDyiReportRequestWamEvent").DyiReportRequestWamEvent)({
              dyiReportType:
                t === o("WAWebGdprConstants").ReportType.Newsletters
                  ? o("WAWebWamEnumDyiReportTypeCode").DYI_REPORT_TYPE_CODE
                      .CHANNEL
                  : o("WAWebWamEnumDyiReportTypeCode").DYI_REPORT_TYPE_CODE
                      .ACCOUNT,
              dyiTriggerType: o("WAWebWamEnumDyiTriggerTypeCode")
                .DYI_TRIGGER_TYPE_CODE.ADHOC,
            }).commit());
          var i = function () {
            return p().then(function () {
              return u();
            });
          };
          return a ? i() : u();
        },
      ];
    }
    l.useGdprRequest = u;
  },
  98,
);
