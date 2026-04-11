__d(
  "WAWebQueryCtwaContextJob",
  [
    "WABase64",
    "WADeprecatedSendIq",
    "WADeprecatedWapParser",
    "WALogger",
    "WAWap",
    "WAWapDeprecatedSmaxID",
    "WAWebBackendErrors",
    "WAWebCtwaAGMUtils",
    "WAWebProtobufsE2E.pb",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime",
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    var e;
    function s(t) {
      var n = t && t.maybeAttrString("code"),
        r = t && t.maybeAttrString("text");
      o("WALogger").WARN(
        e ||
          (e = babelHelpers.taggedTemplateLiteralLoose([
            "getCtwaContext error: code ",
            " text ",
            "",
          ])),
        n,
        r,
      );
    }
    var u = new (r("WADeprecatedWapParser"))("ctwaContext", function (e) {
      (e.assertTag("iq"), e.assertFromServer());
      var t = e.child("context");
      if (e.hasChild("error"))
        throw (s(e.child("error")), r("err")("invalid response"));
      var n = {
        sourceUrl: t.child("source").child("url").contentString(),
        sourceId: t.child("source").child("id").contentString(),
        sourceType: t.child("source").child("type").contentString(),
      };
      (t.hasChild("headline") &&
        (n.title = t.child("headline").contentString()),
        t.hasChild("body") && (n.description = t.child("body").contentString()),
        t.hasChild("thumbnail") &&
          (t.child("thumbnail").hasChild("url") &&
            (n.thumbnailUrl = t
              .child("thumbnail")
              .child("url")
              .contentString()),
          t.child("thumbnail").hasChild("bytes") &&
            (n.thumbnail = o("WABase64").encodeB64(
              t.child("thumbnail").child("bytes").contentBytes(),
            )),
          t.hasChild("video")
            ? ((n.mediaUrl = t.child("video").child("url").contentString()),
              (n.mediaType = o(
                "WAWebProtobufsE2E.pb",
              ).ContextInfo$ExternalAdReplyInfo$MediaType.VIDEO))
            : (n.mediaType = o(
                "WAWebProtobufsE2E.pb",
              ).ContextInfo$ExternalAdReplyInfo$MediaType.IMAGE)));
      var a = t.maybeChild("sourceApp");
      a != null && (n.sourceApp = a.contentString());
      var i = o("WAWebCtwaAGMUtils").isWamoAGMIntegrationEnabled(n.sourceApp);
      if (i) {
        (t.hasChild("greetingMessageBody") &&
          (n.greetingMessageBody = t
            .child("greetingMessageBody")
            .contentString()),
          t.hasChild("automatedGreetingMessageShown") &&
            (n.automatedGreetingMessageShown =
              t.child("automatedGreetingMessageShown").contentString() ===
              "true"));
        var l = t.maybeChild("ctaPayload");
        l != null && (n.ctaPayload = l.contentString());
        var u = t.maybeChild("originalImageUrl");
        u != null && (n.originalImageUrl = u.contentString());
      }
      return n;
    });
    function c(e, t, n) {
      return d.apply(this, arguments);
    }
    function d() {
      return (
        (d = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
          var a,
            i = o("WAWebWidFactory").createWid(e).toString({ legacy: !0 }),
            l = (a = o("WAWap")).wap(
              "iq",
              {
                xmlns: "fb:thrift_iq",
                id: a.generateId(),
                type: "get",
                to: a.S_WHATSAPP_NET,
                smax_id: a.SMAX_ID(r("WAWapDeprecatedSmaxID").CtwaGetContext),
              },
              a.wap("account_number", null, i),
              a.wap("code", null, t),
              a.wap("expected_source_url", null, n),
            ),
            s = yield o("WADeprecatedSendIq").deprecatedSendIq(l, u);
          if (s.success) return s.result;
          throw new (o("WAWebBackendErrors").ServerStatusCodeError)(
            s.errorCode,
          );
        })),
        d.apply(this, arguments)
      );
    }
    l.default = c;
  },
  98,
);
