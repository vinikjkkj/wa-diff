__d(
  "WASmaxOutBugReportingReportBugRequest",
  [
    "WASmaxAttrs",
    "WASmaxChildren",
    "WASmaxJsx",
    "WASmaxOutBugReportingHackBaseIQSetRequestMixin",
    "WAWap",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = e.deviceLogHandleElementValue,
        n = o("WASmaxJsx").smax("device_log_handle", null, t);
      return n;
    }
    function s(e) {
      var t,
        n = e.mediaIv,
        r = e.mediaCipherKey,
        a = e.mediaType,
        i = e.mediaFileName,
        l = e.mediaElementValue,
        s = o("WASmaxJsx").smax(
          "media",
          {
            iv: (t = o("WAWap")).CUSTOM_STRING(n),
            cipherKey: t.CUSTOM_STRING(r),
            type: o("WASmaxAttrs").OPTIONAL(t.CUSTOM_STRING, a),
            fileName: o("WASmaxAttrs").OPTIONAL(t.CUSTOM_STRING, i),
          },
          l,
        );
      return s;
    }
    function u(e) {
      var t = e.titleElementValue,
        n = o("WASmaxJsx").smax("title", null, t);
      return n;
    }
    function c(e) {
      var t = e.categoryElementValue,
        n = o("WASmaxJsx").smax("category", null, t);
      return n;
    }
    function d(e) {
      var t = e.clientServerJoinKeyElementValue,
        n = o("WASmaxJsx").smax("client_server_join_key", null, t);
      return n;
    }
    function m(e) {
      var t = e.reproducibilityElementValue,
        n = o("WASmaxJsx").smax("reproducibility", null, t);
      return n;
    }
    function p(t) {
      var n,
        r = t.deviceLogHandleArgs,
        a = t.mediaArgs,
        i = t.titleArgs,
        l = t.categoryArgs,
        p = t.clientServerJoinKeyArgs,
        _ = t.reproducibilityArgs,
        f = t.descriptionElementValue,
        g = t.debugInformationJsonElementValue,
        h = o(
          "WASmaxOutBugReportingHackBaseIQSetRequestMixin",
        ).mergeHackBaseIQSetRequestMixin(
          o("WASmaxJsx").smax(
            "iq",
            { xmlns: "fb:thrift_iq", smax_id: o("WAWap").INT(105) },
            [
              o("WASmaxJsx").smax("description", null, f),
              o("WASmaxJsx").smax("debug_information_json", null, g),
              (n = o("WASmaxChildren")).OPTIONAL_CHILD(e, r),
            ].concat(n.REPEATED_CHILD(s, a, 0, 10), [
              n.OPTIONAL_CHILD(u, i),
              n.OPTIONAL_CHILD(c, l),
              n.OPTIONAL_CHILD(d, p),
              n.OPTIONAL_CHILD(m, _),
            ]),
          ),
          t,
        );
      return h;
    }
    ((l.makeReportBugRequestDeviceLogHandle = e),
      (l.makeReportBugRequestMedia = s),
      (l.makeReportBugRequestTitle = u),
      (l.makeReportBugRequestCategory = c),
      (l.makeReportBugRequestClientServerJoinKey = d),
      (l.makeReportBugRequestReproducibility = m),
      (l.makeReportBugRequest = p));
  },
  98,
);
