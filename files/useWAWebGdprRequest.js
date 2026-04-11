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
    "react-compiler-runtime",
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
      var a = o("react-compiler-runtime").c(15),
        i;
      a[0] !== t
        ? ((i = o("WAWebGdprHookUtils").getGdprIq(
            o("WAWap").generateId(),
            t,
            "request",
          )),
          (a[0] = t),
          (a[1] = i))
        : (i = a[1]);
      var l = i,
        u = o("useWAWebSendIq").useSendIq(
          l,
          o("useWAWebGdprStatus").GdprStatusWapParser,
        ),
        d = u[0],
        m = u[1],
        p;
      a[2] !== t
        ? ((p = o("WAWebGdprHookUtils").getGdprIq(
            o("WAWap").generateId(),
            s(t),
            "delete",
          )),
          (a[2] = t),
          (a[3] = p))
        : (p = a[3]);
      var _ = p,
        f = o("useWAWebSendIq").useSendIq(
          _,
          o("useWAWebGdprStatus").GdprStatusWapParser,
        ),
        g = f[1],
        h;
      a[4] !== g || a[5] !== r
        ? ((h = r ? g : c), (a[4] = g), (a[5] = r), (a[6] = h))
        : (h = a[6]);
      var y = h,
        C;
      a[7] !== y || a[8] !== r || a[9] !== t || a[10] !== m
        ? ((C = function (i) {
            var a = i === void 0 ? !1 : i;
            if (!a && r)
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
              new (o("WAWebDyiReportRequestWamEvent").DyiReportRequestWamEvent)(
                {
                  dyiReportType:
                    t === o("WAWebGdprConstants").ReportType.Newsletters
                      ? o("WAWebWamEnumDyiReportTypeCode").DYI_REPORT_TYPE_CODE
                          .CHANNEL
                      : o("WAWebWamEnumDyiReportTypeCode").DYI_REPORT_TYPE_CODE
                          .ACCOUNT,
                  dyiTriggerType: o("WAWebWamEnumDyiTriggerTypeCode")
                    .DYI_TRIGGER_TYPE_CODE.ADHOC,
                },
              ).commit());
            var l = function () {
              return y().then(function () {
                return m();
              });
            };
            return a ? l() : m();
          }),
          (a[7] = y),
          (a[8] = r),
          (a[9] = t),
          (a[10] = m),
          (a[11] = C))
        : (C = a[11]);
      var b;
      return (
        a[12] !== d || a[13] !== C
          ? ((b = [d, C]), (a[12] = d), (a[13] = C), (a[14] = b))
          : (b = a[14]),
        b
      );
    }
    function c() {
      return (e || (e = n("Promise"))).resolve();
    }
    l.useGdprRequest = u;
  },
  98,
);
